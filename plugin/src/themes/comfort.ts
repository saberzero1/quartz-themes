import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "comfort", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --aqua: #89bace !important;
  --background-modifier-border: rgba(0, 0, 0, 0) !important;
  --background-modifier-border-focus: #add4ad !important;
  --background-modifier-cover: #f6f9ec !important;
  --background-modifier-error: #f1d4d9 !important;
  --background-modifier-error-hover: #e5bec5 !important;
  --background-modifier-error-rgb: 197,
    65,
    40 !important;
  --background-modifier-hover: #a3d5aa !important;
  --background-primary: #fcfef3 !important;
  --background-secondary: #f8f6ea !important;
  --background-secondary-alt: #a3d5aa !important;
  --bases-cards-background: #fcfef3 !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0) !important;
  --bases-embed-border-color: rgba(0, 0, 0, 0) !important;
  --bases-group-heading-property-color: #8d9c8d !important;
  --bases-table-border-color: rgba(0, 0, 0, 0) !important;
  --bases-table-cell-background-active: #fcfef3 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #add4ad !important;
  --bases-table-header-background: #fcfef3 !important;
  --bases-table-header-background-hover: #a3d5aa !important;
  --bases-table-header-color: #8d9c8d !important;
  --bases-table-summary-background: #fcfef3 !important;
  --bases-table-summary-background-hover: #a3d5aa !important;
  --blue: #3d74f6 !important;
  --blur-background: color-mix(in srgb, #fcfef3 65%, transparent) linear-gradient(#fcfef3, color-mix(in srgb, #fcfef3 65%, transparent)) !important;
  --bodyFont: "宋体",SimSun !important;
  --button-radius: 4px !important;
  --callout-bug: 197,
    65,
    40;
  --callout-error: 197,
    65,
    40;
  --callout-fail: 197,
    65,
    40;
  --canvas-background: #fcfef3 !important;
  --canvas-color-1: 197,
    65,
    40 !important;
  --caret-color: #6f6e6a !important;
  --checkbox-border-color-hover: #8d9c8d !important;
  --checkbox-marker-color: #fcfef3 !important;
  --checklist-done-color: #8d9c8d !important;
  --code-border-color: rgba(0, 0, 0, 0) !important;
  --code-bracket-background: #a3d5aa !important;
  --code-normal: #6f6e6a !important;
  --code-punctuation: #8d9c8d !important;
  --codeFont: "宋体",SimSun !important;
  --color-red-rgb: 197,
    65,
    40 !important;
  --dark: #6f6e6a !important;
  --darkgray: #6f6e6a !important;
  --divider-color: rgba(0, 0, 0, 0) !important;
  --dropdown-background: #eff1df !important;
  --dropdown-background-hover: #e5e8c2 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0), inset 0 0 0 1px rgba(0, 0, 0, 0) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #fcfef3 !important;
  --file-header-background-focused: #fcfef3 !important;
  --flair-background: #eff1df !important;
  --flair-color: #6f6e6a !important;
  --font-mermaid: "宋体",SimSun !important;
  --font-text: "宋体",SimSun !important;
  --footnote-divider-color: rgba(0, 0, 0, 0) !important;
  --footnote-id-color: #8d9c8d !important;
  --footnote-input-background-active: #a3d5aa !important;
  --graph-node: #8d9c8d !important;
  --graph-text: #6f6e6a !important;
  --gray: #8d9c8d !important;
  --gray-1: #b0c0aa !important;
  --gray-2: #a0a5b8 !important;
  --green: #afe4ae !important;
  --headerFont: "宋体",SimSun !important;
  --highlight: #a3d5aa !important;
  --hr-color: rgba(0, 0, 0, 0) !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #edf4f0 !important;
  --icon-color-focused: #edf4f0 !important;
  --icon-color-hover: #e6f1e9 !important;
  --input-radius: 4px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-hover: #e5e8c2 !important;
  --interactive-normal: #eff1df !important;
  --light: #fcfef3 !important;
  --lightgray: #f8f6ea !important;
  --link-external-color: #5273a5 !important;
  --link-external-color-hover: #1a4078 !important;
  --list-marker-color-hover: #8d9c8d !important;
  --menu-background: #f8f6ea !important;
  --menu-radius: 6px !important;
  --metadata-border-color: rgba(0, 0, 0, 0) !important;
  --metadata-divider-color: rgba(0, 0, 0, 0) !important;
  --metadata-input-background-active: #a3d5aa !important;
  --metadata-input-text-color: #6f6e6a !important;
  --metadata-label-background-active: #a3d5aa !important;
  --metadata-label-text-color: #8d9c8d !important;
  --metadata-label-text-color-hover: #8d9c8d !important;
  --metadata-property-background-active: #a3d5aa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #add4ad !important;
  --modal-background: #fcfef3 !important;
  --modal-border-color: rgba(0, 0, 0, 0) !important;
  --modal-radius: 8px !important;
  --nav-heading-color: #6f6e6a !important;
  --nav-heading-color-collapsed-hover: #8d9c8d !important;
  --nav-heading-color-hover: #6f6e6a !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0) !important;
  --nav-item-background-active: #a3d5aa !important;
  --nav-item-background-hover: #a3d5aa !important;
  --nav-item-color: #626666 !important;
  --nav-item-color-active: #edf4f0 !important;
  --nav-item-color-hover: #edf4f0 !important;
  --nav-item-color-selected: #6f6e6a !important;
  --nav-tag-color-active: #8d9c8d !important;
  --nav-tag-color-hover: #8d9c8d !important;
  --orange: #c1a58c !important;
  --panel-border-color: rgba(0, 0, 0, 0) !important;
  --pdf-background: #fcfef3 !important;
  --pdf-page-background: #fcfef3 !important;
  --pdf-sidebar-background: #fcfef3 !important;
  --pill-border-color: rgba(0, 0, 0, 0) !important;
  --pill-color: #8d9c8d !important;
  --pill-color-hover: #6f6e6a !important;
  --prompt-background: #fcfef3 !important;
  --purple: #ce82cd !important;
  --radius-l: 8px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, #fcfef3 65%, transparent) linear-gradient(#fcfef3, color-mix(in srgb, #fcfef3 65%, transparent)) !important;
  --red: #cd8f88 !important;
  --ribbon-background-collapsed: #fcfef3 !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #8d9c8d !important;
  --search-icon-color: #8d9c8d !important;
  --search-result-background: #fcfef3 !important;
  --setting-group-heading-color: #6f6e6a !important;
  --setting-items-border-color: rgba(0, 0, 0, 0) !important;
  --setting-items-radius: 8px !important;
  --slider-track-background: #eff1e1 !important;
  --status-bar-background: #f8f6ea !important;
  --status-bar-border-color: rgba(0, 0, 0, 0) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: #8d9c8d !important;
  --suggestion-background: #fcfef3 !important;
  --tab-background-active: #fcfef3 !important;
  --tab-container-background: #a3d5aa !important;
  --tab-divider-color: #b4d8b4 !important;
  --tab-outline-color: #f8f6ea !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #f8f6ea !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f6ea, transparent) !important;
  --tab-text-color: #e6f1e9 !important;
  --tab-text-color-active: #8d9c8d !important;
  --tab-text-color-focused: #e6f1e9 !important;
  --tab-text-color-focused-active: #8d9c8d !important;
  --tab-text-color-focused-active-current: #66876b !important;
  --table-add-button-border-color: rgba(0, 0, 0, 0) !important;
  --table-border-color: rgba(0, 0, 0, 0) !important;
  --table-header-border-color: rgba(0, 0, 0, 0) !important;
  --table-header-color: #6f6e6a !important;
  --tag-background: #d4e4f1 !important;
  --tag-color: #fcfdfe !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --text-muted: #8d9c8d !important;
  --text-normal: #6f6e6a !important;
  --textHighlight: #a3d5aa !important;
  --titleFont: "宋体",SimSun !important;
  --titlebar-background: #a3d5aa !important;
  --titlebar-background-focused: #a3d5aa !important;
  --titlebar-border-color: rgba(0, 0, 0, 0) !important;
  --titlebar-text-color: #8d9c8d !important;
  --titlebar-text-color-focused: #6f6e6a !important;
  --toggle-radius: 4px !important;
  --vault-name-color: #636867 !important;
  --vault-profile-color: #6f6e6a !important;
  --vault-profile-color-hover: #6f6e6a !important;
  --yellow: #e1d5ac !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(252, 254, 243);
  color: rgb(111, 110, 106);
}

