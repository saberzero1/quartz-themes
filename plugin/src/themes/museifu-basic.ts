import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "museifu-basic",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: rgb(22, 22, 22) !important;
  --background-primary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%) !important;
  --background-secondary: rgb(24, 24, 24) !important;
  --background-secondary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent 0%) !important;
  --bases-cards-background: rgb(22, 22, 22) !important;
  --bases-cards-cover-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%) !important;
  --bases-group-heading-property-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --bases-table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --bases-table-cell-background-active: rgb(22, 22, 22) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%) !important;
  --bases-table-group-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%) !important;
  --bases-table-header-background: rgb(22, 22, 22) !important;
  --bases-table-header-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --bases-table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --bases-table-summary-background: rgb(22, 22, 22) !important;
  --bodyFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #ffffff 20%) !important;
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --canvas-dot-pattern: rgb(102, 102, 102) !important;
  --caret-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-border-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --checkbox-marker-color: rgb(22, 22, 22) !important;
  --checkbox-radius: 15px !important;
  --checklist-done-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --code-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --code-punctuation: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --codeFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --color-accent-trans: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --dark: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --dark-or-white-var: #ffffff !important;
  --darkgray: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --default-font: 'JetBrains Mono', monospace !important;
  --file-header-background: rgb(22, 22, 22) !important;
  --file-header-background-focused: rgb(22, 22, 22) !important;
  --file-header-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --font-interface: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --graph-node: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --graph-text: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --gray: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --grid-size: 64px !important;
  --headerFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --highlight: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --icon-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --icon-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --icon-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-color: rgb(138, 92, 245) !important;
  --italic-color: color-mix(in srgb, rgb(138, 92, 245) 60%, #ffffff 20%) !important;
  --large-kanban-width: 400px !important;
  --light: rgb(22, 22, 22) !important;
  --lightgray: rgb(24, 24, 24) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --menu-background: rgb(24, 24, 24) !important;
  --metadata-input-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --metadata-label-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --modal-background: rgb(22, 22, 22) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-heading-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-item-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-item-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-item-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-item-color-selected: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --nav-tag-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --nav-tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --pdf-background: rgb(22, 22, 22) !important;
  --pdf-page-background: rgb(22, 22, 22) !important;
  --pdf-sidebar-background: rgb(22, 22, 22) !important;
  --pen-black: #26241f !important;
  --pen-blue: #3f76ed !important;
  --pen-gray: #5f5d58 !important;
  --pen-green: #15b64f !important;
  --pen-light-blue: #54b6f8 !important;
  --pen-museifu-cream: #804620 !important;
  --pen-museifu-dark: #838383 !important;
  --pen-museifu-paperdark: #beb7b7 !important;
  --pen-museifu-paperlike: #32302c !important;
  --pen-museifu-simple: #edf1fc !important;
  --pen-purple: #9b4ff0 !important;
  --pen-red: #e14a49 !important;
  --pen-white: #edf1fc !important;
  --pill-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --pill-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --prompt-background: rgb(22, 22, 22) !important;
  --ribbon-background: rgb(24, 24, 24) !important;
  --ribbon-background-collapsed: rgb(22, 22, 22) !important;
  --search-clear-button-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --search-icon-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --search-result-background: rgb(22, 22, 22) !important;
  --setting-group-heading-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --setting-items-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff 10%) !important;
  --status-bar-background: rgb(24, 24, 24) !important;
  --status-bar-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --suggestion-background: rgb(22, 22, 22) !important;
  --tab-background-active: rgb(22, 22, 22) !important;
  --tab-container-background: rgb(24, 24, 24) !important;
  --tab-switcher-background: rgb(24, 24, 24) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 24), transparent) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --tab-text-color-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --tab-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --tab-text-color-focused-active: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --table-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --table-column-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-header-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --table-header-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #ffffff 20%) !important;
  --table-row-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-row-alt-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --text-faint: rgb(138, 92, 245) !important;
  --text-highlight-bg: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --text-muted: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --text-normal: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --textHighlight: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --titleFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(24, 24, 24) !important;
  --titlebar-background-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent 0%) !important;
  --titlebar-text-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --titlebar-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --vault-profile-color: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --vault-profile-color-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff 70%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration: color(srgb 0.632256 0.48864 0.96736);
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

