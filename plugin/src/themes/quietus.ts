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
  --accent-color: #8a5cf5;
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
  --highlight: var(--text-highlight-bg);
  --icon-color-active: rgb(166, 139, 249);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: #dadada;
  --link-color-hover: #dadada;
  --link-external-color: #dadada;
  --link-external-color-hover: #dadada;
  --link-unresolved-color: #8a5cf5;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-filter: brightness(120%);
  --link-unresolved-opacity: 1;
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --pill-color-remove-hover: rgb(166, 139, 249);
  --quietus-checkbox-checked-border-color: #b3b3b3;
  --quietus-checkbox-checked-hover-border-color: #dadada;
  --quietus-checkbox-checked-svg-bg-color: #dadada;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	);
  --secondary: var(--text-accent);
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
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: #dadada;
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 45%,
		transparent
	);
  --text-selection: color-mix(in srgb, #dadada 10%, transparent);
  --textHighlight: var(--text-highlight-bg);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.45);
}`,
    links: `body a.external, footer a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(218, 218, 218);
  outline: rgb(218, 218, 218) none 0px;
  text-decoration: underline rgb(218, 218, 218);
  text-decoration-color: rgb(218, 218, 218);
}

body a.internal.broken {
  color: rgb(138, 92, 245);
  filter: brightness(1.2);
  outline: rgb(138, 92, 245) none 0px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: #8a5cf5;
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
  --highlight: var(--text-highlight-bg);
  --icon-color-active: rgb(138, 92, 245);
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: #8a5cf5;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-unresolved-opacity: 1;
  --list-indent: 2.25em;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --quietus-checkbox-checked-border-color: #5c5c5c;
  --quietus-checkbox-checked-hover-border-color: rgb(166, 139, 249);
  --quietus-checkbox-checked-svg-bg-color: #222222;
  --quietus-inline-code-background: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	);
  --quietus-text-strong-color: #1a1a1a;
  --secondary: var(--text-accent);
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
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-highlight-bg: color-mix(
		in srgb,
		#8a5cf5 25%,
		transparent
	);
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    typography: `body .text-highlight {
  background-color: color(srgb 0.541176 0.360784 0.960784 / 0.25);
}`,
  },
};
