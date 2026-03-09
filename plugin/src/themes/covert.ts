import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "covert", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 354;
  --accent-l: 56%;
  --accent-s: 42%;
  --background-modifier-active-hover: rgba(190, 96, 105, 0.1);
  --background-modifier-border: rgb(45, 45, 46);
  --background-modifier-error: rgb(97, 96, 96);
  --background-modifier-error-hover: rgb(97, 96, 96);
  --background-modifier-error-rgb: 97, 96, 96;
  --background-modifier-success: rgb(163, 190, 140);
  --background-modifier-success-rgb: 163,190,140;
  --background-primary: rgb(33, 34, 36);
  --background-primary-alt: rgb(33, 34, 36);
  --background-secondary: rgb(33, 34, 36);
  --background-secondary-alt: rgb(45, 45, 46);
  --bases-cards-background: rgb(33, 34, 36);
  --bases-cards-cover-background: rgb(33, 34, 36);
  --bases-cards-shadow: 0 0 0 1px rgb(45, 45, 46);
  --bases-embed-border-color: rgb(45, 45, 46);
  --bases-group-heading-property-color: rgb(97, 96, 96);
  --bases-table-border-color: rgb(45, 45, 46);
  --bases-table-cell-background-active: rgb(33, 34, 36);
  --bases-table-cell-background-disabled: rgb(33, 34, 36);
  --bases-table-cell-background-selected: rgba(190, 96, 105, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(190, 96, 105);
  --bases-table-group-background: rgb(33, 34, 36);
  --bases-table-header-background: rgb(33, 34, 36);
  --bases-table-header-color: rgb(97, 96, 96);
  --bases-table-row-background-hover: rgb(76, 86, 106);
  --bases-table-summary-background: rgb(33, 34, 36);
  --blockquote-border-color: rgb(190, 96, 105);
  --bold-color: rgb(235, 203, 139);
  --bold-weight: 600;
  --calendar-background-hover: rgb(76, 86, 106);
  --calendar-hover: rgb(97, 96, 96);
  --calendar-today: rgb(235, 203, 139);
  --calendar-week: rgb(235, 203, 139);
  --callout-bug: 97, 96, 96;
  --callout-default: 94,129,172;
  --callout-error: 97, 96, 96;
  --callout-example: 180,142,173;
  --callout-fail: 97, 96, 96;
  --callout-important: 97, 96, 96;
  --callout-info: 94,129,172;
  --callout-question: 208,135,112;
  --callout-success: 163,190,140;
  --callout-summary: 97, 96, 96;
  --callout-tip: 97, 96, 96;
  --callout-todo: 94,129,172;
  --callout-warning: 208,135,112;
  --canvas-background: rgb(33, 34, 36);
  --canvas-card-label-color: rgb(97, 96, 96);
  --canvas-color-1: 97, 96, 96;
  --canvas-color-2: 208,135,112;
  --canvas-color-3: 235,203,139;
  --canvas-color-4: 163,190,140;
  --canvas-color-5: 97, 96, 96;
  --canvas-color-6: 180,142,173;
  --caret-color: rgb(97, 96, 96);
  --checkbox-border-color: rgb(97, 96, 96);
  --checkbox-border-color-hover: rgb(97, 96, 96);
  --checkbox-color: rgb(97, 96, 96);
  --checkbox-color-hover: rgb(97, 96, 96);
  --checkbox-marker-color: rgb(33, 34, 36);
  --checkbox-radius: 0;
  --checklist-done-color: rgba(97, 96, 96, 0.5);
  --code-background: rgb(33, 34, 36);
  --code-border-color: rgb(45, 45, 46);
  --code-comment: rgb(97, 96, 96);
  --code-function: rgb(235, 203, 139);
  --code-important: rgb(208, 135, 112);
  --code-normal: rgb(97, 96, 96);
  --code-operator: rgb(97, 96, 96);
  --code-property: rgb(97, 96, 96);
  --code-punctuation: rgb(97, 96, 96);
  --code-string: rgb(163, 190, 140);
  --code-tag: rgb(97, 96, 96);
  --code-value: rgb(180, 142, 173);
  --collapse-icon-color: rgb(97, 96, 96);
  --collapse-icon-color-collapsed: rgb(208, 135, 112);
  --color-accent: rgb(190, 96, 105);
  --color-accent-1: rgb(203, 124, 136);
  --color-accent-2: rgb(215, 152, 164);
  --color-accent-hsl: 354, 42%, 56%;
  --color-blue: rgb(94, 129, 172);
  --color-blue-rgb: 94,129,172;
  --color-cyan: rgb(97, 96, 96);
  --color-cyan-rgb: 97, 96, 96;
  --color-green: rgb(163, 190, 140);
  --color-green-rgb: 163,190,140;
  --color-orange: rgb(208, 135, 112);
  --color-orange-rgb: 208,135,112;
  --color-purple: rgb(180, 142, 173);
  --color-purple-rgb: 180,142,173;
  --color-red: rgb(97, 96, 96);
  --color-red-rgb: 97, 96, 96;
  --color-yellow: rgb(235, 203, 139);
  --color-yellow-rgb: 235,203,139;
  --cursor-line-background: rgba(rgb(33, 34, 36), 0.5);
  --dark0: rgb(33, 34, 36);
  --dark0_x: 33, 34, 36;
  --dark1: rgb(33, 34, 36);
  --dark1_x: 33, 34, 36;
  --dark2: rgb(45, 45, 46);
  --dark2_x: 45, 45, 46;
  --dark3: rgb(76, 86, 106);
  --dark3_x: 76,86,106;
  --dark4: rgb(76, 86, 106);
  --dark4_x: 33, 34, 36;
  --dataview-key: rgb(97, 96, 96);
  --dataview-key-background: rgba(97, 96, 96, 0.3);
  --dataview-value: rgb(97, 96, 96);
  --dataview-value-background: rgba(97, 96, 96, 0.3);
  --divider-color: rgb(45, 45, 46);
  --divider-color-hover: rgb(190, 96, 105);
  --embed-block-shadow-hover: 0 0 0 1px rgb(45, 45, 46), inset 0 0 0 1px rgb(45, 45, 46);
  --embed-border-left: 6px double rgb(190, 96, 105);
  --embed-border-start: 2px solid rgb(190, 96, 105);
  --file-header-background: rgb(33, 34, 36);
  --file-header-background-focused: rgb(33, 34, 36);
  --flair-color: rgb(97, 96, 96);
  --flashing-background: rgba(97, 96, 96, 0.3);
  --footnote-divider-color: rgb(45, 45, 46);
  --footnote-id-color: rgb(97, 96, 96);
  --footnote-id-color-no-occurrences: rgb(97, 96, 96);
  --frost0: rgb(97, 96, 96);
  --frost0_x: 97, 96, 96;
  --frost1: rgb(97, 96, 96);
  --frost1_x: 97, 96, 96;
  --frost2: rgb(97, 96, 96);
  --frost2_x: 97, 96, 96;
  --frost3: rgb(94, 129, 172);
  --frost3_x: 94,129,172;
  --graph-line: rgb(76, 86, 106);
  --graph-node: rgb(97, 96, 96);
  --graph-node-attachment: rgb(163, 190, 140);
  --graph-node-focused: rgb(208, 135, 112);
  --graph-node-tag: rgb(97, 96, 96);
  --graph-node-unresolved: rgb(97, 96, 96);
  --graph-text: rgb(97, 96, 96);
  --green: rgb(163, 190, 140);
  --green_x: 163,190,140;
  --h1-color: rgb(97, 96, 96);
  --h2-color: rgb(235, 203, 139);
  --h3-color: rgb(163, 190, 140);
  --h4-color: rgb(180, 142, 173);
  --h5-color: rgb(97, 96, 96);
  --h6-color: rgb(97, 96, 96);
  --heading-formatting: rgb(97, 96, 96);
  --hr-color: rgb(45, 45, 46);
  --icon-color: rgb(97, 96, 96);
  --icon-color-active: rgb(208, 135, 112);
  --icon-color-focused: rgb(97, 96, 96);
  --icon-color-hover: rgb(97, 96, 96);
  --inline-title-color: rgb(235, 203, 139);
  --input-date-separator: rgb(97, 96, 96);
  --input-placeholder-color: rgb(97, 96, 96);
  --interactive-accent: rgb(190, 96, 105);
  --interactive-accent-hover: rgb(203, 124, 136);
  --interactive-accent-hsl: 354, 42%, 56%;
  --italic-color: rgb(235, 203, 139);
  --light0: rgb(97, 96, 96);
  --light0_x: 97, 96, 96;
  --light1: rgb(97, 96, 96);
  --light1_x: 97, 96, 96;
  --light2: rgb(97, 96, 96);
  --light2_x: 97, 96, 96;
  --light3: rgb(97, 96, 96);
  --light3_x: 97, 96, 96;
  --link-color: rgb(208, 135, 112);
  --link-color-hover: rgb(97, 96, 96);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(208, 135, 112);
  --link-external-color-hover: rgb(97, 96, 96);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(208, 135, 112);
  --link-unresolved-decoration-color: rgba(190, 96, 105, 0.3);
  --list-marker-color: rgb(97, 96, 96);
  --list-marker-color-collapsed: rgb(208, 135, 112);
  --list-marker-color-hover: rgb(97, 96, 96);
  --menu-background: rgb(33, 34, 36);
  --mermaid-loopline: rgb(97, 96, 96);
  --mermaid-note: rgb(94, 129, 172);
  --metadata-border-color: rgb(45, 45, 46);
  --metadata-divider-color: rgb(45, 45, 46);
  --metadata-input-text-color: rgb(97, 96, 96);
  --metadata-label-text-color: rgb(97, 96, 96);
  --metadata-label-text-color-hover: rgb(97, 96, 96);
  --modal-background: rgb(33, 34, 36);
  --nav-collapse-icon-color: rgb(97, 96, 96);
  --nav-collapse-icon-color-collapsed: rgb(97, 96, 96);
  --nav-file-tag: rgba(235, 203, 139, 0.9);
  --nav-heading-color: rgb(97, 96, 96);
  --nav-heading-color-collapsed: rgb(97, 96, 96);
  --nav-heading-color-collapsed-hover: rgb(97, 96, 96);
  --nav-heading-color-hover: rgb(97, 96, 96);
  --nav-item-background-selected: rgba(190, 96, 105, 0.15);
  --nav-item-color: rgb(97, 96, 96);
  --nav-item-color-active: rgb(97, 96, 96);
  --nav-item-color-highlighted: rgb(208, 135, 112);
  --nav-item-color-hover: rgb(97, 96, 96);
  --nav-item-color-selected: rgb(97, 96, 96);
  --nav-tag-color: rgb(97, 96, 96);
  --nav-tag-color-active: rgb(97, 96, 96);
  --nav-tag-color-hover: rgb(97, 96, 96);
  --orange: rgb(208, 135, 112);
  --orange_x: 208,135,112;
  --pdf-background: rgb(33, 34, 36);
  --pdf-page-background: rgb(33, 34, 36);
  --pdf-shadow: 0 0 0 1px rgb(45, 45, 46);
  --pdf-sidebar-background: rgb(33, 34, 36);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(45, 45, 46);
  --pill-border-color: rgb(45, 45, 46);
  --pill-color: rgb(97, 96, 96);
  --pill-color-hover: rgb(97, 96, 96);
  --pill-color-remove: rgb(97, 96, 96);
  --pill-color-remove-hover: rgb(208, 135, 112);
  --prompt-background: rgb(33, 34, 36);
  --purple: rgb(180, 142, 173);
  --purple_x: 180,142,173;
  --red: rgb(97, 96, 96);
  --red_x: 97, 96, 96;
  --ribbon-background: rgb(33, 34, 36);
  --ribbon-background-collapsed: rgb(33, 34, 36);
  --search-clear-button-color: rgb(97, 96, 96);
  --search-icon-color: rgb(97, 96, 96);
  --search-result-background: rgb(33, 34, 36);
  --setting-group-heading-color: rgb(97, 96, 96);
  --setting-items-background: rgb(33, 34, 36);
  --setting-items-border-color: rgb(45, 45, 46);
  --slider-track-background: rgb(45, 45, 46);
  --status-bar-background: rgb(33, 34, 36);
  --status-bar-border-color: rgb(45, 45, 46);
  --status-bar-text-color: rgb(97, 96, 96);
  --suggestion-background: rgb(33, 34, 36);
  --sync-avatar-color-1: rgb(97, 96, 96);
  --sync-avatar-color-2: rgb(208, 135, 112);
  --sync-avatar-color-3: rgb(235, 203, 139);
  --sync-avatar-color-4: rgb(163, 190, 140);
  --sync-avatar-color-5: rgb(97, 96, 96);
  --sync-avatar-color-6: rgb(94, 129, 172);
  --sync-avatar-color-7: rgb(180, 142, 173);
  --tab-background-active: rgb(33, 34, 36);
  --tab-container-background: rgb(33, 34, 36);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(45, 45, 46);
  --tab-switcher-background: rgb(33, 34, 36);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 34, 36), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(190, 96, 105);
  --tab-text-color: rgb(97, 96, 96);
  --tab-text-color-active: rgb(97, 96, 96);
  --tab-text-color-focused: rgb(97, 96, 96);
  --tab-text-color-focused-active: rgb(97, 96, 96);
  --tab-text-color-focused-active-current: rgb(97, 96, 96);
  --tab-text-color-focused-highlighted: rgb(208, 135, 112);
  --table-add-button-border-color: rgb(45, 45, 46);
  --table-border-color: rgb(45, 45, 46);
  --table-drag-handle-background-active: rgb(190, 96, 105);
  --table-drag-handle-color: rgb(97, 96, 96);
  --table-header-background: rgb(53, 53, 54);
  --table-header-background-hover: rgb(53, 53, 54);
  --table-header-border-color: rgb(45, 45, 46);
  --table-header-color: rgb(97, 96, 96);
  --table-row-background-hover: rgb(76, 86, 106);
  --table-row-even-background: rgb(49, 48, 47);
  --table-row-odd-background: rgb(40, 42, 42);
  --table-selection: rgba(190, 96, 105, 0.1);
  --table-selection-border-color: rgb(190, 96, 105);
  --tag-background: rgb(33, 34, 36);
  --tag-background-hover: rgb(33, 34, 36);
  --tag-border-color: rgba(190, 96, 105, 0.15);
  --tag-border-color-hover: rgba(190, 96, 105, 0.15);
  --tag-color: rgb(76, 86, 106);
  --tag-color-hover: rgb(208, 135, 112);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --text-accent: rgb(208, 135, 112);
  --text-accent-hover: rgb(97, 96, 96);
  --text-error: rgb(97, 96, 96);
  --text-faint: rgb(97, 96, 96);
  --text-highlight-bg: rgb(97, 96, 96);
  --text-highlight-fg: rgb(33, 34, 36);
  --text-muted: rgb(97, 96, 96);
  --text-normal: rgb(97, 96, 96);
  --text-selection: rgba(97, 96, 96, 0.6);
  --text-success: rgb(163, 190, 140);
  --text-warning: rgb(208, 135, 112);
  --titlebar-background: rgb(33, 34, 36);
  --titlebar-background-focused: rgb(45, 45, 46);
  --titlebar-border-color: rgb(45, 45, 46);
  --titlebar-text-color: rgb(97, 96, 96);
  --titlebar-text-color-focused: rgb(97, 96, 96);
  --vault-profile-color: rgb(97, 96, 96);
  --vault-profile-color-hover: rgb(97, 96, 96);
  --yellow: rgb(235, 203, 139);
  --yellow_x: 235,203,139;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(45, 45, 46);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 34, 36);
  border-left-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body div#quartz-root {
  background-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}`,
    typography: `body .page article p > b, b {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration: rgb(84, 84, 84);
  text-decoration-color: rgb(84, 84, 84);
}

