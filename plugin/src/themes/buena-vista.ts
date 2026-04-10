import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "buena-vista",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-i-h: 438 !important;
  --accent-l-alt: max(66%, 75%) !important;
  --accent-s-alt: max(66%, 75%) !important;
  --background-blurred: hsl(0, 0%, 10.0%) !important;
  --background-blurred-alt: hsl(0, 0%, 13.6%) !important;
  --background-modifier-border: hsl(0, 0%, 26.7%) !important;
  --background-modifier-border-focus: hsl(0, 0%, 34.9%) !important;
  --background-modifier-border-hover: hsl(0, 0%, 30.7%) !important;
  --background-modifier-form-field: hsl(0, 0%, 16.3%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 16.3%) !important;
  --background-modifier-hover: hsl(258, 88%, 44.1%, 25%) !important;
  --background-primary: hsl(0, 0%, 10.0%) !important;
  --background-primary-alt: hsl(0, 0%, 13.6%) !important;
  --background-secondary: hsl(0, 0%, 26.7%) !important;
  --background-secondary-alt: hsl(0, 0%, 26.7%) !important;
  --background-semitransp: hsla(0, 0%, 10.0%, 85%) !important;
  --background-semitransp-alt: hsla(0, 0%, 13.6%, 85%) !important;
  --bases-cards-background: hsl(0, 0%, 10.0%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 13.6%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 26.7%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 0%, 30.7%) !important;
  --bases-embed-border-color: hsl(0, 0%, 26.7%) !important;
  --bases-group-heading-property-color: hsl(0, 0%, 64.6%) !important;
  --bases-table-border-color: hsl(0, 0%, 26.7%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 10.0%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 13.6%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0, 0%, 34.9%) !important;
  --bases-table-group-background: hsl(0, 0%, 13.6%) !important;
  --bases-table-header-background: hsl(0, 0%, 10.0%) !important;
  --bases-table-header-background-hover: hsl(258, 88%, 44.1%, 25%) !important;
  --bases-table-header-color: hsl(0, 0%, 64.6%) !important;
  --bases-table-summary-background: hsl(0, 0%, 10.0%) !important;
  --bases-table-summary-background-hover: hsl(258, 88%, 44.1%, 25%) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent) linear-gradient(hsl(0, 0%, 26.7%), color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent)) !important;
  --blur-size: 4 !important;
  --bold-color: hsl(438,  88%, 75.9%) !important;
  --bold-h: 438 !important;
  --button-alt-h: 258 !important;
  --button-h: 258 !important;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: hsl(0, 0%, 10.0%) !important;
  --canvas-card-label-color: hsl(0, 0%, 44.1%) !important;
  --canvas-dot-pattern: hsl(0, 0%, 26.7%) !important;
  --caret-color: hsl(0, 0%, 100%) !important;
  --checkbox-border-color: hsl(0, 0%, 44.1%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 64.6%) !important;
  --checkbox-color: hsl(258,  70.4%, 64.6%) !important;
  --checkbox-color-hover: hsl(258,  88%, 75.9%) !important;
  --checkbox-marker-color: hsl(0, 0%, 10.0%) !important;
  --checklist-done-color: hsl(0, 0%, 64.6%) !important;
  --code-background: hsl(0, 0%, 13.6%) !important;
  --code-border-color: hsl(0, 0%, 26.7%) !important;
  --code-bracket-background: hsl(258, 88%, 44.1%, 25%) !important;
  --code-comment: hsl(0, 0%, 44.1%) !important;
  --code-normal: hsl(0, 0%, 100%) !important;
  --code-punctuation: hsl(0, 0%, 64.6%) !important;
  --collapse-icon-color: hsl(0, 0%, 44.1%) !important;
  --color-00-l: 10.0% !important;
  --color-05-l: 11.4% !important;
  --color-10-l: 13.6% !important;
  --color-100-l: 100% !important;
  --color-15-l: 16.3% !important;
  --color-20-l: 19.5% !important;
  --color-25-l: 22.9% !important;
  --color-30-l: 26.7% !important;
  --color-35-l: 30.7% !important;
  --color-40-l: 34.9% !important;
  --color-50-l: 44.1% !important;
  --color-60-l: 54.0% !important;
  --color-70-l: 64.6% !important;
  --color-80-l: 75.9% !important;
  --color-90-l: 87.7% !important;
  --color-base-00: hsl(0, 0%, 10.0%) !important;
  --color-base-00-transp: #1e1e1e80 !important;
  --color-base-05: hsl(0, 0%, 11.4%) !important;
  --color-base-10: hsl(0, 0%, 13.6%) !important;
  --color-base-10-transp: #24242480 !important;
  --color-base-100: hsl(0, 0%, 100%) !important;
  --color-base-15: hsl(0, 0%, 16.3%) !important;
  --color-base-20: hsl(0, 0%, 19.5%) !important;
  --color-base-20-transp: #26262680 !important;
  --color-base-25: hsl(0, 0%, 22.9%) !important;
  --color-base-30: hsl(0, 0%, 26.7%) !important;
  --color-base-30-transp: #36363680 !important;
  --color-base-35: hsl(0, 0%, 30.7%) !important;
  --color-base-40: hsl(0, 0%, 34.9%) !important;
  --color-base-50: hsl(0, 0%, 44.1%) !important;
  --color-base-60: hsl(0, 0%, 54.0%) !important;
  --color-base-70: hsl(0, 0%, 64.6%) !important;
  --color-base-80: hsl(0, 0%, 75.9%) !important;
  --color-base-90: hsl(0, 0%, 87.7%) !important;
  --dark: hsl(0, 0%, 100%) !important;
  --darkgray: hsl(0, 0%, 100%) !important;
  --divider-color: hsl(0, 0%, 26.7%) !important;
  --dropdown-background: hsl(0, 0%, 26.7%) !important;
  --dropdown-background-hover: hsl(0, 0%, 30.7%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 26.7%), inset 0 0 0 1px hsl(0, 0%, 26.7%) !important;
  --embed-border-left: 1px solid hsl(258, 88%, 66%) !important;
  --embed-border-right: dashed white 1px !important;
  --embed-max-height: 80vh !important;
  --file-header-background: hsl(0, 0%, 10.0%) !important;
  --file-header-background-focused: hsl(0, 0%, 10.0%) !important;
  --file-header-font-weight: 600 !important;
  --flair-background: hsl(0, 0%, 26.7%) !important;
  --flair-color: hsl(0, 0%, 100%) !important;
  --footnote-divider-color: hsl(0, 0%, 26.7%) !important;
  --footnote-id-color: hsl(0, 0%, 64.6%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 44.1%) !important;
  --footnote-input-background-active: hsl(258, 88%, 44.1%, 25%) !important;
  --graph-line: hsl(0, 0%, 30.7%) !important;
  --graph-node: hsl(0, 0%, 64.6%) !important;
  --graph-node-unresolved: hsl(0, 0%, 44.1%) !important;
  --graph-text: hsl(0, 0%, 100%) !important;
  --gray: hsl(0, 0%, 64.6%) !important;
  --heading-formatting: hsl(0, 0%, 44.1%) !important;
  --highlight: hsla( 438, 88%, 66%, 50%) !important;
  --hr-color: hsl(0, 0%, 26.7%) !important;
  --icon-color: hsl(0, 0%, 64.6%) !important;
  --icon-color-focused: hsl(0, 0%, 100%) !important;
  --icon-color-hover: hsl(258,  88%, 87.7%) !important;
  --input-date-separator: hsl(0, 0%, 44.1%) !important;
  --input-placeholder-color: hsl(0, 0%, 44.1%) !important;
  --interactive-hover: hsl(0, 0%, 30.7%) !important;
  --interactive-normal: hsl(0, 0%, 26.7%) !important;
  --italic-color: hsl(258, 88%, 75.9%) !important;
  --italic-h: 258 !important;
  --light: hsl(0, 0%, 10.0%) !important;
  --lightgray: hsl(0, 0%, 26.7%) !important;
  --list-marker-color: hsl(0, 0%, 44.1%) !important;
  --list-marker-color-hover: hsl(0, 0%, 64.6%) !important;
  --max-highlight: 45% !important;
  --menu-background: hsl(0, 0%, 26.7%) !important;
  --menu-border-color: hsl(0, 0%, 30.7%) !important;
  --metadata-border-color: hsl(0, 0%, 26.7%) !important;
  --metadata-divider-color: hsl(0, 0%, 26.7%) !important;
  --metadata-input-background-active: hsl(258, 88%, 44.1%, 25%) !important;
  --metadata-input-text-color: hsl(0, 0%, 100%) !important;
  --metadata-label-background-active: hsl(258, 88%, 44.1%, 25%) !important;
  --metadata-label-text-color: hsl(0, 0%, 64.6%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 64.6%) !important;
  --metadata-property-background-active: hsl(258, 88%, 44.1%, 25%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0, 0%, 34.9%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0, 0%, 30.7%) !important;
  --min-highlight: 35% !important;
  --modal-background: hsl(0, 0%, 10.0%) !important;
  --modal-border-color: hsl(0, 0%, 34.9%) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: hsl(0, 0%, 44.1%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 44.1%) !important;
  --nav-heading-color: hsl(0, 0%, 100%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 44.1%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 64.6%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 100%) !important;
  --nav-item-background-active: hsl(258, 88%, 66%) !important;
  --nav-item-background-hover: hsla(258, 88%, 34.9%, 33%) !important;
  --nav-item-color: hsl(0, 0%, 64.6%) !important;
  --nav-item-color-active: white !important;
  --nav-item-color-hover: hsl(258,  88%, 87.7%) !important;
  --nav-item-color-selected: hsl(0, 0%, 100%) !important;
  --nav-tag-color: hsl(0, 0%, 44.1%) !important;
  --nav-tag-color-active: hsl(0, 0%, 64.6%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 64.6%) !important;
  --pdf-background: hsl(0, 0%, 10.0%) !important;
  --pdf-page-background: hsl(0, 0%, 10.0%) !important;
  --pdf-shadow: 0 0 0 1px hsl(0, 0%, 26.7%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 10.0%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0, 0%, 26.7%) !important;
  --pill-border-color: hsl(0, 0%, 26.7%) !important;
  --pill-border-color-hover: hsl(0, 0%, 30.7%) !important;
  --pill-color: hsl(0, 0%, 64.6%) !important;
  --pill-color-hover: hsl(0, 0%, 100%) !important;
  --pill-color-remove: hsl(0, 0%, 44.1%) !important;
  --prompt-background: hsl(0, 0%, 10.0%) !important;
  --prompt-border-color: hsl(0, 0%, 34.9%) !important;
  --prompt-border-width: 0 !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent) linear-gradient(hsl(0, 0%, 26.7%), color-mix(in srgb, hsl(0, 0%, 26.7%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 26.7%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 10.0%) !important;
  --search-clear-button-color: hsl(0, 0%, 64.6%) !important;
  --search-icon-color: hsl(0, 0%, 64.6%) !important;
  --search-result-background: hsl(0, 0%, 10.0%) !important;
  --setting-group-heading-color: hsl(0, 0%, 100%) !important;
  --setting-items-background: hsl(0, 0%, 13.6%) !important;
  --setting-items-border-color: hsl(0, 0%, 26.7%) !important;
  --slider-thumb-border-color: hsl(0, 0%, 30.7%) !important;
  --slider-track-background: hsl(0, 0%, 26.7%) !important;
  --status-bar-background: hsl(0, 0%, 26.7%) !important;
  --status-bar-border-color: hsl(0, 0%, 26.7%) !important;
  --status-bar-text-color: hsl(0, 0%, 64.6%) !important;
  --suggestion-background: hsl(0, 0%, 10.0%) !important;
  --tab-background-active: hsl(0, 0%, 10.0%) !important;
  --tab-container-background: hsl(0, 0%, 19.5%) !important;
  --tab-divider-color: hsl(0, 0%, 30.7%) !important;
  --tab-outline-color: hsl(0, 0%, 26.7%) !important;
  --tab-outline-width: 0 !important;
  --tab-switcher-background: hsl(0, 0%, 26.7%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 26.7%), transparent) !important;
  --tab-text-color: hsl(0, 0%, 44.1%) !important;
  --tab-text-color-active: hsl(0, 0%, 64.6%) !important;
  --tab-text-color-focused: hsl(0, 0%, 64.6%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 64.6%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 100%) !important;
  --table-add-button-border-color: hsl(0, 0%, 26.7%) !important;
  --table-border-color: hsl(0, 0%, 26.7%) !important;
  --table-drag-handle-color: hsl(0, 0%, 44.1%) !important;
  --table-header-border-color: hsl(0, 0%, 26.7%) !important;
  --table-header-color: hsl(0, 0%, 100%) !important;
  --text-faint: hsl(0, 0%, 44.1%) !important;
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%) !important;
  --text-highlight-h: 438 !important;
  --text-muted: hsl(0, 0%, 64.6%) !important;
  --text-normal: hsl(0, 0%, 100%) !important;
  --textHighlight: hsla( 438, 88%, 66%, 50%) !important;
  --titlebar-background: hsl(0, 0%, 19.5%) !important;
  --titlebar-background-focused: #36363680 !important;
  --titlebar-border-color: hsl(0, 0%, 26.7%) !important;
  --titlebar-text-color: hsl(0, 0%, 64.6%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 100%) !important;
  --vault-profile-color: hsl(0, 0%, 100%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 100%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
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
  background-color: rgb(68, 68, 68);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(35, 35, 35);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
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
  border-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(139, 101, 228);
  border-color: rgb(139, 101, 228);
}

