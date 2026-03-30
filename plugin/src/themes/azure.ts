import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "azure", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 217 !important;
  --accent-l: 61% !important;
  --accent-s: 100% !important;
  --actions-border-radius: 0.5rem !important;
  --background-modifier-accent: hsl(217, 100%, 61%) !important;
  --background-modifier-active-hover: hsla(217, 100%, 61%, 0.1) !important;
  --background-modifier-border: rgb(19, 22, 27) !important;
  --background-modifier-border-focus: rgb(42, 42, 42) !important;
  --background-modifier-border-hover: rgb(48, 48, 48) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #F64A8A !important;
  --background-modifier-error-hover: #F64A8A !important;
  --background-modifier-error-rgb: #F64A8A !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #57A773 !important;
  --background-primary: rgb(19, 22, 27) !important;
  --background-primary-alt: rgb(28, 32, 39) !important;
  --background-secondary: rgb(28, 32, 39) !important;
  --background-secondary-alt: rgb(19, 22, 27) !important;
  --bases-cards-background: rgb(19, 22, 27) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(28, 32, 39) !important;
  --bases-cards-font-size: 14px !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(19, 22, 27) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(48, 48, 48) !important;
  --bases-embed-border-color: rgb(19, 22, 27) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(158, 158, 158) !important;
  --bases-group-heading-value-size: 14px !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(19, 22, 27) !important;
  --bases-table-cell-background-active: rgb(19, 22, 27) !important;
  --bases-table-cell-background-disabled: rgb(28, 32, 39) !important;
  --bases-table-cell-background-selected: hsla(217, 100%, 61%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(42, 42, 42) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(217, 100%, 61%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: rgb(28, 32, 39) !important;
  --bases-table-header-background: rgb(19, 22, 27) !important;
  --bases-table-header-color: rgb(158, 158, 158) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(19, 22, 27) !important;
  --blockquote-border-color: hsl(217, 100%, 61%) !important;
  --blue: #3884FF !important;
  --blue-transparent: rgba(56, 132, 255, 0.5) !important;
  --blur-background: color-mix(in srgb, rgb(42, 42, 42) 65%, transparent) linear-gradient(rgb(42, 42, 42), color-mix(in srgb, rgb(42, 42, 42) 65%, transparent)) !important;
  --bodyFont: "Consolas", monospace !important;
  --bold-weight: 800 !important;
  --border-width: 2px !important;
  --border-width-alt: 2px !important;
  --callout-important: 233, 151, 63;
  --callout-info: 84, 93, 204;
  --callout-question: 224, 222, 113;
  --callout-radius: 2px;
  --callout-summary: 250, 153, 205;
  --callout-todo: 83, 223, 221;
  --canvas-background: rgb(19, 22, 27) !important;
  --canvas-card-label-color: rgb(158, 158, 158) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(238, 238, 238) !important;
  --checkbox-border-color: rgb(158, 158, 158) !important;
  --checkbox-border-color-hover: hsl(217, 100%, 61%) !important;
  --checkbox-color: hsl(217, 100%, 61%) !important;
  --checkbox-color-hover: hsl(214, 102%, 70.15%) !important;
  --checkbox-marker-color: rgb(19, 22, 27) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(158, 158, 158) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(28, 32, 39) !important;
  --code-border-color: rgb(19, 22, 27) !important;
  --code-comment: #8963EA !important;
  --code-normal: "Consolas", monospace !important;
  --code-punctuation: rgb(158, 158, 158) !important;
  --code-radius: 2px !important;
  --code-size: 16px !important;
  --code-string: rgb(238, 238, 238) !important;
  --codeFont: "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(158, 158, 158) !important;
  --collapse-icon-color-collapsed: hsl(214, 102%, 70.15%) !important;
  --color-accent: hsl(217, 100%, 61%) !important;
  --color-accent-1: hsl(214, 102%, 70.15%) !important;
  --color-accent-2: hsl(212, 105%, 78.69%) !important;
  --color-accent-faint: rgba(56, 132, 255, 0.25) !important;
  --color-accent-hsl: 217, 100%, 61% !important;
  --color-gray-rgb: 158, 158, 158 !important;
  --color-indigo-rgb: 84, 93, 204 !important;
  --color-transparent: rgba(0, 0, 0, 0) !important;
  --cyan: #36A2EB !important;
  --cyan-transparent: rgba(54, 162, 235, 0.5) !important;
  --dark: rgb(238, 238, 238) !important;
  --darkgray: rgb(238, 238, 238) !important;
  --divider-color: rgba(0, 0, 0, 0) !important;
  --divider-color-hover: hsl(217, 100%, 61%) !important;
  --dropdown-background: rgb(42, 42, 42) !important;
  --dropdown-background-hover: rgb(48, 48, 48) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(19, 22, 27), inset 0 0 0 1px rgb(19, 22, 27) !important;
  --embed-border-bottom: 0 !important;
  --embed-border-left: 0 !important;
  --embed-border-right: 0 !important;
  --embed-border-start: 2px solid hsl(217, 100%, 61%) !important;
  --embed-border-top: 0 !important;
  --embed-padding: 0 0 0 1rem !important;
  --file-header-background: rgb(19, 22, 27) !important;
  --file-header-background-focused: rgb(19, 22, 27) !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: "Consolas", monospace !important;
  --flair-background: rgb(42, 42, 42) !important;
  --flair-color: rgb(238, 238, 238) !important;
  --font-accent-theme: "Consolas", monospace !important;
  --font-editor-theme: "Consolas", monospace !important;
  --font-interface: "Consolas", monospace !important;
  --font-interface-theme: "Consolas", monospace !important;
  --font-mermaid: "Consolas", monospace !important;
  --font-monospace: "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Consolas", monospace !important;
  --font-print: "Consolas", monospace, "Consolas", monospace, Arial' !important;
  --font-small: 16px !important;
  --font-smaller: 14px !important;
  --font-smallest: 12px !important;
  --font-text: "Consolas", monospace !important;
  --font-text-override: "Consolas", monospace !important;
  --font-text-theme: "Consolas", monospace !important;
  --footnote-divider-color: rgb(19, 22, 27) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(158, 158, 158) !important;
  --footnote-id-color-no-occurrences: rgb(158, 158, 158) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 14px !important;
  --graph-node: rgb(158, 158, 158) !important;
  --graph-node-focused: hsl(214, 102%, 70.15%) !important;
  --graph-node-unresolved: rgb(158, 158, 158) !important;
  --graph-text: rgb(238, 238, 238) !important;
  --gray: rgb(158, 158, 158) !important;
  --gray-transparent: rgba(158, 158, 158, 0.1) !important;
  --green: #57A773 !important;
  --green-transparent: rgba(87, 167, 115, 0.5) !important;
  --h1-color: rgb(56, 132, 255) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 1.0em !important;
  --h1-weight: 600 !important;
  --h2-color: rgb(97, 116, 245) !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.0em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(137, 99, 234) !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.0em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(173, 91, 202) !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.0em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(210, 82, 170) !important;
  --h5-size: 1.0em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(246, 74, 138) !important;
  --h6-size: 1.0em !important;
  --headerFont: "Consolas", monospace !important;
  --heading-formatting: rgb(158, 158, 158) !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(56, 132, 255, 0.25) !important;
  --hr-color: hsl(217, 100%, 61%) !important;
  --icon-color: rgb(158, 158, 158) !important;
  --icon-color-active: hsl(214, 102%, 70.15%) !important;
  --icon-color-focused: hsl(217, 100%, 61%) !important;
  --icon-color-hover: hsl(217, 100%, 61%) !important;
  --icon-hex: 000 !important;
  --icon-muted: 0.5 !important;
  --icon-opacity: 0.75 !important;
  --indentation-guide-color: rgb(28, 32, 39) !important;
  --indentation-guide-color-active: rgb(28, 32, 39) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --indigo: #545DCC !important;
  --indigo-transparent: rgba(84, 93, 204, 0.5) !important;
  --inline-title-color: rgb(56, 132, 255) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.0em !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(158, 158, 158) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(158, 158, 158) !important;
  --interactive-accent: hsl(217, 100%, 61%) !important;
  --interactive-accent-2: hsl(214, 102%, 70.15%) !important;
  --interactive-accent-hover: hsl(214, 102%, 70.15%) !important;
  --interactive-accent-hsl: 217, 100%, 61% !important;
  --interactive-accent-rgb: 56, 132, 255 !important;
  --interactive-hover: rgb(48, 48, 48) !important;
  --interactive-normal: rgb(42, 42, 42) !important;
  --interactive-success: #57A773 !important;
  --light: rgb(19, 22, 27) !important;
  --light-blue: #5F9CFF !important;
  --light-cyan: #5EB4EF !important;
  --light-green: #78B88F !important;
  --light-indigo: #767DD6 !important;
  --light-orange: #F28B6C !important;
  --light-pink: #F76EA1 !important;
  --light-purple: #A082EE !important;
  --light-red: #E35774 !important;
  --light-yellow: #FFD777 !important;
  --lightgray: rgb(28, 32, 39) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: hsl(214, 102%, 70.15%) !important;
  --link-color-hover: hsl(217, 100%, 61%) !important;
  --link-external-color: hsl(214, 102%, 70.15%) !important;
  --link-external-color-hover: hsl(217, 100%, 61%) !important;
  --link-unresolved-color: hsl(214, 102%, 70.15%) !important;
  --link-unresolved-decoration-color: hsla(217, 100%, 61%, 0.3) !important;
  --list-marker-color: rgb(158, 158, 158) !important;
  --list-marker-color-collapsed: hsl(214, 102%, 70.15%) !important;
  --list-marker-color-hover: rgb(158, 158, 158) !important;
  --max-width: 87% !important;
  --menu-background: rgb(28, 32, 39) !important;
  --menu-border-color: rgb(48, 48, 48) !important;
  --menu-border-width: 2px !important;
  --menu-radius: 5px !important;
  --metadata-border-color: rgb(19, 22, 27) !important;
  --metadata-divider-color: rgb(19, 22, 27) !important;
  --metadata-input-font: "Consolas", monospace !important;
  --metadata-input-font-size: 14px !important;
  --metadata-input-text-color: rgb(238, 238, 238) !important;
  --metadata-label-font: "Consolas", monospace !important;
  --metadata-label-font-size: 14px !important;
  --metadata-label-text-color: rgb(158, 158, 158) !important;
  --metadata-label-text-color-hover: rgb(158, 158, 158) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(42, 42, 42) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(48, 48, 48) !important;
  --modal-background: rgb(19, 22, 27) !important;
  --modal-border-color: rgb(19, 22, 27) !important;
  --modal-border-width: 2px !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(158, 158, 158) !important;
  --nav-collapse-icon-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color: rgb(238, 238, 238) !important;
  --nav-heading-color-collapsed: rgb(158, 158, 158) !important;
  --nav-heading-color-collapsed-hover: rgb(158, 158, 158) !important;
  --nav-heading-color-hover: rgb(238, 238, 238) !important;
  --nav-indentation-guide-color: rgb(28, 32, 39) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: hsla(217, 100%, 61%, 0.15) !important;
  --nav-item-color: rgb(158, 158, 158) !important;
  --nav-item-color-active: rgb(238, 238, 238) !important;
  --nav-item-color-highlighted: hsl(214, 102%, 70.15%) !important;
  --nav-item-color-hover: rgb(238, 238, 238) !important;
  --nav-item-color-selected: rgb(238, 238, 238) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: rgb(158, 158, 158) !important;
  --nav-tag-color-active: rgb(158, 158, 158) !important;
  --nav-tag-color-hover: rgb(158, 158, 158) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 400 !important;
  --orange: #EF6F48 !important;
  --orange-transparent: rgba(239, 111, 72, 0.5) !important;
  --p-spacing: 1.5rem !important;
  --panel-border-color: rgb(19, 22, 27) !important;
  --pdf-background: rgb(19, 22, 27) !important;
  --pdf-page-background: rgb(19, 22, 27) !important;
  --pdf-shadow: 0 0 0 1px rgb(19, 22, 27) !important;
  --pdf-sidebar-background: rgb(19, 22, 27) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(19, 22, 27) !important;
  --pill-border-color: rgb(19, 22, 27) !important;
  --pill-border-color-hover: rgb(48, 48, 48) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(158, 158, 158) !important;
  --pill-color-hover: rgb(238, 238, 238) !important;
  --pill-color-remove: rgb(158, 158, 158) !important;
  --pill-color-remove-hover: hsl(214, 102%, 70.15%) !important;
  --pink: #F64A8A !important;
  --pink-transparent: rgba(246, 74, 138, 0.5) !important;
  --prompt-background: rgb(19, 22, 27) !important;
  --prompt-border-color: rgb(19, 22, 27) !important;
  --prompt-border-width: 2px !important;
  --purple: #8963EA !important;
  --purple-transparent: rgba(137, 99, 234, 0.5) !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: rgb(28, 32, 39) !important;
  --red: #DD2E52 !important;
  --red-transparent: rgba(221, 46, 82, 0.5) !important;
  --ribbon-background: rgb(28, 32, 39) !important;
  --ribbon-background-collapsed: rgb(19, 22, 27) !important;
  --scrollbar-active-thumb-bg: hsl(217, 100%, 61%) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.05) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: hsl(214, 102%, 70.15%) !important;
  --search-clear-button-color: rgb(158, 158, 158) !important;
  --search-icon-color: rgb(158, 158, 158) !important;
  --search-result-background: rgb(19, 22, 27) !important;
  --secondary: hsl(214, 102%, 70.15%) !important;
  --setting-group-heading-color: rgb(238, 238, 238) !important;
  --setting-items-background: rgb(28, 32, 39) !important;
  --setting-items-border-color: rgb(19, 22, 27) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: rgb(48, 48, 48) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: hsl(217, 100%, 61%) !important;
  --status-bar-background: rgb(28, 32, 39) !important;
  --status-bar-border-color: rgba(0, 0, 0, 0) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: rgb(158, 158, 158) !important;
  --suggestion-background: rgb(19, 22, 27) !important;
  --tab-background-active: rgb(19, 22, 27) !important;
  --tab-container-background: rgb(28, 32, 39) !important;
  --tab-divider-color: rgb(48, 48, 48) !important;
  --tab-outline-color: rgba(0, 0, 0, 0) !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: rgb(28, 32, 39) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(28, 32, 39), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(217, 100%, 61%) !important;
  --tab-text-color: rgb(158, 158, 158) !important;
  --tab-text-color-active: rgb(158, 158, 158) !important;
  --tab-text-color-focused: rgb(158, 158, 158) !important;
  --tab-text-color-focused-active: rgb(158, 158, 158) !important;
  --tab-text-color-focused-active-current: hsl(214, 102%, 70.15%) !important;
  --tab-text-color-focused-highlighted: hsl(214, 102%, 70.15%) !important;
  --table-add-button-border-color: rgb(19, 22, 27) !important;
  --table-border-color: rgb(19, 22, 27) !important;
  --table-drag-handle-background-active: hsl(217, 100%, 61%) !important;
  --table-drag-handle-color: rgb(158, 158, 158) !important;
  --table-drag-handle-color-active: rgb(220, 221, 222) !important;
  --table-header-border-color: rgb(19, 22, 27) !important;
  --table-header-color: rgb(238, 238, 238) !important;
  --table-selection: hsla(217, 100%, 61%, 0.1) !important;
  --table-selection-border-color: hsl(217, 100%, 61%) !important;
  --tag-background: hsla(217, 100%, 61%, 0.1) !important;
  --tag-background-hover: hsla(217, 100%, 61%, 0.2) !important;
  --tag-border-color: hsla(217, 100%, 61%, 0.15) !important;
  --tag-border-color-hover: hsla(217, 100%, 61%, 0.15) !important;
  --tag-color: hsl(217, 100%, 61%) !important;
  --tag-color-hover: hsl(214, 102%, 70.15%) !important;
  --tag-size: 14px !important;
  --tertiary: hsl(217, 100%, 61%) !important;
  --text-accent: hsl(214, 102%, 70.15%) !important;
  --text-accent-hover: hsl(217, 100%, 61%) !important;
  --text-error: #DD2E52 !important;
  --text-error-hover: #DD2E52 !important;
  --text-faint: rgb(158, 158, 158) !important;
  --text-highlight-bg: rgba(56, 132, 255, 0.25) !important;
  --text-highlight-bg-active: rgba(56, 132, 255, 0.25) !important;
  --text-muted: rgb(158, 158, 158) !important;
  --text-normal: rgb(238, 238, 238) !important;
  --text-on-accent: rgb(220, 221, 222) !important;
  --text-on-light-accent: rgb(38, 38, 38) !important;
  --text-selection: hsla(217, 100%, 61%, 0.33) !important;
  --textHighlight: rgba(56, 132, 255, 0.25) !important;
  --titleFont: "Consolas", monospace !important;
  --titlebar-background: rgb(28, 32, 39) !important;
  --titlebar-background-focused: rgb(19, 22, 27) !important;
  --titlebar-border-color: rgb(19, 22, 27) !important;
  --titlebar-text-color: rgb(158, 158, 158) !important;
  --titlebar-text-color-focused: rgb(238, 238, 238) !important;
  --vault-profile-color: rgb(238, 238, 238) !important;
  --vault-profile-color-hover: rgb(238, 238, 238) !important;
  --vim-cursor: hsl(217, 100%, 61%) !important;
  --webkit-tap-highlight-color: rgb(19, 22, 27) !important;
  --yellow: #FFCE56 !important;
  --yellow-transparent: rgba(255, 206, 86, 0.5) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 32, 39);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 32, 39);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 32, 39);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(56, 132, 255, 0.25);
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body p {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
  outline: rgb(158, 158, 158) none 0px;
  text-decoration-color: rgb(158, 158, 158);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(103, 169, 255);
  font-family: Consolas, monospace;
  outline: rgb(103, 169, 255) none 0px;
  text-decoration-color: rgb(103, 169, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(103, 169, 255);
  font-family: Consolas, monospace;
  outline: rgb(103, 169, 255) none 0px;
  text-decoration: underline rgba(56, 132, 255, 0.3);
  text-decoration-color: rgba(56, 132, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(158, 158, 158, 0.1);
  font-family: Consolas, monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  margin-top: 24px;
  width: 223.484px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(238, 238, 238);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(158, 158, 158);
  text-decoration-color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(19, 22, 27);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(250, 153, 205, 0.1);
  border-bottom-color: rgba(250, 153, 205, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(250, 153, 205, 0.25);
  border-right-color: rgba(250, 153, 205, 0.25);
  border-top-color: rgba(250, 153, 205, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 84, 93, 204;
  background-color: rgba(84, 93, 204, 0.1);
  border-bottom-color: rgba(84, 93, 204, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(84, 93, 204, 0.25);
  border-right-color: rgba(84, 93, 204, 0.25);
  border-top-color: rgba(84, 93, 204, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-width: 2px;
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(19, 22, 27);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(19, 22, 27);
  border-left-width: 2px;
  border-right-color: rgb(19, 22, 27);
  border-right-width: 2px;
  border-top-color: rgb(19, 22, 27);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 32, 39);
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(56, 132, 255, 0.1);
  border-bottom-color: rgba(56, 132, 255, 0.15);
  border-left-color: rgba(56, 132, 255, 0.15);
  border-right-color: rgba(56, 132, 255, 0.15);
  border-top-color: rgba(56, 132, 255, 0.15);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(56, 132, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h2 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h3 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h4 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h5 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body h6 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(103, 169, 255);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(19, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 22, 27);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-width: 2px;
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(158, 158, 158);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(238, 238, 238);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(158, 158, 158);
  stroke: rgb(158, 158, 158);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(158, 158, 158);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(19, 22, 27);
  border-left-color: rgb(19, 22, 27);
  border-right-color: rgb(19, 22, 27);
  border-top-color: rgb(19, 22, 27);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(158, 158, 158);
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(28, 32, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body abbr {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(158, 158, 158);
  border-left-color: rgb(158, 158, 158);
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  color: rgb(158, 158, 158);
  font-family: Consolas, monospace;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 32, 39);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(238, 238, 238);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 217 !important;
  --accent-l: 61% !important;
  --accent-s: 100% !important;
  --actions-border-radius: 0.5rem !important;
  --background-modifier-accent: hsl(217, 100%, 61%) !important;
  --background-modifier-active-hover: hsla(217, 100%, 61%, 0.1) !important;
  --background-modifier-border: rgb(238, 238, 238) !important;
  --background-modifier-border-focus: rgb(247, 248, 250) !important;
  --background-modifier-border-hover: hsl(0, 0%, 91%) !important;
  --background-modifier-error: #F64A8A !important;
  --background-modifier-error-hover: #F64A8A !important;
  --background-modifier-error-rgb: #F64A8A !important;
  --background-modifier-form-field: hsl(0, 0, 96%) !important;
  --background-modifier-form-field-highlighted: hsl(0, 0, 98%) !important;
  --background-modifier-form-field-hover: hsl(0, 0, 96%) !important;
  --background-modifier-success: #57A773 !important;
  --background-primary: rgb(238, 238, 238) !important;
  --background-primary-alt: rgb(245, 247, 249) !important;
  --background-secondary: rgb(245, 247, 249) !important;
  --background-secondary-alt: rgb(238, 238, 238) !important;
  --background-translucent: rgba(255, 255, 255, 0.85) !important;
  --bases-cards-background: rgb(238, 238, 238) !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: rgb(245, 247, 249) !important;
  --bases-cards-font-size: 14px !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(238, 238, 238) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0, 0%, 91%) !important;
  --bases-embed-border-color: rgb(238, 238, 238) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(99, 99, 99) !important;
  --bases-group-heading-value-size: 14px !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: rgb(238, 238, 238) !important;
  --bases-table-cell-background-active: rgb(238, 238, 238) !important;
  --bases-table-cell-background-disabled: rgb(245, 247, 249) !important;
  --bases-table-cell-background-selected: hsla(217, 100%, 61%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(247, 248, 250) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(217, 100%, 61%) !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-font-size: 14px !important;
  --bases-table-group-background: rgb(245, 247, 249) !important;
  --bases-table-header-background: rgb(238, 238, 238) !important;
  --bases-table-header-color: rgb(99, 99, 99) !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: rgb(238, 238, 238) !important;
  --blockquote-border-color: hsl(217, 100%, 61%) !important;
  --blue: #3884FF !important;
  --blue-transparent: rgba(56, 132, 255, 0.5) !important;
  --blur-background: color-mix(in srgb, rgb(238, 238, 238) 65%, transparent) linear-gradient(rgb(238, 238, 238), color-mix(in srgb, rgb(238, 238, 238) 65%, transparent)) !important;
  --bodyFont: "Consolas", monospace !important;
  --bold-weight: 800 !important;
  --border-width: 2px !important;
  --border-width-alt: 2px !important;
  --callout-important: 236, 117, 0;
  --callout-info: 84, 93, 204;
  --callout-question: 224, 172, 0;
  --callout-quote: 99, 99, 99;
  --callout-radius: 2px;
  --callout-summary: 213, 57, 132;
  --callout-todo: 0, 191, 188;
  --canvas-background: rgb(238, 238, 238) !important;
  --canvas-card-label-color: rgb(99, 99, 99) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(38, 38, 38) !important;
  --checkbox-border-color: rgb(99, 99, 99) !important;
  --checkbox-border-color-hover: hsl(217, 100%, 61%) !important;
  --checkbox-color: hsl(217, 100%, 61%) !important;
  --checkbox-color-hover: hsl(217, 100%, 61%) !important;
  --checkbox-marker-color: rgb(238, 238, 238) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(99, 99, 99) !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(245, 247, 249) !important;
  --code-border-color: rgb(238, 238, 238) !important;
  --code-comment: #8963EA !important;
  --code-normal: "Consolas", monospace !important;
  --code-punctuation: rgb(99, 99, 99) !important;
  --code-radius: 2px !important;
  --code-size: 16px !important;
  --code-string: rgb(38, 38, 38) !important;
  --codeFont: "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(99, 99, 99) !important;
  --collapse-icon-color-collapsed: hsl(217, 100%, 61%) !important;
  --color-accent: hsl(217, 100%, 61%) !important;
  --color-accent-1: hsl(216, 101%, 65.575%) !important;
  --color-accent-2: hsl(214, 102%, 70.15%) !important;
  --color-accent-faint: rgba(56, 132, 255, 0.25) !important;
  --color-accent-hsl: 217, 100%, 61% !important;
  --color-gray-rgb: 99, 99, 99 !important;
  --color-indigo-rgb: 84, 93, 204 !important;
  --color-transparent: rgba(0, 0, 0, 0) !important;
  --cyan: #36A2EB !important;
  --cyan-transparent: rgba(54, 162, 235, 0.5) !important;
  --dark: rgb(38, 38, 38) !important;
  --darkgray: rgb(38, 38, 38) !important;
  --divider-color: rgba(0, 0, 0, 0) !important;
  --divider-color-hover: hsl(217, 100%, 61%) !important;
  --dropdown-background: rgb(247, 248, 250) !important;
  --dropdown-background-hover: hsl(0, 0%, 91%) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(238, 238, 238), inset 0 0 0 1px rgb(238, 238, 238) !important;
  --embed-border-bottom: 0 !important;
  --embed-border-left: 0 !important;
  --embed-border-right: 0 !important;
  --embed-border-start: 2px solid hsl(217, 100%, 61%) !important;
  --embed-border-top: 0 !important;
  --embed-padding: 0 0 0 1rem !important;
  --file-header-background: rgb(238, 238, 238) !important;
  --file-header-background-focused: rgb(238, 238, 238) !important;
  --file-header-border: 2px solid transparent !important;
  --file-header-font: "Consolas", monospace !important;
  --flair-background: rgb(247, 248, 250) !important;
  --flair-color: rgb(38, 38, 38) !important;
  --font-accent-theme: "Consolas", monospace !important;
  --font-editor-theme: "Consolas", monospace !important;
  --font-interface: "Consolas", monospace !important;
  --font-interface-theme: "Consolas", monospace !important;
  --font-mermaid: "Consolas", monospace !important;
  --font-monospace: "Consolas", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Consolas", monospace !important;
  --font-print: "Consolas", monospace, "Consolas", monospace, Arial' !important;
  --font-small: 16px !important;
  --font-smaller: 14px !important;
  --font-smallest: 12px !important;
  --font-text: "Consolas", monospace !important;
  --font-text-override: "Consolas", monospace !important;
  --font-text-theme: "Consolas", monospace !important;
  --footnote-divider-color: rgb(238, 238, 238) !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: rgb(99, 99, 99) !important;
  --footnote-id-color-no-occurrences: rgb(99, 99, 99) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 14px !important;
  --graph-node: rgb(99, 99, 99) !important;
  --graph-node-focused: hsl(217, 100%, 61%) !important;
  --graph-node-unresolved: rgb(99, 99, 99) !important;
  --graph-text: rgb(38, 38, 38) !important;
  --gray: rgb(99, 99, 99) !important;
  --gray-transparent: rgba(99, 99, 99, 0.1) !important;
  --green: #57A773 !important;
  --green-transparent: rgba(87, 167, 115, 0.5) !important;
  --h1-color: rgb(56, 132, 255) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 1.0em !important;
  --h1-weight: 600 !important;
  --h2-color: rgb(97, 116, 245) !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.0em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(137, 99, 234) !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.0em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(173, 91, 202) !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.0em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(210, 82, 170) !important;
  --h5-size: 1.0em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(246, 74, 138) !important;
  --h6-size: 1.0em !important;
  --headerFont: "Consolas", monospace !important;
  --heading-formatting: rgb(99, 99, 99) !important;
  --heading-spacing: 0 !important;
  --highlight: rgba(56, 132, 255, 0.25) !important;
  --hr-color: hsl(217, 100%, 61%) !important;
  --icon-color: rgb(99, 99, 99) !important;
  --icon-color-active: hsl(217, 100%, 61%) !important;
  --icon-color-focused: hsl(217, 100%, 61%) !important;
  --icon-color-hover: hsl(217, 100%, 61%) !important;
  --icon-hex: 000 !important;
  --icon-muted: 0.5 !important;
  --icon-opacity: 0.75 !important;
  --indentation-guide-color: rgb(245, 247, 249) !important;
  --indentation-guide-color-active: rgb(245, 247, 249) !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --indigo: #545DCC !important;
  --indigo-transparent: rgba(84, 93, 204, 0.5) !important;
  --inline-title-color: rgb(56, 132, 255) !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 1.0em !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 2px !important;
  --input-date-separator: rgb(99, 99, 99) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(99, 99, 99) !important;
  --interactive-accent: hsl(217, 100%, 61%) !important;
  --interactive-accent-2: hsl(217, 100%, 61%) !important;
  --interactive-accent-hover: hsl(217, 100%, 61%) !important;
  --interactive-accent-hsl: 217, 100%, 61% !important;
  --interactive-accent-rgb: 56, 132, 255 !important;
  --interactive-hover: hsl(0, 0%, 91%) !important;
  --interactive-normal: rgb(247, 248, 250) !important;
  --interactive-success: #57A773 !important;
  --light: rgb(238, 238, 238) !important;
  --light-blue: #5F9CFF !important;
  --light-cyan: #5EB4EF !important;
  --light-green: #78B88F !important;
  --light-indigo: #767DD6 !important;
  --light-orange: #F28B6C !important;
  --light-pink: #F76EA1 !important;
  --light-purple: #A082EE !important;
  --light-red: #E35774 !important;
  --light-yellow: #FFD777 !important;
  --lightgray: rgb(245, 247, 249) !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: hsl(217, 100%, 61%) !important;
  --link-color-hover: hsl(217, 100%, 61%) !important;
  --link-external-color: hsl(217, 100%, 61%) !important;
  --link-external-color-hover: hsl(217, 100%, 61%) !important;
  --link-unresolved-color: hsl(217, 100%, 61%) !important;
  --link-unresolved-decoration-color: hsla(217, 100%, 61%, 0.3) !important;
  --list-marker-color: rgb(99, 99, 99) !important;
  --list-marker-color-collapsed: hsl(217, 100%, 61%) !important;
  --list-marker-color-hover: rgb(99, 99, 99) !important;
  --max-width: 87% !important;
  --menu-background: rgb(245, 247, 249) !important;
  --menu-border-color: hsl(0, 0%, 91%) !important;
  --menu-border-width: 2px !important;
  --menu-radius: 5px !important;
  --metadata-border-color: rgb(238, 238, 238) !important;
  --metadata-divider-color: rgb(238, 238, 238) !important;
  --metadata-input-font: "Consolas", monospace !important;
  --metadata-input-font-size: 14px !important;
  --metadata-input-text-color: rgb(38, 38, 38) !important;
  --metadata-label-font: "Consolas", monospace !important;
  --metadata-label-font-size: 14px !important;
  --metadata-label-text-color: rgb(99, 99, 99) !important;
  --metadata-label-text-color-hover: rgb(99, 99, 99) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(247, 248, 250) !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px hsl(0, 0%, 91%) !important;
  --modal-background: rgb(238, 238, 238) !important;
  --modal-border-color: rgb(238, 238, 238) !important;
  --modal-border-width: 2px !important;
  --modal-radius: 10px !important;
  --nav-collapse-icon-color: rgb(99, 99, 99) !important;
  --nav-collapse-icon-color-collapsed: rgb(99, 99, 99) !important;
  --nav-heading-color: rgb(38, 38, 38) !important;
  --nav-heading-color-collapsed: rgb(99, 99, 99) !important;
  --nav-heading-color-collapsed-hover: rgb(99, 99, 99) !important;
  --nav-heading-color-hover: rgb(38, 38, 38) !important;
  --nav-indentation-guide-color: rgb(245, 247, 249) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-selected: hsla(217, 100%, 61%, 0.15) !important;
  --nav-item-color: rgb(99, 99, 99) !important;
  --nav-item-color-active: rgb(38, 38, 38) !important;
  --nav-item-color-highlighted: hsl(217, 100%, 61%) !important;
  --nav-item-color-hover: rgb(38, 38, 38) !important;
  --nav-item-color-selected: rgb(38, 38, 38) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: rgb(99, 99, 99) !important;
  --nav-tag-color-active: rgb(99, 99, 99) !important;
  --nav-tag-color-hover: rgb(99, 99, 99) !important;
  --nav-tag-radius: 2px !important;
  --normal-weight: 400 !important;
  --orange: #EF6F48 !important;
  --orange-transparent: rgba(239, 111, 72, 0.5) !important;
  --p-spacing: 1.5rem !important;
  --panel-border-color: rgb(238, 238, 238) !important;
  --pdf-background: rgb(238, 238, 238) !important;
  --pdf-page-background: rgb(238, 238, 238) !important;
  --pdf-sidebar-background: rgb(238, 238, 238) !important;
  --pill-border-color: rgb(238, 238, 238) !important;
  --pill-border-color-hover: hsl(0, 0%, 91%) !important;
  --pill-border-width: 2px !important;
  --pill-color: rgb(99, 99, 99) !important;
  --pill-color-hover: rgb(38, 38, 38) !important;
  --pill-color-remove: rgb(99, 99, 99) !important;
  --pill-color-remove-hover: hsl(217, 100%, 61%) !important;
  --pink: #F64A8A !important;
  --pink-transparent: rgba(246, 74, 138, 0.5) !important;
  --prompt-background: rgb(238, 238, 238) !important;
  --prompt-border-color: rgb(238, 238, 238) !important;
  --prompt-border-width: 2px !important;
  --purple: #8963EA !important;
  --purple-transparent: rgba(137, 99, 234, 0.5) !important;
  --radius-l: 10px !important;
  --radius-m: 5px !important;
  --radius-s: 2px !important;
  --raised-background: rgb(245, 247, 249) !important;
  --red: #DD2E52 !important;
  --red-transparent: rgba(221, 46, 82, 0.5) !important;
  --ribbon-background: rgb(245, 247, 249) !important;
  --ribbon-background-collapsed: rgb(238, 238, 238) !important;
  --scrollbar-active-thumb-bg: hsl(217, 100%, 61%) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(245, 247, 249) !important;
  --search-clear-button-color: rgb(99, 99, 99) !important;
  --search-icon-color: rgb(99, 99, 99) !important;
  --search-result-background: rgb(238, 238, 238) !important;
  --secondary: hsl(217, 100%, 61%) !important;
  --setting-group-heading-color: rgb(38, 38, 38) !important;
  --setting-items-background: rgb(245, 247, 249) !important;
  --setting-items-border-color: rgb(238, 238, 238) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: hsl(0, 0%, 91%) !important;
  --slider-thumb-border-width: 2px !important;
  --slider-track-background: hsl(217, 100%, 61%) !important;
  --status-bar-background: rgb(245, 247, 249) !important;
  --status-bar-border-color: rgba(0, 0, 0, 0) !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: rgb(99, 99, 99) !important;
  --suggestion-background: rgb(238, 238, 238) !important;
  --tab-background-active: rgb(238, 238, 238) !important;
  --tab-container-background: rgb(245, 247, 249) !important;
  --tab-divider-color: hsl(0, 0%, 91%) !important;
  --tab-outline-color: rgba(0, 0, 0, 0) !important;
  --tab-radius: 2px !important;
  --tab-switcher-background: rgb(245, 247, 249) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 247, 249), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(217, 100%, 61%) !important;
  --tab-text-color: rgb(99, 99, 99) !important;
  --tab-text-color-active: rgb(99, 99, 99) !important;
  --tab-text-color-focused: rgb(99, 99, 99) !important;
  --tab-text-color-focused-active: rgb(99, 99, 99) !important;
  --tab-text-color-focused-active-current: hsl(217, 100%, 61%) !important;
  --tab-text-color-focused-highlighted: hsl(217, 100%, 61%) !important;
  --table-add-button-border-color: rgb(238, 238, 238) !important;
  --table-border-color: rgb(238, 238, 238) !important;
  --table-drag-handle-background-active: hsl(217, 100%, 61%) !important;
  --table-drag-handle-color: rgb(99, 99, 99) !important;
  --table-drag-handle-color-active: rgb(242, 242, 242) !important;
  --table-header-border-color: rgb(238, 238, 238) !important;
  --table-header-color: rgb(38, 38, 38) !important;
  --table-selection: hsla(217, 100%, 61%, 0.1) !important;
  --table-selection-border-color: hsl(217, 100%, 61%) !important;
  --tag-background: hsla(217, 100%, 61%, 0.1) !important;
  --tag-background-hover: hsla(217, 100%, 61%, 0.2) !important;
  --tag-border-color: hsla(217, 100%, 61%, 0.15) !important;
  --tag-border-color-hover: hsla(217, 100%, 61%, 0.15) !important;
  --tag-color: hsl(217, 100%, 61%) !important;
  --tag-color-hover: hsl(217, 100%, 61%) !important;
  --tag-size: 14px !important;
  --tertiary: hsl(217, 100%, 61%) !important;
  --text-accent: hsl(217, 100%, 61%) !important;
  --text-accent-hover: hsl(217, 100%, 61%) !important;
  --text-error: #DD2E52 !important;
  --text-error-hover: #DD2E52 !important;
  --text-faint: rgb(99, 99, 99) !important;
  --text-highlight-bg: rgba(56, 132, 255, 0.25) !important;
  --text-highlight-bg-active: rgba(56, 132, 255, 0.25) !important;
  --text-muted: rgb(99, 99, 99) !important;
  --text-normal: rgb(38, 38, 38) !important;
  --text-on-accent: rgb(242, 242, 242) !important;
  --text-on-light-accent: rgb(38, 38, 38) !important;
  --text-selection: rgba(56, 132, 255, 0.25) !important;
  --textHighlight: rgba(56, 132, 255, 0.25) !important;
  --titleFont: "Consolas", monospace !important;
  --titlebar-background: rgb(245, 247, 249) !important;
  --titlebar-background-focused: rgb(238, 238, 238) !important;
  --titlebar-border-color: rgb(238, 238, 238) !important;
  --titlebar-text-color: rgb(99, 99, 99) !important;
  --titlebar-text-color-focused: rgb(38, 38, 38) !important;
  --vault-profile-color: rgb(38, 38, 38) !important;
  --vault-profile-color-hover: rgb(38, 38, 38) !important;
  --vim-cursor: hsl(217, 100%, 61%) !important;
  --webkit-tap-highlight-color: rgb(238, 238, 238) !important;
  --yellow: #FFCE56 !important;
  --yellow-transparent: rgba(255, 206, 86, 0.5) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 247, 249);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 247, 249);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 247, 249);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(56, 132, 255, 0.25);
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body p {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
  outline: rgb(99, 99, 99) none 0px;
  text-decoration-color: rgb(99, 99, 99);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
  outline: rgb(56, 132, 255) none 0px;
  text-decoration-color: rgb(56, 132, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
  outline: rgb(56, 132, 255) none 0px;
  text-decoration: underline rgba(56, 132, 255, 0.3);
  text-decoration-color: rgba(56, 132, 255, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(99, 99, 99, 0.1);
  font-family: Consolas, monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  margin-top: 24px;
  width: 223.484px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(38, 38, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(56, 132, 255);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(238, 238, 238);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 213, 57, 132;
  background-color: rgba(213, 57, 132, 0.1);
  border-bottom-color: rgba(213, 57, 132, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(213, 57, 132, 0.25);
  border-right-color: rgba(213, 57, 132, 0.25);
  border-top-color: rgba(213, 57, 132, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 84, 93, 204;
  background-color: rgba(84, 93, 204, 0.1);
  border-bottom-color: rgba(84, 93, 204, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(84, 93, 204, 0.25);
  border-right-color: rgba(84, 93, 204, 0.25);
  border-top-color: rgba(84, 93, 204, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.1);
  border-bottom-color: rgba(224, 172, 0, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(224, 172, 0, 0.25);
  border-right-color: rgba(224, 172, 0, 0.25);
  border-top-color: rgba(224, 172, 0, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 99, 99, 99;
  background-color: rgba(99, 99, 99, 0.1);
  border-bottom-color: rgba(99, 99, 99, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(99, 99, 99, 0.25);
  border-right-color: rgba(99, 99, 99, 0.25);
  border-top-color: rgba(99, 99, 99, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-width: 2px;
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 2px;
  border-left-color: rgb(238, 238, 238);
  border-left-width: 2px;
  border-right-color: rgb(238, 238, 238);
  border-right-width: 2px;
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 247, 249);
  border-bottom-width: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(56, 132, 255, 0.1);
  border-bottom-color: rgba(56, 132, 255, 0.15);
  border-left-color: rgba(56, 132, 255, 0.15);
  border-right-color: rgba(56, 132, 255, 0.15);
  border-top-color: rgba(56, 132, 255, 0.15);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(56, 132, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(56, 132, 255);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(238, 238, 238);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-width: 2px;
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(99, 99, 99);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(99, 99, 99);
  stroke: rgb(99, 99, 99);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(99, 99, 99);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 247, 249);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(56, 132, 255);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(99, 99, 99);
  font-family: Consolas, monospace;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 247, 249);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(38, 38, 38);
  font-family: "??", Consolas, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
