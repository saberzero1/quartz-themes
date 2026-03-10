import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nichneumor",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: light-dark(#dbd1c6, #1a1b20);
  --background-excalidraw: light-dark(#dbd1c6, #EFF0F6);
  --background-modifier-border: #41424f;
  --background-modifier-border-focus: #505262;
  --background-modifier-border-hover: #494a58;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #393b46;
  --background-modifier-form-field-hover: #393b46;
  --background-modifier-success: #a3be8c;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: #1a1b20;
  --background-primary-alt: #2a2b33;
  --background-secondary: #31333c;
  --background-secondary-alt: #41424f;
  --background-top: light-dark(#2a2b33, #222329);
  --bases-cards-background: #1a1b20;
  --bases-cards-cover-background: #2a2b33;
  --bases-cards-shadow: 0 0 0 1px #41424f;
  --bases-cards-shadow-hover: 0 0 0 1px #494a58;
  --bases-embed-border-color: #41424f;
  --bases-group-heading-property-color: #b1b3c2;
  --bases-table-border-color: #41424f;
  --bases-table-cell-background-active: #1a1b20;
  --bases-table-cell-background-disabled: #2a2b33;
  --bases-table-cell-shadow-active: 0 0 0 2px #505262;
  --bases-table-group-background: #2a2b33;
  --bases-table-header-background: #1a1b20;
  --bases-table-header-color: #b1b3c2;
  --bases-table-summary-background: #1a1b20;
  --blur-background: color-mix(in srgb, #41424f 65%, transparent) linear-gradient(#41424f, color-mix(in srgb, #41424f 65%, transparent));
  --border-radius: 10px;
  --border-radius-twice: 10px 10px 0px 0px;
  --box-shadow: 4px 4px 8px light-dark(#bab2a8, #0a0b0d), -4px -4px 8px light-dark(#fcf0e4, #2a2b33);
  --box-shadow-click: -4px -4px 8px light-dark(#bab2a8, #0a0b0d), 4px 4px 8px light-dark(#fcf0e4, #2a2b33);
  --box-shadow-click-excaldraw: -4px -4px 8px light-dark(#bab2a8, #FFFFFF), 4px 4px 8px light-dark(#fcf0e4, #D8DAE3);
  --box-shadow-excalidraw: 4px 4px 8px light-dark(#bab2a8, #FFFFFF), -4px -4px 8px light-dark(#fcf0e4, #D8DAE3);
  --button-box-shadow: 2px 2px 4px light-dark(#bab2a8, #0a0b0d), -2px -2px 4px light-dark(#fcf0e4, #2a2b33);
  --button-box-shadow-click: -2px -2px 4px light-dark(#bab2a8, #0a0b0d), 2px 2px 4px light-dark(#fcf0e4, #2a2b33);
  --button-box-shadow-click-excalidraw: -2px -2px 4px light-dark(#bab2a8, #FFFFFF), 2px 2px 4px light-dark(#fcf0e4, #D8DAE3);
  --button-box-shadow-excalidraw: 2px 2px 4px light-dark(#bab2a8, #FFFFFF), -2px -2px 4px light-dark(#fcf0e4, #D8DAE3);
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-question: 236, 117, 0;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #1a1b20;
  --canvas-card-label-color: #585a6b;
  --canvas-color-1: 233, 49, 71;
  --canvas-color-2: 236, 117, 0;
  --canvas-color-3: 224, 172, 0;
  --canvas-color-4: 8, 185, 78;
  --canvas-color-5: 0, 191, 188;
  --canvas-color-6: 120, 82, 238;
  --canvas-dot-pattern: #41424f;
  --caret-color: #dddfee;
  --checkbox-border-color: #585a6b;
  --checkbox-border-color-hover: #b1b3c2;
  --checkbox-marker-color: #1a1b20;
  --checklist-done-color: #b1b3c2;
  --code-background: #2a2b33;
  --code-border-color: #41424f;
  --code-comment: #585a6b;
  --code-function: #ebcb8b;
  --code-important: #d08770;
  --code-keyword: #c3afb8;
  --code-normal: #dddfee;
  --code-operator: #bf616a;
  --code-property: #8fbcbb;
  --code-punctuation: #b1b3c2;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #585a6b;
  --color-base-00: #1a1b20;
  --color-base-05: #222329;
  --color-base-10: #2a2b33;
  --color-base-100: #dddfee;
  --color-base-20: #31333c;
  --color-base-25: #393b46;
  --color-base-30: #41424f;
  --color-base-35: #494a58;
  --color-base-40: #505262;
  --color-base-50: #585a6b;
  --color-base-60: #848697;
  --color-base-70: #b1b3c2;
  --color-blue: #81a1c1;
  --color-blue-rgb: 8, 109, 221;
  --color-cyan: #8fbcbb;
  --color-cyan-rgb: 0, 191, 188;
  --color-green: #a3be8c;
  --color-green-rgb: 8, 185, 78;
  --color-orange: #d08770;
  --color-orange-rgb: 236, 117, 0;
  --color-pink: #c3afb8;
  --color-pink-rgb: 213, 57, 132;
  --color-purple: #b48ead;
  --color-purple-rgb: 120, 82, 238;
  --color-red: #bf616a;
  --color-red-rgb: 233, 49, 71;
  --color-yellow: #ebcb8b;
  --color-yellow-rgb: 224, 172, 0;
  --dark: var(--text-normal);
  --dark-background: #1a1b20;
  --dark-background-flip: #EFF0F6;
  --dark-shadow-first: #0a0b0d;
  --dark-shadow-first-flip: #FFFFFF;
  --dark-shadow-fourth: #6b6c7b;
  --dark-shadow-fourth-flip: #C0C1CC;
  --dark-shadow-second: #2a2b33;
  --dark-shadow-second-flip: #D8DAE3;
  --dark-shadow-third: #000000;
  --dark-shadow-third-flip: #F4F9F4;
  --dark-titlebar-background: #2a2b33;
  --dark-titlebar-background-focused: #0a0b0d;
  --darkgray: var(--text-normal);
  --divider-color: #41424f;
  --dropdown-background: #41424f;
  --dropdown-background-hover: #494a58;
  --embed-block-shadow-hover: 0 0 0 1px #41424f, inset 0 0 0 1px #41424f;
  --file-header-background: #1a1b20;
  --file-header-background-focused: #1a1b20;
  --flair-background: #41424f;
  --flair-color: #dddfee;
  --floating-background: light-dark(#dbd1c6, #1a1b20);
  --footnote-divider-color: #41424f;
  --footnote-id-color: #b1b3c2;
  --footnote-id-color-no-occurrences: #585a6b;
  --gap: 1.5rem;
  --graph-line: #494a58;
  --graph-node: #b1b3c2;
  --graph-node-attachment: #ebcb8b;
  --graph-node-tag: #a3be8c;
  --graph-node-unresolved: #585a6b;
  --graph-text: #dddfee;
  --gray: var(--text-muted);
  --h1-size: 2em;
  --h2-size: 1.7em;
  --h3-size: 1.5em;
  --h4-size: 1.3em;
  --h5-size: 1.2em;
  --h6-size: 1.1em;
  --header-padding: 5px;
  --heading-formatting: #585a6b;
  --hr-color: #41424f;
  --icon-color: #b1b3c2;
  --icon-color-focused: #dddfee;
  --icon-color-hover: #b1b3c2;
  --inline-title-size: 2em;
  --input-date-separator: #585a6b;
  --input-placeholder-color: #585a6b;
  --interactive-hover: #494a58;
  --interactive-normal: #41424f;
  --light: var(--background-primary);
  --light-background: #dbd1c6;
  --light-shadow-fifth: #FCFCFC;
  --light-shadow-first: #bab2a8;
  --light-shadow-fourth: #ccc3b8;
  --light-shadow-second: #fcf0e4;
  --light-shadow-third: #ede2d6;
  --light-titlebar-background: #fcf0e4;
  --light-titlebar-background-focused: #bab2a8;
  --lightgray: var(--background-secondary);
  --list-marker-color: #585a6b;
  --list-marker-color-hover: #b1b3c2;
  --menu-background: #31333c;
  --menu-border-color: #494a58;
  --metadata-border-color: #41424f;
  --metadata-divider-color: #41424f;
  --metadata-input-text-color: #dddfee;
  --metadata-label-text-color: #b1b3c2;
  --metadata-label-text-color-hover: #b1b3c2;
  --metadata-property-box-shadow-focus: 0 0 0 2px #505262;
  --metadata-property-box-shadow-hover: 0 0 0 1px #494a58;
  --modal-background: #1a1b20;
  --modal-border-color: #505262;
  --nav-collapse-icon-color: #585a6b;
  --nav-collapse-icon-color-collapsed: #585a6b;
  --nav-heading-color: #dddfee;
  --nav-heading-color-collapsed: #585a6b;
  --nav-heading-color-collapsed-hover: #b1b3c2;
  --nav-heading-color-hover: #dddfee;
  --nav-item-color: #b1b3c2;
  --nav-item-color-active: #dddfee;
  --nav-item-color-hover: #dddfee;
  --nav-item-color-selected: #dddfee;
  --nav-tag-color: #585a6b;
  --nav-tag-color-active: #b1b3c2;
  --nav-tag-color-hover: #b1b3c2;
  --pdf-background: #1a1b20;
  --pdf-page-background: #1a1b20;
  --pdf-shadow: 0 0 0 1px #41424f;
  --pdf-sidebar-background: #1a1b20;
  --pdf-thumbnail-shadow: 0 0 0 1px #41424f;
  --pill-border-color: #41424f;
  --pill-border-color-hover: #494a58;
  --pill-color: #b1b3c2;
  --pill-color-hover: #dddfee;
  --pill-color-remove: #585a6b;
  --printing-text-shadow: 1px 1px 2px light-dark(#bab2a8, #000000), -1px -1px 4px light-dark(#FCFCFC, #6b6c7b);
  --prompt-background: #1a1b20;
  --prompt-border-color: #505262;
  --raised-background: color-mix(in srgb, #41424f 65%, transparent) linear-gradient(#41424f, color-mix(in srgb, #41424f 65%, transparent));
  --ribbon-background: #31333c;
  --ribbon-background-collapsed: #1a1b20;
  --scroll-button-offset: 25px;
  --search-clear-button-color: #b1b3c2;
  --search-icon-color: #b1b3c2;
  --search-result-background: #1a1b20;
  --setting-group-heading-color: #dddfee;
  --setting-items-background: #2a2b33;
  --setting-items-border-color: #41424f;
  --shell-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#fcf0e4, #6b6c7b);
  --slider-thumb-border-color: #494a58;
  --slider-track-background: #41424f;
  --status-bar-background: #31333c;
  --status-bar-border-color: #41424f;
  --status-bar-text-color: #b1b3c2;
  --suggestion-background: #1a1b20;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #8fbcbb;
  --sync-avatar-color-6: #81a1c1;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #c3afb8;
  --tab-background-active: #1a1b20;
  --tab-container-background: #31333c;
  --tab-divider-color: #494a58;
  --tab-outline-color: #41424f;
  --tab-switcher-background: #31333c;
  --tab-switcher-menubar-background: linear-gradient(to top, #31333c, transparent);
  --tab-text-color: #585a6b;
  --tab-text-color-active: #b1b3c2;
  --tab-text-color-focused: #b1b3c2;
  --tab-text-color-focused-active: #b1b3c2;
  --tab-text-color-focused-active-current: #dddfee;
  --table-add-button-border-color: #41424f;
  --table-border-color: #41424f;
  --table-drag-handle-color: #585a6b;
  --table-header-border-color: #41424f;
  --table-header-color: #dddfee;
  --text-error: #bf616a;
  --text-faint: #585a6b;
  --text-muted: #b1b3c2;
  --text-normal: #dddfee;
  --text-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#FCFCFC, #6b6c7b);
  --text-success: #a3be8c;
  --text-warning: #d08770;
  --titlebar-background: #31333c;
  --titlebar-background-focused: #41424f;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #b1b3c2;
  --titlebar-text-color-focused: #dddfee;
  --vault-profile-color: #dddfee;
  --vault-profile-color-hover: #dddfee;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 66, 79);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 32);
  border-left-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

body div#quartz-root {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body .page article p > em, em {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body .page article p > i, i {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body .page article p > strong, strong {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body .text-highlight {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body del {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: line-through rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body p {
  color: rgb(177, 179, 194);
  outline: rgb(177, 179, 194) none 0px;
  text-decoration: rgb(177, 179, 194);
  text-decoration-color: rgb(177, 179, 194);
}`,
    lists: `body dd {
  color: rgb(221, 223, 238);
}

body dt {
  color: rgb(221, 223, 238);
}

body ol > li {
  color: rgb(221, 223, 238);
}

body ol.overflow {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body ul > li {
  color: rgb(221, 223, 238);
}

body ul.overflow {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(88, 90, 107);
  text-decoration: rgb(88, 90, 107);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body table {
  color: rgb(221, 223, 238);
}

body td {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

body th {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}`,
    code: `body code {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
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
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}

body pre:has(> code) {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}`,
    images: `body audio {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figcaption {
  color: rgb(221, 223, 238);
}

body figure {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body img {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-radius: 10px;
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-radius: 10px;
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
}

body .footnotes {
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body .transclude {
  border-bottom-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body .transclude-inner {
  border-bottom-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(177, 179, 194);
  text-decoration: line-through rgb(177, 179, 194);
  text-decoration-color: rgb(177, 179, 194);
}

body input[type=checkbox] {
  border-bottom-color: rgb(88, 90, 107);
  border-left-color: rgb(88, 90, 107);
  border-right-color: rgb(88, 90, 107);
  border-top-color: rgb(88, 90, 107);
}

body li.task-list-item[data-task='!'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(221, 223, 238);
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-left-color: rgba(120, 82, 238, 0.25);
  border-right-color: rgba(120, 82, 238, 0.25);
  border-top-color: rgba(120, 82, 238, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-left-color: rgba(8, 185, 78, 0.25);
  border-right-color: rgba(8, 185, 78, 0.25);
  border-top-color: rgba(8, 185, 78, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(57, 59, 70);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(80, 82, 98);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(80, 82, 98);
  border-right-color: rgb(80, 82, 98);
  border-top-color: rgb(80, 82, 98);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 82, 98);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(80, 82, 98);
  border-right-color: rgb(80, 82, 98);
  border-top-color: rgb(80, 82, 98);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 51, 60);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

body h1 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body h2 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body h2.page-title, h2.page-title a {
  color: rgb(221, 223, 238);
}

body h3 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body h4 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body h5 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body h6 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

body hr {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
}`,
    scrollbars: `body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}`,
    footer: `body footer {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(65, 66, 79);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-right-width: 1px;
  border-top-color: rgb(65, 66, 79);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(177, 179, 194);
}

body footer ul li a {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(221, 223, 238);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 179, 194);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body li.section-li > .section .meta {
  color: rgb(177, 179, 194);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
  text-decoration: rgb(177, 179, 194);
}

body ul.section-ul {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

body .darkmode svg {
  color: rgb(177, 179, 194);
  stroke: rgb(177, 179, 194);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

body .breadcrumb-element p {
  color: rgb(88, 90, 107);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body .metadata {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(177, 179, 194);
}

body .metadata-properties {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

body .navigation-progress {
  background-color: rgb(26, 27, 32);
}

body .page-header h2.page-title {
  color: rgb(221, 223, 238);
}

body abbr {
  color: rgb(221, 223, 238);
  text-decoration: underline dotted rgb(221, 223, 238);
}

body details {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body input[type=text] {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

body kbd {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

body progress {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

body sub {
  color: rgb(221, 223, 238);
}

body summary {
  color: rgb(221, 223, 238);
}

body sup {
  color: rgb(221, 223, 238);
}`,
  },
  light: {
    base: `:root:root {
  --background: light-dark(#dbd1c6, #1a1b20);
  --background-excalidraw: light-dark(#dbd1c6, #EFF0F6);
  --background-modifier-border: #c1b8ae;
  --background-modifier-border-focus: #b6aea5;
  --background-modifier-border-hover: #bcb3aa;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-form-field: #dbd1c6;
  --background-modifier-form-field-hover: #dbd1c6;
  --background-modifier-success: #8aa176;
  --background-primary: #dbd1c6;
  --background-primary-alt: #d1c7bd;
  --background-secondary: #cbc2b8;
  --background-secondary-alt: #d6ccc1;
  --background-top: light-dark(#d1c7bd, #d6ccc1);
  --bases-cards-background: #dbd1c6;
  --bases-cards-cover-background: #d1c7bd;
  --bases-cards-shadow: 0 0 0 1px #c1b8ae;
  --bases-cards-shadow-hover: 0 0 0 1px #bcb3aa;
  --bases-embed-border-color: #c1b8ae;
  --bases-group-heading-property-color: #54504d;
  --bases-table-border-color: #c1b8ae;
  --bases-table-cell-background-active: #dbd1c6;
  --bases-table-cell-background-disabled: #d1c7bd;
  --bases-table-cell-shadow-active: 0 0 0 2px #b6aea5;
  --bases-table-group-background: #d1c7bd;
  --bases-table-header-background: #dbd1c6;
  --bases-table-header-color: #54504d;
  --bases-table-summary-background: #dbd1c6;
  --blur-background: color-mix(in srgb, #dbd1c6 65%, transparent) linear-gradient(#dbd1c6, color-mix(in srgb, #dbd1c6 65%, transparent));
  --border-radius: 10px;
  --border-radius-twice: 10px 10px 0px 0px;
  --box-shadow: 4px 4px 8px light-dark(#bab2a8, #0a0b0d), -4px -4px 8px light-dark(#fcf0e4, #2a2b33);
  --box-shadow-click: -4px -4px 8px light-dark(#bab2a8, #0a0b0d), 4px 4px 8px light-dark(#fcf0e4, #2a2b33);
  --box-shadow-click-excaldraw: -4px -4px 8px light-dark(#bab2a8, #FFFFFF), 4px 4px 8px light-dark(#fcf0e4, #D8DAE3);
  --box-shadow-excalidraw: 4px 4px 8px light-dark(#bab2a8, #FFFFFF), -4px -4px 8px light-dark(#fcf0e4, #D8DAE3);
  --button-box-shadow: 2px 2px 4px light-dark(#bab2a8, #0a0b0d), -2px -2px 4px light-dark(#fcf0e4, #2a2b33);
  --button-box-shadow-click: -2px -2px 4px light-dark(#bab2a8, #0a0b0d), 2px 2px 4px light-dark(#fcf0e4, #2a2b33);
  --button-box-shadow-click-excalidraw: -2px -2px 4px light-dark(#bab2a8, #FFFFFF), 2px 2px 4px light-dark(#fcf0e4, #D8DAE3);
  --button-box-shadow-excalidraw: 2px 2px 4px light-dark(#bab2a8, #FFFFFF), -2px -2px 4px light-dark(#fcf0e4, #D8DAE3);
  --canvas-background: #dbd1c6;
  --canvas-card-label-color: #98928c;
  --canvas-dot-pattern: #c1b8ae;
  --caret-color: #252423;
  --checkbox-border-color: #98928c;
  --checkbox-border-color-hover: #54504d;
  --checkbox-marker-color: #dbd1c6;
  --checklist-done-color: #54504d;
  --code-background: #d1c7bd;
  --code-border-color: #c1b8ae;
  --code-comment: #98928c;
  --code-function: #c4963a;
  --code-important: #d08770;
  --code-keyword: #b0748f;
  --code-normal: #252423;
  --code-operator: #bf616a;
  --code-property: #70a9a8;
  --code-punctuation: #54504d;
  --code-string: #8aa176;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --collapse-icon-color: #98928c;
  --color-base-00: #dbd1c6;
  --color-base-05: #d6ccc1;
  --color-base-10: #d1c7bd;
  --color-base-100: #252423;
  --color-base-20: #cbc2b8;
  --color-base-25: #c6bdb3;
  --color-base-30: #c1b8ae;
  --color-base-35: #bcb3aa;
  --color-base-40: #b6aea5;
  --color-base-50: #98928c;
  --color-base-60: #64615b;
  --color-base-70: #54504d;
  --color-blue: #81a1c1;
  --color-cyan: #70a9a8;
  --color-green: #8aa176;
  --color-orange: #d08770;
  --color-pink: #b0748f;
  --color-purple: #b48ead;
  --color-red: #bf616a;
  --color-yellow: #c4963a;
  --dark: var(--text-normal);
  --dark-background: #1a1b20;
  --dark-background-flip: #EFF0F6;
  --dark-shadow-first: #0a0b0d;
  --dark-shadow-first-flip: #FFFFFF;
  --dark-shadow-fourth: #6b6c7b;
  --dark-shadow-fourth-flip: #C0C1CC;
  --dark-shadow-second: #2a2b33;
  --dark-shadow-second-flip: #D8DAE3;
  --dark-shadow-third: #000000;
  --dark-shadow-third-flip: #F4F9F4;
  --dark-titlebar-background: #2a2b33;
  --dark-titlebar-background-focused: #0a0b0d;
  --darkgray: var(--text-normal);
  --divider-color: #c1b8ae;
  --dropdown-background: #dbd1c6;
  --dropdown-background-hover: #d1c7bd;
  --embed-block-shadow-hover: 0 0 0 1px #c1b8ae, inset 0 0 0 1px #c1b8ae;
  --file-header-background: #dbd1c6;
  --file-header-background-focused: #dbd1c6;
  --flair-background: #dbd1c6;
  --flair-color: #252423;
  --floating-background: light-dark(#dbd1c6, #1a1b20);
  --footnote-divider-color: #c1b8ae;
  --footnote-id-color: #54504d;
  --footnote-id-color-no-occurrences: #98928c;
  --gap: 1.5rem;
  --graph-line: #bcb3aa;
  --graph-node: #54504d;
  --graph-node-attachment: #c4963a;
  --graph-node-tag: #8aa176;
  --graph-node-unresolved: #98928c;
  --graph-text: #252423;
  --gray: var(--text-muted);
  --h1-size: 2em;
  --h2-size: 1.7em;
  --h3-size: 1.5em;
  --h4-size: 1.3em;
  --h5-size: 1.2em;
  --h6-size: 1.1em;
  --header-padding: 5px;
  --heading-formatting: #98928c;
  --hr-color: #c1b8ae;
  --icon-color: #54504d;
  --icon-color-focused: #252423;
  --icon-color-hover: #54504d;
  --inline-title-size: 2em;
  --input-date-separator: #98928c;
  --input-placeholder-color: #98928c;
  --interactive-hover: #d1c7bd;
  --interactive-normal: #dbd1c6;
  --light: var(--background-primary);
  --light-background: #dbd1c6;
  --light-shadow-fifth: #FCFCFC;
  --light-shadow-first: #bab2a8;
  --light-shadow-fourth: #ccc3b8;
  --light-shadow-second: #fcf0e4;
  --light-shadow-third: #ede2d6;
  --light-titlebar-background: #fcf0e4;
  --light-titlebar-background-focused: #bab2a8;
  --lightgray: var(--background-secondary);
  --list-marker-color: #98928c;
  --list-marker-color-hover: #54504d;
  --menu-background: #cbc2b8;
  --menu-border-color: #bcb3aa;
  --metadata-border-color: #c1b8ae;
  --metadata-divider-color: #c1b8ae;
  --metadata-input-text-color: #252423;
  --metadata-label-text-color: #54504d;
  --metadata-label-text-color-hover: #54504d;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b6aea5;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bcb3aa;
  --modal-background: #dbd1c6;
  --modal-border-color: #b6aea5;
  --nav-collapse-icon-color: #98928c;
  --nav-collapse-icon-color-collapsed: #98928c;
  --nav-heading-color: #252423;
  --nav-heading-color-collapsed: #98928c;
  --nav-heading-color-collapsed-hover: #54504d;
  --nav-heading-color-hover: #252423;
  --nav-item-color: #54504d;
  --nav-item-color-active: #252423;
  --nav-item-color-hover: #252423;
  --nav-item-color-selected: #252423;
  --nav-tag-color: #98928c;
  --nav-tag-color-active: #54504d;
  --nav-tag-color-hover: #54504d;
  --pdf-background: #dbd1c6;
  --pdf-page-background: #dbd1c6;
  --pdf-sidebar-background: #dbd1c6;
  --pill-border-color: #c1b8ae;
  --pill-border-color-hover: #bcb3aa;
  --pill-color: #54504d;
  --pill-color-hover: #252423;
  --pill-color-remove: #98928c;
  --printing-text-shadow: 1px 1px 2px light-dark(#bab2a8, #000000), -1px -1px 4px light-dark(#FCFCFC, #6b6c7b);
  --prompt-background: #dbd1c6;
  --prompt-border-color: #b6aea5;
  --raised-background: color-mix(in srgb, #dbd1c6 65%, transparent) linear-gradient(#dbd1c6, color-mix(in srgb, #dbd1c6 65%, transparent));
  --ribbon-background: #cbc2b8;
  --ribbon-background-collapsed: #dbd1c6;
  --scroll-button-offset: 25px;
  --search-clear-button-color: #54504d;
  --search-icon-color: #54504d;
  --search-result-background: #dbd1c6;
  --setting-group-heading-color: #252423;
  --setting-items-background: #d1c7bd;
  --setting-items-border-color: #c1b8ae;
  --shell-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#fcf0e4, #6b6c7b);
  --slider-thumb-border-color: #bcb3aa;
  --slider-track-background: #c1b8ae;
  --status-bar-background: #cbc2b8;
  --status-bar-border-color: #c1b8ae;
  --status-bar-text-color: #54504d;
  --suggestion-background: #dbd1c6;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #c4963a;
  --sync-avatar-color-4: #8aa176;
  --sync-avatar-color-5: #70a9a8;
  --sync-avatar-color-6: #81a1c1;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: #b0748f;
  --tab-background-active: #dbd1c6;
  --tab-container-background: #cbc2b8;
  --tab-divider-color: #bcb3aa;
  --tab-outline-color: #c1b8ae;
  --tab-switcher-background: #cbc2b8;
  --tab-switcher-menubar-background: linear-gradient(to top, #cbc2b8, transparent);
  --tab-text-color: #98928c;
  --tab-text-color-active: #54504d;
  --tab-text-color-focused: #54504d;
  --tab-text-color-focused-active: #54504d;
  --tab-text-color-focused-active-current: #252423;
  --table-add-button-border-color: #c1b8ae;
  --table-border-color: #c1b8ae;
  --table-drag-handle-color: #98928c;
  --table-header-border-color: #c1b8ae;
  --table-header-color: #252423;
  --text-error: #bf616a;
  --text-faint: #98928c;
  --text-muted: #54504d;
  --text-normal: #252423;
  --text-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#FCFCFC, #6b6c7b);
  --text-success: #8aa176;
  --text-warning: #d08770;
  --titlebar-background: #cbc2b8;
  --titlebar-background-focused: #d6ccc1;
  --titlebar-border-color: transparent;
  --titlebar-text-color: #54504d;
  --titlebar-text-color-focused: #252423;
  --vault-profile-color: #252423;
  --vault-profile-color-hover: #252423;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(193, 184, 174);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(219, 209, 198);
  border-left-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

body div#quartz-root {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}`,
    typography: `body .page article p > b, b {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body .page article p > em, em {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body .page article p > i, i {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body .page article p > strong, strong {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body .text-highlight {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body del {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: line-through rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body p {
  color: rgb(84, 80, 77);
  outline: rgb(84, 80, 77) none 0px;
  text-decoration: rgb(84, 80, 77);
  text-decoration-color: rgb(84, 80, 77);
}`,
    lists: `body dd {
  color: rgb(37, 36, 35);
}

body dt {
  color: rgb(37, 36, 35);
}

body ol > li {
  color: rgb(37, 36, 35);
}

body ol.overflow {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body ul > li {
  color: rgb(37, 36, 35);
}

body ul.overflow {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(152, 146, 140);
  text-decoration: rgb(152, 146, 140);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body table {
  color: rgb(37, 36, 35);
}

body td {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

body th {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}`,
    code: `body code {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

body pre > code > [data-line] {
  border-left-color: rgb(196, 150, 58);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(196, 150, 58);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(196, 150, 58);
  border-left-color: rgb(196, 150, 58);
  border-right-color: rgb(196, 150, 58);
  border-top-color: rgb(196, 150, 58);
}

body pre > code, pre:has(> code) {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}

body pre:has(> code) {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}`,
    images: `body audio {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body figcaption {
  color: rgb(37, 36, 35);
}

body figure {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body img {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-radius: 10px;
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body video {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-radius: 10px;
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
}

body .footnotes {
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body .transclude {
  border-bottom-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body .transclude-inner {
  border-bottom-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(84, 80, 77);
  text-decoration: line-through rgb(84, 80, 77);
  text-decoration-color: rgb(84, 80, 77);
}

body input[type=checkbox] {
  border-bottom-color: rgb(152, 146, 140);
  border-left-color: rgb(152, 146, 140);
  border-right-color: rgb(152, 146, 140);
  border-top-color: rgb(152, 146, 140);
}

body li.task-list-item[data-task='!'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='*'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='-'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='/'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='>'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='?'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='I'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='S'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='b'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='c'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='d'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='f'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='i'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='k'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='l'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='p'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='u'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body li.task-list-item[data-task='w'] {
  color: rgb(37, 36, 35);
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}`,
    search: `body .search > .search-button {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(182, 174, 165);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(182, 174, 165);
  border-right-color: rgb(182, 174, 165);
  border-top-color: rgb(182, 174, 165);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 174, 165);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(182, 174, 165);
  border-right-color: rgb(182, 174, 165);
  border-top-color: rgb(182, 174, 165);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 194, 184);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

body h1 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body h2 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body h2.page-title, h2.page-title a {
  color: rgb(37, 36, 35);
}

body h3 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body h4 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body h5 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body h6 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

body hr {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

body ::-webkit-scrollbar-corner {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

body ::-webkit-scrollbar-track {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}`,
    footer: `body footer {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(193, 184, 174);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-right-width: 1px;
  border-top-color: rgb(193, 184, 174);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(84, 80, 77);
}

body footer ul li a {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(37, 36, 35);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 80, 77);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body li.section-li > .section .meta {
  color: rgb(84, 80, 77);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
  text-decoration: rgb(84, 80, 77);
}

body ul.section-ul {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

body .darkmode svg {
  color: rgb(84, 80, 77);
  stroke: rgb(84, 80, 77);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

body .breadcrumb-element p {
  color: rgb(152, 146, 140);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body .metadata {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(84, 80, 77);
}

body .metadata-properties {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

body .navigation-progress {
  background-color: rgb(219, 209, 198);
}

body .page-header h2.page-title {
  color: rgb(37, 36, 35);
}

body abbr {
  color: rgb(37, 36, 35);
  text-decoration: underline dotted rgb(37, 36, 35);
}

body details {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body input[type=text] {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

body kbd {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

body progress {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

body sub {
  color: rgb(37, 36, 35);
}

body summary {
  color: rgb(37, 36, 35);
}

body sup {
  color: rgb(37, 36, 35);
}`,
  },
};
