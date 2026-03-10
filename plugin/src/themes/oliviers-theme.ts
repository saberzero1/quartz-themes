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
  --OT-YAML-color: rgb(159, 138, 96) !important;
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif !important;
  --OT-blockquote-font-size: 17.1px !important;
  --OT-button-OFF-bg: rgb(89, 72, 38) !important;
  --OT-button-ON-bg: rgb(194, 133, 10) !important;
  --OT-button-background-hover: rgb(245, 184, 61) !important;
  --OT-button-background-normal: rgb(78, 53, 4) !important;
  --OT-button-cta-background-normal: rgb(194, 133, 10) !important;
  --OT-button-cta-text-normal: rgb(36, 24, 0) !important;
  --OT-button-text-hover: rgb(36, 24, 0) !important;
  --OT-button-text-normal: rgb(219, 184, 112) !important;
  --OT-calendar-day-color: rgb(250, 219, 158) !important;
  --OT-calendar-today-color: rgb(250, 219, 158) !important;
  --OT-callout-gallery-gap: 5px !important;
  --OT-clickable-icon-in-header: rgb(245, 184, 61) !important;
  --OT-clickable-icon-in-tab-header: rgb(245, 184, 61) !important;
  --OT-clickable-icon-on-base-20: rgb(245, 184, 61) !important;
  --OT-color-muted-on-accent-1: rgb(122, 82, 0) !important;
  --OT-color-muted-on-accent-2: rgb(71, 48, 0) !important;
  --OT-color-on-accent-1: rgb(36, 24, 0) !important;
  --OT-color-on-accent-2: rgb(36, 24, 0) !important;
  --OT-color-on-accent-3: rgb(219, 184, 112) !important;
  --OT-editMode-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-font-family: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-line-height: 1.4em !important;
  --OT-editMode-line-width: 44em !important;
  --OT-editMode-tableText-percent: 90 !important;
  --OT-editMode-text-size: 18px !important;
  --OT-img-max-height: 33rem !important;
  --OT-kanban-font: Uberhand Pro !important;
  --OT-kanban-font-size: 16px !important;
  --OT-kbd: rgb(250, 219, 158) !important;
  --OT-kbd-background: darkslate !important;
  --OT-menu-text-color: rgb(232, 196, 125) !important;
  --OT-menu-text-muted: rgb(153, 133, 92) !important;
  --OT-metadata-label-width: 9em !important;
  --OT-metadata-property-icon: rgb(245, 184, 61) !important;
  --OT-nav-folder-title-color: rgb(250, 219, 158) !important;
  --OT-nav-item-muted: rgb(153, 133, 92) !important;
  --OT-nav-item-vertical-padding: 4px !important;
  --OT-pill-background: rgb(194, 133, 10) !important;
  --OT-pill-color: rgb(36, 24, 0) !important;
  --OT-readingMode-line-height: 1.4em !important;
  --OT-readingMode-line-width: 39em !important;
  --OT-readingMode-tableText-percent: 90 !important;
  --OT-readingMode-text-size: 18px !important;
  --OT-ribbon-icon-color-sidebar-is-collapsed: rgb(245, 184, 61) !important;
  --OT-ribbon-icon-color-sidebar-is-open: rgb(245, 184, 61) !important;
  --OT-search-settings-item-name: rgb(250, 219, 158) !important;
  --OT-setting-item-description: rgb(153, 133, 92) !important;
  --OT-setting-item-name: rgb(250, 219, 158) !important;
  --OT-sidebarTab-background-active: rgb(194, 133, 10) !important;
  --OT-sidebarTab-background-active-hover: rgb(245, 184, 61) !important;
  --OT-space-below-h1: 1.0rem !important;
  --OT-space-below-h2: 1.5rem !important;
  --OT-space-below-h3: 0.4rem !important;
  --OT-space-below-h4: 0.2rem !important;
  --OT-space-below-h5: 0.2rem !important;
  --OT-space-below-h6: 0.0rem !important;
  --OT-stabilo-mark: rgb(251, 237, 182) !important;
  --OT-stabilo-text: rgb(32, 28, 19) !important;
  --OT-status-bar-padding: 6px !important;
  --OT-syntax-markers: rgb(128, 111, 77) !important;
  --OT-tab-background-active-hover: rgb(245, 184, 61) !important;
  --OT-table-alt-background: rgb(45, 39, 27) !important;
  --OT-table-background: rgb(38, 33, 23) !important;
  --OT-theme-h: 40 !important;
  --OT-theme-s: 25% !important;
  --OT-tree-item-flair-background: rgb(78, 53, 4) !important;
  --OT-tree-item-flair-color: rgb(219, 184, 112) !important;
  --OT-vertical-tab-header-group-title: rgb(153, 133, 92) !important;
  --OT-view-header-title-focus-color: rgb(245, 184, 61) !important;
  --OT-view-header-title-no-focus-color: rgb(153, 133, 92) !important;
  --accent-h: 40 !important;
  --accent-l: 40% !important;
  --accent-s: 90% !important;
  --background-modifier-active-hover: rgb(245, 184, 61) !important;
  --background-modifier-border: rgb(70, 61, 42) !important;
  --background-modifier-border-focus: rgb(89, 77, 54) !important;
  --background-modifier-border-hover: rgb(194, 133, 10) !important;
  --background-modifier-form-field: rgb(32, 28, 19) !important;
  --background-modifier-form-field-hover: rgb(32, 28, 19) !important;
  --background-modifier-hover: rgb(245, 184, 61) !important;
  --background-modifier-message: rgb(245, 184, 61) !important;
  --background-modifier-success: rgb(106, 245, 161) !important;
  --background-modifier-success-rgb: 106, 245, 161 !important;
  --background-primary: rgb(32, 28, 19) !important;
  --background-secondary: rgb(45, 39, 27) !important;
  --bases-cards-background: rgb(32, 28, 19) !important;
  --bases-cards-border-width: 1.5px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(70, 61, 42) !important;
  --bases-cards-shadow-hover: 0 0 0 2px rgb(194, 133, 10) !important;
  --bases-embed-border-color: rgb(70, 61, 42) !important;
  --bases-group-heading-property-color: rgb(153, 133, 92) !important;
  --bases-group-heading-property-size: 12.8px !important;
  --bases-header-border-width: 0 0 1.5px 0 !important;
  --bases-table-border-color: rgb(64, 55, 38) !important;
  --bases-table-cell-background-active: rgb(32, 28, 19) !important;
  --bases-table-cell-background-disabled: rgb(212, 207, 196) !important;
  --bases-table-cell-background-selected: rgba(194, 133, 10, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(89, 77, 54) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(194, 133, 10) !important;
  --bases-table-column-border-width: 1.5px !important;
  --bases-table-container-border-width: 1.5px !important;
  --bases-table-header-background: rgb(32, 28, 19) !important;
  --bases-table-header-background-hover: rgb(245, 184, 61) !important;
  --bases-table-header-color: rgb(219, 184, 112) !important;
  --bases-table-row-background-hover: rgb(45, 39, 27) !important;
  --bases-table-row-border-width: 1.5px !important;
  --bases-table-summary-background: rgb(32, 28, 19) !important;
  --bases-table-summary-background-hover: rgb(245, 184, 61) !important;
  --blockquote-background-color: rgb(51, 44, 31) !important;
  --blockquote-border-color: rgb(194, 133, 10) !important;
  --blockquote-border-thickness: 0 !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blue: rgb(45, 29, 191) !important;
  --border-width: 1.5px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: rgb(32, 28, 19) !important;
  --canvas-card-label-color: rgb(128, 111, 77) !important;
  --canvas-dot-pattern: rgb(89, 77, 54) !important;
  --caret-color: red !important;
  --checkbox-border-color: rgb(250, 219, 158) !important;
  --checkbox-border-color-hover: rgb(245, 184, 61) !important;
  --checkbox-color: rgb(250, 219, 158) !important;
  --checkbox-color-hover: rgb(245, 184, 61) !important;
  --checkbox-marker-color: rgb(32, 28, 19) !important;
  --checkbox-radius: 0.3rem !important;
  --checkbox-size: 0.85rem !important;
  --checklist-done-color: rgb(128, 111, 77) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(38, 33, 23) !important;
  --code-border-color: rgb(250, 219, 158) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgb(245, 184, 61) !important;
  --code-comment: rgb(128, 111, 77) !important;
  --code-normal: rgb(250, 219, 158) !important;
  --code-operator: rgb(250, 219, 158) !important;
  --code-punctuation: rgb(153, 133, 92) !important;
  --code-size: 0.8em !important;
  --code-string: rgb(117, 158, 240) !important;
  --code-tag: rgb(128, 111, 77) !important;
  --collapse-icon-color: rgb(194, 133, 10) !important;
  --collapse-icon-color-collapsed: rgb(194, 133, 10) !important;
  --color-accent: rgb(194, 133, 10) !important;
  --color-accent-1: rgb(245, 184, 61) !important;
  --color-accent-2: rgb(194, 133, 10) !important;
  --color-accent-3: rgb(78, 53, 4) !important;
  --color-accent-hsl: 40, 90%, 40% !important;
  --color-base-00: rgb(32, 28, 19) !important;
  --color-base-05: rgb(54, 47, 33) !important;
  --color-base-100: rgb(250, 219, 158) !important;
  --color-base-20: rgb(45, 39, 27) !important;
  --color-base-35: rgb(70, 61, 42) !important;
  --color-base-40: rgb(89, 77, 54) !important;
  --color-base-50: rgb(128, 111, 77) !important;
  --dark: rgb(250, 219, 158) !important;
  --dark-blue: rgb(33, 42, 110) !important;
  --darkgray: rgb(250, 219, 158) !important;
  --divider-color: rgb(70, 61, 42) !important;
  --divider-color-hover: rgb(194, 133, 10) !important;
  --divider-width: 2px !important;
  --dropdown-background-hover: rgb(70, 61, 42) !important;
  --dynamic-outline-active-heading-background: rgb(78, 53, 4) !important;
  --dynamic-outline-background: rgb(45, 39, 27) !important;
  --dynamic-outline-background-accent: lime !important;
  --dynamic-outline-background-hover: rgb(194, 133, 10) !important;
  --dynamic-outline-background-modifier-hover-lighter: lime !important;
  --dynamic-outline-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h1-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h2-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h3-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h4-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h5-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-h6-text-color: rgb(232, 196, 125) !important;
  --dynamic-outline-text-color: rgb(232, 196, 125) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(70, 61, 42), inset 0 0 0 1px rgb(70, 61, 42) !important;
  --embed-border-end: 1px dotted !important;
  --embed-border-start: 0 !important;
  --embed-padding: 0 !important;
  --favorite-blue: rgb(15, 5, 107) !important;
  --file-header-background: rgb(32, 28, 19) !important;
  --file-header-background-focused: rgb(32, 28, 19) !important;
  --file-header-border: 1.5px solid rgb(70, 61, 42) !important;
  --file-header-font-size: 13.86667px !important;
  --file-header-justify: left !important;
  --file-line-width: 39em !important;
  --file-margins: 0.5em 32px !important;
  --flair-color: rgb(250, 219, 158) !important;
  --floating-toc-background-color: rgb(32, 28, 19) !important;
  --floating-toc-font-color: rgb(232, 196, 125) !important;
  --floating-toc-header-background-color: rgb(32, 28, 19) !important;
  --floating-toc-hover-color: rgb(36, 24, 0) !important;
  --font-ui-large: 21.33333px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 13.86667px !important;
  --font-ui-smaller: 12.8px !important;
  --footnote-divider-color: rgb(70, 61, 42) !important;
  --footnote-divider-width: 1.5px !important;
  --footnote-gap: 0.5rem !important;
  --footnote-id-color: rgb(250, 219, 158) !important;
  --footnote-id-color-no-occurrences: rgb(128, 111, 77) !important;
  --footnote-id-delimiter: ")" !important;
  --footnote-input-background-active: rgb(32, 28, 19) !important;
  --footnote-line-height: 1.3 !important;
  --footnote-size: 16px !important;
  --graph-line: rgb(250, 219, 158) !important;
  --graph-node: rgb(153, 133, 92) !important;
  --graph-node-focused: rgb(245, 184, 61) !important;
  --graph-node-unresolved: rgb(128, 111, 77) !important;
  --graph-text: rgb(250, 219, 158) !important;
  --gray: rgb(153, 133, 92) !important;
  --h1-color: rgb(250, 219, 158) !important;
  --h2-color: rgb(250, 219, 158) !important;
  --h3-color: rgb(250, 219, 158) !important;
  --h4-color: rgb(250, 219, 158) !important;
  --h5-color: rgb(250, 219, 158) !important;
  --h5-line-height: 1.4em !important;
  --h6-color: rgb(250, 219, 158) !important;
  --h6-line-height: 1.4em !important;
  --header-height: 2em !important;
  --heading-formatting: rgb(128, 111, 77) !important;
  --heading-spacing: 0 !important;
  --highlight: rgb(245, 184, 61) !important;
  --highlighted-folder-background: rgb(54, 47, 33) !important;
  --highlighted-folder-color: yellow !important;
  --highlighted-folder-current-note-color: rgb(245, 184, 61) !important;
  --highlighted-folder-font-weight: 400 !important;
  --highlighted-folder-text-color: rgb(232, 196, 125) !important;
  --highlighted-folder-title-background: rgb(194, 133, 10) !important;
  --highlighted-folder-title-color: rgb(36, 24, 0) !important;
  --highlighted-parent-folder-background: rgb(78, 53, 4) !important;
  --highlighted-parent-folder-color: yellow !important;
  --highlighted-parent-folder-font-weight: 400 !important;
  --highlighted-parent-folder-text-color: rgb(219, 184, 112) !important;
  --hr-color: rgb(70, 61, 42) !important;
  --icon-color: rgb(245, 184, 61) !important;
  --icon-color-active: rgb(45, 39, 27) !important;
  --icon-color-focused: rgb(250, 219, 158) !important;
  --icon-color-hover: rgb(36, 24, 0) !important;
  --indentation-guide-color: rgb(128, 111, 77) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-title-color: rgb(128, 111, 77) !important;
  --inline-title-font: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --inline-title-line-height: 0em !important;
  --inline-title-size: 18px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 1.5px !important;
  --input-date-separator: rgb(128, 111, 77) !important;
  --input-placeholder-color: grey !important;
  --interactive-accent: rgb(194, 133, 10) !important;
  --interactive-accent-hover: rgb(245, 184, 61) !important;
  --interactive-accent-hsl: 40, 90%, 40% !important;
  --interactive-hover: rgb(70, 61, 42) !important;
  --light: rgb(32, 28, 19) !important;
  --light-blue: rgb(167, 195, 226) !important;
  --lightgray: rgb(45, 39, 27) !important;
  --line-height-normal: 1.4em !important;
  --link-color: rgb(117, 158, 240) !important;
  --link-color-hover: rgb(36, 24, 0) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(117, 158, 240) !important;
  --link-external-color-hover: rgb(245, 184, 61) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #fb464c !important;
  --link-unresolved-decoration-color: rgba(194, 133, 10, 0.3) !important;
  --link-unresolved-filter: brightness(0.9) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.3em !important;
  --list-marker-color: rgb(250, 219, 158) !important;
  --list-marker-color-collapsed: rgb(245, 184, 61) !important;
  --list-marker-color-hover: rgb(153, 133, 92) !important;
  --list-spacing: 0.05rem !important;
  --list-spacing-1: 0.3rem !important;
  --list-spacing-2: 0.2rem !important;
  --list-spacing-3: 0.1rem !important;
  --list-spacing-below: 0.8rem !important;
  --menu-background: rgb(45, 39, 27) !important;
  --menu-border-color: rgb(194, 133, 10) !important;
  --menu-border-width: 1.5px !important;
  --metadata-background: rgb(32, 28, 19) !important;
  --metadata-border-color: rgb(70, 61, 42) !important;
  --metadata-border-radius: 7px !important;
  --metadata-divider-color: rgb(70, 61, 42) !important;
  --metadata-divider-width: 1 !important;
  --metadata-input-background-active: rgb(32, 28, 19) !important;
  --metadata-input-font-size: 13.86667px !important;
  --metadata-input-text-color: rgb(250, 219, 158) !important;
  --metadata-label-background-active: rgb(32, 28, 19) !important;
  --metadata-label-font-size: 13.86667px !important;
  --metadata-label-font-weight: 600 !important;
  --metadata-label-text-color: rgb(153, 133, 92) !important;
  --metadata-label-text-color-hover: rgb(153, 133, 92) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgb(245, 184, 61) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(89, 77, 54) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1.5px rgb(194, 133, 10) !important;
  --metadata-property-padding: 0em 0em 0em 0.3em !important;
  --metadata-sidebar-input-font-size: 13.86667px !important;
  --metadata-sidebar-label-font-size: 13.86667px !important;
  --modal-background: rgb(32, 28, 19) !important;
  --modal-border-color: rgb(89, 77, 54) !important;
  --modal-border-width: 1.5px !important;
  --modal-height: 88vh !important;
  --modal-max-height: 98vh !important;
  --nav-collapse-icon-color: rgb(128, 111, 77) !important;
  --nav-collapse-icon-color-collapsed: red !important;
  --nav-heading-color: rgb(250, 219, 158) !important;
  --nav-heading-color-collapsed: rgb(128, 111, 77) !important;
  --nav-heading-color-collapsed-hover: rgb(153, 133, 92) !important;
  --nav-heading-color-hover: rgb(250, 219, 158) !important;
  --nav-indentation-guide-color: rgb(128, 111, 77) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: rgb(194, 133, 10) !important;
  --nav-item-background-hover: rgb(245, 184, 61) !important;
  --nav-item-background-selected: rgb(78, 53, 4) !important;
  --nav-item-color: rgb(232, 196, 125) !important;
  --nav-item-color-active: rgb(36, 24, 0) !important;
  --nav-item-color-highlighted: rgb(245, 184, 61) !important;
  --nav-item-color-hover: rgb(36, 24, 0) !important;
  --nav-item-color-selected: rgb(219, 184, 112) !important;
  --nav-item-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-size: 13.86667px !important;
  --nav-tag-color: rgb(128, 111, 77) !important;
  --nav-tag-color-active: rgb(153, 133, 92) !important;
  --nav-tag-color-hover: rgb(153, 133, 92) !important;
  --neutral-100: rgb(255, 255, 255) !important;
  --obsidian-violet: rgb(138, 92, 245) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: rgb(32, 28, 19) !important;
  --pdf-page-background: rgb(32, 28, 19) !important;
  --pdf-shadow: 0 0 0 1px rgb(70, 61, 42) !important;
  --pdf-sidebar-background: rgb(32, 28, 19) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(70, 61, 42) !important;
  --pill-background-hover: rgb(245, 184, 61) !important;
  --pill-border-color: rgb(70, 61, 42) !important;
  --pill-border-color-hover: rgb(194, 133, 10) !important;
  --pill-border-width: 1.5px !important;
  --pill-color: rgb(153, 133, 92) !important;
  --pill-color-hover: rgb(36, 24, 0) !important;
  --pill-color-remove: rgb(194, 133, 10) !important;
  --pill-color-remove-hover: rgb(36, 24, 0) !important;
  --popover-font-size: 14.4px !important;
  --popover-height: 50vh !important;
  --popover-width: 46rem !important;
  --prompt-background: rgb(32, 28, 19) !important;
  --prompt-border-color: rgb(89, 77, 54) !important;
  --prompt-border-width: 1.5px !important;
  --prompt-max-height: 80vh !important;
  --ribbon-background: rgb(45, 39, 27) !important;
  --ribbon-background-collapsed: rgb(32, 28, 19) !important;
  --royal-blue: rgb(0, 0, 163) !important;
  --search-clear-button-color: rgb(153, 133, 92) !important;
  --search-icon-color: rgb(245, 184, 61) !important;
  --search-result-background: rgb(32, 28, 19) !important;
  --secondary: rgb(245, 184, 61) !important;
  --setting-group-heading-color: rgb(250, 219, 158) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-border-color: rgb(70, 61, 42) !important;
  --sky-blue: rgb(36, 211, 255) !important;
  --slider-thumb-border-color: rgb(194, 133, 10) !important;
  --slider-thumb-border-width: 1.5px !important;
  --slider-track-background: rgb(70, 61, 42) !important;
  --solarized-base0: rgb(131, 148, 149) !important;
  --solarized-base00: rgb(100, 122, 130) !important;
  --solarized-base01: rgb(88, 110, 116) !important;
  --solarized-base02: rgb(7, 53, 65) !important;
  --solarized-base03: rgb(0, 45, 56) !important;
  --solarized-base1: rgb(146, 160, 160) !important;
  --solarized-base2: rgb(237, 231, 212) !important;
  --solarized-base3: rgb(253, 246, 226) !important;
  --solarized-blue: rgb(39, 139, 211) !important;
  --solarized-cyan: rgb(42, 162, 152) !important;
  --solarized-green: rgb(133, 153, 0) !important;
  --solarized-magenta: rgb(211, 54, 130) !important;
  --solarized-orange: rgb(202, 76, 22) !important;
  --solarized-red: rgb(220, 49, 46) !important;
  --solarized-violet: rgb(109, 114, 197) !important;
  --solarized-yellow: rgb(179, 134, 0) !important;
  --stabilo-bleu-clair: rgb(186, 228, 243) !important;
  --stabilo-bleu-foncé: rgb(56, 173, 220) !important;
  --stabilo-jaune-clair: rgb(251, 237, 182) !important;
  --stabilo-jaune-foncé: rgb(241, 232, 65) !important;
  --stabilo-orange-clair: rgb(255, 191, 128) !important;
  --stabilo-orange-foncé: rgb(243, 150, 57) !important;
  --stabilo-rose-clair: rgb(244, 164, 181) !important;
  --stabilo-rose-foncé: rgb(233, 83, 103) !important;
  --stabilo-vert-clair: rgb(176, 232, 200) !important;
  --stabilo-vert-foncé: rgb(1, 193, 132) !important;
  --stabilo-violet-clair: rgb(173, 137, 190) !important;
  --stabilo-violet-foncé: rgb(215, 45, 130) !important;
  --status-bar-background: rgb(78, 53, 4) !important;
  --status-bar-border-color: rgb(194, 133, 10) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13.86667px !important;
  --status-bar-radius: 4px !important;
  --status-bar-text-color: rgb(219, 184, 112) !important;
  --suggestion-background: rgb(32, 28, 19) !important;
  --tab-background-active: rgb(32, 28, 19) !important;
  --tab-container-background: rgb(54, 47, 33) !important;
  --tab-divider-color: rgb(245, 184, 61) !important;
  --tab-font-size: 13.86667px !important;
  --tab-outline-color: rgb(70, 61, 42) !important;
  --tab-stacked-font-size: 13.86667px !important;
  --tab-stacked-header-width: 2em !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: rgb(45, 39, 27) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(45, 39, 27), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(194, 133, 10) !important;
  --tab-text-color: rgb(153, 133, 92) !important;
  --tab-text-color-active: rgb(153, 133, 92) !important;
  --tab-text-color-focused: rgb(153, 133, 92) !important;
  --tab-text-color-focused-active: rgb(153, 133, 92) !important;
  --tab-text-color-focused-active-current: rgb(245, 184, 61) !important;
  --tab-text-color-focused-highlighted: rgb(245, 184, 61) !important;
  --table-add-button-border-color: rgb(70, 61, 42) !important;
  --table-background: rgb(45, 39, 27) !important;
  --table-border-color: rgb(64, 55, 38) !important;
  --table-drag-handle-background-active: rgb(194, 133, 10) !important;
  --table-drag-handle-color: rgb(128, 111, 77) !important;
  --table-drag-handle-color-active: rgb(36, 24, 0) !important;
  --table-header-background: rgb(51, 44, 31) !important;
  --table-header-background-hover: rgb(51, 44, 31) !important;
  --table-header-border-color: rgb(64, 55, 38) !important;
  --table-header-color: rgb(250, 219, 158) !important;
  --table-header-size: 16.2px !important;
  --table-row-alt-background: rgb(38, 33, 23) !important;
  --table-row-alt-background-hover: rgb(38, 33, 23) !important;
  --table-row-background-hover: rgb(45, 39, 27) !important;
  --table-selection: rgba(194, 133, 10, 0.1) !important;
  --table-selection-border-color: rgb(194, 133, 10) !important;
  --table-text-size: 16.2px !important;
  --tag-background: rgb(194, 133, 10) !important;
  --tag-background-hover: rgb(245, 184, 61) !important;
  --tag-border-color: rgba(194, 133, 10, 0.15) !important;
  --tag-border-color-hover: rgba(194, 133, 10, 0.15) !important;
  --tag-color: rgb(36, 24, 0) !important;
  --tag-color-hover: rgb(36, 24, 0) !important;
  --tertiary: rgb(36, 24, 0) !important;
  --text-accent: rgb(245, 184, 61) !important;
  --text-accent-hover: rgb(36, 24, 0) !important;
  --text-faint: rgb(128, 111, 77) !important;
  --text-muted: rgb(153, 133, 92) !important;
  --text-normal: rgb(250, 219, 158) !important;
  --text-on-accent: rgb(36, 24, 0) !important;
  --text-on-accent-inverted: rgb(245, 184, 61) !important;
  --text-selection: rgba(245, 184, 61, 0.2) !important;
  --textHighlight: rgb(245, 184, 61) !important;
  --titlebar-background: #333 !important;
  --titlebar-background-focused: rgb(54, 47, 33) !important;
  --titlebar-border-color: rgb(70, 61, 42) !important;
  --titlebar-text-color: rgb(153, 133, 92) !important;
  --titlebar-text-color-focused: rgb(250, 219, 158) !important;
  --toggle-thumb-color: rgb(45, 39, 27) !important;
  --traffic-lights-offset-x: 2em !important;
  --traffic-lights-offset-y: 2em !important;
  --vault-profile-color: rgb(245, 184, 61) !important;
  --vault-profile-color-hover: rgb(36, 24, 0) !important;
  --vault-profile-font-size: 21.33333px !important;
  --vault-profile-font-weight: 700 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 47, 33);
  color: rgb(250, 219, 158);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 39, 27);
  color: rgb(250, 219, 158);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(54, 47, 33);
  border-left-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

