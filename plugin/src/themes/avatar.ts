import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "avatar",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono", "kalam"],
  },
  dark: {
    base: `:root:root {
  --avatar-aqua: #7DD3C0 !important;
  --avatar-aqua-light: #5EEAD4 !important;
  --avatar-bold: #34D399 !important;
  --avatar-focus-border: rgba(125, 211, 192, 0.2) !important;
  --avatar-focus-color: #343e4f !important;
  --avatar-gold: #FBBF24 !important;
  --avatar-gold-light: #FDE68A !important;
  --avatar-pink: #EF44C0 !important;
  --avatar-purple: #6366F1 !important;
  --avatar-purple-light: #A78BFA !important;
  --background-modifier-border: #4a5568 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #dc2626 !important;
  --background-modifier-error-hover: #b91c1c !important;
  --background-modifier-error-rgb: 220, 38, 38 !important;
  --background-modifier-form-field: #374151 !important;
  --background-modifier-form-field-highlighted: #4a5568 !important;
  --background-modifier-form-field-hover: #374151 !important;
  --background-modifier-success: #059669 !important;
  --background-primary: #1a2332 !important;
  --background-primary-alt: #2d3748 !important;
  --background-secondary: #374151 !important;
  --bases-cards-background: #1a2332 !important;
  --bases-cards-cover-background: #2d3748 !important;
  --bases-cards-shadow: 0 0 0 1px #4a5568 !important;
  --bases-embed-border-color: #4a5568 !important;
  --bases-group-heading-property-color: #a0aec0 !important;
  --bases-table-border-color: rgba(125, 211, 192, 0.3) !important;
  --bases-table-cell-background-active: #1a2332 !important;
  --bases-table-cell-background-disabled: #2d3748 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7dd3c0 !important;
  --bases-table-group-background: #2d3748 !important;
  --bases-table-header-background: #1a2332 !important;
  --bases-table-header-color: #a0aec0 !important;
  --bases-table-summary-background: #1a2332 !important;
  --blockquote-bg: #303E59 !important;
  --blockquote-border-color: #fbbf24 !important;
  --blockquote-color: #E1DCF2 !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #374151 65%, transparent) linear-gradient(#374151, color-mix(in srgb, #374151 65%, transparent)) !important;
  --bodyFont: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --canvas-background: #1a2332 !important;
  --canvas-card-label-color: #718096 !important;
  --caret-color: #e2e8f0 !important;
  --checkbox-border-color: #718096 !important;
  --checkbox-border-color-hover: #a0aec0 !important;
  --checkbox-color: #7dd3c0 !important;
  --checkbox-color-hover: #5eead4 !important;
  --checkbox-marker-color: #1a2332 !important;
  --checklist-done-color: #a0aec0 !important;
  --code-background: #374151 !important;
  --code-border-color: #4a5568 !important;
  --code-comment: #718096 !important;
  --code-normal: #e2e8f0 !important;
  --code-punctuation: #a0aec0 !important;
  --codeFont: 'JetBrains Mono', 'Source Code Pro', monospace !important;
  --collapse-icon-color: #718096 !important;
  --collapse-icon-color-collapsed: #7dd3c0 !important;
  --dark: #e2e8f0 !important;
  --darkgray: #e2e8f0 !important;
  --divider-color: #4a5568 !important;
  --divider-color-hover: #7dd3c0 !important;
  --dropdown-background: #374151 !important;
  --dropdown-background-hover: #4a5568 !important;
  --embed-block-shadow-hover: 0 0 0 1px #4a5568, inset 0 0 0 1px #4a5568 !important;
  --embed-border-start: 2px solid #7dd3c0 !important;
  --file-header-background: #1a2332 !important;
  --file-header-background-focused: #1a2332 !important;
  --file-header-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --flair-background: #374151 !important;
  --flair-color: #e2e8f0 !important;
  --font-interface: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --font-interface-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --font-mermaid: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --font-monospace: 'JetBrains Mono', 'Source Code Pro', monospace !important;
  --font-monospace-theme: 'JetBrains Mono', 'Source Code Pro', monospace !important;
  --font-print: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif, Arial' !important;
  --font-text: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --font-text-theme: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --footnote-divider-color: #4a5568 !important;
  --footnote-id-color: #a0aec0 !important;
  --footnote-id-color-no-occurrences: #718096 !important;
  --graph-node: #a0aec0 !important;
  --graph-node-focused: #7dd3c0 !important;
  --graph-node-unresolved: #718096 !important;
  --graph-text: #e2e8f0 !important;
  --gray: #a0aec0 !important;
  --h1-color: #EF44C0 !important;
  --h1-size: 2.5em !important;
  --h2-color: #a78bfa !important;
  --h2-size: 2.0em !important;
  --h2-weight: 600 !important;
  --h3-color: #fbbf24 !important;
  --h3-size: 1.6em !important;
  --h3-weight: 600 !important;
  --h4-color: #5EEAD4 !important;
  --h4-size: 1.3em !important;
  --h4-weight: 500 !important;
  --h5-color: #7dd3c0 !important;
  --h5-size: 1.1em !important;
  --h5-weight: 500 !important;
  --h6-color: #6366f1 !important;
  --h6-size: 1.0em !important;
  --h6-weight: 500 !important;
  --headerFont: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --heading-formatting: #718096 !important;
  --highlight: rgba(125, 211, 192, 0.3) !important;
  --hr-color: #fbbf24 !important;
  --icon-color: #7dd3c0 !important;
  --icon-color-active: #f561ab !important;
  --icon-color-focused: #fbbf24 !important;
  --icon-color-hover: #fde68a !important;
  --indentation-guide-color: #59FFD5 !important;
  --indentation-guide-color-active: rgba(89, 255, 213, 0.66) !important;
  --inline-title-color: #EF44C0 !important;
  --inline-title-size: 2.5em !important;
  --input-date-separator: #718096 !important;
  --input-placeholder-color: #718096 !important;
  --interactive-accent: #7dd3c0 !important;
  --interactive-accent-hover: #5eead4 !important;
  --interactive-hover: #4a5568 !important;
  --interactive-normal: #374151 !important;
  --interactive-success: #059669 !important;
  --light: #1a2332 !important;
  --lightgray: #374151 !important;
  --link-color: #7dd3c0 !important;
  --link-color-hover: #5eead4 !important;
  --link-external-color: #fbbf24 !important;
  --link-external-color-hover: #5eead4 !important;
  --link-unresolved-color: #6cf58e !important;
  --list-marker-color: #718096 !important;
  --list-marker-color-collapsed: #7dd3c0 !important;
  --list-marker-color-hover: #a0aec0 !important;
  --menu-background: #374151 !important;
  --metadata-border-color: #4a5568 !important;
  --metadata-divider-color: #4a5568 !important;
  --metadata-input-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --metadata-input-text-color: #e2e8f0 !important;
  --metadata-label-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --metadata-label-text-color: #a0aec0 !important;
  --metadata-label-text-color-hover: #a0aec0 !important;
  --modal-background: #1a2332 !important;
  --nav-collapse-icon-color: #718096 !important;
  --nav-collapse-icon-color-collapsed: #718096 !important;
  --nav-heading-color: #e2e8f0 !important;
  --nav-heading-color-collapsed: #718096 !important;
  --nav-heading-color-collapsed-hover: #a0aec0 !important;
  --nav-heading-color-hover: #e2e8f0 !important;
  --nav-indentation-guide-color: #59FFD5 !important;
  --nav-item-color: #a0aec0 !important;
  --nav-item-color-active: #e2e8f0 !important;
  --nav-item-color-highlighted: #7dd3c0 !important;
  --nav-item-color-hover: #e2e8f0 !important;
  --nav-item-color-selected: #e2e8f0 !important;
  --nav-tag-color: #718096 !important;
  --nav-tag-color-active: #a0aec0 !important;
  --nav-tag-color-hover: #a0aec0 !important;
  --pdf-background: #1a2332 !important;
  --pdf-page-background: #1a2332 !important;
  --pdf-shadow: 0 0 0 1px #4a5568 !important;
  --pdf-sidebar-background: #1a2332 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a5568 !important;
  --pill-border-color: #4a5568 !important;
  --pill-color: #a0aec0 !important;
  --pill-color-hover: #e2e8f0 !important;
  --pill-color-remove: #718096 !important;
  --pill-color-remove-hover: #7dd3c0 !important;
  --prompt-background: #1a2332 !important;
  --raised-background: color-mix(in srgb, #374151 65%, transparent) linear-gradient(#374151, color-mix(in srgb, #374151 65%, transparent)) !important;
  --ribbon-background: #374151 !important;
  --ribbon-background-collapsed: #1a2332 !important;
  --search-clear-button-color: #a0aec0 !important;
  --search-icon-color: #a0aec0 !important;
  --search-result-background: #1a2332 !important;
  --secondary: #7dd3c0 !important;
  --setting-group-heading-color: #e2e8f0 !important;
  --setting-items-background: #2d3748 !important;
  --setting-items-border-color: #4a5568 !important;
  --slider-track-background: #4a5568 !important;
  --status-bar-background: #374151 !important;
  --status-bar-border-color: #4a5568 !important;
  --status-bar-text-color: #a0aec0 !important;
  --suggestion-background: #1a2332 !important;
  --tab-background-active: #1a2332 !important;
  --tab-container-background: #374151 !important;
  --tab-outline-color: #4a5568 !important;
  --tab-switcher-background: #374151 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #374151, transparent) !important;
  --tab-text-color: #718096 !important;
  --tab-text-color-active: #a0aec0 !important;
  --tab-text-color-focused: #a0aec0 !important;
  --tab-text-color-focused-active: #FBBF24 !important;
  --tab-text-color-focused-active-current: #e2e8f0 !important;
  --tab-text-color-focused-highlighted: #7dd3c0 !important;
  --tab-text-color-unfocused-active: #7dd3c0 !important;
  --table-add-button-border-color: #4a5568 !important;
  --table-border-color: rgba(125, 211, 192, 0.3) !important;
  --table-drag-handle-background-active: #7dd3c0 !important;
  --table-drag-handle-color: #718096 !important;
  --table-drag-handle-color-active: #1a202c !important;
  --table-header-background: linear-gradient(135deg, rgba(125, 211, 192, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%) !important;
  --table-header-border-color: rgba(125, 211, 192, 0.3) !important;
  --table-header-color: #e2e8f0 !important;
  --table-row-even-background: rgba(125, 211, 192, 0.03) !important;
  --table-row-hover-background: rgba(251, 191, 36, 0.05) !important;
  --table-selection-border-color: #7dd3c0 !important;
  --tag-background: rgba(251, 191, 36, 0.2) !important;
  --tag-background-hover: rgba(251, 191, 36, 0.3) !important;
  --tag-color: #fbbf24 !important;
  --tag-color-hover: #7dd3c0 !important;
  --tertiary: #5eead4 !important;
  --text-accent: #7dd3c0 !important;
  --text-accent-hover: #5eead4 !important;
  --text-faint: #718096 !important;
  --text-highlight-bg: rgba(125, 211, 192, 0.3) !important;
  --text-highlight-bg-active: rgba(251, 191, 36, 0.6) !important;
  --text-highlight-color: #EF44C0 !important;
  --text-muted: #a0aec0 !important;
  --text-normal: #e2e8f0 !important;
  --text-on-accent: #1a202c !important;
  --textHighlight: rgba(125, 211, 192, 0.3) !important;
  --titleFont: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  --titlebar-background: #374151 !important;
  --titlebar-border-color: #4a5568 !important;
  --titlebar-text-color: #a0aec0 !important;
  --titlebar-text-color-focused: #FBBF24 !important;
  --titlebar-text-color-unfocused: #a0aec0 !important;
  --vault-profile-color: #e2e8f0 !important;
  --vault-profile-color-hover: #e2e8f0 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}

html body .bases-table {
  border-color: rgba(125, 211, 192, 0.3);
}

html body .bases-table thead th {
  border-color: rgba(125, 211, 192, 0.3) rgba(125, 211, 192, 0.15) rgb(125, 211, 192) rgb(125, 211, 192);
  color: rgb(125, 211, 192);
}

html body .canvas-node {
  border-color: rgb(226, 232, 240);
}

html body .canvas-node-content {
  color: rgb(226, 232, 240);
}

html body .canvas-node-file {
  color: rgb(226, 232, 240);
}

html body .canvas-node-group {
  border-color: rgb(226, 232, 240);
}

html body .canvas-sidebar {
  background-color: rgb(55, 65, 81);
  border-color: rgb(226, 232, 240);
}

html body .note-properties {
  border-color: rgb(74, 85, 104);
}

html body .note-properties-key {
  color: rgb(160, 174, 192);
}

html body .note-properties-row {
  border-color: rgb(160, 174, 192);
}

html body .note-properties-tags {
  background-color: rgba(251, 191, 36, 0.2);
  color: rgb(251, 191, 36);
}

html body .note-properties-value {
  color: rgb(160, 174, 192);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(55, 65, 81);
  color: rgb(226, 232, 240);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 35, 50);
  border-left-color: rgb(128, 128, 128);
  color: rgb(226, 232, 240);
}

html body div#quartz-root {
  background-color: rgb(26, 35, 50);
  color: rgb(226, 232, 240);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(52, 211, 153);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration-color: rgb(52, 211, 153);
}

html body .page article p > em, html em {
  color: rgb(129, 140, 248);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration-color: rgb(129, 140, 248);
}

html body .page article p > i, html i {
  color: rgb(129, 140, 248);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(129, 140, 248) none 0px;
  text-decoration-color: rgb(129, 140, 248);
}

html body .page article p > strong, html strong {
  color: rgb(52, 211, 153);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  outline: rgb(52, 211, 153) none 0px;
  text-decoration-color: rgb(52, 211, 153);
}

html body .text-highlight {
  background-color: rgba(72, 43, 177, 0.48);
  color: rgb(64, 199, 204);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 500;
  outline: rgb(64, 199, 204) none 0px;
  text-decoration-color: rgb(64, 199, 204);
}

html body del {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration-color: rgb(226, 232, 240);
}

html body h1.article-title {
  color: rgb(226, 232, 240);
  font-weight: 600;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(113, 128, 150);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(125, 211, 192);
  border-color: rgb(125, 211, 192);
}

html body p {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(160, 174, 192) none 0px;
  text-decoration-color: rgb(160, 174, 192);
}`,
    links: `html body a.external, html footer a {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(251, 191, 36) none 0px;
  text-decoration-color: rgb(251, 191, 36);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(125, 211, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(125, 211, 192) none 0px;
  text-decoration-color: rgb(125, 211, 192);
}

html body a.internal.broken {
  color: rgb(108, 245, 142);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(108, 245, 142) none 0px;
}`,
    lists: `html body dd {
  color: rgb(226, 232, 240);
}

html body dt {
  color: rgb(226, 232, 240);
}

html body ol > li {
  color: rgb(226, 232, 240);
}

html body ol.overflow {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body ul > li {
  color: rgb(226, 232, 240);
}

html body ul.overflow {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(113, 128, 150);
}

html body blockquote {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body table {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(125, 211, 192, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(125, 211, 192, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(125, 211, 192, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  width: 226.844px;
}

html body tbody tr:nth-child(even) {
  background-color: rgba(125, 211, 192, 0.03);
}

html body td {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-left-color: rgb(226, 232, 240);
  border-left-width: 0px;
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: rgb(226, 232, 240);
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html body th {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-width: 2px;
  border-left-color: rgb(125, 211, 192);
  border-left-width: 0px;
  border-right-color: rgba(125, 211, 192, 0.15);
  border-top-color: rgba(125, 211, 192, 0.3);
  color: rgb(125, 211, 192);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
  text-align: left;
}

html body thead {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}

html body tr {
  border-bottom-color: rgba(125, 211, 192, 0.3);
  border-left-color: rgba(125, 211, 192, 0.3);
  border-right-color: rgba(125, 211, 192, 0.3);
  border-top-color: rgba(125, 211, 192, 0.3);
}`,
    code: `html body code {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: "JetBrains Mono", "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: rgb(226, 232, 240);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}

html body pre:has(> code) {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
}`,
    images: `html body audio {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body figcaption {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body figure {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body img {
  border-bottom-color: rgb(239, 68, 192);
  border-left-color: rgb(239, 68, 192);
  border-right-color: rgb(239, 68, 192);
  border-top-color: rgb(239, 68, 192);
}

html body video {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(45, 55, 72);
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
}

html body .footnotes {
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .transclude {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body .transclude-inner {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(113, 128, 150);
  border-left-color: rgb(113, 128, 150);
  border-right-color: rgb(113, 128, 150);
  border-top-color: rgb(113, 128, 150);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(226, 232, 240);
  text-decoration-color: rgb(226, 232, 240);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(5, 203, 209);
  border-left-color: rgb(5, 203, 209);
  border-right-color: rgb(5, 203, 209);
  border-top-color: rgb(5, 203, 209);
  color: rgb(5, 203, 209);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(5, 203, 209);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(235, 61, 102, 0.518);
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(235, 61, 102, 0.518);
  border-bottom-color: rgba(237, 49, 93, 0.61);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(237, 49, 93, 0.61);
  border-left-width: 4px;
  border-right-color: rgba(237, 49, 93, 0.61);
  border-top-color: rgba(237, 49, 93, 0.61);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(224, 235, 73, 0.545);
  border-bottom-color: rgb(214, 47, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(214, 47, 35);
  border-left-width: 4px;
  border-right-color: rgb(214, 47, 35);
  border-top-color: rgb(214, 47, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(68, 56, 202, 0.545);
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(99, 102, 241, 0.08);
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(133, 36, 251, 0.08);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(251, 191, 36, 0.05);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(125, 211, 192, 0.08);
  border-bottom-color: rgb(8, 250, 169);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(8, 250, 169);
  border-left-width: 4px;
  border-right-color: rgb(8, 250, 169);
  border-top-color: rgb(8, 250, 169);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(11, 112, 200, 0.48);
  border-bottom-color: rgb(225, 63, 243);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(225, 63, 243);
  border-left-width: 4px;
  border-right-color: rgb(225, 63, 243);
  border-top-color: rgb(225, 63, 243);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(68, 56, 202, 0.545);
  border-bottom-color: rgb(248, 191, 40);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(248, 191, 40);
  border-left-width: 4px;
  border-right-color: rgb(248, 191, 40);
  border-top-color: rgb(248, 191, 40);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(251, 191, 36, 0.08);
  border-bottom-color: rgb(251, 191, 36);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(251, 191, 36);
  border-left-width: 4px;
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(52, 62, 79);
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(226, 232, 240) none 0px;
  text-decoration-color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(125, 211, 192, 0.2);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(125, 211, 192, 0.2);
  border-right-color: rgba(125, 211, 192, 0.2);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(74, 85, 104);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(74, 85, 104);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(226, 232, 240);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(251, 191, 36, 0.2);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(251, 191, 36);
}

html body h1 {
  color: rgb(239, 68, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h2 {
  color: rgb(167, 139, 250);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(239, 68, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h3 {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h4 {
  color: rgb(94, 234, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h5 {
  color: rgb(125, 211, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body h6 {
  color: rgb(99, 102, 241);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
  border-top-color: rgb(251, 191, 36);
  border-top-style: solid;
  border-top-width: 3px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(99, 102, 241);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(99, 102, 241);
  border-left-width: 4px;
  border-right-color: rgb(99, 102, 241);
  border-top-color: rgb(99, 102, 241);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body ::-webkit-scrollbar {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 35, 50) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 35, 50);
}`,
    explorer: `html body .explorer {
  background-color: rgba(45, 55, 72, 0.3);
}

html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgba(125, 211, 192, 0.2);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(226, 232, 240);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(125, 211, 192);
}`,
    footer: `html body footer {
  background-color: rgb(52, 62, 79);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgba(125, 211, 192, 0.2);
  border-top-left-radius: 0px;
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body footer ul li a {
  color: rgb(251, 191, 36);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(226, 232, 240);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 174, 192);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body li.section-li > .section .meta {
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 174, 192);
}

html body ul.section-ul {
  background-color: rgba(45, 55, 72, 0.3);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(125, 211, 192);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(125, 211, 192);
  border-right-color: rgb(125, 211, 192);
  border-top-color: rgb(125, 211, 192);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(125, 211, 192);
}

html body .darkmode svg {
  color: rgb(125, 211, 192);
  stroke: rgb(125, 211, 192);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(251, 191, 36);
  border-left-color: rgb(251, 191, 36);
  border-right-color: rgb(251, 191, 36);
  border-top-color: rgb(251, 191, 36);
  color: rgb(251, 191, 36);
}

html body .breadcrumb-element p {
  color: rgb(251, 191, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
}

html body .metadata {
  border-bottom-color: rgb(74, 85, 104);
  border-left-color: rgb(74, 85, 104);
  border-right-color: rgb(74, 85, 104);
  border-top-color: rgb(74, 85, 104);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 174, 192);
  border-left-color: rgb(160, 174, 192);
  border-right-color: rgb(160, 174, 192);
  border-top-color: rgb(160, 174, 192);
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body .navigation-progress {
  background-color: rgb(52, 62, 79);
}

html body .page-header h2.page-title {
  color: rgb(226, 232, 240);
  font-family: Kalam, cursive;
}

html body abbr {
  color: rgb(226, 232, 240);
}

html body details {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body input[type=text] {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(74, 85, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(74, 85, 104);
  border-left-width: 1px;
  border-right-color: rgb(74, 85, 104);
  border-right-width: 1px;
  border-top-color: rgb(74, 85, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(160, 174, 192);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html body kbd {
  background-color: rgb(55, 65, 81);
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
  color: rgb(226, 232, 240);
  font-family: "JetBrains Mono", "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(226, 232, 240);
  border-left-color: rgb(226, 232, 240);
  border-right-color: rgb(226, 232, 240);
  border-top-color: rgb(226, 232, 240);
}

html body sub {
  color: rgb(226, 232, 240);
}

html body summary {
  color: rgb(226, 232, 240);
}

html body sup {
  color: rgb(226, 232, 240);
}

html body ul.tags > li {
  background-color: rgba(251, 191, 36, 0.2);
  color: rgb(251, 191, 36);
}`,
  },
  light: {},
};
