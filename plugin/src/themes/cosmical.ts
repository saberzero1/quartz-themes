import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cosmical",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: oklch(42% 0 0);
  --background-modifier-border: oklch(36% 0 0);
  --background-modifier-border-focus: oklch(45% 0 0);
  --background-modifier-border-hover: oklch(39% 0 0);
  --background-modifier-error: #f47266;
  --background-modifier-error-hover: #f47266;
  --background-modifier-error-rgb: 244,114,102;
  --background-modifier-success: #8bdfae;
  --background-modifier-success-rgb: 160,223,139;
  --background-primary: oklch(30% 0 0);
  --background-primary-alt: oklch(27% 0 0);
  --background-secondary: oklch(24% 0 0);
  --background-secondary-alt: oklch(27% 0 0);
  --base-row-even-bg: oklch(30% 0 0);
  --base-row-hover-bg: oklch(39% 0 0);
  --base-row-odd-bg: oklch(33% 0 0);
  --bases-cards-background: oklch(30% 0 0);
  --bases-cards-cover-background: oklch(27% 0 0);
  --bases-cards-shadow: 0 0 0 1px oklch(36% 0 0);
  --bases-cards-shadow-hover: 0 0 0 1px oklch(39% 0 0);
  --bases-embed-border-color: oklch(42% 0 0);
  --bases-group-heading-property-color: oklch(77.5% 0 0);
  --bases-table-border-color: oklch(42% 0 0);
  --bases-table-cell-background-active: oklch(30% 0 0);
  --bases-table-cell-background-disabled: oklch(27% 0 0);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(45% 0 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(0.7 0.15 70);
  --bases-table-group-background: oklch(27% 0 0);
  --bases-table-header-background: oklch(30% 0 0);
  --bases-table-header-color: oklch(0.9 0.15 262);
  --bases-table-summary-background: oklch(30% 0 0);
  --blockquote-border-color: oklch(0.7 0.15 262);
  --blockquote-border-thickness: 0.2em;
  --blur-background: color-mix(in srgb, oklch(36% 0 0) 65%, transparent) linear-gradient(oklch(36% 0 0), color-mix(in srgb, oklch(36% 0 0) 65%, transparent));
  --callout-bug: 244,114,102;
  --callout-default: 141,158,255;
  --callout-error: 244,114,102;
  --callout-example: 184,157,231;
  --callout-fail: 244,114,102;
  --callout-important: 132,220,210;
  --callout-info: 141,158,255;
  --callout-question: 247,159,105;
  --callout-success: 160,223,139;
  --callout-summary: 132,220,210;
  --callout-tip: 132,220,210;
  --callout-todo: 141,158,255;
  --callout-warning: 247,159,105;
  --canvas-background: oklch(30% 0 0);
  --canvas-card-label-color: oklch(58% 0 0);
  --canvas-color-1: 244,114,102;
  --canvas-color-2: 247,159,105;
  --canvas-color-3: 228,220,129;
  --canvas-color-4: 160,223,139;
  --canvas-color-5: 132,220,210;
  --canvas-color-6: 184,157,231;
  --canvas-dot-pattern: oklch(33% 0 0);
  --caret-color: oklch(100% 0 0);
  --checkbox-border-color: oklch(58% 0 0);
  --checkbox-border-color-hover: oklch(77.5% 0 0);
  --checkbox-color: oklch(0.7 0.15 70);
  --checkbox-color-hover: oklch(0.9 0.15 70);
  --checkbox-marker-color: oklch(30% 0 0);
  --checklist-done-color: oklch(77.5% 0 0);
  --code-background: oklch(36% 0 0);
  --code-border-color: oklch(36% 0 0);
  --code-comment: oklch(58% 0 0);
  --code-function: #d4e481;
  --code-important: #f79f69;
  --code-keyword: #dfaac0;
  --code-normal: oklch(100% 0 0);
  --code-operator: #f47266;
  --code-property: #84dcd2;
  --code-punctuation: oklch(77.5% 0 0);
  --code-radius: 8px;
  --code-string: #8bdfae;
  --code-tag: #f47266;
  --code-value: #b89de7;
  --collapse-icon-color: oklch(58% 0 0);
  --collapse-icon-color-collapsed: oklch(0.9 0.15 70);
  --color-base-00: oklch(21% 0 0);
  --color-base-05: oklch(24% 0 0);
  --color-base-10: oklch(27% 0 0);
  --color-base-100: oklch(100% 0 0);
  --color-base-20: oklch(30% 0 0);
  --color-base-30: oklch(33% 0 0);
  --color-base-40: oklch(36% 0 0);
  --color-base-50: oklch(39% 0 0);
  --color-base-60: oklch(42% 0 0);
  --color-base-70: oklch(45% 0 0);
  --color-blue: #4958fd;
  --color-blue-rgb: 141,158,255;
  --color-cyan: #84dcd2;
  --color-cyan-rgb: 132,220,210;
  --color-green: #8bdfae;
  --color-green-rgb: 160,223,139;
  --color-orange: #f79f69;
  --color-orange-rgb: 247,159,105;
  --color-pink: #dfaac0;
  --color-pink-rgb: 223,170,192;
  --color-purple: #b89de7;
  --color-purple-rgb: 184,157,231;
  --color-red: #f47266;
  --color-red-rgb: 244,114,102;
  --color-yellow: #d4e481;
  --color-yellow-rgb: 228,220,129;
  --divider-color: oklch(42% 0 0);
  --divider-color-hover: oklch(0.7 0.15 70);
  --dropdown-background: oklch(36% 0 0);
  --dropdown-background-hover: oklch(39% 0 0);
  --embed-block-shadow-hover: 0 0 0 1px oklch(36% 0 0), inset 0 0 0 1px oklch(36% 0 0);
  --embed-border-start: 2px solid oklch(0.7 0.15 70);
  --file-header-background: oklch(30% 0 0);
  --file-header-background-focused: oklch(30% 0 0);
  --file-header-justify: left;
  --flair-background: oklch(36% 0 0);
  --flair-color: oklch(100% 0 0);
  --font-headings: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: oklch(36% 0 0);
  --footnote-id-color: oklch(77.5% 0 0);
  --footnote-id-color-no-occurrences: oklch(58% 0 0);
  --graph-node: oklch(77.5% 0 0);
  --graph-node-attachment: #d4e481;
  --graph-node-focused: oklch(0.9 0.15 70);
  --graph-node-tag: oklch(0.9 0.15 262);
  --graph-node-unresolved: oklch(58% 0 0);
  --graph-text: oklch(100% 0 0);
  --h1-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-formatting: oklch(58% 0 0);
  --heading-underline-color: oklch(36% 0 0);
  --hr-color: oklch(42% 0 0);
  --icon-color: oklch(58% 0 0);
  --icon-color-active: oklch(77.5% 0 0);
  --icon-color-focused: oklch(100% 0 0);
  --icon-color-hover: oklch(77.5% 0 0);
  --inline-title-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.625rem;
  --input-date-separator: oklch(58% 0 0);
  --input-placeholder-color: oklch(58% 0 0);
  --interactive-accent: oklch(0.7 0.15 70);
  --interactive-accent-hover: oklch(0.9 0.15 70);
  --interactive-hover: oklch(39% 0 0);
  --interactive-normal: oklch(36% 0 0);
  --link-color: oklch(0.9 0.15 70);
  --link-color-hover: oklch(1 0.09 70);
  --link-external-color: oklch(0.9 0.15 70);
  --link-external-color-hover: oklch(1 0.09 70);
  --link-unresolved-color: oklch(0.9 0.15 70);
  --list-marker-color: oklch(77.5% 0 0);
  --list-marker-color-collapsed: oklch(0.9 0.15 70);
  --list-marker-color-hover: oklch(77.5% 0 0);
  --menu-background: oklch(24% 0 0);
  --menu-border-color: oklch(39% 0 0);
  --metadata-border-color: oklch(36% 0 0);
  --metadata-divider-color: oklch(36% 0 0);
  --metadata-gap: 0;
  --metadata-input-font-size: max(13px,0.9em);
  --metadata-input-text-color: oklch(0.9 0.15 70);
  --metadata-label-font-size: max(13px,0.9em);
  --metadata-label-text-color: oklch(0.9 0.15 262);
  --metadata-label-text-color-hover: oklch(77.5% 0 0);
  --metadata-label-width: max(22.5%,8rem);
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(45% 0 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(39% 0 0);
  --modal-background: oklch(30% 0 0);
  --modal-border-color: oklch(36% 0 0);
  --nav-collapse-icon-color: oklch(58% 0 0);
  --nav-collapse-icon-color-collapsed: oklch(58% 0 0);
  --nav-heading-color: oklch(100% 0 0);
  --nav-heading-color-collapsed: oklch(58% 0 0);
  --nav-heading-color-collapsed-hover: oklch(77.5% 0 0);
  --nav-heading-color-hover: oklch(100% 0 0);
  --nav-item-color: oklch(77.5% 0 0);
  --nav-item-color-active: oklch(100% 0 0);
  --nav-item-color-highlighted: oklch(0.9 0.15 70);
  --nav-item-color-hover: oklch(100% 0 0);
  --nav-item-color-selected: oklch(100% 0 0);
  --nav-tag-color: oklch(58% 0 0);
  --nav-tag-color-active: oklch(77.5% 0 0);
  --nav-tag-color-hover: oklch(77.5% 0 0);
  --nn-theme-file-selected-bg: oklch(39% 0 0);
  --nn-theme-file-selected-inactive-bg: oklch(36% 0 0);
  --nn-theme-file-selected-name-color: oklch(100% 0 0);
  --nn-theme-file-tag-bg: color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent);
  --nn-theme-file-tag-color: oklch(0.9 0.15 262);
  --nn-theme-list-bg: oklch(24% 0 0);
  --nn-theme-list-header-bg: oklch(24% 0 0);
  --nn-theme-nav-bg: oklch(24% 0 0);
  --pdf-background: oklch(30% 0 0);
  --pdf-page-background: oklch(30% 0 0);
  --pdf-shadow: 0 0 0 1px oklch(36% 0 0);
  --pdf-sidebar-background: oklch(30% 0 0);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(36% 0 0);
  --pill-border-color: oklch(36% 0 0);
  --pill-border-color-hover: oklch(39% 0 0);
  --pill-color: oklch(77.5% 0 0);
  --pill-color-hover: oklch(100% 0 0);
  --pill-color-remove: oklch(58% 0 0);
  --pill-color-remove-hover: oklch(0.9 0.15 70);
  --prompt-background: oklch(30% 0 0);
  --prompt-border-color: oklch(36% 0 0);
  --property-icon-color: oklch(0.7 0.15 262);
  --property-input-color: oklch(0.9 0.15 70);
  --property-label-color: oklch(0.9 0.15 262);
  --raised-background: color-mix(in srgb, oklch(36% 0 0) 65%, transparent) linear-gradient(oklch(36% 0 0), color-mix(in srgb, oklch(36% 0 0) 65%, transparent));
  --ribbon-background: oklch(24% 0 0);
  --ribbon-background-collapsed: oklch(24% 0 0);
  --search-clear-button-color: oklch(77.5% 0 0);
  --search-icon-color: oklch(77.5% 0 0);
  --search-result-background: oklch(30% 0 0);
  --setting-group-heading-color: oklch(100% 0 0);
  --setting-items-background: oklch(27% 0 0);
  --setting-items-border-color: oklch(36% 0 0);
  --slider-thumb-border-color: oklch(39% 0 0);
  --slider-track-background: oklch(36% 0 0);
  --status-bar-background: oklch(24% 0 0);
  --status-bar-border-color: oklch(42% 0 0);
  --status-bar-text-color: oklch(77.5% 0 0);
  --suggestion-background: oklch(30% 0 0);
  --sync-avatar-color-1: #f47266;
  --sync-avatar-color-2: #f79f69;
  --sync-avatar-color-3: #d4e481;
  --sync-avatar-color-4: #8bdfae;
  --sync-avatar-color-5: #84dcd2;
  --sync-avatar-color-6: #4958fd;
  --sync-avatar-color-7: #b89de7;
  --sync-avatar-color-8: #dfaac0;
  --tab-background-active: oklch(30% 0 0);
  --tab-container-background: oklch(30% 0 0);
  --tab-divider-color: oklch(36% 0 0);
  --tab-outline-color: oklch(39% 0 0);
  --tab-switcher-background: oklch(24% 0 0);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(24% 0 0), transparent);
  --tab-text-color: oklch(58% 0 0);
  --tab-text-color-active: oklch(77.5% 0 0);
  --tab-text-color-focused: oklch(77.5% 0 0);
  --tab-text-color-focused-active: oklch(77.5% 0 0);
  --tab-text-color-focused-active-current: oklch(100% 0 0);
  --tab-text-color-focused-highlighted: oklch(0.9 0.15 70);
  --table-add-button-border-color: oklch(36% 0 0);
  --table-border-color: oklch(42% 0 0);
  --table-drag-handle-background-active: oklch(0.7 0.15 70);
  --table-drag-handle-color: oklch(58% 0 0);
  --table-header-border-color: oklch(42% 0 0);
  --table-header-color: oklch(100% 0 0);
  --table-header-weight: 500;
  --table-selection-border-color: oklch(0.7 0.15 70);
  --tag-background: color-mix(in oklch,oklch(0.9 0.15 262) 15%,transparent);
  --tag-background-hover: color-mix(in oklch,oklch(0.9 0.15 262) 30%,transparent);
  --tag-color: oklch(0.9 0.15 262);
  --tag-color-hover: oklch(1 0.09 262);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.33em;
  --tag-radius: 12px;
  --text-accent: oklch(0.9 0.15 70);
  --text-accent-hover: oklch(1 0.09 70);
  --text-error: #f47266;
  --text-faint: oklch(58% 0 0);
  --text-highlight-bg: oklch(from oklch(0.7 0.15 70) l c h/0.33);
  --text-muted: oklch(77.5% 0 0);
  --text-normal: oklch(100% 0 0);
  --text-selection: oklch(from oklch(0.7 0.15 262) l c h/0.33);
  --text-success: #8bdfae;
  --text-warning: #f79f69;
  --theme-color-1-alt: oklch(0.7 0.15 262);
  --theme-color-1-chroma: 0.15;
  --theme-color-1-high: oklch(1 0.09 262);
  --theme-color-1-hue: 262;
  --theme-color-1-normal: oklch(0.9 0.15 262);
  --theme-color-1-transparent: oklch(from oklch(0.7 0.15 262) l c h/0.33);
  --theme-color-2-alt: oklch(0.7 0.15 70);
  --theme-color-2-chroma: 0.15;
  --theme-color-2-high: oklch(1 0.09 70);
  --theme-color-2-hue: 70;
  --theme-color-2-normal: oklch(0.9 0.15 70);
  --theme-color-2-transparent: oklch(from oklch(0.7 0.15 70) l c h/0.33);
  --theme-color-luminosity-alt: 0.7;
  --theme-color-luminosity-high: 1;
  --theme-color-luminosity-normal: 0.9;
  --titlebar-background: oklch(30% 0 0);
  --titlebar-background-focused: oklch(30% 0 0);
  --titlebar-border-color: oklch(36% 0 0);
  --titlebar-text-color: oklch(77.5% 0 0);
  --titlebar-text-color-focused: oklch(100% 0 0);
  --vault-profile-color: oklch(100% 0 0);
  --vault-profile-color-hover: oklch(100% 0 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.24 0 0);
  color: oklch(1 0 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.42 0 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.3 0 0);
  border-left-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
}

