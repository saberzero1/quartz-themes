import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dark-castle", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 70% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: #292929 !important;
  --background-modifier-border: #292929 !important;
  --background-modifier-border-focus: #9C9C9C !important;
  --background-modifier-border-hover: #FF8040 !important;
  --background-modifier-error: #FF000F !important;
  --background-modifier-error-hover: #FF000F !important;
  --background-modifier-error-rgb: 239, 107, 115 !important;
  --background-modifier-form-field: #292929 !important;
  --background-modifier-form-field-hover: #292929 !important;
  --background-modifier-hover: #292929 !important;
  --background-modifier-message: color-mix(
    in hsl,
    #000000,
    #292929
  ) !important;
  --background-modifier-success: #08D220 !important;
  --background-modifier-success-rgb: 186, 230, 126 !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #292929 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #292929 !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px #292929 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #FF8040 !important;
  --bases-embed-border-color: #292929 !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: #9C9C9C !important;
  --bases-table-border-color: #292929 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #292929 !important;
  --bases-table-cell-background-selected: hsla(40, 100%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #9C9C9C !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8040 !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #292929 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-background-hover: #292929 !important;
  --bases-table-header-color: #9C9C9C !important;
  --bases-table-row-background-hover: #000000 !important;
  --bases-table-summary-background: #000000 !important;
  --bases-table-summary-background-hover: #292929 !important;
  --blockquote-border-color: #FF8040 !important;
  --blockquote-color: #AA1B86 !important;
  --blur-background: color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ), color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent)) !important;
  --bold-color: #4DBCED !important;
  --callout-bug: 239, 107, 115;
  --callout-default: 112, 153, 219;
  --callout-error: 239, 107, 115;
  --callout-example: 195, 166, 255;
  --callout-fail: 239, 107, 115;
  --callout-important: 92, 207, 230;
  --callout-info: 112, 153, 219;
  --callout-padding: 12px 24px;
  --callout-question: 255, 174, 87;
  --callout-radius: 2px;
  --callout-success: 186, 230, 126;
  --callout-summary: 92, 207, 230;
  --callout-tip: 92, 207, 230;
  --callout-todo: 112, 153, 219;
  --callout-warning: 255, 174, 87;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #FF8040 !important;
  --canvas-color-1: 239, 107, 115 !important;
  --canvas-color-2: 255, 174, 87 !important;
  --canvas-color-3: 255, 204, 102 !important;
  --canvas-color-4: 186, 230, 126 !important;
  --canvas-color-5: 92, 207, 230 !important;
  --canvas-color-6: 195, 166, 255 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  ) !important;
  --caret-color: #FFD580 !important;
  --checkbox-border-color: #AA1B86 !important;
  --checkbox-border-color-hover: #9354FF !important;
  --checkbox-color: #AA1B86 !important;
  --checkbox-color-hover: #9354FF !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #9C9C9C !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #1A1A1A !important;
  --code-border-color: #292929 !important;
  --code-bracket-background: #292929 !important;
  --code-comment: #0D8501 !important;
  --code-function: #FF5503 !important;
  --code-important: #FF8040 !important;
  --code-keyword: #AA1B86 !important;
  --code-normal: #08D220 !important;
  --code-operator: #FF8040 !important;
  --code-property: #9C9C9C !important;
  --code-punctuation: #FF8040 !important;
  --code-radius: 2px !important;
  --code-string: #FF000F !important;
  --code-tag: #4DBCED !important;
  --code-value: #FFFFFF !important;
  --collapse-icon-color: #FF8040 !important;
  --collapse-icon-color-collapsed: #FF8040 !important;
  --color-accent: hsl(40, 100%, 70%) !important;
  --color-accent-1: hsl(37, 102%, 80.5%) !important;
  --color-accent-2: hsl(35, 105%, 90.3%) !important;
  --color-accent-hsl: 40, 100%, 70% !important;
  --color-base-00: #000000 !important;
  --color-base-05: color-mix(
    in hsl,
    #000000,
    #000000
  ) !important;
  --color-base-10: #000000 !important;
  --color-base-100: #9C9C9C !important;
  --color-base-20: color-mix(
    in hsl,
    #000000,
    #292929
  ) !important;
  --color-base-25: #292929 !important;
  --color-base-30: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  ) !important;
  --color-base-35: #9C9C9C !important;
  --color-base-40: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  ) !important;
  --color-base-50: #9C9C9C !important;
  --color-base-60: #9C9C9C !important;
  --color-base-70: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  ) !important;
  --color-blue: #4DBCED !important;
  --color-blue-rgb: 112, 153, 219 !important;
  --color-cyan: #4DBCED !important;
  --color-cyan-rgb: 92, 207, 230 !important;
  --color-green: #08D220 !important;
  --color-green-rgb: 186, 230, 126 !important;
  --color-orange: #FF5503 !important;
  --color-orange-rgb: 255, 174, 87 !important;
  --color-pink: #EF6B73 !important;
  --color-pink-rgb: 249, 207, 242 !important;
  --color-purple: #FF8040 !important;
  --color-purple-rgb: 195, 166, 255 !important;
  --color-red: #FF000F !important;
  --color-red-rgb: 239, 107, 115 !important;
  --color-yellow: #FFD580 !important;
  --color-yellow-rgb: 255, 204, 102 !important;
  --dark: #FFD580 !important;
  --dark-castle-accent: #FF8040 !important;
  --dark-castle-accent-h: 40 !important;
  --dark-castle-accent-hover: #575757 !important;
  --dark-castle-accent-l: 70% !important;
  --dark-castle-accent-s: 100% !important;
  --dark-castle-base-grey-mix: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  ) !important;
  --dark-castle-code-error: #FF8040 !important;
  --dark-castle-code-function: #FF5503 !important;
  --dark-castle-code-keyword: #AA1B86 !important;
  --dark-castle-code-operator: #FF8040 !important;
  --dark-castle-code-variable: #08D220 !important;
  --dark-castle-palette-black: #000000 !important;
  --dark-castle-palette-black-02: #1A1A1A !important;
  --dark-castle-palette-black-02-mix: color-mix(
    in hsl,
    #000000,
    #000000
  ) !important;
  --dark-castle-palette-black-03-mix: color-mix(
    in hsl,
    #000000,
    #292929
  ) !important;
  --dark-castle-palette-blue: #4164FF !important;
  --dark-castle-palette-dark-blue: #2D449B !important;
  --dark-castle-palette-dark-gray: #292929 !important;
  --dark-castle-palette-dark-gray-02: #333333 !important;
  --dark-castle-palette-dark-gray-04-mix: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  ) !important;
  --dark-castle-palette-dark-green: #0D8501 !important;
  --dark-castle-palette-dark-purple: #AA1B86 !important;
  --dark-castle-palette-dark-red: #AA0000 !important;
  --dark-castle-palette-dark-teal: #007B88 !important;
  --dark-castle-palette-dark-yellow: #DDAB13 !important;
  --dark-castle-palette-gray: #575757 !important;
  --dark-castle-palette-green: #08D220 !important;
  --dark-castle-palette-light-blue: #4DBCED !important;
  --dark-castle-palette-light-blue-hover: color-mix(
    in hsl shorter hue,
    #4DBCED,
    #9C9C9C
  ) !important;
  --dark-castle-palette-light-gray: #9C9C9C !important;
  --dark-castle-palette-light-gray-05-mix: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  ) !important;
  --dark-castle-palette-light-green: #BAE67E !important;
  --dark-castle-palette-light-orange: #FF8040 !important;
  --dark-castle-palette-light-purple: #D8BFD8 !important;
  --dark-castle-palette-light-red: #EF6B73 !important;
  --dark-castle-palette-light-yellow: #FFD580 !important;
  --dark-castle-palette-orange: #FF5503 !important;
  --dark-castle-palette-pink: #FF3399 !important;
  --dark-castle-palette-purple: #9354FF !important;
  --dark-castle-palette-red: #FF000F !important;
  --dark-castle-palette-white: #FFFFFF !important;
  --dark-castle-palette-yellow: #DFC200 !important;
  --dark-castle-text-faint: #FF8040 !important;
  --dark-castle-text-muted: #9C9C9C !important;
  --dark-castle-text-normal: #9C9C9C !important;
  --darkgray: #FFD580 !important;
  --divider-color: #292929 !important;
  --divider-color-hover: #FF8040 !important;
  --drag-ghost-background: #292929 !important;
  --drag-ghost-text-color: #FF8040 !important;
  --dropdown-background: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) !important;
  --dropdown-background-hover: #000000 !important;
  --embed-block-shadow-hover: 0 0 0 1px #292929, inset 0 0 0 1px #292929 !important;
  --embed-border-start: 2px solid #FF8040 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-line-width: 50rem !important;
  --flair-background: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) !important;
  --flair-color: #FFD580 !important;
  --footnote-divider-color: #292929 !important;
  --footnote-id-color: #9C9C9C !important;
  --footnote-id-color-no-occurrences: #FF8040 !important;
  --footnote-input-background-active: #292929 !important;
  --footnote-radius: 2px !important;
  --graph-line: #292929 !important;
  --graph-node: #9C9C9C !important;
  --graph-node-attachment: #FFD580 !important;
  --graph-node-focused: #FF8040 !important;
  --graph-node-tag: #FF8040 !important;
  --graph-node-unresolved: #FF8040 !important;
  --graph-text: #FFD580 !important;
  --gray: #9C9C9C !important;
  --h1-color: #BAE67E !important;
  --h2-color: #FF000F !important;
  --h2-weight: 675 !important;
  --h3-color: #FF000F !important;
  --h3-weight: 650 !important;
  --h4-color: #FF000F !important;
  --h4-weight: 625 !important;
  --h5-color: #FF000F !important;
  --h5-weight: 600 !important;
  --h6-color: #FF000F !important;
  --h6-weight: 575 !important;
  --heading-formatting: #FF8040 !important;
  --highlight: #292929 !important;
  --hr-color: color-mix(
    in hsl shorter hue,
    #2D449B,
    #2D449B
  ) !important;
  --icon-color: #9C9C9C !important;
  --icon-color-active: #FFD580 !important;
  --icon-color-focused: #FFD580 !important;
  --icon-color-hover: #9C9C9C !important;
  --icon-stroke: 2px !important;
  --inline-title-color: #BAE67E !important;
  --input-date-separator: #FF8040 !important;
  --input-placeholder-color: #FF8040 !important;
  --interactive-accent: #FF8040 !important;
  --interactive-accent-hover: color-mix(
    in hsl shorter hue,
    #FF8040 75%,
    transparent
  ) !important;
  --interactive-accent-hsl: 40, 100%, 70% !important;
  --interactive-hover: #000000 !important;
  --interactive-normal: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) !important;
  --italic-color: #4DBCED !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #FF8040 !important;
  --link-color-hover: #4164FF !important;
  --link-external-color: #FF8040 !important;
  --link-external-color-hover: #4164FF !important;
  --link-unresolved-color: #FF8040 !important;
  --link-unresolved-decoration-color: #4164FF !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-marker-color: #007B88 !important;
  --list-marker-color-collapsed: #FF000F !important;
  --list-marker-color-hover: #575757 !important;
  --menu-background: #000000 !important;
  --menu-border-color: #FF8040 !important;
  --menu-radius: 4px !important;
  --metadata-border-color: #292929 !important;
  --metadata-divider-color: #292929 !important;
  --metadata-input-background-active: #292929 !important;
  --metadata-input-text-color: #FFD580 !important;
  --metadata-label-background-active: #292929 !important;
  --metadata-label-text-color: #4DBCED !important;
  --metadata-label-text-color-hover: color-mix(
    in hsl shorter hue,
    #4DBCED,
    #9C9C9C
  ) !important;
  --metadata-property-background-active: #292929 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9C9C9C !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #FF8040 !important;
  --modal-background: #000000 !important;
  --modal-border-color: #000000 !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #FF8040 !important;
  --nav-collapse-icon-color-collapsed: #FF8040 !important;
  --nav-heading-color: #FFD580 !important;
  --nav-heading-color-collapsed: #FF8040 !important;
  --nav-heading-color-collapsed-hover: #9C9C9C !important;
  --nav-heading-color-hover: #FFD580 !important;
  --nav-item-background-active: #292929 !important;
  --nav-item-background-hover: #292929 !important;
  --nav-item-background-selected: #292929 !important;
  --nav-item-color: #9C9C9C !important;
  --nav-item-color-active: #FFD580 !important;
  --nav-item-color-highlighted: #FF8040 !important;
  --nav-item-color-hover: #FFD580 !important;
  --nav-item-color-selected: #4DBCED !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: #FF8040 !important;
  --nav-tag-color-active: #9C9C9C !important;
  --nav-tag-color-hover: #9C9C9C !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #292929 !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #292929 !important;
  --pill-border-color: #292929 !important;
  --pill-border-color-hover: #FF8040 !important;
  --pill-color: #9C9C9C !important;
  --pill-color-hover: #FFD580 !important;
  --pill-color-remove: #FF8040 !important;
  --pill-color-remove-hover: #FF8040 !important;
  --prompt-background: #000000 !important;
  --prompt-border-color: color-mix(
    in hsl,
    #000000,
    #292929
  ) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ), color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-bg: transparent !important;
  --scrollbar-radius: 6px !important;
  --search-clear-button-color: #FF8040 !important;
  --search-icon-color: #FF8040 !important;
  --search-result-background: #000000 !important;
  --secondary: #FF8040 !important;
  --setting-group-heading-color: #FFD580 !important;
  --setting-items-background: #292929 !important;
  --setting-items-border-color: #292929 !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: #FF8040 !important;
  --slider-track-background: #292929 !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #292929 !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: #9C9C9C !important;
  --strikethrough-color: #4DBCED !important;
  --suggestion-background: #000000 !important;
  --sync-avatar-color-1: #FF000F !important;
  --sync-avatar-color-2: #FF5503 !important;
  --sync-avatar-color-3: #FFD580 !important;
  --sync-avatar-color-4: #08D220 !important;
  --sync-avatar-color-5: #4DBCED !important;
  --sync-avatar-color-6: #4DBCED !important;
  --sync-avatar-color-7: #FF8040 !important;
  --sync-avatar-color-8: #EF6B73 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: #000000 !important;
  --tab-outline-color: #292929 !important;
  --tab-outline-width: 0px !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 100%, 70%) !important;
  --tab-text-color: #FF8040 !important;
  --tab-text-color-focused: #9C9C9C !important;
  --tab-text-color-focused-highlighted: #FF8040 !important;
  --table-add-button-border-color: #292929 !important;
  --table-background: #000000 !important;
  --table-border-color: #292929 !important;
  --table-column-alt-background: #000000 !important;
  --table-drag-handle-background-active: #FF8040 !important;
  --table-drag-handle-color: #FF8040 !important;
  --table-drag-handle-color-active: #292929 !important;
  --table-header-background: #000000 !important;
  --table-header-background-hover: #000000 !important;
  --table-header-border-color: #292929 !important;
  --table-header-color: #FFD580 !important;
  --table-header-size: larger !important;
  --table-row-alt-background: #000000 !important;
  --table-row-alt-background-hover: #000000 !important;
  --table-row-background-hover: #000000 !important;
  --table-selection: hsla(40, 100%, 70%, 0.1) !important;
  --table-selection-border-color: #FF8040 !important;
  --tag-background: #007B88 !important;
  --tag-background-hover: #FFFFFF !important;
  --tag-border-color: hsla(40, 100%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 100%, 70%, 0.15) !important;
  --tag-color: #FFFFFF !important;
  --tag-color-hover: #007B88 !important;
  --tag-decoration-hover: underline !important;
  --tag-size: 12px !important;
  --tertiary: #575757 !important;
  --text-accent: #FF8040 !important;
  --text-accent-hover: #575757 !important;
  --text-error: #EF6B73 !important;
  --text-faint: #FF8040 !important;
  --text-highlight-bg: #292929 !important;
  --text-muted: #9C9C9C !important;
  --text-normal: #FFD580 !important;
  --text-on-accent: #292929 !important;
  --text-selection: #575757 !important;
  --text-success: #BAE67E !important;
  --text-warning: #FFD580 !important;
  --textHighlight: #292929 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #292929 !important;
  --titlebar-text-color: #FF8040 !important;
  --titlebar-text-color-focused: #9C9C9C !important;
  --toggle-thumb-color: #292929 !important;
  --vault-name-color: #FF8040 !important;
  --vault-name-font-size: 1em !important;
  --vault-profile-color: #FFD580 !important;
  --vault-profile-color-hover: #FFD580 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(0, 0, 0);
}

