import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pln", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark-hsl-h: 210;
  --accent-dark-hsl-l: 63%;
  --accent-dark-hsl-s: 34%;
  --accent-h: 210;
  --accent-l: 63%;
  --accent-light-hsl-h: 213;
  --accent-light-hsl-l: 53%;
  --accent-light-hsl-s: 32%;
  --accent-s: 34%;
  --b0: #2E3440;
  --b1: #3B4252;
  --b2: #434C5E;
  --b3: #4C566A;
  --b3-rgb: 76, 86, 106;
  --background-modifier-active-hover: rgba(129, 161, 193, 0.1);
  --background-modifier-border: #4C566A;
  --background-modifier-border-focus: #2E3440;
  --background-modifier-border-hover: #4C566A;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #2E3440;
  --background-modifier-form-field-hover: #2E3440;
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #3B4252;
  --background-primary-alt: #2E3440;
  --background-secondary: #2E3440;
  --background-secondary-alt: #2E3440;
  --bases-cards-background: #3B4252;
  --bases-cards-cover-background: #2E3440;
  --bases-cards-shadow: 0 0 0 1px #4C566A;
  --bases-cards-shadow-hover: 0 0 0 1px #4C566A;
  --bases-embed-border-color: #4C566A;
  --bases-group-heading-property-color: #ECEFF4;
  --bases-group-heading-property-size: 10px;
  --bases-table-border-color: #4C566A;
  --bases-table-cell-background-active: #3B4252;
  --bases-table-cell-background-disabled: #2E3440;
  --bases-table-cell-background-selected: rgba(129, 161, 193, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #2E3440;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 161, 193);
  --bases-table-group-background: #2E3440;
  --bases-table-header-background: #3B4252;
  --bases-table-header-color: #ECEFF4;
  --bases-table-summary-background: #3B4252;
  --blockquote-border-color: rgb(129, 161, 193);
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --bold-weight: 700;
  --callout-bug: 191, 97, 106;
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252;
  --canvas-card-label-color: #D8DEE9;
  --canvas-color-1: 191, 97, 106;
  --canvas-color-2: 208, 135, 112;
  --canvas-color-3: 235, 203, 139;
  --canvas-color-4: 163, 190, 140;
  --canvas-color-5: 136, 192, 208;
  --canvas-color-6: 180, 142, 173;
  --canvas-dot-pattern: #3B4252;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: #f5f7f9;
  --checkbox-border-color: #D8DEE9;
  --checkbox-border-color-hover: #ECEFF4;
  --checkbox-color: rgb(129, 161, 193);
  --checkbox-color-hover: rgb(159, 186, 209);
  --checkbox-marker-color: #3B4252;
  --checkbox-size: 1.1em;
  --checklist-done-color: #ECEFF4;
  --code-background: #2E3440;
  --code-border-color: #4C566A;
  --code-comment: #D8DEE9;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-normal: #f5f7f9;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #ECEFF4;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #D8DEE9;
  --collapse-icon-color-collapsed: rgb(129, 161, 193);
  --color-accent: rgb(129, 161, 193);
  --color-accent-1: rgb(159, 186, 209);
  --color-accent-2: rgb(189, 209, 224);
  --color-accent-hsl: 210, 34%, 63%;
  --color-base-00: #2E3440;
  --color-base-10: #2E3440;
  --color-base-100: #f5f7f9;
  --color-base-20: #2E3440;
  --color-base-25: #2E3440;
  --color-base-30: #3B4252;
  --color-base-35: #4C566A;
  --color-base-40: #2E3440;
  --color-base-50: #D8DEE9;
  --color-base-60: #E5E9F0;
  --color-base-70: #ECEFF4;
  --color-blue: #5e81ac;
  --color-blue-rgb: 94, 129, 172;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-frost: #81a1c1;
  --color-frost-rgb: 129, 161, 193;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-purple: #b48ead;
  --color-purple-rgb: 180, 142, 173;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-salmon: #FC6E68;
  --color-salmon-rgb: 252, 110, 104;
  --color-sea-green: #8fbcbb;
  --color-sea-green-rgb: 143, 188, 187;
  --color-yellow: #ebcb8b;
  --color-yellow-dark: #e4b860;
  --color-yellow-dark-rgb: 228, 184, 96;
  --color-yellow-light: #ebcb8b;
  --color-yellow-light-rgb: 235, 203, 139;
  --color-yellow-rgb: 235, 203, 139;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #4C566A;
  --divider-color-hover: rgb(129, 161, 193);
  --dropdown-background: #3B4252;
  --dropdown-background-hover: #4C566A;
  --embed-block-shadow-hover: 0 0 0 1px #4C566A, inset 0 0 0 1px #4C566A;
  --embed-border-left: none;
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(129, 161, 193);
  --embed-padding: 0 0 0 0;
  --file-folding-offset: 10px;
  --file-header-background: #3B4252;
  --file-header-background-focused: #3B4252;
  --file-header-font-size: 10px;
  --file-margins: 20px;
  --flair-background: #3B4252;
  --flair-color: #f5f7f9;
  --font-ui-large: 14px;
  --font-ui-medium: 12px;
  --font-ui-small: 10px;
  --font-ui-smaller: 10px;
  --footnote-divider-color: #4C566A;
  --footnote-id-color: #ECEFF4;
  --footnote-id-color-no-occurrences: #D8DEE9;
  --graph-line: #4C566A;
  --graph-node: #ECEFF4;
  --graph-node-attachment: #ebcb8b;
  --graph-node-focused: rgb(129, 161, 193);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #D8DEE9;
  --graph-text: #f5f7f9;
  --gray: var(--text-muted);
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h3-size: 1.37em;
  --h4-size: 1.25em;
  --h5-size: 1.12em;
  --h6-size: 1.12em;
  --header-height: 30px;
  --heading-formatting: #D8DEE9;
  --heading-spacing: 0;
  --highlight: var(--text-highlight-bg);
  --hr-color: #4C566A;
  --icon-color: #ECEFF4;
  --icon-color-active: rgb(129, 161, 193);
  --icon-color-focused: #f5f7f9;
  --icon-color-hover: #ECEFF4;
  --inline-title-size: 2em;
  --input-date-separator: #D8DEE9;
  --input-placeholder-color: #D8DEE9;
  --interactive-accent: rgb(129, 161, 193);
  --interactive-accent-hover: rgb(159, 186, 209);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #4C566A;
  --interactive-normal: #3B4252;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(129, 161, 193);
  --link-color-hover: rgb(189, 209, 224);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(129, 161, 193);
  --link-external-color-hover: rgb(189, 209, 224);
  --link-unresolved-color: rgb(129, 161, 193);
  --link-unresolved-decoration-color: rgba(129, 161, 193, 0.3);
  --link-unresolved-opacity: 100;
  --list-bullet-size: .5em;
  --list-marker-color: #D8DEE9;
  --list-marker-color-collapsed: rgb(129, 161, 193);
  --list-marker-color-hover: #ECEFF4;
  --list-spacing: 1px;
  --menu-background: #2E3440;
  --menu-border-color: #4C566A;
  --metadata-background: rgba(76, 86, 106, 0.4);
  --metadata-border-color: rgb(76, 86, 106);
  --metadata-border-radius: 5px;
  --metadata-display-reading: none;
  --metadata-divider-color: #4C566A;
  --metadata-input-text-color: #f5f7f9;
  --metadata-label-text-color: #ECEFF4;
  --metadata-label-text-color-hover: #ECEFF4;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2E3440;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4C566A;
  --metadata-property-radius: 5px;
  --metadata-sidebar-input-font-size: 10px;
  --metadata-sidebar-label-font-size: 10px;
  --modal-background: #3B4252;
  --modal-border-color: #2E3440;
  --nav-collapse-icon-color: #D8DEE9;
  --nav-collapse-icon-color-collapsed: #D8DEE9;
  --nav-heading-color: #f5f7f9;
  --nav-heading-color-collapsed: #D8DEE9;
  --nav-heading-color-collapsed-hover: #ECEFF4;
  --nav-heading-color-hover: #f5f7f9;
  --nav-item-background-selected: rgba(129, 161, 193, 0.15);
  --nav-item-color: #ECEFF4;
  --nav-item-color-active: #f5f7f9;
  --nav-item-color-highlighted: rgb(129, 161, 193);
  --nav-item-color-hover: #f5f7f9;
  --nav-item-color-selected: #f5f7f9;
  --nav-item-size: 10px;
  --nav-tag-color: #D8DEE9;
  --nav-tag-color-active: #ECEFF4;
  --nav-tag-color-hover: #ECEFF4;
  --p-spacing: .5rem;
  --pdf-background: #3B4252;
  --pdf-page-background: #3B4252;
  --pdf-shadow: 0 0 0 1px #4C566A;
  --pdf-sidebar-background: #3B4252;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A;
  --pill-border-color: #4C566A;
  --pill-border-color-hover: #4C566A;
  --pill-color: #ECEFF4;
  --pill-color-hover: #f5f7f9;
  --pill-color-remove: #D8DEE9;
  --pill-color-remove-hover: rgb(129, 161, 193);
  --pln-cards-color-rgb: 76, 86, 106;
  --prompt-background: #3B4252;
  --prompt-border-color: #2E3440;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent));
  --ribbon-background: #2E3440;
  --ribbon-background-collapsed: #3B4252;
  --search-clear-button-color: #ECEFF4;
  --search-icon-color: #ECEFF4;
  --search-result-background: #3B4252;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #f5f7f9;
  --setting-group-heading-size: 12px;
  --setting-items-background: #2E3440;
  --setting-items-border-color: #4C566A;
  --slider-thumb-border-color: #4C566A;
  --slider-track-background: #4C566A;
  --status-bar-background: #2E3440;
  --status-bar-border-color: #4C566A;
  --status-bar-font-size: 10px;
  --status-bar-text-color: #ECEFF4;
  --suggestion-background: #3B4252;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --tab-background-active: #3B4252;
  --tab-container-background: #2E3440;
  --tab-divider-color: #4C566A;
  --tab-font-size: 10px;
  --tab-outline-color: #4C566A;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-stacked-text-align: right;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: #2E3440;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(129, 161, 193);
  --tab-text-color: #D8DEE9;
  --tab-text-color-active: #ECEFF4;
  --tab-text-color-focused: #ECEFF4;
  --tab-text-color-focused-active: #ECEFF4;
  --tab-text-color-focused-active-current: #f5f7f9;
  --tab-text-color-focused-highlighted: rgb(129, 161, 193);
  --table-add-button-border-color: #4C566A;
  --table-border-color: #4C566A;
  --table-drag-handle-background-active: rgb(129, 161, 193);
  --table-drag-handle-color: #D8DEE9;
  --table-header-border-color: #4C566A;
  --table-header-color: #f5f7f9;
  --table-selection: rgba(129, 161, 193, 0.1);
  --table-selection-border-color: rgb(129, 161, 193);
  --tag-background: rgba(129, 161, 193, 0.1);
  --tag-background-hover: rgba(129, 161, 193, 0.2);
  --tag-border-color: rgba(129, 161, 193, 0.15);
  --tag-border-color-hover: rgba(129, 161, 193, 0.15);
  --tag-border-width: 2px;
  --tag-color: rgb(129, 161, 193);
  --tag-color-hover: rgb(129, 161, 193);
  --tag-radius: 5px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(129, 161, 193);
  --text-accent-hover: rgb(189, 209, 224);
  --text-error: #FC6E68;
  --text-faint: #D8DEE9;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4);
  --text-muted: #ECEFF4;
  --text-normal: #f5f7f9;
  --text-selection: rgba(129, 161, 193, 0.33);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #2E3440;
  --titlebar-background-focused: #2E3440;
  --titlebar-border-color: #4C566A;
  --titlebar-text-color: #ECEFF4;
  --titlebar-text-color-focused: #f5f7f9;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --vault-profile-color: #f5f7f9;
  --vault-profile-color-hover: #f5f7f9;
  --vault-profile-font-size: 10px;
  --w0: #D8DEE9;
  --w0-rgb: 216, 222, 233;
  --w1: #E5E9F0;
  --w2: #ECEFF4;
  --w3: #f5f7f9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(46, 52, 64);
  color: rgb(245, 247, 249);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(59, 66, 82);
  color: rgb(245, 247, 249);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(46, 52, 64);
  color: rgb(245, 247, 249);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(76, 86, 106);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(46, 52, 64);
  border-left-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}

