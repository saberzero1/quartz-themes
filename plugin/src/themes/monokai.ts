import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "monokai",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --aqua: #8dd9e6;
  --background-accent: #8dd9e6;
  --background-modifier-border: #5C6370;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #ef6f89;
  --background-modifier-error-hover: #ef6f89;
  --background-modifier-error-rgb: 255, 101, 122;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #b3d97e;
  --background-primary: #1e1f2b;
  --background-primary-alt: #282a3a;
  --background-secondary: #282a3a;
  --background-secondary-alt: #1e1f2b;
  --base-1: #1e1f2b;
  --base-2: #282a3a;
  --base-3: #3a3d4b;
  --bases-cards-background: #1e1f2b;
  --bases-cards-cover-background: #282a3a;
  --bases-cards-shadow: 0 0 0 1px #5C6370;
  --bases-embed-border-color: #5C6370;
  --bases-group-heading-property-color: #abb2bf;
  --bases-table-border-color: #5C6370;
  --bases-table-cell-background-active: #1e1f2b;
  --bases-table-cell-background-disabled: #282a3a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #fad872;
  --bases-table-group-background: #282a3a;
  --bases-table-header-background: #1e1f2b;
  --bases-table-header-color: #abb2bf;
  --bases-table-summary-background: #1e1f2b;
  --beige: #fdf9f3;
  --black: #000000;
  --blockquote-border-color: #fad872;
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #1e1f2b 65%, transparent) linear-gradient(#1e1f2b, color-mix(in srgb, #1e1f2b 65%, transparent));
  --button-interactive-normal: #fad872;
  --button-text-normal: #2c292d;
  --canvas-background: #1e1f2b;
  --canvas-card-label-color: #fad872;
  --caret-color: #ffffff;
  --checkbox-border-color: #fad872;
  --checkbox-border-color-hover: #abb2bf;
  --checkbox-color: #fad872;
  --checkbox-color-hover: #ffffff;
  --checkbox-marker-color: #1e1f2b;
  --checklist-done-color: #abb2bf;
  --code-background: #2c292d;
  --code-border-color: #5C6370;
  --code-comment: #fad872;
  --code-normal: #ffffff;
  --code-punctuation: #abb2bf;
  --collapse-icon-color: #fad872;
  --collapse-icon-color-collapsed: #fad872;
  --db-plugin-row-shadow: #282a3a;
  --divider-color: #5C6370;
  --divider-color-hover: #fad872;
  --dropdown-background: #1e1f2b;
  --dropdown-background-hover: #282a3a;
  --embed-block-shadow-hover: 0 0 0 1px #5C6370, inset 0 0 0 1px #5C6370;
  --embed-border-start: 2px solid #fad872;
  --file-header-background: #1e1f2b;
  --file-header-background-focused: #1e1f2b;
  --flair-background: #1e1f2b;
  --flair-color: #ffffff;
  --footnote-divider-color: #5C6370;
  --footnote-id-color: #abb2bf;
  --footnote-id-color-no-occurrences: #fad872;
  --graph-node: #abb2bf;
  --graph-node-focused: #fad872;
  --graph-node-unresolved: #fad872;
  --graph-text: #ffffff;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --gray-3: #2c292d;
  --green: #b3d97e;
  --h1-color: #b3d97e;
  --h2-color: #61afef;
  --h3-color: #f19d6d;
  --h4-color: #a8a0ee;
  --h5-color: #abb2bf;
  --heading-formatting: #fad872;
  --hr-color: #5C6370;
  --icon-color: #a8a0ee;
  --icon-color-active: #fad872;
  --icon-color-focused: #ffffff;
  --icon-color-hover: #abb2bf;
  --inline-title-color: #b3d97e;
  --input-date-separator: #fad872;
  --input-placeholder-color: #fad872;
  --interactive-accent: #fad872;
  --interactive-accent-hover: #ffffff;
  --interactive-accent-rgb: 97, 175, 239;
  --interactive-hover: #282a3a;
  --interactive-normal: #1e1f2b;
  --link-color: #fad872;
  --link-color-hover: #61afef;
  --link-external-color: #fad872;
  --link-external-color-hover: #61afef;
  --link-unresolved-color: #fad872;
  --list-marker-color: #fad872;
  --list-marker-color-collapsed: #fad872;
  --list-marker-color-hover: #abb2bf;
  --menu-background: #282a3a;
  --metadata-border-color: #5C6370;
  --metadata-divider-color: #5C6370;
  --metadata-input-text-color: #ffffff;
  --metadata-label-text-color: #abb2bf;
  --metadata-label-text-color-hover: #abb2bf;
  --modal-background: #1e1f2b;
  --nav-collapse-icon-color: #fad872;
  --nav-collapse-icon-color-collapsed: #fad872;
  --nav-folder-item-color: #fad872;
  --nav-heading-color: #ffffff;
  --nav-heading-color-collapsed: #fad872;
  --nav-heading-color-collapsed-hover: #abb2bf;
  --nav-heading-color-hover: #ffffff;
  --nav-item-color: #abb2bf;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #fad872;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #ffffff;
  --nav-tag-color: #fad872;
  --nav-tag-color-active: #abb2bf;
  --nav-tag-color-hover: #abb2bf;
  --orange: #f19d6d;
  --oz-fta-folder-pane-file-name-color: #fad872;
  --panel-border-color: #1e1f2b;
  --pdf-background: #1e1f2b;
  --pdf-page-background: #1e1f2b;
  --pdf-shadow: 0 0 0 1px #5C6370;
  --pdf-sidebar-background: #1e1f2b;
  --pdf-thumbnail-shadow: 0 0 0 1px #5C6370;
  --pill-border-color: #5C6370;
  --pill-color: #abb2bf;
  --pill-color-hover: #ffffff;
  --pill-color-remove: #fad872;
  --pill-color-remove-hover: #fad872;
  --prompt-background: #1e1f2b;
  --purple: #a8a0ee;
  --raised-background: color-mix(in srgb, #1e1f2b 65%, transparent) linear-gradient(#1e1f2b, color-mix(in srgb, #1e1f2b 65%, transparent));
  --red: #ef6f89;
  --ribbon-background: #1e1f2b;
  --ribbon-background-collapsed: #1e1f2b;
  --scrollbar-active-thumb-bg: rgba(40, 42, 58, 0.02);
  --scrollbar-bg: rgba(40, 42, 58, 0.05);
  --scrollbar-thumb-bg: rgba(40, 42, 58, 0.1);
  --search-clear-button-color: #abb2bf;
  --search-icon-color: #abb2bf;
  --search-result-background: #1e1f2b;
  --setting-group-heading-color: #ffffff;
  --setting-items-background: #282a3a;
  --setting-items-border-color: #5C6370;
  --slider-track-background: #5C6370;
  --status-bar-background: #282a3a;
  --status-bar-border-color: #5C6370;
  --status-bar-text-color: #abb2bf;
  --suggestion-background: #1e1f2b;
  --tab-background-active: #1e1f2b;
  --tab-container-background: #282a3a;
  --tab-outline-color: #5C6370;
  --tab-switcher-background: #282a3a;
  --tab-switcher-menubar-background: linear-gradient(to top, #282a3a, transparent);
  --tab-text-color: #fad872;
  --tab-text-color-active: #abb2bf;
  --tab-text-color-focused: #abb2bf;
  --tab-text-color-focused-active: #abb2bf;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: #fad872;
  --table-add-button-border-color: #5C6370;
  --table-border-color: #5C6370;
  --table-drag-handle-background-active: #fad872;
  --table-drag-handle-color: #fad872;
  --table-drag-handle-color-active: #1e1f2b;
  --table-header-border-color: #5C6370;
  --table-header-color: #ffffff;
  --table-selection-border-color: #fad872;
  --tag-color: #fad872;
  --tag-color-hover: #fad872;
  --text-accent: #fad872;
  --text-accent-hover: #61afef;
  --text-error: #ef6f89;
  --text-error-hover: #ef6f89;
  --text-faint: #fad872;
  --text-highlight: #1e1f2b;
  --text-highlight-bg: #fad872;
  --text-muted: #abb2bf;
  --text-normal: #ffffff;
  --text-on-accent: #1e1f2b;
  --text-selection: #61afef;
  --titlebar-background: #282a3a;
  --titlebar-background-focused: #1e1f2b;
  --titlebar-border-color: #5C6370;
  --titlebar-text-color: #abb2bf;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #ffffff;
  --vault-profile-color-hover: #ffffff;
  --white: #ffffff;
  --yellow: #fad872;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 58);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 31, 43);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 58);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(92, 99, 112);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 58);
  border-left-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(30, 31, 43);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgb(250, 216, 114);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration: rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}`,
    links: `body a.external, footer a {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration: underline rgb(250, 216, 114);
  text-decoration-color: rgb(250, 216, 114);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration: rgb(250, 216, 114);
  text-decoration-color: rgb(250, 216, 114);
}

body a.internal.broken {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(30, 31, 43);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(30, 31, 43);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(250, 216, 114);
  text-decoration: rgb(250, 216, 114);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

body th {
  background-color: rgb(76, 120, 204);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
  color: rgb(179, 217, 126);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(250, 216, 114);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 216, 114);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 216, 114);
  border-left-color: rgb(250, 216, 114);
  border-right-color: rgb(250, 216, 114);
  border-top-color: rgb(250, 216, 114);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 42, 58);
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(92, 99, 112);
  border-left-width: 5px;
  border-right-color: rgb(92, 99, 112);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(92, 99, 112);
  border-left-width: 5px;
  border-right-color: rgb(92, 99, 112);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(171, 178, 191);
  text-decoration: line-through rgb(171, 178, 191);
  text-decoration-color: rgb(171, 178, 191);
}

