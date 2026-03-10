import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "deep-submerge", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #070707 !important;
  --background-modifier-border-focus: #4C5E75 !important;
  --background-modifier-border-hover: #030303 !important;
  --background-modifier-form-field: #070707 !important;
  --background-modifier-form-field-hover: #070707 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #070707 !important;
  --background-secondary: #070707 !important;
  --background-secondary-alt: #070707 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #070707 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #070707 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #030303 !important;
  --bases-embed-border-color: #070707 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #49504E !important;
  --bases-table-border-color: #070707 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #070707 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4C5E75 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #070707 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #49504E !important;
  --bases-table-summary-background: #000000 !important;
  --blur-background: color-mix(in srgb, #0a0c14 65%, transparent) linear-gradient(#0a0c14, color-mix(in srgb, #0a0c14 65%, transparent)) !important;
  --bodyFont: 'segoe ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 200;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #4C5E75 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #070707 !important;
  --caret-color: #49504E !important;
  --checkbox-border-color: #4e698d !important;
  --checkbox-border-color-hover: #4C5E75 !important;
  --checkbox-color: #4e698d !important;
  --checkbox-color-hover: #4C5E75 !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 0px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #49504E !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #070707 !important;
  --code-border-color: #070707 !important;
  --code-comment: #4C5E75 !important;
  --code-normal: #49504E !important;
  --code-punctuation: #49504E !important;
  --code-radius: 0px !important;
  --codeFont: 'segoe ui', sans-serif !important;
  --collapse-icon-color: #4C5E75 !important;
  --collapse-icon-color-collapsed: #4C5E75 !important;
  --color-base-00: #000000 !important;
  --color-base-05: #070707 !important;
  --color-base-10: #070707 !important;
  --color-base-100: #49504E !important;
  --color-base-20: #070707 !important;
  --color-base-25: #070707 !important;
  --color-base-30: #070707 !important;
  --color-base-35: #030303 !important;
  --color-base-40: #4C5E75 !important;
  --color-base-50: #4C5E75 !important;
  --color-base-60: #4C5E75 !important;
  --color-base-70: #49504E !important;
  --dark: #49504E !important;
  --darkgray: #49504E !important;
  --divider-color: transparent !important;
  --dropdown-background: #0a0c14 !important;
  --dropdown-background-hover: #030303 !important;
  --embed-block-shadow-hover: 0 0 0 1px #070707, inset 0 0 0 1px #070707 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-line-width: 550px !important;
  --flair-background: #0a0c14 !important;
  --flair-color: #49504E !important;
  --font-mermaid: 'segoe ui', sans-serif !important;
  --font-text: 'segoe ui', sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #070707 !important;
  --footnote-id-color: #49504E !important;
  --footnote-id-color-no-occurrences: #4C5E75 !important;
  --footnote-radius: 0px !important;
  --graph-line: #030303 !important;
  --graph-node: #49504E !important;
  --graph-node-focused: #4C5E75 !important;
  --graph-node-unresolved: #4C5E75 !important;
  --graph-text: #49504E !important;
  --gray: #49504E !important;
  --headerFont: 'segoe ui', sans-serif !important;
  --heading-formatting: #4C5E75 !important;
  --highlight: transparent !important;
  --hr-color: #3d424180 !important;
  --hr-thickness: 1px !important;
  --icon-color: #4C5E75 !important;
  --icon-color-active: #4C5E75 !important;
  --icon-color-focused: #405876 !important;
  --icon-color-hover: #4b74a9 !important;
  --inline-title-color: #4C5E75 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #4C5E75 !important;
  --input-placeholder-color: #4C5E75 !important;
  --input-radius: 0px !important;
  --interactive-hover: #030303 !important;
  --interactive-normal: #0a0c14 !important;
  --light: #000000 !important;
  --lightgray: #070707 !important;
  --link-color: #4C5E75 !important;
  --link-color-hover: #4e698d !important;
  --link-external-color: #4C5E75 !important;
  --link-external-color-hover: #4e698d !important;
  --link-unresolved-color: #4C5E75 !important;
  --list-marker-color: #4C5E75 !important;
  --list-marker-color-collapsed: #4C5E75 !important;
  --list-marker-color-hover: #49504E !important;
  --menu-background: #070707 !important;
  --menu-border-color: #030303 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #070707 !important;
  --metadata-divider-color: #070707 !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #49504E !important;
  --metadata-label-text-color: #49504E !important;
  --metadata-label-text-color-hover: #49504E !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4C5E75 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #030303 !important;
  --modal-background: #000000 !important;
  --modal-border-color: #4C5E75 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #4C5E75 !important;
  --nav-collapse-icon-color-collapsed: #4C5E75 !important;
  --nav-heading-color: #49504E !important;
  --nav-heading-color-collapsed: #4C5E75 !important;
  --nav-heading-color-collapsed-hover: #49504E !important;
  --nav-heading-color-hover: #49504E !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #49504E !important;
  --nav-item-color-active: #4C5E75 !important;
  --nav-item-color-highlighted: #4C5E75 !important;
  --nav-item-color-hover: #3D4241 !important;
  --nav-item-color-selected: #49504E !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #4C5E75 !important;
  --nav-tag-color-active: #49504E !important;
  --nav-tag-color-hover: #49504E !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #070707 !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #070707 !important;
  --pill-border-color: #070707 !important;
  --pill-border-color-hover: #030303 !important;
  --pill-color: #49504E !important;
  --pill-color-hover: #49504E !important;
  --pill-color-remove: #4C5E75 !important;
  --pill-color-remove-hover: #4C5E75 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #000000 !important;
  --prompt-border-color: #4C5E75 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #0a0c14 65%, transparent) linear-gradient(#0a0c14, color-mix(in srgb, #0a0c14 65%, transparent)) !important;
  --ribbon-background: #070707 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #49504E !important;
  --search-icon-color: #49504E !important;
  --search-result-background: #000000 !important;
  --secondary: #4C5E75 !important;
  --setting-group-heading-color: #49504E !important;
  --setting-items-background: #070707 !important;
  --setting-items-border-color: #070707 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #030303 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #4C5E75 !important;
  --status-bar-background: #070707 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #49504E !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #070707 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #070707 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #070707, transparent) !important;
  --tab-text-color: #4C5E75 !important;
  --tab-text-color-active: #4C5E75 !important;
  --tab-text-color-focused: #4C5E75 !important;
  --tab-text-color-focused-active: #49504E !important;
  --tab-text-color-focused-active-current: #49504E !important;
  --tab-text-color-focused-highlighted: #4C5E75 !important;
  --table-add-button-border-color: #070707 !important;
  --table-border: transparent !important;
  --table-border-color: #070707 !important;
  --table-drag-handle-color: #4C5E75 !important;
  --table-header-border-color: #070707 !important;
  --table-header-color: #49504E !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #4C5E75 !important;
  --tag-color-hover: #3D4241 !important;
  --tertiary: #4e698d !important;
  --text-accent: #4C5E75 !important;
  --text-accent-hover: #4e698d !important;
  --text-faint: #4C5E75 !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #49504E !important;
  --text-normal: #49504E !important;
  --textHighlight: transparent !important;
  --titleFont: 'segoe ui', sans-serif !important;
  --titlebar-background: #070707 !important;
  --titlebar-background-focused: #070707 !important;
  --titlebar-border-color: #070707 !important;
  --titlebar-text-color: #49504E !important;
  --titlebar-text-color-focused: #49504E !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #49504E !important;
  --vault-profile-color-hover: #49504E !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(73, 80, 78);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(7, 7, 7);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(73, 80, 78);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body .page article p > em, html em {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body .page article p > i, html i {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body .page article p > strong, html strong {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body del {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: line-through rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body p {
  color: rgb(73, 80, 78);
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}`,
    links: `html body a.external, html footer a {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
  text-decoration: underline rgba(76, 94, 117, 0.592);
  text-decoration-color: rgba(76, 94, 117, 0.592);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
  text-decoration: underline rgba(76, 94, 117, 0.592);
  text-decoration-color: rgba(76, 94, 117, 0.592);
}

