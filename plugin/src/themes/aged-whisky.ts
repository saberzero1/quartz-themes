import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "aged-whisky", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #090909 !important;
  --background-modifier-border-focus: #8d6a50 !important;
  --background-modifier-border-hover: #8d6a50 !important;
  --background-modifier-form-field: #090909 !important;
  --background-modifier-form-field-hover: #090909 !important;
  --background-primary: #090909 !important;
  --background-primary-alt: #8d6a50 !important;
  --background-secondary: #090909 !important;
  --background-secondary-alt: #090909 !important;
  --bases-cards-background: #090909 !important;
  --bases-cards-cover-background: #8d6a50 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #090909 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #8d6a50 !important;
  --bases-embed-border-color: #090909 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #adadad !important;
  --bases-table-border-color: #090909 !important;
  --bases-table-cell-background-active: #090909 !important;
  --bases-table-cell-background-disabled: #8d6a50 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #8d6a50 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #8d6a50 !important;
  --bases-table-header-background: #090909 !important;
  --bases-table-header-color: #adadad !important;
  --bases-table-summary-background: #090909 !important;
  --blur-background: color-mix(in srgb, #8e746d3a 65%, transparent) linear-gradient(#8e746d3a, color-mix(in srgb, #8e746d3a 65%, transparent)) !important;
  --bodyFont: 'yu gothic ui', sans-serif !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --callout-title-weight: 600;
  --canvas-background: #090909 !important;
  --canvas-card-label-color: #54453a !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #090909 !important;
  --caret-color: #adadad !important;
  --checkbox-border-color: #8d6a50 !important;
  --checkbox-border-color-hover: #8e746d !important;
  --checkbox-color: #8d6a50 !important;
  --checkbox-color-hover: #8e746d !important;
  --checkbox-marker-color: #090909 !important;
  --checkbox-radius: 0px !important;
  --checkbox-size: 12.5px !important;
  --checklist-done-color: #adadad !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #141414 !important;
  --code-border-color: #090909 !important;
  --code-comment: #54453a !important;
  --code-normal: #adadad !important;
  --code-punctuation: #adadad !important;
  --code-radius: 0px !important;
  --codeFont: 'yu gothic ui', sans-serif !important;
  --collapse-icon-color: #54453a !important;
  --collapse-icon-color-collapsed: #8d6a50 !important;
  --color-base-00: #090909 !important;
  --color-base-05: #090909 !important;
  --color-base-10: #8d6a50 !important;
  --color-base-100: #adadad !important;
  --color-base-20: #090909 !important;
  --color-base-25: #090909 !important;
  --color-base-30: #090909 !important;
  --color-base-35: #8d6a50 !important;
  --color-base-40: #8d6a50 !important;
  --color-base-50: #54453a !important;
  --color-base-60: #5b5556 !important;
  --color-base-70: #adadad !important;
  --dark: #adadad !important;
  --darkgray: #adadad !important;
  --divider-color: transparent !important;
  --dropdown-background: #8e746d3a !important;
  --dropdown-background-hover: #8d6a50 !important;
  --embed-block-shadow-hover: 0 0 0 1px #090909, inset 0 0 0 1px #090909 !important;
  --file-header-background: #090909 !important;
  --file-header-background-focused: #090909 !important;
  --file-line-width: 550px !important;
  --flair-background: #8e746d3a !important;
  --flair-color: #adadad !important;
  --font-mermaid: 'yu gothic ui', sans-serif !important;
  --font-text: 'yu gothic ui', sans-serif !important;
  --font-text-size: 12.5px !important;
  --footnote-divider-color: #090909 !important;
  --footnote-id-color: #adadad !important;
  --footnote-id-color-no-occurrences: #54453a !important;
  --footnote-radius: 0px !important;
  --graph-line: #8d6a50 !important;
  --graph-node: #adadad !important;
  --graph-node-focused: #8d6a50 !important;
  --graph-node-unresolved: #54453a !important;
  --graph-text: #adadad !important;
  --gray: #adadad !important;
  --headerFont: 'yu gothic ui', sans-serif !important;
  --heading-formatting: #54453a !important;
  --highlight: transparent !important;
  --hr-color: #adadad35 !important;
  --hr-thickness: 1px !important;
  --icon-color: #54453a !important;
  --icon-color-active: #8d6a50 !important;
  --icon-color-focused: #8e746d !important;
  --icon-color-hover: #8e746d !important;
  --inline-title-color: #8e746d !important;
  --inline-title-font: 'palatino', serif !important;
  --inline-title-size: 1.5em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #54453a !important;
  --input-placeholder-color: #54453a !important;
  --input-radius: 0px !important;
  --interactive-hover: #8d6a50 !important;
  --interactive-normal: #8e746d3a !important;
  --light: #090909 !important;
  --lightgray: #090909 !important;
  --link-color: #8d6a50 !important;
  --link-color-hover: #8e746d !important;
  --link-external-color: #8d6a50 !important;
  --link-external-color-hover: #8e746d !important;
  --link-unresolved-color: #8d6a50 !important;
  --list-marker-color: #54453a !important;
  --list-marker-color-collapsed: #8d6a50 !important;
  --list-marker-color-hover: #adadad !important;
  --menu-background: #090909 !important;
  --menu-border-color: #8d6a50 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #090909 !important;
  --metadata-divider-color: #090909 !important;
  --metadata-input-height: 21.875px !important;
  --metadata-input-text-color: #adadad !important;
  --metadata-label-text-color: #adadad !important;
  --metadata-label-text-color-hover: #adadad !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8d6a50 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #8d6a50 !important;
  --modal-background: #090909 !important;
  --modal-border-color: #8d6a50 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #54453a !important;
  --nav-collapse-icon-color-collapsed: #54453a !important;
  --nav-heading-color: #adadad !important;
  --nav-heading-color-collapsed: #54453a !important;
  --nav-heading-color-collapsed-hover: #adadad !important;
  --nav-heading-color-hover: #adadad !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #645f5a !important;
  --nav-item-color-active: #8e746d !important;
  --nav-item-color-highlighted: #8d6a50 !important;
  --nav-item-color-hover: #8e746d !important;
  --nav-item-color-selected: #adadad !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #54453a !important;
  --nav-tag-color-active: #adadad !important;
  --nav-tag-color-hover: #adadad !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #090909 !important;
  --pdf-page-background: #090909 !important;
  --pdf-shadow: 0 0 0 1px #090909 !important;
  --pdf-sidebar-background: #090909 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #090909 !important;
  --pill-border-color: #090909 !important;
  --pill-border-color-hover: #8d6a50 !important;
  --pill-color: #adadad !important;
  --pill-color-hover: #adadad !important;
  --pill-color-remove: #54453a !important;
  --pill-color-remove-hover: #8d6a50 !important;
  --popover-font-size: 12.5px !important;
  --prompt-background: #090909 !important;
  --prompt-border-color: #8d6a50 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #8e746d3a 65%, transparent) linear-gradient(#8e746d3a, color-mix(in srgb, #8e746d3a 65%, transparent)) !important;
  --ribbon-background: #090909 !important;
  --ribbon-background-collapsed: #090909 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #adadad !important;
  --search-icon-color: #adadad !important;
  --search-result-background: #090909 !important;
  --secondary: #8d6a50 !important;
  --setting-group-heading-color: #adadad !important;
  --setting-items-background: #8d6a50 !important;
  --setting-items-border-color: #090909 !important;
  --setting-items-radius: 0px !important;
  --sidebar-markdown-font-size: 11.25px !important;
  --slider-thumb-border-color: #8d6a50 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #8e746d !important;
  --status-bar-background: #090909 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #adadad !important;
  --suggestion-background: #090909 !important;
  --tab-background-active: #090909 !important;
  --tab-container-background: #090909 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #090909 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #090909, transparent) !important;
  --tab-text-color: #54453a !important;
  --tab-text-color-active: #856255 !important;
  --tab-text-color-focused: #856255 !important;
  --tab-text-color-focused-active: #adadad !important;
  --tab-text-color-focused-active-current: #adadad !important;
  --tab-text-color-focused-highlighted: #8d6a50 !important;
  --table-add-button-border-color: #090909 !important;
  --table-border-color: #090909 !important;
  --table-drag-handle-color: #54453a !important;
  --table-header-border-color: #090909 !important;
  --table-header-color: #adadad !important;
  --table-header-size: 12.5px !important;
  --table-text-size: 12.5px !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #abaeae !important;
  --tag-color-hover: #856255 !important;
  --tertiary: #8e746d !important;
  --text-accent: #8d6a50 !important;
  --text-accent-hover: #8e746d !important;
  --text-faint: #54453a !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #adadad !important;
  --text-normal: #adadad !important;
  --textHighlight: transparent !important;
  --titleFont: 'yu gothic ui', sans-serif !important;
  --titlebar-background: #090909 !important;
  --titlebar-background-focused: #090909 !important;
  --titlebar-border-color: #090909 !important;
  --titlebar-text-color: #adadad !important;
  --titlebar-text-color-focused: #adadad !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #adadad !important;
  --vault-profile-color-hover: #adadad !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

html body .bases-table thead th {
  border-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

html body .canvas-node {
  border-color: rgb(173, 173, 173);
}

html body .canvas-node-content {
  color: rgb(173, 173, 173);
}

html body .canvas-node-file {
  color: rgb(173, 173, 173);
}

html body .canvas-node-group {
  border-color: rgb(173, 173, 173);
}

html body .canvas-sidebar {
  background-color: rgb(9, 9, 9);
  border-color: rgb(173, 173, 173);
}

html body .note-properties {
  border-color: rgb(9, 9, 9);
}

html body .note-properties-key {
  color: rgb(173, 173, 173);
}

html body .note-properties-row {
  border-color: rgb(173, 173, 173);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 21.875px;
  color: rgb(171, 174, 174);
}

html body .note-properties-value {
  color: rgb(173, 173, 173);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(9, 9, 9);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(173, 173, 173);
}

html body div#quartz-root {
  background-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body .page article p > em, html em {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body .page article p > i, html i {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body .page article p > strong, html strong {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body del {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body h1.article-title {
  color: rgb(173, 173, 173);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 106, 80);
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(141, 106, 80);
  border-color: rgb(141, 106, 80);
}

html body p {
  color: rgb(173, 173, 173);
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}`,
    links: `html body a.external, html footer a {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
  text-decoration: underline rgba(142, 116, 109, 0.5);
  text-decoration-color: rgba(142, 116, 109, 0.5);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
  text-decoration: underline rgba(142, 116, 109, 0.5);
  text-decoration-color: rgba(142, 116, 109, 0.5);
}

html body a.internal.broken {
  color: rgb(141, 106, 80);
  font-family: "yu gothic ui", sans-serif;
  font-weight: 600;
  outline: rgb(141, 106, 80) none 0px;
}`,
    lists: `html body dd {
  color: rgb(173, 173, 173);
}

html body dl {
  margin-bottom: 12.5px;
  margin-top: 12.5px;
}

html body dt {
  color: rgb(173, 173, 173);
}

html body ol > li {
  color: rgb(173, 173, 173);
}

html body ol.overflow {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body ul > li {
  color: rgb(173, 173, 173);
}

html body ul.overflow {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(84, 69, 58);
}

html body blockquote {
  font-family: "yu gothic ui", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body table {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  width: 161.953px;
}

html body td {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}

html body th {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
}`,
    code: `html body code {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body figcaption {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  font-size: 12.5px;
}

html body figure {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  margin-bottom: 12.5px;
  margin-top: 12.5px;
}

html body img {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(173, 173, 173);
  border-radius: 8px;
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body video {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(141, 106, 80);
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

html body .transclude {
  border-bottom-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body .transclude-inner {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "yu gothic ui", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "yu gothic ui", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-left: -18.75px;
  width: 12.5px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(173, 173, 173);
  text-decoration-color: rgb(173, 173, 173);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(175, 169, 163);
  border-left-color: rgb(175, 169, 163);
  border-right-color: rgb(175, 169, 163);
  border-top-color: rgb(175, 169, 163);
  color: rgb(175, 169, 163);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(175, 169, 163);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(9, 9, 9);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body .search > .search-container > .search-space {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
  outline: rgb(173, 173, 173) none 0px;
  text-decoration-color: rgb(173, 173, 173);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(173, 173, 173);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(173, 173, 173);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(173, 173, 173);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(141, 106, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(141, 106, 80);
  border-right-color: rgb(141, 106, 80);
  border-top-color: rgb(141, 106, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 21.875px;
  border-bottom-right-radius: 21.875px;
  border-top-left-radius: 21.875px;
  border-top-right-radius: 21.875px;
}

html body a.internal.tag-link::before {
  color: rgb(171, 174, 174);
}

html body h1 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body h2 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(142, 116, 109);
  font-family: palatino, serif;
}

html body h3 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body h4 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body h5 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body h6 {
  color: rgb(150, 137, 136);
  font-family: palatino, serif;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(113, 81, 67);
  border-left-style: dashed;
  border-left-width: 1px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-left: 20px;
}

html body ::-webkit-scrollbar {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

html body ::-webkit-scrollbar-track {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(173, 173, 173);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 69, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 69, 58);
  border-right-color: rgb(84, 69, 58);
  border-top-color: rgb(84, 69, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(84, 69, 58);
}`,
    footer: `html body footer {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(173, 173, 173);
}

html body footer ul li a {
  color: rgb(173, 173, 173);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(173, 173, 173);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(100, 95, 90);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body li.section-li > .section .meta {
  color: rgb(100, 95, 90);
  font-family: "yu gothic ui", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(100, 95, 90);
}

html body ul.section-ul {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(84, 69, 58);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 69, 58);
  border-right-color: rgb(84, 69, 58);
  border-top-color: rgb(84, 69, 58);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(84, 69, 58);
}

html body .darkmode svg {
  color: rgb(84, 69, 58);
  stroke: rgb(84, 69, 58);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
}

html body .breadcrumb-element p {
  color: rgb(84, 69, 58);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

html body .metadata {
  border-bottom-color: rgb(9, 9, 9);
  border-left-color: rgb(9, 9, 9);
  border-right-color: rgb(9, 9, 9);
  border-top-color: rgb(9, 9, 9);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
  font-family: "yu gothic ui", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(9, 9, 9);
}

html body .page-header h2.page-title {
  color: rgb(173, 173, 173);
  font-family: palatino, serif;
}

html body abbr {
  color: rgb(173, 173, 173);
}

html body details {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body input[type=text] {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  color: rgb(173, 173, 173);
}

html body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(173, 173, 173);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(173, 173, 173);
  font-size: 10.9375px;
  padding-bottom: 1.09375px;
  padding-left: 2.73438px;
  padding-right: 2.73438px;
  padding-top: 1.09375px;
}

html body progress {
  border-bottom-color: rgb(173, 173, 173);
  border-left-color: rgb(173, 173, 173);
  border-right-color: rgb(173, 173, 173);
  border-top-color: rgb(173, 173, 173);
}

html body sub {
  color: rgb(173, 173, 173);
  font-size: 10.4167px;
}

html body summary {
  color: rgb(173, 173, 173);
}

html body sup {
  color: rgb(173, 173, 173);
  font-size: 10.4167px;
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(171, 174, 174);
}`,
  },
  light: {},
};
