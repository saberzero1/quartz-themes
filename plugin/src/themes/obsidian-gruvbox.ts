import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidian-gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 12;
  --accent-l: 32%;
  --accent-s: 107%;
  --background-modifier-active-hover: hsla(12, 107%, 32%, 0.1);
  --background-modifier-border: rgb(60, 56, 54);
  --background-modifier-error: rgb(204, 36, 29);
  --background-modifier-error-hover: rgb(204, 36, 29);
  --background-modifier-error-rgb: 204,36,29;
  --background-modifier-success: rgb(152, 151, 26);
  --background-modifier-success-rgb: 152,151,26;
  --background-primary: rgb(40, 40, 40);
  --background-primary-alt: rgb(40, 40, 40);
  --background-secondary: rgb(29, 32, 33);
  --background-secondary-alt: rgb(60, 56, 54);
  --bases-cards-background: rgb(40, 40, 40);
  --bases-cards-cover-background: rgb(40, 40, 40);
  --bases-cards-shadow: 0 0 0 1px rgb(60, 56, 54);
  --bases-embed-border-color: rgb(60, 56, 54);
  --bases-group-heading-property-color: rgb(213, 196, 161);
  --bases-table-border-color: rgb(60, 56, 54);
  --bases-table-cell-background-active: rgb(40, 40, 40);
  --bases-table-cell-background-disabled: rgb(40, 40, 40);
  --bases-table-cell-background-selected: hsla(12, 107%, 32%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(12, 107%, 32%);
  --bases-table-group-background: rgb(40, 40, 40);
  --bases-table-header-background: rgb(40, 40, 40);
  --bases-table-header-color: rgb(213, 196, 161);
  --bases-table-row-background-hover: rgb(80, 73, 69);
  --bases-table-summary-background: rgb(40, 40, 40);
  --blockquote-border-color: hsl(12, 107%, 32%);
  --bold-color: rgb(215, 153, 33);
  --bold-weight: 600;
  --bright-aqua: rgb(142, 192, 124);
  --bright-aqua_x: 142,192,124;
  --bright-blue: rgb(131, 165, 152);
  --bright-blue_x: 131,165,152;
  --bright-green: rgb(184, 187, 38);
  --bright-green_x: 184,187,38;
  --bright-orange: rgb(254, 128, 25);
  --bright-orange_x: 254,128,25;
  --bright-purple: rgb(211, 134, 155);
  --bright-purple_x: 211,134,155;
  --bright-red: rgb(251, 73, 52);
  --bright-red_x: 251,73,52;
  --bright-yellow: rgb(250, 189, 47);
  --bright-yellow_x: 250,189,47;
  --calendar-background-hover: rgb(60, 56, 54);
  --calendar-hover: rgb(251, 73, 52);
  --calendar-today: rgb(214, 93, 14);
  --calendar-week: rgb(214, 93, 14);
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: 204,36,29;
  --callout-default: 69,133,136;
  --callout-error: 204,36,29;
  --callout-example: 177,98,134;
  --callout-fail: 204,36,29;
  --callout-important: 104,157,106;
  --callout-info: 69,133,136;
  --callout-note: 69,133,136;
  --callout-question: 215,153,33;
  --callout-quote: 146,131,116;
  --callout-success: 152,151,26;
  --callout-summary: 104,157,106;
  --callout-tip: 104,157,106;
  --callout-todo: 69,133,136;
  --callout-warning: 214,93,14;
  --canvas-background: rgb(40, 40, 40);
  --canvas-card-label-color: rgb(235, 219, 178);
  --canvas-color-1: 204,36,29;
  --canvas-color-2: 214,93,14;
  --canvas-color-3: 215,153,33;
  --canvas-color-4: 152,151,26;
  --canvas-color-5: 69,133,136;
  --canvas-color-6: 177,98,134;
  --caret-color: rgb(251, 241, 199);
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
  --code-function: rgb(215, 153, 33);
  --code-important: rgb(214, 93, 14);
  --code-keyword: rgb(211, 134, 155);
  --code-normal: rgb(131, 165, 152);
  --code-operator: rgb(204, 36, 29);
  --code-property: rgb(69, 133, 136);
  --code-punctuation: rgb(213, 196, 161);
  --code-string: rgb(152, 151, 26);
  --code-tag: rgb(204, 36, 29);
  --code-value: rgb(177, 98, 134);
  --collapse-icon-color: rgb(235, 219, 178);
  --collapse-icon-color-collapsed: rgb(214, 93, 14);
  --color-accent: hsl(12, 107%, 32%);
  --color-accent-1: hsl(9, 109.14%, 36.8%);
  --color-accent-2: hsl(7, 112.35%, 41.28%);
  --color-accent-hsl: 12, 107%, 32%;
  --color-blue: rgb(7, 102, 120);
  --color-blue-rgb: 7,102,120;
  --color-cyan: rgb(69, 133, 136);
  --color-cyan-rgb: 69,133,136;
  --color-green: rgb(152, 151, 26);
  --color-green-rgb: 152,151,26;
  --color-orange: rgb(214, 93, 14);
  --color-orange-rgb: 214,93,14;
  --color-pink: rgb(211, 134, 155);
  --color-pink-rgb: 211,134,155;
  --color-purple: rgb(177, 98, 134);
  --color-purple-rgb: 177,98,134;
  --color-red: rgb(204, 36, 29);
  --color-red-rgb: 204,36,29;
  --color-yellow: rgb(215, 153, 33);
  --color-yellow-rgb: 215,153,33;
  --cursor-line-background: rgba(60, 56, 54, 0.5);
  --dark: var(--text-normal);
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard_x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft_x: 50,48,47;
  --dark0_x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1_x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2_x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3_x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4_x: 124,111,100;
  --darkgray: var(--text-normal);
  --dataview-key: rgb(235, 219, 178);
  --dataview-key-background: rgba(157, 0, 6, 0.5);
  --dataview-value: rgb(235, 219, 178);
  --dataview-value-background: rgba(152, 151, 26, 0.3);
  --divider-color: rgb(60, 56, 54);
  --divider-color-hover: hsl(12, 107%, 32%);
  --embed-block-shadow-hover: 0 0 0 1px rgb(60, 56, 54), inset 0 0 0 1px rgb(60, 56, 54);
  --embed-border-left: 6px double hsl(12, 107%, 32%);
  --embed-border-start: 2px solid hsl(12, 107%, 32%);
  --faded-aqua: rgb(66, 123, 88);
  --faded-aqua_x: 66,123,88;
  --faded-blue: rgb(7, 102, 120);
  --faded-blue_x: 7,102,120;
  --faded-green: rgb(121, 116, 14);
  --faded-green_x: 121,116,14;
  --faded-orange: rgb(175, 58, 3);
  --faded-orange_x: 175,58,3;
  --faded-purple: rgb(143, 63, 113);
  --faded-purple_x: 143,63,113;
  --faded-red: rgb(157, 0, 6);
  --faded-red_x: 157,0,6;
  --faded-yellow: rgb(181, 118, 20);
  --faded-yellow_x: 181,118,20;
  --file-header-background: rgb(40, 40, 40);
  --file-header-background-focused: rgb(40, 40, 40);
  --flair-color: rgb(251, 241, 199);
  --flashing-background: rgba(204, 36, 29, 0.3);
  --footnote-divider-color: rgb(60, 56, 54);
  --footnote-id-color: rgb(213, 196, 161);
  --footnote-id-color-no-occurrences: rgb(235, 219, 178);
  --graph-line: rgb(80, 73, 69);
  --graph-node: rgb(189, 174, 147);
  --graph-node-attachment: rgb(152, 151, 26);
  --graph-node-focused: rgb(214, 93, 14);
  --graph-node-tag: rgb(204, 36, 29);
  --graph-node-unresolved: rgb(235, 219, 178);
  --graph-text: rgb(251, 241, 199);
  --gray: rgb(146, 131, 116);
  --gray_x: 146,131,116;
  --h1-color: rgb(204, 36, 29);
  --h2-color: rgb(215, 153, 33);
  --h3-color: rgb(152, 151, 26);
  --h4-color: rgb(104, 157, 106);
  --h5-color: rgb(69, 133, 136);
  --h6-color: rgb(177, 98, 134);
  --heading-formatting: rgb(235, 219, 178);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(60, 56, 54);
  --icon-color: rgb(213, 196, 161);
  --icon-color-active: rgb(214, 93, 14);
  --icon-color-focused: rgb(131, 165, 152);
  --icon-color-hover: rgb(251, 73, 52);
  --inline-title-color: rgb(250, 189, 47);
  --input-date-separator: rgb(235, 219, 178);
  --input-placeholder-color: rgb(235, 219, 178);
  --interactive-accent: hsl(12, 107%, 32%);
  --interactive-accent-hover: hsl(9, 109.14%, 36.8%);
  --interactive-accent-hsl: 12, 107%, 32%;
  --italic-color: rgb(215, 153, 33);
  --light: var(--background-primary);
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard_x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft_x: 242,229,188;
  --light0_x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1_x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2_x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3_x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4_x: 168,153,132;
  --lightgray: var(--background-secondary);
  --link-color: rgb(214, 93, 14);
  --link-color-hover: rgb(142, 192, 124);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(214, 93, 14);
  --link-external-color-hover: rgb(142, 192, 124);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(214, 93, 14);
  --link-unresolved-decoration-color: hsla(12, 107%, 32%, 0.3);
  --link-url: rgb(152, 151, 26);
  --list-marker-color: rgb(235, 219, 178);
  --list-marker-color-collapsed: rgb(214, 93, 14);
  --list-marker-color-hover: rgb(213, 196, 161);
  --menu-background: rgb(29, 32, 33);
  --mermaid-actor: rgb(80, 73, 69);
  --mermaid-exclude: rgb(124, 111, 100);
  --mermaid-loopline: rgb(69, 133, 136);
  --mermaid-note: rgb(69, 133, 136);
  --mermaid-seqnum: rgb(40, 40, 40);
  --metadata-border-color: rgb(60, 56, 54);
  --metadata-divider-color: rgb(60, 56, 54);
  --metadata-input-text-color: rgb(251, 241, 199);
  --metadata-label-text-color: rgb(213, 196, 161);
  --metadata-label-text-color-hover: rgb(213, 196, 161);
  --modal-background: rgb(40, 40, 40);
  --nav-collapse-icon-color: rgb(235, 219, 178);
  --nav-collapse-icon-color-collapsed: rgb(235, 219, 178);
  --nav-file-tag: rgba(215, 153, 33, 0.9);
  --nav-heading-color: rgb(251, 241, 199);
  --nav-heading-color-collapsed: rgb(235, 219, 178);
  --nav-heading-color-collapsed-hover: rgb(213, 196, 161);
  --nav-heading-color-hover: rgb(251, 241, 199);
  --nav-item-background-selected: hsla(12, 107%, 32%, 0.15);
  --nav-item-color: rgb(213, 196, 161);
  --nav-item-color-active: rgb(142, 192, 124);
  --nav-item-color-highlighted: rgb(214, 93, 14);
  --nav-item-color-hover: rgb(251, 73, 52);
  --nav-item-color-selected: rgb(251, 241, 199);
  --nav-tag-color: rgb(235, 219, 178);
  --nav-tag-color-active: rgb(213, 196, 161);
  --nav-tag-color-hover: rgb(213, 196, 161);
  --neutral-aqua: rgb(104, 157, 106);
  --neutral-aqua_x: 104,157,106;
  --neutral-blue: rgb(69, 133, 136);
  --neutral-blue_x: 69,133,136;
  --neutral-green: rgb(152, 151, 26);
  --neutral-green_x: 152,151,26;
  --neutral-orange: rgb(214, 93, 14);
  --neutral-orange_x: 214,93,14;
  --neutral-purple: rgb(177, 98, 134);
  --neutral-purple_x: 177,98,134;
  --neutral-red: rgb(204, 36, 29);
  --neutral-red_x: 204,36,29;
  --neutral-yellow: rgb(215, 153, 33);
  --neutral-yellow_x: 215,153,33;
  --pdf-background: rgb(40, 40, 40);
  --pdf-page-background: rgb(40, 40, 40);
  --pdf-shadow: 0 0 0 1px rgb(60, 56, 54);
  --pdf-sidebar-background: rgb(40, 40, 40);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(60, 56, 54);
  --pill-border-color: rgb(60, 56, 54);
  --pill-color: rgb(213, 196, 161);
  --pill-color-hover: rgb(251, 241, 199);
  --pill-color-remove: rgb(235, 219, 178);
  --pill-color-remove-hover: rgb(214, 93, 14);
  --prompt-background: rgb(40, 40, 40);
  --ribbon-background: rgb(29, 32, 33);
  --ribbon-background-collapsed: rgb(40, 40, 40);
  --search-clear-button-color: rgb(213, 196, 161);
  --search-icon-color: rgb(213, 196, 161);
  --search-result-background: rgb(40, 40, 40);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(251, 241, 199);
  --setting-items-background: rgb(40, 40, 40);
  --setting-items-border-color: rgb(60, 56, 54);
  --slider-track-background: rgb(60, 56, 54);
  --status-bar-background: rgb(29, 32, 33);
  --status-bar-border-color: rgb(60, 56, 54);
  --status-bar-text-color: rgb(213, 196, 161);
  --suggestion-background: rgb(40, 40, 40);
  --sync-avatar-color-1: rgb(204, 36, 29);
  --sync-avatar-color-2: rgb(214, 93, 14);
  --sync-avatar-color-3: rgb(215, 153, 33);
  --sync-avatar-color-4: rgb(152, 151, 26);
  --sync-avatar-color-5: rgb(69, 133, 136);
  --sync-avatar-color-6: rgb(7, 102, 120);
  --sync-avatar-color-7: rgb(177, 98, 134);
  --sync-avatar-color-8: rgb(211, 134, 155);
  --tab-background-active: rgb(40, 40, 40);
  --tab-container-background: rgb(29, 32, 33);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(60, 56, 54);
  --tab-switcher-background: rgb(29, 32, 33);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 32, 33), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 107%, 32%);
  --tab-text-color: rgb(235, 219, 178);
  --tab-text-color-active: rgb(213, 196, 161);
  --tab-text-color-focused: rgb(213, 196, 161);
  --tab-text-color-focused-active: rgb(215, 153, 33);
  --tab-text-color-focused-active-current: rgb(251, 73, 52);
  --tab-text-color-focused-highlighted: rgb(214, 93, 14);
  --table-add-button-border-color: rgb(60, 56, 54);
  --table-border-color: rgb(60, 56, 54);
  --table-drag-handle-background-active: hsl(12, 107%, 32%);
  --table-drag-handle-color: rgb(235, 219, 178);
  --table-header-background: rgba(40, 40, 40, 0.2);
  --table-header-background-hover: rgb(80, 73, 69);
  --table-header-border-color: rgb(60, 56, 54);
  --table-header-color: rgb(251, 241, 199);
  --table-row-background-hover: rgb(80, 73, 69);
  --table-row-even-background: rgba(80, 73, 69, 0.2);
  --table-row-odd-background: rgba(80, 73, 69, 0.4);
  --table-selection: hsla(12, 107%, 32%, 0.1);
  --table-selection-border-color: hsl(12, 107%, 32%);
  --tag-background: rgb(80, 73, 69);
  --tag-background-hover: rgb(60, 56, 54);
  --tag-border-color: hsla(12, 107%, 32%, 0.15);
  --tag-border-color-hover: hsla(12, 107%, 32%, 0.15);
  --tag-color: rgb(142, 192, 124);
  --tag-color-hover: rgb(214, 93, 14);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(214, 93, 14);
  --text-accent-hover: rgb(142, 192, 124);
  --text-error: rgb(204, 36, 29);
  --text-faint: rgb(235, 219, 178);
  --text-highlight-bg: rgb(215, 153, 33);
  --text-highlight-fg: rgb(29, 32, 33);
  --text-muted: rgb(213, 196, 161);
  --text-normal: rgb(251, 241, 199);
  --text-selection: rgba(204, 36, 29, 0.6);
  --text-success: rgb(152, 151, 26);
  --text-warning: rgb(214, 93, 14);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(29, 32, 33);
  --titlebar-background-focused: rgb(60, 56, 54);
  --titlebar-border-color: rgb(60, 56, 54);
  --titlebar-text-color: rgb(213, 196, 161);
  --titlebar-text-color-focused: rgb(251, 73, 52);
  --vault-profile-color: rgb(251, 241, 199);
  --vault-profile-color-hover: rgb(251, 241, 199);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(251, 241, 199);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 56, 54);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgb(60, 56, 54);
  color: rgb(251, 241, 199);
}

