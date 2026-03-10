import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mado-miniflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 255 !important;
  --accent-l: 68% !important;
  --accent-s: 73% !important;
  --background-fifth: rgba(23, 25, 28, 0.1) !important;
  --background-fourth: rgba(47, 55, 66, 0.9) !important;
  --background-modifier-active-hover: rgba(144, 114, 233, 0.1) !important;
  --background-modifier-border: rgb(26, 32, 40) !important;
  --background-modifier-border-hover: rgb(72, 84, 97) !important;
  --background-modifier-error: hsla(365, 90%, 65%, 1) !important;
  --background-modifier-error-hover: hsla(365, 90%, 65%, 1) !important;
  --background-modifier-hover: rgba(21, 26, 30, 0.5) !important;
  --background-primary: rgb(40, 47, 57) !important;
  --background-primary-alt: rgb(29, 37, 47) !important;
  --background-secondary: rgb(29, 37, 47) !important;
  --background-secondary-alt: rgb(26, 32, 40) !important;
  --bases-cards-background: rgb(40, 47, 57) !important;
  --bases-cards-cover-background: rgb(29, 37, 47) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(26, 32, 40) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(72, 84, 97) !important;
  --bases-embed-border-color: rgb(26, 32, 40) !important;
  --bases-group-heading-property-color: rgb(130, 143, 166) !important;
  --bases-table-border-color: rgb(26, 32, 40) !important;
  --bases-table-cell-background-active: rgb(40, 47, 57) !important;
  --bases-table-cell-background-disabled: rgb(29, 37, 47) !important;
  --bases-table-cell-background-selected: rgba(144, 114, 233, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(149, 117, 245) !important;
  --bases-table-group-background: rgb(29, 37, 47) !important;
  --bases-table-header-background: rgb(40, 47, 57) !important;
  --bases-table-header-background-hover: rgba(21, 26, 30, 0.5) !important;
  --bases-table-header-color: rgb(130, 143, 166) !important;
  --bases-table-summary-background: rgb(40, 47, 57) !important;
  --bases-table-summary-background-hover: rgba(21, 26, 30, 0.5) !important;
  --bgcolor-h: 215 !important;
  --bgcolor-l: 19% !important;
  --bgcolor-s: 17% !important;
  --blockquote-border-color: rgb(149, 117, 245) !important;
  --blockquote-color: rgb(142, 154, 175) !important;
  --blur-background: color-mix(in srgb, rgb(26, 32, 40) 65%, transparent) linear-gradient(rgb(26, 32, 40), color-mix(in srgb, rgb(26, 32, 40) 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --border: 1px solid rgb(26, 32, 40) !important;
  --button-padding-icon: 7px !important;
  --button-padding-long: 7px 15px !important;
  --button-radius: 4px !important;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: rgb(40, 47, 57) !important;
  --canvas-card-label-color: rgba(105, 122, 150, 0.7) !important;
  --canvas-dot-pattern: rgb(26, 32, 40) !important;
  --caret-color: rgb(186, 186, 186) !important;
  --checkbox-border-color: rgba(105, 122, 150, 0.7) !important;
  --checkbox-border-color-hover: rgb(130, 143, 166) !important;
  --checkbox-color: rgb(149, 117, 245) !important;
  --checkbox-color-hover: rgb(134, 112, 219) !important;
  --checkbox-marker-color: rgb(40, 47, 57) !important;
  --checklist-done-color: rgba(105, 122, 150, 0.7) !important;
  --code-background: rgb(29, 37, 47) !important;
  --code-border-color: rgb(26, 32, 40) !important;
  --code-bracket-background: rgba(21, 26, 30, 0.5) !important;
  --code-comment: rgba(105, 122, 150, 0.7) !important;
  --code-normal: rgb(130, 143, 166) !important;
  --code-operator: hsla(365, 90%, 65%, 1) !important;
  --code-punctuation: rgb(130, 143, 166) !important;
  --code-tag: hsla(365, 90%, 65%, 1) !important;
  --collapse-icon-color: rgba(105, 122, 150, 0.7) !important;
  --collapse-icon-color-collapsed: rgb(134, 112, 219) !important;
  --color-accent: rgb(149, 117, 245) !important;
  --color-accent-1: rgb(134, 112, 219) !important;
  --color-accent-2: rgb(148, 117, 240) !important;
  --color-accent-hsl: 255, 73%, 68% !important;
  --color-base-00: rgb(40, 47, 57) !important;
  --color-base-00-0: rgba(47, 55, 66, 0.9) !important;
  --color-base-00-0-trans: rgba(47, 55, 66, 0.5) !important;
  --color-base-00-trans: rgba(40, 47, 57, 0.5) !important;
  --color-base-05: rgba(21, 26, 30, 0.5) !important;
  --color-base-10: rgb(29, 37, 47) !important;
  --color-base-100: rgb(186, 186, 186) !important;
  --color-base-20: rgb(29, 37, 47) !important;
  --color-base-20-0: rgba(23, 25, 28, 0.1) !important;
  --color-base-20-trans: rgba(29, 37, 47, 0.5) !important;
  --color-base-30: rgb(26, 32, 40) !important;
  --color-base-35: rgb(72, 84, 97) !important;
  --color-base-50: rgba(105, 122, 150, 0.7) !important;
  --color-base-70: rgb(130, 143, 166) !important;
  --color-base-hover: rgba(21, 26, 30, 0.5) !important;
  --color-base-shadow: rgba(23, 26, 28, 0.1) !important;
  --color-base-shadow-hover: rgba(0, 0, 0, 0.3) !important;
  --color-highlight: rgb(220, 190, 101) !important;
  --color-italic: rgb(119, 147, 187) !important;
  --color-muted: rgb(142, 154, 175) !important;
  --color-red: hsla(365, 90%, 65%, 1) !important;
  --color-strikethrough: rgba(105, 122, 150, 0.7) !important;
  --dark: rgb(186, 186, 186) !important;
  --darkgray: rgb(186, 186, 186) !important;
  --divider-color: rgb(26, 32, 40) !important;
  --divider-color-hover: rgb(149, 117, 245) !important;
  --divider-width: 4px !important;
  --dropdown-background: rgb(26, 32, 40) !important;
  --dropdown-background-hover: rgb(72, 84, 97) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(26, 32, 40), inset 0 0 0 1px rgb(26, 32, 40) !important;
  --embed-border-start: 2px solid rgb(149, 117, 245) !important;
  --embed-padding: 13px 23px !important;
  --file-header-background: rgb(40, 47, 57) !important;
  --file-header-background-focused: rgb(40, 47, 57) !important;
  --flair-background: rgb(26, 32, 40) !important;
  --flair-color: rgb(186, 186, 186) !important;
  --footnote-divider-color: rgb(26, 32, 40) !important;
  --footnote-id-color: rgb(130, 143, 166) !important;
  --footnote-id-color-no-occurrences: rgba(105, 122, 150, 0.7) !important;
  --footnote-input-background-active: rgba(21, 26, 30, 0.5) !important;
  --graph-line: rgb(72, 84, 97) !important;
  --graph-node: rgb(130, 143, 166) !important;
  --graph-node-focused: rgb(134, 112, 219) !important;
  --graph-node-unresolved: rgba(105, 122, 150, 0.7) !important;
  --graph-text: rgb(186, 186, 186) !important;
  --gray: rgb(130, 143, 166) !important;
  --header-height: 43px !important;
  --heading-formatting: rgba(105, 122, 150, 0.7) !important;
  --highlight: rgb(199, 167, 72) !important;
  --hr-color: rgb(26, 32, 40) !important;
  --icon-color: rgb(130, 143, 166) !important;
  --icon-color-active: rgb(134, 112, 219) !important;
  --icon-color-focused: rgb(186, 186, 186) !important;
  --icon-color-hover: rgb(130, 143, 166) !important;
  --icon-l: 20px !important;
  --icon-m: 20px !important;
  --icon-size: 20px !important;
  --inline-code-color: hsla(365, 90%, 65%, 1) !important;
  --input-date-separator: rgba(105, 122, 150, 0.7) !important;
  --input-placeholder-color: rgba(105, 122, 150, 0.7) !important;
  --interactive-accent: rgb(149, 117, 245) !important;
  --interactive-accent-hover: rgb(134, 112, 219) !important;
  --interactive-accent-hsl: 255, 73%, 68% !important;
  --interactive-hover: rgb(72, 84, 97) !important;
  --interactive-normal: rgb(26, 32, 40) !important;
  --italic-color: rgb(119, 147, 187) !important;
  --light: rgb(40, 47, 57) !important;
  --lightgray: rgb(29, 37, 47) !important;
  --link-color: rgb(134, 112, 219) !important;
  --link-color-hover: rgb(148, 117, 240) !important;
  --link-external-color: rgb(134, 112, 219) !important;
  --link-external-color-hover: rgb(148, 117, 240) !important;
  --link-unresolved-color: rgb(134, 112, 219) !important;
  --link-unresolved-decoration-color: rgba(144, 114, 233, 0.3) !important;
  --list-indent: 37px !important;
  --list-marker-color: rgba(105, 122, 150, 0.7) !important;
  --list-marker-color-collapsed: rgb(134, 112, 219) !important;
  --list-marker-color-hover: rgb(130, 143, 166) !important;
  --menu-background: rgb(29, 37, 47) !important;
  --menu-border-color: rgb(72, 84, 97) !important;
  --metadata-border-color: rgb(26, 32, 40) !important;
  --metadata-divider-color: rgb(26, 32, 40) !important;
  --metadata-input-background-active: rgba(21, 26, 30, 0.5) !important;
  --metadata-input-text-color: rgb(186, 186, 186) !important;
  --metadata-label-background-active: rgba(21, 26, 30, 0.5) !important;
  --metadata-label-text-color: rgb(130, 143, 166) !important;
  --metadata-label-text-color-hover: rgb(130, 143, 166) !important;
  --metadata-property-background-active: rgba(21, 26, 30, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(72, 84, 97) !important;
  --modal-background: rgb(40, 47, 57) !important;
  --nav-collapse-icon-color: rgba(105, 122, 150, 0.7) !important;
  --nav-collapse-icon-color-collapsed: rgba(105, 122, 150, 0.7) !important;
  --nav-heading-color: rgb(186, 186, 186) !important;
  --nav-heading-color-collapsed: rgba(105, 122, 150, 0.7) !important;
  --nav-heading-color-collapsed-hover: rgb(130, 143, 166) !important;
  --nav-heading-color-hover: rgb(186, 186, 186) !important;
  --nav-item-background-active: rgba(21, 26, 30, 0.5) !important;
  --nav-item-background-hover: rgba(21, 26, 30, 0.5) !important;
  --nav-item-background-selected: rgba(144, 114, 233, 0.15) !important;
  --nav-item-color: rgb(130, 143, 166) !important;
  --nav-item-color-active: rgb(186, 186, 186) !important;
  --nav-item-color-highlighted: rgb(134, 112, 219) !important;
  --nav-item-color-hover: rgb(186, 186, 186) !important;
  --nav-item-color-selected: rgb(186, 186, 186) !important;
  --nav-tag-color: rgba(105, 122, 150, 0.7) !important;
  --nav-tag-color-active: rgb(130, 143, 166) !important;
  --nav-tag-color-hover: rgb(130, 143, 166) !important;
  --panel-radius: 8px !important;
  --panel-shadow: 0 1px 3px rgba(23, 26, 28, 0.1) !important;
  --panel-shadow-hover: 0 3px 5px rgba(0, 0, 0, 0.3) !important;
  --pdf-background: rgb(40, 47, 57) !important;
  --pdf-page-background: rgb(40, 47, 57) !important;
  --pdf-shadow: 0 0 0 1px rgb(26, 32, 40) !important;
  --pdf-sidebar-background: rgb(40, 47, 57) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(26, 32, 40) !important;
  --pill-border-color: rgb(26, 32, 40) !important;
  --pill-border-color-hover: rgb(72, 84, 97) !important;
  --pill-color: rgb(130, 143, 166) !important;
  --pill-color-hover: rgb(186, 186, 186) !important;
  --pill-color-remove: rgba(105, 122, 150, 0.7) !important;
  --pill-color-remove-hover: rgb(134, 112, 219) !important;
  --prompt-background: rgb(40, 47, 57) !important;
  --raised-background: color-mix(in srgb, rgb(26, 32, 40) 65%, transparent) linear-gradient(rgb(26, 32, 40), color-mix(in srgb, rgb(26, 32, 40) 65%, transparent)) !important;
  --ribbon-background: rgb(29, 37, 47) !important;
  --ribbon-background-collapsed: rgb(40, 47, 57) !important;
  --search-clear-button-color: rgb(130, 143, 166) !important;
  --search-icon-color: rgb(130, 143, 166) !important;
  --search-result-background: rgb(40, 47, 57) !important;
  --secondary: rgb(134, 112, 219) !important;
  --setting-group-heading-color: rgb(186, 186, 186) !important;
  --setting-items-background: rgb(29, 37, 47) !important;
  --setting-items-border-color: rgb(26, 32, 40) !important;
  --sidebar-size-left: 270px !important;
  --sidebar-size-right: 270px !important;
  --slider-thumb-border-color: rgb(72, 84, 97) !important;
  --slider-track-background: rgb(26, 32, 40) !important;
  --status-bar-background: rgb(29, 37, 47) !important;
  --status-bar-border-color: rgb(26, 32, 40) !important;
  --status-bar-text-color: rgb(130, 143, 166) !important;
  --suggestion-background: rgb(40, 47, 57) !important;
  --sync-avatar-color-1: hsla(365, 90%, 65%, 1) !important;
  --tab-background-active: rgb(40, 47, 57) !important;
  --tab-container-background: rgb(29, 37, 47) !important;
  --tab-divider-color: rgb(72, 84, 97) !important;
  --tab-outline-color: rgb(26, 32, 40) !important;
  --tab-stacked-header-width: 53px !important;
  --tab-switcher-background: rgb(29, 37, 47) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(29, 37, 47), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(149, 117, 245) !important;
  --tab-text-color: rgba(105, 122, 150, 0.7) !important;
  --tab-text-color-active: rgb(130, 143, 166) !important;
  --tab-text-color-focused: rgb(130, 143, 166) !important;
  --tab-text-color-focused-active: rgb(130, 143, 166) !important;
  --tab-text-color-focused-active-current: rgb(186, 186, 186) !important;
  --tab-text-color-focused-highlighted: rgb(134, 112, 219) !important;
  --table-add-button-border-color: rgb(26, 32, 40) !important;
  --table-border-color: rgb(26, 32, 40) !important;
  --table-drag-handle-background-active: rgb(149, 117, 245) !important;
  --table-drag-handle-color: rgba(105, 122, 150, 0.7) !important;
  --table-header-border-color: rgb(26, 32, 40) !important;
  --table-header-color: rgb(186, 186, 186) !important;
  --table-selection: rgba(144, 114, 233, 0.1) !important;
  --table-selection-border-color: rgb(149, 117, 245) !important;
  --tag-background: rgba(144, 114, 233, 0.1) !important;
  --tag-background-hover: rgba(144, 114, 233, 0.2) !important;
  --tag-border-color: rgba(144, 114, 233, 0.15) !important;
  --tag-border-color-hover: rgba(144, 114, 233, 0.15) !important;
  --tag-color: rgb(134, 112, 219) !important;
  --tag-color-hover: rgb(134, 112, 219) !important;
  --tertiary: rgb(148, 117, 240) !important;
  --text-accent: rgb(134, 112, 219) !important;
  --text-accent-hover: rgb(148, 117, 240) !important;
  --text-error: hsla(365, 90%, 65%, 1) !important;
  --text-faint: rgba(105, 122, 150, 0.7) !important;
  --text-highlight-bg: rgb(199, 167, 72) !important;
  --text-muted: rgb(130, 143, 166) !important;
  --text-normal: rgb(186, 186, 186) !important;
  --text-selection: rgba(144, 114, 233, 0.33) !important;
  --textHighlight: rgb(199, 167, 72) !important;
  --titlebar-background: rgb(29, 37, 47) !important;
  --titlebar-background-focused: rgb(29, 37, 47) !important;
  --titlebar-border-color: rgb(26, 32, 40) !important;
  --titlebar-text-color: rgb(130, 143, 166) !important;
  --titlebar-text-color-focused: rgb(186, 186, 186) !important;
  --traffic-lights-offset-x: 43px !important;
  --traffic-lights-offset-y: 43px !important;
  --vault-profile-color: rgb(186, 186, 186) !important;
  --vault-profile-color-hover: rgb(186, 186, 186) !important;
  --window-radius: 23px !important;
  --window-shadow: 0 0 9px rgba(0, 0, 0, 0.3) !important;
  --window-shadow-left: -4px 0 5px rgba(0, 0, 0, 0.3) !important;
  --window-shadow-right: 4px 0 5px rgba(0, 0, 0, 0.3) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 47, 57);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(29, 37, 47);
  color: rgb(186, 186, 186);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration: rgb(119, 147, 187);
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration: rgb(119, 147, 187);
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(220, 190, 101);
  outline: rgb(220, 190, 101) none 0px;
  text-decoration: rgb(220, 190, 101);
  text-decoration-color: rgb(220, 190, 101);
}

html[saved-theme="dark"] body del {
  color: rgba(105, 122, 150, 0.7);
  outline: rgba(105, 122, 150, 0.7) none 0px;
  text-decoration: line-through rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body p {
  color: rgb(130, 143, 166);
  outline: rgb(130, 143, 166) none 0px;
  text-decoration: rgb(130, 143, 166);
  text-decoration-color: rgb(130, 143, 166);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(134, 112, 219);
  outline: rgb(134, 112, 219) none 0px;
  text-decoration: rgb(134, 112, 219);
  text-decoration-color: rgb(134, 112, 219);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(134, 112, 219);
  outline: rgb(134, 112, 219) none 0px;
  text-decoration: underline rgb(134, 112, 219);
  text-decoration-color: rgb(134, 112, 219);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(134, 112, 219);
  outline: rgb(134, 112, 219) none 0px;
  text-decoration: underline rgba(144, 114, 233, 0.3);
  text-decoration-color: rgba(144, 114, 233, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body dt {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(40, 47, 57);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(105, 122, 150, 0.7);
  text-decoration: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(29, 37, 47);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body table {
  color: rgb(186, 186, 186);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="dark"] body thead {
  border-top-color: rgb(149, 117, 245);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-top-color: rgb(149, 117, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(142, 154, 175);
  border-left-color: rgb(142, 154, 175);
  border-right-color: rgb(142, 154, 175);
  border-top-color: rgb(142, 154, 175);
  color: rgb(142, 154, 175);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(186, 186, 186);
  border-radius: 8px;
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(26, 32, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 32, 40);
  border-left-width: 1px;
  border-right-color: rgb(26, 32, 40);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 32, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(26, 32, 40);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 32, 40);
  border-left-width: 1px;
  border-right-color: rgb(26, 32, 40);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(26, 32, 40);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(105, 122, 150, 0.7);
  text-decoration: line-through rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(105, 122, 150, 0.7);
  border-left-color: rgba(105, 122, 150, 0.7);
  border-right-color: rgba(105, 122, 150, 0.7);
  border-top-color: rgba(105, 122, 150, 0.7);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(186, 186, 186);
  text-decoration: rgba(105, 122, 150, 0.7);
  text-decoration-color: rgba(105, 122, 150, 0.7);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 27px;
  padding-right: 11px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.07);
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.07);
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.07);
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.07);
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.07);
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.07);
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 47, 57);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 37, 47);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(21, 26, 30, 0.5);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(21, 26, 30, 0.5);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(144, 114, 233, 0.1);
  border-bottom-color: rgba(144, 114, 233, 0.15);
  border-left-color: rgba(144, 114, 233, 0.15);
  border-right-color: rgba(144, 114, 233, 0.15);
  border-top-color: rgba(144, 114, 233, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(134, 112, 219);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h2 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h3 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h4 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body h6 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(29, 37, 47) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 37, 47);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(148, 117, 240);
  font-weight: 500;
  text-decoration: rgb(148, 117, 240);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 117, 240);
  font-weight: 500;
  text-decoration: rgb(148, 117, 240);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(130, 143, 166);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(130, 143, 166);
  text-decoration: rgb(130, 143, 166);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(130, 143, 166);
  stroke: rgb(130, 143, 166);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(105, 122, 150, 0.7);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(26, 32, 40);
  border-left-color: rgb(26, 32, 40);
  border-right-color: rgb(26, 32, 40);
  border-top-color: rgb(26, 32, 40);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 37, 47);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body abbr {
  color: rgb(186, 186, 186);
  text-decoration: underline dotted rgb(186, 186, 186);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(29, 37, 47);
  border-bottom-color: rgb(130, 143, 166);
  border-left-color: rgb(130, 143, 166);
  border-right-color: rgb(130, 143, 166);
  border-top-color: rgb(130, 143, 166);
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}