html body .bases-table thead th {
  border-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body .canvas-node {
  border-color: rgb(255, 213, 128);
}

html body .canvas-node-content {
  color: rgb(255, 213, 128);
}

html body .canvas-node-file {
  color: rgb(255, 213, 128);
}

html body .canvas-node-group {
  border-color: rgb(255, 213, 128);
}

html body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(255, 213, 128);
}

html body .note-properties {
  border-color: rgb(41, 41, 41);
}

html body .note-properties-key {
  color: rgb(156, 156, 156);
}

html body .note-properties-row {
  border-color: rgb(156, 156, 156);
}

html body .note-properties-tags {
  background-color: rgb(0, 123, 136);
  color: rgb(255, 255, 255);
}

html body .note-properties-value {
  color: rgb(156, 156, 156);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 41, 41);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration-color: rgb(77, 188, 237);
}

html body .page article p > em, html em {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration-color: rgb(77, 188, 237);
}

html body .page article p > i, html i {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration-color: rgb(77, 188, 237);
}

html body .page article p > strong, html strong {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration-color: rgb(77, 188, 237);
}

html body .text-highlight {
  background-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration-color: rgb(255, 213, 128);
}

html body del {
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration-color: rgb(255, 213, 128);
}

html body h1.article-title {
  color: rgb(255, 213, 128);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(170, 27, 134);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(170, 27, 134);
  border-color: rgb(170, 27, 134);
}

