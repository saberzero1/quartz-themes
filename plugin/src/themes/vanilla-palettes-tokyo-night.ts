import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.tokyo-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(261, 85%, 79%);
  --accent-color-dark: #9d7cd8;
  --accent-color-hover: #bb9af7;
  --accent-color-light: #7aa2f7;
  --accent-h: 261;
  --accent-l: 79%;
  --accent-s: 85%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #3b4261;
  --background-modifier-border-focus: #3b4261;
  --background-modifier-border-hover: #3b4261;
  --background-modifier-error: #f7768e;
  --background-modifier-error-hover: #f7768e;
  --background-modifier-form-field: #16161e;
  --background-modifier-form-field-hover: #16161e;
  --background-modifier-hover: #363a4a;
  --background-modifier-success: #9ece6a;
  --background-primary: #1a1b26;
  --background-secondary: #16161e;
  --bases-cards-background: #1a1b26;
  --bases-cards-shadow: 0 0 0 1px #3b4261;
  --bases-cards-shadow-hover: 0 0 0 1px #3b4261;
  --bases-embed-border-color: #3b4261;
  --bases-group-heading-property-color: #c0caf5;
  --bases-table-border-color: #3b4261;
  --bases-table-cell-background-active: #1a1b26;
  --bases-table-cell-background-selected: #363a4a;
  --bases-table-cell-shadow-active: 0 0 0 2px #3b4261;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(261, 85%, 79%);
  --bases-table-header-background: #1a1b26;
  --bases-table-header-background-hover: #363a4a;
  --bases-table-header-color: #c0caf5;
  --bases-table-summary-background: #1a1b26;
  --bases-table-summary-background-hover: #363a4a;
  --bg: #1a1b26;
  --bg-dark: #16161e;
  --bg-highlight: #363a4a;
  --blockquote-border-color: #9d7cd8;
  --blue: #7aa2f7;
  --blue0: #3d59a1;
  --blue1: #2ac3de;
  --blue2: #0db9d7;
  --blue5: #89ddff;
  --blue6: #b4f9f8;
  --blue7: #394b70;
  --blur-background: color-mix(in srgb, #16161e 65%, transparent) linear-gradient(#16161e, color-mix(in srgb, #16161e 65%, transparent));
  --bold-color: #7aa2f7;
  --border-color: #3b4261;
  --border-color-primary: #3b4261;
  --border-color-secondary: #3b4261;
  --canvas-background: #1a1b26;
  --canvas-card-label-color: #a9b1d6;
  --canvas-color: 187, 154, 247;
  --caret-color: #c0caf5;
  --checkbox-border-color: #a9b1d6;
  --checkbox-border-color-hover: #bb9af7;
  --checkbox-color: #9d7cd8;
  --checkbox-color-hover: #bb9af7;
  --checkbox-marker-color: #1a1b26;
  --checklist-done-color: #a9b1d6;
  --code-background: #16161e;
  --code-boolean: #ff9e64;
  --code-border-color: #3b4261;
  --code-bracket-background: #363a4a;
  --code-builtin: #7dcfff;
  --code-comment: #565f89;
  --code-definition: #7aa2f7;
  --code-function: #e0af68;
  --code-important: #e0af68;
  --code-keyword: #9d7cd8;
  --code-normal: #c0caf5;
  --code-operator: #7dcfff;
  --code-parentheses: #a9b1d6;
  --code-property: #7aa2f7;
  --code-punctuation: #c0caf5;
  --code-string: #9ece6a;
  --code-tag: #f7768e;
  --code-value: #ff9e64;
  --code-variable: #c0caf5;
  --collapse-icon-color: #a9b1d6;
  --collapse-icon-color-collapsed: hsl(261, 85%, 79%);
  --color-accent: hsl(261, 85%, 79%);
  --color-accent-1: hsl(258, 86.7%, 90.85%);
  --color-accent-2: hsl(256, 89.25%, 101.91%);
  --color-accent-hsl: 261, 85%, 79%;
  --color-blue: #7aa2f7;
  --color-cyan: #7dcfff;
  --color-green: #9ece6a;
  --color-orange: #ff9e64;
  --color-pink: pink;
  --color-purple: #9d7cd8;
  --color-red: #f7768e;
  --color-yellow: #e0af68;
  --comment: #565f89;
  --cyan: #7dcfff;
  --dark: var(--text-normal, #c0caf5);
  --dark3: #545c7e;
  --dark5: #737aa2;
  --darkgray: var(--text-normal, #c0caf5);
  --divider-color: #3b4261;
  --divider-color-hover: hsl(261, 85%, 79%);
  --dropdown-background: #16161e;
  --dropdown-background-hover: #3b4261;
  --embed-block-shadow-hover: 0 0 0 1px #3b4261, inset 0 0 0 1px #3b4261;
  --embed-border-start: 2px solid hsl(261, 85%, 79%);
  --fg: #c0caf5;
  --fg-dark: #a9b1d6;
  --fg-gutter: #3b4261;
  --file-header-background: #1a1b26;
  --file-header-background-focused: #1a1b26;
  --flair-background: #16161e;
  --flair-color: #c0caf5;
  --footnote-divider-color: #3b4261;
  --footnote-id-color: #c0caf5;
  --footnote-id-color-no-occurrences: #a9b1d6;
  --footnote-input-background-active: #363a4a;
  --graph-line: #3b4261;
  --graph-node: hsl(261, 85%, 79%);
  --graph-node-attachment: #9d7cd8;
  --graph-node-focused: #bb9af7;
  --graph-node-tag: #7aa2f7;
  --graph-node-unresolved: #3b4261;
  --graph-text: #c0caf5;
  --gray: var(--text-muted, #c0caf5);
  --green: #9ece6a;
  --green1: #73daca;
  --green2: #41a6b5;
  --h1-color: #9d7cd8;
  --h2-color: #7aa2f7;
  --h3-color: #9ece6a;
  --h4-color: #e0af68;
  --h5-color: #ff9e64;
  --h6-color: #f7768e;
  --heading-formatting: #a9b1d6;
  --highlight: var(--text-highlight-bg, hsl(261, 85%, 79%));
  --hr-color: #3b4261;
  --icon-color: #c0caf5;
  --icon-color-active: hsl(261, 85%, 79%);
  --icon-color-focused: #c0caf5;
  --icon-color-hover: #c0caf5;
  --indentation-guide-color: #3b4261;
  --indentation-guide-color-active: #a9b1d6;
  --inline-title-color: #c0caf5;
  --input-date-separator: #a9b1d6;
  --input-placeholder-color: #a9b1d6;
  --interactive-accent: hsl(261, 85%, 79%);
  --interactive-accent-hover: hsl(258, 86.7%, 90.85%);
  --interactive-accent-hsl: 261, 85%, 79%;
  --interactive-hover: #3b4261;
  --interactive-normal: #16161e;
  --italic-color: #7aa2f7;
  --light: var(--background-primary, #1a1b26);
  --lightgray: var(--background-secondary, #16161e);
  --link-color: #9d7cd8;
  --link-color-hover: #bb9af7;
  --link-external-color: #9d7cd8;
  --link-external-color-hover: #bb9af7;
  --link-unresolved-color: #f7768e;
  --link-unresolved-color-hover: #f7768e;
  --link-unresolved-decoration-color: hsla(261, 85%, 79%, 0.3);
  --list-marker-color: #9d7cd8;
  --list-marker-color-collapsed: hsl(261, 85%, 79%);
  --list-marker-color-hover: #c0caf5;
  --magenta: #bb9af7;
  --magenta2: #ff007c;
  --menu-background: #16161e;
  --menu-border-color: #3b4261;
  --metadata-border-color: #3b4261;
  --metadata-divider-color: #3b4261;
  --metadata-input-background-active: #363a4a;
  --metadata-input-text-color: #c0caf5;
  --metadata-label-background-active: #363a4a;
  --metadata-label-text-color: #c0caf5;
  --metadata-label-text-color-hover: #c0caf5;
  --metadata-property-background-active: #363a4a;
  --metadata-property-box-shadow-focus: 0 0 0 2px #3b4261;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3b4261;
  --modal-background: #16161e;
  --modal-border-color: #3b4261;
  --nav-collapse-icon-color: #3b4261;
  --nav-collapse-icon-color-collapsed: #3b4261;
  --nav-heading-color: #c0caf5;
  --nav-heading-color-collapsed: #a9b1d6;
  --nav-heading-color-collapsed-hover: #c0caf5;
  --nav-heading-color-hover: #c0caf5;
  --nav-indentation-guide-color: #3b4261;
  --nav-item-background-active: #9d7cd8;
  --nav-item-background-hover: #363a4a;
  --nav-item-background-selected: red;
  --nav-item-color: #c0caf5;
  --nav-item-color-active: white;
  --nav-item-color-highlighted: #7aa2f7;
  --nav-item-color-hover: white;
  --nav-item-color-selected: red;
  --nav-tag-color: #a9b1d6;
  --nav-tag-color-active: #c0caf5;
  --nav-tag-color-hover: #c0caf5;
  --orange: #ff9e64;
  --pdf-background: #1a1b26;
  --pdf-page-background: #1a1b26;
  --pdf-shadow: 0 0 0 1px #3b4261;
  --pdf-sidebar-background: #1a1b26;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b4261;
  --pill-border-color: #3b4261;
  --pill-border-color-hover: #3b4261;
  --pill-color: #c0caf5;
  --pill-color-hover: #c0caf5;
  --pill-color-remove: #a9b1d6;
  --pill-color-remove-hover: hsl(261, 85%, 79%);
  --prompt-background: #1a1b26;
  --prompt-border-color: #3b4261;
  --purple: #9d7cd8;
  --raised-background: color-mix(in srgb, #16161e 65%, transparent) linear-gradient(#16161e, color-mix(in srgb, #16161e 65%, transparent));
  --red: #f7768e;
  --red1: #db4b4b;
  --ribbon-background: #16161e;
  --ribbon-background-collapsed: #1a1b26;
  --search-clear-button-color: #c0caf5;
  --search-icon-color: #c0caf5;
  --search-result-background: #1a1b26;
  --secondary: var(--text-accent, hsl(261, 85%, 79%));
  --selection-background-color: #363a4a;
  --selection-border-color: #bb9af7;
  --setting-group-heading-color: #c0caf5;
  --setting-items-border-color: #3b4261;
  --shiki-active-tab-border-color: #c0caf5;
  --shiki-code-background: #16161e;
  --shiki-code-comment: #a9b1d6;
  --shiki-code-function: #9ece6a;
  --shiki-code-important: #ff9e64;
  --shiki-code-keyword: pink;
  --shiki-code-normal: #c0caf5;
  --shiki-code-property: #7dcfff;
  --shiki-code-punctuation: #c0caf5;
  --shiki-code-string: #e0af68;
  --shiki-code-value: #9d7cd8;
  --shiki-gutter-border-color: #3b4261;
  --shiki-gutter-text-color: #a9b1d6;
  --shiki-gutter-text-color-highlight: #c0caf5;
  --shiki-highlight-neutral: #c0caf5;
  --shiki-terminal-dots-color: #a9b1d6;
  --slider-track-background: #16161e;
  --status-bar-background: #16161e;
  --status-bar-border-color: #3b4261;
  --status-bar-text-color: #c0caf5;
  --suggestion-background: #1a1b26;
  --sync-avatar-color-1: #f7768e;
  --sync-avatar-color-2: #ff9e64;
  --sync-avatar-color-3: #e0af68;
  --sync-avatar-color-4: #9ece6a;
  --sync-avatar-color-5: #7dcfff;
  --sync-avatar-color-6: #7aa2f7;
  --sync-avatar-color-7: #9d7cd8;
  --sync-avatar-color-8: pink;
  --tab-background-active: #1a1b26;
  --tab-container-background: #16161e;
  --tab-divider-color: #363a4a;
  --tab-outline-color: #3b4261;
  --tab-switcher-background: #16161e;
  --tab-switcher-menubar-background: linear-gradient(to top, #16161e, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(261, 85%, 79%);
  --tab-text-color: #3b4261;
  --tab-text-color-active: #c0caf5;
  --tab-text-color-focused: #c0caf5;
  --tab-text-color-focused-active: #c0caf5;
  --tab-text-color-focused-active-current: white;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #3b4261;
  --table-border-color: #3b4261;
  --table-drag-handle-background-active: #bb9af7;
  --table-drag-handle-color: #363a4a;
  --table-drag-handle-color-active: #363a4a;
  --table-header-border-color: #3b4261;
  --table-header-color: #c0caf5;
  --table-selection: #363a4a;
  --table-selection-border-color: #bb9af7;
  --tag-background: #3b4261;
  --tag-background-hover: #a9b1d6;
  --tag-border-color: hsla(261, 85%, 79%, 0.15);
  --tag-border-color-hover: hsla(261, 85%, 79%, 0.15);
  --tag-color: #9d7cd8;
  --tag-color-hover: #9d7cd8;
  --teal: #1abc9c;
  --terminal-black: #414868;
  --tertiary: var(--text-accent-hover, red);
  --text-accent: hsl(261, 85%, 79%);
  --text-accent-hover: red;
  --text-color: #c0caf5;
  --text-color-accent: white;
  --text-color-muted-dark: #3b4261;
  --text-color-muted-light: #a9b1d6;
  --text-error: #f7768e;
  --text-faint: #a9b1d6;
  --text-highlight-bg: hsl(261, 85%, 79%);
  --text-muted: #c0caf5;
  --text-normal: #c0caf5;
  --text-on-accent-inverted: #1a1b26;
  --text-selection: #363a4a;
  --text-success: #9ece6a;
  --text-warning: #e0af68;
  --textHighlight: var(--text-highlight-bg, hsl(261, 85%, 79%));
  --titlebar-background: #16161e;
  --titlebar-background-focused: #3b4261;
  --titlebar-border-color: #3b4261;
  --titlebar-text-color: #c0caf5;
  --titlebar-text-color-focused: #c0caf5;
  --vault-profile-color: #c0caf5;
  --vault-profile-color-hover: #c0caf5;
  --yellow: #e0af68;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(188, 156, 247);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(157, 124, 216);
  border-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(157, 124, 216);
  outline: rgb(157, 124, 216) none 0px;
  text-decoration-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(157, 124, 216);
  outline: rgb(157, 124, 216) none 0px;
  text-decoration-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(247, 118, 142);
  outline: rgb(247, 118, 142) none 0px;
  text-decoration: underline rgba(188, 156, 247, 0.3);
  text-decoration-color: rgba(188, 156, 247, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(169, 177, 214);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(157, 124, 216);
  border-left-color: rgb(157, 124, 216);
  border-right-color: rgb(157, 124, 216);
  border-top-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(188, 156, 247);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 27, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(192, 202, 245);
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
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 58, 74);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(54, 58, 74);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 58, 74);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 66, 97);
  border-bottom-color: rgba(188, 156, 247, 0.15);
  border-left-color: rgba(188, 156, 247, 0.15);
  border-right-color: rgba(188, 156, 247, 0.15);
  border-top-color: rgba(188, 156, 247, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body h1 {
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h2 {
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body h6 {
  color: rgb(247, 118, 142);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(192, 202, 245);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(192, 202, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(192, 202, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 202, 245);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(192, 202, 245);
  stroke: rgb(192, 202, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(169, 177, 214);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 22, 30);
  border-color: rgb(192, 202, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(59, 66, 97);
  border-left-color: rgb(59, 66, 97);
  border-right-color: rgb(59, 66, 97);
  border-top-color: rgb(59, 66, 97);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(59, 66, 97);
  color: rgb(157, 124, 216);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(22, 22, 30);
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(59, 66, 97);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(192, 202, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body abbr {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(59, 66, 97);
  border-bottom-color: rgba(188, 156, 247, 0.15);
  border-left-color: rgba(188, 156, 247, 0.15);
  border-right-color: rgba(188, 156, 247, 0.15);
  border-top-color: rgba(188, 156, 247, 0.15);
  color: rgb(157, 124, 216);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(265, 47%, 51%);
  --accent-color-dark: #7847bd;
  --accent-color-hover: #b28af6;
  --accent-color-light: #77a0f7;
  --accent-h: 265;
  --accent-l: 51%;
  --accent-s: 47%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #a8aecb;
  --background-modifier-border-focus: #a8aecb;
  --background-modifier-border-hover: #a8aecb;
  --background-modifier-error: #f77e94;
  --background-modifier-error-hover: #f77e94;
  --background-modifier-form-field: #cbccd1;
  --background-modifier-form-field-hover: #cbccd1;
  --background-modifier-hover: #b5b9c9;
  --background-modifier-success: #799f50;
  --background-primary: #d5d6db;
  --background-secondary: #cbccd1;
  --bases-cards-background: #d5d6db;
  --bases-cards-shadow: 0 0 0 1px #a8aecb;
  --bases-cards-shadow-hover: 0 0 0 1px #a8aecb;
  --bases-embed-border-color: #a8aecb;
  --bases-group-heading-property-color: #4c505e;
  --bases-table-border-color: #a8aecb;
  --bases-table-cell-background-active: #d5d6db;
  --bases-table-cell-background-selected: #b5b9c9;
  --bases-table-cell-shadow-active: 0 0 0 2px #a8aecb;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(265, 47%, 51%);
  --bases-table-header-background: #d5d6db;
  --bases-table-header-background-hover: #b5b9c9;
  --bases-table-header-color: #4c505e;
  --bases-table-summary-background: #d5d6db;
  --bases-table-summary-background-hover: #b5b9c9;
  --bg: #d5d6db;
  --bg-dark: #cbccd1;
  --bg-highlight: #b5b9c9;
  --blockquote-border-color: #7847bd;
  --blue: #77a0f7;
  --blue0: #7890dd;
  --blue1: #23a8c0;
  --blue2: #0baeca;
  --blue5: #0098bb;
  --blue6: #4c8988;
  --blue7: #92a6d5;
  --blur-background: color-mix(in srgb, #d5d6db 65%, transparent) linear-gradient(#d5d6db, color-mix(in srgb, #d5d6db 65%, transparent));
  --bold-color: #77a0f7;
  --border-color: #a8aecb;
  --border-color-primary: #a8aecb;
  --border-color-secondary: #a8aecb;
  --canvas-background: #d5d6db;
  --canvas-card-label-color: #8d98c9;
  --canvas-color: 120, 71, 189;
  --caret-color: #4c505e;
  --checkbox-border-color: #8d98c9;
  --checkbox-border-color-hover: #b28af6;
  --checkbox-color: #7847bd;
  --checkbox-color-hover: #b28af6;
  --checkbox-marker-color: #d5d6db;
  --checklist-done-color: #8d98c9;
  --code-background: #cbccd1;
  --code-boolean: #e97c00;
  --code-border-color: #a8aecb;
  --code-bracket-background: #b5b9c9;
  --code-builtin: #009cd0;
  --code-comment: #848cb5;
  --code-definition: #77a0f7;
  --code-function: #ba9155;
  --code-important: #ba9155;
  --code-keyword: #7847bd;
  --code-normal: #4c505e;
  --code-operator: #009cd0;
  --code-parentheses: #8d98c9;
  --code-property: #77a0f7;
  --code-punctuation: #4c505e;
  --code-string: #799f50;
  --code-tag: #f77e94;
  --code-value: #e97c00;
  --code-variable: #4c505e;
  --collapse-icon-color: #8d98c9;
  --collapse-icon-color-collapsed: hsl(265, 47%, 51%);
  --color-accent: hsl(265, 47%, 51%);
  --color-accent-1: hsl(264, 47.47%, 54.825%);
  --color-accent-2: hsl(262, 47.94%, 58.65%);
  --color-accent-hsl: 265, 47%, 51%;
  --color-blue: #77a0f7;
  --color-cyan: #009cd0;
  --color-green: #799f50;
  --color-orange: #e97c00;
  --color-pink: pink;
  --color-purple: #7847bd;
  --color-red: #f77e94;
  --color-yellow: #ba9155;
  --comment: #848cb5;
  --cyan: #009cd0;
  --dark: var(--text-normal, #4c505e);
  --dark3: #8990b3;
  --dark5: #68709a;
  --darkgray: var(--text-normal, #4c505e);
  --divider-color: #a8aecb;
  --divider-color-hover: hsl(265, 47%, 51%);
  --dropdown-background: #cbccd1;
  --dropdown-background-hover: #a8aecb;
  --embed-block-shadow-hover: 0 0 0 1px #a8aecb, inset 0 0 0 1px #a8aecb;
  --embed-border-start: 2px solid hsl(265, 47%, 51%);
  --fg: #4c505e;
  --fg-dark: #8d98c9;
  --fg-gutter: #a8aecb;
  --file-header-background: #d5d6db;
  --file-header-background-focused: #d5d6db;
  --flair-background: #cbccd1;
  --flair-color: #4c505e;
  --footnote-divider-color: #a8aecb;
  --footnote-id-color: #4c505e;
  --footnote-id-color-no-occurrences: #8d98c9;
  --footnote-input-background-active: #b5b9c9;
  --graph-line: #a8aecb;
  --graph-node: hsl(265, 47%, 51%);
  --graph-node-attachment: #7847bd;
  --graph-node-focused: #b28af6;
  --graph-node-tag: #77a0f7;
  --graph-node-unresolved: #a8aecb;
  --graph-text: #4c505e;
  --gray: var(--text-muted, #4c505e);
  --green: #799f50;
  --green1: #519c91;
  --green2: #48b5c6;
  --h1-color: #7847bd;
  --h2-color: #77a0f7;
  --h3-color: #799f50;
  --h4-color: #ba9155;
  --h5-color: #e97c00;
  --h6-color: #f77e94;
  --heading-formatting: #8d98c9;
  --highlight: var(--text-highlight-bg, hsl(265, 47%, 51%));
  --hr-color: #a8aecb;
  --icon-color: #4c505e;
  --icon-color-active: hsl(265, 47%, 51%);
  --icon-color-focused: #4c505e;
  --icon-color-hover: #4c505e;
  --indentation-guide-color: #a8aecb;
  --indentation-guide-color-active: #8d98c9;
  --inline-title-color: #4c505e;
  --input-date-separator: #8d98c9;
  --input-placeholder-color: #8d98c9;
  --interactive-accent: hsl(265, 47%, 51%);
  --interactive-accent-hover: hsl(262, 47.94%, 58.65%);
  --interactive-accent-hsl: 265, 47%, 51%;
  --interactive-hover: #a8aecb;
  --interactive-normal: #cbccd1;
  --italic-color: #77a0f7;
  --light: var(--background-primary, #d5d6db);
  --lightgray: var(--background-secondary, #cbccd1);
  --link-color: #7847bd;
  --link-color-hover: #b28af6;
  --link-external-color: #7847bd;
  --link-external-color-hover: #b28af6;
  --link-unresolved-color: #f77e94;
  --link-unresolved-color-hover: #f77e94;
  --link-unresolved-decoration-color: hsla(265, 47%, 51%, 0.3);
  --list-marker-color: #7847bd;
  --list-marker-color-collapsed: hsl(265, 47%, 51%);
  --list-marker-color-hover: #4c505e;
  --magenta: #b28af6;
  --magenta2: #d20065;
  --menu-background: #cbccd1;
  --menu-border-color: #a8aecb;
  --metadata-border-color: #a8aecb;
  --metadata-divider-color: #a8aecb;
  --metadata-input-background-active: #b5b9c9;
  --metadata-input-text-color: #4c505e;
  --metadata-label-background-active: #b5b9c9;
  --metadata-label-text-color: #4c505e;
  --metadata-label-text-color-hover: #4c505e;
  --metadata-property-background-active: #b5b9c9;
  --metadata-property-box-shadow-focus: 0 0 0 2px #a8aecb;
  --metadata-property-box-shadow-hover: 0 0 0 1px #a8aecb;
  --modal-background: #cbccd1;
  --modal-border-color: #a8aecb;
  --nav-collapse-icon-color: #a8aecb;
  --nav-collapse-icon-color-collapsed: #a8aecb;
  --nav-heading-color: #4c505e;
  --nav-heading-color-collapsed: #8d98c9;
  --nav-heading-color-collapsed-hover: #4c505e;
  --nav-heading-color-hover: #4c505e;
  --nav-indentation-guide-color: #a8aecb;
  --nav-item-background-active: #7847bd;
  --nav-item-background-hover: #b5b9c9;
  --nav-item-background-selected: red;
  --nav-item-color: #4c505e;
  --nav-item-color-active: white;
  --nav-item-color-highlighted: #77a0f7;
  --nav-item-color-hover: white;
  --nav-item-color-selected: red;
  --nav-tag-color: #8d98c9;
  --nav-tag-color-active: #4c505e;
  --nav-tag-color-hover: #4c505e;
  --orange: #e97c00;
  --pdf-background: #d5d6db;
  --pdf-page-background: #d5d6db;
  --pdf-sidebar-background: #d5d6db;
  --pill-border-color: #a8aecb;
  --pill-border-color-hover: #a8aecb;
  --pill-color: #4c505e;
  --pill-color-hover: #4c505e;
  --pill-color-remove: #8d98c9;
  --pill-color-remove-hover: hsl(265, 47%, 51%);
  --prompt-background: #d5d6db;
  --prompt-border-color: #a8aecb;
  --purple: #7847bd;
  --raised-background: color-mix(in srgb, #d5d6db 65%, transparent) linear-gradient(#d5d6db, color-mix(in srgb, #d5d6db 65%, transparent));
  --red: #f77e94;
  --red1: #c64343;
  --ribbon-background: #cbccd1;
  --ribbon-background-collapsed: #d5d6db;
  --search-clear-button-color: #4c505e;
  --search-icon-color: #4c505e;
  --search-result-background: #d5d6db;
  --secondary: var(--text-accent, hsl(265, 47%, 51%));
  --selection-background-color: #b5b9c9;
  --selection-border-color: #b28af6;
  --setting-group-heading-color: #4c505e;
  --setting-items-border-color: #a8aecb;
  --shiki-active-tab-border-color: #4c505e;
  --shiki-code-background: #cbccd1;
  --shiki-code-comment: #8d98c9;
  --shiki-code-function: #799f50;
  --shiki-code-important: #e97c00;
  --shiki-code-keyword: pink;
  --shiki-code-normal: #4c505e;
  --shiki-code-property: #009cd0;
  --shiki-code-punctuation: #4c505e;
  --shiki-code-string: #ba9155;
  --shiki-code-value: #7847bd;
  --shiki-gutter-border-color: #a8aecb;
  --shiki-gutter-text-color: #8d98c9;
  --shiki-gutter-text-color-highlight: #4c505e;
  --shiki-highlight-neutral: #4c505e;
  --shiki-terminal-dots-color: #8d98c9;
  --slider-track-background: #cbccd1;
  --status-bar-background: #cbccd1;
  --status-bar-border-color: #a8aecb;
  --status-bar-text-color: #4c505e;
  --suggestion-background: #d5d6db;
  --sync-avatar-color-1: #f77e94;
  --sync-avatar-color-2: #e97c00;
  --sync-avatar-color-3: #ba9155;
  --sync-avatar-color-4: #799f50;
  --sync-avatar-color-5: #009cd0;
  --sync-avatar-color-6: #77a0f7;
  --sync-avatar-color-7: #7847bd;
  --sync-avatar-color-8: pink;
  --tab-background-active: #d5d6db;
  --tab-container-background: #cbccd1;
  --tab-divider-color: #b5b9c9;
  --tab-outline-color: #a8aecb;
  --tab-switcher-background: #cbccd1;
  --tab-switcher-menubar-background: linear-gradient(to top, #cbccd1, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(265, 47%, 51%);
  --tab-text-color: #a8aecb;
  --tab-text-color-active: #4c505e;
  --tab-text-color-focused: #4c505e;
  --tab-text-color-focused-active: #4c505e;
  --tab-text-color-focused-active-current: #4c505e;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #a8aecb;
  --table-border-color: #a8aecb;
  --table-drag-handle-background-active: #b28af6;
  --table-drag-handle-color: #b5b9c9;
  --table-drag-handle-color-active: #b5b9c9;
  --table-header-border-color: #a8aecb;
  --table-header-color: #4c505e;
  --table-selection: #b5b9c9;
  --table-selection-border-color: #b28af6;
  --tag-background: #a8aecb;
  --tag-background-hover: #8d98c9;
  --tag-border-color: hsla(265, 47%, 51%, 0.15);
  --tag-border-color-hover: hsla(265, 47%, 51%, 0.15);
  --tag-color: #7847bd;
  --tag-color-hover: #7847bd;
  --teal: #18b495;
  --terminal-black: #a1a6c5;
  --tertiary: var(--text-accent-hover, red);
  --text-accent: hsl(265, 47%, 51%);
  --text-accent-hover: red;
  --text-color: #4c505e;
  --text-color-accent: white;
  --text-color-muted-dark: #a8aecb;
  --text-color-muted-light: #8d98c9;
  --text-error: #f77e94;
  --text-faint: #8d98c9;
  --text-highlight-bg: hsl(265, 47%, 51%);
  --text-muted: #4c505e;
  --text-normal: #4c505e;
  --text-on-accent-inverted: #d5d6db;
  --text-selection: #b5b9c9;
  --text-success: #799f50;
  --text-warning: #ba9155;
  --textHighlight: var(--text-highlight-bg, hsl(265, 47%, 51%));
  --titlebar-background: #cbccd1;
  --titlebar-background-focused: #a8aecb;
  --titlebar-border-color: #a8aecb;
  --titlebar-text-color: #4c505e;
  --titlebar-text-color-focused: #4c505e;
  --vault-profile-color: #4c505e;
  --vault-profile-color-hover: #4c505e;
  --yellow: #ba9155;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(203, 204, 209);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(213, 214, 219);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(203, 204, 209);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(203, 204, 209);
  border-left-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(119, 160, 247);
  outline: rgb(119, 160, 247) none 0px;
  text-decoration-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(120, 71, 189);
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body del {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(120, 71, 189);
  border-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body p {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(120, 71, 189);
  outline: rgb(120, 71, 189) none 0px;
  text-decoration-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(120, 71, 189);
  outline: rgb(120, 71, 189) none 0px;
  text-decoration-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(247, 126, 148);
  outline: rgb(247, 126, 148) none 0px;
  text-decoration: underline rgba(120, 71, 189, 0.3);
  text-decoration-color: rgba(120, 71, 189, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(141, 152, 201);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body table {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(120, 71, 189);
  border-left-color: rgb(120, 71, 189);
  border-right-color: rgb(120, 71, 189);
  border-top-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(120, 71, 189);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(141, 152, 201);
  border-left-color: rgb(141, 152, 201);
  border-right-color: rgb(141, 152, 201);
  border-top-color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(141, 152, 201);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 80, 94);
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 214, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 124, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 156, 208);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 126, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 126, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 126, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 126, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(119, 160, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 145, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 71, 189);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(247, 126, 148);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 159, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 159, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 159, 80);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(76, 80, 94);
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
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 80, 94);
  outline: rgb(76, 80, 94) none 0px;
  text-decoration-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(181, 185, 201);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 204, 209);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(181, 185, 201);
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(181, 185, 201);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 174, 203);
  border-bottom-color: rgba(120, 71, 189, 0.15);
  border-left-color: rgba(120, 71, 189, 0.15);
  border-right-color: rgba(120, 71, 189, 0.15);
  border-top-color: rgba(120, 71, 189, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body h1 {
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body h2 {
  color: rgb(119, 160, 247);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body h3 {
  color: rgb(121, 159, 80);
}

html[saved-theme="light"] body h4 {
  color: rgb(186, 145, 85);
}

html[saved-theme="light"] body h5 {
  color: rgb(233, 124, 0);
}

html[saved-theme="light"] body h6 {
  color: rgb(247, 126, 148);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(76, 80, 94);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 80, 94);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(76, 80, 94);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 80, 94);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(76, 80, 94);
  stroke: rgb(76, 80, 94);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(141, 152, 201);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(213, 214, 219);
  border-color: rgb(76, 80, 94);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(168, 174, 203);
  border-left-color: rgb(168, 174, 203);
  border-right-color: rgb(168, 174, 203);
  border-top-color: rgb(168, 174, 203);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(168, 174, 203);
  color: rgb(120, 71, 189);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(213, 214, 219);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(203, 204, 209);
  border-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(168, 174, 203);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(76, 80, 94);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(203, 204, 209);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 80, 94);
  border-left-color: rgb(76, 80, 94);
  border-right-color: rgb(76, 80, 94);
  border-top-color: rgb(76, 80, 94);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 80, 94);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(168, 174, 203);
  border-bottom-color: rgba(120, 71, 189, 0.15);
  border-left-color: rgba(120, 71, 189, 0.15);
  border-right-color: rgba(120, 71, 189, 0.15);
  border-top-color: rgba(120, 71, 189, 0.15);
  color: rgb(120, 71, 189);
}`,
  },
};
