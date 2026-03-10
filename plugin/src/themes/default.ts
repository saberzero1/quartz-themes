import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "default",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(255, 89.76%, 75.9%) !important;
  --tag-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --text-selection: hsla(258, 88%, 66%, 0.33) !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: hsl(258, 88%, 66%) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: hsl(258, 88%, 66%) !important;
  --pill-color-remove-hover: hsl(258, 88%, 66%) !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%) !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: hsl(258, 88%, 66%) !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: hsl(258, 88%, 66%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-selection: hsla(258, 88%, 66%, 0.2) !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
  },
};
