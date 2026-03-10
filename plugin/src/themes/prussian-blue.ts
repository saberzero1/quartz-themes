import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "prussian-blue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 228;
  --accent-l: 40%;
  --accent-s: 54%;
  --background-modifier-active-hover: rgba(47, 69, 157, 0.1);
  --background-modifier-border: #393939;
  --background-modifier-error: #c51b0c;
  --background-modifier-error-hover: #c51b0c;
  --background-modifier-success: #37c991;
  --background-primary: #0f1116;
  --background-primary-alt: #0f1116;
  --background-secondary: #0f1116;
  --background-secondary-alt: #000716;
  --bases-cards-background: #0f1116;
  --bases-cards-cover-background: #0f1116;
  --bases-cards-shadow: 0 0 0 1px #393939;
  --bases-embed-border-color: #393939;
  --bases-group-heading-property-color: #122886;
  --bases-table-border-color: #393939;
  --bases-table-cell-background-active: #0f1116;
  --bases-table-cell-background-disabled: #0f1116;
  --bases-table-cell-background-selected: rgba(47, 69, 157, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(47, 69, 157);
  --bases-table-group-background: #0f1116;
  --bases-table-header-background: #0f1116;
  --bases-table-header-color: #122886;
  --bases-table-row-background-hover: #2F459C;
  --bases-table-summary-background: #0f1116;
  --blockquote-border-color: rgb(47, 69, 157);
  --blue: #63c8da;
  --bold-color: #c51b0c;
  --bold-weight: 800;
  --calendar-background-hover: #0f1116;
  --calendar-hover: #2F459C;
  --calendar-today: #122886;
  --calendar-week: #122886;
  --callout-default: #2F459C;
  --callout-important: #2F459C;
  --callout-info: #2F459C;
  --callout-summary: #2F459C;
  --callout-tip: #2F459C;
  --callout-todo: #2F459C;
  --canvas-background: #0f1116;
  --canvas-card-label-color: #889ef9;
  --canvas-color-5: #2F459C;
  --caret-color: #ebebfb;
  --checkbox-border-color: #4e72ff;
  --checkbox-border-color-hover: #122886;
  --checkbox-color: #122886;
  --checkbox-color-hover: #4e72ff;
  --checkbox-marker-color: #0f1116;
  --checkbox-radius: 0;
  --checklist-done-color: #122886;
  --code-background: #1f2026;
  --code-border-color: #393939;
  --code-comment: #889ef9;
  --code-function: #FCC200;
  --code-important: #ff9035;
  --code-keyword: #eb95db;
  --code-normal: #ebebfb;
  --code-operator: #c51b0c;
  --code-property: #2F459C;
  --code-punctuation: #122886;
  --code-string: #37c991;
  --code-tag: #c51b0c;
  --code-value: #d469c1;
  --collapse-icon-color: #889ef9;
  --collapse-icon-color-collapsed: #2F459C;
  --color-accent: rgb(47, 69, 157);
  --color-accent-1: rgb(53, 85, 182);
  --color-accent-2: rgb(63, 102, 202);
  --color-accent-hsl: 228, 54%, 40%;
  --color-blue: #63c8da;
  --color-blue-rgb: #2F459C;
  --color-cyan: #2F459C;
  --color-cyan-rgb: #2F459C;
  --color-frost0: #122886;
  --color-frost0-rgb: #122886;
  --color-frost1: #2F459C;
  --color-frost1-rgb: #2F459C;
  --color-green: #37c991;
  --color-light3: #4e72ff;
  --color-light3-rgb: #4e72ff;
  --color-orange: #ff9035;
  --color-pink: #eb95db;
  --color-purple: #d469c1;
  --color-red: #c51b0c;
  --color-teal0: #2F459C;
  --color-teal0-rgb: #2F459C;
  --color-yellow: #FCC200;
  --cursor-line-background: rgba(#2F459C, 0.2);
  --dark: var(--text-normal);
  --dark0: #0f1116;
  --dark1: #1f2026;
  --dark2: #393939;
  --dark3: #000716;
  --dark4: #00002a;
  --darkgray: var(--text-normal);
  --dataview-key: #889ef9;
  --dataview-key-background: rgba(#2F459C, 0.3);
  --dataview-value: #889ef9;
  --dataview-value-background: rgba(#2F459C, 0.3);
  --divider-color: #393939;
  --divider-color-hover: rgb(47, 69, 157);
  --embed-block-shadow-hover: 0 0 0 1px #393939, inset 0 0 0 1px #393939;
  --embed-border-left: 6px double rgb(47, 69, 157);
  --embed-border-start: 2px solid rgb(47, 69, 157);
  --file-header-background: #0f1116;
  --file-header-background-focused: #0f1116;
  --flair-color: #ebebfb;
  --flashing-background: #2F459C;
  --footnote-divider-color: #393939;
  --footnote-id-color: #122886;
  --footnote-id-color-no-occurrences: #889ef9;
  --frost0: #122886;
  --frost1: #2F459C;
  --frost3: #2F459C;
  --frost5: #2F459C;
  --graph-line: #8b9bd8;
  --graph-node: #4568fc;
  --graph-node-attachment: #2F459C;
  --graph-node-focused: #2F459C;
  --graph-node-tag: #2F459C;
  --graph-node-unresolved: #889ef9;
  --graph-text: #ebebfb;
  --gray: var(--text-muted);
  --green: #37c991;
  --grey: #595151;
  --h1-color: #122886;
  --h2-color: #122886;
  --h3-color: #122886;
  --h4-color: #122886;
  --h5-color: #122886;
  --h6-color: #122886;
  --heading-formatting: #889ef9;
  --highlight: var(--text-highlight-bg);
  --hr-color: #393939;
  --icon-color: #122886;
  --icon-color-active: #2F459C;
  --icon-color-focused: #2F459C;
  --icon-color-hover: #2F459C;
  --inline-title-color: #122886;
  --input-date-separator: #889ef9;
  --input-placeholder-color: #889ef9;
  --interactive-accent: rgb(47, 69, 157);
  --interactive-accent-hover: rgb(53, 85, 182);
  --interactive-accent-hsl: 228, 54%, 40%;
  --italic-color: #FCC200;
  --light: var(--background-primary);
  --light0: #22198e;
  --light1: #889ef9;
  --light2: #ebebfb;
  --light3: #4e72ff;
  --lightgray: var(--background-secondary);
  --link-color: #2F459C;
  --link-color-hover: #4e72ff;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #2F459C;
  --link-external-color-hover: #4e72ff;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #889ef9;
  --link-unresolved-decoration-color: rgba(47, 69, 157, 0.3);
  --link-url: #4e72ff;
  --list-marker-color: #889ef9;
  --list-marker-color-collapsed: #2F459C;
  --list-marker-color-hover: #122886;
  --menu-background: #0f1116;
  --mermaid-exclude: #0f1116;
  --mermaid-loopline: #2F459C;
  --mermaid-note: #2F459C;
  --mermaid-seqnum: #0f1116;
  --metadata-border-color: #393939;
  --metadata-divider-color: #393939;
  --metadata-input-text-color: #ebebfb;
  --metadata-label-text-color: #122886;
  --metadata-label-text-color-hover: #122886;
  --modal-background: #0f1116;
  --nav-collapse-icon-color: #889ef9;
  --nav-collapse-icon-color-collapsed: #889ef9;
  --nav-file-tag: #8b9bd8;
  --nav-heading-color: #ebebfb;
  --nav-heading-color-collapsed: #889ef9;
  --nav-heading-color-collapsed-hover: #122886;
  --nav-heading-color-hover: #ebebfb;
  --nav-item-background-selected: rgba(47, 69, 157, 0.15);
  --nav-item-color: #122886;
  --nav-item-color-active: #4e72ff;
  --nav-item-color-highlighted: #2F459C;
  --nav-item-color-hover: #2F459C;
  --nav-item-color-selected: #ebebfb;
  --nav-tag-color: #889ef9;
  --nav-tag-color-active: #122886;
  --nav-tag-color-hover: #122886;
  --orange: #ff9035;
  --pdf-background: #0f1116;
  --pdf-page-background: #0f1116;
  --pdf-shadow: 0 0 0 1px #393939;
  --pdf-sidebar-background: #0f1116;
  --pdf-thumbnail-shadow: 0 0 0 1px #393939;
  --pill-border-color: #393939;
  --pill-color: #122886;
  --pill-color-hover: #ebebfb;
  --pill-color-remove: #889ef9;
  --pill-color-remove-hover: #2F459C;
  --pink: #eb95db;
  --prompt-background: #0f1116;
  --purple: #d469c1;
  --red: #c51b0c;
  --ribbon-background: #0f1116;
  --ribbon-background-collapsed: #0f1116;
  --search-clear-button-color: #122886;
  --search-icon-color: #122886;
  --search-result-background: #0f1116;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ebebfb;
  --setting-items-background: #0f1116;
  --setting-items-border-color: #393939;
  --slider-track-background: #393939;
  --status-bar-background: #0f1116;
  --status-bar-border-color: #393939;
  --status-bar-text-color: #4568fc;
  --suggestion-background: #0f1116;
  --sync-avatar-color-1: #c51b0c;
  --sync-avatar-color-2: #ff9035;
  --sync-avatar-color-3: #FCC200;
  --sync-avatar-color-4: #37c991;
  --sync-avatar-color-5: #2F459C;
  --sync-avatar-color-6: #63c8da;
  --sync-avatar-color-7: #d469c1;
  --sync-avatar-color-8: #eb95db;
  --tab-background-active: #0f1116;
  --tab-container-background: #0f1116;
  --tab-font-weight: 600;
  --tab-outline-color: #393939;
  --tab-switcher-background: #0f1116;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f1116, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(47, 69, 157);
  --tab-text-color: #889ef9;
  --tab-text-color-active: #122886;
  --tab-text-color-focused: #122886;
  --tab-text-color-focused-active: #2F459C;
  --tab-text-color-focused-active-current: #4e72ff;
  --tab-text-color-focused-highlighted: #2F459C;
  --table-add-button-border-color: #393939;
  --table-border-color: #393939;
  --table-drag-handle-background-active: rgb(47, 69, 157);
  --table-drag-handle-color: #889ef9;
  --table-header-background: #2F459C;
  --table-header-background-hover: #4568fc;
  --table-header-border-color: #393939;
  --table-header-color: #ebebfb;
  --table-row-background-hover: #2F459C;
  --table-row-even-background: #000716;
  --table-row-odd-background: #393939;
  --table-selection: rgba(47, 69, 157, 0.1);
  --table-selection-border-color: rgb(47, 69, 157);
  --tag-background: #0f1116;
  --tag-background-hover: #0f1116;
  --tag-border-color: rgba(47, 69, 157, 0.15);
  --tag-border-color-hover: rgba(47, 69, 157, 0.15);
  --tag-color: #122886;
  --tag-color-hover: #2F459C;
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --teal0: #2F459C;
  --teal1: #2F459C;
  --teal2: #8b9bd8;
  --teal3: #4568fc;
  --teal4: #2F459C;
  --tertiary: var(--text-accent-hover);
  --text-accent: #2F459C;
  --text-accent-hover: #4e72ff;
  --text-error: #c51b0c;
  --text-faint: #889ef9;
  --text-highlight-bg: #122886;
  --text-highlight-fg: #0f1116;
  --text-muted: #122886;
  --text-normal: #ebebfb;
  --text-selection: #2F459C;
  --text-success: #37c991;
  --text-warning: #ff9035;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #0f1116;
  --titlebar-background-focused: #000716;
  --titlebar-border-color: #393939;
  --titlebar-text-color: #122886;
  --titlebar-text-color-focused: #2F459C;
  --vault-profile-color: #ebebfb;
  --vault-profile-color-hover: #ebebfb;
  --yellow: #FCC200;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 57, 57);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 17, 22);
  border-left-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

body div#quartz-root {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 27, 12);
  outline: rgb(197, 27, 12) none 0px;
  text-decoration: rgb(197, 27, 12);
  text-decoration-color: rgb(197, 27, 12);
}

body .page article p > em, em {
  color: rgb(252, 194, 0);
  outline: rgb(252, 194, 0) none 0px;
  text-decoration: rgb(252, 194, 0);
  text-decoration-color: rgb(252, 194, 0);
}

body .page article p > i, i {
  color: rgb(252, 194, 0);
  outline: rgb(252, 194, 0) none 0px;
  text-decoration: rgb(252, 194, 0);
  text-decoration-color: rgb(252, 194, 0);
}

body .page article p > strong, strong {
  color: rgb(197, 27, 12);
  outline: rgb(197, 27, 12) none 0px;
  text-decoration: rgb(197, 27, 12);
  text-decoration-color: rgb(197, 27, 12);
}

body .text-highlight {
  background-color: rgb(18, 40, 134);
  color: rgb(15, 17, 22);
  outline: rgb(15, 17, 22) none 0px;
  text-decoration: rgb(15, 17, 22);
  text-decoration-color: rgb(15, 17, 22);
}

body del {
  color: rgb(235, 235, 251);
  outline: rgb(235, 235, 251) none 0px;
  text-decoration: line-through rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body p {
  color: rgb(18, 40, 134);
  outline: rgb(18, 40, 134) none 0px;
  text-decoration: rgb(18, 40, 134);
  text-decoration-color: rgb(18, 40, 134);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 69, 156);
  outline: rgb(47, 69, 156) none 0px;
  text-decoration: rgb(47, 69, 156);
  text-decoration-color: rgb(47, 69, 156);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 69, 156);
  outline: rgb(47, 69, 156) none 0px;
  text-decoration: rgb(47, 69, 156);
  text-decoration-color: rgb(47, 69, 156);
}

body a.internal.broken {
  color: rgb(136, 158, 249);
  outline: rgb(136, 158, 249) none 0px;
  text-decoration: rgba(47, 69, 157, 0.3);
  text-decoration-color: rgba(47, 69, 157, 0.3);
}`,
    lists: `body dd {
  color: rgb(235, 235, 251);
}

body dl {
  margin-bottom: 19.2px;
  margin-top: 19.2px;
}

body dt {
  color: rgb(235, 235, 251);
}

body ol > li {
  color: rgb(235, 235, 251);
}

body ol.overflow {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body ul > li {
  color: rgb(235, 235, 251);
}

body ul.overflow {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(136, 158, 249);
  text-decoration: rgb(136, 158, 249);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body table {
  border-bottom-color: rgb(15, 17, 22);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(15, 17, 22);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(15, 17, 22);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(15, 17, 22);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 235, 251);
}

body tbody tr:nth-child(even) {
  background-color: rgb(0, 7, 22);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(57, 57, 57);
}

body td {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

body th {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

body thead {
  border-bottom-color: rgb(57, 57, 57);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
}

body tr {
  background-color: rgb(47, 69, 156);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

body pre > code > [data-line] {
  border-left-color: rgb(252, 194, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 194, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 194, 0);
  border-left-color: rgb(252, 194, 0);
  border-right-color: rgb(252, 194, 0);
  border-top-color: rgb(252, 194, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

body pre:has(> code) {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body figcaption {
  color: rgb(235, 235, 251);
  font-size: 19.2px;
}

body figure {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  margin-bottom: 19.2px;
  margin-top: 19.2px;
}

body img {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body video {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    embeds: `body .file-embed {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
}

body .footnotes {
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

body .transclude {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(47, 69, 157);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .transclude-inner {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(47, 69, 157);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(18, 40, 134);
  text-decoration: line-through rgb(18, 40, 134);
  text-decoration-color: rgb(18, 40, 134);
}

body input[type=checkbox] {
  border-bottom-color: rgb(18, 40, 134);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='*'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='-'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='/'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='?'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='I'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='S'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='b'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='c'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='d'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='f'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='i'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='k'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='p'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 235, 251);
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .callout[data-callout="abstract"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .callout[data-callout="info"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .callout[data-callout="note"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .callout[data-callout="tip"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .callout[data-callout="todo"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 22);
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 235, 251);
  outline: rgb(235, 235, 251) none 0px;
  text-decoration: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(235, 235, 251);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(235, 235, 251);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgba(47, 69, 157, 0.15);
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-left-color: rgba(47, 69, 157, 0.15);
  border-right-color: rgba(47, 69, 157, 0.15);
  border-top-color: rgba(47, 69, 157, 0.15);
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
}

body a.internal.tag-link::before {
  color: rgb(18, 40, 134);
}

body h1 {
  color: rgb(18, 40, 134);
}

body h2 {
  color: rgb(18, 40, 134);
}

body h2.page-title, h2.page-title a {
  color: rgb(18, 40, 134);
}

body h3 {
  color: rgb(18, 40, 134);
}

body h4 {
  color: rgb(18, 40, 134);
}

body h5 {
  color: rgb(18, 40, 134);
}

body h6 {
  color: rgb(18, 40, 134);
}

body hr {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
}`,
    scrollbars: `body .callout {
  --callout-color: #2F459C;
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body ::-webkit-scrollbar {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(18, 40, 134);
  text-decoration: rgb(18, 40, 134);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(18, 40, 134);
  text-decoration: rgb(18, 40, 134);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(18, 40, 134);
  text-decoration: rgb(18, 40, 134);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(78, 114, 255);
  border-left-color: rgb(78, 114, 255);
  border-right-color: rgb(78, 114, 255);
  border-top-color: rgb(78, 114, 255);
  color: rgb(78, 114, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}`,
    footer: `body footer {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(69, 104, 252);
}

body footer ul li a {
  color: rgb(69, 104, 252);
  text-decoration: rgb(69, 104, 252);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 235, 251);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(18, 40, 134);
  text-decoration: rgb(18, 40, 134);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 40, 134);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body li.section-li > .section .meta {
  color: rgb(18, 40, 134);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(18, 40, 134);
  text-decoration: rgb(18, 40, 134);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

body .darkmode svg {
  color: rgb(18, 40, 134);
  stroke: rgb(18, 40, 134);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

body .breadcrumb-element p {
  color: rgb(136, 158, 249);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

body .metadata {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(18, 40, 134);
}

body .metadata-properties {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

body .navigation-progress {
  background-color: rgb(15, 17, 22);
}

body .page-header h2.page-title {
  color: rgb(235, 235, 251);
}

body abbr {
  color: rgb(235, 235, 251);
  text-decoration: underline dotted rgb(235, 235, 251);
}

body details {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body input[type=text] {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

body kbd {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
  font-size: 16.8px;
  padding-bottom: 1.68px;
  padding-left: 4.2px;
  padding-right: 4.2px;
  padding-top: 1.68px;
}

body progress {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

body sub {
  color: rgb(235, 235, 251);
  font-size: 16px;
}

body summary {
  color: rgb(235, 235, 251);
}

body sup {
  color: rgb(235, 235, 251);
  font-size: 16px;
}`,
  },
  light: {},
};
