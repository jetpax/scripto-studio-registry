"""
OBD2 Client Implementation
===========================

OBD2 protocol client for reading vehicle data over CAN bus.
Supports ISO-TP (ISO 15765-2) for multi-frame messages.

Based on OpenInverter's canobd2.cpp implementation.
"""

import struct
import time


class OBD2TimeoutError(Exception):
    """Raised when OBD2 request times out"""
    pass


class OBD2AbortError(Exception):
    """Raised when device aborts OBD2 transfer"""
    pass


class OBD2Client:
    """
    OBD2 client for reading vehicle parameters over CAN bus.
    
    Usage:
        client = OBD2Client(can_device, tx_id=0x7DF, rx_id=0x7E8, timeout=1.0)
        value = client.read_parameter(mode=0x2A, pid=0x07D6)
    """
    
    def __init__(self, can_device, tx_id=0x7DF, rx_id=0x7E8, timeout=1.0):
        """
        Initialize OBD2 client.
        
        Args:
            can_device: CAN device instance (from CAN module)
            tx_id: CAN ID for sending requests (default: 0x7DF broadcast)
            rx_id: CAN ID for receiving responses (default: 0x7E8)
            timeout: Response timeout in seconds
        """
        self.can = can_device
        self.tx_id = tx_id
        self.rx_id = rx_id
        self.timeout = timeout
    
    def read_parameter(self, mode, pid):
        """
        Read a parameter using OBD2 protocol.
        
        Args:
            mode: OBD2 mode (e.g., 0x2A for OpenInverter custom mode)
            pid: Parameter ID (8-bit or 16-bit depending on mode)
        
        Returns:
            Response data bytes (list)
        
        Raises:
            OBD2TimeoutError: If no response within timeout
            OBD2AbortError: If device aborts the transfer
        """
        # Clear any pending messages before sending
        while self.can.any():
            self.can.recv()
        
        # Build OBD2 request frame
        # For Mode 0x2A with 16-bit PID (OpenInverter):
        # Frame: [mode, pid_high, pid_low, 0, 0, 0, 0, 0]
        if pid > 0xFF:
            # 16-bit PID
            request = [mode, (pid >> 8) & 0xFF, pid & 0xFF, 0, 0, 0, 0, 0]
        else:
            # 8-bit PID
            request = [mode, pid, 0, 0, 0, 0, 0, 0]
        
        # Send OBD2 request
        self.can.send(request, self.tx_id)
        
        # Wait for response
        try:
            start_time = time.ticks_ms()
            timeout_ms = int(self.timeout * 1000)
        except AttributeError:
            start_time = time.time()
            timeout_ms = None
        
        response_data = []
        
        while True:
            if self.can.any():
                response = self.can.recv()
                can_id = response[0]
                payload = response[3]  # Payload bytes
                
                # Convert payload to bytes if it's a list
                if isinstance(payload, list):
                    data = bytes(payload)
                else:
                    data = payload
                
                # Check if it's our response
                if can_id == self.rx_id and len(data) >= 1:
                    # Determine response format:
                    # OpenInverter: [length, mode(0x6A), pid_high, pid_low, val_bytes...]
                    # Standard OBD2: [mode(0x41+), pid, val_bytes...]
                    
                    # Check if first byte is length (OpenInverter format)
                    if data[0] <= 8 and len(data) > 1:
                        # OpenInverter format: [length, mode, ...]
                        resp_length = data[0]
                        resp_mode = data[1]
                        data_start = 2
                    else:
                        # Standard OBD2 format: [mode, ...]
                        resp_mode = data[0]
                        data_start = 1
                    
                    # Check for error response (0x7F indicates error)
                    if resp_mode == 0x7F:
                        # Error response: [0x7F, mode, error_code] or [length, 0x7F, mode, error_code]
                        if len(data) >= (data_start + 2):
                            error_code = data[data_start + 1]
                            raise OBD2AbortError(f"OBD2 error code: 0x{error_code:02X}")
                    
                    # Check for valid response mode
                    # Mode 0x6A is response to Mode 0x2A (OpenInverter)
                    # Mode 0x41 is response to Mode 0x01 (standard OBD2)
                    expected_response = mode + 0x40
                    if resp_mode == expected_response or resp_mode == 0x6A:
                        # Extract response data (skip length/mode bytes)
                        response_data = list(data[data_start:])
                        return response_data
            
            # Check timeout
            if timeout_ms is not None:
                elapsed = time.ticks_diff(time.ticks_ms(), start_time)
                if elapsed >= timeout_ms:
                    raise OBD2TimeoutError(f"OBD2 read timeout (mode=0x{mode:02X}, pid=0x{pid:04X})")
                time.sleep_ms(10)
            else:
                if time.time() - start_time > self.timeout:
                    raise OBD2TimeoutError(f"OBD2 read timeout (mode=0x{mode:02X}, pid=0x{pid:04X})")
                try:
                    time.sleep_ms(10)
                except AttributeError:
                    time.sleep(0.01)
        
        return response_data
