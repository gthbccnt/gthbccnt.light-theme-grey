# Custom CSS for Light Theme Grey

To achieve the modern "floating panel" look with rounded corners, shadows, and elevation (inspired by the new experimental VS Code themes), you can use the **Custom UI Style** extension.

## 🚀 Quick Setup

1. **Install the Extension**: Install [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) from the VS Code Marketplace.
2. **Open Settings**: Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and type "Open User Settings (JSON)".
3. **Add the Stylesheet**: Copy and paste the following block into your `settings.json` file:

```json
  "custom-ui-style.stylesheet": {
    ".monaco-workbench": {
      "--ltg-panel-radius": "16px",
      "--ltg-widget-radius": "12px",
      "--ltg-input-radius": "8px",
      "--ltg-item-radius": "6px",
      "--ltg-panel-gap": "8px",
      "--ltg-panel-top": "8px",
      "--ltg-bg-canvas": "#e8e7e5",
      "--ltg-bg-surface": "#f5f4f2",
      "background-color": "var(--ltg-bg-canvas) !important"
    },
    ".part.sidebar": {
      "margin": "var(--ltg-panel-top) var(--ltg-panel-gap) 0 var(--ltg-panel-gap)",
      "border-radius": "var(--ltg-panel-radius) !important",
      "overflow": "hidden !important",
      "max-height": "calc(100% - 8px) !important",
      "border": "1px solid rgba(0,0,0,0.05) !important",
      "box-shadow": "0 4px 12px rgba(0,0,0,0.08) !important",
      "background-color": "var(--ltg-bg-surface) !important"
    },
    ".part.editor": {
      "margin": "var(--ltg-panel-top) var(--ltg-panel-gap) 0 var(--ltg-panel-gap)",
      "border-radius": "var(--ltg-panel-radius) !important",
      "overflow": "hidden !important",
      "max-height": "calc(100% - var(--ltg-panel-top) - 2px) !important",
      "border": "1px solid rgba(0,0,0,0.05) !important",
      "box-shadow": "0 4px 12px rgba(0,0,0,0.08) !important",
      "background-color": "var(--ltg-bg-surface) !important"
    },
    ".part.panel.bottom": {
      "margin": "var(--ltg-panel-gap) var(--ltg-panel-gap) 0 var(--ltg-panel-gap)",
      "border-radius": "var(--ltg-panel-radius) !important",
      "overflow": "hidden !important",
      "border": "1px solid rgba(0,0,0,0.05) !important",
      "box-shadow": "0 4px 12px rgba(0,0,0,0.08) !important",
      "background-color": "var(--ltg-bg-surface) !important"
    },
    ".part.activitybar": {
      "background-color": "var(--ltg-bg-canvas) !important"
    },
    ".part.activitybar .composite-bar": {
      "background": "rgba(255,255,255,0.5) !important",
      "border-radius": "999px",
      "margin": "10px 4px !important",
      "padding": "4px !important",
      "border": "1px solid rgba(0,0,0,0.05) !important",
      "box-shadow": "0 2px 8px rgba(0,0,0,0.05) !important"
    },
    ".part.statusbar": {
      "background-color": "var(--ltg-bg-canvas) !important"
    },
    ".part.titlebar": {
      "background-color": "var(--ltg-bg-canvas) !important"
    },
    ".notifications-toasts": {
      "margin-right": "var(--ltg-panel-gap) !important",
      "margin-bottom": "var(--ltg-panel-gap) !important"
    },
    ".notification-toast": {
      "border-radius": "var(--ltg-widget-radius) !important",
      "border": "1px solid rgba(0,0,0,0.08) !important",
      "box-shadow": "0 8px 24px rgba(0,0,0,0.12) !important"
    },
    ".quick-input-widget": {
      "border-radius": "var(--ltg-widget-radius) !important",
      "border": "1px solid rgba(0,0,0,0.08) !important",
      "box-shadow": "0 12px 32px rgba(0,0,0,0.15) !important"
    }
  }
```

4. **Apply Changes**: Press `Ctrl+Shift+P` and run **Custom UI Style: Enable**.
5. **Restart VS Code**: Reload when prompted.

## 🎨 What this does

- **Floating Panels**: Moves the sidebar, editor, and bottom panel away from the edges for a "macOS-style" look.
- **Elevation**: Adds subtle shadows to all major UI components to make them appear lifted from the background.
- **Soft Corners**: Applies a large border-radius to all panels, making the UI feel friendlier and more modern.
- **Glass Effects**: Uses semi-transparent backgrounds for the Activity Bar and other utility areas.

## 🔧 Customization

You can easily adjust the look by changing the variables at the top of the CSS block:

- `--ltg-panel-radius`: Adjust the roundness of the main windows.
- `--ltg-panel-gap`: Change the spacing between panels.
- `--ltg-bg-canvas`: The background color visible "behind" the floating panels.

---

### 🎨 Advanced: Glass Panels & Light Source Simulation

For an even more refined look with "frosted glass" blur and directional light effects (top-left highlights), check out our:

👉 [Advanced Glass Panel Guide](GLASS_PANEL_GUIDE.md)

---
*Note: This styling works best when using the **Light Theme Grey** color theme.*
