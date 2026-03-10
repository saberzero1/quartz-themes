import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "solarized",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 17.5690607735deg;
  --accent-l: 44.1176470588%;
  --accent-s: 80.4444444444%;
  --active-bg: rgba(255, 255, 255, 0.067);
  --background-modifier-active-hover: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --background-modifier-border: rgb(7, 54, 66);
  --background-modifier-border-focus: hsl(17.5690607735deg, 80%, 44%);
  --background-modifier-border-hover: rgb(7, 54, 66);
  --background-modifier-error: rgb(220, 50, 47);
  --background-modifier-error-hover: rgb(220, 50, 47);
  --background-modifier-error-rgb: 220, 50, 47;
  --background-modifier-form-field: rgb(0, 43, 54);
  --background-modifier-form-field-hover: rgb(0, 43, 54);
  --background-modifier-success: rgb(133, 153, 0);
  --background-modifier-success-rgb: 133, 153, 0;
  --background-primary: rgb(0, 43, 54);
  --background-primary-alt: rgb(7, 54, 66);
  --background-secondary: rgb(0, 43, 54);
  --background-secondary-alt: rgb(7, 54, 66);
  --base0: rgb(131, 148, 150);
  --base00: rgb(101, 123, 131);
  --base01: rgb(88, 110, 117);
  --base02: rgb(7, 54, 66);
  --base03: rgb(0, 43, 54);
  --base1: rgb(147, 161, 161);
  --base2: rgb(238, 232, 213);
  --base3: rgb(253, 246, 227);
  --bases-cards-background: rgb(0, 43, 54);
  --bases-cards-cover-background: rgb(7, 54, 66);
  --bases-cards-shadow: 0 0 0 1px rgb(7, 54, 66);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(7, 54, 66);
  --bases-embed-border-color: rgb(7, 54, 66);
  --bases-group-heading-property-color: rgb(101, 123, 131);
  --bases-table-border-color: rgb(7, 54, 66);
  --bases-table-cell-background-active: rgb(0, 43, 54);
  --bases-table-cell-background-disabled: rgb(7, 54, 66);
  --bases-table-cell-background-selected: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --bases-table-group-background: rgb(7, 54, 66);
  --bases-table-header-background: rgb(0, 43, 54);
  --bases-table-header-color: rgb(101, 123, 131);
  --bases-table-summary-background: rgb(0, 43, 54);
  --blockquote-border-color: hsl(17.5690607735deg, 80%, 44%);
  --blur-background: color-mix(in srgb, rgb(7, 54, 66) 65%, transparent) linear-gradient(rgb(7, 54, 66), color-mix(in srgb, rgb(7, 54, 66) 65%, transparent));
  --callout-bug: 220, 50, 47;
  --callout-default: 38, 139, 210;
  --callout-error: 220, 50, 47;
  --callout-example: 108, 113, 196;
  --callout-fail: 220, 50, 47;
  --callout-important: 42, 161, 152;
  --callout-info: 38, 139, 210;
  --callout-question: 203, 75, 22;
  --callout-success: 133, 153, 0;
  --callout-summary: 42, 161, 152;
  --callout-tip: 42, 161, 152;
  --callout-todo: 38, 139, 210;
  --callout-warning: 203, 75, 22;
  --canvas-background: rgb(0, 43, 54);
  --canvas-card-label-color: rgb(88, 110, 117);
  --canvas-color-1: 220, 50, 47;
  --canvas-color-2: 203, 75, 22;
  --canvas-color-3: 181, 137, 0;
  --canvas-color-4: 133, 153, 0;
  --canvas-color-5: 42, 161, 152;
  --canvas-color-6: 108, 113, 196;
  --canvas-dot-pattern: rgb(7, 54, 66);
  --caret-color: rgb(131, 148, 150);
  --checkbox-border-color: hsl(17.5690607735deg, 80%, 44%);
  --checkbox-border-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --checkbox-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --checkbox-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --checkbox-marker-color: rgb(0, 43, 54);
  --checklist-done-color: rgb(101, 123, 131);
  --code-background: rgb(7, 54, 66);
  --code-border-color: rgb(7, 54, 66);
  --code-comment: rgb(42, 161, 152);
  --code-function: rgb(38, 139, 210);
  --code-important: rgb(203, 75, 22);
  --code-keyword: rgb(133, 153, 0);
  --code-normal: rgb(131, 148, 150);
  --code-operator: rgb(131, 148, 150);
  --code-property: rgb(131, 148, 150);
  --code-punctuation: rgb(131, 148, 150);
  --code-string: rgb(42, 161, 152);
  --code-tag: rgb(220, 50, 47);
  --code-value: rgb(211, 54, 130);
  --collapse-icon-color: rgb(88, 110, 117);
  --collapse-icon-color-collapsed: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --color-accent: hsl(17.5690607735deg, 80%, 44%);
  --color-accent-1: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --color-accent-2: hsl(calc(17.56906deg - 5), 84.46667%, 56.91176%);
  --color-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588%;
  --color-base-25: rgb(0, 43, 54);
  --color-base-30: rgb(7, 54, 66);
  --color-base-35: rgb(7, 54, 66);
  --color-base-40: rgb(131, 148, 150);
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-blue: rgb(38, 139, 210);
  --color-blue-rgb: 38, 139, 210;
  --color-cyan: rgb(42, 161, 152);
  --color-cyan-rgb: 42, 161, 152;
  --color-green: rgb(133, 153, 0);
  --color-green-rgb: 133, 153, 0;
  --color-orange: rgb(203, 75, 22);
  --color-orange-rgb: 203, 75, 22;
  --color-pink: rgb(211, 54, 130);
  --color-pink-rgb: 211, 54, 130;
  --color-purple: rgb(108, 113, 196);
  --color-purple-rgb: 108, 113, 196;
  --color-red: rgb(220, 50, 47);
  --color-red-rgb: 220, 50, 47;
  --color-yellow: rgb(181, 137, 0);
  --color-yellow-rgb: 181, 137, 0;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(7, 54, 66);
  --divider-color-hover: hsl(17.5690607735deg, 80%, 44%);
  --dropdown-background: rgb(7, 54, 66);
  --dropdown-background-hover: rgb(0, 43, 54);
  --embed-block-shadow-hover: 0 0 0 1px rgb(7, 54, 66), inset 0 0 0 1px rgb(7, 54, 66);
  --embed-border-start: 2px solid hsl(17.5690607735deg, 80%, 44%);
  --file-header-background: rgb(0, 43, 54);
  --file-header-background-focused: rgb(0, 43, 54);
  --flair-background: rgb(7, 54, 66);
  --flair-color: rgb(131, 148, 150);
  --footnote-divider-color: rgb(7, 54, 66);
  --footnote-id-color: rgb(101, 123, 131);
  --footnote-id-color-no-occurrences: rgb(88, 110, 117);
  --graph-line: rgb(7, 54, 66);
  --graph-node: rgb(101, 123, 131);
  --graph-node-attachment: rgb(181, 137, 0);
  --graph-node-focused: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --graph-node-tag: rgb(133, 153, 0);
  --graph-node-unresolved: rgb(88, 110, 117);
  --graph-text: rgb(131, 148, 150);
  --gray: var(--text-muted);
  --h1-color: rgb(42, 161, 152);
  --h2-color: rgb(42, 161, 152);
  --h3-color: rgb(42, 161, 152);
  --h4-color: rgb(42, 161, 152);
  --h5-color: rgb(42, 161, 152);
  --h6-color: rgb(42, 161, 152);
  --heading-formatting: rgb(42, 161, 152);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(7, 54, 66);
  --icon-color: rgb(101, 123, 131);
  --icon-color-active: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --icon-color-focused: rgb(131, 148, 150);
  --icon-color-hover: rgb(101, 123, 131);
  --inline-title-color: rgb(42, 161, 152);
  --input-date-separator: rgb(88, 110, 117);
  --input-placeholder-color: rgb(88, 110, 117);
  --interactive-accent: hsl(17.5690607735deg, 80%, 44%);
  --interactive-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --interactive-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588%;
  --interactive-hover: rgb(0, 43, 54);
  --interactive-normal: rgb(7, 54, 66);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(38, 139, 210);
  --link-color-hover: rgb(38, 139, 210);
  --link-decoration: none;
  --link-external-color: rgb(108, 113, 196);
  --link-external-color-hover: rgb(108, 113, 196);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(220, 50, 47);
  --link-unresolved-color-hover: rgb(220, 50, 47);
  --link-unresolved-decoration-color: rgb(220, 50, 47);
  --list-marker-color: rgb(88, 110, 117);
  --list-marker-color-collapsed: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --list-marker-color-hover: rgb(101, 123, 131);
  --menu-background: rgb(0, 43, 54);
  --menu-border-color: rgb(7, 54, 66);
  --metadata-border-color: rgb(7, 54, 66);
  --metadata-divider-color: rgb(7, 54, 66);
  --metadata-input-text-color: rgb(131, 148, 150);
  --metadata-label-text-color: rgb(101, 123, 131);
  --metadata-label-text-color-hover: rgb(101, 123, 131);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(7, 54, 66);
  --modal-background: rgb(0, 43, 54);
  --modal-border-color: rgb(131, 148, 150);
  --nav-collapse-icon-color: rgb(88, 110, 117);
  --nav-collapse-icon-color-collapsed: rgb(88, 110, 117);
  --nav-heading-color: rgb(131, 148, 150);
  --nav-heading-color-collapsed: rgb(88, 110, 117);
  --nav-heading-color-collapsed-hover: rgb(101, 123, 131);
  --nav-heading-color-hover: rgb(131, 148, 150);
  --nav-item-background-selected: hsla(17.5690607735deg, 80%, 44%, 0.15);
  --nav-item-color: rgb(101, 123, 131);
  --nav-item-color-active: rgb(131, 148, 150);
  --nav-item-color-highlighted: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --nav-item-color-hover: rgb(131, 148, 150);
  --nav-item-color-selected: rgb(131, 148, 150);
  --nav-tag-color: rgb(88, 110, 117);
  --nav-tag-color-active: rgb(101, 123, 131);
  --nav-tag-color-hover: rgb(101, 123, 131);
  --pdf-background: rgb(0, 43, 54);
  --pdf-page-background: rgb(0, 43, 54);
  --pdf-shadow: 0 0 0 1px rgb(7, 54, 66);
  --pdf-sidebar-background: rgb(0, 43, 54);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(7, 54, 66);
  --pill-border-color: rgb(7, 54, 66);
  --pill-border-color-hover: rgb(7, 54, 66);
  --pill-color: rgb(101, 123, 131);
  --pill-color-hover: rgb(131, 148, 150);
  --pill-color-remove: rgb(88, 110, 117);
  --pill-color-remove-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --prompt-background: rgb(0, 43, 54);
  --prompt-border-color: rgb(131, 148, 150);
  --raised-background: color-mix(in srgb, rgb(7, 54, 66) 65%, transparent) linear-gradient(rgb(7, 54, 66), color-mix(in srgb, rgb(7, 54, 66) 65%, transparent));
  --ribbon-background: rgb(0, 43, 54);
  --ribbon-background-collapsed: rgb(0, 43, 54);
  --search-clear-button-color: rgb(101, 123, 131);
  --search-icon-color: rgb(101, 123, 131);
  --search-result-background: rgb(0, 43, 54);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(131, 148, 150);
  --setting-items-background: rgb(7, 54, 66);
  --setting-items-border-color: rgb(7, 54, 66);
  --slider-thumb-border-color: rgb(7, 54, 66);
  --slider-track-background: rgb(7, 54, 66);
  --status-bar-background: rgb(0, 43, 54);
  --status-bar-border-color: rgb(7, 54, 66);
  --status-bar-text-color: rgb(101, 123, 131);
  --suggestion-background: rgb(0, 43, 54);
  --sync-avatar-color-1: rgb(220, 50, 47);
  --sync-avatar-color-2: rgb(203, 75, 22);
  --sync-avatar-color-3: rgb(181, 137, 0);
  --sync-avatar-color-4: rgb(133, 153, 0);
  --sync-avatar-color-5: rgb(42, 161, 152);
  --sync-avatar-color-6: rgb(38, 139, 210);
  --sync-avatar-color-7: rgb(108, 113, 196);
  --sync-avatar-color-8: rgb(211, 54, 130);
  --tab-background-active: rgb(0, 43, 54);
  --tab-container-background: rgb(0, 43, 54);
  --tab-divider-color: rgb(7, 54, 66);
  --tab-outline-color: rgb(7, 54, 66);
  --tab-switcher-background: rgb(0, 43, 54);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 43, 54), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --tab-text-color: rgb(88, 110, 117);
  --tab-text-color-active: rgb(101, 123, 131);
  --tab-text-color-focused: rgb(101, 123, 131);
  --tab-text-color-focused-active: rgb(101, 123, 131);
  --tab-text-color-focused-active-current: rgb(131, 148, 150);
  --tab-text-color-focused-highlighted: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --table-add-button-border-color: rgb(7, 54, 66);
  --table-border-color: rgb(7, 54, 66);
  --table-drag-handle-background-active: hsl(17.5690607735deg, 80%, 44%);
  --table-drag-handle-color: rgb(88, 110, 117);
  --table-drag-handle-color-active: rgb(0, 43, 54);
  --table-header-border-color: rgb(7, 54, 66);
  --table-header-weight: 700;
  --table-selection: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --table-selection-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --tag-background: hsla(17.5690607735deg, 80%, 44%, 0.2);
  --tag-background-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2);
  --tag-border-color: hsla(17.5690607735deg, 80%, 44%, 0.15);
  --tag-border-color-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15);
  --tag-color: hsl(17.5690607735deg, 80%, 44%);
  --tag-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --tag-padding-x: 0.25em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --text-accent-hover: hsl(calc(17.56906deg - 5), 84.46667%, 56.91176%);
  --text-error: rgb(220, 50, 47);
  --text-faint: rgb(88, 110, 117);
  --text-highlight-bg: hsl(17.5690607735deg, 80%, 44%);
  --text-highlight-bg-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --text-muted: rgb(101, 123, 131);
  --text-normal: rgb(131, 148, 150);
  --text-on-accent: rgb(0, 43, 54);
  --text-selection: hsla(17.5690607735deg, 80%, 44%, 0.33);
  --text-success: rgb(133, 153, 0);
  --text-title: rgb(42, 161, 152);
  --text-warning: rgb(203, 75, 22);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(0, 43, 54);
  --titlebar-background-focused: rgb(7, 54, 66);
  --titlebar-border-color: rgb(7, 54, 66);
  --titlebar-text-color: rgb(101, 123, 131);
  --titlebar-text-color-focused: rgb(131, 148, 150);
  --vault-profile-color: rgb(131, 148, 150);
  --vault-profile-color-hover: rgb(131, 148, 150);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(7, 54, 66);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 43, 54);
  border-left-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

