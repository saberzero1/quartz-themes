import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oliviers-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --OT-UI-font-size: 16px !important;
  --OT-YAML-color: hsl(40, 25%, 50%) !important;
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif !important;
  --OT-blockquote-font-size: 17.1px !important;
  --OT-button-OFF-bg: hsl(40, 40%, 25%) !important;
  --OT-button-ON-bg: hsl(40,	90%,	40%) !important;
  --OT-button-background-hover: hsl(40, 90%, 60%) !important;
  --OT-button-background-normal: hsl(40, 90%, 16%) !important;
  --OT-button-cta-background-normal: hsl(40,	90%,	40%) !important;
  --OT-button-cta-text-normal: hsl(40, 100%, 07%) !important;
  --OT-button-text-hover: hsl(40, 100%, 07%) !important;
  --OT-button-text-normal: hsl(40, 60%, 65%) !important;
  --OT-calendar-day-color: hsl(40, 90%, 80%) !important;
  --OT-calendar-today-color: hsl(40, 90%, 80%) !important;
  --OT-callout-gallery-gap: 5px !important;
  --OT-clickable-icon-in-header: hsl(40, 90%, 60%) !important;
  --OT-clickable-icon-in-tab-header: hsl(40, 90%, 60%) !important;
  --OT-clickable-icon-on-base-20: hsl(40, 90%, 60%) !important;
  --OT-color-muted-on-accent-1: hsl(40, 100%, 24%) !important;
  --OT-color-muted-on-accent-2: hsl(40, 100%, 14%) !important;
  --OT-color-on-accent-1: hsl(40, 100%, 07%) !important;
  --OT-color-on-accent-2: hsl(40, 100%, 07%) !important;
  --OT-color-on-accent-3: hsl(40, 60%, 65%) !important;
  --OT-editMode-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-line-height: 1.4em !important;
  --OT-editMode-line-width: 44em !important;
  --OT-editMode-tableText-percent: 90 !important;
  --OT-editMode-text-size: 18px !important;
  --OT-img-max-height: 33rem !important;
  --OT-kanban-font: Uberhand Pro !important;
  --OT-kanban-font-size: 16px !important;
  --OT-kbd: hsl(40, 90%, 80%) !important;
  --OT-kbd-background: darkslate !important;
  --OT-menu-text-color: hsl(40, 70%, 70%) !important;
  --OT-menu-text-muted: hsl(40, 25%, 48%) !important;
  --OT-metadata-label-width: 9em !important;
  --OT-metadata-property-icon: hsl(40, 90%, 60%) !important;
  --OT-nav-folder-title-color: hsl(40, 90%, 80%) !important;
  --OT-nav-item-muted: hsl(40, 25%, 48%) !important;
  --OT-nav-item-vertical-padding: 4px !important;
  --OT-pill-background: hsl(40,	90%,	40%) !important;
  --OT-pill-color: hsl(40, 100%, 07%) !important;
  --OT-readingMode-line-height: 1.4em !important;
  --OT-readingMode-line-width: 39em !important;
  --OT-readingMode-tableText-percent: 90 !important;
  --OT-readingMode-text-size: 18px !important;
  --OT-ribbon-icon-color-sidebar-is-collapsed: hsl(40, 90%, 60%) !important;
  --OT-ribbon-icon-color-sidebar-is-open: hsl(40, 90%, 60%) !important;
  --OT-search-settings-item-name: hsl(40, 90%, 80%) !important;
  --OT-setting-item-description: hsl(40, 25%, 48%) !important;
  --OT-setting-item-name: hsl(40, 90%, 80%) !important;
  --OT-sidebarTab-background-active: hsl(40,	90%,	40%) !important;
  --OT-sidebarTab-background-active-hover: hsl(40, 90%, 60%) !important;
  --OT-space-below-h1: 1.0rem !important;
  --OT-space-below-h2: 1.5rem !important;
  --OT-space-below-h3: 0.4rem !important;
  --OT-space-below-h4: 0.2rem !important;
  --OT-space-below-h5: 0.2rem !important;
  --OT-space-below-h6: 0.0rem !important;
  --OT-stabilo-mark: hsl( 48,  90%, 85%) !important;
  --OT-stabilo-text: hsl(40, 25%, 10%) !important;
  --OT-status-bar-padding: 6px !important;
  --OT-syntax-markers: hsl(40, 25%, 40%) !important;
  --OT-tab-background-active-hover: hsl(40, 90%, 60%) !important;
  --OT-table-alt-background: hsl(40, 25%, 14%) !important;
  --OT-table-background: hsl(40, 25%, 12%) !important;
  --OT-theme-h: 40 !important;
  --OT-theme-s: 25% !important;
  --OT-tree-item-flair-background: hsl(40, 90%, 16%) !important;
  --OT-tree-item-flair-color: hsl(40, 60%, 65%) !important;
  --OT-vertical-tab-header-group-title: hsl(40, 25%, 48%) !important;
  --OT-view-header-title-focus-color: hsl(40, 90%, 60%) !important;
  --OT-view-header-title-no-focus-color: hsl(40, 25%, 48%) !important;
  --accent-h: 40 !important;
  --accent-l: 40% !important;
  --accent-s: 90% !important;
  --background-modifier-active-hover: hsl(40, 90%, 60%) !important;
  --background-modifier-border: hsl(40, 25%, 22%) !important;
  --background-modifier-border-focus: hsl(40, 25%, 28%) !important;
  --background-modifier-border-hover: hsl(40,	90%,	40%) !important;
  --background-modifier-form-field: hsl(40, 25%, 10%) !important;
  --background-modifier-form-field-hover: hsl(40, 25%, 10%) !important;
  --background-modifier-hover: hsl(40, 90%, 60%) !important;
  --background-modifier-message: hsl(40, 90%, 60%) !important;
  --background-modifier-success: rgb(106, 245, 161) !important;
  --background-modifier-success-rgb: 106, 245, 161 !important;
  --background-primary: hsl(40, 25%, 10%) !important;
  --background-secondary: hsl(40, 25%, 14%) !important;
  --bases-cards-background: hsl(40, 25%, 10%) !important;
  --bases-cards-border-width: 1.5px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(40, 25%, 22%) !important;
  --bases-cards-shadow-hover: 0 0 0 2px hsl(40,	90%,	40%) !important;
  --bases-embed-border-color: hsl(40, 25%, 22%) !important;
  --bases-group-heading-property-color: hsl(40, 25%, 48%) !important;
  --bases-group-heading-property-size: 12.8px !important;
  --bases-header-border-width: 0 0 1.5px 0 !important;
  --bases-table-border-color: hsl(40, 25%, 20%) !important;
  --bases-table-cell-background-active: hsl(40, 25%, 10%) !important;
  --bases-table-cell-background-disabled: hsl(40, 15%, 80%) !important;
  --bases-table-cell-background-selected: hsla(40, 90%, 40%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(40, 25%, 28%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(40,	90%,	40%) !important;
  --bases-table-column-border-width: 1.5px !important;
  --bases-table-container-border-width: 1.5px !important;
  --bases-table-header-background: hsl(40, 25%, 10%) !important;
  --bases-table-header-background-hover: hsl(40, 90%, 60%) !important;
  --bases-table-header-color: hsl(40, 60%, 65%) !important;
  --bases-table-row-background-hover: hsl(40, 25%, 14%) !important;
  --bases-table-row-border-width: 1.5px !important;
  --bases-table-summary-background: hsl(40, 25%, 10%) !important;
  --bases-table-summary-background-hover: hsl(40, 90%, 60%) !important;
  --blockquote-background-color: hsl(40, 25%, 16%) !important;
  --blockquote-border-color: hsl(40,	90%,	40%) !important;
  --blockquote-border-thickness: 0 !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blue: hsl(246,  74%, 43%) !important;
  --border-width: 1.5px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: hsl(40, 25%, 10%) !important;
  --canvas-card-label-color: hsl(40, 25%, 40%) !important;
  --canvas-dot-pattern: hsl(40, 25%, 28%) !important;
  --caret-color: red !important;
  --checkbox-border-color: hsl(40, 90%, 80%) !important;
  --checkbox-border-color-hover: hsl(40, 90%, 60%) !important;
  --checkbox-color: hsl(40, 90%, 80%) !important;
  --checkbox-color-hover: hsl(40, 90%, 60%) !important;
  --checkbox-marker-color: hsl(40, 25%, 10%) !important;
  --checkbox-radius: 0.3rem !important;
  --checkbox-size: 0.85rem !important;
  --checklist-done-color: hsl(40, 25%, 40%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(40, 25%, 12%) !important;
  --code-border-color: hsl(40, 90%, 80%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(40, 90%, 60%) !important;
  --code-comment: hsl(40, 25%, 40%) !important;
  --code-normal: hsl(40, 90%, 80%) !important;
  --code-operator: hsl(40, 90%, 80%) !important;
  --code-punctuation: hsl(40, 25%, 48%) !important;
  --code-size: 0.8em !important;
  --code-string: hsl(220, 80%, 70%) !important;
  --code-tag: hsl(40, 25%, 40%) !important;
  --collapse-icon-color: hsl(40,	90%,	40%) !important;
  --collapse-icon-color-collapsed: hsl(40,	90%,	40%) !important;
  --color-accent: hsl(40,	90%,	40%) !important;
  --color-accent-1: hsl(40, 90%, 60%) !important;
  --color-accent-2: hsl(40,	90%,	40%) !important;
  --color-accent-3: hsl(40, 90%, 16%) !important;
  --color-accent-hsl: 40, 90%, 40% !important;
  --color-base-00: hsl(40, 25%, 10%) !important;
  --color-base-05: hsl(40, 25%, 17%) !important;
  --color-base-100: hsl(40, 90%, 80%) !important;
  --color-base-20: hsl(40, 25%, 14%) !important;
  --color-base-35: hsl(40, 25%, 22%) !important;
  --color-base-40: hsl(40, 25%, 28%) !important;
  --color-base-50: hsl(40, 25%, 40%) !important;
  --dark: hsl(40, 90%, 80%) !important;
  --dark-blue: hsl(233,  54%, 28%) !important;
  --darkgray: hsl(40, 90%, 80%) !important;
  --divider-color: hsl(40, 25%, 22%) !important;
  --divider-color-hover: hsl(40,	90%,	40%) !important;
  --divider-width: 2px !important;
  --dropdown-background-hover: hsl(40, 25%, 22%) !important;
  --dynamic-outline-active-heading-background: hsl(40, 90%, 16%) !important;
  --dynamic-outline-background: hsl(40, 25%, 14%) !important;
  --dynamic-outline-background-accent: lime !important;
  --dynamic-outline-background-hover: hsl(40,	90%,	40%) !important;
  --dynamic-outline-background-modifier-hover-lighter: lime !important;
  --dynamic-outline-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h1-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h2-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h3-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h4-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h5-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-h6-text-color: hsl(40, 70%, 70%) !important;
  --dynamic-outline-text-color: hsl(40, 70%, 70%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(40, 25%, 22%), inset 0 0 0 1px hsl(40, 25%, 22%) !important;
  --embed-border-end: 1px dotted !important;
  --embed-border-start: 0 !important;
  --embed-padding: 0 !important;
  --favorite-blue: hsl(246,  91%, 22%) !important;
  --file-header-background: hsl(40, 25%, 10%) !important;
  --file-header-background-focused: hsl(40, 25%, 10%) !important;
  --file-header-border: 1.5px solid hsl(40, 25%, 22%) !important;
  --file-header-font-size: 13.86667px !important;
  --file-header-justify: left !important;
  --file-line-width: 39em !important;
  --file-margins: 0.5em 32px !important;
  --flair-color: hsl(40, 90%, 80%) !important;
  --floating-toc-background-color: hsl(40, 25%, 10%) !important;
  --floating-toc-font-color: hsl(40, 70%, 70%) !important;
  --floating-toc-header-background-color: hsl(40, 25%, 10%) !important;
  --floating-toc-hover-color: hsl(40, 100%, 07%) !important;
  --font-ui-large: 21.33333px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 13.86667px !important;
  --font-ui-smaller: 12.8px !important;
  --footnote-divider-color: hsl(40, 25%, 22%) !important;
  --footnote-divider-width: 1.5px !important;
  --footnote-gap: 0.5rem !important;
  --footnote-id-color: hsl(40, 90%, 80%) !important;
  --footnote-id-color-no-occurrences: hsl(40, 25%, 40%) !important;
  --footnote-id-delimiter: ")" !important;
  --footnote-input-background-active: hsl(40, 25%, 10%) !important;
  --footnote-line-height: 1.3 !important;
  --footnote-size: 16px !important;
  --graph-line: hsl(40, 90%, 80%) !important;
  --graph-node: hsl(40, 25%, 48%) !important;
  --graph-node-focused: hsl(40, 90%, 60%) !important;
  --graph-node-unresolved: hsl(40, 25%, 40%) !important;
  --graph-text: hsl(40, 90%, 80%) !important;
  --gray: hsl(40, 25%, 48%) !important;
  --h1-color: hsl(40, 90%, 80%) !important;
  --h2-color: hsl(40, 90%, 80%) !important;
  --h3-color: hsl(40, 90%, 80%) !important;
  --h4-color: hsl(40, 90%, 80%) !important;
  --h5-color: hsl(40, 90%, 80%) !important;
  --h5-line-height: 1.4em !important;
  --h6-color: hsl(40, 90%, 80%) !important;
  --h6-line-height: 1.4em !important;
  --header-height: 2em !important;
  --heading-formatting: hsl(40, 25%, 40%) !important;
  --heading-spacing: 0 !important;
  --highlight: hsl(40, 90%, 60%) !important;
  --highlighted-folder-background: hsl(40, 25%, 17%) !important;
  --highlighted-folder-color: yellow !important;
  --highlighted-folder-current-note-color: hsl(40, 90%, 60%) !important;
  --highlighted-folder-font-weight: 400 !important;
  --highlighted-folder-text-color: hsl(40, 70%, 70%) !important;
  --highlighted-folder-title-background: hsl(40,	90%,	40%) !important;
  --highlighted-folder-title-color: hsl(40, 100%, 07%) !important;
  --highlighted-parent-folder-background: hsl(40, 90%, 16%) !important;
  --highlighted-parent-folder-color: yellow !important;
  --highlighted-parent-folder-font-weight: 400 !important;
  --highlighted-parent-folder-text-color: hsl(40, 60%, 65%) !important;
  --hr-color: hsl(40, 25%, 22%) !important;
  --icon-color: hsl(40, 90%, 60%) !important;
  --icon-color-active: hsl(40, 25%, 14%) !important;
  --icon-color-focused: hsl(40, 90%, 80%) !important;
  --icon-color-hover: hsl(40, 100%, 07%) !important;
  --indentation-guide-color: hsl(40, 25%, 40%) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-title-color: hsl(40, 25%, 40%) !important;
  --inline-title-font: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --inline-title-line-height: 0em !important;
  --inline-title-size: 18px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 1.5px !important;
  --input-date-separator: hsl(40, 25%, 40%) !important;
  --input-placeholder-color: grey !important;
  --interactive-accent: hsl(40,	90%,	40%) !important;
  --interactive-accent-hover: hsl(40, 90%, 60%) !important;
  --interactive-accent-hsl: 40, 90%, 40% !important;
  --interactive-hover: hsl(40, 25%, 22%) !important;
  --light: hsl(40, 25%, 10%) !important;
  --light-blue: hsl(211,  50%, 77%) !important;
  --lightgray: hsl(40, 25%, 14%) !important;
  --line-height-normal: 1.4em !important;
  --link-color: hsl(220, 80%, 70%) !important;
  --link-color-hover: hsl(40, 100%, 07%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(220, 80%, 70%) !important;
  --link-external-color-hover: hsl(40, 90%, 60%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #fb464c !important;
  --link-unresolved-decoration-color: hsla(40, 90%, 40%, 0.3) !important;
  --link-unresolved-filter: brightness(0.9) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.3em !important;
  --list-marker-color: hsl(40, 90%, 80%) !important;
  --list-marker-color-collapsed: hsl(40, 90%, 60%) !important;
  --list-marker-color-hover: hsl(40, 25%, 48%) !important;
  --list-spacing: 0.05rem !important;
  --list-spacing-1: 0.3rem !important;
  --list-spacing-2: 0.2rem !important;
  --list-spacing-3: 0.1rem !important;
  --list-spacing-below: 0.8rem !important;
  --menu-background: hsl(40, 25%, 14%) !important;
  --menu-border-color: hsl(40,	90%,	40%) !important;
  --menu-border-width: 1.5px !important;
  --metadata-background: hsl(40, 25%, 10%) !important;
  --metadata-border-color: hsl(40, 25%, 22%) !important;
  --metadata-border-radius: 7px !important;
  --metadata-divider-color: hsl(40, 25%, 22%) !important;
  --metadata-divider-width: 1 !important;
  --metadata-input-background-active: hsl(40, 25%, 10%) !important;
  --metadata-input-font-size: 13.86667px !important;
  --metadata-input-text-color: hsl(40, 90%, 80%) !important;
  --metadata-label-background-active: hsl(40, 25%, 10%) !important;
  --metadata-label-font-size: 13.86667px !important;
  --metadata-label-font-weight: 600 !important;
  --metadata-label-text-color: hsl(40, 25%, 48%) !important;
  --metadata-label-text-color-hover: hsl(40, 25%, 48%) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: hsl(40, 90%, 60%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(40, 25%, 28%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1.5px hsl(40,	90%,	40%) !important;
  --metadata-property-padding: 0em 0em 0em 0.3em !important;
  --metadata-sidebar-input-font-size: 13.86667px !important;
  --metadata-sidebar-label-font-size: 13.86667px !important;
  --modal-background: hsl(40, 25%, 10%) !important;
  --modal-border-color: hsl(40, 25%, 28%) !important;
  --modal-border-width: 1.5px !important;
  --modal-height: 88vh !important;
  --modal-max-height: 98vh !important;
  --nav-collapse-icon-color: hsl(40, 25%, 40%) !important;
  --nav-collapse-icon-color-collapsed: red !important;
  --nav-heading-color: hsl(40, 90%, 80%) !important;
  --nav-heading-color-collapsed: hsl(40, 25%, 40%) !important;
  --nav-heading-color-collapsed-hover: hsl(40, 25%, 48%) !important;
  --nav-heading-color-hover: hsl(40, 90%, 80%) !important;
  --nav-indentation-guide-color: hsl(40, 25%, 40%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: hsl(40,	90%,	40%) !important;
  --nav-item-background-hover: hsl(40, 90%, 60%) !important;
  --nav-item-background-selected: hsl(40, 90%, 16%) !important;
  --nav-item-color: hsl(40, 70%, 70%) !important;
  --nav-item-color-active: hsl(40, 100%, 07%) !important;
  --nav-item-color-highlighted: hsl(40, 90%, 60%) !important;
  --nav-item-color-hover: hsl(40, 100%, 07%) !important;
  --nav-item-color-selected: hsl(40, 60%, 65%) !important;
  --nav-item-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-size: 13.86667px !important;
  --nav-tag-color: hsl(40, 25%, 40%) !important;
  --nav-tag-color-active: hsl(40, 25%, 48%) !important;
  --nav-tag-color-hover: hsl(40, 25%, 48%) !important;
  --neutral-100: hsl(  0,   0%, 100%) !important;
  --obsidian-violet: hsl(258,  88%, 66%) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: hsl(40, 25%, 10%) !important;
  --pdf-page-background: hsl(40, 25%, 10%) !important;
  --pdf-shadow: 0 0 0 1px hsl(40, 25%, 22%) !important;
  --pdf-sidebar-background: hsl(40, 25%, 10%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(40, 25%, 22%) !important;
  --pill-background-hover: hsl(40, 90%, 60%) !important;
  --pill-border-color: hsl(40, 25%, 22%) !important;
  --pill-border-color-hover: hsl(40,	90%,	40%) !important;
  --pill-border-width: 1.5px !important;
  --pill-color: hsl(40, 25%, 48%) !important;
  --pill-color-hover: hsl(40, 100%, 07%) !important;
  --pill-color-remove: hsl(40,	90%,	40%) !important;
  --pill-color-remove-hover: hsl(40, 100%, 07%) !important;
  --popover-font-size: 14.4px !important;
  --popover-height: 50vh !important;
  --popover-width: 46rem !important;
  --prompt-background: hsl(40, 25%, 10%) !important;
  --prompt-border-color: hsl(40, 25%, 28%) !important;
  --prompt-border-width: 1.5px !important;
  --prompt-max-height: 80vh !important;
  --ribbon-background: hsl(40, 25%, 14%) !important;
  --ribbon-background-collapsed: hsl(40, 25%, 10%) !important;
  --royal-blue: hsl(240, 100%, 32%) !important;
  --search-clear-button-color: hsl(40, 25%, 48%) !important;
  --search-icon-color: hsl(40, 90%, 60%) !important;
  --search-result-background: hsl(40, 25%, 10%) !important;
  --secondary: hsl(40, 90%, 60%) !important;
  --setting-group-heading-color: hsl(40, 90%, 80%) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-border-color: hsl(40, 25%, 22%) !important;
  --sky-blue: hsl(192, 100%, 57%) !important;
  --slider-thumb-border-color: hsl(40,	90%,	40%) !important;
  --slider-thumb-border-width: 1.5px !important;
  --slider-track-background: hsl(40, 25%, 22%) !important;
  --solarized-base0: hsl(186,   8%, 55%) !important;
  --solarized-base00: hsl(196,  13%, 45%) !important;
  --solarized-base01: hsl(194,  14%, 40%) !important;
  --solarized-base02: hsl(192,  81%, 14%) !important;
  --solarized-base03: hsl(192, 100%, 11%) !important;
  --solarized-base1: hsl(180,   7%, 60%) !important;
  --solarized-base2: hsl( 46,  42%, 88%) !important;
  --solarized-base3: hsl( 44,  87%, 94%) !important;
  --solarized-blue: hsl(205,  69%, 49%) !important;
  --solarized-cyan: hsl(175,  59%, 40%) !important;
  --solarized-green: hsl( 68, 100%, 30%) !important;
  --solarized-magenta: hsl(331,  64%, 52%) !important;
  --solarized-orange: hsl( 18 , 80%, 44%) !important;
  --solarized-red: hsl(  1,  71%, 52%) !important;
  --solarized-violet: hsl(237,  43%, 60%) !important;
  --solarized-yellow: hsl( 45, 100%, 35%) !important;
  --stabilo-bleu-clair: hsl(196,  70%, 84%) !important;
  --stabilo-bleu-foncé: hsl(197,  70%, 54%) !important;
  --stabilo-jaune-clair: hsl( 48,  90%, 85%) !important;
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%) !important;
  --stabilo-orange-clair: hsl( 30, 100%, 75%) !important;
  --stabilo-orange-foncé: hsl( 30,  89%, 59%) !important;
  --stabilo-rose-clair: hsl(347,  78%, 80%) !important;
  --stabilo-rose-foncé: hsl(352,  77%, 62%) !important;
  --stabilo-vert-clair: hsl(146,  55%, 80%) !important;
  --stabilo-vert-foncé: hsl(161,  99%, 38%) !important;
  --stabilo-violet-clair: hsl(281,  29%, 64%) !important;
  --stabilo-violet-foncé: hsl(330,  68%, 51%) !important;
  --status-bar-background: hsl(40, 90%, 16%) !important;
  --status-bar-border-color: hsl(40,	90%,	40%) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13.86667px !important;
  --status-bar-radius: 4px !important;
  --status-bar-text-color: hsl(40, 60%, 65%) !important;
  --suggestion-background: hsl(40, 25%, 10%) !important;
  --tab-background-active: hsl(40, 25%, 10%) !important;
  --tab-container-background: hsl(40, 25%, 17%) !important;
  --tab-divider-color: hsl(40, 90%, 60%) !important;
  --tab-font-size: 13.86667px !important;
  --tab-outline-color: hsl(40, 25%, 22%) !important;
  --tab-stacked-font-size: 13.86667px !important;
  --tab-stacked-header-width: 2em !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: hsl(40, 25%, 14%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(40, 25%, 14%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40,	90%,	40%) !important;
  --tab-text-color: hsl(40, 25%, 48%) !important;
  --tab-text-color-active: hsl(40, 25%, 48%) !important;
  --tab-text-color-focused: hsl(40, 25%, 48%) !important;
  --tab-text-color-focused-active: hsl(40, 25%, 48%) !important;
  --tab-text-color-focused-active-current: hsl(40, 90%, 60%) !important;
  --tab-text-color-focused-highlighted: hsl(40, 90%, 60%) !important;
  --table-add-button-border-color: hsl(40, 25%, 22%) !important;
  --table-background: hsl(40, 25%, 14%) !important;
  --table-border-color: hsl(40, 25%, 20%) !important;
  --table-drag-handle-background-active: hsl(40,	90%,	40%) !important;
  --table-drag-handle-color: hsl(40, 25%, 40%) !important;
  --table-drag-handle-color-active: hsl(40, 100%, 07%) !important;
  --table-header-background: hsl(40, 25%, 16%) !important;
  --table-header-background-hover: hsl(40, 25%, 16%) !important;
  --table-header-border-color: hsl(40, 25%, 20%) !important;
  --table-header-color: hsl(40, 90%, 80%) !important;
  --table-header-size: 16.2px !important;
  --table-row-alt-background: hsl(40, 25%, 12%) !important;
  --table-row-alt-background-hover: hsl(40, 25%, 12%) !important;
  --table-row-background-hover: hsl(40, 25%, 14%) !important;
  --table-selection: hsla(40, 90%, 40%, 0.1) !important;
  --table-selection-border-color: hsl(40,	90%,	40%) !important;
  --table-text-size: 16.2px !important;
  --tag-background: hsl(40,	90%,	40%) !important;
  --tag-background-hover: hsl(40, 90%, 60%) !important;
  --tag-border-color: hsla(40, 90%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 90%, 40%, 0.15) !important;
  --tag-color: hsl(40, 100%, 07%) !important;
  --tag-color-hover: hsl(40, 100%, 07%) !important;
  --tertiary: hsl(40, 100%, 07%) !important;
  --text-accent: hsl(40, 90%, 60%) !important;
  --text-accent-hover: hsl(40, 100%, 07%) !important;
  --text-faint: hsl(40, 25%, 40%) !important;
  --text-muted: hsl(40, 25%, 48%) !important;
  --text-normal: hsl(40, 90%, 80%) !important;
  --text-on-accent: hsl(40, 100%, 07%) !important;
  --text-on-accent-inverted: hsl(40, 90%, 60%) !important;
  --text-selection: hsla(40, 90%, 60%, 0.2) !important;
  --textHighlight: hsl(40, 90%, 60%) !important;
  --titlebar-background: #333 !important;
  --titlebar-background-focused: hsl(40, 25%, 17%) !important;
  --titlebar-border-color: hsl(40, 25%, 22%) !important;
  --titlebar-text-color: hsl(40, 25%, 48%) !important;
  --titlebar-text-color-focused: hsl(40, 90%, 80%) !important;
  --toggle-thumb-color: hsl(40, 25%, 14%) !important;
  --traffic-lights-offset-x: 2em !important;
  --traffic-lights-offset-y: 2em !important;
  --vault-profile-color: hsl(40, 90%, 60%) !important;
  --vault-profile-color-hover: hsl(40, 100%, 07%) !important;
  --vault-profile-font-size: 21.33333px !important;
  --vault-profile-font-weight: 700 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 47, 33);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(38, 33, 23);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(45, 39, 27);
  border-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(32, 28, 19);
  border-color: rgb(70, 61, 42);
  border-radius: 7px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(194, 133, 10);
  border-radius: 27.7333px;
  color: rgb(36, 24, 0);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 39, 27);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 47, 33);
  border-left-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 219, 158);
  font-size: 13.8667px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(250, 219, 158);
  border-radius: 4.8px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(250, 219, 158);
  border-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 133, 92);
  outline: rgb(153, 133, 92) none 0px;
  text-decoration-color: rgb(153, 133, 92);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration-color: rgb(117, 158, 240);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration-color: rgb(117, 158, 240);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(251, 70, 76);
  filter: brightness(0.9);
  outline: rgb(251, 70, 76) none 0px;
  text-decoration: rgba(194, 133, 10, 0.3);
  text-decoration-color: rgba(194, 133, 10, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(128, 111, 77);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(51, 44, 31);
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 219, 158);
  margin-top: 8px;
  width: 227.453px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(45, 39, 27);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(38, 33, 23);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(51, 44, 31);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-width: 1px;
  border-left-color: rgb(250, 219, 158);
  border-left-width: 1px;
  border-right-color: rgb(250, 219, 158);
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-left-width: 0px;
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-top-color: rgb(250, 219, 158);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(250, 219, 158);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  margin-left: -20.4px;
  width: 13.5938px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}`,
    callouts: `html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
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
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-top-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 39, 27);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(245, 184, 61);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(194, 133, 10);
  border-bottom-color: rgba(194, 133, 10, 0.15);
  border-bottom-left-radius: 27.7333px;
  border-bottom-right-radius: 27.7333px;
  border-left-color: rgba(194, 133, 10, 0.15);
  border-right-color: rgba(194, 133, 10, 0.15);
  border-top-color: rgba(194, 133, 10, 0.15);
  border-top-left-radius: 27.7333px;
  border-top-right-radius: 27.7333px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(36, 24, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h2 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(128, 111, 77);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body h3 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h4 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h5 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h6 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(128, 111, 77);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 219, 158);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(78, 53, 4);
  border-bottom-color: rgb(194, 133, 10);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(194, 133, 10);
  border-right-color: rgb(194, 133, 10);
  border-right-width: 1px;
  border-top-color: rgb(194, 133, 10);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(219, 184, 112);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(219, 184, 112);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 196, 125);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(245, 184, 61);
  stroke: rgb(245, 184, 61);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(128, 111, 77);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(70, 61, 42);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-top-color: rgb(70, 61, 42);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(153, 133, 92);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(78, 53, 4);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(194, 133, 10);
  border-bottom-color: rgba(194, 133, 10, 0.15);
  border-left-color: rgba(194, 133, 10, 0.15);
  border-right-color: rgba(194, 133, 10, 0.15);
  border-top-color: rgba(194, 133, 10, 0.15);
  color: rgb(36, 24, 0);
}`,
  },
  light: {
    base: `:root:root {
  --OT-UI-font-size: 16px !important;
  --OT-YAML-color: hsl(27, 35%, 50%) !important;
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif !important;
  --OT-blockquote-font-size: 17.1px !important;
  --OT-button-OFF-bg: hsl(27, 20%, 80%) !important;
  --OT-button-ON-bg: hsl(27,	50%,	70%) !important;
  --OT-button-background-hover: hsl(27,	50%,	50%) !important;
  --OT-button-background-normal: hsl(27,	50%,	95%) !important;
  --OT-button-cta-background-normal: hsl(27,	50%,	70%) !important;
  --OT-button-cta-text-normal: hsl(27, 50%, 96%) !important;
  --OT-button-text-hover: hsl(27, 50%, 95%) !important;
  --OT-button-text-normal: hsl(27, 50%, 40%) !important;
  --OT-calendar-day-color: hsl(27, 35%, 32%) !important;
  --OT-calendar-today-color: hsl(27, 35%, 32%) !important;
  --OT-callout-gallery-gap: 5px !important;
  --OT-clickable-icon-in-header: hsl(27,	50%,	50%) !important;
  --OT-clickable-icon-in-tab-header: hsl(27,	50%,	50%) !important;
  --OT-clickable-icon-on-base-20: hsl(27,	50%,	50%) !important;
  --OT-color-muted-on-accent-1: hsl(27, 50%, 88%) !important;
  --OT-color-muted-on-accent-2: hsl(27, 50%, 92%) !important;
  --OT-color-on-accent-1: hsl(27, 50%, 95%) !important;
  --OT-color-on-accent-2: hsl(27, 50%, 96%) !important;
  --OT-color-on-accent-3: hsl(27, 50%, 40%) !important;
  --OT-editMode-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-line-height: 1.4em !important;
  --OT-editMode-line-width: 44em !important;
  --OT-editMode-tableText-percent: 90 !important;
  --OT-editMode-text-size: 18px !important;
  --OT-img-max-height: 33rem !important;
  --OT-kanban-font: Uberhand Pro !important;
  --OT-kanban-font-size: 16px !important;
  --OT-kbd: hsl(27, 35%, 32%) !important;
  --OT-kbd-background: floralwhite !important;
  --OT-menu-text-color: hsl(27, 35%, 32%) !important;
  --OT-menu-text-muted: hsl(27, 35%, 48%) !important;
  --OT-metadata-label-width: 9em !important;
  --OT-metadata-property-icon: hsl(27,	50%,	50%) !important;
  --OT-nav-folder-title-color: hsl(27, 35%, 32%) !important;
  --OT-nav-item-muted: hsl(27, 35%, 48%) !important;
  --OT-nav-item-vertical-padding: 4px !important;
  --OT-pill-background: hsl(27,	50%,	70%) !important;
  --OT-pill-color: hsl(27, 50%, 96%) !important;
  --OT-readingMode-line-height: 1.4em !important;
  --OT-readingMode-line-width: 39em !important;
  --OT-readingMode-tableText-percent: 90 !important;
  --OT-readingMode-text-size: 18px !important;
  --OT-ribbon-icon-color-sidebar-is-collapsed: hsl(27,	50%,	50%) !important;
  --OT-ribbon-icon-color-sidebar-is-open: hsl(27,	50%,	50%) !important;
  --OT-search-settings-item-name: hsl(27, 35%, 32%) !important;
  --OT-setting-item-description: hsl(27, 35%, 48%) !important;
  --OT-setting-item-name: hsl(27, 35%, 32%) !important;
  --OT-sidebarTab-background-active: hsl(27,	50%,	70%) !important;
  --OT-sidebarTab-background-active-hover: hsl(27,	50%,	50%) !important;
  --OT-space-below-h1: 1.0rem !important;
  --OT-space-below-h2: 1.5rem !important;
  --OT-space-below-h3: 0.4rem !important;
  --OT-space-below-h4: 0.2rem !important;
  --OT-space-below-h5: 0.2rem !important;
  --OT-space-below-h6: 0.0rem !important;
  --OT-stabilo-mark: hsl( 48,  90%, 85%) !important;
  --OT-stabilo-text: hsl(27, 35%, 32%) !important;
  --OT-status-bar-padding: 6px !important;
  --OT-syntax-markers: hsl(27, 35%, 68%) !important;
  --OT-tab-background-active-hover: hsl(27,	50%,	50%) !important;
  --OT-table-alt-background: hsl(27, 35%, 91%) !important;
  --OT-table-background: hsl(27, 35%, 95%) !important;
  --OT-theme-h: 27 !important;
  --OT-theme-s: 35% !important;
  --OT-tree-item-flair-background: hsl(27,	50%,	95%) !important;
  --OT-tree-item-flair-color: hsl(27, 50%, 40%) !important;
  --OT-vertical-tab-header-group-title: hsl(27, 35%, 48%) !important;
  --OT-view-header-title-focus-color: hsl(27,	50%,	50%) !important;
  --OT-view-header-title-no-focus-color: hsl(27, 35%, 48%) !important;
  --accent-h: 27 !important;
  --accent-l: 70% !important;
  --accent-s: 50% !important;
  --background-modifier-active-hover: hsl(27,	50%,	50%) !important;
  --background-modifier-border: hsl(27, 35%, 81%) !important;
  --background-modifier-border-focus: hsl(27, 35%, 32%) !important;
  --background-modifier-border-hover: hsl(27,	50%,	70%) !important;
  --background-modifier-form-field: hsl(27, 35%, 94%) !important;
  --background-modifier-form-field-hover: hsl(27, 35%, 94%) !important;
  --background-modifier-hover: hsl(27,	50%,	50%) !important;
  --background-modifier-message: hsl(27,	50%,	50%) !important;
  --background-modifier-success: rgb(106, 245, 161) !important;
  --background-modifier-success-rgb: 106, 245, 161 !important;
  --background-primary: hsl(27, 35%, 94%) !important;
  --background-secondary: hsl(27, 35%, 89%) !important;
  --background-secondary-alt: hsl(27, 35%, 85%) !important;
  --bases-cards-background: hsl(27, 35%, 94%) !important;
  --bases-cards-border-width: 1.5px !important;
  --bases-cards-shadow: 0 0 0 1px hsl(27, 35%, 81%) !important;
  --bases-cards-shadow-hover: 0 0 0 2px hsl(27,	50%,	70%) !important;
  --bases-embed-border-color: hsl(27, 35%, 81%) !important;
  --bases-group-heading-property-color: hsl(27, 35%, 48%) !important;
  --bases-group-heading-property-size: 12.8px !important;
  --bases-header-border-width: 0 0 1.5px 0 !important;
  --bases-table-border-color: hsl(27, 35%, 32%) !important;
  --bases-table-cell-background-active: hsl(27, 35%, 94%) !important;
  --bases-table-cell-background-disabled: hsl(27, 15%, 80%) !important;
  --bases-table-cell-background-selected: hsla(27, 50%, 70%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(27, 35%, 32%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(27,	50%,	70%) !important;
  --bases-table-column-border-width: 1.5px !important;
  --bases-table-container-border-width: 1.5px !important;
  --bases-table-header-background: hsl(27, 35%, 94%) !important;
  --bases-table-header-background-hover: hsl(27,	50%,	50%) !important;
  --bases-table-header-color: hsl(27, 50%, 40%) !important;
  --bases-table-row-background-hover: hsl(27, 35%, 91%) !important;
  --bases-table-row-border-width: 1.5px !important;
  --bases-table-summary-background: hsl(27, 35%, 94%) !important;
  --bases-table-summary-background-hover: hsl(27,	50%,	50%) !important;
  --blockquote-background-color: hsl(27, 35%, 98%) !important;
  --blockquote-border-color: hsl(27,	50%,	70%) !important;
  --blockquote-border-thickness: 0 !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blue: hsl(246,  74%, 43%) !important;
  --blur-background: color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent) linear-gradient(hsl(27, 35%, 94%), color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent)) !important;
  --border-width: 1.5px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: hsl(27, 35%, 94%) !important;
  --canvas-card-label-color: hsl(27, 35%, 68%) !important;
  --canvas-dot-pattern: hsl(27, 35%, 32%) !important;
  --caret-color: red !important;
  --checkbox-border-color: hsl(27, 35%, 32%) !important;
  --checkbox-border-color-hover: hsl(27,	50%,	50%) !important;
  --checkbox-color: hsl(27, 35%, 32%) !important;
  --checkbox-color-hover: hsl(27,	50%,	50%) !important;
  --checkbox-marker-color: hsl(27, 35%, 94%) !important;
  --checkbox-radius: 0.3rem !important;
  --checkbox-size: 0.85rem !important;
  --checklist-done-color: hsl(27, 35%, 68%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(27, 35%, 95%) !important;
  --code-border-color: hsl(27, 35%, 32%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsl(27,	50%,	50%) !important;
  --code-comment: hsl(27, 35%, 68%) !important;
  --code-normal: hsl(27, 35%, 32%) !important;
  --code-operator: hsl(27, 35%, 32%) !important;
  --code-punctuation: hsl(27, 35%, 48%) !important;
  --code-size: 0.8em !important;
  --code-string: hsl(207, 35%, 50%) !important;
  --code-tag: hsl(27, 35%, 68%) !important;
  --collapse-icon-color: hsl(27,	50%,	70%) !important;
  --collapse-icon-color-collapsed: hsl(27,	50%,	70%) !important;
  --color-accent: hsl(27,	50%,	70%) !important;
  --color-accent-1: hsl(27,	50%,	50%) !important;
  --color-accent-2: hsl(27,	50%,	70%) !important;
  --color-accent-3: hsl(27,	50%,	95%) !important;
  --color-accent-hsl: 27, 50%, 70% !important;
  --color-base-00: hsl(27, 35%, 94%) !important;
  --color-base-05: hsl(27, 35%, 85%) !important;
  --color-base-100: hsl(27, 35%, 32%) !important;
  --color-base-20: hsl(27, 35%, 89%) !important;
  --color-base-35: hsl(27, 35%, 81%) !important;
  --color-base-40: hsl(27, 35%, 32%) !important;
  --color-base-50: hsl(27, 35%, 68%) !important;
  --dark: hsl(27, 35%, 32%) !important;
  --dark-blue: hsl(233,  54%, 28%) !important;
  --darkgray: hsl(27, 35%, 32%) !important;
  --divider-color: hsl(27, 35%, 81%) !important;
  --divider-color-hover: hsl(27,	50%,	70%) !important;
  --divider-width: 2px !important;
  --dropdown-background: hsl(27,	50%,	95%) !important;
  --dropdown-background-hover: hsl(27,	50%,	50%) !important;
  --dynamic-outline-active-heading-background: hsl(27,	50%,	95%) !important;
  --dynamic-outline-background: hsl(27, 35%, 89%) !important;
  --dynamic-outline-background-accent: lime !important;
  --dynamic-outline-background-hover: hsl(27,	50%,	70%) !important;
  --dynamic-outline-background-modifier-hover-lighter: lime !important;
  --dynamic-outline-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h1-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h2-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h3-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h4-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h5-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-h6-text-color: hsl(27, 35%, 32%) !important;
  --dynamic-outline-text-color: hsl(27, 35%, 32%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(27, 35%, 81%), inset 0 0 0 1px hsl(27, 35%, 81%) !important;
  --embed-border-end: 1px dotted !important;
  --embed-border-start: 0 !important;
  --embed-padding: 0 !important;
  --favorite-blue: hsl(246,  91%, 22%) !important;
  --file-header-background: hsl(27, 35%, 94%) !important;
  --file-header-background-focused: hsl(27, 35%, 94%) !important;
  --file-header-border: 1.5px solid hsl(27, 35%, 81%) !important;
  --file-header-font-size: 13.86667px !important;
  --file-header-justify: left !important;
  --file-line-width: 39em !important;
  --file-margins: 0.5em 32px !important;
  --flair-background: hsl(27,	50%,	95%) !important;
  --flair-color: hsl(27, 35%, 32%) !important;
  --floating-toc-background-color: hsl(27, 35%, 94%) !important;
  --floating-toc-font-color: hsl(27, 35%, 32%) !important;
  --floating-toc-header-background-color: hsl(27, 35%, 94%) !important;
  --floating-toc-hover-color: hsl(27, 50%, 95%) !important;
  --font-ui-large: 21.33333px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 13.86667px !important;
  --font-ui-smaller: 12.8px !important;
  --footnote-divider-color: hsl(27, 35%, 81%) !important;
  --footnote-divider-width: 1.5px !important;
  --footnote-gap: 0.5rem !important;
  --footnote-id-color: hsl(27, 35%, 32%) !important;
  --footnote-id-color-no-occurrences: hsl(27, 35%, 68%) !important;
  --footnote-id-delimiter: ")" !important;
  --footnote-input-background-active: hsl(27, 35%, 94%) !important;
  --footnote-line-height: 1.3 !important;
  --footnote-size: 16px !important;
  --graph-line: hsl(27, 35%, 32%) !important;
  --graph-node: hsl(27, 35%, 48%) !important;
  --graph-node-focused: hsl(27,	50%,	70%) !important;
  --graph-node-unresolved: hsl(27, 35%, 68%) !important;
  --graph-text: hsl(27, 35%, 32%) !important;
  --gray: hsl(27, 35%, 48%) !important;
  --h1-color: hsl(27, 35%, 32%) !important;
  --h2-color: hsl(27, 35%, 32%) !important;
  --h3-color: hsl(27, 35%, 32%) !important;
  --h4-color: hsl(27, 35%, 32%) !important;
  --h5-color: hsl(27, 35%, 32%) !important;
  --h5-line-height: 1.4em !important;
  --h6-color: hsl(27, 35%, 32%) !important;
  --h6-line-height: 1.4em !important;
  --header-height: 2em !important;
  --heading-formatting: hsl(27, 35%, 68%) !important;
  --heading-spacing: 0 !important;
  --highlight: hsl(27,	50%,	50%) !important;
  --highlighted-folder-background: hsl(27, 35%, 85%) !important;
  --highlighted-folder-color: yellow !important;
  --highlighted-folder-current-note-color: hsl(27,	50%,	50%) !important;
  --highlighted-folder-font-weight: 400 !important;
  --highlighted-folder-text-color: hsl(27, 35%, 32%) !important;
  --highlighted-folder-title-background: hsl(27,	50%,	70%) !important;
  --highlighted-folder-title-color: hsl(27, 50%, 96%) !important;
  --highlighted-parent-folder-background: hsl(27,	50%,	95%) !important;
  --highlighted-parent-folder-color: yellow !important;
  --highlighted-parent-folder-font-weight: 400 !important;
  --highlighted-parent-folder-text-color: hsl(27, 50%, 40%) !important;
  --hr-color: hsl(27, 35%, 81%) !important;
  --icon-color: hsl(27,	50%,	50%) !important;
  --icon-color-active: hsl(27, 35%, 89%) !important;
  --icon-color-focused: hsl(27, 35%, 32%) !important;
  --icon-color-hover: hsl(27, 50%, 95%) !important;
  --indentation-guide-color: hsl(27, 35%, 68%) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-title-color: hsl(27, 35%, 68%) !important;
  --inline-title-font: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --inline-title-line-height: 0em !important;
  --inline-title-size: 18px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 1.5px !important;
  --input-date-separator: hsl(27, 35%, 68%) !important;
  --input-placeholder-color: grey !important;
  --interactive-accent: hsl(27,	50%,	70%) !important;
  --interactive-accent-hover: hsl(27,	50%,	50%) !important;
  --interactive-accent-hsl: 27, 50%, 70% !important;
  --interactive-hover: hsl(27,	50%,	50%) !important;
  --interactive-normal: hsl(27,	50%,	95%) !important;
  --light: hsl(27, 35%, 94%) !important;
  --light-blue: hsl(211,  50%, 77%) !important;
  --lightgray: hsl(27, 35%, 89%) !important;
  --line-height-normal: 1.4em !important;
  --link-color: hsl(207, 35%, 50%) !important;
  --link-color-hover: hsl(27, 50%, 95%) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: hsl(207, 35%, 50%) !important;
  --link-external-color-hover: hsl(27,	50%,	50%) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #e93147 !important;
  --link-unresolved-decoration-color: hsla(27, 50%, 70%, 0.3) !important;
  --link-unresolved-filter: brightness(0.9) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.3em !important;
  --list-marker-color: hsl(27, 35%, 32%) !important;
  --list-marker-color-collapsed: hsl(27,	50%,	70%) !important;
  --list-marker-color-hover: hsl(27, 35%, 48%) !important;
  --list-spacing: 0.05rem !important;
  --list-spacing-1: 0.3rem !important;
  --list-spacing-2: 0.2rem !important;
  --list-spacing-3: 0.1rem !important;
  --list-spacing-below: 0.8rem !important;
  --menu-background: hsl(27, 35%, 89%) !important;
  --menu-border-color: hsl(27,	50%,	70%) !important;
  --menu-border-width: 1.5px !important;
  --metadata-background: hsl(27, 35%, 94%) !important;
  --metadata-border-color: hsl(27, 35%, 81%) !important;
  --metadata-border-radius: 7px !important;
  --metadata-divider-color: hsl(27, 35%, 81%) !important;
  --metadata-divider-width: 1 !important;
  --metadata-input-background-active: hsl(27, 35%, 94%) !important;
  --metadata-input-font-size: 13.86667px !important;
  --metadata-input-text-color: hsl(27, 35%, 32%) !important;
  --metadata-label-background-active: hsl(27, 35%, 94%) !important;
  --metadata-label-font-size: 13.86667px !important;
  --metadata-label-font-weight: 600 !important;
  --metadata-label-text-color: hsl(27, 35%, 48%) !important;
  --metadata-label-text-color-hover: hsl(27, 35%, 48%) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: hsl(27,	50%,	50%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(27, 35%, 32%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1.5px hsl(27,	50%,	70%) !important;
  --metadata-property-padding: 0em 0em 0em 0.3em !important;
  --metadata-sidebar-input-font-size: 13.86667px !important;
  --metadata-sidebar-label-font-size: 13.86667px !important;
  --modal-background: hsl(27, 35%, 94%) !important;
  --modal-border-color: hsl(27, 35%, 32%) !important;
  --modal-border-width: 1.5px !important;
  --modal-height: 88vh !important;
  --modal-max-height: 98vh !important;
  --nav-collapse-icon-color: hsl(27, 35%, 68%) !important;
  --nav-collapse-icon-color-collapsed: red !important;
  --nav-heading-color: hsl(27, 35%, 32%) !important;
  --nav-heading-color-collapsed: hsl(27, 35%, 68%) !important;
  --nav-heading-color-collapsed-hover: hsl(27, 35%, 48%) !important;
  --nav-heading-color-hover: hsl(27, 35%, 32%) !important;
  --nav-indentation-guide-color: hsl(27, 35%, 68%) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: hsl(27,	50%,	70%) !important;
  --nav-item-background-hover: hsl(27,	50%,	50%) !important;
  --nav-item-background-selected: hsl(27,	50%,	95%) !important;
  --nav-item-color: hsl(27, 35%, 32%) !important;
  --nav-item-color-active: hsl(27, 50%, 96%) !important;
  --nav-item-color-highlighted: hsl(27,	50%,	70%) !important;
  --nav-item-color-hover: hsl(27, 50%, 95%) !important;
  --nav-item-color-selected: hsl(27, 50%, 40%) !important;
  --nav-item-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-size: 13.86667px !important;
  --nav-tag-color: hsl(27, 35%, 68%) !important;
  --nav-tag-color-active: hsl(27, 35%, 48%) !important;
  --nav-tag-color-hover: hsl(27, 35%, 48%) !important;
  --neutral-100: hsl(  0,   0%, 100%) !important;
  --obsidian-violet: hsl(258,  88%, 66%) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: hsl(27, 35%, 94%) !important;
  --pdf-page-background: hsl(27, 35%, 94%) !important;
  --pdf-sidebar-background: hsl(27, 35%, 94%) !important;
  --pill-background-hover: hsl(27,	50%,	50%) !important;
  --pill-border-color: hsl(27, 35%, 81%) !important;
  --pill-border-color-hover: hsl(27,	50%,	70%) !important;
  --pill-border-width: 1.5px !important;
  --pill-color: hsl(27, 35%, 48%) !important;
  --pill-color-hover: hsl(27, 50%, 95%) !important;
  --pill-color-remove: hsl(27,	50%,	70%) !important;
  --pill-color-remove-hover: hsl(27, 50%, 95%) !important;
  --popover-font-size: 14.4px !important;
  --popover-height: 50vh !important;
  --popover-width: 46rem !important;
  --prompt-background: hsl(27, 35%, 94%) !important;
  --prompt-border-color: hsl(27, 35%, 32%) !important;
  --prompt-border-width: 1.5px !important;
  --prompt-max-height: 80vh !important;
  --raised-background: color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent) linear-gradient(hsl(27, 35%, 94%), color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent)) !important;
  --ribbon-background: hsl(27, 35%, 89%) !important;
  --ribbon-background-collapsed: hsl(27, 35%, 94%) !important;
  --royal-blue: hsl(240, 100%, 32%) !important;
  --search-clear-button-color: hsl(27, 35%, 48%) !important;
  --search-icon-color: hsl(27,	50%,	50%) !important;
  --search-result-background: hsl(27, 35%, 94%) !important;
  --secondary: hsl(27,	50%,	70%) !important;
  --setting-group-heading-color: hsl(27, 35%, 32%) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-border-color: hsl(27, 35%, 81%) !important;
  --sky-blue: hsl(192, 100%, 57%) !important;
  --slider-thumb-border-color: hsl(27,	50%,	70%) !important;
  --slider-thumb-border-width: 1.5px !important;
  --slider-track-background: hsl(27, 35%, 81%) !important;
  --solarized-base0: hsl(186,   8%, 55%) !important;
  --solarized-base00: hsl(196,  13%, 45%) !important;
  --solarized-base01: hsl(194,  14%, 40%) !important;
  --solarized-base02: hsl(192,  81%, 14%) !important;
  --solarized-base03: hsl(192, 100%, 11%) !important;
  --solarized-base1: hsl(180,   7%, 60%) !important;
  --solarized-base2: hsl( 46,  42%, 88%) !important;
  --solarized-base3: hsl( 44,  87%, 94%) !important;
  --solarized-blue: hsl(205,  69%, 49%) !important;
  --solarized-cyan: hsl(175,  59%, 40%) !important;
  --solarized-green: hsl( 68, 100%, 30%) !important;
  --solarized-magenta: hsl(331,  64%, 52%) !important;
  --solarized-orange: hsl( 18 , 80%, 44%) !important;
  --solarized-red: hsl(  1,  71%, 52%) !important;
  --solarized-violet: hsl(237,  43%, 60%) !important;
  --solarized-yellow: hsl( 45, 100%, 35%) !important;
  --stabilo-bleu-clair: hsl(196,  70%, 84%) !important;
  --stabilo-bleu-foncé: hsl(197,  70%, 54%) !important;
  --stabilo-jaune-clair: hsl( 48,  90%, 85%) !important;
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%) !important;
  --stabilo-orange-clair: hsl( 30, 100%, 75%) !important;
  --stabilo-orange-foncé: hsl( 30,  89%, 59%) !important;
  --stabilo-rose-clair: hsl(347,  78%, 80%) !important;
  --stabilo-rose-foncé: hsl(352,  77%, 62%) !important;
  --stabilo-vert-clair: hsl(146,  55%, 80%) !important;
  --stabilo-vert-foncé: hsl(161,  99%, 38%) !important;
  --stabilo-violet-clair: hsl(281,  29%, 64%) !important;
  --stabilo-violet-foncé: hsl(330,  68%, 51%) !important;
  --status-bar-background: hsl(27,	50%,	95%) !important;
  --status-bar-border-color: hsl(27,	50%,	70%) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13.86667px !important;
  --status-bar-radius: 4px !important;
  --status-bar-text-color: hsl(27, 50%, 40%) !important;
  --suggestion-background: hsl(27, 35%, 94%) !important;
  --tab-background-active: hsl(27, 35%, 94%) !important;
  --tab-container-background: hsl(27, 35%, 85%) !important;
  --tab-divider-color: hsl(27,	50%,	50%) !important;
  --tab-font-size: 13.86667px !important;
  --tab-outline-color: hsl(27, 35%, 81%) !important;
  --tab-stacked-font-size: 13.86667px !important;
  --tab-stacked-header-width: 2em !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: hsl(27, 35%, 89%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(27, 35%, 89%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(27,	50%,	70%) !important;
  --tab-text-color: hsl(27, 35%, 48%) !important;
  --tab-text-color-active: hsl(27, 35%, 48%) !important;
  --tab-text-color-focused: hsl(27, 35%, 48%) !important;
  --tab-text-color-focused-active: hsl(27, 35%, 48%) !important;
  --tab-text-color-focused-active-current: hsl(27,	50%,	50%) !important;
  --tab-text-color-focused-highlighted: hsl(27,	50%,	70%) !important;
  --table-add-button-border-color: hsl(27, 35%, 81%) !important;
  --table-background: hsl(27, 35%, 91%) !important;
  --table-border-color: hsl(27, 35%, 32%) !important;
  --table-drag-handle-background-active: hsl(27,	50%,	70%) !important;
  --table-drag-handle-color: hsl(27, 35%, 68%) !important;
  --table-drag-handle-color-active: hsl(27, 50%, 96%) !important;
  --table-header-background: hsl(27, 35%, 92%) !important;
  --table-header-background-hover: hsl(27, 35%, 92%) !important;
  --table-header-border-color: hsl(27, 35%, 32%) !important;
  --table-header-color: hsl(27, 35%, 32%) !important;
  --table-header-size: 16.2px !important;
  --table-row-alt-background: hsl(27, 35%, 95%) !important;
  --table-row-alt-background-hover: hsl(27, 35%, 95%) !important;
  --table-row-background-hover: hsl(27, 35%, 91%) !important;
  --table-selection: hsla(27, 50%, 70%, 0.1) !important;
  --table-selection-border-color: hsl(27,	50%,	70%) !important;
  --table-text-size: 16.2px !important;
  --tag-background: hsl(27,	50%,	70%) !important;
  --tag-background-hover: hsl(27,	50%,	50%) !important;
  --tag-border-color: hsla(27, 50%, 70%, 0.15) !important;
  --tag-border-color-hover: hsla(27, 50%, 70%, 0.15) !important;
  --tag-color: hsl(27, 50%, 96%) !important;
  --tag-color-hover: hsl(27, 50%, 95%) !important;
  --tertiary: hsl(27, 50%, 95%) !important;
  --text-accent: hsl(27,	50%,	70%) !important;
  --text-accent-hover: hsl(27, 50%, 95%) !important;
  --text-faint: hsl(27, 35%, 68%) !important;
  --text-muted: hsl(27, 35%, 48%) !important;
  --text-normal: hsl(27, 35%, 32%) !important;
  --text-on-accent: hsl(27, 50%, 96%) !important;
  --text-on-accent-inverted: hsl(27,	50%,	50%) !important;
  --text-selection: hsla(27, 35%, 40%, 0.2) !important;
  --textHighlight: hsl(27,	50%,	50%) !important;
  --titlebar-background: #333 !important;
  --titlebar-background-focused: hsl(27, 35%, 85%) !important;
  --titlebar-border-color: hsl(27, 35%, 81%) !important;
  --titlebar-text-color: hsl(27, 35%, 48%) !important;
  --titlebar-text-color-focused: hsl(27, 35%, 32%) !important;
  --toggle-thumb-color: hsl(27, 35%, 89%) !important;
  --traffic-lights-offset-x: 2em !important;
  --traffic-lights-offset-y: 2em !important;
  --vault-profile-color: hsl(27,	50%,	50%) !important;
  --vault-profile-color-hover: hsl(27, 50%, 95%) !important;
  --vault-profile-font-size: 21.33333px !important;
  --vault-profile-font-weight: 700 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 215, 203);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(247, 242, 238);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 239, 234);
  border-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(245, 239, 234);
  border-color: rgb(224, 205, 190);
  border-radius: 7px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(217, 175, 140);
  border-radius: 27.7333px;
  color: rgb(250, 244, 240);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 226, 217);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 215, 203);
  border-left-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body del {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(110, 79, 53);
  font-size: 13.8667px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 79, 53);
  border-radius: 4.8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(110, 79, 53);
  border-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body p {
  color: rgb(165, 118, 80);
  outline: rgb(165, 118, 80) none 0px;
  text-decoration-color: rgb(165, 118, 80);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration-color: rgb(83, 132, 172);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration-color: rgb(83, 132, 172);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(233, 49, 71);
  filter: brightness(0.9);
  outline: rgb(233, 49, 71) none 0px;
  text-decoration: rgba(217, 175, 140, 0.3);
  text-decoration-color: rgba(217, 175, 140, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body dt {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ol > li {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ul > li {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(202, 171, 145);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(252, 250, 248);
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body table {
  color: rgb(110, 79, 53);
  margin-top: 8px;
  width: 227.453px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(240, 231, 224);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(247, 242, 238);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body tr {
  background-color: rgb(242, 234, 227);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-width: 1px;
  border-left-color: rgb(110, 79, 53);
  border-left-width: 1px;
  border-right-color: rgb(110, 79, 53);
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body figcaption {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-left-width: 0px;
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-top-color: rgb(110, 79, 53);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 79, 53);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  margin-left: -20.4px;
  width: 13.5938px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}`,
    callouts: `html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
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
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-top-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 226, 217);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(191, 121, 64);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(217, 175, 140);
  border-bottom-color: rgba(217, 175, 140, 0.15);
  border-bottom-left-radius: 27.7333px;
  border-bottom-right-radius: 27.7333px;
  border-left-color: rgba(217, 175, 140, 0.15);
  border-right-color: rgba(217, 175, 140, 0.15);
  border-top-color: rgba(217, 175, 140, 0.15);
  border-top-left-radius: 27.7333px;
  border-top-right-radius: 27.7333px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(250, 244, 240);
}

html[saved-theme="light"] body h1 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h2 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(202, 171, 145);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body h3 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h4 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h5 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h6 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(202, 171, 145);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(110, 79, 53);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(249, 242, 236);
  border-bottom-color: rgb(217, 175, 140);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(217, 175, 140);
  border-right-color: rgb(217, 175, 140);
  border-right-width: 1px;
  border-top-color: rgb(217, 175, 140);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(153, 97, 51);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(153, 97, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 79, 53);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(191, 121, 64);
  stroke: rgb(191, 121, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(202, 171, 145);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(224, 205, 190);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-top-color: rgb(224, 205, 190);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(165, 118, 80);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(249, 242, 236);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body abbr {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body sub {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body summary {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body sup {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(217, 175, 140);
  border-bottom-color: rgba(217, 175, 140, 0.15);
  border-left-color: rgba(217, 175, 140, 0.15);
  border-right-color: rgba(217, 175, 140, 0.15);
  border-top-color: rgba(217, 175, 140, 0.15);
  color: rgb(250, 244, 240);
}`,
  },
};
