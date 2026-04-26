import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pln", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark-hsl-h: 210 !important;
  --accent-dark-hsl-l: 63% !important;
  --accent-dark-hsl-s: 34% !important;
  --accent-h: 210 !important;
  --accent-l: 63% !important;
  --accent-light-hsl-h: 213 !important;
  --accent-light-hsl-l: 53% !important;
  --accent-light-hsl-s: 32% !important;
  --accent-s: 34% !important;
  --b0: #2E3440 !important;
  --b1: #3B4252 !important;
  --b2: #434C5E !important;
  --b3: #4C566A !important;
  --b3-rgb: 76, 86, 106 !important;
  --background-modifier-active-hover: hsla(210, 34%, 63%, 0.1) !important;
  --background-modifier-border: #4C566A !important;
  --background-modifier-border-focus: #2E3440 !important;
  --background-modifier-border-hover: #4C566A !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-error-rgb: 191, 97, 106 !important;
  --background-modifier-form-field: #2E3440 !important;
  --background-modifier-form-field-hover: #2E3440 !important;
  --background-modifier-success: #a3be8c !important;
  --background-modifier-success-rgb: 163, 190, 140 !important;
  --background-primary: #3B4252 !important;
  --background-primary-alt: #2E3440 !important;
  --background-secondary: #2E3440 !important;
  --background-secondary-alt: #2E3440 !important;
  --bases-cards-background: #3B4252 !important;
  --bases-cards-cover-background: #2E3440 !important;
  --bases-cards-shadow: 0 0 0 1px #4C566A !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4C566A !important;
  --bases-embed-border-color: #4C566A !important;
  --bases-group-heading-property-color: #ECEFF4 !important;
  --bases-group-heading-property-size: 10px !important;
  --bases-table-border-color: #4C566A !important;
  --bases-table-cell-background-active: #3B4252 !important;
  --bases-table-cell-background-disabled: #2E3440 !important;
  --bases-table-cell-background-selected: hsla(210, 34%, 63%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #2E3440 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(210, 34%, 63%) !important;
  --bases-table-group-background: #2E3440 !important;
  --bases-table-header-background: #3B4252 !important;
  --bases-table-header-color: #ECEFF4 !important;
  --bases-table-summary-background: #3B4252 !important;
  --blockquote-border-color: hsl(210, 34%, 63%) !important;
  --blur-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --callout-bug: 191, 97, 106;
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #3B4252 !important;
  --canvas-card-label-color: #D8DEE9 !important;
  --canvas-color-1: 191, 97, 106 !important;
  --canvas-color-2: 208, 135, 112 !important;
  --canvas-color-3: 235, 203, 139 !important;
  --canvas-color-4: 163, 190, 140 !important;
  --canvas-color-5: 136, 192, 208 !important;
  --canvas-color-6: 180, 142, 173 !important;
  --canvas-dot-pattern: #3B4252 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: #f5f7f9 !important;
  --checkbox-border-color: #D8DEE9 !important;
  --checkbox-border-color-hover: #ECEFF4 !important;
  --checkbox-color: hsl(210, 34%, 63%) !important;
  --checkbox-color-hover: hsl(207, 34.68%, 72.45%) !important;
  --checkbox-marker-color: #3B4252 !important;
  --checkbox-size: 1.1em !important;
  --checklist-done-color: #ECEFF4 !important;
  --code-background: #2E3440 !important;
  --code-border-color: #4C566A !important;
  --code-comment: #D8DEE9 !important;
  --code-function: #ebcb8b !important;
  --code-important: #d08770 !important;
  --code-normal: #f5f7f9 !important;
  --code-operator: #bf616a !important;
  --code-property: #88c0d0 !important;
  --code-punctuation: #ECEFF4 !important;
  --code-string: #a3be8c !important;
  --code-tag: #bf616a !important;
  --code-value: #b48ead !important;
  --collapse-icon-color: #D8DEE9 !important;
  --collapse-icon-color-collapsed: hsl(210, 34%, 63%) !important;
  --color-accent: hsl(210, 34%, 63%) !important;
  --color-accent-1: hsl(207, 34.68%, 72.45%) !important;
  --color-accent-2: hsl(205, 35.7%, 81.27%) !important;
  --color-accent-hsl: 210, 34%, 63% !important;
  --color-base-00: #2E3440 !important;
  --color-base-10: #2E3440 !important;
  --color-base-100: #f5f7f9 !important;
  --color-base-20: #2E3440 !important;
  --color-base-25: #2E3440 !important;
  --color-base-30: #3B4252 !important;
  --color-base-35: #4C566A !important;
  --color-base-40: #2E3440 !important;
  --color-base-50: #D8DEE9 !important;
  --color-base-60: #E5E9F0 !important;
  --color-base-70: #ECEFF4 !important;
  --color-blue: #5e81ac !important;
  --color-blue-rgb: 94, 129, 172 !important;
  --color-cyan: #88c0d0 !important;
  --color-cyan-rgb: 136, 192, 208 !important;
  --color-frost: #81a1c1 !important;
  --color-frost-rgb: 129, 161, 193 !important;
  --color-green: #a3be8c !important;
  --color-green-rgb: 163, 190, 140 !important;
  --color-orange: #d08770 !important;
  --color-orange-rgb: 208, 135, 112 !important;
  --color-purple: #b48ead !important;
  --color-purple-rgb: 180, 142, 173 !important;
  --color-red: #bf616a !important;
  --color-red-rgb: 191, 97, 106 !important;
  --color-salmon: #FC6E68 !important;
  --color-salmon-rgb: 252, 110, 104 !important;
  --color-sea-green: #8fbcbb !important;
  --color-sea-green-rgb: 143, 188, 187 !important;
  --color-yellow: #ebcb8b !important;
  --color-yellow-dark: #e4b860 !important;
  --color-yellow-dark-rgb: 228, 184, 96 !important;
  --color-yellow-light: #ebcb8b !important;
  --color-yellow-light-rgb: 235, 203, 139 !important;
  --color-yellow-rgb: 235, 203, 139 !important;
  --dark: #f5f7f9 !important;
  --darkgray: #f5f7f9 !important;
  --divider-color: #4C566A !important;
  --divider-color-hover: hsl(210, 34%, 63%) !important;
  --dropdown-background: #3B4252 !important;
  --dropdown-background-hover: #4C566A !important;
  --embed-block-shadow-hover: 0 0 0 1px #4C566A, inset 0 0 0 1px #4C566A !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(210, 34%, 63%) !important;
  --embed-padding: 0 0 0 0 !important;
  --file-folding-offset: 10px !important;
  --file-header-background: #3B4252 !important;
  --file-header-background-focused: #3B4252 !important;
  --file-header-font-size: 10px !important;
  --file-margins: 20px !important;
  --flair-background: #3B4252 !important;
  --flair-color: #f5f7f9 !important;
  --font-ui-large: 14px !important;
  --font-ui-medium: 12px !important;
  --font-ui-small: 10px !important;
  --font-ui-smaller: 10px !important;
  --footnote-divider-color: #4C566A !important;
  --footnote-id-color: #ECEFF4 !important;
  --footnote-id-color-no-occurrences: #D8DEE9 !important;
  --graph-line: #4C566A !important;
  --graph-node: #ECEFF4 !important;
  --graph-node-attachment: #ebcb8b !important;
  --graph-node-focused: hsl(210, 34%, 63%) !important;
  --graph-node-tag: #a3be8c !important;
  --graph-node-unresolved: #D8DEE9 !important;
  --graph-text: #f5f7f9 !important;
  --gray: #ECEFF4 !important;
  --h1-size: 2em !important;
  --h2-size: 1.6em !important;
  --h3-size: 1.37em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.12em !important;
  --h6-size: 1.12em !important;
  --header-height: 30px !important;
  --heading-formatting: #D8DEE9 !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(180, 142, 173, 0.4) !important;
  --hr-color: #4C566A !important;
  --icon-color: #ECEFF4 !important;
  --icon-color-active: hsl(210, 34%, 63%) !important;
  --icon-color-focused: #f5f7f9 !important;
  --icon-color-hover: #ECEFF4 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #D8DEE9 !important;
  --input-placeholder-color: #D8DEE9 !important;
  --interactive-accent: hsl(210, 34%, 63%) !important;
  --interactive-accent-hover: hsl(207, 34.68%, 72.45%) !important;
  --interactive-accent-hsl: 210, 34%, 63% !important;
  --interactive-hover: #4C566A !important;
  --interactive-normal: #3B4252 !important;
  --light: #3B4252 !important;
  --lightgray: #2E3440 !important;
  --link-color: hsl(210, 34%, 63%) !important;
  --link-color-hover: hsl(205, 35.7%, 81.27%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(210, 34%, 63%) !important;
  --link-external-color-hover: hsl(205, 35.7%, 81.27%) !important;
  --link-unresolved-color: hsl(210, 34%, 63%) !important;
  --link-unresolved-decoration-color: hsla(210, 34%, 63%, 0.3) !important;
  --link-unresolved-opacity: 100 !important;
  --list-bullet-size: .5em !important;
  --list-marker-color: #D8DEE9 !important;
  --list-marker-color-collapsed: hsl(210, 34%, 63%) !important;
  --list-marker-color-hover: #ECEFF4 !important;
  --list-spacing: 1px !important;
  --menu-background: #2E3440 !important;
  --menu-border-color: #4C566A !important;
  --metadata-background: rgba(76, 86, 106, 0.4) !important;
  --metadata-border-color: rgb(76, 86, 106) !important;
  --metadata-border-radius: 5px !important;
  --metadata-display-reading: none !important;
  --metadata-divider-color: #4C566A !important;
  --metadata-input-text-color: #f5f7f9 !important;
  --metadata-label-text-color: #ECEFF4 !important;
  --metadata-label-text-color-hover: #ECEFF4 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #2E3440 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4C566A !important;
  --metadata-property-radius: 5px !important;
  --metadata-sidebar-input-font-size: 10px !important;
  --metadata-sidebar-label-font-size: 10px !important;
  --modal-background: #3B4252 !important;
  --modal-border-color: #2E3440 !important;
  --nav-collapse-icon-color: #D8DEE9 !important;
  --nav-collapse-icon-color-collapsed: #D8DEE9 !important;
  --nav-heading-color: #f5f7f9 !important;
  --nav-heading-color-collapsed: #D8DEE9 !important;
  --nav-heading-color-collapsed-hover: #ECEFF4 !important;
  --nav-heading-color-hover: #f5f7f9 !important;
  --nav-item-background-selected: hsla(210, 34%, 63%, 0.15) !important;
  --nav-item-color: #ECEFF4 !important;
  --nav-item-color-active: #f5f7f9 !important;
  --nav-item-color-highlighted: hsl(210, 34%, 63%) !important;
  --nav-item-color-hover: #f5f7f9 !important;
  --nav-item-color-selected: #f5f7f9 !important;
  --nav-item-size: 10px !important;
  --nav-tag-color: #D8DEE9 !important;
  --nav-tag-color-active: #ECEFF4 !important;
  --nav-tag-color-hover: #ECEFF4 !important;
  --p-spacing: .5rem !important;
  --pdf-background: #3B4252 !important;
  --pdf-page-background: #3B4252 !important;
  --pdf-shadow: 0 0 0 1px #4C566A !important;
  --pdf-sidebar-background: #3B4252 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4C566A !important;
  --pill-border-color: #4C566A !important;
  --pill-border-color-hover: #4C566A !important;
  --pill-color: #ECEFF4 !important;
  --pill-color-hover: #f5f7f9 !important;
  --pill-color-remove: #D8DEE9 !important;
  --pill-color-remove-hover: hsl(210, 34%, 63%) !important;
  --pln-cards-color-rgb: 76, 86, 106 !important;
  --prompt-background: #3B4252 !important;
  --prompt-border-color: #2E3440 !important;
  --raised-background: color-mix(in srgb, #3B4252 65%, transparent) linear-gradient(#3B4252, color-mix(in srgb, #3B4252 65%, transparent)) !important;
  --ribbon-background: #2E3440 !important;
  --ribbon-background-collapsed: #3B4252 !important;
  --search-clear-button-color: #ECEFF4 !important;
  --search-icon-color: #ECEFF4 !important;
  --search-result-background: #3B4252 !important;
  --secondary: hsl(210, 34%, 63%) !important;
  --setting-group-heading-color: #f5f7f9 !important;
  --setting-group-heading-size: 12px !important;
  --setting-items-background: #2E3440 !important;
  --setting-items-border-color: #4C566A !important;
  --shiki-active-tab-border-color: #ECEFF4 !important;
  --shiki-code-background: #2E3440 !important;
  --shiki-code-block-spacing: .5rem !important;
  --shiki-code-comment: #D8DEE9 !important;
  --shiki-code-function: #a3be8c !important;
  --shiki-code-important: #d08770 !important;
  --shiki-code-normal: #ECEFF4 !important;
  --shiki-code-property: #88c0d0 !important;
  --shiki-code-punctuation: #ECEFF4 !important;
  --shiki-code-string: #ebcb8b !important;
  --shiki-code-value: #b48ead !important;
  --shiki-gutter-border-color: #4C566A !important;
  --shiki-gutter-text-color: #D8DEE9 !important;
  --shiki-gutter-text-color-highlight: #ECEFF4 !important;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5) !important;
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1) !important;
  --shiki-highlight-neutral: #ECEFF4 !important;
  --shiki-highlight-red: rgba(191, 97, 106, 0.5) !important;
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1) !important;
  --shiki-terminal-dots-color: #D8DEE9 !important;
  --slider-thumb-border-color: #4C566A !important;
  --slider-track-background: #4C566A !important;
  --status-bar-background: #2E3440 !important;
  --status-bar-border-color: #4C566A !important;
  --status-bar-font-size: 10px !important;
  --status-bar-text-color: #ECEFF4 !important;
  --suggestion-background: #3B4252 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #a3be8c !important;
  --sync-avatar-color-5: #88c0d0 !important;
  --sync-avatar-color-6: #5e81ac !important;
  --sync-avatar-color-7: #b48ead !important;
  --tab-background-active: #3B4252 !important;
  --tab-container-background: #2E3440 !important;
  --tab-divider-color: #4C566A !important;
  --tab-font-size: 10px !important;
  --tab-outline-color: #4C566A !important;
  --tab-stacked-font-size: 10px !important;
  --tab-stacked-header-width: 20px !important;
  --tab-stacked-text-align: right !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: #2E3440 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2E3440, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(210, 34%, 63%) !important;
  --tab-text-color: #D8DEE9 !important;
  --tab-text-color-active: #ECEFF4 !important;
  --tab-text-color-focused: #ECEFF4 !important;
  --tab-text-color-focused-active: #ECEFF4 !important;
  --tab-text-color-focused-active-current: #f5f7f9 !important;
  --tab-text-color-focused-highlighted: hsl(210, 34%, 63%) !important;
  --table-add-button-border-color: #4C566A !important;
  --table-border-color: #4C566A !important;
  --table-drag-handle-background-active: hsl(210, 34%, 63%) !important;
  --table-drag-handle-color: #D8DEE9 !important;
  --table-header-border-color: #4C566A !important;
  --table-header-color: #f5f7f9 !important;
  --table-selection: hsla(210, 34%, 63%, 0.1) !important;
  --table-selection-border-color: hsl(210, 34%, 63%) !important;
  --tag-background: hsla(210, 34%, 63%, 0.1) !important;
  --tag-background-hover: hsla(210, 34%, 63%, 0.2) !important;
  --tag-border-color: hsla(210, 34%, 63%, 0.15) !important;
  --tag-border-color-hover: hsla(210, 34%, 63%, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: hsl(210, 34%, 63%) !important;
  --tag-color-hover: hsl(210, 34%, 63%) !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(205, 35.7%, 81.27%) !important;
  --text-accent: hsl(210, 34%, 63%) !important;
  --text-accent-hover: hsl(205, 35.7%, 81.27%) !important;
  --text-error: #FC6E68 !important;
  --text-faint: #D8DEE9 !important;
  --text-highlight-bg: rgba(180, 142, 173, 0.4) !important;
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4) !important;
  --text-muted: #ECEFF4 !important;
  --text-normal: #f5f7f9 !important;
  --text-selection: hsla(210, 34%, 63%, 0.33) !important;
  --text-success: #a3be8c !important;
  --text-warning: #d08770 !important;
  --textHighlight: rgba(180, 142, 173, 0.4) !important;
  --titlebar-background: #2E3440 !important;
  --titlebar-background-focused: #2E3440 !important;
  --titlebar-border-color: #4C566A !important;
  --titlebar-text-color: #ECEFF4 !important;
  --titlebar-text-color-focused: #f5f7f9 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #f5f7f9 !important;
  --vault-profile-color-hover: #f5f7f9 !important;
  --vault-profile-font-size: 10px !important;
  --w0: #D8DEE9 !important;
  --w0-rgb: 216, 222, 233 !important;
  --w1: #E5E9F0 !important;
  --w2: #ECEFF4 !important;
  --w3: #f5f7f9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(46, 52, 64);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(59, 66, 82);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(46, 52, 64);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(76, 86, 106);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(46, 52, 64);
  border-left-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(235, 203, 139, 0.2);
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 247, 249);
  font-size: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(129, 161, 193);
  border-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body p {
  color: rgb(236, 239, 244);
  outline: rgb(236, 239, 244) none 0px;
  text-decoration-color: rgb(236, 239, 244);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration-color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(216, 222, 233);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(245, 247, 249);
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  margin-left: -17px;
  width: 14.6562px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(236, 239, 244);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(236, 239, 244);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 249);
  text-decoration: line-through;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 249);
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(216, 222, 233);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-color: 94, 129, 172;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(94, 129, 172) 25%, #3B4252 50%);
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="blank-titled"] {
  --callout-color: 94, 129, 172;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(94, 129, 172) 25%, #3B4252 50%);
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 252, 110, 104;
  background: rgba(252, 110, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(252, 110, 104, 0.1);
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background: rgba(180, 142, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 208, 135, 112;
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-color: 235, 203, 139;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(235, 203, 139) 25%, #3B4252 50%);
  background-color: rgba(235, 203, 139, 0.1);
  border-bottom-color: rgba(235, 203, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(235, 203, 139);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(235, 203, 139, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(235, 203, 139);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="links"] {
  --callout-color: 216, 222, 233;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(216, 222, 233) 25%, #3B4252 50%);
  background-color: rgba(216, 222, 233, 0.1);
  border-bottom-color: rgba(216, 222, 233, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 222, 233);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(216, 222, 233, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="meta"] {
  --callout-color: 216, 222, 233;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(216, 222, 233) 25%, #3B4252 50%);
  background-color: rgba(216, 222, 233, 0.1);
  border-bottom-color: rgba(216, 222, 233, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(216, 222, 233);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(216, 222, 233, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background: rgba(94, 129, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 163, 190, 140;
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 235, 203, 139;
  background: rgba(235, 203, 139, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(235, 203, 139, 0.1);
  border-bottom-color: rgba(235, 203, 139, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 203, 139);
  border-left-width: 2px;
  border-right-color: rgba(235, 203, 139, 0.25);
  border-top-color: rgb(235, 203, 139);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(245, 247, 249);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank-titled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="links"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="meta"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'/%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'/%3E%3C/svg%3E");
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 249);
  outline: rgb(245, 247, 249) none 0px;
  text-decoration-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(129, 161, 193, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(129, 161, 193, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body h1 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(245, 247, 249);
  font-size: 32px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h3 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h4 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(191, 97, 106);
  border-left-width: 3px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(236, 239, 244);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(245, 247, 249);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(76, 86, 106);
  border-left-color: rgb(76, 86, 106);
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(236, 239, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(236, 239, 244);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(236, 239, 244);
  stroke: rgb(236, 239, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(216, 222, 233);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(46, 52, 64);
  border-color: rgb(245, 247, 249);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(76, 86, 106);
  color: rgb(245, 247, 249);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgba(76, 86, 106, 0.4);
  border-bottom-color: rgb(76, 86, 106);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(76, 86, 106);
  border-left-width: 2px;
  border-right-color: rgb(76, 86, 106);
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(236, 239, 244);
  margin-bottom: 10px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgba(76, 86, 106, 0.4);
  border-color: rgb(76, 86, 106);
  border-radius: 5px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(129, 161, 193, 0.1);
  border-radius: 5px;
  color: rgb(129, 161, 193);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(59, 66, 82);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(46, 52, 64);
  border-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(245, 247, 249);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(46, 52, 64);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 247, 249);
  border-left-color: rgb(245, 247, 249);
  border-right-color: rgb(245, 247, 249);
  border-top-color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 247, 249);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(129, 161, 193, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(129, 161, 193, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: rgb(129, 161, 193);
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark-hsl-h: 210 !important;
  --accent-dark-hsl-l: 63% !important;
  --accent-dark-hsl-s: 34% !important;
  --accent-h: 213 !important;
  --accent-l: 53% !important;
  --accent-light-hsl-h: 213 !important;
  --accent-light-hsl-l: 53% !important;
  --accent-light-hsl-s: 32% !important;
  --accent-s: 32% !important;
  --b0: #2E3440 !important;
  --b1: #3B4252 !important;
  --b2: #434C5E !important;
  --b3: #4C566A !important;
  --b3-rgb: 76, 86, 106 !important;
  --background-modifier-active-hover: hsla(213, 32%, 53%, 0.1) !important;
  --background-modifier-border: #D8DEE9 !important;
  --background-modifier-border-focus: #ECEFF4 !important;
  --background-modifier-border-hover: #D8DEE9 !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-error-rgb: 191, 97, 106 !important;
  --background-modifier-form-field: #ECEFF4 !important;
  --background-modifier-form-field-hover: #ECEFF4 !important;
  --background-modifier-success: #a3be8c !important;
  --background-modifier-success-rgb: 163, 190, 140 !important;
  --background-primary: #f5f7f9 !important;
  --background-primary-alt: #ECEFF4 !important;
  --background-secondary: #ECEFF4 !important;
  --background-secondary-alt: #E5E9F0 !important;
  --bases-cards-background: #f5f7f9 !important;
  --bases-cards-cover-background: #ECEFF4 !important;
  --bases-cards-shadow: 0 0 0 1px #D8DEE9 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #D8DEE9 !important;
  --bases-embed-border-color: #D8DEE9 !important;
  --bases-group-heading-property-color: #2E3440 !important;
  --bases-group-heading-property-size: 10px !important;
  --bases-table-border-color: #D8DEE9 !important;
  --bases-table-cell-background-active: #f5f7f9 !important;
  --bases-table-cell-background-disabled: #ECEFF4 !important;
  --bases-table-cell-background-selected: hsla(213, 32%, 53%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #ECEFF4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(212, 32.32%, 56.975%) !important;
  --bases-table-group-background: #ECEFF4 !important;
  --bases-table-header-background: #f5f7f9 !important;
  --bases-table-header-color: #2E3440 !important;
  --bases-table-summary-background: #f5f7f9 !important;
  --blockquote-border-color: hsl(212, 32.32%, 56.975%) !important;
  --blur-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --callout-bug: 191, 97, 106;
  --callout-content-padding: 0 8px 8px 12px;
  --callout-default: 94, 129, 172;
  --callout-error: 191, 97, 106;
  --callout-example: 180, 142, 173;
  --callout-fail: 191, 97, 106;
  --callout-important: 136, 192, 208;
  --callout-info: 94, 129, 172;
  --callout-padding: 0;
  --callout-question: 208, 135, 112;
  --callout-radius: 5px;
  --callout-success: 163, 190, 140;
  --callout-summary: 136, 192, 208;
  --callout-tip: 136, 192, 208;
  --callout-title-padding: 8px 8px 8px 12px;
  --callout-todo: 94, 129, 172;
  --callout-warning: 208, 135, 112;
  --canvas-background: #f5f7f9 !important;
  --canvas-card-label-color: #3B4252 !important;
  --canvas-color-1: 191, 97, 106 !important;
  --canvas-color-2: 208, 135, 112 !important;
  --canvas-color-3: 228, 184, 96 !important;
  --canvas-color-4: 163, 190, 140 !important;
  --canvas-color-5: 136, 192, 208 !important;
  --canvas-color-6: 180, 142, 173 !important;
  --canvas-dot-pattern: #D8DEE9 !important;
  --cards-aspect-ratio: auto !important;
  --cards-background: transparent !important;
  --cards-border-width: 1px !important;
  --cards-columns: repeat(auto-fit, minmax(180px, 1fr)) !important;
  --cards-image-fit: contain !important;
  --cards-image-height: 400px !important;
  --cards-max-width: 1fr !important;
  --cards-min-width: 180px !important;
  --cards-mobile-width: 120px !important;
  --cards-padding: 1.2em !important;
  --caret-color: #2E3440 !important;
  --checkbox-border-color: #3B4252 !important;
  --checkbox-border-color-hover: #2E3440 !important;
  --checkbox-color: hsl(212, 32.32%, 56.975%) !important;
  --checkbox-color-hover: hsl(210, 32.64%, 60.95%) !important;
  --checkbox-marker-color: #f5f7f9 !important;
  --checkbox-size: 1.1em !important;
  --checklist-done-color: #2E3440 !important;
  --code-background: #ECEFF4 !important;
  --code-border-color: #D8DEE9 !important;
  --code-comment: #3B4252 !important;
  --code-function: #e4b860 !important;
  --code-important: #d08770 !important;
  --code-normal: #2E3440 !important;
  --code-operator: #bf616a !important;
  --code-property: #88c0d0 !important;
  --code-punctuation: #2E3440 !important;
  --code-string: #a3be8c !important;
  --code-tag: #bf616a !important;
  --code-value: #b48ead !important;
  --collapse-icon-color: #3B4252 !important;
  --collapse-icon-color-collapsed: hsl(213, 32%, 53%) !important;
  --color-accent: hsl(213, 32%, 53%) !important;
  --color-accent-1: hsl(212, 32.32%, 56.975%) !important;
  --color-accent-2: hsl(210, 32.64%, 60.95%) !important;
  --color-accent-hsl: 213, 32%, 53% !important;
  --color-base-00: #ECEFF4 !important;
  --color-base-05: #ECEFF4 !important;
  --color-base-10: #E5E9F0 !important;
  --color-base-100: #2E3440 !important;
  --color-base-20: #D8DEE9 !important;
  --color-base-25: #4C566A !important;
  --color-base-30: #D8DEE9 !important;
  --color-base-35: #D8DEE9 !important;
  --color-base-40: #ECEFF4 !important;
  --color-base-50: #3B4252 !important;
  --color-base-60: #2E3440 !important;
  --color-base-70: #2E3440 !important;
  --color-blue: #5e81ac !important;
  --color-blue-rgb: 94, 129, 172 !important;
  --color-cyan: #88c0d0 !important;
  --color-cyan-rgb: 136, 192, 208 !important;
  --color-frost: #81a1c1 !important;
  --color-frost-rgb: 129, 161, 193 !important;
  --color-green: #a3be8c !important;
  --color-green-rgb: 163, 190, 140 !important;
  --color-orange: #d08770 !important;
  --color-orange-rgb: 208, 135, 112 !important;
  --color-purple: #b48ead !important;
  --color-purple-rgb: 180, 142, 173 !important;
  --color-red: #bf616a !important;
  --color-red-rgb: 191, 97, 106 !important;
  --color-salmon: #FC6E68 !important;
  --color-salmon-rgb: 252, 110, 104 !important;
  --color-sea-green: #8fbcbb !important;
  --color-sea-green-rgb: 143, 188, 187 !important;
  --color-yellow: #e4b860 !important;
  --color-yellow-dark: #e4b860 !important;
  --color-yellow-dark-rgb: 228, 184, 96 !important;
  --color-yellow-light: #ebcb8b !important;
  --color-yellow-light-rgb: 235, 203, 139 !important;
  --color-yellow-rgb: 228, 184, 96 !important;
  --dark: #2E3440 !important;
  --darkgray: #2E3440 !important;
  --divider-color: #D8DEE9 !important;
  --divider-color-hover: hsl(212, 32.32%, 56.975%) !important;
  --dropdown-background: #ECEFF4 !important;
  --dropdown-background-hover: #E5E9F0 !important;
  --embed-block-shadow-hover: 0 0 0 1px #D8DEE9, inset 0 0 0 1px #D8DEE9 !important;
  --embed-border-left: none !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(212, 32.32%, 56.975%) !important;
  --embed-padding: 0 0 0 0 !important;
  --file-folding-offset: 10px !important;
  --file-header-background: #f5f7f9 !important;
  --file-header-background-focused: #f5f7f9 !important;
  --file-header-font-size: 10px !important;
  --file-margins: 20px !important;
  --flair-background: #ECEFF4 !important;
  --flair-color: #2E3440 !important;
  --font-ui-large: 14px !important;
  --font-ui-medium: 12px !important;
  --font-ui-small: 10px !important;
  --font-ui-smaller: 10px !important;
  --footnote-divider-color: #D8DEE9 !important;
  --footnote-id-color: #2E3440 !important;
  --footnote-id-color-no-occurrences: #3B4252 !important;
  --graph-line: #D8DEE9 !important;
  --graph-node: #2E3440 !important;
  --graph-node-attachment: #e4b860 !important;
  --graph-node-focused: hsl(213, 32%, 53%) !important;
  --graph-node-tag: #a3be8c !important;
  --graph-node-unresolved: #3B4252 !important;
  --graph-text: #2E3440 !important;
  --gray: #2E3440 !important;
  --h1-size: 2em !important;
  --h2-size: 1.6em !important;
  --h3-size: 1.37em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.12em !important;
  --h6-size: 1.12em !important;
  --header-height: 30px !important;
  --heading-formatting: #3B4252 !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(180, 142, 173, 0.4) !important;
  --hr-color: #D8DEE9 !important;
  --icon-color: #2E3440 !important;
  --icon-color-active: hsl(213, 32%, 53%) !important;
  --icon-color-focused: #2E3440 !important;
  --icon-color-hover: #2E3440 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #3B4252 !important;
  --input-placeholder-color: #3B4252 !important;
  --interactive-accent: hsl(212, 32.32%, 56.975%) !important;
  --interactive-accent-hover: hsl(210, 32.64%, 60.95%) !important;
  --interactive-accent-hsl: 213, 32%, 53% !important;
  --interactive-hover: #E5E9F0 !important;
  --interactive-normal: #ECEFF4 !important;
  --light: #f5f7f9 !important;
  --lightgray: #ECEFF4 !important;
  --link-color: hsl(213, 32%, 53%) !important;
  --link-color-hover: hsl(210, 32.64%, 60.95%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(213, 32%, 53%) !important;
  --link-external-color-hover: hsl(210, 32.64%, 60.95%) !important;
  --link-unresolved-color: hsl(213, 32%, 53%) !important;
  --link-unresolved-decoration-color: hsla(213, 32%, 53%, 0.3) !important;
  --link-unresolved-opacity: 100 !important;
  --list-bullet-size: .5em !important;
  --list-marker-color: #3B4252 !important;
  --list-marker-color-collapsed: hsl(213, 32%, 53%) !important;
  --list-marker-color-hover: #2E3440 !important;
  --list-spacing: 1px !important;
  --menu-background: #ECEFF4 !important;
  --menu-border-color: #D8DEE9 !important;
  --metadata-background: rgba(216, 222, 233, 0.4) !important;
  --metadata-border-color: rgb(216, 222, 233) !important;
  --metadata-border-radius: 5px !important;
  --metadata-display-reading: none !important;
  --metadata-divider-color: #D8DEE9 !important;
  --metadata-input-text-color: #2E3440 !important;
  --metadata-label-text-color: #2E3440 !important;
  --metadata-label-text-color-hover: #2E3440 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #ECEFF4 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8DEE9 !important;
  --metadata-property-radius: 5px !important;
  --metadata-sidebar-input-font-size: 10px !important;
  --metadata-sidebar-label-font-size: 10px !important;
  --modal-background: #f5f7f9 !important;
  --modal-border-color: #ECEFF4 !important;
  --nav-collapse-icon-color: #3B4252 !important;
  --nav-collapse-icon-color-collapsed: #3B4252 !important;
  --nav-heading-color: #2E3440 !important;
  --nav-heading-color-collapsed: #3B4252 !important;
  --nav-heading-color-collapsed-hover: #2E3440 !important;
  --nav-heading-color-hover: #2E3440 !important;
  --nav-item-background-selected: hsla(213, 32%, 53%, 0.15) !important;
  --nav-item-color: #2E3440 !important;
  --nav-item-color-active: #2E3440 !important;
  --nav-item-color-highlighted: hsl(213, 32%, 53%) !important;
  --nav-item-color-hover: #2E3440 !important;
  --nav-item-color-selected: #2E3440 !important;
  --nav-item-size: 10px !important;
  --nav-tag-color: #3B4252 !important;
  --nav-tag-color-active: #2E3440 !important;
  --nav-tag-color-hover: #2E3440 !important;
  --p-spacing: .5rem !important;
  --pdf-background: #f5f7f9 !important;
  --pdf-page-background: #f5f7f9 !important;
  --pdf-sidebar-background: #f5f7f9 !important;
  --pill-border-color: #D8DEE9 !important;
  --pill-border-color-hover: #D8DEE9 !important;
  --pill-color: #2E3440 !important;
  --pill-color-hover: #2E3440 !important;
  --pill-color-remove: #3B4252 !important;
  --pill-color-remove-hover: hsl(213, 32%, 53%) !important;
  --pln-cards-color-rgb: 216, 222, 233 !important;
  --prompt-background: #f5f7f9 !important;
  --prompt-border-color: #ECEFF4 !important;
  --raised-background: color-mix(in srgb, #f5f7f9 65%, transparent) linear-gradient(#f5f7f9, color-mix(in srgb, #f5f7f9 65%, transparent)) !important;
  --ribbon-background: #ECEFF4 !important;
  --ribbon-background-collapsed: #f5f7f9 !important;
  --search-clear-button-color: #2E3440 !important;
  --search-icon-color: #2E3440 !important;
  --search-result-background: #f5f7f9 !important;
  --secondary: hsl(213, 32%, 53%) !important;
  --setting-group-heading-color: #2E3440 !important;
  --setting-group-heading-size: 12px !important;
  --setting-items-background: #ECEFF4 !important;
  --setting-items-border-color: #D8DEE9 !important;
  --shiki-active-tab-border-color: #2E3440 !important;
  --shiki-code-background: #ECEFF4 !important;
  --shiki-code-block-spacing: .5rem !important;
  --shiki-code-comment: #3B4252 !important;
  --shiki-code-function: #a3be8c !important;
  --shiki-code-important: #d08770 !important;
  --shiki-code-normal: #2E3440 !important;
  --shiki-code-property: #88c0d0 !important;
  --shiki-code-punctuation: #2E3440 !important;
  --shiki-code-string: #e4b860 !important;
  --shiki-code-value: #b48ead !important;
  --shiki-gutter-border-color: #D8DEE9 !important;
  --shiki-gutter-text-color: #3B4252 !important;
  --shiki-gutter-text-color-highlight: #2E3440 !important;
  --shiki-highlight-green: rgba(163, 190, 140, 0.5) !important;
  --shiki-highlight-green-background: rgba(163, 190, 140, 0.1) !important;
  --shiki-highlight-neutral: #2E3440 !important;
  --shiki-highlight-red: rgba(191, 97, 106, 0.5) !important;
  --shiki-highlight-red-background: rgba(191, 97, 106, 0.1) !important;
  --shiki-terminal-dots-color: #3B4252 !important;
  --slider-thumb-border-color: #D8DEE9 !important;
  --slider-track-background: #D8DEE9 !important;
  --status-bar-background: #ECEFF4 !important;
  --status-bar-border-color: #D8DEE9 !important;
  --status-bar-font-size: 10px !important;
  --status-bar-text-color: #2E3440 !important;
  --suggestion-background: #f5f7f9 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #e4b860 !important;
  --sync-avatar-color-4: #a3be8c !important;
  --sync-avatar-color-5: #88c0d0 !important;
  --sync-avatar-color-6: #5e81ac !important;
  --sync-avatar-color-7: #b48ead !important;
  --tab-background-active: #f5f7f9 !important;
  --tab-container-background: #ECEFF4 !important;
  --tab-divider-color: #D8DEE9 !important;
  --tab-font-size: 10px !important;
  --tab-outline-color: #D8DEE9 !important;
  --tab-stacked-font-size: 10px !important;
  --tab-stacked-header-width: 20px !important;
  --tab-stacked-text-align: right !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: #ECEFF4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ECEFF4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(213, 32%, 53%) !important;
  --tab-text-color: #3B4252 !important;
  --tab-text-color-active: #2E3440 !important;
  --tab-text-color-focused: #2E3440 !important;
  --tab-text-color-focused-active: #2E3440 !important;
  --tab-text-color-focused-active-current: #2E3440 !important;
  --tab-text-color-focused-highlighted: hsl(213, 32%, 53%) !important;
  --table-add-button-border-color: #D8DEE9 !important;
  --table-border-color: #D8DEE9 !important;
  --table-drag-handle-background-active: hsl(212, 32.32%, 56.975%) !important;
  --table-drag-handle-color: #3B4252 !important;
  --table-header-border-color: #D8DEE9 !important;
  --table-header-color: #2E3440 !important;
  --table-selection: hsla(213, 32%, 53%, 0.1) !important;
  --table-selection-border-color: hsl(212, 32.32%, 56.975%) !important;
  --tag-background: hsla(213, 32%, 53%, 0.1) !important;
  --tag-background-hover: hsla(213, 32%, 53%, 0.2) !important;
  --tag-border-color: hsla(213, 32%, 53%, 0.15) !important;
  --tag-border-color-hover: hsla(213, 32%, 53%, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: hsl(213, 32%, 53%) !important;
  --tag-color-hover: hsl(213, 32%, 53%) !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(210, 32.64%, 60.95%) !important;
  --text-accent: hsl(213, 32%, 53%) !important;
  --text-accent-hover: hsl(210, 32.64%, 60.95%) !important;
  --text-error: #FC6E68 !important;
  --text-faint: #3B4252 !important;
  --text-highlight-bg: rgba(180, 142, 173, 0.4) !important;
  --text-highlight-bg-active: rgba(180, 142, 173, 0.4) !important;
  --text-muted: #2E3440 !important;
  --text-normal: #2E3440 !important;
  --text-selection: hsla(213, 32%, 53%, 0.2) !important;
  --text-success: #a3be8c !important;
  --text-warning: #d08770 !important;
  --textHighlight: rgba(180, 142, 173, 0.4) !important;
  --titlebar-background: #ECEFF4 !important;
  --titlebar-background-focused: #E5E9F0 !important;
  --titlebar-border-color: #D8DEE9 !important;
  --titlebar-text-color: #2E3440 !important;
  --titlebar-text-color-focused: #2E3440 !important;
  --traffic-lights-offset-x: 30px !important;
  --traffic-lights-offset-y: 30px !important;
  --vault-profile-color: #2E3440 !important;
  --vault-profile-color-hover: #2E3440 !important;
  --vault-profile-font-size: 10px !important;
  --w0: #D8DEE9 !important;
  --w0-rgb: 216, 222, 233 !important;
  --w1: #E5E9F0 !important;
  --w2: #ECEFF4 !important;
  --w3: #f5f7f9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 244);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 247, 249);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 244);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 222, 233);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 244);
  border-left-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
  transform: matrix(1, 0, -0.176327, 1, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(228, 184, 96, 0.2);
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body del {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 52, 64);
  font-size: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(59, 66, 82);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(110, 143, 181);
  border-color: rgb(110, 143, 181);
}

html[saved-theme="light"] body p {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration-color: rgb(97, 131, 174);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration-color: rgb(97, 131, 174);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(97, 131, 174);
  outline: rgb(97, 131, 174) none 0px;
  text-decoration: rgba(97, 131, 174, 0.3);
  text-decoration-color: rgba(97, 131, 174, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(59, 66, 82);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body table {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(46, 52, 64);
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-left-width: 0px;
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(59, 66, 82);
  border-right-color: rgb(59, 66, 82);
  border-top-color: rgb(59, 66, 82);
  margin-left: -17px;
  width: 14.6562px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(46, 52, 64);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(46, 52, 64);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 52, 64);
  text-decoration: line-through;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 52, 64);
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTIgOGExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkgzYTEgMSAwIDAxLTEtMXoiIGZpbGw9IiMwMDAiLz4KPC9zdmc+Cg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 247, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1meGVtb2ppIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij48cGF0aCBmaWxsPSIjMkIzQjQ3IiBkPSJNMzA1LjQ4NiA0MDUuMjExYzAgMjcuMTkxLTIxLjc1MiA0OS40ODYtNDkuNDg2IDQ5LjQ4NmMtMjcuNzM0IDAtNDkuNDg2LTIyLjI5NS00OS40ODYtNDkuNDg2YzAtMjcuMTkgMjEuNzUyLTQ5LjQ4NSA0OS40ODYtNDkuNDg1YzI3LjczNCAwIDQ5LjQ4NiAyMi4yOTYgNDkuNDg2IDQ5LjQ4NXptLTI2LjgwOC05OC45NzFoLTQ1Ljg3M2MtNi44IDAtMTIuMzk4LTUuMzQ3LTEyLjcwOC0xMi4xNGwtOS43MTEtMjEyLjE5N2MtLjMzMi03LjI0NyA1LjQ1NC0xMy4zMDMgMTIuNzA4LTEzLjMwM2g2NS43ODFjNy4yNjYgMCAxMy4wNTYgNi4wNzUgMTIuNzA3IDEzLjMzMmwtMTAuMTk3IDIxMi4xOTdjLS4zMjUgNi43ODEtNS45MTggMTIuMTExLTEyLjcwNyAxMi4xMTF6Ij48L3BhdGg+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 247, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk3My4xcHgiIGhlaWdodD0iOTczLjFweCIgdmlld0JveD0iMCAwIDk3My4xIDk3My4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NzMuMSA5NzMuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQoJPg0KPGc+DQoJPHBhdGggZD0iTTUwMi4yOSw3ODguMTk5aC00N2MtMzMuMSwwLTYwLDI2LjktNjAsNjB2NjQuOWMwLDMzLjEsMjYuOSw2MCw2MCw2MGg0N2MzMy4xMDEsMCw2MC0yNi45LDYwLTYwdi02NC45DQoJCUM1NjIuMjksODE1LDUzNS4zOTEsNzg4LjE5OSw1MDIuMjksNzg4LjE5OXoiLz4NCgk8cGF0aCBkPSJNMTcwLjg5LDI4NS44bDg2LjcsMTAuOGMyNy41LDMuNCw1My42LTEyLjQsNjMuNS0zOC4zYzEyLjUtMzIuNywyOS45LTU4LjUsNTIuMi03Ny4zYzMxLjYwMS0yNi42LDcwLjktNDAsMTE3LjktNDANCgkJYzQ4LjcsMCw4Ny41LDEyLjgsMTE2LjMsMzguM2MyOC44LDI1LjYsNDMuMSw1Ni4yLDQzLjEsOTIuMWMwLDI1LjgtOC4xLDQ5LjQtMjQuMyw3MC44Yy0xMC41LDEzLjYtNDIuOCw0Mi4yLTk2LjcsODUuOQ0KCQljLTU0LDQzLjctODkuODk5LDgzLjA5OS0xMDcuODk5LDExOC4wOTljLTE4LjQsMzUuODAxLTI0LjgsNzUuNS0yNi40LDExNS4zMDFjLTEuMzk5LDM0LjEsMjUuOCw2Mi41LDYwLDYyLjVoNDkNCgkJYzMxLjIsMCw1Ny0yMy45LDU5LjgtNTQuOWMyLTIyLjI5OSw1LjctMzkuMTk5LDExLjMwMS01MC42OTljOS4zOTktMTkuNzAxLDMzLjY5OS00NS43MDEsNzIuNjk5LTc4LjENCgkJQzcyMy41OSw0NzcuOCw3NzIuNzksNDI4LjQsNzk1Ljg5MSwzOTJjMjMtMzYuMywzNC42LTc0LjgsMzQuNi0xMTUuNWMwLTczLjUtMzEuMy0xMzgtOTQtMTkzLjRjLTYyLjYtNTUuNC0xNDctODMuMS0yNTMtODMuMQ0KCQljLTEwMC44LDAtMTgyLjEsMjcuMy0yNDQuMSw4MmMtNTIuOCw0Ni42LTg0LjksMTAxLjgtOTYuMiwxNjUuNUMxMzkuNjksMjY2LjEsMTUyLjM5LDI4My41LDE3MC44OSwyODUuOHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 135, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 66, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' data-darkreader-inline-stroke='' style='--darkreader-inline-stroke:currentColor'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 192, 208);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iLTUgMCAyNSAyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICANCiAgICA8dGl0bGU+cmlnaHQ8L3RpdGxlPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJpY29ucyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJ1aS1nYW1ibGluZy13ZWJzaXRlLWxpbmVkLWljbm9zLWNhc2lub3NodW50ZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNzgzLjAwMDAwMCwgLTE1OC4wMDAwMDApIiBmaWxsPSIjMUMxQzFGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPg0KICAgICAgICAgICAgPGcgaWQ9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzNTAuMDAwMDAwLCAxMjAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTQzNi40NTM1MTcsMzguNTY5MjQ5IEw0NDcuMzAyNDU5LDQ4Ljk5MzgxNTggTDQ0Ny4zOTI2MSw0OS4wNzQ4ODAyIEM0NDcuNzU1MzQsNDkuNDIzNDU0IDQ0Ny45NjgxNTksNDkuODg3MDQ2MSA0NDgsNTAuNDM4MjIyNyBMNDQ3Ljk5ODEzNSw1MC42MjI4MjI5IEM0NDcuOTY4MTU5LDUxLjExMjk1MzkgNDQ3Ljc1NTM0LDUxLjU3NjU0NiA0NDcuMzMzNjc1LDUxLjk3NzQ0NjkgTDQ0Ny4zMzkwOTUsNTEuOTY4OTgzMiBMNDM2LjQ1MzUxNyw2Mi40MzA3NTEgQzQzNS42NjM2OTQsNjMuMTg5NzQ5NyA0MzQuMzk5MDAxLDYzLjE4OTc0OTcgNDMzLjYwOTE3OCw2Mi40MzA3NTEgQzQzMi43OTY5NDEsNjEuNjUwMjEzIDQzMi43OTY5NDEsNjAuMzY3NTkyNCA0MzMuNjA5NDMyLDU5LjU4NjgxMDYgTDQ0My4wMTIzMjQsNTAuNTU3MjQ3MSBMNDMzLjYwOTE3OCw0MS40MTI5NDU2IEM0MzIuNzk2OTQxLDQwLjYzMjQwNzYgNDMyLjc5Njk0MSwzOS4zNDk3ODcgNDMzLjYwOTE3OCwzOC41NjkyNDkgQzQzNC4zOTkwMDEsMzcuODEwMjUwMyA0MzUuNjYzNjk0LDM3LjgxMDI1MDMgNDM2LjQ1MzUxNywzOC41NjkyNDkgWiIgaWQ9InJpZ2h0Ij48L3BhdGg+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3c%3fxml version='1.0' encoding='iso-8859-1'%3f%3e %3c!-- Generator: Adobe Illustrator 19.0.0%2c SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 488.9 488.9' style='enable-background:new 0 0 488.9 488.9%3b' xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath d='M239.15%2c0c31.9%2c0%2c57.7%2c25.8%2c57.7%2c57.7s-25.8%2c57.7-57.7%2c57.7s-57.7-25.8-57.7-57.7S207.25%2c0%2c239.15%2c0z M291.65%2c151.6h-1.5 h-92.8h-3.4c-19%2c0-34.3%2c15.4-34.3%2c34.3l0%2c0c0%2c19%2c15.4%2c34.3%2c34.3%2c34.3h3.4v200h-37.7v68.7h169.6v-68.7h-37.5V151.6H291.65z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 129, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(228, 184, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 142, 173);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(191, 97, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 190, 140);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --callout-color: 94, 129, 172;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(94, 129, 172) 25%, #f5f7f9 50%);
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="blank-titled"] {
  --callout-color: 94, 129, 172;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(94, 129, 172) 25%, #f5f7f9 50%);
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(94, 129, 172);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 191, 97, 106;
  background: rgba(191, 97, 106, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(191, 97, 106, 0.1);
  border-bottom-color: rgba(191, 97, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(191, 97, 106);
  border-left-width: 2px;
  border-right-color: rgba(191, 97, 106, 0.25);
  border-top-color: rgb(191, 97, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 252, 110, 104;
  background: rgba(252, 110, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(252, 110, 104, 0.1);
  border-bottom-color: rgba(252, 110, 104, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(252, 110, 104);
  border-left-width: 2px;
  border-right-color: rgba(252, 110, 104, 0.25);
  border-top-color: rgb(252, 110, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 180, 142, 173;
  background: rgba(180, 142, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 142, 173, 0.1);
  border-bottom-color: rgba(180, 142, 173, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(180, 142, 173);
  border-left-width: 2px;
  border-right-color: rgba(180, 142, 173, 0.25);
  border-top-color: rgb(180, 142, 173);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 208, 135, 112;
  background: rgba(208, 135, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(208, 135, 112, 0.1);
  border-bottom-color: rgba(208, 135, 112, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(208, 135, 112);
  border-left-width: 2px;
  border-right-color: rgba(208, 135, 112, 0.25);
  border-top-color: rgb(208, 135, 112);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-color: 228, 184, 96;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(228, 184, 96) 25%, #f5f7f9 50%);
  background-color: rgba(228, 184, 96, 0.1);
  border-bottom-color: rgba(228, 184, 96, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(228, 184, 96);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(228, 184, 96, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(228, 184, 96);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="links"] {
  --callout-color: 76, 86, 106;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(76, 86, 106) 25%, #f5f7f9 50%);
  background-color: rgba(76, 86, 106, 0.1);
  border-bottom-color: rgba(76, 86, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 86, 106, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="meta"] {
  --callout-color: 76, 86, 106;
  --heading-spacing: 1rem;
  --table-border-color: color-mix(in srgb, rgb(76, 86, 106) 25%, #f5f7f9 50%);
  background-color: rgba(76, 86, 106, 0.1);
  border-bottom-color: rgba(76, 86, 106, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(76, 86, 106);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(76, 86, 106, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(76, 86, 106);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 94, 129, 172;
  background: rgba(94, 129, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(94, 129, 172, 0.1);
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 163, 190, 140;
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 129, 161, 193;
  background: rgba(129, 161, 193, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 161, 193, 0.1);
  border-bottom-color: rgba(129, 161, 193, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(129, 161, 193);
  border-left-width: 2px;
  border-right-color: rgba(129, 161, 193, 0.25);
  border-top-color: rgb(129, 161, 193);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 163, 190, 140;
  background: rgba(163, 190, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 190, 140, 0.1);
  border-bottom-color: rgba(163, 190, 140, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 190, 140);
  border-left-width: 2px;
  border-right-color: rgba(163, 190, 140, 0.25);
  border-top-color: rgb(163, 190, 140);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 136, 192, 208;
  background: rgba(136, 192, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(136, 192, 208, 0.1);
  border-bottom-color: rgba(136, 192, 208, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(136, 192, 208);
  border-left-width: 2px;
  border-right-color: rgba(136, 192, 208, 0.25);
  border-top-color: rgb(136, 192, 208);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 228, 184, 96;
  background: rgba(228, 184, 96, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(228, 184, 96, 0.1);
  border-bottom-color: rgba(228, 184, 96, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(228, 184, 96);
  border-left-width: 2px;
  border-right-color: rgba(228, 184, 96, 0.25);
  border-top-color: rgb(228, 184, 96);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgb(94, 129, 172);
  border-left-color: rgb(94, 129, 172);
  border-right-color: rgb(94, 129, 172);
  border-top-color: rgb(94, 129, 172);
  color: rgb(94, 129, 172);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(94, 129, 172);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(46, 52, 64);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank-titled"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="blank"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="links"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="meta"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cellipse cx='12' cy='5' rx='9' ry='3'/%3E%3Cpath d='M3 5V19A9 3 0 0 0 21 19V5'/%3E%3Cpath d='M3 12A9 3 0 0 0 21 12'/%3E%3C/svg%3E");
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
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 52, 64);
  outline: rgb(46, 52, 64) none 0px;
  text-decoration-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(97, 131, 174, 0.1);
  border-bottom-color: rgba(97, 131, 174, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(97, 131, 174, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(97, 131, 174, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(97, 131, 174, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(97, 131, 174);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 52, 64);
  font-size: 32px;
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 94, 129, 172;
  border-bottom-color: rgba(94, 129, 172, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(94, 129, 172);
  border-left-width: 2px;
  border-right-color: rgba(94, 129, 172, 0.25);
  border-top-color: rgb(94, 129, 172);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(191, 97, 106);
  border-left-width: 3px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(46, 52, 64);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 52, 64);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(46, 52, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 52, 64);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(46, 52, 64);
  stroke: rgb(46, 52, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(59, 66, 82);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 247, 249);
  border-color: rgb(46, 52, 64);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(216, 222, 233);
  color: rgb(46, 52, 64);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: rgba(216, 222, 233, 0.4);
  border-bottom-color: rgb(216, 222, 233);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 222, 233);
  border-left-width: 2px;
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 4px;
  color: rgb(46, 52, 64);
  margin-bottom: 10px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgba(216, 222, 233, 0.4);
  border-color: rgb(216, 222, 233);
  border-radius: 5px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(97, 131, 174, 0.1);
  border-radius: 5px;
  color: rgb(97, 131, 174);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 247, 249);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(236, 239, 244);
  border-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(229, 233, 240);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(46, 52, 64);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(236, 239, 244);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 239, 244);
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 52, 64);
  border-left-color: rgb(46, 52, 64);
  border-right-color: rgb(46, 52, 64);
  border-top-color: rgb(46, 52, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 52, 64);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(97, 131, 174, 0.1);
  border-bottom-color: rgba(97, 131, 174, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 2px;
  border-left-color: rgba(97, 131, 174, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(97, 131, 174, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(97, 131, 174, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 2px;
  color: rgb(97, 131, 174);
}`,
  },
};