body input[type=checkbox] {
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 43);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 58);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(250, 216, 114);
}

body h1 {
  color: rgb(179, 217, 126);
}

body h2 {
  color: rgb(97, 175, 239);
}

body h2.page-title, h2.page-title a {
  color: rgb(179, 217, 126);
}

body h3 {
  color: rgb(241, 157, 109);
}

body h4 {
  color: rgb(168, 160, 238);
}

body h5 {
  color: rgb(171, 178, 191);
}

body h6 {
  color: rgb(255, 255, 255);
}

body hr {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 216, 114);
  text-decoration: rgb(250, 216, 114);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 216, 114);
  text-decoration: rgb(250, 216, 114);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(168, 160, 238);
  border-left-color: rgb(168, 160, 238);
  border-right-color: rgb(168, 160, 238);
  border-top-color: rgb(168, 160, 238);
  color: rgb(168, 160, 238);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 58);
  border-bottom-color: rgb(30, 31, 43);
  border-bottom-width: 1px;
  border-left-color: rgb(30, 31, 43);
  border-right-color: rgb(30, 31, 43);
  border-right-width: 1px;
  border-top-color: rgb(30, 31, 43);
  color: rgb(171, 178, 191);
}

body footer ul li a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 178, 191);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(171, 178, 191);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(168, 160, 238);
  border-left-color: rgb(168, 160, 238);
  border-right-color: rgb(168, 160, 238);
  border-top-color: rgb(168, 160, 238);
  color: rgb(168, 160, 238);
}

