import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "polka",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["rubik", "ibm-plex-mono"],
    styleSettingsId: ["ss-light-customization", "polka"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 189;
  --accent-l: 49%;
  --accent-on-selection: hsla(var(--color-accent-hsl), 0.4);
  --accent-s: 100%;
  --accent-soft-dark: hsla(var(--accent-soft-hsl), 0.1);
  --accent-soft-hsl: var(--background-h), calc(var(--background-s)*0.5), 85%;
  --accent-soft-light: hsla(var(--accent-soft-hsl), 0.05);
  --background-contrast: calc(var(--ss-dark-contrast)*4.8);
  --background-dark: rgb(10, 18, 30);
  --background-extra-dark: #000;
  --background-h: var(--ss-dark-h, 221);
  --background-l: calc(var(--ss-dark-l)*5);
  --background-modifier-active-hover: var(--accent-soft-light, hsla(221, 16.65%, 85%, 0.05));
  --background-modifier-border: var(--accent-soft-dark, hsla(221, 16.65%, 85%, 0.1));
  --background-modifier-border-focus: hsl(var(--background-h), var(--background-s), calc(var(--background-l) - 4%));
  --background-modifier-border-hover: var(--accent-soft-dark, hsla(221, 16.65%, 85%, 0.1));
  --background-modifier-error: var(--text-error, rgb(250, 30, 0));
  --background-modifier-error-hover: var(--text-error, rgb(250, 30, 0));
  --background-modifier-form-field: var(--background-dark, rgb(10, 18, 30));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgb(10, 18, 30));
  --background-modifier-hover: var(--accent-soft-light, hsla(221, 16.65%, 85%, 0.05));
  --background-modifier-success: var(--color-green, rgb(30, 169, 67));
  --background-primary: hsl(var(--background-h), var(--background-s), var(--background-l));
  --background-primary-alt: var(--background-dark, rgb(10, 18, 30));
  --background-s: calc(var(--ss-dark-s)*10);
  --background-secondary: hsl(var(--background-h), var(--background-secondary-s), var(--background-secondary-l));
  --background-secondary-alt: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --background-secondary-l: calc(var(--background-l) + 2% + var(--background-contrast));
  --background-secondary-s: calc(var(--background-s)*0.875);
  --bases-cards-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(10, 18, 30));
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, rgb(250, 247, 245));
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, rgb(250, 247, 245));
  --bases-table-cell-background-active: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(10, 18, 30));
  --bases-table-cell-background-selected: var(--table-selection, hsla(189, 100%, 49%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, rgb(10, 18, 30));
  --bases-table-header-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --bases-table-header-color: var(--text-muted, rgb(250, 247, 245));
  --bases-table-summary-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --blockquote-border-color: var(--interactive-accent, hsl(189, 100%, 49%));
  --button-radius: var(--radius-s, 2px);
  --button-shadow: hsl(var(--accent-soft-hsl), 0.6);
  --button-shadow-hover: rgba(255, 255, 255, 0.67);
  --callout-bug: var(--color-red-rgb, rgb(245, 0, 170));
  --callout-default: var(--text-normal, rgb(250, 247, 245));
  --callout-error: var(--color-red-rgb, rgb(250, 30, 0));
  --callout-example: var(--text-normal, rgb(250, 247, 245));
  --callout-fail: var(--color-red-rgb, rgb(250, 30, 0));
  --callout-important: var(--color-accent, hsl(189, 100%, 49%));
  --callout-info: var(--text-normal, rgb(250, 247, 245));
  --callout-question: var(--text-normal, rgb(250, 247, 245));
  --callout-quote: var(--text-normal, rgb(250, 247, 245));
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, rgb(0, 190, 0));
  --callout-summary: var(--text-normal, rgb(250, 247, 245));
  --callout-tip: var(--color-cyan-rgb, rgb(255, 220, 120));
  --callout-todo: var(--color-blue-rgb, rgb(0, 130, 255));
  --callout-warning: var(--color-orange-rgb, rgb(220, 210, 0));
  --canvas-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --canvas-card-label-color: var(--text-faint, rgb(250, 247, 245));
  --canvas-controls-radius: var(--radius-s, 2px);
  --caret-color: var(--text-normal, rgb(250, 247, 245));
  --checkbox-border-color: var(--list-elements, rgb(250, 247, 245));
  --checkbox-border-color-hover: var(--text-muted, rgb(250, 247, 245));
  --checkbox-color: var(--interactive-accent, hsl(189, 100%, 49%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(189, 100%, 49%));
  --checkbox-marker-color: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, rgb(250, 247, 245));
  --clickable-icon-radius: var(--radius-s, 2px);
  --code-background: var(--background-dark, rgb(10, 18, 30));
  --code-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --code-bracket-background: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --code-comment: rgba(var(--code-peripheral), 0.7);
  --code-function: var(--color-yellow, rgb(230, 205, 90));
  --code-important: var(--color-orange, rgb(220, 95, 0));
  --code-indentation-guide-color: rgba(var(--code-peripheral), 0.23);
  --code-keyword: var(--color-pink, rgb(220, 100, 210));
  --code-normal: var(--text-normal, hsl(0, 0%, 89%));
  --code-operator: var(--color-red, rgb(220, 65, 65));
  --code-peripheral: 175, 191, 255;
  --code-property: var(--color-cyan, rgb(0, 202, 235));
  --code-punctuation: var(--code-normal, hsl(0, 0%, 89%));
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--color-green, rgb(30, 169, 67));
  --code-tag: var(--color-red, rgb(220, 65, 65));
  --code-value: var(--color-purple, rgb(140, 110, 240));
  --collapse-icon-color: var(--color-accent, hsl(189, 100%, 49%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(189, 100%, 49%));
  --color-accent-1: var(--color-accent, hsl(189, 100%, 49%));
  --color-accent-background: hsla(var(--color-accent-hsl), 0.1);
  --color-accent-background-hover: hsla(var(--color-accent-hsl), 0.2);
  --color-cyan: rgb(0, 202, 235);
  --color-green: rgb(30, 169, 67);
  --color-orange: rgb(220, 95, 0);
  --color-pink: rgb(220, 100, 210);
  --color-purple: rgb(140, 110, 240);
  --color-red: rgb(220, 65, 65);
  --color-yellow: rgb(230, 205, 90);
  --dark: var(--text-normal, rgb(var(--ss-dark-text-main)));
  --darkgray: var(--text-normal, rgb(var(--ss-dark-text-main)));
  --dictionary-background-primary: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --dictionary-background-secondary: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(189, 100%, 49%));
  --dropdown-background: var(--interactive-normal, rgb(10, 18, 30));
  --dropdown-background-hover: var(--interactive-hover, rgb(10, 18, 30));
  --embed-border-left: var(--ss-embed-border-style, 2px dashed rgb(250, 247, 245));
  --file-header-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --file-header-background-focused: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --file-header-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --flair-background: var(--interactive-normal, rgb(10, 18, 30));
  --flair-color: var(--text-normal, rgb(250, 247, 245));
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface-theme: var(--font-default, 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
  --font-mermaid: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --font-ui-smallest: 12px;
  --footnote-divider-color: var(--metadata-divider-color, hsla(221, 16.65%, 85%, 0.1));
  --footnote-id-color: var(--text-muted, rgb(250, 247, 245));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(250, 247, 245));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(221, 16.65%, 85%, 0.05));
  --footnote-line-height: var(--line-height-normal, 1.25em);
  --footnote-radius: var(--radius-s, 2px);
  --graph-node: var(--text-muted, rgb(250, 247, 245));
  --graph-node-attachment: var(--color-yellow, rgb(230, 205, 90));
  --graph-node-focused: var(--text-accent, hsl(189, 100%, 49%));
  --graph-node-tag: var(--color-green, rgb(30, 169, 67));
  --graph-node-unresolved: var(--text-faint, rgb(250, 247, 245));
  --graph-text: var(--text-normal, rgb(250, 247, 245));
  --gray: var(--text-muted, var(--text-normal, rgb(250, 247, 245)));
  --h1-color: var(--text-normal, rgb(250, 247, 245));
  --h1-size: 1.5em;
  --h2-color: var(--text-normal, rgb(250, 247, 245));
  --h2-size: 1.375em;
  --h3-color: var(--text-normal, rgb(250, 247, 245));
  --h3-size: 1.25em;
  --h4-color: var(--text-normal, rgb(250, 247, 245));
  --h4-size: 1.125em;
  --h5-color: var(--text-normal, rgb(250, 247, 245));
  --h5-line-height: var(--line-height-normal, 1.25em);
  --h5-size: 1em;
  --h6-color: var(--text-normal, rgb(250, 247, 245));
  --h6-line-height: var(--line-height-normal, 1.25em);
  --heading-formatting: var(--text-normal, rgb(250, 247, 245));
  --highlight: var(--text-highlight-bg, var(--ss-dark-highlight-bg, hsl(189, 110%, 63.9%)));
  --hr-color: rgba(var(--ss-dark-text-main), 0.1);
  --hr-thickness: 1px;
  --icon-color: var(--text-normal, rgb(250, 247, 245));
  --icon-color-active: var(--text-normal, rgb(250, 247, 245));
  --icon-color-focused: var(--text-normal, rgb(250, 247, 245));
  --icon-color-hover: var(--text-normal, rgb(250, 247, 245));
  --icon-opacity: 1;
  --indentation-guide-color: var(--hr-color, rgba(250, 247, 245, 0.1));
  --inline-title-color: var(--h1-color, rgb(250, 247, 245));
  --inline-title-size: var(--h1-size, 1.625em);
  --input-date-separator: var(--text-faint, rgb(250, 247, 245));
  --input-placeholder-color: var(--text-faint, rgb(250, 247, 245));
  --input-radius: var(--radius-m, 4px);
  --interactive-accent: var(--color-accent, hsl(189, 100%, 49%));
  --interactive-accent-hover: var(--color-accent, hsl(189, 100%, 49%));
  --interactive-accent-hsl: var(--color-accent-hsl, 189, 100%, 49%);
  --interactive-hover: var(--background-dark, rgb(10, 18, 30));
  --interactive-normal: var(--background-dark, rgb(10, 18, 30));
  --kanban-button-text: var(--text-normal, rgb(250, 247, 245));
  --kanban-button-text-hover: var(--text-on-accent, #000);
  --kanban-checkbox-border: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --light: var(--background-primary, hsl(var(--background-h), var(--background-s), var(--background-l)));
  --lightgray: var(--background-secondary, hsl(var(--background-h), var(--background-secondary-s), var(--background-secondary-l)));
  --line-height-normal: 1.25em;
  --link-color: var(--text-accent, hsl(189, 100%, 49%));
  --link-color-hover: var(--text-accent-hover, rgb(250, 247, 245));
  --link-external-color: var(--text-accent, hsl(189, 100%, 49%));
  --link-external-color-hover: var(--text-accent-hover, rgb(250, 247, 245));
  --link-unresolved-color: var(--text-accent, hsl(189, 100%, 49%));
  --list-elements: var(--text-normal, rgb(250, 247, 245));
  --list-marker-color: var(--list-elements, rgb(250, 247, 245));
  --list-marker-color-collapsed: var(--text-accent, hsl(189, 100%, 49%));
  --list-marker-color-hover: var(--text-muted, rgb(250, 247, 245));
  --list-spacing: calc(var(--line-height-normal)/5);
  --menu-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --menu-border-color: var(--background-modifier-border-hover, hsla(221, 16.65%, 85%, 0.1));
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --metadata-divider-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --metadata-input-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --metadata-input-text-color: var(--text-normal, rgb(250, 247, 245));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --metadata-label-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --metadata-label-text-color: var(--text-muted, rgb(250, 247, 245));
  --metadata-label-text-color-hover: var(--text-muted, rgb(250, 247, 245));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(221, 16.65%, 85%, 0.05));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --modal-border-color: var(--accent-soft-dark, hsla(221, 16.65%, 85%, 0.1));
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--color-accent, hsl(189, 100%, 49%));
  --nav-collapse-icon-color-collapsed: var(--color-accent, hsl(189, 100%, 49%));
  --nav-heading-color: var(--text-normal, rgb(250, 247, 245));
  --nav-heading-color-collapsed: var(--text-faint, rgb(250, 247, 245));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(250, 247, 245));
  --nav-heading-color-hover: var(--text-normal, rgb(250, 247, 245));
  --nav-indentation-guide-color: var(--color-accent, hsl(189, 100%, 49%));
  --nav-item-background-active: var(--accent-soft-light, hsla(221, 16.65%, 85%, 0.05));
  --nav-item-background-hover: var(--accent-soft-light, hsla(221, 16.65%, 85%, 0.05));
  --nav-item-color: var(--text-normal, rgb(250, 247, 245));
  --nav-item-color-active: var(--text-normal, rgb(250, 247, 245));
  --nav-item-color-highlighted: var(--text-accent, hsl(189, 100%, 49%));
  --nav-item-color-hover: var(--text-normal, rgb(250, 247, 245));
  --nav-item-color-selected: var(--text-normal, rgb(250, 247, 245));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, rgb(250, 247, 245));
  --nav-tag-color-active: var(--text-muted, rgb(250, 247, 245));
  --nav-tag-color-hover: var(--text-muted, rgb(250, 247, 245));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-file-font-size: var(--nav-item-size, 14px);
  --oz-fta-folder-font-size: var(--nav-item-size, 14px);
  --pdf-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --pdf-page-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --pdf-sidebar-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --pill-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(221, 16.65%, 85%, 0.1));
  --pill-color: var(--text-muted, rgb(250, 247, 245));
  --pill-color-hover: var(--text-normal, rgb(250, 247, 245));
  --pill-color-remove: var(--text-faint, rgb(250, 247, 245));
  --pill-color-remove-hover: var(--text-accent, hsl(189, 100%, 49%));
  --polka-dots: radial-gradient(var(--color-accent) 15%, transparent 25%),
  radial-gradient(var(--color-accent) 17.5%, transparent 25%);
  --prompt-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --prompt-border-color: var(--accent-soft-dark, hsla(221, 16.65%, 85%, 0.1));
  --radius-l: calc(var(--radius-s)*3);
  --radius-m: calc(var(--radius-s)*2);
  --radius-s: calc(var(--ss-border-radius)*20);
  --radius-xl: calc(var(--radius-s)*4);
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(10, 18, 30) 65%, transparent) linear-gradient(rgb(10, 18, 30), color-mix(in srgb, rgb(10, 18, 30) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --ribbon-background-collapsed: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --ribbon-border: none;
  --scrollbar-active-thumb-bg: var(--accent-soft-dark, hsla(221, 16.65%, 85%, 0.1));
  --scrollbar-radius: var(--radius-l, 6px);
  --scrollbar-thumb-bg: var(--accent-soft-light, hsla(221, 16.65%, 85%, 0.05));
  --search-clear-button-color: var(--text-muted, rgb(250, 247, 245));
  --search-icon-color: var(--text-muted, rgb(250, 247, 245));
  --search-result-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --search-result-bg-hover: var(--background-modifier-form-field, rgb(10, 18, 30));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(189, 100%, 49%)));
  --setting-group-heading-color: var(--text-normal, rgb(250, 247, 245));
  --setting-items-background: var(--background-primary-alt, rgb(10, 18, 30));
  --setting-items-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --setting-items-radius: var(--radius-l, 6px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(250, 247, 245));
  --shiki-code-background: var(--code-background, rgb(10, 18, 30));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, rgb(250, 247, 245));
  --shiki-code-function: var(--color-green, rgb(30, 169, 67));
  --shiki-code-important: var(--color-orange, rgb(220, 95, 0));
  --shiki-code-keyword: var(--color-pink, rgb(220, 100, 210));
  --shiki-code-normal: var(--text-muted, rgb(250, 247, 245));
  --shiki-code-property: var(--color-cyan, rgb(0, 202, 235));
  --shiki-code-punctuation: var(--text-muted, rgb(250, 247, 245));
  --shiki-code-string: var(--color-yellow, rgb(230, 205, 90));
  --shiki-code-value: var(--color-purple, rgb(140, 110, 240));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --shiki-gutter-text-color: var(--text-faint, rgb(250, 247, 245));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(250, 247, 245));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(250, 247, 245));
  --shiki-terminal-dots-color: var(--text-faint, rgb(250, 247, 245));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(221, 16.65%, 85%, 0.1));
  --slider-track-background: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --ss-border-radius: 0.1px;
  --ss-dark-contrast: 0.73%;
  --ss-dark-h: 221;
  --ss-dark-highlight-bg: hsl(var(--accent-h), calc(var(--accent-s)*1.1), calc(var(--accent-l)*1.1 + 10%));
  --ss-dark-l: 2.58%;
  --ss-dark-s: 3.33%;
  --ss-dark-text-main: 250, 247, 245;
  --ss-embed-border-style: 2px dashed var(--text-normal);
  --status-bar-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-normal, rgb(250, 247, 245));
  --suggestion-background: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --sync-avatar-color-1: var(--color-red, rgb(220, 65, 65));
  --sync-avatar-color-2: var(--color-orange, rgb(220, 95, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(230, 205, 90));
  --sync-avatar-color-4: var(--color-green, rgb(30, 169, 67));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 202, 235));
  --sync-avatar-color-7: var(--color-purple, rgb(140, 110, 240));
  --sync-avatar-color-8: var(--color-pink, rgb(220, 100, 210));
  --tab-background-active: var(--background-primary, hsl(221, 33.3%, 12.9%));
  --tab-container-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --tab-divider-color: var(--background-modifier-border-hover, hsla(221, 16.65%, 85%, 0.1));
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--color-accent, hsl(189, 100%, 49%));
  --tab-radius: var(--radius-s, 2px);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --tab-switcher-preview-radius: var(--radius-xl, 8px);
  --tab-text-color: var(--text-faint, rgb(250, 247, 245));
  --tab-text-color-active: var(--text-muted, rgb(250, 247, 245));
  --tab-text-color-focused: var(--text-muted, rgb(250, 247, 245));
  --tab-text-color-focused-active: var(--text-muted, rgb(250, 247, 245));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(250, 247, 245));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(189, 100%, 49%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --table-body-font: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --table-body-font-size: 1em;
  --table-border-color: var(--list-elements, rgb(250, 247, 245));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(189, 100%, 49%));
  --table-drag-handle-color: var(--text-faint, rgb(250, 247, 245));
  --table-drag-handle-color-active: var(--text-on-accent, #000);
  --table-header-border-color: var(--list-elements, rgb(250, 247, 245));
  --table-header-color: var(--text-normal, rgb(250, 247, 245));
  --table-header-font: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --table-selection-border-color: var(--interactive-accent, hsl(189, 100%, 49%));
  --tag-background: var(--color-accent-background, hsla(189, 100%, 49%, 0.1));
  --tag-background-hover: var(--color-accent-background-hover, hsla(189, 100%, 49%, 0.2));
  --tag-color: var(--text-accent, hsl(189, 100%, 49%));
  --tag-color-hover: var(--text-accent, hsl(189, 100%, 49%));
  --tag-radius: var(--radius-m, 4px);
  --tertiary: var(--text-accent-hover, var(--text-white, rgb(250, 247, 245)));
  --text-accent: var(--color-accent-1, hsl(189, 100%, 49%));
  --text-accent-hover: var(--text-white, rgb(250, 247, 245));
  --text-error: var(--color-red, rgb(250, 30, 0));
  --text-faint: var(--text-normal, rgb(250, 247, 245));
  --text-highlight-bg: var(--ss-dark-highlight-bg, hsl(189, 110%, 63.9%));
  --text-highlight-fg: #000;
  --text-muted: var(--text-normal, rgb(250, 247, 245));
  --text-normal: rgb(var(--ss-dark-text-main));
  --text-on-accent: #000;
  --text-selection: var(--accent-on-selection, hsla(189, 100%, 49%, 0.4));
  --text-success: var(--color-green, rgb(30, 169, 67));
  --text-warning: var(--color-orange, rgb(220, 95, 0));
  --text-white: rgb(250, 247, 245);
  --textHighlight: var(--text-highlight-bg, var(--ss-dark-highlight-bg, hsl(189, 110%, 63.9%)));
  --titlebar-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --titlebar-background-focused: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  --titlebar-border-color: var(--background-modifier-border, hsla(221, 16.65%, 85%, 0.1));
  --titlebar-text-color: var(--text-muted, rgb(250, 247, 245));
  --titlebar-text-color-focused: var(--text-normal, rgb(250, 247, 245));
  --vault-name-font-weight: bold;
  --vault-profile-color: var(--text-normal, rgb(250, 247, 245));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(250, 247, 245));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  background-color: var(--tab-container-background, rgb(33, 42, 61));
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(22, 29, 44));
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(33, 42, 61));
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(221, 29.1375%, 18.404%));
  background-color: var(--tab-container-background, rgb(33, 42, 61));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(250, 247, 245);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(250, 247, 245));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(250, 247, 245));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(250, 247, 245));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(250, 247, 245));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(71, 227, 255));
  color: var(--text-highlight-fg, rgb(0, 0, 0));
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
  color: var(--text-normal, rgb(250, 247, 245));
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(250, 247, 245);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(0, 212, 250));
  border-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 247, 245) none 0px;
  text-decoration-color: rgb(250, 247, 245);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(0, 212, 250));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(0, 212, 250));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(0, 212, 250));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 212, 250) none 0px;
  text-decoration: underline rgba(0, 212, 250, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(0, 212, 250, 0.3));
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
  color: var(--text-faint, rgb(250, 247, 245));
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
  font-family: var(--table-body-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--table-text-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--table-header-color, rgb(250, 247, 245));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(10, 18, 30));
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(227, 227, 227));
  font-family: var(--font-monospace, "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(10, 18, 30));
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
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(10, 18, 30));
  border-bottom-color: rgb(250, 247, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  background-color: var(--background-primary-alt, rgb(10, 18, 30));
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(250, 247, 245);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 29, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 95, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 202, 235);
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
  background-color: rgb(220, 65, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
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
  background-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 205, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 110, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, rgb(245, 0, 170));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, rgb(250, 30, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, rgb(250, 30, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, rgb(250, 247, 245));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, rgb(0, 190, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, rgb(255, 220, 120));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, rgb(0, 130, 255));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, rgb(220, 210, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: rgb(250, 247, 245);
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(250, 247, 245);
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
  color: var(--text-normal, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(22, 29, 44));
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
  background-color: var(--background-modifier-hover, rgba(210, 214, 223, 0.05));
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
  background-color: var(--background-modifier-hover, rgba(210, 214, 223, 0.05));
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
  background-color: var(--background-modifier-hover, rgba(210, 214, 223, 0.05));
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(189, 100%, 49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(189, 100%, 49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(189, 100%, 49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(189, 100%, 49%, 0.15));
  --pill-color: var(--tag-color, hsl(189, 100%, 49%));
  --pill-color-hover: var(--tag-color-hover, hsl(189, 100%, 49%));
  --pill-color-remove: var(--tag-color, hsl(189, 100%, 49%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(189, 100%, 49%));
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(0, 212, 250, 0.1));
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(250, 247, 245));
  font-family: var(--h1-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(250, 247, 245));
  font-size: var(--inline-title-size, 26px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(250, 247, 245));
  font-family: var(--h2-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(250, 247, 245));
  font-family: var(--inline-title-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(250, 247, 245));
  font-family: var(--h3-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(250, 247, 245));
  font-family: var(--h4-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(250, 247, 245));
  font-family: var(--h5-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(250, 247, 245));
  font-family: var(--h6-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, rgb(250, 247, 245));
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
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(0, 212, 250);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  color: var(--icon-color, rgb(250, 247, 245));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--background-secondary, rgb(33, 42, 61));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: var(--status-bar-text-color, rgb(250, 247, 245));
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
  color: var(--nav-item-color, rgb(250, 247, 245));
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
  color: var(--nav-item-color, rgb(250, 247, 245));
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
  color: var(--icon-color, rgb(250, 247, 245));
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
  color: var(--text-faint, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(33, 42, 61));
  border-color: rgb(250, 247, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(250, 247, 245);
  color: var(--table-header-color, rgb(250, 247, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(210, 214, 223, 0.1);
  border-left-color: rgba(210, 214, 223, 0.1);
  border-right-color: rgba(210, 214, 223, 0.1);
  border-top-color: rgba(210, 214, 223, 0.1);
  color: var(--text-muted, rgb(250, 247, 245));
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
  --pill-background: var(--tag-background, hsla(189, 100%, 49%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(189, 100%, 49%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(189, 100%, 49%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(189, 100%, 49%, 0.15));
  --pill-color: var(--tag-color, hsl(189, 100%, 49%));
  --pill-color-hover: var(--tag-color-hover, hsl(189, 100%, 49%));
  --pill-color-remove: var(--tag-color, hsl(189, 100%, 49%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(189, 100%, 49%));
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(0, 212, 250, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(0, 212, 250));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(22, 29, 44));
  color: var(--text-normal, rgb(250, 247, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(33, 42, 61));
  border-color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(33, 42, 61));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(250, 247, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 247, 245);
  border-left-color: rgb(250, 247, 245);
  border-right-color: rgb(250, 247, 245);
  border-top-color: rgb(250, 247, 245);
  color: rgb(250, 247, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(33, 42, 61));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(250, 247, 245));
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
  color: var(--text-normal, rgb(250, 247, 245));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(10, 18, 30));
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(227, 227, 227));
  font-family: var(--font-monospace, "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace);
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
  background-color: var(--tag-background, rgba(0, 212, 250, 0.1));
  border-bottom-color: rgba(0, 212, 250, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(0, 212, 250, 0.15);
  border-right-color: rgba(0, 212, 250, 0.15);
  border-top-color: rgba(0, 212, 250, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(0, 212, 250));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0;
  --accent-l: 52%;
  --accent-on-selection: hsla(var(--color-accent-hsl), 0.4);
  --accent-s: 75%;
  --accent-soft-dark: hsla(var(--accent-soft-hsl), 0.1);
  --accent-soft-hsl: var(--background-h), calc(var(--background-s)*0.5), 15%;
  --accent-soft-light: hsla(var(--accent-soft-hsl), 0.05);
  --background-contrast: calc(var(--ss-light-contrast)*4.8);
  --background-dark: rgb(23, 35, 62);
  --background-extra-dark: #000;
  --background-h: var(--ss-light-h, 0);
  --background-l: calc(var(--ss-light-l)*5 + 50%);
  --background-modifier-active-hover: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --background-modifier-border: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --background-modifier-border-focus: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --background-modifier-border-hover: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --background-modifier-error: var(--text-error, rgb(250, 30, 0));
  --background-modifier-error-hover: var(--text-error, rgb(250, 30, 0));
  --background-modifier-form-field: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsla(0, 19.6%, 15%, 0.05));
  --background-modifier-hover: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --background-modifier-success: var(--color-green, rgb(30, 169, 67));
  --background-primary: hsl(var(--background-h), var(--background-s), var(--background-l));
  --background-primary-alt: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --background-s: calc(var(--ss-light-s)*10);
  --background-secondary: hsl(var(--background-h), var(--background-secondary-s), var(--background-secondary-l));
  --background-secondary-alt: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --background-secondary-l: calc(var(--background-l) - 2% - var(--background-contrast));
  --background-secondary-s: calc(var(--background-s)*0.875);
  --bases-cards-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(0, 34.3%, 97.3%));
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, rgb(0, 0, 0));
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, rgb(0, 0, 0));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(0, 34.3%, 97.3%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 75%, 52%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, hsl(0, 34.3%, 97.3%));
  --bases-table-header-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --bases-table-header-color: var(--text-muted, rgb(0, 0, 0));
  --bases-table-summary-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --blockquote-border-color: var(--interactive-accent, hsl(0, 75%, 52%));
  --button-radius: var(--radius-s, 2px);
  --button-shadow: hsl(var(--accent-soft-hsl), 0.6);
  --button-shadow-hover: rgba(0, 0, 0, 0.67);
  --callout-bug: var(--color-red-rgb, rgb(245, 0, 165));
  --callout-default: var(--text-normal, rgb(0, 0, 0));
  --callout-error: var(--color-red-rgb, rgb(235, 0, 0));
  --callout-example: var(--text-normal, rgb(0, 0, 0));
  --callout-fail: var(--color-red-rgb, rgb(235, 0, 0));
  --callout-important: var(--color-accent, hsl(0, 75%, 52%));
  --callout-info: var(--text-normal, rgb(0, 0, 0));
  --callout-question: var(--text-normal, rgb(0, 0, 0));
  --callout-quote: var(--text-normal, rgb(0, 0, 0));
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, rgb(0, 180, 0));
  --callout-summary: var(--text-normal, rgb(0, 0, 0));
  --callout-tip: var(--color-cyan-rgb, rgb(240, 195, 0));
  --callout-todo: var(--color-blue-rgb, rgb(0, 130, 235));
  --callout-warning: var(--color-orange-rgb, rgb(240, 150, 0));
  --canvas-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --canvas-card-label-color: var(--text-faint, rgb(0, 0, 0));
  --canvas-controls-radius: var(--radius-s, 2px);
  --caret-color: var(--text-normal, rgb(0, 0, 0));
  --checkbox-border-color: var(--list-elements, rgb(0, 0, 0));
  --checkbox-border-color-hover: var(--text-muted, rgb(0, 0, 0));
  --checkbox-color: var(--interactive-accent, hsl(0, 75%, 52%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(0, 75%, 52%));
  --checkbox-marker-color: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, rgb(0, 0, 0));
  --clickable-icon-radius: var(--radius-s, 2px);
  --code-background: var(--background-dark, rgb(23, 35, 62));
  --code-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --code-bracket-background: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --code-comment: rgba(var(--code-peripheral));
  --code-function: var(--color-yellow, rgb(230, 205, 90));
  --code-important: var(--color-orange, rgb(220, 95, 0));
  --code-indentation-guide-color: rgba(var(--code-peripheral), 0.33);
  --code-keyword: var(--color-pink, rgb(220, 100, 210));
  --code-normal: var(--text-normal, hsl(0, 0%, 89%));
  --code-operator: var(--color-red, rgb(220, 65, 65));
  --code-peripheral: 159, 157, 190;
  --code-property: var(--color-cyan, rgb(0, 202, 235));
  --code-punctuation: var(--code-normal, hsl(0, 0%, 89%));
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--color-green, rgb(30, 169, 67));
  --code-tag: var(--color-red, rgb(220, 65, 65));
  --code-value: var(--color-purple, rgb(140, 110, 240));
  --collapse-icon-color: var(--color-accent, hsl(0, 75%, 52%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(0, 75%, 52%));
  --color-accent-1: var(--color-accent, hsl(0, 75%, 52%));
  --color-accent-background: hsla(var(--color-accent-hsl), 0.1);
  --color-accent-background-hover: hsla(var(--color-accent-hsl), 0.2);
  --color-cyan: rgb(0, 202, 235);
  --color-green: rgb(30, 169, 67);
  --color-orange: rgb(220, 95, 0);
  --color-pink: rgb(220, 100, 210);
  --color-purple: rgb(140, 110, 240);
  --color-red: rgb(220, 65, 65);
  --color-yellow: rgb(230, 205, 90);
  --dark: var(--text-normal, rgb(var(--ss-light-text-main)));
  --darkgray: var(--text-normal, rgb(var(--ss-light-text-main)));
  --dictionary-background-primary: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --dictionary-background-secondary: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(0, 75%, 52%));
  --dropdown-background: var(--interactive-normal, hsla(0, 19.6%, 15%, 0.05));
  --dropdown-background-hover: var(--interactive-hover, hsla(0, 19.6%, 15%, 0.1));
  --embed-border-left: var(--ss-embed-border-style, 2px dashed rgb(0, 0, 0));
  --file-header-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --file-header-background-focused: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --file-header-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --file-header-font-size: var(--font-ui-small, 14px);
  --flair-background: var(--interactive-normal, hsla(0, 19.6%, 15%, 0.05));
  --flair-color: var(--text-normal, rgb(0, 0, 0));
  --font-default: 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface-theme: var(--font-default, 'Franklin Gothic Book', 'Rubik', 'Helvetica Neue', ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
  --font-mermaid: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --font-monospace-default: 'iA Writer Mono S', 'IBM Plex Mono', 'Roboto Mono', Menlo, SFMono-Regular, Consolas, 'Source Code Pro', monospace;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --font-ui-smallest: 12px;
  --footnote-divider-color: var(--metadata-divider-color, hsla(0, 19.6%, 15%, 0.1));
  --footnote-id-color: var(--text-muted, rgb(0, 0, 0));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(0, 0, 0));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(0, 19.6%, 15%, 0.05));
  --footnote-line-height: var(--line-height-normal, 1.25em);
  --footnote-radius: var(--radius-s, 2px);
  --graph-node: var(--text-muted, rgb(0, 0, 0));
  --graph-node-attachment: var(--color-yellow, rgb(230, 205, 90));
  --graph-node-focused: var(--text-accent, hsl(0, 75%, 52%));
  --graph-node-tag: var(--color-green, rgb(30, 169, 67));
  --graph-node-unresolved: var(--text-faint, rgb(0, 0, 0));
  --graph-text: var(--text-normal, rgb(0, 0, 0));
  --gray: var(--text-muted, var(--text-normal, rgb(0, 0, 0)));
  --h1-color: var(--text-normal, rgb(0, 0, 0));
  --h1-size: 1.5em;
  --h2-color: var(--text-normal, rgb(0, 0, 0));
  --h2-size: 1.375em;
  --h3-color: var(--text-normal, rgb(0, 0, 0));
  --h3-size: 1.25em;
  --h4-color: var(--text-normal, rgb(0, 0, 0));
  --h4-size: 1.125em;
  --h5-color: var(--text-normal, rgb(0, 0, 0));
  --h5-line-height: var(--line-height-normal, 1.25em);
  --h5-size: 1em;
  --h6-color: var(--text-normal, rgb(0, 0, 0));
  --h6-line-height: var(--line-height-normal, 1.25em);
  --heading-formatting: var(--text-normal, rgb(0, 0, 0));
  --highlight: var(--text-highlight-bg, var(--ss-light-highlight-bg, hsl(0, 82.5%, 67.2%)));
  --hr-color: rgba(var(--ss-light-text-main), 0.4);
  --hr-thickness: 1px;
  --icon-color: var(--text-normal, rgb(0, 0, 0));
  --icon-color-active: var(--text-normal, rgb(0, 0, 0));
  --icon-color-focused: var(--text-normal, rgb(0, 0, 0));
  --icon-color-hover: var(--text-normal, rgb(0, 0, 0));
  --icon-opacity: 1;
  --indentation-guide-color: var(--hr-color, rgba(0, 0, 0, 0.4));
  --inline-title-color: var(--h1-color, rgb(0, 0, 0));
  --inline-title-size: var(--h1-size, 1.625em);
  --input-date-separator: var(--text-faint, rgb(0, 0, 0));
  --input-placeholder-color: var(--text-faint, rgb(0, 0, 0));
  --input-radius: var(--radius-m, 4px);
  --interactive-accent: var(--color-accent-1, hsl(0, 75%, 52%));
  --interactive-accent-hover: var(--color-accent, hsl(0, 75%, 52%));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 75%, 52%);
  --interactive-hover: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --interactive-normal: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --kanban-button-text: var(--text-normal, rgb(0, 0, 0));
  --kanban-button-text-hover: var(--text-white, rgb(254, 252, 252));
  --kanban-checkbox-border: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --light: var(--background-primary, hsl(var(--background-h), var(--background-s), var(--background-l)));
  --lightgray: var(--background-secondary, hsl(var(--background-h), var(--background-secondary-s), var(--background-secondary-l)));
  --line-height-normal: 1.25em;
  --link-color: var(--text-accent, hsl(0, 75%, 52%));
  --link-color-hover: var(--text-accent-hover, #000);
  --link-external-color: var(--text-accent, hsl(0, 75%, 52%));
  --link-external-color-hover: var(--text-accent-hover, #000);
  --link-unresolved-color: var(--text-accent, hsl(0, 75%, 52%));
  --list-elements: var(--text-normal, rgb(0, 0, 0));
  --list-marker-color: var(--list-elements, rgb(0, 0, 0));
  --list-marker-color-collapsed: var(--text-accent, hsl(0, 75%, 52%));
  --list-marker-color-hover: var(--text-muted, rgb(0, 0, 0));
  --list-spacing: calc(var(--line-height-normal)/5);
  --menu-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --menu-border-color: var(--background-modifier-border-hover, hsla(0, 19.6%, 15%, 0.1));
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --metadata-divider-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --metadata-input-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --metadata-input-text-color: var(--text-normal, rgb(0, 0, 0));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --metadata-label-font: var(--font-interface, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --metadata-label-text-color: var(--text-muted, rgb(0, 0, 0));
  --metadata-label-text-color-hover: var(--text-muted, rgb(0, 0, 0));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(0, 19.6%, 15%, 0.05));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --modal-border-color: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--color-accent, hsl(0, 75%, 52%));
  --nav-collapse-icon-color-collapsed: var(--color-accent, hsl(0, 75%, 52%));
  --nav-heading-color: var(--text-normal, rgb(0, 0, 0));
  --nav-heading-color-collapsed: var(--text-faint, rgb(0, 0, 0));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(0, 0, 0));
  --nav-heading-color-hover: var(--text-normal, rgb(0, 0, 0));
  --nav-indentation-guide-color: var(--color-accent, hsl(0, 75%, 52%));
  --nav-item-background-active: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --nav-item-background-hover: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --nav-item-color: var(--text-normal, rgb(0, 0, 0));
  --nav-item-color-active: var(--text-normal, rgb(0, 0, 0));
  --nav-item-color-highlighted: var(--text-accent, hsl(0, 75%, 52%));
  --nav-item-color-hover: var(--text-normal, rgb(0, 0, 0));
  --nav-item-color-selected: var(--text-normal, rgb(0, 0, 0));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, rgb(0, 0, 0));
  --nav-tag-color-active: var(--text-muted, rgb(0, 0, 0));
  --nav-tag-color-hover: var(--text-muted, rgb(0, 0, 0));
  --nav-tag-radius: var(--radius-s, 2px);
  --oz-fta-file-font-size: var(--nav-item-size, 14px);
  --oz-fta-folder-font-size: var(--nav-item-size, 14px);
  --pdf-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --pdf-page-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --pill-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(0, 19.6%, 15%, 0.1));
  --pill-color: var(--text-muted, rgb(0, 0, 0));
  --pill-color-hover: var(--text-normal, rgb(0, 0, 0));
  --pill-color-remove: var(--text-faint, rgb(0, 0, 0));
  --pill-color-remove-hover: var(--text-accent, hsl(0, 75%, 52%));
  --polka-dots: radial-gradient(var(--color-accent) 15%, transparent 25%),
  radial-gradient(var(--color-accent) 17.5%, transparent 25%);
  --prompt-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --prompt-border-color: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --radius-l: calc(var(--radius-s)*3);
  --radius-m: calc(var(--radius-s)*2);
  --radius-s: calc(var(--ss-border-radius)*20);
  --radius-xl: calc(var(--radius-s)*4);
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent) linear-gradient(hsl(0, 39.2%, 99.3%), color-mix(in srgb, hsl(0, 39.2%, 99.3%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --ribbon-border: none;
  --scrollbar-active-thumb-bg: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --scrollbar-radius: var(--radius-l, 6px);
  --scrollbar-thumb-bg: var(--accent-soft-light, hsla(0, 19.6%, 15%, 0.05));
  --search-clear-button-color: var(--text-muted, rgb(0, 0, 0));
  --search-icon-color: var(--text-muted, rgb(0, 0, 0));
  --search-result-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --search-result-bg-hover: var(--accent-soft-dark, hsla(0, 19.6%, 15%, 0.1));
  --secondary: var(--text-accent, var(--color-accent, hsl(0, 75%, 52%)));
  --setting-group-heading-color: var(--text-normal, rgb(0, 0, 0));
  --setting-items-background: var(--background-primary-alt, hsl(0, 34.3%, 97.3%));
  --setting-items-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --setting-items-radius: var(--radius-l, 6px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(0, 0, 0));
  --shiki-code-background: var(--code-background, rgb(23, 35, 62));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, rgb(0, 0, 0));
  --shiki-code-function: var(--color-green, rgb(30, 169, 67));
  --shiki-code-important: var(--color-orange, rgb(220, 95, 0));
  --shiki-code-keyword: var(--color-pink, rgb(220, 100, 210));
  --shiki-code-normal: var(--text-muted, rgb(0, 0, 0));
  --shiki-code-property: var(--color-cyan, rgb(0, 202, 235));
  --shiki-code-punctuation: var(--text-muted, rgb(0, 0, 0));
  --shiki-code-string: var(--color-yellow, rgb(230, 205, 90));
  --shiki-code-value: var(--color-purple, rgb(140, 110, 240));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --shiki-gutter-text-color: var(--text-faint, rgb(0, 0, 0));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(0, 0, 0));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(0, 0, 0));
  --shiki-terminal-dots-color: var(--text-faint, rgb(0, 0, 0));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(0, 19.6%, 15%, 0.1));
  --slider-track-background: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --ss-border-radius: 0.1px;
  --ss-embed-border-style: 2px dashed var(--text-normal);
  --ss-light-contrast: 0%;
  --ss-light-h: 0;
  --ss-light-highlight-bg: hsl(var(--accent-h), calc(var(--accent-s)*1.1), calc(var(--accent-l)*1.1 + 10%));
  --ss-light-l: 9.86%;
  --ss-light-s: 3.92%;
  --ss-light-text-main: 0, 0, 0;
  --status-bar-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-normal, rgb(0, 0, 0));
  --suggestion-background: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --sync-avatar-color-1: var(--color-red, rgb(220, 65, 65));
  --sync-avatar-color-2: var(--color-orange, rgb(220, 95, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(230, 205, 90));
  --sync-avatar-color-4: var(--color-green, rgb(30, 169, 67));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 202, 235));
  --sync-avatar-color-7: var(--color-purple, rgb(140, 110, 240));
  --sync-avatar-color-8: var(--color-pink, rgb(220, 100, 210));
  --tab-background-active: var(--background-primary, hsl(0, 39.2%, 99.3%));
  --tab-container-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --tab-divider-color: var(--background-modifier-border-hover, hsla(0, 19.6%, 15%, 0.1));
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--color-accent, hsl(0, 75%, 52%));
  --tab-radius: var(--radius-s, 2px);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --tab-switcher-preview-radius: var(--radius-xl, 8px);
  --tab-text-color: var(--text-faint, rgb(0, 0, 0));
  --tab-text-color-active: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused-active: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(0, 0, 0));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(0, 75%, 52%));
  --table-add-button-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --table-body-font: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --table-body-font-size: 1em;
  --table-border-color: var(--list-elements, rgb(0, 0, 0));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(0, 75%, 52%));
  --table-drag-handle-color: var(--text-faint, rgb(0, 0, 0));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(254, 252, 252));
  --table-header-border-color: var(--list-elements, rgb(0, 0, 0));
  --table-header-color: var(--text-normal, rgb(0, 0, 0));
  --table-header-font: var(--font-text, Franklin Gothic Book, Rubik, Helvetica Neue, ui-sans-serif, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif);
  --table-selection-border-color: var(--interactive-accent, hsl(0, 75%, 52%));
  --tag-background: var(--color-accent-background, hsla(0, 75%, 52%, 0.1));
  --tag-background-hover: var(--color-accent-background-hover, hsla(0, 75%, 52%, 0.2));
  --tag-color: var(--text-accent, hsl(0, 75%, 52%));
  --tag-color-hover: var(--text-accent, hsl(0, 75%, 52%));
  --tag-radius: var(--radius-m, 4px);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, #000));
  --text-accent: var(--color-accent, hsl(0, 75%, 52%));
  --text-accent-hover: var(--color-accent-2, #000);
  --text-error: var(--color-red, rgb(250, 30, 0));
  --text-faint: var(--text-normal, rgb(0, 0, 0));
  --text-highlight-bg: var(--ss-light-highlight-bg, hsl(0, 82.5%, 67.2%));
  --text-highlight-fg: #000;
  --text-muted: var(--text-normal, rgb(0, 0, 0));
  --text-normal: rgb(var(--ss-light-text-main));
  --text-on-accent: var(--text-white, rgb(254, 252, 252));
  --text-selection: var(--accent-on-selection, hsla(0, 75%, 52%, 0.4));
  --text-success: var(--color-green, rgb(30, 169, 67));
  --text-warning: var(--color-orange, rgb(220, 95, 0));
  --text-white: rgb(254, 252, 252);
  --textHighlight: var(--text-highlight-bg, var(--ss-light-highlight-bg, hsl(0, 82.5%, 67.2%)));
  --titlebar-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --titlebar-background-focused: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  --titlebar-border-color: var(--background-modifier-border, hsla(0, 19.6%, 15%, 0.1));
  --titlebar-text-color: var(--text-muted, rgb(0, 0, 0));
  --titlebar-text-color-focused: var(--text-normal, rgb(0, 0, 0));
  --vault-name-font-weight: bold;
  --vault-profile-color: var(--text-normal, rgb(0, 0, 0));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(0, 0, 0));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  background-color: var(--tab-container-background, rgb(250, 246, 246));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(254, 253, 253));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(250, 246, 246));
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 34.3%, 97.3%));
  background-color: var(--tab-container-background, rgb(250, 246, 246));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(0, 0, 0));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(0, 0, 0));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(0, 0, 0));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(240, 102, 102));
  color: var(--text-highlight-fg, rgb(0, 0, 0));
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
  color: var(--text-normal, rgb(0, 0, 0));
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(224, 41, 41));
  border-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(224, 41, 41));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(224, 41, 41));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(224, 41, 41));
  font-family: "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(224, 41, 41) none 0px;
  text-decoration: underline rgba(224, 41, 41, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(224, 41, 41, 0.3));
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
  color: var(--text-faint, rgb(0, 0, 0));
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
  font-family: var(--table-body-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--table-text-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(23, 35, 62));
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(227, 227, 227));
  font-family: var(--font-monospace, "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(23, 35, 62));
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
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(23, 35, 62));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
  background-color: var(--background-primary-alt, rgb(250, 246, 246));
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(0, 0, 0);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 253, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 95, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 202, 235);
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
  background-color: rgb(220, 65, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
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
  background-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 205, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 110, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 65, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 169, 67);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, rgb(245, 0, 165));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, rgb(235, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, rgb(235, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, rgb(0, 0, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, rgb(0, 180, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, rgb(240, 195, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, rgb(0, 130, 235));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, rgb(240, 150, 0));
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: rgb(0, 0, 0);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(0, 0, 0);
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
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(254, 253, 253));
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
  background-color: var(--background-modifier-hover, rgba(46, 31, 31, 0.05));
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
  background-color: var(--background-modifier-hover, rgba(46, 31, 31, 0.05));
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
  background-color: var(--background-modifier-hover, rgba(46, 31, 31, 0.05));
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(0, 75%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 75%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 75%, 52%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 75%, 52%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 75%, 52%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 75%, 52%));
  --pill-color-remove: var(--tag-color, hsl(0, 75%, 52%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 75%, 52%));
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(224, 41, 41, 0.1));
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(224, 41, 41);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(0, 0, 0));
  font-family: var(--h1-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(0, 0, 0));
  font-size: var(--inline-title-size, 26px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(0, 0, 0));
  font-family: var(--h2-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(0, 0, 0));
  font-family: var(--inline-title-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(0, 0, 0));
  font-family: var(--h3-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(0, 0, 0));
  font-family: var(--h4-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(0, 0, 0));
  font-family: var(--h5-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(0, 0, 0));
  font-family: var(--h6-font, "??", "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, rgb(0, 0, 0));
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
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(224, 41, 41);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  color: var(--icon-color, rgb(0, 0, 0));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--background-secondary, rgb(250, 246, 246));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 4px;
  color: var(--status-bar-text-color, rgb(0, 0, 0));
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
  color: var(--nav-item-color, rgb(0, 0, 0));
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
  color: var(--nav-item-color, rgb(0, 0, 0));
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
  color: var(--icon-color, rgb(0, 0, 0));
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
  color: var(--text-faint, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(254, 253, 253));
  border-color: rgb(0, 0, 0);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: var(--table-header-color, rgb(0, 0, 0));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(46, 31, 31, 0.1);
  border-left-color: rgba(46, 31, 31, 0.1);
  border-right-color: rgba(46, 31, 31, 0.1);
  border-top-color: rgba(46, 31, 31, 0.1);
  color: var(--text-muted, rgb(0, 0, 0));
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
  --pill-background: var(--tag-background, hsla(0, 75%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 75%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 75%, 52%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 75%, 52%, 0.15));
  --pill-color: var(--tag-color, hsl(0, 75%, 52%));
  --pill-color-hover: var(--tag-color-hover, hsl(0, 75%, 52%));
  --pill-color-remove: var(--tag-color, hsl(0, 75%, 52%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0, 75%, 52%));
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(224, 41, 41, 0.1));
  border-radius: 4px;
  color: var(--pill-color, rgb(224, 41, 41));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(254, 253, 253));
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(250, 246, 246));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(250, 246, 246));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(0, 0, 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--background-secondary, rgb(250, 246, 246));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(0, 0, 0));
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
  color: var(--text-normal, rgb(0, 0, 0));
  font-family: "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", "Franklin Gothic Book", Rubik, "Helvetica Neue", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(23, 35, 62));
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(227, 227, 227));
  font-family: var(--font-monospace, "??", "??", "iA Writer Mono S", "IBM Plex Mono", "Roboto Mono", Menlo, SFMono-Regular, Consolas, "Source Code Pro", monospace);
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
  background-color: var(--tag-background, rgba(224, 41, 41, 0.1));
  border-bottom-color: rgba(224, 41, 41, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(224, 41, 41, 0.15);
  border-right-color: rgba(224, 41, 41, 0.15);
  border-top-color: rgba(224, 41, 41, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(224, 41, 41));
}`,
  },
  classSettings: {
    "ss-light-zero-contrast": {
      light: `.ss-light-zero-contrast {
--background-secondary: var(--background-primary);
--divider-color: var(--accent-soft-light) !important;
--kanban-checkbox-border: var(--accent-soft-dark);
}`,
    },
    "ss-light-highlights": {
      general: `.ss-light-highlights {
--ss-light-highlight-bg: rgb(250, 231, 75);
}`,
    },
    "ss-dark-zero-contrast": {
      dark: `.ss-dark-zero-contrast {
--background-secondary: var(--background-primary);
--divider-color: var(--accent-soft-light) !important;
--kanban-checkbox-border: var(--accent-soft-dark);
}`,
    },
    "ss-dark-highlights": {
      general: `.ss-dark-highlights {
--ss-dark-highlight-bg: rgb(220, 193, 45);
}`,
    },
    "dracula-code-colors": {
      general: `.dracula-code-colors {
--code-background: #282A36 !important;
--code-normal: #F8F8F2 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #6272A4 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #F1FA8C !important;
--color-orange: #FFB86C !important;
--color-pink: #FF79C6 !important;
--color-red: #FF5555 !important;
--color-cyan: #8BE9FD !important;
--color-green: #50FA7B !important;
--color-purple: #BD93F9 !important;
}`,
    },
    "gruvbox-code-colors": {
      dark: `.gruvbox-code-colors {
--code-background: #282828 !important;
--code-normal: #ebdbb2 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #928374 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #fabd2f !important;
--color-orange: #fe8019 !important;
--color-pink: #d3869b !important;
--color-red: #fb4934 !important;
--color-cyan: #83a598 !important;
--color-green: #b8bb26 !important;
--color-purple: #BD93F9 !important;
}`,
      light: `.gruvbox-code-colors {
--code-background: #fbf1c7 !important;
--code-normal: #3c3836 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #928374 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #b57614 !important;
--color-orange: #af3a03 !important;
--color-pink: #8f3f71 !important;
--color-red: #9d0006 !important;
--color-cyan: #076678 !important;
--color-green: #79740e !important;
--color-purple: #8352c6 !important;
}`,
    },
    "nord-code-colors": {
      general: `.nord-code-colors {
--code-background: #2e3440 !important;
--code-normal: #d8dee9 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #697590 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #ebcb8b !important;
--color-orange: #d08770 !important;
--color-pink: #b48ead !important;
--color-red: #bf616a !important;
--color-cyan: #88c0d0 !important;
--color-green: #a3be8c !important;
--color-purple: #9c7fe5 !important;
}`,
    },
    "one-code-colors": {
      dark: `.one-code-colors {
--code-background: #272b34 !important;
--code-normal: #dcddde !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #888 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #e5c07b !important;
--color-orange: #d19a66 !important;
--color-pink: #c678dd !important;
--color-red: #e06c75 !important;
--color-cyan: #56b6c2 !important;
--color-green: #98c379 !important;
--color-purple: #846ef1 !important;
}`,
      light: `.one-code-colors {
--code-background: #fafafa !important;
--code-normal: #383a42 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #8e8e90 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #e35649 !important;
--color-orange: #986800 !important;
--color-pink: #a625a4 !important;
--color-red: #e75545 !important;
--color-cyan: #0084bc !important;
--color-green: #4ea24c !important;
--color-purple: #5c28df !important;
}`,
    },
    "polka-code-colors": {
      general: `.polka-code-colors {
--code-background: var(--background-dark) !important;
--code-normal: hsl(0, 0%, 89%) !important;
--code-punctuation: var(--code-normal) !important;
--color-yellow: rgb(230, 205, 90) !important;
--color-orange: rgb(220, 95, 0) !important;
--color-pink: rgb(220, 100, 210) !important;
--color-red: rgb(220, 65, 65) !important;
--color-cyan: rgb(0, 202, 235) !important;
--color-green: rgb(30, 169, 67) !important;
--color-purple: rgb(140, 110, 240) !important;
}`,
    },
    "solarized-code-colors": {
      dark: `.solarized-code-colors {
--code-background: #002b36 !important;
--code-normal: #93a1a1 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #586e75 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #b58900 !important;
--color-orange: #cb4b16 !important;
--color-pink: #d33682 !important;
--color-red: #dc322f !important;
--color-cyan: #2aa198 !important;
--color-green: #859900 !important;
--color-purple: #6c71c4 !important;
}`,
      light: `.solarized-code-colors {
--code-background: #eee8d5 !important;
--code-normal: #839496 !important;
--code-punctuation: var(--code-normal) !important;
--code-comment: #586e75 !important;
--code-indentation-guide-color: var(--code-comment) !important;
--color-yellow: #b58900 !important;
--color-orange: #cb4b16 !important;
--color-pink: #d33682 !important;
--color-red: #dc322f !important;
--color-cyan: #2aa198 !important;
--color-green: #859900 !important;
--color-purple: #6c71c4 !important;
}`,
    },
    "ss-round-checkboxes": {
      general: `.ss-round-checkboxes {
--checkbox-radius: 50px !important;
}`,
    },
    "ss-table-monospace": {
      general: `.ss-table-monospace {
--table-body-font: var(--font-monospace);
--table-body-font-size: 0.875em;
}`,
    },
    "ss-embed-borders": {
      general: `.ss-embed-borders {
--ss-embed-border-style: none;
--embed-padding: 0;
}`,
    },
    "ss-tab-outline": {
      general: `.ss-tab-outline {
--tab-outline-color: transparent;
}`,
    },
    "ss-polka-dots": {
      general: `.ss-polka-dots {
--polka-dots: none;
--ribbon-border: var(--divider-width) solid var(--accent-soft-light);
}`,
    },
  },
};
