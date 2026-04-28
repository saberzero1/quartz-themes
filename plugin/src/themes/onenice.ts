import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "onenice",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 75;
  --accent-l: 48%;
  --accent-s: 26%;
  --aqua: #48b0bd;
  --background-accent: #000;
  --background-modifier-active-hover: hsla(75, 26%, 48%, 0.1);
  --background-modifier-border: #7a818e;
  --background-modifier-border-focus: #e5556197;
  --background-modifier-border-hover: #e5556197;
  --background-modifier-box-shadow: #0000004d;
  --background-modifier-cover: #00000099;
  --background-modifier-error: #e55561;
  --background-modifier-error-hover: #e55561;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #0000004d;
  --background-modifier-form-field-highlighted: #00000038;
  --background-modifier-form-field-hover: #0000004d;
  --background-modifier-hover: hsla(75, -9%, 48%, 0.06);
  --background-modifier-message: #a0a1a7;
  --background-modifier-success: #8ebd6b;
  --background-primary: #1f2329;
  --background-primary-alt: #181b20;
  --background-secondary: #181b20;
  --background-secondary-alt: #181b20;
  --bases-cards-background: #1f2329;
  --bases-cards-cover-background: #181b20;
  --bases-cards-shadow: 0 0 0 1px #7a818e;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197;
  --bases-embed-border-color: #7a818e;
  --bases-group-heading-property-color: #a9abac;
  --bases-table-border-color: #7a818e;
  --bases-table-cell-background-active: #1f2329;
  --bases-table-cell-background-disabled: #181b20;
  --bases-table-cell-background-selected: hsla(75, 26%, 48%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(75, 26%, 48%);
  --bases-table-group-background: #181b20;
  --bases-table-header-background: #1f2329;
  --bases-table-header-background-hover: hsla(75, -9%, 48%, 0.06);
  --bases-table-header-color: #a9abac;
  --bases-table-summary-background: #1f2329;
  --bases-table-summary-background-hover: hsla(75, -9%, 48%, 0.06);
  --blockquote-border-color: hsl(75, 26%, 48%);
  --blue: #4fa6ed;
  --blur-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent));
  --canvas-background: #1f2329;
  --canvas-card-label-color: #535965;
  --caret-color: #dcddde;
  --checkbox-border-color: #535965;
  --checkbox-border-color-hover: #a9abac;
  --checkbox-color: #8ebd6b;
  --checkbox-color-hover: #bf68d9;
  --checkbox-marker-color: #1f2329;
  --checklist-done-color: #a9abac;
  --code-background: #181b20;
  --code-border-color: #7a818e;
  --code-bracket-background: hsla(75, -9%, 48%, 0.06);
  --code-comment: #535965;
  --code-normal: #dcddde;
  --code-punctuation: #a9abac;
  --collapse-icon-color: #535965;
  --collapse-icon-color-collapsed: #61afef;
  --color-accent: hsl(75, 26%, 48%);
  --color-accent-1: hsl(72, 26.52%, 55.2%);
  --color-accent-2: hsl(70, 27.3%, 61.92%);
  --color-accent-hsl: 75, 26%, 48%;
  --dark: var(--text-normal, #dcddde);
  --darkgray: var(--text-normal, #dcddde);
  --divider-color: transparent;
  --divider-color-hover: #4fa6ed;
  --drag-ghost-background: #181b20;
  --dropdown-background: #1f2329;
  --dropdown-background-hover: #e5556197;
  --embed-block-shadow-hover: 0 0 0 1px #7a818e, inset 0 0 0 1px #7a818e;
  --embed-border-start: 2px solid hsl(75, 26%, 48%);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #1f2329;
  --file-header-background-focused: #1f2329;
  --flair-background: #1f2329;
  --flair-color: #dcddde;
  --footnote-divider-color: #7a818e;
  --footnote-id-color: #a9abac;
  --footnote-id-color-no-occurrences: #535965;
  --footnote-input-background-active: hsla(75, -9%, 48%, 0.06);
  --graph-node: #a9abac;
  --graph-node-focused: #61afef;
  --graph-node-unresolved: #535965;
  --graph-text: #dcddde;
  --gray: var(--text-muted, #a9abac);
  --gray-1: #7a818e;
  --gray-2: #7a818e;
  --green: #8ebd6b;
  --heading-formatting: #535965;
  --highlight: var(--text-highlight-bg, #8a9a5b);
  --hr-color: #7a818e;
  --icon-color: #a9abac;
  --icon-color-active: #61afef;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #a9abac;
  --inline-title-weight: 600;
  --input-date-separator: #535965;
  --input-placeholder-color: #535965;
  --interactive-accent: hsl(75, 26%, 48%);
  --interactive-accent-hover: hsl(75, 31%, 38%);
  --interactive-accent-hsl: 75, 26%, 48%;
  --interactive-hover: #e5556197;
  --interactive-normal: #1f2329;
  --light: var(--background-primary, #1f2329);
  --lightgray: var(--background-secondary, #181b20);
  --link-color: #61afef;
  --link-color-hover: #e55561;
  --link-decoration: none;
  --link-external-color: #61afef;
  --link-external-color-hover: #e55561;
  --link-external-decoration: none;
  --link-unresolved-color: #61afef;
  --link-unresolved-decoration-color: hsla(75, 26%, 48%, 0.3);
  --list-marker-color: #535965;
  --list-marker-color-collapsed: #61afef;
  --list-marker-color-hover: #a9abac;
  --menu-background: #181b20;
  --menu-border-color: #e5556197;
  --metadata-border-color: #7a818e;
  --metadata-divider-color: #7a818e;
  --metadata-input-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-input-text-color: #dcddde;
  --metadata-label-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-label-text-color: #a9abac;
  --metadata-label-text-color-hover: #a9abac;
  --metadata-property-background-active: hsla(75, -9%, 48%, 0.06);
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197;
  --modal-background: #1f2329;
  --modal-border-color: #8ebd6b;
  --nav-collapse-icon-color: #535965;
  --nav-collapse-icon-color-collapsed: #535965;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #535965;
  --nav-heading-color-collapsed-hover: #a9abac;
  --nav-heading-color-hover: #dcddde;
  --nav-item-background-active: #4fa6ed;
  --nav-item-background-hover: hsla(75, -9%, 48%, 0.06);
  --nav-item-background-selected: hsla(75, 26%, 48%, 0.15);
  --nav-item-color: #a9abac;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #61afef;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #535965;
  --nav-tag-color-active: #a9abac;
  --nav-tag-color-hover: #a9abac;
  --orange: #cc9057;
  --panel-border-color: #535965;
  --pdf-background: #1f2329;
  --pdf-page-background: #1f2329;
  --pdf-shadow: 0 0 0 1px #7a818e;
  --pdf-sidebar-background: #1f2329;
  --pdf-thumbnail-shadow: 0 0 0 1px #7a818e;
  --pill-border-color: #7a818e;
  --pill-border-color-hover: #e5556197;
  --pill-color: #a9abac;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #535965;
  --pill-color-remove-hover: #61afef;
  --prompt-background: #1f2329;
  --prompt-border-color: #8ebd6b;
  --purple: #bf68d9;
  --raised-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent));
  --red: #e55561;
  --ribbon-background: #181b20;
  --ribbon-background-collapsed: #1f2329;
  --scrollbar-active-thumb-bg: #4fa6ed;
  --scrollbar-bg: #ffffff0d;
  --scrollbar-thumb-bg: #20242f;
  --search-clear-button-color: #a9abac;
  --search-icon-color: #a9abac;
  --search-result-background: #1f2329;
  --secondary: var(--text-accent, #61afef);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #181b20;
  --setting-items-border-color: #7a818e;
  --shiki-active-tab-border-color: #a9abac;
  --shiki-code-background: #181b20;
  --shiki-code-comment: #535965;
  --shiki-code-normal: #a9abac;
  --shiki-code-punctuation: #a9abac;
  --shiki-gutter-border-color: #7a818e;
  --shiki-gutter-text-color: #535965;
  --shiki-gutter-text-color-highlight: #a9abac;
  --shiki-highlight-neutral: #a9abac;
  --shiki-terminal-dots-color: #535965;
  --shiki-tooltip-background: #a0a1a7;
  --slider-thumb-border-color: #e5556197;
  --slider-track-background: #7a818e;
  --status-bar-background: #181b20;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #a9abac;
  --suggestion-background: #1f2329;
  --tab-background-active: #1f2329;
  --tab-container-background: #181b20;
  --tab-divider-color: #e5556197;
  --tab-outline-color: transparent;
  --tab-switcher-background: #181b20;
  --tab-switcher-menubar-background: linear-gradient(to top, #181b20, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(75, 26%, 48%);
  --tab-text-color: #535965;
  --tab-text-color-active: #a9abac;
  --tab-text-color-focused: #a9abac;
  --tab-text-color-focused-active: #a9abac;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #61afef;
  --table-add-button-border-color: #7a818e;
  --table-border-color: #7a818e;
  --table-drag-handle-background-active: hsl(75, 26%, 48%);
  --table-drag-handle-color: #535965;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #7a818e;
  --table-header-color: #dcddde;
  --table-selection: hsla(75, 26%, 48%, 0.1);
  --table-selection-border-color: hsl(75, 26%, 48%);
  --tag-background: #181b20;
  --tag-background-hover: #8ebd6b;
  --tag-border-color: hsla(75, 26%, 48%, 0.15);
  --tag-border-color-hover: hsla(75, 26%, 48%, 0.15);
  --tag-color: #bf68d9;
  --tag-color-hover: #bf68d9;
  --tag-padding-x: 5px;
  --tag-padding-y: 5px;
  --tag-radius: 40px;
  --tertiary: var(--text-accent-hover, #e55561);
  --text-accent: #61afef;
  --text-accent-hover: #e55561;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: #535965;
  --text-highlight-bg: #8a9a5b;
  --text-muted: #a9abac;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: #ffffff1a;
  --text-title-h1: #e55561;
  --text-title-h2: #8ebd6b;
  --text-title-h3: #cc9057;
  --text-title-h4: #48b0bd;
  --text-title-h5: #bf68d9;
  --text-title-h6: #7a818e;
  --textHighlight: var(--text-highlight-bg, #8a9a5b);
  --titlebar-background: #181b20;
  --titlebar-background-focused: #181b20;
  --titlebar-border-color: #7a818e;
  --titlebar-text-color: #a9abac;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --yellow: #e5c07b;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 27, 32);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  text-decoration: underline rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(83, 89, 101);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(142, 189, 107);
  border-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body p {
  color: rgb(169, 171, 172);
  outline: rgb(169, 171, 172) none 0px;
  text-decoration-color: rgb(169, 171, 172);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(83, 89, 101);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(24, 27, 32);
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
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(138, 154, 91);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 89, 101);
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-top-color: rgb(83, 89, 101);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
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
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(220, 221, 222);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 27, 32);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(122, 122, 122, 0.06);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body h1 {
  color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  font-weight: 600;
}

html[saved-theme="dark"] body h2 {
  color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 144, 87);
}

html[saved-theme="dark"] body h4 {
  color: rgb(72, 176, 189);
}

html[saved-theme="dark"] body h5 {
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body h6 {
  color: rgb(122, 129, 142);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(169, 171, 172);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(83, 89, 101);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-right-width: 1px;
  border-top-color: rgb(83, 89, 101);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(169, 171, 172);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 171, 172);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(169, 171, 172);
  stroke: rgb(169, 171, 172);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(83, 89, 101);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 27, 32);
  border-color: rgb(220, 221, 222);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(122, 129, 142);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(24, 27, 32);
  border-radius: 40px;
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(24, 27, 32);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(24, 27, 32);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(220, 221, 222);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 27, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  color: rgb(191, 104, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 75;
  --accent-l: 48%;
  --accent-s: 26%;
  --aqua: #0184bc;
  --background-accent: #fff;
  --background-modifier-active-hover: hsla(75, 26%, 48%, 0.1);
  --background-modifier-border: #a0a1a7;
  --background-modifier-border-focus: #e5556197;
  --background-modifier-border-hover: #e5556197;
  --background-modifier-box-shadow: #0000001a;
  --background-modifier-cover: #000000cc;
  --background-modifier-error: #e45649;
  --background-modifier-error-hover: #e45649;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #a0a1a7;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #a0a1a7;
  --background-modifier-message: #a0a1a7;
  --background-modifier-success: #50a14f;
  --background-primary: #e6e6e6;
  --background-primary-alt: #e1e1e1;
  --background-secondary: #dcdcdc;
  --background-secondary-alt: #dcdcdc;
  --bases-cards-background: #e6e6e6;
  --bases-cards-cover-background: #e1e1e1;
  --bases-cards-shadow: 0 0 0 1px #a0a1a7;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197;
  --bases-embed-border-color: #a0a1a7;
  --bases-group-heading-property-color: #2d2f30;
  --bases-table-border-color: #a0a1a7;
  --bases-table-cell-background-active: #e6e6e6;
  --bases-table-cell-background-disabled: #e1e1e1;
  --bases-table-cell-background-selected: hsla(75, 26%, 48%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(74, 26.26%, 51.6%);
  --bases-table-group-background: #e1e1e1;
  --bases-table-header-background: #e6e6e6;
  --bases-table-header-color: #2d2f30;
  --bases-table-summary-background: #e6e6e6;
  --blockquote-border-color: hsl(74, 26.26%, 51.6%);
  --blue: #4078f2;
  --blur-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent));
  --canvas-background: #e6e6e6;
  --canvas-card-label-color: #101012;
  --caret-color: #383a42;
  --checkbox-border-color: #101012;
  --checkbox-border-color-hover: #2d2f30;
  --checkbox-color: #50a14f;
  --checkbox-color-hover: #a626a4;
  --checkbox-marker-color: #e6e6e6;
  --checklist-done-color: #2d2f30;
  --code-background: #e1e1e1;
  --code-border-color: #a0a1a7;
  --code-comment: #101012;
  --code-normal: #383a42;
  --code-punctuation: #2d2f30;
  --collapse-icon-color: #101012;
  --collapse-icon-color-collapsed: #4078f2;
  --color-accent: hsl(75, 26%, 48%);
  --color-accent-1: hsl(74, 26.26%, 51.6%);
  --color-accent-2: hsl(72, 26.52%, 55.2%);
  --color-accent-hsl: 75, 26%, 48%;
  --dark: var(--text-normal, #383a42);
  --darkgray: var(--text-normal, #383a42);
  --divider-color: transparent;
  --divider-color-hover: #4fa6ed;
  --drag-ghost-background: #dcdcdc;
  --dropdown-background: #fafafa;
  --dropdown-background-hover: #e5556197;
  --embed-block-shadow-hover: 0 0 0 1px #a0a1a7, inset 0 0 0 1px #a0a1a7;
  --embed-border-start: 2px solid hsl(74, 26.26%, 51.6%);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #e6e6e6;
  --file-header-background-focused: #e6e6e6;
  --flair-background: #fafafa;
  --flair-color: #383a42;
  --footnote-divider-color: #a0a1a7;
  --footnote-id-color: #2d2f30;
  --footnote-id-color-no-occurrences: #101012;
  --graph-node: #2d2f30;
  --graph-node-focused: #4078f2;
  --graph-node-unresolved: #101012;
  --graph-text: #383a42;
  --gray: var(--text-muted, #2d2f30);
  --gray-1: #a0a1a7;
  --gray-2: #a0a1a7;
  --green: #50a14f;
  --heading-formatting: #101012;
  --highlight: var(--text-highlight-bg, #8a9a5b);
  --hr-color: #a0a1a7;
  --icon-color: #2d2f30;
  --icon-color-active: #4078f2;
  --icon-color-focused: #383a42;
  --icon-color-hover: #2d2f30;
  --inline-title-weight: 600;
  --input-date-separator: #101012;
  --input-placeholder-color: #101012;
  --interactive-accent: hsl(74, 26.26%, 51.6%);
  --interactive-accent-hover: hsl(75, 16%, 44%);
  --interactive-accent-hsl: 75, 26%, 48%;
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #e5556197;
  --interactive-normal: #fafafa;
  --light: var(--background-primary, #e6e6e6);
  --lightgray: var(--background-secondary, #dcdcdc);
  --link-color: #4078f2;
  --link-color-hover: #e45649;
  --link-decoration: none;
  --link-external-color: #4078f2;
  --link-external-color-hover: #e45649;
  --link-external-decoration: none;
  --link-unresolved-color: #4078f2;
  --link-unresolved-decoration-color: hsla(75, 26%, 48%, 0.3);
  --list-marker-color: #101012;
  --list-marker-color-collapsed: #4078f2;
  --list-marker-color-hover: #2d2f30;
  --menu-background: #dcdcdc;
  --menu-border-color: #e5556197;
  --metadata-border-color: #a0a1a7;
  --metadata-divider-color: #a0a1a7;
  --metadata-input-text-color: #383a42;
  --metadata-label-text-color: #2d2f30;
  --metadata-label-text-color-hover: #2d2f30;
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197;
  --modal-background: #e6e6e6;
  --modal-border-color: #50a14f;
  --nav-collapse-icon-color: #101012;
  --nav-collapse-icon-color-collapsed: #101012;
  --nav-heading-color: #383a42;
  --nav-heading-color-collapsed: #101012;
  --nav-heading-color-collapsed-hover: #2d2f30;
  --nav-heading-color-hover: #383a42;
  --nav-item-background-active: #4fa6ed;
  --nav-item-background-selected: hsla(75, 26%, 48%, 0.15);
  --nav-item-color: #2d2f30;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #4078f2;
  --nav-item-color-hover: #383a42;
  --nav-item-color-selected: #383a42;
  --nav-tag-color: #101012;
  --nav-tag-color-active: #2d2f30;
  --nav-tag-color-hover: #2d2f30;
  --orange: #c18401;
  --panel-border-color: #383a42;
  --pdf-background: #e6e6e6;
  --pdf-page-background: #e6e6e6;
  --pdf-sidebar-background: #e6e6e6;
  --pill-border-color: #a0a1a7;
  --pill-border-color-hover: #e5556197;
  --pill-color: #2d2f30;
  --pill-color-hover: #383a42;
  --pill-color-remove: #101012;
  --pill-color-remove-hover: #4078f2;
  --prompt-background: #e6e6e6;
  --prompt-border-color: #50a14f;
  --purple: #a626a4;
  --raised-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent));
  --red: #e45649;
  --ribbon-background: #dcdcdc;
  --ribbon-background-collapsed: #e6e6e6;
  --scrollbar-active-thumb-bg: #4fa6ed;
  --scrollbar-thumb-bg: #686868;
  --search-clear-button-color: #2d2f30;
  --search-icon-color: #2d2f30;
  --search-result-background: #e6e6e6;
  --secondary: var(--text-accent, #4078f2);
  --setting-group-heading-color: #383a42;
  --setting-items-background: #e1e1e1;
  --setting-items-border-color: #a0a1a7;
  --shiki-active-tab-border-color: #2d2f30;
  --shiki-code-background: #e1e1e1;
  --shiki-code-comment: #101012;
  --shiki-code-normal: #2d2f30;
  --shiki-code-punctuation: #2d2f30;
  --shiki-gutter-border-color: #a0a1a7;
  --shiki-gutter-text-color: #101012;
  --shiki-gutter-text-color-highlight: #2d2f30;
  --shiki-highlight-neutral: #2d2f30;
  --shiki-terminal-dots-color: #101012;
  --shiki-tooltip-background: #a0a1a7;
  --slider-thumb-border-color: #e5556197;
  --slider-track-background: #a0a1a7;
  --status-bar-background: #dcdcdc;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #2d2f30;
  --suggestion-background: #e6e6e6;
  --tab-background-active: #e6e6e6;
  --tab-container-background: #dcdcdc;
  --tab-divider-color: #e5556197;
  --tab-outline-color: transparent;
  --tab-switcher-background: #dcdcdc;
  --tab-switcher-menubar-background: linear-gradient(to top, #dcdcdc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(75, 26%, 48%);
  --tab-text-color: #101012;
  --tab-text-color-active: #2d2f30;
  --tab-text-color-focused: #2d2f30;
  --tab-text-color-focused-active: #2d2f30;
  --tab-text-color-focused-active-current: #383a42;
  --tab-text-color-focused-highlighted: #4078f2;
  --table-add-button-border-color: #a0a1a7;
  --table-border-color: #a0a1a7;
  --table-drag-handle-background-active: hsl(74, 26.26%, 51.6%);
  --table-drag-handle-color: #101012;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #a0a1a7;
  --table-header-color: #383a42;
  --table-selection: hsla(75, 26%, 48%, 0.1);
  --table-selection-border-color: hsl(74, 26.26%, 51.6%);
  --tag-background: #e1e1e1;
  --tag-background-hover: #8ebd6b;
  --tag-border-color: hsla(75, 26%, 48%, 0.15);
  --tag-border-color-hover: hsla(75, 26%, 48%, 0.15);
  --tag-color: #a626a4;
  --tag-color-hover: #a626a4;
  --tag-padding-x: 5px;
  --tag-padding-y: 5px;
  --tag-radius: 40px;
  --tertiary: var(--text-accent-hover, #e45649);
  --text-accent: #4078f2;
  --text-accent-hover: #e45649;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #101012;
  --text-highlight-bg: #8a9a5b;
  --text-muted: #2d2f30;
  --text-normal: #383a42;
  --text-on-accent: #f2f2f2;
  --text-selection: #00000050;
  --text-title-h1: #e45649;
  --text-title-h2: #50a14f;
  --text-title-h3: #c18401;
  --text-title-h4: #0184bc;
  --text-title-h5: #a626a4;
  --text-title-h6: #818387;
  --textHighlight: var(--text-highlight-bg, #8a9a5b);
  --titlebar-background: #dcdcdc;
  --titlebar-background-focused: #dcdcdc;
  --titlebar-border-color: #a0a1a7;
  --titlebar-text-color: #2d2f30;
  --titlebar-text-color-focused: #383a42;
  --vault-profile-color: #383a42;
  --vault-profile-color-hover: #383a42;
  --yellow: #986801;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 220, 220);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 58, 66);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body del {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(56, 58, 66);
  text-decoration: underline rgb(45, 47, 48);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(16, 16, 18);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 161, 79);
  border-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body p {
  color: rgb(45, 47, 48);
  outline: rgb(45, 47, 48) none 0px;
  text-decoration-color: rgb(45, 47, 48);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration-color: rgb(64, 120, 242);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration-color: rgb(64, 120, 242);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body dt {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(16, 16, 18);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body table {
  color: rgb(56, 58, 66);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figcaption {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(149, 164, 99);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(16, 16, 18);
  border-left-color: rgb(16, 16, 18);
  border-right-color: rgb(16, 16, 18);
  border-top-color: rgb(16, 16, 18);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
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
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(56, 58, 66);
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
  background-color: rgb(160, 161, 167);
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body h1 {
  color: rgb(228, 86, 73);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(56, 58, 66);
  font-weight: 600;
}

html[saved-theme="light"] body h2 {
  color: rgb(80, 161, 79);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h3 {
  color: rgb(193, 132, 1);
}

html[saved-theme="light"] body h4 {
  color: rgb(1, 132, 188);
}

html[saved-theme="light"] body h5 {
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body h6 {
  color: rgb(129, 131, 135);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(45, 47, 48);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(56, 58, 66);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-width: 1px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 58, 66);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(45, 47, 48);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(45, 47, 48);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(45, 47, 48);
  stroke: rgb(45, 47, 48);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(16, 16, 18);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(230, 230, 230);
  border-color: rgb(56, 58, 66);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(160, 161, 167);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(225, 225, 225);
  border-radius: 40px;
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(220, 220, 220);
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(220, 220, 220);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(56, 58, 66);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(220, 220, 220);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body abbr {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sub {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body summary {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sup {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  color: rgb(166, 38, 164);
}`,
  },
};
