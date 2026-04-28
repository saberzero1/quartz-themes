import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "borealis",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
    fontFiles: [
      {
        family: "JetBrains Mono",
        style: "normal",
        weight: "100 900",
        file: "jetbrains-mono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "obsidian-borealis",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 110;
  --accent-l: 77%;
  --accent-s: 90%;
  --background-modifier-active-hover: hsla(110, 90%, 77%, 0.1);
  --background-modifier-border: #141414;
  --background-modifier-form-field: #141414;
  --background-modifier-form-field-hover: #141414;
  --background-primary: #141414;
  --background-primary-alt: #191919;
  --background-secondary: #131313;
  --background-secondary-alt: #141414;
  --background-table: #212121;
  --background-table-hover: #282828;
  --background-titlebar: #1c1c1c;
  --bases-cards-background: #141414;
  --bases-cards-cover-background: #191919;
  --bases-cards-shadow: 0 0 0 1px #141414;
  --bases-embed-border-color: #141414;
  --bases-group-heading-property-color: #b8b8b8;
  --bases-table-border-color: #141414;
  --bases-table-cell-background-active: #141414;
  --bases-table-cell-background-disabled: #191919;
  --bases-table-cell-background-selected: hsla(110, 90%, 77%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #a1f98f;
  --bases-table-group-background: #191919;
  --bases-table-header-background: #141414;
  --bases-table-header-color: #b8b8b8;
  --bases-table-summary-background: #141414;
  --blockquote-border-color: #a1f98f;
  --blur-background: color-mix(in srgb, #a1f98f 65%, transparent) linear-gradient(#a1f98f, color-mix(in srgb, #a1f98f 65%, transparent));
  --bold-color: #a1f98f;
  --canvas-background: #141414;
  --canvas-card-label-color: #a1f98f;
  --canvas-color-1: 120, 246, 95;
  --canvas-color-2: 161, 249, 143;
  --canvas-color-3: 202, 252, 191;
  --canvas-color-4: 221, 95, 246;
  --canvas-color-5: 231, 143, 249;
  --canvas-color-6: 241, 191, 252;
  --caret-color: #d1d1d1;
  --checkbox-border-color: #a1f98f;
  --checkbox-border-color-hover: #a1f98f;
  --checkbox-color: #a1f98f;
  --checkbox-color-hover: #a1f98f;
  --checkbox-marker-color: #141414;
  --checkbox-radius: 50%;
  --checklist-done-color: none;
  --checklist-done-decoration: none;
  --code-background: #141414;
  --code-border-color: #141414;
  --code-comment: #4a4a4a;
  --code-function: #e78ff9;
  --code-important: #cb4b16;
  --code-keyword: #a1f98f;
  --code-operator: #dadada;
  --code-property: #a1f98f;
  --code-punctuation: #f8f8f2;
  --code-size: 13px;
  --code-string: #f9e78f;
  --code-tag: #a1f98f;
  --code-value: #e78ff9;
  --collapse-icon-color: #a1f98f;
  --collapse-icon-color-collapsed: #a1f98f;
  --color-accent: #a1f98f;
  --color-accent-1: hsl(107, 91.8%, 88.55%);
  --color-accent-2: hsl(105, 94.5%, 99.33%);
  --color-accent-hsl: 110, 90%, 77%;
  --color-primary: #a1f98f;
  --color-secondary: #e78ff9;
  --dark: var(--text-normal, #d1d1d1);
  --darkgray: var(--text-normal, #d1d1d1);
  --divider-color: #141414;
  --divider-color-hover: #a1f98f;
  --dropdown-background: #a1f98f;
  --dropdown-background-hover: #a1f98f;
  --embed-block-shadow-hover: 0 0 0 1px #141414, inset 0 0 0 1px #141414;
  --embed-border-start: 2px solid #a1f98f;
  --file-header-background: #141414;
  --file-header-background-focused: #141414;
  --flair-background: #a1f98f;
  --flair-color: #d1d1d1;
  --font-heading: 'JetBrains Mono', 'SF Mono', monospace;
  --footnote-divider-color: #141414;
  --footnote-id-color: #b8b8b8;
  --footnote-id-color-no-occurrences: #a1f98f;
  --graph-node: #b8b8b8;
  --graph-node-focused: #a1f98f;
  --graph-node-unresolved: #a1f98f;
  --graph-text: #d1d1d1;
  --gray: var(--text-muted, #b8b8b8);
  --h1-size: 28px;
  --h2-size: 24px;
  --h3-size: 20px;
  --h4-size: 16px;
  --h5-size: 16px;
  --h6-size: 14px;
  --heading-formatting: #a1f98f;
  --highlight: var(--text-highlight-bg, rgba(161, 249, 143, 0.4));
  --hr-color: #141414;
  --hsl-primary: 110, 90%, 77%;
  --hsl-secondary: 290, 90%, 77%;
  --icon-color: #b8b8b8;
  --icon-color-active: #a1f98f;
  --icon-color-focused: #d1d1d1;
  --icon-color-hover: #b8b8b8;
  --inline-title-size: 28px;
  --input-date-separator: #a1f98f;
  --input-placeholder-color: #a1f98f;
  --interactive-accent: #a1f98f;
  --interactive-accent-hover: #a1f98f;
  --interactive-accent-hsl: 110, 90%, 77%;
  --interactive-accent-rgb: #a1f98f;
  --interactive-hover: #a1f98f;
  --interactive-normal: #a1f98f;
  --interactive-secondary-accent: #e78ff9;
  --interactive-secondary-accent-hover: #e78ff9;
  --interactive-secondary-accent-rgb: #e78ff9;
  --interactive-secondary-hover: #e78ff9;
  --interactive-secondary-normal: #e78ff9;
  --interactive-secondary-success: #e78ff9;
  --interactive-success: #a1f98f;
  --italic-color: #e78ff9;
  --light: var(--background-primary, #141414);
  --lightgray: var(--background-secondary, #131313);
  --link-color: #a1f98f;
  --link-color-hover: #a1f98f;
  --link-decoration: none;
  --link-external-color: #a1f98f;
  --link-external-color-hover: #a1f98f;
  --link-unresolved-color: #a1f98f;
  --link-unresolved-decoration-color: #a1f98f;
  --link-unresolved-decoration-style: underline;
  --link-unresolved-opacity: 0.6;
  --link-weight: none;
  --list-marker-color: #a1f98f;
  --list-marker-color-collapsed: #a1f98f;
  --list-marker-color-hover: #b8b8b8;
  --menu-background: #131313;
  --metadata-border-color: #141414;
  --metadata-divider-color: #141414;
  --metadata-input-font-size: 12px;
  --metadata-input-text-color: #d1d1d1;
  --metadata-label-font-size: 12px;
  --metadata-label-text-color: #b8b8b8;
  --metadata-label-text-color-hover: #b8b8b8;
  --modal-background: #141414;
  --nav-collapse-icon-color: #a1f98f;
  --nav-collapse-icon-color-collapsed: #a1f98f;
  --nav-heading-color: #d1d1d1;
  --nav-heading-color-collapsed: #a1f98f;
  --nav-heading-color-collapsed-hover: #b8b8b8;
  --nav-heading-color-hover: #d1d1d1;
  --nav-item-background-selected: hsla(110, 90%, 77%, 0.15);
  --nav-item-color: #b8b8b8;
  --nav-item-color-active: #d1d1d1;
  --nav-item-color-highlighted: #a1f98f;
  --nav-item-color-hover: #d1d1d1;
  --nav-item-color-selected: #d1d1d1;
  --nav-tag-color: #a1f98f;
  --nav-tag-color-active: #b8b8b8;
  --nav-tag-color-hover: #b8b8b8;
  --pdf-background: #141414;
  --pdf-page-background: #141414;
  --pdf-shadow: 0 0 0 1px #141414;
  --pdf-sidebar-background: #141414;
  --pdf-thumbnail-shadow: 0 0 0 1px #141414;
  --pill-border-color: #141414;
  --pill-color: #b8b8b8;
  --pill-color-hover: #d1d1d1;
  --pill-color-remove: #a1f98f;
  --pill-color-remove-hover: #a1f98f;
  --prompt-background: #141414;
  --raised-background: color-mix(in srgb, #a1f98f 65%, transparent) linear-gradient(#a1f98f, color-mix(in srgb, #a1f98f 65%, transparent));
  --red: #f98fa1;
  --rgb-primary: 161, 249, 143;
  --rgb-secondary: 231, 143, 249;
  --ribbon-background: #131313;
  --ribbon-background-collapsed: #141414;
  --scrollbar-active-thumb-bg: rgba(95, 94, 94, 0.3);
  --scrollbar-bg: rgba(95, 94, 94, 0.1);
  --scrollbar-thumb-bg: rgba(95, 94, 94, 0.1);
  --search-clear-button-color: #b8b8b8;
  --search-icon-color: #b8b8b8;
  --search-result-background: #141414;
  --secondary: var(--text-accent, #a1f98f);
  --setting-group-heading-color: #d1d1d1;
  --setting-items-background: #191919;
  --setting-items-border-color: #141414;
  --shiki-active-tab-border-color: #b8b8b8;
  --shiki-code-background: #141414;
  --shiki-code-comment: #a1f98f;
  --shiki-code-normal: #b8b8b8;
  --shiki-code-punctuation: #b8b8b8;
  --shiki-gutter-border-color: #141414;
  --shiki-gutter-text-color: #a1f98f;
  --shiki-gutter-text-color-highlight: #b8b8b8;
  --shiki-highlight-neutral: #b8b8b8;
  --shiki-terminal-dots-color: #a1f98f;
  --slider-track-background: #141414;
  --status-bar-background: #131313;
  --status-bar-border-color: #141414;
  --status-bar-text-color: #b8b8b8;
  --suggestion-background: #141414;
  --tab-background-active: #141414;
  --tab-container-background: #131313;
  --tab-outline-color: #141414;
  --tab-switcher-background: #131313;
  --tab-switcher-menubar-background: linear-gradient(to top, #131313, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a1f98f;
  --tab-text-color: #939393;
  --tab-text-color-active: #d1d1d1;
  --tab-text-color-focused: #939393;
  --tab-text-color-focused-active: #b8b8b8;
  --tab-text-color-focused-active-current: #d1d1d1;
  --tab-text-color-focused-highlighted: #a1f98f;
  --table-add-button-border-color: #141414;
  --table-border-color: #141414;
  --table-drag-handle-background-active: #a1f98f;
  --table-drag-handle-color: #a1f98f;
  --table-drag-handle-color-active: #141414;
  --table-header-border-color: #141414;
  --table-header-color: #d1d1d1;
  --table-selection: hsla(110, 90%, 77%, 0.1);
  --table-selection-border-color: #a1f98f;
  --tag-background: hsla(110, 90%, 77%, 0.1);
  --tag-background-hover: hsla(110, 90%, 77%, 0.2);
  --tag-border-color: hsla(110, 90%, 77%, 0.15);
  --tag-border-color-hover: hsla(110, 90%, 77%, 0.15);
  --tag-color: #a1f98f;
  --tag-color-hover: #a1f98f;
  --tertiary: var(--text-accent-hover, #a1f98f);
  --text-accent: #a1f98f;
  --text-accent-hover: #a1f98f;
  --text-error: #CF6679;
  --text-error-hover: #ff2f00;
  --text-faint: #a1f98f;
  --text-highlight-bg: rgba(161, 249, 143, 0.4);
  --text-highlight-bg-active: #ff2f00;
  --text-muted: #b8b8b8;
  --text-muted-rgb: rgb(184, 184, 184);
  --text-normal: #d1d1d1;
  --text-normal-light: #939393;
  --text-on-accent: #141414;
  --text-on-accent-inverted: #d1d1d1;
  --text-selection: rgba(161, 249, 143, 0.25);
  --textHighlight: var(--text-highlight-bg, rgba(161, 249, 143, 0.4));
  --titlebar-background: #1c1c1c;
  --titlebar-background-focused: #1c1c1c;
  --titlebar-border-color: #141414;
  --titlebar-text-color-focused: #d1d1d1;
  --transparent-primary: rgba(161, 249, 143, 0.6);
  --transparent-secondary: rgba(231, 143, 249, 0.6);
  --vault-profile-color: #d1d1d1;
  --vault-profile-color-hover: #d1d1d1;
  --yellow: #f9e78f;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 19, 19);
  border-left-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(161, 249, 143, 0.4);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(25, 25, 25);
  border-color: rgb(161, 249, 143);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(161, 249, 143);
  border-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(231, 143, 249, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body table {
  color: rgb(209, 209, 209);
  width: 215px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(147, 147, 147);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(209, 209, 209);
  border-left-width: 0px;
  border-right-color: rgb(209, 209, 209);
  border-right-width: 0px;
  border-top-color: rgb(209, 209, 209);
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  padding-bottom: 14px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(25, 25, 25);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  padding-bottom: 1.95px;
  padding-left: 3.9px;
  padding-right: 3.9px;
  padding-top: 1.95px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(20, 20, 20);
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
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(161, 249, 143);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
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
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="primary"] {
  --callout-color: 161, 249, 143;
  --checkbox-border-color-hover: rgb(161, 249, 143);
  --table-border-color: color-mix(in srgb, rgb(161, 249, 143) 25%, #141414 50%);
  background-color: rgba(161, 249, 143, 0.1);
  border-bottom-color: rgba(161, 249, 143, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(161, 249, 143, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(161, 249, 143, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(161, 249, 143, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(161, 249, 143);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="secondary"] {
  --callout-color: 231, 143, 249;
  --checkbox-border-color-hover: rgb(231, 143, 249);
  --table-border-color: color-mix(in srgb, rgb(231, 143, 249) 25%, #141414 50%);
  background-color: rgba(231, 143, 249, 0.1);
  border-bottom-color: rgba(231, 143, 249, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(231, 143, 249, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(231, 143, 249, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(231, 143, 249, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(231, 143, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 161, 249, 143;
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(161, 249, 143);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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

html[saved-theme="dark"] body .callout[data-callout="primary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="secondary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 19, 19);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(161, 249, 143, 0.1);
  border-bottom-color: rgba(161, 249, 144, 0.15);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgba(161, 249, 144, 0.15);
  border-right-color: rgba(161, 249, 144, 0.15);
  border-top-color: rgba(161, 249, 144, 0.15);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body h1 {
  color: rgb(209, 209, 209);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(209, 209, 209);
  font-size: 28px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h4 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h5 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h6 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(184, 184, 184);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(209, 209, 209);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(161, 249, 143);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(19, 19, 19);
  border-color: rgb(209, 209, 209);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(161, 249, 143, 0.1);
  border-radius: 24px;
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(19, 19, 19);
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(209, 209, 209);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body abbr {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(20, 20, 20);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sup {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(161, 249, 144, 0.1);
  border-bottom-color: rgba(161, 249, 144, 0.15);
  border-left-color: rgba(161, 249, 144, 0.15);
  border-right-color: rgba(161, 249, 144, 0.15);
  border-top-color: rgba(161, 249, 144, 0.15);
  color: rgb(161, 249, 143);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 134;
  --accent-l: 41%;
  --accent-s: 68%;
  --background-modifier-active-hover: hsla(134, 68%, 41%, 0.1);
  --background-modifier-border: #f6f6f6;
  --background-modifier-form-field: #f6f6f6;
  --background-modifier-form-field-hover: #f6f6f6;
  --background-primary: #f6f6f6;
  --background-primary-alt: #f0f0f0;
  --background-secondary: #f4f2f2;
  --background-secondary-alt: #f6f6f6;
  --background-table: #f8f8f8;
  --background-table-hover: #fafafa;
  --background-titlebar: #f0f0f0;
  --bases-cards-background: #f6f6f6;
  --bases-cards-cover-background: #f0f0f0;
  --bases-cards-shadow: 0 0 0 1px #f6f6f6;
  --bases-embed-border-color: #f6f6f6;
  --bases-group-heading-property-color: #444444;
  --bases-table-border-color: #f6f6f6;
  --bases-table-cell-background-active: #f6f6f6;
  --bases-table-cell-background-disabled: #f0f0f0;
  --bases-table-cell-background-selected: hsla(134, 68%, 41%, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #21b043;
  --bases-table-group-background: #f0f0f0;
  --bases-table-header-background: #f6f6f6;
  --bases-table-header-color: #444444;
  --bases-table-summary-background: #f6f6f6;
  --blockquote-border-color: #21b043;
  --blur-background: color-mix(in srgb, #f6f6f6 65%, transparent) linear-gradient(#f6f6f6, color-mix(in srgb, #f6f6f6 65%, transparent));
  --bold-color: #21b043;
  --canvas-background: #f6f6f6;
  --canvas-card-label-color: #21b043;
  --canvas-color-1: 120, 246, 95;
  --canvas-color-2: 161, 249, 143;
  --canvas-color-3: 202, 252, 191;
  --canvas-color-4: 221, 95, 246;
  --canvas-color-5: 231, 143, 249;
  --canvas-color-6: 241, 191, 252;
  --caret-color: #141414;
  --checkbox-border-color: #21b043;
  --checkbox-border-color-hover: #21b043;
  --checkbox-color: #21b043;
  --checkbox-color-hover: #21b043;
  --checkbox-marker-color: #f6f6f6;
  --checkbox-radius: 50%;
  --checklist-done-color: none;
  --checklist-done-decoration: none;
  --code-background: #141414;
  --code-border-color: #f6f6f6;
  --code-comment: #4a4a4a;
  --code-function: #e78ff9;
  --code-important: #cb4b16;
  --code-keyword: #a1f98f;
  --code-normal: #dadada;
  --code-operator: #dadada;
  --code-property: #a1f98f;
  --code-punctuation: #f8f8f2;
  --code-size: 13px;
  --code-string: #f9e78f;
  --code-tag: #a1f98f;
  --code-value: #e78ff9;
  --collapse-icon-color: #21b043;
  --collapse-icon-color-collapsed: #21b043;
  --color-accent: #21b043;
  --color-accent-1: hsl(133, 68.68%, 44.075%);
  --color-accent-2: hsl(131, 69.36%, 47.15%);
  --color-accent-hsl: 134, 68%, 41%;
  --color-primary: #21b043;
  --color-secondary: #b0218e;
  --dark: var(--text-normal, #141414);
  --darkgray: var(--text-normal, #141414);
  --divider-color: #f6f6f6;
  --divider-color-hover: #21b043;
  --dropdown-background: #21b043;
  --dropdown-background-hover: #21b043;
  --embed-block-shadow-hover: 0 0 0 1px #f6f6f6, inset 0 0 0 1px #f6f6f6;
  --embed-border-start: 2px solid #21b043;
  --file-header-background: #f6f6f6;
  --file-header-background-focused: #f6f6f6;
  --flair-background: #21b043;
  --flair-color: #141414;
  --font-heading: 'JetBrains Mono', 'SF Mono', monospace;
  --footnote-divider-color: #f6f6f6;
  --footnote-id-color: #444444;
  --footnote-id-color-no-occurrences: #21b043;
  --graph-node: #444444;
  --graph-node-focused: #21b043;
  --graph-node-unresolved: #21b043;
  --graph-text: #141414;
  --gray: var(--text-muted, #444444);
  --h1-size: 28px;
  --h2-size: 24px;
  --h3-size: 20px;
  --h4-size: 16px;
  --h5-size: 16px;
  --h6-size: 14px;
  --heading-formatting: #21b043;
  --highlight: var(--text-highlight-bg, rgba(34, 176, 67, 0.4));
  --hr-color: #f6f6f6;
  --hsl-primary: 134, 68%, 41%;
  --hsl-secondary: 314, 68%, 41%;
  --icon-color: #444444;
  --icon-color-active: #21b043;
  --icon-color-focused: #141414;
  --icon-color-hover: #444444;
  --inline-title-size: 28px;
  --input-date-separator: #21b043;
  --input-placeholder-color: #21b043;
  --interactive-accent: #21b043;
  --interactive-accent-hover: #21b043;
  --interactive-accent-hsl: 134, 68%, 41%;
  --interactive-accent-rgb: #21b043;
  --interactive-hover: #21b043;
  --interactive-normal: #21b043;
  --interactive-secondary-accent: #b0218e;
  --interactive-secondary-accent-hover: #b0218e;
  --interactive-secondary-accent-rgb: #b0218e;
  --interactive-secondary-hover: #b0218e;
  --interactive-secondary-normal: #b0218e;
  --interactive-secondary-success: #b0218e;
  --interactive-success: #21b043;
  --italic-color: #b0218e;
  --light: var(--background-primary, #f6f6f6);
  --lightgray: var(--background-secondary, #f4f2f2);
  --link-color: #21b043;
  --link-color-hover: #21b043;
  --link-decoration: none;
  --link-external-color: #21b043;
  --link-external-color-hover: #21b043;
  --link-unresolved-color: #21b043;
  --link-unresolved-decoration-color: #21b043;
  --link-unresolved-decoration-style: underline;
  --link-unresolved-opacity: 0.6;
  --link-weight: none;
  --list-marker-color: #21b043;
  --list-marker-color-collapsed: #21b043;
  --list-marker-color-hover: #444444;
  --menu-background: #f4f2f2;
  --metadata-border-color: #f6f6f6;
  --metadata-divider-color: #f6f6f6;
  --metadata-input-font-size: 12px;
  --metadata-input-text-color: #141414;
  --metadata-label-font-size: 12px;
  --metadata-label-text-color: #444444;
  --metadata-label-text-color-hover: #444444;
  --modal-background: #f6f6f6;
  --nav-collapse-icon-color: #21b043;
  --nav-collapse-icon-color-collapsed: #21b043;
  --nav-heading-color: #141414;
  --nav-heading-color-collapsed: #21b043;
  --nav-heading-color-collapsed-hover: #444444;
  --nav-heading-color-hover: #141414;
  --nav-item-background-selected: hsla(134, 68%, 41%, 0.15);
  --nav-item-color: #444444;
  --nav-item-color-active: #141414;
  --nav-item-color-highlighted: #21b043;
  --nav-item-color-hover: #141414;
  --nav-item-color-selected: #141414;
  --nav-tag-color: #21b043;
  --nav-tag-color-active: #444444;
  --nav-tag-color-hover: #444444;
  --pdf-background: #f6f6f6;
  --pdf-page-background: #f6f6f6;
  --pdf-sidebar-background: #f6f6f6;
  --pill-border-color: #f6f6f6;
  --pill-color: #444444;
  --pill-color-hover: #141414;
  --pill-color-remove: #21b043;
  --pill-color-remove-hover: #21b043;
  --prompt-background: #f6f6f6;
  --raised-background: color-mix(in srgb, #f6f6f6 65%, transparent) linear-gradient(#f6f6f6, color-mix(in srgb, #f6f6f6 65%, transparent));
  --red: #b02146;
  --rgb-primary: 34, 176, 67;
  --rgb-secondary: 176, 33, 142;
  --ribbon-background: #f4f2f2;
  --ribbon-background-collapsed: #f6f6f6;
  --scrollbar-active-thumb-bg: rgba(95, 94, 94, 0.3);
  --scrollbar-bg: rgba(95, 94, 94, 0.1);
  --scrollbar-thumb-bg: rgba(95, 94, 94, 0.1);
  --search-clear-button-color: #444444;
  --search-icon-color: #444444;
  --search-result-background: #f6f6f6;
  --secondary: var(--text-accent, #21b043);
  --setting-group-heading-color: #141414;
  --setting-items-background: #f0f0f0;
  --setting-items-border-color: #f6f6f6;
  --shiki-active-tab-border-color: #444444;
  --shiki-code-background: #141414;
  --shiki-code-comment: #21b043;
  --shiki-code-normal: #444444;
  --shiki-code-punctuation: #444444;
  --shiki-gutter-border-color: #f6f6f6;
  --shiki-gutter-text-color: #21b043;
  --shiki-gutter-text-color-highlight: #444444;
  --shiki-highlight-neutral: #444444;
  --shiki-terminal-dots-color: #21b043;
  --slider-track-background: #f6f6f6;
  --status-bar-background: #f4f2f2;
  --status-bar-border-color: #f6f6f6;
  --status-bar-text-color: #444444;
  --suggestion-background: #f6f6f6;
  --tab-background-active: #f6f6f6;
  --tab-container-background: #f4f2f2;
  --tab-outline-color: #f6f6f6;
  --tab-switcher-background: #f4f2f2;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f2f2, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #21b043;
  --tab-text-color: #444444;
  --tab-text-color-active: #141414;
  --tab-text-color-focused: #444444;
  --tab-text-color-focused-active: #444444;
  --tab-text-color-focused-active-current: #141414;
  --tab-text-color-focused-highlighted: #21b043;
  --table-add-button-border-color: #f6f6f6;
  --table-border-color: #f6f6f6;
  --table-drag-handle-background-active: #21b043;
  --table-drag-handle-color: #21b043;
  --table-drag-handle-color-active: #f6f6f6;
  --table-header-border-color: #f6f6f6;
  --table-header-color: #141414;
  --table-selection: hsla(134, 68%, 41%, 0.1);
  --table-selection-border-color: #21b043;
  --tag-background: hsla(134, 68%, 41%, 0.1);
  --tag-background-hover: hsla(134, 68%, 41%, 0.2);
  --tag-border-color: hsla(134, 68%, 41%, 0.15);
  --tag-border-color-hover: hsla(134, 68%, 41%, 0.15);
  --tag-color: #21b043;
  --tag-color-hover: #21b043;
  --tertiary: var(--text-accent-hover, #21b043);
  --text-accent: #21b043;
  --text-accent-hover: #21b043;
  --text-error: #CF6679;
  --text-error-hover: #ff2f00;
  --text-faint: #21b043;
  --text-highlight-bg: rgba(34, 176, 67, 0.4);
  --text-highlight-bg-active: #ff2f00;
  --text-muted: #444444;
  --text-muted-rgb: rgb(68, 68, 68);
  --text-normal: #141414;
  --text-normal-light: #444444;
  --text-on-accent: #f6f6f6;
  --text-on-accent-inverted: #141414;
  --text-selection: rgba(34, 176, 67, 0.25);
  --textHighlight: var(--text-highlight-bg, rgba(34, 176, 67, 0.4));
  --titlebar-background: #f0f0f0;
  --titlebar-background-focused: #f0f0f0;
  --titlebar-border-color: #f6f6f6;
  --titlebar-text-color-focused: #141414;
  --transparent-primary: rgba(34, 176, 67, 0.6);
  --transparent-secondary: rgba(176, 33, 142, 0.6);
  --vault-profile-color: #141414;
  --vault-profile-color-hover: #141414;
  --yellow: #8eb021;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 242, 242);
  border-left-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration-color: rgb(176, 33, 142);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration-color: rgb(176, 33, 142);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(34, 176, 67, 0.4);
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body del {
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(240, 240, 240);
  border-color: rgb(33, 176, 67);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(33, 176, 67);
  border-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body p {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body dt {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ol > li {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul > li {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(176, 33, 142, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body table {
  color: rgb(20, 20, 20);
  width: 215px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 20, 20);
  border-left-width: 0px;
  border-right-color: rgb(20, 20, 20);
  border-right-width: 0px;
  border-top-color: rgb(20, 20, 20);
  border-top-width: 0px;
  color: rgb(20, 20, 20);
  padding-bottom: 14px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: rgb(240, 240, 240);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(218, 218, 218);
  padding-bottom: 1.95px;
  padding-left: 3.9px;
  padding-right: 3.9px;
  padding-top: 1.95px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(20, 20, 20);
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
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body figcaption {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(33, 176, 67);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(33, 176, 67);
  border-top-color: rgb(33, 176, 67);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
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
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="primary"] {
  --callout-color: 34, 176, 67;
  --checkbox-border-color-hover: rgb(34, 176, 67);
  --table-border-color: color-mix(in srgb, rgb(34, 176, 67) 25%, #f6f6f6 50%);
  background-color: rgba(34, 176, 67, 0.1);
  border-bottom-color: rgba(34, 176, 67, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(34, 176, 67, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(34, 176, 67, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(34, 176, 67, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(34, 176, 67);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="secondary"] {
  --callout-color: 176, 33, 142;
  --checkbox-border-color-hover: rgb(176, 33, 142);
  --table-border-color: color-mix(in srgb, rgb(176, 33, 142) 25%, #f6f6f6 50%);
  background-color: rgba(176, 33, 142, 0.1);
  border-bottom-color: rgba(176, 33, 142, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(176, 33, 142, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(176, 33, 142, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(176, 33, 142, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(176, 33, 142);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 34, 176, 67;
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(33, 176, 67);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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

html[saved-theme="light"] body .callout[data-callout="primary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="secondary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 242, 242);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 176, 67, 0.1);
  border-bottom-color: rgba(33, 176, 67, 0.15);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgba(33, 176, 67, 0.15);
  border-right-color: rgba(33, 176, 67, 0.15);
  border-top-color: rgba(33, 176, 67, 0.15);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body h1 {
  color: rgb(20, 20, 20);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(20, 20, 20);
  font-size: 28px;
}

html[saved-theme="light"] body h2 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h3 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h4 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h5 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h6 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(68, 68, 68);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(20, 20, 20);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 242, 242);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(68, 68, 68);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(68, 68, 68);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(68, 68, 68);
  stroke: rgb(68, 68, 68);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(33, 176, 67);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 246, 246);
  border-color: rgb(20, 20, 20);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(34, 176, 67, 0.1);
  border-radius: 24px;
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(244, 242, 242);
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(20, 20, 20);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 242, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body abbr {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body sub {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body summary {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body sup {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(33, 176, 67, 0.1);
  border-bottom-color: rgba(33, 176, 67, 0.15);
  border-left-color: rgba(33, 176, 67, 0.15);
  border-right-color: rgba(33, 176, 67, 0.15);
  border-top-color: rgba(33, 176, 67, 0.15);
  color: rgb(33, 176, 67);
}`,
  },
  classSettings: {
    tw1: `.tw1 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) {
max-width: 100%;
width: 100%;
}`,
    tw2: `.tw2 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) {
max-width: 80%;
width: 80%;
}`,
    tw3: `.tw3 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) {
max-width: 60%;
width: 60%;
}`,
    th1: `.th1 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
padding: 16px 16px;
}`,
    th2: `.th2 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
padding: 16px 16px;
}`,
    th3: `.th3 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
padding: 4px 4px;
}`,
    t1: `.t1 table:not(.dataview) {
--table-header-background: var(--background-primary-alt);
--table-header-background-hover: var(--background-primary-alt);
--table-header-color: var(--text-normal);
--table-text-color: var(--text-normal-light);
--table-text-size: 16px;
--table-background: var(--background-table);
--table-row-background-hover: var(--background-table-hover);
--table-row-alt-background: var(--background-table);
--table-row-alt-background-hover: var(--background-table-hover);
}

.t1 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table > tbody > tr > td:not(.dataview) {
border-top: 0px;
border-inline: none;
}

.t1 table:not(.dataview) > thead > tr > th {
text-align: center;
border: none;
padding: 14px 0;
font-size: 18px;
}

.t1 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
text-align: center;
}

.t1 table:not(.dataview) > tbody > tr:hover > td {
color: var(--interactive-accent-hover);
}

.t1 table:not(.dataview) > tbody > tr > td > .internal-link {
color: var(--interactive-accent);
}

.t1 table:not(.dataview) > tbody > tr:hover > td > .internal-link {
color: var(--interactive-accent-hover);
}`,
    t2: `.t2 table:not(.dataview) {
--table-header-background: var(--background-primary-alt);
--table-header-background-hover: var(--background-primary-alt);
--table-header-color: var(--text-normal);
--table-text-color: var(--text-normal-light);
--table-text-size: 16px;
--table-background: var(--background-table);
--table-row-background-hover: var(--background-table-hover);
--table-row-alt-background: var(--background-table);
--table-row-alt-background-hover: var(--background-table-hover);
}

.t2 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table > tbody > tr > td:not(.dataview) {
border-top: 0px;
border-inline: none;
}

.t2 table:not(.dataview) > thead > tr > th {
text-align: center;
border: none;
padding: 14px 0;
font-size: 18px;
}

.t2 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
text-align: center;
}

.t2 table:not(.dataview) > tbody > tr:hover > td {
color: var(--interactive-secondary-accent-hover);
}

.t2 table:not(.dataview) > tbody > tr > td > .internal-link {
color: var(--interactive-secondary-accent);
}

.t2 table:not(.dataview) > tbody > tr:hover > td > .internal-link {
color: var(--interactive-secondary-accent-hover);
text-decoration: underline;
}`,
    t3: `.t3 table:not(.dataview) {
--table-header-background: rgba(var(--rgb-primary), 0.06);
--table-header-background-hover: rgba(var(--rgb-primary), 0.08);
--table-header-color: var(--text-normal);
--table-text-color: var(--text-normal-light);
--table-text-size: 16px;
--table-background: rgba(var(--rgb-primary), 0.04);
--table-row-background-hover: rgba(var(--rgb-primary), 0.1);
--table-row-alt-background: rgba(var(--rgb-primary), 0.04);
--table-row-alt-background-hover: rgba(var(--rgb-primary), 0.1);
}

.t3 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table > tbody > tr > td:not(.dataview) {
border-top: 0px;
border-inline: none;
}

.t3 table:not(.dataview) > thead > tr > th {
text-align: center;
border: none;
padding: 14px 0;
font-size: 18px;
}

.t3 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
text-align: center;
}

.t3 table:not(.dataview) > tbody > tr:hover > td {
color: var(--interactive-accent-hover);
}

.t3 table:not(.dataview) > tbody > tr > td > .internal-link {
color: var(--interactive-accent);
}

.t3 table:not(.dataview) > tbody > tr:hover > td > .internal-link {
color: var(--interactive-accent-hover);
}`,
    t4: `.t4 table:not(.dataview) {
--table-header-background: rgba(var(--rgb-secondary), 0.06);
--table-header-background-hover: rgba(var(--rgb-secondary), 0.08);
--table-header-color: var(--text-normal);
--table-text-color: var(--text-normal-light);
--table-text-size: 16px;
--table-background: rgba(var(--rgb-secondary), 0.04);
--table-row-background-hover: rgba(var(--rgb-secondary), 0.1);
--table-row-alt-background: rgba(var(--rgb-secondary), 0.04);
--table-row-alt-background-hover: rgba(var(--rgb-secondary), 0.1);
}

.t4 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table > tbody > tr > td:not(.dataview) {
border-top: 0px;
border-inline: none;
}

.t4 table:not(.dataview) > thead > tr > th {
text-align: center;
border: none;
padding: 14px 0;
font-size: 18px;
}

.t4 .view-content > .markdown-reading-view > .markdown-preview-view > .markdown-preview-section > div > table:not(.dataview) > tbody > tr > td {
text-align: center;
}

.t4 table:not(.dataview) > tbody > tr:hover > td {
color: var(--interactive-secondary-accent-hover);
}

.t4 table:not(.dataview) > tbody > tr > td > .internal-link {
color: var(--interactive-secondary-accent);
}

.t4 table:not(.dataview) > tbody > tr:hover > td > .internal-link {
color: var(--interactive-secondary-accent-hover);
text-decoration: underline;
}`,
    "enable-alternative-checkboxes": `body.enable-alternative-checkboxes {
--checkbox-radius: 50%;
--checkbox-color: var(--color-primary);
--checkbox-color-hover: var(--color-primary);
--checkbox-border-color: var(--color-primary);
--checkbox-border-color-hover: var(--color-primary);
--checklist-done-decoration: none;
--checklist-done-color: none;
/* Canceled */
[data-task]:is(c)>input[type=checkbox]:checked, 
  [data-task]:is(c)>p>input[type=checkbox]:checked, 
  [data-task]:is(c)[type=checkbox]:checked {
    pointer-events: auto;
    border: none;
    background: none;
  };
[data-task]:is(c)>input[type=checkbox]:checked:after,
  [data-task]:is(c)>p>input[type=checkbox]:checked:after,
  [data-task]:is(c)[type=checkbox]:checked:after {
    background-color: var(--checkbox-icon-color, transparent);
    -webkit-mask-image: var(--checkbox-icon-mask-image, none);
    -webkit-mask-size: var(--checkbox-icon-mask-size, 100%);
  };
[data-task=c] {
    --checkbox-icon-color: var(--background-primary);
    --checkbox-icon-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  };
[data-task=c]>input[type=checkbox]:checked,
  [data-task=c]>p>input[type=checkbox]:checked,
  [data-task=c][type=checkbox]:checked {
    pointer-events: auto;
    background-color: var(--red);
    border-color: var(--red);
  };
[data-task=c]>input[type=checkbox]:checked:after,
  [data-task=c]>p>input[type=checkbox]:checked:after,
  [data-task=c][type=checkbox]:checked:after {
    background-color: var(--checkbox-icon-color, transparent);
    -webkit-mask-image: var(--checkbox-icon-mask-image, none);
    -webkit-mask-size: var(--checkbox-icon-mask-size, 100%);
  };
/* Postponed */
[data-task]:is(p)>input[type=checkbox]:checked,
  [data-task]:is(p)>p>input[type=checkbox]:checked,
  [data-task]:is(p)[type=checkbox]:checked { 
    pointer-events: auto; 
    border: none; 
    background: none;
  };
[data-task]:is(p)>input[type=checkbox]:checked:after,
  [data-task]:is(p)>p>input[type=checkbox]:checked:after,
  [data-task]:is(p)[type=checkbox]:checked:after {
    background-color: var(--checkbox-icon-color, transparent);
    -webkit-mask-image: var(--checkbox-icon-mask-image, none);
    -webkit-mask-size: var(--checkbox-icon-mask-size, 100%);
  };
[data-task=p] {
    --checkbox-icon-color: var(--background-primary);
    --checkbox-icon-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  };
[data-task=p]>input[type=checkbox]:checked,
  [data-task=p]>p>input[type=checkbox]:checked,
  [data-task=p][type=checkbox]:checked {
    pointer-events: auto;
    background-color: var(--yellow);
    border-color: var(--yellow);
  };
[data-task=p]>input[type=checkbox]:checked:after,
  [data-task=p]>p>input[type=checkbox]:checked:after,
  [data-task=p][type=checkbox]:checked:after {
    background-color: var(--checkbox-icon-color,transparent);
    -webkit-mask-image: var(--checkbox-icon-mask-image, none);
    -webkit-mask-size: var(--checkbox-icon-mask-size, 100%);
  };
}`,
    sh1: `.sh1 {
--code-background: #141414;
--code-white-space: pre-wrap;
--code-size: 13px;
--code-normal: #dadada;
--code-comment: #4a4a4a;
--code-function: #e78ff9;
--code-important: #cb4b16;
--code-keyword: #a1f98f;
--code-operator: #dadada;
--code-property: #a1f98f;
--code-punctuation: #f8f8f2;
--code-string: #f9e78f;
--code-tag: #a1f98f;
--code-value: #e78ff9;
}

.sh1 .markdown-preview-view .token.string {
font-weight: 300;
}`,
    sh2: `.sh2 {
--code-background: #0d1117;
--code-white-space: nowrap;
--code-size: 13px;
--code-normal: #E6EDF3;
--code-comment: #8B949E;
--code-function: #d2a8ff;
--code-important: #ff7b72;
--code-keyword: #FF7B72;
--code-operator: #79C0FF;
--code-property: #79C0FF;
--code-punctuation: #E6EDF3;
--code-string: #a5d6ff;
--code-tag: #7ee787;
--code-value: #79C0FF;
}

.sh2 .markdown-preview-view .token.hexcode.color {
color: #a5d6ff;
}

.sh2 .markdown-preview-view .token.selector {
color: #7ee787;
}

.sh2 .markdown-preview-view .token.class-name {
color: #ffa657;
}

.sh2 .markdown-preview-view .token.console {
color: #c9d1d9;
}`,
    sh3: `.sh3 {
--code-background: #2b2b2b;
--code-white-space: pre-wrap;
--code-size: 13px;
--code-normal: #d4d4d4;
--code-comment: #d4d0ab;
--code-function: #f5ab35;
--code-important: #ff5555;
--code-keyword: #dcc6e0;
--code-operator: #d4d4d4;
--code-property: #dcc6e0;
--code-punctuation: #d4d4d4;
--code-string: #abe338;
--code-tag: #39BAE6;
--code-value: #f5ab35;
}

.sh3 .markdown-preview-view .token.class-name, .sh3 .markdown-preview-view .token.function {
color: #00e0e0;
}

.sh3 .markdown-preview-view .token.console {
color: #ffa07a;
}`,
    sh4: `.sh4 {
--code-background: #282c34;
--code-white-space: pre;
--code-size: 13px;
--code-normal: #abb2bf;
--code-comment: #5c6370;
--code-function: #61aeee;
--code-important: #e06c75;
--code-keyword: #c678dd;
--code-operator: #abb2bf;
--code-property: #98c379;
--code-punctuation: #abb2bf;
--code-string: #98c379;
--code-tag: #c678dd;
--code-value: #d19a66;
}`,
    sh5: `.sh5 {
--code-background: #23241f;
--code-white-space: pre-wrap;
--code-size: 13px;
--code-normal: #f8f8f2;
--code-comment: #75715e;
--code-function: #a6e22e;
--code-important: #cb4b16;
--code-keyword: #f92672;
--code-operator: #f8f8f2;
--code-property: #a6e22e;
--code-punctuation: #f8f8f2;
--code-string: #e6db74;
--code-tag: #f8f8f2;
--code-value: #ae81ff;
}

.sh5 .markdown-preview-view .token.class-name {
color: #f8f8f2;
}

.sh5 .markdown-preview-view .token.boolean {
color: #ae81ff;
}

.sh5 .markdown-preview-view .token.console {
color: #e6db74;
}

.sh5 .markdown-preview-view .token.builtin, .sh5 .cm-s-obsidian span.cm-builtin {
color: #e6db74;
}

.sh5 .markdown-preview-view .token.variable, .sh5 .cm-s-obsidian span.cm-variable {
color: #e6db74;
}`,
    sh6: `.sh6 {
--code-background: #1a1b26;
--code-white-space: pre-wrap;
--code-size: 13px;
--code-normal: #9aa5ce;
--code-comment: #51597d;
--code-function: #ffcc66;
--code-important: #ff6e6e;
--code-keyword: #bb9af7;
--code-operator: #9aa5ce;
--code-property: #78dce8;
--code-punctuation: #9aa5ce;
--code-string: #a9dc76;
--code-tag: #f7768e;
--code-value: #ff9e64;
}

.sh6 .markdown-preview-view .token.class-name, .sh6 .markdown-preview-view .token.function {
color: #7dcfff;
}

.sh6 .markdown-preview-view .token.console {
color: #f7768e;
}`,
    sh7: `.sh7 {
--code-background: #000000;
--code-white-space: pre;
--code-size: 13px;
--code-normal: #cccccc;
--code-comment: #969896;
--code-function: #e78c45;
--code-important: #ff6666;
--code-keyword: #cc99cc;
--code-operator: #cccccc;
--code-property: #99cccc;
--code-punctuation: #cccccc;
--code-string: #b9ca4a;
--code-tag: #cc99cc;
--code-value: #e78c45;
}

.sh7 .markdown-preview-view .token.class-name, .sh7 .markdown-preview-view .token.function {
color: #7aa6da;
}

.sh7 .markdown-preview-view .token.console {
color: #d54e53;
}`,
  },
};
