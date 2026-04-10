import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "blood-rush",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #111111 !important;
  --background-modifier-border-focus: #A82424 !important;
  --background-modifier-border-hover: #030303 !important;
  --background-modifier-form-field: #111111 !important;
  --background-modifier-form-field-hover: #111111 !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #111111 !important;
  --background-secondary: #111111 !important;
  --background-secondary-alt: #111111 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #111111 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #111111 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #030303 !important;
  --bases-embed-border-color: #111111 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #aaa !important;
  --bases-table-border-color: #111111 !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #111111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #111111 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-header-color: #aaa !important;
  --bases-table-summary-background: #111111 !important;
  --blur-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --bodyFont: 'segoe ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111 !important;
  --canvas-card-label-color: #aaa !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #111111 !important;
  --caret-color: #aaa !important;
  --checkbox-border-color: #99999977 !important;
  --checkbox-border-color-hover: #aaa !important;
  --checkbox-color: #999 !important;
  --checkbox-color-hover: #aaa !important;
  --checkbox-marker-color: #111111 !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #aaa !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #111111 !important;
  --code-border-color: #111111 !important;
  --code-comment: #aaa !important;
  --code-normal: #aaa !important;
  --code-punctuation: #aaa !important;
  --code-radius: 0px !important;
  --codeFont: 'segoe ui', sans-serif !important;
  --collapse-icon-color: #aaa !important;
  --collapse-icon-color-collapsed: #A82424 !important;
  --color-base-00: #111111 !important;
  --color-base-05: #111111 !important;
  --color-base-10: #111111 !important;
  --color-base-100: #aaa !important;
  --color-base-20: #111111 !important;
  --color-base-25: #111111 !important;
  --color-base-30: #111111 !important;
  --color-base-35: #030303 !important;
  --color-base-40: #A82424 !important;
  --color-base-50: #aaa !important;
  --color-base-60: #A82424 !important;
  --color-base-70: #aaa !important;
  --dark: #aaa !important;
  --darkgray: #aaa !important;
  --divider-color: transparent !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #030303 !important;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111 !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-line-width: 600px !important;
  --flair-background: #191919 !important;
  --flair-color: #aaa !important;
  --font-mermaid: 'segoe ui', sans-serif !important;
  --font-text: 'segoe ui', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #111111 !important;
  --footnote-id-color: #aaa !important;
  --footnote-id-color-no-occurrences: #aaa !important;
  --footnote-radius: 0px !important;
  --graph-line: #030303 !important;
  --graph-node: #aaa !important;
  --graph-node-focused: #A82424 !important;
  --graph-node-unresolved: #aaa !important;
  --graph-text: #aaa !important;
  --gray: #aaa !important;
  --headerFont: 'segoe ui', sans-serif !important;
  --heading-formatting: #aaa !important;
  --highlight: transparent !important;
  --hr-color: #3d424180 !important;
  --hr-thickness: 1px !important;
  --icon-color: #aaa !important;
  --icon-color-active: #A82424 !important;
  --icon-color-focused: #A82424 !important;
  --icon-color-hover: #999 !important;
  --inline-title-color: #A82424 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #aaa !important;
  --input-placeholder-color: #aaa !important;
  --input-radius: 0px !important;
  --interactive-hover: #030303 !important;
  --interactive-normal: #191919 !important;
  --light: #111111 !important;
  --lightgray: #111111 !important;
  --link-color: #A82424 !important;
  --link-color-hover: #999 !important;
  --link-external-color: #A82424 !important;
  --link-external-color-hover: #999 !important;
  --link-unresolved-color: #A82424 !important;
  --list-marker-color: #aaa !important;
  --list-marker-color-collapsed: #A82424 !important;
  --list-marker-color-hover: #aaa !important;
  --menu-background: #111111 !important;
  --menu-border-color: #030303 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #111111 !important;
  --metadata-divider-color: #111111 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #aaa !important;
  --metadata-label-text-color: #aaa !important;
  --metadata-label-text-color-hover: #aaa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303 !important;
  --modal-background: #111111 !important;
  --modal-border-color: #A82424 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #9999998a !important;
  --nav-collapse-icon-color-collapsed: #aaa !important;
  --nav-heading-color: #aaa !important;
  --nav-heading-color-collapsed: #aaa !important;
  --nav-heading-color-collapsed-hover: #aaa !important;
  --nav-heading-color-hover: #aaa !important;
  --nav-item-background-active: #111111 !important;
  --nav-item-background-hover: #A82424 !important;
  --nav-item-color: #aaa !important;
  --nav-item-color-active: #A82424 !important;
  --nav-item-color-highlighted: #A82424 !important;
  --nav-item-color-hover: #111111 !important;
  --nav-item-color-selected: #aaa !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #aaa !important;
  --nav-tag-color-active: #aaa !important;
  --nav-tag-color-hover: #aaa !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-shadow: 0 0 0 1px #111111 !important;
  --pdf-sidebar-background: #111111 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #111111 !important;
  --pill-border-color: #111111 !important;
  --pill-border-color-hover: #030303 !important;
  --pill-color: #aaa !important;
  --pill-color-hover: #aaa !important;
  --pill-color-remove: #aaa !important;
  --pill-color-remove-hover: #A82424 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #111111 !important;
  --prompt-border-color: #A82424 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #191919 65%, transparent) linear-gradient(#191919, color-mix(in srgb, #191919 65%, transparent)) !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #aaa !important;
  --search-icon-color: #aaa !important;
  --search-result-background: #111111 !important;
  --secondary: #A82424 !important;
  --setting-group-heading-color: #aaa !important;
  --setting-items-background: #111111 !important;
  --setting-items-border-color: #111111 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #030303 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #aaa !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #aaa !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #111111 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-text-color: #aaa !important;
  --tab-text-color-active: #aaa !important;
  --tab-text-color-focused: #aaa !important;
  --tab-text-color-focused-active: #aaa !important;
  --tab-text-color-focused-active-current: #999 !important;
  --tab-text-color-focused-highlighted: #A82424 !important;
  --table-add-button-border-color: #111111 !important;
  --table-border-color: #111111 !important;
  --table-drag-handle-color: #aaa !important;
  --table-header-border-color: #111111 !important;
  --table-header-color: #aaa !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: #191919 !important;
  --tag-background-hover: #A82424 !important;
  --tag-color: #aaa !important;
  --tag-color-hover: #191919 !important;
  --tag-radius: 0px !important;
  --tertiary: #999 !important;
  --text-accent: #A82424 !important;
  --text-accent-hover: #999 !important;
  --text-faint: #aaa !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #aaa !important;
  --text-normal: #aaa !important;
  --textHighlight: transparent !important;
  --titleFont: 'segoe ui', sans-serif !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-border-color: #111111 !important;
  --titlebar-text-color: #aaa !important;
  --titlebar-text-color-focused: #aaa !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #aaa !important;
  --vault-profile-color-hover: #aaa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(17, 17, 17);
  border-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(25, 25, 25);
  border-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(153, 153, 153, 0.467);
  border-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(153, 153, 153);
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body dt {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(17, 17, 17);
  font-family: "segoe ui", sans-serif;
  padding-bottom: 5px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(153, 153, 153, 0.467);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(153, 153, 153, 0.467);
  border-right-color: rgba(153, 153, 153, 0.467);
  border-top-color: rgba(153, 153, 153, 0.467);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(61, 66, 65, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  color: rgb(168, 36, 36);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(168, 36, 36);
  font-weight: 200;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
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
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body h1 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(170, 170, 170);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(170, 170, 170);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(170, 170, 170);
  font-family: georgia, serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

html[saved-theme="dark"] body summary {
  color: rgb(170, 170, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #111111 !important;
  --background-modifier-border-focus: #A82424 !important;
  --background-modifier-border-hover: #030303 !important;
  --background-modifier-form-field: #111111 !important;
  --background-modifier-form-field-hover: #111111 !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #111111 !important;
  --background-secondary: #111111 !important;
  --background-secondary-alt: #111111 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #111111 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #111111 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #030303 !important;
  --bases-embed-border-color: #111111 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #aaa !important;
  --bases-table-border-color: #111111 !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #111111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #A82424 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #111111 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-header-color: #aaa !important;
  --bases-table-summary-background: #111111 !important;
  --blur-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent)) !important;
  --bodyFont: 'segoe ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #111111 !important;
  --canvas-card-label-color: #aaa !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #111111 !important;
  --caret-color: #aaa !important;
  --checkbox-border-color: #99999977 !important;
  --checkbox-border-color-hover: #aaa !important;
  --checkbox-color: #999 !important;
  --checkbox-color-hover: #aaa !important;
  --checkbox-marker-color: #111111 !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #aaa !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #111111 !important;
  --code-border-color: #111111 !important;
  --code-comment: #aaa !important;
  --code-normal: #aaa !important;
  --code-punctuation: #aaa !important;
  --code-radius: 0px !important;
  --codeFont: 'segoe ui', sans-serif !important;
  --collapse-icon-color: #aaa !important;
  --collapse-icon-color-collapsed: #A82424 !important;
  --color-base-00: #111111 !important;
  --color-base-05: #111111 !important;
  --color-base-10: #111111 !important;
  --color-base-100: #aaa !important;
  --color-base-20: #111111 !important;
  --color-base-25: #111111 !important;
  --color-base-30: #111111 !important;
  --color-base-35: #030303 !important;
  --color-base-40: #A82424 !important;
  --color-base-50: #aaa !important;
  --color-base-60: #A82424 !important;
  --color-base-70: #aaa !important;
  --dark: #aaa !important;
  --darkgray: #aaa !important;
  --divider-color: transparent !important;
  --dropdown-background: #191919 !important;
  --dropdown-background-hover: #111111 !important;
  --embed-block-shadow-hover: 0 0 0 1px #111111, inset 0 0 0 1px #111111 !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-line-width: 600px !important;
  --flair-background: #191919 !important;
  --flair-color: #aaa !important;
  --font-mermaid: 'segoe ui', sans-serif !important;
  --font-text: 'segoe ui', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #111111 !important;
  --footnote-id-color: #aaa !important;
  --footnote-id-color-no-occurrences: #aaa !important;
  --footnote-radius: 0px !important;
  --graph-line: #030303 !important;
  --graph-node: #aaa !important;
  --graph-node-focused: #A82424 !important;
  --graph-node-unresolved: #aaa !important;
  --graph-text: #aaa !important;
  --gray: #aaa !important;
  --headerFont: 'segoe ui', sans-serif !important;
  --heading-formatting: #aaa !important;
  --highlight: transparent !important;
  --hr-color: #3d424180 !important;
  --hr-thickness: 1px !important;
  --icon-color: #aaa !important;
  --icon-color-active: #A82424 !important;
  --icon-color-focused: #A82424 !important;
  --icon-color-hover: #999 !important;
  --inline-title-color: #A82424 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #aaa !important;
  --input-placeholder-color: #aaa !important;
  --input-radius: 0px !important;
  --interactive-hover: #111111 !important;
  --interactive-normal: #191919 !important;
  --light: #111111 !important;
  --lightgray: #111111 !important;
  --link-color: #A82424 !important;
  --link-color-hover: #999 !important;
  --link-external-color: #A82424 !important;
  --link-external-color-hover: #999 !important;
  --link-unresolved-color: #A82424 !important;
  --list-marker-color: #aaa !important;
  --list-marker-color-collapsed: #A82424 !important;
  --list-marker-color-hover: #aaa !important;
  --menu-background: #111111 !important;
  --menu-border-color: #030303 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #111111 !important;
  --metadata-divider-color: #111111 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #aaa !important;
  --metadata-label-text-color: #aaa !important;
  --metadata-label-text-color-hover: #aaa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #A82424 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303 !important;
  --modal-background: #111111 !important;
  --modal-border-color: #A82424 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #9999998a !important;
  --nav-collapse-icon-color-collapsed: #aaa !important;
  --nav-heading-color: #aaa !important;
  --nav-heading-color-collapsed: #aaa !important;
  --nav-heading-color-collapsed-hover: #aaa !important;
  --nav-heading-color-hover: #aaa !important;
  --nav-item-background-active: #111111 !important;
  --nav-item-background-hover: #A82424 !important;
  --nav-item-color: #aaa !important;
  --nav-item-color-active: #A82424 !important;
  --nav-item-color-highlighted: #A82424 !important;
  --nav-item-color-hover: #111111 !important;
  --nav-item-color-selected: #aaa !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #aaa !important;
  --nav-tag-color-active: #aaa !important;
  --nav-tag-color-hover: #aaa !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-sidebar-background: #111111 !important;
  --pill-border-color: #111111 !important;
  --pill-border-color-hover: #030303 !important;
  --pill-color: #aaa !important;
  --pill-color-hover: #aaa !important;
  --pill-color-remove: #aaa !important;
  --pill-color-remove-hover: #A82424 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #111111 !important;
  --prompt-border-color: #A82424 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #111111 65%, transparent) linear-gradient(#111111, color-mix(in srgb, #111111 65%, transparent)) !important;
  --ribbon-background: #111111 !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #aaa !important;
  --search-icon-color: #aaa !important;
  --search-result-background: #111111 !important;
  --secondary: #A82424 !important;
  --setting-group-heading-color: #aaa !important;
  --setting-items-background: #111111 !important;
  --setting-items-border-color: #111111 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #030303 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #aaa !important;
  --status-bar-background: #111111 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #aaa !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #191919 !important;
  --tab-container-background: #111111 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #111111 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent) !important;
  --tab-text-color: #aaa !important;
  --tab-text-color-active: #aaa !important;
  --tab-text-color-focused: #aaa !important;
  --tab-text-color-focused-active: #aaa !important;
  --tab-text-color-focused-active-current: #999 !important;
  --tab-text-color-focused-highlighted: #A82424 !important;
  --table-add-button-border-color: #111111 !important;
  --table-border-color: #111111 !important;
  --table-drag-handle-color: #aaa !important;
  --table-header-border-color: #111111 !important;
  --table-header-color: #aaa !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: #191919 !important;
  --tag-background-hover: #A82424 !important;
  --tag-color: #aaa !important;
  --tag-color-hover: #191919 !important;
  --tag-radius: 0px !important;
  --tertiary: #999 !important;
  --text-accent: #A82424 !important;
  --text-accent-hover: #999 !important;
  --text-faint: #aaa !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #aaa !important;
  --text-normal: #aaa !important;
  --textHighlight: transparent !important;
  --titleFont: 'segoe ui', sans-serif !important;
  --titlebar-background: #111111 !important;
  --titlebar-background-focused: #111111 !important;
  --titlebar-border-color: #111111 !important;
  --titlebar-text-color: #aaa !important;
  --titlebar-text-color-focused: #aaa !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #aaa !important;
  --vault-profile-color-hover: #aaa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(17, 17, 17);
  border-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(25, 25, 25);
  border-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body del {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(153, 153, 153, 0.467);
  border-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(153, 153, 153);
  border-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
  text-decoration: underline rgba(168, 36, 36, 0.592);
  text-decoration-color: rgba(168, 36, 36, 0.592);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(168, 36, 36);
  font-family: "segoe ui", sans-serif;
  outline: rgb(168, 36, 36) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body dt {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ol > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ul > li {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(17, 17, 17);
  font-family: "segoe ui", sans-serif;
  padding-bottom: 5px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body table {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body figcaption {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(153, 153, 153, 0.467);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(153, 153, 153, 0.467);
  border-right-color: rgba(153, 153, 153, 0.467);
  border-top-color: rgba(153, 153, 153, 0.467);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(61, 66, 65, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  color: rgb(168, 36, 36);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(168, 36, 36);
  font-weight: 200;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
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
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(168, 36, 36);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 36, 36);
  border-right-color: rgb(168, 36, 36);
  border-top-color: rgb(168, 36, 36);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body h1 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(168, 36, 36);
  font-family: georgia, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(170, 170, 170);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(170, 170, 170);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
  font-family: Georgia, serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "segoe ui", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(170, 170, 170);
  font-family: georgia, serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(170, 170, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html[saved-theme="light"] body sub {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

html[saved-theme="light"] body summary {
  color: rgb(170, 170, 170);
}

html[saved-theme="light"] body sup {
  color: rgb(170, 170, 170);
  font-size: 11.6667px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(25, 25, 25);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(170, 170, 170);
}`,
  },
};
