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
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --heading-spacing: 2.5rem !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --metadata-input-height: 28px !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-header-weight: 600 !important;
  --tag-color: hsl(255, 89.76%, 75.9%) !important;
  --tag-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
  },
  light: {
    base: `:root:root {
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: hsl(257, 88.88%, 70.95%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
  --heading-spacing: 2.5rem !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --list-indent: 2.25em !important;
  --metadata-input-height: 28px !important;
  --secondary: hsl(257, 88.88%, 70.95%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-header-weight: 600 !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
  },
};