html[saved-theme="dark"] body summary {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(186, 186, 186);
  font-size: 13.6px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-fifth: rgba(225, 230, 234, 0.1) !important;
  --background-fourth: rgb(252, 253, 253) !important;
  --background-modifier-active-hover: rgba(139, 108, 239, 0.1) !important;
  --background-modifier-border-hover: rgb(176, 186, 196) !important;
  --background-modifier-error: hsla(365, 85%, 55%, 1) !important;
  --background-modifier-error-hover: hsla(365, 85%, 55%, 1) !important;
  --background-modifier-form-field: rgb(244, 248, 251) !important;
  --background-modifier-form-field-hover: rgb(244, 248, 251) !important;
  --background-modifier-hover: rgba(195, 203, 213, 0.3) !important;
  --background-primary: rgb(244, 248, 251) !important;
  --background-primary-alt: rgb(230, 237, 244) !important;
  --background-secondary: rgb(237, 242, 248) !important;
  --background-secondary-alt: rgb(225, 230, 234) !important;
  --bases-cards-background: rgb(244, 248, 251) !important;
  --bases-cards-cover-background: rgb(230, 237, 244) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(176, 186, 196) !important;
  --bases-group-heading-property-color: rgb(81, 94, 118) !important;
  --bases-table-cell-background-active: rgb(244, 248, 251) !important;
  --bases-table-cell-background-disabled: rgb(230, 237, 244) !important;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(175, 154, 244) !important;
  --bases-table-group-background: rgb(230, 237, 244) !important;
  --bases-table-header-background: rgb(244, 248, 251) !important;
  --bases-table-header-background-hover: rgba(195, 203, 213, 0.3) !important;
  --bases-table-header-color: rgb(81, 94, 118) !important;
  --bases-table-summary-background: rgb(244, 248, 251) !important;
  --bases-table-summary-background-hover: rgba(195, 203, 213, 0.3) !important;
  --bgcolor-h: 204 !important;
  --bgcolor-l: 97% !important;
  --bgcolor-s: 45% !important;
  --blockquote-border-color: rgb(175, 154, 244) !important;
  --blockquote-color: rgb(81, 94, 118) !important;
  --blur-background: color-mix(in srgb, rgb(244, 248, 251) 65%, transparent) linear-gradient(rgb(244, 248, 251), color-mix(in srgb, rgb(244, 248, 251) 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --border: 1px solid #e0e0e0 !important;
  --button-padding-icon: 7px !important;
  --button-padding-long: 7px 15px !important;
  --button-radius: 4px !important;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: rgb(244, 248, 251) !important;
  --canvas-card-label-color: rgb(176, 184, 196) !important;
  --caret-color: rgb(33, 33, 33) !important;
  --checkbox-border-color: rgb(176, 184, 196) !important;
  --checkbox-border-color-hover: rgb(81, 94, 118) !important;
  --checkbox-color: rgb(175, 154, 244) !important;
  --checkbox-color-hover: rgb(120, 85, 236) !important;
  --checkbox-marker-color: rgb(244, 248, 251) !important;
  --checklist-done-color: rgb(176, 184, 196) !important;
  --code-background: rgb(230, 237, 244) !important;
  --code-bracket-background: rgba(195, 203, 213, 0.3) !important;
  --code-comment: rgb(176, 184, 196) !important;
  --code-normal: rgb(81, 94, 118) !important;
  --code-operator: hsla(365, 85%, 55%, 1) !important;
  --code-punctuation: rgb(81, 94, 118) !important;
  --code-tag: hsla(365, 85%, 55%, 1) !important;
  --collapse-icon-color: rgb(176, 184, 196) !important;
  --collapse-icon-color-collapsed: rgb(139, 108, 239) !important;
  --color-accent: rgb(139, 108, 239) !important;
  --color-accent-1: rgb(175, 154, 244) !important;
  --color-accent-2: rgb(120, 85, 236) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-base-00: rgb(244, 248, 251) !important;
  --color-base-00-0: rgb(252, 253, 253) !important;
  --color-base-00-0-trans: rgba(252, 253, 253, 0.5) !important;
  --color-base-00-trans: rgba(244, 248, 251, 0.5) !important;
  --color-base-05: rgb(225, 230, 234) !important;
  --color-base-10: rgb(230, 237, 244) !important;
  --color-base-100: rgb(33, 33, 33) !important;
  --color-base-20: rgb(237, 242, 248) !important;
  --color-base-20-0: rgba(225, 230, 234, 0.1) !important;
  --color-base-20-trans: rgba(238, 242, 247, 0.5) !important;
  --color-base-35: rgb(176, 186, 196) !important;
  --color-base-50: rgb(176, 184, 196) !important;
  --color-base-70: rgb(81, 94, 118) !important;
  --color-base-hover: rgba(195, 203, 213, 0.3) !important;
  --color-base-shadow: rgba(195, 203, 213, 0.2) !important;
  --color-base-shadow-hover: rgba(195, 203, 213, 0.3) !important;
  --color-highlight: rgb(33, 33, 33) !important;
  --color-italic: rgb(120, 154, 201) !important;
  --color-muted: rgb(81, 94, 118) !important;
  --color-red: hsla(365, 85%, 55%, 1) !important;
  --color-strikethrough: rgb(176, 184, 196) !important;
  --dark: rgb(33, 33, 33) !important;
  --darkgray: rgb(33, 33, 33) !important;
  --divider-color-hover: rgb(175, 154, 244) !important;
  --divider-width: 4px !important;
  --dropdown-background: rgb(244, 248, 251) !important;
  --dropdown-background-hover: rgb(230, 237, 244) !important;
  --embed-border-start: 2px solid rgb(175, 154, 244) !important;
  --embed-padding: 13px 23px !important;
  --file-header-background: rgb(244, 248, 251) !important;
  --file-header-background-focused: rgb(244, 248, 251) !important;
  --flair-background: rgb(244, 248, 251) !important;
  --flair-color: rgb(33, 33, 33) !important;
  --footnote-id-color: rgb(81, 94, 118) !important;
  --footnote-id-color-no-occurrences: rgb(176, 184, 196) !important;
  --footnote-input-background-active: rgba(195, 203, 213, 0.3) !important;
  --graph-line: rgb(176, 186, 196) !important;
  --graph-node: rgb(81, 94, 118) !important;
  --graph-node-focused: rgb(139, 108, 239) !important;
  --graph-node-unresolved: rgb(176, 184, 196) !important;
  --graph-text: rgb(33, 33, 33) !important;
  --gray: rgb(81, 94, 118) !important;
  --header-height: 43px !important;
  --heading-formatting: rgb(176, 184, 196) !important;
  --highlight: rgba(195, 203, 213, 0.3) !important;
  --icon-color: rgb(81, 94, 118) !important;
  --icon-color-active: rgb(139, 108, 239) !important;
  --icon-color-focused: rgb(33, 33, 33) !important;
  --icon-color-hover: rgb(81, 94, 118) !important;
  --icon-l: 20px !important;
  --icon-m: 20px !important;
  --icon-size: 20px !important;
  --inline-code-color: hsla(365, 85%, 55%, 1) !important;
  --input-date-separator: rgb(176, 184, 196) !important;
  --input-placeholder-color: rgb(176, 184, 196) !important;
  --interactive-accent: rgb(175, 154, 244) !important;
  --interactive-accent-hover: rgb(120, 85, 236) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: rgb(230, 237, 244) !important;
  --interactive-normal: rgb(244, 248, 251) !important;
  --italic-color: rgb(120, 154, 201) !important;
  --light: rgb(244, 248, 251) !important;
  --lightgray: rgb(237, 242, 248) !important;
  --link-color: rgb(139, 108, 239) !important;
  --link-color-hover: rgb(120, 85, 236) !important;
  --link-external-color: rgb(139, 108, 239) !important;
  --link-external-color-hover: rgb(120, 85, 236) !important;
  --link-unresolved-color: rgb(139, 108, 239) !important;
  --link-unresolved-decoration-color: rgba(139, 108, 239, 0.3) !important;
  --list-indent: 37px !important;
  --list-marker-color: rgb(176, 184, 196) !important;
  --list-marker-color-collapsed: rgb(139, 108, 239) !important;
  --list-marker-color-hover: rgb(81, 94, 118) !important;
  --menu-background: rgb(237, 242, 248) !important;
  --menu-border-color: rgb(176, 186, 196) !important;
  --metadata-input-background-active: rgba(195, 203, 213, 0.3) !important;
  --metadata-input-text-color: rgb(33, 33, 33) !important;
  --metadata-label-background-active: rgba(195, 203, 213, 0.3) !important;
  --metadata-label-text-color: rgb(81, 94, 118) !important;
  --metadata-label-text-color-hover: rgb(81, 94, 118) !important;
  --metadata-property-background-active: rgba(195, 203, 213, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(176, 186, 196) !important;
  --modal-background: rgb(244, 248, 251) !important;
  --nav-collapse-icon-color: rgb(176, 184, 196) !important;
  --nav-collapse-icon-color-collapsed: rgb(176, 184, 196) !important;
  --nav-heading-color: rgb(33, 33, 33) !important;
  --nav-heading-color-collapsed: rgb(176, 184, 196) !important;
  --nav-heading-color-collapsed-hover: rgb(81, 94, 118) !important;
  --nav-heading-color-hover: rgb(33, 33, 33) !important;
  --nav-item-background-active: rgba(195, 203, 213, 0.3) !important;
  --nav-item-background-hover: rgba(195, 203, 213, 0.3) !important;
  --nav-item-background-selected: rgba(139, 108, 239, 0.15) !important;
  --nav-item-color: rgb(81, 94, 118) !important;
  --nav-item-color-active: rgb(33, 33, 33) !important;
  --nav-item-color-highlighted: rgb(139, 108, 239) !important;
  --nav-item-color-hover: rgb(33, 33, 33) !important;
  --nav-item-color-selected: rgb(33, 33, 33) !important;
  --nav-tag-color: rgb(176, 184, 196) !important;
  --nav-tag-color-active: rgb(81, 94, 118) !important;
  --nav-tag-color-hover: rgb(81, 94, 118) !important;
  --panel-radius: 8px !important;
  --panel-shadow: 0 1px 3px rgba(195, 203, 213, 0.2) !important;
  --panel-shadow-hover: 0 3px 5px rgba(195, 203, 213, 0.3) !important;
  --pdf-background: rgb(244, 248, 251) !important;
  --pdf-page-background: rgb(244, 248, 251) !important;
  --pdf-sidebar-background: rgb(244, 248, 251) !important;
  --pill-border-color-hover: rgb(176, 186, 196) !important;
  --pill-color: rgb(81, 94, 118) !important;
  --pill-color-hover: rgb(33, 33, 33) !important;
  --pill-color-remove: rgb(176, 184, 196) !important;
  --pill-color-remove-hover: rgb(139, 108, 239) !important;
  --prompt-background: rgb(244, 248, 251) !important;
  --raised-background: color-mix(in srgb, rgb(244, 248, 251) 65%, transparent) linear-gradient(rgb(244, 248, 251), color-mix(in srgb, rgb(244, 248, 251) 65%, transparent)) !important;
  --ribbon-background: rgb(237, 242, 248) !important;
  --ribbon-background-collapsed: rgb(244, 248, 251) !important;
  --search-clear-button-color: rgb(81, 94, 118) !important;
  --search-icon-color: rgb(81, 94, 118) !important;
  --search-result-background: rgb(244, 248, 251) !important;
  --secondary: rgb(139, 108, 239) !important;
  --setting-group-heading-color: rgb(33, 33, 33) !important;
  --setting-items-background: rgb(230, 237, 244) !important;
  --sidebar-size-left: 270px !important;
  --sidebar-size-right: 270px !important;
  --slider-thumb-border-color: rgb(176, 186, 196) !important;
  --status-bar-background: rgb(237, 242, 248) !important;
  --status-bar-text-color: rgb(81, 94, 118) !important;
  --suggestion-background: rgb(244, 248, 251) !important;
  --sync-avatar-color-1: hsla(365, 85%, 55%, 1) !important;
  --tab-background-active: rgb(244, 248, 251) !important;
  --tab-container-background: rgb(237, 242, 248) !important;
  --tab-divider-color: rgb(176, 186, 196) !important;
  --tab-stacked-header-width: 53px !important;
  --tab-switcher-background: rgb(237, 242, 248) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 242, 248), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239) !important;
  --tab-text-color: rgb(176, 184, 196) !important;
  --tab-text-color-active: rgb(81, 94, 118) !important;
  --tab-text-color-focused: rgb(81, 94, 118) !important;
  --tab-text-color-focused-active: rgb(81, 94, 118) !important;
  --tab-text-color-focused-active-current: rgb(33, 33, 33) !important;
  --tab-text-color-focused-highlighted: rgb(139, 108, 239) !important;
  --table-drag-handle-background-active: rgb(175, 154, 244) !important;
  --table-drag-handle-color: rgb(176, 184, 196) !important;
  --table-header-color: rgb(33, 33, 33) !important;
  --table-selection: rgba(139, 108, 239, 0.1) !important;
  --table-selection-border-color: rgb(175, 154, 244) !important;
  --tag-background: rgba(139, 108, 239, 0.1) !important;
  --tag-background-hover: rgba(139, 108, 239, 0.2) !important;
  --tag-border-color: rgba(139, 108, 239, 0.15) !important;
  --tag-border-color-hover: rgba(139, 108, 239, 0.15) !important;
  --tag-color: rgb(139, 108, 239) !important;
  --tag-color-hover: rgb(139, 108, 239) !important;
  --tertiary: rgb(120, 85, 236) !important;
  --text-accent: rgb(139, 108, 239) !important;
  --text-accent-hover: rgb(120, 85, 236) !important;
  --text-error: hsla(365, 85%, 55%, 1) !important;
  --text-faint: rgb(176, 184, 196) !important;
  --text-muted: rgb(81, 94, 118) !important;
  --text-normal: rgb(33, 33, 33) !important;
  --text-selection: rgba(139, 108, 239, 0.2) !important;
  --textHighlight: rgba(195, 203, 213, 0.3) !important;
  --titlebar-background: rgb(237, 242, 248) !important;
  --titlebar-background-focused: rgb(237, 242, 248) !important;
  --titlebar-text-color: rgb(81, 94, 118) !important;
  --titlebar-text-color-focused: rgb(33, 33, 33) !important;
  --traffic-lights-offset-x: 43px !important;
  --traffic-lights-offset-y: 43px !important;
  --vault-profile-color: rgb(33, 33, 33) !important;
  --vault-profile-color-hover: rgb(33, 33, 33) !important;
  --window-radius: 23px !important;
  --window-shadow: 0 0 9px rgba(195, 203, 213, 0.3) !important;
  --window-shadow-left: -4px 0 5px rgba(195, 203, 213, 0.3) !important;
  --window-shadow-right: 4px 0 5px rgba(195, 203, 213, 0.3) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 248, 251);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 242, 248);
  color: rgb(33, 33, 33);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration: rgb(120, 154, 201);
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration: rgb(120, 154, 201);
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration: rgb(33, 33, 33);
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body del {
  color: rgb(176, 184, 196);
  outline: rgb(176, 184, 196) none 0px;
  text-decoration: line-through rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body p {
  color: rgb(81, 94, 118);
  outline: rgb(81, 94, 118) none 0px;
  text-decoration: rgb(81, 94, 118);
  text-decoration-color: rgb(81, 94, 118);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(139, 108, 239);
  outline: rgb(139, 108, 239) none 0px;
  text-decoration: rgb(139, 108, 239);
  text-decoration-color: rgb(139, 108, 239);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(139, 108, 239);
  outline: rgb(139, 108, 239) none 0px;
  text-decoration: underline rgb(139, 108, 239);
  text-decoration-color: rgb(139, 108, 239);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(139, 108, 239);
  outline: rgb(139, 108, 239) none 0px;
  text-decoration: underline rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
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
  background-color: rgb(244, 248, 251);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(244, 248, 251);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(176, 184, 196);
  text-decoration: rgb(176, 184, 196);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(237, 242, 248);
  padding-bottom: 17px;
  padding-top: 17px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body table {
  color: rgb(33, 33, 33);
  margin-left: 7px;
  margin-right: 7px;
  width: 245.219px;
}

html[saved-theme="light"] body td {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="light"] body th {
  color: rgb(33, 33, 33);
  padding-left: 13px;
  padding-right: 13px;
}

html[saved-theme="light"] body thead {
  border-top-color: rgb(139, 108, 239);
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body tr {
  border-top-color: rgb(139, 108, 239);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 237, 244);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 237, 244);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 237, 244);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 237, 244);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(33, 33, 33);
  border-radius: 8px;
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 13px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 13px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(176, 184, 196);
  text-decoration: line-through rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(176, 184, 196);
  border-left-color: rgb(176, 184, 196);
  border-right-color: rgb(176, 184, 196);
  border-top-color: rgb(176, 184, 196);
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
  width: 24px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 33, 33);
  text-decoration: rgb(176, 184, 196);
  text-decoration-color: rgb(176, 184, 196);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  gap: 12px;
  padding-bottom: 11px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 11px;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 27px;
  padding-right: 11px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.07);
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.07);
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.07);
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.07);
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.07);
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.07);
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.07);
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(244, 248, 251);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 248, 251);
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
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 242, 248);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(195, 203, 213, 0.3);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(195, 203, 213, 0.3);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(139, 108, 239);
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
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 4px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(237, 242, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 242, 248);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(120, 85, 236);
  font-weight: 500;
  text-decoration: rgb(120, 85, 236);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(120, 85, 236);
  font-weight: 500;
  text-decoration: rgb(120, 85, 236);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(237, 242, 248);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
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
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(81, 94, 118);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(81, 94, 118);
  text-decoration: rgb(81, 94, 118);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(81, 94, 118);
  stroke: rgb(81, 94, 118);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(176, 184, 196);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .metadata {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(237, 242, 248);
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
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 237, 244);
  border-bottom-color: rgb(81, 94, 118);
  border-left-color: rgb(81, 94, 118);
  border-right-color: rgb(81, 94, 118);
  border-top-color: rgb(81, 94, 118);
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-top-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}

html[saved-theme="light"] body summary {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 33, 33);
  font-size: 13.6px;
}`,
  },
};
