import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "quietus",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: #8a5cf5 !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: #dadada !important;
  --link-color-hover: #dadada !important;
  --link-external-color: #dadada !important;
  --link-external-color-hover: #dadada !important;
  --link-unresolved-color: #8a5cf5 !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-unresolved-filter: brightness(120%) !important;
  --link-unresolved-opacity: 1 !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --quietus-checkbox-checked-border-color: #b3b3b3 !important;
  --quietus-checkbox-checked-hover-border-color: #dadada !important;
  --quietus-checkbox-checked-svg-bg-color: #dadada !important;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --secondary: rgb(166, 139, 249) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tertiary: #dadada !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: #dadada !important;
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --text-selection: color-mix(in srgb, #dadada 10%, transparent) !important;
  --textHighlight: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.45);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 92, 245);
  filter: brightness(1.2);
  outline: rgb(138, 92, 245) none 0px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: #8a5cf5 !important;
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
  --highlight: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(153, 115, 247) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: #8a5cf5 !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-unresolved-opacity: 1 !important;
  --list-indent: 2.25em !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --metadata-input-height: 28px !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --quietus-checkbox-checked-border-color: #5c5c5c !important;
  --quietus-checkbox-checked-hover-border-color: rgb(166, 139, 249) !important;
  --quietus-checkbox-checked-svg-bg-color: #222222 !important;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --quietus-text-strong-color: #1a1a1a !important;
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
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.25);
}`,
  },
};