html body a.internal.broken {
  color: rgb(76, 94, 117);
  font-family: "segoe ui", sans-serif;
  outline: rgb(76, 94, 117) none 0px;
}`,
    lists: `html body dd {
  color: rgb(73, 80, 78);
}

html body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html body dt {
  color: rgb(73, 80, 78);
}

html body ol > li {
  color: rgb(73, 80, 78);
}

html body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body ul > li {
  color: rgb(73, 80, 78);
}

html body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(76, 94, 117);
  text-decoration: rgb(76, 94, 117);
}

html body blockquote {
  background-color: rgb(7, 7, 7);
  font-family: "segoe ui", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body table {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  width: 176.969px;
}

html body td {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}

html body th {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body figcaption {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  font-size: 14px;
}

html body figure {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  margin-bottom: 14px;
  margin-top: 14px;
}

html body img {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body video {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    embeds: `html body .file-embed {
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

html body .footnotes {
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

html body .transclude {
  border-bottom-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body .transclude-inner {
  border-bottom-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "segoe ui", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "segoe ui", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(73, 80, 78);
  text-decoration: line-through rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body input[type=checkbox] {
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

html body li.task-list-item[data-task='!'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(76, 94, 117);
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
}

html body .callout .callout-title > .callout-title-inner > p {
  font-weight: 200;
}

html body .callout[data-callout="abstract"] {
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

html body .callout[data-callout="bug"] {
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

html body .callout[data-callout="danger"] {
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

html body .callout[data-callout="example"] {
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

html body .callout[data-callout="failure"] {
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

html body .callout[data-callout="info"] {
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

html body .callout[data-callout="note"] {
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

html body .callout[data-callout="question"] {
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

html body .callout[data-callout="quote"] {
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

html body .callout[data-callout="success"] {
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

html body .callout[data-callout="tip"] {
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

html body .callout[data-callout="todo"] {
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

html body .callout[data-callout="warning"] {
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
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
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

html body .search > .search-container > .search-space > * {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  outline: rgb(73, 80, 78) none 0px;
  text-decoration: rgb(73, 80, 78);
  text-decoration-color: rgb(73, 80, 78);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(73, 80, 78);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(73, 80, 78);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(73, 80, 78);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(73, 80, 78);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(76, 94, 117);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(76, 94, 117);
  border-right-color: rgb(76, 94, 117);
  border-top-color: rgb(76, 94, 117);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(73, 80, 78);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

html body a.internal.tag-link::before {
  color: rgb(76, 94, 117);
}

html body h1 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h2 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h3 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h4 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h5 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body h6 {
  color: rgb(76, 94, 117);
  font-family: georgia, serif;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
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

html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
  text-decoration: rgb(73, 80, 78);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html body footer {
  background-color: rgb(7, 7, 7);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(73, 80, 78);
}

html body footer ul li a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(73, 80, 78);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body li.section-li > .section .meta {
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(73, 80, 78);
  text-decoration: rgb(73, 80, 78);
}

html body ul.section-ul {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}`,
    darkmode: `html body .darkmode {
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

html body .darkmode svg {
  color: rgb(76, 94, 117);
  stroke: rgb(76, 94, 117);
}`,
    breadcrumbs: `html body .breadcrumb-container {
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

html body .breadcrumb-element p {
  color: rgb(76, 94, 117);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

html body .metadata {
  border-bottom-color: rgb(7, 7, 7);
  border-left-color: rgb(7, 7, 7);
  border-right-color: rgb(7, 7, 7);
  border-top-color: rgb(7, 7, 7);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
  font-family: "segoe ui", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(7, 7, 7);
}

html body .page-header h2.page-title {
  color: rgb(73, 80, 78);
  font-family: georgia, serif;
}

html body abbr {
  color: rgb(73, 80, 78);
  text-decoration: underline dotted rgb(73, 80, 78);
}

html body details {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body input[type=text] {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
  color: rgb(73, 80, 78);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(73, 80, 78);
  border-left-color: rgb(73, 80, 78);
  border-right-color: rgb(73, 80, 78);
  border-top-color: rgb(73, 80, 78);
}

html body sub {
  color: rgb(73, 80, 78);
  font-size: 11.6667px;
}

html body summary {
  color: rgb(73, 80, 78);
}

html body sup {
  color: rgb(73, 80, 78);
  font-size: 11.6667px;
}`,
  },
  light: {},
};
