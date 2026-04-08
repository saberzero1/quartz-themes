import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-official",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --accent-h: 135 !important;
  --accent-l: 65% !important;
  --accent-s: 94% !important;
  --background-modifier-active-hover: hsla(135, 94%, 65%, 0.1) !important;
  --background-primary: #282a36 !important;
  --background-primary-alt: #44475a !important;
  --background-secondary: #20212B !important;
  --background-secondary-alt: #282a36 !important;
  --bases-cards-background: #282a36 !important;
  --bases-cards-cover-background: #44475a !important;
  --bases-group-heading-property-color: #bababa !important;
  --bases-table-cell-background-active: #282a36 !important;
  --bases-table-cell-background-disabled: #44475a !important;
  --bases-table-cell-background-selected: hsla(135, 94%, 65%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #50fa7b !important;
  --bases-table-group-background: #44475a !important;
  --bases-table-header-background: #282a36 !important;
  --bases-table-header-color: #bababa !important;
  --bases-table-summary-background: #282a36 !important;
  --blockquote-border: #b294bb !important;
  --blockquote-border-color: #50fa7b !important;
  --canvas-background: #282a36 !important;
  --canvas-color-1: 255,  85,  85 !important;
  --canvas-color-2: 255, 184, 108 !important;
  --canvas-color-3: 241, 250, 140 !important;
  --canvas-color-4: 82, 250, 124 !important;
  --canvas-color-5: 139, 233, 253 !important;
  --canvas-color-6: 189, 147, 244 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color-hover: #bababa !important;
  --checkbox-color: #50fa7b !important;
  --checkbox-color-hover: hsl(135, 94%, 61.2%) !important;
  --checkbox-marker-color: #282a36 !important;
  --checklist-done-color: #bababa !important;
  --code-background: #20212B !important;
  --code-normal: #F8F8F2 !important;
  --code-punctuation: #bababa !important;
  --collapse-icon-color-collapsed: hsl(135, 94%, 61.2%) !important;
  --color-accent: hsl(135, 94%, 65%) !important;
  --color-accent-1: hsl(135, 94%, 61.2%) !important;
  --color-accent-2: hsl(135, 94%, 68.8%) !important;
  --color-accent-hsl: 135, 94%, 65% !important;
  --color-base-70: #bababa !important;
  --color-scheme: dark !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color-hover: #50fa7b !important;
  --dracula-Comment: #6272A4 !important;
  --dracula-definition: #50FA7B !important;
  --dracula-foreground: #F8F8F2 !important;
  --dracula-function: #8BE9FD !important;
  --dracula-keyword: #FF79C6 !important;
  --dracula-number: #BD93F9 !important;
  --dracula-string: #F1FA8C !important;
  --dracula-variable: #F8F8F2 !important;
  --embed-border-start: 2px solid #50fa7b !important;
  --file-header-background: #282a36 !important;
  --file-header-background-focused: #282a36 !important;
  --flair-color: #f8f8f2 !important;
  --footnote-id-color: #bababa !important;
  --graph-node: #bababa !important;
  --graph-node-focused: hsl(135, 94%, 61.2%) !important;
  --graph-text: #f8f8f2 !important;
  --gray: #bababa !important;
  --highlight: hsla(135, 94%, 65%, 0.1) !important;
  --icon-color: #bababa !important;
  --icon-color-active: hsl(135, 94%, 61.2%) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #bababa !important;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent !important;
  --interactive-accent: #50fa7b !important;
  --interactive-accent-hover: hsl(135, 94%, 61.2%) !important;
  --interactive-accent-hsl: 135, 94%, 65% !important;
  --interactive-accent-rgb: #f1fa8c !important;
  --light: #282a36 !important;
  --lightgray: #20212B !important;
  --link-color: hsl(135, 94%, 61.2%) !important;
  --link-color-hover: hsl(135, 94%, 68.8%) !important;
  --link-external-color: hsl(135, 94%, 61.2%) !important;
  --link-external-color-hover: hsl(135, 94%, 68.8%) !important;
  --link-unresolved-color: hsl(135, 94%, 61.2%) !important;
  --link-unresolved-decoration-color: hsla(135, 94%, 65%, 0.3) !important;
  --list-marker-color-collapsed: hsl(135, 94%, 61.2%) !important;
  --list-marker-color-hover: #bababa !important;
  --markup-code: #ffb86c !important;
  --menu-background: #20212B !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: #bababa !important;
  --metadata-label-text-color-hover: #bababa !important;
  --modal-background: #282a36 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed-hover: #bababa !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-selected: hsla(135, 94%, 65%, 0.15) !important;
  --nav-item-color: #bababa !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: hsl(135, 94%, 61.2%) !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color-active: #bababa !important;
  --nav-tag-color-hover: #bababa !important;
  --pdf-background: #282a36 !important;
  --pdf-page-background: #282a36 !important;
  --pdf-sidebar-background: #282a36 !important;
  --pill-color: #bababa !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove-hover: hsl(135, 94%, 61.2%) !important;
  --prompt-background: #282a36 !important;
  --ribbon-background: #20212B !important;
  --ribbon-background-collapsed: #282a36 !important;
  --search-clear-button-color: #bababa !important;
  --search-icon-color: #bababa !important;
  --search-result-background: #282a36 !important;
  --secondary: hsl(135, 94%, 61.2%) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #44475a !important;
  --status-bar-background: #20212B !important;
  --status-bar-text-color: #bababa !important;
  --suggestion-background: #282a36 !important;
  --tab-background-active: #282a36 !important;
  --tab-container-background: #20212B !important;
  --tab-switcher-background: #20212B !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #20212B, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(135, 94%, 65%) !important;
  --tab-text-color-active: #bababa !important;
  --tab-text-color-focused: #bababa !important;
  --tab-text-color-focused-active: #bababa !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: hsl(135, 94%, 61.2%) !important;
  --table-drag-handle-background-active: #50fa7b !important;
  --table-drag-handle-color-active: #282a36 !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection: hsla(135, 94%, 65%, 0.1) !important;
  --table-selection-border-color: #50fa7b !important;
  --tag-background: hsla(135, 94%, 65%, 0.1) !important;
  --tag-background-hover: hsla(135, 94%, 65%, 0.2) !important;
  --tag-border-color: hsla(135, 94%, 65%, 0.15) !important;
  --tag-border-color-hover: hsla(135, 94%, 65%, 0.15) !important;
  --tag-color: hsl(135, 94%, 61.2%) !important;
  --tag-color-hover: hsl(135, 94%, 61.2%) !important;
  --tertiary: hsl(135, 94%, 68.8%) !important;
  --text-a: #ff79c6 !important;
  --text-a-hover: #ff79c0 !important;
  --text-accent: hsl(135, 94%, 61.2%) !important;
  --text-accent-hover: hsl(135, 94%, 68.8%) !important;
  --text-link: hsl(135, 94%, 61.2%) !important;
  --text-mark: #f1fa8c !important;
  --text-muted: #bababa !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #282a36 !important;
  --text-selection: hsla(135, 94%, 65%, 0.25) !important;
  --text-tag: #50fa7b !important;
  --text-title-h1: #bd93f9 !important;
  --text-title-h2: #ffb86c !important;
  --text-title-h3: #50fa7b !important;
  --text-title-h4: #ff5555 !important;
  --text-title-h5: #f1fa8c !important;
  --text-title-h6: #bd93f4 !important;
  --textHighlight: hsla(135, 94%, 65%, 0.1) !important;
  --titlebar-background: #20212B !important;
  --titlebar-background-focused: #20212B !important;
  --titlebar-text-color: #bababa !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  border-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(32, 33, 43);
  border-color: rgb(248, 248, 242);
}

