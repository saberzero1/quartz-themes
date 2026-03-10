import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "borealis",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 110;
  --accent-l: 77%;
  --accent-s: 90%;
  --background-modifier-active-hover: rgba(161, 249, 144, 0.1);
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
  --bases-table-cell-background-selected: rgba(161, 249, 144, 0.1);
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
  --color-accent-1: rgb(212, 253, 201);
  --color-accent-2: rgb(251, 255, 250);
  --color-accent-hsl: 110, 90%, 77%;
  --color-primary: #a1f98f;
  --color-secondary: #e78ff9;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
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
  --gray: var(--text-muted);
  --h1-size: 28px;
  --h2-size: 24px;
  --h3-size: 20px;
  --h4-size: 16px;
  --h5-size: 16px;
  --h6-size: 14px;
  --heading-formatting: #a1f98f;
  --highlight: var(--text-highlight-bg);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
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
  --nav-item-background-selected: rgba(161, 249, 144, 0.15);
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
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d1d1d1;
  --setting-items-background: #191919;
  --setting-items-border-color: #141414;
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
  --table-selection: rgba(161, 249, 144, 0.1);
  --table-selection-border-color: #a1f98f;
  --tag-background: rgba(161, 249, 144, 0.1);
  --tag-background-hover: rgba(161, 249, 144, 0.2);
  --tag-border-color: rgba(161, 249, 144, 0.15);
  --tag-border-color-hover: rgba(161, 249, 144, 0.15);
  --tag-color: #a1f98f;
  --tag-color-hover: #a1f98f;
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 20, 20);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 19, 19);
  border-left-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

body div#quartz-root {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}

body .page article p > em, em {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration: rgb(231, 143, 249);
  text-decoration-color: rgb(231, 143, 249);
}

body .page article p > i, i {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration: rgb(231, 143, 249);
  text-decoration-color: rgb(231, 143, 249);
}

body .page article p > strong, strong {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}