html[saved-theme="dark"] body p {
  color: rgb(165, 165, 165);
  outline: rgb(165, 165, 165) none 0px;
  text-decoration-color: rgb(165, 165, 165);
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
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(35, 35, 35, 0.85);
  padding-bottom: 8px;
  padding-top: 8px;
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
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(35, 35, 35, 0.85);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(35, 35, 35, 0.85);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
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
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
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
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-width: 0px;
  border-left-color: rgb(89, 89, 89);
  border-left-width: 0px;
  border-right-color: rgb(89, 89, 89);
  border-right-width: 0px;
  border-top-color: rgb(89, 89, 89);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(73, 13, 211, 0.25);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(165, 165, 165);
  cursor: pointer;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 165, 165);
  cursor: pointer;
  font-weight: 600;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(165, 165, 165);
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
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 165, 165);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(165, 165, 165);
  stroke: rgb(165, 165, 165);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(112, 112, 112);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(68, 68, 68);
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
  border-bottom-color: rgb(165, 165, 165);
  border-left-color: rgb(165, 165, 165);
  border-right-color: rgb(165, 165, 165);
  border-top-color: rgb(165, 165, 165);
  color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(35, 35, 35);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-i-h: 438 !important;
  --accent-l-alt: min(66%, 40%) !important;
  --accent-s-alt: min(110%, 75%) !important;
  --background-blurred: hsl(0, 0%, 100%) !important;
  --background-blurred-alt: hsl(0, 0%, 95.5%) !important;
  --background-modifier-border: hsl(0, 0%, 81.2%) !important;
  --background-modifier-border-focus: hsl(0, 0%, 72.7%) !important;
  --background-modifier-border-hover: hsl(0, 0%, 77.0%) !important;
  --background-modifier-form-field: hsl(0, 0%, 92.4%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 92.4%) !important;
  --background-modifier-hover: hsl(258, 88%, 63.4%, 25%) !important;
  --background-primary: hsl(0, 0%, 100%) !important;
  --background-primary-alt: hsl(0, 0%, 95.5%) !important;
  --background-secondary: hsl(0, 0%, 81.2%) !important;
  --background-secondary-alt: hsl(0, 0%, 98.2%) !important;
  --background-semitransp: hsla(0, 0%, 100%, 85%) !important;
  --background-semitransp-alt: hsla(0, 0%, 95.5%, 85%) !important;
  --bases-cards-background: hsl(0, 0%, 100%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 95.5%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 81.2%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 0%, 77.0%) !important;
  --bases-embed-border-color: hsl(0, 0%, 81.2%) !important;
  --bases-group-heading-property-color: hsl(0, 0%, 43.4%) !important;
  --bases-table-border-color: hsl(0, 0%, 81.2%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 100%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 95.5%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0, 0%, 72.7%) !important;
  --bases-table-group-background: hsl(0, 0%, 95.5%) !important;
  --bases-table-header-background: hsl(0, 0%, 100%) !important;
  --bases-table-header-background-hover: hsl(258, 88%, 63.4%, 25%) !important;
  --bases-table-header-color: hsl(0, 0%, 43.4%) !important;
  --bases-table-summary-background: hsl(0, 0%, 100%) !important;
  --bases-table-summary-background-hover: hsl(258, 88%, 63.4%, 25%) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)) !important;
  --blur-size: 4 !important;
  --bold-color: hsl(438,  88%, 32.7%) !important;
  --bold-h: 438 !important;
  --button-alt-h: 258 !important;
  --button-h: 258 !important;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: hsl(0, 0%, 100%) !important;
  --canvas-card-label-color: hsl(0, 0%, 63.4%) !important;
  --canvas-dot-pattern: hsl(0, 0%, 81.2%) !important;
  --caret-color: hsl(0, 0%, 10%) !important;
  --checkbox-border-color: hsl(0, 0%, 63.4%) !important;
  --checkbox-border-color-hover: hsl(0, 0%, 43.4%) !important;
  --checkbox-color: hsl(258,  70.4%, 43.4%) !important;
  --checkbox-color-hover: hsl(258,  88%, 32.7%) !important;
  --checkbox-marker-color: hsl(0, 0%, 100%) !important;
  --checklist-done-color: hsl(0, 0%, 43.4%) !important;
  --code-background: hsl(0, 0%, 95.5%) !important;
  --code-border-color: hsl(0, 0%, 81.2%) !important;
  --code-bracket-background: hsl(258, 88%, 63.4%, 25%) !important;
  --code-comment: hsl(0, 0%, 63.4%) !important;
  --code-normal: hsl(0, 0%, 10%) !important;
  --code-punctuation: hsl(0, 0%, 43.4%) !important;
  --collapse-icon-color: hsl(0, 0%, 63.4%) !important;
  --color-00-l: 100% !important;
  --color-05-l: 98.2% !important;
  --color-10-l: 95.5% !important;
  --color-100-l: 10% !important;
  --color-15-l: 92.4% !important;
  --color-20-l: 88.9% !important;
  --color-25-l: 85.2% !important;
  --color-30-l: 81.2% !important;
  --color-35-l: 77.0% !important;
  --color-40-l: 72.7% !important;
  --color-50-l: 63.4% !important;
  --color-60-l: 53.7% !important;
  --color-70-l: 43.4% !important;
  --color-80-l: 32.7% !important;
  --color-90-l: 21.5% !important;
  --color-base-00: hsl(0, 0%, 100%) !important;
  --color-base-00-transp: #ffffff80 !important;
  --color-base-05: hsl(0, 0%, 98.2%) !important;
  --color-base-10: hsl(0, 0%, 95.5%) !important;
  --color-base-10-transp: #fafafa80 !important;
  --color-base-100: hsl(0, 0%, 10%) !important;
  --color-base-15: hsl(0, 0%, 92.4%) !important;
  --color-base-20: hsl(0, 0%, 88.9%) !important;
  --color-base-20-transp: #f6f6f680 !important;
  --color-base-25: hsl(0, 0%, 85.2%) !important;
  --color-base-30: hsl(0, 0%, 81.2%) !important;
  --color-base-30-transp: #e0e0e080 !important;
  --color-base-35: hsl(0, 0%, 77.0%) !important;
  --color-base-40: hsl(0, 0%, 72.7%) !important;
  --color-base-50: hsl(0, 0%, 63.4%) !important;
  --color-base-60: hsl(0, 0%, 53.7%) !important;
  --color-base-70: hsl(0, 0%, 43.4%) !important;
  --color-base-80: hsl(0, 0%, 32.7%) !important;
  --color-base-90: hsl(0, 0%, 21.5%) !important;
  --dark: hsl(0, 0%, 10%) !important;
  --darkgray: hsl(0, 0%, 10%) !important;
  --divider-color: hsl(0, 0%, 81.2%) !important;
  --dropdown-background: hsl(0, 0%, 100%) !important;
  --dropdown-background-hover: hsl(0, 0%, 95.5%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 81.2%), inset 0 0 0 1px hsl(0, 0%, 81.2%) !important;
  --embed-border-left: 1px solid hsl(257, 88.88%, 70.95%) !important;
  --embed-border-right: dashed white 1px !important;
  --embed-max-height: 80vh !important;
  --file-header-background: hsl(0, 0%, 100%) !important;
  --file-header-background-focused: hsl(0, 0%, 100%) !important;
  --file-header-font-weight: 600 !important;
  --flair-background: hsl(0, 0%, 100%) !important;
  --flair-color: hsl(0, 0%, 10%) !important;
  --footnote-divider-color: hsl(0, 0%, 81.2%) !important;
  --footnote-id-color: hsl(0, 0%, 43.4%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 63.4%) !important;
  --footnote-input-background-active: hsl(258, 88%, 63.4%, 25%) !important;
  --graph-line: hsl(0, 0%, 77.0%) !important;
  --graph-node: hsl(0, 0%, 43.4%) !important;
  --graph-node-unresolved: hsl(0, 0%, 63.4%) !important;
  --graph-text: hsl(0, 0%, 10%) !important;
  --gray: hsl(0, 0%, 43.4%) !important;
  --heading-formatting: hsl(0, 0%, 63.4%) !important;
  --highlight: hsla( 438, 88%, 66%, 50%) !important;
  --hr-color: hsl(0, 0%, 81.2%) !important;
  --icon-color: hsl(0, 0%, 43.4%) !important;
  --icon-color-focused: hsl(0, 0%, 10%) !important;
  --icon-color-hover: hsl(258,  88%, 21.5%) !important;
  --input-date-separator: hsl(0, 0%, 63.4%) !important;
  --input-placeholder-color: hsl(0, 0%, 63.4%) !important;
  --interactive-hover: hsl(0, 0%, 95.5%) !important;
  --interactive-normal: hsl(0, 0%, 100%) !important;
  --italic-color: hsl(258, 88%, 32.7%) !important;
  --italic-h: 258 !important;
  --light: hsl(0, 0%, 100%) !important;
  --lightgray: hsl(0, 0%, 81.2%) !important;
  --list-marker-color: hsl(0, 0%, 63.4%) !important;
  --list-marker-color-hover: hsl(0, 0%, 43.4%) !important;
  --max-highlight: 65% !important;
  --menu-background: hsl(0, 0%, 81.2%) !important;
  --menu-border-color: hsl(0, 0%, 77.0%) !important;
  --metadata-border-color: hsl(0, 0%, 81.2%) !important;
  --metadata-divider-color: hsl(0, 0%, 81.2%) !important;
  --metadata-input-background-active: hsl(258, 88%, 63.4%, 25%) !important;
  --metadata-input-text-color: hsl(0, 0%, 10%) !important;
  --metadata-label-background-active: hsl(258, 88%, 63.4%, 25%) !important;
  --metadata-label-text-color: hsl(0, 0%, 43.4%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 43.4%) !important;
  --metadata-property-background-active: hsl(258, 88%, 63.4%, 25%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0, 0%, 72.7%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0, 0%, 77.0%) !important;
  --min-highlight: 45% !important;
  --modal-background: hsl(0, 0%, 100%) !important;
  --modal-border-color: hsl(0, 0%, 72.7%) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: hsl(0, 0%, 63.4%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 63.4%) !important;
  --nav-heading-color: hsl(0, 0%, 10%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 63.4%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 43.4%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 10%) !important;
  --nav-item-background-active: hsl(257, 88.88%, 70.95%) !important;
  --nav-item-background-hover: hsla(258, 88%, 72.7%, 33%) !important;
  --nav-item-color: hsl(0, 0%, 43.4%) !important;
  --nav-item-color-active: white !important;
  --nav-item-color-hover: hsl(258,  88%, 21.5%) !important;
  --nav-item-color-selected: hsl(0, 0%, 10%) !important;
  --nav-tag-color: hsl(0, 0%, 63.4%) !important;
  --nav-tag-color-active: hsl(0, 0%, 43.4%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 43.4%) !important;
  --pdf-background: hsl(0, 0%, 100%) !important;
  --pdf-page-background: hsl(0, 0%, 100%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 100%) !important;
  --pill-border-color: hsl(0, 0%, 81.2%) !important;
  --pill-border-color-hover: hsl(0, 0%, 77.0%) !important;
  --pill-color: hsl(0, 0%, 43.4%) !important;
  --pill-color-hover: hsl(0, 0%, 10%) !important;
  --pill-color-remove: hsl(0, 0%, 63.4%) !important;
  --prompt-background: hsl(0, 0%, 100%) !important;
  --prompt-border-color: hsl(0, 0%, 72.7%) !important;
  --prompt-border-width: 0 !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 81.2%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 100%) !important;
  --search-clear-button-color: hsl(0, 0%, 43.4%) !important;
  --search-icon-color: hsl(0, 0%, 43.4%) !important;
  --search-result-background: hsl(0, 0%, 100%) !important;
  --setting-group-heading-color: hsl(0, 0%, 10%) !important;
  --setting-items-background: hsl(0, 0%, 95.5%) !important;
  --setting-items-border-color: hsl(0, 0%, 81.2%) !important;
  --slider-thumb-border-color: hsl(0, 0%, 77.0%) !important;
  --slider-track-background: hsl(0, 0%, 81.2%) !important;
  --status-bar-background: hsl(0, 0%, 81.2%) !important;
  --status-bar-border-color: hsl(0, 0%, 81.2%) !important;
  --status-bar-text-color: hsl(0, 0%, 43.4%) !important;
  --suggestion-background: hsl(0, 0%, 100%) !important;
  --tab-background-active: hsl(0, 0%, 100%) !important;
  --tab-container-background: hsl(0, 0%, 88.9%) !important;
  --tab-divider-color: hsl(0, 0%, 77.0%) !important;
  --tab-outline-color: hsl(0, 0%, 81.2%) !important;
  --tab-outline-width: 0 !important;
  --tab-switcher-background: hsl(0, 0%, 81.2%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 81.2%), transparent) !important;
  --tab-text-color: hsl(0, 0%, 63.4%) !important;
  --tab-text-color-active: hsl(0, 0%, 43.4%) !important;
  --tab-text-color-focused: hsl(0, 0%, 43.4%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 43.4%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 10%) !important;
  --table-add-button-border-color: hsl(0, 0%, 81.2%) !important;
  --table-border-color: hsl(0, 0%, 81.2%) !important;
  --table-drag-handle-color: hsl(0, 0%, 63.4%) !important;
  --table-header-border-color: hsl(0, 0%, 81.2%) !important;
  --table-header-color: hsl(0, 0%, 10%) !important;
  --text-faint: hsl(0, 0%, 63.4%) !important;
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%) !important;
  --text-highlight-h: 438 !important;
  --text-muted: hsl(0, 0%, 43.4%) !important;
  --text-normal: hsl(0, 0%, 10%) !important;
  --textHighlight: hsla( 438, 88%, 66%, 50%) !important;
  --titlebar-background: hsl(0, 0%, 88.9%) !important;
  --titlebar-background-focused: #e0e0e080 !important;
  --titlebar-border-color: hsl(0, 0%, 81.2%) !important;
  --titlebar-text-color: hsl(0, 0%, 43.4%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 10%) !important;
  --vault-profile-color: hsl(0, 0%, 10%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 10%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 244);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(26, 26, 26);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 26, 26);
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(162, 162, 162);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 33, 189);
  border-color: rgb(80, 33, 189);
}

