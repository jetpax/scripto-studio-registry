# Board Definitions

This directory contains hardware definition files for supported boards.

## Structure

Each board is defined in a JSON file with the following structure:

```json
{
  "identity": {
    "id": "board_id",
    "name": "Board Name",
    "vendor": "vendor_name",
    "chip": "ESP32-XX",
    "revision": "1.0",
    "description": "Board description"
  },
  "capabilities": {
    "ethernet": true,
    "can": true,
    "sdcard": true
  },
  "resources": {
    "pins": { "status_led": 1, "boot": 35 },
    "uart": { "primary": {"tx": 37, "rx": 38} },
    "i2c": { "i2c0": {"sda": 7, "scl": 8} },
    "can": { "twai": {"tx": 20, "rx": 21} },
    "spi": { "spi1": {"miso": 13, "mosi": 11, "sclk": 12} },
    "sdmmc": { "sdcard": {"cmd": 44, "clk": 43, "d0": 39, "d1": 40, "d2": 41, "d3": 42} }
  },
  "devices": {
    "ethernet": {
      "phy": "IP101",
      "interface": "rmii",
      "phy_addr": 1,
      "pins": {"mdc": 31, "mdio": 52, "reset": 51}
    },
    "status_led": {
      "type": "neopixel",
      "pixel_order": "RGB"
    }
  }
}
```

## Sections

### identity

Board identification and metadata:

- `id`: Unique board identifier (used in filenames)
- `name`: Human-readable board name
- `vendor`: Manufacturer/vendor name
- `chip`: ESP32 chip model (ESP32, ESP32-S3, ESP32-P4, etc.)
- `revision`: Hardware revision
- `description`: Brief description

### capabilities

Boolean flags indicating hardware presence (used with `board.has()`):

```python
if board.has("ethernet"):
    init_ethernet()
```

Common capabilities:
- `ethernet`, `wifi`, `can`, `sdcard`, `battery`, `audio`, `neopixel`, `coprocessor`

### resources

Pin and bus definitions organized by type.

#### pins

Simple GPIO pin mappings:

```python
led_pin = board.pin("status_led")  # 1
boot_pin = board.pin("boot")       # 35
```

#### uart, i2c, spi, can, sdmmc

Bus configurations with pin mappings:

```python
# UART
uart = board.uart("primary")
tx = uart.tx  # 37
rx = uart.rx  # 38

# I2C
i2c = board.i2c("i2c0")
sda = i2c.sda  # 7
scl = i2c.scl  # 8

# CAN
can_bus = board.can("twai")
tx = can_bus.tx  # 20
rx = can_bus.rx  # 21

# SPI
spi = board.spi("spi1")
miso = spi.miso  # 13
mosi = spi.mosi  # 11
sclk = spi.sclk  # 12

# SDMMC
sd = board.sdmmc("sdcard")
cmd = sd.cmd  # 44
clk = sd.clk  # 43
d0 = sd.d0    # 39
```

### devices

Device-specific configuration beyond just pins:

```python
# Ethernet PHY
eth = board.device("ethernet")
phy_type = eth.phy        # "IP101"
phy_addr = eth.phy_addr   # 1
pins = eth.pins           # {"mdc": 31, "mdio": 52, "reset": 51}

# Status LED
led = board.device("status_led")
led_type = led.type           # "neopixel"
pixel_order = led.pixel_order # "RGB"

# Audio codec
codec = board.device("audio_codec")
codec_type = codec.type       # "ES8311"
i2c_bus = codec.i2c_bus       # "i2c0"
i2c_addr = codec.i2c_address  # "0x18"
```

## Python API

See `device scripts/docs/BOARD_API.md` for complete API documentation.

### Basic Usage

```python
from lib import board

# Identity
board.id.name  # "Scripto P4+C6"
board.id.chip  # "ESP32-P4"

# Capabilities
board.has("ethernet")  # True

# Pins
led_pin = board.pin("status_led")

# Buses
can_bus = board.can("twai")
tx = can_bus.tx

# Devices
eth = board.device("ethernet")
phy = eth.phy
```

## Migration Guide

### From old `hw_config` format

Old format (deprecated):
```json
{
  "board_id": "scripto_p4_c6",
  "board_name": "Scripto P4+C6",
  "chip": "ESP32-P4",
  "hardware": {
    "ethernet": {
      "type": "IP101",
      "pins": {"mdc": 31, "mdio": 52}
    }
  }
}
```

New format:
```json
{
  "identity": {
    "id": "scripto_p4_c6",
    "name": "Scripto P4+C6",
    "chip": "ESP32-P4"
  },
  "capabilities": {
    "ethernet": true
  },
  "resources": {},
  "devices": {
    "ethernet": {
      "phy": "IP101",
      "pins": {"mdc": 31, "mdio": 52}
    }
  }
}
```

### Python Code Changes

```python
# Old
from lib import hw_config
hw_config.init()
eth_hw = hw_config.get_hardware('ethernet')
phy_type = eth_hw.get('type')

# New
from lib import board
eth = board.device("ethernet")
phy_type = eth.phy
```

## Bus Type Reference

### UART
- `tx`: Transmit pin
- `rx`: Receive pin
- Optional: `rts`, `cts`, `dtr`, `dsr`

### I2C
- `sda`: Data pin
- `scl`: Clock pin

### SPI
- `miso`: Master In Slave Out
- `mosi`: Master Out Slave In
- `sclk`: Serial Clock

### CAN (TWAI)
- `tx`: Transmit pin
- `rx`: Receive pin
- Optional: `standby`: Transceiver standby control

### SDMMC
- `cmd`: Command pin
- `clk`: Clock pin
- `d0`: Data 0 (required)
- Optional: `d1`, `d2`, `d3` for 4-bit mode

## Adding a New Board

1. Create `Boards/your_board_id.json`
2. Fill in all sections (use existing boards as examples)
3. Add entry to `index.json`:
   ```json
   {
     "board_id": "your_board_id",
     "url": "https://yourname.github.io/scripto-studio-registry/Boards/your_board_id.json"
   }
   ```
4. Test on actual hardware
5. Submit pull request

## Best Practices

1. **Use descriptive bus names**: `primary`, `debug`, `i2c0`, `spi1`
2. **Document unusual pins**: Add descriptions to device entries
3. **Include all capabilities**: Even if not implemented, helps with detection
4. **Test pin assignments**: Verify all pins work before publishing
5. **Keep descriptions concise**: Board descriptions should be 1-2 sentences