body div#quartz-root {
  background-color: rgb(0, 43, 54);
  color: rgb(131, 148, 150);
}`,
    typography: `body .page article p > b, b {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body .page article p > em, em {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body .page article p > i, i {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body .page article p > strong, strong {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body .text-highlight {
  background-color: rgb(203, 75, 22);
  color: rgb(0, 43, 54);
  outline: rgb(0, 43, 54) none 0px;
  text-decoration: rgb(0, 43, 54);
  text-decoration-color: rgb(0, 43, 54);
}

body del {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: line-through rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body p {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}`,
    links: `body a.external, footer a {
  color: rgb(108, 113, 196);
  outline: rgb(108, 113, 196) none 0px;
  text-decoration: rgb(108, 113, 196);
  text-decoration-color: rgb(108, 113, 196);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 139, 210);
  outline: rgb(38, 139, 210) none 0px;
  text-decoration: rgb(38, 139, 210);
  text-decoration-color: rgb(38, 139, 210);
}

body a.internal.broken {
  color: rgb(220, 50, 47);
  outline: rgb(220, 50, 47) none 0px;
  text-decoration: rgb(220, 50, 47);
  text-decoration-color: rgb(220, 50, 47);
}`,
    lists: `body dd {
  color: rgb(131, 148, 150);
}

body dt {
  color: rgb(131, 148, 150);
}

body ol > li {
  color: rgb(131, 148, 150);
}

body ol.overflow {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body ul > li {
  color: rgb(131, 148, 150);
}

body ul.overflow {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(88, 110, 117);
  text-decoration: rgb(88, 110, 117);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body table {
  color: rgb(131, 148, 150);
}

body td {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

body th {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

body pre > code > [data-line] {
  border-left-color: rgb(38, 139, 210);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 139, 210);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

body pre > code, pre:has(> code) {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}

body pre:has(> code) {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
}`,
    images: `body audio {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body figcaption {
  color: rgb(131, 148, 150);
}

body figure {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body img {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body video {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    embeds: `body .file-embed {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .footnotes {
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .transclude {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .transclude-inner {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(101, 123, 131);
  text-decoration: line-through rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body input[type=checkbox] {
  border-bottom-color: rgb(203, 75, 22);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(203, 75, 22);
  border-top-color: rgb(203, 75, 22);
}

body li.task-list-item[data-task='!'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='*'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='-'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='/'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='>'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='?'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='I'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='S'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='b'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='c'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='d'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='f'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='i'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='k'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='l'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='p'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='u'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body li.task-list-item[data-task='w'] {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

body .callout[data-callout="abstract"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 108, 113, 196;
  background-color: rgba(108, 113, 196, 0.1);
  border-bottom-color: rgba(108, 113, 196, 0.25);
  border-left-color: rgba(108, 113, 196, 0.25);
  border-right-color: rgba(108, 113, 196, 0.25);
  border-top-color: rgba(108, 113, 196, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 133, 153, 0;
  background-color: rgba(133, 153, 0, 0.1);
  border-bottom-color: rgba(133, 153, 0, 0.25);
  border-left-color: rgba(133, 153, 0, 0.25);
  border-right-color: rgba(133, 153, 0, 0.25);
  border-top-color: rgba(133, 153, 0, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > * {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 43, 54);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(131, 148, 150);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 75, 22, 0.2);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(203, 75, 22);
}

body h1 {
  color: rgb(42, 161, 152);
}

body h2 {
  color: rgb(42, 161, 152);
}

body h2.page-title, h2.page-title a {
  color: rgb(42, 161, 152);
}

body h3 {
  color: rgb(42, 161, 152);
}

body h4 {
  color: rgb(42, 161, 152);
}

body h5 {
  color: rgb(42, 161, 152);
}

body h6 {
  color: rgb(42, 161, 152);
}

body hr {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
}`,
    scrollbars: `body .callout {
  --callout-color: 38, 139, 210;
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 43, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 43, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}`,
    footer: `body footer {
  background-color: rgb(0, 43, 54);
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(101, 123, 131);
}

body footer ul li a {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(131, 148, 150);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(101, 123, 131);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body li.section-li > .section .meta {
  color: rgb(101, 123, 131);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
}

body ul.section-ul {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .darkmode svg {
  color: rgb(101, 123, 131);
  stroke: rgb(101, 123, 131);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .breadcrumb-element p {
  color: rgb(88, 110, 117);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .metadata {
  border-bottom-color: rgb(7, 54, 66);
  border-left-color: rgb(7, 54, 66);
  border-right-color: rgb(7, 54, 66);
  border-top-color: rgb(7, 54, 66);
  color: rgb(101, 123, 131);
}

body .metadata-properties {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .navigation-progress {
  background-color: rgb(0, 43, 54);
}

body .page-header h2.page-title {
  color: rgb(131, 148, 150);
}

body abbr {
  color: rgb(131, 148, 150);
  text-decoration: underline dotted rgb(131, 148, 150);
}

body details {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body input[type=text] {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body kbd {
  background-color: rgb(7, 54, 66);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body progress {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body sub {
  color: rgb(131, 148, 150);
}

body summary {
  color: rgb(131, 148, 150);
}

body sup {
  color: rgb(131, 148, 150);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 17.5690607735deg;
  --accent-l: 44.1176470588%;
  --accent-s: 80.4444444444%;
  --active-bg: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --background-modifier-active-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.1);
  --background-modifier-border: rgb(238, 232, 213);
  --background-modifier-border-focus: hsl(17.5690607735deg, 80%, 44%);
  --background-modifier-border-hover: rgb(238, 232, 213);
  --background-modifier-error: rgb(220, 50, 47);
  --background-modifier-error-hover: rgb(220, 50, 47);
  --background-modifier-error-rgb: 220, 50, 47;
  --background-modifier-form-field: rgb(238, 232, 213);
  --background-modifier-form-field-hover: rgb(238, 232, 213);
  --background-modifier-success: rgb(133, 153, 0);
  --background-modifier-success-rgb: 133, 153, 0;
  --background-primary: rgb(253, 246, 227);
  --background-primary-alt: rgb(238, 232, 213);
  --background-secondary: rgb(253, 246, 227);
  --background-secondary-alt: rgb(238, 232, 213);
  --base0: rgb(131, 148, 150);
  --base00: rgb(101, 123, 131);
  --base01: rgb(88, 110, 117);
  --base02: rgb(7, 54, 66);
  --base03: rgb(0, 43, 54);
  --base1: rgb(147, 161, 161);
  --base2: rgb(238, 232, 213);
  --base3: rgb(253, 246, 227);
  --bases-cards-background: rgb(253, 246, 227);
  --bases-cards-cover-background: rgb(238, 232, 213);
  --bases-cards-shadow: 0 0 0 1px rgb(238, 232, 213);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(238, 232, 213);
  --bases-embed-border-color: rgb(238, 232, 213);
  --bases-group-heading-property-color: rgb(131, 148, 150);
  --bases-table-border-color: rgb(238, 232, 213);
  --bases-table-cell-background-active: rgb(253, 246, 227);
  --bases-table-cell-background-disabled: rgb(238, 232, 213);
  --bases-table-cell-background-selected: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --bases-table-group-background: rgb(238, 232, 213);
  --bases-table-header-background: rgb(253, 246, 227);
  --bases-table-header-color: rgb(131, 148, 150);
  --bases-table-summary-background: rgb(253, 246, 227);
  --blockquote-border-color: hsl(17.5690607735deg, 80%, 44%);
  --blur-background: color-mix(in srgb, rgb(253, 246, 227) 65%, transparent) linear-gradient(rgb(253, 246, 227), color-mix(in srgb, rgb(253, 246, 227) 65%, transparent));
  --callout-bug: 220, 50, 47;
  --callout-default: 38, 139, 210;
  --callout-error: 220, 50, 47;
  --callout-example: 108, 113, 196;
  --callout-fail: 220, 50, 47;
  --callout-important: 42, 161, 152;
  --callout-info: 38, 139, 210;
  --callout-question: 203, 75, 22;
  --callout-success: 133, 153, 0;
  --callout-summary: 42, 161, 152;
  --callout-tip: 42, 161, 152;
  --callout-todo: 38, 139, 210;
  --callout-warning: 203, 75, 22;
  --canvas-background: rgb(253, 246, 227);
  --canvas-card-label-color: rgb(147, 161, 161);
  --canvas-color-1: 220, 50, 47;
  --canvas-color-2: 203, 75, 22;
  --canvas-color-3: 181, 137, 0;
  --canvas-color-4: 133, 153, 0;
  --canvas-color-5: 42, 161, 152;
  --canvas-color-6: 108, 113, 196;
  --canvas-dot-pattern: rgb(238, 232, 213);
  --caret-color: rgb(101, 123, 131);
  --checkbox-border-color: hsl(17.5690607735deg, 80%, 44%);
  --checkbox-border-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --checkbox-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --checkbox-color-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --checkbox-marker-color: rgb(253, 246, 227);
  --checklist-done-color: rgb(131, 148, 150);
  --code-background: rgb(238, 232, 213);
  --code-border-color: rgb(238, 232, 213);
  --code-comment: rgb(42, 161, 152);
  --code-function: rgb(38, 139, 210);
  --code-important: rgb(203, 75, 22);
  --code-keyword: rgb(133, 153, 0);
  --code-normal: rgb(101, 123, 131);
  --code-operator: rgb(101, 123, 131);
  --code-property: rgb(101, 123, 131);
  --code-punctuation: rgb(101, 123, 131);
  --code-string: rgb(42, 161, 152);
  --code-tag: rgb(220, 50, 47);
  --code-value: rgb(211, 54, 130);
  --collapse-icon-color: rgb(147, 161, 161);
  --collapse-icon-color-collapsed: hsl(17.5690607735deg, 80%, 44%);
  --color-accent: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --color-accent-1: hsl(calc(17.56906deg - 1), 81.24889%, 47.42647%);
  --color-accent-2: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --color-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588%;
  --color-base-00: rgb(238, 232, 213);
  --color-base-10: rgb(238, 232, 213);
  --color-base-30: rgb(238, 232, 213);
  --color-base-35: rgb(238, 232, 213);
  --color-base-40: rgb(101, 123, 131);
  --color-base-70: #5a5a5a;
  --color-blue: rgb(38, 139, 210);
  --color-blue-rgb: 38, 139, 210;
  --color-cyan: rgb(42, 161, 152);
  --color-cyan-rgb: 42, 161, 152;
  --color-green: rgb(133, 153, 0);
  --color-green-rgb: 133, 153, 0;
  --color-orange: rgb(203, 75, 22);
  --color-orange-rgb: 203, 75, 22;
  --color-pink: rgb(211, 54, 130);
  --color-pink-rgb: 211, 54, 130;
  --color-purple: rgb(108, 113, 196);
  --color-purple-rgb: 108, 113, 196;
  --color-red: rgb(220, 50, 47);
  --color-red-rgb: 220, 50, 47;
  --color-yellow: rgb(181, 137, 0);
  --color-yellow-rgb: 181, 137, 0;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(238, 232, 213);
  --divider-color-hover: hsl(17.5690607735deg, 80%, 44%);
  --dropdown-background: rgb(238, 232, 213);
  --dropdown-background-hover: rgb(253, 246, 227);
  --embed-block-shadow-hover: 0 0 0 1px rgb(238, 232, 213), inset 0 0 0 1px rgb(238, 232, 213);
  --embed-border-start: 2px solid hsl(17.5690607735deg, 80%, 44%);
  --file-header-background: rgb(253, 246, 227);
  --file-header-background-focused: rgb(253, 246, 227);
  --flair-background: rgb(238, 232, 213);
  --flair-color: rgb(101, 123, 131);
  --footnote-divider-color: rgb(238, 232, 213);
  --footnote-id-color: rgb(131, 148, 150);
  --footnote-id-color-no-occurrences: rgb(147, 161, 161);
  --graph-line: rgb(238, 232, 213);
  --graph-node: rgb(131, 148, 150);
  --graph-node-attachment: rgb(181, 137, 0);
  --graph-node-focused: hsl(17.5690607735deg, 80%, 44%);
  --graph-node-tag: rgb(133, 153, 0);
  --graph-node-unresolved: rgb(147, 161, 161);
  --graph-text: rgb(101, 123, 131);
  --gray: var(--text-muted);
  --h1-color: rgb(42, 161, 152);
  --h2-color: rgb(42, 161, 152);
  --h3-color: rgb(42, 161, 152);
  --h4-color: rgb(42, 161, 152);
  --h5-color: rgb(42, 161, 152);
  --h6-color: rgb(42, 161, 152);
  --heading-formatting: rgb(42, 161, 152);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(238, 232, 213);
  --icon-color: rgb(131, 148, 150);
  --icon-color-active: hsl(17.5690607735deg, 80%, 44%);
  --icon-color-focused: rgb(101, 123, 131);
  --icon-color-hover: rgb(131, 148, 150);
  --inline-title-color: rgb(42, 161, 152);
  --input-date-separator: rgb(147, 161, 161);
  --input-placeholder-color: rgb(147, 161, 161);
  --interactive-accent: hsl(17.5690607735deg, 80%, 44%);
  --interactive-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --interactive-accent-hsl: 17.5690607735deg, 80.4444444444%, 44.1176470588%;
  --interactive-hover: rgb(253, 246, 227);
  --interactive-normal: rgb(238, 232, 213);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(38, 139, 210);
  --link-color-hover: rgb(38, 139, 210);
  --link-decoration: none;
  --link-external-color: rgb(108, 113, 196);
  --link-external-color-hover: rgb(108, 113, 196);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(220, 50, 47);
  --link-unresolved-color-hover: rgb(220, 50, 47);
  --link-unresolved-decoration-color: rgb(220, 50, 47);
  --list-marker-color: rgb(147, 161, 161);
  --list-marker-color-collapsed: hsl(17.5690607735deg, 80%, 44%);
  --list-marker-color-hover: rgb(131, 148, 150);
  --menu-background: rgb(253, 246, 227);
  --menu-border-color: rgb(238, 232, 213);
  --metadata-border-color: rgb(238, 232, 213);
  --metadata-divider-color: rgb(238, 232, 213);
  --metadata-input-text-color: rgb(101, 123, 131);
  --metadata-label-text-color: rgb(131, 148, 150);
  --metadata-label-text-color-hover: rgb(131, 148, 150);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(238, 232, 213);
  --modal-background: rgb(253, 246, 227);
  --modal-border-color: rgb(101, 123, 131);
  --nav-collapse-icon-color: rgb(147, 161, 161);
  --nav-collapse-icon-color-collapsed: rgb(147, 161, 161);
  --nav-heading-color: rgb(101, 123, 131);
  --nav-heading-color-collapsed: rgb(147, 161, 161);
  --nav-heading-color-collapsed-hover: rgb(131, 148, 150);
  --nav-heading-color-hover: rgb(101, 123, 131);
  --nav-item-background-active: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --nav-item-background-selected: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15);
  --nav-item-color: rgb(131, 148, 150);
  --nav-item-color-active: rgb(101, 123, 131);
  --nav-item-color-highlighted: hsl(17.5690607735deg, 80%, 44%);
  --nav-item-color-hover: rgb(101, 123, 131);
  --nav-item-color-selected: rgb(101, 123, 131);
  --nav-tag-color: rgb(147, 161, 161);
  --nav-tag-color-active: rgb(131, 148, 150);
  --nav-tag-color-hover: rgb(131, 148, 150);
  --pdf-background: rgb(253, 246, 227);
  --pdf-page-background: rgb(253, 246, 227);
  --pdf-sidebar-background: rgb(253, 246, 227);
  --pill-border-color: rgb(238, 232, 213);
  --pill-border-color-hover: rgb(238, 232, 213);
  --pill-color: rgb(131, 148, 150);
  --pill-color-hover: rgb(101, 123, 131);
  --pill-color-remove: rgb(147, 161, 161);
  --pill-color-remove-hover: hsl(17.5690607735deg, 80%, 44%);
  --prompt-background: rgb(253, 246, 227);
  --prompt-border-color: rgb(101, 123, 131);
  --raised-background: color-mix(in srgb, rgb(253, 246, 227) 65%, transparent) linear-gradient(rgb(253, 246, 227), color-mix(in srgb, rgb(253, 246, 227) 65%, transparent));
  --ribbon-background: rgb(253, 246, 227);
  --ribbon-background-collapsed: rgb(253, 246, 227);
  --search-clear-button-color: rgb(131, 148, 150);
  --search-icon-color: rgb(131, 148, 150);
  --search-result-background: rgb(253, 246, 227);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(101, 123, 131);
  --setting-items-background: rgb(238, 232, 213);
  --setting-items-border-color: rgb(238, 232, 213);
  --slider-thumb-border-color: rgb(238, 232, 213);
  --slider-track-background: rgb(238, 232, 213);
  --status-bar-background: rgb(253, 246, 227);
  --status-bar-border-color: rgb(238, 232, 213);
  --status-bar-text-color: rgb(131, 148, 150);
  --suggestion-background: rgb(253, 246, 227);
  --sync-avatar-color-1: rgb(220, 50, 47);
  --sync-avatar-color-2: rgb(203, 75, 22);
  --sync-avatar-color-3: rgb(181, 137, 0);
  --sync-avatar-color-4: rgb(133, 153, 0);
  --sync-avatar-color-5: rgb(42, 161, 152);
  --sync-avatar-color-6: rgb(38, 139, 210);
  --sync-avatar-color-7: rgb(108, 113, 196);
  --sync-avatar-color-8: rgb(211, 54, 130);
  --tab-background-active: rgb(253, 246, 227);
  --tab-container-background: rgb(253, 246, 227);
  --tab-divider-color: rgb(238, 232, 213);
  --tab-outline-color: rgb(238, 232, 213);
  --tab-switcher-background: rgb(253, 246, 227);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(253, 246, 227), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(17.5690607735deg, 80%, 44%);
  --tab-text-color: rgb(147, 161, 161);
  --tab-text-color-active: rgb(131, 148, 150);
  --tab-text-color-focused: rgb(131, 148, 150);
  --tab-text-color-focused-active: rgb(131, 148, 150);
  --tab-text-color-focused-active-current: rgb(101, 123, 131);
  --tab-text-color-focused-highlighted: hsl(17.5690607735deg, 80%, 44%);
  --table-add-button-border-color: rgb(238, 232, 213);
  --table-border-color: rgb(238, 232, 213);
  --table-drag-handle-background-active: hsl(17.5690607735deg, 80%, 44%);
  --table-drag-handle-color: rgb(147, 161, 161);
  --table-drag-handle-color-active: rgb(253, 246, 227);
  --table-header-border-color: rgb(238, 232, 213);
  --table-header-weight: 700;
  --table-selection: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --table-selection-border-color: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --tag-background: hsla(17.5690607735deg, 80%, 44%, 0.1);
  --tag-background-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.2);
  --tag-border-color: hsla(17.5690607735deg, 80%, 44%, 0.15);
  --tag-border-color-hover: hsla(17.5690607735deg, 80.4444444444%, 44.1176470588%, 0.15);
  --tag-color: hsl(17.5690607735deg, 80%, 44%);
  --tag-color-hover: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --tag-padding-x: 0.25em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(17.5690607735deg, 80%, 44%);
  --text-accent-hover: hsl(calc(17.56906deg - 3), 82.05333%, 50.73529%);
  --text-error: rgb(220, 50, 47);
  --text-faint: rgb(147, 161, 161);
  --text-highlight-bg: hsl(17.5690607735deg, 80%, 44%);
  --text-highlight-bg-active: hsl(17.5690607735deg, 80.4444444444%, 44.1176470588%);
  --text-muted: rgb(131, 148, 150);
  --text-normal: rgb(101, 123, 131);
  --text-on-accent: rgb(253, 246, 227);
  --text-selection: hsla(17.5690607735deg, 80%, 44%, 0.2);
  --text-success: rgb(133, 153, 0);
  --text-title: rgb(42, 161, 152);
  --text-warning: rgb(203, 75, 22);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(253, 246, 227);
  --titlebar-background-focused: rgb(238, 232, 213);
  --titlebar-border-color: rgb(238, 232, 213);
  --titlebar-text-color: rgb(131, 148, 150);
  --titlebar-text-color-focused: rgb(101, 123, 131);
  --vault-profile-color: rgb(101, 123, 131);
  --vault-profile-color-hover: rgb(101, 123, 131);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(238, 232, 213);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
  border-left-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(101, 123, 131);
}`,
    typography: `body .page article p > b, b {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body .page article p > em, em {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body .page article p > i, i {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body .page article p > strong, strong {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body .text-highlight {
  background-color: rgb(203, 75, 22);
  color: rgb(253, 246, 227);
  outline: rgb(253, 246, 227) none 0px;
  text-decoration: rgb(253, 246, 227);
  text-decoration-color: rgb(253, 246, 227);
}

body del {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: line-through rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body p {
  color: rgb(131, 148, 150);
  outline: rgb(131, 148, 150) none 0px;
  text-decoration: rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}`,
    links: `body a.external, footer a {
  color: rgb(108, 113, 196);
  outline: rgb(108, 113, 196) none 0px;
  text-decoration: rgb(108, 113, 196);
  text-decoration-color: rgb(108, 113, 196);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 139, 210);
  outline: rgb(38, 139, 210) none 0px;
  text-decoration: rgb(38, 139, 210);
  text-decoration-color: rgb(38, 139, 210);
}

body a.internal.broken {
  color: rgb(220, 50, 47);
  outline: rgb(220, 50, 47) none 0px;
  text-decoration: rgb(220, 50, 47);
  text-decoration-color: rgb(220, 50, 47);
}`,
    lists: `body dd {
  color: rgb(101, 123, 131);
}

body dt {
  color: rgb(101, 123, 131);
}

body ol > li {
  color: rgb(101, 123, 131);
}

body ol.overflow {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body ul > li {
  color: rgb(101, 123, 131);
}

body ul.overflow {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 161, 161);
  text-decoration: rgb(147, 161, 161);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body table {
  color: rgb(101, 123, 131);
}

body td {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

body th {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

body pre > code > [data-line] {
  border-left-color: rgb(38, 139, 210);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 139, 210);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

body pre > code, pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}

body pre:has(> code) {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
}`,
    images: `body audio {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body figcaption {
  color: rgb(101, 123, 131);
}

body figure {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body img {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body video {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    embeds: `body .file-embed {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
}

body .footnotes {
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .transclude {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .transclude-inner {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(131, 148, 150);
  text-decoration: line-through rgb(131, 148, 150);
  text-decoration-color: rgb(131, 148, 150);
}

body input[type=checkbox] {
  border-bottom-color: rgb(203, 75, 22);
  border-left-color: rgb(203, 75, 22);
  border-right-color: rgb(203, 75, 22);
  border-top-color: rgb(203, 75, 22);
}

body li.task-list-item[data-task='!'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='*'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='-'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='/'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='>'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='?'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='I'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='S'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='b'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='c'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='d'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='f'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='i'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='k'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='l'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='p'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='u'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body li.task-list-item[data-task='w'] {
  color: rgb(101, 123, 131);
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(38, 139, 210);
  border-left-color: rgb(38, 139, 210);
  border-right-color: rgb(38, 139, 210);
  border-top-color: rgb(38, 139, 210);
}

body .callout[data-callout="abstract"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 108, 113, 196;
  background-color: rgba(108, 113, 196, 0.1);
  border-bottom-color: rgba(108, 113, 196, 0.25);
  border-left-color: rgba(108, 113, 196, 0.25);
  border-right-color: rgba(108, 113, 196, 0.25);
  border-top-color: rgba(108, 113, 196, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 220, 50, 47;
  background-color: rgba(220, 50, 47, 0.1);
  border-bottom-color: rgba(220, 50, 47, 0.25);
  border-left-color: rgba(220, 50, 47, 0.25);
  border-right-color: rgba(220, 50, 47, 0.25);
  border-top-color: rgba(220, 50, 47, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 133, 153, 0;
  background-color: rgba(133, 153, 0, 0.1);
  border-bottom-color: rgba(133, 153, 0, 0.25);
  border-left-color: rgba(133, 153, 0, 0.25);
  border-right-color: rgba(133, 153, 0, 0.25);
  border-top-color: rgba(133, 153, 0, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 42, 161, 152;
  background-color: rgba(42, 161, 152, 0.1);
  border-bottom-color: rgba(42, 161, 152, 0.25);
  border-left-color: rgba(42, 161, 152, 0.25);
  border-right-color: rgba(42, 161, 152, 0.25);
  border-top-color: rgba(42, 161, 152, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 38, 139, 210;
  background-color: rgba(38, 139, 210, 0.1);
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 203, 75, 22;
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.25);
  border-left-color: rgba(203, 75, 22, 0.25);
  border-right-color: rgba(203, 75, 22, 0.25);
  border-top-color: rgba(203, 75, 22, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > * {
  color: rgb(101, 123, 131);
  outline: rgb(101, 123, 131) none 0px;
  text-decoration: rgb(101, 123, 131);
  text-decoration-color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(101, 123, 131);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgba(203, 75, 22, 0.15);
  border-left-color: rgba(203, 75, 22, 0.15);
  border-right-color: rgba(203, 75, 22, 0.15);
  border-top-color: rgba(203, 75, 22, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(203, 75, 22);
}

body h1 {
  color: rgb(42, 161, 152);
}

body h2 {
  color: rgb(42, 161, 152);
}

body h2.page-title, h2.page-title a {
  color: rgb(42, 161, 152);
}

body h3 {
  color: rgb(42, 161, 152);
}

body h4 {
  color: rgb(42, 161, 152);
}

body h5 {
  color: rgb(42, 161, 152);
}

body h6 {
  color: rgb(42, 161, 152);
}

body hr {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
}`,
    scrollbars: `body .callout {
  --callout-color: 38, 139, 210;
  border-bottom-color: rgba(38, 139, 210, 0.25);
  border-left-color: rgba(38, 139, 210, 0.25);
  border-right-color: rgba(38, 139, 210, 0.25);
  border-top-color: rgba(38, 139, 210, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(203, 75, 22, 0.1);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}`,
    footer: `body footer {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(131, 148, 150);
}

body footer ul li a {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(101, 123, 131);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(131, 148, 150);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body li.section-li > .section .meta {
  color: rgb(131, 148, 150);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(131, 148, 150);
  text-decoration: rgb(131, 148, 150);
}

body ul.section-ul {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .darkmode svg {
  color: rgb(131, 148, 150);
  stroke: rgb(131, 148, 150);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .breadcrumb-element p {
  color: rgb(147, 161, 161);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body .metadata {
  border-bottom-color: rgb(238, 232, 213);
  border-left-color: rgb(238, 232, 213);
  border-right-color: rgb(238, 232, 213);
  border-top-color: rgb(238, 232, 213);
  color: rgb(131, 148, 150);
}

body .metadata-properties {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

body .page-header h2.page-title {
  color: rgb(101, 123, 131);
}

body abbr {
  color: rgb(101, 123, 131);
  text-decoration: underline dotted rgb(101, 123, 131);
}

body details {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body input[type=text] {
  border-bottom-color: rgb(131, 148, 150);
  border-left-color: rgb(131, 148, 150);
  border-right-color: rgb(131, 148, 150);
  border-top-color: rgb(131, 148, 150);
  color: rgb(131, 148, 150);
}

body kbd {
  background-color: rgb(238, 232, 213);
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
  color: rgb(101, 123, 131);
}

body progress {
  border-bottom-color: rgb(101, 123, 131);
  border-left-color: rgb(101, 123, 131);
  border-right-color: rgb(101, 123, 131);
  border-top-color: rgb(101, 123, 131);
}

body sub {
  color: rgb(101, 123, 131);
}

body summary {
  color: rgb(101, 123, 131);
}

body sup {
  color: rgb(101, 123, 131);
}`,
  },
};