body div#quartz-root {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > em, em {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > i, i {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .page article p > strong, strong {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .text-highlight {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body del {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: line-through rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body p {
  color: rgb(153, 133, 92);
  outline: rgb(153, 133, 92) none 0px;
  text-decoration: rgb(153, 133, 92);
  text-decoration-color: rgb(153, 133, 92);
}`,
    links: `body a.external, footer a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration: rgb(117, 158, 240);
  text-decoration-color: rgb(117, 158, 240);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration: rgb(117, 158, 240);
  text-decoration-color: rgb(117, 158, 240);
}

body a.internal.broken {
  color: rgb(251, 70, 76);
  filter: brightness(0.9);
  outline: rgb(251, 70, 76) none 0px;
  text-decoration: rgba(194, 133, 10, 0.3);
  text-decoration-color: rgba(194, 133, 10, 0.3);
}`,
    lists: `body dd {
  color: rgb(250, 219, 158);
}

body dt {
  color: rgb(250, 219, 158);
}

body ol > li {
  color: rgb(250, 219, 158);
}

body ol.overflow {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body ul > li {
  color: rgb(250, 219, 158);
}

body ul.overflow {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 111, 77);
  text-decoration: rgb(128, 111, 77);
}

body blockquote {
  background-color: rgb(51, 44, 31);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body table {
  color: rgb(250, 219, 158);
  margin-top: 8px;
  width: 227.453px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(45, 39, 27);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(38, 33, 23);
}

body td {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

body th {
  border-bottom-color: rgb(64, 55, 38);
  border-left-color: rgb(64, 55, 38);
  border-right-color: rgb(64, 55, 38);
  border-top-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}

body tr {
  background-color: rgb(51, 44, 31);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body figcaption {
  color: rgb(250, 219, 158);
}

body figure {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body img {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body video {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
}

body .footnotes {
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .transclude {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-left-width: 0px;
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-left-width: 0px;
  border-right-color: rgb(250, 219, 158);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(250, 219, 158);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 111, 77);
  text-decoration: rgb(128, 111, 77);
  text-decoration-color: rgb(128, 111, 77);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 219, 158);
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}`,
    callouts: `body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-top-color: rgb(70, 61, 42);
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration: rgb(250, 219, 158);
  text-decoration-color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 77, 54);
  border-left-color: rgb(89, 77, 54);
  border-right-color: rgb(89, 77, 54);
  border-top-color: rgb(89, 77, 54);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 39, 27);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(245, 184, 61);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 184, 61);
  color: rgb(250, 219, 158);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(36, 24, 0);
}

