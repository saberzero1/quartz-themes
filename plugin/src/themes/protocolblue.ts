import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "protocolblue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 180;
  --accent-l: 30%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(0, 153, 153, 0.1);
  --background-modifier-border: #393939;
  --background-modifier-error: #ff5c5c;
  --background-modifier-error-hover: #ff5c5c;
  --background-modifier-success: #37c991;
  --background-primary: #242424;
  --background-secondary: #242424;
  --background-secondary-alt: #242424;
  --bases-cards-background: #242424;
  --bases-cards-shadow: 0 0 0 1px #393939;
  --bases-embed-border-color: #393939;
  --bases-group-heading-property-color: #e5e9f0;
  --bases-table-border-color: #393939;
  --bases-table-cell-background-active: #242424;
  --bases-table-cell-background-selected: rgba(0, 153, 153, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 153, 153);
  --bases-table-header-background: #242424;
  --bases-table-header-color: #e5e9f0;
  --bases-table-row-background-hover: #5e81ac;
  --bases-table-summary-background: #242424;
  --blockquote-border-color: rgb(0, 153, 153);
  --blue: #63c8da;
  --bold-color: #ffffff;
  --bold-weight: 600;
  --calendar-background-hover: #242424;
  --calendar-hover: #009999;
  --calendar-today: #8fbcbb;
  --calendar-week: #8fbcbb;
  --callout-default: #5e81ac;
  --callout-important: #88c0d0;
  --callout-info: #5e81ac;
  --callout-summary: #88c0d0;
  --callout-tip: #88c0d0;
  --callout-todo: #5e81ac;
  --canvas-background: #242424;
  --canvas-card-label-color: #d8dee9;
  --canvas-color-5: #88c0d0;
  --caret-color: #eceff4;
  --checkbox-border-color: #ffffff;
  --checkbox-border-color-hover: #8fbcbb;
  --checkbox-color: #8fbcbb;
  --checkbox-color-hover: #ffffff;
  --checkbox-marker-color: #242424;
  --checkbox-radius: 0;
  --checklist-done-color: #8fbcbb;
  --code-background: #202020;
  --code-border-color: #393939;
  --code-comment: #d8dee9;
  --code-function: #eeec79;
  --code-important: #ff9035;
  --code-keyword: #eb95db;
  --code-normal: #88c0d0;
  --code-operator: #ff5c5c;
  --code-property: #88c0d0;
  --code-punctuation: #e5e9f0;
  --code-string: #37c991;
  --code-tag: #ff5c5c;
  --code-value: #d469c1;
  --collapse-icon-color: #d8dee9;
  --collapse-icon-color-collapsed: #009999;
  --color-accent: rgb(0, 153, 153);
  --color-accent-1: hsl(177, 102%, 34.5%);
  --color-accent-2: hsl(175, 105%, 38.7%);
  --color-accent-hsl: 180, 100%, 30%;
  --color-blue: #63c8da;
  --color-blue-rgb: #5e81ac;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: #88c0d0;
  --color-frost0: #8fbcbb;
  --color-frost0-rgb: #8fbcbb;
  --color-frost1: #88c0d0;
  --color-frost1-rgb: #88c0d0;
  --color-green: #37c991;
  --color-light3: #ffffff;
  --color-light3-rgb: #ffffff;
  --color-orange: #ff9035;
  --color-pink: #eb95db;
  --color-purple: #d469c1;
  --color-red: #ff5c5c;
  --color-teal0: #009999;
  --color-teal0-rgb: #009999;
  --color-yellow: #eeec79;
  --cursor-line-background: rgba(#009999, 0.2);
  --dark: var(--text-normal);
  --dark0: #242424;
  --dark1: #202020;
  --dark2: #393939;
  --dark3: #424242;
  --darkgray: var(--text-normal);
  --dataview-key: #d8dee9;
  --dataview-key-background: rgba(#81a1c1, 0.3);
  --dataview-value: #d8dee9;
  --dataview-value-background: rgba(#009999, 0.3);
  --divider-color: #393939;
  --divider-color-hover: rgb(0, 153, 153);
  --embed-block-shadow-hover: 0 0 0 1px #393939, inset 0 0 0 1px #393939;
  --embed-border-left: 6px double rgb(0, 153, 153);
  --embed-border-start: 2px solid rgb(0, 153, 153);
  --file-header-background: #242424;
  --file-header-background-focused: #242424;
  --flair-color: #eceff4;
  --flashing-background: #007991;
  --footnote-divider-color: #393939;
  --footnote-id-color: #e5e9f0;
  --footnote-id-color-no-occurrences: #d8dee9;
  --frost0: #8fbcbb;
  --frost1: #88c0d0;
  --frost3: #81a1c1;
  --frost5: #5e81ac;
  --graph-line: #393939;
  --graph-node: #00fff2;
  --graph-node-attachment: #00c8ff;
  --graph-node-focused: #009999;
  --graph-node-tag: #007991;
  --graph-node-unresolved: #d8dee9;
  --graph-text: #eceff4;
  --gray: var(--text-muted);
  --green: #37c991;
  --h1-color: #009999;
  --h2-color: #8fbcbb;
  --h3-color: #88c0d0;
  --h4-color: #3aa0b9;
  --h5-color: #007991;
  --h6-color: #ffffff;
  --heading-formatting: #d8dee9;
  --highlight: var(--text-highlight-bg);
  --hr-color: #393939;
  --icon-color: #e5e9f0;
  --icon-color-active: #009999;
  --icon-color-focused: #009999;
  --icon-color-hover: #009999;
  --inline-title-color: #8fbcbb;
  --input-date-separator: #d8dee9;
  --input-placeholder-color: #d8dee9;
  --interactive-accent: rgb(0, 153, 153);
  --interactive-accent-hover: hsl(177, 102%, 34.5%);
  --interactive-accent-hsl: 180, 100%, 30%;
  --italic-color: #ffffff;
  --light: var(--background-primary);
  --light0: #d8dee9;
  --light1: #e5e9f0;
  --light2: #eceff4;
  --light3: #ffffff;
  --lightgray: var(--background-secondary);
  --link-color: #009999;
  --link-color-hover: #ffffff;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #009999;
  --link-external-color-hover: #ffffff;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #009999;
  --link-unresolved-decoration-color: rgba(0, 153, 153, 0.3);
  --link-url: #ffffff;
  --list-marker-color: #d8dee9;
  --list-marker-color-collapsed: #009999;
  --list-marker-color-hover: #e5e9f0;
  --menu-background: #242424;
  --mermaid-exclude: #242424;
  --mermaid-loopline: #88c0d0;
  --mermaid-note: #5e81ac;
  --mermaid-seqnum: #242424;
  --metadata-border-color: #393939;
  --metadata-divider-color: #393939;
  --metadata-input-text-color: #eceff4;
  --metadata-label-text-color: #e5e9f0;
  --metadata-label-text-color-hover: #e5e9f0;
  --modal-background: #242424;
  --nav-collapse-icon-color: #d8dee9;
  --nav-collapse-icon-color-collapsed: #d8dee9;
  --nav-file-tag: #00fff2;
  --nav-heading-color: #eceff4;
  --nav-heading-color-collapsed: #d8dee9;
  --nav-heading-color-collapsed-hover: #e5e9f0;
  --nav-heading-color-hover: #eceff4;
  --nav-item-background-selected: rgba(0, 153, 153, 0.15);
  --nav-item-color: #e5e9f0;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #009999;
  --nav-item-color-hover: #009999;
  --nav-item-color-selected: #eceff4;
  --nav-tag-color: #d8dee9;
  --nav-tag-color-active: #e5e9f0;
  --nav-tag-color-hover: #e5e9f0;
  --orange: #ff9035;
  --pdf-background: #242424;
  --pdf-page-background: #242424;
  --pdf-shadow: 0 0 0 1px #393939;
  --pdf-sidebar-background: #242424;
  --pdf-thumbnail-shadow: 0 0 0 1px #393939;
  --pill-border-color: #393939;
  --pill-color: #e5e9f0;
  --pill-color-hover: #eceff4;
  --pill-color-remove: #d8dee9;
  --pill-color-remove-hover: #009999;
  --pink: #eb95db;
  --prompt-background: #242424;
  --purple: #d469c1;
  --red: #ff5c5c;
  --ribbon-background: #242424;
  --ribbon-background-collapsed: #242424;
  --search-clear-button-color: #e5e9f0;
  --search-icon-color: #e5e9f0;
  --search-result-background: #242424;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #eceff4;
  --setting-items-border-color: #393939;
  --slider-track-background: #393939;
  --status-bar-background: #242424;
  --status-bar-border-color: #393939;
  --status-bar-text-color: #e5e9f0;
  --suggestion-background: #242424;
  --sync-avatar-color-1: #ff5c5c;
  --sync-avatar-color-2: #ff9035;
  --sync-avatar-color-3: #eeec79;
  --sync-avatar-color-4: #37c991;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #63c8da;
  --sync-avatar-color-7: #d469c1;
  --sync-avatar-color-8: #eb95db;
  --tab-background-active: #242424;
  --tab-container-background: #242424;
  --tab-font-weight: 600;
  --tab-outline-color: #393939;
  --tab-switcher-background: #242424;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 153, 153);
  --tab-text-color: #d8dee9;
  --tab-text-color-active: #e5e9f0;
  --tab-text-color-focused: #e5e9f0;
  --tab-text-color-focused-active: #ffffff;
  --tab-text-color-focused-active-current: #009999;
  --tab-text-color-focused-highlighted: #009999;
  --table-add-button-border-color: #393939;
  --table-border-color: #393939;
  --table-drag-handle-background-active: rgb(0, 153, 153);
  --table-drag-handle-color: #d8dee9;
  --table-header-background: #007991;
  --table-header-background-hover: #3aa0b9;
  --table-header-border-color: #393939;
  --table-header-color: #eceff4;
  --table-row-background-hover: #5e81ac;
  --table-row-even-background: #424242;
  --table-row-odd-background: #393939;
  --table-selection: rgba(0, 153, 153, 0.1);
  --table-selection-border-color: rgb(0, 153, 153);
  --tag-background: #242424;
  --tag-background-hover: #242424;
  --tag-border-color: rgba(0, 153, 153, 0.15);
  --tag-border-color-hover: rgba(0, 153, 153, 0.15);
  --tag-color: #8fbcbb;
  --tag-color-hover: #009999;
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --teal0: #009999;
  --teal1: #00c8ff;
  --teal2: #00fff2;
  --teal3: #3aa0b9;
  --teal4: #007991;
  --tertiary: var(--text-accent-hover);
  --text-accent: #009999;
  --text-accent-hover: #ffffff;
  --text-error: #ff5c5c;
  --text-faint: #d8dee9;
  --text-highlight-bg: #8fbcbb;
  --text-highlight-fg: #242424;
  --text-muted: #e5e9f0;
  --text-normal: #eceff4;
  --text-selection: #007991;
  --text-success: #37c991;
  --text-warning: #ff9035;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #242424;
  --titlebar-background-focused: #242424;
  --titlebar-border-color: #393939;
  --titlebar-text-color: #e5e9f0;
  --titlebar-text-color-focused: #009999;
  --vault-profile-color: #eceff4;
  --vault-profile-color-hover: #eceff4;
  --yellow: #eeec79;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 57, 57);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(143, 188, 187);
  color: rgb(36, 36, 36);
  outline: rgb(36, 36, 36) none 0px;
  text-decoration: rgb(36, 36, 36);
  text-decoration-color: rgb(36, 36, 36);
}

body del {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: line-through rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body p {
  color: rgb(229, 233, 240);
  outline: rgb(229, 233, 240) none 0px;
  text-decoration: rgb(229, 233, 240);
  text-decoration-color: rgb(229, 233, 240);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration: rgb(0, 153, 153);
  text-decoration-color: rgb(0, 153, 153);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration: rgb(0, 153, 153);
  text-decoration-color: rgb(0, 153, 153);
}

body a.internal.broken {
  color: rgb(0, 153, 153);
  outline: rgb(0, 153, 153) none 0px;
  text-decoration: rgba(0, 153, 153, 0.3);
  text-decoration-color: rgba(0, 153, 153, 0.3);
}`,
    lists: `body dd {
  color: rgb(236, 239, 244);
}

body dt {
  color: rgb(236, 239, 244);
}

body ol > li {
  color: rgb(236, 239, 244);
}

body ol.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ul > li {
  color: rgb(236, 239, 244);
}

body ul.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body table {
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

body tbody tr:nth-child(even) {
  background-color: rgb(66, 66, 66);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(57, 57, 57);
}

body td {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

body th {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(236, 239, 244);
}

body thead {
  border-bottom-color: rgb(57, 57, 57);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body tr {
  background-color: rgb(0, 121, 145);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

body pre > code > [data-line] {
  border-left-color: rgb(238, 236, 121);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(238, 236, 121);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(238, 236, 121);
  border-left-color: rgb(238, 236, 121);
  border-right-color: rgb(238, 236, 121);
  border-top-color: rgb(238, 236, 121);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

body pre:has(> code) {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}`,
    images: `body audio {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body figcaption {
  color: rgb(236, 239, 244);
}

body figure {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body img {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body video {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
}

body .footnotes {
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .transclude {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .transclude-inner {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(0, 153, 153);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(143, 188, 187);
  text-decoration: line-through rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body input[type=checkbox] {
  border-bottom-color: rgb(143, 188, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(143, 188, 187);
  border-right-color: rgb(143, 188, 187);
  border-top-color: rgb(143, 188, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .callout[data-callout="abstract"] {
  --callout-color: #88c0d0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .callout[data-callout="info"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .callout[data-callout="note"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .callout[data-callout="tip"] {
  --callout-color: #88c0d0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .callout[data-callout="todo"] {
  --callout-color: #5e81ac;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 239, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(143, 188, 187);
}

body h1 {
  color: rgb(0, 153, 153);
}

body h2 {
  color: rgb(143, 188, 187);
}

body h2.page-title, h2.page-title a {
  color: rgb(143, 188, 187);
}

body h3 {
  color: rgb(136, 192, 208);
}

body h4 {
  color: rgb(58, 160, 185);
}

body h5 {
  color: rgb(0, 121, 145);
}

body h6 {
  color: rgb(255, 255, 255);
}

body hr {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
}`,
    scrollbars: `body .callout {
  --callout-color: #5e81ac;
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}`,
    footer: `body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(229, 233, 240);
}

body footer ul li a {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(236, 239, 244);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(229, 233, 240);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body li.section-li > .section .meta {
  color: rgb(229, 233, 240);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

body .darkmode svg {
  color: rgb(229, 233, 240);
  stroke: rgb(229, 233, 240);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

body .breadcrumb-element p {
  color: rgb(216, 222, 233);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .metadata {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(229, 233, 240);
}

body .metadata-properties {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

body .page-header h2.page-title {
  color: rgb(236, 239, 244);
}

body abbr {
  color: rgb(236, 239, 244);
  text-decoration: underline dotted rgb(236, 239, 244);
}

body details {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body input[type=text] {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}

body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}

body progress {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body sub {
  color: rgb(236, 239, 244);
}

body summary {
  color: rgb(236, 239, 244);
}

body sup {
  color: rgb(236, 239, 244);
}`,
  },
  light: {},
};