body .text-highlight {
  background-color: rgba(161, 249, 143, 0.4);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body del {
  color: rgb(147, 147, 147);
  outline: rgb(147, 147, 147) none 0px;
  text-decoration: line-through rgb(147, 147, 147);
  text-decoration-color: rgb(147, 147, 147);
}

body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration: rgb(184, 184, 184);
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `body a.external, footer a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: underline rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}

body a.internal.broken {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}`,
    lists: `body dd {
  color: rgb(209, 209, 209);
}

body dt {
  color: rgb(209, 209, 209);
}

body ol > li {
  color: rgb(209, 209, 209);
}

body ol.overflow {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ul > li {
  color: rgb(209, 209, 209);
}

body ul.overflow {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(161, 249, 143);
  text-decoration: rgb(161, 249, 143);
}

body blockquote {
  background-color: rgba(231, 143, 249, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body table {
  color: rgb(209, 209, 209);
  width: 215px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 33);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(33, 33, 33);
}

body td {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(147, 147, 147);
}

body th {
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

body tr {
  background-color: rgb(25, 25, 25);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

body pre > code > [data-line] {
  border-left-color: rgb(231, 143, 249);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 143, 249);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 143, 249);
  border-left-color: rgb(231, 143, 249);
  border-right-color: rgb(231, 143, 249);
  border-top-color: rgb(231, 143, 249);
}

body pre > code, pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    images: `body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body figcaption {
  color: rgb(209, 209, 209);
}

body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body img {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body video {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    embeds: `body .file-embed {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body input[type=checkbox] {
  border-bottom-color: rgb(161, 249, 143);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}`,
    callouts: `body .callout .callout-title {
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 19, 19);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(161, 249, 143);
}

body h1 {
  color: rgb(209, 209, 209);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

body h2 {
  color: rgb(209, 209, 209);
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 209, 209);
}

body h3 {
  color: rgb(209, 209, 209);
}

body h4 {
  color: rgb(209, 209, 209);
}

body h5 {
  color: rgb(209, 209, 209);
}

body h6 {
  color: rgb(209, 209, 209);
}

body hr {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `body footer {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

body footer ul li a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
  text-decoration: rgb(184, 184, 184);
}

body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .breadcrumb-element p {
  color: rgb(161, 249, 143);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .metadata {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body .navigation-progress {
  background-color: rgb(19, 19, 19);
}

body .page-header h2.page-title {
  color: rgb(209, 209, 209);
}

body abbr {
  color: rgb(209, 209, 209);
  text-decoration: underline dotted rgb(209, 209, 209);
}

body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

body kbd {
  background-color: rgb(20, 20, 20);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body sub {
  color: rgb(209, 209, 209);
}

body summary {
  color: rgb(209, 209, 209);
}

body sup {
  color: rgb(209, 209, 209);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 134;
  --accent-l: 41%;
  --accent-s: 68%;
  --background-modifier-active-hover: rgba(33, 176, 67, 0.1);
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
  --bases-table-cell-background-selected: rgba(33, 176, 67, 0.1);
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
  --color-accent-1: rgb(35, 190, 68);
  --color-accent-2: rgb(37, 203, 67);
  --color-accent-hsl: 134, 68%, 41%;
  --color-primary: #21b043;
  --color-secondary: #b0218e;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
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
  --gray: var(--text-muted);
  --h1-size: 28px;
  --h2-size: 24px;
  --h3-size: 20px;
  --h4-size: 16px;
  --h5-size: 16px;
  --h6-size: 14px;
  --heading-formatting: #21b043;
  --highlight: var(--text-highlight-bg);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
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
  --nav-item-background-selected: rgba(33, 176, 67, 0.15);
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
  --secondary: var(--text-accent);
  --setting-group-heading-color: #141414;
  --setting-items-background: #f0f0f0;
  --setting-items-border-color: #f6f6f6;
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
  --table-selection: rgba(33, 176, 67, 0.1);
  --table-selection-border-color: #21b043;
  --tag-background: rgba(33, 176, 67, 0.1);
  --tag-background-hover: rgba(33, 176, 67, 0.2);
  --tag-border-color: rgba(33, 176, 67, 0.15);
  --tag-border-color-hover: rgba(33, 176, 67, 0.15);
  --tag-color: #21b043;
  --tag-color-hover: #21b043;
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 242, 242);
  border-left-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

body div#quartz-root {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}`,
    typography: `body .page article p > b, b {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}

body .page article p > em, em {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration: rgb(176, 33, 142);
  text-decoration-color: rgb(176, 33, 142);
}

body .page article p > i, i {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration: rgb(176, 33, 142);
  text-decoration-color: rgb(176, 33, 142);
}

body .page article p > strong, strong {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}

body .text-highlight {
  background-color: rgba(34, 176, 67, 0.4);
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body del {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: line-through rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}

body p {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration: rgb(68, 68, 68);
  text-decoration-color: rgb(68, 68, 68);
}`,
    links: `body a.external, footer a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: underline rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}

body a.internal.broken {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}`,
    lists: `body dd {
  color: rgb(20, 20, 20);
}

body dt {
  color: rgb(20, 20, 20);
}

body ol > li {
  color: rgb(20, 20, 20);
}

body ol.overflow {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body ul > li {
  color: rgb(20, 20, 20);
}

body ul.overflow {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(33, 176, 67);
  text-decoration: rgb(33, 176, 67);
}

body blockquote {
  background-color: rgba(176, 33, 142, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body table {
  color: rgb(20, 20, 20);
  width: 215px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(248, 248, 248);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(248, 248, 248);
}

body td {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

body th {
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

body tr {
  background-color: rgb(240, 240, 240);
}`,
    code: `body code {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

body pre > code > [data-line] {
  border-left-color: rgb(231, 143, 249);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 143, 249);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 143, 249);
  border-left-color: rgb(231, 143, 249);
  border-right-color: rgb(231, 143, 249);
  border-top-color: rgb(231, 143, 249);
}

body pre > code, pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}`,
    images: `body audio {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body figcaption {
  color: rgb(20, 20, 20);
}

body figure {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body input[type=checkbox] {
  border-bottom-color: rgb(33, 176, 67);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(33, 176, 67);
  border-top-color: rgb(33, 176, 67);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}`,
    callouts: `body .callout .callout-title {
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
}

body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 242, 242);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(33, 176, 67);
}

body h1 {
  color: rgb(20, 20, 20);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

body h2 {
  color: rgb(20, 20, 20);
}

body h2.page-title, h2.page-title a {
  color: rgb(20, 20, 20);
}

body h3 {
  color: rgb(20, 20, 20);
}

body h4 {
  color: rgb(20, 20, 20);
}

body h5 {
  color: rgb(20, 20, 20);
}

body h6 {
  color: rgb(20, 20, 20);
}

body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}`,
    footer: `body footer {
  background-color: rgb(244, 242, 242);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

body footer ul li a {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(20, 20, 20);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(68, 68, 68);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body li.section-li > .section .meta {
  color: rgb(68, 68, 68);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
  text-decoration: rgb(68, 68, 68);
}

body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .darkmode svg {
  color: rgb(68, 68, 68);
  stroke: rgb(68, 68, 68);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .breadcrumb-element p {
  color: rgb(33, 176, 67);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

body .metadata {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

body .metadata-properties {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body .navigation-progress {
  background-color: rgb(244, 242, 242);
}

body .page-header h2.page-title {
  color: rgb(20, 20, 20);
}

body abbr {
  color: rgb(20, 20, 20);
  text-decoration: underline dotted rgb(20, 20, 20);
}

body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body input[type=text] {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

body sub {
  color: rgb(20, 20, 20);
}

body summary {
  color: rgb(20, 20, 20);
}

body sup {
  color: rgb(20, 20, 20);
}`,
  },
};
