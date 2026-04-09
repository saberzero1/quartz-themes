import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abyssal",
    modes: ["dark", "light"],
    variations: ["colorful-headings"],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark: 55% !important;
  --accent-h: 200 !important;
  --accent-l: 45% !important;
  --accent-s: 70% !important;
  --background-modifier-active-hover: hsla(200, 70%, 45%, 0.1) !important;
  --background-modifier-border: #141F25 !important;
  --background-modifier-border-focus: #1E3038 !important;
  --background-modifier-border-hover: #19272E !important;
  --background-modifier-error: #E6578A !important;
  --background-modifier-error-hover: #E6578A !important;
  --background-modifier-error-rgb: 280, 87, 138 !important;
  --background-modifier-form-field: #121C21 !important;
  --background-modifier-form-field-hover: #121C21 !important;
  --background-modifier-hover: hsla(200, 70%, 45%, 0.1) !important;
  --background-modifier-success: #39F098 !important;
  --background-modifier-success-rgb: 57, 240, 152 !important;
  --background-primary: #0E161B !important;
  --background-primary-alt: #0C1417 !important;
  --background-secondary: #070B0D !important;
  --background-secondary-alt: #141F25 !important;
  --bases-cards-background: #0E161B !important;
  --bases-cards-cover-background: #0C1417 !important;
  --bases-cards-shadow: 0 0 0 1px #141F25 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #19272E !important;
  --bases-embed-border-color: #141F25 !important;
  --bases-group-heading-property-color: #7AA3B8 !important;
  --bases-table-border-color: #19272E !important;
  --bases-table-cell-background-active: #0E161B !important;
  --bases-table-cell-background-disabled: #0C1417 !important;
  --bases-table-cell-background-selected: hsla(200, 70%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1E3038 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(200, 70%, 45%) !important;
  --bases-table-group-background: #0C1417 !important;
  --bases-table-header-background: #0E161B !important;
  --bases-table-header-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --bases-table-header-color: #7AA3B8 !important;
  --bases-table-row-background-hover: #0C1417 !important;
  --bases-table-summary-background: #0E161B !important;
  --bases-table-summary-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --block-margin: 2em 0 !important;
  --blockquote-background-color: #070B0D !important;
  --blockquote-border-color: hsl(200, 70%, 45%) !important;
  --blockquote-color: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --blockquote-style: italic !important;
  --blur-background: color-mix(in srgb, #141F25 65%, transparent) linear-gradient(#141F25, color-mix(in srgb, #141F25 65%, transparent)) !important;
  --box-shadow-layered: 1.5px 0px 5px   rgba(10, 17, 20, 0.015),
      3.5px 0px 15px  rgba(10, 17, 20, 0.025),
      8px   0px 35px  rgba(10, 17, 20, 0.035),
      27px  0px 125px rgba(10, 17, 20, 0.05) !important;
  --callout-bug: 280, 87, 138;
  --callout-default: 4, 165, 255;
  --callout-error: 280, 87, 138;
  --callout-example: 180, 145, 237;
  --callout-fail: 280, 87, 138;
  --callout-important: 129, 213, 208;
  --callout-info: 4, 165, 255;
  --callout-question: 243, 200, 91;
  --callout-success: 57, 240, 152;
  --callout-summary: 129, 213, 208;
  --callout-tip: 129, 213, 208;
  --callout-todo: 4, 165, 255;
  --callout-warning: 243, 200, 91;
  --canvas-background: #0E161B !important;
  --canvas-card-label-color: #355464 !important;
  --canvas-color-1: 280, 87, 138 !important;
  --canvas-color-2: 243, 200, 91 !important;
  --canvas-color-3: 207, 186, 0 !important;
  --canvas-color-4: 57, 240, 152 !important;
  --canvas-color-5: 129, 213, 208 !important;
  --canvas-color-6: 180, 145, 237 !important;
  --canvas-dot-pattern: #141F25 !important;
  --caret-color: #BDD1DB !important;
  --checkbox-border-color: #243842 !important;
  --checkbox-border-color-hover: #7AA3B8 !important;
  --checkbox-color: hsl(200, 70%, 45%) !important;
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --checkbox-marker-color: #0E161B !important;
  --checklist-done-color: #7AA3B8 !important;
  --code-background: #15222C !important;
  --code-border-color: #141F25 !important;
  --code-bracket-background: hsla(200, 70%, 45%, 0.1) !important;
  --code-comment: #3f6a87 !important;
  --code-function: #CFBA00 !important;
  --code-important: #F3C85B !important;
  --code-keyword: #EC95EE !important;
  --code-normal: #D6E3F0 !important;
  --code-operator: #E6578A !important;
  --code-property: #81D5D0 !important;
  --code-punctuation: #7AA3B8 !important;
  --code-string: #39F098 !important;
  --code-tag: #E6578A !important;
  --code-value: #B491ED !important;
  --collapse-icon-color: #355464 !important;
  --collapse-icon-color-collapsed: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --color-accent: hsl(200, 70%, 45%) !important;
  --color-accent-1: hsl(197, 71.4%, 51.75%) !important;
  --color-accent-2: hsl(195, 73.5%, 58.05%) !important;
  --color-accent-alt: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --color-accent-hsl: 200, 70%, 45% !important;
  --color-base-00: #070B0D !important;
  --color-base-10: #0C1417 !important;
  --color-base-100: #BDD1DB !important;
  --color-base-20: #0E161B !important;
  --color-base-25: #121C21 !important;
  --color-base-30: #141F25 !important;
  --color-base-35: #19272E !important;
  --color-base-40: #1E3038 !important;
  --color-base-50: #243842 !important;
  --color-base-60: #355464 !important;
  --color-base-70: #7AA3B8 !important;
  --color-blue: #04A5FF !important;
  --color-blue-rgb: 4, 165, 255 !important;
  --color-cyan: #81D5D0 !important;
  --color-cyan-rgb: 129, 213, 208 !important;
  --color-emphasis: hsl(
                                                200,
                                                70%,
                                                65%) !important;
  --color-green: #39F098 !important;
  --color-green-rgb: 57, 240, 152 !important;
  --color-orange: #F3C85B !important;
  --color-orange-rgb: 243, 200, 91 !important;
  --color-pink: #EC95EE !important;
  --color-pink-rgb: 236, 149, 238 !important;
  --color-purple: #B491ED !important;
  --color-purple-rgb: 180, 145, 237 !important;
  --color-red: #E6578A !important;
  --color-red-rgb: 280, 87, 138 !important;
  --color-yellow: #CFBA00 !important;
  --color-yellow-rgb: 207, 186, 0 !important;
  --dark: #BDD1DB !important;
  --darkgray: #BDD1DB !important;
  --divider-color: #141F25 !important;
  --divider-color-hover: hsl(200, 70%, 45%) !important;
  --dropdown-background: #141F25 !important;
  --dropdown-background-hover: #19272E !important;
  --embed-background-color: #141F25 !important;
  --embed-block-shadow-hover: 0 0 0 1px #141F25, inset 0 0 0 1px #141F25 !important;
  --embed-border-start: 2px solid hsl(200, 70%, 45%) !important;
  --file-header-background: #0E161B !important;
  --file-header-background-focused: #0E161B !important;
  --flair-background: #141F25 !important;
  --flair-color: #BDD1DB !important;
  --footnote-divider-color: #141F25 !important;
  --footnote-id-color: #7AA3B8 !important;
  --footnote-id-color-no-occurrences: #355464 !important;
  --footnote-input-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --graph-line: #243842 !important;
  --graph-node: hsl(
                                              200,
                                              70%,
                                              75%) !important;
  --graph-node-attachment: #CFBA00 !important;
  --graph-node-focused: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --graph-node-tag: #39F098 !important;
  --graph-node-unresolved: #355464 !important;
  --graph-text: #BDD1DB !important;
  --gray: #7AA3B8 !important;
  --h1-color: #DEE8ED !important;
  --h1-line-height: 1.111 !important;
  --h1-size: 2.25em !important;
  --h2-color: #DEE8ED !important;
  --h2-line-height: 1.143 !important;
  --h2-size: 1.75em !important;
  --h3-color: #DEE8ED !important;
  --h3-line-height: 1.167 !important;
  --h3-size: 1.5em !important;
  --h4-color: #DEE8ED !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 1.25em !important;
  --h5-color: #DEE8ED !important;
  --h5-line-height: 1.25 !important;
  --h5-size: 1em !important;
  --h6-color: #DEE8ED !important;
  --h6-line-height: 1.333 !important;
  --h6-size: 0.75em !important;
  --heading-color: #DEE8ED !important;
  --heading-formatting: #355464 !important;
  --highlight: hsla(200, 70%, 45%, 0.1) !important;
  --hr-color: #141F25 !important;
  --hr-thickness: 1px !important;
  --icon-color: #7AA3B8 !important;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --icon-color-focused: #BDD1DB !important;
  --icon-color-hover: #7AA3B8 !important;
  --indentation-guide-color: hsla(200, 70%, 45%, 0.15) !important;
  --indentation-guide-color-active: hsla(200, 70%, 45%, 0.15) !important;
  --inline-title-border: #19272E !important;
  --inline-title-color: #3d6681 !important;
  --inline-title-line-height: 1.111 !important;
  --inline-title-size: 1em !important;
  --inline-title-weight: bold !important;
  --input-date-separator: #355464 !important;
  --input-placeholder-color: #355464 !important;
  --interactive-accent: hsl(200, 70%, 45%) !important;
  --interactive-accent-hover: hsl(197, 71.4%, 51.75%) !important;
  --interactive-accent-hsl: 200, 70%, 45% !important;
  --interactive-hover: #19272E !important;
  --interactive-normal: #141F25 !important;
  --light: #0E161B !important;
  --lightgray: #070B0D !important;
  --line-height-roomy: 1.75 !important;
  --link-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --link-color-hover: hsl(
                                              200,
                                              70%,
                                              75%) !important;
  --link-color-hover-embed: hsl(
                                                200,
                                                70%,
                                                95%) !important;
  --link-external-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --link-external-color-hover: hsl(
                                              200,
                                              70%,
                                              75%) !important;
  --link-unresolved-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --link-unresolved-decoration-color: hsla(200, 70%, 45%, 0.3) !important;
  --list-marker-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --list-marker-color-collapsed: #BDD1DB !important;
  --list-marker-color-hover: #7AA3B8 !important;
  --list-spacing: 0.5em !important;
  --menu-background: #070B0D !important;
  --menu-border-color: #19272E !important;
  --metadata-border-color: #141F25 !important;
  --metadata-divider-color: #141F25 !important;
  --metadata-input-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-input-text-color: #BDD1DB !important;
  --metadata-label-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-label-text-color: #7AA3B8 !important;
  --metadata-label-text-color-hover: #7AA3B8 !important;
  --metadata-property-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1E3038 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #19272E !important;
  --modal-background: #0E161B !important;
  --modal-border-color: #1E3038 !important;
  --nav-collapse-icon-color: #355464 !important;
  --nav-collapse-icon-color-collapsed: #355464 !important;
  --nav-heading-color: #BDD1DB !important;
  --nav-heading-color-collapsed: #355464 !important;
  --nav-heading-color-collapsed-hover: #7AA3B8 !important;
  --nav-heading-color-hover: #BDD1DB !important;
  --nav-indentation-guide-color: hsla(200, 70%, 45%, 0.15) !important;
  --nav-item-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --nav-item-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --nav-item-background-selected: hsla(200, 70%, 45%, 0.15) !important;
  --nav-item-color: #7AA3B8 !important;
  --nav-item-color-active: #BDD1DB !important;
  --nav-item-color-highlighted: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --nav-item-color-hover: #BDD1DB !important;
  --nav-item-color-selected: #BDD1DB !important;
  --nav-tag-color: #355464 !important;
  --nav-tag-color-active: #7AA3B8 !important;
  --nav-tag-color-hover: #7AA3B8 !important;
  --pdf-background: #0E161B !important;
  --pdf-page-background: #0E161B !important;
  --pdf-shadow: 0 0 0 1px #141F25 !important;
  --pdf-sidebar-background: #0E161B !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #141F25 !important;
  --pill-border-color: #141F25 !important;
  --pill-border-color-hover: #19272E !important;
  --pill-color: #7AA3B8 !important;
  --pill-color-hover: #BDD1DB !important;
  --pill-color-remove: #355464 !important;
  --pill-color-remove-hover: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --prompt-background: #0E161B !important;
  --prompt-border-color: #1E3038 !important;
  --raised-background: color-mix(in srgb, #141F25 65%, transparent) linear-gradient(#141F25, color-mix(in srgb, #141F25 65%, transparent)) !important;
  --rendered-code-bg: #15222C !important;
  --rendered-code-text: #F3C85B !important;
  --ribbon-background: #070B0D !important;
  --ribbon-background-collapsed: #0E161B !important;
  --search-clear-button-color: #7AA3B8 !important;
  --search-icon-color: #7AA3B8 !important;
  --search-result-background: #0E161B !important;
  --secondary: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --setting-group-heading-color: #BDD1DB !important;
  --setting-items-background: #0C1417 !important;
  --setting-items-border-color: #141F25 !important;
  --slider-thumb-border-color: #19272E !important;
  --slider-track-background: #141F25 !important;
  --status-bar-background: #070B0D !important;
  --status-bar-border-color: #141F25 !important;
  --status-bar-text-color: #7AA3B8 !important;
  --suggestion-background: #0E161B !important;
  --sync-avatar-color-1: #E6578A !important;
  --sync-avatar-color-2: #F3C85B !important;
  --sync-avatar-color-3: #CFBA00 !important;
  --sync-avatar-color-4: #39F098 !important;
  --sync-avatar-color-5: #81D5D0 !important;
  --sync-avatar-color-6: #04A5FF !important;
  --sync-avatar-color-7: #B491ED !important;
  --sync-avatar-color-8: #EC95EE !important;
  --tab-background-active: #0E161B !important;
  --tab-container-background: #070B0D !important;
  --tab-container-background-new: #070B0D !important;
  --tab-curve: 12px !important;
  --tab-divider-color: #141F25 !important;
  --tab-outline-color: #141F25 !important;
  --tab-radius: 9px !important;
  --tab-switcher-background: #070B0D !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #070B0D, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 70%, 45%) !important;
  --tab-text-color: #19272E !important;
  --tab-text-color-active: #243842 !important;
  --tab-text-color-focused: #355464 !important;
  --tab-text-color-focused-active: #7AA3B8 !important;
  --tab-text-color-focused-active-current: #BDD1DB !important;
  --tab-text-color-focused-highlighted: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --table-add-button-border-color: #141F25 !important;
  --table-border-color: #19272E !important;
  --table-drag-handle-background-active: hsl(200, 70%, 45%) !important;
  --table-drag-handle-color: #355464 !important;
  --table-header-background: #0C1417 !important;
  --table-header-background-hover: #121C21 !important;
  --table-header-border-color: #19272E !important;
  --table-header-color: #BDD1DB !important;
  --table-row-background-hover: #0C1417 !important;
  --table-row-even-background: #141F25 !important;
  --table-row-odd-background: #0E161B !important;
  --table-selection: hsla(200, 70%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(200, 70%, 45%) !important;
  --tag-background: hsla(200, 70%, 45%, 0.1) !important;
  --tag-background-hover: hsla(200, 70%, 45%, 0.2) !important;
  --tag-border-color: hsla(200, 70%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(200, 70%, 45%, 0.15) !important;
  --tag-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --tag-color-hover: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 0.5em !important;
  --tag-size: 0.75em !important;
  --tertiary: hsl(
                                              200,
                                              70%,
                                              75%) !important;
  --text-accent: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --text-accent-emphasis: hsl(
                                                200,
                                                70%,
                                                65%) !important;
  --text-accent-hover: hsl(
                                              200,
                                              70%,
                                              75%) !important;
  --text-accent-hover-embed: hsl(
                                                200,
                                                70%,
                                                95%) !important;
  --text-completed-checkboxes: #3e657c !important;
  --text-completed-checkboxes-embed: #3f6b88 !important;
  --text-error: #E6578A !important;
  --text-faint: #355464 !important;
  --text-highlight-bg-editing: #56572A !important;
  --text-highlight-bg-rendered: hsla(61, 74%, 66%, 0.85) !important;
  --text-highlight-editing: #F0EAAF !important;
  --text-highlight-rendered: #252525 !important;
  --text-muted: #7AA3B8 !important;
  --text-normal: #BDD1DB !important;
  --text-selection: hsla(200, 70%, 45%, 0.33) !important;
  --text-success: #39F098 !important;
  --text-warning: #F3C85B !important;
  --textHighlight: hsla(200, 70%, 45%, 0.1) !important;
  --titlebar-background: #070B0D !important;
  --titlebar-background-focused: #070B0D !important;
  --titlebar-border-color: #141F25 !important;
  --titlebar-text-color: #7AA3B8 !important;
  --titlebar-text-color-focused: #BDD1DB !important;
  --vault-name-color: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --vault-profile-color: #BDD1DB !important;
  --vault-profile-color-hover: #BDD1DB !important;
  --workspace-background-translucent: hsla(200, 30%, 4%, 0.95) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(25, 39, 46);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(25, 39, 46);
  color: rgb(189, 209, 219);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(7, 11, 13);
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(34, 142, 195, 0.1);
  border-radius: 7px;
  color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(7, 11, 13);
  border-left-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(36, 56, 66);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(34, 142, 195);
  border-color: rgb(34, 142, 195);
}

html[saved-theme="dark"] body p {
  color: rgb(122, 163, 184);
  outline: rgb(122, 163, 184) none 0px;
  text-decoration-color: rgb(122, 163, 184);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration-color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration-color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration: underline rgba(34, 142, 195, 0.3);
  text-decoration-color: rgba(34, 142, 195, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(53, 84, 100);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(25, 39, 46);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(25, 39, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(25, 39, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(25, 39, 46);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(189, 209, 219);
  width: 224.562px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(25, 39, 46);
  border-bottom-width: 0px;
  border-left-color: rgb(25, 39, 46);
  border-left-width: 0px;
  border-right-color: rgb(25, 39, 46);
  border-right-width: 0px;
  border-top-color: rgb(25, 39, 46);
  border-top-width: 0px;
  color: rgb(189, 209, 219);
  font-weight: 700;
  padding-bottom: 10.2px;
  padding-left: 10.2px;
  padding-right: 10.2px;
  padding-top: 10.2px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(243, 200, 91);
  border-left-color: rgb(243, 200, 91);
  border-right-color: rgb(243, 200, 91);
  border-top-color: rgb(243, 200, 91);
  color: rgb(243, 200, 91);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(207, 186, 0);
  border-left-color: rgb(207, 186, 0);
  border-right-color: rgb(207, 186, 0);
  border-top-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(222, 232, 237);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 232, 237);
  border-radius: 4px;
  border-right-color: rgb(222, 232, 237);
  border-top-color: rgb(222, 232, 237);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(20, 31, 37);
  border-bottom-color: rgb(189, 209, 219);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(189, 209, 219);
  border-left-width: 0px;
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(36, 56, 66);
  border-left-color: rgb(36, 56, 66);
  border-right-color: rgb(36, 56, 66);
  border-top-color: rgb(36, 56, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 129, 213, 208;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 145, 237;
  background-color: rgba(180, 145, 237, 0.1);
  border-bottom-color: rgba(180, 145, 237, 0.25);
  border-left-color: rgba(180, 145, 237, 0.25);
  border-right-color: rgba(180, 145, 237, 0.25);
  border-top-color: rgba(180, 145, 237, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 243, 200, 91;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 57, 240, 152;
  background-color: rgba(57, 240, 152, 0.1);
  border-bottom-color: rgba(57, 240, 152, 0.25);
  border-left-color: rgba(57, 240, 152, 0.25);
  border-right-color: rgba(57, 240, 152, 0.25);
  border-top-color: rgba(57, 240, 152, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 129, 213, 208;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 243, 200, 91;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
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
  background-color: rgb(18, 28, 33);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(7, 11, 13);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body h1 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h2 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(61, 102, 129);
}

html[saved-theme="dark"] body h3 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h4 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h5 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h6 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(122, 163, 184);
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(122, 163, 184);
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(34, 142, 195, 0.15);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(7, 11, 13);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(122, 163, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(122, 163, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(122, 163, 184);
  stroke: rgb(122, 163, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(53, 84, 100);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(7, 11, 13);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(214, 227, 240);
  border-left-color: rgb(214, 227, 240);
  border-right-color: rgb(214, 227, 240);
  border-top-color: rgb(214, 227, 240);
  color: rgb(214, 227, 240);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 5.25px;
  border-bottom-right-radius: 5.25px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 5.25px;
  border-top-right-radius: 5.25px;
  color: rgb(60, 167, 221);
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark: 55% !important;
  --accent-h: 200 !important;
  --accent-l: 45% !important;
  --accent-s: 70% !important;
  --background-modifier-active-hover: hsla(200, 70%, 45%, 0.1) !important;
  --background-modifier-border: #CFDAE2 !important;
  --background-modifier-border-focus: #98ACBA !important;
  --background-modifier-border-hover: #52697A !important;
  --background-modifier-error: #F51A68 !important;
  --background-modifier-error-hover: #F51A68 !important;
  --background-modifier-error-rgb: 245, 26, 104 !important;
  --background-modifier-form-field: #F6F9FB !important;
  --background-modifier-form-field-hover: #F6F9FB !important;
  --background-modifier-hover: hsla(200, 70%, 45%, 0.1) !important;
  --background-modifier-success: #34915e !important;
  --background-modifier-success-rgb: 52, 145, 94 !important;
  --background-primary: #F6F9FB !important;
  --background-primary-alt: #EFF3F6 !important;
  --background-secondary: #EFF3F6 !important;
  --bases-cards-background: #F6F9FB !important;
  --bases-cards-cover-background: #EFF3F6 !important;
  --bases-cards-shadow: 0 0 0 1px #CFDAE2 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #52697A !important;
  --bases-embed-border-color: #CFDAE2 !important;
  --bases-group-heading-property-color: #141F25 !important;
  --bases-table-border-color: #CFDAE2 !important;
  --bases-table-cell-background-active: #F6F9FB !important;
  --bases-table-cell-background-disabled: #EFF3F6 !important;
  --bases-table-cell-background-selected: hsla(200, 70%, 45%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #98ACBA !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(199, 70.7%, 48.375%) !important;
  --bases-table-group-background: #EFF3F6 !important;
  --bases-table-header-background: #F6F9FB !important;
  --bases-table-header-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --bases-table-header-color: #141F25 !important;
  --bases-table-row-background-hover: #EFF3F6 !important;
  --bases-table-summary-background: #F6F9FB !important;
  --bases-table-summary-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --block-margin: 2em 0 !important;
  --blockquote-background-color: #F6F9FB !important;
  --blockquote-border-color: hsl(199, 70.7%, 48.375%) !important;
  --blockquote-color: #2E3D49 !important;
  --blockquote-style: italic !important;
  --blur-background: color-mix(in srgb, #F6F9FB 65%, transparent) linear-gradient(#F6F9FB, color-mix(in srgb, #F6F9FB 65%, transparent)) !important;
  --box-shadow-layered: 0px 3px  10px  -100px rgba(26, 40, 51, 0.15),
    0px 11px 35px  -100px rgba(26, 40, 51, 0.25),
    0px 52px 150px -100px rgba(26, 40, 51, 0.35) !important;
  --callout-bug: 245, 26, 104;
  --callout-default: 4, 119, 255;
  --callout-error: 245, 26, 104;
  --callout-example: 156, 122, 211;
  --callout-fail: 245, 26, 104;
  --callout-important: 0, 200, 200;
  --callout-info: 4, 119, 255;
  --callout-question: 207, 186, 0;
  --callout-quote: 123, 140, 165;
  --callout-success: 52, 145, 94;
  --callout-summary: 0, 200, 200;
  --callout-tip: 0, 200, 200;
  --callout-todo: 4, 119, 255;
  --callout-warning: 253, 148, 52;
  --canvas-background: #F6F9FB !important;
  --canvas-card-label-color: #141F28 !important;
  --canvas-color: 152, 172, 186 !important;
  --canvas-color-1: 245, 26, 104 !important;
  --canvas-color-2: 253, 148, 52 !important;
  --canvas-color-3: 194, 186, 140 !important;
  --canvas-color-4: 52, 145, 94 !important;
  --canvas-color-5: 0, 200, 200 !important;
  --canvas-color-6: 156, 122, 211 !important;
  --canvas-dot-pattern: #98ACBA !important;
  --caret-color: #141F25 !important;
  --checkbox-border-color: #1A2833 !important;
  --checkbox-border-color-hover: #141F25 !important;
  --checkbox-color: hsl(199, 70.7%, 48.375%) !important;
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --checkbox-marker-color: #F6F9FB !important;
  --checklist-done-color: #141F25 !important;
  --code-background: #E3EDF2 !important;
  --code-border-color: #CFDAE2 !important;
  --code-bracket-background: hsla(200, 70%, 45%, 0.1) !important;
  --code-comment: #82A2C8 !important;
  --code-function: #FF3E82 !important;
  --code-important: #FD6434 !important;
  --code-keyword: #4696F4 !important;
  --code-normal: #527EB2 !important;
  --code-operator: #202B8B !important;
  --code-property: #00A4A4 !important;
  --code-punctuation: #527EB2 !important;
  --code-string: #71AB8F !important;
  --code-tag: #E83A78 !important;
  --code-value: #4696F4 !important;
  --collapse-icon-color: #141F28 !important;
  --collapse-icon-color-collapsed: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --color-accent: hsl(200, 70%, 45%) !important;
  --color-accent-1: hsl(199, 70.7%, 48.375%) !important;
  --color-accent-2: hsl(197, 71.4%, 51.75%) !important;
  --color-accent-alt: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --color-accent-hsl: 200, 70%, 45% !important;
  --color-base-00: #F6F9FB !important;
  --color-base-10: #EFF3F6 !important;
  --color-base-100: #070B0D !important;
  --color-base-20: #E3EDF2 !important;
  --color-base-25: #CFDAE2 !important;
  --color-base-30: #98ACBA !important;
  --color-base-35: #52697A !important;
  --color-base-40: #2E3D49 !important;
  --color-base-50: #1A2833 !important;
  --color-base-60: #141F28 !important;
  --color-base-70: #141F25 !important;
  --color-blue: #0477FF !important;
  --color-blue-rgb: 4, 119, 255 !important;
  --color-cyan: #00C8C8 !important;
  --color-cyan-rgb: 0, 200, 200 !important;
  --color-emphasis: hsl(
                                                200,
                                                70%,
                                                47%) !important;
  --color-green: #34915e !important;
  --color-green-rgb: 52, 145, 94 !important;
  --color-orange: #FD9434 !important;
  --color-orange-rgb: 253, 148, 52 !important;
  --color-pink: #E135E4 !important;
  --color-pink-rgb: 225, 53, 228 !important;
  --color-purple: #9C7AD3 !important;
  --color-purple-rgb: 156, 122, 211 !important;
  --color-red: #F51A68 !important;
  --color-red-rgb: 245, 26, 104 !important;
  --color-yellow: #C2BA8C !important;
  --color-yellow-rgb: 194, 186, 140 !important;
  --dark: #141F25 !important;
  --darkgray: #141F25 !important;
  --divider-color: #CFDAE2 !important;
  --divider-color-hover: hsl(199, 70.7%, 48.375%) !important;
  --dropdown-background: #F6F9FB !important;
  --dropdown-background-hover: #EFF3F6 !important;
  --embed-background-color: #EFF3F6 !important;
  --embed-block-shadow-hover: 0 0 0 1px #CFDAE2, inset 0 0 0 1px #CFDAE2 !important;
  --embed-border-start: 2px solid hsl(199, 70.7%, 48.375%) !important;
  --file-header-background: #F6F9FB !important;
  --file-header-background-focused: #F6F9FB !important;
  --flair-background: #F6F9FB !important;
  --flair-color: #141F25 !important;
  --footnote-divider-color: #CFDAE2 !important;
  --footnote-id-color: #141F25 !important;
  --footnote-id-color-no-occurrences: #141F28 !important;
  --footnote-input-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --graph-line: #98ACBA !important;
  --graph-node: hsl(
                                            200, 
                                            70%, 
                                            70%) !important;
  --graph-node-attachment: #C2BA8C !important;
  --graph-node-focused: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --graph-node-tag: #34915e !important;
  --graph-node-unresolved: #98ACBA !important;
  --graph-text: #141F25 !important;
  --gray: #141F25 !important;
  --h1-color: #2E3D49 !important;
  --h1-line-height: 1.111 !important;
  --h1-size: 2.25em !important;
  --h2-color: #2E3D49 !important;
  --h2-line-height: 1.143 !important;
  --h2-size: 1.75em !important;
  --h3-color: #2E3D49 !important;
  --h3-line-height: 1.167 !important;
  --h3-size: 1.5em !important;
  --h4-color: #2E3D49 !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 1.25em !important;
  --h5-color: #2E3D49 !important;
  --h5-line-height: 1.25 !important;
  --h5-size: 1em !important;
  --h6-color: #2E3D49 !important;
  --h6-line-height: 1.333 !important;
  --h6-size: 0.75em !important;
  --heading-color: #2E3D49 !important;
  --heading-formatting: #141F28 !important;
  --highlight: hsla(200, 70%, 45%, 0.1) !important;
  --hr-color: #CFDAE2 !important;
  --hr-thickness: 1px !important;
  --icon-color: #141F25 !important;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --icon-color-focused: #141F25 !important;
  --icon-color-hover: #141F25 !important;
  --indentation-guide-color: hsla(200, 70%, 45%, 0.15) !important;
  --indentation-guide-color-active: hsla(200, 70%, 45%, 0.15) !important;
  --inline-title-border: #CFDAE2 !important;
  --inline-title-color: #7c93a4 !important;
  --inline-title-line-height: 1.111 !important;
  --inline-title-size: 1em !important;
  --inline-title-weight: bold !important;
  --input-date-separator: #141F28 !important;
  --input-placeholder-color: #141F28 !important;
  --interactive-accent: hsl(199, 70.7%, 48.375%) !important;
  --interactive-accent-hover: hsl(197, 71.4%, 51.75%) !important;
  --interactive-accent-hsl: 200, 70%, 45% !important;
  --interactive-hover: #EFF3F6 !important;
  --interactive-normal: #F6F9FB !important;
  --light: #F6F9FB !important;
  --lightgray: #EFF3F6 !important;
  --line-height-roomy: 1.75 !important;
  --link-color: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --link-color-hover: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --link-color-hover-embed: hsl(
                                                200,
                                                70%,
                                                50%) !important;
  --link-external-color: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --link-external-color-hover: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --link-unresolved-color: #52697A !important;
  --link-unresolved-decoration-color: #52697A !important;
  --list-marker-color: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --list-marker-color-collapsed: #141F25 !important;
  --list-marker-color-hover: #141F25 !important;
  --list-spacing: 0.5em !important;
  --menu-background: #EFF3F6 !important;
  --menu-border-color: #52697A !important;
  --metadata-border-color: #CFDAE2 !important;
  --metadata-divider-color: #CFDAE2 !important;
  --metadata-input-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-input-text-color: #141F25 !important;
  --metadata-label-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-label-text-color: #141F25 !important;
  --metadata-label-text-color-hover: #141F25 !important;
  --metadata-property-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #98ACBA !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #52697A !important;
  --modal-background: #F6F9FB !important;
  --modal-border-color: #CFDAE2 !important;
  --nav-collapse-icon-color: #141F28 !important;
  --nav-collapse-icon-color-collapsed: #141F28 !important;
  --nav-heading-color: #141F25 !important;
  --nav-heading-color-collapsed: #141F28 !important;
  --nav-heading-color-collapsed-hover: #141F25 !important;
  --nav-heading-color-hover: #141F25 !important;
  --nav-indentation-guide-color: hsla(200, 70%, 45%, 0.15) !important;
  --nav-item-background-active: hsla(200, 70%, 45%, 0.1) !important;
  --nav-item-background-hover: hsla(200, 70%, 45%, 0.1) !important;
  --nav-item-background-selected: hsla(200, 70%, 45%, 0.15) !important;
  --nav-item-color: #141F25 !important;
  --nav-item-color-active: #141F25 !important;
  --nav-item-color-highlighted: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --nav-item-color-hover: #141F25 !important;
  --nav-item-color-selected: #141F25 !important;
  --nav-tag-color: #141F28 !important;
  --nav-tag-color-active: #141F25 !important;
  --nav-tag-color-hover: #141F25 !important;
  --pdf-background: #F6F9FB !important;
  --pdf-page-background: #F6F9FB !important;
  --pdf-sidebar-background: #F6F9FB !important;
  --pill-border-color: #CFDAE2 !important;
  --pill-border-color-hover: #52697A !important;
  --pill-color: #141F25 !important;
  --pill-color-hover: #141F25 !important;
  --pill-color-remove: #141F28 !important;
  --pill-color-remove-hover: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --prompt-background: #F6F9FB !important;
  --prompt-border-color: #2E3D49 !important;
  --raised-background: color-mix(in srgb, #F6F9FB 65%, transparent) linear-gradient(#F6F9FB, color-mix(in srgb, #F6F9FB 65%, transparent)) !important;
  --rendered-code-bg: #E3EDF2 !important;
  --rendered-code-text: #F51A68 !important;
  --ribbon-background: #EFF3F6 !important;
  --ribbon-background-collapsed: #F6F9FB !important;
  --search-clear-button-color: #141F25 !important;
  --search-icon-color: #141F25 !important;
  --search-result-background: #F6F9FB !important;
  --secondary: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --setting-group-heading-color: #141F25 !important;
  --setting-items-background: #EFF3F6 !important;
  --setting-items-border-color: #CFDAE2 !important;
  --slider-thumb-border-color: #52697A !important;
  --slider-track-background: #CFDAE2 !important;
  --status-bar-background: #EFF3F6 !important;
  --status-bar-border-color: #CFDAE2 !important;
  --status-bar-text-color: #141F25 !important;
  --suggestion-background: #F6F9FB !important;
  --sync-avatar-color-1: #F51A68 !important;
  --sync-avatar-color-2: #FD9434 !important;
  --sync-avatar-color-3: #C2BA8C !important;
  --sync-avatar-color-4: #34915e !important;
  --sync-avatar-color-5: #00C8C8 !important;
  --sync-avatar-color-6: #0477FF !important;
  --sync-avatar-color-7: #9C7AD3 !important;
  --sync-avatar-color-8: #E135E4 !important;
  --tab-background-active: #F6F9FB !important;
  --tab-container-background: #EFF3F6 !important;
  --tab-container-background-new: #F6F9FB !important;
  --tab-curve: 12px !important;
  --tab-divider-color: #CFDAE2 !important;
  --tab-outline-color: #CFDAE2 !important;
  --tab-radius: 9px !important;
  --tab-switcher-background: #EFF3F6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #EFF3F6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 70%, 45%) !important;
  --tab-text-color: #52697A !important;
  --tab-text-color-active: #1A2833 !important;
  --tab-text-color-focused: #141F28 !important;
  --tab-text-color-focused-active: #141F25 !important;
  --tab-text-color-focused-active-current: #070B0D !important;
  --tab-text-color-focused-highlighted: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --table-add-button-border-color: #CFDAE2 !important;
  --table-border-color: #CFDAE2 !important;
  --table-drag-handle-background-active: hsl(199, 70.7%, 48.375%) !important;
  --table-drag-handle-color: #141F28 !important;
  --table-header-background: #EFF3F6 !important;
  --table-header-background-hover: #EFF3F6 !important;
  --table-header-border-color: #CFDAE2 !important;
  --table-header-color: #141F25 !important;
  --table-row-background-hover: #EFF3F6 !important;
  --table-row-even-background: #F6F9FB !important;
  --table-row-odd-background: #E3EDF2 !important;
  --table-selection: hsla(200, 70%, 45%, 0.1) !important;
  --table-selection-border-color: hsl(199, 70.7%, 48.375%) !important;
  --tag-background: hsla(200, 70%, 45%, 0.1) !important;
  --tag-background-hover: hsla(200, 70%, 45%, 0.2) !important;
  --tag-border-color: hsla(200, 70%, 45%, 0.15) !important;
  --tag-border-color-hover: hsla(200, 70%, 45%, 0.15) !important;
  --tag-color: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --tag-color-hover: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --tag-padding-x: 0.5em !important;
  --tag-padding-y: 0.15em !important;
  --tag-radius: 0.5em !important;
  --tag-size: 0.75em !important;
  --tertiary: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --text-accent: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --text-accent-emphasis: hsl(
                                                200,
                                                70%,
                                                47%) !important;
  --text-accent-hover: hsl(
                                              200,
                                              70%,
                                              55%) !important;
  --text-accent-hover-embed: hsl(
                                                200,
                                                70%,
                                                50%) !important;
  --text-completed-checkboxes: #3e657c !important;
  --text-completed-checkboxes-embed: #3f6b88 !important;
  --text-error: #F51A68 !important;
  --text-faint: #141F28 !important;
  --text-highlight-bg-editing: hsla(61, 74%, 66%, 0.85) !important;
  --text-highlight-editing: #000 !important;
  --text-highlight-rendered: #252525 !important;
  --text-muted: #141F25 !important;
  --text-normal: #141F25 !important;
  --text-selection: hsla(200, 70%, 45%, 0.2) !important;
  --text-success: #34915e !important;
  --text-warning: #FD9434 !important;
  --textHighlight: hsla(200, 70%, 45%, 0.1) !important;
  --titlebar-background: #EFF3F6 !important;
  --titlebar-background-focused: #F6F9FB !important;
  --titlebar-border-color: #CFDAE2 !important;
  --titlebar-text-color: #141F25 !important;
  --titlebar-text-color-focused: #141F25 !important;
  --vault-name-color: hsl(
                                              200,
                                              70%,
                                              45%) !important;
  --vault-profile-color: #141F25 !important;
  --vault-profile-color-hover: #141F25 !important;
  --workspace-background-translucent: hsla(205, 35%, 92%, 0.6) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(227, 237, 242);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 249, 251);
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(34, 142, 195, 0.1);
  border-radius: 7px;
  color: rgb(34, 142, 195);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 243, 246);
  border-left-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body del {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(26, 40, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(36, 155, 211);
  border-color: rgb(36, 155, 211);
}

html[saved-theme="light"] body p {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration-color: rgb(34, 142, 195);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration-color: rgb(34, 142, 195);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(82, 105, 122);
  outline: rgb(82, 105, 122) none 0px;
  text-decoration: underline rgb(82, 105, 122);
  text-decoration-color: rgb(82, 105, 122);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body dt {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ol > li {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul > li {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(20, 31, 40);
}

html[saved-theme="light"] body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(207, 218, 226);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 218, 226);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(207, 218, 226);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(207, 218, 226);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(20, 31, 37);
  width: 224.562px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(227, 237, 242);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 218, 226);
  border-bottom-width: 0px;
  border-left-color: rgb(207, 218, 226);
  border-left-width: 0px;
  border-right-color: rgb(207, 218, 226);
  border-right-width: 0px;
  border-top-color: rgb(207, 218, 226);
  border-top-width: 0px;
  color: rgb(20, 31, 37);
  font-weight: 700;
  padding-bottom: 10.2px;
  padding-left: 10.2px;
  padding-right: 10.2px;
  padding-top: 10.2px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body tr {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(245, 26, 104);
  border-left-color: rgb(245, 26, 104);
  border-right-color: rgb(245, 26, 104);
  border-top-color: rgb(245, 26, 104);
  color: rgb(245, 26, 104);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(4, 119, 255);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(4, 119, 255);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body figcaption {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 61, 73);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(46, 61, 73);
  border-radius: 4px;
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(227, 237, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 237, 242);
  border-left-width: 1px;
  border-right-color: rgb(227, 237, 242);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(227, 237, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(20, 31, 37);
  border-bottom-style: solid;
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-right-style: solid;
  border-top-color: rgb(20, 31, 37);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(26, 40, 51);
  border-left-color: rgb(26, 40, 51);
  border-right-color: rgb(26, 40, 51);
  border-top-color: rgb(26, 40, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 200, 200;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 156, 122, 211;
  background-color: rgba(156, 122, 211, 0.15);
  border-bottom-color: rgba(156, 122, 211, 0.25);
  border-left-color: rgba(156, 122, 211, 0.25);
  border-right-color: rgba(156, 122, 211, 0.25);
  border-top-color: rgba(156, 122, 211, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 207, 186, 0;
  background-color: rgba(207, 186, 0, 0.15);
  border-bottom-color: rgba(207, 186, 0, 0.25);
  border-left-color: rgba(207, 186, 0, 0.25);
  border-right-color: rgba(207, 186, 0, 0.25);
  border-top-color: rgba(207, 186, 0, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 123, 140, 165;
  background-color: rgba(123, 140, 165, 0.15);
  border-bottom-color: rgba(123, 140, 165, 0.25);
  border-left-color: rgba(123, 140, 165, 0.25);
  border-right-color: rgba(123, 140, 165, 0.25);
  border-top-color: rgba(123, 140, 165, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 52, 145, 94;
  background-color: rgba(52, 145, 94, 0.15);
  border-bottom-color: rgba(52, 145, 94, 0.25);
  border-left-color: rgba(52, 145, 94, 0.25);
  border-right-color: rgba(52, 145, 94, 0.25);
  border-top-color: rgba(52, 145, 94, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 200, 200;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 253, 148, 52;
  background-color: rgba(253, 148, 52, 0.15);
  border-bottom-color: rgba(253, 148, 52, 0.25);
  border-left-color: rgba(253, 148, 52, 0.25);
  border-right-color: rgba(253, 148, 52, 0.25);
  border-top-color: rgba(253, 148, 52, 0.25);
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
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 243, 246);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 142, 195);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(124, 147, 164);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(20, 31, 37);
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(20, 31, 37);
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(34, 142, 195, 0.15);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(20, 31, 37);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(20, 31, 37);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(20, 31, 37);
  stroke: rgb(20, 31, 37);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(20, 31, 40);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 243, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body abbr {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(82, 126, 178);
  border-left-color: rgb(82, 126, 178);
  border-right-color: rgb(82, 126, 178);
  border-top-color: rgb(82, 126, 178);
  color: rgb(82, 126, 178);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body sub {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body summary {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body sup {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 5.25px;
  border-bottom-right-radius: 5.25px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 5.25px;
  border-top-right-radius: 5.25px;
  color: rgb(34, 142, 195);
}`,
  },
};
