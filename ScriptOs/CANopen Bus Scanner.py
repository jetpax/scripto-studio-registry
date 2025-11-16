
# === START_CONFIG_PARAMETERS ===

dict(

    timeout = 0,    # No interrupt button during scan

    info    = dict(
        # ----------------------------------------------------------------------
        name        = 'CANopen Bus Scanner',
        version     = [1, 0, 0],
        category    = 'CAN/TWAI',
        description = 'Scan CANopen network for devices by sending SDO (Service Data Object) requests. This tool discovers CANopen nodes on the bus by attempting to read the device type (object 0x1000) from each possible node ID. Useful for identifying OpenInverter devices and other CANopen-compatible equipment.',
        author      = 'Scriptomatic Team',
        mail        = 'support@scriptomatic.io',
        www         = 'https://github.com/straga/micropython-esp32-twai'
        # ----------------------------------------------------------------------
    ),
    
    args    = dict(
        # ----------------------------------------------------------------------
        tx_pin         = dict( label    = 'TX Pin (GPIO):',
                              type     = int,
                              value    = 5 ),
        # ----------------------------------------------------------------------
        rx_pin         = dict( label    = 'RX Pin (GPIO):',
                              type     = int,
                              value    = 4 ),
        # ----------------------------------------------------------------------
        bitrate        = dict( label    = 'Bitrate (bps):',
                              type     = dict,
                              items    = dict(
                                  b125k  = "125000 - 125 kbps",
                                  b250k  = "250000 - 250 kbps",
                                  b500k  = "500000 - 500 kbps (CANopen standard)",
                                  b1000k = "1000000 - 1 Mbps"
                              ),
                              value    = 'b500k' ),
        # ----------------------------------------------------------------------
        can_mode       = dict( label    = 'CAN Mode:',
                              type     = dict,
                              items    = dict( 
                                  normal   = "NORMAL - Requires transceiver & termination",
                                  silent   = "SILENT - No ACK required (for testing)"
                              ),
                              value    = 'normal' ),
        # ----------------------------------------------------------------------
        scan_range     = dict( label    = 'Scan Range:',
                              type     = dict,
                              items    = dict(
                                  quick = "Quick scan (nodes 1-10)",
                                  full  = "Full scan (nodes 1-127)"
                              ),
                              value    = 'quick' ),
        # ----------------------------------------------------------------------
        node_start     = dict( label    = 'Start Node ID:',
                              type     = int,
                              value    = 1 ),
        # ----------------------------------------------------------------------
        node_end       = dict( label    = 'End Node ID:',
                              type     = int,
                              value    = 127 ),
        # ----------------------------------------------------------------------
        timeout_ms     = dict( label    = 'Timeout per node (ms):',
                              type     = int,
                              value    = 100 ),
        # ----------------------------------------------------------------------
        rate_limit_ms  = dict( label    = 'Delay between requests (ms):',
                              type     = int,
                              value    = 10 ),
        # ----------------------------------------------------------------------
        wait_time      = dict( label    = 'Final wait time (seconds):',
                              type     = float,
                              value    = 0.5 )
        # ----------------------------------------------------------------------
    )

)

# === END_CONFIG_PARAMETERS ===


import CAN
import time
import struct

termWidth = 50

print("=" * termWidth)
print("CANopen Bus Scanner")
print("=" * termWidth)

# Map bitrate IDs to actual values
bitrate_map = {
    'b125k': 125000,
    'b250k': 250000,
    'b500k': 500000,
    'b1000k': 1000000
}

# Map mode IDs to CAN constants
mode_map = {
    'normal': CAN.NORMAL,
    'silent': CAN.SILENT
}

# Get configuration values
selected_bitrate = bitrate_map[args.bitrate]
selected_mode = mode_map[args.can_mode]
mode_name = args.can_mode.upper()

# Determine scan range
if args.scan_range == 'quick':
    start_node = 1
    end_node = 10
    print(f"\nQuick scan mode: nodes {start_node}-{end_node}")
else:
    start_node = args.node_start
    end_node = args.node_end
    print(f"\nCustom scan mode: nodes {start_node}-{end_node}")

print(f"TX Pin: GPIO{args.tx_pin}")
print(f"RX Pin: GPIO{args.rx_pin}")
print(f"Bitrate: {selected_bitrate} bps")
print(f"Mode: {mode_name}")
print(f"Timeout: {args.timeout_ms} ms per node")
print(f"Rate limit: {args.rate_limit_ms} ms between requests")
print(f"Final wait: {args.wait_time} seconds")

if args.can_mode == 'silent':
    print("  Note: SILENT mode - no acknowledgment required (good for testing)")
elif args.can_mode == 'normal':
    print("  Note: NORMAL mode - requires CAN transceiver and termination")

# Initialize CAN
print("\nInitializing CAN...")
try:
    can = CAN(
        0,                      # CAN bus 0
        extframe=False,         # Standard 11-bit IDs
        tx=args.tx_pin,         # TX pin from config
        rx=args.rx_pin,         # RX pin from config
        mode=selected_mode,     # Mode from config
        bitrate=selected_bitrate,
        auto_restart=False
    )
    print("✓ CAN initialized\n")
except Exception as e:
    print(f"❌ Failed to initialize CAN: {e}")
    print("\nTroubleshooting:")
    print("  • Check TX/RX pin configuration")
    print("  • Verify CAN transceiver is connected")
    print("  • Ensure bitrate matches other devices on bus")
    raise

# SDO Protocol Constants
SDO_CMD_UPLOAD_INITIATE = 0x40  # Read request
SDO_TX_BASE = 0x600  # Client TX COB-ID base
SDO_RX_BASE = 0x580  # Client RX COB-ID base

