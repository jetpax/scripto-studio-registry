def scanCanBus(args=None):
    """
    Scan CAN bus for OpenInverter devices.
    
    Args (dict, optional):
        node_ids: List of node IDs to scan (default: 1-10 for quick scan, or 1-127 for full)
        timeout: Timeout per node in milliseconds (default: 100ms)
        quick: If True, only scan common node IDs 1-10 (default: True)
        tx_pin: CAN TX pin (default: 5)
        rx_pin: CAN RX pin (default: 4)
        bitrate: CAN bitrate (default: 500000)
    
    Returns list of detected nodes with their SDO responses.
    """
    global can_dev
    
    if not CAN_AVAILABLE:
        _send_error("CAN module not available", 'CAN-SCAN-ERROR')
        return
        
    # Initialize CAN if not already initialized
    if can_dev is None:
        if args is None:
            args = {}
        
        tx_pin = args.get('tx_pin', 5)
        rx_pin = args.get('rx_pin', 4)
        bitrate = args.get('bitrate', 500000)
        
        try:
            can_dev = CAN(0, extframe=False, tx=tx_pin, rx=rx_pin, mode=CAN.NORMAL, bitrate=bitrate, auto_restart=False)
        except Exception as e:
            _send_error(f"Failed to initialize CAN: {e}", 'CAN-SCAN-ERROR')
            return
    
    # Default to quick scan (nodes 1-10) for better UX
    quick_scan = args.get('quick', True) if args else True
    default_range = range(1, 11) if quick_scan else range(1, 128)
    node_ids = args.get('node_ids', list(default_range)) if args else list(default_range)
    timeout = args.get('timeout', 0.1) if args else 0.1
    
    total_nodes = len(node_ids)
    found_nodes = []
    
    for index, node_id in enumerate(node_ids):
        try:
            # Create temporary SDO client for this node
            temp_sdo = SDOClient(can_dev, node_id=node_id, timeout=timeout)
        
            # Try to read a standard parameter (e.g., index 0x1000 - device type)
            # This is a CANopen standard object that should exist
            try:
                device_type = temp_sdo.read(0x1000, 0)
                
                # Try to read serial number too
                serial_number = None
                try:
                    # Try reading from OpenInverter serial number location
                    serial_raw = temp_sdo.read(0x5000, 0)
                    serial_number = f"{serial_raw:08X}"
                except:
                    pass
                
                # Node responded, add to list
                found_nodes.append({
                    'nodeId': node_id,
                    'serialNumber': serial_number,
                    'deviceType': device_type,
                    'responding': True
                })
                
            except (SDOTimeoutError, SDOAbortError):
                # Node didn't respond or doesn't have this object
                pass
                
        except Exception as e:
            pass  # Ignore errors for individual nodes
    
    # Send final result
    scan_type = "quick" if quick_scan else "full"
    _send_response('CAN-SCAN-RESULT', {
        'devices': found_nodes,
        'scanned': total_nodes,
        'scanType': scan_type
    })

