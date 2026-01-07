// === START_EXTENSION_CONFIG ===
// {
//   "name": "OpenInverter",
//   "id": "openinverter",
//   "version": [1, 99, 0],
//   "author": "JetPax",
//   "description": "Complete OpenInverter suite. Configure parameters, map CAN messages, view spot values, and plot real-time signals from OpenInverter motor controllers.",
//   "icon": "sliders",
//   "iconSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-bolt\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11\" /></svg>",
//   "mipPackage": "github:jetpax/scripto-studio-registry/Extensions/OpenInverter/lib",
//   "menu": [
//     { "id": "overview", "label": "Overview" },
//     { "id": "deviceselector", "label": "Device Selector" }
//   ],
//   "styles": ":root { --oi-blue: #1e88e5; --oi-blue-dark: #1565c0; --oi-blue-light: #e3f2fd; --oi-orange: #ff8c00; --oi-orange-light: #ffa726; --oi-beige: #fef8f0; --oi-yellow: #ffd54f; --oi-status-success: #4caf50; --oi-status-warning: #ff9800; --oi-status-error: #f44336; --oi-status-info: #1e88e5; } .tabs-container { display: flex; flex-direction: column; height: 100%; } .tabs-header { border-bottom: 2px solid var(--border-color); background: var(--bg-secondary); } .tabs-nav { display: flex; gap: 0; overflow-x: auto; } .tab-button { background: transparent; border: none; padding: 16px 24px; font-size: 14px; font-weight: 600; color: var(--text-secondary); cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s; white-space: nowrap; } .tab-button:hover:not(:disabled) { color: var(--oi-blue); background: var(--oi-blue-light); } .tab-button:disabled { opacity: 0.5; cursor: not-allowed; } .tabs-content { flex: 1; overflow-y: auto; } .system-panel { background: var(--bg-secondary); border-radius: 8px; overflow: hidden; margin-bottom: 24px; } .panel-header { background: var(--oi-blue); color: white; padding: 20px; border-bottom: 1px solid var(--border-color); } .panel-message { padding: 40px 20px; text-align: center; color: var(--text-secondary); } .primary-button { background: var(--oi-blue); color: white; border: 2px solid var(--oi-blue); padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; } .primary-button:hover:not(:disabled) { background: var(--oi-blue-dark); border-color: var(--oi-blue-dark); } .primary-button:disabled { opacity: 0.5; cursor: not-allowed; } .secondary-button { background: var(--oi-orange); color: var(--text-primary); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; } .secondary-button:hover:not(:disabled) { background: #f0e4d0; border-color: var(--oi-blue); color: var(--oi-blue); } .secondary-button:disabled { opacity: 0.5; cursor: not-allowed; } .refresh-button { background: var(--oi-beige); color: var(--text-primary); border: 1px solid var(--border-color); padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; } .refresh-button:hover:not(:disabled) { background: #f0e4d0; border-color: var(--oi-blue); color: var(--oi-blue); } .spot-values-categories { display: flex; flex-direction: column; gap: 2rem; } .spot-values-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; } .oi-category-section { margin-bottom: 2rem; } .oi-category-title { font-size: 1.1rem; font-weight: 600; color: var(--oi-blue); margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--oi-blue); } .oi-spotvalues-container { padding: 20px; } .oi-spotvalue-card { background: var(--bg-secondary); border: 2px solid transparent; border-radius: 6px; padding: 0.75rem; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; gap: 0.75rem; } .oi-spotvalue-card:hover { border-color: var(--oi-blue); background: var(--oi-blue-light); } .oi-spotvalue-name { font-weight: 500; color: var(--text-primary); font-size: 0.9rem; margin-bottom: 0.25rem; } .oi-spotvalue-value { font-size: 1.1rem; font-weight: 600; color: var(--text-primary); font-family: 'Monaco', 'Courier New', monospace; } .parameter-item { display: flex; flex-direction: column; gap: 0.5rem; } .parameter-header { display: flex; justify-content: space-between; align-items: baseline; } .parameter-label { font-weight: 500; color: var(--text-primary); font-size: 0.9rem; margin-bottom: 0; } .parameter-value { font-size: 1.1rem; font-weight: 600; color: var(--text-primary); font-family: 'Monaco', 'Courier New', monospace; } .parameter-category { border: 1px solid var(--border-color); border-radius: 8px; padding: 1.5rem; background: var(--bg-secondary); transition: padding 0.2s; } .category-title { font-size: 1.1rem; font-weight: 600; color: var(--oi-blue); margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 2px solid var(--oi-beige); display: flex; align-items: center; gap: 0.75rem; user-select: none; transition: all 0.2s; } .category-title:hover { color: var(--oi-blue-dark); } .param-count { margin-left: auto; font-size: 0.85rem; font-weight: normal; color: var(--text-secondary); } .parameters-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }"
// }
// === END_EXTENSION_CONFIG ===

/**
 * OpenInverter Extension - Motor control and debugging interface
 * 
 * This extension provides a complete interface for configuring and monitoring
 * OpenInverter motor controllers.
 */

class OpenInverterExtension {
  // Embedded Tabler Icons for self-contained extension (no dependency on SS sprite)
  static ICONS = {
    playerPlay: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4v16l13 -8z" /></svg>',
    playerPause: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg>',
    playerStop: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /></svg>',
    refresh: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>'
  }

