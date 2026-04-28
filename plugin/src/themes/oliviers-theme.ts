import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oliviers-theme",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-mono"],
    styleSettingsId: "Olivier-s-Theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --OT-UI-font-size: 16px;
  --OT-YAML-color: hsl(40, 25%, 50%);
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif;
  --OT-blockquote-font-size: 17.1px;
  --OT-button-OFF-bg: hsl(40, 40%, 25%);
  --OT-button-ON-bg: hsl(40,	90%,	40%);
  --OT-button-background-hover: hsl(40, 90%, 60%);
  --OT-button-background-normal: hsl(40, 90%, 16%);
  --OT-button-cta-background-normal: hsl(40,	90%,	40%);
  --OT-button-cta-text-normal: hsl(40, 100%, 07%);
  --OT-button-text-hover: hsl(40, 100%, 07%);
  --OT-button-text-normal: hsl(40, 60%, 65%);
  --OT-calendar-day-color: hsl(40, 90%, 80%);
  --OT-calendar-today-color: hsl(40, 90%, 80%);
  --OT-callout-gallery-gap: 5px;
  --OT-clickable-icon-in-header: hsl(40, 90%, 60%);
  --OT-clickable-icon-in-tab-header: hsl(40, 90%, 60%);
  --OT-clickable-icon-on-base-20: hsl(40, 90%, 60%);
  --OT-color-muted-on-accent-1: hsl(40, 100%, 24%);
  --OT-color-muted-on-accent-2: hsl(40, 100%, 14%);
  --OT-color-on-accent-1: hsl(40, 100%, 07%);
  --OT-color-on-accent-2: hsl(40, 100%, 07%);
  --OT-color-on-accent-3: hsl(40, 60%, 65%);
  --OT-editMode-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-line-height: 1.4em;
  --OT-editMode-line-width: 44em;
  --OT-editMode-tableText-percent: 90;
  --OT-editMode-text-size: 18px;
  --OT-img-max-height: 33rem;
  --OT-kanban-font: "Uberhand Pro";
  --OT-kanban-font-size: 16px;
  --OT-kbd: hsl(40, 90%, 80%);
  --OT-kbd-background: darkslate;
  --OT-menu-text-color: hsl(40, 70%, 70%);
  --OT-menu-text-muted: hsl(40, 25%, 48%);
  --OT-metadata-property-icon: hsl(40, 90%, 60%);
  --OT-nav-folder-title-color: hsl(40, 90%, 80%);
  --OT-nav-item-muted: hsl(40, 25%, 48%);
  --OT-nav-item-vertical-padding: 4px;
  --OT-pill-background: hsl(40,	90%,	40%);
  --OT-pill-color: hsl(40, 100%, 07%);
  --OT-readingMode-line-height: 1.4em;
  --OT-readingMode-line-width: 39em;
  --OT-readingMode-tableText-percent: 90;
  --OT-readingMode-text-size: 18px;
  --OT-ribbon-icon-color-sidebar-is-collapsed: hsl(40, 90%, 60%);
  --OT-ribbon-icon-color-sidebar-is-open: hsl(40, 90%, 60%);
  --OT-search-settings-item-name: hsl(40, 90%, 80%);
  --OT-setting-item-description: hsl(40, 25%, 48%);
  --OT-setting-item-name: hsl(40, 90%, 80%);
  --OT-sidebarTab-background-active: hsl(40,	90%,	40%);
  --OT-sidebarTab-background-active-hover: hsl(40, 90%, 60%);
  --OT-space-below-h1: 1.0rem;
  --OT-space-below-h2: 1.5rem;
  --OT-space-below-h3: 0.4rem;
  --OT-space-below-h4: 0.2rem;
  --OT-space-below-h5: 0.2rem;
  --OT-space-below-h6: 0.0rem;
  --OT-stabilo-mark: hsl( 48,  90%, 85%);
  --OT-stabilo-text: hsl(40, 25%, 10%);
  --OT-status-bar-padding: 6px;
  --OT-syntax-markers: hsl(40, 25%, 40%);
  --OT-tab-background-active-hover: hsl(40, 90%, 60%);
  --OT-table-alt-background: hsl(40, 25%, 14%);
  --OT-table-background: hsl(40, 25%, 12%);
  --OT-theme-h: 40;
  --OT-theme-s: 25%;
  --OT-tree-item-flair-background: hsl(40, 90%, 16%);
  --OT-tree-item-flair-color: hsl(40, 60%, 65%);
  --OT-vertical-tab-header-group-title: hsl(40, 25%, 48%);
  --OT-view-header-title-focus-color: hsl(40, 90%, 60%);
  --OT-view-header-title-no-focus-color: hsl(40, 25%, 48%);
  --accent-h: 40;
  --accent-l: 40%;
  --accent-s: 90%;
  --background-modifier-active-hover: hsl(40, 90%, 60%);
  --background-modifier-border: hsl(40, 25%, 22%);
  --background-modifier-border-focus: hsl(40, 25%, 28%);
  --background-modifier-border-hover: hsl(40,	90%,	40%);
  --background-modifier-form-field: hsl(40, 25%, 10%);
  --background-modifier-form-field-hover: hsl(40, 25%, 10%);
  --background-modifier-hover: hsl(40, 90%, 60%);
  --background-modifier-message: hsl(40, 90%, 60%);
  --background-modifier-success: rgb(106, 245, 161);
  --background-modifier-success-rgb: 106, 245, 161;
  --background-primary: hsl(40, 25%, 10%);
  --background-secondary: hsl(40, 25%, 14%);
  --bases-cards-background: hsl(40, 25%, 10%);
  --bases-cards-border-width: 1.5px;
  --bases-cards-shadow: 0 0 0 1px hsl(40, 25%, 22%);
  --bases-cards-shadow-hover: 0 0 0 2px hsl(40,	90%,	40%);
  --bases-embed-border-color: hsl(40, 25%, 22%);
  --bases-group-heading-property-color: hsl(40, 25%, 48%);
  --bases-group-heading-property-size: 12.8px;
  --bases-header-border-width: 0 0 1.5px 0;
  --bases-table-border-color: hsl(40, 25%, 20%);
  --bases-table-cell-background-active: hsl(40, 25%, 10%);
  --bases-table-cell-background-disabled: hsl(40, 15%, 80%);
  --bases-table-cell-background-selected: hsla(40, 90%, 40%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(40, 25%, 28%);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(40,	90%,	40%);
  --bases-table-column-border-width: 1.5px;
  --bases-table-container-border-width: 1.5px;
  --bases-table-header-background: hsl(40, 25%, 10%);
  --bases-table-header-background-hover: hsl(40, 90%, 60%);
  --bases-table-header-color: hsl(40, 60%, 65%);
  --bases-table-row-background-hover: hsl(40, 25%, 14%);
  --bases-table-row-border-width: 1.5px;
  --bases-table-summary-background: hsl(40, 25%, 10%);
  --bases-table-summary-background-hover: hsl(40, 90%, 60%);
  --blockquote-background-color: hsl(40, 25%, 16%);
  --blockquote-border-color: hsl(40,	90%,	40%);
  --blockquote-border-thickness: 0;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --blue: hsl(246,  74%, 43%);
  --border-width: 1.5px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: hsl(40, 25%, 10%);
  --canvas-card-label-color: hsl(40, 25%, 40%);
  --canvas-dot-pattern: hsl(40, 25%, 28%);
  --caret-color: red;
  --checkbox-border-color: hsl(40, 90%, 80%);
  --checkbox-border-color-hover: hsl(40, 90%, 60%);
  --checkbox-color: hsl(40, 90%, 80%);
  --checkbox-color-hover: hsl(40, 90%, 60%);
  --checkbox-marker-color: hsl(40, 25%, 10%);
  --checkbox-radius: 0.3rem;
  --checkbox-size: 0.85rem;
  --checklist-done-color: hsl(40, 25%, 40%);
  --checklist-done-decoration: none;
  --code-background: hsl(40, 25%, 12%);
  --code-border-color: hsl(40, 90%, 80%);
  --code-border-width: 1px;
  --code-bracket-background: hsl(40, 90%, 60%);
  --code-comment: hsl(40, 25%, 40%);
  --code-normal: hsl(40, 90%, 80%);
  --code-operator: hsl(40, 90%, 80%);
  --code-punctuation: hsl(40, 25%, 48%);
  --code-size: 0.8em;
  --code-string: hsl(220, 80%, 70%);
  --code-tag: hsl(40, 25%, 40%);
  --collapse-icon-color: hsl(40,	90%,	40%);
  --collapse-icon-color-collapsed: hsl(40,	90%,	40%);
  --color-accent: hsl(40,	90%,	40%);
  --color-accent-1: hsl(40, 90%, 60%);
  --color-accent-2: hsl(40,	90%,	40%);
  --color-accent-3: hsl(40, 90%, 16%);
  --color-accent-hsl: 40, 90%, 40%;
  --color-base-00: hsl(40, 25%, 10%);
  --color-base-05: hsl(40, 25%, 17%);
  --color-base-100: hsl(40, 90%, 80%);
  --color-base-20: hsl(40, 25%, 14%);
  --color-base-35: hsl(40, 25%, 22%);
  --color-base-40: hsl(40, 25%, 28%);
  --color-base-50: hsl(40, 25%, 40%);
  --dark: var(--text-normal, hsl(40, 90%, 80%));
  --dark-blue: hsl(233,  54%, 28%);
  --darkgray: var(--text-normal, hsl(40, 90%, 80%));
  --divider-color: hsl(40, 25%, 22%);
  --divider-color-hover: hsl(40,	90%,	40%);
  --divider-width: 2px;
  --dropdown-background-hover: hsl(40, 25%, 22%);
  --dynamic-outline-active-heading-background: hsl(40, 90%, 16%);
  --dynamic-outline-background: hsl(40, 25%, 14%);
  --dynamic-outline-background-accent: lime;
  --dynamic-outline-background-hover: hsl(40,	90%,	40%);
  --dynamic-outline-background-modifier-hover-lighter: lime;
  --dynamic-outline-color: hsl(40, 70%, 70%);
  --dynamic-outline-h1-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-h2-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-h3-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-h4-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-h5-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-h6-text-color: hsl(40, 70%, 70%);
  --dynamic-outline-text-color: hsl(40, 70%, 70%);
  --embed-block-shadow-hover: 0 0 0 1px hsl(40, 25%, 22%), inset 0 0 0 1px hsl(40, 25%, 22%);
  --embed-border-end: 1px dotted;
  --embed-border-start: 0;
  --embed-padding: 0;
  --favorite-blue: hsl(246,  91%, 22%);
  --file-header-background: hsl(40, 25%, 10%);
  --file-header-background-focused: hsl(40, 25%, 10%);
  --file-header-border: 1.5px solid hsl(40, 25%, 22%);
  --file-header-font-size: 13.86667px;
  --file-header-justify: left;
  --file-line-width: 39em;
  --file-margins: 0.5em 32px;
  --flair-color: hsl(40, 90%, 80%);
  --floating-toc-background-color: hsl(40, 25%, 10%);
  --floating-toc-font-color: hsl(40, 70%, 70%);
  --floating-toc-header-background-color: hsl(40, 25%, 10%);
  --floating-toc-hover-color: hsl(40, 100%, 07%);
  --font-ui-large: 21.33333px;
  --font-ui-medium: 16px;
  --font-ui-small: 13.86667px;
  --font-ui-smaller: 12.8px;
  --footnote-divider-color: hsl(40, 25%, 22%);
  --footnote-divider-width: 1.5px;
  --footnote-gap: 0.5rem;
  --footnote-id-color: hsl(40, 90%, 80%);
  --footnote-id-color-no-occurrences: hsl(40, 25%, 40%);
  --footnote-id-delimiter: ")";
  --footnote-input-background-active: hsl(40, 25%, 10%);
  --footnote-line-height: 1.3;
  --footnote-size: 16px;
  --graph-line: hsl(40, 90%, 80%);
  --graph-node: hsl(40, 25%, 48%);
  --graph-node-focused: hsl(40, 90%, 60%);
  --graph-node-unresolved: hsl(40, 25%, 40%);
  --graph-text: hsl(40, 90%, 80%);
  --gray: var(--text-muted, hsl(40, 25%, 48%));
  --h1-color: hsl(40, 90%, 80%);
  --h2-color: hsl(40, 90%, 80%);
  --h3-color: hsl(40, 90%, 80%);
  --h4-color: hsl(40, 90%, 80%);
  --h5-color: hsl(40, 90%, 80%);
  --h5-line-height: 1.4em;
  --h6-color: hsl(40, 90%, 80%);
  --h6-line-height: 1.4em;
  --header-height: 2em;
  --heading-formatting: hsl(40, 25%, 40%);
  --heading-spacing: 0;
  --highlight: var(--background-modifier-hover, hsl(40, 90%, 60%));
  --highlighted-folder-background: hsl(40, 25%, 17%);
  --highlighted-folder-color: yellow;
  --highlighted-folder-current-note-color: hsl(40, 90%, 60%);
  --highlighted-folder-font-weight: 400;
  --highlighted-folder-text-color: hsl(40, 70%, 70%);
  --highlighted-folder-title-background: hsl(40,	90%,	40%);
  --highlighted-folder-title-color: hsl(40, 100%, 07%);
  --highlighted-parent-folder-background: hsl(40, 90%, 16%);
  --highlighted-parent-folder-color: yellow;
  --highlighted-parent-folder-font-weight: 400;
  --highlighted-parent-folder-text-color: hsl(40, 60%, 65%);
  --hr-color: hsl(40, 25%, 22%);
  --icon-color: hsl(40, 90%, 60%);
  --icon-color-active: hsl(40, 25%, 14%);
  --icon-color-focused: hsl(40, 90%, 80%);
  --icon-color-hover: hsl(40, 100%, 07%);
  --indentation-guide-color: hsl(40, 25%, 40%);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-title-color: hsl(40, 25%, 40%);
  --inline-title-font: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --inline-title-line-height: 0em;
  --inline-title-size: 18px;
  --inline-title-weight: 400;
  --input-border-width: 1.5px;
  --input-date-separator: hsl(40, 25%, 40%);
  --input-placeholder-color: grey;
  --interactive-accent: hsl(40,	90%,	40%);
  --interactive-accent-hover: hsl(40, 90%, 60%);
  --interactive-accent-hsl: 40, 90%, 40%;
  --interactive-hover: hsl(40, 25%, 22%);
  --light: var(--background-primary, hsl(40, 25%, 10%));
  --light-blue: hsl(211,  50%, 77%);
  --lightgray: var(--background-secondary, hsl(40, 25%, 14%));
  --line-height-normal: 1.4em;
  --link-color: hsl(220, 80%, 70%);
  --link-color-hover: hsl(40, 100%, 07%);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: hsl(220, 80%, 70%);
  --link-external-color-hover: hsl(40, 90%, 60%);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #fb464c;
  --link-unresolved-decoration-color: hsla(40, 90%, 40%, 0.3);
  --link-unresolved-filter: brightness(0.9);
  --list-bullet-size: 0.4em;
  --list-indent: 1.3em;
  --list-marker-color: hsl(40, 90%, 80%);
  --list-marker-color-collapsed: hsl(40, 90%, 60%);
  --list-marker-color-hover: hsl(40, 25%, 48%);
  --list-spacing: 0.05rem;
  --list-spacing-1: 0.3rem;
  --list-spacing-2: 0.2rem;
  --list-spacing-3: 0.1rem;
  --list-spacing-below: 0.8rem;
  --menu-background: hsl(40, 25%, 14%);
  --menu-border-color: hsl(40,	90%,	40%);
  --menu-border-width: 1.5px;
  --metadata-background: hsl(40, 25%, 10%);
  --metadata-border-color: hsl(40, 25%, 22%);
  --metadata-border-radius: 7px;
  --metadata-divider-color: hsl(40, 25%, 22%);
  --metadata-divider-width: 1;
  --metadata-input-background-active: hsl(40, 25%, 10%);
  --metadata-input-font-size: 13.86667px;
  --metadata-input-text-color: hsl(40, 90%, 80%);
  --metadata-label-background-active: hsl(40, 25%, 10%);
  --metadata-label-font-size: 13.86667px;
  --metadata-label-font-weight: 600;
  --metadata-label-text-color: hsl(40, 25%, 48%);
  --metadata-label-text-color-hover: hsl(40, 25%, 48%);
  --metadata-padding: 0;
  --metadata-property-background-active: hsl(40, 90%, 60%);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(40, 25%, 28%);
  --metadata-property-box-shadow-hover: 0 0 0 1.5px hsl(40,	90%,	40%);
  --metadata-property-padding: 0em 0em 0em 0.3em;
  --metadata-sidebar-input-font-size: 13.86667px;
  --metadata-sidebar-label-font-size: 13.86667px;
  --modal-background: hsl(40, 25%, 10%);
  --modal-border-color: hsl(40, 25%, 28%);
  --modal-border-width: 1.5px;
  --modal-height: 88vh;
  --modal-max-height: 98vh;
  --nav-collapse-icon-color: hsl(40, 25%, 40%);
  --nav-collapse-icon-color-collapsed: red;
  --nav-heading-color: hsl(40, 90%, 80%);
  --nav-heading-color-collapsed: hsl(40, 25%, 40%);
  --nav-heading-color-collapsed-hover: hsl(40, 25%, 48%);
  --nav-heading-color-hover: hsl(40, 90%, 80%);
  --nav-indentation-guide-color: hsl(40, 25%, 40%);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: hsl(40,	90%,	40%);
  --nav-item-background-hover: hsl(40, 90%, 60%);
  --nav-item-background-selected: hsl(40, 90%, 16%);
  --nav-item-color: hsl(40, 70%, 70%);
  --nav-item-color-active: hsl(40, 100%, 07%);
  --nav-item-color-highlighted: hsl(40, 90%, 60%);
  --nav-item-color-hover: hsl(40, 100%, 07%);
  --nav-item-color-selected: hsl(40, 60%, 65%);
  --nav-item-padding: 4px
									8px
									4px
									24px;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px;
  --nav-item-size: 13.86667px;
  --nav-tag-color: hsl(40, 25%, 40%);
  --nav-tag-color-active: hsl(40, 25%, 48%);
  --nav-tag-color-hover: hsl(40, 25%, 48%);
  --neutral-100: hsl(  0,   0%, 100%);
  --obsidian-violet: hsl(258,  88%, 66%);
  --p-spacing: 0.5em;
  --pdf-background: hsl(40, 25%, 10%);
  --pdf-page-background: hsl(40, 25%, 10%);
  --pdf-shadow: 0 0 0 1px hsl(40, 25%, 22%);
  --pdf-sidebar-background: hsl(40, 25%, 10%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(40, 25%, 22%);
  --pill-background-hover: hsl(40, 90%, 60%);
  --pill-border-color: hsl(40, 25%, 22%);
  --pill-border-color-hover: hsl(40,	90%,	40%);
  --pill-border-width: 1.5px;
  --pill-color: hsl(40, 25%, 48%);
  --pill-color-hover: hsl(40, 100%, 07%);
  --pill-color-remove: hsl(40,	90%,	40%);
  --pill-color-remove-hover: hsl(40, 100%, 07%);
  --popover-font-size: 14.4px;
  --popover-height: 50vh;
  --popover-width: 46rem;
  --prompt-background: hsl(40, 25%, 10%);
  --prompt-border-color: hsl(40, 25%, 28%);
  --prompt-border-width: 1.5px;
  --prompt-max-height: 80vh;
  --ribbon-background: hsl(40, 25%, 14%);
  --ribbon-background-collapsed: hsl(40, 25%, 10%);
  --royal-blue: hsl(240, 100%, 32%);
  --search-clear-button-color: hsl(40, 25%, 48%);
  --search-icon-color: hsl(40, 90%, 60%);
  --search-result-background: hsl(40, 25%, 10%);
  --secondary: var(--text-accent, hsl(40, 90%, 60%));
  --setting-group-heading-color: hsl(40, 90%, 80%);
  --setting-group-heading-size: 16px;
  --setting-items-border-color: hsl(40, 25%, 22%);
  --shiki-active-tab-border-color: hsl(40, 25%, 48%);
  --shiki-code-background: hsl(40, 25%, 12%);
  --shiki-code-block-spacing: 0.5em;
  --shiki-code-comment: hsl(40, 25%, 40%);
  --shiki-code-normal: hsl(40, 25%, 48%);
  --shiki-code-punctuation: hsl(40, 25%, 48%);
  --shiki-gutter-border-color: hsl(40, 25%, 22%);
  --shiki-gutter-border-width: 1.5px;
  --shiki-gutter-text-color: hsl(40, 25%, 40%);
  --shiki-gutter-text-color-highlight: hsl(40, 25%, 48%);
  --shiki-highlight-neutral: hsl(40, 25%, 48%);
  --shiki-terminal-dots-color: hsl(40, 25%, 40%);
  --shiki-tooltip-background: hsl(40, 90%, 60%);
  --sky-blue: hsl(192, 100%, 57%);
  --slider-thumb-border-color: hsl(40,	90%,	40%);
  --slider-thumb-border-width: 1.5px;
  --slider-track-background: hsl(40, 25%, 22%);
  --solarized-base0: hsl(186,   8%, 55%);
  --solarized-base00: hsl(196,  13%, 45%);
  --solarized-base01: hsl(194,  14%, 40%);
  --solarized-base02: hsl(192,  81%, 14%);
  --solarized-base03: hsl(192, 100%, 11%);
  --solarized-base1: hsl(180,   7%, 60%);
  --solarized-base2: hsl( 46,  42%, 88%);
  --solarized-base3: hsl( 44,  87%, 94%);
  --solarized-blue: hsl(205,  69%, 49%);
  --solarized-cyan: hsl(175,  59%, 40%);
  --solarized-green: hsl( 68, 100%, 30%);
  --solarized-magenta: hsl(331,  64%, 52%);
  --solarized-orange: hsl( 18 , 80%, 44%);
  --solarized-red: hsl(  1,  71%, 52%);
  --solarized-violet: hsl(237,  43%, 60%);
  --solarized-yellow: hsl( 45, 100%, 35%);
  --stabilo-bleu-clair: hsl(196,  70%, 84%);
  --stabilo-bleu-foncé: hsl(197,  70%, 54%);
  --stabilo-jaune-clair: hsl( 48,  90%, 85%);
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%);
  --stabilo-orange-clair: hsl( 30, 100%, 75%);
  --stabilo-orange-foncé: hsl( 30,  89%, 59%);
  --stabilo-rose-clair: hsl(347,  78%, 80%);
  --stabilo-rose-foncé: hsl(352,  77%, 62%);
  --stabilo-vert-clair: hsl(146,  55%, 80%);
  --stabilo-vert-foncé: hsl(161,  99%, 38%);
  --stabilo-violet-clair: hsl(281,  29%, 64%);
  --stabilo-violet-foncé: hsl(330,  68%, 51%);
  --status-bar-background: hsl(40, 90%, 16%);
  --status-bar-border-color: hsl(40,	90%,	40%);
  --status-bar-border-width: 1px;
  --status-bar-font-size: 13.86667px;
  --status-bar-radius: 4px;
  --status-bar-text-color: hsl(40, 60%, 65%);
  --suggestion-background: hsl(40, 25%, 10%);
  --tab-background-active: hsl(40, 25%, 10%);
  --tab-container-background: hsl(40, 25%, 17%);
  --tab-divider-color: hsl(40, 90%, 60%);
  --tab-font-size: 13.86667px;
  --tab-outline-color: hsl(40, 25%, 22%);
  --tab-stacked-font-size: 13.86667px;
  --tab-stacked-header-width: 2em;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: hsl(40, 25%, 14%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(40, 25%, 14%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40,	90%,	40%);
  --tab-text-color: hsl(40, 25%, 48%);
  --tab-text-color-active: hsl(40, 25%, 48%);
  --tab-text-color-focused: hsl(40, 25%, 48%);
  --tab-text-color-focused-active: hsl(40, 25%, 48%);
  --tab-text-color-focused-active-current: hsl(40, 90%, 60%);
  --tab-text-color-focused-highlighted: hsl(40, 90%, 60%);
  --table-add-button-border-color: hsl(40, 25%, 22%);
  --table-background: hsl(40, 25%, 14%);
  --table-border-color: hsl(40, 25%, 20%);
  --table-drag-handle-background-active: hsl(40,	90%,	40%);
  --table-drag-handle-color: hsl(40, 25%, 40%);
  --table-drag-handle-color-active: hsl(40, 100%, 07%);
  --table-header-background: hsl(40, 25%, 16%);
  --table-header-background-hover: hsl(40, 25%, 16%);
  --table-header-border-color: hsl(40, 25%, 20%);
  --table-header-color: hsl(40, 90%, 80%);
  --table-header-size: 16.2px;
  --table-row-alt-background: hsl(40, 25%, 12%);
  --table-row-alt-background-hover: hsl(40, 25%, 12%);
  --table-row-background-hover: hsl(40, 25%, 14%);
  --table-selection: hsla(40, 90%, 40%, 0.1);
  --table-selection-border-color: hsl(40,	90%,	40%);
  --table-text-size: 16.2px;
  --tag-background: hsl(40,	90%,	40%);
  --tag-background-hover: hsl(40, 90%, 60%);
  --tag-border-color: hsla(40, 90%, 40%, 0.15);
  --tag-border-color-hover: hsla(40, 90%, 40%, 0.15);
  --tag-color: hsl(40, 100%, 07%);
  --tag-color-hover: hsl(40, 100%, 07%);
  --tertiary: var(--text-accent-hover, hsl(40, 100%, 07%));
  --text-accent: hsl(40, 90%, 60%);
  --text-accent-hover: hsl(40, 100%, 07%);
  --text-faint: hsl(40, 25%, 40%);
  --text-muted: hsl(40, 25%, 48%);
  --text-normal: hsl(40, 90%, 80%);
  --text-on-accent: hsl(40, 100%, 07%);
  --text-on-accent-inverted: hsl(40, 90%, 60%);
  --text-selection: hsla(40, 90%, 60%, 0.2);
  --textHighlight: var(--background-modifier-hover, hsl(40, 90%, 60%));
  --titlebar-background: #333;
  --titlebar-background-focused: hsl(40, 25%, 17%);
  --titlebar-border-color: hsl(40, 25%, 22%);
  --titlebar-text-color: hsl(40, 25%, 48%);
  --titlebar-text-color-focused: hsl(40, 90%, 80%);
  --toggle-thumb-color: hsl(40, 25%, 14%);
  --traffic-lights-offset-x: 2em;
  --traffic-lights-offset-y: 2em;
  --vault-profile-color: hsl(40, 90%, 60%);
  --vault-profile-color-hover: hsl(40, 100%, 07%);
  --vault-profile-font-size: 21.33333px;
  --vault-profile-font-weight: 700;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(54, 47, 33);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
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

html[saved-theme="dark"] body html {
  --blue: hsl(246,  74%, 43%);
  --dark-blue: hsl(233,  54%, 28%);
  --favorite-blue: hsl(246,  91%, 22%);
  --light-blue: hsl(211,  50%, 77%);
  --neutral-100: hsl(  0,   0%, 100%);
  --obsidian-violet: hsl(258,  88%, 66%);
  --royal-blue: hsl(240, 100%, 32%);
  --sky-blue: hsl(192, 100%, 57%);
  --solarized-base0: hsl(186,   8%, 55%);
  --solarized-base00: hsl(196,  13%, 45%);
  --solarized-base01: hsl(194,  14%, 40%);
  --solarized-base02: hsl(192,  81%, 14%);
  --solarized-base03: hsl(192, 100%, 11%);
  --solarized-base1: hsl(180,   7%, 60%);
  --solarized-base2: hsl( 46,  42%, 88%);
  --solarized-base3: hsl( 44,  87%, 94%);
  --solarized-blue: hsl(205,  69%, 49%);
  --solarized-cyan: hsl(175,  59%, 40%);
  --solarized-green: hsl( 68, 100%, 30%);
  --solarized-magenta: hsl(331,  64%, 52%);
  --solarized-orange: hsl( 18 , 80%, 44%);
  --solarized-red: hsl(  1,  71%, 52%);
  --solarized-violet: hsl(237,  43%, 60%);
  --solarized-yellow: hsl( 45, 100%, 35%);
  --stabilo-bleu-clair: hsl(196,  70%, 84%);
  --stabilo-bleu-foncé: hsl(197,  70%, 54%);
  --stabilo-jaune-clair: hsl( 48,  90%, 85%);
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%);
  --stabilo-orange-clair: hsl( 30, 100%, 75%);
  --stabilo-orange-foncé: hsl( 30,  89%, 59%);
  --stabilo-rose-clair: hsl(347,  78%, 80%);
  --stabilo-rose-foncé: hsl(352,  77%, 62%);
  --stabilo-vert-clair: hsl(146,  55%, 80%);
  --stabilo-vert-foncé: hsl(161,  99%, 38%);
  --stabilo-violet-clair: hsl(281,  29%, 64%);
  --stabilo-violet-foncé: hsl(330,  68%, 51%);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(250, 219, 158);
  outline: rgb(250, 219, 158) none 0px;
  text-decoration-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration-color: rgb(117, 158, 240);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 158, 240);
  outline: rgb(117, 158, 240) none 0px;
  text-decoration-color: rgb(117, 158, 240);
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 33, 23);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(128, 111, 77);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(128, 111, 77);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(250, 219, 158);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 28, 19);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 111, 77);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(250, 219, 158);
  padding-left: 16px;
  padding-right: 16px;
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

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(36, 24, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(128, 111, 77);
  font-size: 18px;
  font-weight: 400;
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(128, 111, 77);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(232, 196, 125);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(232, 196, 125);
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(38, 33, 23);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(64, 55, 38);
  color: rgb(250, 219, 158);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(32, 28, 19);
  color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(45, 39, 27);
  border-color: rgb(250, 219, 158);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(54, 47, 33);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(250, 219, 158);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 219, 158);
  border-left-color: rgb(250, 219, 158);
  border-right-color: rgb(250, 219, 158);
  border-top-color: rgb(250, 219, 158);
  color: rgb(250, 219, 158);
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
  --OT-UI-font-size: 16px;
  --OT-YAML-color: hsl(27, 35%, 50%);
  --OT-blockquote-font-family: Questa, "Stone Serif ITC Pro","Times Roman", serif;
  --OT-blockquote-font-size: 17.1px;
  --OT-button-OFF-bg: hsl(27, 20%, 80%);
  --OT-button-ON-bg: hsl(27,	50%,	70%);
  --OT-button-background-hover: hsl(27,	50%,	50%);
  --OT-button-background-normal: hsl(27,	50%,	95%);
  --OT-button-cta-background-normal: hsl(27,	50%,	70%);
  --OT-button-cta-text-normal: hsl(27, 50%, 96%);
  --OT-button-text-hover: hsl(27, 50%, 95%);
  --OT-button-text-normal: hsl(27, 50%, 40%);
  --OT-calendar-day-color: hsl(27, 35%, 32%);
  --OT-calendar-today-color: hsl(27, 35%, 32%);
  --OT-callout-gallery-gap: 5px;
  --OT-clickable-icon-in-header: hsl(27,	50%,	50%);
  --OT-clickable-icon-in-tab-header: hsl(27,	50%,	50%);
  --OT-clickable-icon-on-base-20: hsl(27,	50%,	50%);
  --OT-color-muted-on-accent-1: hsl(27, 50%, 88%);
  --OT-color-muted-on-accent-2: hsl(27, 50%, 92%);
  --OT-color-on-accent-1: hsl(27, 50%, 95%);
  --OT-color-on-accent-2: hsl(27, 50%, 96%);
  --OT-color-on-accent-3: hsl(27, 50%, 40%);
  --OT-editMode-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif,
    												"Comic Sans MS",
													ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --OT-editMode-line-height: 1.4em;
  --OT-editMode-line-width: 44em;
  --OT-editMode-tableText-percent: 90;
  --OT-editMode-text-size: 18px;
  --OT-img-max-height: 33rem;
  --OT-kanban-font: "Uberhand Pro";
  --OT-kanban-font-size: 16px;
  --OT-kbd: hsl(27, 35%, 32%);
  --OT-kbd-background: floralwhite;
  --OT-menu-text-color: hsl(27, 35%, 32%);
  --OT-menu-text-muted: hsl(27, 35%, 48%);
  --OT-metadata-property-icon: hsl(27,	50%,	50%);
  --OT-nav-folder-title-color: hsl(27, 35%, 32%);
  --OT-nav-item-muted: hsl(27, 35%, 48%);
  --OT-nav-item-vertical-padding: 4px;
  --OT-pill-background: hsl(27,	50%,	70%);
  --OT-pill-color: hsl(27, 50%, 96%);
  --OT-readingMode-line-height: 1.4em;
  --OT-readingMode-line-width: 39em;
  --OT-readingMode-tableText-percent: 90;
  --OT-readingMode-text-size: 18px;
  --OT-ribbon-icon-color-sidebar-is-collapsed: hsl(27,	50%,	50%);
  --OT-ribbon-icon-color-sidebar-is-open: hsl(27,	50%,	50%);
  --OT-search-settings-item-name: hsl(27, 35%, 32%);
  --OT-setting-item-description: hsl(27, 35%, 48%);
  --OT-setting-item-name: hsl(27, 35%, 32%);
  --OT-sidebarTab-background-active: hsl(27,	50%,	70%);
  --OT-sidebarTab-background-active-hover: hsl(27,	50%,	50%);
  --OT-space-below-h1: 1.0rem;
  --OT-space-below-h2: 1.5rem;
  --OT-space-below-h3: 0.4rem;
  --OT-space-below-h4: 0.2rem;
  --OT-space-below-h5: 0.2rem;
  --OT-space-below-h6: 0.0rem;
  --OT-stabilo-mark: hsl( 48,  90%, 85%);
  --OT-stabilo-text: hsl(27, 35%, 32%);
  --OT-status-bar-padding: 6px;
  --OT-syntax-markers: hsl(27, 35%, 68%);
  --OT-tab-background-active-hover: hsl(27,	50%,	50%);
  --OT-table-alt-background: hsl(27, 35%, 91%);
  --OT-table-background: hsl(27, 35%, 95%);
  --OT-theme-h: 27;
  --OT-theme-s: 35%;
  --OT-tree-item-flair-background: hsl(27,	50%,	95%);
  --OT-tree-item-flair-color: hsl(27, 50%, 40%);
  --OT-vertical-tab-header-group-title: hsl(27, 35%, 48%);
  --OT-view-header-title-focus-color: hsl(27,	50%,	50%);
  --OT-view-header-title-no-focus-color: hsl(27, 35%, 48%);
  --accent-h: 27;
  --accent-l: 70%;
  --accent-s: 50%;
  --background-modifier-active-hover: hsl(27,	50%,	50%);
  --background-modifier-border: hsl(27, 35%, 81%);
  --background-modifier-border-focus: hsl(27, 35%, 32%);
  --background-modifier-border-hover: hsl(27,	50%,	70%);
  --background-modifier-form-field: hsl(27, 35%, 94%);
  --background-modifier-form-field-hover: hsl(27, 35%, 94%);
  --background-modifier-hover: hsl(27,	50%,	50%);
  --background-modifier-message: hsl(27,	50%,	50%);
  --background-modifier-success: rgb(106, 245, 161);
  --background-modifier-success-rgb: 106, 245, 161;
  --background-primary: hsl(27, 35%, 94%);
  --background-secondary: hsl(27, 35%, 89%);
  --background-secondary-alt: hsl(27, 35%, 85%);
  --bases-cards-background: hsl(27, 35%, 94%);
  --bases-cards-border-width: 1.5px;
  --bases-cards-shadow: 0 0 0 1px hsl(27, 35%, 81%);
  --bases-cards-shadow-hover: 0 0 0 2px hsl(27,	50%,	70%);
  --bases-embed-border-color: hsl(27, 35%, 81%);
  --bases-group-heading-property-color: hsl(27, 35%, 48%);
  --bases-group-heading-property-size: 12.8px;
  --bases-header-border-width: 0 0 1.5px 0;
  --bases-table-border-color: hsl(27, 35%, 32%);
  --bases-table-cell-background-active: hsl(27, 35%, 94%);
  --bases-table-cell-background-disabled: hsl(27, 15%, 80%);
  --bases-table-cell-background-selected: hsla(27, 50%, 70%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(27, 35%, 32%);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(27,	50%,	70%);
  --bases-table-column-border-width: 1.5px;
  --bases-table-container-border-width: 1.5px;
  --bases-table-header-background: hsl(27, 35%, 94%);
  --bases-table-header-background-hover: hsl(27,	50%,	50%);
  --bases-table-header-color: hsl(27, 50%, 40%);
  --bases-table-row-background-hover: hsl(27, 35%, 91%);
  --bases-table-row-border-width: 1.5px;
  --bases-table-summary-background: hsl(27, 35%, 94%);
  --bases-table-summary-background-hover: hsl(27,	50%,	50%);
  --blockquote-background-color: hsl(27, 35%, 98%);
  --blockquote-border-color: hsl(27,	50%,	70%);
  --blockquote-border-thickness: 0;
  --blockquote-font-style: italic;
  --blockquote-style: italic;
  --blue: hsl(246,  74%, 43%);
  --blur-background: color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent) linear-gradient(hsl(27, 35%, 94%), color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent));
  --border-width: 1.5px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-content-padding: 0 1rem;
  --callout-padding: 0.5rem;
  --canvas-background: hsl(27, 35%, 94%);
  --canvas-card-label-color: hsl(27, 35%, 68%);
  --canvas-dot-pattern: hsl(27, 35%, 32%);
  --caret-color: red;
  --checkbox-border-color: hsl(27, 35%, 32%);
  --checkbox-border-color-hover: hsl(27,	50%,	50%);
  --checkbox-color: hsl(27, 35%, 32%);
  --checkbox-color-hover: hsl(27,	50%,	50%);
  --checkbox-marker-color: hsl(27, 35%, 94%);
  --checkbox-radius: 0.3rem;
  --checkbox-size: 0.85rem;
  --checklist-done-color: hsl(27, 35%, 68%);
  --checklist-done-decoration: none;
  --code-background: hsl(27, 35%, 95%);
  --code-border-color: hsl(27, 35%, 32%);
  --code-border-width: 1px;
  --code-bracket-background: hsl(27,	50%,	50%);
  --code-comment: hsl(27, 35%, 68%);
  --code-normal: hsl(27, 35%, 32%);
  --code-operator: hsl(27, 35%, 32%);
  --code-punctuation: hsl(27, 35%, 48%);
  --code-size: 0.8em;
  --code-string: hsl(207, 35%, 50%);
  --code-tag: hsl(27, 35%, 68%);
  --collapse-icon-color: hsl(27,	50%,	70%);
  --collapse-icon-color-collapsed: hsl(27,	50%,	70%);
  --color-accent: hsl(27,	50%,	70%);
  --color-accent-1: hsl(27,	50%,	50%);
  --color-accent-2: hsl(27,	50%,	70%);
  --color-accent-3: hsl(27,	50%,	95%);
  --color-accent-hsl: 27, 50%, 70%;
  --color-base-00: hsl(27, 35%, 94%);
  --color-base-05: hsl(27, 35%, 85%);
  --color-base-100: hsl(27, 35%, 32%);
  --color-base-20: hsl(27, 35%, 89%);
  --color-base-35: hsl(27, 35%, 81%);
  --color-base-40: hsl(27, 35%, 32%);
  --color-base-50: hsl(27, 35%, 68%);
  --dark: var(--text-normal, hsl(27, 35%, 32%));
  --dark-blue: hsl(233,  54%, 28%);
  --darkgray: var(--text-normal, hsl(27, 35%, 32%));
  --divider-color: hsl(27, 35%, 81%);
  --divider-color-hover: hsl(27,	50%,	70%);
  --divider-width: 2px;
  --dropdown-background: hsl(27,	50%,	95%);
  --dropdown-background-hover: hsl(27,	50%,	50%);
  --dynamic-outline-active-heading-background: hsl(27,	50%,	95%);
  --dynamic-outline-background: hsl(27, 35%, 89%);
  --dynamic-outline-background-accent: lime;
  --dynamic-outline-background-hover: hsl(27,	50%,	70%);
  --dynamic-outline-background-modifier-hover-lighter: lime;
  --dynamic-outline-color: hsl(27, 35%, 32%);
  --dynamic-outline-h1-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-h2-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-h3-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-h4-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-h5-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-h6-text-color: hsl(27, 35%, 32%);
  --dynamic-outline-text-color: hsl(27, 35%, 32%);
  --embed-block-shadow-hover: 0 0 0 1px hsl(27, 35%, 81%), inset 0 0 0 1px hsl(27, 35%, 81%);
  --embed-border-end: 1px dotted;
  --embed-border-start: 0;
  --embed-padding: 0;
  --favorite-blue: hsl(246,  91%, 22%);
  --file-header-background: hsl(27, 35%, 94%);
  --file-header-background-focused: hsl(27, 35%, 94%);
  --file-header-border: 1.5px solid hsl(27, 35%, 81%);
  --file-header-font-size: 13.86667px;
  --file-header-justify: left;
  --file-line-width: 39em;
  --file-margins: 0.5em 32px;
  --flair-background: hsl(27,	50%,	95%);
  --flair-color: hsl(27, 35%, 32%);
  --floating-toc-background-color: hsl(27, 35%, 94%);
  --floating-toc-font-color: hsl(27, 35%, 32%);
  --floating-toc-header-background-color: hsl(27, 35%, 94%);
  --floating-toc-hover-color: hsl(27, 50%, 95%);
  --font-ui-large: 21.33333px;
  --font-ui-medium: 16px;
  --font-ui-small: 13.86667px;
  --font-ui-smaller: 12.8px;
  --footnote-divider-color: hsl(27, 35%, 81%);
  --footnote-divider-width: 1.5px;
  --footnote-gap: 0.5rem;
  --footnote-id-color: hsl(27, 35%, 32%);
  --footnote-id-color-no-occurrences: hsl(27, 35%, 68%);
  --footnote-id-delimiter: ")";
  --footnote-input-background-active: hsl(27, 35%, 94%);
  --footnote-line-height: 1.3;
  --footnote-size: 16px;
  --graph-line: hsl(27, 35%, 32%);
  --graph-node: hsl(27, 35%, 48%);
  --graph-node-focused: hsl(27,	50%,	70%);
  --graph-node-unresolved: hsl(27, 35%, 68%);
  --graph-text: hsl(27, 35%, 32%);
  --gray: var(--text-muted, hsl(27, 35%, 48%));
  --h1-color: hsl(27, 35%, 32%);
  --h2-color: hsl(27, 35%, 32%);
  --h3-color: hsl(27, 35%, 32%);
  --h4-color: hsl(27, 35%, 32%);
  --h5-color: hsl(27, 35%, 32%);
  --h5-line-height: 1.4em;
  --h6-color: hsl(27, 35%, 32%);
  --h6-line-height: 1.4em;
  --header-height: 2em;
  --heading-formatting: hsl(27, 35%, 68%);
  --heading-spacing: 0;
  --highlight: var(--background-modifier-hover, hsl(27,	50%,	50%));
  --highlighted-folder-background: hsl(27, 35%, 85%);
  --highlighted-folder-color: yellow;
  --highlighted-folder-current-note-color: hsl(27,	50%,	50%);
  --highlighted-folder-font-weight: 400;
  --highlighted-folder-text-color: hsl(27, 35%, 32%);
  --highlighted-folder-title-background: hsl(27,	50%,	70%);
  --highlighted-folder-title-color: hsl(27, 50%, 96%);
  --highlighted-parent-folder-background: hsl(27,	50%,	95%);
  --highlighted-parent-folder-color: yellow;
  --highlighted-parent-folder-font-weight: 400;
  --highlighted-parent-folder-text-color: hsl(27, 50%, 40%);
  --hr-color: hsl(27, 35%, 81%);
  --icon-color: hsl(27,	50%,	50%);
  --icon-color-active: hsl(27, 35%, 89%);
  --icon-color-focused: hsl(27, 35%, 32%);
  --icon-color-hover: hsl(27, 50%, 95%);
  --indentation-guide-color: hsl(27, 35%, 68%);
  --indentation-guide-width: 1.5px;
  --indentation-guide-width-active: 1.5px;
  --inline-title-color: hsl(27, 35%, 68%);
  --inline-title-font: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --inline-title-line-height: 0em;
  --inline-title-size: 18px;
  --inline-title-weight: 400;
  --input-border-width: 1.5px;
  --input-date-separator: hsl(27, 35%, 68%);
  --input-placeholder-color: grey;
  --interactive-accent: hsl(27,	50%,	70%);
  --interactive-accent-hover: hsl(27,	50%,	50%);
  --interactive-accent-hsl: 27, 50%, 70%;
  --interactive-hover: hsl(27,	50%,	50%);
  --interactive-normal: hsl(27,	50%,	95%);
  --light: var(--background-primary, hsl(27, 35%, 94%));
  --light-blue: hsl(211,  50%, 77%);
  --lightgray: var(--background-secondary, hsl(27, 35%, 89%));
  --line-height-normal: 1.4em;
  --link-color: hsl(207, 35%, 50%);
  --link-color-hover: hsl(27, 50%, 95%);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: hsl(207, 35%, 50%);
  --link-external-color-hover: hsl(27,	50%,	50%);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #e93147;
  --link-unresolved-decoration-color: hsla(27, 50%, 70%, 0.3);
  --link-unresolved-filter: brightness(0.9);
  --list-bullet-size: 0.4em;
  --list-indent: 1.3em;
  --list-marker-color: hsl(27, 35%, 32%);
  --list-marker-color-collapsed: hsl(27,	50%,	70%);
  --list-marker-color-hover: hsl(27, 35%, 48%);
  --list-spacing: 0.05rem;
  --list-spacing-1: 0.3rem;
  --list-spacing-2: 0.2rem;
  --list-spacing-3: 0.1rem;
  --list-spacing-below: 0.8rem;
  --menu-background: hsl(27, 35%, 89%);
  --menu-border-color: hsl(27,	50%,	70%);
  --menu-border-width: 1.5px;
  --metadata-background: hsl(27, 35%, 94%);
  --metadata-border-color: hsl(27, 35%, 81%);
  --metadata-border-radius: 7px;
  --metadata-divider-color: hsl(27, 35%, 81%);
  --metadata-divider-width: 1;
  --metadata-input-background-active: hsl(27, 35%, 94%);
  --metadata-input-font-size: 13.86667px;
  --metadata-input-text-color: hsl(27, 35%, 32%);
  --metadata-label-background-active: hsl(27, 35%, 94%);
  --metadata-label-font-size: 13.86667px;
  --metadata-label-font-weight: 600;
  --metadata-label-text-color: hsl(27, 35%, 48%);
  --metadata-label-text-color-hover: hsl(27, 35%, 48%);
  --metadata-padding: 0;
  --metadata-property-background-active: hsl(27,	50%,	50%);
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(27, 35%, 32%);
  --metadata-property-box-shadow-hover: 0 0 0 1.5px hsl(27,	50%,	70%);
  --metadata-property-padding: 0em 0em 0em 0.3em;
  --metadata-sidebar-input-font-size: 13.86667px;
  --metadata-sidebar-label-font-size: 13.86667px;
  --modal-background: hsl(27, 35%, 94%);
  --modal-border-color: hsl(27, 35%, 32%);
  --modal-border-width: 1.5px;
  --modal-height: 88vh;
  --modal-max-height: 98vh;
  --nav-collapse-icon-color: hsl(27, 35%, 68%);
  --nav-collapse-icon-color-collapsed: red;
  --nav-heading-color: hsl(27, 35%, 32%);
  --nav-heading-color-collapsed: hsl(27, 35%, 68%);
  --nav-heading-color-collapsed-hover: hsl(27, 35%, 48%);
  --nav-heading-color-hover: hsl(27, 35%, 32%);
  --nav-indentation-guide-color: hsl(27, 35%, 68%);
  --nav-indentation-guide-width: 1.5px;
  --nav-item-background-active: hsl(27,	50%,	70%);
  --nav-item-background-hover: hsl(27,	50%,	50%);
  --nav-item-background-selected: hsl(27,	50%,	95%);
  --nav-item-color: hsl(27, 35%, 32%);
  --nav-item-color-active: hsl(27, 50%, 96%);
  --nav-item-color-highlighted: hsl(27,	50%,	70%);
  --nav-item-color-hover: hsl(27, 50%, 95%);
  --nav-item-color-selected: hsl(27, 50%, 40%);
  --nav-item-padding: 4px
									8px
									4px
									24px;
  --nav-item-parent-padding: 4px
									8px
									4px
									24px;
  --nav-item-size: 13.86667px;
  --nav-tag-color: hsl(27, 35%, 68%);
  --nav-tag-color-active: hsl(27, 35%, 48%);
  --nav-tag-color-hover: hsl(27, 35%, 48%);
  --neutral-100: hsl(  0,   0%, 100%);
  --obsidian-violet: hsl(258,  88%, 66%);
  --p-spacing: 0.5em;
  --pdf-background: hsl(27, 35%, 94%);
  --pdf-page-background: hsl(27, 35%, 94%);
  --pdf-sidebar-background: hsl(27, 35%, 94%);
  --pill-background-hover: hsl(27,	50%,	50%);
  --pill-border-color: hsl(27, 35%, 81%);
  --pill-border-color-hover: hsl(27,	50%,	70%);
  --pill-border-width: 1.5px;
  --pill-color: hsl(27, 35%, 48%);
  --pill-color-hover: hsl(27, 50%, 95%);
  --pill-color-remove: hsl(27,	50%,	70%);
  --pill-color-remove-hover: hsl(27, 50%, 95%);
  --popover-font-size: 14.4px;
  --popover-height: 50vh;
  --popover-width: 46rem;
  --prompt-background: hsl(27, 35%, 94%);
  --prompt-border-color: hsl(27, 35%, 32%);
  --prompt-border-width: 1.5px;
  --prompt-max-height: 80vh;
  --raised-background: color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent) linear-gradient(hsl(27, 35%, 94%), color-mix(in srgb, hsl(27, 35%, 94%) 65%, transparent));
  --ribbon-background: hsl(27, 35%, 89%);
  --ribbon-background-collapsed: hsl(27, 35%, 94%);
  --royal-blue: hsl(240, 100%, 32%);
  --search-clear-button-color: hsl(27, 35%, 48%);
  --search-icon-color: hsl(27,	50%,	50%);
  --search-result-background: hsl(27, 35%, 94%);
  --secondary: var(--text-accent, hsl(27,	50%,	70%));
  --setting-group-heading-color: hsl(27, 35%, 32%);
  --setting-group-heading-size: 16px;
  --setting-items-border-color: hsl(27, 35%, 81%);
  --shiki-active-tab-border-color: hsl(27, 35%, 48%);
  --shiki-code-background: hsl(27, 35%, 95%);
  --shiki-code-block-spacing: 0.5em;
  --shiki-code-comment: hsl(27, 35%, 68%);
  --shiki-code-normal: hsl(27, 35%, 48%);
  --shiki-code-punctuation: hsl(27, 35%, 48%);
  --shiki-gutter-border-color: hsl(27, 35%, 81%);
  --shiki-gutter-border-width: 1.5px;
  --shiki-gutter-text-color: hsl(27, 35%, 68%);
  --shiki-gutter-text-color-highlight: hsl(27, 35%, 48%);
  --shiki-highlight-neutral: hsl(27, 35%, 48%);
  --shiki-terminal-dots-color: hsl(27, 35%, 68%);
  --shiki-tooltip-background: hsl(27,	50%,	50%);
  --sky-blue: hsl(192, 100%, 57%);
  --slider-thumb-border-color: hsl(27,	50%,	70%);
  --slider-thumb-border-width: 1.5px;
  --slider-track-background: hsl(27, 35%, 81%);
  --solarized-base0: hsl(186,   8%, 55%);
  --solarized-base00: hsl(196,  13%, 45%);
  --solarized-base01: hsl(194,  14%, 40%);
  --solarized-base02: hsl(192,  81%, 14%);
  --solarized-base03: hsl(192, 100%, 11%);
  --solarized-base1: hsl(180,   7%, 60%);
  --solarized-base2: hsl( 46,  42%, 88%);
  --solarized-base3: hsl( 44,  87%, 94%);
  --solarized-blue: hsl(205,  69%, 49%);
  --solarized-cyan: hsl(175,  59%, 40%);
  --solarized-green: hsl( 68, 100%, 30%);
  --solarized-magenta: hsl(331,  64%, 52%);
  --solarized-orange: hsl( 18 , 80%, 44%);
  --solarized-red: hsl(  1,  71%, 52%);
  --solarized-violet: hsl(237,  43%, 60%);
  --solarized-yellow: hsl( 45, 100%, 35%);
  --stabilo-bleu-clair: hsl(196,  70%, 84%);
  --stabilo-bleu-foncé: hsl(197,  70%, 54%);
  --stabilo-jaune-clair: hsl( 48,  90%, 85%);
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%);
  --stabilo-orange-clair: hsl( 30, 100%, 75%);
  --stabilo-orange-foncé: hsl( 30,  89%, 59%);
  --stabilo-rose-clair: hsl(347,  78%, 80%);
  --stabilo-rose-foncé: hsl(352,  77%, 62%);
  --stabilo-vert-clair: hsl(146,  55%, 80%);
  --stabilo-vert-foncé: hsl(161,  99%, 38%);
  --stabilo-violet-clair: hsl(281,  29%, 64%);
  --stabilo-violet-foncé: hsl(330,  68%, 51%);
  --status-bar-background: hsl(27,	50%,	95%);
  --status-bar-border-color: hsl(27,	50%,	70%);
  --status-bar-border-width: 1px;
  --status-bar-font-size: 13.86667px;
  --status-bar-radius: 4px;
  --status-bar-text-color: hsl(27, 50%, 40%);
  --suggestion-background: hsl(27, 35%, 94%);
  --tab-background-active: hsl(27, 35%, 94%);
  --tab-container-background: hsl(27, 35%, 85%);
  --tab-divider-color: hsl(27,	50%,	50%);
  --tab-font-size: 13.86667px;
  --tab-outline-color: hsl(27, 35%, 81%);
  --tab-stacked-font-size: 13.86667px;
  --tab-stacked-header-width: 2em;
  --tab-stacked-text-transform: rotate(180deg);
  --tab-switcher-background: hsl(27, 35%, 89%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(27, 35%, 89%), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(27,	50%,	70%);
  --tab-text-color: hsl(27, 35%, 48%);
  --tab-text-color-active: hsl(27, 35%, 48%);
  --tab-text-color-focused: hsl(27, 35%, 48%);
  --tab-text-color-focused-active: hsl(27, 35%, 48%);
  --tab-text-color-focused-active-current: hsl(27,	50%,	50%);
  --tab-text-color-focused-highlighted: hsl(27,	50%,	70%);
  --table-add-button-border-color: hsl(27, 35%, 81%);
  --table-background: hsl(27, 35%, 91%);
  --table-border-color: hsl(27, 35%, 32%);
  --table-drag-handle-background-active: hsl(27,	50%,	70%);
  --table-drag-handle-color: hsl(27, 35%, 68%);
  --table-drag-handle-color-active: hsl(27, 50%, 96%);
  --table-header-background: hsl(27, 35%, 92%);
  --table-header-background-hover: hsl(27, 35%, 92%);
  --table-header-border-color: hsl(27, 35%, 32%);
  --table-header-color: hsl(27, 35%, 32%);
  --table-header-size: 16.2px;
  --table-row-alt-background: hsl(27, 35%, 95%);
  --table-row-alt-background-hover: hsl(27, 35%, 95%);
  --table-row-background-hover: hsl(27, 35%, 91%);
  --table-selection: hsla(27, 50%, 70%, 0.1);
  --table-selection-border-color: hsl(27,	50%,	70%);
  --table-text-size: 16.2px;
  --tag-background: hsl(27,	50%,	70%);
  --tag-background-hover: hsl(27,	50%,	50%);
  --tag-border-color: hsla(27, 50%, 70%, 0.15);
  --tag-border-color-hover: hsla(27, 50%, 70%, 0.15);
  --tag-color: hsl(27, 50%, 96%);
  --tag-color-hover: hsl(27, 50%, 95%);
  --tertiary: var(--text-accent-hover, hsl(27, 50%, 95%));
  --text-accent: hsl(27,	50%,	70%);
  --text-accent-hover: hsl(27, 50%, 95%);
  --text-faint: hsl(27, 35%, 68%);
  --text-muted: hsl(27, 35%, 48%);
  --text-normal: hsl(27, 35%, 32%);
  --text-on-accent: hsl(27, 50%, 96%);
  --text-on-accent-inverted: hsl(27,	50%,	50%);
  --text-selection: hsla(27, 35%, 40%, 0.2);
  --textHighlight: var(--background-modifier-hover, hsl(27,	50%,	50%));
  --titlebar-background: #333;
  --titlebar-background-focused: hsl(27, 35%, 85%);
  --titlebar-border-color: hsl(27, 35%, 81%);
  --titlebar-text-color: hsl(27, 35%, 48%);
  --titlebar-text-color-focused: hsl(27, 35%, 32%);
  --toggle-thumb-color: hsl(27, 35%, 89%);
  --traffic-lights-offset-x: 2em;
  --traffic-lights-offset-y: 2em;
  --vault-profile-color: hsl(27,	50%,	50%);
  --vault-profile-color-hover: hsl(27, 50%, 95%);
  --vault-profile-font-size: 21.33333px;
  --vault-profile-font-weight: 700;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 215, 203);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
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

