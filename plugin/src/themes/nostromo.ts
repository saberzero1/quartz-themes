import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nostromo",
    modes: ["dark"],
    variations: [],
    fonts: ["share-tech-mono", "vt323"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(232, 216, 163, 0.12) !important;
  --background-modifier-border: rgba(168, 168, 168, 0.2) !important;
  --background-modifier-border-focus: #e8d8a3 !important;
  --background-modifier-border-hover: rgba(168, 168, 168, 0.3) !important;
  --background-modifier-cover: rgba(29, 32, 33, 0.8) !important;
  --background-modifier-form-field: #3c3836 !important;
  --background-modifier-form-field-hover: #3c3836 !important;
  --background-modifier-hover: rgba(232, 216, 163, 0.08) !important;
  --background-primary: #1d2021 !important;
  --background-secondary: #282828 !important;
  --background-secondary-alt: #3c3836 !important;
  --bases-cards-background: #1d2021 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3) !important;
  --bases-embed-border-color: rgba(168, 168, 168, 0.2) !important;
  --bases-group-heading-property-color: #d5c4a1 !important;
  --bases-table-border-color: rgba(168, 168, 168, 0.2) !important;
  --bases-table-cell-background-active: #1d2021 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #e8d8a3 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8d8a3 !important;
  --bases-table-header-background: #1d2021 !important;
  --bases-table-header-background-hover: rgba(232, 216, 163, 0.08) !important;
  --bases-table-header-color: #d5c4a1 !important;
  --bases-table-summary-background: #1d2021 !important;
  --bases-table-summary-background-hover: rgba(232, 216, 163, 0.08) !important;
  --bg-accent: #504945 !important;
  --bg-primary: #1d2021 !important;
  --bg-secondary: #282828 !important;
  --bg-tertiary: #3c3836 !important;
  --blockquote-border-color: #e8d8a3 !important;
  --blue: #6b8ca4 !important;
  --blue-rgb: 107, 140, 164 !important;
  --blur-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent)) !important;
  --bodyFont: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --border-radius: 4px !important;
  --callout-color-abstract: 156, 122, 153;
  --callout-color-bug: 176, 108, 90;
  --callout-color-danger: 176, 108, 90;
  --callout-color-example: 156, 122, 153;
  --callout-color-failure: 176, 108, 90;
  --callout-color-info: 107, 140, 164;
  --callout-color-note: 107, 140, 164;
  --callout-color-question: 232, 216, 163;
  --callout-color-quote: 168, 168, 168;
  --callout-color-success: 122, 143, 113;
  --callout-color-tip: 122, 143, 113;
  --callout-color-todo: 168, 168, 168;
  --callout-color-warning: 194, 140, 92;
  --canvas-background: #1d2021 !important;
  --canvas-card-label-color: #bdae93 !important;
  --caret-color: #ebdbb2 !important;
  --checkbox-border-color: #bdae93 !important;
  --checkbox-border-color-hover: #d5c4a1 !important;
  --checkbox-color: #e8d8a3 !important;
  --checkbox-color-hover: #c28c5c !important;
  --checkbox-marker-color: #1d2021 !important;
  --checklist-done-color: #d5c4a1 !important;
  --code-border-color: rgba(168, 168, 168, 0.2) !important;
  --code-bracket-background: rgba(232, 216, 163, 0.08) !important;
  --code-comment: #bdae93 !important;
  --code-normal: #ebdbb2 !important;
  --code-punctuation: #d5c4a1 !important;
  --codeFont: "VT323", "Share Tech Mono", "Courier New", monospace !important;
  --collapse-icon-color: #bdae93 !important;
  --collapse-icon-color-collapsed: #e8d8a3 !important;
  --dark: #ebdbb2 !important;
  --darkgray: #ebdbb2 !important;
  --divider-color: rgba(168, 168, 168, 0.2) !important;
  --divider-color-hover: rgba(168, 168, 168, 0.3) !important;
  --dropdown-background: #3c3836 !important;
  --dropdown-background-hover: rgba(232, 216, 163, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.2), inset 0 0 0 1px rgba(168, 168, 168, 0.2) !important;
  --embed-border-start: 2px solid #e8d8a3 !important;
  --fg-primary: #ebdbb2 !important;
  --fg-secondary: #d5c4a1 !important;
  --fg-tertiary: #bdae93 !important;
  --file-header-background: #1d2021 !important;
  --file-header-background-focused: #1d2021 !important;
  --file-header-font: "Share Tech Mono", "Courier New", monospace !important;
  --flair-background: #3c3836 !important;
  --flair-color: #ebdbb2 !important;
  --font-heading: "Share Tech Mono", "Courier New", monospace !important;
  --font-interface: "Share Tech Mono", "Courier New", monospace !important;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --font-monospace: "VT323", "Share Tech Mono", "Courier New", monospace !important;
  --font-terminal: "VT323", "Share Tech Mono", "Courier New", monospace !important;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --footnote-divider-color: rgba(168, 168, 168, 0.2) !important;
  --footnote-id-color: #d5c4a1 !important;
  --footnote-id-color-no-occurrences: #bdae93 !important;
  --footnote-input-background-active: rgba(232, 216, 163, 0.08) !important;
  --graph-node: #d5c4a1 !important;
  --graph-node-focused: #e8d8a3 !important;
  --graph-node-unresolved: #bdae93 !important;
  --graph-text: #ebdbb2 !important;
  --gray: #a8a8a8 !important;
  --gray-rgb: 168, 168, 168 !important;
  --green: #7a8f71 !important;
  --green-rgb: 122, 143, 113 !important;
  --h1-color: #e8d8a3 !important;
  --h1-size: 5rem !important;
  --h2-color: #e8d8a3 !important;
  --h2-size: 4.5rem !important;
  --h3-color: #e8d8a3 !important;
  --h3-line-height: 1.2 !important;
  --h3-size: 4rem !important;
  --h4-color: #e8d8a3 !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 3.5rem !important;
  --h5-color: #e8d8a3 !important;
  --h5-line-height: 1.2 !important;
  --h5-size: 3rem !important;
  --h6-color: #e8d8a3 !important;
  --h6-line-height: 1.2 !important;
  --h6-size: 2.5rem !important;
  --headerFont: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --heading-formatting: #bdae93 !important;
  --heading-line-height: 1.2 !important;
  --highlight: rgba(232, 216, 163, 0.3) !important;
  --hr-color: #e8d8a3 !important;
  --icon-color: #d5c4a1 !important;
  --icon-color-active: #e8d8a3 !important;
  --icon-color-focused: #ebdbb2 !important;
  --icon-color-hover: #d5c4a1 !important;
  --inline-title-color: #e8d8a3 !important;
  --inline-title-font: "VT323", "Share Tech Mono", "Courier New", monospace !important;
  --inline-title-size: 5rem !important;
  --input-date-separator: #bdae93 !important;
  --input-placeholder-color: #bdae93 !important;
  --interactive-accent: #e8d8a3 !important;
  --interactive-accent-hover: #c28c5c !important;
  --interactive-hover: rgba(232, 216, 163, 0.1) !important;
  --interactive-normal: #3c3836 !important;
  --light: #1d2021 !important;
  --lightgray: #282828 !important;
  --link-color: #b06c5a !important;
  --link-color-hover: #b06c5a !important;
  --link-external-color: #b06c5a !important;
  --link-external-color-hover: #b06c5a !important;
  --link-unresolved-color: #e8d8a3 !important;
  --list-marker-color: #bdae93 !important;
  --list-marker-color-collapsed: #e8d8a3 !important;
  --list-marker-color-hover: #d5c4a1 !important;
  --menu-background: #282828 !important;
  --menu-border-color: rgba(168, 168, 168, 0.3) !important;
  --metadata-border-color: rgba(168, 168, 168, 0.2) !important;
  --metadata-divider-color: rgba(168, 168, 168, 0.2) !important;
  --metadata-input-background-active: rgba(232, 216, 163, 0.08) !important;
  --metadata-input-font: "Share Tech Mono", "Courier New", monospace !important;
  --metadata-input-text-color: #ebdbb2 !important;
  --metadata-label-background-active: rgba(232, 216, 163, 0.08) !important;
  --metadata-label-font: "Share Tech Mono", "Courier New", monospace !important;
  --metadata-label-text-color: #d5c4a1 !important;
  --metadata-label-text-color-hover: #d5c4a1 !important;
  --metadata-property-background-active: rgba(232, 216, 163, 0.08) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #e8d8a3 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3) !important;
  --modal-background: #1d2021 !important;
  --nav-collapse-icon-color: #bdae93 !important;
  --nav-collapse-icon-color-collapsed: #bdae93 !important;
  --nav-heading-color: #ebdbb2 !important;
  --nav-heading-color-collapsed: #bdae93 !important;
  --nav-heading-color-collapsed-hover: #d5c4a1 !important;
  --nav-heading-color-hover: #ebdbb2 !important;
  --nav-item-background-active: rgba(232, 216, 163, 0.08) !important;
  --nav-item-background-hover: rgba(232, 216, 163, 0.08) !important;
  --nav-item-color: #d5c4a1 !important;
  --nav-item-color-active: #ebdbb2 !important;
  --nav-item-color-highlighted: #e8d8a3 !important;
  --nav-item-color-hover: #ebdbb2 !important;
  --nav-item-color-selected: #ebdbb2 !important;
  --nav-tag-color: #bdae93 !important;
  --nav-tag-color-active: #d5c4a1 !important;
  --nav-tag-color-hover: #d5c4a1 !important;
  --orange: #c28c5c !important;
  --orange-rgb: 194, 140, 92 !important;
  --padding: 12px !important;
  --pdf-background: #1d2021 !important;
  --pdf-page-background: #1d2021 !important;
  --pdf-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2) !important;
  --pdf-sidebar-background: #1d2021 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2) !important;
  --pill-border-color: rgba(168, 168, 168, 0.2) !important;
  --pill-border-color-hover: rgba(168, 168, 168, 0.3) !important;
  --pill-color: #d5c4a1 !important;
  --pill-color-hover: #ebdbb2 !important;
  --pill-color-remove: #bdae93 !important;
  --pill-color-remove-hover: #e8d8a3 !important;
  --prompt-background: #1d2021 !important;
  --purple: #9c7a99 !important;
  --purple-rgb: 156, 122, 153 !important;
  --raised-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent)) !important;
  --red: #b06c5a !important;
  --red-rgb: 176, 108, 90 !important;
  --ribbon-background: #282828 !important;
  --ribbon-background-collapsed: #1d2021 !important;
  --search-clear-button-color: #d5c4a1 !important;
  --search-icon-color: #d5c4a1 !important;
  --search-result-background: #1d2021 !important;
  --secondary: #e8d8a3 !important;
  --setting-group-heading-color: #ebdbb2 !important;
  --setting-items-border-color: rgba(168, 168, 168, 0.2) !important;
  --slider-thumb-border-color: rgba(168, 168, 168, 0.3) !important;
  --slider-track-background: rgba(168, 168, 168, 0.2) !important;
  --status-bar-background: #282828 !important;
  --status-bar-border-color: rgba(168, 168, 168, 0.2) !important;
  --status-bar-text-color: #d5c4a1 !important;
  --suggestion-background: #1d2021 !important;
  --tab-background-active: #3c3836 !important;
  --tab-container-background: #282828 !important;
  --tab-divider-color: rgba(168, 168, 168, 0.3) !important;
  --tab-outline-color: rgba(168, 168, 168, 0.2) !important;
  --tab-switcher-background: #282828 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent) !important;
  --tab-text-color: #bdae93 !important;
  --tab-text-color-active: #ebdbb2 !important;
  --tab-text-color-focused: #d5c4a1 !important;
  --tab-text-color-focused-active: #e8d8a3 !important;
  --tab-text-color-focused-active-current: #ebdbb2 !important;
  --tab-text-color-focused-highlighted: #e8d8a3 !important;
  --table-add-button-border-color: rgba(168, 168, 168, 0.2) !important;
  --table-border-color: rgba(168, 168, 168, 0.2) !important;
  --table-drag-handle-background-active: #e8d8a3 !important;
  --table-drag-handle-color: #bdae93 !important;
  --table-drag-handle-color-active: #1d2021 !important;
  --table-header-border-color: rgba(168, 168, 168, 0.2) !important;
  --table-header-color: #ebdbb2 !important;
  --table-selection-border-color: #e8d8a3 !important;
  --tag-color: #e8d8a3 !important;
  --tag-color-hover: #e8d8a3 !important;
  --tertiary: #c28c5c !important;
  --text-accent: #e8d8a3 !important;
  --text-accent-hover: #c28c5c !important;
  --text-error: #b06c5a !important;
  --text-faint: #bdae93 !important;
  --text-highlight-bg: rgba(232, 216, 163, 0.3) !important;
  --text-muted: #d5c4a1 !important;
  --text-normal: #ebdbb2 !important;
  --text-on-accent: #1d2021 !important;
  --text-selection: rgba(232, 216, 163, 0.2) !important;
  --text-success: #7a8f71 !important;
  --text-warning: #c28c5c !important;
  --textHighlight: rgba(232, 216, 163, 0.3) !important;
  --titleFont: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --titlebar-background: #1d2021 !important;
  --titlebar-background-focused: #1d2021 !important;
  --titlebar-border-color: rgba(168, 168, 168, 0.2) !important;
  --titlebar-text-color: #d5c4a1 !important;
  --titlebar-text-color-focused: #ebdbb2 !important;
  --vault-profile-color: #ebdbb2 !important;
  --vault-profile-color-hover: #ebdbb2 !important;
  --yellow: #e8d8a3 !important;
  --yellow-rgb: 232, 216, 163 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

