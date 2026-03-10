import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "novadust", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 140;
  --accent-l: 69%;
  --accent-s: 56%;
  --almost-white: #f7f5e9;
  --background-modifier-active-hover: #1d2833;
  --background-modifier-border: none;
  --background-modifier-border-focus: none;
  --background-modifier-border-hover: none;
  --background-modifier-error: #ff695d;
  --background-modifier-error-hover: #ff695d;
  --background-modifier-error-rgb: 255, 105, 93;
  --background-modifier-form-field: #303f51;
  --background-modifier-form-field-hover: #303f51;
  --background-modifier-hover: #273341;
  --background-modifier-message: #ffa161;
  --background-modifier-success: #b9e678;
  --background-modifier-success-rgb: 185, 230, 120;
  --background-primary: #1d2833;
  --background-primary-alt: #2c3a4a;
  --background-secondary: #1d2833;
  --background-secondary-alt: #2c3a4a;
  --bases-cards-background: #1d2833;
  --bases-cards-cover-background: #2c3a4a;
  --bases-cards-shadow: 0 0 0 1px none;
  --bases-cards-shadow-hover: 0 0 0 1px none;
  --bases-embed-border-color: none;
  --bases-group-heading-property-color: #cfd1d1;
  --bases-table-border-color: none;
  --bases-table-cell-background-active: #1d2833;
  --bases-table-cell-background-disabled: #2c3a4a;
  --bases-table-cell-background-selected: rgba(132, 220, 161, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px none;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5dcbc3;
  --bases-table-group-background: #2c3a4a;
  --bases-table-header-background: #1d2833;
  --bases-table-header-background-hover: #273341;
  --bases-table-header-color: #cfd1d1;
  --bases-table-summary-background: #1d2833;
  --bases-table-summary-background-hover: #273341;
  --basic-gray: #cfd1d1;
  --blockquote-background-color: #2c3a4a;
  --blockquote-border-color: #84dca1;
  --blockquote-border-thickness: 0.2em;
  --blue-gray: #c4d1d1;
  --blur-background: color-mix(in srgb, #ffa161 65%, transparent) linear-gradient(#ffa161, color-mix(in srgb, #ffa161 65%, transparent));
  --bold-color: #b9e678;
  --bright-blue: #5dcbc3;
  --bright-blue-rbg: 95, 203, 195;
  --bright-green: #b9e678;
  --bright-green-rgb: 185, 230, 120;
  --bright-orange: #ffa161;
  --bright-orange-rgb: 255, 161, 97;
  --bright-purple: #d689e3;
  --bright-purple-rgb: 214, 137, 227;
  --bright-red: #ff695d;
  --bright-red-rgb: 255, 105, 93;
  --bright-yellow: #f8c260;
  --bright-yellow-rgb: 248, 194, 96;
  --callout-border-opacity: 0.05;
  --callout-border-width: 2px;
  --callout-bug: 214, 137, 227;
  --callout-default: 95, 203, 195;
  --callout-error: 255, 105, 93;
  --callout-example: 214, 137, 227;
  --callout-fail: 255, 105, 93;
  --callout-important: 255, 161, 97;
  --callout-info: 95, 203, 195;
  --callout-question: 255, 213, 128;
  --callout-quote: 255, 213, 128;
  --callout-radius: 10px;
  --callout-success: 185, 230, 120;
  --callout-summary: 116, 133, 154;
  --callout-tip: 255, 161, 97;
  --callout-title-color: none;
  --callout-todo: 95, 203, 195;
  --callout-warning: 255, 105, 93;
  --canvas-background: #1d2833;
  --canvas-card-label-color: #74859a;
  --canvas-color: 133, 221, 162;
  --canvas-color-1: 255, 105, 93;
  --canvas-color-2: 255, 161, 97;
  --canvas-color-3: 255, 213, 128;
  --canvas-color-4: 185, 230, 120;
  --canvas-color-5: 95, 203, 195;
  --canvas-color-6: 214, 137, 227;
  --canvas-dot-pattern: #2c4f64;
  --caret-color: #eeead1;
  --checkbox-border-color: rgba(255, 213, 128, 0.8);
  --checkbox-border-color-hover: rgba(255, 213, 128, 0.6);
  --checkbox-color: #ffd580;
  --checkbox-color-hover: rgba(255, 213, 128, 0.8);
  --checkbox-marker-color: #1d2833;
  --checklist-done-color: #74859a;
  --code-background: #2c3a4a;
  --code-border-color: none;
  --code-bracket-background: #273341;
  --code-comment: #74859a;
  --code-function: #f8c260;
  --code-important: #ffa161;
  --code-keyword: #ffa161;
  --code-normal: #c4d1d1;
  --code-operator: #ff695d;
  --code-property: #5dcbc3;
  --code-punctuation: #cfd1d1;
  --code-string: #b9e678;
  --code-tag: #ff695d;
  --code-value: #d689e3;
  --collapse-icon-color: #5dcbc3;
  --collapse-icon-color-collapsed: rgb(171, 232, 188);
  --color-accent: rgb(132, 220, 161);
  --color-accent-1: rgb(171, 232, 188);
  --color-accent-2: rgb(210, 243, 219);
  --color-accent-hsl: 140, 56%, 69%;
  --color-blue: #2c4f64;
  --color-blue-rgb: 95, 203, 195;
  --color-cyan: #5dcbc3;
  --color-cyan-rgb: 133, 221, 162;
  --color-green: #b9e678;
  --color-green-rgb: 185, 230, 120;
  --color-orange: #ffa161;
  --color-orange-rgb: 255, 161, 97;
  --color-pink: #ffa161;
  --color-pink-rgb: 255, 161, 97;
  --color-purple: #d689e3;
  --color-purple-rgb: 214, 137, 227;
  --color-red: #ff695d;
  --color-red-rgb: 255, 105, 93;
  --color-yellow: #f8c260;
  --color-yellow-rgb: 255, 213, 128;
  --dark: var(--text-normal);
  --dark-blue: #1d2833;
  --dark-blue-rgb: 29, 40, 51;
  --darkest-blue: #18222b;
  --darkgray: var(--text-normal);
  --divider-color: #2c3a4a;
  --divider-color-hover: #5dcbc3;
  --dropdown-background: #ffa161;
  --dropdown-background-hover: rgba(255, 161, 97, 0.9);
  --embed-block-shadow-hover: 0 0 0 1px none, inset 0 0 0 1px none;
  --embed-border-start: 2px solid #5dcbc3;
  --file-header-active: #f7f5e9;
  --file-header-background: #1d2833;
  --file-header-background-focused: #1d2833;
  --flair-background: #ffa161;
  --flair-color: #eeead1;
  --footnote-divider-color: none;
  --footnote-id-color: #cfd1d1;
  --footnote-id-color-no-occurrences: #5dcbc3;
  --footnote-input-background-active: #273341;
  --graph-line: #303f51;
  --graph-node: #ffd580;
  --graph-node-attachment: #ff695d;
  --graph-node-focused: #ffa161;
  --graph-node-tag: #5dcbc3;
  --graph-node-unresolved: #74859a;
  --graph-text: #74859a;
  --gray: var(--text-muted);
  --h1-color: #ff695d;
  --h1-size: 2.3em;
  --h2-color: #ffa161;
  --h2-size: 2.1em;
  --h3-color: #f8c260;
  --h3-size: 1.9em;
  --h4-color: #b9e678;
  --h4-size: 1.7em;
  --h5-color: #84dca1;
  --h5-size: 1.6em;
  --h6-color: #5dcbc3;
  --h6-size: 1.5em;
  --heading-formatting: #5dcbc3;
  --highlight: var(--text-highlight-bg);
  --hr-color: #84dca1;
  --icon-color: #cfd1d1;
  --icon-color-active: rgb(171, 232, 188);
  --icon-color-focused: #5dcbc3;
  --icon-color-hover: #ffd580;
  --indentation-guide-color: rgba(44, 79, 100, 0.4);
  --indentation-guide-color-active: rgb(44, 79, 100);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #ff695d;
  --inline-title-size: 2.3em;
  --input-date-separator: #5dcbc3;
  --input-placeholder-color: #5dcbc3;
  --interactive-accent: #5dcbc3;
  --interactive-accent-hover: rgba(44, 79, 100, 0.8);
  --interactive-accent-hsl: rgb(44, 78, 99);
  --interactive-hover: rgba(255, 161, 97, 0.9);
  --interactive-normal: #ffa161;
  --italic-color: #f8c260;
  --italic-weight: bold;
  --light: var(--background-primary);
  --light-blue: #303f51;
  --lightgray: var(--background-secondary);
  --link-color: #ffa161;
  --link-color-hover: rgba(255, 161, 97, 0.8);
  --link-external-color: #5dcbc3;
  --link-external-color-hover: rgba(95, 203, 195, 0.8);
  --link-unresolved-color: #cfd1d1;
  --link-unresolved-decoration-color: hsla(rgb(44, 78, 99), 0.3);
  --list-marker-color: #84dca1;
  --list-marker-color-collapsed: #84dca1;
  --list-marker-color-hover: #cfd1d1;
  --menu-background: #1d2833;
  --menu-border-color: none;
  --metadata-border-color: none;
  --metadata-divider-color: none;
  --metadata-input-background-active: #273341;
  --metadata-input-text-color: #eeead1;
  --metadata-label-background-active: #273341;
  --metadata-label-text-color: #cfd1d1;
  --metadata-label-text-color-hover: #cfd1d1;
  --metadata-property-background-active: #273341;
  --metadata-property-box-shadow-focus: 0 0 0 2px none;
  --metadata-property-box-shadow-hover: 0 0 0 1px none;
  --mid-blue: #273341;
  --modal-background: #1d2833;
  --nav-collapse-icon-color: #84dca1;
  --nav-collapse-icon-color-collapsed: #5dcbc3;
  --nav-heading-color: #eeead1;
  --nav-heading-color-collapsed: #5dcbc3;
  --nav-heading-color-collapsed-hover: #cfd1d1;
  --nav-heading-color-hover: #eeead1;
  --nav-indentation-guide-color: rgba(44, 79, 100, 0.4);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #273341;
  --nav-item-background-hover: #273341;
  --nav-item-background-selected: rgba(132, 220, 161, 0.15);
  --nav-item-color: #cfd1d1;
  --nav-item-color-active: #eeead1;
  --nav-item-color-highlighted: rgb(171, 232, 188);
  --nav-item-color-hover: #eeead1;
  --nav-item-color-selected: #eeead1;
  --nav-tag-color: #5dcbc3;
  --nav-tag-color-active: #cfd1d1;
  --nav-tag-color-hover: #cfd1d1;
  --ocean-blue: #2c4f64;
  --ocean-blue-rgb: 44, 79, 100;
  --pdf-background: #1d2833;
  --pdf-page-background: #1d2833;
  --pdf-shadow: 0 0 0 1px none;
  --pdf-sidebar-background: #1d2833;
  --pdf-thumbnail-shadow: 0 0 0 1px none;
  --percy-blue: #84dca1;
  --percy-blue-rgb: 133, 221, 162;
  --pill-border-color: none;
  --pill-border-color-hover: none;
  --pill-color: #cfd1d1;
  --pill-color-hover: #eeead1;
  --pill-color-remove: #5dcbc3;
  --pill-color-remove-hover: rgb(171, 232, 188);
  --prompt-background: #1d2833;
  --raised-background: color-mix(in srgb, #ffa161 65%, transparent) linear-gradient(#ffa161, color-mix(in srgb, #ffa161 65%, transparent));
  --ribbon-background: #2c3a4a;
  --ribbon-background-collapsed: #1d2833;
  --scrollbar-active-thumb-bg: #84dca1;
  --scrollbar-thumb-bg: #273341;
  --search-clear-button-color: #cfd1d1;
  --search-icon-color: #cfd1d1;
  --search-result-background: #1d2833;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #eeead1;
  --setting-items-background: #2c3a4a;
  --setting-items-border-color: none;
  --slider-thumb-border-color: none;
  --slider-track-background: #2c4f64;
  --soft-dark-blue: #2c3a4a;
  --soft-dark-blue-rbg: 44, 58, 74;
  --soft-white: #eeead1;
  --soft-yellow: #ffd580;
  --soft-yellow-rgb: 255, 213, 128;
  --status-bar-background: #1d2833;
  --status-bar-border-color: #2c3a4a;
  --status-bar-text-color: #cfd1d1;
  --suggestion-background: #1d2833;
  --sync-avatar-color-1: #ff695d;
  --sync-avatar-color-2: #ffa161;
  --sync-avatar-color-3: #f8c260;
  --sync-avatar-color-4: #b9e678;
  --sync-avatar-color-5: #5dcbc3;
  --sync-avatar-color-6: #2c4f64;
  --sync-avatar-color-7: #d689e3;
  --sync-avatar-color-8: #ffa161;
  --tab-background-active: #1d2833;
  --tab-container-background: #2c3a4a;
  --tab-curve: none;
  --tab-divider-color: none;
  --tab-outline-color: #2c3a4a;
  --tab-radius: 5px;
  --tab-radius-active: 5px;
  --tab-switcher-background: #1d2833;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d2833, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 220, 161);
  --tab-text-color: #74859a;
  --tab-text-color-active: #cfd1d1;
  --tab-text-color-focused: #cfd1d1;
  --tab-text-color-focused-active: #cfd1d1;
  --tab-text-color-focused-active-current: #eeead1;
  --tab-text-color-focused-highlighted: rgb(171, 232, 188);
  --table-add-button-border-color: none;
  --table-border-color: none;
  --table-drag-handle-background-active: #5dcbc3;
  --table-drag-handle-color: #5dcbc3;
  --table-drag-handle-color-active: #2c4f64;
  --table-header-border-color: none;
  --table-header-color: #eeead1;
  --table-selection: rgba(132, 220, 161, 0.1);
  --table-selection-border-color: #5dcbc3;
  --tag-background: #2c4f64;
  --tag-background-hover: #303f51;
  --tag-border-color: none;
  --tag-border-color-hover: hsla(rgb(44, 78, 99), 0.15);
  --tag-color: #b9e678;
  --tag-color-hover: #84dca1;
  --tag-radius: 15px;
  --tag-weight: 600;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(171, 232, 188);
  --text-accent-hover: rgb(210, 243, 219);
  --text-error: #ff695d;
  --text-faint: #5dcbc3;
  --text-highlight-bg: rgba(133, 221, 162, 0.5);
  --text-muted: #cfd1d1;
  --text-normal: #eeead1;
  --text-on-accent: #2c4f64;
  --text-on-accent-inverted: #2c4f64;
  --text-selection: #ff695d;
  --text-success: #b9e678;
  --text-warning: #ffa161;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #1d2833;
  --titlebar-background-focused: #2c3a4a;
  --titlebar-border-color: none;
  --titlebar-text-color: #cfd1d1;
  --titlebar-text-color-focused: #eeead1;
  --vault-profile-color: #eeead1;
  --vault-profile-color-hover: #eeead1;
  --washed-blue: #74859a;
  --washed-blue-rgb: 116, 133, 154;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 58, 74);
  color: rgb(238, 234, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 58, 74);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  color: rgb(238, 234, 209);
}

body div#quartz-root {
  background-color: rgb(29, 40, 51);
  color: rgb(238, 234, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(185, 230, 120);
  outline: rgb(185, 230, 120) none 0px;
  text-decoration: rgb(185, 230, 120);
  text-decoration-color: rgb(185, 230, 120);
}

body .page article p > em, em {
  color: rgb(248, 194, 96);
  font-weight: 700;
  outline: rgb(248, 194, 96) none 0px;
  text-decoration: rgb(248, 194, 96);
  text-decoration-color: rgb(248, 194, 96);
}

body .page article p > i, i {
  color: rgb(248, 194, 96);
  font-weight: 700;
  outline: rgb(248, 194, 96) none 0px;
  text-decoration: rgb(248, 194, 96);
  text-decoration-color: rgb(248, 194, 96);
}

body .page article p > strong, strong {
  color: rgb(185, 230, 120);
  outline: rgb(185, 230, 120) none 0px;
  text-decoration: rgb(185, 230, 120);
  text-decoration-color: rgb(185, 230, 120);
}

body .text-highlight {
  background-color: rgba(133, 221, 162, 0.5);
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body del {
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: line-through rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body p {
  color: rgb(207, 209, 209);
  outline: rgb(207, 209, 209) none 0px;
  text-decoration: rgb(207, 209, 209);
  text-decoration-color: rgb(207, 209, 209);
}`,
    links: `body a.external, footer a {
  color: rgb(93, 203, 195);
  outline: rgb(93, 203, 195) none 0px;
  text-decoration: underline rgb(93, 203, 195);
  text-decoration-color: rgb(93, 203, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 161, 97);
  outline: rgb(255, 161, 97) none 0px;
  text-decoration: underline rgb(255, 161, 97);
  text-decoration-color: rgb(255, 161, 97);
}

body a.internal.broken {
  color: rgb(207, 209, 209);
  outline: rgb(207, 209, 209) none 0px;
  text-decoration: underline rgb(207, 209, 209);
  text-decoration-color: rgb(207, 209, 209);
}`,
    lists: `body dd {
  color: rgb(238, 234, 209);
}

body dt {
  color: rgb(238, 234, 209);
}

body ol > li {
  color: rgb(238, 234, 209);
}

body ol.overflow {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body ul > li {
  color: rgb(238, 234, 209);
}

body ul.overflow {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 203, 195);
  text-decoration: rgb(93, 203, 195);
}

body blockquote {
  background-color: rgb(44, 58, 74);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body table {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(238, 234, 209);
  margin-left: 225.891px;
  margin-right: 225.891px;
  width: 210.219px;
}

body td {
  background-color: rgb(48, 63, 81);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
}

body th {
  background-color: rgb(255, 105, 93);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

body tr {
  border-bottom-color: rgb(29, 40, 51);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}`,
    code: `body code {
  border-bottom-color: rgb(196, 209, 209);
  border-left-color: rgb(196, 209, 209);
  border-right-color: rgb(196, 209, 209);
  border-top-color: rgb(196, 209, 209);
  color: rgb(196, 209, 209);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body pre > code > [data-line] {
  border-left-color: rgb(248, 194, 96);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(248, 194, 96);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(248, 194, 96);
  border-left-color: rgb(248, 194, 96);
  border-right-color: rgb(248, 194, 96);
  border-top-color: rgb(248, 194, 96);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body pre:has(> code) {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    images: `body audio {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body figcaption {
  color: rgb(238, 234, 209);
}

body figure {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body img {
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(238, 234, 209);
  border-radius: 10px;
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(238, 234, 209);
  border-radius: 10px;
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
}

body .footnotes {
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .transclude {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(93, 203, 195);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(93, 203, 195);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(116, 133, 154);
  text-decoration: rgb(116, 133, 154);
  text-decoration-color: rgb(116, 133, 154);
}

body input[type=checkbox] {
  border-bottom-color: rgba(255, 213, 128, 0.8);
  border-left-color: rgba(255, 213, 128, 0.8);
  border-right-color: rgba(255, 213, 128, 0.8);
  border-top-color: rgba(255, 213, 128, 0.8);
}

body li.task-list-item[data-task='!'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(238, 234, 209);
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(95, 203, 195);
  border-left-color: rgb(95, 203, 195);
  border-right-color: rgb(95, 203, 195);
  border-top-color: rgb(95, 203, 195);
}

body .callout[data-callout="abstract"] {
  --callout-color: 116, 133, 154;
  background-color: rgba(116, 133, 154, 0.1);
  border-bottom-color: rgba(116, 133, 154, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(116, 133, 154, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(116, 133, 154, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(116, 133, 154, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  --callout-color: 214, 137, 227;
  background-color: rgba(214, 137, 227, 0.1);
  border-bottom-color: rgba(214, 137, 227, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(214, 137, 227, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(214, 137, 227, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(214, 137, 227, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  --callout-color: 214, 137, 227;
  background-color: rgba(214, 137, 227, 0.1);
  border-bottom-color: rgba(214, 137, 227, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(214, 137, 227, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(214, 137, 227, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(214, 137, 227, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 255, 213, 128;
  background-color: rgba(255, 213, 128, 0.1);
  border-bottom-color: rgba(255, 213, 128, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 213, 128, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 213, 128, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 213, 128, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  --callout-color: 255, 213, 128;
  background-color: rgba(255, 213, 128, 0.1);
  border-bottom-color: rgba(255, 213, 128, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 213, 128, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 213, 128, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 213, 128, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  --callout-color: 185, 230, 120;
  background-color: rgba(185, 230, 120, 0.1);
  border-bottom-color: rgba(185, 230, 120, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(185, 230, 120, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(185, 230, 120, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(185, 230, 120, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  --callout-color: 255, 161, 97;
  background-color: rgba(255, 161, 97, 0.1);
  border-bottom-color: rgba(255, 161, 97, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 161, 97, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 161, 97, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 161, 97, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 95, 203, 195;
  background-color: rgba(95, 203, 195, 0.1);
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 105, 93;
  background-color: rgba(255, 105, 93, 0.1);
  border-bottom-color: rgba(255, 105, 93, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(255, 105, 93, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(255, 105, 93, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(255, 105, 93, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(48, 63, 81);
  border-bottom-color: rgb(238, 234, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(238, 234, 209);
  border-left-width: 0px;
  border-right-color: rgb(238, 234, 209);
  border-right-width: 0px;
  border-top-color: rgb(238, 234, 209);
  border-top-width: 0px;
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 40, 51);
}

body .search > .search-container > .search-space > * {
  color: rgb(238, 234, 209);
  outline: rgb(238, 234, 209) none 0px;
  text-decoration: rgb(238, 234, 209);
  text-decoration-color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(39, 51, 65);
  color: rgb(238, 234, 209);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 40, 51);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(39, 51, 65);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(39, 51, 65);
  color: rgb(238, 234, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(44, 79, 100);
  border-bottom-color: rgb(185, 230, 120);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgb(185, 230, 120);
  border-right-color: rgb(185, 230, 120);
  border-top-color: rgb(185, 230, 120);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-weight: 600;
}

body a.internal.tag-link::before {
  color: rgb(185, 230, 120);
}

body h1 {
  color: rgb(255, 105, 93);
}

body h2 {
  color: rgb(255, 161, 97);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 105, 93);
}

body h3 {
  color: rgb(248, 194, 96);
}

body h4 {
  color: rgb(185, 230, 120);
}

body h5 {
  color: rgb(132, 220, 161);
}

body h6 {
  color: rgb(93, 203, 195);
}

body hr {
  border-bottom-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  border-right-color: rgb(44, 58, 74);
}`,
    scrollbars: `body .callout {
  --callout-color: 95, 203, 195;
  border-bottom-color: rgba(95, 203, 195, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgba(95, 203, 195, 0.05);
  border-left-width: 2px;
  border-right-color: rgba(95, 203, 195, 0.05);
  border-right-width: 2px;
  border-top-color: rgba(95, 203, 195, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 40, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 40, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(39, 51, 65);
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}`,
    footer: `body footer {
  background-color: rgb(29, 40, 51);
  border-bottom-color: rgb(44, 58, 74);
  border-left-color: rgb(44, 58, 74);
  border-right-color: rgb(44, 58, 74);
  border-top-color: rgb(44, 58, 74);
  color: rgb(207, 209, 209);
}

body footer ul li a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(238, 234, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(207, 209, 209);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body li.section-li > .section .meta {
  color: rgb(207, 209, 209);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(207, 209, 209);
  text-decoration: rgb(207, 209, 209);
}

body ul.section-ul {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .darkmode svg {
  color: rgb(207, 209, 209);
  stroke: rgb(207, 209, 209);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .breadcrumb-element p {
  color: rgb(93, 203, 195);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
  color: rgb(238, 234, 209);
}

body .metadata {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .metadata-properties {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body .navigation-progress {
  background-color: rgb(29, 40, 51);
}

body .page-header h2.page-title {
  color: rgb(238, 234, 209);
}

body abbr {
  color: rgb(238, 234, 209);
  text-decoration: underline dotted rgb(238, 234, 209);
}

body details {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body input[type=text] {
  border-bottom-color: rgb(207, 209, 209);
  border-left-color: rgb(207, 209, 209);
  border-right-color: rgb(207, 209, 209);
  border-top-color: rgb(207, 209, 209);
  color: rgb(207, 209, 209);
}

body kbd {
  background-color: rgb(44, 58, 74);
  border-bottom-color: rgb(196, 209, 209);
  border-left-color: rgb(196, 209, 209);
  border-right-color: rgb(196, 209, 209);
  border-top-color: rgb(196, 209, 209);
  color: rgb(196, 209, 209);
}

body progress {
  border-bottom-color: rgb(238, 234, 209);
  border-left-color: rgb(238, 234, 209);
  border-right-color: rgb(238, 234, 209);
  border-top-color: rgb(238, 234, 209);
}

body sub {
  color: rgb(238, 234, 209);
}

body summary {
  color: rgb(238, 234, 209);
}

body sup {
  color: rgb(238, 234, 209);
}`,
  },
  light: {},
};