body .page article p > em, em {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

body .page article p > i, i {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

body .page article p > strong, strong {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration: color(srgb 0.632256 0.48864 0.96736);
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body del {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: line-through color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body p {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    links: `body a.external, footer a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `body dd {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body dt {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ol > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ol.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ul > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body ul.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body table {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}

body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body figcaption {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body figure {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body img {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body video {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.616933 0.467333 0.966 / 0.6);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .footnotes {
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .transclude {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: line-through color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}`,
    search: `body .search > .search-button {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

body h1 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h2 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h4 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h5 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body h6 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body footer ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body li.section-li > .section .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: color(srgb 0.862096 0.80824 0.98776);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .darkmode svg {
  color: color(srgb 0.862096 0.80824 0.98776);
  stroke: color(srgb 0.862096 0.80824 0.98776);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body .metadata {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

body .page-header h2.page-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

body abbr {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration: underline dotted color(srgb 0.862096 0.80824 0.98776);
}

body details {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

body progress {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

body sub {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body summary {
  color: color(srgb 0.862096 0.80824 0.98776);
}

body sup {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: rgb(228, 228, 228) !important;
  --background-primary-alt: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%) !important;
  --background-secondary: rgb(197, 197, 197) !important;
  --background-secondary-alt: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --bases-cards-background: rgb(228, 228, 228) !important;
  --bases-cards-cover-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%) !important;
  --bases-group-heading-property-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --bases-table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --bases-table-cell-background-active: rgb(228, 228, 228) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%) !important;
  --bases-table-group-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%) !important;
  --bases-table-header-background: rgb(228, 228, 228) !important;
  --bases-table-header-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --bases-table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --bases-table-summary-background: rgb(228, 228, 228) !important;
  --blur-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #000000 20%) !important;
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --canvas-dot-pattern: rgb(102, 102, 102) !important;
  --caret-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-border-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-marker-color: rgb(228, 228, 228) !important;
  --checkbox-radius: 15px !important;
  --checklist-done-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --code-background: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --code-normal: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --code-punctuation: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --codeFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --color-accent-trans: color-mix(in srgb, rgb(138, 92, 245) 15%, transparent 0%) !important;
  --dark: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --dark-or-white-var: #000000 !important;
  --darkgray: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --default-font: 'JetBrains Mono', monospace !important;
  --file-header-background: rgb(228, 228, 228) !important;
  --file-header-background-focused: rgb(228, 228, 228) !important;
  --file-header-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --font-interface: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --graph-node: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --graph-text: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --gray: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --grid-size: 64px !important;
  --headerFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --highlight: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --icon-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --icon-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --icon-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-color: rgb(138, 92, 245) !important;
  --italic-color: color-mix(in srgb, rgb(138, 92, 245) 60%, #000000 20%) !important;
  --large-kanban-width: 400px !important;
  --light: rgb(228, 228, 228) !important;
  --lightgray: rgb(197, 197, 197) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --menu-background: rgb(197, 197, 197) !important;
  --metadata-input-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --metadata-label-font: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --modal-background: rgb(228, 228, 228) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-heading-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-item-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-item-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-item-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-item-color-selected: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --nav-tag-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --nav-tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --pdf-background: rgb(228, 228, 228) !important;
  --pdf-page-background: rgb(228, 228, 228) !important;
  --pdf-sidebar-background: rgb(228, 228, 228) !important;
  --pen-black: #26241f !important;
  --pen-blue: #3f76ed !important;
  --pen-gray: #5f5d58 !important;
  --pen-green: #15b64f !important;
  --pen-light-blue: #54b6f8 !important;
  --pen-museifu-cream: #804620 !important;
  --pen-museifu-dark: #838383 !important;
  --pen-museifu-paperdark: #beb7b7 !important;
  --pen-museifu-paperlike: #32302c !important;
  --pen-museifu-simple: #edf1fc !important;
  --pen-purple: #9b4ff0 !important;
  --pen-red: #e14a49 !important;
  --pen-white: #edf1fc !important;
  --pill-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --pill-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --prompt-background: rgb(228, 228, 228) !important;
  --raised-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent)) !important;
  --ribbon-background: rgb(197, 197, 197) !important;
  --ribbon-background-collapsed: rgb(228, 228, 228) !important;
  --search-clear-button-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --search-icon-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --search-result-background: rgb(228, 228, 228) !important;
  --setting-group-heading-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --setting-items-background: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 10%) !important;
  --status-bar-background: rgb(197, 197, 197) !important;
  --status-bar-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --suggestion-background: rgb(228, 228, 228) !important;
  --tab-background-active: rgb(228, 228, 228) !important;
  --tab-container-background: rgb(197, 197, 197) !important;
  --tab-switcher-background: rgb(197, 197, 197) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(197, 197, 197), transparent) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --tab-text-color-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --tab-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --tab-text-color-focused-active: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --table-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --table-column-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-header-border-color: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent 0%) !important;
  --table-header-color: color-mix(in srgb, rgb(138, 92, 245) 80%, #000000 20%) !important;
  --table-row-alt-background: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-row-alt-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --table-row-background-hover: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent 90%) !important;
  --text-faint: rgb(138, 92, 245) !important;
  --text-highlight-bg: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --text-muted: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --text-normal: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --text-on-accent: #ffffff !important;
  --textHighlight: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --titleFont: '??', '??', 'JetBrains Mono', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(197, 197, 197) !important;
  --titlebar-background-focused: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent 0%) !important;
  --titlebar-text-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --titlebar-text-color-focused: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --vault-profile-color: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --vault-profile-color-hover: color-mix(in srgb, rgb(138, 92, 245) 50%, #000000 40%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(197, 197, 197);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body div#quartz-root {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration: color(srgb 0.432256 0.28864 0.76736);
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

body .page article p > em, em {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

body .page article p > i, i {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

body .page article p > strong, strong {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration: color(srgb 0.432256 0.28864 0.76736);
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body del {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: line-through color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body p {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    links: `body a.external, footer a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `body dd {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body dt {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ol > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ol.overflow {
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ul > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ul.overflow {
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body table {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}

body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body figcaption {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body figure {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body img {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body video {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.450267 0.300667 0.799333 / 0.6);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .footnotes {
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .transclude {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: line-through color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
}`,
    search: `body .search > .search-button {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

body h1 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h2 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h2.page-title, h2.page-title a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h4 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h5 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body h6 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 5px;
  border-left-style: dashed;
  border-left-width: 5px;
  border-right-style: dashed;
  border-right-width: 5px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    footer: `body footer {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body footer ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body li.section-li > .section .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .darkmode svg {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  stroke: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body .metadata {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body .navigation-progress {
  background-color: rgb(197, 197, 197);
}

body .page-header h2.page-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

body abbr {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration: underline dotted color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body details {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body progress {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body sub {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body summary {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

body sup {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
  },
};
