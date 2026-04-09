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
  --aqua: #8dd9e6 !important;
  --background-accent: #8dd9e6 !important;
  --background-modifier-border: #5C6370 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #ef6f89 !important;
  --background-modifier-error-hover: #ef6f89 !important;
  --background-modifier-error-rgb: 255, 101, 122 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #b3d97e !important;
  --background-primary: #1e1f2b !important;
  --background-primary-alt: #282a3a !important;
  --background-secondary: #282a3a !important;
  --background-secondary-alt: #1e1f2b !important;
  --base-1: #1e1f2b !important;
  --base-2: #282a3a !important;
  --base-3: #3a3d4b !important;
  --bases-cards-background: #1e1f2b !important;
  --bases-cards-cover-background: #282a3a !important;
  --bases-cards-shadow: 0 0 0 1px #5C6370 !important;
  --bases-embed-border-color: #5C6370 !important;
  --bases-group-heading-property-color: #abb2bf !important;
  --bases-table-border-color: #5C6370 !important;
  --bases-table-cell-background-active: #1e1f2b !important;
  --bases-table-cell-background-disabled: #282a3a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #fad872 !important;
  --bases-table-group-background: #282a3a !important;
  --bases-table-header-background: #1e1f2b !important;
  --bases-table-header-color: #abb2bf !important;
  --bases-table-summary-background: #1e1f2b !important;
  --beige: #fdf9f3 !important;
  --black: #000000 !important;
  --blockquote-border-color: #fad872 !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #1e1f2b 65%, transparent) linear-gradient(#1e1f2b, color-mix(in srgb, #1e1f2b 65%, transparent)) !important;
  --button-interactive-normal: #fad872 !important;
  --button-text-normal: #2c292d !important;
  --canvas-background: #1e1f2b !important;
  --canvas-card-label-color: #fad872 !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #fad872 !important;
  --checkbox-border-color-hover: #abb2bf !important;
  --checkbox-color: #fad872 !important;
  --checkbox-color-hover: #ffffff !important;
  --checkbox-marker-color: #1e1f2b !important;
  --checklist-done-color: #abb2bf !important;
  --code-background: #2c292d !important;
  --code-border-color: #5C6370 !important;
  --code-comment: #fad872 !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #abb2bf !important;
  --collapse-icon-color: #fad872 !important;
  --collapse-icon-color-collapsed: #fad872 !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --db-plugin-row-shadow: #282a3a !important;
  --divider-color: #5C6370 !important;
  --divider-color-hover: #fad872 !important;
  --dropdown-background: #1e1f2b !important;
  --dropdown-background-hover: #282a3a !important;
  --embed-block-shadow-hover: 0 0 0 1px #5C6370, inset 0 0 0 1px #5C6370 !important;
  --embed-border-start: 2px solid #fad872 !important;
  --file-header-background: #1e1f2b !important;
  --file-header-background-focused: #1e1f2b !important;
  --flair-background: #1e1f2b !important;
  --flair-color: #ffffff !important;
  --footnote-divider-color: #5C6370 !important;
  --footnote-id-color: #abb2bf !important;
  --footnote-id-color-no-occurrences: #fad872 !important;
  --graph-node: #abb2bf !important;
  --graph-node-focused: #fad872 !important;
  --graph-node-unresolved: #fad872 !important;
  --graph-text: #ffffff !important;
  --gray: #abb2bf !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --gray-3: #2c292d !important;
  --green: #b3d97e !important;
  --h1-color: #b3d97e !important;
  --h2-color: #61afef !important;
  --h3-color: #f19d6d !important;
  --h4-color: #a8a0ee !important;
  --h5-color: #abb2bf !important;
  --heading-formatting: #fad872 !important;
  --highlight: #fad872 !important;
  --hr-color: #5C6370 !important;
  --icon-color: #a8a0ee !important;
  --icon-color-active: #fad872 !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #abb2bf !important;
  --inline-title-color: #b3d97e !important;
  --input-date-separator: #fad872 !important;
  --input-placeholder-color: #fad872 !important;
  --interactive-accent: #fad872 !important;
  --interactive-accent-hover: #ffffff !important;
  --interactive-accent-rgb: 97, 175, 239 !important;
  --interactive-hover: #282a3a !important;
  --interactive-normal: #1e1f2b !important;
  --light: #1e1f2b !important;
  --lightgray: #282a3a !important;
  --link-color: #fad872 !important;
  --link-color-hover: #61afef !important;
  --link-external-color: #fad872 !important;
  --link-external-color-hover: #61afef !important;
  --link-unresolved-color: #fad872 !important;
  --list-marker-color: #fad872 !important;
  --list-marker-color-collapsed: #fad872 !important;
  --list-marker-color-hover: #abb2bf !important;
  --menu-background: #282a3a !important;
  --metadata-border-color: #5C6370 !important;
  --metadata-divider-color: #5C6370 !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #abb2bf !important;
  --metadata-label-text-color-hover: #abb2bf !important;
  --modal-background: #1e1f2b !important;
  --nav-collapse-icon-color: #fad872 !important;
  --nav-collapse-icon-color-collapsed: #fad872 !important;
  --nav-folder-item-color: #fad872 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #fad872 !important;
  --nav-heading-color-collapsed-hover: #abb2bf !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #abb2bf !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #fad872 !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #fad872 !important;
  --nav-tag-color-active: #abb2bf !important;
  --nav-tag-color-hover: #abb2bf !important;
  --orange: #f19d6d !important;
  --oz-fta-folder-pane-file-name-color: #fad872 !important;
  --panel-border-color: #1e1f2b !important;
  --pdf-background: #1e1f2b !important;
  --pdf-page-background: #1e1f2b !important;
  --pdf-shadow: 0 0 0 1px #5C6370 !important;
  --pdf-sidebar-background: #1e1f2b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #5C6370 !important;
  --pill-border-color: #5C6370 !important;
  --pill-color: #abb2bf !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #fad872 !important;
  --pill-color-remove-hover: #fad872 !important;
  --prompt-background: #1e1f2b !important;
  --purple: #a8a0ee !important;
  --raised-background: color-mix(in srgb, #1e1f2b 65%, transparent) linear-gradient(#1e1f2b, color-mix(in srgb, #1e1f2b 65%, transparent)) !important;
  --red: #ef6f89 !important;
  --ribbon-background: #1e1f2b !important;
  --ribbon-background-collapsed: #1e1f2b !important;
  --scrollbar-active-thumb-bg: rgba(40, 42, 58, 0.02) !important;
  --scrollbar-bg: rgba(40, 42, 58, 0.05) !important;
  --scrollbar-thumb-bg: rgba(40, 42, 58, 0.1) !important;
  --search-clear-button-color: #abb2bf !important;
  --search-icon-color: #abb2bf !important;
  --search-result-background: #1e1f2b !important;
  --secondary: #fad872 !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: #282a3a !important;
  --setting-items-border-color: #5C6370 !important;
  --slider-track-background: #5C6370 !important;
  --status-bar-background: #282a3a !important;
  --status-bar-border-color: #5C6370 !important;
  --status-bar-text-color: #abb2bf !important;
  --suggestion-background: #1e1f2b !important;
  --tab-background-active: #1e1f2b !important;
  --tab-container-background: #282a3a !important;
  --tab-outline-color: #5C6370 !important;
  --tab-switcher-background: #282a3a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282a3a, transparent) !important;
  --tab-text-color: #fad872 !important;
  --tab-text-color-active: #abb2bf !important;
  --tab-text-color-focused: #abb2bf !important;
  --tab-text-color-focused-active: #abb2bf !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #fad872 !important;
  --table-add-button-border-color: #5C6370 !important;
  --table-border-color: #5C6370 !important;
  --table-drag-handle-background-active: #fad872 !important;
  --table-drag-handle-color: #fad872 !important;
  --table-drag-handle-color-active: #1e1f2b !important;
  --table-header-border-color: #5C6370 !important;
  --table-header-color: #ffffff !important;
  --table-selection-border-color: #fad872 !important;
  --tag-color: #fad872 !important;
  --tag-color-hover: #fad872 !important;
  --tertiary: #61afef !important;
  --text-accent: #fad872 !important;
  --text-accent-hover: #61afef !important;
  --text-error: #ef6f89 !important;
  --text-error-hover: #ef6f89 !important;
  --text-faint: #fad872 !important;
  --text-highlight: #1e1f2b !important;
  --text-highlight-bg: #fad872 !important;
  --text-muted: #abb2bf !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #1e1f2b !important;
  --text-selection: #61afef !important;
  --textHighlight: #fad872 !important;
  --titlebar-background: #282a3a !important;
  --titlebar-background-focused: #1e1f2b !important;
  --titlebar-border-color: #5C6370 !important;
  --titlebar-text-color: #abb2bf !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --white: #ffffff !important;
  --yellow: #fad872 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 58);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(30, 31, 43);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(76, 120, 204);
  border-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(40, 42, 58);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(92, 99, 112);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 58);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(92, 99, 112);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 58);
  border-left-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(30, 31, 43);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(250, 216, 114);
  color: rgb(30, 31, 43);
  outline: rgb(30, 31, 43) none 0px;
  text-decoration-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(250, 216, 114);
  border-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body p {
  color: rgb(171, 178, 191);
  outline: rgb(171, 178, 191) none 0px;
  text-decoration-color: rgb(171, 178, 191);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(250, 216, 114);
  outline: rgb(250, 216, 114) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(250, 216, 114);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  background-color: rgb(76, 120, 204);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
  font-weight: 700;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
  color: rgb(179, 217, 126);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 216, 114);
  border-left-color: rgb(250, 216, 114);
  border-right-color: rgb(250, 216, 114);
  border-top-color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  margin-left: 30px;
  margin-right: 30px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 58);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body h1 {
  color: rgb(179, 217, 126);
}