html[saved-theme="light"] body html {
  --blue: hsl(246,  74%, 43%);
  --dark-blue: hsl(233,  54%, 28%);
  --favorite-blue: hsl(246,  91%, 22%);
  --light-blue: hsl(211,  50%, 77%);
  --neutral-100: hsl(  0,   0%, 100%);
  --obsidian-violet: hsl(258,  88%, 66%);
  --royal-blue: hsl(240, 100%, 32%);
  --sky-blue: hsl(192, 100%, 57%);
  --solarized-base0: hsl(186,   8%, 55%);
  --solarized-base00: hsl(196,  13%, 45%);
  --solarized-base01: hsl(194,  14%, 40%);
  --solarized-base02: hsl(192,  81%, 14%);
  --solarized-base03: hsl(192, 100%, 11%);
  --solarized-base1: hsl(180,   7%, 60%);
  --solarized-base2: hsl( 46,  42%, 88%);
  --solarized-base3: hsl( 44,  87%, 94%);
  --solarized-blue: hsl(205,  69%, 49%);
  --solarized-cyan: hsl(175,  59%, 40%);
  --solarized-green: hsl( 68, 100%, 30%);
  --solarized-magenta: hsl(331,  64%, 52%);
  --solarized-orange: hsl( 18 , 80%, 44%);
  --solarized-red: hsl(  1,  71%, 52%);
  --solarized-violet: hsl(237,  43%, 60%);
  --solarized-yellow: hsl( 45, 100%, 35%);
  --stabilo-bleu-clair: hsl(196,  70%, 84%);
  --stabilo-bleu-foncé: hsl(197,  70%, 54%);
  --stabilo-jaune-clair: hsl( 48,  90%, 85%);
  --stabilo-jaune-foncé: hsl( 57,  86%, 60%);
  --stabilo-orange-clair: hsl( 30, 100%, 75%);
  --stabilo-orange-foncé: hsl( 30,  89%, 59%);
  --stabilo-rose-clair: hsl(347,  78%, 80%);
  --stabilo-rose-foncé: hsl(352,  77%, 62%);
  --stabilo-vert-clair: hsl(146,  55%, 80%);
  --stabilo-vert-foncé: hsl(161,  99%, 38%);
  --stabilo-violet-clair: hsl(281,  29%, 64%);
  --stabilo-violet-foncé: hsl(330,  68%, 51%);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(110, 79, 53);
  outline: rgb(110, 79, 53) none 0px;
  text-decoration-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration-color: rgb(83, 132, 172);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(83, 132, 172);
  outline: rgb(83, 132, 172) none 0px;
  text-decoration-color: rgb(83, 132, 172);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  padding-bottom: 1.92px;
  padding-left: 3.84px;
  padding-right: 3.84px;
  padding-top: 1.92px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(247, 242, 238);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(202, 171, 145);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(202, 171, 145);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(110, 79, 53);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 239, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(202, 171, 145);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(110, 79, 53);
  padding-left: 16px;
  padding-right: 16px;
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

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(250, 244, 240);
}

html[saved-theme="light"] body h1 {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(202, 171, 145);
  font-size: 18px;
  font-weight: 400;
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(202, 171, 145);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(110, 79, 53);
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(247, 242, 238);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 239, 234);
  color: rgb(110, 79, 53);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(237, 226, 217);
  border-color: rgb(110, 79, 53);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(230, 215, 203);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(110, 79, 53);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(110, 79, 53);
  border-left-color: rgb(110, 79, 53);
  border-right-color: rgb(110, 79, 53);
  border-top-color: rgb(110, 79, 53);
  color: rgb(110, 79, 53);
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