html[saved-theme="light"] body p {
  color: rgb(111, 111, 111);
  outline: rgb(111, 111, 111) none 0px;
  text-decoration-color: rgb(111, 111, 111);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(244, 244, 244, 0.85);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body table {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 207, 207);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(244, 244, 244, 0.85);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(244, 244, 244, 0.85);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 162, 162);
  border-left-color: rgb(162, 162, 162);
  border-right-color: rgb(162, 162, 162);
  border-top-color: rgb(162, 162, 162);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(185, 185, 185);
  border-bottom-width: 0px;
  border-left-color: rgb(185, 185, 185);
  border-left-width: 0px;
  border-right-color: rgb(185, 185, 185);
  border-right-width: 0px;
  border-top-color: rgb(185, 185, 185);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(129, 80, 244, 0.25);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h3 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h4 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h5 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h6 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  padding-bottom: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 111, 111);
  cursor: pointer;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 111, 111);
  cursor: pointer;
  font-weight: 600;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(207, 207, 207);
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(111, 111, 111);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 111, 111);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(111, 111, 111);
  stroke: rgb(111, 111, 111);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(162, 162, 162);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 207, 207);
  border-left-color: rgb(207, 207, 207);
  border-right-color: rgb(207, 207, 207);
  border-top-color: rgb(207, 207, 207);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(207, 207, 207);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 111, 111);
  border-left-color: rgb(111, 111, 111);
  border-right-color: rgb(111, 111, 111);
  border-top-color: rgb(111, 111, 111);
  color: rgb(111, 111, 111);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(244, 244, 244);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