  constructor(deviceAPI, emit, state, html) {
    this.device = deviceAPI
    this.emit = emit
    this.state = state
    this.html = html
    
    // Initialize state for device list
    if (!this.state.discoveredDevices) {
      this.state.discoveredDevices = []
    }
    if (!this.state.selectedDeviceSerial) {
      this.state.selectedDeviceSerial = null
    }
    if (!this.state.activeDeviceTab) {
      this.state.activeDeviceTab = 'overview'
    }
    
    // Initialize chart-related state
    if (!this.state.spotValueHistory) {
      this.state.spotValueHistory = {}
    }
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }
  }

  /**
   * Render custom sidebar items (called by Scripto Studio for DEVICES section)
   * Shows list of discovered OpenInverter devices
   */
  renderSidebarDevices() {
    if (!this.state.discoveredDevices || this.state.discoveredDevices.length === 0) {
      return this.html`
        <div style="padding: 16px; text-align: center; color: var(--text-secondary); font-size: 12px;">
          <p style="margin: 0;">No devices found</p>
          <p style="margin: 8px 0 0; font-size: 11px;">Use Device Selector to scan</p>
        </div>
      `
    }

    return this.html`
      <div style="padding: 4px 0;">
        ${this.state.discoveredDevices.map(device => this.html`
          <div 
            onclick=${() => this.selectDeviceFromSidebar(device)}
            style="
              padding: 12px 16px;
              cursor: pointer;
              transition: background 0.2s;
              border-left: 3px solid ${this.state.selectedDeviceSerial === device.serial ? 'var(--oi-blue)' : 'transparent'};
              background: ${this.state.selectedDeviceSerial === device.serial ? 'var(--oi-blue-light)' : 'transparent'};
            "
            onmouseover=${(e) => { if (this.state.selectedDeviceSerial !== device.serial) e.currentTarget.style.background = 'var(--bg-tertiary)' }}
            onmouseout=${(e) => { if (this.state.selectedDeviceSerial !== device.serial) e.currentTarget.style.background = 'transparent' }}>
            
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <div style="width: 8px; height: 8px; border-radius: 50%; background: ${device.online ? '#4caf50' : '#999'};"></div>
              <div style="font-weight: 600; font-size: 13px; color: var(--text-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                ${device.name || `Device ${device.nodeId}`}
              </div>
            </div>
            <div style="font-size: 11px; color: var(--text-secondary); margin-left: 16px;">
              ${device.serial ? device.serial.substring(0, 12) + '...' : `Node ${device.nodeId}`}
            </div>
          </div>
        `)}
      </div>
    `
  }

  /**
   * Select a device from sidebar - switches to device view with tabs
   */
  selectDeviceFromSidebar(device) {
    this.state.selectedDeviceSerial = device.serial
    this.state.selectedNodeId = device.nodeId
    this.state.activeDeviceTab = 'overview'
    
    // Connect to device if not already connected
    if (!this.state.oiDeviceConnected || this.state.currentDeviceSerial !== device.serial) {
      this.connectToDevice(device.nodeId, device.serial)
    }
    
    this.emit('render')
  }

  /**
   * Render device panel with tabs when a device is selected
   * This replaces the individual panel renders when viewing a specific device
   */
  renderDevicePanel() {
    const device = this.state.discoveredDevices.find(d => d.serial === this.state.selectedDeviceSerial)
    
    if (!device) {
      return this.html`
        <div class="panel-message">
          <p>Device not found</p>
        </div>
      `
    }

    return this.html`
      <div style="display: flex; flex-direction: column; height: 100%;">
        <!-- Device Header -->
        <div style="background: var(--bg-secondary); border-bottom: 1px solid var(--border-color); padding: 20px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <div style="width: 12px; height: 12px; border-radius: 50%; background: ${device.online ? '#4caf50' : '#999'};"></div>
            <h1 style="margin: 0; font-size: 24px; color: var(--text-primary);">
              ${device.name || `Device ${device.nodeId}`}
            </h1>
            <span style="background: var(--oi-beige); padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; color: var(--text-secondary);">
              ${device.online ? 'Connected' : 'Offline'}
            </span>
          </div>
          <div style="display: flex; gap: 16px; color: var(--text-secondary); font-size: 13px;">
            <span>Serial: ${device.serial || 'Unknown'}</span>
            <span>Node ID: ${device.nodeId}</span>
            <span>Firmware: ${device.firmware || 'Unknown'}</span>
          </div>
        </div>

        <!-- Tab Navigation -->
        <div class="tabs-header">
          <div class="tabs-nav">
            <button 
              class="tab-button ${this.state.activeDeviceTab === 'overview' ? 'active' : ''}"
              onclick=${() => this.switchDeviceTab('overview')}>
              Overview
            </button>
            <button 
              class="tab-button ${this.state.activeDeviceTab === 'parameters' ? 'active' : ''}"
              onclick=${() => this.switchDeviceTab('parameters')}>
              Parameters
            </button>
            <button 
              class="tab-button ${this.state.activeDeviceTab === 'canmapping' ? 'active' : ''}"
              onclick=${() => this.switchDeviceTab('canmapping')}>
              CAN Mappings
            </button>
            <button 
              class="tab-button ${this.state.activeDeviceTab === 'canmessages' ? 'active' : ''}"
              onclick=${() => this.switchDeviceTab('canmessages')}>
              CAN Messages
            </button>
            <button 
              class="tab-button ${this.state.activeDeviceTab === 'ota' ? 'active' : ''}"
              onclick=${() => this.switchDeviceTab('ota')}>
              OTA Update
            </button>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="tabs-content">
          ${this.renderDeviceTabContent()}
        </div>
      </div>
    `
  }

  /**
   * Switch between device tabs
   */
  switchDeviceTab(tabId) {
    // Stop auto-refresh if switching away from overview
    if (this.state.activeDeviceTab === 'overview' && tabId !== 'overview' && this.autoRefreshTimer) {
      console.log('[OI Overview] Stopping auto-refresh (switching away from overview)')
      clearInterval(this.autoRefreshTimer)
      this.autoRefreshTimer = null
    }
    
    this.state.activeDeviceTab = tabId
    this.emit('render')
  }

  /**
   * Render the active tab content for the selected device
   */
  renderDeviceTabContent() {
    switch (this.state.activeDeviceTab) {
      case 'overview':
        return this.renderOverviewContent()
      case 'parameters':
        return this.renderParametersContent()
      case 'canmapping':
        return this.renderCanmappingContent()
      case 'canmessages':
        return this.renderCanmessagesContent()
      case 'ota':
        return this.renderFirmwareContent()
      default:
        return this.html`<div class="panel-message">Unknown tab</div>`
    }
  }

  /**
   * Add mock/test devices for development/testing
   */
  addMockDevices() {
    this.state.discoveredDevices = [
      {
        nodeId: 1,
        serial: 'ABC123456789ABCD',
        name: 'Test Inverter 1',
        firmware: 'v4.2.0',
        online: true
      },
      {
        nodeId: 2,
        serial: 'DEF456789ABC1234',
        name: 'Test Inverter 2',
        firmware: 'v4.1.5',
        online: true
      }
    ]
    
    // Also populate canScanResults for backward compatibility
    this.state.canScanResults = this.state.discoveredDevices.map(d => ({
      nodeId: d.nodeId,
      serial: d.serial,
      deviceType: 0,
      deviceTypeHex: '0x00000000'
    }))
    
    this.state.scanMessage = 'Mock devices added for testing'
    this.emit('render')
  }

  /**
   * Render an embedded Tabler icon as a data URI for use in img tags
   * @param {string} name - Icon name from ICONS
   * @param {number} size - Icon size in pixels (default 24)
   * @param {string} color - Stroke color (default '#333')
   * @returns {string} Data URI for use in img src
   */
  icon(name, size = 24, color = '#333') {
    const svg = OpenInverterExtension.ICONS[name]
    if (!svg) return ''
    const modifiedSvg = svg
      .replace(/width="24"/g, `width="${size}"`)
      .replace(/height="24"/g, `height="${size}"`)
      .replace(/stroke="currentColor"/g, `stroke="${color}"`)
    // encodeURIComponent properly handles # -> %23
    return `data:image/svg+xml,${encodeURIComponent(modifiedSvg)}`
  }

  // === Utility Functions ===

  /**
   * Formats a parameter value for display based on its type
   * Ported from openinverter-web-interface/web/src/utils/parameterDisplay.ts
   * 
   * @param {Object} param - The parameter object containing enums, unit, etc.
   * @param {number|string|null|undefined} value - The raw value to format
   * @returns {string} Formatted string for display, or empty string if value is null/undefined
   */
  formatParameterValue(param, value) {
    // Handle null/undefined - show nothing
    if (value === null || value === undefined) {
      return ''
    }

    // Handle enum values - show the mapped label
    if (param.enums && Object.keys(param.enums).length > 0) {
      const enumValue = String(Math.round(Number(value)))
      const label = param.enums[enumValue]
      return label || String(value)
    }

    // Handle numeric values with units
    if (typeof value === 'number') {
      const formattedValue = value.toFixed(2)
      return param.unit ? `${formattedValue} ${param.unit}` : formattedValue
    }

    // Fallback to string value
    return String(value)
  }

  /**
   * Gets the enum label for a numeric value
   * 
   * @param {Object} param - The parameter object containing enums
   * @param {number|string} value - The numeric value to convert
   * @returns {string} The enum label or the original value as string
   */
  getEnumLabel(param, value) {
    if (!param.enums || Object.keys(param.enums).length === 0) {
      return String(value)
    }

    const enumValue = String(Math.round(Number(value)))
    return param.enums[enumValue] || String(value)
  }

  /**
   * Converts a parameter value to a string suitable for dropdown selection
   * Rounds numeric values and converts to string to match enum keys
   * 
   * @param {number|string|null|undefined} value - The value to convert
   * @returns {string} String representation suitable for dropdown value
   */
  normalizeEnumValue(value) {
    if (value === null || value === undefined) {
      return '0'
    }
    return String(Math.round(Number(value)))
  }

  /**
   * Parse a unit string that may contain a numeric prefix
   * Examples: "10ms" -> { multiplier: 10, baseUnit: "ms" }
   *           "ms" -> { multiplier: 1, baseUnit: "ms" }
   *           "100us" -> { multiplier: 100, baseUnit: "us" }
   * 
   * @param {string} unit - The unit string to parse
   * @returns {Object|null} Object with multiplier and baseUnit, or null if invalid
   */
  parseUnit(unit) {
    if (!unit) return null

    // Try to match a number at the start of the unit string
    const match = unit.match(/^(\d+(?:\.\d+)?)(.+)$/)

    if (match) {
      // Has numeric prefix (e.g., "10ms")
      return {
        multiplier: parseFloat(match[1]),
        baseUnit: match[2]
      }
    }

    // No numeric prefix, treat as base unit with multiplier 1
    return {
      multiplier: 1,
      baseUnit: unit
    }
  }

  /**
   * Apply conversion to a spot value based on its unit
   * Ported from openinverter-web-interface/web/src/utils/spotValueConversions.ts
   * 
   * For units with numeric prefixes (e.g., "10ms", "100us"), converts the value
   * by applying the multiplier and normalizes the unit to remove the prefix.
   * Example: rawValue=12345 with unit="10ms" → value=123450 with unit="ms"
   * 
   * @param {number} rawValue - The raw numeric value from the device
   * @param {string} unit - The unit string from the parameter definition
   * @returns {Object} Object with converted value and display unit
   */
  convertSpotValue(rawValue, unit) {
    if (!unit) {
      return { value: rawValue, unit: '' }
    }

    const parsed = this.parseUnit(unit)
    if (!parsed) {
      return { value: rawValue, unit }
    }

    const { multiplier, baseUnit } = parsed

    // Recognized time units
    const TIME_UNITS = new Set(['s', 'ms', 'us', 'μs', 'ns', 'min', 'h', 'd'])

    // Check if it's a recognized unit type and has a numeric prefix
    if (multiplier !== 1 && TIME_UNITS.has(baseUnit)) {
      // Apply the multiplier to normalize to the base unit
      // Example: 12345 in "10ms" → 12345 × 10 = 123450 "ms"
      return {
        value: rawValue * multiplier,
        unit: baseUnit
      }
    }

    // No conversion needed, return as-is
    return { value: rawValue, unit }
  }

  /**
   * Check if a unit can be converted
   * 
   * @param {string} unit - The unit string to check
   * @returns {boolean} True if the unit has a conversion
   */
  hasConversion(unit) {
    if (!unit) return false

    const parsed = this.parseUnit(unit)
    if (!parsed) return false

    const TIME_UNITS = new Set(['s', 'ms', 'us', 'μs', 'ns', 'min', 'h', 'd'])
    
    // Check if it's a recognized unit with a non-1 multiplier
    return parsed.multiplier !== 1 && TIME_UNITS.has(parsed.baseUnit)
  }

  // === Helper Methods for OI_helpers.py ===

  async getOiParams() {
    const result = await this.device.execute('from lib.OI_helpers import getOiParams; getOiParams()')
    const parsed = this.device.parseJSON(result)
    // WebREPL Binary Protocol: Response is direct data, no CMD/ARG wrapper
    return parsed
  }

  async setParameter(args) {
    const argsStr = JSON.stringify(args)
    const result = await this.device.execute(`from lib.OI_helpers import setParameter; setParameter(${argsStr})`)
    const parsed = this.device.parseJSON(result)
    return parsed
  }

  async getSpotValues() {
    const result = await this.device.execute('from lib.OI_helpers import getSpotValues; getSpotValues()')
    const parsed = this.device.parseJSON(result)
    return parsed
  }

  // === Render Methods ===

  /**
   * Render Overview - System-level overview or device panel if device selected
   */
  renderOverview() {
    return this.renderSystemOverview()
  }

  /**
   * Catch-all render methods for device panels
   * These handle device0, device1, device2, etc.
   */
  renderDevice0() { return this.renderDeviceByIndex(0) }
  renderDevice1() { return this.renderDeviceByIndex(1) }
  renderDevice2() { return this.renderDeviceByIndex(2) }
  renderDevice3() { return this.renderDeviceByIndex(3) }
  renderDevice4() { return this.renderDeviceByIndex(4) }
  renderDevice5() { return this.renderDeviceByIndex(5) }
  renderDevice6() { return this.renderDeviceByIndex(6) }
  renderDevice7() { return this.renderDeviceByIndex(7) }
  renderDevice8() { return this.renderDeviceByIndex(8) }
  renderDevice9() { return this.renderDeviceByIndex(9) }

  /**
   * Render a device panel by its index in discoveredDevices array
   */
  renderDeviceByIndex(index) {
    if (!this.state.discoveredDevices || !this.state.discoveredDevices[index]) {
      return this.html`
        <div class="panel-message">
          <p>Device not found (index: ${index})</p>
        </div>
      `
    }

    const device = this.state.discoveredDevices[index]
    this.state.selectedDeviceSerial = device.serial
    this.state.selectedNodeId = device.nodeId
    
    // Connect to device if not already connected
    if (!this.state.oiDeviceConnected || this.state.currentDeviceSerial !== device.serial) {
      // Set connected state for mock devices
      if (device.nodeId > 127) {
        this.state.oiDeviceConnected = true
        this.state.currentDeviceSerial = device.serial
        
        // Auto-fetch spot values from ESP32 (OI_helpers.py has demo data)
        if (!this.state.oiSpotValues && !this.state.isLoadingOiSpotValues) {
          setTimeout(() => this.refreshSpotValues(), 0)
        }
      }
    }
    
    return this.renderDevicePanel()
  }

  /**
   * Render system overview (all devices as cards)
   */
  renderSystemOverview() {
    return this.html`
      <div class="system-panel">
        <div class="panel-header" style="padding: 20px; border-bottom: 1px solid var(--border-color);">
          <h2 style="margin: 0; font-size: 24px; color: var(--scheme-primary);">System Overview</h2>
          <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 14px;">
            Scan and manage OpenInverter devices on your CAN bus
          </p>
        </div>
        
        <div style="padding: 20px;">
          ${this.state.discoveredDevices && this.state.discoveredDevices.length > 0 ? this.html`
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
              ${this.state.discoveredDevices.map(device => this.html`
                <div 
                  style="
                    background: var(--bg-secondary);
                    border: 2px solid var(--border-color);
                    border-radius: 8px;
                    padding: 20px;
                    cursor: pointer;
                    transition: all 0.2s;
                  "
                  onclick=${() => this.selectDeviceFromOverview(device)}
                  onmouseover=${(e) => { e.currentTarget.style.borderColor = 'var(--oi-blue)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onmouseout=${(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                  
                  <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <div style="width: 12px; height: 12px; border-radius: 50%; background: ${device.online ? '#4caf50' : '#999'};"></div>
                    <h3 style="margin: 0; font-size: 18px; color: var(--text-primary);">
                      ${device.name || `Device ${device.nodeId}`}
                    </h3>
                  </div>
                  
                  <div style="color: var(--text-secondary); font-size: 13px; line-height: 1.6;">
                    <div><strong>Serial:</strong> ${device.serial ? device.serial.substring(0, 16) + '...' : 'Unknown'}</div>
                    <div><strong>Node ID:</strong> ${device.nodeId}</div>
                    <div><strong>Firmware:</strong> ${device.firmware || 'Unknown'}</div>
                    <div style="margin-top: 8px;">
                      <span style="
                        display: inline-block;
                        padding: 4px 12px;
                        border-radius: 12px;
                        font-size: 11px;
                        font-weight: 600;
                        background: ${device.online ? 'rgba(76, 175, 80, 0.1)' : 'rgba(153, 153, 153, 0.1)'};
                        color: ${device.online ? '#4caf50' : '#999'};
                      ">
                        ${device.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                </div>
              `)}
            </div>
          ` : this.html`
            <div class="panel-message">
              <p style="font-size: 16px; margin-bottom: 16px;">No devices found</p>
              <p style="font-size: 14px; color: var(--text-secondary);">
                Use the <strong>Device Selector</strong> to scan for OpenInverter devices on the CAN bus
              </p>
            </div>
          `}
        </div>
      </div>
    `
  }

  /**
   * Select device from overview page - different from sidebar selection
   */
  selectDeviceFromOverview(device) {
    this.state.selectedDeviceSerial = device.serial
    this.state.selectedNodeId = device.nodeId
    this.state.activeDeviceTab = 'overview'
    
    // Connect to device if not already connected
    if (!this.state.oiDeviceConnected || this.state.currentDeviceSerial !== device.serial) {
      this.connectToDevice(device.nodeId, device.serial)
    }
    
    this.emit('render')
  }

  /**
   * Render Device Selector panel
   * Modern device connection and selection interface
   */
  renderDeviceselector() {
    // Initialize state
    if (!this.state.canScanResults) {
      this.state.canScanResults = []
    }
    if (!this.state.selectedNodeId) {
      this.state.selectedNodeId = 1
    }
    if (this.state.oiDeviceConnected === undefined) {
      this.state.oiDeviceConnected = false
    }
    if (this.state.isScanning === undefined) {
      this.state.isScanning = false
    }
    if (!this.state.savedDevices) {
      this.state.savedDevices = []
    }

    return this.html`
      <div class="system-panel">
        <div class="panel-header" style="padding: 20px; border-bottom: 1px solid var(--border-color);">
          <h2 style="margin: 0; font-size: 24px; color: var(--scheme-primary);">Device Connection</h2>
          <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 14px;">
            Connect to an OpenInverter device via CAN bus
          </p>
        </div>
        
        <div style="padding: 20px;">
          <!-- Connection Status -->
          <div style="background: var(--bg-secondary); border: 2px solid ${this.state.oiDeviceConnected ? '#4ade80' : '#ef4444'}; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 16px; height: 16px; border-radius: 50%; background: ${this.state.oiDeviceConnected ? '#4ade80' : '#ef4444'};"></div>
                <div>
                  <div style="font-weight: 600; font-size: 16px; color: ${this.state.oiDeviceConnected ? '#4ade80' : '#ef4444'};">
                    ${this.state.oiDeviceConnected ? 'Connected' : 'Disconnected'}
                  </div>
                  ${this.state.oiDeviceConnected ? this.html`
                    <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
                      Node ID: ${this.state.selectedNodeId}
                      ${this.state.currentDeviceSerial ? this.html` • Serial: ${this.state.currentDeviceSerial}` : ''}
                    </div>
                  ` : this.html`
                    <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">
                      No OpenInverter device connected
                    </div>
                  `}
                </div>
              </div>
              
              ${this.state.oiDeviceConnected ? this.html`
                <button 
                  class="secondary-button" 
                  onclick=${() => this.disconnectDevice()}
                  style="padding: 8px 16px;">
                  Disconnect
                </button>
              ` : ''}
            </div>
          </div>

          <!-- CAN Bus Scanner -->
          ${!this.state.oiDeviceConnected ? this.html`
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                <h3 style="font-size: 16px; margin: 0; color: var(--text-primary);">Scan for Devices</h3>
                <div style="display: flex; gap: 8px;">
                  <button 
                    class="secondary-button" 
                    onclick=${() => this.scanCanBus(false)}
                    disabled=${!this.state.isConnected || this.state.isScanning}
                    style="padding: 8px 16px; font-size: 13px;">
                    ${this.state.isScanning ? 'Scanning...' : 'Quick Scan (1-10)'}
                  </button>
                  <button 
                    class="secondary-button" 
                    onclick=${() => this.scanCanBus(true)}
                    disabled=${!this.state.isConnected || this.state.isScanning}
                    style="padding: 8px 16px; font-size: 13px;">
                    Full Scan (1-127)
                  </button>
                </div>
              </div>
              
              ${!this.state.isConnected ? this.html`
                <div style="text-align: center; padding: 24px; color: #ef4444; font-size: 14px; background: rgba(239, 68, 68, 0.1); border-radius: 4px;">
                  <p style="margin: 0;">⚠️ Please connect to ESP32 device via WebREPL first</p>
                  <p style="margin: 8px 0 0; font-size: 12px; color: var(--text-secondary);">
                    Use the Connection panel to connect to your ESP32
                  </p>
                </div>
              ` : this.state.isScanning ? this.html`
                <div style="padding: 24px;">
                  <div style="text-align: center; color: var(--text-secondary); font-size: 14px;">
                    <p style="margin: 0;">Scanning CAN bus for devices...</p>
                    <p style="font-size: 12px; margin: 8px 0 0;">This may take a few seconds</p>
                  </div>
                </div>
              ` : this.state.scanMessage ? this.html`
                <div style="text-align: center; padding: 20px; color: var(--text-secondary); font-size: 14px; background: var(--bg-tertiary); border-radius: 4px;">
                  <p style="margin: 0;">${this.state.scanMessage}</p>
                </div>
              ` : this.state.canScanResults.length === 0 ? this.html`
                <div style="text-align: center; padding: 24px; color: var(--text-secondary); font-size: 14px;">
                  <p style="margin: 0;">No scan results yet</p>
                  <p style="font-size: 12px; margin: 8px 0 0;">Click Quick Scan or Full Scan to find devices</p>
                </div>
              ` : this.html`
                <div style="border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <thead>
                      <tr style="background: var(--scheme-primary); color: white;">
                        <th style="padding: 10px 12px; text-align: left; font-weight: 600;">Node ID</th>
                        <th style="padding: 10px 12px; text-align: left; font-weight: 600;">Serial Number</th>
                        <th style="padding: 10px 12px; text-align: right; font-weight: 600;">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${this.state.canScanResults.map(device => this.html`
                        <tr style="border-top: 1px solid var(--border-color); transition: background 0.2s;" onmouseover=${(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'} onmouseout=${(e) => e.currentTarget.style.background = 'transparent'}>
                          <td style="padding: 12px;">${device.nodeId}</td>
                          <td style="padding: 12px; font-family: monospace; font-size: 12px;">${device.serialNumber || '—'}</td>
                          <td style="padding: 12px; text-align: right;">
                            <button 
                              class="primary-button" 
                              onclick=${() => this.connectToDevice(device.nodeId, device.serialNumber)}
                              style="padding: 6px 16px; font-size: 13px;">
                              Connect
                            </button>
                          </td>
                        </tr>
                      `)}
                    </tbody>
                  </table>
                </div>
              `}
            </div>
          ` : ''}

          <!-- Manual Connection -->
          ${!this.state.oiDeviceConnected ? this.html`
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px;">
              <h3 style="font-size: 16px; margin: 0 0 16px 0; color: var(--text-primary);">Manual Connection</h3>
              <div style="display: flex; gap: 12px; align-items: center;">
                <div style="flex: 1;">
                  <label style="display: block; font-size: 13px; color: var(--text-secondary); margin-bottom: 6px;">
                    Node ID
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    max="255"
                    value="${this.state.selectedNodeId || 1}"
                    oninput=${(e) => { this.state.selectedNodeId = parseInt(e.target.value) || 1 }}
                    style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-size: 14px;"
                  />
                </div>
                <div style="flex: 2;">
                  <label style="display: block; font-size: 13px; color: var(--text-secondary); margin-bottom: 6px;">
                    Serial Number (optional)
                  </label>
                  <input 
                    type="text" 
                    placeholder="e.g., ABC123..."
                    value="${this.state.manualSerial || ''}"
                    oninput=${(e) => { this.state.manualSerial = e.target.value }}
                    style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-size: 14px;"
                  />
                </div>
                <button 
                  class="primary-button" 
                  onclick=${() => this.connectToDevice(this.state.selectedNodeId, this.state.manualSerial)}
                  disabled=${this.state.selectedNodeId <= 127 && !this.state.isConnected}
                  style="margin-top: 20px; min-width: 120px;">
                  Connect
                </button>
              </div>
              <p style="font-size: 12px; color: var(--text-secondary); margin: 12px 0 0;">
                Enter a Node ID (1-127) to connect to a real device, or >127 (e.g., 200, 201) for mock/demo devices.
              </p>
            </div>
          ` : ''}
        </div>
      </div>
    `
  }

  /**
   * Render Parameters panel
   * Displays editable motor control parameters with load/save functionality
   */
  renderParameters() {
    // Load parameters if not already loaded
    // Only auto-load when OpenInverter device is connected, not just WebREPL
    if (!this.state.oiParameters && !this.state.isLoadingOiParameters && this.state.oiDeviceConnected) {
      // Use setTimeout to avoid blocking render
      setTimeout(() => this.refreshParameters(), 0)
    }

    return this.html`
      <div class="system-panel">
        <div class="panel-header oi-compact-header">
          <h2>Parameters</h2>
          <div class="panel-actions oi-button-row">
            <button 
              class="refresh-button" 
              onclick=${() => this.loadParametersFromFile()}
              title="Load parameters from local JSON file"
            >
              Load from File
            </button>
            <button 
              class="refresh-button" 
              onclick=${() => this.refreshParameters()}
              disabled=${!this.state.isConnected}
              title="Load parameters from connected device"
            >
              Load from Device
            </button>
            <button 
              class="refresh-button" 
              onclick=${() => this.saveParametersToFile()}
              disabled=${!this.state.oiParameters}
              title="Save parameters to local JSON file"
            >
              Save to File
            </button>
          </div>
        </div>
        
        ${this.renderParametersContent()}
      </div>
    `
  }

  renderParametersContent() {
    if (!this.state.oiDeviceConnected) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;">⚙️</div>
          <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
            Connect to a device to view parameters
          </p>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
            Use the Device Connection panel to scan and connect
          </p>
        </div>
      `
    }

    if (this.state.isLoadingOiParameters) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <p style="font-size: 16px; color: var(--text-secondary);">Loading parameters...</p>
        </div>
      `
    }

    if (!this.state.oiParameters || Object.keys(this.state.oiParameters).length === 0) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
            No parameters available
          </p>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
            Click "Load from Device" to fetch parameters
          </p>
        </div>
      `
    }

    // Initialize collapsed categories state
    if (!this.state.collapsedCategories) {
      this.state.collapsedCategories = new Set()
    }

    // Group parameters by category
    const categories = {}
    Object.entries(this.state.oiParameters).forEach(([name, param]) => {
      // Only include actual parameters (isparam = true)
      if (param.isparam) {
        const cat = param.category || 'Uncategorized'
        if (!categories[cat]) categories[cat] = []
        categories[cat].push({ name, ...param })
      }
    })

    return this.html`
      <div style="padding: 20px;">
        <!-- Import/Export Actions -->
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <h3 style="margin: 0; font-size: 14px; color: var(--text-primary);">Parameter Management</h3>
              <p style="margin: 4px 0 0; font-size: 12px; color: var(--text-secondary);">
                Export/Import parameters or save to device flash
              </p>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button 
                class="secondary-button" 
                onclick=${() => this.exportParametersToJSON()}
                disabled=${!this.state.oiParameters}
                style="padding: 8px 16px; font-size: 13px;">
                Export to JSON
              </button>
              <button 
                class="secondary-button" 
                onclick=${() => this.importParametersFromJSON()}
                disabled=${!this.state.oiParameters}
                style="padding: 8px 16px; font-size: 13px;">
                Import from JSON
              </button>
              <button 
                class="primary-button" 
                onclick=${() => this.saveParametersToFlash()}
                disabled=${!this.state.oiDeviceConnected}
                style="padding: 8px 16px; font-size: 13px;">
                Save to Flash
              </button>
            </div>
          </div>
        </div>

        <!-- Parameters by Category -->
        ${Object.entries(categories).map(([category, params]) => {
          const isCollapsed = this.state.collapsedCategories.has(category)
          return this.html`
            <div style="margin-bottom: 24px; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; overflow: hidden;">
              <!-- Category Header (clickable to collapse/expand) -->
              <div 
                onclick=${() => this.toggleCategory(category)}
                style="
                  padding: 16px 20px;
                  background: var(--scheme-primary);
                  color: white;
                  cursor: pointer;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  user-select: none;
                ">
                <div>
                  <span style="font-size: 16px; font-weight: 600;">${category}</span>
                  <span style="font-size: 13px; opacity: 0.9; margin-left: 8px;">(${params.length})</span>
                </div>
                <div style="font-size: 20px; transition: transform 0.2s; transform: rotate(${isCollapsed ? 0 : 180}deg);">
                  ▼
                </div>
              </div>

              <!-- Category Parameters -->
              ${!isCollapsed ? this.html`
                <div style="padding: 4px;">
                  ${params.map(param => this.renderParameterRow(param))}
                </div>
              ` : ''}
            </div>
          `
        })}
      </div>
    `
  }

  renderParameterRow(param) {
    const hasEnum = param.enums && Object.keys(param.enums).length > 0
    const hasRange = param.minimum !== undefined || param.maximum !== undefined

    return this.html`
      <div 
        style="
          display: grid;
          grid-template-columns: 2fr 1.5fr 0.8fr 1.2fr;
          gap: 16px;
          padding: 12px 16px;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          transition: background 0.2s;
        "
        onmouseover=${(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
        onmouseout=${(e) => e.currentTarget.style.background = 'transparent'}
        data-param="${param.name}">
        
        <!-- Parameter Name & Description -->
        <div>
          <div style="font-weight: 600; font-size: 14px; color: var(--text-primary); margin-bottom: 2px;">
            ${param.name}
          </div>
          ${param.description ? this.html`
            <div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">
              ${param.description}
            </div>
          ` : ''}
        </div>

        <!-- Value Input/Select -->
        <div>
          ${hasEnum ? this.renderEnumSelect(param) : this.renderValueInput(param)}
        </div>

        <!-- Unit -->
        <div style="font-size: 13px; color: var(--text-secondary); text-align: center;">
          ${param.unit || '—'}
        </div>

        <!-- Range & Default -->
        <div style="font-size: 12px; color: var(--text-secondary);">
          ${hasRange ? this.html`
            <div>Range: ${param.minimum ?? '?'} to ${param.maximum ?? '?'}</div>
          ` : ''}
          ${param.default !== undefined ? this.html`
            <div>Default: ${param.default}</div>
          ` : ''}
        </div>
      </div>
    `
  }

  renderValueInput(param) {
    return this.html`
      <input 
        class="oi-value-input"
        type="number" 
        value="${param.value}"
        step="0.1"
        min="${param.minimum}"
        max="${param.maximum}"
        onchange=${(e) => this.updateParameter(param.name, parseFloat(e.target.value))}
        style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-size: 14px;"
      />
    `
  }

  renderEnumSelect(param) {
    return this.html`
      <select 
        class="oi-enum-select"
        value="${this.normalizeEnumValue(param.value)}"
        onchange=${(e) => this.updateParameter(param.name, parseInt(e.target.value))}
        style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-size: 14px;">
        ${Object.entries(param.enums).map(([value, label]) => this.html`
          <option value="${value}" ${this.normalizeEnumValue(param.value) === value ? 'selected' : ''}>
            ${label}
          </option>
        `)}
      </select>
    `
  }

  toggleCategory(category) {
    if (this.state.collapsedCategories.has(category)) {
      this.state.collapsedCategories.delete(category)
    } else {
      this.state.collapsedCategories.add(category)
    }
    this.emit('render')
  }

  async updateParameter(name, value) {
    try {
      await this.setParameter({ NAME: name, VALUE: value })
      // Update local state immediately for better UX
      if (this.state.oiParameters && this.state.oiParameters[name]) {
        this.state.oiParameters[name].value = value
        this.emit('render')
      }
    } catch (error) {
      console.error('[OI App] Failed to update parameter:', error)
      alert(`Failed to update parameter: ${error.message}`)
      // Refresh to show correct value
      await this.refreshParameters()
    }
  }

  async refreshParameters() {
    if (this.state.isLoadingOiParameters) {
      console.log('[OI App] Already loading parameters, skipping')
      return
    }

    this.state.isLoadingOiParameters = true
    this.emit('render')

    try {
      const params = await this.getOiParams()
      this.state.oiParameters = params
      this.state.isLoadingOiParameters = false
      this.emit('render')
    } catch (error) {
      console.error('[OI App] Failed to load parameters:', error)
      this.state.isLoadingOiParameters = false
      this.emit('render')
      alert(`Failed to load parameters: ${error.message}`)
    }
  }

  exportParametersToJSON() {
    if (!this.state.oiParameters) {
      alert('No parameters to export')
      return
    }

    // Create export object with only parameter values (isparam = true)
    const exportData = {}
    Object.entries(this.state.oiParameters).forEach(([key, param]) => {
      if (param.isparam) {
        exportData[key] = param.value
      }
    })

    // Create blob and download
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `openinverter_params_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    console.log('[OI Parameters] Exported', Object.keys(exportData).length, 'parameters')
  }

  importParametersFromJSON() {
    // Create hidden file input
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = async (e) => {
      const file = e.target.files[0]
      if (!file) return

      try {
        const text = await file.text()
        const importedData = JSON.parse(text)

        if (!this.state.oiParameters) {
          alert('No parameter definitions loaded')
          return
        }

        let validCount = 0
        let invalidCount = 0
        const errors = []

        // Validate and update parameters
        for (const [key, value] of Object.entries(importedData)) {
          if (typeof value !== 'number') {
            invalidCount++
            errors.push(`${key}: value must be a number`)
            continue
          }

          const param = this.state.oiParameters[key]
          if (!param) {
            invalidCount++
            errors.push(`${key}: parameter not found`)
            continue
          }

          if (!param.isparam) {
            invalidCount++
            errors.push(`${key}: not a settable parameter`)
            continue
          }

          // Validate range
          if (param.minimum !== undefined && value < param.minimum) {
            invalidCount++
            errors.push(`${key}: value ${value} below minimum ${param.minimum}`)
            continue
          }

          if (param.maximum !== undefined && value > param.maximum) {
            invalidCount++
            errors.push(`${key}: value ${value} above maximum ${param.maximum}`)
            continue
          }

          // Update parameter
          try {
            await this.updateParameter(key, value)
            validCount++
            // Small delay to avoid overwhelming the device
            await new Promise(resolve => setTimeout(resolve, 50))
          } catch (error) {
            invalidCount++
            errors.push(`${key}: ${error.message}`)
          }
        }

        let message = `Import complete: ${validCount} parameters updated`
        if (invalidCount > 0) {
          message += `\n${invalidCount} errors:\n` + errors.slice(0, 5).join('\n')
          if (errors.length > 5) {
            message += `\n...and ${errors.length - 5} more`
          }
        }
        alert(message)

        // Refresh to ensure UI is in sync
        await this.refreshParameters()
      } catch (error) {
        alert(`Failed to import: ${error.message}`)
      }
    }
    input.click()
  }

  async saveParametersToFlash() {
    if (!this.state.oiDeviceConnected) {
      alert('Not connected to device')
      return
    }

    try {
      const result = await this.device.execute('from lib.OI_helpers import saveToFlash; saveToFlash()')
      const parsed = this.device.parseJSON(result)
      
      if (parsed && parsed.success) {
        alert('Parameters saved to flash successfully')
      } else {
        alert('Failed to save parameters to flash')
      }
    } catch (error) {
      console.error('[OI Parameters] Save to flash error:', error)
      alert(`Failed to save to flash: ${error.message}`)
    }
  }

  loadParametersFromFile() {
    // Alias to importParametersFromJSON for backward compatibility
    this.importParametersFromJSON()
  }

  saveParametersToFile() {
    // Alias to exportParametersToJSON for backward compatibility
    this.exportParametersToJSON()
  }

  /**
   * Render Overview panel
   * Modern spot values display with inline charts
   */
  renderOverview() {
    // Initialize state
    if (!this.state.spotValues) {
      this.state.spotValues = {}
    }
    if (!this.state.spotValueHistory) {
      this.state.spotValueHistory = {}
    }
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }
    if (this.state.spotValueInterval === undefined) {
      this.state.spotValueInterval = 1000 // Default 1 second
    }
    if (this.state.isStreamingSpotValues === undefined) {
      this.state.isStreamingSpotValues = false
    }

    // Auto-load spot values when connected
    if (!this.state.oiSpotValues && !this.state.isLoadingOiSpotValues && this.state.oiDeviceConnected) {
      setTimeout(() => this.refreshSpotValues(), 0)
    }

    return this.html`
      <div class="system-panel">
        <div class="panel-header" style="padding: 20px; border-bottom: 1px solid var(--border-color);">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <h2 style="margin: 0; font-size: 24px; color: var(--scheme-primary);">Overview</h2>
              <p style="margin: 8px 0 0; color: var(--text-secondary); font-size: 14px;">
                Live spot values and performance metrics
              </p>
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
              <div style="display: flex; gap: 8px; align-items: center;">
                <label style="font-size: 13px; color: var(--text-secondary);">Refresh Interval:</label>
                <select 
                  onchange=${(e) => { this.state.spotValueInterval = parseInt(e.target.value); this.emit('render') }}
                  style="padding: 6px 10px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-secondary); color: var(--text-primary);">
                  <option value="500" ${this.state.spotValueInterval === 500 ? 'selected' : ''}>500ms</option>
                  <option value="1000" ${this.state.spotValueInterval === 1000 ? 'selected' : ''}>1s</option>
                  <option value="2000" ${this.state.spotValueInterval === 2000 ? 'selected' : ''}>2s</option>
                  <option value="5000" ${this.state.spotValueInterval === 5000 ? 'selected' : ''}>5s</option>
                </select>
              </div>
              <button 
                class="${this.state.isStreamingSpotValues ? 'secondary-button' : 'primary-button'}" 
                onclick=${() => this.toggleSpotValueStreaming()}
                disabled=${!this.state.oiDeviceConnected}
                style="padding: 8px 16px;">
                ${this.state.isStreamingSpotValues ? 'Stop' : 'Start'} Streaming
              </button>
              <button 
                class="secondary-button" 
                onclick=${() => this.refreshSpotValues()}
                disabled=${!this.state.oiDeviceConnected || this.state.isStreamingSpotValues}
                style="padding: 8px 16px;">
                Refresh Now
              </button>
            </div>
          </div>
        </div>
        
        ${this.renderOverviewContent()}
      </div>
    `
  }

  renderOverviewContent() {
    // Initialize auto-refresh state if needed
    if (typeof this.state.autoRefreshInterval === 'undefined') {
      this.state.autoRefreshInterval = 1000 // Default 1000ms
    }
    
    // Ensure selectedChartParams is initialized
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }

    // Auto-start refresh when connected and tab is active
    if (this.state.oiDeviceConnected && this.state.activeDeviceTab === 'overview') {
      // Auto-load spot values when connected (but not already loading)
      if (!this.state.oiSpotValues && !this.state.isLoadingOiSpotValues) {
        setTimeout(() => this.refreshSpotValues(), 0)
      }
      
      // Start auto-refresh if not already running
      if (!this.autoRefreshTimer) {
        this.autoRefreshTimer = setInterval(() => {
          if (this.state.oiDeviceConnected && this.state.activeDeviceTab === 'overview' && !this.state.isLoadingOiSpotValues) {
            this.refreshSpotValues()
          }
        }, this.state.autoRefreshInterval)
      }
    } else if (this.autoRefreshTimer) {
      // Stop auto-refresh if tab changed or device disconnected
      clearInterval(this.autoRefreshTimer)
      this.autoRefreshTimer = null
    }

    if (!this.state.oiDeviceConnected) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;">📊</div>
          <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
            Connect to a device to view spot values
          </p>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
            Use the Device Connection panel to scan and connect
          </p>
        </div>
      `
    }

    if (this.state.isLoadingOiSpotValues) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <p style="font-size: 16px; color: var(--text-secondary);">Loading spot values...</p>
        </div>
      `
    }

    if (!this.state.oiSpotValues || Object.keys(this.state.oiSpotValues).length === 0) {
      return this.html`
        <div style="padding: 60px 20px; text-align: center;">
          <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
            No spot values available
          </p>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
            Refreshing automatically every ${this.state.autoRefreshInterval}ms...
          </p>
        </div>
      `
    }

    // Group spot values by category
    const categories = {}
    Object.entries(this.state.oiSpotValues).forEach(([name, spot]) => {
      const cat = spot.category || 'Uncategorized'
      if (!categories[cat]) categories[cat] = []
      categories[cat].push({ name, ...spot })
    })

    return this.html`
      <div style="display: flex; flex-direction: column; height: 100%;">
        <!-- Controls Header -->
        <div style="background: var(--bg-secondary); border-bottom: 1px solid var(--border-color); padding: 16px 20px;">
          <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
            <!-- Update interval input -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <label style="font-size: 14px; color: var(--text-secondary); white-space: nowrap;">
                Update Interval:
              </label>
              <input 
                type="number"
                value=${this.state.autoRefreshInterval}
                onchange=${(e) => this.updateRefreshInterval(e.target.value)}
                min="100"
                max="10000"
                step="100"
                style="
                  width: 80px;
                  padding: 8px;
                  border: 1px solid var(--border-color);
                  border-radius: 4px;
                  font-size: 14px;
                  font-family: 'Monaco', 'Courier New', monospace;
                "
              />
              <span style="font-size: 14px; color: var(--text-secondary);">ms</span>
            </div>
            
            <!-- Clear data button -->
            <button 
              class="secondary-button"
              onclick=${() => this.clearSpotValueHistory()}
              style="background: var(--oi-orange); padding: 8px 16px; margin-left: auto;">
              Clear Data
            </button>
          </div>
        </div>

        <!-- Spot Values Content -->
        <div style="flex: 1; overflow-y: auto; padding: 20px;">
          <div class="spot-values-categories">
            ${Object.entries(categories).map(([category, spots]) => this.html`
              <div class="parameter-category">
                <h3 class="category-title">
                  ${category}
                  <span class="param-count">(${spots.length})</span>
                </h3>
                <div class="parameters-list">
                  ${spots.map(spot => this.renderSpotValueCard(spot))}
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>
    `
  }

  renderSpotValueCard(spot) {
    // Ensure selectedChartParams is initialized
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }
    
    const isSelected = this.state.selectedChartParams.has(spot.name)
    const converted = this.convertSpotValue(spot.value, spot.unit)
    const formatted = this.formatParameterValue(spot, converted.value)
    
    // Get historical data for this parameter
    const history = this.state.spotValueHistory[spot.name] || []
    
    // Create a safe ID for the card (replace special chars)
    const cardId = `spot-card-${spot.name.replace(/[^a-zA-Z0-9]/g, '-')}`
    
    // Create click handler function
    const handleClick = () => {
      console.log('[OI] Clicked spot value card:', spot.name)
      this.toggleChartForParam(spot.name)
    }
    
    return this.html`
      <div 
        id="${cardId}"
        data-param-name="${spot.name}"
        role="button"
        tabindex="0"
        onclick=${handleClick}
        onkeydown=${(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
        style="
          background: ${isSelected ? 'var(--bg-tertiary)' : 'var(--bg-secondary)'};
          border: 2px solid ${isSelected ? 'var(--scheme-primary)' : 'var(--border-color)'};
          border-radius: 8px;
          padding: 16px;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 12px;
        "
        onmouseover=${(e) => { 
          e.currentTarget.style.cursor = 'pointer'
          if (!isSelected) e.currentTarget.style.borderColor = 'var(--scheme-primary)' 
        }}
        onmouseout=${(e) => { 
          e.currentTarget.style.cursor = 'pointer'
          if (!isSelected) e.currentTarget.style.borderColor = 'var(--border-color)' 
        }}>
        
        <!-- Spot Value Header -->
        <div style="pointer-events: none;">
          <div style="font-size: 13px; font-weight: 600; color: var(--scheme-primary); margin-bottom: 8px;">
            ${spot.name}
          </div>
          <div class="spot-value-display" style="font-size: 20px; font-weight: 600; font-family: 'Monaco', 'Courier New', monospace; color: var(--text-primary);">
            ${formatted}
          </div>
        </div>
        
        <!-- Mini Chart (if selected and has history) -->
        <div class="mini-chart-container" style="pointer-events: none;">
          ${isSelected && history.length > 1 ? this.renderMiniChart(spot.name, history, converted.unit) : ''}
        </div>
        
        <!-- Click hint -->
        <div style="font-size: 11px; color: var(--text-secondary); text-align: center; opacity: 0.7; pointer-events: none;">
          ${isSelected ? 'Click to hide chart' : 'Click to show chart'}
        </div>
      </div>
    `
  }

  /**
   * Render inline mini-chart using SVG
   * Ported from MultiLineChart.tsx with full axis labels and grid lines
   */
  renderMiniChart(paramName, history, unit) {
    // Base dimensions for coordinate system (will scale responsively)
    // Using larger base width to better fill card width when scaled
    const baseWidth = 500
    const height = 150
    const padding = { top: 10, right: 10, bottom: 40, left: 35 }
    const chartWidth = baseWidth - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    if (history.length < 2) {
      return this.html`
        <div style="width: 100%; height: ${height}px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); font-size: 12px;">
          Collecting data...
        </div>
      `
    }

    // Extract values and timestamps
    const values = history.map(d => d.value)
    const timestamps = history.map(d => d.timestamp)

    const minValue = Math.min(...values)
    const maxValue = Math.max(...values)
    const minTime = Math.min(...timestamps)
    const maxTime = Math.max(...timestamps)

    const valueRange = maxValue - minValue || 1
    const timeRange = maxTime - minTime || 1

    // Scale functions (use baseWidth for coordinate calculations)
    const scaleX = (timestamp) => {
      return padding.left + ((timestamp - minTime) / timeRange) * chartWidth
    }

    const scaleY = (value) => {
      return padding.top + chartHeight - ((value - minValue) / valueRange) * chartHeight
    }

    // Generate Y-axis ticks (5 ticks)
    const yTicks = 5
    const yTickValues = Array.from({ length: yTicks }, (_, i) => {
      return minValue + (valueRange * i) / (yTicks - 1)
    })

    // Generate X-axis ticks (6 ticks)
    const xTicks = 6
    const xTickValues = Array.from({ length: xTicks }, (_, i) => {
      return minTime + (timeRange * i) / (xTicks - 1)
    })

    // Generate SVG path
    const linePath = history.map((point, index) => {
      const x = scaleX(point.timestamp)
      const y = scaleY(point.value)
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
    }).join(' ')

    // Color based on parameter name (consistent hashing)
    const color = this.getColorForParam(paramName)

    return this.html`
      <svg width="100%" height="${height}" viewBox="0 0 ${baseWidth} ${height}" preserveAspectRatio="none" style="display: block; width: 100%;">
        <!-- Y-axis line -->
        <line
          x1="${padding.left}"
          y1="${padding.top}"
          x2="${padding.left}"
          y2="${height - padding.bottom}"
          stroke="#ccc"
          stroke-width="1"
        />

        <!-- X-axis line -->
        <line
          x1="${padding.left}"
          y1="${height - padding.bottom}"
          x2="${baseWidth - padding.right}"
          y2="${height - padding.bottom}"
          stroke="#ccc"
          stroke-width="1"
        />

        <!-- Y-axis ticks, labels, and grid lines -->
        ${yTickValues.map((value, i) => {
          const y = scaleY(value)
          return this.html`
            <g>
              <!-- Tick mark -->
              <line
                x1="${padding.left - 5}"
                y1="${y}"
                x2="${padding.left}"
                y2="${y}"
                stroke="#ccc"
                stroke-width="1"
              />
              <!-- Grid line (horizontal, dashed) -->
              <line
                x1="${padding.left}"
                y1="${y}"
                x2="${baseWidth - padding.right}"
                y2="${y}"
                stroke="#eee"
                stroke-width="1"
                stroke-dasharray="2,2"
              />
              <!-- Y-axis label -->
              <text
                x="${padding.left - 10}"
                y="${y}"
                text-anchor="end"
                dominant-baseline="middle"
                font-size="12"
                fill="#666"
              >
                ${this.formatValue(value)}
              </text>
            </g>
          `
        })}

        <!-- X-axis ticks and labels -->
        ${xTickValues.map((timestamp, i) => {
          const x = scaleX(timestamp)
          return this.html`
            <g>
              <!-- Tick mark -->
              <line
                x1="${x}"
                y1="${height - padding.bottom}"
                x2="${x}"
                y2="${height - padding.bottom + 5}"
                stroke="#ccc"
                stroke-width="1"
              />
              <!-- X-axis label -->
              <text
                x="${x}"
                y="${height - padding.bottom + 20}"
                text-anchor="middle"
                font-size="12"
                fill="#666"
              >
                ${this.formatTime(timestamp)}
              </text>
            </g>
          `
        })}

        <!-- Data line -->
        <path d="${linePath}" fill="none" stroke="${color}" stroke-width="2" opacity="0.8"/>
        
        <!-- Data points -->
        ${history.map(point => {
          const cx = scaleX(point.timestamp)
          const cy = scaleY(point.value)
          return this.html`<circle cx="${cx}" cy="${cy}" r="3" fill="${color}"/>`
        })}
      </svg>
    `
  }

  /**
   * Format a numeric value for display in chart labels
   * Handles edge cases with scientific notation
   * 
   * @param {number} value - The value to format
   * @returns {string} Formatted value string
   */
  formatValue(value) {
    if (Math.abs(value) < 0.01 && value !== 0) return value.toExponential(2)
    if (Math.abs(value) > 10000) return value.toExponential(2)
    return value.toFixed(2)
  }

  /**
   * Format a timestamp for display in chart labels
   * Converts milliseconds to seconds
   * 
   * @param {number} timestamp - Timestamp in milliseconds
   * @returns {string} Formatted time string (e.g., "5s")
   */
  formatTime(timestamp) {
    const seconds = Math.floor(timestamp / 1000)
    return `${seconds}s`
  }

  /**
   * Generate consistent color for a parameter name
   */
  getColorForParam(key) {
    // Simple hash function to generate consistent RGB color
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = ((hash << 5) - hash) + key.charCodeAt(i)
      hash = hash & hash // Convert to 32-bit integer
    }

    // Generate RGB values from hash
    const r = (hash & 0xFF0000) >>> 16
    const g = (hash & 0x00FF00) >>> 8
    const b = hash & 0x0000FF

    // Map values to range 60-200 to avoid too light or too dark colors
    const normalize = (val) => 60 + (val / 255) * 140

    const values = [normalize(r), normalize(g), normalize(b)]

    // If all values are too high (too light), darken the lowest one
    if (values.every(v => v > 150)) {
      const minIndex = values.indexOf(Math.min(...values))
      values[minIndex] = Math.max(60, values[minIndex] - 80)
    }

    return `rgb(${Math.round(values[0])}, ${Math.round(values[1])}, ${Math.round(values[2])})`
  }

  /**
   * Toggle chart visibility for a parameter
   */
  toggleChartForParam(paramName) {
    // Ensure selectedChartParams is initialized
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }
    
    console.log('[OI Overview] toggleChartForParam called for:', paramName)
    console.log('[OI Overview] Current selectedChartParams:', Array.from(this.state.selectedChartParams))
    
    if (this.state.selectedChartParams.has(paramName)) {
      this.state.selectedChartParams.delete(paramName)
      console.log('[OI Overview] Hiding chart for:', paramName)
    } else {
      this.state.selectedChartParams.add(paramName)
      const history = this.state.spotValueHistory[paramName] || []
      console.log('[OI Overview] Showing chart for:', paramName, '- data points:', history.length)
    }
    
    console.log('[OI Overview] Updated selectedChartParams:', Array.from(this.state.selectedChartParams))
    this.emit('render')
  }

  /**
   * Toggle spot value streaming on/off
   */
  toggleSpotValueStreaming() {
    if (this.state.isStreamingSpotValues) {
      // Stop streaming
      if (this.state.spotValueStreamTimer) {
        clearInterval(this.state.spotValueStreamTimer)
        this.state.spotValueStreamTimer = null
      }
      this.state.isStreamingSpotValues = false
    } else {
      // Start streaming
      this.state.isStreamingSpotValues = true
      this.streamSpotValues()
      this.state.spotValueStreamTimer = setInterval(() => {
        this.streamSpotValues()
      }, this.state.spotValueInterval)
    }
    this.emit('render')
  }

  /**
   * Stream spot values (called by interval timer)
   */
  async streamSpotValues() {
    if (!this.state.oiDeviceConnected || !this.state.isStreamingSpotValues) {
      return
    }

    try {
      const spots = await this.getSpotValues()
      if (spots) {
        this.state.oiSpotValues = spots
        
        // Update historical data
        const timestamp = Date.now()
        Object.entries(spots).forEach(([name, spot]) => {
          if (!this.state.spotValueHistory[name]) {
            this.state.spotValueHistory[name] = []
          }
          
          // Convert value if needed
          const converted = this.convertSpotValue(spot.value, spot.unit)
          
          // Add data point
          this.state.spotValueHistory[name].push({
            timestamp,
            value: converted.value
          })
          
          // Limit history to 100 points
          if (this.state.spotValueHistory[name].length > 100) {
            this.state.spotValueHistory[name] = this.state.spotValueHistory[name].slice(-100)
          }
        })
        
        this.emit('render')
      }
    } catch (error) {
      console.error('[OI Overview] Stream error:', error)
    }
  }

  /**
   * Render Spot Values panel (legacy)
   * Displays read-only live values from the controller
   */
  renderSpotvalues() {
    // Only auto-load when OpenInverter device is connected, not just WebREPL
    if (!this.state.oiSpotValues && !this.state.isLoadingOiSpotValues && this.state.oiDeviceConnected) {
      // Use setTimeout to avoid blocking render
      setTimeout(() => this.refreshSpotValues(), 0)
    }

    return this.html`
      <div class="system-panel">
        <div class="panel-header oi-compact-header">
          <h2>Spot Values</h2>
          <div class="panel-actions oi-button-row">
            <button 
              class="refresh-button" 
              onclick=${() => this.refreshSpotValues()}
              disabled=${!this.state.isConnected}
            >
              Refresh
            </button>
          </div>
        </div>
        
        ${this.renderSpotValuesContent()}
      </div>
    `
  }

  renderSpotValuesContent() {
    console.log('[OI App] renderSpotValuesContent - state:', {
      isConnected: this.state.isConnected,
      isLoading: this.state.isLoadingOiSpotValues,
      hasSpotValues: !!this.state.oiSpotValues,
      spotValuesKeys: this.state.oiSpotValues ? Object.keys(this.state.oiSpotValues) : []
    })

    if (!this.state.isConnected) {
      return this.html`
        <div class="panel-message">
          <p>Connect to device to view spot values</p>
        </div>
      `
    }

    if (this.state.isLoadingOiSpotValues) {
      return this.html`
        <div class="panel-message">
          <p>Loading spot values...</p>
        </div>
      `
    }

    if (!this.state.oiSpotValues || Object.keys(this.state.oiSpotValues).length === 0) {
      return this.html`
        <div class="panel-message">
          <p>No spot values available. Click "Refresh" to fetch values.</p>
        </div>
      `
    }

    // Group by category
    const categories = {}
    Object.entries(this.state.oiSpotValues).forEach(([name, spot]) => {
      const cat = spot.category || 'Uncategorized'
      if (!categories[cat]) categories[cat] = []
      categories[cat].push({ name, ...spot })
    })

    return this.html`
      <div class="oi-spotvalues-container">
        ${Object.entries(categories).map(([category, spots]) => this.renderSpotValueCategory(category, spots))}
      </div>
    `
  }

  renderSpotValueCategory(category, spots) {
    return this.html`
      <div class="oi-category-section">
        <h3 class="oi-category-title">${category}</h3>
        <div class="oi-spotvalues-grid">
          ${spots.map(spot => this.renderSpotValueCard(spot))}
        </div>
      </div>
    `
  }

  renderSpotValueCard(spot) {
    // Ensure selectedChartParams is initialized
    if (!this.state.selectedChartParams) {
      this.state.selectedChartParams = new Set()
    }
    
    const isSelected = this.state.selectedChartParams.has(spot.name)
    const converted = this.convertSpotValue(spot.value, spot.unit)
    const formatted = this.formatParameterValue(spot, converted.value)
    
    // Get historical data for this parameter
    const history = this.state.spotValueHistory[spot.name] || []
    
    // Create click handler function
    const handleClick = () => {
      console.log('[OI] Clicked spot value card:', spot.name)
      this.toggleChartForParam(spot.name)
    }
    
    return this.html`
      <div 
        class="oi-spotvalue-card parameter-item"
        role="button"
        tabindex="0"
        onclick=${handleClick}
        onkeydown=${(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleClick()
          }
        }}
        style="
          background: ${isSelected ? 'var(--bg-secondary)' : 'transparent'};
          padding: 0.75rem;
          border-radius: 6px;
          border: 2px solid ${isSelected ? 'var(--oi-blue)' : 'transparent'};
          cursor: pointer;
          user-select: none;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        "
        onmouseover=${(e) => { 
          if (!isSelected) {
            e.currentTarget.style.borderColor = 'var(--oi-blue)'
            e.currentTarget.style.background = 'var(--oi-blue-light)'
          }
        }}
        onmouseout=${(e) => { 
          if (!isSelected) {
            e.currentTarget.style.borderColor = 'transparent'
            e.currentTarget.style.background = 'transparent'
          }
        }}>
        <div class="parameter-header">
          <label class="parameter-label oi-spotvalue-name" style="font-size: 0.9rem; font-weight: 500;">
            ${spot.name}
          </label>
        </div>
        <div class="parameter-value oi-spotvalue-value" style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary); font-family: 'Monaco', 'Courier New', monospace;">
          ${formatted}
        </div>
        ${isSelected && history.length > 1 ? this.html`
          <div style="width: 100%; margin-top: 0.5rem; overflow: visible; pointer-events: none;">
            ${this.renderMiniChart(spot.name, history, converted.unit)}
          </div>
        ` : ''}
        <div style="font-size: 11px; color: var(--text-secondary); text-align: center; opacity: 0.7; margin-top: 4px; pointer-events: none;">
          ${isSelected ? 'Click to hide chart' : 'Click to show chart'}
        </div>
      </div>
    `
  }

  async refreshSpotValues() {
    if (this.state.isLoadingOiSpotValues) {
      console.log('[OI App] Already loading spot values, skipping')
      return
    }

    this.state.isLoadingOiSpotValues = true

    try {
      const spots = await this.getSpotValues()
      
      // Update historical data for charts
      const timestamp = Date.now()
      if (!this.state.spotValueHistory) {
        this.state.spotValueHistory = {}
      }
      
      Object.entries(spots).forEach(([name, spot]) => {
        // Add to history for charts
        if (!this.state.spotValueHistory[name]) {
          this.state.spotValueHistory[name] = []
        }
        
        this.state.spotValueHistory[name].push({
          timestamp: timestamp,
          value: spot.value
        })
        
        // Keep only last 100 points
        if (this.state.spotValueHistory[name].length > 100) {
          this.state.spotValueHistory[name] = this.state.spotValueHistory[name].slice(-100)
        }
      })
      
      this.state.oiSpotValues = spots
      this.state.isLoadingOiSpotValues = false
      
      // Always re-render (nanohtml is efficient with DOM diffing)
      this.emit('render')
    } catch (error) {
      console.error('[OI App] Failed to load spot values:', error)
      this.state.isLoadingOiSpotValues = false
      this.emit('render')
      alert(`Failed to load spot values: ${error.message}`)
    }
  }

  /**
   * Update spot values in the DOM without full re-render (for smooth auto-refresh)
   */
  /**
   * Update the refresh interval and restart auto-refresh if needed
   */
  updateRefreshInterval(value) {
    const interval = parseInt(value)
    if (isNaN(interval) || interval < 100) {
      console.warn('[OI Overview] Invalid interval, using minimum 100ms')
      this.state.autoRefreshInterval = 100
    } else if (interval > 10000) {
      console.warn('[OI Overview] Invalid interval, using maximum 10000ms')
      this.state.autoRefreshInterval = 10000
    } else {
      this.state.autoRefreshInterval = interval
    }
    
    console.log('[OI Overview] Update interval changed to:', this.state.autoRefreshInterval, 'ms')
    
    // Restart auto-refresh with new interval
    if (this.autoRefreshTimer) {
      clearInterval(this.autoRefreshTimer)
      this.autoRefreshTimer = null
      // The render cycle will restart it automatically
    }
    
    this.emit('render')
  }

  /**
   * Clear spot value history (for charts)
   */
  clearSpotValueHistory() {
    console.log('[OI Overview] Clearing spot value history')
    this.state.spotValueHistory = {}
    this.emit('render')
  }

  /**
   * Render CAN Mapping panel
   * Configure CAN bus mapping for parameters
   */
  renderCanmapping() {
    return this.html`
      <div class="system-panel">
        <div class="panel-header">
          <h2>CAN Mapping</h2>
        </div>
        
        <div class="panel-message">
          <p>CAN Mapping interface coming soon...</p>
          <p>This panel will allow you to configure CAN bus message mapping.</p>
        </div>
      </div>
    `
  }

  renderCanmappingContent() {
    return this.html`
      <div style="padding: 60px 20px; text-align: center;">
        <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;">📡</div>
        <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
          CAN Mapping interface coming soon
        </p>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
          This panel will allow you to configure CAN bus message mapping
        </p>
      </div>
    `
  }

  /**
   * Render CAN Messages panel
   * Send and monitor CAN bus messages
   */
  renderCanmessages() {
    return this.html`
      <div class="system-panel">
        <div class="panel-header" style="padding: 20px; border-bottom: 1px solid var(--border-color);">
          <h2 style="margin: 0; font-size: 24px; color: white;">CAN Messages</h2>
          <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
            Send and monitor CAN bus traffic
          </p>
        </div>
        
        <div style="padding: 60px 20px; text-align: center;">
          <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;">📨</div>
          <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
            CAN Message interface coming soon
          </p>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
            This panel will allow you to send arbitrary CAN messages and monitor CAN bus traffic
          </p>
        </div>
      </div>
    `
  }

  renderCanmessagesContent() {
    return this.html`
      <div style="padding: 60px 20px; text-align: center;">
        <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;">📨</div>
        <p style="font-size: 16px; color: var(--text-secondary); margin: 0;">
          CAN Message interface coming soon
        </p>
        <p style="font-size: 13px; color: var(--text-secondary); margin: 8px 0 0;">
          This panel will allow you to send arbitrary CAN messages and monitor CAN bus traffic
        </p>
      </div>
    `
  }

  /**
   * Render Firmware Upgrade panel
   * Upload new firmware to an OpenInverter device
   */
  renderFirmware() {
    if (!this.state.firmwareUpgrade) {
      this.state.firmwareUpgrade = {
        selectedFile: null,
        serialNumber: '',
        recoveryMode: false,
        inProgress: false,
        progress: 0,
        status: '',
        error: null
      }
    }

    const fw = this.state.firmwareUpgrade

    return this.html`
      <div class="system-panel">
        <div class="panel-header oi-compact-header">
          <h2>Firmware Upgrade</h2>
        </div>
        
        <div class="oi-parameters-container">
          <!-- Warning Notice -->
          <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 16px; margin-bottom: 24px; color: #92400e;">
            <strong>⚠️ Warning:</strong> Firmware upgrades are potentially dangerous. 
            Do not interrupt the process once started. Ensure stable power supply.
          </div>
          
          <!-- File Selection -->
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="font-size: 16px; margin-bottom: 16px;">Firmware File</h3>
            
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <input 
                type="file" 
                accept=".bin"
                onchange=${(e) => this.selectFirmwareFile(e)}
                disabled=${fw.inProgress}
                style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary);"
              />
              
              ${fw.selectedFile ? this.html`
                <div style="font-size: 13px; color: var(--text-secondary);">
                  Selected: <span style="font-family: monospace; color: var(--text-primary);">${fw.selectedFile.name}</span>
                  (${(fw.selectedFile.size / 1024).toFixed(1)} KB)
                </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Upgrade Options -->
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="font-size: 16px; margin-bottom: 16px;">Upgrade Options</h3>
            
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <!-- Recovery Mode -->
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input 
                  type="checkbox" 
                  checked=${fw.recoveryMode}
                  onchange=${(e) => { fw.recoveryMode = e.target.checked; this.emit('render'); }}
                  disabled=${fw.inProgress}
                  style="width: 16px; height: 16px;"
                />
                <span>Recovery Mode (for bricked devices)</span>
              </label>
              
              <!-- Serial Number (for recovery mode) -->
              ${fw.recoveryMode ? this.html`
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; color: var(--text-secondary);">
                    Device Serial Number (8 hex digits, optional)
                  </span>
                  <input 
                    type="text" 
                    placeholder="e.g. 1A2B3C4D"
                    maxlength="8"
                    value=${fw.serialNumber}
                    oninput=${(e) => { fw.serialNumber = e.target.value.toUpperCase(); this.emit('render'); }}
                    disabled=${fw.inProgress}
                    style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-family: monospace; width: 200px;"
                  />
                  <span style="font-size: 12px; color: var(--text-secondary);">
                    Leave empty to upgrade the first device that boots
                  </span>
                </label>
              ` : ''}
              
              <!-- Normal Mode Info -->
              ${!fw.recoveryMode && this.state.oiDeviceConnected ? this.html`
                <div style="font-size: 13px; color: var(--text-secondary);">
                  Will upgrade device at Node ID ${this.state.selectedNodeId}. 
                  The device will be automatically reset.
                </div>
              ` : !fw.recoveryMode ? this.html`
                <div style="font-size: 13px; color: #ef4444;">
                  Please connect to a device first (Device Control panel)
                </div>
              ` : ''}
            </div>
          </div>
          
          <!-- Upgrade Progress -->
          ${fw.inProgress || fw.error || fw.status ? this.html`
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h3 style="font-size: 16px; margin-bottom: 16px;">Progress</h3>
              
              ${fw.error ? this.html`
                <div style="padding: 12px; background: #fee2e2; border: 1px solid #ef4444; border-radius: 4px; color: #991b1b; margin-bottom: 12px;">
                  <strong>Error:</strong> ${fw.error}
                </div>
              ` : ''}
              
              <div style="margin-bottom: 8px;">
                <div style="font-size: 14px; color: var(--text-primary); margin-bottom: 8px;">
                  ${fw.status}
                </div>
                <div style="width: 100%; height: 24px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden;">
                  <div style="height: 100%; background: var(--scheme-primary); transition: width 0.3s; width: ${fw.progress}%;"></div>
                </div>
                <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px; text-align: right;">
                  ${fw.progress.toFixed(1)}%
                </div>
              </div>
            </div>
          ` : ''}
          
          <!-- Start Upgrade Button -->
          <div style="display: flex; justify-content: center;">
            <button 
              class="primary-button" 
              onclick=${() => this.startFirmwareUpgrade()}
              disabled=${!fw.selectedFile || fw.inProgress || !this.state.isConnected || (!fw.recoveryMode && !this.state.oiDeviceConnected)}
              style="padding: 12px 32px; font-size: 16px;">
              ${fw.inProgress ? 'Upgrading...' : 'Start Firmware Upgrade'}
            </button>
          </div>
        </div>
      </div>
    `
  }

  /**
   * Render Plot panel
   * Real-time plotting of selected parameters
   */
  renderPlot() {
    // Initialize plot state if needed
    if (!this.state.plotState) {
      this.state.plotState = {
        isPlotting: false,
        isPaused: false,
        selectedVars: [],
        chart: null,
        maxDataPoints: 100,
        updateInterval: 100 // ms
      }
    }

    return this.html`
      <div class="system-panel">
        <div class="panel-header oi-compact-header">
          <h2>Live Plot</h2>
          <div class="panel-actions oi-plot-controls">
            ${this.state.plotState.isPlotting ? this.html`
              <div class="button">
                <button 
                  class="${this.state.plotState.isPaused ? '' : 'active'}"
                  onclick=${() => this.pauseResumePlot()}
                  title="${this.state.plotState.isPaused ? 'Resume' : 'Pause'} plotting">
                  ${this.state.plotState.isPaused ? this.html`
                    <img class="icon" src=${this.icon('playerPlay', 20)} />
                  ` : this.html`
                    <img class="icon" src=${this.icon('playerPause', 20)} />
                  `}
                </button>
                <div class="label active">${this.state.plotState.isPaused ? 'Run' : 'Pause'}</div>
              </div>
              <div class="button">
                <button 
                  onclick=${() => this.stopPlot()}
                  title="Stop plotting">
                  <img class="icon" src=${this.icon('playerStop', 20)} />
                </button>
                <div class="label active">Stop</div>
              </div>
            ` : this.html`
              <div class="button">
                <button 
                  disabled=${!this.state.isConnected || this.state.plotState.selectedVars.length === 0}
                  onclick=${() => this.startPlot()}
                  title="Start plotting selected variables">
                  <img class="icon" src=${this.icon('playerPlay', 20)} />
                </button>
                <div class="label ${(!this.state.isConnected || this.state.plotState.selectedVars.length === 0) ? 'inactive' : 'active'}">Start Plot</div>
              </div>
            `}
          </div>
        </div>

        ${this.renderPlotContent()}
      </div>
    `
  }

  renderPlotContent() {
    if (!this.state.isConnected) {
      return this.html`
        <div class="panel-message">
          <p>Connect to device to use live plotting</p>
        </div>
      `
    }

    if (!this.state.oiSpotValues) {
      // Auto-load spot values if not already loaded
      if (!this.state.isLoadingOiSpotValues) {
        setTimeout(() => this.refreshSpotValues(), 0)
      }
      return this.html`
        <div class="panel-message">
          <p>Loading spot values...</p>
          <p>Please wait while we fetch available signals.</p>
        </div>
      `
    }

    return this.html`
      <div class="oi-plot-container">
        <div class="oi-plot-sidebar">
          <h3 class="oi-plot-section-title">Select Signals</h3>
          <div class="oi-plot-signal-list">
            ${Object.entries(this.state.oiSpotValues).map(([name, spot]) => this.renderPlotSignal(name, spot))}
          </div>
          
          <h3 class="oi-plot-section-title">Plot Settings</h3>
          <div class="oi-plot-settings">
            <label>
              Max Data Points:
              <input 
                type="number" 
                value="${this.state.plotState.maxDataPoints}" 
                min="50" 
                max="1000" 
                step="50"
                onchange=${(e) => { this.state.plotState.maxDataPoints = parseInt(e.target.value) }}
              />
            </label>
            <label>
              Update Interval (ms):
              <input 
                type="number" 
                value="${this.state.plotState.updateInterval}" 
                min="50" 
                max="1000" 
                step="50"
                onchange=${(e) => { this.state.plotState.updateInterval = parseInt(e.target.value) }}
              />
            </label>
          </div>
        </div>
        
        <div class="oi-plot-chart-area">
          <canvas id="oi-plot-canvas"></canvas>
        </div>
      </div>
    `
  }

  renderPlotSignal(name, spot) {
    const isSelected = this.state.plotState.selectedVars.includes(name)

    return this.html`
      <div class="oi-plot-signal">
        <label>
          <input 
            type="checkbox" 
            checked=${isSelected}
            onchange=${(e) => this.togglePlotVariable(name, e.target.checked)}
            disabled=${this.state.plotState.isPlotting}
          />
          <span class="oi-plot-signal-name">${name}</span>
          <span class="oi-plot-signal-unit">${spot.unit || ''}</span>
        </label>
      </div>
    `
  }

  togglePlotVariable(varName, isChecked) {
    if (isChecked) {
      if (!this.state.plotState.selectedVars.includes(varName)) {
        this.state.plotState.selectedVars.push(varName)
      }
    } else {
      this.state.plotState.selectedVars = this.state.plotState.selectedVars.filter(v => v !== varName)
    }
    this.emit('render')
  }

  async startPlot() {
    if (this.state.plotState.selectedVars.length === 0) {
      alert('Please select at least one variable to plot')
      return
    }

    this.state.plotState.isPlotting = true
    this.state.plotState.isPaused = false
    this.emit('render')

    // Wait for render to complete and canvas to be available
    setTimeout(() => this.initializeChart(), 100)
  }

  initializeChart() {
    const canvas = document.getElementById('oi-plot-canvas')
    if (!canvas) {
      console.error('[OI Plot] Canvas not found')
      return
    }

    // Destroy existing chart if any
    if (this.state.plotState.chart) {
      try {
        this.state.plotState.chart.destroy()
      } catch (e) {
        console.warn('[OI Plot] Error destroying old chart:', e)
      }
    }

    // Don't set explicit canvas dimensions - let Chart.js handle it with responsive mode
    // Setting explicit dimensions conflicts with Chart.js responsive sizing
    const ctx = canvas.getContext('2d')
    const colors = [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 159, 64)',
      'rgb(153, 102, 255)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ]

    const datasets = this.state.plotState.selectedVars.map((varName, idx) => ({
      label: varName,
      data: [],
      borderColor: colors[idx % colors.length],
      backgroundColor: colors[idx % colors.length],
      fill: false,
      pointRadius: 0,
      borderWidth: 2
    }))

    this.state.plotState.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Time (s)'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value'
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          }
        },
        onResize: null  // Disable automatic resize handler - Chart.js responsive mode handles it automatically
      }
    })

    // Start data acquisition
    this.state.plotState.dataTime = 0
    this.acquirePlotData()
  }

  async acquirePlotData() {
    if (!this.state.plotState.isPlotting || this.state.plotState.isPaused) {
      return
    }

    try {
      const varNames = this.state.plotState.selectedVars

      if (!varNames || varNames.length === 0) {
        console.error('[OI Plot] No variables selected!')
        this.stopPlot()
        return
      }

      const argsStr = JSON.stringify(varNames)
      const result = await this.device.execute(`from lib.OI_helpers import getPlotData; getPlotData(${argsStr})`)
      const parsed = this.device.parseJSON(result)
      const data = parsed

      if (data && data.values) {
        // Check if chart still exists
        if (!this.state.plotState.chart) {
          // Chart missing - re-initialize if plotting
          const canvas = document.getElementById('oi-plot-canvas')
          if (this.state.plotState.isPlotting && canvas) {
            console.warn('[OI Plot] Chart missing, re-initializing...')
            this.initializeChart()
          }
          return
        }
        
        // Try to update the chart - if it fails, then re-initialize
        // Don't check canvas references because they change on re-render
        // Chart.js will handle its own canvas management
        try {
          // Test if chart is still functional by checking if we can access its data
          if (!this.state.plotState.chart.data || !this.state.plotState.chart.data.datasets) {
            throw new Error('Chart data structure invalid')
          }
        } catch (e) {
          // Chart is broken - re-initialize
          const canvas = document.getElementById('oi-plot-canvas')
          if (this.state.plotState.isPlotting && canvas) {
            console.warn('[OI Plot] Chart broken, re-initializing...', e)
            this.initializeChart()
          }
          return
        }

        // Add new data point
        this.state.plotState.dataTime++
        this.state.plotState.chart.data.labels.push(this.state.plotState.dataTime)

        // Update each dataset
        for (const varName of varNames) {
          const dataset = this.state.plotState.chart.data.datasets.find(d => d.label === varName)
          if (dataset && data.values[varName] !== undefined) {
            dataset.data.push(data.values[varName])
          }
        }

        // Trim old data
        const maxPoints = this.state.plotState.maxDataPoints
        if (this.state.plotState.chart.data.labels.length > maxPoints) {
          this.state.plotState.chart.data.labels.shift()
          this.state.plotState.chart.data.datasets.forEach(dataset => dataset.data.shift())
        }

        this.state.plotState.chart.update('none') // Update without animation
      }

      // Schedule next acquisition
      setTimeout(() => this.acquirePlotData(), this.state.plotState.updateInterval)
    } catch (error) {
      console.error('[OI Plot] Failed to acquire data:', error)
      this.stopPlot()
    }
  }

  pauseResumePlot() {
    this.state.plotState.isPaused = !this.state.plotState.isPaused
    this.emit('render')

    if (this.state.plotState.isPaused) {
      // When pausing, force chart update to recalculate scales based on all current data
      // Use setTimeout to ensure render completes and DOM is stable before updating chart
      setTimeout(() => {
        if (this.state.plotState.chart && this.state.plotState.isPaused) {
          try {
            const chart = this.state.plotState.chart
            const canvas = document.getElementById('oi-plot-canvas')
            
            if (!canvas) {
              console.warn('[OI Plot] Canvas not found during pause')
              return
            }
            
            // CRITICAL: Force Chart.js to recalculate container size before updating
            // This fixes the DOM dimension issue where chart reads wrong container size
            chart.resize()
            
            // Reset scale to auto-scale from all data
            const yScale = chart.scales.y
            if (yScale) {
              yScale.options.min = undefined
              yScale.options.max = undefined
            }
            
            // Update chart - this will recalculate scales from all data with correct container size
            chart.update('none')
          } catch (e) {
            console.warn('[OI Plot] Chart update failed during pause:', e)
          }
        }
      }, 100) // Increased timeout to ensure DOM is fully stable
    } else {
      // When resuming, reset scale to auto and continue data acquisition
      setTimeout(() => {
        if (!this.state.plotState.isPaused && this.state.plotState.chart) {
          try {
            // Force resize to ensure correct dimensions
            this.state.plotState.chart.resize()
            // Reset to auto-scaling when resuming
            const yScale = this.state.plotState.chart.scales.y
            if (yScale) {
              yScale.options.min = undefined
              yScale.options.max = undefined
            }
          } catch (e) {
            // Ignore errors when resetting scale
          }
          this.acquirePlotData()
        }
      }, 0)
    }
  }

  stopPlot() {
    this.state.plotState.isPlotting = false
    this.state.plotState.isPaused = false

    if (this.state.plotState.chart) {
      this.state.plotState.chart.destroy()
      this.state.plotState.chart = null
    }

    this.emit('render')
  }

  renderFirmwareContent() {
    if (!this.state.firmwareUpgrade) {
      this.state.firmwareUpgrade = {
        selectedFile: null,
        serialNumber: '',
        recoveryMode: false,
        inProgress: false,
        progress: 0,
        status: '',
        error: null
      }
    }

    const fw = this.state.firmwareUpgrade

    return this.html`
      <div style="padding: 20px;">
        <!-- Warning Notice -->
        <div style="background: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 16px; margin-bottom: 24px; color: #92400e;">
          <strong>⚠️ Warning:</strong> Firmware upgrades are potentially dangerous. 
          Do not interrupt the process once started. Ensure stable power supply.
        </div>
        
        <!-- File Selection -->
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <h3 style="font-size: 16px; margin-bottom: 16px;">Firmware File</h3>
          
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <input 
              type="file" 
              accept=".bin"
              onchange=${(e) => this.selectFirmwareFile(e)}
              disabled=${fw.inProgress}
              style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary);"
            />
            
            ${fw.selectedFile ? this.html`
              <div style="font-size: 13px; color: var(--text-secondary);">
                Selected: <span style="font-family: monospace; color: var(--text-primary);">${fw.selectedFile.name}</span>
                (${(fw.selectedFile.size / 1024).toFixed(1)} KB)
              </div>
            ` : ''}
          </div>
        </div>
        
        <!-- Upgrade Options -->
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <h3 style="font-size: 16px; margin-bottom: 16px;">Upgrade Options</h3>
          
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input 
                type="checkbox" 
                checked=${fw.recoveryMode}
                onchange=${(e) => { fw.recoveryMode = e.target.checked; this.emit('render'); }}
                disabled=${fw.inProgress}
                style="width: 16px; height: 16px;"
              />
              <span>Recovery Mode (for bricked devices)</span>
            </label>
            
            ${fw.recoveryMode ? this.html`
              <label style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-size: 13px; color: var(--text-secondary);">
                  Device Serial Number (8 hex digits, optional)
                </span>
                <input 
                  type="text" 
                  placeholder="e.g. 1A2B3C4D"
                  maxlength="8"
                  value=${fw.serialNumber}
                  oninput=${(e) => { fw.serialNumber = e.target.value.toUpperCase(); this.emit('render'); }}
                  disabled=${fw.inProgress}
                  style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); font-family: monospace; width: 200px;"
                />
                <span style="font-size: 12px; color: var(--text-secondary);">
                  Leave empty to upgrade the first device that boots
                </span>
              </label>
            ` : ''}
            
            ${!fw.recoveryMode && this.state.oiDeviceConnected ? this.html`
              <div style="font-size: 13px; color: var(--text-secondary);">
                Will upgrade device at Node ID ${this.state.selectedNodeId}. 
                ${this.state.currentDeviceSerial ? `Serial: ${this.state.currentDeviceSerial}` : ''}
              </div>
            ` : ''}
          </div>
        </div>
        
        <!-- Start/Cancel Buttons -->
        <div style="display: flex; gap: 12px; margin-bottom: 24px;">
          <button 
            class="primary-button"
            onclick=${() => this.startFirmwareUpgrade()}
            disabled=${!fw.selectedFile || fw.inProgress || (!fw.recoveryMode && !this.state.oiDeviceConnected)}
            style="flex: 1;"
          >
            ${fw.inProgress ? 'Upgrading...' : 'Start Upgrade'}
          </button>
          
          ${fw.inProgress ? this.html`
            <button 
              class="secondary-button"
              onclick=${() => this.cancelFirmwareUpgrade()}
            >
              Cancel
            </button>
          ` : ''}
        </div>
        
        <!-- Progress/Status Display -->
        ${fw.inProgress || fw.status || fw.error ? this.html`
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px;">
            ${fw.inProgress ? this.html`
              <div>
                <div style="margin-bottom: 12px;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="font-weight: 600;">Progress</span>
                    <span style="font-family: monospace;">${fw.progress}%</span>
                  </div>
                  <div style="width: 100%; height: 24px; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, #4ade80, #22c55e); width: ${fw.progress}%; transition: width 0.3s;"></div>
                  </div>
                </div>
                ${fw.status ? this.html`
                  <div style="font-size: 13px; color: var(--text-secondary); margin-top: 8px;">
                    ${fw.status}
                  </div>
                ` : ''}
              </div>
            ` : fw.error ? this.html`
              <div style="color: #ef4444;">
                <strong>Error:</strong> ${fw.error}
              </div>
            ` : fw.status ? this.html`
              <div style="color: #22c55e;">
                <strong>Success:</strong> ${fw.status}
              </div>
            ` : ''}
          </div>
        ` : ''}
        
        <!-- Help Text -->
        ${!fw.inProgress ? this.html`
          <div style="margin-top: 24px; padding: 16px; background: var(--bg-highlight); border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px; color: var(--text-secondary);">
            <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">How to use:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Select a .bin firmware file from your computer</li>
              <li>For normal upgrades: Connect to a device first, then click "Start Upgrade"</li>
              <li>For recovery: Check "Recovery Mode", optionally enter device serial, then power cycle the device and click "Start Upgrade" immediately</li>
              <li>Do NOT disconnect power or WebREPL during the upgrade</li>
            </ul>
          </div>
        ` : ''}
      </div>
    `
  }

  /**
   * Render Commands panel
   * Device control commands: save/load parameters, start/stop, reset
   */
  renderCommands() {
    // Initialize state
    if (!this.state.canScanResults) {
      this.state.canScanResults = []
    }
    if (!this.state.selectedNodeId) {
      this.state.selectedNodeId = 1
    }
    if (this.state.oiDeviceConnected === undefined) {
      this.state.oiDeviceConnected = false
    }
    if (this.state.isScanning === undefined) {
      this.state.isScanning = false
    }

    return this.html`
      <div class="oi-parameters-container">
        <h2 style="color: var(--scheme-primary); margin-bottom: 20px;">Device Control</h2>
        
        <!-- Device Connection Status & Control -->
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <h3 style="font-size: 16px; margin-bottom: 16px;">OpenInverter Connection</h3>
          
          <!-- Connection Status -->
          ${this.state.oiDeviceConnected ? this.html`
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background: #4ade80;"></div>
              <span style="color: #4ade80; font-weight: 600;">Connected to Node ID ${this.state.selectedNodeId}</span>
            </div>
            
            <button 
              class="secondary-button" 
              onclick=${() => this.disconnectDevice()}>
              Disconnect
            </button>
          ` : this.html`
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
              <div style="width: 12px; height: 12px; border-radius: 50%; background: #ef4444;"></div>
              <span style="color: #ef4444; font-weight: 600;">Not Connected to OpenInverter Device</span>
            </div>
            
            <!-- CAN Bus Scanner -->
            <div style="margin-bottom: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <h4 style="font-size: 14px; margin: 0; color: var(--text-secondary);">Scan CAN Bus for Devices</h4>
                <div style="display: flex; gap: 8px;">
                  <button 
                    class="refresh-button" 
                    onclick=${() => this.scanCanBus(false)}
                    disabled=${!this.state.isConnected || this.state.isScanning}
                    style="padding: 8px 16px; font-size: 13px;">
                    ${this.state.isScanning ? 'Scanning...' : 'Quick Scan'}
                  </button>
                  <button 
                    class="refresh-button" 
                    onclick=${() => this.scanCanBus(true)}
                    disabled=${!this.state.isConnected || this.state.isScanning}
                    style="padding: 8px 16px; font-size: 13px;">
                    Full Scan
                  </button>
                </div>
              </div>
              
              ${!this.state.isConnected ? this.html`
                <div style="text-align: center; padding: 16px; color: #ef4444; font-size: 13px; background: rgba(239, 68, 68, 0.1); border-radius: 4px;">
                  <p>⚠️ Please connect to ESP32 device via WebREPL first</p>
                </div>
              ` : this.state.isScanning ? this.html`
                <div style="padding: 16px;">
                  <div style="margin-bottom: 12px; color: var(--text-secondary); font-size: 13px; text-align: center;">
                    <p>Scanning CAN bus for devices...</p>
                    <p style="font-size: 12px; margin-top: 8px;">This may take a few seconds</p>
                  </div>
                </div>
              ` : this.state.scanMessage ? this.html`
                <div style="text-align: center; padding: 16px; color: var(--text-secondary); font-size: 13px; background: var(--bg-tertiary); border-radius: 4px;">
                  <p>${this.state.scanMessage}</p>
                </div>
              ` : this.state.canScanResults.length === 0 ? this.html`
                <div style="text-align: center; padding: 16px; color: var(--text-secondary); font-size: 13px;">
                  <p>Click "Quick Scan" to check node IDs 1-10, or "Full Scan" to check all 127 node IDs</p>
                </div>
              ` : this.html`
                <div style="border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden; font-size: 13px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                      <tr style="background: var(--bg-tertiary);">
                        <th style="padding: 6px 8px; text-align: left;">Node</th>
                        <th style="padding: 6px 8px; text-align: left;">Serial</th>
                        <th style="padding: 6px 8px; text-align: left;">Type</th>
                        <th style="padding: 6px 8px; text-align: left;"></th>
                      </tr>
                    </thead>
                    <tbody>
                      ${this.state.canScanResults.map(device => this.html`
                        <tr style="border-top: 1px solid var(--border-color);">
                          <td style="padding: 6px 8px;">${device.nodeId}</td>
                          <td style="padding: 6px 8px; font-family: monospace; font-size: 12px;">${device.serialNumber || '—'}</td>
                          <td style="padding: 6px 8px; font-size: 12px;">OI</td>
                          <td style="padding: 6px 8px; text-align: right;">
                            <button 
                              class="secondary-button" 
                              style="padding: 4px 8px; font-size: 11px;"
                              onclick=${() => this.connectToNode(device.nodeId)}>
                              Connect
                            </button>
                          </td>
                        </tr>
                      `)}
                    </tbody>
                  </table>
                </div>
              `}
            </div>
            
            <!-- Manual Connection (alternative to scanning) -->
            <div style="border-top: 1px solid var(--border-color); padding-top: 16px;">
              <h4 style="font-size: 14px; margin-bottom: 12px; color: var(--text-secondary);">Or Connect Manually</h4>
              <div style="display: flex; gap: 12px; align-items: center;">
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; color: var(--text-secondary);">Node ID</span>
                  <input 
                    type="number" 
                    min="1" 
                    max="127" 
                    value=${this.state.selectedNodeId}
                    style="padding: 8px; border: 1px solid var(--border-color); border-radius: 4px; background: var(--bg-primary); color: var(--text-primary); width: 100px;"
                    oninput=${(e) => this.state.selectedNodeId = parseInt(e.target.value)}
                  />
                </label>
                
                <button 
                  class="refresh-button" 
                  style="margin-top: 20px; color: green;"
                  onclick=${() => this.connectToDevice()}
                  disabled=${!this.state.isConnected}>
                  Connect
                </button>
              </div>
            </div>
          `}
        </div>
        
        <!-- Parameter Storage -->
        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 16px; margin-bottom: 12px;">Parameter Storage</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <button class="primary-button" onclick=${() => this.deviceSave()} disabled=${!this.state.oiDeviceConnected}>
              Save to Flash
            </button>
            <button class="secondary-button" onclick=${() => this.deviceLoad()} disabled=${!this.state.oiDeviceConnected}>
              Load from Flash
            </button>
            <button class="secondary-button" onclick=${() => this.deviceLoadDefaults()} disabled=${!this.state.oiDeviceConnected}>
              Load Factory Defaults
            </button>
          </div>
          <p style="color: var(--text-secondary); font-size: 13px; margin-top: 8px;">
            Save parameters to persistent storage or restore defaults
          </p>
        </div>

        <!-- Motor Control -->
        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 16px; margin-bottom: 12px;">Motor Control</h3>
          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            <select id="oi-start-mode" style="padding: 8px; border-radius: 4px; border: 1px solid var(--border-color); background: var(--bg-secondary); color: var(--text-primary);" disabled=${!this.state.oiDeviceConnected}>
              <option value="0">Off</option>
              <option value="1">Normal</option>
              <option value="2">Manual</option>
              <option value="3">Boost</option>
              <option value="4">Buck</option>
              <option value="5">Sine</option>
              <option value="6">ACHeat</option>
            </select>
            <button class="primary-button" onclick=${() => this.deviceStart()} disabled=${!this.state.oiDeviceConnected}>
              Start Motor
            </button>
            <button class="secondary-button" onclick=${() => this.deviceStop()} disabled=${!this.state.oiDeviceConnected}>
              Stop Motor
            </button>
          </div>
          <p style="color: var(--text-secondary); font-size: 13px; margin-top: 8px;">
            Start motor in selected mode or stop operation
          </p>
        </div>

        <!-- System Actions -->
        <div>
          <h3 style="font-size: 16px; margin-bottom: 12px;">System Actions</h3>
          <button class="secondary-button" style="background: #c0392b; color: white;" onclick=${() => this.deviceReset()} disabled=${!this.state.oiDeviceConnected}>
            Reset Device
          </button>
          <p style="color: var(--text-secondary); font-size: 13px; margin-top: 8px;">
            Perform a software reset of the device
          </p>
        </div>
      </div>
    `
  }

  async deviceSave() {
    try {
      await this.device.execute('from lib.OI_helpers import deviceSave; deviceSave()')
      alert('Parameters saved to flash')
    } catch (error) {
      alert('Failed to save parameters: ' + error.message)
    }
  }

  async deviceLoad() {
    try {
      await this.device.execute('from lib.OI_helpers import deviceLoad; deviceLoad()')
      alert('Parameters loaded from flash')
    } catch (error) {
      alert('Failed to load parameters: ' + error.message)
    }
  }

  async deviceLoadDefaults() {
    if (!confirm('Load factory defaults? This will overwrite all current parameters.')) return
    try {
      await this.device.execute('from lib.OI_helpers import deviceLoadDefaults; deviceLoadDefaults()')
      alert('Factory defaults loaded')
    } catch (error) {
      alert('Failed to load defaults: ' + error.message)
    }
  }

  async deviceStart() {
    const mode = document.getElementById('oi-start-mode')?.value || '1'
    try {
      await this.device.execute(`from lib.OI_helpers import deviceStart; deviceStart({'mode': ${mode}})`)
      alert('Device started in mode ' + mode)
    } catch (error) {
      alert('Failed to start device: ' + error.message)
    }
  }

  async deviceStop() {
    try {
      await this.device.execute('from lib.OI_helpers import deviceStop; deviceStop()')
      alert('Device stopped')
    } catch (error) {
      alert('Failed to stop device: ' + error.message)
    }
  }

  async deviceReset() {
    if (!confirm('Reset device? This will restart the controller.')) return
    try {
      await this.device.execute('from lib.OI_helpers import deviceReset; deviceReset()')
      alert('Device reset command sent')
    } catch (error) {
      alert('Failed to reset device: ' + error.message)
    }
  }

  /**
   * Render Errors panel
   * Display device info and error log
   */
  renderErrors() {
    // Load device info if not already loaded
    // Only auto-load when OpenInverter device is connected, not just WebREPL
    if (!this.state.oiDeviceInfo && !this.state.isLoadingDeviceInfo && this.state.oiDeviceConnected) {
      setTimeout(() => this.loadDeviceInfo(), 0)
    }

    return this.html`
      <div class="oi-parameters-container">
        <h2 style="color: var(--scheme-primary); margin-bottom: 20px;">Device Information & Error Log</h2>
        
        ${this.renderDeviceInfoContent()}
      </div>
    `
  }

  renderDeviceInfoContent() {
    if (this.state.isLoadingDeviceInfo) {
      return this.html`
        <div style="text-align: center; padding: 40px;">
          <p style="color: var(--text-secondary);">Loading device information...</p>
        </div>
      `
    }

    if (!this.state.oiDeviceInfo) {
      return this.html`
        <div style="text-align: center; padding: 40px;">
          <p style="color: var(--text-secondary);">No device information available</p>
          <button class="primary-button" style="margin-top: 16px;" onclick=${() => this.loadDeviceInfo()}>
            Load Device Info
          </button>
        </div>
      `
    }

    const info = this.state.oiDeviceInfo
    const errors = this.state.oiErrorLog || []

    return this.html`
      <div>
        <!-- Device Info -->
        <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <h3 style="font-size: 16px; margin-bottom: 12px;">Device Info</h3>
          <div style="display: grid; grid-template-columns: 150px 1fr; gap: 8px; font-size: 14px;">
            <span style="color: var(--text-secondary);">Serial Number:</span>
            <span style="font-family: monospace;">${info.serialNumber || 'N/A'}</span>
            
            <span style="color: var(--text-secondary);">Node ID:</span>
            <span>${info.nodeId || 'N/A'}</span>
            
            <span style="color: var(--text-secondary);">Bitrate:</span>
            <span>${info.bitrate ? (info.bitrate / 1000) + ' kbps' : 'N/A'}</span>
            
            <span style="color: var(--text-secondary);">Uptime:</span>
            <span>${info.uptime ? Math.floor(info.uptime / 1000) + ' seconds' : 'N/A'}</span>
          </div>
        </div>

        <!-- Error Log -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <h3 style="font-size: 16px; margin: 0;">Error Log</h3>
            <button class="secondary-button" onclick=${() => this.loadDeviceInfo()}>
              Refresh
            </button>
          </div>
          
          ${errors.length === 0 ? this.html`
            <p style="color: var(--text-secondary); text-align: center; padding: 24px;">
              No errors logged
            </p>
          ` : this.html`
            <div style="border: 1px solid var(--border-color); border-radius: 4px; overflow: hidden;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: var(--scheme-primary); color: white;">
                    <th style="padding: 8px; text-align: left;">Timestamp</th>
                    <th style="padding: 8px; text-align: left;">Error Code</th>
                    <th style="padding: 8px; text-align: left;">Description</th>
                  </tr>
                </thead>
                <tbody>
                  ${errors.map(err => this.html`
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 8px; font-family: monospace; font-size: 13px;">${err.timestamp || 'N/A'}</td>
                      <td style="padding: 8px; font-family: monospace; font-weight: 600;">${err.code || 'N/A'}</td>
                      <td style="padding: 8px;">${err.description || 'N/A'}</td>
                    </tr>
                  `)}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>
    `
  }

  // === Connection Management Methods ===

  async scanCanBus(fullScan = false) {
    this.state.isScanning = true
    this.state.canScanResults = []
    this.state.scanProgress = null
    this.emit('render')

    try {
      const scanArgs = JSON.stringify({ quick: !fullScan })
      const result = await this.device.execute(`from lib.OI_helpers import scanCanBus; scanCanBus('${scanArgs}')`) // Pass as JSON string, function will parse it
      const parsed = this.device.parseJSON(result)

      // Check if we got an error response
      if (parsed.error) {
        this.state.scanMessage = `Error: ${parsed.error}`
        this.state.canScanResults = []
      } else if (parsed.devices) {
        this.state.canScanResults = parsed.devices

        // Update discovered devices list for sidebar
        this.state.discoveredDevices = parsed.devices.map(device => ({
          nodeId: device.nodeId,
          serial: device.serial || `Node_${device.nodeId}`,
          name: device.name || `OpenInverter ${device.nodeId}`,
          firmware: device.firmware || 'Unknown',
          online: true // Devices from scan are considered online
        }))

        // Update extension menu with discovered devices
        this.updateExtensionMenu()

        if (this.state.canScanResults.length === 0) {
          // Show helpful message when no devices found
          this.state.scanMessage = fullScan
            ? `No devices found (scanned all 127 node IDs)`
            : `No devices found (scanned node IDs 1-10). Try "Full Scan" to check all 127 node IDs.`
        } else {
          this.state.scanMessage = null
        }
      } else {
        this.state.scanMessage = 'Scan completed but received unexpected response format'
      }
    } catch (error) {
      console.error('[OI Connection] Scan failed:', error)
      this.state.scanMessage = `Scan failed: ${error.message}`
      this.state.canScanResults = []
    } finally {
      this.state.isScanning = false
      this.state.scanProgress = null
      this.emit('render')
    }
  }

  async connectToDevice(nodeId, serial) {
    try {
      // Update selected node ID if provided
      if (nodeId !== undefined) {
        this.state.selectedNodeId = nodeId
      }
      
      // Handle mock device mode (node ID > 127)
      if (this.state.selectedNodeId > 127) {
        // Create/update mock device for this node ID
        const mockSerial = serial || `MOCK-${String(this.state.selectedNodeId).padStart(3, '0')}-${Date.now().toString(36).slice(-4).toUpperCase()}`
        const mockDevice = {
          nodeId: this.state.selectedNodeId,
          serial: mockSerial,
          name: `Test Inverter ${this.state.selectedNodeId}`,
          firmware: 'v4.2.0-mock',
          online: true
        }
        
        // Add to discovered devices if not already there
        if (!this.state.discoveredDevices) {
          this.state.discoveredDevices = []
        }
        
        // Check if device with this nodeId already exists
        const existingIndex = this.state.discoveredDevices.findIndex(d => d.nodeId === this.state.selectedNodeId)
        if (existingIndex >= 0) {
          // Update existing device
          this.state.discoveredDevices[existingIndex] = mockDevice
        } else {
          // Add new device
          this.state.discoveredDevices.push(mockDevice)
        }
        
        // Update extension menu to include this device
        this.updateExtensionMenu()
        
        this.state.oiDeviceConnected = true
        this.state.currentDeviceSerial = mockSerial
        console.log('[OI Connection] Mock device created:', mockDevice)
        this.emit('render')
        return
      }
      
      // Store serial if provided
      if (serial) {
        this.state.currentDeviceSerial = serial
      }
      
      const args = JSON.stringify({ node_id: this.state.selectedNodeId })
      const result = await this.device.execute(`from lib.OI_helpers import initializeDevice; initializeDevice(${args})`)
      const parsed = this.device.parseJSON(result)

      if (parsed.success) {
        this.state.oiDeviceConnected = true
        console.log('[OI Connection] Connected to device:', {
          nodeId: this.state.selectedNodeId,
          serial: this.state.currentDeviceSerial
        })
      } else {
        console.error('[OI Connection] Connection failed:', parsed)
        alert('Failed to connect to device. Check console for details.')
      }
    } catch (error) {
      console.error('[OI Connection] Connection error:', error)
      alert('Failed to connect: ' + error.message)
    }

    this.emit('render')
  }

  /**
   * Update the extension menu to include discovered devices
   * This modifies the menu in Scripto Studio's state to show devices as submenu items
   */
  updateExtensionMenu() {
    // Find this extension in installed extensions
    const extensions = this.state.installedExtensions || []
    const thisExtension = extensions.find(ext => ext.id === 'openinverter')
    
    if (!thisExtension) return
    
    // Start with base menu items
    const baseMenu = [
      { id: 'overview', label: 'Overview' },
      { id: 'deviceselector', label: 'Device Selector' }
    ]
    
    // Add devices section header if we have devices
    if (this.state.discoveredDevices && this.state.discoveredDevices.length > 0) {
      baseMenu.push({ id: 'devices-header', label: '--- DEVICES ---', disabled: true })
      
      // Add each device as a menu item with normalized ID
      this.state.discoveredDevices.forEach((device, index) => {
        baseMenu.push({
          id: `device${index}`,  // Normalized ID: device0, device1, device2, etc.
          label: `${device.name || device.serial}`,
          deviceSerial: device.serial,  // Store serial for routing
          deviceIndex: index  // Store index for easy lookup
        })
      })
    }
    
    // Update the extension's menu
    thisExtension.menu = baseMenu
    
    // Force a re-render of the entire app to update the sidebar
    this.emit('render')
  }

  async connectToNode(nodeId) {
    this.state.selectedNodeId = nodeId
    await this.connectToDevice()
  }

  async disconnectDevice() {
    try {
      await this.device.execute('from lib.OI_helpers import disconnectDevice; disconnectDevice()')
      this.state.oiDeviceConnected = false
      this.state.currentDeviceSerial = null
    } catch (error) {
      console.error('[OI Connection] Disconnect error:', error)
    }

    this.emit('render')
  }

  // === Firmware Upgrade Methods ===

  selectFirmwareFile(event) {
    const file = event.target.files[0]
    if (file) {
      this.state.firmwareUpgrade.selectedFile = file
      this.state.firmwareUpgrade.error = null
      this.emit('render')
    }
  }

  async startFirmwareUpgrade() {
    const fw = this.state.firmwareUpgrade

    if (!fw.selectedFile) {
      alert('Please select a firmware file')
      return
    }

    // Validate file is binary
    if (!fw.selectedFile.name.endsWith('.bin')) {
      fw.error = 'Firmware must be a .bin file'
      this.emit('render')
      return
    }

    // Confirm upgrade
    if (!confirm('Are you sure you want to upgrade the firmware? This process cannot be interrupted.')) {
      return
    }

    fw.inProgress = true
    fw.progress = 0
    fw.status = 'Reading firmware file...'
    fw.error = null
    this.emit('render')

    try {
      // Read file as bytes
      const fileData = await this.readFileAsBytes(fw.selectedFile)

      fw.status = 'Uploading firmware to device...'
      this.emit('render')

      // Upload firmware data to device (in chunks if needed)
      await this.uploadFirmwareData(fileData)

      fw.status = 'Starting upgrade process...'
      this.emit('render')

      // Start the upgrade
      const args = {
        recovery_mode: fw.recoveryMode,
        serial_number: fw.recoveryMode && fw.serialNumber ? fw.serialNumber : null,
        node_id: !fw.recoveryMode ? this.state.selectedNodeId : null
      }

      const argsStr = JSON.stringify(args)
      const result = await this.device.execute(`from lib.OI_helpers import startFirmwareUpgrade; startFirmwareUpgrade(${argsStr})`)
      const parsed = this.device.parseJSON(result)

      if (parsed.error) {
        throw new Error(parsed.error)
      }

      // Poll for progress
      await this.pollFirmwareProgress()

    } catch (error) {
      console.error('[OI Firmware] Upgrade failed:', error)
      fw.error = error.message || 'Upgrade failed'
      fw.inProgress = false
      this.emit('render')
    }
  }

  async readFileAsBytes(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const arrayBuffer = e.target.result
        const bytes = new Uint8Array(arrayBuffer)
        resolve(bytes)
      }
      reader.onerror = reject
      reader.readAsArrayBuffer(file)
    })
  }

  async uploadFirmwareData(bytes) {
    const fw = this.state.firmwareUpgrade
    const chunkSize = 4096 // Upload in 4KB chunks
    const totalChunks = Math.ceil(bytes.length / chunkSize)

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize
      const end = Math.min(start + chunkSize, bytes.length)
      const chunk = Array.from(bytes.slice(start, end))

      const args = JSON.stringify({ chunk, offset: start })
      await this.device.execute(`from lib.OI_helpers import uploadFirmwareChunk; uploadFirmwareChunk(${args})`)

      fw.progress = (i / totalChunks) * 30 // First 30% is upload
      fw.status = `Uploading firmware... ${fw.progress.toFixed(0)}%`
      this.emit('render')
    }
  }

  async pollFirmwareProgress() {
    const fw = this.state.firmwareUpgrade
    const maxPolls = 600 // 10 minutes max (600 * 1 second)
    let polls = 0

    while (polls < maxPolls) {
      await new Promise(resolve => setTimeout(resolve, 1000))

      try {
        const result = await this.device.execute('from lib.OI_helpers import getFirmwareUpgradeStatus; getFirmwareUpgradeStatus()')
        const parsed = this.device.parseJSON(result)
        const status = parsed

        if (status.error) {
          throw new Error(status.error)
        }

        fw.progress = 30 + (status.progress * 0.7) // Map 0-100% to 30-100%
        fw.status = status.message || 'Upgrading...'
        this.emit('render')

        if (status.complete) {
          fw.status = 'Upgrade completed successfully!'
          fw.progress = 100
          fw.inProgress = false
          this.emit('render')
          return
        }

      } catch (error) {
        console.error('[OI Firmware] Status poll error:', error)
        // Continue polling unless it's a critical error
      }

      polls++
    }

    throw new Error('Upgrade timeout')
  }

  async loadDeviceInfo() {
    this.state.isLoadingDeviceInfo = true
    this.emit('render')

    try {
      const infoResult = await this.device.execute('from lib.OI_helpers import getDeviceInfo; getDeviceInfo()')
      const info = this.device.parseJSON(infoResult)
      this.state.oiDeviceInfo = info

      const errorResult = await this.device.execute('from lib.OI_helpers import getErrorLog; getErrorLog()')
      const errors = this.device.parseJSON(errorResult)
      const errorList = errors
      // Ensure errorLog is always an array
      this.state.oiErrorLog = Array.isArray(errorList) ? errorList : []
    } catch (error) {
      console.error('[OI App] Failed to load device info:', error)
      this.state.oiDeviceInfo = null
      this.state.oiErrorLog = []
    } finally {
      this.state.isLoadingDeviceInfo = false
      this.emit('render')
    }
  }
}
