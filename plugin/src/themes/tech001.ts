import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tech001",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-blockquote: #1e1f20 !important;
  --background-modifier-border: #444746 !important;
  --background-primary: #191919 !important;
  --background-secondary: #1e1f20 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #191919 !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #444746 !important;
  --bases-embed-border-color: #444746 !important;
  --bases-group-heading-property-color: #757575 !important;
  --bases-table-border-color: #444746 !important;
  --bases-table-cell-background-active: #191919 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3b5260 !important;
  --bases-table-header-background: #191919 !important;
  --bases-table-header-color: #757575 !important;
  --bases-table-summary-background: #191919 !important;
  --blockquote-border-color: #3b5260 !important;
  --bodyFont: 'Roboto', 'Inter', sans-serif !important;
  --canvas-background: #191919 !important;
  --canvas-card-label-color: #444746 !important;
  --caret-color: #A8C7FA !important;
  --checkbox-border-color: #444746 !important;
  --checkbox-border-color-hover: #757575 !important;
  --checkbox-color: #3b5260 !important;
  --checkbox-marker-color: #191919 !important;
  --checklist-done-color: #757575 !important;
  --code-background: #1e1f20 !important;
  --code-border-color: #444746 !important;
  --code-comment: #8e918f !important;
  --code-function: #A8C7FA !important;
  --code-keyword: #c58af9 !important;
  --code-normal: #e3e3e3 !important;
  --code-operator: #c4c7c5 !important;
  --code-property: #81c995 !important;
  --code-punctuation: #757575 !important;
  --code-size: 0.9em !important;
  --code-string: #f28b82 !important;
  --code-value: #fdd663 !important;
  --codeFont: 'Roboto', 'Inter', sans-serif !important;
  --collapse-icon-color: #444746 !important;
  --collapse-icon-color-collapsed: #A8C7FA !important;
  --dark: #afafaf !important;
  --darkgray: #afafaf !important;
  --divider-color: #444746 !important;
  --divider-color-hover: #3b5260 !important;
  --embed-block-shadow-hover: 0 0 0 1px #444746, inset 0 0 0 1px #444746 !important;
  --embed-border-start: 2px solid #3b5260 !important;
  --file-header-background: #191919 !important;
  --file-header-background-focused: #191919 !important;
  --file-header-font: 'Roboto', 'Inter', sans-serif !important;
  --flair-color: #afafaf !important;
  --font-family-code: 'JetBrains Mono', monospace !important;
  --font-interface: 'Roboto', 'Inter', sans-serif !important;
  --font-mermaid: 'Roboto', 'Inter', sans-serif !important;
  --font-text: 'Roboto', 'Inter', sans-serif !important;
  --footnote-divider-color: #444746 !important;
  --footnote-id-color: #757575 !important;
  --footnote-id-color-no-occurrences: #444746 !important;
  --graph-node: #757575 !important;
  --graph-node-focused: #A8C7FA !important;
  --graph-node-unresolved: #444746 !important;
  --graph-text: #afafaf !important;
  --gray: #757575 !important;
  --h1-color: #ffffff !important;
  --h1-size: 2.2em !important;
  --h1-weight: 400 !important;
  --h2-color: #ffffff !important;
  --h2-size: 1.6em !important;
  --h2-weight: 400 !important;
  --h3-color: #f5f5f5 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 500 !important;
  --h4-color: #f5f5f5 !important;
  --h5-color: #f5f5f5 !important;
  --h6-color: #f5f5f5 !important;
  --headerFont: 'Roboto', 'Inter', sans-serif !important;
  --heading-formatting: #444746 !important;
  --hr-color: #444746 !important;
  --icon-color: #757575 !important;
  --icon-color-active: #A8C7FA !important;
  --icon-color-focused: #afafaf !important;
  --icon-color-hover: #757575 !important;
  --inline-title-color: #ffffff !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: #444746 !important;
  --input-placeholder-color: #444746 !important;
  --interactive-accent: #3b5260 !important;
  --light: #191919 !important;
  --lightgray: #1e1f20 !important;
  --link-color: #A8C7FA !important;
  --link-color-hover: #D3E3FD !important;
  --link-external-color: #A8C7FA !important;
  --link-external-color-hover: #D3E3FD !important;
  --link-unresolved-color: #A8C7FA !important;
  --list-marker-color: #444746 !important;
  --list-marker-color-collapsed: #A8C7FA !important;
  --list-marker-color-hover: #757575 !important;
  --menu-background: #1e1f20 !important;
  --menu-radius: 12px !important;
  --metadata-border-color: #444746 !important;
  --metadata-divider-color: #444746 !important;
  --metadata-input-font: 'Roboto', 'Inter', sans-serif !important;
  --metadata-input-text-color: #afafaf !important;
  --metadata-label-font: 'Roboto', 'Inter', sans-serif !important;
  --metadata-label-text-color: #757575 !important;
  --metadata-label-text-color-hover: #757575 !important;
  --modal-background: #191919 !important;
  --modal-radius: 24px !important;
  --nav-collapse-icon-color: #444746 !important;
  --nav-collapse-icon-color-collapsed: #444746 !important;
  --nav-heading-color: #afafaf !important;
  --nav-heading-color-collapsed: #444746 !important;
  --nav-heading-color-collapsed-hover: #757575 !important;
  --nav-heading-color-hover: #afafaf !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-color: #757575 !important;
  --nav-item-color-active: #afafaf !important;
  --nav-item-color-highlighted: #A8C7FA !important;
  --nav-item-color-hover: #afafaf !important;
  --nav-item-color-selected: #afafaf !important;
  --nav-tag-color: #444746 !important;
  --nav-tag-color-active: #757575 !important;
  --nav-tag-color-hover: #757575 !important;
  --pdf-background: #191919 !important;
  --pdf-page-background: #191919 !important;
  --pdf-shadow: 0 0 0 1px #444746 !important;
  --pdf-sidebar-background: #191919 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #444746 !important;
  --pill-border-color: #444746 !important;
  --pill-color: #757575 !important;
  --pill-color-hover: #afafaf !important;
  --pill-color-remove: #444746 !important;
  --pill-color-remove-hover: #A8C7FA !important;
  --prompt-background: #191919 !important;
  --radius-l: 24px !important;
  --radius-m: 12px !important;
  --ribbon-background: #1e1f20 !important;
  --ribbon-background-collapsed: #191919 !important;
  --scrollbar-radius: 24px !important;
  --scrollbar-thumb: #444746 !important;
  --search-clear-button-color: #757575 !important;
  --search-icon-color: #757575 !important;
  --search-result-background: #191919 !important;
  --secondary: #A8C7FA !important;
  --setting-group-heading-color: #afafaf !important;
  --setting-items-border-color: #444746 !important;
  --setting-items-radius: 24px !important;
  --sidebar-hover: rgba(168, 199, 250, 0.08) !important;
  --slider-track-background: #444746 !important;
  --status-bar-background: #1e1f20 !important;
  --status-bar-border-color: #444746 !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #757575 !important;
  --suggestion-background: #191919 !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #1e1f20 !important;
  --tab-hover: rgba(255, 255, 255, 0.03) !important;
  --tab-outline-color: #444746 !important;
  --tab-switcher-background: #1e1f20 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1f20, transparent) !important;
  --tab-text-color: #444746 !important;
  --tab-text-color-active: #757575 !important;
  --tab-text-color-focused: #757575 !important;
  --tab-text-color-focused-active: #757575 !important;
  --tab-text-color-focused-active-current: #afafaf !important;
  --tab-text-color-focused-highlighted: #A8C7FA !important;
  --table-add-button-border-color: #444746 !important;
  --table-border-color: #444746 !important;
  --table-drag-handle-background-active: #3b5260 !important;
  --table-drag-handle-color: #444746 !important;
  --table-header-border-color: #444746 !important;
  --table-header-color: #afafaf !important;
  --table-selection-border-color: #3b5260 !important;
  --tag-color: #A8C7FA !important;
  --tag-color-hover: #A8C7FA !important;
  --tertiary: #D3E3FD !important;
  --text-accent: #A8C7FA !important;
  --text-accent-hover: #D3E3FD !important;
  --text-bold: #e3e3e3 !important;
  --text-faint: #444746 !important;
  --text-muted: #757575 !important;
  --text-navbar: #afafaf !important;
  --text-normal: #afafaf !important;
  --titleFont: 'Roboto', 'Inter', sans-serif !important;
  --titlebar-background: #1e1f20 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #444746 !important;
  --titlebar-text-color: #757575 !important;
  --titlebar-text-color-focused: #afafaf !important;
  --vault-profile-color: #afafaf !important;
  --vault-profile-color-hover: #afafaf !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 31, 32);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(30, 31, 32);
  border-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(68, 71, 70);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 31, 32);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 71, 70);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 31, 32);
  border-left-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 25, 25);
  color: rgb(175, 175, 175);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(227, 227, 227);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(227, 227, 227) none 0px;
  text-decoration-color: rgb(227, 227, 227);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(227, 227, 227);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(227, 227, 227) none 0px;
  text-decoration-color: rgb(227, 227, 227);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body del {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(117, 117, 117);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(168, 199, 250);
  border-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body p {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
  text-decoration-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
  text-decoration-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body dt {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(68, 71, 70);
}

html[saved-theme="dark"] body blockquote {
  font-family: Roboto, Inter, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body table {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(168, 199, 250);
  border-left-color: rgb(168, 199, 250);
  border-right-color: rgb(168, 199, 250);
  border-top-color: rgb(168, 199, 250);
  color: rgb(168, 199, 250);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(68, 71, 70);
  border-left-width: 1px;
  border-right-color: rgb(68, 71, 70);
  border-right-width: 1px;
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(68, 71, 70);
  border-left-width: 1px;
  border-right-color: rgb(68, 71, 70);
  border-right-width: 1px;
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(175, 175, 175);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(168, 199, 250);
  border-left-color: rgb(168, 199, 250);
  border-right-color: rgb(168, 199, 250);
  border-top-color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(68, 71, 70);
  border-left-width: 1px;
  border-right-color: rgb(68, 71, 70);
  border-right-width: 1px;
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(68, 71, 70);
  border-left-width: 1px;
  border-right-color: rgb(68, 71, 70);
  border-right-width: 1px;
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(59, 82, 96);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  width: 18px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
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
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 31, 32);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(168, 199, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(175, 175, 175);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(117, 117, 117);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(68, 71, 70);
  font-family: Roboto, Inter, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 31, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  color: rgb(227, 227, 227);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body sub {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body summary {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body sup {
  color: rgb(175, 175, 175);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(168, 199, 250);
}`,
  },
  light: {
    base: `:root:root {
  --background-blockquote: #f1f3f4 !important;
  --background-modifier-border: #cfcfcf !important;
  --background-primary: #f3f4f6 !important;
  --background-secondary: #e3e4e6 !important;
  --background-secondary-alt: #ffffff !important;
  --bases-cards-background: #f3f4f6 !important;
  --bases-cards-radius: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #cfcfcf !important;
  --bases-embed-border-color: #cfcfcf !important;
  --bases-group-heading-property-color: #5f6368 !important;
  --bases-table-border-color: #cfcfcf !important;
  --bases-table-cell-background-active: #f3f4f6 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8f0fe !important;
  --bases-table-header-background: #f3f4f6 !important;
  --bases-table-header-color: #5f6368 !important;
  --bases-table-summary-background: #f3f4f6 !important;
  --blockquote-border-color: #e8f0fe !important;
  --blur-background: color-mix(in srgb, #f3f4f6 65%, transparent) linear-gradient(#f3f4f6, color-mix(in srgb, #f3f4f6 65%, transparent)) !important;
  --bodyFont: 'Roboto', 'Inter', sans-serif !important;
  --canvas-background: #f3f4f6 !important;
  --canvas-card-label-color: #9aa0a6 !important;
  --caret-color: #1a73e8 !important;
  --checkbox-border-color: #9aa0a6 !important;
  --checkbox-border-color-hover: #5f6368 !important;
  --checkbox-color: #e8f0fe !important;
  --checkbox-marker-color: #f3f4f6 !important;
  --checklist-done-color: #5f6368 !important;
  --code-background: #f8f9fa !important;
  --code-border-color: #dadce0 !important;
  --code-comment: #70757a !important;
  --code-function: #1a73e8 !important;
  --code-keyword: #a142f4 !important;
  --code-normal: #3c4043 !important;
  --code-operator: #5f6368 !important;
  --code-property: #188038 !important;
  --code-punctuation: #5f6368 !important;
  --code-size: 0.9em !important;
  --code-string: #d93025 !important;
  --code-value: #f29900 !important;
  --codeFont: 'Roboto', 'Inter', sans-serif !important;
  --collapse-icon-color: #9aa0a6 !important;
  --collapse-icon-color-collapsed: #1a73e8 !important;
  --dark: #2d2d2d !important;
  --darkgray: #2d2d2d !important;
  --divider-color: #cfcfcf !important;
  --divider-color-hover: #e8f0fe !important;
  --embed-block-shadow-hover: 0 0 0 1px #cfcfcf, inset 0 0 0 1px #cfcfcf !important;
  --embed-border-start: 2px solid #e8f0fe !important;
  --file-header-background: #f3f4f6 !important;
  --file-header-background-focused: #f3f4f6 !important;
  --file-header-font: 'Roboto', 'Inter', sans-serif !important;
  --flair-color: #2d2d2d !important;
  --font-family-code: 'JetBrains Mono', monospace !important;
  --font-interface: 'Roboto', 'Inter', sans-serif !important;
  --font-mermaid: 'Roboto', 'Inter', sans-serif !important;
  --font-text: 'Roboto', 'Inter', sans-serif !important;
  --footnote-divider-color: #cfcfcf !important;
  --footnote-id-color: #5f6368 !important;
  --footnote-id-color-no-occurrences: #9aa0a6 !important;
  --graph-node: #5f6368 !important;
  --graph-node-focused: #1a73e8 !important;
  --graph-node-unresolved: #9aa0a6 !important;
  --graph-text: #2d2d2d !important;
  --gray: #5f6368 !important;
  --h1-color: #202124 !important;
  --h1-size: 2.2em !important;
  --h1-weight: 400 !important;
  --h2-color: #202124 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 400 !important;
  --h3-color: #3c4043 !important;
  --h3-size: 1.2em !important;
  --h3-weight: 500 !important;
  --h4-color: #3c4043 !important;
  --h5-color: #3c4043 !important;
  --h6-color: #3c4043 !important;
  --headerFont: 'Roboto', 'Inter', sans-serif !important;
  --heading-formatting: #9aa0a6 !important;
  --hr-color: #cfcfcf !important;
  --icon-color: #5f6368 !important;
  --icon-color-active: #1a73e8 !important;
  --icon-color-focused: #2d2d2d !important;
  --icon-color-hover: #5f6368 !important;
  --inline-title-color: #202124 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: #9aa0a6 !important;
  --input-placeholder-color: #9aa0a6 !important;
  --interactive-accent: #e8f0fe !important;
  --light: #f3f4f6 !important;
  --lightgray: #e3e4e6 !important;
  --link-color: #1a73e8 !important;
  --link-color-hover: #1557b0 !important;
  --link-external-color: #1a73e8 !important;
  --link-external-color-hover: #1557b0 !important;
  --link-unresolved-color: #1a73e8 !important;
  --list-marker-color: #9aa0a6 !important;
  --list-marker-color-collapsed: #1a73e8 !important;
  --list-marker-color-hover: #5f6368 !important;
  --menu-background: #e3e4e6 !important;
  --menu-radius: 12px !important;
  --metadata-border-color: #cfcfcf !important;
  --metadata-divider-color: #cfcfcf !important;
  --metadata-input-font: 'Roboto', 'Inter', sans-serif !important;
  --metadata-input-text-color: #2d2d2d !important;
  --metadata-label-font: 'Roboto', 'Inter', sans-serif !important;
  --metadata-label-text-color: #5f6368 !important;
  --metadata-label-text-color-hover: #5f6368 !important;
  --modal-background: #f3f4f6 !important;
  --modal-radius: 24px !important;
  --nav-collapse-icon-color: #9aa0a6 !important;
  --nav-collapse-icon-color-collapsed: #9aa0a6 !important;
  --nav-heading-color: #2d2d2d !important;
  --nav-heading-color-collapsed: #9aa0a6 !important;
  --nav-heading-color-collapsed-hover: #5f6368 !important;
  --nav-heading-color-hover: #2d2d2d !important;
  --nav-indentation-guide-color: transparent !important;
  --nav-indentation-guide-width: 0px !important;
  --nav-item-color: #5f6368 !important;
  --nav-item-color-active: #2d2d2d !important;
  --nav-item-color-highlighted: #1a73e8 !important;
  --nav-item-color-hover: #2d2d2d !important;
  --nav-item-color-selected: #2d2d2d !important;
  --nav-tag-color: #9aa0a6 !important;
  --nav-tag-color-active: #5f6368 !important;
  --nav-tag-color-hover: #5f6368 !important;
  --pdf-background: #f3f4f6 !important;
  --pdf-page-background: #f3f4f6 !important;
  --pdf-sidebar-background: #f3f4f6 !important;
  --pill-border-color: #cfcfcf !important;
  --pill-color: #5f6368 !important;
  --pill-color-hover: #2d2d2d !important;
  --pill-color-remove: #9aa0a6 !important;
  --pill-color-remove-hover: #1a73e8 !important;
  --prompt-background: #f3f4f6 !important;
  --radius-l: 24px !important;
  --radius-m: 12px !important;
  --raised-background: color-mix(in srgb, #f3f4f6 65%, transparent) linear-gradient(#f3f4f6, color-mix(in srgb, #f3f4f6 65%, transparent)) !important;
  --ribbon-background: #e3e4e6 !important;
  --ribbon-background-collapsed: #f3f4f6 !important;
  --scrollbar-radius: 24px !important;
  --scrollbar-thumb: #dadce0 !important;
  --search-clear-button-color: #5f6368 !important;
  --search-icon-color: #5f6368 !important;
  --search-result-background: #f3f4f6 !important;
  --secondary: #1a73e8 !important;
  --setting-group-heading-color: #2d2d2d !important;
  --setting-items-border-color: #cfcfcf !important;
  --setting-items-radius: 24px !important;
  --sidebar-hover: rgba(26, 115, 232, 0.1) !important;
  --slider-track-background: #cfcfcf !important;
  --status-bar-background: #e3e4e6 !important;
  --status-bar-border-color: #cfcfcf !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --status-bar-text-color: #5f6368 !important;
  --suggestion-background: #f3f4f6 !important;
  --tab-background-active: #f3f4f6 !important;
  --tab-container-background: #e3e4e6 !important;
  --tab-hover: rgba(0, 0, 0, 0.04) !important;
  --tab-outline-color: #cfcfcf !important;
  --tab-switcher-background: #e3e4e6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e4e6, transparent) !important;
  --tab-text-color: #9aa0a6 !important;
  --tab-text-color-active: #5f6368 !important;
  --tab-text-color-focused: #5f6368 !important;
  --tab-text-color-focused-active: #5f6368 !important;
  --tab-text-color-focused-active-current: #2d2d2d !important;
  --tab-text-color-focused-highlighted: #1a73e8 !important;
  --table-add-button-border-color: #cfcfcf !important;
  --table-border-color: #cfcfcf !important;
  --table-drag-handle-background-active: #e8f0fe !important;
  --table-drag-handle-color: #9aa0a6 !important;
  --table-header-border-color: #cfcfcf !important;
  --table-header-color: #2d2d2d !important;
  --table-selection-border-color: #e8f0fe !important;
  --tag-color: #1a73e8 !important;
  --tag-color-hover: #1a73e8 !important;
  --tertiary: #1557b0 !important;
  --text-accent: #1a73e8 !important;
  --text-accent-hover: #1557b0 !important;
  --text-bold: #202124 !important;
  --text-faint: #9aa0a6 !important;
  --text-muted: #5f6368 !important;
  --text-navbar: #5f6368 !important;
  --text-normal: #2d2d2d !important;
  --titleFont: 'Roboto', 'Inter', sans-serif !important;
  --titlebar-background: #e3e4e6 !important;
  --titlebar-background-focused: #ffffff !important;
  --titlebar-border-color: #cfcfcf !important;
  --titlebar-text-color: #5f6368 !important;
  --titlebar-text-color-focused: #2d2d2d !important;
  --vault-profile-color: #2d2d2d !important;
  --vault-profile-color-hover: #2d2d2d !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 228, 230);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(243, 244, 246);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(243, 244, 246);
  border-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(26, 115, 232);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 228, 230);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 228, 230);
  border-left-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 244, 246);
  color: rgb(45, 45, 45);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body del {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(95, 99, 104);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(26, 115, 232);
  border-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body p {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
  text-decoration-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
  text-decoration-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body dt {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ol > li {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ul > li {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(154, 160, 166);
}

html[saved-theme="light"] body blockquote {
  font-family: Roboto, Inter, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body table {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 115, 232);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(26, 115, 232);
  border-top-color: rgb(26, 115, 232);
  color: rgb(26, 115, 232);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 207, 207);
  border-left-width: 1px;
  border-right-color: rgb(207, 207, 207);
  border-right-width: 1px;
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 207, 207);
  border-left-width: 1px;
  border-right-color: rgb(207, 207, 207);
  border-right-width: 1px;
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(45, 45, 45);
  font-family: "JetBrains Mono", monospace;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(26, 115, 232);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(26, 115, 232);
  border-top-color: rgb(26, 115, 232);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 207, 207);
  border-left-width: 1px;
  border-right-color: rgb(207, 207, 207);
  border-right-width: 1px;
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 207, 207);
  border-left-width: 1px;
  border-right-color: rgb(207, 207, 207);
  border-right-width: 1px;
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body figcaption {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(232, 240, 254);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  width: 18px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
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
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(243, 244, 246);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 228, 230);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(26, 115, 232);
}

html[saved-theme="light"] body h1 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(45, 45, 45);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(227, 228, 230);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(95, 99, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(95, 99, 104);
  stroke: rgb(95, 99, 104);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(154, 160, 166);
  font-family: Roboto, Inter, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(227, 228, 230);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(60, 64, 67);
  border-left-color: rgb(60, 64, 67);
  border-right-color: rgb(60, 64, 67);
  border-top-color: rgb(60, 64, 67);
  color: rgb(60, 64, 67);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

html[saved-theme="light"] body sub {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body summary {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body sup {
  color: rgb(45, 45, 45);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(26, 115, 232);
}`,
  },
};
