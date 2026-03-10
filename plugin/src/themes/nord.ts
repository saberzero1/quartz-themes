import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nord", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 213;
  --accent-l: 52%;
  --accent-s: 32%;
  --background-modifier-active-hover: rgba(93, 129, 172, 0.1);
  --background-modifier-border: rgb(67, 76, 94);
  --background-modifier-border-focus: rgb(59, 66, 82);
  --background-modifier-border-hover: rgb(67, 76, 94);
  --background-modifier-error: rgb(191, 97, 106);
  --background-modifier-error-hover: rgb(191, 97, 106);
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: rgb(46, 52, 64);
  --background-modifier-form-field-hover: rgb(46, 52, 64);
  --background-modifier-success: rgb(163, 190, 140);
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: rgb(46, 52, 64);
  --background-primary-alt: rgb(46, 52, 64);
  --background-secondary: rgb(59, 66, 82);
  --background-secondary-alt: rgb(67, 76, 94);
  --bases-cards-background: rgb(46, 52, 64);
  --bases-cards-cover-background: rgb(46, 52, 64);
  --bases-cards-shadow: 0 0 0 1px rgb(67, 76, 94);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(67, 76, 94);
  --bases-embed-border-color: rgb(67, 76, 94);
  --bases-group-heading-property-color: rgb(229, 233, 240);
  --bases-table-border-color: rgb(67, 76, 94);
  --bases-table-cell-background-active: rgb(46, 52, 64);
  --bases-table-cell-background-disabled: rgb(46, 52, 64);
  --bases-table-cell-background-selected: rgba(93, 129, 172, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(59, 66, 82);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(93, 129, 172);
  --bases-table-group-background: rgb(46, 52, 64);
  --bases-table-header-background: rgb(46, 52, 64);
  --bases-table-header-color: rgb(229, 233, 240);
  --bases-table-row-background-hover: rgb(76, 86, 106);
  --bases-table-summary-background: rgb(46, 52, 64);
  --blockquote-border-color: rgb(93, 129, 172);
  --blur-background: color-mix(in srgb, rgb(59, 66, 82) 65%, transparent) linear-gradient(rgb(59, 66, 82), color-mix(in srgb, rgb(59, 66, 82) 65%, transparent));
  --bold-color: rgb(94, 129, 172);
  --bold-weight: 600;
  --calendar-background-hover: rgb(76, 86, 106);
  --calendar-hover: rgb(191, 97, 106);
  --calendar-today: rgb(235, 203, 139);
  --calendar-week: rgb(235, 203, 139);
  --callout-bug: 191, 97, 106;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-question: 208, 135, 112;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: rgb(46, 52, 64);
  --canvas-card-label-color: rgb(216, 222, 233);
  --canvas-color-1: 191, 97, 106;
  --canvas-color-2: 208, 135, 112;
  --canvas-color-3: 235, 203, 139;
  --canvas-color-4: 163, 190, 140;
  --canvas-color-5: 136, 192, 208;
  --canvas-color-6: 180, 142, 173;
  --canvas-dot-pattern: rgb(59, 66, 82);
  --caret-color: rgb(236, 239, 244);
  --checkbox-border-color: rgb(216, 222, 233);
  --checkbox-border-color-hover: rgb(229, 233, 240);
  --checkbox-color: rgb(93, 129, 172);
  --checkbox-color-hover: rgb(119, 153, 187);
  --checkbox-marker-color: rgb(46, 52, 64);
  --checklist-done-color: rgb(229, 233, 240);
  --code-background: rgb(59, 66, 82);
  --code-border-color: rgb(67, 76, 94);
  --code-comment: rgb(216, 222, 233);
  --code-function: rgb(235, 203, 139);
  --code-important: rgb(208, 135, 112);
  --code-normal: rgb(216, 222, 233);
  --code-operator: rgb(191, 97, 106);
  --code-property: rgb(136, 192, 208);
  --code-punctuation: rgb(229, 233, 240);
  --code-string: rgb(163, 190, 140);
  --code-tag: rgb(191, 97, 106);
  --code-value: rgb(180, 142, 173);
  --collapse-icon-color: rgb(216, 222, 233);
  --collapse-icon-color-collapsed: rgb(143, 188, 187);
  --color-accent: rgb(93, 129, 172);
  --color-accent-1: rgb(119, 153, 187);
  --color-accent-2: rgb(142, 173, 199);
  --color-accent-hsl: 213, 32%, 52%;
  --color-base-20: rgb(59, 66, 82);
  --color-base-25: rgb(46, 52, 64);
  --color-base-30: rgb(59, 66, 82);
  --color-base-35: rgb(67, 76, 94);
  --color-base-40: rgb(59, 66, 82);
  --color-blue: rgb(94, 129, 172);
  --color-blue-rgb: 94, 129, 172;
  --color-cyan: rgb(136, 192, 208);
  --color-cyan-rgb: 136, 192, 208;
  --color-green: rgb(163, 190, 140);
  --color-green-rgb: 163, 190, 140;
  --color-orange: rgb(208, 135, 112);
  --color-orange-rgb: 208, 135, 112;
  --color-purple: rgb(180, 142, 173);
  --color-purple-rgb: 180, 142, 173;
  --color-red: rgb(191, 97, 106);
  --color-red-rgb: 191, 97, 106;
  --color-yellow: rgb(235, 203, 139);
  --color-yellow-rgb: 235, 203, 139;
  --cursor-line-background: rgba(143, 188, 187, 0.2);
  --dark: var(--text-normal);
  --dark0: rgb(46, 52, 64);
  --dark0_x: 46, 52, 64;
  --dark1: rgb(59, 66, 82);
  --dark1_x: 59, 66, 82;
  --dark2: rgb(67, 76, 94);
  --dark2_x: 67, 76, 94;
  --dark3: rgb(76, 86, 106);
  --dark3_x: 76, 86, 106;
  --darkgray: var(--text-normal);
  --dataview-key: rgb(216, 222, 233);
  --dataview-key-background: rgba(129, 161, 193, 0.3);
  --dataview-value: rgb(216, 222, 233);
  --dataview-value-background: rgba(191, 97, 106, 0.3);
  --divider-color: rgb(67, 76, 94);
  --divider-color-hover: rgb(93, 129, 172);
  --divider-width: 0.2em;
  --dropdown-background: rgb(59, 66, 82);
  --dropdown-background-hover: rgb(67, 76, 94);
  --embed-block-shadow-hover: 0 0 0 1px rgb(67, 76, 94), inset 0 0 0 1px rgb(67, 76, 94);
  --embed-border-left: 6px double rgb(93, 129, 172);
  --embed-border-start: 2px solid rgb(93, 129, 172);
  --file-header-background: rgb(46, 52, 64);
  --file-header-background-focused: rgb(46, 52, 64);
  --flair-background: rgb(59, 66, 82);
  --flair-color: rgb(236, 239, 244);
  --flashing-background: rgba(94, 129, 172, 0.3);
  --footnote-divider-color: rgb(67, 76, 94);
  --footnote-id-color: rgb(229, 233, 240);
  --footnote-id-color-no-occurrences: rgb(216, 222, 233);
  --frost0: rgb(143, 188, 187);
  --frost0_x: 143, 188, 187;
  --frost1: rgb(136, 192, 208);
  --frost1_x: 136, 192, 208;
  --frost2: rgb(129, 161, 193);
  --frost2_x: 129, 161, 193;
  --frost3: rgb(94, 129, 172);
  --frost3_x: 94, 129, 172;
  --graph-line: rgb(76, 86, 106);
  --graph-node: rgb(255, 255, 255);
  --graph-node-attachment: rgb(180, 142, 173);
  --graph-node-focused: rgb(143, 188, 187);
  --graph-node-tag: rgb(136, 192, 208);
  --graph-node-unresolved: rgb(59, 66, 82);
  --graph-text: rgb(236, 239, 244);
  --gray: var(--text-muted);
  --green: rgb(163, 190, 140);
  --green_x: 163, 190, 140;
  --h1-color: rgb(136, 192, 208);
  --h2-color: rgb(129, 161, 193);
  --h3-color: rgb(208, 135, 112);
  --h4-color: rgb(235, 203, 139);
  --h5-color: rgb(191, 97, 106);
  --h6-color: rgb(163, 190, 140);
  --heading-formatting: rgb(216, 222, 233);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(67, 76, 94);
  --icon-color: rgb(229, 233, 240);
  --icon-color-active: rgb(143, 188, 187);
  --icon-color-focused: rgb(136, 192, 208);
  --icon-color-hover: rgb(94, 129, 172);
  --inline-title-color: rgb(143, 188, 187);
  --input-date-separator: rgb(216, 222, 233);
  --input-placeholder-color: rgb(216, 222, 233);
  --interactive-accent: rgb(93, 129, 172);
  --interactive-accent-hover: rgb(119, 153, 187);
  --interactive-accent-hsl: 213, 32%, 52%;
  --interactive-hover: rgb(67, 76, 94);
  --interactive-normal: rgb(59, 66, 82);
  --italic-color: rgb(143, 188, 187);
  --light: var(--background-primary);
  --light0: rgb(216, 222, 233);
  --light0_x: 216, 222, 233;
  --light1: rgb(229, 233, 240);
  --light1_x: 229, 233, 240;
  --light2: rgb(236, 239, 244);
  --light2_x: 236, 239, 244;
  --light3: rgb(255, 255, 255);
  --light3_x: 255, 255, 255;
  --lightgray: var(--background-secondary);
  --link-color: rgb(180, 142, 173);
  --link-color-hover: rgb(136, 192, 208);
  --link-external-color: rgb(180, 142, 173);
  --link-external-color-hover: rgb(136, 192, 208);
  --link-unresolved-color: rgb(180, 142, 173);
  --link-unresolved-decoration-color: rgba(93, 129, 172, 0.3);
  --link-url: rgb(163, 190, 140);
  --list-marker-color: rgb(216, 222, 233);
  --list-marker-color-collapsed: rgb(143, 188, 187);
  --list-marker-color-hover: rgb(229, 233, 240);
  --menu-background: rgb(59, 66, 82);
  --menu-border-color: rgb(67, 76, 94);
  --mermaid-exclude: rgb(76, 86, 106);
  --mermaid-loopline: rgb(136, 192, 208);
  --mermaid-note: rgb(94, 129, 172);
  --mermaid-seqnum: rgb(46, 52, 64);
  --metadata-border-color: rgb(67, 76, 94);
  --metadata-divider-color: rgb(67, 76, 94);
  --metadata-input-text-color: rgb(236, 239, 244);
  --metadata-label-text-color: rgb(229, 233, 240);
  --metadata-label-text-color-hover: rgb(229, 233, 240);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(59, 66, 82);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(67, 76, 94);
  --modal-background: rgb(46, 52, 64);
  --modal-border-color: rgb(59, 66, 82);
  --nav-collapse-icon-color: rgb(216, 222, 233);
  --nav-collapse-icon-color-collapsed: rgb(216, 222, 233);
  --nav-file-tag: rgba(235, 203, 139, 0.9);
  --nav-heading-color: rgb(236, 239, 244);
  --nav-heading-color-collapsed: rgb(216, 222, 233);
  --nav-heading-color-collapsed-hover: rgb(229, 233, 240);
  --nav-heading-color-hover: rgb(236, 239, 244);
  --nav-item-background-selected: rgba(93, 129, 172, 0.15);
  --nav-item-color: rgb(229, 233, 240);
  --nav-item-color-active: rgb(136, 192, 208);
  --nav-item-color-highlighted: rgb(143, 188, 187);
  --nav-item-color-hover: rgb(94, 129, 172);
  --nav-item-color-selected: rgb(236, 239, 244);
  --nav-tag-color: rgb(216, 222, 233);
  --nav-tag-color-active: rgb(229, 233, 240);
  --nav-tag-color-hover: rgb(229, 233, 240);
  --orange: rgb(208, 135, 112);
  --orange_x: 208, 135, 112;
  --pdf-background: rgb(46, 52, 64);
  --pdf-page-background: rgb(46, 52, 64);
  --pdf-shadow: 0 0 0 1px rgb(67, 76, 94);
  --pdf-sidebar-background: rgb(46, 52, 64);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(67, 76, 94);
  --pill-border-color: rgb(67, 76, 94);
  --pill-border-color-hover: rgb(67, 76, 94);
  --pill-color: rgb(229, 233, 240);
  --pill-color-hover: rgb(236, 239, 244);
  --pill-color-remove: rgb(216, 222, 233);
  --pill-color-remove-hover: rgb(143, 188, 187);
  --prompt-background: rgb(46, 52, 64);
  --prompt-border-color: rgb(59, 66, 82);
  --purple: rgb(180, 142, 173);
  --purple_x: 180, 142, 173;
  --raised-background: color-mix(in srgb, rgb(59, 66, 82) 65%, transparent) linear-gradient(rgb(59, 66, 82), color-mix(in srgb, rgb(59, 66, 82) 65%, transparent));
  --red: rgb(191, 97, 106);
  --red_x: 191, 97, 106;
  --ribbon-background: rgb(59, 66, 82);
  --ribbon-background-collapsed: rgb(46, 52, 64);
  --search-clear-button-color: rgb(191, 97, 106);
  --search-icon-color: rgb(229, 233, 240);
  --search-result-background: rgb(46, 52, 64);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(236, 239, 244);
  --setting-items-background: rgb(46, 52, 64);
  --setting-items-border-color: rgb(67, 76, 94);
  --slider-thumb-border-color: rgb(67, 76, 94);
  --slider-track-background: rgb(67, 76, 94);
  --status-bar-background: rgb(59, 66, 82);
  --status-bar-border-color: rgb(76, 86, 106);
  --status-bar-text-color: rgb(229, 233, 240);
  --suggestion-background: rgb(46, 52, 64);
  --sync-avatar-color-1: rgb(191, 97, 106);
  --sync-avatar-color-2: rgb(208, 135, 112);
  --sync-avatar-color-3: rgb(235, 203, 139);
  --sync-avatar-color-4: rgb(163, 190, 140);
  --sync-avatar-color-5: rgb(136, 192, 208);
  --sync-avatar-color-6: rgb(94, 129, 172);
  --sync-avatar-color-7: rgb(180, 142, 173);
  --tab-background-active: rgb(46, 52, 64);
  --tab-container-background: rgb(59, 66, 82);
  --tab-curve: 0.6em;
  --tab-divider-color: rgb(67, 76, 94);
  --tab-font-weight: 600;
  --tab-outline-color: rgb(67, 76, 94);
  --tab-outline-width: 2px;
  --tab-radius: 0.5em;
  --tab-radius-active: 0.5em;
  --tab-switcher-background: rgb(59, 66, 82);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(59, 66, 82), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(93, 129, 172);
  --tab-text-color: rgb(216, 222, 233);
  --tab-text-color-active: rgb(229, 233, 240);
  --tab-text-color-focused: rgb(229, 233, 240);
  --tab-text-color-focused-active: rgb(94, 129, 172);
  --tab-text-color-focused-active-current: rgb(136, 192, 208);
  --tab-text-color-focused-highlighted: rgb(136, 192, 208);
  --table-add-button-border-color: rgb(67, 76, 94);
  --table-border-color: rgb(67, 76, 94);
  --table-drag-handle-background-active: rgb(93, 129, 172);
  --table-drag-handle-color: rgb(216, 222, 233);
  --table-header-background: rgb(34, 39, 47);
  --table-header-background-hover: rgb(76, 86, 106);
  --table-header-border-color: rgb(67, 76, 94);
  --table-header-color: rgb(236, 239, 244);
  --table-row-background-hover: rgb(76, 86, 106);
  --table-row-even-background: rgb(43, 48, 59);
  --table-row-odd-background: rgb(51, 58, 71);
  --table-selection: rgba(93, 129, 172, 0.1);
  --table-selection-border-color: rgb(93, 129, 172);
  --tag-background: rgb(59, 66, 82);
  --tag-background-hover: rgb(46, 52, 64);
  --tag-border-color: rgba(93, 129, 172, 0.15);
  --tag-border-color-hover: rgba(93, 129, 172, 0.15);
  --tag-color: rgb(129, 161, 193);
  --tag-color-hover: rgb(143, 188, 187);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0.4em;
  --tag-padding-y: 0.2em;
  --tag-radius: 0.5em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(143, 188, 187);
  --text-accent-hover: rgb(136, 192, 208);
  --text-error: rgb(191, 97, 106);
  --text-faint: rgb(216, 222, 233);
  --text-highlight-bg: rgb(136, 192, 208);
  --text-highlight-fg: rgb(46, 52, 64);
  --text-muted: rgb(229, 233, 240);
  --text-normal: rgb(236, 239, 244);
  --text-selection: rgba(94, 129, 172, 0.6);
  --text-success: rgb(163, 190, 140);
  --text-warning: rgb(208, 135, 112);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(59, 66, 82);
  --titlebar-background-focused: rgb(59, 66, 82);
  --titlebar-border-color: rgb(67, 76, 94);
  --titlebar-border-width: 0em;
  --titlebar-text-color: rgb(229, 233, 240);
  --titlebar-text-color-focused: rgb(143, 188, 187);
  --vault-profile-color: rgb(236, 239, 244);
  --vault-profile-color-hover: rgb(236, 239, 244);
  --yellow: rgb(235, 203, 139);
  --yellow_x: 235, 203, 139;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
  border-right-width: 3px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(236, 239, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(94, 129, 172);
  outline: rgb(94, 129, 172) none 0px;
  text-decoration: rgb(94, 129, 172);
  text-decoration-color: rgb(94, 129, 172);
}

body .page article p > em, em {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > i, i {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > strong, strong {
  color: rgb(94, 129, 172);
  outline: rgb(94, 129, 172) none 0px;
  text-decoration: rgb(94, 129, 172);
  text-decoration-color: rgb(94, 129, 172);
}

body .text-highlight {
  background-color: rgb(136, 192, 208);
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
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
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration: underline rgb(180, 142, 173);
  text-decoration-color: rgb(180, 142, 173);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration: underline rgb(180, 142, 173);
  text-decoration-color: rgb(180, 142, 173);
}

body a.internal.broken {
  color: rgb(180, 142, 173);
  outline: rgb(180, 142, 173) none 0px;
  text-decoration: underline rgba(93, 129, 172, 0.3);
  text-decoration-color: rgba(93, 129, 172, 0.3);
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ul > li {
  color: rgb(236, 239, 244);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
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
  border-bottom-color: rgb(59, 66, 82);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(59, 66, 82);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(59, 66, 82);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(59, 66, 82);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(236, 239, 244);
}

body tbody tr:nth-child(even) {
  background-color: rgb(43, 48, 59);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(51, 58, 71);
}

body td {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

body th {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
  color: rgb(236, 239, 244);
}

body thead {
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}

body tr {
  background-color: rgb(34, 39, 47);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(46, 52, 64);
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
  border-left-color: rgb(93, 129, 172);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .transclude-inner {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(93, 129, 172);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(94, 129, 172);
  text-decoration: line-through rgb(94, 129, 172);
  text-decoration-color: rgb(94, 129, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-out;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(208, 135, 112);
  text-decoration: underline rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(191, 97, 106);
  text-decoration: line-through rgb(191, 97, 106);
  text-decoration-color: rgb(191, 97, 106);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(229, 233, 240);
  text-decoration: rgb(229, 233, 240);
  text-decoration-color: rgb(229, 233, 240);
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
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
}

body .callout[data-callout="abstract"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-left-color: rgba(180, 142, 173, 0.25);
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgba(180, 142, 173, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-left-color: rgba(191, 97, 106, 0.25);
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgba(191, 97, 106, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-left-color: rgba(163, 190, 140, 0.25);
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgba(163, 190, 140, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-left-color: rgba(136, 192, 208, 0.25);
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgba(136, 192, 208, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-left-color: rgba(208, 135, 112, 0.25);
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgba(208, 135, 112, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
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

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

body h1 {
  color: rgb(136, 192, 208);
}

body h2 {
  color: rgb(129, 161, 193);
}

body h2.page-title, h2.page-title a {
  color: rgb(143, 188, 187);
}

body h3 {
  color: rgb(208, 135, 112);
}

body h4 {
  color: rgb(235, 203, 139);
}

body h5 {
  color: rgb(191, 97, 106);
}

body h6 {
  color: rgb(163, 190, 140);
}

body hr {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-right-width: 3px;
}`,
    scrollbars: `body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-left-color: rgba(94, 129, 172, 0.25);
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgba(94, 129, 172, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
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
  border-bottom-color: rgb(136, 192, 208);
  border-left-color: rgb(136, 192, 208);
  border-right-color: rgb(136, 192, 208);
  border-top-color: rgb(136, 192, 208);
  color: rgb(136, 192, 208);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(229, 233, 240);
  border-left-color: rgb(229, 233, 240);
  border-right-color: rgb(229, 233, 240);
  border-top-color: rgb(229, 233, 240);
  color: rgb(229, 233, 240);
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
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
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(59, 66, 82);
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
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
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
  light: {
    base: `:root:root {
  --accent-h: 213;
  --accent-l: 52%;
  --accent-s: 32%;
  --background-modifier-active-hover: rgba(93, 129, 172, 0.1);
  --bases-table-cell-background-selected: rgba(93, 129, 172, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(107, 140, 179);
  --blockquote-border-color: rgb(107, 140, 179);
  --bold-weight: 600;
  --checkbox-color: rgb(107, 140, 179);
  --checkbox-color-hover: rgb(119, 153, 187);
  --collapse-icon-color-collapsed: rgb(93, 129, 172);
  --color-accent: rgb(93, 129, 172);
  --color-accent-1: rgb(107, 140, 179);
  --color-accent-2: rgb(119, 153, 187);
  --color-accent-hsl: 213, 32%, 52%;
  --dark0: rgb(46, 52, 64);
  --dark0_x: 46, 52, 64;
  --dark1: rgb(59, 66, 82);
  --dark1_x: 59, 66, 82;
  --dark2: rgb(67, 76, 94);
  --dark2_x: 67, 76, 94;
  --dark3: rgb(76, 86, 106);
  --dark3_x: 76, 86, 106;
  --divider-color-hover: rgb(107, 140, 179);
  --divider-width: 0.2em;
  --embed-border-left: 6px double rgb(107, 140, 179);
  --embed-border-start: 2px solid rgb(107, 140, 179);
  --frost0: rgb(143, 188, 187);
  --frost0_x: 143, 188, 187;
  --frost1: rgb(136, 192, 208);
  --frost1_x: 136, 192, 208;
  --frost2: rgb(129, 161, 193);
  --frost2_x: 129, 161, 193;
  --frost3: rgb(94, 129, 172);
  --frost3_x: 94, 129, 172;
  --graph-node-focused: rgb(93, 129, 172);
  --green: rgb(163, 190, 140);
  --green_x: 163, 190, 140;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(93, 129, 172);
  --interactive-accent: rgb(107, 140, 179);
  --interactive-accent-hover: rgb(119, 153, 187);
  --interactive-accent-hsl: 213, 32%, 52%;
  --light0: rgb(216, 222, 233);
  --light0_x: 216, 222, 233;
  --light1: rgb(229, 233, 240);
  --light1_x: 229, 233, 240;
  --light2: rgb(236, 239, 244);
  --light2_x: 236, 239, 244;
  --light3: rgb(255, 255, 255);
  --light3_x: 255, 255, 255;
  --link-color: rgb(93, 129, 172);
  --link-color-hover: rgb(119, 153, 187);
  --link-external-color: rgb(93, 129, 172);
  --link-external-color-hover: rgb(119, 153, 187);
  --link-unresolved-color: rgb(93, 129, 172);
  --link-unresolved-decoration-color: rgba(93, 129, 172, 0.3);
  --list-marker-color-collapsed: rgb(93, 129, 172);
  --nav-item-background-selected: rgba(93, 129, 172, 0.15);
  --nav-item-color-highlighted: rgb(93, 129, 172);
  --orange: rgb(208, 135, 112);
  --orange_x: 208, 135, 112;
  --pill-color-remove-hover: rgb(93, 129, 172);
  --purple: rgb(180, 142, 173);
  --purple_x: 180, 142, 173;
  --red: rgb(191, 97, 106);
  --red_x: 191, 97, 106;
  --ribbon-background: rgb(59, 66, 82);
  --secondary: var(--text-accent);
  --status-bar-background: rgb(59, 66, 82);
  --status-bar-border-color: rgb(76, 86, 106);
  --tab-curve: 0.6em;
  --tab-font-weight: 600;
  --tab-outline-color: rgb(67, 76, 94);
  --tab-outline-width: 2px;
  --tab-radius: 0.5em;
  --tab-radius-active: 0.5em;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(93, 129, 172);
  --tab-text-color-focused-active: rgb(136, 192, 208);
  --tab-text-color-focused-highlighted: rgb(136, 192, 208);
  --table-drag-handle-background-active: rgb(107, 140, 179);
  --table-selection: rgba(93, 129, 172, 0.1);
  --table-selection-border-color: rgb(107, 140, 179);
  --tag-background: rgba(93, 129, 172, 0.1);
  --tag-background-hover: rgba(93, 129, 172, 0.2);
  --tag-border-color: rgba(93, 129, 172, 0.15);
  --tag-border-color-hover: rgba(93, 129, 172, 0.15);
  --tag-color: rgb(93, 129, 172);
  --tag-color-hover: rgb(93, 129, 172);
  --tag-decoration-hover: underline;
  --tag-padding-x: 0.4em;
  --tag-padding-y: 0.2em;
  --tag-radius: 0.5em;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(93, 129, 172);
  --text-accent-hover: rgb(119, 153, 187);
  --text-selection: rgba(93, 129, 172, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: rgb(59, 66, 82);
  --titlebar-background-focused: rgb(59, 66, 82);
  --titlebar-border-width: 0em;
  --yellow: rgb(235, 203, 139);
  --yellow_x: 235, 203, 139;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar.left {
  border-right-width: 3px;
}`,
    links: `body a.external, footer a {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration: underline rgb(93, 129, 172);
  text-decoration-color: rgb(93, 129, 172);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration: underline rgb(93, 129, 172);
  text-decoration-color: rgb(93, 129, 172);
}

body a.internal.broken {
  color: rgb(93, 129, 172);
  outline: rgb(93, 129, 172) none 0px;
  text-decoration: underline rgba(93, 129, 172, 0.3);
  text-decoration-color: rgba(93, 129, 172, 0.3);
}`,
    tables: `body table {
  border-bottom-color: rgb(246, 246, 246);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(246, 246, 246);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(246, 246, 246);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(246, 246, 246);
  border-top-style: solid;
  border-top-width: 1px;
}

body td {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}

body th {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

body thead {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

body tr {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}`,
    embeds: `body .transclude {
  border-left-color: rgb(106, 140, 179);
}

body .transclude-inner {
  border-left-color: rgb(106, 140, 179);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(94, 129, 172);
  text-decoration: line-through rgb(94, 129, 172);
  text-decoration-color: rgb(94, 129, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-out;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(208, 135, 112);
  text-decoration: underline rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body li.task-list-item[data-task='-'] {
  color: rgb(191, 97, 106);
  text-decoration: line-through rgb(191, 97, 106);
  text-decoration-color: rgb(191, 97, 106);
}

body li.task-list-item[data-task='>'] {
  color: rgb(92, 92, 92);
  text-decoration: rgb(92, 92, 92);
  text-decoration-color: rgb(92, 92, 92);
}`,
    search: `body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(93, 129, 172, 0.1);
  border-bottom-color: rgba(93, 129, 172, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(93, 129, 172, 0.15);
  border-right-color: rgba(93, 129, 172, 0.15);
  border-top-color: rgba(93, 129, 172, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(93, 129, 172);
}

body hr {
  border-right-width: 3px;
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(59, 66, 82);
}`,
  },
};