body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(251, 241, 199);
}`,
    typography: `body .page article p > b, b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > em, em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > i, i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > strong, strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .text-highlight {
  background-color: rgb(215, 153, 33);
  color: rgb(29, 32, 33);
  outline: rgb(29, 32, 33) none 0px;
  text-decoration: rgb(29, 32, 33);
  text-decoration-color: rgb(29, 32, 33);
}

body del {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: line-through rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body p {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgb(214, 93, 14);
  text-decoration-color: rgb(214, 93, 14);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgb(214, 93, 14);
  text-decoration-color: rgb(214, 93, 14);
}

body a.internal.broken {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgba(163, 33, 0, 0.3);
  text-decoration-color: rgba(163, 33, 0, 0.3);
}`,
    lists: `body dd {
  color: rgb(251, 241, 199);
}

body dt {
  color: rgb(251, 241, 199);
}

body ol > li {
  color: rgb(251, 241, 199);
}

body ol.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body ul > li {
  color: rgb(251, 241, 199);
}

body ul.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
}

body th {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
  color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
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
  color: rgb(251, 241, 199);
}

body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body figcaption {
  color: rgb(251, 241, 199);
}

body figure {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body img {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body video {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body .footnotes {
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .transclude {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(163, 33, 0);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .transclude-inner {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(163, 33, 0);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='*'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='-'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='/'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='>'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='?'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='I'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='S'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='b'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='c'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='d'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='f'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='i'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='k'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='l'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='p'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='u'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body li.task-list-item[data-task='w'] {
  color: rgb(251, 241, 199);
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
}

body .callout[data-callout="abstract"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 177,98,134;
  background-color: rgba(177, 98, 134, 0.2);
  border-bottom-color: rgba(177, 98, 134, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(177, 98, 134, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(177, 98, 134, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(177, 98, 134, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 215,153,33;
  background-color: rgba(215, 153, 33, 0.2);
  border-bottom-color: rgba(215, 153, 33, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(215, 153, 33, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(215, 153, 33, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(215, 153, 33, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 146,131,116;
  background-color: rgba(146, 131, 116, 0.2);
  border-bottom-color: rgba(146, 131, 116, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(146, 131, 116, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(146, 131, 116, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(146, 131, 116, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 152,151,26;
  background-color: rgba(152, 151, 26, 0.2);
  border-bottom-color: rgba(152, 151, 26, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(152, 151, 26, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(152, 151, 26, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(152, 151, 26, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 214,93,14;
  background-color: rgba(214, 93, 14, 0.2);
  border-bottom-color: rgba(214, 93, 14, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(214, 93, 14, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(214, 93, 14, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(214, 93, 14, 0.4);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > * {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(142, 192, 124);
}

body h1 {
  color: rgb(204, 36, 29);
}

body h2 {
  color: rgb(215, 153, 33);
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 189, 47);
}

body h3 {
  color: rgb(152, 151, 26);
}

body h4 {
  color: rgb(104, 157, 106);
}

body h5 {
  color: rgb(69, 133, 136);
}

body h6 {
  color: rgb(177, 98, 134);
}

body hr {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
}`,
    scrollbars: `body .callout {
  --callout-color: 69,133,136;
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(142, 192, 124);
  border-left-color: rgb(142, 192, 124);
  border-right-color: rgb(142, 192, 124);
  border-top-color: rgb(142, 192, 124);
  color: rgb(142, 192, 124);
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
  color: rgb(251, 241, 199);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
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
  color: rgb(251, 241, 199);
}

body abbr {
  color: rgb(251, 241, 199);
  text-decoration: underline dotted rgb(251, 241, 199);
}

body details {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
}

body progress {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

body sub {
  color: rgb(251, 241, 199);
}

body summary {
  color: rgb(251, 241, 199);
}

body sup {
  color: rgb(251, 241, 199);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 12;
  --accent-l: 32%;
  --accent-s: 107%;
  --background-modifier-active-hover: hsla(12, 107%, 32%, 0.1);
  --background-modifier-border: rgb(213, 196, 161);
  --background-modifier-error: rgb(204, 36, 29);
  --background-modifier-error-hover: rgb(204, 36, 29);
  --background-modifier-error-rgb: 204,36,29;
  --background-modifier-success: rgb(152, 151, 26);
  --background-modifier-success-rgb: 152,151,26;
  --background-primary: rgb(249, 245, 215);
  --background-primary-alt: rgb(249, 245, 215);
  --background-secondary: rgb(235, 219, 178);
  --background-secondary-alt: rgb(235, 219, 178);
  --bases-cards-background: rgb(249, 245, 215);
  --bases-cards-cover-background: rgb(249, 245, 215);
  --bases-cards-shadow: 0 0 0 1px rgb(213, 196, 161);
  --bases-embed-border-color: rgb(213, 196, 161);
  --bases-group-heading-property-color: rgb(80, 73, 69);
  --bases-table-border-color: rgb(213, 196, 161);
  --bases-table-cell-background-active: rgb(249, 245, 215);
  --bases-table-cell-background-disabled: rgb(249, 245, 215);
  --bases-table-cell-background-selected: hsla(12, 107%, 32%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(11, 108.07%, 34.4%);
  --bases-table-group-background: rgb(249, 245, 215);
  --bases-table-header-background: rgb(249, 245, 215);
  --bases-table-header-color: rgb(80, 73, 69);
  --bases-table-row-background-hover: rgb(213, 196, 161);
  --bases-table-summary-background: rgb(249, 245, 215);
  --blockquote-border-color: hsl(11, 108.07%, 34.4%);
  --blur-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent));
  --bold-color: rgb(215, 153, 33);
  --bold-weight: 600;
  --bright-aqua: rgb(142, 192, 124);
  --bright-aqua_x: 142,192,124;
  --bright-blue: rgb(131, 165, 152);
  --bright-blue_x: 131,165,152;
  --bright-green: rgb(184, 187, 38);
  --bright-green_x: 184,187,38;
  --bright-orange: rgb(254, 128, 25);
  --bright-orange_x: 254,128,25;
  --bright-purple: rgb(211, 134, 155);
  --bright-purple_x: 211,134,155;
  --bright-red: rgb(251, 73, 52);
  --bright-red_x: 251,73,52;
  --bright-yellow: rgb(250, 189, 47);
  --bright-yellow_x: 250,189,47;
  --calendar-background-hover: rgb(235, 219, 178);
  --calendar-hover: rgb(251, 73, 52);
  --calendar-today: rgb(251, 73, 52);
  --calendar-week: rgb(251, 73, 52);
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-bug: 204,36,29;
  --callout-default: 69,133,136;
  --callout-error: 204,36,29;
  --callout-example: 177,98,134;
  --callout-fail: 204,36,29;
  --callout-important: 104,157,106;
  --callout-info: 69,133,136;
  --callout-note: 69,133,136;
  --callout-question: 215,153,33;
  --callout-quote: 146,131,116;
  --callout-success: 152,151,26;
  --callout-summary: 104,157,106;
  --callout-tip: 104,157,106;
  --callout-todo: 69,133,136;
  --callout-warning: 214,93,14;
  --canvas-background: rgb(249, 245, 215);
  --canvas-card-label-color: rgb(102, 92, 84);
  --canvas-color-1: 204,36,29;
  --canvas-color-2: 214,93,14;
  --canvas-color-3: 215,153,33;
  --canvas-color-4: 152,151,26;
  --canvas-color-5: 69,133,136;
  --canvas-color-6: 177,98,134;
  --caret-color: rgb(40, 40, 40);
  --checkbox-border-color: rgb(168, 153, 132);
  --checkbox-border-color-hover: rgb(168, 153, 132);
  --checkbox-color: rgb(168, 153, 132);
  --checkbox-color-hover: rgb(168, 153, 132);
  --checkbox-marker-color: rgb(249, 245, 215);
  --checkbox-radius: 0;
  --checklist-done-color: rgba(80, 73, 69, 0.4);
  --code-background: rgb(235, 219, 178);
  --code-border-color: rgb(213, 196, 161);
  --code-comment: rgb(102, 92, 84);
  --code-function: rgb(215, 153, 33);
  --code-important: rgb(214, 93, 14);
  --code-keyword: rgb(211, 134, 155);
  --code-normal: rgb(131, 165, 152);
  --code-operator: rgb(204, 36, 29);
  --code-property: rgb(69, 133, 136);
  --code-punctuation: rgb(80, 73, 69);
  --code-string: rgb(152, 151, 26);
  --code-tag: rgb(204, 36, 29);
  --code-value: rgb(177, 98, 134);
  --collapse-icon-color: rgb(102, 92, 84);
  --collapse-icon-color-collapsed: rgb(214, 93, 14);
  --color-accent: hsl(12, 107%, 32%);
  --color-accent-1: hsl(11, 108.07%, 34.4%);
  --color-accent-2: hsl(9, 109.14%, 36.8%);
  --color-accent-hsl: 12, 107%, 32%;
  --color-blue: rgb(7, 102, 120);
  --color-blue-rgb: 7,102,120;
  --color-cyan: rgb(69, 133, 136);
  --color-cyan-rgb: 69,133,136;
  --color-green: rgb(152, 151, 26);
  --color-green-rgb: 152,151,26;
  --color-orange: rgb(214, 93, 14);
  --color-orange-rgb: 214,93,14;
  --color-pink: rgb(211, 134, 155);
  --color-pink-rgb: 211,134,155;
  --color-purple: rgb(177, 98, 134);
  --color-purple-rgb: 177,98,134;
  --color-red: rgb(204, 36, 29);
  --color-red-rgb: 204,36,29;
  --color-yellow: rgb(215, 153, 33);
  --color-yellow-rgb: 215,153,33;
  --cursor-line-background: rgba(235, 219, 178, 0.5);
  --dark: var(--text-normal);
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard_x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft_x: 50,48,47;
  --dark0_x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1_x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2_x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3_x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4_x: 124,111,100;
  --darkgray: var(--text-normal);
  --dataview-key: rgb(102, 92, 84);
  --dataview-key-background: rgba(157, 0, 6, 0.3);
  --dataview-value: rgb(102, 92, 84);
  --dataview-value-background: rgba(152, 151, 26, 0.2);
  --divider-color: rgb(213, 196, 161);
  --divider-color-hover: hsl(11, 108.07%, 34.4%);
  --embed-block-shadow-hover: 0 0 0 1px rgb(213, 196, 161), inset 0 0 0 1px rgb(213, 196, 161);
  --embed-border-left: 6px double hsl(11, 108.07%, 34.4%);
  --embed-border-start: 2px solid hsl(11, 108.07%, 34.4%);
  --faded-aqua: rgb(66, 123, 88);
  --faded-aqua_x: 66,123,88;
  --faded-blue: rgb(7, 102, 120);
  --faded-blue_x: 7,102,120;
  --faded-green: rgb(121, 116, 14);
  --faded-green_x: 121,116,14;
  --faded-orange: rgb(175, 58, 3);
  --faded-orange_x: 175,58,3;
  --faded-purple: rgb(143, 63, 113);
  --faded-purple_x: 143,63,113;
  --faded-red: rgb(157, 0, 6);
  --faded-red_x: 157,0,6;
  --faded-yellow: rgb(181, 118, 20);
  --faded-yellow_x: 181,118,20;
  --file-header-background: rgb(249, 245, 215);
  --file-header-background-focused: rgb(249, 245, 215);
  --flair-color: rgb(40, 40, 40);
  --flashing-background: rgba(204, 36, 29, 0.3);
  --footnote-divider-color: rgb(213, 196, 161);
  --footnote-id-color: rgb(80, 73, 69);
  --footnote-id-color-no-occurrences: rgb(102, 92, 84);
  --graph-line: rgb(235, 219, 178);
  --graph-node: rgb(146, 131, 116);
  --graph-node-attachment: rgb(184, 187, 38);
  --graph-node-focused: rgb(214, 93, 14);
  --graph-node-tag: rgb(204, 36, 29);
  --graph-node-unresolved: rgb(102, 92, 84);
  --graph-text: rgb(40, 40, 40);
  --gray: rgb(146, 131, 116);
  --gray_x: 146,131,116;
  --h1-color: rgb(204, 36, 29);
  --h2-color: rgb(215, 153, 33);
  --h3-color: rgb(152, 151, 26);
  --h4-color: rgb(104, 157, 106);
  --h5-color: rgb(69, 133, 136);
  --h6-color: rgb(177, 98, 134);
  --heading-formatting: rgb(102, 92, 84);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(213, 196, 161);
  --icon-color: rgb(80, 73, 69);
  --icon-color-active: rgb(214, 93, 14);
  --icon-color-focused: rgb(131, 165, 152);
  --icon-color-hover: rgb(251, 73, 52);
  --inline-title-color: rgb(250, 189, 47);
  --input-date-separator: rgb(102, 92, 84);
  --input-placeholder-color: rgb(102, 92, 84);
  --interactive-accent: hsl(11, 108.07%, 34.4%);
  --interactive-accent-hover: hsl(9, 109.14%, 36.8%);
  --interactive-accent-hsl: 12, 107%, 32%;
  --italic-color: rgb(215, 153, 33);
  --light: var(--background-primary);
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard_x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft_x: 242,229,188;
  --light0_x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1_x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2_x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3_x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4_x: 168,153,132;
  --lightgray: var(--background-secondary);
  --link-color: rgb(214, 93, 14);
  --link-color-hover: rgb(142, 192, 124);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(214, 93, 14);
  --link-external-color-hover: rgb(142, 192, 124);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(214, 93, 14);
  --link-unresolved-decoration-color: hsla(12, 107%, 32%, 0.3);
  --link-url: rgb(152, 151, 26);
  --list-marker-color: rgb(102, 92, 84);
  --list-marker-color-collapsed: rgb(214, 93, 14);
  --list-marker-color-hover: rgb(80, 73, 69);
  --menu-background: rgb(235, 219, 178);
  --mermaid-actor: rgb(189, 174, 147);
  --mermaid-exclude: rgb(213, 196, 161);
  --mermaid-loopline: rgb(69, 133, 136);
  --mermaid-note: rgb(131, 165, 152);
  --mermaid-seqnum: rgb(251, 241, 199);
  --metadata-border-color: rgb(213, 196, 161);
  --metadata-divider-color: rgb(213, 196, 161);
  --metadata-input-text-color: rgb(40, 40, 40);
  --metadata-label-text-color: rgb(80, 73, 69);
  --metadata-label-text-color-hover: rgb(80, 73, 69);
  --modal-background: rgb(249, 245, 215);
  --nav-collapse-icon-color: rgb(102, 92, 84);
  --nav-collapse-icon-color-collapsed: rgb(102, 92, 84);
  --nav-file-tag: rgba(69, 133, 136, 0.9);
  --nav-heading-color: rgb(40, 40, 40);
  --nav-heading-color-collapsed: rgb(102, 92, 84);
  --nav-heading-color-collapsed-hover: rgb(80, 73, 69);
  --nav-heading-color-hover: rgb(40, 40, 40);
  --nav-item-background-selected: hsla(12, 107%, 32%, 0.15);
  --nav-item-color: rgb(80, 73, 69);
  --nav-item-color-active: rgb(69, 133, 136);
  --nav-item-color-highlighted: rgb(214, 93, 14);
  --nav-item-color-hover: rgb(251, 73, 52);
  --nav-item-color-selected: rgb(40, 40, 40);
  --nav-tag-color: rgb(102, 92, 84);
  --nav-tag-color-active: rgb(80, 73, 69);
  --nav-tag-color-hover: rgb(80, 73, 69);
  --neutral-aqua: rgb(104, 157, 106);
  --neutral-aqua_x: 104,157,106;
  --neutral-blue: rgb(69, 133, 136);
  --neutral-blue_x: 69,133,136;
  --neutral-green: rgb(152, 151, 26);
  --neutral-green_x: 152,151,26;
  --neutral-orange: rgb(214, 93, 14);
  --neutral-orange_x: 214,93,14;
  --neutral-purple: rgb(177, 98, 134);
  --neutral-purple_x: 177,98,134;
  --neutral-red: rgb(204, 36, 29);
  --neutral-red_x: 204,36,29;
  --neutral-yellow: rgb(215, 153, 33);
  --neutral-yellow_x: 215,153,33;
  --pdf-background: rgb(249, 245, 215);
  --pdf-page-background: rgb(249, 245, 215);
  --pdf-sidebar-background: rgb(249, 245, 215);
  --pill-border-color: rgb(213, 196, 161);
  --pill-color: rgb(80, 73, 69);
  --pill-color-hover: rgb(40, 40, 40);
  --pill-color-remove: rgb(102, 92, 84);
  --pill-color-remove-hover: rgb(214, 93, 14);
  --prompt-background: rgb(249, 245, 215);
  --raised-background: color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent));
  --ribbon-background: rgb(235, 219, 178);
  --ribbon-background-collapsed: rgb(249, 245, 215);
  --search-clear-button-color: rgb(80, 73, 69);
  --search-icon-color: rgb(80, 73, 69);
  --search-result-background: rgb(249, 245, 215);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(40, 40, 40);
  --setting-items-background: rgb(249, 245, 215);
  --setting-items-border-color: rgb(213, 196, 161);
  --slider-track-background: rgb(213, 196, 161);
  --status-bar-background: rgb(235, 219, 178);
  --status-bar-border-color: rgb(213, 196, 161);
  --status-bar-text-color: rgb(80, 73, 69);
  --suggestion-background: rgb(249, 245, 215);
  --sync-avatar-color-1: rgb(204, 36, 29);
  --sync-avatar-color-2: rgb(214, 93, 14);
  --sync-avatar-color-3: rgb(215, 153, 33);
  --sync-avatar-color-4: rgb(152, 151, 26);
  --sync-avatar-color-5: rgb(69, 133, 136);
  --sync-avatar-color-6: rgb(7, 102, 120);
  --sync-avatar-color-7: rgb(177, 98, 134);
  --sync-avatar-color-8: rgb(211, 134, 155);
  --tab-background-active: rgb(249, 245, 215);
  --tab-container-background: rgb(235, 219, 178);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(213, 196, 161);
  --tab-switcher-background: rgb(235, 219, 178);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(235, 219, 178), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(12, 107%, 32%);
  --tab-text-color: rgb(102, 92, 84);
  --tab-text-color-active: rgb(80, 73, 69);
  --tab-text-color-focused: rgb(80, 73, 69);
  --tab-text-color-focused-active: rgb(215, 153, 33);
  --tab-text-color-focused-active-current: rgb(251, 73, 52);
  --tab-text-color-focused-highlighted: rgb(214, 93, 14);
  --table-add-button-border-color: rgb(213, 196, 161);
  --table-border-color: rgb(213, 196, 161);
  --table-drag-handle-background-active: hsl(11, 108.07%, 34.4%);
  --table-drag-handle-color: rgb(102, 92, 84);
  --table-header-background: rgba(189, 174, 147, 0.4);
  --table-header-background-hover: rgb(213, 196, 161);
  --table-header-border-color: rgb(213, 196, 161);
  --table-header-color: rgb(40, 40, 40);
  --table-row-background-hover: rgb(213, 196, 161);
  --table-row-even-background: rgba(235, 219, 178, 0.2);
  --table-row-odd-background: rgba(235, 219, 178, 0.7);
  --table-selection: hsla(12, 107%, 32%, 0.1);
  --table-selection-border-color: hsl(11, 108.07%, 34.4%);
  --tag-background: rgb(235, 219, 178);
  --tag-background-hover: rgba(235, 219, 178, 0.6);
  --tag-border-color: hsla(12, 107%, 32%, 0.15);
  --tag-border-color-hover: hsla(12, 107%, 32%, 0.15);
  --tag-color: rgb(104, 157, 106);
  --tag-color-hover: rgb(214, 93, 14);
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(214, 93, 14);
  --text-accent-hover: rgb(142, 192, 124);
  --text-error: rgb(204, 36, 29);
  --text-faint: rgb(102, 92, 84);
  --text-highlight-bg: rgb(250, 189, 47);
  --text-highlight-fg: rgb(40, 40, 40);
  --text-muted: rgb(80, 73, 69);
  --text-normal: rgb(40, 40, 40);
  --text-selection: rgba(204, 36, 29, 0.6);
  --text-success: rgb(152, 151, 26);
  --text-warning: rgb(214, 93, 14);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(235, 219, 178);
  --titlebar-background-focused: rgb(235, 219, 178);
  --titlebar-border-color: rgb(213, 196, 161);
  --titlebar-text-color: rgb(80, 73, 69);
  --titlebar-text-color-focused: rgb(251, 73, 52);
  --vault-profile-color: rgb(40, 40, 40);
  --vault-profile-color-hover: rgb(40, 40, 40);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 245, 215);
  color: rgb(40, 40, 40);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 219, 178);
  border-left-color: rgb(213, 196, 161);
  color: rgb(40, 40, 40);
}

body div#quartz-root {
  background-color: rgb(249, 245, 215);
  color: rgb(40, 40, 40);
}`,
    typography: `body .page article p > b, b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > em, em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > i, i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .page article p > strong, strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration: rgb(215, 153, 33);
  text-decoration-color: rgb(215, 153, 33);
}

body .text-highlight {
  background-color: rgb(250, 189, 47);
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body del {
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: line-through rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body p {
  color: rgb(80, 73, 69);
  outline: rgb(80, 73, 69) none 0px;
  text-decoration: rgb(80, 73, 69);
  text-decoration-color: rgb(80, 73, 69);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgb(214, 93, 14);
  text-decoration-color: rgb(214, 93, 14);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgb(214, 93, 14);
  text-decoration-color: rgb(214, 93, 14);
}

body a.internal.broken {
  color: rgb(214, 93, 14);
  outline: rgb(214, 93, 14) none 0px;
  text-decoration: rgba(163, 33, 0, 0.3);
  text-decoration-color: rgba(163, 33, 0, 0.3);
}`,
    lists: `body dd {
  color: rgb(40, 40, 40);
}

body dt {
  color: rgb(40, 40, 40);
}

body ol > li {
  color: rgb(40, 40, 40);
}

body ol.overflow {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body ul > li {
  color: rgb(40, 40, 40);
}

body ul.overflow {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(102, 92, 84);
  text-decoration: rgb(102, 92, 84);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
}

body th {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(40, 40, 40);
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
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
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
  color: rgb(40, 40, 40);
}

body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
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
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body figcaption {
  color: rgb(40, 40, 40);
}

body figure {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body img {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body video {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `body .file-embed {
  background-color: rgb(249, 245, 215);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

body .footnotes {
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .transclude {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(175, 32, 0);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .transclude-inner {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(175, 32, 0);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='*'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='-'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='/'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='>'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='?'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='I'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='S'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='b'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='c'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='d'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='f'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='i'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='k'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='l'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='p'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='u'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='w'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
}

body .callout[data-callout="abstract"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 177,98,134;
  background-color: rgba(177, 98, 134, 0.2);
  border-bottom-color: rgba(177, 98, 134, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(177, 98, 134, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(177, 98, 134, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(177, 98, 134, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 204,36,29;
  background-color: rgba(204, 36, 29, 0.2);
  border-bottom-color: rgba(204, 36, 29, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(204, 36, 29, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(204, 36, 29, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(204, 36, 29, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 215,153,33;
  background-color: rgba(215, 153, 33, 0.2);
  border-bottom-color: rgba(215, 153, 33, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(215, 153, 33, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(215, 153, 33, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(215, 153, 33, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 146,131,116;
  background-color: rgba(146, 131, 116, 0.2);
  border-bottom-color: rgba(146, 131, 116, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(146, 131, 116, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(146, 131, 116, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(146, 131, 116, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 152,151,26;
  background-color: rgba(152, 151, 26, 0.2);
  border-bottom-color: rgba(152, 151, 26, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(152, 151, 26, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(152, 151, 26, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(152, 151, 26, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 104,157,106;
  background-color: rgba(104, 157, 106, 0.2);
  border-bottom-color: rgba(104, 157, 106, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(104, 157, 106, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(104, 157, 106, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(104, 157, 106, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 69,133,136;
  background-color: rgba(69, 133, 136, 0.2);
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 214,93,14;
  background-color: rgba(214, 93, 14, 0.2);
  border-bottom-color: rgba(214, 93, 14, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(214, 93, 14, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(214, 93, 14, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(214, 93, 14, 0.4);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 245, 215);
}

body .search > .search-container > .search-space > * {
  color: rgb(40, 40, 40);
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(40, 40, 40);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgba(163, 33, 0, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(163, 33, 0, 0.15);
  border-right-color: rgba(163, 33, 0, 0.15);
  border-top-color: rgba(163, 33, 0, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(104, 157, 106);
}

body h1 {
  color: rgb(204, 36, 29);
}

body h2 {
  color: rgb(215, 153, 33);
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 189, 47);
}

body h3 {
  color: rgb(152, 151, 26);
}

body h4 {
  color: rgb(104, 157, 106);
}

body h5 {
  color: rgb(69, 133, 136);
}

body h6 {
  color: rgb(177, 98, 134);
}

body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `body .callout {
  --callout-color: 69,133,136;
  border-bottom-color: rgba(69, 133, 136, 0.4);
  border-bottom-width: 1px;
  border-left-color: rgba(69, 133, 136, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(69, 133, 136, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(69, 133, 136, 0.4);
  border-top-width: 1px;
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
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
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
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(69, 133, 136);
  border-left-color: rgb(69, 133, 136);
  border-right-color: rgb(69, 133, 136);
  border-top-color: rgb(69, 133, 136);
  color: rgb(69, 133, 136);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}`,
    footer: `body footer {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(80, 73, 69);
}

body footer ul li a {
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(40, 40, 40);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(80, 73, 69);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body li.section-li > .section .meta {
  color: rgb(80, 73, 69);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(80, 73, 69);
  text-decoration: rgb(80, 73, 69);
}

body ul.section-ul {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

body .darkmode svg {
  color: rgb(80, 73, 69);
  stroke: rgb(80, 73, 69);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

body .breadcrumb-element p {
  color: rgb(102, 92, 84);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(80, 73, 69);
}

body .metadata-properties {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

body .navigation-progress {
  background-color: rgb(235, 219, 178);
}

body .page-header h2.page-title {
  color: rgb(40, 40, 40);
}

body abbr {
  color: rgb(40, 40, 40);
  text-decoration: underline dotted rgb(40, 40, 40);
}

body details {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body input[type=text] {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(80, 73, 69);
}

body kbd {
  background-color: rgb(235, 219, 178);
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
}

body progress {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body sub {
  color: rgb(40, 40, 40);
}

body summary {
  color: rgb(40, 40, 40);
}

body sup {
  color: rgb(40, 40, 40);
}`,
  },
};
