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
  --background-blurred: rgb(26, 26, 26) !important;
  --background-blurred-alt: rgb(36, 36, 36) !important;
  --background-modifier-border: rgb(69, 69, 69) !important;
  --background-modifier-border-focus: rgb(89, 89, 89) !important;
  --background-modifier-border-hover: rgb(79, 79, 79) !important;
  --background-modifier-form-field: rgb(41, 41, 41) !important;
  --background-modifier-form-field-hover: rgb(41, 41, 41) !important;
  --background-modifier-hover: rgb(73, 13, 211) !important;
  --background-primary: rgb(26, 26, 26) !important;
  --background-primary-alt: rgb(36, 36, 36) !important;
  --background-secondary: rgb(69, 69, 69) !important;
  --background-secondary-alt: rgb(69, 69, 69) !important;
  --background-semitransp: rgba(26, 26, 26, 0.85) !important;
  --background-semitransp-alt: rgba(36, 36, 36, 0.85) !important;
  --bases-cards-background: rgb(26, 26, 26) !important;
  --bases-cards-cover-background: rgb(36, 36, 36) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(69, 69, 69) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(79, 79, 79) !important;
  --bases-embed-border-color: rgb(69, 69, 69) !important;
  --bases-group-heading-property-color: rgb(166, 166, 166) !important;
  --bases-table-border-color: rgb(69, 69, 69) !important;
  --bases-table-cell-background-active: rgb(26, 26, 26) !important;
  --bases-table-cell-background-disabled: rgb(36, 36, 36) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 89, 89) !important;
  --bases-table-group-background: rgb(36, 36, 36) !important;
  --bases-table-header-background: rgb(26, 26, 26) !important;
  --bases-table-header-background-hover: rgb(73, 13, 211) !important;
  --bases-table-header-color: rgb(166, 166, 166) !important;
  --bases-table-summary-background: rgb(26, 26, 26) !important;
  --bases-table-summary-background-hover: rgb(73, 13, 211) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, rgb(69, 69, 69) 65%, transparent) linear-gradient(rgb(69, 69, 69), color-mix(in srgb, rgb(69, 69, 69) 65%, transparent)) !important;
  --blur-size: 4 !important;
  --bold-color: hsl(438,  88%, 76%) !important;
  --bold-h: 438 !important;
  --button-alt-h: 258 !important;
  --button-h: 258 !important;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: rgb(26, 26, 26) !important;
  --canvas-card-label-color: rgb(112, 112, 112) !important;
  --canvas-dot-pattern: rgb(69, 69, 69) !important;
  --caret-color: rgb(255, 255, 255) !important;
  --checkbox-border-color: rgb(112, 112, 112) !important;
  --checkbox-border-color-hover: rgb(166, 166, 166) !important;
  --checkbox-color: rgb(141, 103, 228) !important;
  --checkbox-color-hover: rgb(172, 140, 248) !important;
  --checkbox-marker-color: rgb(26, 26, 26) !important;
  --checklist-done-color: rgb(166, 166, 166) !important;
  --code-background: rgb(36, 36, 36) !important;
  --code-border-color: rgb(69, 69, 69) !important;
  --code-bracket-background: rgb(73, 13, 211) !important;
  --code-comment: rgb(112, 112, 112) !important;
  --code-normal: rgb(255, 255, 255) !important;
  --code-punctuation: rgb(166, 166, 166) !important;
  --collapse-icon-color: rgb(112, 112, 112) !important;
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
  --color-base-00: rgb(26, 26, 26) !important;
  --color-base-00-transp: #1e1e1e80 !important;
  --color-base-05: rgb(28, 28, 28) !important;
  --color-base-10: rgb(36, 36, 36) !important;
  --color-base-10-transp: #24242480 !important;
  --color-base-100: rgb(255, 255, 255) !important;
  --color-base-15: rgb(41, 41, 41) !important;
  --color-base-20: rgb(51, 51, 51) !important;
  --color-base-20-transp: #26262680 !important;
  --color-base-25: rgb(59, 59, 59) !important;
  --color-base-30: rgb(69, 69, 69) !important;
  --color-base-30-transp: #36363680 !important;
  --color-base-35: rgb(79, 79, 79) !important;
  --color-base-40: rgb(89, 89, 89) !important;
  --color-base-50: rgb(112, 112, 112) !important;
  --color-base-60: rgb(138, 138, 138) !important;
  --color-base-70: rgb(166, 166, 166) !important;
  --color-base-80: rgb(194, 194, 194) !important;
  --color-base-90: rgb(224, 224, 224) !important;
  --dark: rgb(255, 255, 255) !important;
  --darkgray: rgb(255, 255, 255) !important;
  --divider-color: rgb(69, 69, 69) !important;
  --dropdown-background: rgb(69, 69, 69) !important;
  --dropdown-background-hover: rgb(79, 79, 79) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(69, 69, 69), inset 0 0 0 1px rgb(69, 69, 69) !important;
  --embed-border-left: 1px solid rgb(138, 92, 245) !important;
  --embed-border-right: dashed white 1px !important;
  --embed-max-height: 80vh !important;
  --file-header-background: rgb(26, 26, 26) !important;
  --file-header-background-focused: rgb(26, 26, 26) !important;
  --file-header-font-weight: 600 !important;
  --flair-background: rgb(69, 69, 69) !important;
  --flair-color: rgb(255, 255, 255) !important;
  --footnote-divider-color: rgb(69, 69, 69) !important;
  --footnote-id-color: rgb(166, 166, 166) !important;
  --footnote-id-color-no-occurrences: rgb(112, 112, 112) !important;
  --footnote-input-background-active: rgb(73, 13, 211) !important;
  --graph-line: rgb(79, 79, 79) !important;
  --graph-node: rgb(166, 166, 166) !important;
  --graph-node-unresolved: rgb(112, 112, 112) !important;
  --graph-text: rgb(255, 255, 255) !important;
  --gray: rgb(166, 166, 166) !important;
  --heading-formatting: rgb(112, 112, 112) !important;
  --highlight: hsla( 438, 88%, 66%, 50%) !important;
  --hr-color: rgb(69, 69, 69) !important;
  --icon-color: rgb(166, 166, 166) !important;
  --icon-color-focused: rgb(255, 255, 255) !important;
  --icon-color-hover: rgb(214, 197, 251) !important;
  --input-date-separator: rgb(112, 112, 112) !important;
  --input-placeholder-color: rgb(112, 112, 112) !important;
  --interactive-hover: rgb(79, 79, 79) !important;
  --interactive-normal: rgb(69, 69, 69) !important;
  --italic-color: rgb(172, 140, 248) !important;
  --italic-h: 258 !important;
  --light: rgb(26, 26, 26) !important;
  --lightgray: rgb(69, 69, 69) !important;
  --list-marker-color: rgb(112, 112, 112) !important;
  --list-marker-color-hover: rgb(166, 166, 166) !important;
  --max-highlight: 45% !important;
  --menu-background: rgb(69, 69, 69) !important;
  --menu-border-color: rgb(79, 79, 79) !important;
  --metadata-border-color: rgb(69, 69, 69) !important;
  --metadata-divider-color: rgb(69, 69, 69) !important;
  --metadata-input-background-active: rgb(73, 13, 211) !important;
  --metadata-input-text-color: rgb(255, 255, 255) !important;
  --metadata-label-background-active: rgb(73, 13, 211) !important;
  --metadata-label-text-color: rgb(166, 166, 166) !important;
  --metadata-label-text-color-hover: rgb(166, 166, 166) !important;
  --metadata-property-background-active: rgb(73, 13, 211) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 89, 89) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(79, 79, 79) !important;
  --min-highlight: 35% !important;
  --modal-background: rgb(26, 26, 26) !important;
  --modal-border-color: rgb(89, 89, 89) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: rgb(112, 112, 112) !important;
  --nav-collapse-icon-color-collapsed: rgb(112, 112, 112) !important;
  --nav-heading-color: rgb(255, 255, 255) !important;
  --nav-heading-color-collapsed: rgb(112, 112, 112) !important;
  --nav-heading-color-collapsed-hover: rgb(166, 166, 166) !important;
  --nav-heading-color-hover: rgb(255, 255, 255) !important;
  --nav-item-background-active: rgb(138, 92, 245) !important;
  --nav-item-background-hover: rgba(58, 11, 168, 0.33) !important;
  --nav-item-color: rgb(166, 166, 166) !important;
  --nav-item-color-active: white !important;
  --nav-item-color-hover: rgb(214, 197, 251) !important;
  --nav-item-color-selected: rgb(255, 255, 255) !important;
  --nav-tag-color: rgb(112, 112, 112) !important;
  --nav-tag-color-active: rgb(166, 166, 166) !important;
  --nav-tag-color-hover: rgb(166, 166, 166) !important;
  --pdf-background: rgb(26, 26, 26) !important;
  --pdf-page-background: rgb(26, 26, 26) !important;
  --pdf-shadow: 0 0 0 1px rgb(69, 69, 69) !important;
  --pdf-sidebar-background: rgb(26, 26, 26) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(69, 69, 69) !important;
  --pill-border-color: rgb(69, 69, 69) !important;
  --pill-border-color-hover: rgb(79, 79, 79) !important;
  --pill-color: rgb(166, 166, 166) !important;
  --pill-color-hover: rgb(255, 255, 255) !important;
  --pill-color-remove: rgb(112, 112, 112) !important;
  --prompt-background: rgb(26, 26, 26) !important;
  --prompt-border-color: rgb(89, 89, 89) !important;
  --prompt-border-width: 0 !important;
  --raised-background: color-mix(in srgb, rgb(69, 69, 69) 65%, transparent) linear-gradient(rgb(69, 69, 69), color-mix(in srgb, rgb(69, 69, 69) 65%, transparent)) !important;
  --ribbon-background: rgb(69, 69, 69) !important;
  --ribbon-background-collapsed: rgb(26, 26, 26) !important;
  --search-clear-button-color: rgb(166, 166, 166) !important;
  --search-icon-color: rgb(166, 166, 166) !important;
  --search-result-background: rgb(26, 26, 26) !important;
  --setting-group-heading-color: rgb(255, 255, 255) !important;
  --setting-items-background: rgb(36, 36, 36) !important;
  --setting-items-border-color: rgb(69, 69, 69) !important;
  --slider-thumb-border-color: rgb(79, 79, 79) !important;
  --slider-track-background: rgb(69, 69, 69) !important;
  --status-bar-background: rgb(69, 69, 69) !important;
  --status-bar-border-color: rgb(69, 69, 69) !important;
  --status-bar-text-color: rgb(166, 166, 166) !important;
  --suggestion-background: rgb(26, 26, 26) !important;
  --tab-background-active: rgb(26, 26, 26) !important;
  --tab-container-background: rgb(51, 51, 51) !important;
  --tab-divider-color: rgb(79, 79, 79) !important;
  --tab-outline-color: rgb(69, 69, 69) !important;
  --tab-outline-width: 0 !important;
  --tab-switcher-background: rgb(69, 69, 69) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(69, 69, 69), transparent) !important;
  --tab-text-color: rgb(112, 112, 112) !important;
  --tab-text-color-active: rgb(166, 166, 166) !important;
  --tab-text-color-focused: rgb(166, 166, 166) !important;
  --tab-text-color-focused-active: rgb(166, 166, 166) !important;
  --tab-text-color-focused-active-current: rgb(255, 255, 255) !important;
  --table-add-button-border-color: rgb(69, 69, 69) !important;
  --table-border-color: rgb(69, 69, 69) !important;
  --table-drag-handle-color: rgb(112, 112, 112) !important;
  --table-header-border-color: rgb(69, 69, 69) !important;
  --table-header-color: rgb(255, 255, 255) !important;
  --text-faint: rgb(112, 112, 112) !important;
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%) !important;
  --text-highlight-h: 438 !important;
  --text-muted: rgb(166, 166, 166) !important;
  --text-normal: rgb(255, 255, 255) !important;
  --textHighlight: hsla( 438, 88%, 66%, 50%) !important;
  --titlebar-background: rgb(51, 51, 51) !important;
  --titlebar-background-focused: #36363680 !important;
  --titlebar-border-color: rgb(69, 69, 69) !important;
  --titlebar-text-color: rgb(166, 166, 166) !important;
  --titlebar-text-color-focused: rgb(255, 255, 255) !important;
  --vault-profile-color: rgb(255, 255, 255) !important;
  --vault-profile-color-hover: rgb(255, 255, 255) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(255, 255, 255);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration: rgb(215, 248, 139);
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration: rgb(172, 139, 248);
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(172, 139, 248);
  outline: rgb(172, 139, 248) none 0px;
  text-decoration: rgb(172, 139, 248);
  text-decoration-color: rgb(172, 139, 248);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(215, 248, 139);
  outline: rgb(215, 248, 139) none 0px;
  text-decoration: rgb(215, 248, 139);
  text-decoration-color: rgb(215, 248, 139);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(165, 165, 165);
  outline: rgb(165, 165, 165) none 0px;
  text-decoration: rgb(165, 165, 165);
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
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(165, 165, 165);
  text-decoration: line-through rgb(165, 165, 165);
  text-decoration-color: rgb(165, 165, 165);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
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
  text-decoration: rgb(255, 255, 255);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(73, 13, 211, 0.25);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(73, 13, 211, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 165, 165);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(165, 165, 165);
  cursor: pointer;
  text-decoration: rgb(165, 165, 165);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: rgb(165, 165, 165);
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
  text-decoration: rgb(165, 165, 165);
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
  text-decoration: rgb(165, 165, 165);
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
  text-decoration: underline dotted rgb(255, 255, 255);
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
  --background-blurred: rgb(255, 255, 255) !important;
  --background-blurred-alt: rgb(245, 245, 245) !important;
  --background-modifier-border: rgb(207, 207, 207) !important;
  --background-modifier-border-focus: rgb(186, 186, 186) !important;
  --background-modifier-border-hover: rgb(196, 196, 196) !important;
  --background-modifier-form-field: rgb(235, 235, 235) !important;
  --background-modifier-form-field-hover: rgb(235, 235, 235) !important;
  --background-modifier-hover: rgb(127, 78, 244) !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(245, 245, 245) !important;
  --background-secondary: rgb(207, 207, 207) !important;
  --background-secondary-alt: rgb(250, 250, 250) !important;
  --background-semitransp: rgba(255, 255, 255, 0.85) !important;
  --background-semitransp-alt: rgba(245, 245, 245, 0.85) !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(245, 245, 245) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(207, 207, 207) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(196, 196, 196) !important;
  --bases-embed-border-color: rgb(207, 207, 207) !important;
  --bases-group-heading-property-color: rgb(110, 110, 110) !important;
  --bases-table-border-color: rgb(207, 207, 207) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(245, 245, 245) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(186, 186, 186) !important;
  --bases-table-group-background: rgb(245, 245, 245) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-background-hover: rgb(127, 78, 244) !important;
  --bases-table-header-color: rgb(110, 110, 110) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bases-table-summary-background-hover: rgb(127, 78, 244) !important;
  --blockquote-border-thickness: 0 !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --blur-size: 4 !important;
  --bold-color: hsl(438,  88%, 33%) !important;
  --bold-h: 438 !important;
  --button-alt-h: 258 !important;
  --button-h: 258 !important;
  --callout-background-hsla: 258, 88%, 66%, 20%;
  --callout-h: 258;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(161, 161, 161) !important;
  --canvas-dot-pattern: rgb(207, 207, 207) !important;
  --caret-color: rgb(26, 26, 26) !important;
  --checkbox-border-color: rgb(161, 161, 161) !important;
  --checkbox-border-color-hover: rgb(110, 110, 110) !important;
  --checkbox-color: rgb(79, 33, 186) !important;
  --checkbox-color-hover: rgb(55, 10, 158) !important;
  --checkbox-marker-color: rgb(255, 255, 255) !important;
  --checklist-done-color: rgb(110, 110, 110) !important;
  --code-background: rgb(245, 245, 245) !important;
  --code-border-color: rgb(207, 207, 207) !important;
  --code-bracket-background: rgb(127, 78, 244) !important;
  --code-comment: rgb(161, 161, 161) !important;
  --code-normal: rgb(26, 26, 26) !important;
  --code-punctuation: rgb(110, 110, 110) !important;
  --collapse-icon-color: rgb(161, 161, 161) !important;
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
  --color-base-00: rgb(255, 255, 255) !important;
  --color-base-00-transp: #ffffff80 !important;
  --color-base-05: rgb(250, 250, 250) !important;
  --color-base-10: rgb(245, 245, 245) !important;
  --color-base-10-transp: #fafafa80 !important;
  --color-base-100: rgb(26, 26, 26) !important;
  --color-base-15: rgb(235, 235, 235) !important;
  --color-base-20: rgb(227, 227, 227) !important;
  --color-base-20-transp: #f6f6f680 !important;
  --color-base-25: rgb(217, 217, 217) !important;
  --color-base-30: rgb(207, 207, 207) !important;
  --color-base-30-transp: #e0e0e080 !important;
  --color-base-35: rgb(196, 196, 196) !important;
  --color-base-40: rgb(186, 186, 186) !important;
  --color-base-50: rgb(161, 161, 161) !important;
  --color-base-60: rgb(138, 138, 138) !important;
  --color-base-70: rgb(110, 110, 110) !important;
  --color-base-80: rgb(84, 84, 84) !important;
  --color-base-90: rgb(56, 56, 56) !important;
  --dark: rgb(26, 26, 26) !important;
  --darkgray: rgb(26, 26, 26) !important;
  --divider-color: rgb(207, 207, 207) !important;
  --dropdown-background: rgb(255, 255, 255) !important;
  --dropdown-background-hover: rgb(245, 245, 245) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(207, 207, 207), inset 0 0 0 1px rgb(207, 207, 207) !important;
  --embed-border-left: 1px solid rgb(153, 115, 247) !important;
  --embed-border-right: dashed white 1px !important;
  --embed-max-height: 80vh !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font-weight: 600 !important;
  --flair-background: rgb(255, 255, 255) !important;
  --flair-color: rgb(26, 26, 26) !important;
  --footnote-divider-color: rgb(207, 207, 207) !important;
  --footnote-id-color: rgb(110, 110, 110) !important;
  --footnote-id-color-no-occurrences: rgb(161, 161, 161) !important;
  --footnote-input-background-active: rgb(127, 78, 244) !important;
  --graph-line: rgb(196, 196, 196) !important;
  --graph-node: rgb(110, 110, 110) !important;
  --graph-node-unresolved: rgb(161, 161, 161) !important;
  --graph-text: rgb(26, 26, 26) !important;
  --gray: rgb(110, 110, 110) !important;
  --heading-formatting: rgb(161, 161, 161) !important;
  --highlight: hsla( 438, 88%, 66%, 50%) !important;
  --hr-color: rgb(207, 207, 207) !important;
  --icon-color: rgb(110, 110, 110) !important;
  --icon-color-focused: rgb(26, 26, 26) !important;
  --icon-color-hover: rgb(36, 7, 105) !important;
  --input-date-separator: rgb(161, 161, 161) !important;
  --input-placeholder-color: rgb(161, 161, 161) !important;
  --interactive-hover: rgb(245, 245, 245) !important;
  --interactive-normal: rgb(255, 255, 255) !important;
  --italic-color: rgb(55, 10, 158) !important;
  --italic-h: 258 !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(207, 207, 207) !important;
  --list-marker-color: rgb(161, 161, 161) !important;
  --list-marker-color-hover: rgb(110, 110, 110) !important;
  --max-highlight: 65% !important;
  --menu-background: rgb(207, 207, 207) !important;
  --menu-border-color: rgb(196, 196, 196) !important;
  --metadata-border-color: rgb(207, 207, 207) !important;
  --metadata-divider-color: rgb(207, 207, 207) !important;
  --metadata-input-background-active: rgb(127, 78, 244) !important;
  --metadata-input-text-color: rgb(26, 26, 26) !important;
  --metadata-label-background-active: rgb(127, 78, 244) !important;
  --metadata-label-text-color: rgb(110, 110, 110) !important;
  --metadata-label-text-color-hover: rgb(110, 110, 110) !important;
  --metadata-property-background-active: rgb(127, 78, 244) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(186, 186, 186) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(196, 196, 196) !important;
  --min-highlight: 45% !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: rgb(186, 186, 186) !important;
  --modal-border-width: 0 !important;
  --nav-collapse-icon-color: rgb(161, 161, 161) !important;
  --nav-collapse-icon-color-collapsed: rgb(161, 161, 161) !important;
  --nav-heading-color: rgb(26, 26, 26) !important;
  --nav-heading-color-collapsed: rgb(161, 161, 161) !important;
  --nav-heading-color-collapsed-hover: rgb(110, 110, 110) !important;
  --nav-heading-color-hover: rgb(26, 26, 26) !important;
  --nav-item-background-active: rgb(153, 115, 247) !important;
  --nav-item-background-hover: rgba(162, 126, 247, 0.33) !important;
  --nav-item-color: rgb(110, 110, 110) !important;
  --nav-item-color-active: white !important;
  --nav-item-color-hover: rgb(36, 7, 105) !important;
  --nav-item-color-selected: rgb(26, 26, 26) !important;
  --nav-tag-color: rgb(161, 161, 161) !important;
  --nav-tag-color-active: rgb(110, 110, 110) !important;
  --nav-tag-color-hover: rgb(110, 110, 110) !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgb(207, 207, 207) !important;
  --pill-border-color-hover: rgb(196, 196, 196) !important;
  --pill-color: rgb(110, 110, 110) !important;
  --pill-color-hover: rgb(26, 26, 26) !important;
  --pill-color-remove: rgb(161, 161, 161) !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --prompt-border-color: rgb(186, 186, 186) !important;
  --prompt-border-width: 0 !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(207, 207, 207) !important;
  --ribbon-background-collapsed: rgb(255, 255, 255) !important;
  --search-clear-button-color: rgb(110, 110, 110) !important;
  --search-icon-color: rgb(110, 110, 110) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --setting-group-heading-color: rgb(26, 26, 26) !important;
  --setting-items-background: rgb(245, 245, 245) !important;
  --setting-items-border-color: rgb(207, 207, 207) !important;
  --slider-thumb-border-color: rgb(196, 196, 196) !important;
  --slider-track-background: rgb(207, 207, 207) !important;
  --status-bar-background: rgb(207, 207, 207) !important;
  --status-bar-border-color: rgb(207, 207, 207) !important;
  --status-bar-text-color: rgb(110, 110, 110) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --tab-background-active: rgb(255, 255, 255) !important;
  --tab-container-background: rgb(227, 227, 227) !important;
  --tab-divider-color: rgb(196, 196, 196) !important;
  --tab-outline-color: rgb(207, 207, 207) !important;
  --tab-outline-width: 0 !important;
  --tab-switcher-background: rgb(207, 207, 207) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(207, 207, 207), transparent) !important;
  --tab-text-color: rgb(161, 161, 161) !important;
  --tab-text-color-active: rgb(110, 110, 110) !important;
  --tab-text-color-focused: rgb(110, 110, 110) !important;
  --tab-text-color-focused-active: rgb(110, 110, 110) !important;
  --tab-text-color-focused-active-current: rgb(26, 26, 26) !important;
  --table-add-button-border-color: rgb(207, 207, 207) !important;
  --table-border-color: rgb(207, 207, 207) !important;
  --table-drag-handle-color: rgb(161, 161, 161) !important;
  --table-header-border-color: rgb(207, 207, 207) !important;
  --table-header-color: rgb(26, 26, 26) !important;
  --text-faint: rgb(161, 161, 161) !important;
  --text-highlight-bg: hsla( 438, 88%, 66%, 50%) !important;
  --text-highlight-h: 438 !important;
  --text-muted: rgb(110, 110, 110) !important;
  --text-normal: rgb(26, 26, 26) !important;
  --textHighlight: hsla( 438, 88%, 66%, 50%) !important;
  --titlebar-background: rgb(227, 227, 227) !important;
  --titlebar-background-focused: #e0e0e080 !important;
  --titlebar-border-color: rgb(207, 207, 207) !important;
  --titlebar-text-color: rgb(110, 110, 110) !important;
  --titlebar-text-color-focused: rgb(26, 26, 26) !important;
  --vault-profile-color: rgb(26, 26, 26) !important;
  --vault-profile-color-hover: rgb(26, 26, 26) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(207, 207, 207);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration: rgb(113, 157, 10);
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration: rgb(54, 10, 157);
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(54, 10, 157);
  outline: rgb(54, 10, 157) none 0px;
  text-decoration: rgb(54, 10, 157);
  text-decoration-color: rgb(54, 10, 157);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(113, 157, 10);
  outline: rgb(113, 157, 10) none 0px;
  text-decoration: rgb(113, 157, 10);
  text-decoration-color: rgb(113, 157, 10);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(199, 245, 92, 0.5);
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body del {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body p {
  color: rgb(111, 111, 111);
  outline: rgb(111, 111, 111) none 0px;
  text-decoration: rgb(111, 111, 111);
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
  text-decoration: rgb(152, 115, 247);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-left-width: 0px;
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 111, 111);
  text-decoration: line-through rgb(111, 111, 111);
  text-decoration-color: rgb(111, 111, 111);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 162, 162);
  border-left-color: rgb(162, 162, 162);
  border-right-color: rgb(162, 162, 162);
  border-top-color: rgb(162, 162, 162);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 4px;
  padding-top: 4px;
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
  text-decoration: rgb(26, 26, 26);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(129, 80, 244, 0.25);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(129, 80, 244, 0.25);
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h1 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h2 {
  color: rgb(26, 26, 26);
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 111, 111);
  cursor: pointer;
  font-weight: 600;
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 111, 111);
  cursor: pointer;
  text-decoration: rgb(111, 111, 111);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(152, 115, 247);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  cursor: pointer;
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: rgb(111, 111, 111);
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
  text-decoration: rgb(111, 111, 111);
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
  text-decoration: rgb(111, 111, 111);
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
  text-decoration: underline dotted rgb(26, 26, 26);
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