body div#quartz-root {
  background-color: oklch(0.3 0 0);
  color: oklch(1 0 0);
}`,
    typography: `body .page article p > b, b {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body .page article p > em, em {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body .page article p > i, i {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body .page article p > strong, strong {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body .text-highlight {
  background-color: oklch(0.7 0.15 70 / 0.33);
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body del {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: line-through oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body p {
  color: oklch(0.775 0 0);
  outline: oklch(0.775 0 0) none 0px;
  text-decoration: oklch(0.775 0 0);
  text-decoration-color: oklch(0.775 0 0);
}`,
    links: `body a.external, footer a {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration: underline oklch(0.9 0.15 70);
  text-decoration-color: oklch(0.9 0.15 70);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
  text-decoration: underline oklch(0.9 0.15 70);
  text-decoration-color: oklch(0.9 0.15 70);
}

body a.internal.broken {
  color: oklch(0.9 0.15 70);
  outline: oklch(0.9 0.15 70) none 0px;
}`,
    lists: `body dd {
  color: oklch(1 0 0);
}

body dt {
  color: oklch(1 0 0);
}

body ol > li {
  color: oklch(1 0 0);
}

body ol.overflow {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body ul > li {
  color: oklch(1 0 0);
}

body ul.overflow {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.58 0 0);
  text-decoration: oklch(0.58 0 0);
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body table {
  color: oklch(1 0 0);
  width: 202.938px;
}

body td {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
}

body th {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(1 0 0);
  font-weight: 500;
}`,
    code: `body code {
  border-bottom-color: oklch(1 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(1 0 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(1 0 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(212, 228, 129);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(212, 228, 129);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(212, 228, 129);
  border-left-color: rgb(212, 228, 129);
  border-right-color: rgb(212, 228, 129);
  border-top-color: rgb(212, 228, 129);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body figcaption {
  color: oklch(1 0 0);
}

body figure {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body img {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body video {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.27 0 0);
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
}

body .footnotes {
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

body .transclude {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(0.7 0.15 70);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body .transclude-inner {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(0.7 0.15 70);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.775 0 0);
  text-decoration: line-through oklch(0.775 0 0);
  text-decoration-color: oklch(0.775 0 0);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
}

body li.task-list-item[data-task='!'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='*'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='-'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='/'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='>'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='?'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='I'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='S'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='b'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='c'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='d'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='f'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='i'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='k'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='l'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='p'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='u'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body li.task-list-item[data-task='w'] {
  color: oklch(1 0 0);
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 184,157,231;
  background-color: rgba(184, 157, 231, 0.075);
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.075);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.075);
}

body .callout[data-callout="success"] {
  --callout-color: 160,223,139;
  background-color: rgba(160, 223, 139, 0.075);
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.075);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.075);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.075);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: oklch(1 0 0);
}

body .search > .search-container > .search-space {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

body .search > .search-container > .search-space > * {
  color: oklch(1 0 0);
  outline: oklch(1 0 0) none 0px;
  text-decoration: oklch(1 0 0);
  text-decoration-color: oklch(1 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(1 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(1 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
}

body .search > .search-container > .search-space > input {
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(1 0 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.9 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body a.internal.tag-link::before {
  color: oklch(0.9 0.15 262);
}

body h1 {
  color: oklch(1 0 0);
}

body h2 {
  color: oklch(1 0 0);
}

body h2.page-title, h2.page-title a {
  color: oklch(1 0 0);
}

body h3 {
  color: oklch(1 0 0);
}

body h4 {
  color: oklch(1 0 0);
}

body h5 {
  color: oklch(1 0 0);
}

body h6 {
  color: oklch(1 0 0);
}

body hr {
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 141,158,255;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.3 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.3 0 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}`,
    footer: `body footer {
  background-color: oklch(0.24 0 0);
  border-bottom-color: oklch(0.42 0 0);
  border-left-color: oklch(0.42 0 0);
  border-right-color: oklch(0.42 0 0);
  border-top-color: oklch(0.42 0 0);
  color: oklch(0.775 0 0);
}

body footer ul li a {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(1 0 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.775 0 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body li.section-li > .section .meta {
  color: oklch(0.775 0 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.775 0 0);
  text-decoration: oklch(0.775 0 0);
}

body ul.section-ul {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}

body .darkmode svg {
  color: oklch(0.58 0 0);
  stroke: oklch(0.58 0 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.58 0 0);
  border-left-color: oklch(0.58 0 0);
  border-right-color: oklch(0.58 0 0);
  border-top-color: oklch(0.58 0 0);
  color: oklch(0.58 0 0);
}

body .breadcrumb-element p {
  color: oklch(0.58 0 0);
}`,
    misc: `body .katex-display {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(1 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(1 0 0);
}

body .metadata {
  border-bottom-color: oklch(0.36 0 0);
  border-left-color: oklch(0.36 0 0);
  border-right-color: oklch(0.36 0 0);
  border-top-color: oklch(0.36 0 0);
  color: oklch(0.775 0 0);
}

body .metadata-properties {
  border-bottom-color: oklch(0.775 0 0);
  border-left-color: oklch(0.775 0 0);
  border-right-color: oklch(0.775 0 0);
  border-top-color: oklch(0.775 0 0);
  color: oklch(0.775 0 0);
}

body .navigation-progress {
  background-color: oklch(0.24 0 0);
}

body .page-header h2.page-title {
  color: oklch(1 0 0);
}

body abbr {
  color: oklch(1 0 0);
  text-decoration: underline dotted oklch(1 0 0);
}

body details {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body input[type=text] {
  border-bottom-color: oklch(0.9 0.15 262);
  border-left-color: oklch(0.9 0.15 262);
  border-right-color: oklch(0.9 0.15 262);
  border-top-color: oklch(0.9 0.15 262);
  color: oklch(0.9 0.15 262);
}

body kbd {
  background-color: oklch(0.36 0 0);
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
  color: oklch(1 0 0);
}

body progress {
  border-bottom-color: oklch(1 0 0);
  border-left-color: oklch(1 0 0);
  border-right-color: oklch(1 0 0);
  border-top-color: oklch(1 0 0);
}

body sub {
  color: oklch(1 0 0);
}

body summary {
  color: oklch(1 0 0);
}

body sup {
  color: oklch(1 0 0);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: oklch(82% 0 0);
  --background-modifier-border: oklch(88% 0 0);
  --background-modifier-border-focus: oklch(78% 0 0);
  --background-modifier-border-hover: oklch(85% 0 0);
  --background-modifier-error: #f47266;
  --background-modifier-error-hover: #f47266;
  --background-modifier-error-rgb: 244,114,102;
  --background-modifier-form-field: oklch(100% 0 0);
  --background-modifier-form-field-hover: oklch(100% 0 0);
  --background-modifier-success: #8bdfae;
  --background-modifier-success-rgb: 160,223,139;
  --background-primary: oklch(100% 0 0);
  --background-primary-alt: oklch(97% 0 0);
  --background-secondary: oklch(94% 0 0);
  --background-secondary-alt: oklch(91% 0 0);
  --base-row-even-bg: oklch(100% 0 0);
  --base-row-hover-bg: oklch(82% 0 0);
  --base-row-odd-bg: oklch(97% 0 0);
  --bases-cards-background: oklch(100% 0 0);
  --bases-cards-cover-background: oklch(97% 0 0);
  --bases-cards-shadow: 0 0 0 1px oklch(88% 0 0);
  --bases-cards-shadow-hover: 0 0 0 1px oklch(85% 0 0);
  --bases-embed-border-color: oklch(82% 0 0);
  --bases-group-heading-property-color: oklch(27.5% 0 0);
  --bases-table-border-color: oklch(82% 0 0);
  --bases-table-cell-background-active: oklch(100% 0 0);
  --bases-table-cell-background-disabled: oklch(97% 0 0);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(78% 0 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px oklch(0.5 0.15 70);
  --bases-table-group-background: oklch(97% 0 0);
  --bases-table-header-background: oklch(100% 0 0);
  --bases-table-header-color: oklch(0.4 0.15 262);
  --bases-table-summary-background: oklch(100% 0 0);
  --blockquote-border-color: oklch(0.5 0.15 262);
  --blockquote-border-thickness: 0.2em;
  --blur-background: color-mix(in srgb, oklch(100% 0 0) 65%, transparent) linear-gradient(oklch(100% 0 0), color-mix(in srgb, oklch(100% 0 0) 65%, transparent));
  --callout-bug: 244,114,102;
  --callout-default: 141,158,255;
  --callout-error: 244,114,102;
  --callout-example: 184,157,231;
  --callout-fail: 244,114,102;
  --callout-important: 132,220,210;
  --callout-info: 141,158,255;
  --callout-question: 247,159,105;
  --callout-success: 160,223,139;
  --callout-summary: 132,220,210;
  --callout-tip: 132,220,210;
  --callout-todo: 141,158,255;
  --callout-warning: 247,159,105;
  --canvas-background: oklch(100% 0 0);
  --canvas-card-label-color: oklch(45% 0 0);
  --canvas-color-1: 244,114,102;
  --canvas-color-2: 247,159,105;
  --canvas-color-3: 228,220,129;
  --canvas-color-4: 160,223,139;
  --canvas-color-5: 132,220,210;
  --canvas-color-6: 184,157,231;
  --canvas-dot-pattern: oklch(88% 0 0);
  --caret-color: oklch(0% 0 0);
  --checkbox-border-color: oklch(45% 0 0);
  --checkbox-border-color-hover: oklch(27.5% 0 0);
  --checkbox-color: oklch(0.5 0.15 70);
  --checkbox-color-hover: oklch(0.4 0.15 70);
  --checkbox-marker-color: oklch(100% 0 0);
  --checklist-done-color: oklch(27.5% 0 0);
  --code-background: oklch(97% 0 0);
  --code-border-color: oklch(88% 0 0);
  --code-comment: oklch(45% 0 0);
  --code-function: #d4e481;
  --code-important: #f79f69;
  --code-keyword: #dfaac0;
  --code-normal: oklch(0% 0 0);
  --code-operator: #f47266;
  --code-property: #84dcd2;
  --code-punctuation: oklch(27.5% 0 0);
  --code-radius: 8px;
  --code-string: #8bdfae;
  --code-tag: #f47266;
  --code-value: #b89de7;
  --collapse-icon-color: oklch(45% 0 0);
  --collapse-icon-color-collapsed: oklch(0.4 0.15 70);
  --color-base-00: oklch(100% 0 0);
  --color-base-05: oklch(97% 0 0);
  --color-base-10: oklch(94% 0 0);
  --color-base-100: oklch(0% 0 0);
  --color-base-20: oklch(91% 0 0);
  --color-base-30: oklch(88% 0 0);
  --color-base-40: oklch(85% 0 0);
  --color-base-50: oklch(82% 0 0);
  --color-base-60: oklch(78% 0 0);
  --color-base-70: oklch(73% 0 0);
  --color-blue: #4958fd;
  --color-blue-rgb: 141,158,255;
  --color-cyan: #84dcd2;
  --color-cyan-rgb: 132,220,210;
  --color-green: #8bdfae;
  --color-green-rgb: 160,223,139;
  --color-orange: #f79f69;
  --color-orange-rgb: 247,159,105;
  --color-pink: #dfaac0;
  --color-pink-rgb: 223,170,192;
  --color-purple: #b89de7;
  --color-purple-rgb: 184,157,231;
  --color-red: #f47266;
  --color-red-rgb: 244,114,102;
  --color-yellow: #d4e481;
  --color-yellow-rgb: 228,220,129;
  --divider-color: oklch(82% 0 0);
  --divider-color-hover: oklch(0.5 0.15 70);
  --dropdown-background: oklch(94% 0 0);
  --dropdown-background-hover: oklch(91% 0 0);
  --embed-block-shadow-hover: 0 0 0 1px oklch(88% 0 0), inset 0 0 0 1px oklch(88% 0 0);
  --embed-border-start: 2px solid oklch(0.5 0.15 70);
  --file-header-background: oklch(100% 0 0);
  --file-header-background-focused: oklch(100% 0 0);
  --file-header-justify: left;
  --flair-background: oklch(94% 0 0);
  --flair-color: oklch(0% 0 0);
  --font-headings: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: oklch(88% 0 0);
  --footnote-id-color: oklch(27.5% 0 0);
  --footnote-id-color-no-occurrences: oklch(45% 0 0);
  --graph-node: oklch(27.5% 0 0);
  --graph-node-attachment: #d4e481;
  --graph-node-focused: oklch(0.4 0.15 70);
  --graph-node-tag: oklch(0.4 0.15 262);
  --graph-node-unresolved: oklch(45% 0 0);
  --graph-text: oklch(0% 0 0);
  --h1-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h2-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h3-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h4-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h5-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --h6-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --heading-formatting: oklch(45% 0 0);
  --heading-underline-color: oklch(85% 0 0);
  --hr-color: oklch(82% 0 0);
  --icon-color: oklch(45% 0 0);
  --icon-color-active: oklch(27.5% 0 0);
  --icon-color-focused: oklch(0% 0 0);
  --icon-color-hover: oklch(27.5% 0 0);
  --inline-title-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: 1.625rem;
  --input-date-separator: oklch(45% 0 0);
  --input-placeholder-color: oklch(45% 0 0);
  --interactive-accent: oklch(0.5 0.15 70);
  --interactive-accent-hover: oklch(0.4 0.15 70);
  --interactive-hover: oklch(91% 0 0);
  --interactive-normal: oklch(94% 0 0);
  --link-color: oklch(0.4 0.15 70);
  --link-color-hover: oklch(0.3 0.15 70);
  --link-external-color: oklch(0.4 0.15 70);
  --link-external-color-hover: oklch(0.3 0.15 70);
  --link-unresolved-color: oklch(0.4 0.15 70);
  --list-marker-color: oklch(27.5% 0 0);
  --list-marker-color-collapsed: oklch(0.4 0.15 70);
  --list-marker-color-hover: oklch(27.5% 0 0);
  --menu-background: oklch(94% 0 0);
  --menu-border-color: oklch(85% 0 0);
  --metadata-border-color: oklch(88% 0 0);
  --metadata-divider-color: oklch(88% 0 0);
  --metadata-gap: 0;
  --metadata-input-font-size: max(13px,0.9em);
  --metadata-input-text-color: oklch(0.4 0.15 70);
  --metadata-label-font-size: max(13px,0.9em);
  --metadata-label-text-color: oklch(0.4 0.15 262);
  --metadata-label-text-color-hover: oklch(27.5% 0 0);
  --metadata-label-width: max(22.5%,8rem);
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(78% 0 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(85% 0 0);
  --modal-background: oklch(100% 0 0);
  --modal-border-color: oklch(88% 0 0);
  --nav-collapse-icon-color: oklch(45% 0 0);
  --nav-collapse-icon-color-collapsed: oklch(45% 0 0);
  --nav-heading-color: oklch(0% 0 0);
  --nav-heading-color-collapsed: oklch(45% 0 0);
  --nav-heading-color-collapsed-hover: oklch(27.5% 0 0);
  --nav-heading-color-hover: oklch(0% 0 0);
  --nav-item-color: oklch(27.5% 0 0);
  --nav-item-color-active: oklch(0% 0 0);
  --nav-item-color-highlighted: oklch(0.4 0.15 70);
  --nav-item-color-hover: oklch(0% 0 0);
  --nav-item-color-selected: oklch(0% 0 0);
  --nav-tag-color: oklch(45% 0 0);
  --nav-tag-color-active: oklch(27.5% 0 0);
  --nav-tag-color-hover: oklch(27.5% 0 0);
  --nn-theme-file-selected-bg: oklch(85% 0 0);
  --nn-theme-file-selected-inactive-bg: oklch(88% 0 0);
  --nn-theme-file-selected-name-color: oklch(0% 0 0);
  --nn-theme-file-tag-bg: color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent);
  --nn-theme-file-tag-color: oklch(0.4 0.15 262);
  --nn-theme-list-bg: oklch(94% 0 0);
  --nn-theme-list-header-bg: oklch(94% 0 0);
  --nn-theme-nav-bg: oklch(94% 0 0);
  --pdf-background: oklch(100% 0 0);
  --pdf-page-background: oklch(100% 0 0);
  --pdf-sidebar-background: oklch(100% 0 0);
  --pill-border-color: oklch(88% 0 0);
  --pill-border-color-hover: oklch(85% 0 0);
  --pill-color: oklch(27.5% 0 0);
  --pill-color-hover: oklch(0% 0 0);
  --pill-color-remove: oklch(45% 0 0);
  --pill-color-remove-hover: oklch(0.4 0.15 70);
  --prompt-background: oklch(100% 0 0);
  --prompt-border-color: oklch(88% 0 0);
  --property-icon-color: oklch(0.5 0.15 262);
  --property-input-color: oklch(0.4 0.15 70);
  --property-label-color: oklch(0.4 0.15 262);
  --raised-background: color-mix(in srgb, oklch(100% 0 0) 65%, transparent) linear-gradient(oklch(100% 0 0), color-mix(in srgb, oklch(100% 0 0) 65%, transparent));
  --ribbon-background: oklch(94% 0 0);
  --ribbon-background-collapsed: oklch(94% 0 0);
  --search-clear-button-color: oklch(27.5% 0 0);
  --search-icon-color: oklch(27.5% 0 0);
  --search-result-background: oklch(100% 0 0);
  --setting-group-heading-color: oklch(0% 0 0);
  --setting-items-background: oklch(97% 0 0);
  --setting-items-border-color: oklch(88% 0 0);
  --slider-thumb-border-color: oklch(85% 0 0);
  --slider-track-background: oklch(88% 0 0);
  --status-bar-background: oklch(94% 0 0);
  --status-bar-border-color: oklch(82% 0 0);
  --status-bar-text-color: oklch(27.5% 0 0);
  --suggestion-background: oklch(100% 0 0);
  --sync-avatar-color-1: #f47266;
  --sync-avatar-color-2: #f79f69;
  --sync-avatar-color-3: #d4e481;
  --sync-avatar-color-4: #8bdfae;
  --sync-avatar-color-5: #84dcd2;
  --sync-avatar-color-6: #4958fd;
  --sync-avatar-color-7: #b89de7;
  --sync-avatar-color-8: #dfaac0;
  --tab-background-active: oklch(100% 0 0);
  --tab-container-background: oklch(100% 0 0);
  --tab-divider-color: oklch(88% 0 0);
  --tab-outline-color: oklch(85% 0 0);
  --tab-switcher-background: oklch(94% 0 0);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(94% 0 0), transparent);
  --tab-text-color: oklch(45% 0 0);
  --tab-text-color-active: oklch(27.5% 0 0);
  --tab-text-color-focused: oklch(27.5% 0 0);
  --tab-text-color-focused-active: oklch(27.5% 0 0);
  --tab-text-color-focused-active-current: oklch(0% 0 0);
  --tab-text-color-focused-highlighted: oklch(0.4 0.15 70);
  --table-add-button-border-color: oklch(88% 0 0);
  --table-border-color: oklch(82% 0 0);
  --table-drag-handle-background-active: oklch(0.5 0.15 70);
  --table-drag-handle-color: oklch(45% 0 0);
  --table-drag-handle-color-active: oklch(100% 0 0);
  --table-header-border-color: oklch(82% 0 0);
  --table-header-color: oklch(0% 0 0);
  --table-header-weight: 500;
  --table-selection-border-color: oklch(0.5 0.15 70);
  --tag-background: color-mix(in oklch,oklch(0.4 0.15 262) 15%,transparent);
  --tag-background-hover: color-mix(in oklch,oklch(0.4 0.15 262) 30%,transparent);
  --tag-color: oklch(0.4 0.15 262);
  --tag-color-hover: oklch(0.3 0.15 262);
  --tag-padding-x: 0.75em;
  --tag-padding-y: 0.33em;
  --tag-radius: 12px;
  --text-accent: oklch(0.4 0.15 70);
  --text-accent-hover: oklch(0.3 0.15 70);
  --text-error: #f47266;
  --text-faint: oklch(45% 0 0);
  --text-highlight-bg: oklch(from oklch(0.5 0.15 70) l c h/0.33);
  --text-muted: oklch(27.5% 0 0);
  --text-normal: oklch(0% 0 0);
  --text-on-accent: oklch(100% 0 0);
  --text-on-accent-inverted: oklch(100% 0 0);
  --text-selection: oklch(from oklch(0.5 0.15 262) l c h/0.33);
  --text-success: #8bdfae;
  --text-warning: #f79f69;
  --theme-color-1-alt: oklch(0.5 0.15 262);
  --theme-color-1-chroma: 0.15;
  --theme-color-1-high: oklch(0.3 0.15 262);
  --theme-color-1-hue: 262;
  --theme-color-1-normal: oklch(0.4 0.15 262);
  --theme-color-1-transparent: oklch(from oklch(0.5 0.15 262) l c h/0.33);
  --theme-color-2-alt: oklch(0.5 0.15 70);
  --theme-color-2-chroma: 0.15;
  --theme-color-2-high: oklch(0.3 0.15 70);
  --theme-color-2-hue: 70;
  --theme-color-2-normal: oklch(0.4 0.15 70);
  --theme-color-2-transparent: oklch(from oklch(0.5 0.15 70) l c h/0.33);
  --theme-color-luminosity-alt: 0.5;
  --theme-color-luminosity-high: 0.3;
  --theme-color-luminosity-normal: 0.4;
  --titlebar-background: oklch(100% 0 0);
  --titlebar-background-focused: oklch(100% 0 0);
  --titlebar-border-color: oklch(88% 0 0);
  --titlebar-text-color: oklch(27.5% 0 0);
  --titlebar-text-color-focused: oklch(0% 0 0);
  --vault-profile-color: oklch(0% 0 0);
  --vault-profile-color-hover: oklch(0% 0 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.94 0 0);
  color: oklch(0 0 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.82 0 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(1 0 0);
  border-left-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
}

body div#quartz-root {
  background-color: oklch(1 0 0);
  color: oklch(0 0 0);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > em, em {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > i, i {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .page article p > strong, strong {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .text-highlight {
  background-color: oklch(0.5 0.15 70 / 0.33);
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body del {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: line-through oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body p {
  color: oklch(0.275 0 0);
  outline: oklch(0.275 0 0) none 0px;
  text-decoration: oklch(0.275 0 0);
  text-decoration-color: oklch(0.275 0 0);
}`,
    links: `body a.external, footer a {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration: underline oklch(0.4 0.15 70);
  text-decoration-color: oklch(0.4 0.15 70);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
  text-decoration: underline oklch(0.4 0.15 70);
  text-decoration-color: oklch(0.4 0.15 70);
}

body a.internal.broken {
  color: oklch(0.4 0.15 70);
  outline: oklch(0.4 0.15 70) none 0px;
}`,
    lists: `body dd {
  color: oklch(0 0 0);
}

body dt {
  color: oklch(0 0 0);
}

body ol > li {
  color: oklch(0 0 0);
}

body ol.overflow {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body ul > li {
  color: oklch(0 0 0);
}

body ul.overflow {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.45 0 0);
  text-decoration: oklch(0.45 0 0);
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body table {
  color: oklch(0 0 0);
  width: 202.938px;
}

body td {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
}

body th {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0 0 0);
  font-weight: 500;
}`,
    code: `body code {
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(212, 228, 129);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(212, 228, 129);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(212, 228, 129);
  border-left-color: rgb(212, 228, 129);
  border-right-color: rgb(212, 228, 129);
  border-top-color: rgb(212, 228, 129);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body figcaption {
  color: oklch(0 0 0);
}

body figure {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body img {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body video {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
}

body .footnotes {
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .transclude {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0.5 0.15 70);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body .transclude-inner {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0.5 0.15 70);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.275 0 0);
  text-decoration: line-through oklch(0.275 0 0);
  text-decoration-color: oklch(0.275 0 0);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
}

body li.task-list-item[data-task='!'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='*'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='-'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='/'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='>'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='?'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='I'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='S'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='b'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='c'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='d'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='f'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='i'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='k'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='l'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='p'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='u'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body li.task-list-item[data-task='w'] {
  color: oklch(0 0 0);
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(141, 158, 255);
  border-left-color: rgb(141, 158, 255);
  border-right-color: rgb(141, 158, 255);
  border-top-color: rgb(141, 158, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.1);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 184,157,231;
  background-color: rgba(184, 157, 231, 0.1);
  border-bottom-color: rgba(184, 157, 231, 0.25);
  border-left-color: rgba(184, 157, 231, 0.25);
  border-right-color: rgba(184, 157, 231, 0.25);
  border-top-color: rgba(184, 157, 231, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 244,114,102;
  background-color: rgba(244, 114, 102, 0.1);
  border-bottom-color: rgba(244, 114, 102, 0.25);
  border-left-color: rgba(244, 114, 102, 0.25);
  border-right-color: rgba(244, 114, 102, 0.25);
  border-top-color: rgba(244, 114, 102, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.1);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 160,223,139;
  background-color: rgba(160, 223, 139, 0.1);
  border-bottom-color: rgba(160, 223, 139, 0.25);
  border-left-color: rgba(160, 223, 139, 0.25);
  border-right-color: rgba(160, 223, 139, 0.25);
  border-top-color: rgba(160, 223, 139, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 132,220,210;
  background-color: rgba(132, 220, 210, 0.1);
  border-bottom-color: rgba(132, 220, 210, 0.25);
  border-left-color: rgba(132, 220, 210, 0.25);
  border-right-color: rgba(132, 220, 210, 0.25);
  border-top-color: rgba(132, 220, 210, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 141,158,255;
  background-color: rgba(141, 158, 255, 0.1);
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 247,159,105;
  background-color: rgba(247, 159, 105, 0.1);
  border-bottom-color: rgba(247, 159, 105, 0.25);
  border-left-color: rgba(247, 159, 105, 0.25);
  border-right-color: rgba(247, 159, 105, 0.25);
  border-top-color: rgba(247, 159, 105, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

body .search > .search-container > .search-space > * {
  color: oklch(0 0 0);
  outline: oklch(0 0 0) none 0px;
  text-decoration: oklch(0 0 0);
  text-decoration-color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
}

body .search > .search-container > .search-space > input {
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0 0 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.4 0.15 262 / 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body a.internal.tag-link::before {
  color: oklch(0.4 0.15 262);
}

body h1 {
  color: oklch(0 0 0);
}

body h2 {
  color: oklch(0 0 0);
}

body h2.page-title, h2.page-title a {
  color: oklch(0 0 0);
}

body h3 {
  color: oklch(0 0 0);
}

body h4 {
  color: oklch(0 0 0);
}

body h5 {
  color: oklch(0 0 0);
}

body h6 {
  color: oklch(0 0 0);
}

body hr {
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 141,158,255;
  border-bottom-color: rgba(141, 158, 255, 0.25);
  border-left-color: rgba(141, 158, 255, 0.25);
  border-right-color: rgba(141, 158, 255, 0.25);
  border-top-color: rgba(141, 158, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-corner {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}

body ::-webkit-scrollbar-track {
  background: oklch(1 0 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}`,
    footer: `body footer {
  background-color: oklch(0.94 0 0);
  border-bottom-color: oklch(0.82 0 0);
  border-left-color: oklch(0.82 0 0);
  border-right-color: oklch(0.82 0 0);
  border-top-color: oklch(0.82 0 0);
  color: oklch(0.275 0 0);
}

body footer ul li a {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(0 0 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.275 0 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body li.section-li > .section .meta {
  color: oklch(0.275 0 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.275 0 0);
  text-decoration: oklch(0.275 0 0);
}

body ul.section-ul {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}

body .darkmode svg {
  color: oklch(0.45 0 0);
  stroke: oklch(0.45 0 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.45 0 0);
  border-left-color: oklch(0.45 0 0);
  border-right-color: oklch(0.45 0 0);
  border-top-color: oklch(0.45 0 0);
  color: oklch(0.45 0 0);
}

body .breadcrumb-element p {
  color: oklch(0.45 0 0);
}`,
    misc: `body .katex-display {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0 0 0);
}

body .metadata {
  border-bottom-color: oklch(0.88 0 0);
  border-left-color: oklch(0.88 0 0);
  border-right-color: oklch(0.88 0 0);
  border-top-color: oklch(0.88 0 0);
  color: oklch(0.275 0 0);
}

body .metadata-properties {
  border-bottom-color: oklch(0.275 0 0);
  border-left-color: oklch(0.275 0 0);
  border-right-color: oklch(0.275 0 0);
  border-top-color: oklch(0.275 0 0);
  color: oklch(0.275 0 0);
}

body .navigation-progress {
  background-color: oklch(0.94 0 0);
}

body .page-header h2.page-title {
  color: oklch(0 0 0);
}

body abbr {
  color: oklch(0 0 0);
  text-decoration: underline dotted oklch(0 0 0);
}

body details {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body input[type=text] {
  border-bottom-color: oklch(0.4 0.15 262);
  border-left-color: oklch(0.4 0.15 262);
  border-right-color: oklch(0.4 0.15 262);
  border-top-color: oklch(0.4 0.15 262);
  color: oklch(0.4 0.15 262);
}

body kbd {
  background-color: oklch(0.97 0 0);
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
  color: oklch(0 0 0);
}

body progress {
  border-bottom-color: oklch(0 0 0);
  border-left-color: oklch(0 0 0);
  border-right-color: oklch(0 0 0);
  border-top-color: oklch(0 0 0);
}

body sub {
  color: oklch(0 0 0);
}

body summary {
  color: oklch(0 0 0);
}

body sup {
  color: oklch(0 0 0);
}`,
  },
};
