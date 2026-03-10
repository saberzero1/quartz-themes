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
  --accent-h: 189;
  --accent-l: 49%;
  --accent-on-selection: rgba(0, 212, 250, 0.4);
  --accent-s: 100%;
  --accent-soft-dark: rgba(210, 214, 223, 0.1);
  --accent-soft-hsl: 221, 16.65%, 85%;
  --accent-soft-light: rgba(210, 214, 223, 0.05);
  --background-contrast: 3.504%;
  --background-dark: rgb(10, 18, 30);
  --background-extra-dark: #000;
  --background-h: 221;
  --background-l: 12.9%;
  --background-modifier-active-hover: rgba(210, 214, 223, 0.05);
  --background-modifier-border: rgba(210, 214, 223, 0.1);
  --background-modifier-border-focus: rgb(15, 20, 31);
  --background-modifier-border-hover: rgba(210, 214, 223, 0.1);
  --background-modifier-error: rgb(250, 30, 0);
  --background-modifier-error-hover: rgb(250, 30, 0);
  --background-modifier-form-field: rgb(10, 18, 30);
  --background-modifier-form-field-hover: rgb(10, 18, 30);
  --background-modifier-hover: rgba(210, 214, 223, 0.05);
  --background-modifier-success: rgb(30, 169, 67);
  --background-primary: rgb(22, 29, 44);
  --background-primary-alt: rgb(10, 18, 30);
  --background-s: 33.3%;
  --background-secondary: rgb(33, 41, 59);
  --background-secondary-alt: rgb(33, 41, 59);
  --background-secondary-l: 18.404%;
  --background-secondary-s: 29.1375%;
  --bases-cards-background: rgb(22, 29, 44);
  --bases-cards-cover-background: rgb(10, 18, 30);
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1);
  --bases-embed-border-color: rgba(210, 214, 223, 0.1);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(250, 247, 245);
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: rgb(250, 247, 245);
  --bases-table-cell-background-active: rgb(22, 29, 44);
  --bases-table-cell-background-disabled: rgb(10, 18, 30);
  --bases-table-cell-background-selected: rgba(0, 212, 250, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(15, 20, 31);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 212, 250);
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: rgb(10, 18, 30);
  --bases-table-header-background: rgb(22, 29, 44);
  --bases-table-header-background-hover: rgba(210, 214, 223, 0.05);
  --bases-table-header-color: rgb(250, 247, 245);
  --bases-table-summary-background: rgb(22, 29, 44);
  --bases-table-summary-background-hover: rgba(210, 214, 223, 0.05);
  --blockquote-border-color: rgb(0, 212, 250);
  --blur-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 2px;
  --button-shadow: rgb(210, 214, 223);
  --button-shadow-hover: rgba(255, 255, 255, 0.67);
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
  --canvas-background: rgb(22, 29, 44);
  --canvas-card-label-color: rgb(250, 247, 245);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(250, 247, 245);
  --checkbox-border-color: rgb(250, 247, 245);
  --checkbox-border-color-hover: rgb(250, 247, 245);
  --checkbox-color: rgb(0, 212, 250);
  --checkbox-color-hover: rgb(0, 212, 250);
  --checkbox-marker-color: rgb(22, 29, 44);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(250, 247, 245);
  --clickable-icon-radius: 2px;
  --code-background: rgb(10, 18, 30);
  --code-border-color: rgba(210, 214, 223, 0.1);
  --code-bracket-background: rgba(210, 214, 223, 0.05);
  --code-comment: rgba(175, 191, 255, 0.7);
  --code-function: rgb(230, 205, 90);
  --code-important: rgb(220, 95, 0);
  --code-indentation-guide-color: rgba(175, 191, 255, 0.23);
  --code-keyword: rgb(220, 100, 210);
  --code-normal: rgb(227, 227, 227);
  --code-operator: rgb(220, 65, 65);
  --code-peripheral: 175, 191, 255;
  --code-property: rgb(0, 202, 235);
  --code-punctuation: rgb(227, 227, 227);
  --code-radius: 2px;
  --code-string: rgb(30, 169, 67);
  --code-tag: rgb(220, 65, 65);
  --code-value: rgb(140, 110, 240);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(0, 212, 250);
  --collapse-icon-color-collapsed: rgb(0, 212, 250);
  --color-accent: rgb(0, 212, 250);
  --color-accent-1: rgb(0, 212, 250);
  --color-accent-2: hsl(184, 105%, 63.21%);
  --color-accent-background: rgba(0, 212, 250, 0.1);
  --color-accent-background-hover: rgba(0, 212, 250, 0.2);
  --color-accent-hsl: 189, 100%, 49%;
  --color-cyan: rgb(0, 202, 235);
  --color-green: rgb(30, 169, 67);
  --color-orange: rgb(220, 95, 0);
  --color-pink: rgb(220, 100, 210);
  --color-purple: rgb(140, 110, 240);
  --color-red: rgb(220, 65, 65);
  --color-yellow: rgb(230, 205, 90);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dictionary-background-primary: rgb(33, 41, 59);
  --dictionary-background-secondary: rgb(22, 29, 44);
  --divider-color: transparent;
  --divider-color-hover: rgb(0, 212, 250);
  --dropdown-background: rgb(10, 18, 30);
  --dropdown-background-hover: rgb(10, 18, 30);
  --embed-block-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1), inset 0 0 0 1px rgba(210, 214, 223, 0.1);
  --embed-border-left: 2px dashed rgb(250, 247, 245);
  --embed-border-start: 2px solid rgb(0, 212, 250);
  --file-header-background: rgb(22, 29, 44);
  --file-header-background-focused: rgb(22, 29, 44);
  --file-header-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --file-header-font-size: 14px;
  --flair-background: rgb(10, 18, 30);
  --flair-color: rgb(250, 247, 245);
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mermaid: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-monospace: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-text: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --font-ui-smallest: 12px;
  --footnote-divider-color: rgba(210, 214, 223, 0.1);
  --footnote-id-color: rgb(250, 247, 245);
  --footnote-id-color-no-occurrences: rgb(250, 247, 245);
  --footnote-input-background-active: rgba(210, 214, 223, 0.05);
  --footnote-line-height: 1.25em;
  --footnote-radius: 2px;
  --graph-node: rgb(250, 247, 245);
  --graph-node-attachment: rgb(230, 205, 90);
  --graph-node-focused: rgb(0, 212, 250);
  --graph-node-tag: rgb(30, 169, 67);
  --graph-node-unresolved: rgb(250, 247, 245);
  --graph-text: rgb(250, 247, 245);
  --gray: var(--text-muted);
  --h1-color: rgb(250, 247, 245);
  --h1-size: 1.5em;
  --h2-color: rgb(250, 247, 245);
  --h2-size: 1.375em;
  --h3-color: rgb(250, 247, 245);
  --h3-size: 1.25em;
  --h4-color: rgb(250, 247, 245);
  --h4-size: 1.125em;
  --h5-color: rgb(250, 247, 245);
  --h5-line-height: 1.25em;
  --h5-size: 1em;
  --h6-color: rgb(250, 247, 245);
  --h6-line-height: 1.25em;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(250, 247, 245);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(250, 247, 245, 0.1);
  --hr-thickness: 1px;
  --icon-color: rgb(250, 247, 245);
  --icon-color-active: rgb(250, 247, 245);
  --icon-color-focused: rgb(250, 247, 245);
  --icon-color-hover: rgb(250, 247, 245);
  --icon-opacity: 1;
  --indentation-guide-color: rgba(250, 247, 245, 0.1);
  --inline-title-color: rgb(250, 247, 245);
  --inline-title-size: 1.625em;
  --input-date-separator: rgb(250, 247, 245);
  --input-placeholder-color: rgb(250, 247, 245);
  --input-radius: 4px;
  --interactive-accent: rgb(0, 212, 250);
  --interactive-accent-hover: rgb(0, 212, 250);
  --interactive-accent-hsl: 189, 100%, 49%;
  --interactive-hover: rgb(10, 18, 30);
  --interactive-normal: rgb(10, 18, 30);
  --kanban-button-text: rgb(250, 247, 245);
  --kanban-button-text-hover: #000;
  --kanban-checkbox-border: rgb(22, 29, 44);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.25em;
  --link-color: rgb(0, 212, 250);
  --link-color-hover: rgb(250, 247, 245);
  --link-external-color: rgb(0, 212, 250);
  --link-external-color-hover: rgb(250, 247, 245);
  --link-unresolved-color: rgb(0, 212, 250);
  --link-unresolved-decoration-color: rgba(0, 212, 250, 0.3);
  --list-elements: rgb(250, 247, 245);
  --list-indent: 1.25em;
  --list-marker-color: rgb(250, 247, 245);
  --list-marker-color-collapsed: rgb(0, 212, 250);
  --list-marker-color-hover: rgb(250, 247, 245);
  --list-spacing: 0.25em;
  --menu-background: rgb(33, 41, 59);
  --menu-border-color: rgba(210, 214, 223, 0.1);
  --menu-radius: 4px;
  --metadata-border-color: rgba(210, 214, 223, 0.1);
  --metadata-divider-color: rgba(210, 214, 223, 0.1);
  --metadata-input-background-active: rgba(210, 214, 223, 0.05);
  --metadata-input-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --metadata-input-text-color: rgb(250, 247, 245);
  --metadata-label-background-active: rgba(210, 214, 223, 0.05);
  --metadata-label-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --metadata-label-text-color: rgb(250, 247, 245);
  --metadata-label-text-color-hover: rgb(250, 247, 245);
  --metadata-property-background-active: rgba(210, 214, 223, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(15, 20, 31);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(210, 214, 223, 0.1);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(22, 29, 44);
  --modal-border-color: rgba(210, 214, 223, 0.1);
  --modal-radius: 6px;
  --nav-collapse-icon-color: rgb(0, 212, 250);
  --nav-collapse-icon-color-collapsed: rgb(0, 212, 250);
  --nav-heading-color: rgb(250, 247, 245);
  --nav-heading-color-collapsed: rgb(250, 247, 245);
  --nav-heading-color-collapsed-hover: rgb(250, 247, 245);
  --nav-heading-color-hover: rgb(250, 247, 245);
  --nav-indentation-guide-color: rgb(0, 212, 250);
  --nav-item-background-active: rgba(210, 214, 223, 0.05);
  --nav-item-background-hover: rgba(210, 214, 223, 0.05);
  --nav-item-background-selected: rgba(0, 212, 250, 0.15);
  --nav-item-color: rgb(250, 247, 245);
  --nav-item-color-active: rgb(250, 247, 245);
  --nav-item-color-highlighted: rgb(0, 212, 250);
  --nav-item-color-hover: rgb(250, 247, 245);
  --nav-item-color-selected: rgb(250, 247, 245);
  --nav-item-radius: 2px;
  --nav-item-size: 14px;
  --nav-tag-color: rgb(250, 247, 245);
  --nav-tag-color-active: rgb(250, 247, 245);
  --nav-tag-color-hover: rgb(250, 247, 245);
  --nav-tag-radius: 2px;
  --oz-fta-file-font-size: 14px;
  --oz-fta-folder-font-size: 14px;
  --pdf-background: rgb(22, 29, 44);
  --pdf-page-background: rgb(22, 29, 44);
  --pdf-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1);
  --pdf-sidebar-background: rgb(22, 29, 44);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(210, 214, 223, 0.1);
  --pill-border-color: rgba(210, 214, 223, 0.1);
  --pill-border-color-hover: rgba(210, 214, 223, 0.1);
  --pill-color: rgb(250, 247, 245);
  --pill-color-hover: rgb(250, 247, 245);
  --pill-color-remove: rgb(250, 247, 245);
  --pill-color-remove-hover: rgb(0, 212, 250);
  --polka-dots: radial-gradient(rgb(0, 212, 250) 15%, transparent 25%),
  radial-gradient(rgb(0, 212, 250) 17.5%, transparent 25%);
  --prompt-background: rgb(22, 29, 44);
  --prompt-border-color: rgba(210, 214, 223, 0.1);
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent));
  --ribbon-background: rgb(33, 41, 59);
  --ribbon-background-collapsed: rgb(22, 29, 44);
  --ribbon-border: none;
  --scrollbar-active-thumb-bg: rgba(210, 214, 223, 0.1);
  --scrollbar-radius: 6px;
  --scrollbar-thumb-bg: rgba(210, 214, 223, 0.05);
  --search-clear-button-color: rgb(250, 247, 245);
  --search-icon-color: rgb(250, 247, 245);
  --search-result-background: rgb(22, 29, 44);
  --search-result-bg-hover: rgb(10, 18, 30);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(250, 247, 245);
  --setting-items-background: rgb(10, 18, 30);
  --setting-items-border-color: rgba(210, 214, 223, 0.1);
  --setting-items-radius: 6px;
  --slider-thumb-border-color: rgba(210, 214, 223, 0.1);
  --slider-track-background: rgba(210, 214, 223, 0.1);
  --ss-border-radius: 0.1px;
  --ss-dark-contrast: 0.73%;
  --ss-dark-h: 221;
  --ss-dark-highlight-bg: hsl(189, 110%, 63.9%);
  --ss-dark-l: 2.58%;
  --ss-dark-s: 3.33%;
  --ss-dark-text-main: 250, 247, 245;
  --ss-embed-border-style: 2px dashed rgb(250, 247, 245);
  --status-bar-background: rgb(33, 41, 59);
  --status-bar-border-color: transparent;
  --status-bar-font-size: 13px;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: rgb(250, 247, 245);
  --suggestion-background: rgb(22, 29, 44);
  --sync-avatar-color-1: rgb(220, 65, 65);
  --sync-avatar-color-2: rgb(220, 95, 0);
  --sync-avatar-color-3: rgb(230, 205, 90);
  --sync-avatar-color-4: rgb(30, 169, 67);
  --sync-avatar-color-5: rgb(0, 202, 235);
  --sync-avatar-color-7: rgb(140, 110, 240);
  --sync-avatar-color-8: rgb(220, 100, 210);
  --tab-background-active: rgb(22, 29, 44);
  --tab-container-background: rgb(33, 41, 59);
  --tab-divider-color: rgba(210, 214, 223, 0.1);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(0, 212, 250);
  --tab-radius: 2px;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(33, 41, 59);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(33, 41, 59), transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 212, 250);
  --tab-text-color: rgb(250, 247, 245);
  --tab-text-color-active: rgb(250, 247, 245);
  --tab-text-color-focused: rgb(250, 247, 245);
  --tab-text-color-focused-active: rgb(250, 247, 245);
  --tab-text-color-focused-active-current: rgb(250, 247, 245);
  --tab-text-color-focused-highlighted: rgb(0, 212, 250);
  --table-add-button-border-color: rgba(210, 214, 223, 0.1);
  --table-body-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --table-body-font-size: 1em;
  --table-border-color: rgb(250, 247, 245);
  --table-drag-handle-background-active: rgb(0, 212, 250);
  --table-drag-handle-color: rgb(250, 247, 245);
  --table-drag-handle-color-active: #000;
  --table-header-border-color: rgb(250, 247, 245);
  --table-header-color: rgb(250, 247, 245);
  --table-header-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --table-selection: rgba(0, 212, 250, 0.1);
  --table-selection-border-color: rgb(0, 212, 250);
  --tag-background: rgba(0, 212, 250, 0.1);
  --tag-background-hover: rgba(0, 212, 250, 0.2);
  --tag-border-color: rgba(0, 212, 250, 0.15);
  --tag-border-color-hover: rgba(0, 212, 250, 0.15);
  --tag-color: rgb(0, 212, 250);
  --tag-color-hover: rgb(0, 212, 250);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(0, 212, 250);
  --text-accent-hover: rgb(250, 247, 245);
  --text-error: rgb(250, 30, 0);
  --text-faint: rgb(250, 247, 245);
  --text-highlight-bg: hsl(189, 110%, 63.9%);
  --text-highlight-fg: #000;
  --text-muted: rgb(250, 247, 245);
  --text-normal: rgb(250, 247, 245);
  --text-on-accent: #000;
  --text-selection: rgba(0, 212, 250, 0.4);
  --text-success: rgb(30, 169, 67);
  --text-warning: rgb(220, 95, 0);
  --text-white: rgb(250, 247, 245);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(33, 41, 59);
  --titlebar-background-focused: rgb(33, 41, 59);
  --titlebar-border-color: rgba(210, 214, 223, 0.1);
  --titlebar-text-color: rgb(250, 247, 245);
  --titlebar-text-color-focused: rgb(250, 247, 245);
  --vault-name-font-weight: bold;
  --vault-profile-color: rgb(250, 247, 245);
  --vault-profile-color-hover: rgb(250, 247, 245);
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 42, 61);
  color: rgb(250, 247, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 29, 44);
  color: rgb(250, 247, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 42, 61);
  color: rgb(250, 247, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 42, 61);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(250, 247, 245);
}

