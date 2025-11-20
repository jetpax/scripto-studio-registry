"""
OVMS Vehicle Framework
=======================

Base framework for OVMS vehicle modules (analogous to vehicle.h/vehicle.cpp in OVMS v3).

This module provides:
- Protocol type definitions
- Common parsing functions
- Vehicle discovery and registration system

Vehicle-specific configurations should be in separate files in the vehicles/ subdirectory
(e.g., vehicles/zombie_vcu/zombie_vcu.py, vehicles/obdii/obdii.py) to match OVMS v3's modular structure.

Each vehicle module should define:
- VEHICLE_CONFIG dict with protocol, CAN IDs, metrics, etc.
- PARSE_FUNCTIONS dict with custom parsing functions (if needed)

Based on OVMS v3 vehicle framework (vehicle.h, vehicle.cpp, etc.)
"""

# Vehicle protocol types
PROTOCOL_OBD2 = 'obd2'
PROTOCOL_CANOPEN_SDO = 'canopen_sdo'
PROTOCOL_CAN_RAW = 'can_raw'

# OBD2 Mode definitions
OBD2_MODE_CURRENT_DATA = 0x01
OBD2_MODE_READ_PARAM = 0x2A  # OpenInverter custom mode
OBD2_MODE_RESPONSE_PARAM = 0x6A

# Parsing functions for OBD2 responses
# OpenInverter response format: [length, mode(0x6A), pid_high, pid_low, val_byte3, val_byte2, val_byte1, val_byte0]
# The 32-bit fixed-point value is in bytes 4-7 (little-endian)
def parse_16bit_high(data):
    """Parse 16-bit value from bytes 2-3 (high bytes)"""
    if len(data) < 4:
        return 0.0
    return ((data[2] << 8) + data[3]) / 32.0

def parse_32bit(data):
    """Parse 32-bit value from bytes 4-7 (little-endian)"""
    if len(data) < 8:
        return 0.0
    val = (data[4] << 24) + (data[5] << 16) + (data[6] << 8) + data[7]
    # Convert to signed
    if val >= 0x80000000:
        val -= 0x100000000
    return val / 32.0

def parse_32bit_negative(data):
    """Parse 32-bit value and negate (for OVMS current convention)"""
    return -parse_32bit(data)

def parse_8bit_opmode(data):
    """Parse opmode from byte 3"""
    if len(data) < 4:
        return 0
    return int(data[3] / 32)

def parse_obd2_temp(data):
    """Parse OBD2 standard temperature (byte 0 - 0x28)"""
    if len(data) < 1:
        return 0.0
    return float(data[0] - 0x28)

def parse_24bit_millivolt(data):
    """Parse 24-bit millivolt value from bytes 1-3, convert to volts"""
    if len(data) < 4:
        return 0.0
    milliVolt = ((data[1] << 16) + (data[2] << 8) + data[3]) / 32
    return float(milliVolt) / 1000.0

# Vehicle definitions
# Built-in vehicles can be defined here, but it's recommended to use
# separate vehicle_*.py files for better organization (matches OVMS v3 structure)
VEHICLES = {
    # No built-in vehicles - all vehicles should be in separate files
    # This matches OVMS v3's modular structure where each vehicle is a separate component
}

# Parse function lookup
PARSE_FUNCTIONS = {
    'parse_16bit_high': parse_16bit_high,
    'parse_32bit': parse_32bit,
    'parse_32bit_negative': parse_32bit_negative,
    'parse_8bit_opmode': parse_8bit_opmode,
    'parse_obd2_temp': parse_obd2_temp,
    'parse_24bit_millivolt': parse_24bit_millivolt,
}


