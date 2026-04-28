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
  --dark: var(--text-normal, #dddfee);
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
  --darkgray: var(--text-normal, #dddfee);
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
  --gray: var(--text-muted, #b1b3c2);
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
  --light: var(--background-primary, #1a1b20);
  --light-background: #dbd1c6;
  --light-shadow-fifth: #FCFCFC;
  --light-shadow-first: #bab2a8;
  --light-shadow-fourth: #ccc3b8;
  --light-shadow-second: #fcf0e4;
  --light-shadow-third: #ede2d6;
  --light-titlebar-background: #fcf0e4;
  --light-titlebar-background-focused: #bab2a8;
  --lightgray: var(--background-secondary, #31333c);
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
  --shiki-active-tab-border-color: #b1b3c2;
  --shiki-code-background: #2a2b33;
  --shiki-code-comment: #585a6b;
  --shiki-code-function: #a3be8c;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #c3afb8;
  --shiki-code-normal: #b1b3c2;
  --shiki-code-property: #8fbcbb;
  --shiki-code-punctuation: #b1b3c2;
  --shiki-code-string: #ebcb8b;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #41424f;
  --shiki-gutter-text-color: #585a6b;
  --shiki-gutter-text-color-highlight: #b1b3c2;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #b1b3c2;
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #585a6b;
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 32);
  border-left-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(88, 90, 107);
}

html[saved-theme="dark"] body p {
  color: rgb(177, 179, 194);
  outline: rgb(177, 179, 194) none 0px;
  text-decoration-color: rgb(177, 179, 194);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(88, 90, 107);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
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
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(88, 90, 107);
  border-left-color: rgb(88, 90, 107);
  border-right-color: rgb(88, 90, 107);
  border-top-color: rgb(88, 90, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(88, 90, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 188, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(120, 82, 238, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-left-color: rgba(120, 82, 238, 0.25);
  border-right-color: rgba(120, 82, 238, 0.25);
  border-top-color: rgba(120, 82, 238, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(233, 49, 71, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(8, 185, 78, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-left-color: rgba(8, 185, 78, 0.25);
  border-right-color: rgba(8, 185, 78, 0.25);
  border-top-color: rgba(8, 185, 78, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 191, 188, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(236, 117, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(57, 59, 70);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 82, 98);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(80, 82, 98);
  border-right-color: rgb(80, 82, 98);
  border-top-color: rgb(80, 82, 98);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 51, 60);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(221, 223, 238);
  font-size: 32px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h3 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(177, 179, 194);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(221, 223, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(177, 179, 194);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 179, 194);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(177, 179, 194);
  stroke: rgb(177, 179, 194);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(88, 90, 107);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(221, 223, 238);
  border-radius: 10px;
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(49, 51, 60);
  border-color: rgb(221, 223, 238);
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(26, 27, 32);
  border-color: rgb(221, 223, 238);
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(221, 223, 238);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body abbr {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body sup {
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
  --dark: var(--text-normal, #252423);
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
  --darkgray: var(--text-normal, #252423);
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
  --gray: var(--text-muted, #54504d);
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
  --light: var(--background-primary, #dbd1c6);
  --light-background: #dbd1c6;
  --light-shadow-fifth: #FCFCFC;
  --light-shadow-first: #bab2a8;
  --light-shadow-fourth: #ccc3b8;
  --light-shadow-second: #fcf0e4;
  --light-shadow-third: #ede2d6;
  --light-titlebar-background: #fcf0e4;
  --light-titlebar-background-focused: #bab2a8;
  --lightgray: var(--background-secondary, #cbc2b8);
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
  --shiki-active-tab-border-color: #54504d;
  --shiki-code-background: #d1c7bd;
  --shiki-code-comment: #98928c;
  --shiki-code-function: #8aa176;
  --shiki-code-important: #d08770;
  --shiki-code-keyword: #b0748f;
  --shiki-code-normal: #54504d;
  --shiki-code-property: #70a9a8;
  --shiki-code-punctuation: #54504d;
  --shiki-code-string: #c4963a;
  --shiki-code-value: #b48ead;
  --shiki-gutter-border-color: #c1b8ae;
  --shiki-gutter-text-color: #98928c;
  --shiki-gutter-text-color-highlight: #54504d;
  --shiki-highlight-neutral: #54504d;
  --shiki-terminal-dots-color: #98928c;
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

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(219, 209, 198);
  border-left-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body del {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 146, 140);
}

html[saved-theme="light"] body p {
  color: rgb(84, 80, 77);
  outline: rgb(84, 80, 77) none 0px;
  text-decoration-color: rgb(84, 80, 77);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 146, 140);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body table {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body img {
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

html[saved-theme="light"] body video {
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
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 146, 140);
  border-left-color: rgb(152, 146, 140);
  border-right-color: rgb(152, 146, 140);
  border-top-color: rgb(152, 146, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 146, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 169, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 161, 193);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 161, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 161, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 161, 118);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 174, 165);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(182, 174, 165);
  border-right-color: rgb(182, 174, 165);
  border-top-color: rgb(182, 174, 165);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 194, 184);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h1 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(37, 36, 35);
  font-size: 32px;
}

html[saved-theme="light"] body h2 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h3 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h4 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h5 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h6 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(84, 80, 77);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(37, 36, 35);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}`,
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(84, 80, 77);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 80, 77);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(84, 80, 77);
  stroke: rgb(84, 80, 77);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 146, 140);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(37, 36, 35);
  border-radius: 10px;
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(219, 209, 198);
  border-color: rgb(37, 36, 35);
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(219, 209, 198);
  border-color: rgb(37, 36, 35);
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(37, 36, 35);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body abbr {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(37, 36, 35);
}`,
  },
};
