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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 31, 32);
  color: rgb(175, 175, 175);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 25, 25);
  color: rgb(175, 175, 175);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 31, 32);
  color: rgb(175, 175, 175);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 71, 70);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 31, 32);
  border-left-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}

body div#quartz-root {
  background-color: rgb(25, 25, 25);
  color: rgb(175, 175, 175);
}`,
    typography: `body .page article p > b, b {
  color: rgb(227, 227, 227);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(227, 227, 227) none 0px;
  text-decoration: rgb(227, 227, 227);
  text-decoration-color: rgb(227, 227, 227);
}

body .page article p > em, em {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body .page article p > i, i {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body .page article p > strong, strong {
  color: rgb(227, 227, 227);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(227, 227, 227) none 0px;
  text-decoration: rgb(227, 227, 227);
  text-decoration-color: rgb(227, 227, 227);
}

body .text-highlight {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body del {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: line-through rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body p {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}`,
    links: `body a.external, footer a {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
  text-decoration: underline rgb(168, 199, 250);
  text-decoration-color: rgb(168, 199, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
  text-decoration: underline rgb(168, 199, 250);
  text-decoration-color: rgb(168, 199, 250);
}

body a.internal.broken {
  color: rgb(168, 199, 250);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(168, 199, 250) none 0px;
}`,
    lists: `body dd {
  color: rgb(175, 175, 175);
}

body dt {
  color: rgb(175, 175, 175);
}

body ol > li {
  color: rgb(175, 175, 175);
}

body ol.overflow {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body ul > li {
  color: rgb(175, 175, 175);
}

body ul.overflow {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(68, 71, 70);
  text-decoration: rgb(68, 71, 70);
}

body blockquote {
  font-family: Roboto, Inter, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body table {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}

body th {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 199, 250);
  border-left-color: rgb(168, 199, 250);
  border-right-color: rgb(168, 199, 250);
  border-top-color: rgb(168, 199, 250);
  color: rgb(168, 199, 250);
  font-family: "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(168, 199, 250);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(168, 199, 250);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(168, 199, 250);
  border-left-color: rgb(168, 199, 250);
  border-right-color: rgb(168, 199, 250);
  border-top-color: rgb(168, 199, 250);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body figcaption {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body img {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body video {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

body .transclude {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(59, 82, 96);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body .transclude-inner {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(59, 82, 96);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Roboto, Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Roboto, Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(175, 175, 175);
  text-decoration: line-through rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='*'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='-'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='/'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='>'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='?'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='I'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='S'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='b'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='c'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='d'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='f'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='i'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='k'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='l'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='p'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='u'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body li.task-list-item[data-task='w'] {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

body .search > .search-container > .search-space > * {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(175, 175, 175) none 0px;
  text-decoration: rgb(175, 175, 175);
  text-decoration-color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(175, 175, 175);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 31, 32);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(175, 175, 175);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Roboto, Inter, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(168, 199, 250);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: Roboto, Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(175, 175, 175);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(175, 175, 175);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(175, 175, 175);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(168, 199, 250, 0.08);
  border-bottom-color: rgb(175, 175, 175);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: rgb(175, 175, 175);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}`,
    footer: `body footer {
  background-color: rgb(30, 31, 32);
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  border-top-left-radius: 12px;
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

body footer ul li a {
  color: rgb(117, 117, 117);
  text-decoration: rgb(117, 117, 117);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body li.section-li > .section .meta {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(175, 175, 175);
  text-decoration: rgb(175, 175, 175);
}

body ul.section-ul {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

body .breadcrumb-element p {
  color: rgb(68, 71, 70);
  font-family: Roboto, Inter, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
  color: rgb(175, 175, 175);
}

body .metadata {
  border-bottom-color: rgb(68, 71, 70);
  border-left-color: rgb(68, 71, 70);
  border-right-color: rgb(68, 71, 70);
  border-top-color: rgb(68, 71, 70);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(30, 31, 32);
}

body .page-header h2.page-title {
  color: rgb(175, 175, 175);
  font-family: Roboto, Inter, sans-serif;
}

body abbr {
  color: rgb(175, 175, 175);
  text-decoration: underline dotted rgb(175, 175, 175);
}

body details {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body input[type=text] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
  font-family: Roboto, Inter, sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(175, 175, 175);
  border-left-color: rgb(175, 175, 175);
  border-right-color: rgb(175, 175, 175);
  border-top-color: rgb(175, 175, 175);
}

body sub {
  color: rgb(175, 175, 175);
}

body summary {
  color: rgb(175, 175, 175);
}

body sup {
  color: rgb(175, 175, 175);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 228, 230);
  color: rgb(45, 45, 45);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(243, 244, 246);
  color: rgb(45, 45, 45);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 228, 230);
  color: rgb(45, 45, 45);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 207, 207);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 228, 230);
  border-left-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}

body div#quartz-root {
  background-color: rgb(243, 244, 246);
  color: rgb(45, 45, 45);
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .page article p > em, em {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body .page article p > i, i {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body .page article p > strong, strong {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .text-highlight {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body del {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: line-through rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body p {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}`,
    links: `body a.external, footer a {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
  text-decoration: underline rgb(26, 115, 232);
  text-decoration-color: rgb(26, 115, 232);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
  text-decoration: underline rgb(26, 115, 232);
  text-decoration-color: rgb(26, 115, 232);
}

body a.internal.broken {
  color: rgb(26, 115, 232);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(26, 115, 232) none 0px;
}`,
    lists: `body dd {
  color: rgb(45, 45, 45);
}

body dt {
  color: rgb(45, 45, 45);
}

body ol > li {
  color: rgb(45, 45, 45);
}

body ol.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body ul > li {
  color: rgb(45, 45, 45);
}

body ul.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(154, 160, 166);
  text-decoration: rgb(154, 160, 166);
}

body blockquote {
  font-family: Roboto, Inter, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body table {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}

body th {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 115, 232);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(26, 115, 232);
  border-top-color: rgb(26, 115, 232);
  color: rgb(26, 115, 232);
  font-family: "JetBrains Mono", monospace;
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(26, 115, 232);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(26, 115, 232);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(26, 115, 232);
  border-left-color: rgb(26, 115, 232);
  border-right-color: rgb(26, 115, 232);
  border-top-color: rgb(26, 115, 232);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body figcaption {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body img {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body video {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .footnotes {
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

body .transclude {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(232, 240, 254);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body .transclude-inner {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(232, 240, 254);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Roboto, Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Roboto, Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(45, 45, 45);
  text-decoration: line-through rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='*'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='-'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='/'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='>'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='?'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='I'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='S'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='b'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='c'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='d'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='f'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='i'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='k'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='l'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='p'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='u'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body li.task-list-item[data-task='w'] {
  color: rgb(45, 45, 45);
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(243, 244, 246);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

body .search > .search-container > .search-space > * {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
  outline: rgb(45, 45, 45) none 0px;
  text-decoration: rgb(45, 45, 45);
  text-decoration-color: rgb(45, 45, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 45, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(45, 45, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(45, 45, 45);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 228, 230);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(45, 45, 45);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Roboto, Inter, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(26, 115, 232);
}

body h1 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h2 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h3 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h4 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h5 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body h6 {
  color: rgb(32, 33, 36);
  font-family: Roboto, Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(26, 115, 232, 0.1);
  border-bottom-color: rgb(45, 45, 45);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: rgb(45, 45, 45);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}`,
    footer: `body footer {
  background-color: rgb(227, 228, 230);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  border-top-left-radius: 12px;
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

body footer ul li a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body ul.section-ul {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

body .darkmode svg {
  color: rgb(95, 99, 104);
  stroke: rgb(95, 99, 104);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

body .breadcrumb-element p {
  color: rgb(154, 160, 166);
  font-family: Roboto, Inter, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
  color: rgb(45, 45, 45);
}

body .metadata {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

body .navigation-progress {
  background-color: rgb(227, 228, 230);
}

body .page-header h2.page-title {
  color: rgb(45, 45, 45);
  font-family: Roboto, Inter, sans-serif;
}

body abbr {
  color: rgb(45, 45, 45);
  text-decoration: underline dotted rgb(45, 45, 45);
}

body details {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body input[type=text] {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
  font-family: Roboto, Inter, sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(45, 45, 45);
  border-right-color: rgb(45, 45, 45);
  border-top-color: rgb(45, 45, 45);
}

body sub {
  color: rgb(45, 45, 45);
}

body summary {
  color: rgb(45, 45, 45);
}

body sup {
  color: rgb(45, 45, 45);
}`,
  },
};
