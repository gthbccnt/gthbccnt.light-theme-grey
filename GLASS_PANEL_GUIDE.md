# Glass Panel UI for Light Theme Grey

The "Glass Panel" and "Floating" look is achieved by combining three CSS techniques:
1. **Directional Borders** (Simulates light source from the top-left)
2. **Glass-Like Transparency** (Using `rgba` with high opacity backgrounds)
3. **Elevated Shadows** (Using `box-shadow` for depth)

## 💎 The "Glass" Effect

To create a realistic glass panel in a light theme, we use subtle white highlights on the top and left edges, and darker shadows on the bottom and right.

### 🧩 Advanced Snippet

Add this to your `custom-ui-style.stylesheet` for the most refined look:

```json
  "custom-ui-style.stylesheet": {
    ".monaco-workbench": {
      "--ltg-panel-radius": "20px",
      "--ltg-glass-highlight": "rgba(255, 255, 255, 0.7)",
      "--ltg-glass-shadow": "rgba(0, 0, 0, 0.05)",
      "--ltg-panel-gap": "10px"
    },
    ".part.sidebar, .part.editor, .part.panel.bottom, .part.auxiliarybar": {
      "margin": "var(--ltg-panel-gap) var(--ltg-panel-gap) 0 var(--ltg-panel-gap)",
      "border-radius": "var(--ltg-panel-radius) !important",
      "overflow": "hidden !important",
      "background-color": "rgba(245, 244, 242, 0.85) !important",
      "backdrop-filter": "blur(8px) !important",
      /* Directional Glass Borders: Highlight top-left, Shadow bottom-right */
      "border-top": "1px solid var(--ltg-glass-highlight) !important",
      "border-left": "1px solid var(--ltg-glass-highlight) !important",
      "border-bottom": "1px solid var(--ltg-glass-shadow) !important",
      "border-right": "1px solid var(--ltg-glass-shadow) !important",
      /* Depth shadow */
      "box-shadow": "0 8px 32px rgba(0, 0, 0, 0.1) !important"
    },
    /* Pill-shaped Activity Bar with glass background */
    ".part.activitybar .composite-bar": {
      "background": "rgba(255, 255, 255, 0.4) !important",
      "backdrop-filter": "blur(4px) !important",
      "border-radius": "999px",
      "border": "1px solid var(--ltg-glass-highlight) !important",
      "box-shadow": "inset 0 1px 3px rgba(255,255,255,0.5), 0 2px 8px rgba(0,0,0,0.05) !important"
    }
  }
```

## 🛠️ Implementation Breakdown

- **`backdrop-filter: blur(8px)`**: This is the secret for true "glass." It blurs whatever is behind the floating panel, mimicking frosted glass.
- **Directional Borders**: Notice that `border-top` and `border-left` use a light color (`var(--ltg-glass-highlight)`), while `border-bottom` and `border-right` use a dark shadow color. This simulates a light source hitting the panels from the top-left.
- **`rgba(..., 0.85)`**: By using 85% opacity, we let some of the "canvas" color bleed through, which increases the sense of depth.

## 🚧 Known Limitations

The `Custom UI Style` extension injects this CSS into the VS Code workbench. While most elements support transparency and blur, some internal VS Code views (like the main editor scroll area) have fixed backgrounds that may not fully respect the `backdrop-filter`.

---
*For a full setup guide, see [CUSTOM_CSS.md](CUSTOM_CSS.md).*