body div#quartz-root {
  background-color: rgb(22, 29, 44);
  color: rgb(250, 247, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body .page article p > em, em {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body .page article p > i, i {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body .page article p > strong, strong {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body .text-highlight {
  background-color: rgb(71, 227, 255);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: line-through rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body p {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgb(0, 212, 250);
  text-decoration-color: rgb(0, 212, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgb(0, 212, 250);
  text-decoration-color: rgb(0, 212, 250);
}

body a.internal.broken {
  color: rgb(0, 212, 250);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgba(0, 212, 250, 0.3);
  text-decoration-color: rgba(0, 212, 250, 0.3);
}`,
    lists: `body dd {
  color: rgb(250, 247, 245);
}

body dt {
  color: rgb(250, 247, 245);
}

body ol > li {
  color: rgb(250, 247, 245);
}

body ol.overflow {
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body ul > li {
  color: rgb(250, 247, 245);
}

body ul.overflow {
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

body blockquote {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body table {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

body th {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(230, 205, 90);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 205, 90);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 205, 90);
  border-left-color: rgb(230, 205, 90);
  border-right-color: rgb(230, 205, 90);
  border-top-color: rgb(230, 205, 90);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body figcaption {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body figure {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body img {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body video {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

body .transclude {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(0, 212, 250);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(0, 212, 250);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(250, 247, 245);
  text-decoration: line-through rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body input[type=checkbox] {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration: rgb(250, 247, 245);
  text-decoration-color: rgb(250, 247, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 247, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 247, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(210, 214, 223, 0.05);
  color: rgb(250, 247, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 42, 61);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(210, 214, 223, 0.05);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(0, 212, 250);
}

body h1 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h3 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h4 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h5 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h6 {
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 29, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 29, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(250, 247, 245);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(33, 42, 61);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body footer ul li a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body li.section-li > .section .meta {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(250, 247, 245);
  text-decoration: rgb(250, 247, 245);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(250, 247, 245);
  stroke: rgb(250, 247, 245);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

body .metadata {
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .navigation-progress {
  background-color: rgb(33, 42, 61);
}

body .page-header h2.page-title {
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body abbr {
  color: rgb(250, 247, 245);
  text-decoration: underline dotted rgb(250, 247, 245);
}

body details {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body input[type=text] {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}

body sub {
  color: rgb(250, 247, 245);
}

body summary {
  color: rgb(250, 247, 245);
}

body sup {
  color: rgb(250, 247, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0;
  --accent-l: 52%;
  --accent-on-selection: rgba(224, 41, 41, 0.4);
  --accent-s: 75%;
  --accent-soft-dark: rgba(46, 31, 31, 0.1);
  --accent-soft-hsl: 0, 19.6%, 15%;
  --accent-soft-light: rgba(46, 31, 31, 0.05);
  --background-contrast: 0%;
  --background-dark: rgb(23, 35, 62);
  --background-extra-dark: #000;
  --background-h: 0;
  --background-l: 99.3%;
  --background-modifier-active-hover: rgba(46, 31, 31, 0.05);
  --background-modifier-border: rgba(46, 31, 31, 0.1);
  --background-modifier-border-focus: rgba(46, 31, 31, 0.1);
  --background-modifier-border-hover: rgba(46, 31, 31, 0.1);
  --background-modifier-error: rgb(250, 30, 0);
  --background-modifier-error-hover: rgb(250, 30, 0);
  --background-modifier-form-field: rgba(46, 31, 31, 0.05);
  --background-modifier-form-field-hover: rgba(46, 31, 31, 0.05);
  --background-modifier-hover: rgba(46, 31, 31, 0.05);
  --background-modifier-success: rgb(30, 169, 67);
  --background-primary: rgb(253, 251, 251);
  --background-primary-alt: rgb(250, 245, 245);
  --background-s: 39.2%;
  --background-secondary: rgb(250, 245, 245);
  --background-secondary-alt: rgb(250, 245, 245);
  --background-secondary-l: 97.3%;
  --background-secondary-s: 34.3%;
  --bases-cards-background: rgb(253, 251, 251);
  --bases-cards-cover-background: rgb(250, 245, 245);
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px rgba(46, 31, 31, 0.1);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1);
  --bases-embed-border-color: rgba(46, 31, 31, 0.1);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: rgb(0, 0, 0);
  --bases-group-heading-property-size: 13px;
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: rgb(253, 251, 251);
  --bases-table-cell-background-disabled: rgb(250, 245, 245);
  --bases-table-cell-background-selected: rgba(224, 41, 41, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(46, 31, 31, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(224, 41, 41);
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: rgb(250, 245, 245);
  --bases-table-header-background: rgb(253, 251, 251);
  --bases-table-header-background-hover: rgba(46, 31, 31, 0.05);
  --bases-table-header-color: rgb(0, 0, 0);
  --bases-table-summary-background: rgb(253, 251, 251);
  --bases-table-summary-background-hover: rgba(46, 31, 31, 0.05);
  --blockquote-border-color: rgb(224, 41, 41);
  --blur-background: color-mix(in srgb, rgb(253, 251, 251) 65%, transparent) linear-gradient(rgb(253, 251, 251), color-mix(in srgb, rgb(253, 251, 251) 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 2px;
  --button-shadow: rgb(46, 31, 31);
  --button-shadow-hover: rgba(0, 0, 0, 0.67);
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
  --canvas-background: rgb(253, 251, 251);
  --canvas-card-label-color: rgb(0, 0, 0);
  --canvas-controls-radius: 2px;
  --caret-color: rgb(0, 0, 0);
  --checkbox-border-color: rgb(0, 0, 0);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: rgb(224, 41, 41);
  --checkbox-color-hover: rgb(224, 41, 41);
  --checkbox-marker-color: rgb(253, 251, 251);
  --checkbox-radius: 2px;
  --checklist-done-color: rgb(0, 0, 0);
  --clickable-icon-radius: 2px;
  --code-background: rgb(23, 35, 62);
  --code-border-color: rgba(46, 31, 31, 0.1);
  --code-bracket-background: rgba(46, 31, 31, 0.05);
  --code-comment: rgba(159, 157, 190);
  --code-function: rgb(230, 205, 90);
  --code-important: rgb(220, 95, 0);
  --code-indentation-guide-color: rgba(159, 157, 190, 0.33);
  --code-keyword: rgb(220, 100, 210);
  --code-normal: rgb(227, 227, 227);
  --code-operator: rgb(220, 65, 65);
  --code-peripheral: 159, 157, 190;
  --code-property: rgb(0, 202, 235);
  --code-punctuation: rgb(227, 227, 227);
  --code-radius: 2px;
  --code-string: rgb(30, 169, 67);
  --code-tag: rgb(220, 65, 65);
  --code-value: rgb(140, 110, 240);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(224, 41, 41);
  --collapse-icon-color-collapsed: rgb(224, 41, 41);
  --color-accent: rgb(224, 41, 41);
  --color-accent-1: rgb(224, 41, 41);
  --color-accent-2: rgb(232, 74, 82);
  --color-accent-background: rgba(224, 41, 41, 0.1);
  --color-accent-background-hover: rgba(224, 41, 41, 0.2);
  --color-accent-hsl: 0, 75%, 52%;
  --color-cyan: rgb(0, 202, 235);
  --color-green: rgb(30, 169, 67);
  --color-orange: rgb(220, 95, 0);
  --color-pink: rgb(220, 100, 210);
  --color-purple: rgb(140, 110, 240);
  --color-red: rgb(220, 65, 65);
  --color-yellow: rgb(230, 205, 90);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dictionary-background-primary: rgba(46, 31, 31, 0.05);
  --dictionary-background-secondary: rgb(250, 245, 245);
  --divider-color: transparent;
  --divider-color-hover: rgb(224, 41, 41);
  --dropdown-background: rgba(46, 31, 31, 0.05);
  --dropdown-background-hover: rgba(46, 31, 31, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1), inset 0 0 0 1px rgba(46, 31, 31, 0.1);
  --embed-border-left: 2px dashed rgb(0, 0, 0);
  --embed-border-start: 2px solid rgb(224, 41, 41);
  --file-header-background: rgb(253, 251, 251);
  --file-header-background-focused: rgb(253, 251, 251);
  --file-header-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --file-header-font-size: 14px;
  --flair-background: rgba(46, 31, 31, 0.05);
  --flair-color: rgb(0, 0, 0);
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface-theme: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mermaid: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-monospace: '??', '??', 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-text: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --font-ui-smallest: 12px;
  --footnote-divider-color: rgba(46, 31, 31, 0.1);
  --footnote-id-color: rgb(0, 0, 0);
  --footnote-id-color-no-occurrences: rgb(0, 0, 0);
  --footnote-input-background-active: rgba(46, 31, 31, 0.05);
  --footnote-line-height: 1.25em;
  --footnote-radius: 2px;
  --graph-node: rgb(0, 0, 0);
  --graph-node-attachment: rgb(230, 205, 90);
  --graph-node-focused: rgb(224, 41, 41);
  --graph-node-tag: rgb(30, 169, 67);
  --graph-node-unresolved: rgb(0, 0, 0);
  --graph-text: rgb(0, 0, 0);
  --gray: var(--text-muted);
  --h1-color: rgb(0, 0, 0);
  --h1-size: 1.5em;
  --h2-color: rgb(0, 0, 0);
  --h2-size: 1.375em;
  --h3-color: rgb(0, 0, 0);
  --h3-size: 1.25em;
  --h4-color: rgb(0, 0, 0);
  --h4-size: 1.125em;
  --h5-color: rgb(0, 0, 0);
  --h5-line-height: 1.25em;
  --h5-size: 1em;
  --h6-color: rgb(0, 0, 0);
  --h6-line-height: 1.25em;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(0, 0, 0);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(0, 0, 0, 0.4);
  --hr-thickness: 1px;
  --icon-color: rgb(0, 0, 0);
  --icon-color-active: rgb(0, 0, 0);
  --icon-color-focused: rgb(0, 0, 0);
  --icon-color-hover: rgb(0, 0, 0);
  --icon-opacity: 1;
  --indentation-guide-color: rgba(0, 0, 0, 0.4);
  --inline-title-color: rgb(0, 0, 0);
  --inline-title-size: 1.625em;
  --input-date-separator: rgb(0, 0, 0);
  --input-placeholder-color: rgb(0, 0, 0);
  --input-radius: 4px;
  --interactive-accent: rgb(224, 41, 41);
  --interactive-accent-hover: rgb(224, 41, 41);
  --interactive-accent-hsl: 0, 75%, 52%;
  --interactive-hover: rgba(46, 31, 31, 0.1);
  --interactive-normal: rgba(46, 31, 31, 0.05);
  --kanban-button-text: rgb(0, 0, 0);
  --kanban-button-text-hover: rgb(254, 252, 252);
  --kanban-checkbox-border: rgba(46, 31, 31, 0.1);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.25em;
  --link-color: rgb(224, 41, 41);
  --link-color-hover: #000;
  --link-external-color: rgb(224, 41, 41);
  --link-external-color-hover: #000;
  --link-unresolved-color: rgb(224, 41, 41);
  --link-unresolved-decoration-color: rgba(224, 41, 41, 0.3);
  --list-elements: rgb(0, 0, 0);
  --list-indent: 1.25em;
  --list-marker-color: rgb(0, 0, 0);
  --list-marker-color-collapsed: rgb(224, 41, 41);
  --list-marker-color-hover: rgb(0, 0, 0);
  --list-spacing: 0.25em;
  --menu-background: rgb(250, 245, 245);
  --menu-border-color: rgba(46, 31, 31, 0.1);
  --menu-radius: 4px;
  --metadata-border-color: rgba(46, 31, 31, 0.1);
  --metadata-divider-color: rgba(46, 31, 31, 0.1);
  --metadata-input-background-active: rgba(46, 31, 31, 0.05);
  --metadata-input-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --metadata-input-text-color: rgb(0, 0, 0);
  --metadata-label-background-active: rgba(46, 31, 31, 0.05);
  --metadata-label-font: '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --metadata-label-text-color: rgb(0, 0, 0);
  --metadata-label-text-color-hover: rgb(0, 0, 0);
  --metadata-property-background-active: rgba(46, 31, 31, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(46, 31, 31, 0.1);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(46, 31, 31, 0.1);
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: rgb(253, 251, 251);
  --modal-border-color: rgba(46, 31, 31, 0.1);
  --modal-radius: 6px;
  --nav-collapse-icon-color: rgb(224, 41, 41);
  --nav-collapse-icon-color-collapsed: rgb(224, 41, 41);
  --nav-heading-color: rgb(0, 0, 0);
  --nav-heading-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0);
  --nav-heading-color-hover: rgb(0, 0, 0);
  --nav-indentation-guide-color: rgb(224, 41, 41);
  --nav-item-background-active: rgba(46, 31, 31, 0.05);
  --nav-item-background-hover: rgba(46, 31, 31, 0.05);
  --nav-item-background-selected: rgba(224, 41, 41, 0.15);
  --nav-item-color: rgb(0, 0, 0);
  --nav-item-color-active: rgb(0, 0, 0);
  --nav-item-color-highlighted: rgb(224, 41, 41);
  --nav-item-color-hover: rgb(0, 0, 0);
  --nav-item-color-selected: rgb(0, 0, 0);
  --nav-item-radius: 2px;
  --nav-item-size: 14px;
  --nav-tag-color: rgb(0, 0, 0);
  --nav-tag-color-active: rgb(0, 0, 0);
  --nav-tag-color-hover: rgb(0, 0, 0);
  --nav-tag-radius: 2px;
  --oz-fta-file-font-size: 14px;
  --oz-fta-folder-font-size: 14px;
  --pdf-background: rgb(253, 251, 251);
  --pdf-page-background: rgb(253, 251, 251);
  --pdf-sidebar-background: rgb(253, 251, 251);
  --pill-border-color: rgba(46, 31, 31, 0.1);
  --pill-border-color-hover: rgba(46, 31, 31, 0.1);
  --pill-color: rgb(0, 0, 0);
  --pill-color-hover: rgb(0, 0, 0);
  --pill-color-remove: rgb(0, 0, 0);
  --pill-color-remove-hover: rgb(224, 41, 41);
  --polka-dots: radial-gradient(rgb(224, 41, 41) 15%, transparent 25%),
  radial-gradient(rgb(224, 41, 41) 17.5%, transparent 25%);
  --prompt-background: rgb(253, 251, 251);
  --prompt-border-color: rgba(46, 31, 31, 0.1);
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, rgb(253, 251, 251) 65%, transparent) linear-gradient(rgb(253, 251, 251), color-mix(in srgb, rgb(253, 251, 251) 65%, transparent));
  --ribbon-background: rgb(250, 245, 245);
  --ribbon-background-collapsed: rgb(253, 251, 251);
  --ribbon-border: none;
  --scrollbar-active-thumb-bg: rgba(46, 31, 31, 0.1);
  --scrollbar-radius: 6px;
  --scrollbar-thumb-bg: rgba(46, 31, 31, 0.05);
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(253, 251, 251);
  --search-result-bg-hover: rgba(46, 31, 31, 0.1);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(0, 0, 0);
  --setting-items-background: rgb(250, 245, 245);
  --setting-items-border-color: rgba(46, 31, 31, 0.1);
  --setting-items-radius: 6px;
  --slider-thumb-border-color: rgba(46, 31, 31, 0.1);
  --slider-track-background: rgba(46, 31, 31, 0.1);
  --ss-border-radius: 0.1px;
  --ss-embed-border-style: 2px dashed rgb(0, 0, 0);
  --ss-light-contrast: 0%;
  --ss-light-h: 0;
  --ss-light-highlight-bg: rgb(241, 101, 101);
  --ss-light-l: 9.86%;
  --ss-light-s: 3.92%;
  --ss-light-text-main: 0, 0, 0;
  --status-bar-background: rgb(250, 245, 245);
  --status-bar-border-color: transparent;
  --status-bar-font-size: 13px;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: rgb(0, 0, 0);
  --suggestion-background: rgb(253, 251, 251);
  --sync-avatar-color-1: rgb(220, 65, 65);
  --sync-avatar-color-2: rgb(220, 95, 0);
  --sync-avatar-color-3: rgb(230, 205, 90);
  --sync-avatar-color-4: rgb(30, 169, 67);
  --sync-avatar-color-5: rgb(0, 202, 235);
  --sync-avatar-color-7: rgb(140, 110, 240);
  --sync-avatar-color-8: rgb(220, 100, 210);
  --tab-background-active: rgb(253, 251, 251);
  --tab-container-background: rgb(250, 245, 245);
  --tab-divider-color: rgba(46, 31, 31, 0.1);
  --tab-font-size: 14px;
  --tab-outline-color: rgb(224, 41, 41);
  --tab-radius: 2px;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: rgb(250, 245, 245);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(250, 245, 245), transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(224, 41, 41);
  --tab-text-color: rgb(0, 0, 0);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: rgb(224, 41, 41);
  --table-add-button-border-color: rgba(46, 31, 31, 0.1);
  --table-body-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --table-body-font-size: 1em;
  --table-border-color: rgb(0, 0, 0);
  --table-drag-handle-background-active: rgb(224, 41, 41);
  --table-drag-handle-color: rgb(0, 0, 0);
  --table-drag-handle-color-active: rgb(254, 252, 252);
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: rgb(0, 0, 0);
  --table-header-font: '??', '??', 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --table-selection: rgba(224, 41, 41, 0.1);
  --table-selection-border-color: rgb(224, 41, 41);
  --tag-background: rgba(224, 41, 41, 0.1);
  --tag-background-hover: rgba(224, 41, 41, 0.2);
  --tag-border-color: rgba(224, 41, 41, 0.15);
  --tag-border-color-hover: rgba(224, 41, 41, 0.15);
  --tag-color: rgb(224, 41, 41);
  --tag-color-hover: rgb(224, 41, 41);
  --tag-radius: 4px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(224, 41, 41);
  --text-accent-hover: #000;
  --text-error: rgb(250, 30, 0);
  --text-faint: rgb(0, 0, 0);
  --text-highlight-bg: rgb(241, 101, 101);
  --text-highlight-fg: #000;
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(0, 0, 0);
  --text-on-accent: rgb(254, 252, 252);
  --text-selection: rgba(224, 41, 41, 0.4);
  --text-success: rgb(30, 169, 67);
  --text-warning: rgb(220, 95, 0);
  --text-white: rgb(254, 252, 252);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(250, 245, 245);
  --titlebar-background-focused: rgb(250, 245, 245);
  --titlebar-border-color: rgba(46, 31, 31, 0.1);
  --titlebar-text-color: rgb(0, 0, 0);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --vault-name-font-weight: bold;
  --vault-profile-color: rgb(0, 0, 0);
  --vault-profile-color-hover: rgb(0, 0, 0);
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 246, 246);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 253, 253);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 246, 246);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 246, 246);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(254, 253, 253);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgb(240, 102, 102);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgb(224, 41, 41);
  text-decoration-color: rgb(224, 41, 41);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgb(224, 41, 41);
  text-decoration-color: rgb(224, 41, 41);
}

body a.internal.broken {
  color: rgb(224, 41, 41);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgba(224, 41, 41, 0.3);
  text-decoration-color: rgba(224, 41, 41, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body blockquote {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(230, 205, 90);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 205, 90);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 205, 90);
  border-left-color: rgb(230, 205, 90);
  border-right-color: rgb(230, 205, 90);
  border-top-color: rgb(230, 205, 90);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(224, 41, 41);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(224, 41, 41);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(46, 31, 31, 0.05);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 246, 246);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(46, 31, 31, 0.05);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(224, 41, 41);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 253, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 253);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(250, 246, 246);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .navigation-progress {
  background-color: rgb(250, 246, 246);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
