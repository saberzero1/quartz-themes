import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 166;
  --accent-l: 58%;
  --accent-s: 23%;
  --background-accent: rgb(50, 48, 47);
  --background-modifier-active-hover: rgba(123, 173, 161, 0.1);
  --background-modifier-border: rgb(60, 56, 54);
  --background-modifier-error: rgb(234, 105, 98);
  --background-modifier-error-hover: rgb(234, 105, 98);
  --background-modifier-error-rgb: 234,105,98;
  --background-modifier-success: rgb(169, 182, 101);
  --background-modifier-success-rgb: 169,182,101;
  --background-primary: rgb(40, 40, 40);
  --background-primary-alt: rgb(50, 48, 47);
  --background-secondary: rgb(29, 32, 33);
  --background-secondary-alt: rgb(60, 56, 54);
  --bases-cards-background: rgb(40, 40, 40);
  --bases-cards-cover-background: rgb(50, 48, 47);
  --bases-cards-shadow: 0 0 0 1px rgb(60, 56, 54);
  --bases-embed-border-color: rgb(60, 56, 54);
  --bases-group-heading-property-color: rgb(213, 196, 161);
  --bases-table-border-color: rgb(60, 56, 54);
  --bases-table-cell-background-active: rgb(40, 40, 40);
  --bases-table-cell-background-disabled: rgb(50, 48, 47);
  --bases-table-cell-background-selected: rgba(123, 173, 161, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(123, 173, 161);
  --bases-table-group-background: rgb(50, 48, 47);
  --bases-table-header-background: rgb(40, 40, 40);
  --bases-table-header-color: rgb(213, 196, 161);
  --bases-table-row-background-hover: rgb(80, 73, 69);
  --bases-table-summary-background: rgb(40, 40, 40);
  --blockquote-border-color: rgb(123, 173, 161);
  --bold-color: rgb(231, 138, 78);
  --bold-weight: 600;
  --calendar-background-hover: rgb(60, 56, 54);
  --calendar-hover: rgb(234, 105, 98);
  --callout-bug: 234,105,98;
  --callout-default: 69,112,122;
  --callout-error: 234,105,98;
  --callout-example: 211,134,155;
  --callout-fail: 234,105,98;
  --callout-important: 125,174,163;
  --callout-info: 69,112,122;
  --callout-question: 195,94,10;
  --callout-success: 169,182,101;
  --callout-summary: 125,174,163;
  --callout-tip: 125,174,163;
  --callout-todo: 69,112,122;
  --callout-warning: 195,94,10;
  --canvas-background: rgb(40, 40, 40);
  --canvas-card-label-color: rgb(235, 219, 178);
  --canvas-color-1: 234,105,98;
  --canvas-color-2: 195,94,10;
  --canvas-color-3: 231,138,78;
  --canvas-color-4: 169,182,101;
  --canvas-color-5: 125,174,163;
  --canvas-color-6: 211,134,155;
  --caret-color: rgb(212, 190, 152);
  --checkbox-border-color: rgb(168, 153, 132);
  --checkbox-border-color-hover: rgb(168, 153, 132);
  --checkbox-color: rgb(168, 153, 132);
  --checkbox-color-hover: rgb(168, 153, 132);
  --checkbox-marker-color: rgb(40, 40, 40);
  --checkbox-radius: 0;
  --checklist-done-color: rgba(213, 196, 161, 0.5);
  --code-background: rgb(60, 56, 54);
  --code-border-color: rgb(60, 56, 54);
  --code-comment: rgb(235, 219, 178);
  --code-function: rgb(231, 138, 78);
  --code-important: rgb(195, 94, 10);
  --code-keyword: rgb(211, 134, 155);
  --code-normal: rgb(125, 174, 163);
  --code-operator: rgb(234, 105, 98);
  --code-property: rgb(125, 174, 163);
  --code-punctuation: rgb(213, 196, 161);
  --code-string: rgb(169, 182, 101);
  --code-tag: rgb(234, 105, 98);
  --code-value: rgb(211, 134, 155);
  --collapse-icon-color: rgb(235, 219, 178);
  --collapse-icon-color-collapsed: rgb(231, 138, 78);
  --color-accent: rgb(123, 173, 161);
  --color-accent-1: rgb(151, 190, 179);
  --color-accent-2: rgb(176, 207, 197);
  --color-accent-hsl: 166, 23%, 58%;
  --color-blue: rgb(69, 112, 122);
  --color-blue-rgb: 69,112,122;
  --color-cyan: rgb(125, 174, 163);
  --color-cyan-rgb: 125,174,163;
  --color-green: rgb(169, 182, 101);
  --color-green-rgb: 169,182,101;
  --color-orange: rgb(195, 94, 10);
  --color-orange-rgb: 195,94,10;
  --color-pink: rgb(211, 134, 155);
  --color-pink-rgb: 211,134,155;
  --color-purple: rgb(211, 134, 155);
  --color-purple-rgb: 211,134,155;
  --color-red: rgb(234, 105, 98);
  --color-red-rgb: 234,105,98;
  --color-yellow: rgb(231, 138, 78);
  --color-yellow-rgb: 231,138,78;
  --cursor-line-background: rgba(60, 56, 54, 0.5);
  --dark-text: rgb(101, 71, 53);
  --dark-text-faint: rgb(179, 126, 93);
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(115, 81, 69);
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1-x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2-x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3-x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4-x: 124,111,100;
  --dataview-key: rgb(235, 219, 178);
  --dataview-key-background: rgba(193, 74, 74, 0.5);
  --dataview-value: rgb(235, 219, 178);
  --dataview-value-background: rgba(169, 182, 101, 0.3);
  --divider-color: rgb(60, 56, 54);
  --divider-color-hover: rgb(123, 173, 161);
  --embed-block-shadow-hover: 0 0 0 1px rgb(60, 56, 54), inset 0 0 0 1px rgb(60, 56, 54);
  --embed-border-left: 6px double rgb(123, 173, 161);
  --embed-border-start: 2px solid rgb(123, 173, 161);
  --faded-aqua: rgb(76, 122, 93);
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(69, 112, 122);
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(108, 120, 46);
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(148, 94, 128);
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(193, 74, 74);
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(195, 94, 10);
  --faded-yellow-x: 195,94,10;
  --file-header-background: rgb(40, 40, 40);
  --file-header-background-focused: rgb(40, 40, 40);
  --flair-color: rgb(212, 190, 152);
  --flashing-background: rgba(234, 105, 98, 0.3);
  --footnote-divider-color: rgb(60, 56, 54);
  --footnote-id-color: rgb(213, 196, 161);
  --footnote-id-color-no-occurrences: rgb(235, 219, 178);
  --graph-line: rgb(80, 73, 69);
  --graph-node: rgb(189, 174, 147);
  --graph-node-attachment: rgb(169, 182, 101);
  --graph-node-focused: rgb(231, 138, 78);
  --graph-node-tag: rgb(234, 105, 98);
  --graph-node-unresolved: rgb(235, 219, 178);
  --graph-text: rgb(212, 190, 152);
  --gray: rgb(146, 131, 116);
  --gray-x: 146,131,116;
  --h1-color: rgb(234, 105, 98);
  --h2-color: rgb(231, 138, 78);
  --h3-color: rgb(169, 182, 101);
  --h4-color: rgb(137, 180, 130);
  --h5-color: rgb(125, 174, 163);
  --h6-color: rgb(211, 134, 155);
  --heading-formatting: rgb(235, 219, 178);
  --hr-color: rgb(60, 56, 54);
  --icon-color: rgb(213, 196, 161);
  --icon-color-active: rgb(231, 138, 78);
  --icon-color-focused: rgb(125, 174, 163);
  --icon-color-hover: rgb(234, 105, 98);
  --inline-title-color: rgb(231, 138, 78);
  --input-date-separator: rgb(235, 219, 178);
  --input-placeholder-color: rgb(235, 219, 178);
  --interactive-accent: rgb(123, 173, 161);
  --interactive-accent-hover: rgb(151, 190, 179);
  --interactive-accent-hsl: 166, 23%, 58%;
  --italic-color: rgb(231, 138, 78);
  --light-text: rgb(212, 190, 152);
  --light-text-x: 212,190,152;
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1-x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2-x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3-x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4-x: 168,153,132;
  --link-color: rgb(231, 138, 78);
  --link-color-hover: rgb(195, 94, 10);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(231, 138, 78);
  --link-external-color-hover: rgb(195, 94, 10);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(231, 138, 78);
  --link-unresolved-decoration-color: rgba(123, 173, 161, 0.3);
  --list-marker-color: rgb(235, 219, 178);
  --list-marker-color-collapsed: rgb(231, 138, 78);
  --list-marker-color-hover: rgb(213, 196, 161);
  --menu-background: rgb(29, 32, 33);
  --mermaid-actor: rgb(80, 73, 69);
  --mermaid-loopline: rgb(125, 174, 163);
  --mermaid-note: rgb(125, 174, 163);
  --metadata-border-color: rgb(60, 56, 54);
  --metadata-divider-color: rgb(60, 56, 54);
  --metadata-input-text-color: rgb(212, 190, 152);
  --metadata-label-text-color: rgb(213, 196, 161);
  --metadata-label-text-color-hover: rgb(213, 196, 161);
  --modal-background: rgb(40, 40, 40);
  --nav-collapse-icon-color: rgb(235, 219, 178);
  --nav-collapse-icon-color-collapsed: rgb(235, 219, 178);
  --nav-file-tag: rgba(231, 138, 78, 0.9);
  --nav-heading-color: rgb(212, 190, 152);
  --nav-heading-color-collapsed: rgb(235, 219, 178);
  --nav-heading-color-collapsed-hover: rgb(213, 196, 161);
  --nav-heading-color-hover: rgb(212, 190, 152);
  --nav-item-background-selected: rgba(123, 173, 161, 0.15);
  --nav-item-color: rgb(213, 196, 161);
  --nav-item-color-active: rgb(137, 180, 130);
  --nav-item-color-highlighted: rgb(231, 138, 78);
  --nav-item-color-hover: rgb(234, 105, 98);
  --nav-item-color-selected: rgb(212, 190, 152);
  --nav-tag-color: rgb(235, 219, 178);
  --nav-tag-color-active: rgb(213, 196, 161);
  --nav-tag-color-hover: rgb(213, 196, 161);
  --neutral-aqua: rgb(137, 180, 130);
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(125, 174, 163);
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(169, 182, 101);
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(211, 134, 155);
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(234, 105, 98);
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(231, 138, 78);
  --neutral-yellow-x: 231,138,78;
  --pdf-background: rgb(40, 40, 40);
  --pdf-page-background: rgb(40, 40, 40);
  --pdf-shadow: 0 0 0 1px rgb(60, 56, 54);
  --pdf-sidebar-background: rgb(40, 40, 40);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(60, 56, 54);
  --pill-border-color: rgb(60, 56, 54);
  --pill-color: rgb(213, 196, 161);
  --pill-color-hover: rgb(212, 190, 152);
  --pill-color-remove: rgb(235, 219, 178);
  --pill-color-remove-hover: rgb(231, 138, 78);
  --prompt-background: rgb(40, 40, 40);
  --ribbon-background: rgb(29, 32, 33);
  --ribbon-background-collapsed: rgb(40, 40, 40);
  --search-clear-button-color: rgb(213, 196, 161);
  --search-icon-color: rgb(213, 196, 161);
  --search-result-background: rgb(40, 40, 40);
  --setting-group-heading-color: rgb(212, 190, 152);
  --setting-items-background: rgb(50, 48, 47);
  --setting-items-border-color: rgb(60, 56, 54);
  --slider-track-background: rgb(60, 56, 54);
  --status-bar-background: rgb(29, 32, 33);
  --status-bar-border-color: rgb(60, 56, 54);
  --status-bar-text-color: rgb(213, 196, 161);
  --suggestion-background: rgb(40, 40, 40);
  --sync-avatar-color-1: rgb(234, 105, 98);
  --sync-avatar-color-2: rgb(195, 94, 10);
  --sync-avatar-color-3: rgb(231, 138, 78);
  --sync-avatar-color-4: rgb(169, 182, 101);
  --sync-avatar-color-5: rgb(125, 174, 163);
  --sync-avatar-color-6: rgb(69, 112, 122);
  --sync-avatar-color-7: rgb(211, 134, 155);
  --sync-avatar-color-8: rgb(211, 134, 155);
  --tab-background-active: rgb(40, 40, 40);
  --tab-container-background: rgb(29, 32, 33);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(60, 56, 54);
  --tab-switcher-background: rgb(29, 32, 33);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 32, 33), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(123, 173, 161);
  --tab-text-color: rgb(235, 219, 178);
  --tab-text-color-active: rgb(213, 196, 161);
  --tab-text-color-focused: rgb(213, 196, 161);
  --tab-text-color-focused-active: rgb(231, 138, 78);
  --tab-text-color-focused-active-current: rgb(234, 105, 98);
  --tab-text-color-focused-highlighted: rgb(231, 138, 78);
  --table-add-button-border-color: rgb(60, 56, 54);
  --table-border-color: rgb(60, 56, 54);
  --table-drag-handle-background-active: rgb(123, 173, 161);
  --table-drag-handle-color: rgb(235, 219, 178);
  --table-header-background: rgba(40, 40, 40, 0.2);
  --table-header-background-hover: rgb(80, 73, 69);
  --table-header-border-color: rgb(60, 56, 54);
  --table-header-color: rgb(212, 190, 152);
  --table-row-background-hover: rgb(80, 73, 69);
  --table-row-even-background: rgba(80, 73, 69, 0.2);
  --table-row-odd-background: rgba(80, 73, 69, 0.4);
  --table-selection: rgba(123, 173, 161, 0.1);
  --table-selection-border-color: rgb(123, 173, 161);
  --tag-background: rgb(80, 73, 69);
  --tag-background-hover: rgb(60, 56, 54);
  --tag-border-color: rgba(123, 173, 161, 0.15);
  --tag-border-color-hover: rgba(123, 173, 161, 0.15);
  --tag-color: rgb(137, 180, 130);
  --tag-color-hover: rgb(231, 138, 78);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --text-accent: rgb(231, 138, 78);
  --text-accent-hover: rgb(195, 94, 10);
  --text-error: rgb(234, 105, 98);
  --text-faint: rgb(235, 219, 178);
  --text-highlight-bg: rgb(231, 138, 78);
  --text-highlight-fg: rgb(29, 32, 33);
  --text-muted: rgb(213, 196, 161);
  --text-normal: rgb(212, 190, 152);
  --text-selection: rgba(234, 105, 98, 0.6);
  --text-success: rgb(169, 182, 101);
  --text-warning: rgb(195, 94, 10);
  --titlebar-background: rgb(29, 32, 33);
  --titlebar-background-focused: rgb(60, 56, 54);
  --titlebar-border-color: rgb(60, 56, 54);
  --titlebar-text-color: rgb(213, 196, 161);
  --titlebar-text-color-focused: rgb(234, 105, 98);
  --vault-profile-color: rgb(212, 190, 152);
  --vault-profile-color-hover: rgb(212, 190, 152);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(212, 190, 152);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 56, 54);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(212, 190, 152);
}`,
    typography: `body .page article p > b, b {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body .page article p > em, em {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body .page article p > i, i {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body .page article p > strong, strong {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body .text-highlight {
  background-color: rgb(231, 138, 78);
  color: rgb(29, 32, 33);
  outline: rgb(29, 32, 33) none 0px;
  text-decoration: rgb(29, 32, 33);
  text-decoration-color: rgb(29, 32, 33);
}

body del {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration: line-through rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body p {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body a.internal.broken {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: rgba(123, 173, 161, 0.3);
}`,
    lists: `body dd {
  color: rgb(212, 190, 152);
}

body dt {
  color: rgb(212, 190, 152);
}

body ol > li {
  color: rgb(212, 190, 152);
}

body ol.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body ul > li {
  color: rgb(212, 190, 152);
}

body ul.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body table {
  border-bottom-color: rgb(29, 32, 33);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(29, 32, 33);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(29, 32, 33);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(29, 32, 33);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(212, 190, 152);
}

body tbody tr:nth-child(even) {
  background-color: rgba(80, 73, 69, 0.2);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(80, 73, 69, 0.4);
}

body td {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

body th {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
  color: rgb(212, 190, 152);
}

body thead {
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}

body tr {
  background-color: rgba(40, 40, 40, 0.2);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

body pre > code > [data-line] {
  border-left-color: rgb(231, 138, 78);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 138, 78);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 138, 78);
  border-left-color: rgb(231, 138, 78);
  border-right-color: rgb(231, 138, 78);
  border-top-color: rgb(231, 138, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

body pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body figcaption {
  color: rgb(212, 190, 152);
}

body figure {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body img {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body video {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    embeds: `body .file-embed {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body .footnotes {
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

body .transclude {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(123, 173, 161);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(123, 173, 161);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(213, 196, 161, 0.5);
  text-decoration: line-through rgba(213, 196, 161, 0.5);
  text-decoration-color: rgba(213, 196, 161, 0.5);
}

body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='-'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 190, 152);
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

body .callout[data-callout="abstract"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 211,134,155;
  background-color: rgba(211, 134, 155, 0.1);
  border-bottom-color: rgba(211, 134, 155, 0.25);
  border-left-color: rgba(211, 134, 155, 0.25);
  border-right-color: rgba(211, 134, 155, 0.25);
  border-top-color: rgba(211, 134, 155, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 234,105,98;
  background-color: rgba(234, 105, 98, 0.1);
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 169,182,101;
  background-color: rgba(169, 182, 101, 0.1);
  border-bottom-color: rgba(169, 182, 101, 0.25);
  border-left-color: rgba(169, 182, 101, 0.25);
  border-right-color: rgba(169, 182, 101, 0.25);
  border-top-color: rgba(169, 182, 101, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(137, 180, 130);
}

body h1 {
  color: rgb(234, 105, 98);
}

body h2 {
  color: rgb(231, 138, 78);
}

body h2.page-title, h2.page-title a {
  color: rgb(231, 138, 78);
}

body h3 {
  color: rgb(169, 182, 101);
}

body h4 {
  color: rgb(137, 180, 130);
}

body h5 {
  color: rgb(125, 174, 163);
}

body h6 {
  color: rgb(211, 134, 155);
}

body hr {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
}`,
    scrollbars: `body .callout {
  --callout-color: 69,112,122;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(137, 180, 130);
  border-left-color: rgb(137, 180, 130);
  border-right-color: rgb(137, 180, 130);
  border-top-color: rgb(137, 180, 130);
  color: rgb(137, 180, 130);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `body footer {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(213, 196, 161);
}

body footer ul li a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 190, 152);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .breadcrumb-element p {
  color: rgb(235, 219, 178);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

body .metadata {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(213, 196, 161);
}

body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .navigation-progress {
  background-color: rgb(29, 32, 33);
}

body .page-header h2.page-title {
  color: rgb(212, 190, 152);
}

body abbr {
  color: rgb(212, 190, 152);
  text-decoration: underline dotted rgb(212, 190, 152);
}

body details {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body kbd {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

body progress {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

body sub {
  color: rgb(212, 190, 152);
}

body summary {
  color: rgb(212, 190, 152);
}

body sup {
  color: rgb(212, 190, 152);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 166;
  --accent-l: 58%;
  --accent-s: 23%;
  --background-accent: rgb(242, 229, 188);
  --background-modifier-active-hover: rgba(123, 173, 161, 0.1);
  --background-modifier-border: rgb(213, 196, 161);
  --background-modifier-error: rgb(193, 74, 74);
  --background-modifier-error-hover: rgb(193, 74, 74);
  --background-modifier-error-rgb: 193,74,74;
  --background-modifier-success: rgb(108, 120, 46);
  --background-modifier-success-rgb: 108,120,46;
  --background-primary: rgb(249, 245, 215);
  --background-primary-alt: rgb(249, 245, 215);
  --background-secondary: rgb(235, 219, 178);
  --background-secondary-alt: rgb(235, 219, 178);
  --bases-cards-background: rgb(249, 245, 215);
  --bases-cards-cover-background: rgb(249, 245, 215);
  --bases-cards-shadow: 0 0 0 1px rgb(213, 196, 161);
  --bases-embed-border-color: rgb(213, 196, 161);
  --bases-group-heading-property-color: rgb(115, 81, 69);
  --bases-table-border-color: rgb(213, 196, 161);
  --bases-table-cell-background-active: rgb(249, 245, 215);
  --bases-table-cell-background-disabled: rgb(249, 245, 215);
  --bases-table-cell-background-selected: rgba(123, 173, 161, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(136, 180, 169);
  --bases-table-group-background: rgb(249, 245, 215);
  --bases-table-header-background: rgb(249, 245, 215);
  --bases-table-header-color: rgb(115, 81, 69);
  --bases-table-row-background-hover: rgb(213, 196, 161);
  --bases-table-summary-background: rgb(249, 245, 215);
  --blockquote-border-color: rgb(136, 180, 169);
  --blur-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent));
  --bold-color: rgb(195, 94, 10);
  --bold-weight: 600;
  --calendar-background-hover: rgb(235, 219, 178);
  --calendar-hover: rgb(234, 105, 98);
  --calendar-today: rgb(234, 105, 98);
  --calendar-week: rgb(234, 105, 98);
  --callout-bug: 193,74,74;
  --callout-default: 69,112,122;
  --callout-error: 193,74,74;
  --callout-example: 148,94,128;
  --callout-fail: 193,74,74;
  --callout-important: 125,174,163;
  --callout-info: 69,112,122;
  --callout-question: 195,94,10;
  --callout-success: 108,120,46;
  --callout-summary: 125,174,163;
  --callout-tip: 125,174,163;
  --callout-todo: 69,112,122;
  --callout-warning: 195,94,10;
  --canvas-background: rgb(249, 245, 215);
  --canvas-card-label-color: rgb(179, 126, 93);
  --canvas-color-1: 193,74,74;
  --canvas-color-2: 195,94,10;
  --canvas-color-3: 231,138,78;
  --canvas-color-4: 108,120,46;
  --canvas-color-5: 125,174,163;
  --canvas-color-6: 148,94,128;
  --caret-color: rgb(101, 71, 53);
  --checkbox-border-color: rgb(168, 153, 132);
  --checkbox-border-color-hover: rgb(168, 153, 132);
  --checkbox-color: rgb(168, 153, 132);
  --checkbox-color-hover: rgb(168, 153, 132);
  --checkbox-marker-color: rgb(249, 245, 215);
  --checkbox-radius: 0;
  --checklist-done-color: rgba(80, 73, 69, 0.4);
  --code-background: rgb(235, 219, 178);
  --code-border-color: rgb(213, 196, 161);
  --code-comment: rgb(179, 126, 93);
  --code-function: rgb(231, 138, 78);
  --code-important: rgb(195, 94, 10);
  --code-keyword: rgb(148, 94, 128);
  --code-normal: rgb(125, 174, 163);
  --code-operator: rgb(193, 74, 74);
  --code-property: rgb(125, 174, 163);
  --code-punctuation: rgb(115, 81, 69);
  --code-string: rgb(108, 120, 46);
  --code-tag: rgb(193, 74, 74);
  --code-value: rgb(148, 94, 128);
  --collapse-icon-color: rgb(179, 126, 93);
  --collapse-icon-color-collapsed: rgb(231, 138, 78);
  --color-accent: rgb(123, 173, 161);
  --color-accent-1: rgb(136, 180, 169);
  --color-accent-2: rgb(151, 190, 179);
  --color-accent-hsl: 166, 23%, 58%;
  --color-blue: rgb(69, 112, 122);
  --color-blue-rgb: 69,112,122;
  --color-cyan: rgb(125, 174, 163);
  --color-cyan-rgb: 125,174,163;
  --color-green: rgb(108, 120, 46);
  --color-green-rgb: 108,120,46;
  --color-orange: rgb(195, 94, 10);
  --color-orange-rgb: 195,94,10;
  --color-pink: rgb(148, 94, 128);
  --color-pink-rgb: 148,94,128;
  --color-purple: rgb(148, 94, 128);
  --color-purple-rgb: 148,94,128;
  --color-red: rgb(193, 74, 74);
  --color-red-rgb: 193,74,74;
  --color-yellow: rgb(231, 138, 78);
  --color-yellow-rgb: 231,138,78;
  --cursor-line-background: rgba(235, 219, 178, 0.5);
  --dark-text: rgb(101, 71, 53);
  --dark-text-faint: rgb(179, 126, 93);
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(115, 81, 69);
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1-x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2-x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3-x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4-x: 124,111,100;
  --dataview-key: rgb(179, 126, 93);
  --dataview-key-background: rgba(193, 74, 74, 0.3);
  --dataview-value: rgb(179, 126, 93);
  --dataview-value-background: rgba(169, 182, 101, 0.2);
  --divider-color: rgb(213, 196, 161);
  --divider-color-hover: rgb(136, 180, 169);
  --embed-block-shadow-hover: 0 0 0 1px rgb(213, 196, 161), inset 0 0 0 1px rgb(213, 196, 161);
  --embed-border-left: 6px double rgb(136, 180, 169);
  --embed-border-start: 2px solid rgb(136, 180, 169);
  --faded-aqua: rgb(76, 122, 93);
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(69, 112, 122);
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(108, 120, 46);
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(148, 94, 128);
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(193, 74, 74);
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(195, 94, 10);
  --faded-yellow-x: 195,94,10;
  --file-header-background: rgb(249, 245, 215);
  --file-header-background-focused: rgb(249, 245, 215);
  --flair-color: rgb(101, 71, 53);
  --flashing-background: rgba(234, 105, 98, 0.3);
  --footnote-divider-color: rgb(213, 196, 161);
  --footnote-id-color: rgb(115, 81, 69);
  --footnote-id-color-no-occurrences: rgb(179, 126, 93);
  --graph-line: rgb(189, 174, 147);
  --graph-node: rgb(146, 131, 116);
  --graph-node-attachment: rgb(169, 182, 101);
  --graph-node-focused: rgb(231, 138, 78);
  --graph-node-tag: rgb(193, 74, 74);
  --graph-node-unresolved: rgb(179, 126, 93);
  --graph-text: rgb(101, 71, 53);
  --gray: rgb(146, 131, 116);
  --gray-x: 146,131,116;
  --h1-color: rgb(193, 74, 74);
  --h2-color: rgb(195, 94, 10);
  --h3-color: rgb(108, 120, 46);
  --h4-color: rgb(76, 122, 93);
  --h5-color: rgb(69, 112, 122);
  --h6-color: rgb(148, 94, 128);
  --heading-formatting: rgb(179, 126, 93);
  --hr-color: rgb(213, 196, 161);
  --icon-color: rgb(115, 81, 69);
  --icon-color-active: rgb(231, 138, 78);
  --icon-color-focused: rgb(125, 174, 163);
  --icon-color-hover: rgb(234, 105, 98);
  --inline-title-color: rgb(231, 138, 78);
  --input-date-separator: rgb(179, 126, 93);
  --input-placeholder-color: rgb(179, 126, 93);
  --interactive-accent: rgb(136, 180, 169);
  --interactive-accent-hover: rgb(151, 190, 179);
  --interactive-accent-hsl: 166, 23%, 58%;
  --italic-color: rgb(195, 94, 10);
  --light-text: rgb(212, 190, 152);
  --light-text-x: 212,190,152;
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1-x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2-x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3-x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4-x: 168,153,132;
  --link-color: rgb(231, 138, 78);
  --link-color-hover: rgb(195, 94, 10);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(231, 138, 78);
  --link-external-color-hover: rgb(195, 94, 10);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(231, 138, 78);
  --link-unresolved-decoration-color: rgba(123, 173, 161, 0.3);
  --list-marker-color: rgb(179, 126, 93);
  --list-marker-color-collapsed: rgb(231, 138, 78);
  --list-marker-color-hover: rgb(115, 81, 69);
  --menu-background: rgb(235, 219, 178);
  --mermaid-actor: rgb(189, 174, 147);
  --mermaid-loopline: rgb(69, 112, 122);
  --mermaid-note: rgb(125, 174, 163);
  --metadata-border-color: rgb(213, 196, 161);
  --metadata-divider-color: rgb(213, 196, 161);
  --metadata-input-text-color: rgb(101, 71, 53);
  --metadata-label-text-color: rgb(115, 81, 69);
  --metadata-label-text-color-hover: rgb(115, 81, 69);
  --modal-background: rgb(249, 245, 215);
  --nav-collapse-icon-color: rgb(179, 126, 93);
  --nav-collapse-icon-color-collapsed: rgb(179, 126, 93);
  --nav-file-tag: rgba(69, 112, 122, 0.9);
  --nav-heading-color: rgb(101, 71, 53);
  --nav-heading-color-collapsed: rgb(179, 126, 93);
  --nav-heading-color-collapsed-hover: rgb(115, 81, 69);
  --nav-heading-color-hover: rgb(101, 71, 53);
  --nav-item-background-selected: rgba(123, 173, 161, 0.15);
  --nav-item-color: rgb(115, 81, 69);
  --nav-item-color-active: rgb(69, 112, 122);
  --nav-item-color-highlighted: rgb(231, 138, 78);
  --nav-item-color-hover: rgb(234, 105, 98);
  --nav-item-color-selected: rgb(101, 71, 53);
  --nav-tag-color: rgb(179, 126, 93);
  --nav-tag-color-active: rgb(115, 81, 69);
  --nav-tag-color-hover: rgb(115, 81, 69);
  --neutral-aqua: rgb(137, 180, 130);
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(125, 174, 163);
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(169, 182, 101);
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(211, 134, 155);
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(234, 105, 98);
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(231, 138, 78);
  --neutral-yellow-x: 231,138,78;
  --pdf-background: rgb(249, 245, 215);
  --pdf-page-background: rgb(249, 245, 215);
  --pdf-sidebar-background: rgb(249, 245, 215);
  --pill-border-color: rgb(213, 196, 161);
  --pill-color: rgb(115, 81, 69);
  --pill-color-hover: rgb(101, 71, 53);
  --pill-color-remove: rgb(179, 126, 93);
  --pill-color-remove-hover: rgb(231, 138, 78);
  --prompt-background: rgb(249, 245, 215);
  --raised-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent));
  --ribbon-background: rgb(235, 219, 178);
  --ribbon-background-collapsed: rgb(249, 245, 215);
  --search-clear-button-color: rgb(115, 81, 69);
  --search-icon-color: rgb(115, 81, 69);
  --search-result-background: rgb(249, 245, 215);
  --setting-group-heading-color: rgb(101, 71, 53);
  --setting-items-background: rgb(249, 245, 215);
  --setting-items-border-color: rgb(213, 196, 161);
  --slider-track-background: rgb(213, 196, 161);
  --status-bar-background: rgb(235, 219, 178);
  --status-bar-border-color: rgb(213, 196, 161);
  --status-bar-text-color: rgb(115, 81, 69);
  --suggestion-background: rgb(249, 245, 215);
  --sync-avatar-color-1: rgb(193, 74, 74);
  --sync-avatar-color-2: rgb(195, 94, 10);
  --sync-avatar-color-3: rgb(231, 138, 78);
  --sync-avatar-color-4: rgb(108, 120, 46);
  --sync-avatar-color-5: rgb(125, 174, 163);
  --sync-avatar-color-6: rgb(69, 112, 122);
  --sync-avatar-color-7: rgb(148, 94, 128);
  --sync-avatar-color-8: rgb(148, 94, 128);
  --tab-background-active: rgb(249, 245, 215);
  --tab-container-background: rgb(235, 219, 178);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(213, 196, 161);
  --tab-switcher-background: rgb(235, 219, 178);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(235, 219, 178), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(123, 173, 161);
  --tab-text-color: rgb(179, 126, 93);
  --tab-text-color-active: rgb(115, 81, 69);
  --tab-text-color-focused: rgb(115, 81, 69);
  --tab-text-color-focused-active: rgb(231, 138, 78);
  --tab-text-color-focused-active-current: rgb(234, 105, 98);
  --tab-text-color-focused-highlighted: rgb(231, 138, 78);
  --table-add-button-border-color: rgb(213, 196, 161);
  --table-border-color: rgb(213, 196, 161);
  --table-drag-handle-background-active: rgb(136, 180, 169);
  --table-drag-handle-color: rgb(179, 126, 93);
  --table-header-background: rgba(189, 174, 147, 0.4);
  --table-header-background-hover: rgb(213, 196, 161);
  --table-header-border-color: rgb(213, 196, 161);
  --table-header-color: rgb(101, 71, 53);
  --table-row-background-hover: rgb(213, 196, 161);
  --table-row-even-background: rgba(235, 219, 178, 0.2);
  --table-row-odd-background: rgba(235, 219, 178, 0.7);
  --table-selection: rgba(123, 173, 161, 0.1);
  --table-selection-border-color: rgb(136, 180, 169);
  --tag-background: rgb(235, 219, 178);
  --tag-background-hover: rgba(235, 219, 178, 0.6);
  --tag-border-color: rgba(123, 173, 161, 0.15);
  --tag-border-color-hover: rgba(123, 173, 161, 0.15);
  --tag-color: rgb(76, 122, 93);
  --tag-color-hover: rgb(231, 138, 78);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --text-accent: rgb(231, 138, 78);
  --text-accent-hover: rgb(195, 94, 10);
  --text-error: rgb(193, 74, 74);
  --text-faint: rgb(179, 126, 93);
  --text-highlight-bg: rgb(195, 94, 10);
  --text-highlight-fg: rgb(249, 245, 215);
  --text-muted: rgb(115, 81, 69);
  --text-normal: rgb(101, 71, 53);
  --text-selection: rgba(234, 105, 98, 0.6);
  --text-success: rgb(108, 120, 46);
  --text-warning: rgb(195, 94, 10);
  --titlebar-background: rgb(235, 219, 178);
  --titlebar-background-focused: rgb(235, 219, 178);
  --titlebar-border-color: rgb(213, 196, 161);
  --titlebar-text-color: rgb(115, 81, 69);
  --vault-profile-color: rgb(101, 71, 53);
  --vault-profile-color-hover: rgb(101, 71, 53);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 245, 215);
  color: rgb(101, 71, 53);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 219, 178);
  border-left-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

body div#quartz-root {
  background-color: rgb(249, 245, 215);
  color: rgb(101, 71, 53);
}`,
    typography: `body .page article p > b, b {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration: rgb(195, 94, 10);
  text-decoration-color: rgb(195, 94, 10);
}

body .page article p > em, em {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration: rgb(195, 94, 10);
  text-decoration-color: rgb(195, 94, 10);
}

body .page article p > i, i {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration: rgb(195, 94, 10);
  text-decoration-color: rgb(195, 94, 10);
}

body .page article p > strong, strong {
  color: rgb(195, 94, 10);
  outline: rgb(195, 94, 10) none 0px;
  text-decoration: rgb(195, 94, 10);
  text-decoration-color: rgb(195, 94, 10);
}

body .text-highlight {
  background-color: rgb(195, 94, 10);
  color: rgb(249, 245, 215);
  outline: rgb(249, 245, 215) none 0px;
  text-decoration: rgb(249, 245, 215);
  text-decoration-color: rgb(249, 245, 215);
}

body del {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration: line-through rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body p {
  color: rgb(115, 81, 69);
  outline: rgb(115, 81, 69) none 0px;
  text-decoration: rgb(115, 81, 69);
  text-decoration-color: rgb(115, 81, 69);
}`,
    links: `body a.external, footer a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgb(231, 138, 78);
  text-decoration-color: rgb(231, 138, 78);
}

body a.internal.broken {
  color: rgb(231, 138, 78);
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: rgba(123, 173, 161, 0.3);
}`,
    lists: `body dd {
  color: rgb(101, 71, 53);
}

body dt {
  color: rgb(101, 71, 53);
}

body ol > li {
  color: rgb(101, 71, 53);
}

body ol.overflow {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body ul > li {
  color: rgb(101, 71, 53);
}

body ul.overflow {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(179, 126, 93);
  text-decoration: rgb(179, 126, 93);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body table {
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(235, 219, 178);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(235, 219, 178);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(235, 219, 178);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(101, 71, 53);
}

body tbody tr:nth-child(even) {
  background-color: rgba(235, 219, 178, 0.2);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(235, 219, 178, 0.7);
}

body td {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

body th {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(101, 71, 53);
}

body thead {
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body tr {
  background-color: rgba(189, 174, 147, 0.4);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    code: `body code {
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

body pre > code > [data-line] {
  border-left-color: rgb(231, 138, 78);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 138, 78);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 138, 78);
  border-left-color: rgb(231, 138, 78);
  border-right-color: rgb(231, 138, 78);
  border-top-color: rgb(231, 138, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body pre:has(> code) {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}`,
    images: `body audio {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body figcaption {
  color: rgb(101, 71, 53);
}

body figure {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body img {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body video {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    embeds: `body .file-embed {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
}

body .footnotes {
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

body .transclude {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(137, 181, 170);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body .transclude-inner {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(137, 181, 170);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(80, 73, 69, 0.4);
  text-decoration: line-through rgba(80, 73, 69, 0.4);
  text-decoration-color: rgba(80, 73, 69, 0.4);
}

body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='*'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='-'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='/'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='>'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='?'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='I'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='S'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='b'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='c'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='d'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='f'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='i'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='k'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='l'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='p'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='u'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body li.task-list-item[data-task='w'] {
  color: rgb(101, 71, 53);
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

body .callout[data-callout="abstract"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 148,94,128;
  background-color: rgba(148, 94, 128, 0.1);
  border-bottom-color: rgba(148, 94, 128, 0.25);
  border-left-color: rgba(148, 94, 128, 0.25);
  border-right-color: rgba(148, 94, 128, 0.25);
  border-top-color: rgba(148, 94, 128, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 193,74,74;
  background-color: rgba(193, 74, 74, 0.1);
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 108,120,46;
  background-color: rgba(108, 120, 46, 0.1);
  border-bottom-color: rgba(108, 120, 46, 0.25);
  border-left-color: rgba(108, 120, 46, 0.25);
  border-right-color: rgba(108, 120, 46, 0.25);
  border-top-color: rgba(108, 120, 46, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 125,174,163;
  background-color: rgba(125, 174, 163, 0.1);
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 69,112,122;
  background-color: rgba(69, 112, 122, 0.1);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 195,94,10;
  background-color: rgba(195, 94, 10, 0.1);
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 245, 215);
}

body .search > .search-container > .search-space > * {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(76, 122, 93);
}

body h1 {
  color: rgb(193, 74, 74);
}

body h2 {
  color: rgb(195, 94, 10);
}

body h2.page-title, h2.page-title a {
  color: rgb(231, 138, 78);
}

body h3 {
  color: rgb(108, 120, 46);
}

body h4 {
  color: rgb(76, 122, 93);
}

body h5 {
  color: rgb(69, 112, 122);
}

body h6 {
  color: rgb(148, 94, 128);
}

body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `body .callout {
  --callout-color: 69,112,122;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 245, 215) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 245, 215);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
  color: rgb(69, 112, 122);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}`,
    footer: `body footer {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(115, 81, 69);
}

body footer ul li a {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(101, 71, 53);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 81, 69);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body li.section-li > .section .meta {
  color: rgb(115, 81, 69);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 81, 69);
  text-decoration: rgb(115, 81, 69);
}

body ul.section-ul {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

body .darkmode svg {
  color: rgb(115, 81, 69);
  stroke: rgb(115, 81, 69);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

body .breadcrumb-element p {
  color: rgb(179, 126, 93);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(115, 81, 69);
}

body .metadata-properties {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

body .navigation-progress {
  background-color: rgb(235, 219, 178);
}

body .page-header h2.page-title {
  color: rgb(101, 71, 53);
}

body abbr {
  color: rgb(101, 71, 53);
  text-decoration: underline dotted rgb(101, 71, 53);
}

body details {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body input[type=text] {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

body kbd {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: rgb(125, 174, 163);
}

body progress {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

body sub {
  color: rgb(101, 71, 53);
}

body summary {
  color: rgb(101, 71, 53);
}

body sup {
  color: rgb(101, 71, 53);
}`,
  },
};
