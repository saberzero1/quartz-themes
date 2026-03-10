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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --embed-border-start: 2px solid hsl(258, 88%, 66%);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: hsl(255, 89.76%, 75.9%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%);
  --metadata-input-height: 28px;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15);
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%);
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%);
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-header-weight: 600;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-border-color: hsl(258, 88%, 66%);
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --textHighlight: var(--background-modifier-active-hover);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --bold-weight: 600;
  --callout-title-weight: 600;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%);
  --graph-node-focused: hsl(258, 88%, 66%);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: hsl(258, 88%, 66%);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --list-indent: 2.25em;
  --list-marker-color-collapsed: hsl(258, 88%, 66%);
  --metadata-input-height: 28px;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15);
  --nav-item-color-highlighted: hsl(258, 88%, 66%);
  --pill-color-remove-hover: hsl(258, 88%, 66%);
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-header-weight: 600;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
  },
};
