import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mulled-wine",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #fff !important;
  --background-modifier-border-focus: #b3b6de !important;
  --background-modifier-border-hover: #b3b6de !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-primary: #292d3e !important;
  --background-primary-alt: #5da6ca !important;
  --background-secondary: #1d202c !important;
  --background-secondary-alt: #fff !important;
  --bases-cards-background: #292d3e !important;
  --bases-cards-cover-background: #5da6ca !important;
  --bases-cards-shadow: 0 0 0 1px #fff !important;
  --bases-cards-shadow-hover: 0 0 0 1px #b3b6de !important;
  --bases-embed-border-color: #fff !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #d295d1 !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: #292d3e !important;
  --bases-table-cell-background-disabled: #5da6ca !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b3b6de !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #5da6ca !important;
  --bases-table-header-background: #292d3e !important;
  --bases-table-header-color: #d295d1 !important;
  --bases-table-summary-background: #292d3e !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --bodyFont: 'yu gothic', yugothic, sans-serif !important;
  --button-radius: 8px !important;
  --callout-radius: 8px;
  --callout-title-weight: 400;
  --canvas-background: #292d3e !important;
  --canvas-card-label-color: #95bae8 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #fff !important;
  --caret-color: #e46872 !important;
  --checkbox-border-color: #d295d1 !important;
  --checkbox-border-color-hover: #d295d180 !important;
  --checkbox-color: #71799d !important;
  --checkbox-color-hover: #71799d92 !important;
  --checkbox-marker-color: #292d3e !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #d295d1 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #383c4e !important;
  --code-border-color: #fff !important;
  --code-comment: #95bae8 !important;
  --code-normal: #e46872 !important;
  --code-punctuation: #d295d1 !important;
  --code-radius: 8px !important;
  --codeFont: 'yu gothic', yugothic, sans-serif !important;
  --collapse-icon-color: #95bae8 !important;
  --collapse-icon-color-collapsed: #95bae8 !important;
  --color-base-00: #292d3e !important;
  --color-base-05: #1d202c !important;
  --color-base-10: #5da6ca !important;
  --color-base-100: #e46872 !important;
  --color-base-20: #1d202c !important;
  --color-base-25: #fff !important;
  --color-base-30: #fff !important;
  --color-base-35: #b3b6de !important;
  --color-base-40: #b3b6de !important;
  --color-base-50: #95bae8 !important;
  --color-base-60: #fff !important;
  --color-base-70: #d295d1 !important;
  --dark: #e46872 !important;
  --darkgray: #e46872 !important;
  --divider-color: transparent !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: #FFFFFF !important;
  --dropdown-background-hover: #b3b6de !important;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff !important;
  --file-header-background: #292d3e !important;
  --file-header-background-focused: #292d3e !important;
  --flair-background: #FFFFFF !important;
  --flair-color: #e46872 !important;
  --font-mermaid: 'yu gothic', yugothic, sans-serif !important;
  --font-text: 'yu gothic', yugothic, sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #fff !important;
  --footnote-id-color: #d295d1 !important;
  --footnote-id-color-no-occurrences: #95bae8 !important;
  --footnote-radius: 8px !important;
  --graph-line: #b3b6de !important;
  --graph-node: #d295d1 !important;
  --graph-node-focused: #95bae8 !important;
  --graph-node-unresolved: #95bae8 !important;
  --graph-text: #e46872 !important;
  --gray: #d295d1 !important;
  --h1-size: 2em !important;
  --h2-size: 1.8em !important;
  --h3-size: 1.6em !important;
  --h4-size: 1.4em !important;
  --h5-size: 1.2em !important;
  --headerFont: 'yu gothic', yugothic, sans-serif !important;
  --heading-formatting: #95bae8 !important;
  --highlight: transparent !important;
  --hr-color: #736883 !important;
  --hr-thickness: 1px !important;
  --icon-color: #96bae8 !important;
  --icon-color-active: #95bae8 !important;
  --icon-color-focused: #d295d1 !important;
  --icon-color-hover: #d295d1 !important;
  --inline-title-color: #beb4da !important;
  --inline-title-font: 'yu gothic ui', sans-serif !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: #95bae8 !important;
  --input-placeholder-color: #95bae8 !important;
  --input-radius: 8px !important;
  --interactive-hover: #b3b6de !important;
  --interactive-normal: #FFFFFF !important;
  --light: #292d3e !important;
  --lightgray: #1d202c !important;
  --link-color: #95bae8 !important;
  --link-external-color: #95bae8 !important;
  --link-unresolved-color: #95bae8 !important;
  --list-marker-color: #95bae8 !important;
  --list-marker-color-collapsed: #95bae8 !important;
  --list-marker-color-hover: #d295d1 !important;
  --menu-background: #1d202c !important;
  --menu-border-color: #b3b6de !important;
  --metadata-border-color: #fff !important;
  --metadata-divider-color: #fff !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #e46872 !important;
  --metadata-label-text-color: #d295d1 !important;
  --metadata-label-text-color-hover: #d295d1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b3b6de !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b3b6de !important;
  --modal-background: #292d3e !important;
  --modal-border-color: #b3b6de !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #95bae8 !important;
  --nav-collapse-icon-color-collapsed: #95bae8 !important;
  --nav-heading-color: #e46872 !important;
  --nav-heading-color-collapsed: #95bae8 !important;
  --nav-heading-color-collapsed-hover: #d295d1 !important;
  --nav-heading-color-hover: #e46872 !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #95bae8 !important;
  --nav-item-color-active: #c2b4d9 !important;
  --nav-item-color-highlighted: #95bae8 !important;
  --nav-item-color-hover: #c2b4d9 !important;
  --nav-item-color-selected: #e46872 !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #95bae8 !important;
  --nav-tag-color-active: #d295d1 !important;
  --nav-tag-color-hover: #d295d1 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #292d3e !important;
  --pdf-page-background: #292d3e !important;
  --pdf-shadow: 0 0 0 1px #fff !important;
  --pdf-sidebar-background: #292d3e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #fff !important;
  --pill-border-color: #fff !important;
  --pill-border-color-hover: #b3b6de !important;
  --pill-color: #d295d1 !important;
  --pill-color-hover: #e46872 !important;
  --pill-color-remove: #95bae8 !important;
  --pill-color-remove-hover: #95bae8 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #292d3e !important;
  --prompt-border-color: #b3b6de !important;
  --radius-l: 8px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #d295d1 !important;
  --search-icon-color: #d295d1 !important;
  --search-result-background: #292d3e !important;
  --secondary: #95bae8 !important;
  --setting-group-heading-color: #e46872 !important;
  --setting-items-background: #5da6ca !important;
  --setting-items-border-color: #fff !important;
  --setting-items-radius: 8px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #b3b6de !important;
  --slider-thumb-radius: 8px !important;
  --slider-track-background: #FFFFFF !important;
  --status-bar-background: #1d202c !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #d295d1 !important;
  --suggestion-background: #292d3e !important;
  --tab-background-active: #292d3e !important;
  --tab-container-background: #1d202c !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #1d202c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d202c, transparent) !important;
  --tab-text-color: #95bae8 !important;
  --tab-text-color-active: #fff !important;
  --tab-text-color-focused: #fff !important;
  --tab-text-color-focused-active: #d295d1 !important;
  --tab-text-color-focused-active-current: #e46872 !important;
  --tab-text-color-focused-highlighted: #95bae8 !important;
  --table-add-button-border-color: #fff !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color: #95bae8 !important;
  --table-header-border-color: transparent !important;
  --table-header-color: #e46872 !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #96bae8 !important;
  --tag-color-hover: #714785 !important;
  --tertiary: #95bae8 !important;
  --text-accent: #95bae8 !important;
  --text-faint: #95bae8 !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #d295d1 !important;
  --text-normal: #e46872 !important;
  --textHighlight: transparent !important;
  --titleFont: 'yu gothic', yugothic, sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #fff !important;
  --titlebar-text-color: #d295d1 !important;
  --titlebar-text-color-focused: #e46872 !important;
  --toggle-radius: 8px !important;
  --toggle-thumb-radius: 8px !important;
  --vault-profile-color: #e46872 !important;
  --vault-profile-color-hover: #e46872 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(41, 45, 62);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 32, 44);
  border-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 24.5px;
  color: rgb(150, 186, 232);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 44);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(41, 45, 62);
  color: rgb(228, 104, 114);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body del {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(210, 149, 209);
  border-radius: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(113, 121, 157);
  border-color: rgb(113, 121, 157);
}