body .page article p > em, em {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration: rgb(84, 84, 84);
  text-decoration-color: rgb(84, 84, 84);
}

body .page article p > i, i {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration: rgb(84, 84, 84);
  text-decoration-color: rgb(84, 84, 84);
}

body .page article p > strong, strong {
  color: rgb(84, 84, 84);
  outline: rgb(84, 84, 84) none 0px;
  text-decoration: rgb(84, 84, 84);
  text-decoration-color: rgb(84, 84, 84);
}

body .text-highlight {
  background-color: rgb(97, 96, 96);
  color: rgb(33, 34, 36);
  outline: rgb(33, 34, 36) none 0px;
  text-decoration: rgb(33, 34, 36);
  text-decoration-color: rgb(33, 34, 36);
}

body del {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration: line-through rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body p {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}`,
    links: `body a.external, footer a {
  color: rgb(56, 70, 76);
  font-weight: 600;
  outline: rgb(56, 70, 76) none 0px;
  text-decoration: rgb(56, 70, 76);
  text-decoration-color: rgb(56, 70, 76);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(208, 135, 112);
  font-weight: 600;
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body a.internal.broken {
  color: rgb(208, 135, 112);
  font-weight: 600;
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgba(190, 96, 105, 0.3);
  text-decoration-color: rgba(190, 96, 105, 0.3);
}`,
    lists: `body dd {
  color: rgb(97, 96, 96);
}

body dt {
  color: rgb(97, 96, 96);
}

body ol > li {
  color: rgb(97, 96, 96);
}

body ol.overflow {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body ul > li {
  color: rgb(97, 96, 96);
}

body ul.overflow {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body table {
  border-bottom-color: rgb(33, 34, 36);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 34, 36);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(33, 34, 36);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 34, 36);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(97, 96, 96);
}

body tbody tr:nth-child(even) {
  background-color: rgb(49, 48, 47);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(40, 42, 42);
}

body td {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body th {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
  color: rgb(97, 96, 96);
}

body thead {
  border-bottom-color: rgb(45, 45, 46);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
}

body tr {
  background-color: rgb(53, 53, 54);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(33, 34, 36);
  border-right-color: rgb(33, 34, 36);
  border-top-color: rgb(33, 34, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}

body pre:has(> code) {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
}`,
    images: `body audio {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body figcaption {
  color: rgb(97, 96, 96);
}

body figure {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body img {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body video {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    embeds: `body .file-embed {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body .footnotes {
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .transclude {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(190, 96, 105);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body .transclude-inner {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(190, 96, 105);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(97, 96, 96, 0.5);
  text-decoration: line-through rgba(97, 96, 96, 0.5);
  text-decoration-color: rgba(97, 96, 96, 0.5);
}

body input[type=checkbox] {
  border-bottom-color: rgb(97, 96, 96);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='*'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='-'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='/'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='>'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='?'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='I'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='S'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='b'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='c'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='d'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='f'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='i'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='k'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='l'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='p'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='u'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body li.task-list-item[data-task='w'] {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
}

body .callout[data-callout="abstract"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 180,142,173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-left-color: rgba(180, 142, 173, 0.25);
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgba(180, 142, 173, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 208,135,112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 163,190,140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 97, 96, 96;
  background-color: rgba(97, 96, 96, 0.1);
  border-bottom-color: rgba(97, 96, 96, 0.25);
  border-left-color: rgba(97, 96, 96, 0.25);
  border-right-color: rgba(97, 96, 96, 0.25);
  border-top-color: rgba(97, 96, 96, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 94,129,172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 208,135,112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 34, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(97, 96, 96);
  outline: rgb(97, 96, 96) none 0px;
  text-decoration: rgb(97, 96, 96);
  text-decoration-color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(97, 96, 96);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 34, 36);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(97, 96, 96);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgba(190, 96, 105, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(190, 96, 105, 0.15);
  border-right-color: rgba(190, 96, 105, 0.15);
  border-top-color: rgba(190, 96, 105, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(76, 86, 106);
}

body h1 {
  color: rgb(57, 57, 56);
}

body h2 {
  color: rgb(57, 57, 56);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 203, 139);
}

body h3 {
  color: rgb(57, 57, 56);
}

body h4 {
  color: rgb(57, 57, 56);
}

body h5 {
  color: rgb(57, 57, 56);
}

body h6 {
  color: rgb(57, 57, 56);
}

body hr {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
}`,
    scrollbars: `body .callout {
  --callout-color: 94,129,172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 34, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 34, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}`,
    footer: `body footer {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body footer ul li a {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(97, 96, 96);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(97, 96, 96);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body li.section-li > .section .meta {
  color: rgb(97, 96, 96);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(97, 96, 96);
  text-decoration: rgb(97, 96, 96);
}

body ul.section-ul {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .darkmode svg {
  color: rgb(97, 96, 96);
  stroke: rgb(97, 96, 96);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .breadcrumb-element p {
  color: rgb(97, 96, 96);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .metadata {
  border-bottom-color: rgb(45, 45, 46);
  border-left-color: rgb(45, 45, 46);
  border-right-color: rgb(45, 45, 46);
  border-top-color: rgb(45, 45, 46);
  color: rgb(97, 96, 96);
}

body .metadata-properties {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body .navigation-progress {
  background-color: rgb(33, 34, 36);
}

body .page-header h2.page-title {
  color: rgb(97, 96, 96);
}

body abbr {
  color: rgb(97, 96, 96);
  text-decoration: underline dotted rgb(97, 96, 96);
}

body details {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body input[type=text] {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body kbd {
  background-color: rgb(33, 34, 36);
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
  color: rgb(97, 96, 96);
}

body progress {
  border-bottom-color: rgb(97, 96, 96);
  border-left-color: rgb(97, 96, 96);
  border-right-color: rgb(97, 96, 96);
  border-top-color: rgb(97, 96, 96);
}

body sub {
  color: rgb(97, 96, 96);
}

body summary {
  color: rgb(97, 96, 96);
}

body sup {
  color: rgb(97, 96, 96);
}`,
  },
  light: {},
};
