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
  --background-primary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%) !important;
  --background-secondary: rgb(24, 24, 24) !important;
  --background-secondary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent 0%) !important;
  --bases-cards-background: rgb(22, 22, 22) !important;
  --bases-cards-cover-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%) !important;
  --bases-group-heading-property-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --bases-table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --bases-table-cell-background-active: rgb(22, 22, 22) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%) !important;
  --bases-table-group-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%) !important;
  --bases-table-header-background: rgb(22, 22, 22) !important;
  --bases-table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --bases-table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --bases-table-summary-background: rgb(22, 22, 22) !important;
  --bodyFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #ffffff 20%) !important;
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --canvas-dot-pattern: rgb(102, 102, 102) !important;
  --caret-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --checkbox-marker-color: rgb(22, 22, 22) !important;
  --checkbox-radius: 15px !important;
  --checklist-done-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --codeFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-accent-trans: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --dark: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --dark-or-white-var: #ffffff !important;
  --darkgray: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --default-font: 'JetBrains Mono', monospace !important;
  --file-header-background: rgb(22, 22, 22) !important;
  --file-header-background-focused: rgb(22, 22, 22) !important;
  --file-header-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --font-interface: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --graph-node: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --graph-text: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --gray: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --grid-size: 64px !important;
  --headerFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --icon-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --icon-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --interactive-color: hsl(258, 88%, 66%) !important;
  --italic-color: color-mix(in srgb, hsl(258, 88%, 66%) 60%, #ffffff 20%) !important;
  --large-kanban-width: 400px !important;
  --light: rgb(22, 22, 22) !important;
  --lightgray: rgb(24, 24, 24) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --menu-background: rgb(24, 24, 24) !important;
  --metadata-input-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --metadata-label-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --modal-background: rgb(22, 22, 22) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-heading-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-item-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-item-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-item-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-item-color-selected: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --nav-tag-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --nav-tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
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
  --pill-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --pill-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --prompt-background: rgb(22, 22, 22) !important;
  --ribbon-background: rgb(24, 24, 24) !important;
  --ribbon-background-collapsed: rgb(22, 22, 22) !important;
  --search-clear-button-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --search-icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --search-result-background: rgb(22, 22, 22) !important;
  --setting-group-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --setting-items-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff 10%) !important;
  --status-bar-background: rgb(24, 24, 24) !important;
  --status-bar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --suggestion-background: rgb(22, 22, 22) !important;
  --tab-background-active: rgb(22, 22, 22) !important;
  --tab-container-background: rgb(24, 24, 24) !important;
  --tab-switcher-background: rgb(24, 24, 24) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(24, 24, 24), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --tab-text-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --tab-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --tab-text-color-focused-active: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --table-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --table-column-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-header-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #ffffff 20%) !important;
  --table-row-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-row-alt-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --text-highlight-bg: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --text-muted: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --text-normal: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --textHighlight: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --titleFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(24, 24, 24) !important;
  --titlebar-background-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent 0%) !important;
  --titlebar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --titlebar-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --vault-profile-color: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --vault-profile-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff 70%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 24);
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 22, 22);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.65524 0.5206 0.9694 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.65524 0.5206 0.9694 / 0.8);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: color(srgb 0.632256 0.48864 0.96736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.632256 0.48864 0.96736) none 0px;
  text-decoration-color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body footer {
  opacity: 0;
}

