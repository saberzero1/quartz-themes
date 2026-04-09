import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "prussian-blue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 228 !important;
  --accent-l: 40% !important;
  --accent-s: 54% !important;
  --background-modifier-active-hover: hsla(228, 54%, 40%, 0.1) !important;
  --background-modifier-border: #393939 !important;
  --background-modifier-error: #c51b0c !important;
  --background-modifier-error-hover: #c51b0c !important;
  --background-modifier-success: #37c991 !important;
  --background-primary: #0f1116 !important;
  --background-primary-alt: #0f1116 !important;
  --background-secondary: #0f1116 !important;
  --background-secondary-alt: #000716 !important;
  --bases-cards-background: #0f1116 !important;
  --bases-cards-cover-background: #0f1116 !important;
  --bases-cards-shadow: 0 0 0 1px #393939 !important;
  --bases-embed-border-color: #393939 !important;
  --bases-group-heading-property-color: #122886 !important;
  --bases-table-border-color: #393939 !important;
  --bases-table-cell-background-active: #0f1116 !important;
  --bases-table-cell-background-disabled: #0f1116 !important;
  --bases-table-cell-background-selected: hsla(228, 54%, 40%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(228, 54%, 40%) !important;
  --bases-table-group-background: #0f1116 !important;
  --bases-table-header-background: #0f1116 !important;
  --bases-table-header-color: #122886 !important;
  --bases-table-row-background-hover: #2F459C !important;
  --bases-table-summary-background: #0f1116 !important;
  --blockquote-border-color: hsl(228, 54%, 40%) !important;
  --blue: #63c8da !important;
  --bold-color: #c51b0c !important;
  --bold-weight: 800 !important;
  --calendar-background-hover: #0f1116 !important;
  --calendar-hover: #2F459C !important;
  --calendar-today: #122886 !important;
  --calendar-week: #122886 !important;
  --callout-default: #2F459C;
  --callout-important: #2F459C;
  --callout-info: #2F459C;
  --callout-summary: #2F459C;
  --callout-tip: #2F459C;
  --callout-todo: #2F459C;
  --canvas-background: #0f1116 !important;
  --canvas-card-label-color: #889ef9 !important;
  --canvas-color-5: #2F459C !important;
  --caret-color: #ebebfb !important;
  --checkbox-border-color: #4e72ff !important;
  --checkbox-border-color-hover: #122886 !important;
  --checkbox-color: #122886 !important;
  --checkbox-color-hover: #4e72ff !important;
  --checkbox-marker-color: #0f1116 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #122886 !important;
  --code-background: #1f2026 !important;
  --code-border-color: #393939 !important;
  --code-comment: #889ef9 !important;
  --code-function: #FCC200 !important;
  --code-important: #ff9035 !important;
  --code-keyword: #eb95db !important;
  --code-normal: #ebebfb !important;
  --code-operator: #c51b0c !important;
  --code-property: #2F459C !important;
  --code-punctuation: #122886 !important;
  --code-string: #37c991 !important;
  --code-tag: #c51b0c !important;
  --code-value: #d469c1 !important;
  --collapse-icon-color: #889ef9 !important;
  --collapse-icon-color-collapsed: #2F459C !important;
  --color-accent: hsl(228, 54%, 40%) !important;
  --color-accent-1: hsl(225, 55.08%, 46%) !important;
  --color-accent-2: hsl(223, 56.7%, 51.6%) !important;
  --color-accent-hsl: 228, 54%, 40% !important;
  --color-blue: #63c8da !important;
  --color-blue-rgb: #2F459C !important;
  --color-cyan: #2F459C !important;
  --color-cyan-rgb: #2F459C !important;
  --color-frost0: #122886 !important;
  --color-frost0-rgb: #122886 !important;
  --color-frost1: #2F459C !important;
  --color-frost1-rgb: #2F459C !important;
  --color-green: #37c991 !important;
  --color-light3: #4e72ff !important;
  --color-light3-rgb: #4e72ff !important;
  --color-orange: #ff9035 !important;
  --color-pink: #eb95db !important;
  --color-purple: #d469c1 !important;
  --color-red: #c51b0c !important;
  --color-teal0: #2F459C !important;
  --color-teal0-rgb: #2F459C !important;
  --color-yellow: #FCC200 !important;
  --cursor-line-background: rgba(#2F459C, 0.2) !important;
  --dark: #ebebfb !important;
  --dark0: #0f1116 !important;
  --dark1: #1f2026 !important;
  --dark2: #393939 !important;
  --dark3: #000716 !important;
  --dark4: #00002a !important;
  --darkgray: #ebebfb !important;
  --dataview-key: #889ef9 !important;
  --dataview-key-background: rgba(#2F459C, 0.3) !important;
  --dataview-value: #889ef9 !important;
  --dataview-value-background: rgba(#2F459C, 0.3) !important;
  --divider-color: #393939 !important;
  --divider-color-hover: hsl(228, 54%, 40%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #393939, inset 0 0 0 1px #393939 !important;
  --embed-border-left: 6px double hsl(228, 54%, 40%) !important;
  --embed-border-start: 2px solid hsl(228, 54%, 40%) !important;
  --file-header-background: #0f1116 !important;
  --file-header-background-focused: #0f1116 !important;
  --flair-color: #ebebfb !important;
  --flashing-background: #2F459C !important;
  --footnote-divider-color: #393939 !important;
  --footnote-id-color: #122886 !important;
  --footnote-id-color-no-occurrences: #889ef9 !important;
  --frost0: #122886 !important;
  --frost1: #2F459C !important;
  --frost3: #2F459C !important;
  --frost5: #2F459C !important;
  --graph-line: #8b9bd8 !important;
  --graph-node: #4568fc !important;
  --graph-node-attachment: #2F459C !important;
  --graph-node-focused: #2F459C !important;
  --graph-node-tag: #2F459C !important;
  --graph-node-unresolved: #889ef9 !important;
  --graph-text: #ebebfb !important;
  --gray: #122886 !important;
  --green: #37c991 !important;
  --grey: #595151 !important;
  --h1-color: #122886 !important;
  --h2-color: #122886 !important;
  --h3-color: #122886 !important;
  --h4-color: #122886 !important;
  --h5-color: #122886 !important;
  --h6-color: #122886 !important;
  --heading-formatting: #889ef9 !important;
  --highlight: #122886 !important;
  --hr-color: #393939 !important;
  --icon-color: #122886 !important;
  --icon-color-active: #2F459C !important;
  --icon-color-focused: #2F459C !important;
  --icon-color-hover: #2F459C !important;
  --inline-title-color: #122886 !important;
  --input-date-separator: #889ef9 !important;
  --input-placeholder-color: #889ef9 !important;
  --interactive-accent: hsl(228, 54%, 40%) !important;
  --interactive-accent-hover: hsl(225, 55.08%, 46%) !important;
  --interactive-accent-hsl: 228, 54%, 40% !important;
  --italic-color: #FCC200 !important;
  --light: #0f1116 !important;
  --light0: #22198e !important;
  --light1: #889ef9 !important;
  --light2: #ebebfb !important;
  --light3: #4e72ff !important;
  --lightgray: #0f1116 !important;
  --link-color: #2F459C !important;
  --link-color-hover: #4e72ff !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #2F459C !important;
  --link-external-color-hover: #4e72ff !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #889ef9 !important;
  --link-unresolved-decoration-color: hsla(228, 54%, 40%, 0.3) !important;
  --link-url: #4e72ff !important;
  --list-marker-color: #889ef9 !important;
  --list-marker-color-collapsed: #2F459C !important;
  --list-marker-color-hover: #122886 !important;
  --menu-background: #0f1116 !important;
  --mermaid-exclude: #0f1116 !important;
  --mermaid-loopline: #2F459C !important;
  --mermaid-note: #2F459C !important;
  --mermaid-seqnum: #0f1116 !important;
  --metadata-border-color: #393939 !important;
  --metadata-divider-color: #393939 !important;
  --metadata-input-text-color: #ebebfb !important;
  --metadata-label-text-color: #122886 !important;
  --metadata-label-text-color-hover: #122886 !important;
  --modal-background: #0f1116 !important;
  --nav-collapse-icon-color: #889ef9 !important;
  --nav-collapse-icon-color-collapsed: #889ef9 !important;
  --nav-file-tag: #8b9bd8 !important;
  --nav-heading-color: #ebebfb !important;
  --nav-heading-color-collapsed: #889ef9 !important;
  --nav-heading-color-collapsed-hover: #122886 !important;
  --nav-heading-color-hover: #ebebfb !important;
  --nav-item-background-selected: hsla(228, 54%, 40%, 0.15) !important;
  --nav-item-color: #122886 !important;
  --nav-item-color-active: #4e72ff !important;
  --nav-item-color-highlighted: #2F459C !important;
  --nav-item-color-hover: #2F459C !important;
  --nav-item-color-selected: #ebebfb !important;
  --nav-tag-color: #889ef9 !important;
  --nav-tag-color-active: #122886 !important;
  --nav-tag-color-hover: #122886 !important;
  --orange: #ff9035 !important;
  --pdf-background: #0f1116 !important;
  --pdf-page-background: #0f1116 !important;
  --pdf-shadow: 0 0 0 1px #393939 !important;
  --pdf-sidebar-background: #0f1116 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #393939 !important;
  --pill-border-color: #393939 !important;
  --pill-color: #122886 !important;
  --pill-color-hover: #ebebfb !important;
  --pill-color-remove: #889ef9 !important;
  --pill-color-remove-hover: #2F459C !important;
  --pink: #eb95db !important;
  --prompt-background: #0f1116 !important;
  --purple: #d469c1 !important;
  --red: #c51b0c !important;
  --ribbon-background: #0f1116 !important;
  --ribbon-background-collapsed: #0f1116 !important;
  --search-clear-button-color: #122886 !important;
  --search-icon-color: #122886 !important;
  --search-result-background: #0f1116 !important;
  --secondary: #2F459C !important;
  --setting-group-heading-color: #ebebfb !important;
  --setting-items-background: #0f1116 !important;
  --setting-items-border-color: #393939 !important;
  --slider-track-background: #393939 !important;
  --status-bar-background: #0f1116 !important;
  --status-bar-border-color: #393939 !important;
  --status-bar-text-color: #4568fc !important;
  --suggestion-background: #0f1116 !important;
  --sync-avatar-color-1: #c51b0c !important;
  --sync-avatar-color-2: #ff9035 !important;
  --sync-avatar-color-3: #FCC200 !important;
  --sync-avatar-color-4: #37c991 !important;
  --sync-avatar-color-5: #2F459C !important;
  --sync-avatar-color-6: #63c8da !important;
  --sync-avatar-color-7: #d469c1 !important;
  --sync-avatar-color-8: #eb95db !important;
  --tab-background-active: #0f1116 !important;
  --tab-container-background: #0f1116 !important;
  --tab-font-weight: 600 !important;
  --tab-outline-color: #393939 !important;
  --tab-switcher-background: #0f1116 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f1116, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(228, 54%, 40%) !important;
  --tab-text-color: #889ef9 !important;
  --tab-text-color-active: #122886 !important;
  --tab-text-color-focused: #122886 !important;
  --tab-text-color-focused-active: #2F459C !important;
  --tab-text-color-focused-active-current: #4e72ff !important;
  --tab-text-color-focused-highlighted: #2F459C !important;
  --table-add-button-border-color: #393939 !important;
  --table-border-color: #393939 !important;
  --table-drag-handle-background-active: hsl(228, 54%, 40%) !important;
  --table-drag-handle-color: #889ef9 !important;
  --table-header-background: #2F459C !important;
  --table-header-background-hover: #4568fc !important;
  --table-header-border-color: #393939 !important;
  --table-header-color: #ebebfb !important;
  --table-row-background-hover: #2F459C !important;
  --table-row-even-background: #000716 !important;
  --table-row-odd-background: #393939 !important;
  --table-selection: hsla(228, 54%, 40%, 0.1) !important;
  --table-selection-border-color: hsl(228, 54%, 40%) !important;
  --tag-background: #0f1116 !important;
  --tag-background-hover: #0f1116 !important;
  --tag-border-color: hsla(228, 54%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 54%, 40%, 0.15) !important;
  --tag-color: #122886 !important;
  --tag-color-hover: #2F459C !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --teal0: #2F459C !important;
  --teal1: #2F459C !important;
  --teal2: #8b9bd8 !important;
  --teal3: #4568fc !important;
  --teal4: #2F459C !important;
  --tertiary: #4e72ff !important;
  --text-accent: #2F459C !important;
  --text-accent-hover: #4e72ff !important;
  --text-error: #c51b0c !important;
  --text-faint: #889ef9 !important;
  --text-highlight-bg: #122886 !important;
  --text-highlight-fg: #0f1116 !important;
  --text-muted: #122886 !important;
  --text-normal: #ebebfb !important;
  --text-selection: #2F459C !important;
  --text-success: #37c991 !important;
  --text-warning: #ff9035 !important;
  --textHighlight: #122886 !important;
  --titlebar-background: #0f1116 !important;
  --titlebar-background-focused: #000716 !important;
  --titlebar-border-color: #393939 !important;
  --titlebar-text-color: #122886 !important;
  --titlebar-text-color-focused: #2F459C !important;
  --vault-profile-color: #ebebfb !important;
  --vault-profile-color-hover: #ebebfb !important;
  --yellow: #FCC200 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

html body .bases-table {
  border-color: rgb(15, 17, 22);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(57, 57, 57);
}

html body .bases-table thead th {
  border-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

html body .canvas-node {
  border-color: rgb(235, 235, 251);
}

html body .canvas-node-content {
  color: rgb(235, 235, 251);
}

html body .canvas-node-file {
  color: rgb(235, 235, 251);
}

html body .canvas-node-group {
  border-color: rgb(235, 235, 251);
}

html body .canvas-sidebar {
  background-color: rgb(15, 17, 22);
  border-color: rgb(235, 235, 251);
}

html body .note-properties {
  border-color: rgb(57, 57, 57);
}

html body .note-properties-key {
  color: rgb(18, 40, 134);
}

html body .note-properties-row {
  border-color: rgb(18, 40, 134);
}

html body .note-properties-tags {
  background-color: rgb(15, 17, 22);
  border-radius: 8.4px;
  color: rgb(18, 40, 134);
}

html body .note-properties-value {
  color: rgb(18, 40, 134);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(57, 57, 57);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 17, 22);
  border-left-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

html body div#quartz-root {
  background-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(197, 27, 12);
  outline: rgb(197, 27, 12) none 0px;
  text-decoration-color: rgb(197, 27, 12);
}

html body .page article p > em, html em {
  color: rgb(252, 194, 0);
  outline: rgb(252, 194, 0) none 0px;
  text-decoration-color: rgb(252, 194, 0);
}

html body .page article p > i, html i {
  color: rgb(252, 194, 0);
  outline: rgb(252, 194, 0) none 0px;
  text-decoration-color: rgb(252, 194, 0);
}

html body .page article p > strong, html strong {
  color: rgb(197, 27, 12);
  outline: rgb(197, 27, 12) none 0px;
  text-decoration-color: rgb(197, 27, 12);
}

html body .text-highlight {
  background-color: rgb(18, 40, 134);
  color: rgb(15, 17, 22);
  outline: rgb(15, 17, 22) none 0px;
  text-decoration-color: rgb(15, 17, 22);
}

html body del {
  color: rgb(235, 235, 251);
  outline: rgb(235, 235, 251) none 0px;
  text-decoration-color: rgb(235, 235, 251);
}

html body h1.article-title {
  color: rgb(235, 235, 251);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(18, 40, 134);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(18, 40, 134);
  border-color: rgb(18, 40, 134);
}

html body p {
  color: rgb(18, 40, 134);
  outline: rgb(18, 40, 134) none 0px;
  text-decoration-color: rgb(18, 40, 134);
}`,
    links: `html body a.external, html footer a {
  color: rgb(47, 69, 156);
  outline: rgb(47, 69, 156) none 0px;
  text-decoration-color: rgb(47, 69, 156);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 69, 156);
  outline: rgb(47, 69, 156) none 0px;
  text-decoration-color: rgb(47, 69, 156);
}

html body a.internal.broken {
  color: rgb(136, 158, 249);
  outline: rgb(136, 158, 249) none 0px;
  text-decoration: rgba(47, 69, 157, 0.3);
  text-decoration-color: rgba(47, 69, 157, 0.3);
}`,
    lists: `html body dd {
  color: rgb(235, 235, 251);
}

html body dl {
  margin-bottom: 19.2px;
  margin-top: 19.2px;
}

html body dt {
  color: rgb(235, 235, 251);
}

html body ol > li {
  color: rgb(235, 235, 251);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body ul > li {
  color: rgb(235, 235, 251);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(136, 158, 249);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body table {
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

html body tbody tr:nth-child(even) {
  background-color: rgb(0, 7, 22);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(57, 57, 57);
}

html body td {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

html body th {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
  color: rgb(235, 235, 251);
}

html body thead {
  border-bottom-color: rgb(57, 57, 57);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
}

html body tr {
  background-color: rgb(47, 69, 156);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(15, 17, 22);
  border-right-color: rgb(15, 17, 22);
  border-top-color: rgb(15, 17, 22);
}`,
    code: `html body code {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(235, 235, 251);
}

html body pre > code > [data-line] {
  border-left-color: rgb(252, 194, 0);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 194, 0);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 194, 0);
  border-left-color: rgb(252, 194, 0);
  border-right-color: rgb(252, 194, 0);
  border-top-color: rgb(252, 194, 0);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}

html body pre:has(> code) {
  background-color: rgb(31, 32, 38);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body figcaption {
  color: rgb(235, 235, 251);
  font-size: 19.2px;
}

html body figure {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  margin-bottom: 19.2px;
  margin-top: 19.2px;
}

html body img {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
}

html body video {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
}

html body .footnotes {
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body .transclude {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(47, 69, 157);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(18, 40, 134);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 235, 251);
  text-decoration-color: rgb(235, 235, 251);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(235, 235, 251);
}

html body .callout[data-callout="abstract"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
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
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body .callout[data-callout="note"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
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
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body .callout[data-callout="todo"] {
  --callout-color: #2F459C;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
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
  color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 22);
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 235, 251);
  outline: rgb(235, 235, 251) none 0px;
  text-decoration-color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(235, 235, 251);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 17, 22);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(235, 235, 251);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body a.internal.tag-link::before {
  color: rgb(18, 40, 134);
}

html body h1 {
  color: rgb(18, 40, 134);
}

html body h2 {
  color: rgb(18, 40, 134);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(18, 40, 134);
}

html body h3 {
  color: rgb(18, 40, 134);
}

html body h4 {
  color: rgb(18, 40, 134);
}

html body h5 {
  color: rgb(18, 40, 134);
}

html body h6 {
  color: rgb(18, 40, 134);
}

html body hr {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
}`,
    scrollbars: `html body .callout {
  --callout-color: #2F459C;
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body ::-webkit-scrollbar {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}

html body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 22);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(18, 40, 134);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(18, 40, 134);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 235, 251);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}`,
    footer: `html body footer {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(69, 104, 252);
}

html body footer ul li a {
  color: rgb(69, 104, 252);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 235, 251);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(18, 40, 134);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 40, 134);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body li.section-li > .section .meta {
  color: rgb(18, 40, 134);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(18, 40, 134);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

html body .darkmode svg {
  color: rgb(18, 40, 134);
  stroke: rgb(18, 40, 134);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

html body .breadcrumb-element p {
  color: rgb(136, 158, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
  color: rgb(235, 235, 251);
}

html body .metadata {
  border-bottom-color: rgb(57, 57, 57);
  border-left-color: rgb(57, 57, 57);
  border-right-color: rgb(57, 57, 57);
  border-top-color: rgb(57, 57, 57);
  color: rgb(18, 40, 134);
}

html body .metadata-properties {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

html body .navigation-progress {
  background-color: rgb(15, 17, 22);
}

html body .page-header h2.page-title {
  color: rgb(235, 235, 251);
}

html body abbr {
  color: rgb(235, 235, 251);
}

html body details {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body input[type=text] {
  border-bottom-color: rgb(18, 40, 134);
  border-left-color: rgb(18, 40, 134);
  border-right-color: rgb(18, 40, 134);
  border-top-color: rgb(18, 40, 134);
  color: rgb(18, 40, 134);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(235, 235, 251);
  border-left-color: rgb(235, 235, 251);
  border-right-color: rgb(235, 235, 251);
  border-top-color: rgb(235, 235, 251);
}

html body sub {
  color: rgb(235, 235, 251);
  font-size: 16px;
}

html body summary {
  color: rgb(235, 235, 251);
}

html body sup {
  color: rgb(235, 235, 251);
  font-size: 16px;
}

html body ul.tags > li {
  background-color: rgb(15, 17, 22);
  border-bottom-color: rgba(47, 69, 157, 0.15);
  border-bottom-left-radius: 7.35px;
  border-bottom-right-radius: 7.35px;
  border-left-color: rgba(47, 69, 157, 0.15);
  border-right-color: rgba(47, 69, 157, 0.15);
  border-top-color: rgba(47, 69, 157, 0.15);
  border-top-left-radius: 7.35px;
  border-top-right-radius: 7.35px;
  color: rgb(18, 40, 134);
}`,
  },
  light: {},
};
