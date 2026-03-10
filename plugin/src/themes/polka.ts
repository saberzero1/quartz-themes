import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "polka",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["rubik", "ibm-plex-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 189 !important;
  --accent-l: 49% !important;
  --accent-on-selection: rgba(0, 212, 250, 0.4) !important;
  --accent-s: 100% !important;
  --accent-soft-dark: rgba(210, 214, 223, 0.1) !important;
  --accent-soft-hsl: 221, 16.65%, 85% !important;
  --accent-soft-light: rgba(210, 214, 223, 0.05) !important;
  --background-contrast: 3.504% !important;
  --background-dark: rgb(10, 18, 30) !important;
  --background-extra-dark: #000 !important;
  --background-h: 221 !important;
  --background-l: 12.9% !important;
  --background-modifier-active-hover: rgba(210, 214, 223, 0.05) !important;
  --background-modifier-border: rgba(210, 214, 223, 0.1) !important;
  --background-modifier-border-focus: rgb(15, 20, 31) !important;
  --background-modifier-border-hover: rgba(210, 214, 223, 0.1) !important;
  --background-modifier-error: rgb(250, 30, 0) !important;
  --background-modifier-error-hover: rgb(250, 30, 0) !important;
  --background-modifier-form-field: rgb(10, 18, 30) !important;
  --background-modifier-form-field-hover: rgb(10, 18, 30) !important;
  --background-modifier-hover: rgba(210, 214, 223, 0.05) !important;
  --background-modifier-success: rgb(30, 169, 67) !important;
  --background-primary: rgb(22, 29, 44) !important;
  --background-primary-alt: rgb(10, 18, 30) !important;
  --background-s: 33.3% !important;
  --background-secondary: rgb(33, 41, 59) !important;
  --background-secondary-alt: rgb(33, 41, 59) !important;
  --background-secondary-l: 18.404% !important;
  --background-secondary-s: 29.1375% !important;
  --bases-cards-background: rgb(22, 29, 44) !important;
  --bases-cards-cover-background: rgb(10, 18, 30) !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --bases-embed-border-color: rgba(210, 214, 223, 0.1) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(250, 247, 245) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(250, 247, 245) !important;
  --bases-table-cell-background-active: rgb(22, 29, 44) !important;
  --bases-table-cell-background-disabled: rgb(10, 18, 30) !important;
  --bases-table-cell-background-selected: rgba(0, 212, 250, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(15, 20, 31) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 212, 250) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: rgb(10, 18, 30) !important;
  --bases-table-header-background: rgb(22, 29, 44) !important;
  --bases-table-header-background-hover: rgba(210, 214, 223, 0.05) !important;
  --bases-table-header-color: rgb(250, 247, 245) !important;
  --bases-table-summary-background: rgb(22, 29, 44) !important;
  --bases-table-summary-background-hover: rgba(210, 214, 223, 0.05) !important;
  --blockquote-border-color: rgb(0, 212, 250) !important;
  --blur-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --button-radius: 2px !important;
  --button-shadow: rgb(210, 214, 223) !important;
  --button-shadow-hover: rgba(255, 255, 255, 0.67) !important;
  --callout-bug: rgb(245, 0, 170);
  --callout-default: rgb(250, 247, 245);
  --callout-error: rgb(250, 30, 0);
  --callout-example: rgb(250, 247, 245);
  --callout-fail: rgb(250, 30, 0);
  --callout-important: rgb(0, 212, 250);
  --callout-info: rgb(250, 247, 245);
  --callout-question: rgb(250, 247, 245);
  --callout-quote: rgb(250, 247, 245);
  --callout-radius: 2px;
  --callout-success: rgb(0, 190, 0);
  --callout-summary: rgb(250, 247, 245);
  --callout-tip: rgb(255, 220, 120);
  --callout-todo: rgb(0, 130, 255);
  --callout-warning: rgb(220, 210, 0);
  --canvas-background: rgb(22, 29, 44) !important;
  --canvas-card-label-color: rgb(250, 247, 245) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(250, 247, 245) !important;
  --checkbox-border-color: rgb(250, 247, 245) !important;
  --checkbox-border-color-hover: rgb(250, 247, 245) !important;
  --checkbox-color: rgb(0, 212, 250) !important;
  --checkbox-color-hover: rgb(0, 212, 250) !important;
  --checkbox-marker-color: rgb(22, 29, 44) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(250, 247, 245) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(10, 18, 30) !important;
  --code-border-color: rgba(210, 214, 223, 0.1) !important;
  --code-bracket-background: rgba(210, 214, 223, 0.05) !important;
  --code-comment: rgba(175, 191, 255, 0.7) !important;
  --code-function: rgb(230, 205, 90) !important;
  --code-important: rgb(220, 95, 0) !important;
  --code-indentation-guide-color: rgba(175, 191, 255, 0.23) !important;
  --code-keyword: rgb(220, 100, 210) !important;
  --code-normal: rgb(227, 227, 227) !important;
  --code-operator: rgb(220, 65, 65) !important;
  --code-peripheral: 175, 191, 255 !important;
  --code-property: rgb(0, 202, 235) !important;
  --code-punctuation: rgb(227, 227, 227) !important;
  --code-radius: 2px !important;
  --code-string: rgb(30, 169, 67) !important;
  --code-tag: rgb(220, 65, 65) !important;
  --code-value: rgb(140, 110, 240) !important;
  --codeFont: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --collapse-icon-color: rgb(0, 212, 250) !important;
  --collapse-icon-color-collapsed: rgb(0, 212, 250) !important;
  --color-accent: rgb(0, 212, 250) !important;
  --color-accent-1: rgb(0, 212, 250) !important;
  --color-accent-2: hsl(184, 105%, 63.21%) !important;
  --color-accent-background: rgba(0, 212, 250, 0.1) !important;
  --color-accent-background-hover: rgba(0, 212, 250, 0.2) !important;
  --color-accent-hsl: 189, 100%, 49% !important;
  --color-cyan: rgb(0, 202, 235) !important;
  --color-green: rgb(30, 169, 67) !important;
  --color-orange: rgb(220, 95, 0) !important;
  --color-pink: rgb(220, 100, 210) !important;
  --color-purple: rgb(140, 110, 240) !important;
  --color-red: rgb(220, 65, 65) !important;
  --color-yellow: rgb(230, 205, 90) !important;
  --dark: rgb(250, 247, 245) !important;
  --darkgray: rgb(250, 247, 245) !important;
  --dictionary-background-primary: rgb(33, 41, 59) !important;
  --dictionary-background-secondary: rgb(22, 29, 44) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(0, 212, 250) !important;
  --dropdown-background: rgb(10, 18, 30) !important;
  --dropdown-background-hover: rgb(10, 18, 30) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1), inset 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --embed-border-left: 2px dashed rgb(250, 247, 245) !important;
  --embed-border-start: 2px solid rgb(0, 212, 250) !important;
  --file-header-background: rgb(22, 29, 44) !important;
  --file-header-background-focused: rgb(22, 29, 44) !important;
  --file-header-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-background: rgb(10, 18, 30) !important;
  --flair-color: rgb(250, 247, 245) !important;
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-mermaid: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-monospace: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-text: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --font-ui-smallest: 12px !important;
  --footnote-divider-color: rgba(210, 214, 223, 0.1) !important;
  --footnote-id-color: rgb(250, 247, 245) !important;
  --footnote-id-color-no-occurrences: rgb(250, 247, 245) !important;
  --footnote-input-background-active: rgba(210, 214, 223, 0.05) !important;
  --footnote-line-height: 1.25em !important;
  --footnote-radius: 2px !important;
  --graph-node: rgb(250, 247, 245) !important;
  --graph-node-attachment: rgb(230, 205, 90) !important;
  --graph-node-focused: rgb(0, 212, 250) !important;
  --graph-node-tag: rgb(30, 169, 67) !important;
  --graph-node-unresolved: rgb(250, 247, 245) !important;
  --graph-text: rgb(250, 247, 245) !important;
  --gray: rgb(250, 247, 245) !important;
  --h1-color: rgb(250, 247, 245) !important;
  --h1-size: 1.5em !important;
  --h2-color: rgb(250, 247, 245) !important;
  --h2-size: 1.375em !important;
  --h3-color: rgb(250, 247, 245) !important;
  --h3-size: 1.25em !important;
  --h4-color: rgb(250, 247, 245) !important;
  --h4-size: 1.125em !important;
  --h5-color: rgb(250, 247, 245) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1em !important;
  --h6-color: rgb(250, 247, 245) !important;
  --h6-line-height: 1.25em !important;
  --headerFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --heading-formatting: rgb(250, 247, 245) !important;
  --highlight: hsl(189, 110%, 63.9%) !important;
  --hr-color: rgba(250, 247, 245, 0.1) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(250, 247, 245) !important;
  --icon-color-active: rgb(250, 247, 245) !important;
  --icon-color-focused: rgb(250, 247, 245) !important;
  --icon-color-hover: rgb(250, 247, 245) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgba(250, 247, 245, 0.1) !important;
  --inline-title-color: rgb(250, 247, 245) !important;
  --inline-title-size: 1.625em !important;
  --input-date-separator: rgb(250, 247, 245) !important;
  --input-placeholder-color: rgb(250, 247, 245) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(0, 212, 250) !important;
  --interactive-accent-hover: rgb(0, 212, 250) !important;
  --interactive-accent-hsl: 189, 100%, 49% !important;
  --interactive-hover: rgb(10, 18, 30) !important;
  --interactive-normal: rgb(10, 18, 30) !important;
  --kanban-button-text: rgb(250, 247, 245) !important;
  --kanban-button-text-hover: #000 !important;
  --kanban-checkbox-border: rgb(22, 29, 44) !important;
  --light: rgb(22, 29, 44) !important;
  --lightgray: rgb(33, 41, 59) !important;
  --line-height-normal: 1.25em !important;
  --link-color: rgb(0, 212, 250) !important;
  --link-color-hover: rgb(250, 247, 245) !important;
  --link-external-color: rgb(0, 212, 250) !important;
  --link-external-color-hover: rgb(250, 247, 245) !important;
  --link-unresolved-color: rgb(0, 212, 250) !important;
  --link-unresolved-decoration-color: rgba(0, 212, 250, 0.3) !important;
  --list-elements: rgb(250, 247, 245) !important;
  --list-indent: 1.25em !important;
  --list-marker-color: rgb(250, 247, 245) !important;
  --list-marker-color-collapsed: rgb(0, 212, 250) !important;
  --list-marker-color-hover: rgb(250, 247, 245) !important;
  --list-spacing: 0.25em !important;
  --menu-background: rgb(33, 41, 59) !important;
  --menu-border-color: rgba(210, 214, 223, 0.1) !important;
  --menu-radius: 4px !important;
  --metadata-border-color: rgba(210, 214, 223, 0.1) !important;
  --metadata-divider-color: rgba(210, 214, 223, 0.1) !important;
  --metadata-input-background-active: rgba(210, 214, 223, 0.05) !important;
  --metadata-input-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --metadata-input-text-color: rgb(250, 247, 245) !important;
  --metadata-label-background-active: rgba(210, 214, 223, 0.05) !important;
  --metadata-label-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --metadata-label-text-color: rgb(250, 247, 245) !important;
  --metadata-label-text-color-hover: rgb(250, 247, 245) !important;
  --metadata-property-background-active: rgba(210, 214, 223, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(15, 20, 31) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(22, 29, 44) !important;
  --modal-border-color: rgba(210, 214, 223, 0.1) !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: rgb(0, 212, 250) !important;
  --nav-collapse-icon-color-collapsed: rgb(0, 212, 250) !important;
  --nav-heading-color: rgb(250, 247, 245) !important;
  --nav-heading-color-collapsed: rgb(250, 247, 245) !important;
  --nav-heading-color-collapsed-hover: rgb(250, 247, 245) !important;
  --nav-heading-color-hover: rgb(250, 247, 245) !important;
  --nav-indentation-guide-color: rgb(0, 212, 250) !important;
  --nav-item-background-active: rgba(210, 214, 223, 0.05) !important;
  --nav-item-background-hover: rgba(210, 214, 223, 0.05) !important;
  --nav-item-background-selected: rgba(0, 212, 250, 0.15) !important;
  --nav-item-color: rgb(250, 247, 245) !important;
  --nav-item-color-active: rgb(250, 247, 245) !important;
  --nav-item-color-highlighted: rgb(0, 212, 250) !important;
  --nav-item-color-hover: rgb(250, 247, 245) !important;
  --nav-item-color-selected: rgb(250, 247, 245) !important;
  --nav-item-radius: 2px !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(250, 247, 245) !important;
  --nav-tag-color-active: rgb(250, 247, 245) !important;
  --nav-tag-color-hover: rgb(250, 247, 245) !important;
  --nav-tag-radius: 2px !important;
  --oz-fta-file-font-size: 14px !important;
  --oz-fta-folder-font-size: 14px !important;
  --pdf-background: rgb(22, 29, 44) !important;
  --pdf-page-background: rgb(22, 29, 44) !important;
  --pdf-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --pdf-sidebar-background: rgb(22, 29, 44) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1) !important;
  --pill-border-color: rgba(210, 214, 223, 0.1) !important;
  --pill-border-color-hover: rgba(210, 214, 223, 0.1) !important;
  --pill-color: rgb(250, 247, 245) !important;
  --pill-color-hover: rgb(250, 247, 245) !important;
  --pill-color-remove: rgb(250, 247, 245) !important;
  --pill-color-remove-hover: rgb(0, 212, 250) !important;
  --polka-dots: radial-gradient(rgb(0, 212, 250) 15%, transparent 25%),
  radial-gradient(rgb(0, 212, 250) 17.5%, transparent 25%) !important;
  --prompt-background: rgb(22, 29, 44) !important;
  --prompt-border-color: rgba(210, 214, 223, 0.1) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent)) !important;
  --ribbon-background: rgb(33, 41, 59) !important;
  --ribbon-background-collapsed: rgb(22, 29, 44) !important;
  --ribbon-border: none !important;
  --scrollbar-active-thumb-bg: rgba(210, 214, 223, 0.1) !important;
  --scrollbar-radius: 6px !important;
  --scrollbar-thumb-bg: rgba(210, 214, 223, 0.05) !important;
  --search-clear-button-color: rgb(250, 247, 245) !important;
  --search-icon-color: rgb(250, 247, 245) !important;
  --search-result-background: rgb(22, 29, 44) !important;
  --search-result-bg-hover: rgb(10, 18, 30) !important;
  --secondary: rgb(0, 212, 250) !important;
  --setting-group-heading-color: rgb(250, 247, 245) !important;
  --setting-items-background: rgb(10, 18, 30) !important;
  --setting-items-border-color: rgba(210, 214, 223, 0.1) !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: rgba(210, 214, 223, 0.1) !important;
  --slider-track-background: rgba(210, 214, 223, 0.1) !important;
  --ss-border-radius: 0.1px !important;
  --ss-dark-contrast: 0.73% !important;
  --ss-dark-h: 221 !important;
  --ss-dark-highlight-bg: hsl(189, 110%, 63.9%) !important;
  --ss-dark-l: 2.58% !important;
  --ss-dark-s: 3.33% !important;
  --ss-dark-text-main: 250, 247, 245 !important;
  --ss-embed-border-style: 2px dashed rgb(250, 247, 245) !important;
  --status-bar-background: rgb(33, 41, 59) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: rgb(250, 247, 245) !important;
  --suggestion-background: rgb(22, 29, 44) !important;
  --sync-avatar-color-1: rgb(220, 65, 65) !important;
  --sync-avatar-color-2: rgb(220, 95, 0) !important;
  --sync-avatar-color-3: rgb(230, 205, 90) !important;
  --sync-avatar-color-4: rgb(30, 169, 67) !important;
  --sync-avatar-color-5: rgb(0, 202, 235) !important;
  --sync-avatar-color-7: rgb(140, 110, 240) !important;
  --sync-avatar-color-8: rgb(220, 100, 210) !important;
  --tab-background-active: rgb(22, 29, 44) !important;
  --tab-container-background: rgb(33, 41, 59) !important;
  --tab-divider-color: rgba(210, 214, 223, 0.1) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(0, 212, 250) !important;
  --tab-radius: 2px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(33, 41, 59) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 41, 59), transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 212, 250) !important;
  --tab-text-color: rgb(250, 247, 245) !important;
  --tab-text-color-active: rgb(250, 247, 245) !important;
  --tab-text-color-focused: rgb(250, 247, 245) !important;
  --tab-text-color-focused-active: rgb(250, 247, 245) !important;
  --tab-text-color-focused-active-current: rgb(250, 247, 245) !important;
  --tab-text-color-focused-highlighted: rgb(0, 212, 250) !important;
  --table-add-button-border-color: rgba(210, 214, 223, 0.1) !important;
  --table-body-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --table-body-font-size: 1em !important;
  --table-border-color: rgb(250, 247, 245) !important;
  --table-drag-handle-background-active: rgb(0, 212, 250) !important;
  --table-drag-handle-color: rgb(250, 247, 245) !important;
  --table-drag-handle-color-active: #000 !important;
  --table-header-border-color: rgb(250, 247, 245) !important;
  --table-header-color: rgb(250, 247, 245) !important;
  --table-header-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --table-selection: rgba(0, 212, 250, 0.1) !important;
  --table-selection-border-color: rgb(0, 212, 250) !important;
  --tag-background: rgba(0, 212, 250, 0.1) !important;
  --tag-background-hover: rgba(0, 212, 250, 0.2) !important;
  --tag-border-color: rgba(0, 212, 250, 0.15) !important;
  --tag-border-color-hover: rgba(0, 212, 250, 0.15) !important;
  --tag-color: rgb(0, 212, 250) !important;
  --tag-color-hover: rgb(0, 212, 250) !important;
  --tag-radius: 4px !important;
  --tertiary: rgb(250, 247, 245) !important;
  --text-accent: rgb(0, 212, 250) !important;
  --text-accent-hover: rgb(250, 247, 245) !important;
  --text-error: rgb(250, 30, 0) !important;
  --text-faint: rgb(250, 247, 245) !important;
  --text-highlight-bg: hsl(189, 110%, 63.9%) !important;
  --text-highlight-fg: #000 !important;
  --text-muted: rgb(250, 247, 245) !important;
  --text-normal: rgb(250, 247, 245) !important;
  --text-on-accent: #000 !important;
  --text-selection: rgba(0, 212, 250, 0.4) !important;
  --text-success: rgb(30, 169, 67) !important;
  --text-warning: rgb(220, 95, 0) !important;
  --text-white: rgb(250, 247, 245) !important;
  --textHighlight: hsl(189, 110%, 63.9%) !important;
  --titleFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --titlebar-background: rgb(33, 41, 59) !important;
  --titlebar-background-focused: rgb(33, 41, 59) !important;
  --titlebar-border-color: rgba(210, 214, 223, 0.1) !important;
  --titlebar-text-color: rgb(250, 247, 245) !important;
  --titlebar-text-color-focused: rgb(250, 247, 245) !important;
  --vault-name-font-weight: bold !important;
  --vault-profile-color: rgb(250, 247, 245) !important;
  --vault-profile-color-hover: rgb(250, 247, 245) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 42, 61);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 29, 44);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 42, 61);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 42, 61);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 29, 44);
  color: rgb(250, 247, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(71, 227, 255);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: line-through rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body p {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgb(0, 212, 250);
  text-decoration-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgb(0, 212, 250);
  text-decoration-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgba(0, 212, 250, 0.3);
  text-decoration-color: rgba(0, 212, 250, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 205, 90);
  border-left-color: rgb(230, 205, 90);
  border-right-color: rgb(230, 205, 90);
  border-top-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(0, 212, 250);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(0, 212, 250);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(250, 247, 245);
  text-decoration: line-through rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: rgb(245, 0, 170);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 0, 170);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(245, 0, 170);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(245, 0, 170);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(245, 0, 170);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: rgb(250, 30, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 30, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 30, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 30, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 30, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: rgb(250, 30, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 30, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 30, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 30, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 30, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: rgb(250, 247, 245);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: rgb(0, 190, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 190, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 190, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 190, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 190, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: rgb(255, 220, 120);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 220, 120);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 220, 120);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(255, 220, 120);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(255, 220, 120);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: rgb(0, 130, 255);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 130, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 130, 255);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 130, 255);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 130, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: rgb(220, 210, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(220, 210, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 210, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(220, 210, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(220, 210, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(210, 214, 223, 0.05);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 42, 61);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(210, 214, 223, 0.05);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(210, 214, 223, 0.05);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 212, 250, 0.1);
  border-bottom-color: rgba(0, 212, 250, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 212, 250, 0.15);
  border-right-color: rgba(0, 212, 250, 0.15);
  border-top-color: rgba(0, 212, 250, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body h1 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(250, 247, 245);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(250, 247, 245);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
  padding-left: 12px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(210, 214, 223, 0.05);
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(33, 42, 61);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(250, 247, 245);
  stroke: rgb(250, 247, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(33, 42, 61);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 247, 245);
  text-decoration: underline dotted rgb(250, 247, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(10, 18, 30);
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 247, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0 !important;
  --accent-l: 52% !important;
  --accent-on-selection: rgba(224, 41, 41, 0.4) !important;
  --accent-s: 75% !important;
  --accent-soft-dark: rgba(46, 31, 31, 0.1) !important;
  --accent-soft-hsl: 0, 19.6%, 15% !important;
  --accent-soft-light: rgba(46, 31, 31, 0.05) !important;
  --background-contrast: 0% !important;
  --background-dark: rgb(23, 35, 62) !important;
  --background-extra-dark: #000 !important;
  --background-h: 0 !important;
  --background-l: 99.3% !important;
  --background-modifier-active-hover: rgba(46, 31, 31, 0.05) !important;
  --background-modifier-border: rgba(46, 31, 31, 0.1) !important;
  --background-modifier-border-focus: rgba(46, 31, 31, 0.1) !important;
  --background-modifier-border-hover: rgba(46, 31, 31, 0.1) !important;
  --background-modifier-error: rgb(250, 30, 0) !important;
  --background-modifier-error-hover: rgb(250, 30, 0) !important;
  --background-modifier-form-field: rgba(46, 31, 31, 0.05) !important;
  --background-modifier-form-field-hover: rgba(46, 31, 31, 0.05) !important;
  --background-modifier-hover: rgba(46, 31, 31, 0.05) !important;
  --background-modifier-success: rgb(30, 169, 67) !important;
  --background-primary: rgb(253, 251, 251) !important;
  --background-primary-alt: rgb(250, 245, 245) !important;
  --background-s: 39.2% !important;
  --background-secondary: rgb(250, 245, 245) !important;
  --background-secondary-alt: rgb(250, 245, 245) !important;
  --background-secondary-l: 97.3% !important;
  --background-secondary-s: 34.3% !important;
  --bases-cards-background: rgb(253, 251, 251) !important;
  --bases-cards-cover-background: rgb(250, 245, 245) !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(46, 31, 31, 0.1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1) !important;
  --bases-embed-border-color: rgba(46, 31, 31, 0.1) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: rgb(253, 251, 251) !important;
  --bases-table-cell-background-disabled: rgb(250, 245, 245) !important;
  --bases-table-cell-background-selected: rgba(224, 41, 41, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(46, 31, 31, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(224, 41, 41) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: rgb(250, 245, 245) !important;
  --bases-table-header-background: rgb(253, 251, 251) !important;
  --bases-table-header-background-hover: rgba(46, 31, 31, 0.05) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: rgb(253, 251, 251) !important;
  --bases-table-summary-background-hover: rgba(46, 31, 31, 0.05) !important;
  --blockquote-border-color: rgb(224, 41, 41) !important;
  --blur-background: color-mix(in srgb, rgb(253, 251, 251) 65%, transparent) linear-gradient(rgb(253, 251, 251), color-mix(in srgb, rgb(253, 251, 251) 65%, transparent)) !important;
  --bodyFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --button-radius: 2px !important;
  --button-shadow: rgb(46, 31, 31) !important;
  --button-shadow-hover: rgba(0, 0, 0, 0.67) !important;
  --callout-bug: rgb(245, 0, 165);
  --callout-default: rgb(0, 0, 0);
  --callout-error: rgb(235, 0, 0);
  --callout-example: rgb(0, 0, 0);
  --callout-fail: rgb(235, 0, 0);
  --callout-important: rgb(224, 41, 41);
  --callout-info: rgb(0, 0, 0);
  --callout-question: rgb(0, 0, 0);
  --callout-quote: rgb(0, 0, 0);
  --callout-radius: 2px;
  --callout-success: rgb(0, 180, 0);
  --callout-summary: rgb(0, 0, 0);
  --callout-tip: rgb(240, 195, 0);
  --callout-todo: rgb(0, 130, 235);
  --callout-warning: rgb(240, 150, 0);
  --canvas-background: rgb(253, 251, 251) !important;
  --canvas-card-label-color: rgb(0, 0, 0) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color: rgb(0, 0, 0) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: rgb(224, 41, 41) !important;
  --checkbox-color-hover: rgb(224, 41, 41) !important;
  --checkbox-marker-color: rgb(253, 251, 251) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(23, 35, 62) !important;
  --code-border-color: rgba(46, 31, 31, 0.1) !important;
  --code-bracket-background: rgba(46, 31, 31, 0.05) !important;
  --code-comment: rgba(159, 157, 190) !important;
  --code-function: rgb(230, 205, 90) !important;
  --code-important: rgb(220, 95, 0) !important;
  --code-indentation-guide-color: rgba(159, 157, 190, 0.33) !important;
  --code-keyword: rgb(220, 100, 210) !important;
  --code-normal: rgb(227, 227, 227) !important;
  --code-operator: rgb(220, 65, 65) !important;
  --code-peripheral: 159, 157, 190 !important;
  --code-property: rgb(0, 202, 235) !important;
  --code-punctuation: rgb(227, 227, 227) !important;
  --code-radius: 2px !important;
  --code-string: rgb(30, 169, 67) !important;
  --code-tag: rgb(220, 65, 65) !important;
  --code-value: rgb(140, 110, 240) !important;
  --codeFont: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --collapse-icon-color: rgb(224, 41, 41) !important;
  --collapse-icon-color-collapsed: rgb(224, 41, 41) !important;
  --color-accent: rgb(224, 41, 41) !important;
  --color-accent-1: rgb(224, 41, 41) !important;
  --color-accent-2: rgb(232, 74, 82) !important;
  --color-accent-background: rgba(224, 41, 41, 0.1) !important;
  --color-accent-background-hover: rgba(224, 41, 41, 0.2) !important;
  --color-accent-hsl: 0, 75%, 52% !important;
  --color-cyan: rgb(0, 202, 235) !important;
  --color-green: rgb(30, 169, 67) !important;
  --color-orange: rgb(220, 95, 0) !important;
  --color-pink: rgb(220, 100, 210) !important;
  --color-purple: rgb(140, 110, 240) !important;
  --color-red: rgb(220, 65, 65) !important;
  --color-yellow: rgb(230, 205, 90) !important;
  --dark: rgb(0, 0, 0) !important;
  --darkgray: rgb(0, 0, 0) !important;
  --dictionary-background-primary: rgba(46, 31, 31, 0.05) !important;
  --dictionary-background-secondary: rgb(250, 245, 245) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(224, 41, 41) !important;
  --dropdown-background: rgba(46, 31, 31, 0.05) !important;
  --dropdown-background-hover: rgba(46, 31, 31, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1), inset 0 0 0 1px rgba(46, 31, 31, 0.1) !important;
  --embed-border-left: 2px dashed rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid rgb(224, 41, 41) !important;
  --file-header-background: rgb(253, 251, 251) !important;
  --file-header-background-focused: rgb(253, 251, 251) !important;
  --file-header-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-background: rgba(46, 31, 31, 0.05) !important;
  --flair-color: rgb(0, 0, 0) !important;
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-mermaid: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-monospace: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-text: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --font-ui-smallest: 12px !important;
  --footnote-divider-color: rgba(46, 31, 31, 0.1) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(0, 0, 0) !important;
  --footnote-input-background-active: rgba(46, 31, 31, 0.05) !important;
  --footnote-line-height: 1.25em !important;
  --footnote-radius: 2px !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-attachment: rgb(230, 205, 90) !important;
  --graph-node-focused: rgb(224, 41, 41) !important;
  --graph-node-tag: rgb(30, 169, 67) !important;
  --graph-node-unresolved: rgb(0, 0, 0) !important;
  --graph-text: rgb(0, 0, 0) !important;
  --gray: rgb(0, 0, 0) !important;
  --h1-color: rgb(0, 0, 0) !important;
  --h1-size: 1.5em !important;
  --h2-color: rgb(0, 0, 0) !important;
  --h2-size: 1.375em !important;
  --h3-color: rgb(0, 0, 0) !important;
  --h3-size: 1.25em !important;
  --h4-color: rgb(0, 0, 0) !important;
  --h4-size: 1.125em !important;
  --h5-color: rgb(0, 0, 0) !important;
  --h5-line-height: 1.25em !important;
  --h5-size: 1em !important;
  --h6-color: rgb(0, 0, 0) !important;
  --h6-line-height: 1.25em !important;
  --headerFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --heading-formatting: rgb(0, 0, 0) !important;
  --highlight: rgb(241, 101, 101) !important;
  --hr-color: rgba(0, 0, 0, 0.4) !important;
  --hr-thickness: 1px !important;
  --icon-color: rgb(0, 0, 0) !important;
  --icon-color-active: rgb(0, 0, 0) !important;
  --icon-color-focused: rgb(0, 0, 0) !important;
  --icon-color-hover: rgb(0, 0, 0) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgba(0, 0, 0, 0.4) !important;
  --inline-title-color: rgb(0, 0, 0) !important;
  --inline-title-size: 1.625em !important;
  --input-date-separator: rgb(0, 0, 0) !important;
  --input-placeholder-color: rgb(0, 0, 0) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(224, 41, 41) !important;
  --interactive-accent-hover: rgb(224, 41, 41) !important;
  --interactive-accent-hsl: 0, 75%, 52% !important;
  --interactive-hover: rgba(46, 31, 31, 0.1) !important;
  --interactive-normal: rgba(46, 31, 31, 0.05) !important;
  --kanban-button-text: rgb(0, 0, 0) !important;
  --kanban-button-text-hover: rgb(254, 252, 252) !important;
  --kanban-checkbox-border: rgba(46, 31, 31, 0.1) !important;
  --light: rgb(253, 251, 251) !important;
  --lightgray: rgb(250, 245, 245) !important;
  --line-height-normal: 1.25em !important;
  --link-color: rgb(224, 41, 41) !important;
  --link-color-hover: #000 !important;
  --link-external-color: rgb(224, 41, 41) !important;
  --link-external-color-hover: #000 !important;
  --link-unresolved-color: rgb(224, 41, 41) !important;
  --link-unresolved-decoration-color: rgba(224, 41, 41, 0.3) !important;
  --list-elements: rgb(0, 0, 0) !important;
  --list-indent: 1.25em !important;
  --list-marker-color: rgb(0, 0, 0) !important;
  --list-marker-color-collapsed: rgb(224, 41, 41) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --list-spacing: 0.25em !important;
  --menu-background: rgb(250, 245, 245) !important;
  --menu-border-color: rgba(46, 31, 31, 0.1) !important;
  --menu-radius: 4px !important;
  --metadata-border-color: rgba(46, 31, 31, 0.1) !important;
  --metadata-divider-color: rgba(46, 31, 31, 0.1) !important;
  --metadata-input-background-active: rgba(46, 31, 31, 0.05) !important;
  --metadata-input-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-background-active: rgba(46, 31, 31, 0.05) !important;
  --metadata-label-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-property-background-active: rgba(46, 31, 31, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(46, 31, 31, 0.1) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: rgb(253, 251, 251) !important;
  --modal-border-color: rgba(46, 31, 31, 0.1) !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: rgb(224, 41, 41) !important;
  --nav-collapse-icon-color-collapsed: rgb(224, 41, 41) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-indentation-guide-color: rgb(224, 41, 41) !important;
  --nav-item-background-active: rgba(46, 31, 31, 0.05) !important;
  --nav-item-background-hover: rgba(46, 31, 31, 0.05) !important;
  --nav-item-background-selected: rgba(224, 41, 41, 0.15) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: rgb(224, 41, 41) !important;
  --nav-item-color-hover: rgb(0, 0, 0) !important;
  --nav-item-color-selected: rgb(0, 0, 0) !important;
  --nav-item-radius: 2px !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: rgb(0, 0, 0) !important;
  --nav-tag-color-active: rgb(0, 0, 0) !important;
  --nav-tag-color-hover: rgb(0, 0, 0) !important;
  --nav-tag-radius: 2px !important;
  --oz-fta-file-font-size: 14px !important;
  --oz-fta-folder-font-size: 14px !important;
  --pdf-background: rgb(253, 251, 251) !important;
  --pdf-page-background: rgb(253, 251, 251) !important;
  --pdf-sidebar-background: rgb(253, 251, 251) !important;
  --pill-border-color: rgba(46, 31, 31, 0.1) !important;
  --pill-border-color-hover: rgba(46, 31, 31, 0.1) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: rgb(224, 41, 41) !important;
  --polka-dots: radial-gradient(rgb(224, 41, 41) 15%, transparent 25%),
  radial-gradient(rgb(224, 41, 41) 17.5%, transparent 25%) !important;
  --prompt-background: rgb(253, 251, 251) !important;
  --prompt-border-color: rgba(46, 31, 31, 0.1) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, rgb(253, 251, 251) 65%, transparent) linear-gradient(rgb(253, 251, 251), color-mix(in srgb, rgb(253, 251, 251) 65%, transparent)) !important;
  --ribbon-background: rgb(250, 245, 245) !important;
  --ribbon-background-collapsed: rgb(253, 251, 251) !important;
  --ribbon-border: none !important;
  --scrollbar-active-thumb-bg: rgba(46, 31, 31, 0.1) !important;
  --scrollbar-radius: 6px !important;
  --scrollbar-thumb-bg: rgba(46, 31, 31, 0.05) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: rgb(253, 251, 251) !important;
  --search-result-bg-hover: rgba(46, 31, 31, 0.1) !important;
  --secondary: rgb(224, 41, 41) !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: rgb(250, 245, 245) !important;
  --setting-items-border-color: rgba(46, 31, 31, 0.1) !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: rgba(46, 31, 31, 0.1) !important;
  --slider-track-background: rgba(46, 31, 31, 0.1) !important;
  --ss-border-radius: 0.1px !important;
  --ss-embed-border-style: 2px dashed rgb(0, 0, 0) !important;
  --ss-light-contrast: 0% !important;
  --ss-light-h: 0 !important;
  --ss-light-highlight-bg: rgb(241, 101, 101) !important;
  --ss-light-l: 9.86% !important;
  --ss-light-s: 3.92% !important;
  --ss-light-text-main: 0, 0, 0 !important;
  --status-bar-background: rgb(250, 245, 245) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: rgb(0, 0, 0) !important;
  --suggestion-background: rgb(253, 251, 251) !important;
  --sync-avatar-color-1: rgb(220, 65, 65) !important;
  --sync-avatar-color-2: rgb(220, 95, 0) !important;
  --sync-avatar-color-3: rgb(230, 205, 90) !important;
  --sync-avatar-color-4: rgb(30, 169, 67) !important;
  --sync-avatar-color-5: rgb(0, 202, 235) !important;
  --sync-avatar-color-7: rgb(140, 110, 240) !important;
  --sync-avatar-color-8: rgb(220, 100, 210) !important;
  --tab-background-active: rgb(253, 251, 251) !important;
  --tab-container-background: rgb(250, 245, 245) !important;
  --tab-divider-color: rgba(46, 31, 31, 0.1) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: rgb(224, 41, 41) !important;
  --tab-radius: 2px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: rgb(250, 245, 245) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(250, 245, 245), transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 41, 41) !important;
  --tab-text-color: rgb(0, 0, 0) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: rgb(224, 41, 41) !important;
  --table-add-button-border-color: rgba(46, 31, 31, 0.1) !important;
  --table-body-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --table-body-font-size: 1em !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: rgb(224, 41, 41) !important;
  --table-drag-handle-color: rgb(0, 0, 0) !important;
  --table-drag-handle-color-active: rgb(254, 252, 252) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(0, 0, 0) !important;
  --table-header-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --table-selection: rgba(224, 41, 41, 0.1) !important;
  --table-selection-border-color: rgb(224, 41, 41) !important;
  --tag-background: rgba(224, 41, 41, 0.1) !important;
  --tag-background-hover: rgba(224, 41, 41, 0.2) !important;
  --tag-border-color: rgba(224, 41, 41, 0.15) !important;
  --tag-border-color-hover: rgba(224, 41, 41, 0.15) !important;
  --tag-color: rgb(224, 41, 41) !important;
  --tag-color-hover: rgb(224, 41, 41) !important;
  --tag-radius: 4px !important;
  --tertiary: #000 !important;
  --text-accent: rgb(224, 41, 41) !important;
  --text-accent-hover: #000 !important;
  --text-error: rgb(250, 30, 0) !important;
  --text-faint: rgb(0, 0, 0) !important;
  --text-highlight-bg: rgb(241, 101, 101) !important;
  --text-highlight-fg: #000 !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-on-accent: rgb(254, 252, 252) !important;
  --text-selection: rgba(224, 41, 41, 0.4) !important;
  --text-success: rgb(30, 169, 67) !important;
  --text-warning: rgb(220, 95, 0) !important;
  --text-white: rgb(254, 252, 252) !important;
  --textHighlight: rgb(241, 101, 101) !important;
  --titleFont: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --titlebar-background: rgb(250, 245, 245) !important;
  --titlebar-background-focused: rgb(250, 245, 245) !important;
  --titlebar-border-color: rgba(46, 31, 31, 0.1) !important;
  --titlebar-text-color: rgb(0, 0, 0) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --vault-name-font-weight: bold !important;
  --vault-profile-color: rgb(0, 0, 0) !important;
  --vault-profile-color-hover: rgb(0, 0, 0) !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 246, 246);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(254, 253, 253);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 246, 246);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 246, 246);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(254, 253, 253);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(240, 102, 102);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgb(224, 41, 41);
  text-decoration-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgb(224, 41, 41);
  text-decoration-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgba(224, 41, 41, 0.3);
  text-decoration-color: rgba(224, 41, 41, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 35, 62);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 35, 62);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 205, 90);
  border-left-color: rgb(230, 205, 90);
  border-right-color: rgb(230, 205, 90);
  border-top-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(23, 35, 62);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(23, 35, 62);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(250, 246, 246);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(224, 41, 41);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(224, 41, 41);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: rgb(245, 0, 165);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(245, 0, 165);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(245, 0, 165);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(245, 0, 165);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(245, 0, 165);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: rgb(235, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(235, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(235, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(235, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: rgb(235, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(235, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(235, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(235, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: rgb(0, 180, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 180, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 180, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 180, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 180, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: rgb(240, 195, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 195, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 195, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(240, 195, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(240, 195, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: rgb(0, 130, 235);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 130, 235);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 130, 235);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 130, 235);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 130, 235);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: rgb(240, 150, 0);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(240, 150, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(240, 150, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(240, 150, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(240, 150, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(46, 31, 31, 0.05);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(46, 31, 31, 0.05);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 246, 246);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(46, 31, 31, 0.05);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(46, 31, 31, 0.05);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(224, 41, 41, 0.1);
  border-bottom-color: rgba(224, 41, 41, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(224, 41, 41, 0.15);
  border-right-color: rgba(224, 41, 41, 0.15);
  border-top-color: rgba(224, 41, 41, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(224, 41, 41);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: dashed;
  border-left-width: 2px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: dashed;
  border-right-width: 2px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: dashed;
  border-top-width: 2px;
  padding-left: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(46, 31, 31, 0.05);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 246, 246);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 246, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(23, 35, 62);
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(227, 227, 227);
  font-family: "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