html body p {
  color: rgb(156, 156, 156);
  outline: rgb(156, 156, 156) none 0px;
  text-decoration-color: rgb(156, 156, 156);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration-color: rgb(255, 128, 64);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration-color: rgb(255, 128, 64);
}

html body a.internal.broken {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration: underline dashed rgb(65, 100, 255);
  text-decoration-color: rgb(65, 100, 255);
  text-decoration-style: dashed;
}`,
    lists: `html body dd {
  color: rgb(255, 213, 128);
}

html body dt {
  color: rgb(255, 213, 128);
}

html body ol > li {
  color: rgb(255, 213, 128);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body ul > li {
  color: rgb(255, 213, 128);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(255, 128, 64);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body table {
  color: rgb(255, 213, 128);
  width: 767px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(0, 0, 0);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(0, 0, 0);
}

html body td {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body th {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body tr {
  background-color: rgb(0, 0, 0);
}`,
    code: `html body code {
  border-bottom-color: rgb(8, 210, 32);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 210, 32);
  border-right-color: rgb(8, 210, 32);
  border-top-color: rgb(8, 210, 32);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 210, 32);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

html body pre > code > [data-line] {
  border-left-color: rgb(255, 85, 3);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 85, 3);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 85, 3);
  border-left-color: rgb(255, 85, 3);
  border-right-color: rgb(255, 85, 3);
  border-top-color: rgb(255, 85, 3);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body figcaption {
  color: rgb(255, 213, 128);
}

html body figure {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body img {
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
}

html body video {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body .footnotes {
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

html body .transclude {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 128, 64);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(170, 27, 134);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(170, 27, 134);
  border-right-color: rgb(170, 27, 134);
  border-top-color: rgb(170, 27, 134);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
  color: rgb(112, 153, 219);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(112, 153, 219);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 195, 166, 255;
  background-color: rgba(195, 166, 255, 0.1);
  border-bottom-color: rgba(195, 166, 255, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(195, 166, 255, 0.25);
  border-right-color: rgba(195, 166, 255, 0.25);
  border-top-color: rgba(195, 166, 255, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 186, 230, 126;
  background-color: rgba(186, 230, 126, 0.1);
  border-bottom-color: rgba(186, 230, 126, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(186, 230, 126, 0.25);
  border-right-color: rgba(186, 230, 126, 0.25);
  border-top-color: rgba(186, 230, 126, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(87, 87, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(87, 87, 87);
  border-right-color: rgb(87, 87, 87);
  border-top-color: rgb(87, 87, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration-color: rgb(255, 213, 128);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 213, 128);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 213, 128);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 213, 128);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 87, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(87, 87, 87);
  border-right-color: rgb(87, 87, 87);
  border-top-color: rgb(87, 87, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 128, 64);
  border-right-color: rgb(255, 128, 64);
  border-top-color: rgb(255, 128, 64);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(255, 213, 128);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(0, 123, 136);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(186, 230, 126);
}

html body h2 {
  color: rgb(255, 0, 15);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(186, 230, 126);
}

html body h3 {
  color: rgb(255, 0, 15);
}

html body h4 {
  color: rgb(255, 0, 15);
}

html body h5 {
  color: rgb(255, 0, 15);
}

html body h6 {
  color: rgb(255, 0, 15);
}

html body hr {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
}`,
    scrollbars: `html body .callout {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-right: 24px;
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
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
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
  color: rgb(156, 156, 156);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(156, 156, 156);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 213, 128);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 4px;
  color: rgb(156, 156, 156);
}

html body footer ul li a {
  color: rgb(156, 156, 156);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 213, 128);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(156, 156, 156);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body li.section-li > .section .meta {
  color: rgb(156, 156, 156);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}

html body .darkmode svg {
  color: rgb(156, 156, 156);
  stroke: rgb(156, 156, 156);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(156, 156, 156);
}

html body .breadcrumb-element p {
  color: rgb(255, 128, 64);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

html body .metadata {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(156, 156, 156);
}

html body .metadata-properties {
  border-bottom-color: rgb(156, 156, 156);
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  color: rgb(156, 156, 156);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(255, 213, 128);
}

html body abbr {
  color: rgb(255, 213, 128);
}

html body details {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body input[type=text] {
  border-bottom-color: rgb(77, 188, 237);
  border-left-color: rgb(77, 188, 237);
  border-right-color: rgb(77, 188, 237);
  border-top-color: rgb(77, 188, 237);
  color: rgb(77, 188, 237);
}

html body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(8, 210, 32);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 210, 32);
  border-right-color: rgb(8, 210, 32);
  border-top-color: rgb(8, 210, 32);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 210, 32);
}

html body progress {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

html body sub {
  color: rgb(255, 213, 128);
}

html body summary {
  color: rgb(255, 213, 128);
}

html body sup {
  color: rgb(255, 213, 128);
}

html body ul.tags > li {
  background-color: rgb(0, 123, 136);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
