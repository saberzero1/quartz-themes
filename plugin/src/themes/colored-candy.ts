import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "colored-candy",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-l-closer: min(66%, 40%) !important;
  --accent-l-readable: max(66%, 50%) !important;
  --accent-minus-120: 138 !important;
  --accent-minus-60: 198 !important;
  --accent-plus-120: 378 !important;
  --accent-plus-60: 318 !important;
  --accent-s-pastel: min(88%, 50%) !important;
  --background-modifier-border: rgb(34, 29, 48) !important;
  --background-modifier-border-hover: rgba(41, 34, 57, 0) !important;
  --background-modifier-form-field: rgb(41, 34, 57) !important;
  --background-modifier-form-field-hover: rgb(41, 34, 57) !important;
  --background-modifier-hover: rgba(90, 71, 133, 0.5) !important;
  --background-primary: rgb(55, 41, 86) !important;
  --background-primary-alt: rgb(59, 45, 93) !important;
  --background-secondary: rgb(66, 50, 103) !important;
  --background-secondary-alt: rgb(70, 53, 110) !important;
  --bases-cards-background: rgb(55, 41, 86) !important;
  --bases-cards-cover-background: rgb(59, 45, 93) !important;
  --bases-cards-radius: 20px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(34, 29, 48) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(41, 34, 57, 0) !important;
  --bases-embed-border-color: rgb(34, 29, 48) !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: rgb(169, 161, 186) !important;
  --bases-table-border-color: rgb(169, 161, 186) !important;
  --bases-table-cell-background-active: rgb(55, 41, 86) !important;
  --bases-table-cell-background-disabled: rgb(59, 45, 93) !important;
  --bases-table-cell-background-selected: hsla(198, 88%, min(66%, 40%), 0.2) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: rgb(59, 45, 93) !important;
  --bases-table-header-background: rgb(55, 41, 86) !important;
  --bases-table-header-background-hover: rgba(90, 71, 133, 0.5) !important;
  --bases-table-header-color: rgb(169, 161, 186) !important;
  --bases-table-summary-background: rgb(55, 41, 86) !important;
  --bases-table-summary-background-hover: rgba(90, 71, 133, 0.5) !important;
  --bg-l-modifier: 0% !important;
  --bg-l-modifier-inverted: 0% !important;
  --bg-s-modifier: 0% !important;
  --blockquote-border-color: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --blur-background: color-mix(in srgb, rgb(41, 34, 57) 65%, transparent) linear-gradient(rgb(41, 34, 57), color-mix(in srgb, rgb(41, 34, 57) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --canvas-background: rgb(55, 41, 86) !important;
  --canvas-card-label-color: rgb(120, 105, 155) !important;
  --canvas-controls-radius: 20px !important;
  --caret-color: rgb(217, 217, 217) !important;
  --checkbox-border-color: rgb(120, 105, 155) !important;
  --checkbox-border-color-hover: rgb(169, 161, 186) !important;
  --checkbox-color: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15)) !important;
  --checkbox-marker-color: rgb(55, 41, 86) !important;
  --checkbox-radius: 20px !important;
  --checkbox-size: 20px !important;
  --checklist-done-color: rgb(169, 161, 186) !important;
  --clickable-icon-radius: 20px !important;
  --code-background: rgb(59, 45, 93) !important;
  --code-border-color: rgb(34, 29, 48) !important;
  --code-bracket-background: rgba(90, 71, 133, 0.5) !important;
  --code-comment: rgb(120, 105, 155) !important;
  --code-normal: rgb(217, 217, 217) !important;
  --code-punctuation: rgb(169, 161, 186) !important;
  --code-radius: 20px !important;
  --collapse-icon-color: rgb(120, 105, 155) !important;
  --collapse-icon-color-collapsed: hsl(198, 88%, max(66%, 50%)) !important;
  --dark: rgb(217, 217, 217) !important;
  --darkgray: rgb(217, 217, 217) !important;
  --divider-color: rgb(34, 29, 48) !important;
  --divider-color-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --dropdown-background: rgb(41, 34, 57) !important;
  --dropdown-background-hover: rgb(34, 29, 48) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(34, 29, 48), inset 0 0 0 1px rgb(34, 29, 48) !important;
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --file-header-background: rgb(55, 41, 86) !important;
  --file-header-background-focused: rgb(55, 41, 86) !important;
  --flair-background: rgb(41, 34, 57) !important;
  --flair-color: rgb(217, 217, 217) !important;
  --footnote-divider-color: rgb(34, 29, 48) !important;
  --footnote-id-color: rgb(169, 161, 186) !important;
  --footnote-id-color-no-occurrences: rgb(120, 105, 155) !important;
  --footnote-input-background-active: rgba(90, 71, 133, 0.5) !important;
  --footnote-line-height: 1.75em !important;
  --footnote-radius: 20px !important;
  --graph-node: rgb(169, 161, 186) !important;
  --graph-node-focused: hsl(198, 88%, max(66%, 50%)) !important;
  --graph-node-unresolved: rgb(120, 105, 155) !important;
  --graph-text: rgb(217, 217, 217) !important;
  --gray: rgb(169, 161, 186) !important;
  --h5-line-height: 1.75em !important;
  --h6-line-height: 1.75em !important;
  --heading-formatting: rgb(120, 105, 155) !important;
  --highlight: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --hr-color: rgb(34, 29, 48) !important;
  --icon-color: rgb(169, 161, 186) !important;
  --icon-color-active: hsl(198, 88%, max(66%, 50%)) !important;
  --icon-color-focused: rgb(217, 217, 217) !important;
  --icon-color-hover: rgb(169, 161, 186) !important;
  --input-date-separator: rgb(120, 105, 155) !important;
  --input-placeholder-color: rgb(120, 105, 155) !important;
  --input-radius: 20px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15)) !important;
  --interactive-hover: rgb(34, 29, 48) !important;
  --interactive-normal: rgb(41, 34, 57) !important;
  --light: rgb(55, 41, 86) !important;
  --lightgray: rgb(66, 50, 103) !important;
  --line-height-normal: 1.75em !important;
  --line-height-tight: 1.5em !important;
  --link-color: hsl(198, 88%, max(66%, 50%)) !important;
  --link-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --link-external-color: hsl(198, 88%, max(66%, 50%)) !important;
  --link-external-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --link-unresolved-color: hsl(198, 88%, max(66%, 50%)) !important;
  --list-marker-color: rgb(120, 105, 155) !important;
  --list-marker-color-collapsed: hsl(198, 88%, max(66%, 50%)) !important;
  --list-marker-color-hover: rgb(169, 161, 186) !important;
  --menu-background: rgb(66, 50, 103) !important;
  --menu-border-color: rgba(41, 34, 57, 0) !important;
  --menu-radius: 20px !important;
  --metadata-border-color: rgb(34, 29, 48) !important;
  --metadata-divider-color: rgb(34, 29, 48) !important;
  --metadata-input-background-active: rgba(90, 71, 133, 0.5) !important;
  --metadata-input-text-color: rgb(217, 217, 217) !important;
  --metadata-label-background-active: rgba(90, 71, 133, 0.5) !important;
  --metadata-label-text-color: rgb(169, 161, 186) !important;
  --metadata-label-text-color-hover: rgb(169, 161, 186) !important;
  --metadata-property-background-active: rgba(90, 71, 133, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(41, 34, 57, 0) !important;
  --modal-background: rgb(55, 41, 86) !important;
  --modal-border-color: rgb(34, 29, 48) !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: rgb(120, 105, 155) !important;
  --nav-collapse-icon-color-collapsed: rgb(120, 105, 155) !important;
  --nav-heading-color: rgb(217, 217, 217) !important;
  --nav-heading-color-collapsed: rgb(120, 105, 155) !important;
  --nav-heading-color-collapsed-hover: rgb(169, 161, 186) !important;
  --nav-heading-color-hover: rgb(217, 217, 217) !important;
  --nav-item-background-active: rgba(90, 71, 133, 0.5) !important;
  --nav-item-background-hover: rgba(90, 71, 133, 0.5) !important;
  --nav-item-background-selected: hsla(198, 88%, min(66%, 40%), 0.17) !important;
  --nav-item-border-color: rgb(34, 29, 48) !important;
  --nav-item-color: rgb(169, 161, 186) !important;
  --nav-item-color-active: rgb(217, 217, 217) !important;
  --nav-item-color-highlighted: hsl(198, 88%, max(66%, 50%)) !important;
  --nav-item-color-hover: rgb(217, 217, 217) !important;
  --nav-item-color-selected: rgb(217, 217, 217) !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color: rgb(120, 105, 155) !important;
  --nav-tag-color-active: rgb(169, 161, 186) !important;
  --nav-tag-color-hover: rgb(169, 161, 186) !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: rgb(55, 41, 86) !important;
  --pdf-page-background: rgb(55, 41, 86) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: rgb(55, 41, 86) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: rgb(34, 29, 48) !important;
  --pill-border-color-hover: rgba(41, 34, 57, 0) !important;
  --pill-color: rgb(169, 161, 186) !important;
  --pill-color-hover: rgb(217, 217, 217) !important;
  --pill-color-remove: rgb(120, 105, 155) !important;
  --pill-color-remove-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --prompt-background: rgb(55, 41, 86) !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --radius-xl: 20px !important;
  --raised-background: color-mix(in srgb, rgb(41, 34, 57) 65%, transparent) linear-gradient(rgb(41, 34, 57), color-mix(in srgb, rgb(41, 34, 57) 65%, transparent)) !important;
  --ribbon-background: rgb(66, 50, 103) !important;
  --ribbon-background-collapsed: rgb(55, 41, 86) !important;
  --scrollbar-radius: 20px !important;
  --search-clear-button-color: rgb(169, 161, 186) !important;
  --search-icon-color: rgb(169, 161, 186) !important;
  --search-result-background: rgb(55, 41, 86) !important;
  --secondary: hsl(198, 88%, max(66%, 50%)) !important;
  --setting-group-heading-color: rgb(217, 217, 217) !important;
  --setting-items-background: rgb(59, 45, 93) !important;
  --setting-items-border-color: rgb(34, 29, 48) !important;
  --setting-items-radius: 20px !important;
  --sidebar-left-border-color: rgb(34, 29, 48) !important;
  --size-1-1: 1px !important;
  --size-1-2: 2px !important;
  --size-1-3: 3px !important;
  --size-16-16: 256px !important;
  --size-16-8: 128px !important;
  --slider-thumb-border-color: rgba(41, 34, 57, 0) !important;
  --slider-thumb-radius: 20px !important;
  --slider-track-background: rgb(34, 29, 48) !important;
  --status-bar-background: rgb(66, 50, 103) !important;
  --status-bar-border-color: rgb(34, 29, 48) !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: rgb(169, 161, 186) !important;
  --suggestion-background: rgb(55, 41, 86) !important;
  --swatch-shadow: none !important;
  --tab-background-active: rgb(55, 41, 86) !important;
  --tab-container-background: rgb(66, 50, 103) !important;
  --tab-divider-color: rgba(41, 34, 57, 0) !important;
  --tab-outline-color: rgb(34, 29, 48) !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 20px !important;
  --tab-stacked-shadow: none !important;
  --tab-switcher-background: rgb(66, 50, 103) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(66, 50, 103), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-text-color: rgb(120, 105, 155) !important;
  --tab-text-color-active: rgb(169, 161, 186) !important;
  --tab-text-color-focused: rgb(169, 161, 186) !important;
  --tab-text-color-focused-active: rgb(169, 161, 186) !important;
  --tab-text-color-focused-active-current: rgb(217, 217, 217) !important;
  --tab-text-color-focused-highlighted: hsl(198, 88%, max(66%, 50%)) !important;
  --table-add-button-border-color: rgb(169, 161, 186) !important;
  --table-border-color: rgb(169, 161, 186) !important;
  --table-drag-handle-background-active: hsl(198, 88%, max(66%, 50%)) !important;
  --table-drag-handle-color: rgb(120, 105, 155) !important;
  --table-header-border-color: rgb(169, 161, 186) !important;
  --table-header-color: rgb(217, 217, 217) !important;
  --table-line-height: 1.5em !important;
  --table-selection: hsla(198, 88%, min(66%, 40%), 0.2) !important;
  --table-selection-border-color: hsl(198, 88%, max(66%, 50%)) !important;
  --tag-background: hsla(198, 88%, min(66%, 40%), 0.25) !important;
  --tag-background-hover: hsla(198, 88%, min(66%, 40%), 0.35) !important;
  --tag-color: hsl(198, 88%, max(66%, 50%)) !important;
  --tag-color-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --tertiary: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --text-accent: hsl(198, 88%, max(66%, 50%)) !important;
  --text-accent-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --text-faint: rgb(120, 105, 155) !important;
  --text-highlight-bg: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --text-muted: rgb(169, 161, 186) !important;
  --text-normal: rgb(217, 217, 217) !important;
  --text-selection: hsla(198, 88%, min(66%, 40%), 0.25) !important;
  --textHighlight: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --titlebar-background: rgb(66, 50, 103) !important;
  --titlebar-background-focused: rgb(70, 53, 110) !important;
  --titlebar-border-color: rgb(34, 29, 48) !important;
  --titlebar-text-color: rgb(169, 161, 186) !important;
  --titlebar-text-color-focused: rgb(217, 217, 217) !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: rgb(217, 217, 217) !important;
  --vault-profile-color-hover: rgb(217, 217, 217) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(66, 50, 103);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(55, 41, 86);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(66, 50, 103);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(34, 29, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(66, 50, 103);
  border-left-color: rgb(34, 29, 48);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(55, 41, 86);
  color: rgb(217, 217, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(153, 51, 122, 0.6);
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: line-through rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body p {
  color: rgb(169, 161, 186);
  outline: rgb(169, 161, 186) none 0px;
  text-decoration: rgb(169, 161, 186);
  text-decoration-color: rgb(169, 161, 186);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
  text-decoration: underline rgb(92, 199, 245);
  text-decoration-color: rgb(92, 199, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
  text-decoration: underline rgb(92, 199, 245);
  text-decoration-color: rgb(92, 199, 245);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(92, 199, 245);
  outline: rgb(92, 199, 245) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(120, 105, 155);
  text-decoration: rgb(120, 105, 155);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(217, 217, 217);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(153, 51, 122);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(153, 51, 122);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 161, 186);
  text-decoration: line-through rgb(169, 161, 186);
  text-decoration-color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 105, 155);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(120, 105, 155);
  border-right-color: rgb(120, 105, 155);
  border-top-color: rgb(120, 105, 155);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: -30px;
  width: 20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(41, 34, 57);
  border-bottom-color: rgb(34, 29, 48);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(55, 41, 86);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(90, 71, 133, 0.5);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(66, 50, 103);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(12, 138, 192, 0.25);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(92, 199, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h2 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h3 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h4 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h5 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h6 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(55, 41, 86) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(55, 41, 86);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(90, 71, 133, 0.5);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(66, 50, 103);
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  border-top-left-radius: 20px;
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 161, 186);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 161, 186);
  text-decoration: rgb(169, 161, 186);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(169, 161, 186);
  stroke: rgb(169, 161, 186);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(169, 161, 186);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(120, 105, 155);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(34, 29, 48);
  border-left-color: rgb(34, 29, 48);
  border-right-color: rgb(34, 29, 48);
  border-top-color: rgb(34, 29, 48);
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(66, 50, 103);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 217, 217);
  text-decoration: underline dotted rgb(217, 217, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(169, 161, 186);
  border-left-color: rgb(169, 161, 186);
  border-right-color: rgb(169, 161, 186);
  border-top-color: rgb(169, 161, 186);
  color: rgb(169, 161, 186);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(59, 45, 93);
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 217, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-l-closer: max(66%, 60%) !important;
  --accent-l-readable: min(66%, 35%) !important;
  --accent-minus-120: 138 !important;
  --accent-minus-60: 198 !important;
  --accent-plus-120: 378 !important;
  --accent-plus-60: 318 !important;
  --accent-s-pastel: min(88%, 50%) !important;
  --background-modifier-border: rgb(227, 223, 236) !important;
  --background-modifier-border-hover: rgba(213, 207, 226, 0) !important;
  --background-modifier-form-field: rgb(217, 209, 235) !important;
  --background-modifier-form-field-hover: rgb(217, 209, 235) !important;
  --background-modifier-hover: rgba(110, 83, 172, 0.5) !important;
  --background-primary: rgb(182, 169, 214) !important;
  --background-primary-alt: rgb(168, 152, 205) !important;
  --background-secondary: rgb(153, 135, 197) !important;
  --background-secondary-alt: rgb(139, 117, 189) !important;
  --bases-cards-background: rgb(182, 169, 214) !important;
  --bases-cards-cover-background: rgb(168, 152, 205) !important;
  --bases-cards-radius: 20px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(227, 223, 236) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(213, 207, 226, 0) !important;
  --bases-embed-border-color: rgb(227, 223, 236) !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: rgb(79, 72, 97) !important;
  --bases-table-border-color: rgb(79, 72, 97) !important;
  --bases-table-cell-background-active: rgb(182, 169, 214) !important;
  --bases-table-cell-background-disabled: rgb(168, 152, 205) !important;
  --bases-table-cell-background-selected: hsla(198, 88%, max(66%, 60%), 0.2) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: rgb(168, 152, 205) !important;
  --bases-table-header-background: rgb(182, 169, 214) !important;
  --bases-table-header-background-hover: rgba(110, 83, 172, 0.5) !important;
  --bases-table-header-color: rgb(79, 72, 97) !important;
  --bases-table-summary-background: rgb(182, 169, 214) !important;
  --bases-table-summary-background-hover: rgba(110, 83, 172, 0.5) !important;
  --bg-l-modifier: 0% !important;
  --bg-l-modifier-inverted: 0% !important;
  --bg-s-modifier: 0% !important;
  --blockquote-border-color: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --blur-background: color-mix(in srgb, rgb(182, 169, 214) 65%, transparent) linear-gradient(rgb(182, 169, 214), color-mix(in srgb, rgb(182, 169, 214) 65%, transparent)) !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --canvas-background: rgb(182, 169, 214) !important;
  --canvas-card-label-color: rgb(110, 96, 144) !important;
  --canvas-controls-radius: 20px !important;
  --caret-color: rgb(33, 33, 33) !important;
  --checkbox-border-color: rgb(110, 96, 144) !important;
  --checkbox-border-color-hover: rgb(79, 72, 97) !important;
  --checkbox-color: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15)) !important;
  --checkbox-marker-color: rgb(182, 169, 214) !important;
  --checkbox-radius: 20px !important;
  --checkbox-size: 20px !important;
  --checklist-done-color: rgb(79, 72, 97) !important;
  --clickable-icon-radius: 20px !important;
  --code-background: rgb(168, 152, 205) !important;
  --code-border-color: rgb(227, 223, 236) !important;
  --code-bracket-background: rgba(110, 83, 172, 0.5) !important;
  --code-comment: rgb(110, 96, 144) !important;
  --code-normal: rgb(33, 33, 33) !important;
  --code-punctuation: rgb(79, 72, 97) !important;
  --code-radius: 20px !important;
  --collapse-icon-color: rgb(110, 96, 144) !important;
  --collapse-icon-color-collapsed: hsl(198, 88%, min(66%, 35%)) !important;
  --dark: rgb(33, 33, 33) !important;
  --darkgray: rgb(33, 33, 33) !important;
  --divider-color: rgb(227, 223, 236) !important;
  --divider-color-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --dropdown-background: rgb(217, 209, 235) !important;
  --dropdown-background-hover: rgb(225, 219, 240) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(227, 223, 236), inset 0 0 0 1px rgb(227, 223, 236) !important;
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --file-header-background: rgb(182, 169, 214) !important;
  --file-header-background-focused: rgb(182, 169, 214) !important;
  --flair-background: rgb(217, 209, 235) !important;
  --flair-color: rgb(33, 33, 33) !important;
  --footnote-divider-color: rgb(227, 223, 236) !important;
  --footnote-id-color: rgb(79, 72, 97) !important;
  --footnote-id-color-no-occurrences: rgb(110, 96, 144) !important;
  --footnote-input-background-active: rgba(110, 83, 172, 0.5) !important;
  --footnote-line-height: 1.75em !important;
  --footnote-radius: 20px !important;
  --graph-node: rgb(79, 72, 97) !important;
  --graph-node-focused: hsl(198, 88%, min(66%, 35%)) !important;
  --graph-node-unresolved: rgb(110, 96, 144) !important;
  --graph-text: rgb(33, 33, 33) !important;
  --gray: rgb(79, 72, 97) !important;
  --h5-line-height: 1.75em !important;
  --h6-line-height: 1.75em !important;
  --heading-formatting: rgb(110, 96, 144) !important;
  --highlight: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --hr-color: rgb(227, 223, 236) !important;
  --icon-color: rgb(79, 72, 97) !important;
  --icon-color-active: hsl(198, 88%, min(66%, 35%)) !important;
  --icon-color-focused: rgb(33, 33, 33) !important;
  --icon-color-hover: rgb(79, 72, 97) !important;
  --input-date-separator: rgb(110, 96, 144) !important;
  --input-placeholder-color: rgb(110, 96, 144) !important;
  --input-radius: 20px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15)) !important;
  --interactive-hover: rgb(225, 219, 240) !important;
  --interactive-normal: rgb(217, 209, 235) !important;
  --light: rgb(182, 169, 214) !important;
  --lightgray: rgb(153, 135, 197) !important;
  --line-height-normal: 1.75em !important;
  --line-height-tight: 1.5em !important;
  --link-color: hsl(198, 88%, min(66%, 35%)) !important;
  --link-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --link-external-color: hsl(198, 88%, min(66%, 35%)) !important;
  --link-external-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --link-unresolved-color: hsl(198, 88%, min(66%, 35%)) !important;
  --list-marker-color: rgb(110, 96, 144) !important;
  --list-marker-color-collapsed: hsl(198, 88%, min(66%, 35%)) !important;
  --list-marker-color-hover: rgb(79, 72, 97) !important;
  --menu-background: rgb(153, 135, 197) !important;
  --menu-border-color: rgba(213, 207, 226, 0) !important;
  --menu-radius: 20px !important;
  --metadata-border-color: rgb(227, 223, 236) !important;
  --metadata-divider-color: rgb(227, 223, 236) !important;
  --metadata-input-background-active: rgba(110, 83, 172, 0.5) !important;
  --metadata-input-text-color: rgb(33, 33, 33) !important;
  --metadata-label-background-active: rgba(110, 83, 172, 0.5) !important;
  --metadata-label-text-color: rgb(79, 72, 97) !important;
  --metadata-label-text-color-hover: rgb(79, 72, 97) !important;
  --metadata-property-background-active: rgba(110, 83, 172, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(213, 207, 226, 0) !important;
  --modal-background: rgb(182, 169, 214) !important;
  --modal-border-color: rgb(227, 223, 236) !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: rgb(110, 96, 144) !important;
  --nav-collapse-icon-color-collapsed: rgb(110, 96, 144) !important;
  --nav-heading-color: rgb(33, 33, 33) !important;
  --nav-heading-color-collapsed: rgb(110, 96, 144) !important;
  --nav-heading-color-collapsed-hover: rgb(79, 72, 97) !important;
  --nav-heading-color-hover: rgb(33, 33, 33) !important;
  --nav-item-background-active: rgba(110, 83, 172, 0.5) !important;
  --nav-item-background-hover: rgba(110, 83, 172, 0.5) !important;
  --nav-item-background-selected: hsla(198, 88%, max(66%, 60%), 0.17) !important;
  --nav-item-border-color: rgb(227, 223, 236) !important;
  --nav-item-color: rgb(79, 72, 97) !important;
  --nav-item-color-active: rgb(33, 33, 33) !important;
  --nav-item-color-highlighted: hsl(198, 88%, min(66%, 35%)) !important;
  --nav-item-color-hover: rgb(33, 33, 33) !important;
  --nav-item-color-selected: rgb(33, 33, 33) !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color: rgb(110, 96, 144) !important;
  --nav-tag-color-active: rgb(79, 72, 97) !important;
  --nav-tag-color-hover: rgb(79, 72, 97) !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: rgb(182, 169, 214) !important;
  --pdf-page-background: rgb(182, 169, 214) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: rgb(182, 169, 214) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: rgb(227, 223, 236) !important;
  --pill-border-color-hover: rgba(213, 207, 226, 0) !important;
  --pill-color: rgb(79, 72, 97) !important;
  --pill-color-hover: rgb(33, 33, 33) !important;
  --pill-color-remove: rgb(110, 96, 144) !important;
  --pill-color-remove-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --prompt-background: rgb(182, 169, 214) !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --radius-xl: 20px !important;
  --raised-background: color-mix(in srgb, rgb(182, 169, 214) 65%, transparent) linear-gradient(rgb(182, 169, 214), color-mix(in srgb, rgb(182, 169, 214) 65%, transparent)) !important;
  --ribbon-background: rgb(153, 135, 197) !important;
  --ribbon-background-collapsed: rgb(182, 169, 214) !important;
  --scrollbar-radius: 20px !important;
  --search-clear-button-color: rgb(79, 72, 97) !important;
  --search-icon-color: rgb(79, 72, 97) !important;
  --search-result-background: rgb(182, 169, 214) !important;
  --secondary: hsl(198, 88%, min(66%, 35%)) !important;
  --setting-group-heading-color: rgb(33, 33, 33) !important;
  --setting-items-background: rgb(168, 152, 205) !important;
  --setting-items-border-color: rgb(227, 223, 236) !important;
  --setting-items-radius: 20px !important;
  --sidebar-left-border-color: rgb(227, 223, 236) !important;
  --size-1-1: 1px !important;
  --size-1-2: 2px !important;
  --size-1-3: 3px !important;
  --size-16-16: 256px !important;
  --size-16-8: 128px !important;
  --slider-thumb-border-color: rgba(213, 207, 226, 0) !important;
  --slider-thumb-radius: 20px !important;
  --slider-track-background: rgb(227, 223, 236) !important;
  --status-bar-background: rgb(153, 135, 197) !important;
  --status-bar-border-color: rgb(227, 223, 236) !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: rgb(79, 72, 97) !important;
  --suggestion-background: rgb(182, 169, 214) !important;
  --swatch-shadow: none !important;
  --tab-background-active: rgb(182, 169, 214) !important;
  --tab-container-background: rgb(153, 135, 197) !important;
  --tab-divider-color: rgba(213, 207, 226, 0) !important;
  --tab-outline-color: rgb(227, 223, 236) !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 20px !important;
  --tab-stacked-shadow: none !important;
  --tab-switcher-background: rgb(153, 135, 197) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(153, 135, 197), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-text-color: rgb(110, 96, 144) !important;
  --tab-text-color-active: rgb(79, 72, 97) !important;
  --tab-text-color-focused: rgb(79, 72, 97) !important;
  --tab-text-color-focused-active: rgb(79, 72, 97) !important;
  --tab-text-color-focused-active-current: rgb(33, 33, 33) !important;
  --tab-text-color-focused-highlighted: hsl(198, 88%, min(66%, 35%)) !important;
  --table-add-button-border-color: rgb(79, 72, 97) !important;
  --table-border-color: rgb(79, 72, 97) !important;
  --table-drag-handle-background-active: hsl(198, 88%, min(66%, 35%)) !important;
  --table-drag-handle-color: rgb(110, 96, 144) !important;
  --table-header-border-color: rgb(79, 72, 97) !important;
  --table-header-color: rgb(33, 33, 33) !important;
  --table-line-height: 1.5em !important;
  --table-selection: hsla(198, 88%, max(66%, 60%), 0.2) !important;
  --table-selection-border-color: hsl(198, 88%, min(66%, 35%)) !important;
  --tag-background: hsla(198, 88%, max(66%, 60%), 0.25) !important;
  --tag-background-hover: hsla(198, 88%, max(66%, 60%), 0.35) !important;
  --tag-color: hsl(198, 88%, min(66%, 35%)) !important;
  --tag-color-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --tertiary: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --text-accent: hsl(198, 88%, min(66%, 35%)) !important;
  --text-accent-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --text-faint: rgb(110, 96, 144) !important;
  --text-highlight-bg: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --text-muted: rgb(79, 72, 97) !important;
  --text-normal: rgb(33, 33, 33) !important;
  --text-selection: hsla(198, 88%, max(66%, 60%), 0.25) !important;
  --textHighlight: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --titlebar-background: rgb(153, 135, 197) !important;
  --titlebar-background-focused: rgb(139, 117, 189) !important;
  --titlebar-border-color: rgb(227, 223, 236) !important;
  --titlebar-text-color: rgb(79, 72, 97) !important;
  --titlebar-text-color-focused: rgb(33, 33, 33) !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: rgb(33, 33, 33) !important;
  --vault-profile-color-hover: rgb(33, 33, 33) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(153, 135, 197);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(182, 169, 214);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(153, 135, 197);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(227, 223, 236);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(153, 135, 197);
  border-left-color: rgb(227, 223, 236);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(182, 169, 214);
  color: rgb(33, 33, 33);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(212, 125, 186, 0.6);
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body del {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: line-through rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body p {
  color: rgb(79, 72, 97);
  outline: rgb(79, 72, 97) none 0px;
  text-decoration: rgb(79, 72, 97);
  text-decoration-color: rgb(79, 72, 97);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
  text-decoration: underline rgb(11, 121, 168);
  text-decoration-color: rgb(11, 121, 168);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
  text-decoration: underline rgb(11, 121, 168);
  text-decoration-color: rgb(11, 121, 168);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(11, 121, 168);
  outline: rgb(11, 121, 168) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(110, 96, 144);
  text-decoration: rgb(110, 96, 144);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body table {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(33, 33, 33);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(212, 125, 186);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(212, 125, 186);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(79, 72, 97);
  text-decoration: line-through rgb(79, 72, 97);
  text-decoration-color: rgb(79, 72, 97);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 96, 144);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(110, 96, 144);
  border-right-color: rgb(110, 96, 144);
  border-top-color: rgb(110, 96, 144);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: -30px;
  width: 20px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.125);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(217, 209, 235);
  border-bottom-color: rgb(227, 223, 236);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(182, 169, 214);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(110, 83, 172, 0.5);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(153, 135, 197);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 199, 245, 0.25);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(11, 121, 168);
}

html[saved-theme="light"] body h1 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h2 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h3 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h4 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h5 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body h6 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(182, 169, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(182, 169, 214);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(110, 83, 172, 0.5);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(153, 135, 197);
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  border-top-left-radius: 20px;
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(79, 72, 97);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(79, 72, 97);
  text-decoration: rgb(79, 72, 97);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(79, 72, 97);
  stroke: rgb(79, 72, 97);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(79, 72, 97);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(110, 96, 144);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(227, 223, 236);
  border-left-color: rgb(227, 223, 236);
  border-right-color: rgb(227, 223, 236);
  border-top-color: rgb(227, 223, 236);
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(153, 135, 197);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 33, 33);
  text-decoration: underline dotted rgb(33, 33, 33);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(79, 72, 97);
  border-left-color: rgb(79, 72, 97);
  border-right-color: rgb(79, 72, 97);
  border-top-color: rgb(79, 72, 97);
  color: rgb(79, 72, 97);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(168, 152, 205);
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body summary {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 33, 33);
}`,
  },
};