html body .bases-table {
  border-color: rgba(232, 216, 163, 0.3);
}

html body .bases-table thead th {
  border-color: rgba(168, 168, 168, 0.2) rgba(168, 168, 168, 0.2) rgba(232, 216, 163, 0.4) rgba(232, 216, 163, 0.3);
  color: rgb(232, 216, 163);
  font-weight: 400;
}

html body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html body .canvas-sidebar {
  background-color: rgb(40, 40, 40);
  border-color: rgb(235, 219, 178);
}

html body .note-properties {
  border-color: rgba(168, 168, 168, 0.2);
}

html body .note-properties-key {
  color: rgb(213, 196, 161);
}

html body .note-properties-row {
  border-color: rgb(213, 196, 161);
}

html body .note-properties-tags {
  color: rgb(232, 216, 163);
}

html body .note-properties-value {
  color: rgb(213, 196, 161);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(168, 168, 168, 0.2);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  border-left-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
}

html body div#quartz-root {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration-color: rgb(232, 216, 163);
}

html body .page article p > em, html em {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration-color: rgb(194, 140, 92);
}

html body .page article p > i, html i {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration-color: rgb(194, 140, 92);
}

html body .page article p > strong, html strong {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration-color: rgb(232, 216, 163);
}

html body .text-highlight {
  background-color: rgba(232, 216, 163, 0.3);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body del {
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-name: glitch-flicker;
  animation-timing-function: ease-in-out;
  color: rgb(176, 108, 90);
  font-family: "Share Tech Mono", "Courier New", monospace;
  outline: rgb(176, 108, 90) none 0px;
  text-decoration-color: rgb(176, 108, 90);
  transform: matrix(1, 0, 0, 1, 0.179423, 0);
}

html body h1.article-title {
  color: rgb(235, 219, 178);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(232, 216, 163);
  border-color: rgb(232, 216, 163);
}

html body p {
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html body a.external, html footer a {
  color: rgb(156, 122, 153);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(156, 122, 153) none 0px;
  text-decoration-color: rgb(156, 122, 153);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(176, 108, 90);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(176, 108, 90) none 0px;
  text-decoration-color: rgb(176, 108, 90);
}

html body a.internal.broken {
  color: rgb(232, 216, 163);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(232, 216, 163) none 0px;
}`,
    lists: `html body ol > li {
  color: rgb(235, 219, 178);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ul > li {
  color: rgb(235, 219, 178);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 174, 147);
}

html body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body table {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(232, 216, 163, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(232, 216, 163, 0.3);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin-top: 24px;
  width: 662px;
}

html body td {
  border-bottom-color: rgba(232, 216, 163, 0.15);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.2);
  border-top-color: rgb(235, 219, 178);
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html body th {
  border-bottom-color: rgba(232, 216, 163, 0.4);
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(232, 216, 163);
  font-weight: 400;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-align: left;
}

html body thead {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}

html body tr {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}`,
    code: `html body code {
  border-bottom-color: rgb(122, 143, 113);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(122, 143, 113);
  border-right-color: rgb(122, 143, 113);
  border-top-color: rgba(122, 143, 113, 0.3);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(122, 143, 113);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
  padding-bottom: 19.2px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 19.2px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(235, 219, 178);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  overflow-x: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  overflow-x: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body figcaption {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body img {
  border-bottom-color: rgb(232, 216, 163);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
}

html body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgba(232, 216, 163, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.5);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.5);
  border-right-width: 2px;
  border-top-color: rgba(232, 216, 163, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 2px;
  margin-right: 12.8px;
  transition: 0.2s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(29, 32, 33);
  color: rgb(232, 216, 163);
  content: "▓";
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(232, 216, 163);
}

html body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
  box-shadow: rgba(232, 216, 163, 0.5) 0px 0px 20px 0px, rgba(232, 216, 163, 0.1) 0px 0px 20px 0px inset;
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(232, 216, 163, 0.08);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body a.internal.tag-link::before {
  color: rgb(232, 216, 163);
}

html body h1 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h2 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(232, 216, 163);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

html body h3 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h4 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h5 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body h6 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

html body hr {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

html body ::-webkit-scrollbar-track {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `html body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .breadcrumb-element p {
  color: rgb(189, 174, 147);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(156, 122, 153, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(156, 122, 153, 0.4);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(156, 122, 153, 0.4);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(156, 122, 153, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(156, 122, 153);
}

html body .metadata {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

html body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body abbr {
  color: rgb(235, 219, 178);
}

html body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

html body kbd {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

html body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body summary {
  color: rgb(235, 219, 178);
}

html body sup {
  color: rgb(235, 219, 178);
}

html body ul.tags > li {
  background-color: rgba(122, 143, 113, 0.1);
  border-bottom-color: rgba(122, 143, 113, 0.3);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgba(122, 143, 113, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(122, 143, 113, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(122, 143, 113, 0.3);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: rgb(122, 143, 113);
}`,
  },
  light: {},
  extras: `/* Scanlines overlay for authentic CRT effect */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    transparent 0px,
    rgba(0, 255, 0, 0.03) 1px,
    transparent 2px
  );
  background-size: 100% 2px;
  pointer-events: none;
  z-index: 1000;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(2px);
  }
}

/* Subtle screen flicker */
.workspace {
  animation: flicker 3s infinite alternate;
}

@keyframes flicker {
  0%,
  100% {
    opacity: 1;
  }
  98% {
    opacity: 0.98;
  }
  99% {
    opacity: 1;
  }
}

/* Retro glow effect for main content */
.workspace-leaf-content {
  box-shadow:
    inset 0 0 20px rgba(var(--yellow-rgb), 0.1),
    0 0 20px rgba(var(--yellow-rgb), 0.05);
}
`,
};