# Object to read: 0x1000 (Device Type) - standard CANopen object
SDO_INDEX_DEVICE_TYPE = 0x1000
SDO_SUBINDEX = 0x00

# Build SDO read request for device type (0x1000, subindex 0)
# Format: [command, index_low, index_high, subindex, 0, 0, 0, 0]
sdo_request = [
    SDO_CMD_UPLOAD_INITIATE,
    SDO_INDEX_DEVICE_TYPE & 0xFF,           # Index low byte
    (SDO_INDEX_DEVICE_TYPE >> 8) & 0xFF,    # Index high byte
    SDO_SUBINDEX,
    0x00, 0x00, 0x00, 0x00
]

print("Starting scan...")
print("-" * termWidth)

# Clear any pending messages
while can.any():
    can.recv()

# Collect responses as we go
found_nodes = []
response_count = 0

def process_responses():
    """Process any available CAN messages and add found nodes to found_nodes list."""
    global response_count
    while can.any():
        try:
            msg_id, extended, rtr, payload = can.recv()
            
            # Check if this is an SDO response (0x580 + node_id)
            if msg_id >= SDO_RX_BASE and msg_id < SDO_RX_BASE + 128:
                node_id = msg_id - SDO_RX_BASE
                
                # Verify it's a valid response
                if len(payload) >= 8:
                    # Convert payload to bytes if it's a list
                    if isinstance(payload, list):
                        payload_bytes = bytes(payload)
                    else:
                        payload_bytes = payload
                    
                    cmd = payload_bytes[0]
                    # Check if it's a valid read response (0x4x where x indicates data size)
                    if (cmd & 0xE0) == 0x40:  # Upload response
                        # Extract device type (bytes 4-7, little-endian 32-bit)
                        try:
                            device_type = struct.unpack('<I', payload_bytes[4:8])[0]
                            
                            # Check if this node was already found
                            node_found = False
                            for found in found_nodes:
                                if found['nodeId'] == node_id:
                                    node_found = True
                                    break
                            
                            if not node_found:
                                found_nodes.append({
                                    'nodeId': node_id,
                                    'deviceType': device_type,
                                    'deviceTypeHex': f"0x{device_type:08X}"
                                })
                                response_count += 1
                        except:
                            pass  # Ignore malformed responses
        except:
            pass  # Ignore errors processing individual messages

# Send SDO requests to all nodes in range
total_nodes = end_node - start_node + 1
print(f"Sending SDO requests to nodes {start_node}-{end_node}...")

send_errors = 0
for node_id in range(start_node, end_node + 1):
    tx_cobid = SDO_TX_BASE + node_id
    try:
        # Use timeout to prevent hanging if bus goes BUS_OFF
        can.send(sdo_request, tx_cobid, timeout=100)
    except Exception as e:
        send_errors += 1
        # If we get multiple send errors, bus might be BUS_OFF
        if send_errors > 3:
            print(f"\n⚠ Warning: Multiple send errors detected (bus may be BUS_OFF)")
            print(f"   Error: {e}")
            print(f"   Continuing scan but some messages may not be sent...")
            # Try to continue with a small delay
            time.sleep_ms(50)
            # Reset error count to allow retry
            if send_errors > 10:
                print(f"\n❌ Too many send errors. Stopping scan.")
                print(f"   Possible causes:")
                print(f"   • CAN transceiver not connected or powered")
                print(f"   • Bus termination missing (need 120Ω at both ends)")
                print(f"   • Bus in BUS_OFF state")
                print(f"   • Try using SILENT mode if no transceiver is connected")
                break
    
    # Process any responses that came in while sending
    process_responses()
    
    if args.rate_limit_ms > 0:
        time.sleep_ms(args.rate_limit_ms)

# Wait for remaining responses, processing incrementally
print(f"\nWaiting {args.wait_time} seconds for responses...")
wait_time_ms = int(args.wait_time * 1000)
chunk_ms = 50  # Process messages every 50ms
elapsed_ms = 0

while elapsed_ms < wait_time_ms:
    process_responses()
    sleep_ms = min(chunk_ms, wait_time_ms - elapsed_ms)
    if sleep_ms > 0:
        time.sleep_ms(sleep_ms)
    elapsed_ms += chunk_ms

# Final pass to collect any remaining messages
process_responses()

# Sort by node ID
found_nodes.sort(key=lambda x: x['nodeId'])

# Display results
print("\n" + "=" * termWidth)
print("Scan Results")
print("=" * termWidth)

if found_nodes:
    print(f"\n✓ Found {len(found_nodes)} device(s):\n")
    print(f"{'Node ID':<10} {'Device Type (hex)':<20} {'Device Type (dec)':<20}")
    print("-" * termWidth)
    
    for node in found_nodes:
        print(f"{node['nodeId']:<10} {node['deviceTypeHex']:<20} {node['deviceType']:<20}")
    
    print("\n" + "-" * termWidth)
    print(f"Total: {len(found_nodes)} device(s) found")
else:
    print("\n⚠ No devices found on the CAN bus")
    print("\nTroubleshooting:")
    print("  • Verify CAN transceiver is connected and powered")
    print("  • Check CANH/CANL wiring")
    print("  • Ensure 120Ω termination resistors are present")
    print("  • Verify bitrate matches other devices (typically 500kbps)")
    print("  • Try increasing timeout or wait time")
    print("  • Check that devices are powered and operational")
    print("  • For OpenInverter: ensure it's configured for CANopen mode")

print("\n" + "=" * termWidth)
print("Scan complete!")
print("=" * termWidth)