body .darkmode svg {
  color: rgb(168, 160, 238);
  stroke: rgb(168, 160, 238);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .breadcrumb-element p {
  color: rgb(250, 216, 114);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(171, 178, 191);
}

body .metadata-properties {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body .navigation-progress {
  background-color: rgb(40, 42, 58);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body kbd {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --aqua: #8dd9e6;
  --background-accent: #8dd9e6;
  --background-modifier-border: #5C6370;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #ef6f89;
  --background-modifier-error-hover: #ef6f89;
  --background-modifier-error-rgb: 255, 101, 122;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-success: #b3d97e;
  --background-primary: #fdf9f3;
  --background-primary-alt: #fdf9f3;
  --background-secondary: #fdf9f3;
  --background-secondary-alt: #fdf9f3;
  --base-1: #fdf9f3;
  --base-2: #fdf9f3;
  --bases-cards-background: #fdf9f3;
  --bases-cards-cover-background: #fdf9f3;
  --bases-cards-shadow: 0 0 0 1px #5C6370;
  --bases-embed-border-color: #5C6370;
  --bases-group-heading-property-color: #5C6370;
  --bases-table-border-color: #5C6370;
  --bases-table-cell-background-active: #fdf9f3;
  --bases-table-cell-background-disabled: #fdf9f3;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2c292d;
  --bases-table-group-background: #fdf9f3;
  --bases-table-header-background: #fdf9f3;
  --bases-table-header-color: #5C6370;
  --bases-table-summary-background: #fdf9f3;
  --black: #000000;
  --blockquote-border-color: #2c292d;
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #fdf9f3 65%, transparent) linear-gradient(#fdf9f3, color-mix(in srgb, #fdf9f3 65%, transparent));
  --button-interactive-normal: #ffffff;
  --button-text-normal: #2c292d;
  --canvas-background: #fdf9f3;
  --canvas-card-label-color: #f19d6d;
  --caret-color: #2c292d;
  --checkbox-border-color: #5C6370;
  --checkbox-border-color-hover: #5C6370;
  --checkbox-color: #2c292d;
  --checkbox-color-hover: #ffffff;
  --checkbox-marker-color: #b3d97e;
  --checklist-done-color: #b3d97e;
  --code-background: #2c292d;
  --code-border-color: #5C6370;
  --code-comment: #f19d6d;
  --code-normal: #ffffff;
  --code-punctuation: #5C6370;
  --collapse-icon-color: #f19d6d;
  --collapse-icon-color-collapsed: #fdf9f3;
  --db-plugin-row-shadow: #eeeae5;
  --divider-color: #5C6370;
  --divider-color-hover: #2c292d;
  --dropdown-background-hover: #fdf9f3;
  --embed-block-shadow-hover: 0 0 0 1px #5C6370, inset 0 0 0 1px #5C6370;
  --embed-border-start: 2px solid #2c292d;
  --file-header-background: #fdf9f3;
  --file-header-background-focused: #fdf9f3;
  --flair-color: #2c292d;
  --footnote-divider-color: #5C6370;
  --footnote-id-color: #5C6370;
  --footnote-id-color-no-occurrences: #f19d6d;
  --graph-node: #5C6370;
  --graph-node-focused: #fdf9f3;
  --graph-node-unresolved: #f19d6d;
  --graph-text: #2c292d;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --gray-3: #2c292d;
  --gray-4: #eeeae5;
  --green: #b3d97e;
  --h1-color: #b3d97e;
  --h2-color: #61afef;
  --h3-color: #f19d6d;
  --h4-color: #a8a0ee;
  --h5-color: #abb2bf;
  --heading-formatting: #f19d6d;
  --hr-color: #5C6370;
  --icon-color: #2c292d;
  --icon-color-active: #fdf9f3;
  --icon-color-focused: #2c292d;
  --icon-color-hover: #5C6370;
  --inline-title-color: #b3d97e;
  --input-date-separator: #f19d6d;
  --input-placeholder-color: #f19d6d;
  --interactive-accent: #2c292d;
  --interactive-accent-hover: #ffffff;
  --interactive-accent-rgb: 97, 175, 239;
  --interactive-hover: #fdf9f3;
  --link-color: #f19d6d;
  --link-color-hover: #2c292d;
  --link-external-color: #2c292d;
  --link-external-color-hover: #2c292d;
  --link-unresolved-color: #fdf9f3;
  --list-marker-color: #f19d6d;
  --list-marker-color-collapsed: #fdf9f3;
  --list-marker-color-hover: #5C6370;
  --menu-background: #fdf9f3;
  --metadata-border-color: #5C6370;
  --metadata-divider-color: #5C6370;
  --metadata-input-text-color: #2c292d;
  --metadata-label-text-color: #5C6370;
  --metadata-label-text-color-hover: #5C6370;
  --modal-background: #fdf9f3;
  --nav-collapse-icon-color: #ef6f89;
  --nav-collapse-icon-color-collapsed: #f19d6d;
  --nav-folder-item-color: #2c292d;
  --nav-heading-color: #2c292d;
  --nav-heading-color-collapsed: #f19d6d;
  --nav-heading-color-collapsed-hover: #5C6370;
  --nav-heading-color-hover: #2c292d;
  --nav-item-color: #abb2bf;
  --nav-item-color-active: #2c292d;
  --nav-item-color-highlighted: #fdf9f3;
  --nav-item-color-hover: #2c292d;
  --nav-item-color-selected: #2c292d;
  --nav-tag-color: #f19d6d;
  --nav-tag-color-active: #5C6370;
  --nav-tag-color-hover: #5C6370;
  --orange: #f19d6d;
  --oz-fta-file-pane-file-name-color: #2c292d;
  --oz-fta-header-background-color: #a8a0ee;
  --oz-fta-header-icon-colors: #2c292d;
  --panel-border-color: #fdf9f3;
  --pdf-background: #fdf9f3;
  --pdf-page-background: #fdf9f3;
  --pdf-sidebar-background: #fdf9f3;
  --pill-border-color: #5C6370;
  --pill-color: #5C6370;
  --pill-color-hover: #2c292d;
  --pill-color-remove: #f19d6d;
  --pill-color-remove-hover: #fdf9f3;
  --prompt-background: #fdf9f3;
  --purple: #a8a0ee;
  --raised-background: color-mix(in srgb, #fdf9f3 65%, transparent) linear-gradient(#fdf9f3, color-mix(in srgb, #fdf9f3 65%, transparent));
  --red: #ef6f89;
  --ribbon-background: #fdf9f3;
  --ribbon-background-collapsed: #fdf9f3;
  --scrollbar-active-thumb-bg: rgba(40, 42, 58, 0.02);
  --scrollbar-bg: rgba(40, 42, 58, 0.05);
  --scrollbar-thumb-bg: rgba(40, 42, 58, 0.1);
  --search-clear-button-color: #2c292d;
  --search-icon-color: #5C6370;
  --search-result-background: #fdf9f3;
  --setting-group-heading-color: #2c292d;
  --setting-items-background: #fdf9f3;
  --setting-items-border-color: #5C6370;
  --slider-track-background: #5C6370;
  --status-bar-background: #fdf9f3;
  --status-bar-border-color: #5C6370;
  --status-bar-text-color: #5C6370;
  --suggestion-background: #fdf9f3;
  --tab-background-active: #fdf9f3;
  --tab-container-background: #fdf9f3;
  --tab-outline-color: #5C6370;
  --tab-switcher-background: #fdf9f3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf9f3, transparent);
  --tab-text-color: #abb2bf;
  --tab-text-color-active: #2c292d;
  --tab-text-color-active-focused: #abb2bf;
  --tab-text-color-focused: #5C6370;
  --tab-text-color-focused-active: #5C6370;
  --tab-text-color-focused-active-current: #2c292d;
  --tab-text-color-focused-highlighted: #fdf9f3;
  --table-add-button-border-color: #5C6370;
  --table-border-color: #5C6370;
  --table-drag-handle-background-active: #2c292d;
  --table-drag-handle-color: #f19d6d;
  --table-drag-handle-color-active: #fdf9f3;
  --table-header-border-color: #5C6370;
  --table-header-color: #2c292d;
  --table-selection-border-color: #2c292d;
  --tag-color: #2c292d;
  --tag-color-hover: #fdf9f3;
  --text-accent: #fdf9f3;
  --text-accent-hover: #2c292d;
  --text-error: #ef6f89;
  --text-error-hover: #ef6f89;
  --text-faint: #f19d6d;
  --text-highlight: #2c292d;
  --text-highlight-bg: #fad872;
  --text-muted: #5C6370;
  --text-normal: #2c292d;
  --text-on-accent: #fdf9f3;
  --text-selection: #61afef;
  --titlebar-background: #fdf9f3;
  --titlebar-background-focused: #fdf9f3;
  --titlebar-border-color: #5C6370;
  --titlebar-text-color: #5C6370;
  --titlebar-text-color-focused: #2c292d;
  --vault-profile-color: #2c292d;
  --vault-profile-color-hover: #2c292d;
  --white: #ffffff;
  --yellow: #fad872;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(92, 99, 112);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 243);
  border-left-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

body div#quartz-root {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}`,
    typography: `body .page article p > b, b {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body .page article p > em, em {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body .page article p > i, i {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body .page article p > strong, strong {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body .text-highlight {
  background-color: rgb(250, 216, 114);
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body del {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: line-through rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body p {
  color: rgb(92, 99, 112);
  outline: rgb(92, 99, 112) none 0px;
  text-decoration: rgb(92, 99, 112);
  text-decoration-color: rgb(92, 99, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: underline rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 157, 109);
  outline: rgb(241, 157, 109) none 0px;
  text-decoration: rgb(241, 157, 109);
  text-decoration-color: rgb(241, 157, 109);
}

body a.internal.broken {
  color: rgb(253, 249, 243);
  outline: rgb(253, 249, 243) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(44, 41, 45);
}

body dt {
  color: rgb(44, 41, 45);
}

body ol > li {
  color: rgb(44, 41, 45);
}

body ol.overflow {
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body ul > li {
  color: rgb(44, 41, 45);
}

body ul.overflow {
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(241, 157, 109);
  text-decoration: rgb(241, 157, 109);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body table {
  color: rgb(44, 41, 45);
}

body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

body th {
  background-color: rgb(76, 120, 204);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
  color: rgb(179, 217, 126);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

body pre > code > [data-line] {
  border-left-color: rgb(250, 216, 114);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 216, 114);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 216, 114);
  border-left-color: rgb(250, 216, 114);
  border-right-color: rgb(250, 216, 114);
  border-top-color: rgb(250, 216, 114);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body figcaption {
  color: rgb(44, 41, 45);
}

body figure {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body img {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body video {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    embeds: `body .file-embed {
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

body .transclude {
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(92, 99, 112);
  border-left-width: 5px;
  border-right-color: rgb(92, 99, 112);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(92, 99, 112);
  border-left-width: 5px;
  border-right-color: rgb(92, 99, 112);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(179, 217, 126);
  text-decoration: line-through rgb(179, 217, 126);
  text-decoration-color: rgb(179, 217, 126);
}

body input[type=checkbox] {
  border-bottom-color: rgb(92, 99, 112);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='*'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='-'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='/'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='>'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='?'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='I'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='S'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='b'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='c'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='d'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='f'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='i'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='k'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='l'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='p'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='u'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body li.task-list-item[data-task='w'] {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 249, 243);
}

body .search > .search-container > .search-space > * {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(44, 41, 45);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 243);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(44, 41, 45);
}

body a.internal.tag-link::before {
  color: rgb(44, 41, 45);
}

body h1 {
  color: rgb(179, 217, 126);
}

body h2 {
  color: rgb(97, 175, 239);
}

body h2.page-title, h2.page-title a {
  color: rgb(179, 217, 126);
}

body h3 {
  color: rgb(241, 157, 109);
}

body h4 {
  color: rgb(168, 160, 238);
}

body h5 {
  color: rgb(171, 178, 191);
}

body h6 {
  color: rgb(44, 41, 45);
}

body hr {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 41, 45);
  text-decoration: rgb(44, 41, 45);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}`,
    footer: `body footer {
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(253, 249, 243);
  border-bottom-width: 1px;
  border-left-color: rgb(253, 249, 243);
  border-right-color: rgb(253, 249, 243);
  border-right-width: 1px;
  border-top-color: rgb(253, 249, 243);
  color: rgb(92, 99, 112);
}

body footer ul li a {
  color: rgb(92, 99, 112);
  text-decoration: rgb(92, 99, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(44, 41, 45);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 178, 191);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body li.section-li > .section .meta {
  color: rgb(171, 178, 191);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
  text-decoration: rgb(171, 178, 191);
}

body ul.section-ul {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

body .darkmode svg {
  color: rgb(44, 41, 45);
  stroke: rgb(44, 41, 45);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

body .breadcrumb-element p {
  color: rgb(241, 157, 109);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

body .metadata {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

body .metadata-properties {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

body .navigation-progress {
  background-color: rgb(253, 249, 243);
}

body .page-header h2.page-title {
  color: rgb(44, 41, 45);
}

body abbr {
  color: rgb(44, 41, 45);
  text-decoration: underline dotted rgb(44, 41, 45);
}

body details {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body input[type=text] {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

body kbd {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

body sub {
  color: rgb(44, 41, 45);
}

body summary {
  color: rgb(44, 41, 45);
}

body sup {
  color: rgb(44, 41, 45);
}`,
  },
};