def get_vehicle_config(vehicle_type):
    """Get vehicle configuration by type
    
    Supports both built-in vehicles (in VEHICLES dict) and
    external vehicle modules in vehicles/ subdirectory (e.g., vehicles/zombie_vcu/zombie_vcu.py).
    """
    # First check built-in vehicles
    if vehicle_type in VEHICLES:
        return VEHICLES[vehicle_type]
    
    # Try to load external vehicle module from vehicles/ subdirectory
    try:
        import os
        lib_dir = os.path.dirname(__file__)
        vehicle_file = os.path.join(lib_dir, 'vehicles', vehicle_type, f'{vehicle_type}.py')
        
        if os.path.exists(vehicle_file):
            # Read and execute the vehicle file directly
            with open(vehicle_file, 'r') as f:
                vehicle_code = f.read()
            # Create a namespace for the vehicle module
            # Import vehicle module so 'from vehicle import ...' works
            import vehicle as vehicle_module
            vehicle_globals = {'vehicle': vehicle_module}
            exec(vehicle_code, vehicle_globals)
            config = vehicle_globals.get('VEHICLE_CONFIG', None)
            if config:
                # Merge parse functions from external module
                external_parse_funcs = vehicle_globals.get('PARSE_FUNCTIONS', {})
                PARSE_FUNCTIONS.update(external_parse_funcs)
                return config
    except Exception as e:
        print(f"[vehicle] get_vehicle_config: Exception loading {vehicle_type}: {e}")
        import sys
        sys.print_exception(e)
    
    return None


def list_vehicles():
    """List all available vehicle types (built-in + external modules in vehicles/ subdirectory)"""
    vehicle_list = {k: v['name'] for k, v in VEHICLES.items()}
    
    # Try to discover external vehicle modules in vehicles/ subdirectory
    try:
        import os
        import sys
        
        lib_dir = os.path.dirname(__file__)
        vehicles_dir = os.path.join(lib_dir, 'vehicles')
        print(f"[vehicle] list_vehicles: lib_dir={lib_dir}, vehicles_dir={vehicles_dir}")
        
        # Ensure lib_dir is in sys.path for imports
        if lib_dir not in sys.path:
            sys.path.insert(0, lib_dir)
            print(f"[vehicle] list_vehicles: added {lib_dir} to sys.path")
        
        if os.path.exists(vehicles_dir) and os.path.isdir(vehicles_dir):
            print(f"[vehicle] list_vehicles: vehicles_dir exists, listing...")
            # Look for subdirectories (e.g., zombie_vcu/, obdii/)
            for item in os.listdir(vehicles_dir):
                item_path = os.path.join(vehicles_dir, item)
                print(f"[vehicle] list_vehicles: checking {item}, path={item_path}")
                # Check if it's a directory and contains a matching .py file
                if os.path.isdir(item_path) and not item.startswith('_'):
                    vehicle_file = os.path.join(item_path, f'{item}.py')
                    print(f"[vehicle] list_vehicles: checking file {vehicle_file}, exists={os.path.exists(vehicle_file)}")
                    if os.path.exists(vehicle_file):
                        vehicle_id = item
                        if vehicle_id not in vehicle_list:
                            try:
                                print(f"[vehicle] list_vehicles: loading {vehicle_file}")
                                # Read and execute the vehicle file directly
                                with open(vehicle_file, 'r') as f:
                                    vehicle_code = f.read()
                                # Create a namespace for the vehicle module
                                # Import vehicle module so 'from vehicle import ...' works
                                import vehicle as vehicle_module
                                vehicle_globals = {'vehicle': vehicle_module}
                                exec(vehicle_code, vehicle_globals)
                                config = vehicle_globals.get('VEHICLE_CONFIG', None)
                                print(f"[vehicle] list_vehicles: got config for {vehicle_id}, config={config}")
                                if config:
                                    vehicle_name = config.get('name', vehicle_id.replace('_', ' ').title())
                                    vehicle_list[vehicle_id] = vehicle_name
                                    print(f"[vehicle] list_vehicles: added {vehicle_id} = {vehicle_name}")
                            except Exception as e:
                                print(f"[vehicle] list_vehicles: Exception loading {vehicle_id}: {e}")
                                sys.print_exception(e)
        else:
            print(f"[vehicle] list_vehicles: vehicles_dir does not exist or is not a directory")
    except Exception as e:
        # Log error instead of silently failing
        print(f"[vehicle] list_vehicles: Exception during discovery: {e}")
        import sys
        sys.print_exception(e)
    
    print(f"[vehicle] list_vehicles: returning {vehicle_list}")
    return vehicle_list
