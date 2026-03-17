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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: hsl(258, 25%, 15%) !important;
  --background-modifier-border-hover: hsla(258, 25%, 18%) !important;
  --background-modifier-form-field: hsl(258, 25%, 18%) !important;
  --background-modifier-form-field-hover: hsl(258, 25%, 18%) !important;
  --background-modifier-hover: hsla(258, 30%, 40%, 0.5) !important;
  --background-primary: hsl(258, 35%, 25%) !important;
  --background-primary-alt: hsl(258, 35%, 27%) !important;
  --background-secondary: hsl(258, 35%, 30%) !important;
  --background-secondary-alt: hsl(258, 35%, 32%) !important;
  --bases-cards-background: hsl(258, 35%, 25%) !important;
  --bases-cards-cover-background: hsl(258, 35%, 27%) !important;
  --bases-cards-radius: 20px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 25%, 15%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(258, 25%, 18%) !important;
  --bases-embed-border-color: hsl(258, 25%, 15%) !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: hsl(258, 15%, 68%) !important;
  --bases-table-border-color: hsl(258, 15%, 68%) !important;
  --bases-table-cell-background-active: hsl(258, 35%, 25%) !important;
  --bases-table-cell-background-disabled: hsl(258, 35%, 27%) !important;
  --bases-table-cell-background-selected: hsla(198, 88%, min(66%, 40%), 0.2) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: hsl(258, 35%, 27%) !important;
  --bases-table-header-background: hsl(258, 35%, 25%) !important;
  --bases-table-header-background-hover: hsla(258, 30%, 40%, 0.5) !important;
  --bases-table-header-color: hsl(258, 15%, 68%) !important;
  --bases-table-summary-background: hsl(258, 35%, 25%) !important;
  --bases-table-summary-background-hover: hsla(258, 30%, 40%, 0.5) !important;
  --bg-l-modifier: 0% !important;
  --bg-l-modifier-inverted: 0% !important;
  --bg-s-modifier: 0% !important;
  --blockquote-border-color: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --blur-background: color-mix(in srgb, hsl(258, 25%, 18%) 65%, transparent) linear-gradient(hsl(258, 25%, 18%), color-mix(in srgb, hsl(258, 25%, 18%) 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --callout-title-weight: 600;
  --canvas-background: hsl(258, 35%, 25%) !important;
  --canvas-card-label-color: hsl(258, 20%, 51%) !important;
  --canvas-controls-radius: 20px !important;
  --caret-color: hsl(0, 0%, 85%) !important;
  --checkbox-border-color: hsl(258, 20%, 51%) !important;
  --checkbox-border-color-hover: hsl(258, 15%, 68%) !important;
  --checkbox-color: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15)) !important;
  --checkbox-marker-color: hsl(258, 35%, 25%) !important;
  --checkbox-radius: 20px !important;
  --checkbox-size: 20px !important;
  --checklist-done-color: hsl(258, 15%, 68%) !important;
  --clickable-icon-radius: 20px !important;
  --code-background: hsl(258, 35%, 27%) !important;
  --code-border-color: hsl(258, 25%, 15%) !important;
  --code-bracket-background: hsla(258, 30%, 40%, 0.5) !important;
  --code-comment: hsl(258, 20%, 51%) !important;
  --code-normal: hsl(0, 0%, 85%) !important;
  --code-punctuation: hsl(258, 15%, 68%) !important;
  --code-radius: 20px !important;
  --collapse-icon-color: hsl(258, 20%, 51%) !important;
  --collapse-icon-color-collapsed: hsl(198, 88%, max(66%, 50%)) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --dark: hsl(0, 0%, 85%) !important;
  --darkgray: hsl(0, 0%, 85%) !important;
  --divider-color: hsl(258, 25%, 15%) !important;
  --divider-color-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --dropdown-background: hsl(258, 25%, 18%) !important;
  --dropdown-background-hover: hsl(258, 25%, 15%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 25%, 15%), inset 0 0 0 1px hsl(258, 25%, 15%) !important;
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --file-header-background: hsl(258, 35%, 25%) !important;
  --file-header-background-focused: hsl(258, 35%, 25%) !important;
  --flair-background: hsl(258, 25%, 18%) !important;
  --flair-color: hsl(0, 0%, 85%) !important;
  --footnote-divider-color: hsl(258, 25%, 15%) !important;
  --footnote-id-color: hsl(258, 15%, 68%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 20%, 51%) !important;
  --footnote-input-background-active: hsla(258, 30%, 40%, 0.5) !important;
  --footnote-line-height: 1.75em !important;
  --footnote-radius: 20px !important;
  --graph-node: hsl(258, 15%, 68%) !important;
  --graph-node-focused: hsl(198, 88%, max(66%, 50%)) !important;
  --graph-node-unresolved: hsl(258, 20%, 51%) !important;
  --graph-text: hsl(0, 0%, 85%) !important;
  --gray: hsl(258, 15%, 68%) !important;
  --h5-line-height: 1.75em !important;
  --h6-line-height: 1.75em !important;
  --heading-formatting: hsl(258, 20%, 51%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --hr-color: hsl(258, 25%, 15%) !important;
  --icon-color: hsl(258, 15%, 68%) !important;
  --icon-color-active: hsl(198, 88%, max(66%, 50%)) !important;
  --icon-color-focused: hsl(0, 0%, 85%) !important;
  --icon-color-hover: hsl(258, 15%, 68%) !important;
  --input-date-separator: hsl(258, 20%, 51%) !important;
  --input-placeholder-color: hsl(258, 20%, 51%) !important;
  --input-radius: 20px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(318, min(88%, 50%), min(66%, 40%)) !important;
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(min(66%, 40%)*1.15)) !important;
  --interactive-hover: hsl(258, 25%, 15%) !important;
  --interactive-normal: hsl(258, 25%, 18%) !important;
  --light: hsl(258, 35%, 25%) !important;
  --lightgray: hsl(258, 35%, 30%) !important;
  --line-height-normal: 1.75em !important;
  --line-height-tight: 1.5em !important;
  --link-color: hsl(198, 88%, max(66%, 50%)) !important;
  --link-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --link-external-color: hsl(198, 88%, max(66%, 50%)) !important;
  --link-external-color-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --link-unresolved-color: hsl(198, 88%, max(66%, 50%)) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 20%, 51%) !important;
  --list-marker-color-collapsed: hsl(198, 88%, max(66%, 50%)) !important;
  --list-marker-color-hover: hsl(258, 15%, 68%) !important;
  --menu-background: hsl(258, 35%, 30%) !important;
  --menu-border-color: hsla(258, 25%, 18%) !important;
  --menu-radius: 20px !important;
  --metadata-border-color: hsl(258, 25%, 15%) !important;
  --metadata-divider-color: hsl(258, 25%, 15%) !important;
  --metadata-input-background-active: hsla(258, 30%, 40%, 0.5) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(0, 0%, 85%) !important;
  --metadata-label-background-active: hsla(258, 30%, 40%, 0.5) !important;
  --metadata-label-text-color: hsl(258, 15%, 68%) !important;
  --metadata-label-text-color-hover: hsl(258, 15%, 68%) !important;
  --metadata-property-background-active: hsla(258, 30%, 40%, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(258, 25%, 18%) !important;
  --modal-background: hsl(258, 35%, 25%) !important;
  --modal-border-color: hsl(258, 25%, 15%) !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: hsl(258, 20%, 51%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 20%, 51%) !important;
  --nav-heading-color: hsl(0, 0%, 85%) !important;
  --nav-heading-color-collapsed: hsl(258, 20%, 51%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 15%, 68%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 85%) !important;
  --nav-item-background-active: hsla(258, 30%, 40%, 0.5) !important;
  --nav-item-background-hover: hsla(258, 30%, 40%, 0.5) !important;
  --nav-item-background-selected: hsla(198, 88%, min(66%, 40%), 0.17) !important;
  --nav-item-border-color: hsl(258, 25%, 15%) !important;
  --nav-item-color: hsl(258, 15%, 68%) !important;
  --nav-item-color-active: hsl(0, 0%, 85%) !important;
  --nav-item-color-highlighted: hsl(198, 88%, max(66%, 50%)) !important;
  --nav-item-color-hover: hsl(0, 0%, 85%) !important;
  --nav-item-color-selected: hsl(0, 0%, 85%) !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color: hsl(258, 20%, 51%) !important;
  --nav-tag-color-active: hsl(258, 15%, 68%) !important;
  --nav-tag-color-hover: hsl(258, 15%, 68%) !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: hsl(258, 35%, 25%) !important;
  --pdf-page-background: hsl(258, 35%, 25%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(258, 35%, 25%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: hsl(258, 25%, 15%) !important;
  --pill-border-color-hover: hsla(258, 25%, 18%) !important;
  --pill-color: hsl(258, 15%, 68%) !important;
  --pill-color-hover: hsl(0, 0%, 85%) !important;
  --pill-color-remove: hsl(258, 20%, 51%) !important;
  --pill-color-remove-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --prompt-background: hsl(258, 35%, 25%) !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --radius-xl: 20px !important;
  --raised-background: color-mix(in srgb, hsl(258, 25%, 18%) 65%, transparent) linear-gradient(hsl(258, 25%, 18%), color-mix(in srgb, hsl(258, 25%, 18%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 35%, 30%) !important;
  --ribbon-background-collapsed: hsl(258, 35%, 25%) !important;
  --scrollbar-radius: 20px !important;
  --search-clear-button-color: hsl(258, 15%, 68%) !important;
  --search-icon-color: hsl(258, 15%, 68%) !important;
  --search-result-background: hsl(258, 35%, 25%) !important;
  --secondary: hsl(198, 88%, max(66%, 50%)) !important;
  --setting-group-heading-color: hsl(0, 0%, 85%) !important;
  --setting-items-background: hsl(258, 35%, 27%) !important;
  --setting-items-border-color: hsl(258, 25%, 15%) !important;
  --setting-items-radius: 20px !important;
  --sidebar-left-border-color: hsl(258, 25%, 15%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --size-1-1: 1px !important;
  --size-1-2: 2px !important;
  --size-1-3: 3px !important;
  --size-16-16: 256px !important;
  --size-16-8: 128px !important;
  --slider-thumb-border-color: hsla(258, 25%, 18%) !important;
  --slider-thumb-radius: 20px !important;
  --slider-track-background: hsl(258, 25%, 15%) !important;
  --status-bar-background: hsl(258, 35%, 30%) !important;
  --status-bar-border-color: hsl(258, 25%, 15%) !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: hsl(258, 15%, 68%) !important;
  --suggestion-background: hsl(258, 35%, 25%) !important;
  --swatch-shadow: none !important;
  --tab-background-active: hsl(258, 35%, 25%) !important;
  --tab-container-background: hsl(258, 35%, 30%) !important;
  --tab-divider-color: hsla(258, 25%, 18%) !important;
  --tab-outline-color: hsl(258, 25%, 15%) !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 20px !important;
  --tab-stacked-shadow: none !important;
  --tab-switcher-background: hsl(258, 35%, 30%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 35%, 30%), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color: hsl(258, 20%, 51%) !important;
  --tab-text-color-active: hsl(258, 15%, 68%) !important;
  --tab-text-color-focused: hsl(258, 15%, 68%) !important;
  --tab-text-color-focused-active: hsl(258, 15%, 68%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 85%) !important;
  --tab-text-color-focused-highlighted: hsl(198, 88%, max(66%, 50%)) !important;
  --table-add-button-border-color: hsl(258, 15%, 68%) !important;
  --table-border-color: hsl(258, 15%, 68%) !important;
  --table-drag-handle-background-active: hsl(198, 88%, max(66%, 50%)) !important;
  --table-drag-handle-color: hsl(258, 20%, 51%) !important;
  --table-header-border-color: hsl(258, 15%, 68%) !important;
  --table-header-color: hsl(0, 0%, 85%) !important;
  --table-header-weight: 600 !important;
  --table-line-height: 1.5em !important;
  --table-selection: hsla(198, 88%, min(66%, 40%), 0.2) !important;
  --table-selection-border-color: hsl(198, 88%, max(66%, 50%)) !important;
  --tag-background: hsla(198, 88%, min(66%, 40%), 0.25) !important;
  --tag-background-hover: hsla(198, 88%, min(66%, 40%), 0.35) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(198, 88%, max(66%, 50%)) !important;
  --tag-color-hover: hsl(198, 88%, max(66%, 50%)) !important;
  --tertiary: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --text-accent: hsl(198, 88%, max(66%, 50%)) !important;
  --text-accent-hover: hsl(193, 92.4%, calc(max(66%, 50%)*1.29)) !important;
  --text-faint: hsl(258, 20%, 51%) !important;
  --text-highlight-bg: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --text-muted: hsl(258, 15%, 68%) !important;
  --text-normal: hsl(0, 0%, 85%) !important;
  --text-selection: hsla(198, 88%, min(66%, 40%), 0.25) !important;
  --textHighlight: hsla(318, min(88%, 50%), min(66%, 40%), 0.6) !important;
  --titlebar-background: hsl(258, 35%, 30%) !important;
  --titlebar-background-focused: hsl(258, 35%, 32%) !important;
  --titlebar-border-color: hsl(258, 25%, 15%) !important;
  --titlebar-text-color: hsl(258, 15%, 68%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 85%) !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: hsl(0, 0%, 85%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 85%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: hsl(258, 25%, 90%) !important;
  --background-modifier-border-hover: hsla(258, 25%, 85%) !important;
  --background-modifier-form-field: hsl(258, 40%, 87%) !important;
  --background-modifier-form-field-hover: hsl(258, 40%, 87%) !important;
  --background-modifier-hover: hsla(258, 35%, 50%, 0.5) !important;
  --background-primary: hsl(258, 35%, 75%) !important;
  --background-primary-alt: hsl(258, 35%, 70%) !important;
  --background-secondary: hsl(258, 35%, 65%) !important;
  --background-secondary-alt: hsl(258, 35%, 60%) !important;
  --bases-cards-background: hsl(258, 35%, 75%) !important;
  --bases-cards-cover-background: hsl(258, 35%, 70%) !important;
  --bases-cards-radius: 20px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 25%, 90%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(258, 25%, 85%) !important;
  --bases-embed-border-color: hsl(258, 25%, 90%) !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: hsl(258, 15%, 33%) !important;
  --bases-table-border-color: hsl(258, 15%, 33%) !important;
  --bases-table-cell-background-active: hsl(258, 35%, 75%) !important;
  --bases-table-cell-background-disabled: hsl(258, 35%, 70%) !important;
  --bases-table-cell-background-selected: hsla(198, 88%, max(66%, 60%), 0.2) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: hsl(258, 35%, 70%) !important;
  --bases-table-header-background: hsl(258, 35%, 75%) !important;
  --bases-table-header-background-hover: hsla(258, 35%, 50%, 0.5) !important;
  --bases-table-header-color: hsl(258, 15%, 33%) !important;
  --bases-table-summary-background: hsl(258, 35%, 75%) !important;
  --bases-table-summary-background-hover: hsla(258, 35%, 50%, 0.5) !important;
  --bg-l-modifier: 0% !important;
  --bg-l-modifier-inverted: 0% !important;
  --bg-s-modifier: 0% !important;
  --blockquote-border-color: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --blur-background: color-mix(in srgb, hsl(258, 35%, 75%) 65%, transparent) linear-gradient(hsl(258, 35%, 75%), color-mix(in srgb, hsl(258, 35%, 75%) 65%, transparent)) !important;
  --bold-weight: 600 !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --callout-title-weight: 600;
  --canvas-background: hsl(258, 35%, 75%) !important;
  --canvas-card-label-color: hsl(258, 20%, 47%) !important;
  --canvas-controls-radius: 20px !important;
  --caret-color: hsl(0, 0%, 13%) !important;
  --checkbox-border-color: hsl(258, 20%, 47%) !important;
  --checkbox-border-color-hover: hsl(258, 15%, 33%) !important;
  --checkbox-color: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --checkbox-color-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15)) !important;
  --checkbox-marker-color: hsl(258, 35%, 75%) !important;
  --checkbox-radius: 20px !important;
  --checkbox-size: 20px !important;
  --checklist-done-color: hsl(258, 15%, 33%) !important;
  --clickable-icon-radius: 20px !important;
  --code-background: hsl(258, 35%, 70%) !important;
  --code-border-color: hsl(258, 25%, 90%) !important;
  --code-bracket-background: hsla(258, 35%, 50%, 0.5) !important;
  --code-comment: hsl(258, 20%, 47%) !important;
  --code-normal: hsl(0, 0%, 13%) !important;
  --code-punctuation: hsl(258, 15%, 33%) !important;
  --code-radius: 20px !important;
  --collapse-icon-color: hsl(258, 20%, 47%) !important;
  --collapse-icon-color-collapsed: hsl(198, 88%, min(66%, 35%)) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --dark: hsl(0, 0%, 13%) !important;
  --darkgray: hsl(0, 0%, 13%) !important;
  --divider-color: hsl(258, 25%, 90%) !important;
  --divider-color-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --dropdown-background: hsl(258, 40%, 87%) !important;
  --dropdown-background-hover: hsl(258, 40%, 90%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 25%, 90%), inset 0 0 0 1px hsl(258, 25%, 90%) !important;
  --embed-border-start: 2px solid hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --file-header-background: hsl(258, 35%, 75%) !important;
  --file-header-background-focused: hsl(258, 35%, 75%) !important;
  --flair-background: hsl(258, 40%, 87%) !important;
  --flair-color: hsl(0, 0%, 13%) !important;
  --footnote-divider-color: hsl(258, 25%, 90%) !important;
  --footnote-id-color: hsl(258, 15%, 33%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 20%, 47%) !important;
  --footnote-input-background-active: hsla(258, 35%, 50%, 0.5) !important;
  --footnote-line-height: 1.75em !important;
  --footnote-radius: 20px !important;
  --graph-node: hsl(258, 15%, 33%) !important;
  --graph-node-focused: hsl(198, 88%, min(66%, 35%)) !important;
  --graph-node-unresolved: hsl(258, 20%, 47%) !important;
  --graph-text: hsl(0, 0%, 13%) !important;
  --gray: hsl(258, 15%, 33%) !important;
  --h5-line-height: 1.75em !important;
  --h6-line-height: 1.75em !important;
  --heading-formatting: hsl(258, 20%, 47%) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --hr-color: hsl(258, 25%, 90%) !important;
  --icon-color: hsl(258, 15%, 33%) !important;
  --icon-color-active: hsl(198, 88%, min(66%, 35%)) !important;
  --icon-color-focused: hsl(0, 0%, 13%) !important;
  --icon-color-hover: hsl(258, 15%, 33%) !important;
  --input-date-separator: hsl(258, 20%, 47%) !important;
  --input-placeholder-color: hsl(258, 20%, 47%) !important;
  --input-radius: 20px !important;
  --input-shadow: none !important;
  --input-shadow-hover: none !important;
  --interactive-accent: hsl(318, min(88%, 50%), max(66%, 60%)) !important;
  --interactive-accent-hover: hsl(315, calc(min(88%, 50%)*1.02), calc(max(66%, 60%)*1.15)) !important;
  --interactive-hover: hsl(258, 40%, 90%) !important;
  --interactive-normal: hsl(258, 40%, 87%) !important;
  --light: hsl(258, 35%, 75%) !important;
  --lightgray: hsl(258, 35%, 65%) !important;
  --line-height-normal: 1.75em !important;
  --line-height-tight: 1.5em !important;
  --link-color: hsl(198, 88%, min(66%, 35%)) !important;
  --link-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --link-external-color: hsl(198, 88%, min(66%, 35%)) !important;
  --link-external-color-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --link-unresolved-color: hsl(198, 88%, min(66%, 35%)) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 20%, 47%) !important;
  --list-marker-color-collapsed: hsl(198, 88%, min(66%, 35%)) !important;
  --list-marker-color-hover: hsl(258, 15%, 33%) !important;
  --menu-background: hsl(258, 35%, 65%) !important;
  --menu-border-color: hsla(258, 25%, 85%) !important;
  --menu-radius: 20px !important;
  --metadata-border-color: hsl(258, 25%, 90%) !important;
  --metadata-divider-color: hsl(258, 25%, 90%) !important;
  --metadata-input-background-active: hsla(258, 35%, 50%, 0.5) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: hsl(0, 0%, 13%) !important;
  --metadata-label-background-active: hsla(258, 35%, 50%, 0.5) !important;
  --metadata-label-text-color: hsl(258, 15%, 33%) !important;
  --metadata-label-text-color-hover: hsl(258, 15%, 33%) !important;
  --metadata-property-background-active: hsla(258, 35%, 50%, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(258, 25%, 85%) !important;
  --modal-background: hsl(258, 35%, 75%) !important;
  --modal-border-color: hsl(258, 25%, 90%) !important;
  --modal-radius: 20px !important;
  --nav-collapse-icon-color: hsl(258, 20%, 47%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 20%, 47%) !important;
  --nav-heading-color: hsl(0, 0%, 13%) !important;
  --nav-heading-color-collapsed: hsl(258, 20%, 47%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 15%, 33%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 13%) !important;
  --nav-item-background-active: hsla(258, 35%, 50%, 0.5) !important;
  --nav-item-background-hover: hsla(258, 35%, 50%, 0.5) !important;
  --nav-item-background-selected: hsla(198, 88%, max(66%, 60%), 0.17) !important;
  --nav-item-border-color: hsl(258, 25%, 90%) !important;
  --nav-item-color: hsl(258, 15%, 33%) !important;
  --nav-item-color-active: hsl(0, 0%, 13%) !important;
  --nav-item-color-highlighted: hsl(198, 88%, min(66%, 35%)) !important;
  --nav-item-color-hover: hsl(0, 0%, 13%) !important;
  --nav-item-color-selected: hsl(0, 0%, 13%) !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color: hsl(258, 20%, 47%) !important;
  --nav-tag-color-active: hsl(258, 15%, 33%) !important;
  --nav-tag-color-hover: hsl(258, 15%, 33%) !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: hsl(258, 35%, 75%) !important;
  --pdf-page-background: hsl(258, 35%, 75%) !important;
  --pdf-shadow: none !important;
  --pdf-sidebar-background: hsl(258, 35%, 75%) !important;
  --pdf-thumbnail-shadow: none !important;
  --pill-border-color: hsl(258, 25%, 90%) !important;
  --pill-border-color-hover: hsla(258, 25%, 85%) !important;
  --pill-color: hsl(258, 15%, 33%) !important;
  --pill-color-hover: hsl(0, 0%, 13%) !important;
  --pill-color-remove: hsl(258, 20%, 47%) !important;
  --pill-color-remove-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --prompt-background: hsl(258, 35%, 75%) !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --radius-xl: 20px !important;
  --raised-background: color-mix(in srgb, hsl(258, 35%, 75%) 65%, transparent) linear-gradient(hsl(258, 35%, 75%), color-mix(in srgb, hsl(258, 35%, 75%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 35%, 65%) !important;
  --ribbon-background-collapsed: hsl(258, 35%, 75%) !important;
  --scrollbar-radius: 20px !important;
  --search-clear-button-color: hsl(258, 15%, 33%) !important;
  --search-icon-color: hsl(258, 15%, 33%) !important;
  --search-result-background: hsl(258, 35%, 75%) !important;
  --secondary: hsl(198, 88%, min(66%, 35%)) !important;
  --setting-group-heading-color: hsl(0, 0%, 13%) !important;
  --setting-items-background: hsl(258, 35%, 70%) !important;
  --setting-items-border-color: hsl(258, 25%, 90%) !important;
  --setting-items-radius: 20px !important;
  --sidebar-left-border-color: hsl(258, 25%, 90%) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --size-1-1: 1px !important;
  --size-1-2: 2px !important;
  --size-1-3: 3px !important;
  --size-16-16: 256px !important;
  --size-16-8: 128px !important;
  --slider-thumb-border-color: hsla(258, 25%, 85%) !important;
  --slider-thumb-radius: 20px !important;
  --slider-track-background: hsl(258, 25%, 90%) !important;
  --status-bar-background: hsl(258, 35%, 65%) !important;
  --status-bar-border-color: hsl(258, 25%, 90%) !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: hsl(258, 15%, 33%) !important;
  --suggestion-background: hsl(258, 35%, 75%) !important;
  --swatch-shadow: none !important;
  --tab-background-active: hsl(258, 35%, 75%) !important;
  --tab-container-background: hsl(258, 35%, 65%) !important;
  --tab-divider-color: hsla(258, 25%, 85%) !important;
  --tab-outline-color: hsl(258, 25%, 90%) !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 20px !important;
  --tab-stacked-shadow: none !important;
  --tab-switcher-background: hsl(258, 35%, 65%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 35%, 65%), transparent) !important;
  --tab-switcher-preview-radius: 20px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color: hsl(258, 20%, 47%) !important;
  --tab-text-color-active: hsl(258, 15%, 33%) !important;
  --tab-text-color-focused: hsl(258, 15%, 33%) !important;
  --tab-text-color-focused-active: hsl(258, 15%, 33%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 13%) !important;
  --tab-text-color-focused-highlighted: hsl(198, 88%, min(66%, 35%)) !important;
  --table-add-button-border-color: hsl(258, 15%, 33%) !important;
  --table-border-color: hsl(258, 15%, 33%) !important;
  --table-drag-handle-background-active: hsl(198, 88%, min(66%, 35%)) !important;
  --table-drag-handle-color: hsl(258, 20%, 47%) !important;
  --table-header-border-color: hsl(258, 15%, 33%) !important;
  --table-header-color: hsl(0, 0%, 13%) !important;
  --table-header-weight: 600 !important;
  --table-line-height: 1.5em !important;
  --table-selection: hsla(198, 88%, max(66%, 60%), 0.2) !important;
  --table-selection-border-color: hsl(198, 88%, min(66%, 35%)) !important;
  --tag-background: hsla(198, 88%, max(66%, 60%), 0.25) !important;
  --tag-background-hover: hsla(198, 88%, max(66%, 60%), 0.35) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(198, 88%, min(66%, 35%)) !important;
  --tag-color-hover: hsl(198, 88%, min(66%, 35%)) !important;
  --tertiary: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --text-accent: hsl(198, 88%, min(66%, 35%)) !important;
  --text-accent-hover: hsl(195, 89.76%, calc(min(66%, 35%)*1.15)) !important;
  --text-faint: hsl(258, 20%, 47%) !important;
  --text-highlight-bg: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --text-muted: hsl(258, 15%, 33%) !important;
  --text-normal: hsl(0, 0%, 13%) !important;
  --text-selection: hsla(198, 88%, max(66%, 60%), 0.25) !important;
  --textHighlight: hsla(318, min(88%, 50%), max(66%, 60%), 0.6) !important;
  --titlebar-background: hsl(258, 35%, 65%) !important;
  --titlebar-background-focused: hsl(258, 35%, 60%) !important;
  --titlebar-border-color: hsl(258, 25%, 90%) !important;
  --titlebar-text-color: hsl(258, 15%, 33%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 13%) !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: hsl(0, 0%, 13%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 13%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul.overflow {
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