html[saved-theme="dark"] body h1.article-title {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 15px;
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.632256 0.48864 0.96736);
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body img {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.616933 0.467333 0.966 / 0.6);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.862096 0.80824 0.98776);
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.862096 0.80824 0.98776) none 0px;
  text-decoration-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h1 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h2 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h4 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h5 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body h6 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 22);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 24);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.862096 0.80824 0.98776);
  stroke: color(srgb 0.862096 0.80824 0.98776);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body .metadata {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.862096 0.80824 0.98776);
  border-left-color: color(srgb 0.862096 0.80824 0.98776);
  border-right-color: color(srgb 0.862096 0.80824 0.98776);
  border-top-color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.862096 0.80824 0.98776);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.862096 0.80824 0.98776);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: rgb(228, 228, 228) !important;
  --background-primary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%) !important;
  --background-secondary: rgb(197, 197, 197) !important;
  --background-secondary-alt: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --bases-cards-background: rgb(228, 228, 228) !important;
  --bases-cards-cover-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%) !important;
  --bases-group-heading-property-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --bases-table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --bases-table-cell-background-active: rgb(228, 228, 228) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%) !important;
  --bases-table-group-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%) !important;
  --bases-table-header-background: rgb(228, 228, 228) !important;
  --bases-table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --bases-table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --bases-table-summary-background: rgb(228, 228, 228) !important;
  --blur-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent)) !important;
  --bodyFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #000000 20%) !important;
  --callout-border-width: 5px;
  --callout-padding: 0;
  --callout-radius: 12px;
  --callout-title-weight: bold;
  --canvas-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --canvas-dot-pattern: rgb(102, 102, 102) !important;
  --caret-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: rgb(228, 228, 228) !important;
  --checkbox-radius: 15px !important;
  --checklist-done-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --code-background: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --code-normal: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --code-punctuation: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --codeFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-accent-trans: color-mix(in srgb, hsl(258, 88%, 66%) 15%, transparent 0%) !important;
  --dark: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --dark-or-white-var: #000000 !important;
  --darkgray: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --default-font: 'JetBrains Mono', monospace !important;
  --file-header-background: rgb(228, 228, 228) !important;
  --file-header-background-focused: rgb(228, 228, 228) !important;
  --file-header-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --font-interface: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --graph-node: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --graph-text: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --gray: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --grid-size: 64px !important;
  --headerFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --icon-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --icon-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --interactive-color: hsl(258, 88%, 66%) !important;
  --italic-color: color-mix(in srgb, hsl(258, 88%, 66%) 60%, #000000 20%) !important;
  --large-kanban-width: 400px !important;
  --light: rgb(228, 228, 228) !important;
  --lightgray: rgb(197, 197, 197) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --menu-background: rgb(197, 197, 197) !important;
  --metadata-input-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --metadata-label-font: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --modal-background: rgb(228, 228, 228) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-heading-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-item-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-item-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-item-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-item-color-selected: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --nav-tag-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --nav-tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
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
  --pill-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --pill-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --prompt-background: rgb(228, 228, 228) !important;
  --raised-background: color-mix(in srgb, rgb(228, 228, 228) 65%, transparent) linear-gradient(rgb(228, 228, 228), color-mix(in srgb, rgb(228, 228, 228) 65%, transparent)) !important;
  --ribbon-background: rgb(197, 197, 197) !important;
  --ribbon-background-collapsed: rgb(228, 228, 228) !important;
  --search-clear-button-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --search-icon-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --search-result-background: rgb(228, 228, 228) !important;
  --setting-group-heading-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --setting-items-background: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 10%) !important;
  --status-bar-background: rgb(197, 197, 197) !important;
  --status-bar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --suggestion-background: rgb(228, 228, 228) !important;
  --tab-background-active: rgb(228, 228, 228) !important;
  --tab-container-background: rgb(197, 197, 197) !important;
  --tab-switcher-background: rgb(197, 197, 197) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(197, 197, 197), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --tab-text-color-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --tab-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --tab-text-color-focused-active: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --table-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --table-column-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-header-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent 0%) !important;
  --table-header-color: color-mix(in srgb, hsl(258, 88%, 66%) 80%, #000000 20%) !important;
  --table-row-alt-background: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-row-alt-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --table-row-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent 90%) !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --text-highlight-bg: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --text-muted: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --text-normal: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --text-on-accent: #ffffff !important;
  --textHighlight: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --titleFont: JetBrains Mono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(197, 197, 197) !important;
  --titlebar-background-focused: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent 0%) !important;
  --titlebar-text-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --titlebar-text-color-focused: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --vault-profile-color: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --vault-profile-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #000000 40%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(228, 228, 228);
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(197, 197, 197);
  border-left-color: rgba(0, 0, 0, 0);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(228, 228, 228);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.40524 0.2706 0.7194 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.40524 0.2706 0.7194 / 0.8);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: color(srgb 0.432256 0.28864 0.76736);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.432256 0.28864 0.76736) none 0px;
  text-decoration-color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body footer {
  opacity: 0;
}

html[saved-theme="light"] body h1.article-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 15px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body p {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "JetBrains Mono", monospace;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body blockquote {
  font-family: "JetBrains Mono", monospace;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body table {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  width: 217.422px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.8);
  color: color(srgb 0.432256 0.28864 0.76736);
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.181818);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body img {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: color(srgb 0.450267 0.300667 0.799333 / 0.6);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
  outline: color(srgb 0.300178 0.200444 0.532889 / 0.9) none 0px;
  text-decoration-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h1 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h2 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h4 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h5 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body h6 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(228, 228, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(228, 228, 228);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(197, 197, 197);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  stroke: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
  font-family: "JetBrains Mono", monospace;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body .metadata {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(197, 197, 197);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  font-family: "??", "??", "JetBrains Mono", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.15);
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-left-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-right-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
  border-top-color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.300178 0.200444 0.532889 / 0.9);
}`,
  },
};
