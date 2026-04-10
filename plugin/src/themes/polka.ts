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
  --accent-on-selection: hsla(189, 100%, 49%, 0.4) !important;
  --accent-s: 100% !important;
  --accent-soft-dark: hsla(221, 16.65%, 85%, 0.1) !important;
  --accent-soft-hsl: 221, 16.65%, 85% !important;
  --accent-soft-light: hsla(221, 16.65%, 85%, 0.05) !important;
  --background-contrast: 3.504% !important;
  --background-dark: rgb(10, 18, 30) !important;
  --background-extra-dark: #000 !important;
  --background-h: 221 !important;
  --background-l: 12.9% !important;
  --background-modifier-active-hover: hsla(221, 16.65%, 85%, 0.05) !important;
  --background-modifier-border: hsla(221, 16.65%, 85%, 0.1) !important;
  --background-modifier-border-focus: hsl(221, 33.3%, 8.9%) !important;
  --background-modifier-border-hover: hsla(221, 16.65%, 85%, 0.1) !important;
  --background-modifier-error: rgb(250, 30, 0) !important;
  --background-modifier-error-hover: rgb(250, 30, 0) !important;
  --background-modifier-form-field: rgb(10, 18, 30) !important;
  --background-modifier-form-field-hover: rgb(10, 18, 30) !important;
  --background-modifier-hover: hsla(221, 16.65%, 85%, 0.05) !important;
  --background-modifier-success: rgb(30, 169, 67) !important;
  --background-primary: hsl(221, 33.3%, 12.9%) !important;
  --background-primary-alt: rgb(10, 18, 30) !important;
  --background-s: 33.3% !important;
  --background-secondary: hsl(221, 29.1375%, 18.404%) !important;
  --background-secondary-alt: hsl(221, 29.1375%, 18.404%) !important;
  --background-secondary-l: 18.404% !important;
  --background-secondary-s: 29.1375% !important;
  --bases-cards-background: hsl(221, 33.3%, 12.9%) !important;
  --bases-cards-cover-background: rgb(10, 18, 30) !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --bases-embed-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(250, 247, 245) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(250, 247, 245) !important;
  --bases-table-cell-background-active: hsl(221, 33.3%, 12.9%) !important;
  --bases-table-cell-background-disabled: rgb(10, 18, 30) !important;
  --bases-table-cell-background-selected: hsla(189, 100%, 49%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(221, 33.3%, 8.9%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(189, 100%, 49%) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: rgb(10, 18, 30) !important;
  --bases-table-header-background: hsl(221, 33.3%, 12.9%) !important;
  --bases-table-header-background-hover: hsla(221, 16.65%, 85%, 0.05) !important;
  --bases-table-header-color: rgb(250, 247, 245) !important;
  --bases-table-summary-background: hsl(221, 33.3%, 12.9%) !important;
  --bases-table-summary-background-hover: hsla(221, 16.65%, 85%, 0.05) !important;
  --blockquote-border-color: hsl(189, 100%, 49%) !important;
  --blur-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent)) !important;
  --bodyFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --button-radius: 2px !important;
  --button-shadow: hsl(221, 16.65%, 85%, 0.6) !important;
  --button-shadow-hover: rgba(255, 255, 255, 0.67) !important;
  --callout-bug: rgb(245, 0, 170);
  --callout-default: rgb(250, 247, 245);
  --callout-error: rgb(250, 30, 0);
  --callout-example: rgb(250, 247, 245);
  --callout-fail: rgb(250, 30, 0);
  --callout-important: hsl(189, 100%, 49%);
  --callout-info: rgb(250, 247, 245);
  --callout-question: rgb(250, 247, 245);
  --callout-quote: rgb(250, 247, 245);
  --callout-radius: 2px;
  --callout-success: rgb(0, 190, 0);
  --callout-summary: rgb(250, 247, 245);
  --callout-tip: rgb(255, 220, 120);
  --callout-todo: rgb(0, 130, 255);
  --callout-warning: rgb(220, 210, 0);
  --canvas-background: hsl(221, 33.3%, 12.9%) !important;
  --canvas-card-label-color: rgb(250, 247, 245) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(250, 247, 245) !important;
  --checkbox-border-color: rgb(250, 247, 245) !important;
  --checkbox-border-color-hover: rgb(250, 247, 245) !important;
  --checkbox-color: hsl(189, 100%, 49%) !important;
  --checkbox-color-hover: hsl(189, 100%, 49%) !important;
  --checkbox-marker-color: hsl(221, 33.3%, 12.9%) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(250, 247, 245) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(10, 18, 30) !important;
  --code-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --code-bracket-background: hsla(221, 16.65%, 85%, 0.05) !important;
  --code-comment: rgba(175, 191, 255, 0.7) !important;
  --code-function: rgb(230, 205, 90) !important;
  --code-important: rgb(220, 95, 0) !important;
  --code-indentation-guide-color: rgba(175, 191, 255, 0.23) !important;
  --code-keyword: rgb(220, 100, 210) !important;
  --code-normal: hsl(0, 0%, 89%) !important;
  --code-operator: rgb(220, 65, 65) !important;
  --code-peripheral: 175, 191, 255 !important;
  --code-property: rgb(0, 202, 235) !important;
  --code-punctuation: hsl(0, 0%, 89%) !important;
  --code-radius: 2px !important;
  --code-string: rgb(30, 169, 67) !important;
  --code-tag: rgb(220, 65, 65) !important;
  --code-value: rgb(140, 110, 240) !important;
  --codeFont: iA Writer Mono S, IBM Plex Mono, Roboto Mono, Menlo, SFMono-Regular, Consolas, Source Code Pro, monospace !important;
  --collapse-icon-color: hsl(189, 100%, 49%) !important;
  --collapse-icon-color-collapsed: hsl(189, 100%, 49%) !important;
  --color-accent: hsl(189, 100%, 49%) !important;
  --color-accent-1: hsl(189, 100%, 49%) !important;
  --color-accent-2: hsl(184, 105%, 63.21%) !important;
  --color-accent-background: hsla(189, 100%, 49%, 0.1) !important;
  --color-accent-background-hover: hsla(189, 100%, 49%, 0.2) !important;
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
  --dictionary-background-primary: hsl(221, 29.1375%, 18.404%) !important;
  --dictionary-background-secondary: hsl(221, 33.3%, 12.9%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(189, 100%, 49%) !important;
  --dropdown-background: rgb(10, 18, 30) !important;
  --dropdown-background-hover: rgb(10, 18, 30) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1), inset 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --embed-border-left: 2px dashed rgb(250, 247, 245) !important;
  --embed-border-start: 2px solid hsl(189, 100%, 49%) !important;
  --file-header-background: hsl(221, 33.3%, 12.9%) !important;
  --file-header-background-focused: hsl(221, 33.3%, 12.9%) !important;
  --file-header-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-background: rgb(10, 18, 30) !important;
  --flair-color: rgb(250, 247, 245) !important;
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-mermaid: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-monospace: iA Writer Mono S, IBM Plex Mono, Roboto Mono, Menlo, SFMono-Regular, Consolas, Source Code Pro, monospace !important;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-text: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --font-ui-smallest: 12px !important;
  --footnote-divider-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --footnote-id-color: rgb(250, 247, 245) !important;
  --footnote-id-color-no-occurrences: rgb(250, 247, 245) !important;
  --footnote-input-background-active: hsla(221, 16.65%, 85%, 0.05) !important;
  --footnote-line-height: 1.25em !important;
  --footnote-radius: 2px !important;
  --graph-node: rgb(250, 247, 245) !important;
  --graph-node-attachment: rgb(230, 205, 90) !important;
  --graph-node-focused: hsl(189, 100%, 49%) !important;
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
  --headerFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
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
  --interactive-accent: hsl(189, 100%, 49%) !important;
  --interactive-accent-hover: hsl(189, 100%, 49%) !important;
  --interactive-accent-hsl: 189, 100%, 49% !important;
  --interactive-hover: rgb(10, 18, 30) !important;
  --interactive-normal: rgb(10, 18, 30) !important;
  --kanban-button-text: rgb(250, 247, 245) !important;
  --kanban-button-text-hover: #000 !important;
  --kanban-checkbox-border: hsl(221, 33.3%, 12.9%) !important;
  --light: hsl(221, 33.3%, 12.9%) !important;
  --lightgray: hsl(221, 29.1375%, 18.404%) !important;
  --line-height-normal: 1.25em !important;
  --link-color: hsl(189, 100%, 49%) !important;
  --link-color-hover: rgb(250, 247, 245) !important;
  --link-external-color: hsl(189, 100%, 49%) !important;
  --link-external-color-hover: rgb(250, 247, 245) !important;
  --link-unresolved-color: hsl(189, 100%, 49%) !important;
  --link-unresolved-decoration-color: hsla(189, 100%, 49%, 0.3) !important;
  --list-elements: rgb(250, 247, 245) !important;
  --list-indent: 1.25em !important;
  --list-marker-color: rgb(250, 247, 245) !important;
  --list-marker-color-collapsed: hsl(189, 100%, 49%) !important;
  --list-marker-color-hover: rgb(250, 247, 245) !important;
  --list-spacing: 0.25em !important;
  --menu-background: hsl(221, 29.1375%, 18.404%) !important;
  --menu-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --menu-radius: 4px !important;
  --metadata-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --metadata-divider-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --metadata-input-background-active: hsla(221, 16.65%, 85%, 0.05) !important;
  --metadata-input-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --metadata-input-text-color: rgb(250, 247, 245) !important;
  --metadata-label-background-active: hsla(221, 16.65%, 85%, 0.05) !important;
  --metadata-label-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --metadata-label-text-color: rgb(250, 247, 245) !important;
  --metadata-label-text-color-hover: rgb(250, 247, 245) !important;
  --metadata-property-background-active: hsla(221, 16.65%, 85%, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(221, 33.3%, 8.9%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(221, 33.3%, 12.9%) !important;
  --modal-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: hsl(189, 100%, 49%) !important;
  --nav-collapse-icon-color-collapsed: hsl(189, 100%, 49%) !important;
  --nav-heading-color: rgb(250, 247, 245) !important;
  --nav-heading-color-collapsed: rgb(250, 247, 245) !important;
  --nav-heading-color-collapsed-hover: rgb(250, 247, 245) !important;
  --nav-heading-color-hover: rgb(250, 247, 245) !important;
  --nav-indentation-guide-color: hsl(189, 100%, 49%) !important;
  --nav-item-background-active: hsla(221, 16.65%, 85%, 0.05) !important;
  --nav-item-background-hover: hsla(221, 16.65%, 85%, 0.05) !important;
  --nav-item-background-selected: hsla(189, 100%, 49%, 0.15) !important;
  --nav-item-color: rgb(250, 247, 245) !important;
  --nav-item-color-active: rgb(250, 247, 245) !important;
  --nav-item-color-highlighted: hsl(189, 100%, 49%) !important;
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
  --pdf-background: hsl(221, 33.3%, 12.9%) !important;
  --pdf-page-background: hsl(221, 33.3%, 12.9%) !important;
  --pdf-shadow: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --pdf-sidebar-background: hsl(221, 33.3%, 12.9%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsla(221, 16.65%, 85%, 0.1) !important;
  --pill-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --pill-border-color-hover: hsla(221, 16.65%, 85%, 0.1) !important;
  --pill-color: rgb(250, 247, 245) !important;
  --pill-color-hover: rgb(250, 247, 245) !important;
  --pill-color-remove: rgb(250, 247, 245) !important;
  --pill-color-remove-hover: hsl(189, 100%, 49%) !important;
  --polka-dots: radial-gradient(hsl(189, 100%, 49%) 15%, transparent 25%),
  radial-gradient(hsl(189, 100%, 49%) 17.5%, transparent 25%) !important;
  --prompt-background: hsl(221, 33.3%, 12.9%) !important;
  --prompt-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent)) !important;
  --ribbon-background: hsl(221, 29.1375%, 18.404%) !important;
  --ribbon-background-collapsed: hsl(221, 33.3%, 12.9%) !important;
  --ribbon-border: none !important;
  --scrollbar-active-thumb-bg: hsla(221, 16.65%, 85%, 0.1) !important;
  --scrollbar-radius: 6px !important;
  --scrollbar-thumb-bg: hsla(221, 16.65%, 85%, 0.05) !important;
  --search-clear-button-color: rgb(250, 247, 245) !important;
  --search-icon-color: rgb(250, 247, 245) !important;
  --search-result-background: hsl(221, 33.3%, 12.9%) !important;
  --search-result-bg-hover: rgb(10, 18, 30) !important;
  --secondary: hsl(189, 100%, 49%) !important;
  --setting-group-heading-color: rgb(250, 247, 245) !important;
  --setting-items-background: rgb(10, 18, 30) !important;
  --setting-items-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --slider-track-background: hsla(221, 16.65%, 85%, 0.1) !important;
  --ss-border-radius: 0.1px !important;
  --ss-dark-contrast: 0.73% !important;
  --ss-dark-h: 221 !important;
  --ss-dark-highlight-bg: hsl(189, 110%, 63.9%) !important;
  --ss-dark-l: 2.58% !important;
  --ss-dark-s: 3.33% !important;
  --ss-dark-text-main: 250, 247, 245 !important;
  --ss-embed-border-style: 2px dashed rgb(250, 247, 245) !important;
  --status-bar-background: hsl(221, 29.1375%, 18.404%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: rgb(250, 247, 245) !important;
  --suggestion-background: hsl(221, 33.3%, 12.9%) !important;
  --sync-avatar-color-1: rgb(220, 65, 65) !important;
  --sync-avatar-color-2: rgb(220, 95, 0) !important;
  --sync-avatar-color-3: rgb(230, 205, 90) !important;
  --sync-avatar-color-4: rgb(30, 169, 67) !important;
  --sync-avatar-color-5: rgb(0, 202, 235) !important;
  --sync-avatar-color-7: rgb(140, 110, 240) !important;
  --sync-avatar-color-8: rgb(220, 100, 210) !important;
  --tab-background-active: hsl(221, 33.3%, 12.9%) !important;
  --tab-container-background: hsl(221, 29.1375%, 18.404%) !important;
  --tab-divider-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: hsl(189, 100%, 49%) !important;
  --tab-radius: 2px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(221, 29.1375%, 18.404%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(221, 29.1375%, 18.404%), transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(189, 100%, 49%) !important;
  --tab-text-color: rgb(250, 247, 245) !important;
  --tab-text-color-active: rgb(250, 247, 245) !important;
  --tab-text-color-focused: rgb(250, 247, 245) !important;
  --tab-text-color-focused-active: rgb(250, 247, 245) !important;
  --tab-text-color-focused-active-current: rgb(250, 247, 245) !important;
  --tab-text-color-focused-highlighted: hsl(189, 100%, 49%) !important;
  --table-add-button-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
  --table-body-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --table-body-font-size: 1em !important;
  --table-border-color: rgb(250, 247, 245) !important;
  --table-drag-handle-background-active: hsl(189, 100%, 49%) !important;
  --table-drag-handle-color: rgb(250, 247, 245) !important;
  --table-drag-handle-color-active: #000 !important;
  --table-header-border-color: rgb(250, 247, 245) !important;
  --table-header-color: rgb(250, 247, 245) !important;
  --table-header-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --table-selection: hsla(189, 100%, 49%, 0.1) !important;
  --table-selection-border-color: hsl(189, 100%, 49%) !important;
  --tag-background: hsla(189, 100%, 49%, 0.1) !important;
  --tag-background-hover: hsla(189, 100%, 49%, 0.2) !important;
  --tag-border-color: hsla(189, 100%, 49%, 0.15) !important;
  --tag-border-color-hover: hsla(189, 100%, 49%, 0.15) !important;
  --tag-color: hsl(189, 100%, 49%) !important;
  --tag-color-hover: hsl(189, 100%, 49%) !important;
  --tag-radius: 4px !important;
  --tertiary: rgb(250, 247, 245) !important;
  --text-accent: hsl(189, 100%, 49%) !important;
  --text-accent-hover: rgb(250, 247, 245) !important;
  --text-error: rgb(250, 30, 0) !important;
  --text-faint: rgb(250, 247, 245) !important;
  --text-highlight-bg: hsl(189, 110%, 63.9%) !important;
  --text-highlight-fg: #000 !important;
  --text-muted: rgb(250, 247, 245) !important;
  --text-normal: rgb(250, 247, 245) !important;
  --text-on-accent: #000 !important;
  --text-selection: hsla(189, 100%, 49%, 0.4) !important;
  --text-success: rgb(30, 169, 67) !important;
  --text-warning: rgb(220, 95, 0) !important;
  --text-white: rgb(250, 247, 245) !important;
  --textHighlight: hsl(189, 110%, 63.9%) !important;
  --titleFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --titlebar-background: hsl(221, 29.1375%, 18.404%) !important;
  --titlebar-background-focused: hsl(221, 29.1375%, 18.404%) !important;
  --titlebar-border-color: hsla(221, 16.65%, 85%, 0.1) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 42, 61);
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(210, 214, 223, 0.1);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 212, 250, 0.1);
  border-radius: 4px;
  color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body .note-properties-value {
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
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(71, 227, 255);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 247, 245);
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(250, 247, 245);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 212, 250);
  border-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body p {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
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
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(250, 247, 245);
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
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(250, 247, 245);
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
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(0, 212, 250);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 212, 250, 0.1);
  border-bottom-color: rgba(0, 212, 250, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 212, 250, 0.15);
  border-right-color: rgba(0, 212, 250, 0.15);
  border-top-color: rgba(0, 212, 250, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(0, 212, 250);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0 !important;
  --accent-l: 52% !important;
  --accent-on-selection: hsla(0, 75%, 52%, 0.4) !important;
  --accent-s: 75% !important;
  --accent-soft-dark: hsla(0, 19.6%, 15%, 0.1) !important;
  --accent-soft-hsl: 0, 19.6%, 15% !important;
  --accent-soft-light: hsla(0, 19.6%, 15%, 0.05) !important;
  --background-contrast: 0% !important;
  --background-dark: rgb(23, 35, 62) !important;
  --background-extra-dark: #000 !important;
  --background-h: 0 !important;
  --background-l: 99.3% !important;
  --background-modifier-active-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --background-modifier-border: hsla(0, 19.6%, 15%, 0.1) !important;
  --background-modifier-border-focus: hsla(0, 19.6%, 15%, 0.1) !important;
  --background-modifier-border-hover: hsla(0, 19.6%, 15%, 0.1) !important;
  --background-modifier-error: rgb(250, 30, 0) !important;
  --background-modifier-error-hover: rgb(250, 30, 0) !important;
  --background-modifier-form-field: hsla(0, 19.6%, 15%, 0.05) !important;
  --background-modifier-form-field-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --background-modifier-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --background-modifier-success: rgb(30, 169, 67) !important;
  --background-primary: hsl(0, 39.2%, 99.3%) !important;
  --background-primary-alt: hsl(0, 34.3%, 97.3%) !important;
  --background-s: 39.2% !important;
  --background-secondary: hsl(0, 34.3%, 97.3%) !important;
  --background-secondary-alt: hsl(0, 34.3%, 97.3%) !important;
  --background-secondary-l: 97.3% !important;
  --background-secondary-s: 34.3% !important;
  --bases-cards-background: hsl(0, 39.2%, 99.3%) !important;
  --bases-cards-cover-background: hsl(0, 34.3%, 97.3%) !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px hsla(0, 19.6%, 15%, 0.1) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsla(0, 19.6%, 15%, 0.1) !important;
  --bases-embed-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: hsl(0, 39.2%, 99.3%) !important;
  --bases-table-cell-background-disabled: hsl(0, 34.3%, 97.3%) !important;
  --bases-table-cell-background-selected: hsla(0, 75%, 52%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(0, 19.6%, 15%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0, 75%, 52%) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: hsl(0, 34.3%, 97.3%) !important;
  --bases-table-header-background: hsl(0, 39.2%, 99.3%) !important;
  --bases-table-header-background-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: hsl(0, 39.2%, 99.3%) !important;
  --bases-table-summary-background-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --blockquote-border-color: hsl(0, 75%, 52%) !important;
  --blur-background: color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent) linear-gradient(hsl(0, 39.2%, 99.3%), color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent)) !important;
  --bodyFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --button-radius: 2px !important;
  --button-shadow: hsl(0, 19.6%, 15%, 0.6) !important;
  --button-shadow-hover: rgba(0, 0, 0, 0.67) !important;
  --callout-bug: rgb(245, 0, 165);
  --callout-default: rgb(0, 0, 0);
  --callout-error: rgb(235, 0, 0);
  --callout-example: rgb(0, 0, 0);
  --callout-fail: rgb(235, 0, 0);
  --callout-important: hsl(0, 75%, 52%);
  --callout-info: rgb(0, 0, 0);
  --callout-question: rgb(0, 0, 0);
  --callout-quote: rgb(0, 0, 0);
  --callout-radius: 2px;
  --callout-success: rgb(0, 180, 0);
  --callout-summary: rgb(0, 0, 0);
  --callout-tip: rgb(240, 195, 0);
  --callout-todo: rgb(0, 130, 235);
  --callout-warning: rgb(240, 150, 0);
  --canvas-background: hsl(0, 39.2%, 99.3%) !important;
  --canvas-card-label-color: rgb(0, 0, 0) !important;
  --canvas-controls-radius: 2px !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color: rgb(0, 0, 0) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: hsl(0, 75%, 52%) !important;
  --checkbox-color-hover: hsl(0, 75%, 52%) !important;
  --checkbox-marker-color: hsl(0, 39.2%, 99.3%) !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --clickable-icon-radius: 2px !important;
  --code-background: rgb(23, 35, 62) !important;
  --code-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --code-bracket-background: hsla(0, 19.6%, 15%, 0.05) !important;
  --code-comment: rgba(159, 157, 190) !important;
  --code-function: rgb(230, 205, 90) !important;
  --code-important: rgb(220, 95, 0) !important;
  --code-indentation-guide-color: rgba(159, 157, 190, 0.33) !important;
  --code-keyword: rgb(220, 100, 210) !important;
  --code-normal: hsl(0, 0%, 89%) !important;
  --code-operator: rgb(220, 65, 65) !important;
  --code-peripheral: 159, 157, 190 !important;
  --code-property: rgb(0, 202, 235) !important;
  --code-punctuation: hsl(0, 0%, 89%) !important;
  --code-radius: 2px !important;
  --code-string: rgb(30, 169, 67) !important;
  --code-tag: rgb(220, 65, 65) !important;
  --code-value: rgb(140, 110, 240) !important;
  --codeFont: iA Writer Mono S, IBM Plex Mono, Roboto Mono, Menlo, SFMono-Regular, Consolas, Source Code Pro, monospace !important;
  --collapse-icon-color: hsl(0, 75%, 52%) !important;
  --collapse-icon-color-collapsed: hsl(0, 75%, 52%) !important;
  --color-accent: hsl(0, 75%, 52%) !important;
  --color-accent-1: hsl(0, 75%, 52%) !important;
  --color-accent-2: hsl(-3, 76.5%, 59.8%) !important;
  --color-accent-background: hsla(0, 75%, 52%, 0.1) !important;
  --color-accent-background-hover: hsla(0, 75%, 52%, 0.2) !important;
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
  --dictionary-background-primary: hsla(0, 19.6%, 15%, 0.05) !important;
  --dictionary-background-secondary: hsl(0, 34.3%, 97.3%) !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(0, 75%, 52%) !important;
  --dropdown-background: hsla(0, 19.6%, 15%, 0.05) !important;
  --dropdown-background-hover: hsla(0, 19.6%, 15%, 0.1) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsla(0, 19.6%, 15%, 0.1), inset 0 0 0 1px hsla(0, 19.6%, 15%, 0.1) !important;
  --embed-border-left: 2px dashed rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid hsl(0, 75%, 52%) !important;
  --file-header-background: hsl(0, 39.2%, 99.3%) !important;
  --file-header-background-focused: hsl(0, 39.2%, 99.3%) !important;
  --file-header-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --file-header-font-size: 14px !important;
  --flair-background: hsla(0, 19.6%, 15%, 0.05) !important;
  --flair-color: rgb(0, 0, 0) !important;
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-mermaid: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-monospace: iA Writer Mono S, IBM Plex Mono, Roboto Mono, Menlo, SFMono-Regular, Consolas, Source Code Pro, monospace !important;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace !important;
  --font-text: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --font-ui-smallest: 12px !important;
  --footnote-divider-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(0, 0, 0) !important;
  --footnote-input-background-active: hsla(0, 19.6%, 15%, 0.05) !important;
  --footnote-line-height: 1.25em !important;
  --footnote-radius: 2px !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-attachment: rgb(230, 205, 90) !important;
  --graph-node-focused: hsl(0, 75%, 52%) !important;
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
  --headerFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --heading-formatting: rgb(0, 0, 0) !important;
  --highlight: hsl(0, 82.5%, 67.2%) !important;
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
  --interactive-accent: hsl(0, 75%, 52%) !important;
  --interactive-accent-hover: hsl(0, 75%, 52%) !important;
  --interactive-accent-hsl: 0, 75%, 52% !important;
  --interactive-hover: hsla(0, 19.6%, 15%, 0.1) !important;
  --interactive-normal: hsla(0, 19.6%, 15%, 0.05) !important;
  --kanban-button-text: rgb(0, 0, 0) !important;
  --kanban-button-text-hover: rgb(254, 252, 252) !important;
  --kanban-checkbox-border: hsla(0, 19.6%, 15%, 0.1) !important;
  --light: hsl(0, 39.2%, 99.3%) !important;
  --lightgray: hsl(0, 34.3%, 97.3%) !important;
  --line-height-normal: 1.25em !important;
  --link-color: hsl(0, 75%, 52%) !important;
  --link-color-hover: #000 !important;
  --link-external-color: hsl(0, 75%, 52%) !important;
  --link-external-color-hover: #000 !important;
  --link-unresolved-color: hsl(0, 75%, 52%) !important;
  --link-unresolved-decoration-color: hsla(0, 75%, 52%, 0.3) !important;
  --list-elements: rgb(0, 0, 0) !important;
  --list-indent: 1.25em !important;
  --list-marker-color: rgb(0, 0, 0) !important;
  --list-marker-color-collapsed: hsl(0, 75%, 52%) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --list-spacing: 0.25em !important;
  --menu-background: hsl(0, 34.3%, 97.3%) !important;
  --menu-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --menu-radius: 4px !important;
  --metadata-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --metadata-divider-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --metadata-input-background-active: hsla(0, 19.6%, 15%, 0.05) !important;
  --metadata-input-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-background-active: hsla(0, 19.6%, 15%, 0.05) !important;
  --metadata-label-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-property-background-active: hsla(0, 19.6%, 15%, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(0, 19.6%, 15%, 0.1) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsla(0, 19.6%, 15%, 0.1) !important;
  --metadata-sidebar-input-font-size: 14px !important;
  --metadata-sidebar-label-font-size: 14px !important;
  --modal-background: hsl(0, 39.2%, 99.3%) !important;
  --modal-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: hsl(0, 75%, 52%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 75%, 52%) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-indentation-guide-color: hsl(0, 75%, 52%) !important;
  --nav-item-background-active: hsla(0, 19.6%, 15%, 0.05) !important;
  --nav-item-background-hover: hsla(0, 19.6%, 15%, 0.05) !important;
  --nav-item-background-selected: hsla(0, 75%, 52%, 0.15) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: hsl(0, 75%, 52%) !important;
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
  --pdf-background: hsl(0, 39.2%, 99.3%) !important;
  --pdf-page-background: hsl(0, 39.2%, 99.3%) !important;
  --pdf-sidebar-background: hsl(0, 39.2%, 99.3%) !important;
  --pill-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --pill-border-color-hover: hsla(0, 19.6%, 15%, 0.1) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: hsl(0, 75%, 52%) !important;
  --polka-dots: radial-gradient(hsl(0, 75%, 52%) 15%, transparent 25%),
  radial-gradient(hsl(0, 75%, 52%) 17.5%, transparent 25%) !important;
  --prompt-background: hsl(0, 39.2%, 99.3%) !important;
  --prompt-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --radius-l: 6px !important;
  --radius-m: 4px !important;
  --radius-s: 2px !important;
  --radius-xl: 8px !important;
  --raised-background: color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent) linear-gradient(hsl(0, 39.2%, 99.3%), color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 34.3%, 97.3%) !important;
  --ribbon-background-collapsed: hsl(0, 39.2%, 99.3%) !important;
  --ribbon-border: none !important;
  --scrollbar-active-thumb-bg: hsla(0, 19.6%, 15%, 0.1) !important;
  --scrollbar-radius: 6px !important;
  --scrollbar-thumb-bg: hsla(0, 19.6%, 15%, 0.05) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: hsl(0, 39.2%, 99.3%) !important;
  --search-result-bg-hover: hsla(0, 19.6%, 15%, 0.1) !important;
  --secondary: hsl(0, 75%, 52%) !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: hsl(0, 34.3%, 97.3%) !important;
  --setting-items-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --setting-items-radius: 6px !important;
  --slider-thumb-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --slider-track-background: hsla(0, 19.6%, 15%, 0.1) !important;
  --ss-border-radius: 0.1px !important;
  --ss-embed-border-style: 2px dashed rgb(0, 0, 0) !important;
  --ss-light-contrast: 0% !important;
  --ss-light-h: 0 !important;
  --ss-light-highlight-bg: hsl(0, 82.5%, 67.2%) !important;
  --ss-light-l: 9.86% !important;
  --ss-light-s: 3.92% !important;
  --ss-light-text-main: 0, 0, 0 !important;
  --status-bar-background: hsl(0, 34.3%, 97.3%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: rgb(0, 0, 0) !important;
  --suggestion-background: hsl(0, 39.2%, 99.3%) !important;
  --sync-avatar-color-1: rgb(220, 65, 65) !important;
  --sync-avatar-color-2: rgb(220, 95, 0) !important;
  --sync-avatar-color-3: rgb(230, 205, 90) !important;
  --sync-avatar-color-4: rgb(30, 169, 67) !important;
  --sync-avatar-color-5: rgb(0, 202, 235) !important;
  --sync-avatar-color-7: rgb(140, 110, 240) !important;
  --sync-avatar-color-8: rgb(220, 100, 210) !important;
  --tab-background-active: hsl(0, 39.2%, 99.3%) !important;
  --tab-container-background: hsl(0, 34.3%, 97.3%) !important;
  --tab-divider-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --tab-font-size: 14px !important;
  --tab-outline-color: hsl(0, 75%, 52%) !important;
  --tab-radius: 2px !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: hsl(0, 34.3%, 97.3%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 34.3%, 97.3%), transparent) !important;
  --tab-switcher-preview-radius: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 75%, 52%) !important;
  --tab-text-color: rgb(0, 0, 0) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: hsl(0, 75%, 52%) !important;
  --table-add-button-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
  --table-body-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --table-body-font-size: 1em !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: hsl(0, 75%, 52%) !important;
  --table-drag-handle-color: rgb(0, 0, 0) !important;
  --table-drag-handle-color-active: rgb(254, 252, 252) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(0, 0, 0) !important;
  --table-header-font: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --table-selection: hsla(0, 75%, 52%, 0.1) !important;
  --table-selection-border-color: hsl(0, 75%, 52%) !important;
  --tag-background: hsla(0, 75%, 52%, 0.1) !important;
  --tag-background-hover: hsla(0, 75%, 52%, 0.2) !important;
  --tag-border-color: hsla(0, 75%, 52%, 0.15) !important;
  --tag-border-color-hover: hsla(0, 75%, 52%, 0.15) !important;
  --tag-color: hsl(0, 75%, 52%) !important;
  --tag-color-hover: hsl(0, 75%, 52%) !important;
  --tag-radius: 4px !important;
  --tertiary: #000 !important;
  --text-accent: hsl(0, 75%, 52%) !important;
  --text-accent-hover: #000 !important;
  --text-error: rgb(250, 30, 0) !important;
  --text-faint: rgb(0, 0, 0) !important;
  --text-highlight-bg: hsl(0, 82.5%, 67.2%) !important;
  --text-highlight-fg: #000 !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-on-accent: rgb(254, 252, 252) !important;
  --text-selection: hsla(0, 75%, 52%, 0.4) !important;
  --text-success: rgb(30, 169, 67) !important;
  --text-warning: rgb(220, 95, 0) !important;
  --text-white: rgb(254, 252, 252) !important;
  --textHighlight: hsl(0, 82.5%, 67.2%) !important;
  --titleFont: Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif !important;
  --titlebar-background: hsl(0, 34.3%, 97.3%) !important;
  --titlebar-background-focused: hsl(0, 34.3%, 97.3%) !important;
  --titlebar-border-color: hsla(0, 19.6%, 15%, 0.1) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(254, 253, 253);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(46, 31, 31, 0.1);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(224, 41, 41, 0.1);
  border-radius: 4px;
  color: rgb(224, 41, 41);
}

html[saved-theme="light"] body .note-properties-value {
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
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(240, 102, 102);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(224, 41, 41);
  border-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body p {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(0, 0, 0);
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
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
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
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
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
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='m9 14 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(224, 41, 41);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(224, 41, 41, 0.1);
  border-bottom-color: rgba(224, 41, 41, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(224, 41, 41, 0.15);
  border-right-color: rgba(224, 41, 41, 0.15);
  border-top-color: rgba(224, 41, 41, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(224, 41, 41);
}`,
  },
};