html[saved-theme="dark"] body p {
  color: rgb(210, 149, 209);
  outline: rgb(210, 149, 209) none 0px;
  text-decoration-color: rgb(210, 149, 209);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration-color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration-color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body dt {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body blockquote {
  font-family: "yu gothic", yugothic, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body table {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  width: 176.969px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(228, 104, 114);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  font-size: 14px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(93, 166, 202);
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(228, 104, 114);
  text-decoration-color: rgb(228, 104, 114);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(112, 200, 214);
  border-left-color: rgb(112, 200, 214);
  border-right-color: rgb(112, 200, 214);
  border-top-color: rgb(112, 200, 214);
  color: rgb(112, 200, 214);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(112, 200, 214);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(228, 104, 114);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(228, 104, 114) none 0px;
  text-decoration-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 44);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(150, 186, 232);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(190, 180, 218);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(41, 45, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 45, 62);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(228, 104, 114);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(150, 186, 232);
  border-right-color: rgb(150, 186, 232);
  border-top-color: rgb(150, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(150, 186, 232);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 32, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(210, 149, 209);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(149, 186, 232);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(149, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(149, 186, 232);
  border-right-color: rgb(149, 186, 232);
  border-top-color: rgb(149, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(149, 186, 232);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(149, 186, 232);
  stroke: rgb(149, 186, 232);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(149, 186, 232);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 32, 44);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(228, 104, 114);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(56, 60, 78);
  border-bottom-color: rgb(228, 104, 114);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(228, 104, 114);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(228, 104, 114);
  border-left-color: rgb(228, 104, 114);
  border-right-color: rgb(228, 104, 114);
  border-top-color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body sub {
  color: rgb(228, 104, 114);
  font-size: 11.6667px;
}

html[saved-theme="dark"] body summary {
  color: rgb(228, 104, 114);
}

html[saved-theme="dark"] body sup {
  color: rgb(228, 104, 114);
  font-size: 11.6667px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: rgb(150, 186, 232);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #fff !important;
  --background-modifier-border-focus: #b3b6de !important;
  --background-modifier-border-hover: #b3b6de !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-primary: #fff !important;
  --background-primary-alt: #71799d !important;
  --background-secondary: #e9ecf7 !important;
  --background-secondary-alt: #e9ecf7 !important;
  --bases-cards-background: #fff !important;
  --bases-cards-cover-background: #71799d !important;
  --bases-cards-shadow: 0 0 0 1px #fff !important;
  --bases-cards-shadow-hover: 0 0 0 1px #b3b6de !important;
  --bases-embed-border-color: #fff !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #d295d1 !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: #71799d !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b3b6de !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-group-background: #71799d !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: #d295d1 !important;
  --bases-table-summary-background: #fff !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bodyFont: 'yu gothic', yugothic, sans-serif !important;
  --button-radius: 8px !important;
  --callout-radius: 8px;
  --callout-title-weight: 400;
  --canvas-background: #fff !important;
  --canvas-card-label-color: #95bae8 !important;
  --canvas-controls-radius: 8px !important;
  --canvas-dot-pattern: #fff !important;
  --caret-color: #383c4e !important;
  --checkbox-border-color: #d295d1 !important;
  --checkbox-border-color-hover: #d295d180 !important;
  --checkbox-color: #71799d !important;
  --checkbox-color-hover: #71799d92 !important;
  --checkbox-marker-color: #fff !important;
  --checkbox-radius: 10px !important;
  --checkbox-size: 14px !important;
  --checklist-done-color: #d295d1 !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #e9ecf7 !important;
  --code-border-color: #fff !important;
  --code-comment: #95bae8 !important;
  --code-normal: #383c4e !important;
  --code-punctuation: #d295d1 !important;
  --code-radius: 8px !important;
  --codeFont: 'yu gothic', yugothic, sans-serif !important;
  --collapse-icon-color: #95bae8 !important;
  --collapse-icon-color-collapsed: #95bae8 !important;
  --color-base-00: #fff !important;
  --color-base-05: #e9ecf7 !important;
  --color-base-10: #71799d !important;
  --color-base-100: #383c4e !important;
  --color-base-20: #e9ecf7 !important;
  --color-base-25: #fff !important;
  --color-base-30: #fff !important;
  --color-base-35: #b3b6de !important;
  --color-base-40: #b3b6de !important;
  --color-base-50: #95bae8 !important;
  --color-base-60: #fff !important;
  --color-base-70: #d295d1 !important;
  --dark: #383c4e !important;
  --darkgray: #383c4e !important;
  --divider-color: transparent !important;
  --divider-vertical-height: calc(100% - 40px) !important;
  --dropdown-background: #FFFFFF !important;
  --dropdown-background-hover: #71799d !important;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --flair-background: #FFFFFF !important;
  --flair-color: #383c4e !important;
  --font-mermaid: 'yu gothic', yugothic, sans-serif !important;
  --font-text: 'yu gothic', yugothic, sans-serif !important;
  --font-text-size: 14px !important;
  --footnote-divider-color: #fff !important;
  --footnote-id-color: #d295d1 !important;
  --footnote-id-color-no-occurrences: #95bae8 !important;
  --footnote-radius: 8px !important;
  --graph-line: #b3b6de !important;
  --graph-node: #d295d1 !important;
  --graph-node-focused: #95bae8 !important;
  --graph-node-unresolved: #95bae8 !important;
  --graph-text: #383c4e !important;
  --gray: #d295d1 !important;
  --h1-size: 2em !important;
  --h2-size: 1.8em !important;
  --h3-size: 1.6em !important;
  --h4-size: 1.4em !important;
  --h5-size: 1.2em !important;
  --headerFont: 'yu gothic', yugothic, sans-serif !important;
  --heading-formatting: #95bae8 !important;
  --highlight: transparent !important;
  --hr-color: #736883 !important;
  --hr-thickness: 1px !important;
  --icon-color: #96bae8 !important;
  --icon-color-active: #95bae8 !important;
  --icon-color-focused: #d295d1 !important;
  --icon-color-hover: #d295d1 !important;
  --inline-title-color: #beb4da !important;
  --inline-title-font: 'yu gothic ui', sans-serif !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: #95bae8 !important;
  --input-placeholder-color: #95bae8 !important;
  --input-radius: 8px !important;
  --interactive-hover: #71799d !important;
  --interactive-normal: #FFFFFF !important;
  --light: #fff !important;
  --lightgray: #e9ecf7 !important;
  --link-color: #95bae8 !important;
  --link-external-color: #95bae8 !important;
  --link-unresolved-color: #95bae8 !important;
  --list-marker-color: #95bae8 !important;
  --list-marker-color-collapsed: #95bae8 !important;
  --list-marker-color-hover: #d295d1 !important;
  --menu-background: #e9ecf7 !important;
  --menu-border-color: #b3b6de !important;
  --metadata-border-color: #fff !important;
  --metadata-divider-color: #fff !important;
  --metadata-input-height: 24.5px !important;
  --metadata-input-text-color: #383c4e !important;
  --metadata-label-text-color: #d295d1 !important;
  --metadata-label-text-color-hover: #d295d1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b3b6de !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #b3b6de !important;
  --modal-background: #fff !important;
  --modal-border-color: #b3b6de !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #95bae8 !important;
  --nav-collapse-icon-color-collapsed: #95bae8 !important;
  --nav-heading-color: #383c4e !important;
  --nav-heading-color-collapsed: #95bae8 !important;
  --nav-heading-color-collapsed-hover: #d295d1 !important;
  --nav-heading-color-hover: #383c4e !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #634a75 !important;
  --nav-item-color-active: #9a73b4 !important;
  --nav-item-color-highlighted: #95bae8 !important;
  --nav-item-color-hover: #95bae8 !important;
  --nav-item-color-selected: #383c4e !important;
  --nav-item-radius: 8px !important;
  --nav-tag-color: #95bae8 !important;
  --nav-tag-color-active: #d295d1 !important;
  --nav-tag-color-hover: #d295d1 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-border-color: #fff !important;
  --pill-border-color-hover: #b3b6de !important;
  --pill-color: #d295d1 !important;
  --pill-color-hover: #383c4e !important;
  --pill-color-remove: #95bae8 !important;
  --pill-color-remove-hover: #95bae8 !important;
  --popover-font-size: 14px !important;
  --prompt-background: #fff !important;
  --prompt-border-color: #b3b6de !important;
  --radius-l: 8px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #d295d1 !important;
  --search-icon-color: #d295d1 !important;
  --search-result-background: #fff !important;
  --secondary: #95bae8 !important;
  --setting-group-heading-color: #383c4e !important;
  --setting-items-background: #71799d !important;
  --setting-items-border-color: #fff !important;
  --setting-items-radius: 8px !important;
  --sidebar-markdown-font-size: 12.6px !important;
  --slider-thumb-border-color: #b3b6de !important;
  --slider-thumb-radius: 8px !important;
  --slider-track-background: #FFFFFF !important;
  --status-bar-background: #e9ecf7 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #d295d1 !important;
  --suggestion-background: #fff !important;
  --tab-background-active: #fff !important;
  --tab-container-background: #e9ecf7 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #e9ecf7 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e9ecf7, transparent) !important;
  --tab-text-color: #95bae8 !important;
  --tab-text-color-active: #fff !important;
  --tab-text-color-focused: #fff !important;
  --tab-text-color-focused-active: #d295d1 !important;
  --tab-text-color-focused-active-current: #383c4e !important;
  --tab-text-color-focused-highlighted: #95bae8 !important;
  --table-add-button-border-color: #fff !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color: #95bae8 !important;
  --table-header-border-color: transparent !important;
  --table-header-color: #383c4e !important;
  --table-header-size: 14px !important;
  --table-text-size: 14px !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #96bae8 !important;
  --tag-color-hover: #714785 !important;
  --tertiary: #95bae8 !important;
  --text-accent: #95bae8 !important;
  --text-faint: #95bae8 !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #d295d1 !important;
  --text-normal: #383c4e !important;
  --textHighlight: transparent !important;
  --titleFont: 'yu gothic', yugothic, sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #fff !important;
  --titlebar-text-color: #d295d1 !important;
  --titlebar-text-color-focused: #383c4e !important;
  --toggle-radius: 8px !important;
  --toggle-thumb-radius: 8px !important;
  --vault-profile-color: #383c4e !important;
  --vault-profile-color-hover: #383c4e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(210, 149, 209);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(210, 149, 209);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 24.5px;
  color: rgb(150, 186, 232);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(210, 149, 209);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(233, 236, 247);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(56, 60, 78);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body del {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(210, 149, 209);
  border-radius: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(113, 121, 157);
  border-color: rgb(113, 121, 157);
}

html[saved-theme="light"] body p {
  color: rgb(210, 149, 209);
  outline: rgb(210, 149, 209) none 0px;
  text-decoration-color: rgb(210, 149, 209);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration-color: rgb(149, 186, 232);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
  text-decoration-color: rgb(149, 186, 232);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(149, 186, 232);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(149, 186, 232) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body dt {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body ol > li {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body ul > li {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(149, 186, 232);
}

html[saved-theme="light"] body blockquote {
  font-family: "yu gothic", yugothic, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body table {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  width: 176.969px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(56, 60, 78);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body figcaption {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  font-size: 14px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  margin-bottom: 14px;
  margin-top: 14px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(113, 121, 157);
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(56, 60, 78);
  text-decoration-color: rgb(56, 60, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(112, 200, 214);
  border-left-color: rgb(112, 200, 214);
  border-right-color: rgb(112, 200, 214);
  border-top-color: rgb(112, 200, 214);
  color: rgb(112, 200, 214);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(112, 200, 214);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(56, 60, 78);
  font-family: "yu gothic", yugothic, sans-serif;
  outline: rgb(56, 60, 78) none 0px;
  text-decoration-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(179, 182, 222);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 182, 222);
  border-right-color: rgb(179, 182, 222);
  border-top-color: rgb(179, 182, 222);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(233, 236, 247);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24.5px;
  border-bottom-right-radius: 24.5px;
  border-top-left-radius: 24.5px;
  border-top-right-radius: 24.5px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(150, 186, 232);
}

html[saved-theme="light"] body h1 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(190, 180, 218);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(235, 174, 202);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(228, 104, 114);
  border-left-width: 3px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(56, 60, 78);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(150, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(150, 186, 232);
  border-right-color: rgb(150, 186, 232);
  border-top-color: rgb(150, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(150, 186, 232);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(210, 149, 209);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(210, 149, 209);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(99, 74, 117);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(99, 74, 117);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(99, 74, 117);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(149, 186, 232);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(149, 186, 232);
  border-right-color: rgb(149, 186, 232);
  border-top-color: rgb(149, 186, 232);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(149, 186, 232);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(149, 186, 232);
  stroke: rgb(149, 186, 232);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(210, 149, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(210, 149, 209);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(149, 186, 232);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
  font-family: "yu gothic", yugothic, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(233, 236, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(56, 60, 78);
  font-family: "yu gothic ui", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(210, 149, 209);
  border-left-color: rgb(210, 149, 209);
  border-right-color: rgb(210, 149, 209);
  border-top-color: rgb(210, 149, 209);
  color: rgb(210, 149, 209);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(233, 236, 247);
  border-bottom-color: rgb(56, 60, 78);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 60, 78);
  font-size: 12.25px;
  padding-bottom: 1.225px;
  padding-left: 3.0625px;
  padding-right: 3.0625px;
  padding-top: 1.225px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(56, 60, 78);
  border-left-color: rgb(56, 60, 78);
  border-right-color: rgb(56, 60, 78);
  border-top-color: rgb(56, 60, 78);
}

html[saved-theme="light"] body sub {
  color: rgb(56, 60, 78);
  font-size: 11.6667px;
}

html[saved-theme="light"] body summary {
  color: rgb(56, 60, 78);
}

html[saved-theme="light"] body sup {
  color: rgb(56, 60, 78);
  font-size: 11.6667px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: rgb(150, 186, 232);
}`,
  },
};
