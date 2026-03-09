import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sparkling-wisdom",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular", "open-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --blockquote-border-color: rgb(138, 92, 245);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --divider-color-hover: rgb(138, 92, 245);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --graph-node-focused: rgb(166, 139, 249);
  --heading-spacing: 2.5rem;
  --icon-color-active: rgb(166, 139, 249);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --pill-color-remove-hover: rgb(166, 139, 249);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-selection: rgba(138, 92, 245, 0.33);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(179, 179, 179);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(179, 179, 179);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --blockquote-border-color: rgb(153, 115, 247);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --divider-color-hover: rgb(153, 115, 247);
  --embed-border-start: 2px solid rgb(153, 115, 247);
  --graph-node-focused: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-header-weight: 600;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-selection: rgba(138, 92, 245, 0.2);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