body h1 {
  color: rgb(250, 219, 158);
}

body h2 {
  color: rgb(250, 219, 158);
}

body h2.page-title, h2.page-title a {
  color: rgb(128, 111, 77);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body h3 {
  color: rgb(250, 219, 158);
}

body h4 {
  color: rgb(250, 219, 158);
}

body h5 {
  color: rgb(250, 219, 158);
}

body h6 {
  color: rgb(250, 219, 158);
}

body hr {
  border-bottom-color: rgb(70, 61, 42);
  border-left-color: rgb(70, 61, 42);
  border-right-color: rgb(70, 61, 42);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 28, 19) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 28, 19);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(194, 133, 10);
  border-bottom-color: rgb(36, 24, 0);
  border-left-color: rgb(36, 24, 0);
  border-right-color: rgb(36, 24, 0);
  border-top-color: rgb(36, 24, 0);
  color: rgb(36, 24, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(219, 184, 112);
  text-decoration: rgb(219, 184, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 219, 158);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(232, 196, 125);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body li.section-li > .section .meta {
  color: rgb(232, 196, 125);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(232, 196, 125);
  text-decoration: rgb(232, 196, 125);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(245, 184, 61);
  border-left-color: rgb(245, 184, 61);
  border-right-color: rgb(245, 184, 61);
  border-top-color: rgb(245, 184, 61);
  color: rgb(245, 184, 61);
}

body .darkmode svg {
  color: rgb(245, 184, 61);
  stroke: rgb(245, 184, 61);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body .breadcrumb-element p {
  color: rgb(128, 111, 77);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body .navigation-progress {
  background-color: rgb(78, 53, 4);
}

body .page-header h2.page-title {
  color: rgb(250, 219, 158);
}

body abbr {
  color: rgb(250, 219, 158);
  text-decoration: underline dotted rgb(250, 219, 158);
}

body details {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body input[type=text] {
  border-bottom-color: rgb(153, 133, 92);
  border-left-color: rgb(153, 133, 92);
  border-right-color: rgb(153, 133, 92);
  border-top-color: rgb(153, 133, 92);
  color: rgb(153, 133, 92);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}

body sub {
  color: rgb(250, 219, 158);
}

body summary {
  color: rgb(250, 219, 158);
}

body sup {
  color: rgb(250, 219, 158);
}`,
  },
  light: {
    base: `:root:root {
  --OT-UI-font-size: 16px !important;
  --OT-YAML-color: rgb(172, 123, 83) !important;
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif !important;
  --OT-blockquote-font-size: 17.1px !important;
  --OT-button-OFF-bg: rgb(214, 203, 194) !important;
  --OT-button-ON-bg: rgb(217, 175, 140) !important;
  --OT-button-background-hover: rgb(191, 121, 64) !important;
  --OT-button-background-normal: rgb(249, 242, 236) !important;
  --OT-button-cta-background-normal: rgb(217, 175, 140) !important;
  --OT-button-cta-text-normal: rgb(250, 244, 240) !important;
  --OT-button-text-hover: rgb(249, 242, 236) !important;
  --OT-button-text-normal: rgb(153, 97, 51) !important;
  --OT-calendar-day-color: rgb(110, 79, 53) !important;
  --OT-calendar-today-color: rgb(110, 79, 53) !important;
  --OT-callout-gallery-gap: 5px !important;
  --OT-clickable-icon-in-header: rgb(191, 121, 64) !important;
  --OT-clickable-icon-in-tab-header: rgb(191, 121, 64) !important;
  --OT-clickable-icon-on-base-20: rgb(191, 121, 64) !important;
  --OT-color-muted-on-accent-1: rgb(240, 223, 209) !important;
  --OT-color-muted-on-accent-2: rgb(245, 234, 224) !important;
  --OT-color-on-accent-1: rgb(249, 242, 236) !important;
  --OT-color-on-accent-2: rgb(250, 244, 240) !important;
  --OT-color-on-accent-3: rgb(153, 97, 51) !important;
  --OT-editMode-font: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-font-family: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --OT-editMode-line-height: 1.4em !important;
  --OT-editMode-line-width: 44em !important;
  --OT-editMode-tableText-percent: 90 !important;
  --OT-editMode-text-size: 18px !important;
  --OT-img-max-height: 33rem !important;
  --OT-kanban-font: Uberhand Pro !important;
  --OT-kanban-font-size: 16px !important;
  --OT-kbd: rgb(110, 79, 53) !important;
  --OT-kbd-background: floralwhite !important;
  --OT-menu-text-color: rgb(110, 79, 53) !important;
  --OT-menu-text-muted: rgb(165, 118, 80) !important;
  --OT-metadata-label-width: 9em !important;
  --OT-metadata-property-icon: rgb(191, 121, 64) !important;
  --OT-nav-folder-title-color: rgb(110, 79, 53) !important;
  --OT-nav-item-muted: rgb(165, 118, 80) !important;
  --OT-nav-item-vertical-padding: 4px !important;
  --OT-pill-background: rgb(217, 175, 140) !important;
  --OT-pill-color: rgb(250, 244, 240) !important;
  --OT-readingMode-line-height: 1.4em !important;
  --OT-readingMode-line-width: 39em !important;
  --OT-readingMode-tableText-percent: 90 !important;
  --OT-readingMode-text-size: 18px !important;
  --OT-ribbon-icon-color-sidebar-is-collapsed: rgb(191, 121, 64) !important;
  --OT-ribbon-icon-color-sidebar-is-open: rgb(191, 121, 64) !important;
  --OT-search-settings-item-name: rgb(110, 79, 53) !important;
  --OT-setting-item-description: rgb(165, 118, 80) !important;
  --OT-setting-item-name: rgb(110, 79, 53) !important;
  --OT-sidebarTab-background-active: rgb(217, 175, 140) !important;
  --OT-sidebarTab-background-active-hover: rgb(191, 121, 64) !important;
  --OT-space-below-h1: 1.0rem !important;
  --OT-space-below-h2: 1.5rem !important;
  --OT-space-below-h3: 0.4rem !important;
  --OT-space-below-h4: 0.2rem !important;
  --OT-space-below-h5: 0.2rem !important;
  --OT-space-below-h6: 0.0rem !important;
  --OT-stabilo-mark: rgb(251, 237, 182) !important;
  --OT-stabilo-text: rgb(110, 79, 53) !important;
  --OT-status-bar-padding: 6px !important;
  --OT-syntax-markers: rgb(202, 171, 145) !important;
  --OT-tab-background-active-hover: rgb(191, 121, 64) !important;
  --OT-table-alt-background: rgb(240, 231, 224) !important;
  --OT-table-background: rgb(247, 242, 238) !important;
  --OT-theme-h: 27 !important;
  --OT-theme-s: 35% !important;
  --OT-tree-item-flair-background: rgb(249, 242, 236) !important;
  --OT-tree-item-flair-color: rgb(153, 97, 51) !important;
  --OT-vertical-tab-header-group-title: rgb(165, 118, 80) !important;
  --OT-view-header-title-focus-color: rgb(191, 121, 64) !important;
  --OT-view-header-title-no-focus-color: rgb(165, 118, 80) !important;
  --accent-h: 27 !important;
  --accent-l: 70% !important;
  --accent-s: 50% !important;
  --background-modifier-active-hover: rgb(191, 121, 64) !important;
  --background-modifier-border: rgb(224, 205, 190) !important;
  --background-modifier-border-focus: rgb(110, 79, 53) !important;
  --background-modifier-border-hover: rgb(217, 175, 140) !important;
  --background-modifier-form-field: rgb(245, 239, 234) !important;
  --background-modifier-form-field-hover: rgb(245, 239, 234) !important;
  --background-modifier-hover: rgb(191, 121, 64) !important;
  --background-modifier-message: rgb(191, 121, 64) !important;
  --background-modifier-success: rgb(106, 245, 161) !important;
  --background-modifier-success-rgb: 106, 245, 161 !important;
  --background-primary: rgb(245, 239, 234) !important;
  --background-secondary: rgb(237, 226, 217) !important;
  --background-secondary-alt: rgb(230, 215, 203) !important;
  --bases-cards-background: rgb(245, 239, 234) !important;
  --bases-cards-border-width: 1.5px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(224, 205, 190) !important;
  --bases-cards-shadow-hover: 0 0 0 2px rgb(217, 175, 140) !important;
  --bases-embed-border-color: rgb(224, 205, 190) !important;
  --bases-group-heading-property-color: rgb(165, 118, 80) !important;
  --bases-group-heading-property-size: 12.8px !important;
  --bases-header-border-width: 0 0 1.5px 0 !important;
  --bases-table-border-color: rgb(110, 79, 53) !important;
  --bases-table-cell-background-active: rgb(245, 239, 234) !important;
  --bases-table-cell-background-disabled: rgb(212, 203, 196) !important;
  --bases-table-cell-background-selected: rgba(217, 175, 140, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(110, 79, 53) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(217, 175, 140) !important;
  --bases-table-column-border-width: 1.5px !important;
  --bases-table-container-border-width: 1.5px !important;
  --bases-table-header-background: rgb(245, 239, 234) !important;
  --bases-table-header-background-hover: rgb(191, 121, 64) !important;
  --bases-table-header-color: rgb(153, 97, 51) !important;
  --bases-table-row-background-hover: rgb(240, 231, 224) !important;
  --bases-table-row-border-width: 1.5px !important;
  --bases-table-summary-background: rgb(245, 239, 234) !important;
  --bases-table-summary-background-hover: rgb(191, 121, 64) !important;
  --blockquote-background-color: rgb(252, 250, 248) !important;
  --blockquote-border-color: rgb(217, 175, 140) !important;
  --blockquote-border-thickness: 0 !important;
  --blockquote-font-style: italic !important;
  --blockquote-style: italic !important;
  --blue: rgb(45, 29, 191) !important;
  --blur-background: color-mix(in srgb, rgb(245, 239, 234) 65%, transparent) linear-gradient(rgb(245, 239, 234), color-mix(in srgb, rgb(245, 239, 234) 65%, transparent)) !important;
  --border-width: 1.5px !important;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: rgb(245, 239, 234) !important;
  --canvas-card-label-color: rgb(202, 171, 145) !important;
  --canvas-dot-pattern: rgb(110, 79, 53) !important;
  --caret-color: red !important;
  --checkbox-border-color: rgb(110, 79, 53) !important;
  --checkbox-border-color-hover: rgb(191, 121, 64) !important;
  --checkbox-color: rgb(110, 79, 53) !important;
  --checkbox-color-hover: rgb(191, 121, 64) !important;
  --checkbox-marker-color: rgb(245, 239, 234) !important;
  --checkbox-radius: 0.3rem !important;
  --checkbox-size: 0.85rem !important;
  --checklist-done-color: rgb(202, 171, 145) !important;
  --checklist-done-decoration: none !important;
  --code-background: rgb(247, 242, 238) !important;
  --code-border-color: rgb(110, 79, 53) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgb(191, 121, 64) !important;
  --code-comment: rgb(202, 171, 145) !important;
  --code-normal: rgb(110, 79, 53) !important;
  --code-operator: rgb(110, 79, 53) !important;
  --code-punctuation: rgb(165, 118, 80) !important;
  --code-size: 0.8em !important;
  --code-string: rgb(83, 132, 172) !important;
  --code-tag: rgb(202, 171, 145) !important;
  --collapse-icon-color: rgb(217, 175, 140) !important;
  --collapse-icon-color-collapsed: rgb(217, 175, 140) !important;
  --color-accent: rgb(217, 175, 140) !important;
  --color-accent-1: rgb(191, 121, 64) !important;
  --color-accent-2: rgb(217, 175, 140) !important;
  --color-accent-3: rgb(249, 242, 236) !important;
  --color-accent-hsl: 27, 50%, 70% !important;
  --color-base-00: rgb(245, 239, 234) !important;
  --color-base-05: rgb(230, 215, 203) !important;
  --color-base-100: rgb(110, 79, 53) !important;
  --color-base-20: rgb(237, 226, 217) !important;
  --color-base-35: rgb(224, 205, 190) !important;
  --color-base-40: rgb(110, 79, 53) !important;
  --color-base-50: rgb(202, 171, 145) !important;
  --dark: rgb(110, 79, 53) !important;
  --dark-blue: rgb(33, 42, 110) !important;
  --darkgray: rgb(110, 79, 53) !important;
  --divider-color: rgb(224, 205, 190) !important;
  --divider-color-hover: rgb(217, 175, 140) !important;
  --divider-width: 2px !important;
  --dropdown-background: rgb(249, 242, 236) !important;
  --dropdown-background-hover: rgb(191, 121, 64) !important;
  --dynamic-outline-active-heading-background: rgb(249, 242, 236) !important;
  --dynamic-outline-background: rgb(237, 226, 217) !important;
  --dynamic-outline-background-accent: lime !important;
  --dynamic-outline-background-hover: rgb(217, 175, 140) !important;
  --dynamic-outline-background-modifier-hover-lighter: lime !important;
  --dynamic-outline-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h1-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h2-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h3-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h4-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h5-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-h6-text-color: rgb(110, 79, 53) !important;
  --dynamic-outline-text-color: rgb(110, 79, 53) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(224, 205, 190), inset 0 0 0 1px rgb(224, 205, 190) !important;
  --embed-border-end: 1px dotted !important;
  --embed-border-start: 0 !important;
  --embed-padding: 0 !important;
  --favorite-blue: rgb(15, 5, 107) !important;
  --file-header-background: rgb(245, 239, 234) !important;
  --file-header-background-focused: rgb(245, 239, 234) !important;
  --file-header-border: 1.5px solid rgb(224, 205, 190) !important;
  --file-header-font-size: 13.86667px !important;
  --file-header-justify: left !important;
  --file-line-width: 39em !important;
  --file-margins: 0.5em 32px !important;
  --flair-background: rgb(249, 242, 236) !important;
  --flair-color: rgb(110, 79, 53) !important;
  --floating-toc-background-color: rgb(245, 239, 234) !important;
  --floating-toc-font-color: rgb(110, 79, 53) !important;
  --floating-toc-header-background-color: rgb(245, 239, 234) !important;
  --floating-toc-hover-color: rgb(249, 242, 236) !important;
  --font-ui-large: 21.33333px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 13.86667px !important;
  --font-ui-smaller: 12.8px !important;
  --footnote-divider-color: rgb(224, 205, 190) !important;
  --footnote-divider-width: 1.5px !important;
  --footnote-gap: 0.5rem !important;
  --footnote-id-color: rgb(110, 79, 53) !important;
  --footnote-id-color-no-occurrences: rgb(202, 171, 145) !important;
  --footnote-id-delimiter: ")" !important;
  --footnote-input-background-active: rgb(245, 239, 234) !important;
  --footnote-line-height: 1.3 !important;
  --footnote-size: 16px !important;
  --graph-line: rgb(110, 79, 53) !important;
  --graph-node: rgb(165, 118, 80) !important;
  --graph-node-focused: rgb(217, 175, 140) !important;
  --graph-node-unresolved: rgb(202, 171, 145) !important;
  --graph-text: rgb(110, 79, 53) !important;
  --gray: rgb(165, 118, 80) !important;
  --h1-color: rgb(110, 79, 53) !important;
  --h2-color: rgb(110, 79, 53) !important;
  --h3-color: rgb(110, 79, 53) !important;
  --h4-color: rgb(110, 79, 53) !important;
  --h5-color: rgb(110, 79, 53) !important;
  --h5-line-height: 1.4em !important;
  --h6-color: rgb(110, 79, 53) !important;
  --h6-line-height: 1.4em !important;
  --header-height: 2em !important;
  --heading-formatting: rgb(202, 171, 145) !important;
  --heading-spacing: 0 !important;
  --highlight: rgb(191, 121, 64) !important;
  --highlighted-folder-background: rgb(230, 215, 203) !important;
  --highlighted-folder-color: yellow !important;
  --highlighted-folder-current-note-color: rgb(191, 121, 64) !important;
  --highlighted-folder-font-weight: 400 !important;
  --highlighted-folder-text-color: rgb(110, 79, 53) !important;
  --highlighted-folder-title-background: rgb(217, 175, 140) !important;
  --highlighted-folder-title-color: rgb(250, 244, 240) !important;
  --highlighted-parent-folder-background: rgb(249, 242, 236) !important;
  --highlighted-parent-folder-color: yellow !important;
  --highlighted-parent-folder-font-weight: 400 !important;
  --highlighted-parent-folder-text-color: rgb(153, 97, 51) !important;
  --hr-color: rgb(224, 205, 190) !important;
  --icon-color: rgb(191, 121, 64) !important;
  --icon-color-active: rgb(237, 226, 217) !important;
  --icon-color-focused: rgb(110, 79, 53) !important;
  --icon-color-hover: rgb(249, 242, 236) !important;
  --indentation-guide-color: rgb(202, 171, 145) !important;
  --indentation-guide-width: 1.5px !important;
  --indentation-guide-width-active: 1.5px !important;
  --inline-title-color: rgb(202, 171, 145) !important;
  --inline-title-font: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --inline-title-line-height: 0em !important;
  --inline-title-size: 18px !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 1.5px !important;
  --input-date-separator: rgb(202, 171, 145) !important;
  --input-placeholder-color: grey !important;
  --interactive-accent: rgb(217, 175, 140) !important;
  --interactive-accent-hover: rgb(191, 121, 64) !important;
  --interactive-accent-hsl: 27, 50%, 70% !important;
  --interactive-hover: rgb(191, 121, 64) !important;
  --interactive-normal: rgb(249, 242, 236) !important;
  --light: rgb(245, 239, 234) !important;
  --light-blue: rgb(167, 195, 226) !important;
  --lightgray: rgb(237, 226, 217) !important;
  --line-height-normal: 1.4em !important;
  --link-color: rgb(83, 132, 172) !important;
  --link-color-hover: rgb(249, 242, 236) !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: rgb(83, 132, 172) !important;
  --link-external-color-hover: rgb(191, 121, 64) !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #e93147 !important;
  --link-unresolved-decoration-color: rgba(217, 175, 140, 0.3) !important;
  --link-unresolved-filter: brightness(0.9) !important;
  --list-bullet-size: 0.4em !important;
  --list-indent: 1.3em !important;
  --list-marker-color: rgb(110, 79, 53) !important;
  --list-marker-color-collapsed: rgb(217, 175, 140) !important;
  --list-marker-color-hover: rgb(165, 118, 80) !important;
  --list-spacing: 0.05rem !important;
  --list-spacing-1: 0.3rem !important;
  --list-spacing-2: 0.2rem !important;
  --list-spacing-3: 0.1rem !important;
  --list-spacing-below: 0.8rem !important;
  --menu-background: rgb(237, 226, 217) !important;
  --menu-border-color: rgb(217, 175, 140) !important;
  --menu-border-width: 1.5px !important;
  --metadata-background: rgb(245, 239, 234) !important;
  --metadata-border-color: rgb(224, 205, 190) !important;
  --metadata-border-radius: 7px !important;
  --metadata-divider-color: rgb(224, 205, 190) !important;
  --metadata-divider-width: 1 !important;
  --metadata-input-background-active: rgb(245, 239, 234) !important;
  --metadata-input-font-size: 13.86667px !important;
  --metadata-input-text-color: rgb(110, 79, 53) !important;
  --metadata-label-background-active: rgb(245, 239, 234) !important;
  --metadata-label-font-size: 13.86667px !important;
  --metadata-label-font-weight: 600 !important;
  --metadata-label-text-color: rgb(165, 118, 80) !important;
  --metadata-label-text-color-hover: rgb(165, 118, 80) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgb(191, 121, 64) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(110, 79, 53) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1.5px rgb(217, 175, 140) !important;
  --metadata-property-padding: 0em 0em 0em 0.3em !important;
  --metadata-sidebar-input-font-size: 13.86667px !important;
  --metadata-sidebar-label-font-size: 13.86667px !important;
  --modal-background: rgb(245, 239, 234) !important;
  --modal-border-color: rgb(110, 79, 53) !important;
  --modal-border-width: 1.5px !important;
  --modal-height: 88vh !important;
  --modal-max-height: 98vh !important;
  --nav-collapse-icon-color: rgb(202, 171, 145) !important;
  --nav-collapse-icon-color-collapsed: red !important;
  --nav-heading-color: rgb(110, 79, 53) !important;
  --nav-heading-color-collapsed: rgb(202, 171, 145) !important;
  --nav-heading-color-collapsed-hover: rgb(165, 118, 80) !important;
  --nav-heading-color-hover: rgb(110, 79, 53) !important;
  --nav-indentation-guide-color: rgb(202, 171, 145) !important;
  --nav-indentation-guide-width: 1.5px !important;
  --nav-item-background-active: rgb(217, 175, 140) !important;
  --nav-item-background-hover: rgb(191, 121, 64) !important;
  --nav-item-background-selected: rgb(249, 242, 236) !important;
  --nav-item-color: rgb(110, 79, 53) !important;
  --nav-item-color-active: rgb(250, 244, 240) !important;
  --nav-item-color-highlighted: rgb(217, 175, 140) !important;
  --nav-item-color-hover: rgb(249, 242, 236) !important;
  --nav-item-color-selected: rgb(153, 97, 51) !important;
  --nav-item-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px !important;
  --nav-item-size: 13.86667px !important;
  --nav-tag-color: rgb(202, 171, 145) !important;
  --nav-tag-color-active: rgb(165, 118, 80) !important;
  --nav-tag-color-hover: rgb(165, 118, 80) !important;
  --neutral-100: rgb(255, 255, 255) !important;
  --obsidian-violet: rgb(138, 92, 245) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: rgb(245, 239, 234) !important;
  --pdf-page-background: rgb(245, 239, 234) !important;
  --pdf-sidebar-background: rgb(245, 239, 234) !important;
  --pill-background-hover: rgb(191, 121, 64) !important;
  --pill-border-color: rgb(224, 205, 190) !important;
  --pill-border-color-hover: rgb(217, 175, 140) !important;
  --pill-border-width: 1.5px !important;
  --pill-color: rgb(165, 118, 80) !important;
  --pill-color-hover: rgb(249, 242, 236) !important;
  --pill-color-remove: rgb(217, 175, 140) !important;
  --pill-color-remove-hover: rgb(249, 242, 236) !important;
  --popover-font-size: 14.4px !important;
  --popover-height: 50vh !important;
  --popover-width: 46rem !important;
  --prompt-background: rgb(245, 239, 234) !important;
  --prompt-border-color: rgb(110, 79, 53) !important;
  --prompt-border-width: 1.5px !important;
  --prompt-max-height: 80vh !important;
  --raised-background: color-mix(in srgb, rgb(245, 239, 234) 65%, transparent) linear-gradient(rgb(245, 239, 234), color-mix(in srgb, rgb(245, 239, 234) 65%, transparent)) !important;
  --ribbon-background: rgb(237, 226, 217) !important;
  --ribbon-background-collapsed: rgb(245, 239, 234) !important;
  --royal-blue: rgb(0, 0, 163) !important;
  --search-clear-button-color: rgb(165, 118, 80) !important;
  --search-icon-color: rgb(191, 121, 64) !important;
  --search-result-background: rgb(245, 239, 234) !important;
  --secondary: rgb(217, 175, 140) !important;
  --setting-group-heading-color: rgb(110, 79, 53) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-border-color: rgb(224, 205, 190) !important;
  --sky-blue: rgb(36, 211, 255) !important;
  --slider-thumb-border-color: rgb(217, 175, 140) !important;
  --slider-thumb-border-width: 1.5px !important;
  --slider-track-background: rgb(224, 205, 190) !important;
  --solarized-base0: rgb(131, 148, 149) !important;
  --solarized-base00: rgb(100, 122, 130) !important;
  --solarized-base01: rgb(88, 110, 116) !important;
  --solarized-base02: rgb(7, 53, 65) !important;
  --solarized-base03: rgb(0, 45, 56) !important;
  --solarized-base1: rgb(146, 160, 160) !important;
  --solarized-base2: rgb(237, 231, 212) !important;
  --solarized-base3: rgb(253, 246, 226) !important;
  --solarized-blue: rgb(39, 139, 211) !important;
  --solarized-cyan: rgb(42, 162, 152) !important;
  --solarized-green: rgb(133, 153, 0) !important;
  --solarized-magenta: rgb(211, 54, 130) !important;
  --solarized-orange: rgb(202, 76, 22) !important;
  --solarized-red: rgb(220, 49, 46) !important;
  --solarized-violet: rgb(109, 114, 197) !important;
  --solarized-yellow: rgb(179, 134, 0) !important;
  --stabilo-bleu-clair: rgb(186, 228, 243) !important;
  --stabilo-bleu-foncé: rgb(56, 173, 220) !important;
  --stabilo-jaune-clair: rgb(251, 237, 182) !important;
  --stabilo-jaune-foncé: rgb(241, 232, 65) !important;
  --stabilo-orange-clair: rgb(255, 191, 128) !important;
  --stabilo-orange-foncé: rgb(243, 150, 57) !important;
  --stabilo-rose-clair: rgb(244, 164, 181) !important;
  --stabilo-rose-foncé: rgb(233, 83, 103) !important;
  --stabilo-vert-clair: rgb(176, 232, 200) !important;
  --stabilo-vert-foncé: rgb(1, 193, 132) !important;
  --stabilo-violet-clair: rgb(173, 137, 190) !important;
  --stabilo-violet-foncé: rgb(215, 45, 130) !important;
  --status-bar-background: rgb(249, 242, 236) !important;
  --status-bar-border-color: rgb(217, 175, 140) !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 13.86667px !important;
  --status-bar-radius: 4px !important;
  --status-bar-text-color: rgb(153, 97, 51) !important;
  --suggestion-background: rgb(245, 239, 234) !important;
  --tab-background-active: rgb(245, 239, 234) !important;
  --tab-container-background: rgb(230, 215, 203) !important;
  --tab-divider-color: rgb(191, 121, 64) !important;
  --tab-font-size: 13.86667px !important;
  --tab-outline-color: rgb(224, 205, 190) !important;
  --tab-stacked-font-size: 13.86667px !important;
  --tab-stacked-header-width: 2em !important;
  --tab-stacked-text-transform: rotate(180deg) !important;
  --tab-switcher-background: rgb(237, 226, 217) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 226, 217), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(217, 175, 140) !important;
  --tab-text-color: rgb(165, 118, 80) !important;
  --tab-text-color-active: rgb(165, 118, 80) !important;
  --tab-text-color-focused: rgb(165, 118, 80) !important;
  --tab-text-color-focused-active: rgb(165, 118, 80) !important;
  --tab-text-color-focused-active-current: rgb(191, 121, 64) !important;
  --tab-text-color-focused-highlighted: rgb(217, 175, 140) !important;
  --table-add-button-border-color: rgb(224, 205, 190) !important;
  --table-background: rgb(240, 231, 224) !important;
  --table-border-color: rgb(110, 79, 53) !important;
  --table-drag-handle-background-active: rgb(217, 175, 140) !important;
  --table-drag-handle-color: rgb(202, 171, 145) !important;
  --table-drag-handle-color-active: rgb(250, 244, 240) !important;
  --table-header-background: rgb(242, 234, 227) !important;
  --table-header-background-hover: rgb(242, 234, 227) !important;
  --table-header-border-color: rgb(110, 79, 53) !important;
  --table-header-color: rgb(110, 79, 53) !important;
  --table-header-size: 16.2px !important;
  --table-row-alt-background: rgb(247, 242, 238) !important;
  --table-row-alt-background-hover: rgb(247, 242, 238) !important;
  --table-row-background-hover: rgb(240, 231, 224) !important;
  --table-selection: rgba(217, 175, 140, 0.1) !important;
  --table-selection-border-color: rgb(217, 175, 140) !important;
  --table-text-size: 16.2px !important;
  --tag-background: rgb(217, 175, 140) !important;
  --tag-background-hover: rgb(191, 121, 64) !important;
  --tag-border-color: rgba(217, 175, 140, 0.15) !important;
  --tag-border-color-hover: rgba(217, 175, 140, 0.15) !important;
  --tag-color: rgb(250, 244, 240) !important;
  --tag-color-hover: rgb(249, 242, 236) !important;
  --tertiary: rgb(249, 242, 236) !important;
  --text-accent: rgb(217, 175, 140) !important;
  --text-accent-hover: rgb(249, 242, 236) !important;
  --text-faint: rgb(202, 171, 145) !important;
  --text-muted: rgb(165, 118, 80) !important;
  --text-normal: rgb(110, 79, 53) !important;
  --text-on-accent: rgb(250, 244, 240) !important;
  --text-on-accent-inverted: rgb(191, 121, 64) !important;
  --text-selection: rgba(138, 98, 66, 0.2) !important;
  --textHighlight: rgb(191, 121, 64) !important;
  --titlebar-background: #333 !important;
  --titlebar-background-focused: rgb(230, 215, 203) !important;
  --titlebar-border-color: rgb(224, 205, 190) !important;
  --titlebar-text-color: rgb(165, 118, 80) !important;
  --titlebar-text-color-focused: rgb(110, 79, 53) !important;
  --toggle-thumb-color: rgb(237, 226, 217) !important;
  --traffic-lights-offset-x: 2em !important;
  --traffic-lights-offset-y: 2em !important;
  --vault-profile-color: rgb(191, 121, 64) !important;
  --vault-profile-color-hover: rgb(249, 242, 236) !important;
  --vault-profile-font-size: 21.33333px !important;
  --vault-profile-font-weight: 700 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 215, 203);
  color: rgb(110, 79, 53);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(237, 226, 217);
  color: rgb(110, 79, 53);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 215, 203);
  border-left-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

body div#quartz-root {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}`,
    typography: `body .page article p > b, b {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > em, em {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > i, i {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .page article p > strong, strong {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .text-highlight {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body del {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: line-through rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body p {
  color: rgb(165, 118, 80);
  outline: rgb(165, 118, 80) none 0px;
  text-decoration: rgb(165, 118, 80);
  text-decoration-color: rgb(165, 118, 80);
}`,
    links: `body a.external, footer a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration: rgb(83, 132, 172);
  text-decoration-color: rgb(83, 132, 172);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration: rgb(83, 132, 172);
  text-decoration-color: rgb(83, 132, 172);
}

body a.internal.broken {
  color: rgb(233, 49, 71);
  filter: brightness(0.9);
  outline: rgb(233, 49, 71) none 0px;
  text-decoration: rgba(217, 175, 140, 0.3);
  text-decoration-color: rgba(217, 175, 140, 0.3);
}`,
    lists: `body dd {
  color: rgb(110, 79, 53);
}

body dt {
  color: rgb(110, 79, 53);
}

body ol > li {
  color: rgb(110, 79, 53);
}

body ol.overflow {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body ul > li {
  color: rgb(110, 79, 53);
}

body ul.overflow {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(202, 171, 145);
  text-decoration: rgb(202, 171, 145);
}

body blockquote {
  background-color: rgb(252, 250, 248);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body table {
  color: rgb(110, 79, 53);
  margin-top: 8px;
  width: 227.453px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(240, 231, 224);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(247, 242, 238);
}

body td {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body th {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body tr {
  background-color: rgb(242, 234, 227);
}`,
    code: `body code {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body figcaption {
  color: rgb(110, 79, 53);
}

body figure {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body img {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body video {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
}

body .footnotes {
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .transclude {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-left-width: 0px;
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
}

body .transclude-inner {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-left-width: 0px;
  border-right-color: rgb(110, 79, 53);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgb(110, 79, 53);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(202, 171, 145);
  text-decoration: rgb(202, 171, 145);
  text-decoration-color: rgb(202, 171, 145);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='*'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='-'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='/'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='>'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='?'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='I'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='S'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='b'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='c'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='d'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='f'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='i'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='k'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='l'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='p'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='u'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body li.task-list-item[data-task='w'] {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}`,
    callouts: `body .callout > .callout-content {
  padding-left: 16px;
  padding-right: 16px;
}

body .callout[data-callout="abstract"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-top-color: rgb(224, 205, 190);
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > * {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration: rgb(110, 79, 53);
  text-decoration-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(237, 226, 217);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(191, 121, 64);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(191, 121, 64);
  color: rgb(110, 79, 53);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(250, 244, 240);
}

body h1 {
  color: rgb(110, 79, 53);
}

body h2 {
  color: rgb(110, 79, 53);
}

body h2.page-title, h2.page-title a {
  color: rgb(202, 171, 145);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body h3 {
  color: rgb(110, 79, 53);
}

body h4 {
  color: rgb(110, 79, 53);
}

body h5 {
  color: rgb(110, 79, 53);
}

body h6 {
  color: rgb(110, 79, 53);
}

body hr {
  border-bottom-color: rgb(224, 205, 190);
  border-left-color: rgb(224, 205, 190);
  border-right-color: rgb(224, 205, 190);
  border-right-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 239, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 239, 234);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(217, 175, 140);
  border-bottom-color: rgb(250, 244, 240);
  border-left-color: rgb(250, 244, 240);
  border-right-color: rgb(250, 244, 240);
  border-top-color: rgb(250, 244, 240);
  color: rgb(250, 244, 240);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}`,
    footer: `body footer {
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

body footer ul li a {
  color: rgb(153, 97, 51);
  text-decoration: rgb(153, 97, 51);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 79, 53);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body li.section-li > .section .meta {
  color: rgb(110, 79, 53);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 79, 53);
  text-decoration: rgb(110, 79, 53);
}

body ul.section-ul {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(191, 121, 64);
  border-left-color: rgb(191, 121, 64);
  border-right-color: rgb(191, 121, 64);
  border-top-color: rgb(191, 121, 64);
  color: rgb(191, 121, 64);
}

body .darkmode svg {
  color: rgb(191, 121, 64);
  stroke: rgb(191, 121, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body .breadcrumb-element p {
  color: rgb(202, 171, 145);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body .navigation-progress {
  background-color: rgb(249, 242, 236);
}

body .page-header h2.page-title {
  color: rgb(110, 79, 53);
}

body abbr {
  color: rgb(110, 79, 53);
  text-decoration: underline dotted rgb(110, 79, 53);
}

body details {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body input[type=text] {
  border-bottom-color: rgb(165, 118, 80);
  border-left-color: rgb(165, 118, 80);
  border-right-color: rgb(165, 118, 80);
  border-top-color: rgb(165, 118, 80);
  color: rgb(165, 118, 80);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}

body sub {
  color: rgb(110, 79, 53);
}

body summary {
  color: rgb(110, 79, 53);
}

body sup {
  color: rgb(110, 79, 53);
}`,
  },
};
