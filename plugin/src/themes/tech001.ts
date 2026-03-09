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
  --background-blockquote: #1e1f20;
  --background-modifier-border: #444746;
  --background-primary: #191919;
  --background-secondary: #1e1f20;
  --background-secondary-alt: #000000;
  --bases-cards-background: #191919;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px #444746;
  --bases-embed-border-color: #444746;
  --bases-group-heading-property-color: #757575;
  --bases-table-border-color: #444746;
  --bases-table-cell-background-active: #191919;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3b5260;
  --bases-table-header-background: #191919;
  --bases-table-header-color: #757575;
  --bases-table-summary-background: #191919;
  --blockquote-border-color: #3b5260;
  --canvas-background: #191919;
  --canvas-card-label-color: #444746;
  --caret-color: #A8C7FA;
  --checkbox-border-color: #444746;
  --checkbox-border-color-hover: #757575;
  --checkbox-color: #3b5260;
  --checkbox-marker-color: #191919;
  --checklist-done-color: #757575;
  --code-background: #1e1f20;
  --code-border-color: #444746;
  --code-comment: #8e918f;
  --code-function: #A8C7FA;
  --code-keyword: #c58af9;
  --code-normal: #e3e3e3;
  --code-operator: #c4c7c5;
  --code-property: #81c995;
  --code-punctuation: #757575;
  --code-size: 0.9em;
  --code-string: #f28b82;
  --code-value: #fdd663;
  --collapse-icon-color: #444746;
  --collapse-icon-color-collapsed: #A8C7FA;
  --divider-color: #444746;
  --divider-color-hover: #3b5260;
  --embed-block-shadow-hover: 0 0 0 1px #444746, inset 0 0 0 1px #444746;
  --embed-border-start: 2px solid #3b5260;
  --file-header-background: #191919;
  --file-header-background-focused: #191919;
  --file-header-font: 'Roboto', 'Inter', sans-serif;
  --flair-color: #afafaf;
  --font-family-code: 'JetBrains Mono', monospace;
  --font-interface: 'Roboto', 'Inter', sans-serif;
  --font-mermaid: 'Roboto', 'Inter', sans-serif;
  --font-text: 'Roboto', 'Inter', sans-serif;
  --footnote-divider-color: #444746;
  --footnote-id-color: #757575;
  --footnote-id-color-no-occurrences: #444746;
  --graph-node: #757575;
  --graph-node-focused: #A8C7FA;
  --graph-node-unresolved: #444746;
  --graph-text: #afafaf;
  --h1-color: #ffffff;
  --h1-size: 2.2em;
  --h1-weight: 400;
  --h2-color: #ffffff;
  --h2-size: 1.6em;
  --h2-weight: 400;
  --h3-color: #f5f5f5;
  --h3-size: 1.2em;
  --h3-weight: 500;
  --h4-color: #f5f5f5;
  --h5-color: #f5f5f5;
  --h6-color: #f5f5f5;
  --heading-formatting: #444746;
  --hr-color: #444746;
  --icon-color: #757575;
  --icon-color-active: #A8C7FA;
  --icon-color-focused: #afafaf;
  --icon-color-hover: #757575;
  --inline-title-color: #ffffff;
  --inline-title-size: 2.2em;
  --inline-title-weight: 400;
  --input-date-separator: #444746;
  --input-placeholder-color: #444746;
  --interactive-accent: #3b5260;
  --link-color: #A8C7FA;
  --link-color-hover: #D3E3FD;
  --link-external-color: #A8C7FA;
  --link-external-color-hover: #D3E3FD;
  --link-unresolved-color: #A8C7FA;
  --list-marker-color: #444746;
  --list-marker-color-collapsed: #A8C7FA;
  --list-marker-color-hover: #757575;
  --menu-background: #1e1f20;
  --menu-radius: 12px;
  --metadata-border-color: #444746;
  --metadata-divider-color: #444746;
  --metadata-input-font: 'Roboto', 'Inter', sans-serif;
  --metadata-input-text-color: #afafaf;
  --metadata-label-font: 'Roboto', 'Inter', sans-serif;
  --metadata-label-text-color: #757575;
  --metadata-label-text-color-hover: #757575;
  --modal-background: #191919;
  --modal-radius: 24px;
  --nav-collapse-icon-color: #444746;
  --nav-collapse-icon-color-collapsed: #444746;
  --nav-heading-color: #afafaf;
  --nav-heading-color-collapsed: #444746;
  --nav-heading-color-collapsed-hover: #757575;
  --nav-heading-color-hover: #afafaf;
  --nav-indentation-guide-color: transparent;
  --nav-indentation-guide-width: 0px;
  --nav-item-color: #757575;
  --nav-item-color-active: #afafaf;
  --nav-item-color-highlighted: #A8C7FA;
  --nav-item-color-hover: #afafaf;
  --nav-item-color-selected: #afafaf;
  --nav-tag-color: #444746;
  --nav-tag-color-active: #757575;
  --nav-tag-color-hover: #757575;
  --pdf-background: #191919;
  --pdf-page-background: #191919;
  --pdf-shadow: 0 0 0 1px #444746;
  --pdf-sidebar-background: #191919;
  --pdf-thumbnail-shadow: 0 0 0 1px #444746;
  --pill-border-color: #444746;
  --pill-color: #757575;
  --pill-color-hover: #afafaf;
  --pill-color-remove: #444746;
  --pill-color-remove-hover: #A8C7FA;
  --prompt-background: #191919;
  --radius-l: 24px;
  --radius-m: 12px;
  --ribbon-background: #1e1f20;
  --ribbon-background-collapsed: #191919;
  --scrollbar-radius: 24px;
  --scrollbar-thumb: #444746;
  --search-clear-button-color: #757575;
  --search-icon-color: #757575;
  --search-result-background: #191919;
  --setting-group-heading-color: #afafaf;
  --setting-items-border-color: #444746;
  --setting-items-radius: 24px;
  --sidebar-hover: rgba(168, 199, 250, 0.08);
  --slider-track-background: #444746;
  --status-bar-background: #1e1f20;
  --status-bar-border-color: #444746;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #757575;
  --suggestion-background: #191919;
  --tab-background-active: #191919;
  --tab-container-background: #1e1f20;
  --tab-hover: rgba(255, 255, 255, 0.03);
  --tab-outline-color: #444746;
  --tab-switcher-background: #1e1f20;
  --tab-switcher-menubar-background: linear-gradient(to top, #1e1f20, transparent);
  --tab-text-color: #444746;
  --tab-text-color-active: #757575;
  --tab-text-color-focused: #757575;
  --tab-text-color-focused-active: #757575;
  --tab-text-color-focused-active-current: #afafaf;
  --tab-text-color-focused-highlighted: #A8C7FA;
  --table-add-button-border-color: #444746;
  --table-border-color: #444746;
  --table-drag-handle-background-active: #3b5260;
  --table-drag-handle-color: #444746;
  --table-header-border-color: #444746;
  --table-header-color: #afafaf;
  --table-selection-border-color: #3b5260;
  --tag-color: #A8C7FA;
  --tag-color-hover: #A8C7FA;
  --text-accent: #A8C7FA;
  --text-accent-hover: #D3E3FD;
  --text-bold: #e3e3e3;
  --text-faint: #444746;
  --text-muted: #757575;
  --text-navbar: #afafaf;
  --text-normal: #afafaf;
  --titlebar-background: #1e1f20;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #444746;
  --titlebar-text-color: #757575;
  --titlebar-text-color-focused: #afafaf;
  --vault-profile-color: #afafaf;
  --vault-profile-color-hover: #afafaf;
  --quartz-icon-color: currentColor;
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
  --background-blockquote: #f1f3f4;
  --background-modifier-border: #cfcfcf;
  --background-primary: #f3f4f6;
  --background-secondary: #e3e4e6;
  --background-secondary-alt: #ffffff;
  --bases-cards-background: #f3f4f6;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px #cfcfcf;
  --bases-embed-border-color: #cfcfcf;
  --bases-group-heading-property-color: #5f6368;
  --bases-table-border-color: #cfcfcf;
  --bases-table-cell-background-active: #f3f4f6;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8f0fe;
  --bases-table-header-background: #f3f4f6;
  --bases-table-header-color: #5f6368;
  --bases-table-summary-background: #f3f4f6;
  --blockquote-border-color: #e8f0fe;
  --blur-background: color-mix(in srgb, #f3f4f6 65%, transparent) linear-gradient(#f3f4f6, color-mix(in srgb, #f3f4f6 65%, transparent));
  --canvas-background: #f3f4f6;
  --canvas-card-label-color: #9aa0a6;
  --caret-color: #1a73e8;
  --checkbox-border-color: #9aa0a6;
  --checkbox-border-color-hover: #5f6368;
  --checkbox-color: #e8f0fe;
  --checkbox-marker-color: #f3f4f6;
  --checklist-done-color: #5f6368;
  --code-background: #f8f9fa;
  --code-border-color: #dadce0;
  --code-comment: #70757a;
  --code-function: #1a73e8;
  --code-keyword: #a142f4;
  --code-normal: #3c4043;
  --code-operator: #5f6368;
  --code-property: #188038;
  --code-punctuation: #5f6368;
  --code-size: 0.9em;
  --code-string: #d93025;
  --code-value: #f29900;
  --collapse-icon-color: #9aa0a6;
  --collapse-icon-color-collapsed: #1a73e8;
  --divider-color: #cfcfcf;
  --divider-color-hover: #e8f0fe;
  --embed-block-shadow-hover: 0 0 0 1px #cfcfcf, inset 0 0 0 1px #cfcfcf;
  --embed-border-start: 2px solid #e8f0fe;
  --file-header-background: #f3f4f6;
  --file-header-background-focused: #f3f4f6;
  --file-header-font: 'Roboto', 'Inter', sans-serif;
  --flair-color: #2d2d2d;
  --font-family-code: 'JetBrains Mono', monospace;
  --font-interface: 'Roboto', 'Inter', sans-serif;
  --font-mermaid: 'Roboto', 'Inter', sans-serif;
  --font-text: 'Roboto', 'Inter', sans-serif;
  --footnote-divider-color: #cfcfcf;
  --footnote-id-color: #5f6368;
  --footnote-id-color-no-occurrences: #9aa0a6;
  --graph-node: #5f6368;
  --graph-node-focused: #1a73e8;
  --graph-node-unresolved: #9aa0a6;
  --graph-text: #2d2d2d;
  --h1-color: #202124;
  --h1-size: 2.2em;
  --h1-weight: 400;
  --h2-color: #202124;
  --h2-size: 1.6em;
  --h2-weight: 400;
  --h3-color: #3c4043;
  --h3-size: 1.2em;
  --h3-weight: 500;
  --h4-color: #3c4043;
  --h5-color: #3c4043;
  --h6-color: #3c4043;
  --heading-formatting: #9aa0a6;
  --hr-color: #cfcfcf;
  --icon-color: #5f6368;
  --icon-color-active: #1a73e8;
  --icon-color-focused: #2d2d2d;
  --icon-color-hover: #5f6368;
  --inline-title-color: #202124;
  --inline-title-size: 2.2em;
  --inline-title-weight: 400;
  --input-date-separator: #9aa0a6;
  --input-placeholder-color: #9aa0a6;
  --interactive-accent: #e8f0fe;
  --link-color: #1a73e8;
  --link-color-hover: #1557b0;
  --link-external-color: #1a73e8;
  --link-external-color-hover: #1557b0;
  --link-unresolved-color: #1a73e8;
  --list-marker-color: #9aa0a6;
  --list-marker-color-collapsed: #1a73e8;
  --list-marker-color-hover: #5f6368;
  --menu-background: #e3e4e6;
  --menu-radius: 12px;
  --metadata-border-color: #cfcfcf;
  --metadata-divider-color: #cfcfcf;
  --metadata-input-font: 'Roboto', 'Inter', sans-serif;
  --metadata-input-text-color: #2d2d2d;
  --metadata-label-font: 'Roboto', 'Inter', sans-serif;
  --metadata-label-text-color: #5f6368;
  --metadata-label-text-color-hover: #5f6368;
  --modal-background: #f3f4f6;
  --modal-radius: 24px;
  --nav-collapse-icon-color: #9aa0a6;
  --nav-collapse-icon-color-collapsed: #9aa0a6;
  --nav-heading-color: #2d2d2d;
  --nav-heading-color-collapsed: #9aa0a6;
  --nav-heading-color-collapsed-hover: #5f6368;
  --nav-heading-color-hover: #2d2d2d;
  --nav-indentation-guide-color: transparent;
  --nav-indentation-guide-width: 0px;
  --nav-item-color: #5f6368;
  --nav-item-color-active: #2d2d2d;
  --nav-item-color-highlighted: #1a73e8;
  --nav-item-color-hover: #2d2d2d;
  --nav-item-color-selected: #2d2d2d;
  --nav-tag-color: #9aa0a6;
  --nav-tag-color-active: #5f6368;
  --nav-tag-color-hover: #5f6368;
  --pdf-background: #f3f4f6;
  --pdf-page-background: #f3f4f6;
  --pdf-sidebar-background: #f3f4f6;
  --pill-border-color: #cfcfcf;
  --pill-color: #5f6368;
  --pill-color-hover: #2d2d2d;
  --pill-color-remove: #9aa0a6;
  --pill-color-remove-hover: #1a73e8;
  --prompt-background: #f3f4f6;
  --radius-l: 24px;
  --radius-m: 12px;
  --raised-background: color-mix(in srgb, #f3f4f6 65%, transparent) linear-gradient(#f3f4f6, color-mix(in srgb, #f3f4f6 65%, transparent));
  --ribbon-background: #e3e4e6;
  --ribbon-background-collapsed: #f3f4f6;
  --scrollbar-radius: 24px;
  --scrollbar-thumb: #dadce0;
  --search-clear-button-color: #5f6368;
  --search-icon-color: #5f6368;
  --search-result-background: #f3f4f6;
  --setting-group-heading-color: #2d2d2d;
  --setting-items-border-color: #cfcfcf;
  --setting-items-radius: 24px;
  --sidebar-hover: rgba(26, 115, 232, 0.1);
  --slider-track-background: #cfcfcf;
  --status-bar-background: #e3e4e6;
  --status-bar-border-color: #cfcfcf;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #5f6368;
  --suggestion-background: #f3f4f6;
  --tab-background-active: #f3f4f6;
  --tab-container-background: #e3e4e6;
  --tab-hover: rgba(0, 0, 0, 0.04);
  --tab-outline-color: #cfcfcf;
  --tab-switcher-background: #e3e4e6;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e4e6, transparent);
  --tab-text-color: #9aa0a6;
  --tab-text-color-active: #5f6368;
  --tab-text-color-focused: #5f6368;
  --tab-text-color-focused-active: #5f6368;
  --tab-text-color-focused-active-current: #2d2d2d;
  --tab-text-color-focused-highlighted: #1a73e8;
  --table-add-button-border-color: #cfcfcf;
  --table-border-color: #cfcfcf;
  --table-drag-handle-background-active: #e8f0fe;
  --table-drag-handle-color: #9aa0a6;
  --table-header-border-color: #cfcfcf;
  --table-header-color: #2d2d2d;
  --table-selection-border-color: #e8f0fe;
  --tag-color: #1a73e8;
  --tag-color-hover: #1a73e8;
  --text-accent: #1a73e8;
  --text-accent-hover: #1557b0;
  --text-bold: #202124;
  --text-faint: #9aa0a6;
  --text-muted: #5f6368;
  --text-navbar: #5f6368;
  --text-normal: #2d2d2d;
  --titlebar-background: #e3e4e6;
  --titlebar-background-focused: #ffffff;
  --titlebar-border-color: #cfcfcf;
  --titlebar-text-color: #5f6368;
  --titlebar-text-color-focused: #2d2d2d;
  --vault-profile-color: #2d2d2d;
  --vault-profile-color-hover: #2d2d2d;
  --quartz-icon-color: currentColor;
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
