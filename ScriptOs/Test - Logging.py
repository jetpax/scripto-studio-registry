
# === START_CONFIG_PARAMETERS ===

dict(
    timeout = 0,
    info = dict(
        name        = 'Test - Logging',
        version     = [1, 0, 0],
        category    = 'Testing',
        description = '''Test WebREPL logging functionality. This script demonstrates how to set up a logger with WebREPL handler to send log messages to ScriptO Studio's log sidebar. The logger automatically clears existing handlers to prevent duplicate messages.''',
        author      = 'ScriptO Team',
    ),
    args = dict()
)

# === END_CONFIG_PARAMETERS ===

import logging
import webrepl

print("\n" + "="*60)
print("WebREPL Logging Test")
print("="*60)

# Create a logger
logger = logging.getLogger("webrepl")

# Remove any existing handlers to prevent duplicates
logger.handlers.clear()

# Setup a handler to send logs to the WebREPL
handler = webrepl.logHandler(logging.INFO)

logger.addHandler(handler)
logger.setLevel(logging.DEBUG)

print("✓ Logger configured with WebREPL handler")
print("✓ Handler level: INFO")
print("✓ Logger level: DEBUG")
print("\nSending test log messages...\n")

# Send test messages
logger.info("Hello from MicroPython!")
logger.warning("This is a warning message")
logger.error("This is an error message")
logger.debug("This is a debug message (may not appear if handler level is INFO)")

print("\n✅ Check the Logs sidebar in ScriptO Studio to see the messages!")
print("="*60 + "\n")
