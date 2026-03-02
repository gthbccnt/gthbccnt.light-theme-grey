# More Rounded UI Settings

To achieve the ultra-rounded, modern "Islands" look (with **32px+ corner radii**) while keeping your existing theme colors, use the following `settings.json` configuration.

## 🚀 Ultra-Rounded Look

Copy this block into your VS Code `settings.json`:

```json
  "custom-ui-style.stylesheet": {
    ".monaco-workbench": {
      /* Main Variables for the Rounded Look */
      "--ltg-panel-radius": "32px",
      "--ltg-widget-radius": "24px",
      "--ltg-input-radius": "16px",
      "--ltg-item-radius": "8px",
      "--ltg-panel-gap": "12px",
      "--ltg-panel-top": "12px",
      "--ltg-bg-canvas": "#e8e7e5",
      "--ltg-bg-surface": "#f5f4f2",
      "background-color": "var(--ltg-bg-canvas) !important"
    },
    /* Floating Panels with Large Radii */
    ".part.sidebar, .part.editor, .part.panel.bottom, .part.auxiliarybar": {
      "margin": "var(--ltg-panel-top) var(--ltg-panel-gap) var(--ltg-panel-gap) var(--ltg-panel-gap)",
      "border-radius": "var(--ltg-panel-radius) !important",
      "overflow": "hidden !important",
      "border": "1px solid rgba(0,0,0,0.04) !important",
      "box-shadow": "0 10px 30px rgba(0,0,0,0.1) !important",
      "background-color": "var(--ltg-bg-surface) !important"
    },
    /* Pill-shaped UI Elements */
    ".part.activitybar .composite-bar, .command-center-center, .statusbar-item": {
      "border-radius": "999px !important"
    },
    /* Rounded Command Palette & Notifications */
    ".quick-input-widget, .notification-toast, .monaco-hover": {
      "border-radius": "var(--ltg-widget-radius) !important",
      "border": "1px solid rgba(0,0,0,0.06) !important",
      "box-shadow": "0 16px 48px rgba(0,0,0,0.15) !important"
    },
    /* Rounded Inputs & Buttons */
    ".monaco-inputbox, .monaco-button, .scm-input": {
      "border-radius": "var(--ltg-input-radius) !important"
    },
    /* Rounded List Items (Explorer rows, etc.) */
    ".monaco-list-row": {
      "border-radius": "var(--ltg-item-radius) !important",
      "margin-left": "4px !important",
      "margin-right": "4px !important",
      "width": "calc(100% - 8px) !important"
    }
  }
```

## 🛠️ How it works

1. **Large Panel Radii**: Uses `32px` for the main workbench containers, creating a "bubble" or "island" effect.
2. **Pill Shapes**: Elements like the Activity Bar and Status Bar items are forced to be fully circular (`999px`).
3. **Internal Consistency**: Every input, button, and list item is given a proportional corner radius (`16px` and `8px`) so the whole UI feels unified.

---
*Note: This look requires the [Custom UI Style](https://marketplace.visualstudio.com/items?itemName=subframe7536.custom-ui-style) extension.*