html body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

html body .canvas-node {
  border-color: rgb(111, 110, 106);
}

html body .canvas-node-content {
  color: rgb(111, 110, 106);
}

html body .canvas-node-file {
  color: rgb(111, 110, 106);
}

html body .canvas-node-group {
  border-color: rgb(111, 110, 106);
}

html body .canvas-sidebar {
  background-color: rgb(252, 254, 243);
  border-color: rgb(111, 110, 106);
}

html body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html body .note-properties-key {
  color: rgb(141, 156, 141);
}

html body .note-properties-row {
  border-color: rgb(141, 156, 141);
}

html body .note-properties-tags {
  background-color: rgb(212, 228, 241);
  border-radius: 4px;
  color: rgb(252, 253, 254);
}

html body .note-properties-value {
  color: rgb(141, 156, 141);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 246, 234);
  color: rgb(111, 110, 106);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(163, 213, 170);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

html body div#quartz-root {
  background-color: rgb(252, 254, 243);
  color: rgb(111, 110, 106);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body .page article p > em, html em {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body .page article p > i, html i {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body .page article p > strong, html strong {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body .text-highlight {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body del {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body h1.article-title {
  color: rgb(111, 110, 106);
}

html body p {
  color: rgb(141, 156, 141);
  font-family: "Times New Roman";
  outline: rgb(141, 156, 141) none 0px;
  text-decoration-color: rgb(141, 156, 141);
}`,
    links: `html body a.external, html footer a {
  color: rgb(82, 115, 165);
  font-family: 宋体, SimSun;
  outline: rgb(82, 115, 165) none 0px;
  text-decoration-color: rgb(82, 115, 165);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: 宋体, SimSun;
}

html body a.internal.broken {
  font-family: 宋体, SimSun;
}`,
    lists: `html body dd {
  color: rgb(111, 110, 106);
}

html body dt {
  color: rgb(111, 110, 106);
}

html body ol > li {
  color: rgb(111, 110, 106);
}

html body ol.overflow {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body ul > li {
  color: rgb(111, 110, 106);
}

html body ul.overflow {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    blockquotes: `html body blockquote {
  font-family: 宋体, SimSun;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body table {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  width: 180.766px;
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

html body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}`,
    code: `html body code {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(111, 110, 106);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(243, 247, 228);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body figcaption {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body figure {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body img {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body video {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(141, 156, 141);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .footnotes {
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body .transclude {
  border-bottom-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body .transclude-inner {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: 宋体, SimSun;
}

html body .katex-display > .katex > .katex-html {
  font-family: 宋体, SimSun;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(111, 110, 106);
  text-decoration-color: rgb(111, 110, 106);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="bug"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html body .callout[data-callout="failure"] {
  --callout-color: 197,
    65,
    40;
  background-color: rgba(197, 65, 40, 0.1);
  border-bottom-color: rgba(197, 65, 40, 0.25);
  border-left-color: rgba(197, 65, 40, 0.25);
  border-right-color: rgba(197, 65, 40, 0.25);
  border-top-color: rgba(197, 65, 40, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(111, 110, 106);
  font-family: "Times New Roman";
}

html body .search > .search-container > .search-space {
  background-color: rgb(252, 254, 243);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
  outline: rgb(111, 110, 106) none 0px;
  text-decoration-color: rgb(111, 110, 106);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(111, 110, 106);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(111, 110, 106);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 246, 234);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(163, 213, 170);
  color: rgb(111, 110, 106);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(212, 228, 241);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body a.internal.tag-link::before {
  color: rgb(252, 253, 254);
}

html body h1 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h2 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h3 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h4 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h5 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body h6 {
  color: rgb(111, 110, 106);
  font-family: 宋体, SimSun;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}

html body ::-webkit-scrollbar {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-track {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}

html body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(111, 110, 106);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html body footer {
  background-color: rgb(248, 246, 234);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  color: rgb(141, 156, 141);
  font-family: "Times New Roman";
}

html body footer ul li a {
  color: rgb(141, 156, 141);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(111, 110, 106);
  font-family: "Times New Roman";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(98, 102, 102);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body li.section-li > .section .meta {
  color: rgb(98, 102, 102);
  font-family: "Times New Roman";
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(98, 102, 102);
}

html body ul.section-ul {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}`,
    darkmode: `html body .darkmode {
  background-color: rgb(163, 213, 170);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(141, 156, 141);
  font-family: 宋体, SimSun;
}

html body .metadata-properties {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
  font-family: 宋体, SimSun;
}

html body .navigation-progress {
  background-color: rgb(248, 246, 234);
}

html body .page-header h2.page-title {
  color: rgb(111, 110, 106);
}

html body abbr {
  color: rgb(111, 110, 106);
}

html body details {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body input[type=text] {
  border-bottom-color: rgb(141, 156, 141);
  border-left-color: rgb(141, 156, 141);
  border-right-color: rgb(141, 156, 141);
  border-top-color: rgb(141, 156, 141);
  color: rgb(141, 156, 141);
}

html body kbd {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
  color: rgb(111, 110, 106);
}

html body progress {
  border-bottom-color: rgb(111, 110, 106);
  border-left-color: rgb(111, 110, 106);
  border-right-color: rgb(111, 110, 106);
  border-top-color: rgb(111, 110, 106);
}

html body sub {
  color: rgb(111, 110, 106);
}

html body summary {
  color: rgb(111, 110, 106);
}

html body sup {
  color: rgb(111, 110, 106);
}

html body ul.tags > li {
  background-color: rgb(212, 228, 241);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(252, 253, 254);
}`,
  },
};
