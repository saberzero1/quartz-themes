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
  --background-fifth: hsla(215, 10%, 10%, 0.1) !important;
  --background-fourth: hsla(215, 17%, 22%, 0.9) !important;
  --background-modifier-active-hover: hsla(255, 73%, 68%, 0.1) !important;
  --background-modifier-border: hsla(215, 22%, 13%, 1) !important;
  --background-modifier-border-hover: hsla(210, 15%, 33%, 1) !important;
  --background-modifier-error: hsla(365, 90%, 65%, 1) !important;
  --background-modifier-error-hover: hsla(365, 90%, 65%, 1) !important;
  --background-modifier-hover: hsla(207, 17%, 10%, 0.5) !important;
  --background-primary: hsla(215, 17%, 19%, 1) !important;
  --background-primary-alt: hsla(214, 24%, 15%, 1) !important;
  --background-secondary: hsla(214, 24%, 15%, 1) !important;
  --background-secondary-alt: hsla(215, 22%, 13%, 1) !important;
  --bases-cards-background: hsla(215, 17%, 19%, 1) !important;
  --bases-cards-cover-background: hsla(214, 24%, 15%, 1) !important;
  --bases-cards-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(210, 15%, 33%, 1) !important;
  --bases-embed-border-color: hsla(215, 22%, 13%, 1) !important;
  --bases-group-heading-property-color: hsl(218, 17%, 58%) !important;
  --bases-table-border-color: hsla(215, 22%, 13%, 1) !important;
  --bases-table-cell-background-active: hsla(215, 17%, 19%, 1) !important;
  --bases-table-cell-background-disabled: hsla(214, 24%, 15%, 1) !important;
  --bases-table-cell-background-selected: hsla(255, 73%, 68%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(255, 86%, 71%) !important;
  --bases-table-group-background: hsla(214, 24%, 15%, 1) !important;
  --bases-table-header-background: hsla(215, 17%, 19%, 1) !important;
  --bases-table-header-background-hover: hsla(207, 17%, 10%, 0.5) !important;
  --bases-table-header-color: hsl(218, 17%, 58%) !important;
  --bases-table-summary-background: hsla(215, 17%, 19%, 1) !important;
  --bases-table-summary-background-hover: hsla(207, 17%, 10%, 0.5) !important;
  --bgcolor-h: 215 !important;
  --bgcolor-l: 19% !important;
  --bgcolor-s: 17% !important;
  --blockquote-border-color: hsl(255, 86%, 71%) !important;
  --blockquote-color: hsl(218, 17%, 62%) !important;
  --blur-background: color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent) linear-gradient(hsla(215, 22%, 13%, 1), color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --border: 1px solid hsla(215, 22%, 13%, 1) !important;
  --button-padding-icon: 7px !important;
  --button-padding-long: 7px 15px !important;
  --button-radius: 4px !important;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: hsla(215, 17%, 19%, 1) !important;
  --canvas-card-label-color: hsla(217, 18%, 50%, 0.7) !important;
  --canvas-dot-pattern: hsla(215, 22%, 13%, 1) !important;
  --caret-color: hsla(0, 0%, 73%, 1) !important;
  --checkbox-border-color: hsla(217, 18%, 50%, 0.7) !important;
  --checkbox-border-color-hover: hsl(218, 17%, 58%) !important;
  --checkbox-color: hsl(255, 86%, 71%) !important;
  --checkbox-color-hover: hsl(252, 60%, 65%) !important;
  --checkbox-marker-color: hsla(215, 17%, 19%, 1) !important;
  --checklist-done-color: hsla(217, 18%, 50%, 0.7) !important;
  --code-background: hsla(214, 24%, 15%, 1) !important;
  --code-border-color: hsla(215, 22%, 13%, 1) !important;
  --code-bracket-background: hsla(207, 17%, 10%, 0.5) !important;
  --code-comment: hsla(217, 18%, 50%, 0.7) !important;
  --code-normal: hsl(218, 17%, 58%) !important;
  --code-operator: hsla(365, 90%, 65%, 1) !important;
  --code-punctuation: hsl(218, 17%, 58%) !important;
  --code-tag: hsla(365, 90%, 65%, 1) !important;
  --collapse-icon-color: hsla(217, 18%, 50%, 0.7) !important;
  --collapse-icon-color-collapsed: hsl(252, 60%, 65%) !important;
  --color-accent: hsl(255, 86%, 71%) !important;
  --color-accent-1: hsl(252, 60%, 65%) !important;
  --color-accent-2: hsl(255, 80%, 70%) !important;
  --color-accent-hsl: 255, 73%, 68% !important;
  --color-base-00: hsla(215, 17%, 19%, 1) !important;
  --color-base-00-0: hsla(215, 17%, 22%, 0.9) !important;
  --color-base-00-0-trans: hsla(215, 17%, 22%, 0.5) !important;
  --color-base-00-trans: hsla(215, 17%, 19%, 0.5) !important;
  --color-base-05: hsla(207, 17%, 10%, 0.5) !important;
  --color-base-10: hsla(214, 24%, 15%, 1) !important;
  --color-base-100: hsla(0, 0%, 73%, 1) !important;
  --color-base-20: hsla(214, 24%, 15%, 1) !important;
  --color-base-20-0: hsla(215, 10%, 10%, 0.1) !important;
  --color-base-20-trans: hsla(214, 24%, 15%, 0.5) !important;
  --color-base-30: hsla(215, 22%, 13%, 1) !important;
  --color-base-35: hsla(210, 15%, 33%, 1) !important;
  --color-base-50: hsla(217, 18%, 50%, 0.7) !important;
  --color-base-70: hsl(218, 17%, 58%) !important;
  --color-base-hover: hsla(207, 17%, 10%, 0.5) !important;
  --color-base-shadow: hsla(207, 10%, 10%, 0.1) !important;
  --color-base-shadow-hover: hsla(212, 17%, 0%, 0.3) !important;
  --color-highlight: hsla(45, 63%, 63%, 1) !important;
  --color-italic: hsla(215, 33%, 60%, 1) !important;
  --color-muted: hsl(218, 17%, 62%) !important;
  --color-red: hsla(365, 90%, 65%, 1) !important;
  --color-strikethrough: hsla(217, 18%, 50%, 0.7) !important;
  --dark: hsla(0, 0%, 73%, 1) !important;
  --darkgray: hsla(0, 0%, 73%, 1) !important;
  --divider-color: hsla(215, 22%, 13%, 1) !important;
  --divider-color-hover: hsl(255, 86%, 71%) !important;
  --divider-width: 4px !important;
  --dropdown-background: hsla(215, 22%, 13%, 1) !important;
  --dropdown-background-hover: hsla(210, 15%, 33%, 1) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(215, 22%, 13%, 1), inset 0 0 0 1px hsla(215, 22%, 13%, 1) !important;
  --embed-border-start: 2px solid hsl(255, 86%, 71%) !important;
  --embed-padding: 13px 23px !important;
  --file-header-background: hsla(215, 17%, 19%, 1) !important;
  --file-header-background-focused: hsla(215, 17%, 19%, 1) !important;
  --flair-background: hsla(215, 22%, 13%, 1) !important;
  --flair-color: hsla(0, 0%, 73%, 1) !important;
  --footnote-divider-color: hsla(215, 22%, 13%, 1) !important;
  --footnote-id-color: hsl(218, 17%, 58%) !important;
  --footnote-id-color-no-occurrences: hsla(217, 18%, 50%, 0.7) !important;
  --footnote-input-background-active: hsla(207, 17%, 10%, 0.5) !important;
  --graph-line: hsla(210, 15%, 33%, 1) !important;
  --graph-node: hsl(218, 17%, 58%) !important;
  --graph-node-focused: hsl(252, 60%, 65%) !important;
  --graph-node-unresolved: hsla(217, 18%, 50%, 0.7) !important;
  --graph-text: hsla(0, 0%, 73%, 1) !important;
  --gray: hsl(218, 17%, 58%) !important;
  --header-height: 43px !important;
  --heading-formatting: hsla(217, 18%, 50%, 0.7) !important;
  --highlight: hsla(45, 53%, 53%, 1) !important;
  --hr-color: hsla(215, 22%, 13%, 1) !important;
  --icon-color: hsl(218, 17%, 58%) !important;
  --icon-color-active: hsl(252, 60%, 65%) !important;
  --icon-color-focused: hsla(0, 0%, 73%, 1) !important;
  --icon-color-hover: hsl(218, 17%, 58%) !important;
  --icon-l: 20px !important;
  --icon-m: 20px !important;
  --icon-size: 20px !important;
  --inline-code-color: hsla(365, 90%, 65%, 1) !important;
  --input-date-separator: hsla(217, 18%, 50%, 0.7) !important;
  --input-placeholder-color: hsla(217, 18%, 50%, 0.7) !important;
  --interactive-accent: hsl(255, 86%, 71%) !important;
  --interactive-accent-hover: hsl(252, 60%, 65%) !important;
  --interactive-accent-hsl: 255, 73%, 68% !important;
  --interactive-hover: hsla(210, 15%, 33%, 1) !important;
  --interactive-normal: hsla(215, 22%, 13%, 1) !important;
  --italic-color: hsla(215, 33%, 60%, 1) !important;
  --light: hsla(215, 17%, 19%, 1) !important;
  --lightgray: hsla(214, 24%, 15%, 1) !important;
  --link-color: hsl(252, 60%, 65%) !important;
  --link-color-hover: hsl(255, 80%, 70%) !important;
  --link-external-color: hsl(252, 60%, 65%) !important;
  --link-external-color-hover: hsl(255, 80%, 70%) !important;
  --link-unresolved-color: hsl(252, 60%, 65%) !important;
  --link-unresolved-decoration-color: hsla(255, 73%, 68%, 0.3) !important;
  --list-indent: 37px !important;
  --list-marker-color: hsla(217, 18%, 50%, 0.7) !important;
  --list-marker-color-collapsed: hsl(252, 60%, 65%) !important;
  --list-marker-color-hover: hsl(218, 17%, 58%) !important;
  --menu-background: hsla(214, 24%, 15%, 1) !important;
  --menu-border-color: hsla(210, 15%, 33%, 1) !important;
  --metadata-border-color: hsla(215, 22%, 13%, 1) !important;
  --metadata-divider-color: hsla(215, 22%, 13%, 1) !important;
  --metadata-input-background-active: hsla(207, 17%, 10%, 0.5) !important;
  --metadata-input-text-color: hsla(0, 0%, 73%, 1) !important;
  --metadata-label-background-active: hsla(207, 17%, 10%, 0.5) !important;
  --metadata-label-text-color: hsl(218, 17%, 58%) !important;
  --metadata-label-text-color-hover: hsl(218, 17%, 58%) !important;
  --metadata-property-background-active: hsla(207, 17%, 10%, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(210, 15%, 33%, 1) !important;
  --modal-background: hsla(215, 17%, 19%, 1) !important;
  --nav-collapse-icon-color: hsla(217, 18%, 50%, 0.7) !important;
  --nav-collapse-icon-color-collapsed: hsla(217, 18%, 50%, 0.7) !important;
  --nav-heading-color: hsla(0, 0%, 73%, 1) !important;
  --nav-heading-color-collapsed: hsla(217, 18%, 50%, 0.7) !important;
  --nav-heading-color-collapsed-hover: hsl(218, 17%, 58%) !important;
  --nav-heading-color-hover: hsla(0, 0%, 73%, 1) !important;
  --nav-item-background-active: hsla(207, 17%, 10%, 0.5) !important;
  --nav-item-background-hover: hsla(207, 17%, 10%, 0.5) !important;
  --nav-item-background-selected: hsla(255, 73%, 68%, 0.15) !important;
  --nav-item-color: hsl(218, 17%, 58%) !important;
  --nav-item-color-active: hsla(0, 0%, 73%, 1) !important;
  --nav-item-color-highlighted: hsl(252, 60%, 65%) !important;
  --nav-item-color-hover: hsla(0, 0%, 73%, 1) !important;
  --nav-item-color-selected: hsla(0, 0%, 73%, 1) !important;
  --nav-tag-color: hsla(217, 18%, 50%, 0.7) !important;
  --nav-tag-color-active: hsl(218, 17%, 58%) !important;
  --nav-tag-color-hover: hsl(218, 17%, 58%) !important;
  --panel-radius: 8px !important;
  --panel-shadow: 0 1px 3px hsla(207, 10%, 10%, 0.1) !important;
  --panel-shadow-hover: 0 3px 5px hsla(212, 17%, 0%, 0.3) !important;
  --pdf-background: hsla(215, 17%, 19%, 1) !important;
  --pdf-page-background: hsla(215, 17%, 19%, 1) !important;
  --pdf-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1) !important;
  --pdf-sidebar-background: hsla(215, 17%, 19%, 1) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(215, 22%, 13%, 1) !important;
  --pill-border-color: hsla(215, 22%, 13%, 1) !important;
  --pill-border-color-hover: hsla(210, 15%, 33%, 1) !important;
  --pill-color: hsl(218, 17%, 58%) !important;
  --pill-color-hover: hsla(0, 0%, 73%, 1) !important;
  --pill-color-remove: hsla(217, 18%, 50%, 0.7) !important;
  --pill-color-remove-hover: hsl(252, 60%, 65%) !important;
  --prompt-background: hsla(215, 17%, 19%, 1) !important;
  --raised-background: color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent) linear-gradient(hsla(215, 22%, 13%, 1), color-mix(in srgb, hsla(215, 22%, 13%, 1) 65%, transparent)) !important;
  --ribbon-background: hsla(214, 24%, 15%, 1) !important;
  --ribbon-background-collapsed: hsla(215, 17%, 19%, 1) !important;
  --search-clear-button-color: hsl(218, 17%, 58%) !important;
  --search-icon-color: hsl(218, 17%, 58%) !important;
  --search-result-background: hsla(215, 17%, 19%, 1) !important;
  --secondary: hsl(252, 60%, 65%) !important;
  --setting-group-heading-color: hsla(0, 0%, 73%, 1) !important;
  --setting-items-background: hsla(214, 24%, 15%, 1) !important;
  --setting-items-border-color: hsla(215, 22%, 13%, 1) !important;
  --sidebar-size-left: 270px !important;
  --sidebar-size-right: 270px !important;
  --slider-thumb-border-color: hsla(210, 15%, 33%, 1) !important;
  --slider-track-background: hsla(215, 22%, 13%, 1) !important;
  --status-bar-background: hsla(214, 24%, 15%, 1) !important;
  --status-bar-border-color: hsla(215, 22%, 13%, 1) !important;
  --status-bar-text-color: hsl(218, 17%, 58%) !important;
  --suggestion-background: hsla(215, 17%, 19%, 1) !important;
  --sync-avatar-color-1: hsla(365, 90%, 65%, 1) !important;
  --tab-background-active: hsla(215, 17%, 19%, 1) !important;
  --tab-container-background: hsla(214, 24%, 15%, 1) !important;
  --tab-divider-color: hsla(210, 15%, 33%, 1) !important;
  --tab-outline-color: hsla(215, 22%, 13%, 1) !important;
  --tab-stacked-header-width: 53px !important;
  --tab-switcher-background: hsla(214, 24%, 15%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(214, 24%, 15%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(255, 86%, 71%) !important;
  --tab-text-color: hsla(217, 18%, 50%, 0.7) !important;
  --tab-text-color-active: hsl(218, 17%, 58%) !important;
  --tab-text-color-focused: hsl(218, 17%, 58%) !important;
  --tab-text-color-focused-active: hsl(218, 17%, 58%) !important;
  --tab-text-color-focused-active-current: hsla(0, 0%, 73%, 1) !important;
  --tab-text-color-focused-highlighted: hsl(252, 60%, 65%) !important;
  --table-add-button-border-color: hsla(215, 22%, 13%, 1) !important;
  --table-border-color: hsla(215, 22%, 13%, 1) !important;
  --table-drag-handle-background-active: hsl(255, 86%, 71%) !important;
  --table-drag-handle-color: hsla(217, 18%, 50%, 0.7) !important;
  --table-header-border-color: hsla(215, 22%, 13%, 1) !important;
  --table-header-color: hsla(0, 0%, 73%, 1) !important;
  --table-selection: hsla(255, 73%, 68%, 0.1) !important;
  --table-selection-border-color: hsl(255, 86%, 71%) !important;
  --tag-background: hsla(255, 73%, 68%, 0.1) !important;
  --tag-background-hover: hsla(255, 73%, 68%, 0.2) !important;
  --tag-border-color: hsla(255, 73%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(255, 73%, 68%, 0.15) !important;
  --tag-color: hsl(252, 60%, 65%) !important;
  --tag-color-hover: hsl(252, 60%, 65%) !important;
  --tertiary: hsl(255, 80%, 70%) !important;
  --text-accent: hsl(252, 60%, 65%) !important;
  --text-accent-hover: hsl(255, 80%, 70%) !important;
  --text-error: hsla(365, 90%, 65%, 1) !important;
  --text-faint: hsla(217, 18%, 50%, 0.7) !important;
  --text-highlight-bg: hsla(45, 53%, 53%, 1) !important;
  --text-muted: hsl(218, 17%, 58%) !important;
  --text-normal: hsla(0, 0%, 73%, 1) !important;
  --text-selection: hsla(255, 73%, 68%, 0.33) !important;
  --textHighlight: hsla(45, 53%, 53%, 1) !important;
  --titlebar-background: hsla(214, 24%, 15%, 1) !important;
  --titlebar-background-focused: hsla(214, 24%, 15%, 1) !important;
  --titlebar-border-color: hsla(215, 22%, 13%, 1) !important;
  --titlebar-text-color: hsl(218, 17%, 58%) !important;
  --titlebar-text-color-focused: hsla(0, 0%, 73%, 1) !important;
  --traffic-lights-offset-x: 43px !important;
  --traffic-lights-offset-y: 43px !important;
  --vault-profile-color: hsla(0, 0%, 73%, 1) !important;
  --vault-profile-color-hover: hsla(0, 0%, 73%, 1) !important;
  --window-radius: 23px !important;
  --window-shadow: 0 0 9px hsla(212, 17%, 0%, 0.3) !important;
  --window-shadow-left: -4px 0 5px hsla(212, 17%, 0%, 0.3) !important;
  --window-shadow-right: 4px 0 5px hsla(212, 17%, 0%, 0.3) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(26, 32, 40);
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 37, 47);
  border-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(26, 32, 40);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(130, 143, 166);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(144, 114, 233, 0.1);
  color: rgb(134, 112, 219);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(130, 143, 166);
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
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(119, 147, 187);
  outline: rgb(119, 147, 187) none 0px;
  text-decoration-color: rgb(119, 147, 187);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(220, 190, 101);
  outline: rgb(220, 190, 101) none 0px;
  text-decoration-color: rgb(220, 190, 101);
}

html[saved-theme="dark"] body del {
  color: rgba(105, 122, 150, 0.7);
  outline: rgba(105, 122, 150, 0.7) none 0px;
  text-decoration-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(149, 117, 245);
  border-color: rgb(149, 117, 245);
}

html[saved-theme="dark"] body p {
  color: rgb(130, 143, 166);
  outline: rgb(130, 143, 166) none 0px;
  text-decoration-color: rgb(130, 143, 166);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(134, 112, 219);
  outline: rgb(134, 112, 219) none 0px;
  text-decoration-color: rgb(134, 112, 219);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(134, 112, 219);
  outline: rgb(134, 112, 219) none 0px;
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
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(105, 122, 150, 0.7);
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
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-style: solid;
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-right-style: solid;
  border-top-color: rgb(186, 186, 186);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(40, 47, 57);
  color: rgba(105, 122, 150, 0.7);
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

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 168, 130, 255;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 68, 207, 110;
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
  --callout-color: 83, 223, 221;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="mado-list2table"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(148, 117, 240);
  font-weight: 500;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(186, 186, 186);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(186, 186, 186);
}

html[saved-theme="dark"] body li.depth-0 {
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(144, 114, 233, 0.1);
  border-bottom-color: rgba(144, 114, 233, 0.15);
  border-left-color: rgba(144, 114, 233, 0.15);
  border-right-color: rgba(144, 114, 233, 0.15);
  border-top-color: rgba(144, 114, 233, 0.15);
  color: rgb(134, 112, 219);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-fifth: hsla(207, 18%, 90%, 0.1) !important;
  --background-fourth: hsla(177, 33%, 99%, 1) !important;
  --background-modifier-active-hover: hsla(254, 80%, 68%, 0.1) !important;
  --background-modifier-border-hover: hsla(210, 15%, 73%, 1) !important;
  --background-modifier-error: hsla(365, 85%, 55%, 1) !important;
  --background-modifier-error-hover: hsla(365, 85%, 55%, 1) !important;
  --background-modifier-form-field: hsla(204, 45%, 97%, 1) !important;
  --background-modifier-form-field-hover: hsla(204, 45%, 97%, 1) !important;
  --background-modifier-hover: hsla(212, 17%, 80%, 0.3) !important;
  --background-primary: hsla(204, 45%, 97%, 1) !important;
  --background-primary-alt: hsla(210, 39%, 93%, 1) !important;
  --background-secondary: hsla(213, 45%, 95%, 1) !important;
  --background-secondary-alt: hsla(207, 17%, 90%, 1) !important;
  --bases-cards-background: hsla(204, 45%, 97%, 1) !important;
  --bases-cards-cover-background: hsla(210, 39%, 93%, 1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(210, 15%, 73%, 1) !important;
  --bases-group-heading-property-color: hsla(218, 19%, 39%, 1) !important;
  --bases-table-cell-background-active: hsla(204, 45%, 97%, 1) !important;
  --bases-table-cell-background-disabled: hsla(210, 39%, 93%, 1) !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(254, 80%, 78%) !important;
  --bases-table-group-background: hsla(210, 39%, 93%, 1) !important;
  --bases-table-header-background: hsla(204, 45%, 97%, 1) !important;
  --bases-table-header-background-hover: hsla(212, 17%, 80%, 0.3) !important;
  --bases-table-header-color: hsla(218, 19%, 39%, 1) !important;
  --bases-table-summary-background: hsla(204, 45%, 97%, 1) !important;
  --bases-table-summary-background-hover: hsla(212, 17%, 80%, 0.3) !important;
  --bgcolor-h: 204 !important;
  --bgcolor-l: 97% !important;
  --bgcolor-s: 45% !important;
  --blockquote-border-color: hsl(254, 80%, 78%) !important;
  --blockquote-color: hsla(218, 19%, 39%, 1) !important;
  --blur-background: color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent) linear-gradient(hsla(204, 45%, 97%, 1), color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent)) !important;
  --bold-weight: 700 !important;
  --border: 1px solid #e0e0e0 !important;
  --button-padding-icon: 7px !important;
  --button-padding-long: 7px 15px !important;
  --button-radius: 4px !important;
  --callout-content-padding: 0 11px 0 27px;
  --callout-padding: 0px;
  --callout-title-padding: 11px;
  --canvas-background: hsla(204, 45%, 97%, 1) !important;
  --canvas-card-label-color: hsla(217, 15%, 73%, 1) !important;
  --caret-color: hsla(0, 0%, 13%, 1) !important;
  --checkbox-border-color: hsla(217, 15%, 73%, 1) !important;
  --checkbox-border-color-hover: hsla(218, 19%, 39%, 1) !important;
  --checkbox-color: hsl(254, 80%, 78%) !important;
  --checkbox-color-hover: hsl(254, 80%, 63%) !important;
  --checkbox-marker-color: hsla(204, 45%, 97%, 1) !important;
  --checklist-done-color: hsla(217, 15%, 73%, 1) !important;
  --code-background: hsla(210, 39%, 93%, 1) !important;
  --code-bracket-background: hsla(212, 17%, 80%, 0.3) !important;
  --code-comment: hsla(217, 15%, 73%, 1) !important;
  --code-normal: hsla(218, 19%, 39%, 1) !important;
  --code-operator: hsla(365, 85%, 55%, 1) !important;
  --code-punctuation: hsla(218, 19%, 39%, 1) !important;
  --code-tag: hsla(365, 85%, 55%, 1) !important;
  --collapse-icon-color: hsla(217, 15%, 73%, 1) !important;
  --collapse-icon-color-collapsed: hsl(254, 80%, 68%) !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(254, 80%, 78%) !important;
  --color-accent-2: hsl(254, 80%, 63%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-base-00: hsla(204, 45%, 97%, 1) !important;
  --color-base-00-0: hsla(177, 33%, 99%, 1) !important;
  --color-base-00-0-trans: hsla(184, 33%, 99%, 0.5) !important;
  --color-base-00-trans: hsla(204, 45%, 97%, 0.5) !important;
  --color-base-05: hsla(207, 17%, 90%, 1) !important;
  --color-base-10: hsla(210, 39%, 93%, 1) !important;
  --color-base-100: hsla(0, 0%, 13%, 1) !important;
  --color-base-20: hsla(213, 45%, 95%, 1) !important;
  --color-base-20-0: hsla(207, 18%, 90%, 0.1) !important;
  --color-base-20-trans: hsla(210, 37%, 95%, 0.5) !important;
  --color-base-35: hsla(210, 15%, 73%, 1) !important;
  --color-base-50: hsla(217, 15%, 73%, 1) !important;
  --color-base-70: hsla(218, 19%, 39%, 1) !important;
  --color-base-hover: hsla(212, 17%, 80%, 0.3) !important;
  --color-base-shadow: hsla(212, 17%, 80%, 0.2) !important;
  --color-base-shadow-hover: hsla(212, 17%, 80%, 0.3) !important;
  --color-highlight: hsla(0, 0%, 13%, 1) !important;
  --color-italic: hsla(215, 43%, 63%, 1) !important;
  --color-muted: hsla(218, 19%, 39%, 1) !important;
  --color-red: hsla(365, 85%, 55%, 1) !important;
  --color-strikethrough: hsla(217, 15%, 73%, 1) !important;
  --dark: hsla(0, 0%, 13%, 1) !important;
  --darkgray: hsla(0, 0%, 13%, 1) !important;
  --divider-color-hover: hsl(254, 80%, 78%) !important;
  --divider-width: 4px !important;
  --dropdown-background: hsla(204, 45%, 97%, 1) !important;
  --dropdown-background-hover: hsla(210, 39%, 93%, 1) !important;
  --embed-border-start: 2px solid hsl(254, 80%, 78%) !important;
  --embed-padding: 13px 23px !important;
  --file-header-background: hsla(204, 45%, 97%, 1) !important;
  --file-header-background-focused: hsla(204, 45%, 97%, 1) !important;
  --flair-background: hsla(204, 45%, 97%, 1) !important;
  --flair-color: hsla(0, 0%, 13%, 1) !important;
  --footnote-id-color: hsla(218, 19%, 39%, 1) !important;
  --footnote-id-color-no-occurrences: hsla(217, 15%, 73%, 1) !important;
  --footnote-input-background-active: hsla(212, 17%, 80%, 0.3) !important;
  --graph-line: hsla(210, 15%, 73%, 1) !important;
  --graph-node: hsla(218, 19%, 39%, 1) !important;
  --graph-node-focused: hsl(254, 80%, 68%) !important;
  --graph-node-unresolved: hsla(217, 15%, 73%, 1) !important;
  --graph-text: hsla(0, 0%, 13%, 1) !important;
  --gray: hsla(218, 19%, 39%, 1) !important;
  --header-height: 43px !important;
  --heading-formatting: hsla(217, 15%, 73%, 1) !important;
  --highlight: hsla(212, 17%, 80%, 0.3) !important;
  --icon-color: hsla(218, 19%, 39%, 1) !important;
  --icon-color-active: hsl(254, 80%, 68%) !important;
  --icon-color-focused: hsla(0, 0%, 13%, 1) !important;
  --icon-color-hover: hsla(218, 19%, 39%, 1) !important;
  --icon-l: 20px !important;
  --icon-m: 20px !important;
  --icon-size: 20px !important;
  --inline-code-color: hsla(365, 85%, 55%, 1) !important;
  --input-date-separator: hsla(217, 15%, 73%, 1) !important;
  --input-placeholder-color: hsla(217, 15%, 73%, 1) !important;
  --interactive-accent: hsl(254, 80%, 78%) !important;
  --interactive-accent-hover: hsl(254, 80%, 63%) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: hsla(210, 39%, 93%, 1) !important;
  --interactive-normal: hsla(204, 45%, 97%, 1) !important;
  --italic-color: hsla(215, 43%, 63%, 1) !important;
  --light: hsla(204, 45%, 97%, 1) !important;
  --lightgray: hsla(213, 45%, 95%, 1) !important;
  --link-color: hsl(254, 80%, 68%) !important;
  --link-color-hover: hsl(254, 80%, 63%) !important;
  --link-external-color: hsl(254, 80%, 68%) !important;
  --link-external-color-hover: hsl(254, 80%, 63%) !important;
  --link-unresolved-color: hsl(254, 80%, 68%) !important;
  --link-unresolved-decoration-color: hsla(254, 80%, 68%, 0.3) !important;
  --list-indent: 37px !important;
  --list-marker-color: hsla(217, 15%, 73%, 1) !important;
  --list-marker-color-collapsed: hsl(254, 80%, 68%) !important;
  --list-marker-color-hover: hsla(218, 19%, 39%, 1) !important;
  --menu-background: hsla(213, 45%, 95%, 1) !important;
  --menu-border-color: hsla(210, 15%, 73%, 1) !important;
  --metadata-input-background-active: hsla(212, 17%, 80%, 0.3) !important;
  --metadata-input-text-color: hsla(0, 0%, 13%, 1) !important;
  --metadata-label-background-active: hsla(212, 17%, 80%, 0.3) !important;
  --metadata-label-text-color: hsla(218, 19%, 39%, 1) !important;
  --metadata-label-text-color-hover: hsla(218, 19%, 39%, 1) !important;
  --metadata-property-background-active: hsla(212, 17%, 80%, 0.3) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(210, 15%, 73%, 1) !important;
  --modal-background: hsla(204, 45%, 97%, 1) !important;
  --nav-collapse-icon-color: hsla(217, 15%, 73%, 1) !important;
  --nav-collapse-icon-color-collapsed: hsla(217, 15%, 73%, 1) !important;
  --nav-heading-color: hsla(0, 0%, 13%, 1) !important;
  --nav-heading-color-collapsed: hsla(217, 15%, 73%, 1) !important;
  --nav-heading-color-collapsed-hover: hsla(218, 19%, 39%, 1) !important;
  --nav-heading-color-hover: hsla(0, 0%, 13%, 1) !important;
  --nav-item-background-active: hsla(212, 17%, 80%, 0.3) !important;
  --nav-item-background-hover: hsla(212, 17%, 80%, 0.3) !important;
  --nav-item-background-selected: hsla(254, 80%, 68%, 0.15) !important;
  --nav-item-color: hsla(218, 19%, 39%, 1) !important;
  --nav-item-color-active: hsla(0, 0%, 13%, 1) !important;
  --nav-item-color-highlighted: hsl(254, 80%, 68%) !important;
  --nav-item-color-hover: hsla(0, 0%, 13%, 1) !important;
  --nav-item-color-selected: hsla(0, 0%, 13%, 1) !important;
  --nav-tag-color: hsla(217, 15%, 73%, 1) !important;
  --nav-tag-color-active: hsla(218, 19%, 39%, 1) !important;
  --nav-tag-color-hover: hsla(218, 19%, 39%, 1) !important;
  --panel-radius: 8px !important;
  --panel-shadow: 0 1px 3px hsla(212, 17%, 80%, 0.2) !important;
  --panel-shadow-hover: 0 3px 5px hsla(212, 17%, 80%, 0.3) !important;
  --pdf-background: hsla(204, 45%, 97%, 1) !important;
  --pdf-page-background: hsla(204, 45%, 97%, 1) !important;
  --pdf-sidebar-background: hsla(204, 45%, 97%, 1) !important;
  --pill-border-color-hover: hsla(210, 15%, 73%, 1) !important;
  --pill-color: hsla(218, 19%, 39%, 1) !important;
  --pill-color-hover: hsla(0, 0%, 13%, 1) !important;
  --pill-color-remove: hsla(217, 15%, 73%, 1) !important;
  --pill-color-remove-hover: hsl(254, 80%, 68%) !important;
  --prompt-background: hsla(204, 45%, 97%, 1) !important;
  --raised-background: color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent) linear-gradient(hsla(204, 45%, 97%, 1), color-mix(in srgb, hsla(204, 45%, 97%, 1) 65%, transparent)) !important;
  --ribbon-background: hsla(213, 45%, 95%, 1) !important;
  --ribbon-background-collapsed: hsla(204, 45%, 97%, 1) !important;
  --search-clear-button-color: hsla(218, 19%, 39%, 1) !important;
  --search-icon-color: hsla(218, 19%, 39%, 1) !important;
  --search-result-background: hsla(204, 45%, 97%, 1) !important;
  --secondary: hsl(254, 80%, 68%) !important;
  --setting-group-heading-color: hsla(0, 0%, 13%, 1) !important;
  --setting-items-background: hsla(210, 39%, 93%, 1) !important;
  --sidebar-size-left: 270px !important;
  --sidebar-size-right: 270px !important;
  --slider-thumb-border-color: hsla(210, 15%, 73%, 1) !important;
  --status-bar-background: hsla(213, 45%, 95%, 1) !important;
  --status-bar-text-color: hsla(218, 19%, 39%, 1) !important;
  --suggestion-background: hsla(204, 45%, 97%, 1) !important;
  --sync-avatar-color-1: hsla(365, 85%, 55%, 1) !important;
  --tab-background-active: hsla(204, 45%, 97%, 1) !important;
  --tab-container-background: hsla(213, 45%, 95%, 1) !important;
  --tab-divider-color: hsla(210, 15%, 73%, 1) !important;
  --tab-stacked-header-width: 53px !important;
  --tab-switcher-background: hsla(213, 45%, 95%, 1) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(213, 45%, 95%, 1), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: hsla(217, 15%, 73%, 1) !important;
  --tab-text-color-active: hsla(218, 19%, 39%, 1) !important;
  --tab-text-color-focused: hsla(218, 19%, 39%, 1) !important;
  --tab-text-color-focused-active: hsla(218, 19%, 39%, 1) !important;
  --tab-text-color-focused-active-current: hsla(0, 0%, 13%, 1) !important;
  --tab-text-color-focused-highlighted: hsl(254, 80%, 68%) !important;
  --table-drag-handle-background-active: hsl(254, 80%, 78%) !important;
  --table-drag-handle-color: hsla(217, 15%, 73%, 1) !important;
  --table-header-color: hsla(0, 0%, 13%, 1) !important;
  --table-selection: hsla(254, 80%, 68%, 0.1) !important;
  --table-selection-border-color: hsl(254, 80%, 78%) !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: hsla(254, 80%, 68%, 0.2) !important;
  --tag-border-color: hsla(254, 80%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(254, 80%, 68%, 0.15) !important;
  --tag-color: hsl(254, 80%, 68%) !important;
  --tag-color-hover: hsl(254, 80%, 68%) !important;
  --tertiary: hsl(254, 80%, 63%) !important;
  --text-accent: hsl(254, 80%, 68%) !important;
  --text-accent-hover: hsl(254, 80%, 63%) !important;
  --text-error: hsla(365, 85%, 55%, 1) !important;
  --text-faint: hsla(217, 15%, 73%, 1) !important;
  --text-muted: hsla(218, 19%, 39%, 1) !important;
  --text-normal: hsla(0, 0%, 13%, 1) !important;
  --text-selection: hsla(254, 80%, 68%, 0.2) !important;
  --textHighlight: hsla(212, 17%, 80%, 0.3) !important;
  --titlebar-background: hsla(213, 45%, 95%, 1) !important;
  --titlebar-background-focused: hsla(213, 45%, 95%, 1) !important;
  --titlebar-text-color: hsla(218, 19%, 39%, 1) !important;
  --titlebar-text-color-focused: hsla(0, 0%, 13%, 1) !important;
  --traffic-lights-offset-x: 43px !important;
  --traffic-lights-offset-y: 43px !important;
  --vault-profile-color: hsla(0, 0%, 13%, 1) !important;
  --vault-profile-color-hover: hsla(0, 0%, 13%, 1) !important;
  --window-radius: 23px !important;
  --window-shadow: 0 0 9px hsla(212, 17%, 80%, 0.3) !important;
  --window-shadow-left: -4px 0 5px hsla(212, 17%, 80%, 0.3) !important;
  --window-shadow-right: 4px 0 5px hsla(212, 17%, 80%, 0.3) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(244, 248, 251);
  border-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(81, 94, 118);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  color: rgb(139, 108, 239);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(81, 94, 118);
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
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(120, 154, 201);
  outline: rgb(120, 154, 201) none 0px;
  text-decoration-color: rgb(120, 154, 201);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
  text-decoration-color: rgb(33, 33, 33);
}

html[saved-theme="light"] body del {
  color: rgb(176, 184, 196);
  outline: rgb(176, 184, 196) none 0px;
  text-decoration-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(175, 154, 244);
  border-color: rgb(175, 154, 244);
}

html[saved-theme="light"] body p {
  color: rgb(81, 94, 118);
  outline: rgb(81, 94, 118) none 0px;
  text-decoration-color: rgb(81, 94, 118);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(139, 108, 239);
  outline: rgb(139, 108, 239) none 0px;
  text-decoration-color: rgb(139, 108, 239);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(139, 108, 239);
  outline: rgb(139, 108, 239) none 0px;
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
  color: rgb(176, 184, 196);
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
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-style: solid;
  border-left-color: rgb(33, 33, 33);
  border-right-color: rgb(33, 33, 33);
  border-right-style: solid;
  border-top-color: rgb(33, 33, 33);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(244, 248, 251);
  color: rgb(176, 184, 196);
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

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 120, 82, 238;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 8, 185, 78;
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
  --callout-color: 0, 191, 188;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="mado-list2table"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(244, 248, 251);
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 248, 251);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 33, 33);
  outline: rgb(33, 33, 33) none 0px;
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
  --callout-color: 8, 109, 221;
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(120, 85, 236);
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(33, 33, 33);
  border-left-width: 0px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(33, 33, 33);
}

html[saved-theme="light"] body li.depth-0 {
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  color: rgb(139, 108, 239);
}`,
  },
};