html[saved-theme="dark"] body h2 {
  color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(179, 217, 126);
}

html[saved-theme="dark"] body h3 {
  color: rgb(241, 157, 109);
}

html[saved-theme="dark"] body h4 {
  color: rgb(168, 160, 238);
}

html[saved-theme="dark"] body h5 {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(30, 31, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 31, 43);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 216, 114);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 216, 114);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(168, 160, 238);
  border-left-color: rgb(168, 160, 238);
  border-right-color: rgb(168, 160, 238);
  border-top-color: rgb(168, 160, 238);
  color: rgb(168, 160, 238);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(40, 42, 58);
  border-bottom-color: rgb(30, 31, 43);
  border-bottom-width: 1px;
  border-left-color: rgb(30, 31, 43);
  border-right-color: rgb(30, 31, 43);
  border-right-width: 1px;
  border-top-color: rgb(30, 31, 43);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(171, 178, 191);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 178, 191);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(168, 160, 238);
  border-left-color: rgb(168, 160, 238);
  border-right-color: rgb(168, 160, 238);
  border-top-color: rgb(168, 160, 238);
  color: rgb(168, 160, 238);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(168, 160, 238);
  stroke: rgb(168, 160, 238);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(250, 216, 114);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(40, 42, 58);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(40, 42, 58);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(250, 216, 114);
}`,
  },
  light: {
    base: `:root:root {
  --aqua: #8dd9e6 !important;
  --background-accent: #8dd9e6 !important;
  --background-modifier-border: #5C6370 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #ef6f89 !important;
  --background-modifier-error-hover: #ef6f89 !important;
  --background-modifier-error-rgb: 255, 101, 122 !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-success: #b3d97e !important;
  --background-primary: #fdf9f3 !important;
  --background-primary-alt: #fdf9f3 !important;
  --background-secondary: #fdf9f3 !important;
  --background-secondary-alt: #fdf9f3 !important;
  --base-1: #fdf9f3 !important;
  --base-2: #fdf9f3 !important;
  --bases-cards-background: #fdf9f3 !important;
  --bases-cards-cover-background: #fdf9f3 !important;
  --bases-cards-shadow: 0 0 0 1px #5C6370 !important;
  --bases-embed-border-color: #5C6370 !important;
  --bases-group-heading-property-color: #5C6370 !important;
  --bases-table-border-color: #5C6370 !important;
  --bases-table-cell-background-active: #fdf9f3 !important;
  --bases-table-cell-background-disabled: #fdf9f3 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2c292d !important;
  --bases-table-group-background: #fdf9f3 !important;
  --bases-table-header-background: #fdf9f3 !important;
  --bases-table-header-color: #5C6370 !important;
  --bases-table-summary-background: #fdf9f3 !important;
  --black: #000000 !important;
  --blockquote-border-color: #2c292d !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #fdf9f3 65%, transparent) linear-gradient(#fdf9f3, color-mix(in srgb, #fdf9f3 65%, transparent)) !important;
  --button-interactive-normal: #ffffff !important;
  --button-text-normal: #2c292d !important;
  --canvas-background: #fdf9f3 !important;
  --canvas-card-label-color: #f19d6d !important;
  --caret-color: #2c292d !important;
  --checkbox-border-color: #5C6370 !important;
  --checkbox-border-color-hover: #5C6370 !important;
  --checkbox-color: #2c292d !important;
  --checkbox-color-hover: #ffffff !important;
  --checkbox-marker-color: #b3d97e !important;
  --checklist-done-color: #b3d97e !important;
  --code-background: #2c292d !important;
  --code-border-color: #5C6370 !important;
  --code-comment: #f19d6d !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #5C6370 !important;
  --collapse-icon-color: #f19d6d !important;
  --collapse-icon-color-collapsed: #fdf9f3 !important;
  --dark: #2c292d !important;
  --darkgray: #2c292d !important;
  --db-plugin-row-shadow: #eeeae5 !important;
  --divider-color: #5C6370 !important;
  --divider-color-hover: #2c292d !important;
  --dropdown-background-hover: #fdf9f3 !important;
  --embed-block-shadow-hover: 0 0 0 1px #5C6370, inset 0 0 0 1px #5C6370 !important;
  --embed-border-start: 2px solid #2c292d !important;
  --file-header-background: #fdf9f3 !important;
  --file-header-background-focused: #fdf9f3 !important;
  --flair-color: #2c292d !important;
  --footnote-divider-color: #5C6370 !important;
  --footnote-id-color: #5C6370 !important;
  --footnote-id-color-no-occurrences: #f19d6d !important;
  --graph-node: #5C6370 !important;
  --graph-node-focused: #fdf9f3 !important;
  --graph-node-unresolved: #f19d6d !important;
  --graph-text: #2c292d !important;
  --gray: #5C6370 !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --gray-3: #2c292d !important;
  --gray-4: #eeeae5 !important;
  --green: #b3d97e !important;
  --h1-color: #b3d97e !important;
  --h2-color: #61afef !important;
  --h3-color: #f19d6d !important;
  --h4-color: #a8a0ee !important;
  --h5-color: #abb2bf !important;
  --heading-formatting: #f19d6d !important;
  --highlight: #fad872 !important;
  --hr-color: #5C6370 !important;
  --icon-color: #2c292d !important;
  --icon-color-active: #fdf9f3 !important;
  --icon-color-focused: #2c292d !important;
  --icon-color-hover: #5C6370 !important;
  --inline-title-color: #b3d97e !important;
  --input-date-separator: #f19d6d !important;
  --input-placeholder-color: #f19d6d !important;
  --interactive-accent: #2c292d !important;
  --interactive-accent-hover: #ffffff !important;
  --interactive-accent-rgb: 97, 175, 239 !important;
  --interactive-hover: #fdf9f3 !important;
  --light: #fdf9f3 !important;
  --lightgray: #fdf9f3 !important;
  --link-color: #f19d6d !important;
  --link-color-hover: #2c292d !important;
  --link-external-color: #2c292d !important;
  --link-external-color-hover: #2c292d !important;
  --link-unresolved-color: #fdf9f3 !important;
  --list-marker-color: #f19d6d !important;
  --list-marker-color-collapsed: #fdf9f3 !important;
  --list-marker-color-hover: #5C6370 !important;
  --menu-background: #fdf9f3 !important;
  --metadata-border-color: #5C6370 !important;
  --metadata-divider-color: #5C6370 !important;
  --metadata-input-text-color: #2c292d !important;
  --metadata-label-text-color: #5C6370 !important;
  --metadata-label-text-color-hover: #5C6370 !important;
  --modal-background: #fdf9f3 !important;
  --nav-collapse-icon-color: #ef6f89 !important;
  --nav-collapse-icon-color-collapsed: #f19d6d !important;
  --nav-folder-item-color: #2c292d !important;
  --nav-heading-color: #2c292d !important;
  --nav-heading-color-collapsed: #f19d6d !important;
  --nav-heading-color-collapsed-hover: #5C6370 !important;
  --nav-heading-color-hover: #2c292d !important;
  --nav-item-color: #abb2bf !important;
  --nav-item-color-active: #2c292d !important;
  --nav-item-color-highlighted: #fdf9f3 !important;
  --nav-item-color-hover: #2c292d !important;
  --nav-item-color-selected: #2c292d !important;
  --nav-tag-color: #f19d6d !important;
  --nav-tag-color-active: #5C6370 !important;
  --nav-tag-color-hover: #5C6370 !important;
  --orange: #f19d6d !important;
  --oz-fta-file-pane-file-name-color: #2c292d !important;
  --oz-fta-header-background-color: #a8a0ee !important;
  --oz-fta-header-icon-colors: #2c292d !important;
  --panel-border-color: #fdf9f3 !important;
  --pdf-background: #fdf9f3 !important;
  --pdf-page-background: #fdf9f3 !important;
  --pdf-sidebar-background: #fdf9f3 !important;
  --pill-border-color: #5C6370 !important;
  --pill-color: #5C6370 !important;
  --pill-color-hover: #2c292d !important;
  --pill-color-remove: #f19d6d !important;
  --pill-color-remove-hover: #fdf9f3 !important;
  --prompt-background: #fdf9f3 !important;
  --purple: #a8a0ee !important;
  --raised-background: color-mix(in srgb, #fdf9f3 65%, transparent) linear-gradient(#fdf9f3, color-mix(in srgb, #fdf9f3 65%, transparent)) !important;
  --red: #ef6f89 !important;
  --ribbon-background: #fdf9f3 !important;
  --ribbon-background-collapsed: #fdf9f3 !important;
  --scrollbar-active-thumb-bg: rgba(40, 42, 58, 0.02) !important;
  --scrollbar-bg: rgba(40, 42, 58, 0.05) !important;
  --scrollbar-thumb-bg: rgba(40, 42, 58, 0.1) !important;
  --search-clear-button-color: #2c292d !important;
  --search-icon-color: #5C6370 !important;
  --search-result-background: #fdf9f3 !important;
  --secondary: #fdf9f3 !important;
  --setting-group-heading-color: #2c292d !important;
  --setting-items-background: #fdf9f3 !important;
  --setting-items-border-color: #5C6370 !important;
  --slider-track-background: #5C6370 !important;
  --status-bar-background: #fdf9f3 !important;
  --status-bar-border-color: #5C6370 !important;
  --status-bar-text-color: #5C6370 !important;
  --suggestion-background: #fdf9f3 !important;
  --tab-background-active: #fdf9f3 !important;
  --tab-container-background: #fdf9f3 !important;
  --tab-outline-color: #5C6370 !important;
  --tab-switcher-background: #fdf9f3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf9f3, transparent) !important;
  --tab-text-color: #abb2bf !important;
  --tab-text-color-active: #2c292d !important;
  --tab-text-color-active-focused: #abb2bf !important;
  --tab-text-color-focused: #5C6370 !important;
  --tab-text-color-focused-active: #5C6370 !important;
  --tab-text-color-focused-active-current: #2c292d !important;
  --tab-text-color-focused-highlighted: #fdf9f3 !important;
  --table-add-button-border-color: #5C6370 !important;
  --table-border-color: #5C6370 !important;
  --table-drag-handle-background-active: #2c292d !important;
  --table-drag-handle-color: #f19d6d !important;
  --table-drag-handle-color-active: #fdf9f3 !important;
  --table-header-border-color: #5C6370 !important;
  --table-header-color: #2c292d !important;
  --table-selection-border-color: #2c292d !important;
  --tag-color: #2c292d !important;
  --tag-color-hover: #fdf9f3 !important;
  --tertiary: #2c292d !important;
  --text-accent: #fdf9f3 !important;
  --text-accent-hover: #2c292d !important;
  --text-error: #ef6f89 !important;
  --text-error-hover: #ef6f89 !important;
  --text-faint: #f19d6d !important;
  --text-highlight: #2c292d !important;
  --text-highlight-bg: #fad872 !important;
  --text-muted: #5C6370 !important;
  --text-normal: #2c292d !important;
  --text-on-accent: #fdf9f3 !important;
  --text-selection: #61afef !important;
  --textHighlight: #fad872 !important;
  --titlebar-background: #fdf9f3 !important;
  --titlebar-background-focused: #fdf9f3 !important;
  --titlebar-border-color: #5C6370 !important;
  --titlebar-text-color: #5C6370 !important;
  --titlebar-text-color-focused: #2c292d !important;
  --vault-profile-color: #2c292d !important;
  --vault-profile-color-hover: #2c292d !important;
  --white: #ffffff !important;
  --yellow: #fad872 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(76, 120, 204);
  border-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 249, 243);
  border-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 243);
  border-left-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 249, 243);
  color: rgb(44, 41, 45);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(250, 216, 114);
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body del {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(44, 41, 45);
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(92, 99, 112);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(44, 41, 45);
  border-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body p {
  color: rgb(92, 99, 112);
  outline: rgb(92, 99, 112) none 0px;
  text-decoration-color: rgb(92, 99, 112);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(241, 157, 109);
  outline: rgb(241, 157, 109) none 0px;
  text-decoration-color: rgb(241, 157, 109);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(253, 249, 243);
  outline: rgb(253, 249, 243) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body dt {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ol > li {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ul > li {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(241, 157, 109);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body table {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body th {
  background-color: rgb(76, 120, 204);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
  font-weight: 700;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
  color: rgb(179, 217, 126);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(250, 216, 114);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 216, 114);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 216, 114);
  border-left-color: rgb(250, 216, 114);
  border-right-color: rgb(250, 216, 114);
  border-top-color: rgb(250, 216, 114);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body figcaption {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(179, 217, 126);
  border-left-color: rgb(179, 217, 126);
  border-right-color: rgb(179, 217, 126);
  border-top-color: rgb(179, 217, 126);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(44, 41, 45);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-right-style: solid;
  border-top-color: rgb(44, 41, 45);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  margin-left: 30px;
  margin-right: 30px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(44, 41, 45);
  text-decoration-color: rgb(44, 41, 45);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(44, 41, 45);
  outline: rgb(44, 41, 45) none 0px;
  text-decoration-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 243);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body h1 {
  color: rgb(179, 217, 126);
}

html[saved-theme="light"] body h2 {
  color: rgb(97, 175, 239);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(179, 217, 126);
}

html[saved-theme="light"] body h3 {
  color: rgb(241, 157, 109);
}

html[saved-theme="light"] body h4 {
  color: rgb(168, 160, 238);
}

html[saved-theme="light"] body h5 {
  color: rgb(171, 178, 191);
}

html[saved-theme="light"] body h6 {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 249, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 249, 243);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 41, 45);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(44, 41, 45);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 249, 243);
  border-bottom-color: rgb(253, 249, 243);
  border-bottom-width: 1px;
  border-left-color: rgb(253, 249, 243);
  border-right-color: rgb(253, 249, 243);
  border-right-width: 1px;
  border-top-color: rgb(253, 249, 243);
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(92, 99, 112);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 178, 191);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(171, 178, 191);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(171, 178, 191);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(44, 41, 45);
  stroke: rgb(44, 41, 45);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(241, 157, 109);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 249, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body abbr {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(92, 99, 112);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(44, 41, 45);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(44, 41, 45);
  border-left-color: rgb(44, 41, 45);
  border-right-color: rgb(44, 41, 45);
  border-top-color: rgb(44, 41, 45);
}

html[saved-theme="light"] body sub {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body summary {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body sup {
  color: rgb(44, 41, 45);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(253, 249, 243);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(44, 41, 45);
}`,
  },
};
