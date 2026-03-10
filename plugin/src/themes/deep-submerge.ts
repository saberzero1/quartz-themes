import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "deep-submerge", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #070707;
  --background-modifier-border-focus: #4C5E75;
  --background-modifier-border-hover: #030303;
  --background-modifier-form-field: #070707;
  --background-modifier-form-field-hover: #070707;
  --background-primary: #000000;
  --background-primary-alt: #070707;
  --background-secondary: #070707;
  --background-secondary-alt: #070707;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #070707;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #070707;
  --bases-cards-shadow-hover: 0 0 0 1px #030303;
  --bases-embed-border-color: #070707;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #49504E;
  --bases-table-border-color: #070707;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #070707;
  --bases-table-cell-shadow-active: 0 0 0 2px #4C5E75;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #070707;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #49504E;
  --bases-table-summary-background: #000000;
  --blur-background: color-mix(in srgb, #0a0c14 65%, transparent) linear-gradient(#0a0c14, color-mix(in srgb, #0a0c14 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 0px;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #000000;
  --canvas-card-label-color: #4C5E75;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #070707;
  --caret-color: #49504E;
  --checkbox-border-color: #4e698d;
  --checkbox-border-color-hover: #4C5E75;
  --checkbox-color: #4e698d;
  --checkbox-color-hover: #4C5E75;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 0px;
  --checkbox-size: 14px;
  --checklist-done-color: #49504E;
  --clickable-icon-radius: 0px;
  --code-background: #070707;
  --code-border-color: #070707;
  --code-comment: #4C5E75;
  --code-normal: #49504E;
  --code-punctuation: #49504E;
  --code-radius: 0px;
  --codeFont: var(--font-text);
  --collapse-icon-color: #4C5E75;
  --collapse-icon-color-collapsed: #4C5E75;
  --color-base-00: #000000;
  --color-base-05: #070707;
  --color-base-10: #070707;
  --color-base-100: #49504E;
  --color-base-20: #070707;
  --color-base-25: #070707;
  --color-base-30: #070707;
  --color-base-35: #030303;
  --color-base-40: #4C5E75;
  --color-base-50: #4C5E75;
  --color-base-60: #4C5E75;
  --color-base-70: #49504E;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --dropdown-background: #0a0c14;
  --dropdown-background-hover: #030303;
  --embed-block-shadow-hover: 0 0 0 1px #070707, inset 0 0 0 1px #070707;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-line-width: 550px;
  --flair-background: #0a0c14;
  --flair-color: #49504E;
  --font-mermaid: 'segoe ui', sans-serif;
  --font-text: 'segoe ui', sans-serif;
  --font-text-size: 14px;
  --footnote-divider-color: #070707;
  --footnote-id-color: #49504E;
  --footnote-id-color-no-occurrences: #4C5E75;
  --footnote-radius: 0px;
  --graph-line: #030303;
  --graph-node: #49504E;
  --graph-node-focused: #4C5E75;
  --graph-node-unresolved: #4C5E75;
  --graph-text: #49504E;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: #4C5E75;
  --highlight: var(--text-highlight-bg);
  --hr-color: #3d424180;
  --hr-thickness: 1px;
  --icon-color: #4C5E75;
  --icon-color-active: #4C5E75;
  --icon-color-focused: #405876;
  --icon-color-hover: #4b74a9;
  --inline-title-color: #4C5E75;
  --inline-title-font: 'georgia', serif;
  --inline-title-size: 2em;
  --inline-title-weight: 200;
  --input-date-separator: #4C5E75;
  --input-placeholder-color: #4C5E75;
  --input-radius: 0px;
  --interactive-hover: #030303;
  --interactive-normal: #0a0c14;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #4C5E75;
  --link-color-hover: #4e698d;
  --link-external-color: #4C5E75;
  --link-external-color-hover: #4e698d;
  --link-unresolved-color: #4C5E75;
  --list-marker-color: #4C5E75;
  --list-marker-color-collapsed: #4C5E75;
  --list-marker-color-hover: #49504E;
  --menu-background: #070707;
  --menu-border-color: #030303;
  --menu-radius: 0px;
  --metadata-border-color: #070707;
  --metadata-divider-color: #070707;
  --metadata-input-height: 24.5px;
  --metadata-input-text-color: #49504E;
  --metadata-label-text-color: #49504E;
  --metadata-label-text-color-hover: #49504E;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4C5E75;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303;
  --modal-background: #000000;
  --modal-border-color: #4C5E75;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #4C5E75;
  --nav-collapse-icon-color-collapsed: #4C5E75;
  --nav-heading-color: #49504E;
  --nav-heading-color-collapsed: #4C5E75;
  --nav-heading-color-collapsed-hover: #49504E;
  --nav-heading-color-hover: #49504E;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-color: #49504E;
  --nav-item-color-active: #4C5E75;
  --nav-item-color-highlighted: #4C5E75;
  --nav-item-color-hover: #3D4241;
  --nav-item-color-selected: #49504E;
  --nav-item-radius: 0px;
  --nav-tag-color: #4C5E75;
  --nav-tag-color-active: #49504E;
  --nav-tag-color-hover: #49504E;
  --nav-tag-radius: 0px;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-shadow: 0 0 0 1px #070707;
  --pdf-sidebar-background: #000000;
  --pdf-thumbnail-shadow: 0 0 0 1px #070707;
  --pill-border-color: #070707;
  --pill-border-color-hover: #030303;
  --pill-color: #49504E;
  --pill-color-hover: #49504E;
  --pill-color-remove: #4C5E75;
  --pill-color-remove-hover: #4C5E75;
  --popover-font-size: 14px;
  --prompt-background: #000000;
  --prompt-border-color: #4C5E75;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #0a0c14 65%, transparent) linear-gradient(#0a0c14, color-mix(in srgb, #0a0c14 65%, transparent));
  --ribbon-background: #070707;
  --ribbon-background-collapsed: #000000;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #49504E;
  --search-icon-color: #49504E;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #49504E;
  --setting-items-background: #070707;
  --setting-items-border-color: #070707;
  --setting-items-radius: 0px;
  --sidebar-markdown-font-size: 12.6px;
  --slider-thumb-border-color: #030303;
  --slider-thumb-radius: 0px;
  --slider-track-background: #4C5E75;
  --status-bar-background: #070707;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #49504E;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #070707;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 4px;
  --tab-switcher-background: #070707;
  --tab-switcher-menubar-background: linear-gradient(to top, #070707, transparent);
  --tab-text-color: #4C5E75;
  --tab-text-color-active: #4C5E75;
  --tab-text-color-focused: #4C5E75;
  --tab-text-color-focused-active: #49504E;
  --tab-text-color-focused-active-current: #49504E;
  --tab-text-color-focused-highlighted: #4C5E75;
  --table-add-button-border-color: #070707;
  --table-border: transparent;
  --table-border-color: #070707;
  --table-drag-handle-color: #4C5E75;
  --table-header-border-color: #070707;
  --table-header-color: #49504E;
  --table-header-size: 14px;
  --table-text-size: 14px;
  --tag-background: transparent;
  --tag-background-hover: transparent;
  --tag-color: #4C5E75;
  --tag-color-hover: #3D4241;
  --tertiary: var(--text-accent-hover);
  --text-accent: #4C5E75;
  --text-accent-hover: #4e698d;
  --text-faint: #4C5E75;
  --text-highlight-bg: transparent;
  --text-muted: #49504E;
  --text-normal: #49504E;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #070707;
  --titlebar-background-focused: #070707;
  --titlebar-border-color: #070707;
  --titlebar-text-color: #49504E;
  --titlebar-text-color-focused: #49504E;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #49504E;
  --vault-profile-color-hover: #49504E;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(73, 80, 78);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(7, 7, 7);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(73, 80, 78);
}`,
    typography: `body .page article p > b, b {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body .page article p > em, em {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body .page article p > i, i {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body .page article p > strong, strong {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body del {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: line-through rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body p {
  color: rgb(73, 80, 78);
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
  text-decoration: underline rgba(76, 94, 117, 0.592);
  text-decoration-color: rgba(76, 94, 117, 0.592);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
  text-decoration: underline rgba(76, 94, 117, 0.592);
  text-decoration-color: rgba(76, 94, 117, 0.592);
}

body a.internal.broken {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
}`,
    lists: `body dd {
  color: rgb(73, 80, 78);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(73, 80, 78);
}

body ol > li {
  color: rgb(73, 80, 78);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body ul > li {
  color: rgb(73, 80, 78);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(76, 94, 117);
  text-decoration: rgb(76, 94, 117);
}

body blockquote {
  background-color: rgb(7, 7, 7);
  font-family: "segoe ui", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body table {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

body td {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}

body th {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}`,
    code: `body code {
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(7, 7, 7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(7, 7, 7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(7, 7, 7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(7, 7, 7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body figcaption {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body video {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    embeds: `body .file-embed {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

body .transclude {
  border-bottom-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body .transclude-inner {
  border-bottom-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "segoe ui", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(73, 80, 78);
  text-decoration: line-through rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body input[type=checkbox] {
  border-bottom-color: rgb(78, 105, 141);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(78, 105, 141);
  border-right-color: rgb(78, 105, 141);
  border-top-color: rgb(78, 105, 141);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='*'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='-'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='/'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='>'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='?'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='I'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='S'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='b'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='c'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='d'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='f'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='i'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='k'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='l'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='p'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='u'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body li.task-list-item[data-task='w'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(76, 94, 117);
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 200;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(3, 3, 3);
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(7, 7, 7);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(73, 80, 78);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

body a.internal.tag-link::before {
  color: rgb(76, 94, 117);
}

body h1 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h2 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h3 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h4 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h5 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body h6 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(76, 94, 117, 0.357);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(76, 94, 117, 0.357);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(76, 94, 117, 0.357);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(76, 94, 117, 0.357);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: dotted;
  border-top-width: 1px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 94, 117);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 94, 117);
}`,
    footer: `body footer {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(73, 80, 78);
}

body footer ul li a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(73, 80, 78);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body li.section-li > .section .meta {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}

body ul.section-ul {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 94, 117);
}

body .darkmode svg {
  color: rgb(76, 94, 117);
  stroke: rgb(76, 94, 117);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

body .breadcrumb-element p {
  color: rgb(76, 94, 117);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

body .metadata {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

body .navigation-progress {
  background-color: rgb(7, 7, 7);
}

body .page-header h2.page-title {
  color: rgb(73, 80, 78);
  font-family: georgia, serif;
}

body abbr {
  color: rgb(73, 80, 78);
  text-decoration: underline dotted rgb(73, 80, 78);
}

body details {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body input[type=text] {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

body kbd {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

body progress {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

body sub {
  color: rgb(73, 80, 78);
  font-size: 11.6667px;
}

body summary {
  color: rgb(73, 80, 78);
}

body sup {
  color: rgb(73, 80, 78);
  font-size: 11.6667px;
}`,
  },
  light: {},
};
