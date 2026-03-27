import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "handwriting-kalam",
    modes: ["light"],
    variations: [],
    fonts: ["courier-prime", "kalam"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247) !important;
  --blockquote-border-color: rgb(153, 115, 247) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: rgb(153, 115, 247) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --divider-color-hover: rgb(153, 115, 247) !important;
  --embed-border-start: 2px solid rgb(153, 115, 247) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --secondary: rgb(138, 92, 245) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(153, 115, 247) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(153, 115, 247) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 92);
  cursor: default;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: none solid rgb(92, 92, 92);
}`,
  },
};