html body .note-properties-key {
  color: rgb(186, 186, 186);
}

html body .note-properties-row {
  border-color: rgb(186, 186, 186);
}

html body .note-properties-tags {
  background-color: rgba(82, 250, 124, 0.1);
  color: rgb(63, 249, 110);
}

html body .note-properties-value {
  color: rgb(186, 186, 186);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > em, html em {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > i, html i {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration-color: rgb(80, 250, 123);
}

html body .page article p > strong, html strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  background-color: rgb(68, 71, 90);
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 250, 123);
  border-color: rgb(80, 250, 123);
}

html body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}`,
    links: `html body a.external, html footer a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration-color: rgb(63, 249, 110);
}

html body a.internal.broken {
  color: rgb(63, 249, 110);
  outline: rgb(63, 249, 110) none 0px;
  text-decoration: underline rgba(82, 250, 124, 0.3);
  text-decoration-color: rgba(82, 250, 124, 0.3);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  color: rgb(248, 248, 242);
}

html body td {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(68, 71, 90);
  border-right-color: rgb(68, 71, 90);
  border-top-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body th {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(68, 71, 90);
  border-right-color: rgb(68, 71, 90);
  border-top-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body thead {
  border-bottom-color: rgb(68, 71, 90);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgb(68, 71, 90);
}`,
    code: `html body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 33, 43);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 33, 43);
  color: rgb(248, 248, 242);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(32, 33, 43);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(32, 33, 43);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-left: 8px;
  padding-right: 4px;
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-left: 8px;
  margin-right: 4px;
  padding-left: 8px;
  padding-right: 4px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  margin-right: 0px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `html body .search > .search-button {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 33, 43);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(63, 249, 110);
}

html body h1 {
  color: rgb(189, 147, 249);
}

html body h2 {
  color: rgb(255, 184, 108);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(248, 248, 242);
}

html body h3 {
  color: rgb(80, 250, 123);
}

html body h4 {
  color: rgb(255, 85, 85);
}

html body h5 {
  color: rgb(241, 250, 140);
}

html body h6 {
  color: rgb(189, 147, 244);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(186, 186, 186);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(186, 186, 186);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    footer: `html body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(186, 186, 186);
}

html body footer ul li a {
  color: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(186, 186, 186);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(186, 186, 186);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(186, 186, 186);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .darkmode svg {
  color: rgb(186, 186, 186);
  stroke: rgb(186, 186, 186);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .metadata {
  color: rgb(186, 186, 186);
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body kbd {
  background-color: rgb(32, 33, 43);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
}

html body ul.tags > li {
  background-color: rgba(82, 250, 124, 0.1);
  border-bottom-color: rgba(82, 250, 124, 0.15);
  border-left-color: rgba(82, 250, 124, 0.15);
  border-right-color: rgba(82, 250, 124, 0.15);
  border-top-color: rgba(82, 250, 124, 0.15);
  color: rgb(80, 250, 123);
}`,
  },
  light: {},
};