body div#quartz-root {
  background-color: rgb(59, 66, 82);
  color: rgb(245, 247, 249);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body .page article p > em, em {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body .page article p > i, i {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body .page article p > strong, strong {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body .text-highlight {
  background-color: rgba(235, 203, 139, 0.2);
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body del {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: line-through rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body p {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}`,
    links: `body a.external, footer a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal.broken {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `body dd {
  color: rgb(245, 247, 249);
}

body dt {
  color: rgb(245, 247, 249);
}

body ol > li {
  color: rgb(245, 247, 249);
}

body ol.overflow {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body ul > li {
  color: rgb(245, 247, 249);
}

body ul.overflow {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body table {
  color: rgb(245, 247, 249);
}

body td {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}

body th {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 247, 249);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(245, 247, 249);
  font-family: monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}

body pre:has(> code) {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    images: `body audio {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body figcaption {
  color: rgb(245, 247, 249);
}

body figure {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body img {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body video {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    embeds: `body .file-embed {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .footnotes {
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

body .transclude {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body .transclude-inner {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
  text-decoration-color: rgb(236, 239, 244);
}

body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  margin-left: -17px;
  width: 14.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 249);
  text-decoration: line-through rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 249);
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="danger"] {
  --callout-color: 252, 110, 104;
  background-color: rgba(252, 110, 104, 0.1);
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="failure"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="question"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="quote"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="warning"] {
  --callout-color: 235, 203, 139;
  background-color: rgba(235, 203, 139, 0.1);
  border-bottom-color: rgba(235, 203, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 203, 139);
  border-left-width: 2px;
  border-right-color: rgba(235, 203, 139, 0.25);
  border-top-color: rgb(235, 203, 139);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(129, 161, 193, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(129, 161, 193, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

body h1 {
  color: rgb(245, 247, 249);
}

body h2 {
  color: rgb(245, 247, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 247, 249);
}

body h3 {
  color: rgb(245, 247, 249);
}

body h4 {
  color: rgb(245, 247, 249);
}

body h5 {
  color: rgb(245, 247, 249);
}

body h6 {
  color: rgb(245, 247, 249);
}

body hr {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
}`,
    scrollbars: `body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
}

body ::-webkit-scrollbar-corner {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
}

body ::-webkit-scrollbar-track {
  background: rgb(59, 66, 82) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(59, 66, 82);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}`,
    footer: `body footer {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(236, 239, 244);
}

body footer ul li a {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 247, 249);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(236, 239, 244);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body li.section-li > .section .meta {
  color: rgb(236, 239, 244);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(236, 239, 244);
  text-decoration: rgb(236, 239, 244);
}

body ul.section-ul {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .darkmode svg {
  color: rgb(236, 239, 244);
  stroke: rgb(236, 239, 244);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .breadcrumb-element p {
  color: rgb(216, 222, 233);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

body .metadata {
  background-color: rgba(76, 86, 106, 0.4);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(76, 86, 106);
  border-left-width: 2px;
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(236, 239, 244);
  margin-bottom: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body .navigation-progress {
  background-color: rgb(46, 52, 64);
}

body .page-header h2.page-title {
  color: rgb(245, 247, 249);
}

body abbr {
  color: rgb(245, 247, 249);
  text-decoration: underline dotted rgb(245, 247, 249);
}

body details {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body input[type=text] {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

body kbd {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

body progress {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

body sub {
  color: rgb(245, 247, 249);
}

body summary {
  color: rgb(245, 247, 249);
}

body sup {
  color: rgb(245, 247, 249);
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark-hsl-h: 210;
  --accent-dark-hsl-l: 63%;
  --accent-dark-hsl-s: 34%;
  --accent-h: 213;
  --accent-l: 53%;
  --accent-light-hsl-h: 213;
  --accent-light-hsl-l: 53%;
  --accent-light-hsl-s: 32%;
  --accent-s: 32%;
  --b0: #2E3440;
  --b1: #3B4252;
  --b2: #434C5E;
  --b3: #4C566A;
  --b3-rgb: 76, 86, 106;
  --background-modifier-active-hover: rgba(97, 131, 174, 0.1);
  --background-modifier-border: #D8DEE9;
  --background-modifier-border-focus: #ECEFF4;
  --background-modifier-border-hover: #D8DEE9;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 191, 97, 106;
  --background-modifier-form-field: #ECEFF4;
  --background-modifier-form-field-hover: #ECEFF4;
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 163, 190, 140;
  --background-primary: #f5f7f9;
  --background-primary-alt: #ECEFF4;
  --background-secondary: #ECEFF4;
  --background-secondary-alt: #E5E9F0;
  --bases-cards-background: #f5f7f9;
  --bases-cards-cover-background: #ECEFF4;
  --bases-cards-shadow: 0 0 0 1px #D8DEE9;
  --bases-cards-shadow-hover: 0 0 0 1px #D8DEE9;
  --bases-embed-border-color: #D8DEE9;
  --bases-group-heading-property-color: #2E3440;
  --bases-group-heading-property-size: 10px;
  --bases-table-border-color: #D8DEE9;
  --bases-table-cell-background-active: #f5f7f9;
  --bases-table-cell-background-disabled: #ECEFF4;
  --bases-table-cell-background-selected: rgba(97, 131, 174, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #ECEFF4;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 143, 180);
  --bases-table-group-background: #ECEFF4;
  --bases-table-header-background: #f5f7f9;
  --bases-table-header-color: #2E3440;
  --bases-table-summary-background: #f5f7f9;
  --blockquote-border-color: rgb(110, 143, 180);
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --bold-weight: 700;
  --callout-bug: 191, 97, 106;
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9;
  --canvas-card-label-color: #3B4252;
  --canvas-color-1: 191, 97, 106;
  --canvas-color-2: 208, 135, 112;
  --canvas-color-3: 228, 184, 96;
  --canvas-color-4: 163, 190, 140;
  --canvas-color-5: 136, 192, 208;
  --canvas-color-6: 180, 142, 173;
  --canvas-dot-pattern: #D8DEE9;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: #2E3440;
  --checkbox-border-color: #3B4252;
  --checkbox-border-color-hover: #2E3440;
  --checkbox-color: rgb(110, 143, 180);
  --checkbox-color-hover: rgb(123, 156, 188);
  --checkbox-marker-color: #f5f7f9;
  --checkbox-size: 1.1em;
  --checklist-done-color: #2E3440;
  --code-background: #ECEFF4;
  --code-border-color: #D8DEE9;
  --code-comment: #3B4252;
  --code-function: #e4b860;
  --code-important: #d08770;
  --code-normal: #2E3440;
  --code-operator: #bf616a;
  --code-property: #88c0d0;
  --code-punctuation: #2E3440;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #3B4252;
  --collapse-icon-color-collapsed: rgb(97, 131, 174);
  --color-accent: rgb(97, 131, 174);
  --color-accent-1: rgb(110, 143, 180);
  --color-accent-2: rgb(123, 156, 188);
  --color-accent-hsl: 213, 32%, 53%;
  --color-base-00: #ECEFF4;
  --color-base-05: #ECEFF4;
  --color-base-10: #E5E9F0;
  --color-base-100: #2E3440;
  --color-base-20: #D8DEE9;
  --color-base-25: #4C566A;
  --color-base-30: #D8DEE9;
  --color-base-35: #D8DEE9;
  --color-base-40: #ECEFF4;
  --color-base-50: #3B4252;
  --color-base-60: #2E3440;
  --color-base-70: #2E3440;
  --color-blue: #5e81ac;
  --color-blue-rgb: 94, 129, 172;
  --color-cyan: #88c0d0;
  --color-cyan-rgb: 136, 192, 208;
  --color-frost: #81a1c1;
  --color-frost-rgb: 129, 161, 193;
  --color-green: #a3be8c;
  --color-green-rgb: 163, 190, 140;
  --color-orange: #d08770;
  --color-orange-rgb: 208, 135, 112;
  --color-purple: #b48ead;
  --color-purple-rgb: 180, 142, 173;
  --color-red: #bf616a;
  --color-red-rgb: 191, 97, 106;
  --color-salmon: #FC6E68;
  --color-salmon-rgb: 252, 110, 104;
  --color-sea-green: #8fbcbb;
  --color-sea-green-rgb: 143, 188, 187;
  --color-yellow: #e4b860;
  --color-yellow-dark: #e4b860;
  --color-yellow-dark-rgb: 228, 184, 96;
  --color-yellow-light: #ebcb8b;
  --color-yellow-light-rgb: 235, 203, 139;
  --color-yellow-rgb: 228, 184, 96;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #D8DEE9;
  --divider-color-hover: rgb(110, 143, 180);
  --dropdown-background: #ECEFF4;
  --dropdown-background-hover: #E5E9F0;
  --embed-block-shadow-hover: 0 0 0 1px #D8DEE9, inset 0 0 0 1px #D8DEE9;
  --embed-border-left: none;
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(110, 143, 180);
  --embed-padding: 0 0 0 0;
  --file-folding-offset: 10px;
  --file-header-background: #f5f7f9;
  --file-header-background-focused: #f5f7f9;
  --file-header-font-size: 10px;
  --file-margins: 20px;
  --flair-background: #ECEFF4;
  --flair-color: #2E3440;
  --font-ui-large: 14px;
  --font-ui-medium: 12px;
  --font-ui-small: 10px;
  --font-ui-smaller: 10px;
  --footnote-divider-color: #D8DEE9;
  --footnote-id-color: #2E3440;
  --footnote-id-color-no-occurrences: #3B4252;
  --graph-line: #D8DEE9;
  --graph-node: #2E3440;
  --graph-node-attachment: #e4b860;
  --graph-node-focused: rgb(97, 131, 174);
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #3B4252;
  --graph-text: #2E3440;
  --gray: var(--text-muted);
  --h1-size: 2em;
  --h2-size: 1.6em;
  --h3-size: 1.37em;
  --h4-size: 1.25em;
  --h5-size: 1.12em;
  --h6-size: 1.12em;
  --header-height: 30px;
  --heading-formatting: #3B4252;
  --heading-spacing: 0;
  --highlight: var(--text-highlight-bg);
  --hr-color: #D8DEE9;
  --icon-color: #2E3440;
  --icon-color-active: rgb(97, 131, 174);
  --icon-color-focused: #2E3440;
  --icon-color-hover: #2E3440;
  --inline-title-size: 2em;
  --input-date-separator: #3B4252;
  --input-placeholder-color: #3B4252;
  --interactive-accent: rgb(110, 143, 180);
  --interactive-accent-hover: rgb(123, 156, 188);
  --interactive-accent-hsl: 213, 32%, 53%;
  --interactive-hover: #E5E9F0;
  --interactive-normal: #ECEFF4;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(97, 131, 174);
  --link-color-hover: rgb(123, 156, 188);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(97, 131, 174);
  --link-external-color-hover: rgb(123, 156, 188);
  --link-unresolved-color: rgb(97, 131, 174);
  --link-unresolved-decoration-color: rgba(97, 131, 174, 0.3);
  --link-unresolved-opacity: 100;
  --list-bullet-size: .5em;
  --list-marker-color: #3B4252;
  --list-marker-color-collapsed: rgb(97, 131, 174);
  --list-marker-color-hover: #2E3440;
  --list-spacing: 1px;
  --menu-background: #ECEFF4;
  --menu-border-color: #D8DEE9;
  --metadata-background: rgba(216, 222, 233, 0.4);
  --metadata-border-color: rgb(216, 222, 233);
  --metadata-border-radius: 5px;
  --metadata-display-reading: none;
  --metadata-divider-color: #D8DEE9;
  --metadata-input-text-color: #2E3440;
  --metadata-label-text-color: #2E3440;
  --metadata-label-text-color-hover: #2E3440;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ECEFF4;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8DEE9;
  --metadata-property-radius: 5px;
  --metadata-sidebar-input-font-size: 10px;
  --metadata-sidebar-label-font-size: 10px;
  --modal-background: #f5f7f9;
  --modal-border-color: #ECEFF4;
  --nav-collapse-icon-color: #3B4252;
  --nav-collapse-icon-color-collapsed: #3B4252;
  --nav-heading-color: #2E3440;
  --nav-heading-color-collapsed: #3B4252;
  --nav-heading-color-collapsed-hover: #2E3440;
  --nav-heading-color-hover: #2E3440;
  --nav-item-background-selected: rgba(97, 131, 174, 0.15);
  --nav-item-color: #2E3440;
  --nav-item-color-active: #2E3440;
  --nav-item-color-highlighted: rgb(97, 131, 174);
  --nav-item-color-hover: #2E3440;
  --nav-item-color-selected: #2E3440;
  --nav-item-size: 10px;
  --nav-tag-color: #3B4252;
  --nav-tag-color-active: #2E3440;
  --nav-tag-color-hover: #2E3440;
  --p-spacing: .5rem;
  --pdf-background: #f5f7f9;
  --pdf-page-background: #f5f7f9;
  --pdf-sidebar-background: #f5f7f9;
  --pill-border-color: #D8DEE9;
  --pill-border-color-hover: #D8DEE9;
  --pill-color: #2E3440;
  --pill-color-hover: #2E3440;
  --pill-color-remove: #3B4252;
  --pill-color-remove-hover: rgb(97, 131, 174);
  --pln-cards-color-rgb: 216, 222, 233;
  --prompt-background: #f5f7f9;
  --prompt-border-color: #ECEFF4;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent));
  --ribbon-background: #ECEFF4;
  --ribbon-background-collapsed: #f5f7f9;
  --search-clear-button-color: #2E3440;
  --search-icon-color: #2E3440;
  --search-result-background: #f5f7f9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2E3440;
  --setting-group-heading-size: 12px;
  --setting-items-background: #ECEFF4;
  --setting-items-border-color: #D8DEE9;
  --slider-thumb-border-color: #D8DEE9;
  --slider-track-background: #D8DEE9;
  --status-bar-background: #ECEFF4;
  --status-bar-border-color: #D8DEE9;
  --status-bar-font-size: 10px;
  --status-bar-text-color: #2E3440;
  --suggestion-background: #f5f7f9;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #e4b860;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --tab-background-active: #f5f7f9;
  --tab-container-background: #ECEFF4;
  --tab-divider-color: #D8DEE9;
  --tab-font-size: 10px;
  --tab-outline-color: #D8DEE9;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 20px;
  --tab-stacked-text-align: right;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: #ECEFF4;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(97, 131, 174);
  --tab-text-color: #3B4252;
  --tab-text-color-active: #2E3440;
  --tab-text-color-focused: #2E3440;
  --tab-text-color-focused-active: #2E3440;
  --tab-text-color-focused-active-current: #2E3440;
  --tab-text-color-focused-highlighted: rgb(97, 131, 174);
  --table-add-button-border-color: #D8DEE9;
  --table-border-color: #D8DEE9;
  --table-drag-handle-background-active: rgb(110, 143, 180);
  --table-drag-handle-color: #3B4252;
  --table-header-border-color: #D8DEE9;
  --table-header-color: #2E3440;
  --table-selection: rgba(97, 131, 174, 0.1);
  --table-selection-border-color: rgb(110, 143, 180);
  --tag-background: rgba(97, 131, 174, 0.1);
  --tag-background-hover: rgba(97, 131, 174, 0.2);
  --tag-border-color: rgba(97, 131, 174, 0.15);
  --tag-border-color-hover: rgba(97, 131, 174, 0.15);
  --tag-border-width: 2px;
  --tag-color: rgb(97, 131, 174);
  --tag-color-hover: rgb(97, 131, 174);
  --tag-radius: 5px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(97, 131, 174);
  --text-accent-hover: rgb(123, 156, 188);
  --text-error: #FC6E68;
  --text-faint: #3B4252;
  --text-highlight-bg: rgba(180, 142, 173, 0.4);
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4);
  --text-muted: #2E3440;
  --text-normal: #2E3440;
  --text-selection: rgba(97, 131, 174, 0.2);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #ECEFF4;
  --titlebar-background-focused: #E5E9F0;
  --titlebar-border-color: #D8DEE9;
  --titlebar-text-color: #2E3440;
  --titlebar-text-color-focused: #2E3440;
  --traffic-lights-offset-x: 30px;
  --traffic-lights-offset-y: 30px;
  --vault-profile-color: #2E3440;
  --vault-profile-color-hover: #2E3440;
  --vault-profile-font-size: 10px;
  --w0: #D8DEE9;
  --w0-rgb: 216, 222, 233;
  --w1: #E5E9F0;
  --w2: #ECEFF4;
  --w3: #f5f7f9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 244);
  color: rgb(46, 52, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 247, 249);
  color: rgb(46, 52, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 244);
  color: rgb(46, 52, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 222, 233);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 244);
  border-left-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

body div#quartz-root {
  background-color: rgb(245, 247, 249);
  color: rgb(46, 52, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body .page article p > em, em {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body .page article p > i, i {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body .page article p > strong, strong {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body .text-highlight {
  background-color: rgba(228, 184, 96, 0.2);
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body del {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: line-through rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body p {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration: underline rgb(97, 131, 174);
  text-decoration-color: rgb(97, 131, 174);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration: rgb(97, 131, 174);
  text-decoration-color: rgb(97, 131, 174);
}

body a.internal.broken {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration: rgba(97, 131, 174, 0.3);
  text-decoration-color: rgba(97, 131, 174, 0.3);
}`,
    lists: `body dd {
  color: rgb(46, 52, 64);
}

body dt {
  color: rgb(46, 52, 64);
}

body ol > li {
  color: rgb(46, 52, 64);
}

body ol.overflow {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body ul > li {
  color: rgb(46, 52, 64);
}

body ul.overflow {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(59, 66, 82);
  text-decoration: rgb(59, 66, 82);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body table {
  color: rgb(46, 52, 64);
}

body td {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

body th {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}`,
    code: `body code {
  border-bottom-color: rgb(46, 52, 64);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(46, 52, 64);
  font-family: monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

body pre > code > [data-line] {
  border-left-color: rgb(228, 184, 96);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(228, 184, 96);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(228, 184, 96);
  border-left-color: rgb(228, 184, 96);
  border-right-color: rgb(228, 184, 96);
  border-top-color: rgb(228, 184, 96);
}

body pre > code, pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body figcaption {
  color: rgb(46, 52, 64);
}

body figure {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body img {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body video {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    embeds: `body .file-embed {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .footnotes {
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .transclude {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-left-width: 0px;
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-left-width: 0px;
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body input[type=checkbox] {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
  margin-left: -17px;
  width: 14.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='*'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='-'] {
  color: rgb(46, 52, 64);
  text-decoration: line-through rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='/'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='>'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='?'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='I'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='S'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='b'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='c'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='d'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='f'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='i'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='k'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='l'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='p'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='u'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body li.task-list-item[data-task='w'] {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="danger"] {
  --callout-color: 252, 110, 104;
  background-color: rgba(252, 110, 104, 0.1);
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="failure"] {
  --callout-color: 208, 135, 112;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="question"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="quote"] {
  --callout-color: 129, 161, 193;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}

body .callout[data-callout="warning"] {
  --callout-color: 228, 184, 96;
  background-color: rgba(228, 184, 96, 0.1);
  border-bottom-color: rgba(228, 184, 96, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(228, 184, 96);
  border-left-width: 2px;
  border-right-color: rgba(228, 184, 96, 0.25);
  border-top-color: rgb(228, 184, 96);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(97, 131, 174, 0.1);
  border-bottom-color: rgba(97, 131, 174, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(97, 131, 174, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(97, 131, 174, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(97, 131, 174, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

body a.internal.tag-link::before {
  color: rgb(97, 131, 174);
}

body h1 {
  color: rgb(46, 52, 64);
}

body h2 {
  color: rgb(46, 52, 64);
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 52, 64);
}

body h3 {
  color: rgb(46, 52, 64);
}

body h4 {
  color: rgb(46, 52, 64);
}

body h5 {
  color: rgb(46, 52, 64);
}

body h6 {
  color: rgb(46, 52, 64);
}

body hr {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
}`,
    scrollbars: `body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 247, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 249);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}`,
    footer: `body footer {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

body footer ul li a {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 52, 64);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 52, 64);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body li.section-li > .section .meta {
  color: rgb(46, 52, 64);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 52, 64);
  text-decoration: rgb(46, 52, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .darkmode svg {
  color: rgb(46, 52, 64);
  stroke: rgb(46, 52, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .breadcrumb-element p {
  color: rgb(59, 66, 82);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .metadata {
  background-color: rgba(216, 222, 233, 0.4);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 2px;
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  margin-bottom: 10px;
}

body .metadata-properties {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body .navigation-progress {
  background-color: rgb(236, 239, 244);
}

body .page-header h2.page-title {
  color: rgb(46, 52, 64);
}

body abbr {
  color: rgb(46, 52, 64);
  text-decoration: underline dotted rgb(46, 52, 64);
}

body details {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body input[type=text] {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

body progress {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

body sub {
  color: rgb(46, 52, 64);
}

body summary {
  color: rgb(46, 52, 64);
}

body sup {
  color: rgb(46, 52, 64);
}`,
  },
};
