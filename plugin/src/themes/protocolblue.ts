import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "protocolblue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 180 !important;
  --accent-l: 30% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(180, 100%, 30%, 0.1) !important;
  --background-modifier-border: #393939 !important;
  --background-modifier-error: #ff5c5c !important;
  --background-modifier-error-hover: #ff5c5c !important;
  --background-modifier-success: #37c991 !important;
  --background-primary: #242424 !important;
  --background-secondary: #242424 !important;
  --background-secondary-alt: #242424 !important;
  --bases-cards-background: #242424 !important;
  --bases-cards-shadow: 0 0 0 1px #393939 !important;
  --bases-embed-border-color: #393939 !important;
  --bases-group-heading-property-color: #e5e9f0 !important;
  --bases-table-border-color: #393939 !important;
  --bases-table-cell-background-active: #242424 !important;
  --bases-table-cell-background-selected: hsla(180, 100%, 30%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 100%, 30%) !important;
  --bases-table-header-background: #242424 !important;
  --bases-table-header-color: #e5e9f0 !important;
  --bases-table-row-background-hover: #5e81ac !important;
  --bases-table-summary-background: #242424 !important;
  --blockquote-border-color: hsl(180, 100%, 30%) !important;
  --blue: #63c8da !important;
  --bold-color: #ffffff !important;
  --bold-weight: 600 !important;
  --calendar-background-hover: #242424 !important;
  --calendar-hover: #009999 !important;
  --calendar-today: #8fbcbb !important;
  --calendar-week: #8fbcbb !important;
  --callout-default: #5e81ac;
  --callout-important: #88c0d0;
  --callout-info: #5e81ac;
  --callout-summary: #88c0d0;
  --callout-tip: #88c0d0;
  --callout-todo: #5e81ac;
  --canvas-background: #242424 !important;
  --canvas-card-label-color: #d8dee9 !important;
  --canvas-color-5: #88c0d0 !important;
  --caret-color: #eceff4 !important;
  --checkbox-border-color: #ffffff !important;
  --checkbox-border-color-hover: #8fbcbb !important;
  --checkbox-color: #8fbcbb !important;
  --checkbox-color-hover: #ffffff !important;
  --checkbox-marker-color: #242424 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #8fbcbb !important;
  --code-background: #202020 !important;
  --code-border-color: #393939 !important;
  --code-comment: #d8dee9 !important;
  --code-function: #eeec79 !important;
  --code-important: #ff9035 !important;
  --code-keyword: #eb95db !important;
  --code-normal: #88c0d0 !important;
  --code-operator: #ff5c5c !important;
  --code-property: #88c0d0 !important;
  --code-punctuation: #e5e9f0 !important;
  --code-string: #37c991 !important;
  --code-tag: #ff5c5c !important;
  --code-value: #d469c1 !important;
  --collapse-icon-color: #d8dee9 !important;
  --collapse-icon-color-collapsed: #009999 !important;
  --color-accent: hsl(180, 100%, 30%) !important;
  --color-accent-1: hsl(177, 102%, 34.5%) !important;
  --color-accent-2: hsl(175, 105%, 38.7%) !important;
  --color-accent-hsl: 180, 100%, 30% !important;
  --color-blue: #63c8da !important;
  --color-blue-rgb: #5e81ac !important;
  --color-cyan: #88c0d0 !important;
  --color-cyan-rgb: #88c0d0 !important;
  --color-frost0: #8fbcbb !important;
  --color-frost0-rgb: #8fbcbb !important;
  --color-frost1: #88c0d0 !important;
  --color-frost1-rgb: #88c0d0 !important;
  --color-green: #37c991 !important;
  --color-light3: #ffffff !important;
  --color-light3-rgb: #ffffff !important;
  --color-orange: #ff9035 !important;
  --color-pink: #eb95db !important;
  --color-purple: #d469c1 !important;
  --color-red: #ff5c5c !important;
  --color-teal0: #009999 !important;
  --color-teal0-rgb: #009999 !important;
  --color-yellow: #eeec79 !important;
  --cursor-line-background: rgba(#009999, 0.2) !important;
  --dark: #eceff4 !important;
  --dark0: #242424 !important;
  --dark1: #202020 !important;
  --dark2: #393939 !important;
  --dark3: #424242 !important;
  --darkgray: #eceff4 !important;
  --dataview-key: #d8dee9 !important;
  --dataview-key-background: rgba(#81a1c1, 0.3) !important;
  --dataview-value: #d8dee9 !important;
  --dataview-value-background: rgba(#009999, 0.3) !important;
  --divider-color: #393939 !important;
  --divider-color-hover: hsl(180, 100%, 30%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #393939, inset 0 0 0 1px #393939 !important;
  --embed-border-left: 6px double hsl(180, 100%, 30%) !important;
  --embed-border-start: 2px solid hsl(180, 100%, 30%) !important;
  --file-header-background: #242424 !important;
  --file-header-background-focused: #242424 !important;
  --flair-color: #eceff4 !important;
  --flashing-background: #007991 !important;
  --footnote-divider-color: #393939 !important;
  --footnote-id-color: #e5e9f0 !important;
  --footnote-id-color-no-occurrences: #d8dee9 !important;
  --frost0: #8fbcbb !important;
  --frost1: #88c0d0 !important;
  --frost3: #81a1c1 !important;
  --frost5: #5e81ac !important;
  --graph-line: #393939 !important;
  --graph-node: #00fff2 !important;
  --graph-node-attachment: #00c8ff !important;
  --graph-node-focused: #009999 !important;
  --graph-node-tag: #007991 !important;
  --graph-node-unresolved: #d8dee9 !important;
  --graph-text: #eceff4 !important;
  --gray: #e5e9f0 !important;
  --green: #37c991 !important;
  --h1-color: #009999 !important;
  --h2-color: #8fbcbb !important;
  --h3-color: #88c0d0 !important;
  --h4-color: #3aa0b9 !important;
  --h5-color: #007991 !important;
  --h6-color: #ffffff !important;
  --heading-formatting: #d8dee9 !important;
  --highlight: #8fbcbb !important;
  --hr-color: #393939 !important;
  --icon-color: #e5e9f0 !important;
  --icon-color-active: #009999 !important;
  --icon-color-focused: #009999 !important;
  --icon-color-hover: #009999 !important;
  --inline-title-color: #8fbcbb !important;
  --input-date-separator: #d8dee9 !important;
  --input-placeholder-color: #d8dee9 !important;
  --interactive-accent: hsl(180, 100%, 30%) !important;
  --interactive-accent-hover: hsl(177, 102%, 34.5%) !important;
  --interactive-accent-hsl: 180, 100%, 30% !important;
  --italic-color: #ffffff !important;
  --light: #242424 !important;
  --light0: #d8dee9 !important;
  --light1: #e5e9f0 !important;
  --light2: #eceff4 !important;
  --light3: #ffffff !important;
  --lightgray: #242424 !important;
  --link-color: #009999 !important;
  --link-color-hover: #ffffff !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #009999 !important;
  --link-external-color-hover: #ffffff !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #009999 !important;
  --link-unresolved-decoration-color: hsla(180, 100%, 30%, 0.3) !important;
  --link-url: #ffffff !important;
  --list-marker-color: #d8dee9 !important;
  --list-marker-color-collapsed: #009999 !important;
  --list-marker-color-hover: #e5e9f0 !important;
  --menu-background: #242424 !important;
  --mermaid-exclude: #242424 !important;
  --mermaid-loopline: #88c0d0 !important;
  --mermaid-note: #5e81ac !important;
  --mermaid-seqnum: #242424 !important;
  --metadata-border-color: #393939 !important;
  --metadata-divider-color: #393939 !important;
  --metadata-input-text-color: #eceff4 !important;
  --metadata-label-text-color: #e5e9f0 !important;
  --metadata-label-text-color-hover: #e5e9f0 !important;
  --modal-background: #242424 !important;
  --nav-collapse-icon-color: #d8dee9 !important;
  --nav-collapse-icon-color-collapsed: #d8dee9 !important;
  --nav-file-tag: #00fff2 !important;
  --nav-heading-color: #eceff4 !important;
  --nav-heading-color-collapsed: #d8dee9 !important;
  --nav-heading-color-collapsed-hover: #e5e9f0 !important;
  --nav-heading-color-hover: #eceff4 !important;
  --nav-item-background-selected: hsla(180, 100%, 30%, 0.15) !important;
  --nav-item-color: #e5e9f0 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #009999 !important;
  --nav-item-color-hover: #009999 !important;
  --nav-item-color-selected: #eceff4 !important;
  --nav-tag-color: #d8dee9 !important;
  --nav-tag-color-active: #e5e9f0 !important;
  --nav-tag-color-hover: #e5e9f0 !important;
  --orange: #ff9035 !important;
  --pdf-background: #242424 !important;
  --pdf-page-background: #242424 !important;
  --pdf-shadow: 0 0 0 1px #393939 !important;
  --pdf-sidebar-background: #242424 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #393939 !important;
  --pill-border-color: #393939 !important;
  --pill-color: #e5e9f0 !important;
  --pill-color-hover: #eceff4 !important;
  --pill-color-remove: #d8dee9 !important;
  --pill-color-remove-hover: #009999 !important;
  --pink: #eb95db !important;
  --prompt-background: #242424 !important;
  --purple: #d469c1 !important;
  --red: #ff5c5c !important;
  --ribbon-background: #242424 !important;
  --ribbon-background-collapsed: #242424 !important;
  --search-clear-button-color: #e5e9f0 !important;
  --search-icon-color: #e5e9f0 !important;
  --search-result-background: #242424 !important;
  --secondary: #009999 !important;
  --setting-group-heading-color: #eceff4 !important;
  --setting-items-border-color: #393939 !important;
  --slider-track-background: #393939 !important;
  --status-bar-background: #242424 !important;
  --status-bar-border-color: #393939 !important;
  --status-bar-text-color: #e5e9f0 !important;
  --suggestion-background: #242424 !important;
  --sync-avatar-color-1: #ff5c5c !important;
  --sync-avatar-color-2: #ff9035 !important;
  --sync-avatar-color-3: #eeec79 !important;
  --sync-avatar-color-4: #37c991 !important;
  --sync-avatar-color-5: #88c0d0 !important;
  --sync-avatar-color-6: #63c8da !important;
  --sync-avatar-color-7: #d469c1 !important;
  --sync-avatar-color-8: #eb95db !important;
  --tab-background-active: #242424 !important;
  --tab-container-background: #242424 !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #393939 !important;
  --tab-switcher-background: #242424 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(180, 100%, 30%) !important;
  --tab-text-color: #d8dee9 !important;
  --tab-text-color-active: #e5e9f0 !important;
  --tab-text-color-focused: #e5e9f0 !important;
  --tab-text-color-focused-active: #ffffff !important;
  --tab-text-color-focused-active-current: #009999 !important;
  --tab-text-color-focused-highlighted: #009999 !important;
  --table-add-button-border-color: #393939 !important;
  --table-border-color: #393939 !important;
  --table-drag-handle-background-active: hsl(180, 100%, 30%) !important;
  --table-drag-handle-color: #d8dee9 !important;
  --table-header-background: #007991 !important;
  --table-header-background-hover: #3aa0b9 !important;
  --table-header-border-color: #393939 !important;
  --table-header-color: #eceff4 !important;
  --table-row-background-hover: #5e81ac !important;
  --table-row-even-background: #424242 !important;
  --table-row-odd-background: #393939 !important;
  --table-selection: hsla(180, 100%, 30%, 0.1) !important;
  --table-selection-border-color: hsl(180, 100%, 30%) !important;
  --tag-background: #242424 !important;
  --tag-background-hover: #242424 !important;
  --tag-border-color: hsla(180, 100%, 30%, 0.15) !important;
  --tag-border-color-hover: hsla(180, 100%, 30%, 0.15) !important;
  --tag-color: #8fbcbb !important;
  --tag-color-hover: #009999 !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --teal0: #009999 !important;
  --teal1: #00c8ff !important;
  --teal2: #00fff2 !important;
  --teal3: #3aa0b9 !important;
  --teal4: #007991 !important;
  --tertiary: #ffffff !important;
  --text-accent: #009999 !important;
  --text-accent-hover: #ffffff !important;
  --text-error: #ff5c5c !important;
  --text-faint: #d8dee9 !important;
  --text-highlight-bg: #8fbcbb !important;
  --text-highlight-fg: #242424 !important;
  --text-muted: #e5e9f0 !important;
  --text-normal: #eceff4 !important;
  --text-selection: #007991 !important;
  --text-success: #37c991 !important;
  --text-warning: #ff9035 !important;
  --textHighlight: #8fbcbb !important;
  --titlebar-background: #242424 !important;
  --titlebar-background-focused: #242424 !important;
  --titlebar-border-color: #393939 !important;
  --titlebar-text-color: #e5e9f0 !important;
  --titlebar-text-color-focused: #009999 !important;
  --vault-profile-color: #eceff4 !important;
  --vault-profile-color-hover: #eceff4 !important;
  --yellow: #eeec79 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

html body .bases-table {
  border-color: rgb(36, 36, 36);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(57, 57, 57);
}

html body .bases-table thead th {
  border-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

html body .canvas-node {
  border-color: rgb(236, 239, 244);
}

html body .canvas-node-content {
  color: rgb(236, 239, 244);
}

html body .canvas-node-file {
  color: rgb(236, 239, 244);
}

html body .canvas-node-group {
  border-color: rgb(236, 239, 244);
}

html body .canvas-sidebar {
  background-color: rgb(36, 36, 36);
  border-color: rgb(236, 239, 244);
}

html body .note-properties {
  border-color: rgb(57, 57, 57);
}

html body .note-properties-key {
  color: rgb(229, 233, 240);
}

html body .note-properties-row {
  border-color: rgb(229, 233, 240);
}

html body .note-properties-tags {
  background-color: rgb(36, 36, 36);
  border-radius: 7px;
  color: rgb(143, 188, 187);
}

html body .note-properties-value {
  color: rgb(229, 233, 240);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 57, 57);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

html body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(143, 188, 187);
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration-color: rgb(36, 36, 36);
}

html body del {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
}

html body h1.article-title {
  color: rgb(236, 239, 244);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(143, 188, 187);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(143, 188, 187);
  border-color: rgb(143, 188, 187);
}

html body p {
  color: rgb(229, 233, 240);
  outline: rgb(229, 233, 240) none 0px;
  text-decoration-color: rgb(229, 233, 240);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration-color: rgb(0, 153, 153);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration-color: rgb(0, 153, 153);
}

html body a.internal.broken {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration: rgba(0, 153, 153, 0.3);
  text-decoration-color: rgba(0, 153, 153, 0.3);
}`,
    lists: `html body dd {
  color: rgb(236, 239, 244);
}

html body dt {
  color: rgb(236, 239, 244);
}

html body ol > li {
  color: rgb(236, 239, 244);
}

html body ol.overflow {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body ul > li {
  color: rgb(236, 239, 244);
}

html body ul.overflow {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(216, 222, 233);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body table {
  border-bottom-color: rgb(36, 36, 36);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(36, 36, 36);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(36, 36, 36);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(36, 36, 36);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(236, 239, 244);
}

html body tbody tr:nth-child(even) {
  background-color: rgb(66, 66, 66);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(57, 57, 57);
}

html body td {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

html body th {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

html body thead {
  border-bottom-color: rgb(57, 57, 57);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html body tr {
  background-color: rgb(0, 121, 145);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    code: `html body code {
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

html body pre > code > [data-line] {
  border-left-color: rgb(238, 236, 121);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(238, 236, 121);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(238, 236, 121);
  border-left-color: rgb(238, 236, 121);
  border-right-color: rgb(238, 236, 121);
  border-top-color: rgb(238, 236, 121);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

html body pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}`,
    images: `html body audio {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body figcaption {
  color: rgb(236, 239, 244);
}

html body figure {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body img {
  border-bottom-color: rgb(0, 153, 153);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(0, 153, 153);
  border-top-color: rgb(0, 153, 153);
}

html body video {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

html body .footnotes {
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html body .transclude {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .transclude-inner {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(143, 188, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(143, 188, 187);
  border-right-color: rgb(143, 188, 187);
  border-top-color: rgb(143, 188, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(236, 239, 244);
}

html body .callout[data-callout="abstract"] {
  --callout-color: #88c0d0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .callout[data-callout="note"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: #88c0d0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .callout[data-callout="todo"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgba(0, 153, 153, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 153, 153, 0.15);
  border-right-color: rgba(0, 153, 153, 0.15);
  border-top-color: rgba(0, 153, 153, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html body a.internal.tag-link::before {
  color: rgb(143, 188, 187);
}

html body h1 {
  color: rgb(0, 153, 153);
}

html body h2 {
  color: rgb(143, 188, 187);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(143, 188, 187);
}

html body h3 {
  color: rgb(136, 192, 208);
}

html body h4 {
  color: rgb(58, 160, 185);
}

html body h5 {
  color: rgb(0, 121, 145);
}

html body h6 {
  color: rgb(255, 255, 255);
}

html body hr {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
}`,
    scrollbars: `html body .callout {
  --callout-color: #5e81ac;
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(229, 233, 240);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(229, 233, 240);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(236, 239, 244);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}`,
    footer: `html body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(229, 233, 240);
}

html body footer ul li a {
  color: rgb(229, 233, 240);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(236, 239, 244);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(229, 233, 240);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body li.section-li > .section .meta {
  color: rgb(229, 233, 240);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
}

html body ul.section-ul {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html body .darkmode svg {
  color: rgb(229, 233, 240);
  stroke: rgb(229, 233, 240);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html body .breadcrumb-element p {
  color: rgb(216, 222, 233);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html body .metadata {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(229, 233, 240);
}

html body .metadata-properties {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

html body .page-header h2.page-title {
  color: rgb(236, 239, 244);
}

html body abbr {
  color: rgb(236, 239, 244);
}

html body details {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body input[type=text] {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

html body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

html body progress {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html body sub {
  color: rgb(236, 239, 244);
}

html body summary {
  color: rgb(236, 239, 244);
}

html body sup {
  color: rgb(236, 239, 244);
}

html body ul.tags > li {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgba(0, 153, 153, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(0, 153, 153, 0.15);
  border-right-color: rgba(0, 153, 153, 0.15);
  border-top-color: rgba(0, 153, 153, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(143, 188, 187);
}`,
  },
  light: {},
};
