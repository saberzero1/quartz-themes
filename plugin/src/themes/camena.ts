import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "camena",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["avenir", "cascadia-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-rgb: from var(--accent-color) r g b;
  --background-modifier-border: var(--color-base-30, hsl(258, 29.33333%, 35%));
  --background-modifier-border-focus: var(--color-base-40, hsl(258, 29.33333%, 45%));
  --background-modifier-border-hover: var(--color-base-35, hsl(258, 29.33333%, 40%));
  --background-modifier-error: var(--color-red, hsl(5, 88%, 66%));
  --background-modifier-error-hover: var(--color-red, hsl(5, 88%, 66%));
  --background-modifier-error-rgb: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --background-modifier-form-field: var(--color-base-10, hsl(258, 29.33333%, 20%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(258, 29.33333%, 20%));
  --background-modifier-hover: rgba(var(--accent-rgb) / 0.2);
  --background-modifier-message: var(--accent-color, hsl(258, 88%, 66%));
  --background-modifier-success: var(--color-green, hsl(100, 88%, 66%));
  --background-modifier-success-rgb: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --background-primary: var(--color-base-00, hsl(258, 29.33333%, 10%));
  --background-primary-alt: var(--color-base-10, hsl(258, 29.33333%, 20%));
  --background-secondary: var(--background-secondary-alt, hsl(258, 29.33333%, 15%));
  --background-secondary-alt: var(--color-base-05, hsl(258, 29.33333%, 15%));
  --bases-cards-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(258, 29.33333%, 20%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --bases-group-heading-property-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --bases-group-heading-property-display: none;
  --bases-table-border-color: var(--table-border-color, hsl(258, 88%, 66%));
  --bases-table-cell-background-active: var(--background-primary, hsl(258, 29.33333%, 10%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(258, 29.33333%, 20%));
  --bases-table-group-background: var(--background-primary-alt, hsl(258, 29.33333%, 20%));
  --bases-table-header-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --bases-table-header-color: var(--color-base-00, hsl(258, 29.33333%, 10%));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.15));
  --bases-table-summary-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --blue-h: 210;
  --bodyFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --callout-bug: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-color: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --callout-default: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-error: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-example: var(--color-purple-rgb, from hsl(270, 88%, 66%) r g b);
  --callout-fail: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-important: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-info: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-question: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --callout-quote: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --callout-success: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --callout-summary: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-tip: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-todo: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-warning: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --canvas-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --canvas-card-label-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --canvas-color-1: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --canvas-color-2: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --canvas-color-3: var(--color-yellow-rgb, from hsl(50, 88%, 66%) r g b);
  --canvas-color-4: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --canvas-color-5: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --canvas-color-6: var(--color-purple-rgb, from hsl(270, 88%, 66%) r g b);
  --canvas-dot-pattern: var(--color-base-30, hsl(258, 29.33333%, 35%));
  --caret-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --checkbox-border-color: var(--checkbox-color, hsl(258, 29.33333%, 50%));
  --checkbox-border-color-hover: var(--accent-color, hsl(258, 88%, 66%));
  --checkbox-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --checkbox-color-hover: var(--accent-color, hsl(258, 88%, 66%));
  --checkbox-marker-color: var(--background-primary, hsl(258, 29.33333%, 10%));
  --checklist-done-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --checklist-done-decoration: none;
  --code-background: rgba(var(--accent-rgb) / var(--opacity));
  --code-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --code-bracket-background: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --code-comment: var(--color-base-40, hsl(258, 29.33333%, 45%));
  --code-function: var(--color-yellow, hsl(50, 88%, 66%));
  --code-important: var(--color-orange, hsl(25, 88%, 66%));
  --code-keyword: var(--color-pink, hsl(320, 88%, 66%));
  --code-normal: var(--accent-color, hsl(258, 88%, 66%));
  --code-operator: var(--color-red, hsl(5, 88%, 66%));
  --code-property: var(--color-cyan, hsl(185, 88%, 66%));
  --code-punctuation: var(--text-muted, hsl(258, 29.33333%, 50%));
  --code-string: var(--color-green, hsl(100, 88%, 66%));
  --code-tag: var(--color-red, hsl(5, 88%, 66%));
  --code-value: var(--color-purple, hsl(270, 88%, 66%));
  --collapse-icon-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --color-base-00: hsl(var(--accent-h), calc(var(--accent-s)/3), 10%);
  --color-base-05: hsl(var(--accent-h), calc(var(--accent-s)/3), 15%);
  --color-base-10: hsl(var(--accent-h), calc(var(--accent-s)/3), 20%);
  --color-base-100: hsl(var(--accent-h), calc(var(--accent-s)/3), 80%);
  --color-base-20: hsl(var(--accent-h), calc(var(--accent-s)/3), 25%);
  --color-base-25: hsl(var(--accent-h), calc(var(--accent-s)/3), 30%);
  --color-base-30: hsl(var(--accent-h), calc(var(--accent-s)/3), 35%);
  --color-base-35: hsl(var(--accent-h), calc(var(--accent-s)/3), 40%);
  --color-base-40: hsl(var(--accent-h), calc(var(--accent-s)/3), 45%);
  --color-base-50: hsl(var(--accent-h), calc(var(--accent-s)/3), 50%);
  --color-base-60: hsl(var(--accent-h), calc(var(--accent-s)/3), 60%);
  --color-base-70: hsl(var(--accent-h), calc(var(--accent-s)/3), 70%);
  --color-blue: hsl(var(--blue-h), var(--accent-s), var(--accent-l));
  --color-blue-rgb: from var(--color-blue) r g b;
  --color-cyan: hsl(var(--cyan-h), var(--accent-s), var(--accent-l));
  --color-cyan-rgb: from var(--color-cyan) r g b;
  --color-green: hsl(var(--green-h), var(--accent-s), var(--accent-l));
  --color-green-rgb: from var(--color-green) r g b;
  --color-grey: hsl(0, 0%, var(--accent-l));
  --color-grey-rgb: from var(--color-grey) r g b;
  --color-orange: hsl(var(--orange-h), var(--accent-s), var(--accent-l));
  --color-orange-rgb: from var(--color-orange) r g b;
  --color-pink: hsl(var(--pink-h), var(--accent-s), var(--accent-l));
  --color-pink-rgb: from var(--color-pink) r g b;
  --color-purple: hsl(var(--purple-h), var(--accent-s), var(--accent-l));
  --color-purple-rgb: from var(--color-purple) r g b;
  --color-red: hsl(var(--red-h), var(--accent-s), var(--accent-l));
  --color-red-rgb: from var(--color-red) r g b;
  --color-yellow: hsl(var(--yellow-h), var(--accent-s), var(--accent-l));
  --color-yellow-rgb: from var(--color-yellow) r g b;
  --cyan-h: 185;
  --dark: var(--text-normal, var(--color-base-100, hsl(258, 29.33333%, 80%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(258, 29.33333%, 80%)));
  --divider-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --dropdown-background: var(--interactive-normal, hsl(258, 29.33333%, 15%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258, 29.33333%, 25%));
  --embed-max-height: 80vh;
  --file-header-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --file-header-background-focused: var(--background-primary, hsl(258, 29.33333%, 10%));
  --file-header-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(258, 29.33333%, 15%));
  --flair-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --font-heading-theme: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-mermaid: var(--font-text, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(258, 29.33333%, 35%));
  --footnote-id-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(258, 29.33333%, 35%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --graph-line: var(--color-base-25, hsl(258, 29.33333%, 30%));
  --graph-node: var(--accent-color, hsl(258, 88%, 66%));
  --graph-node-attachment: var(--color-green, hsl(100, 88%, 66%));
  --graph-node-tag: var(--color-yellow, hsl(50, 88%, 66%));
  --graph-node-unresolved: var(--color-red, hsl(5, 88%, 66%));
  --graph-text: var(--text-normal, hsl(258, 29.33333%, 80%));
  --gray: var(--text-muted, var(--color-base-50, hsl(258, 29.33333%, 50%)));
  --green-h: 100;
  --h1-color: var(--accent-color, hsl(258, 88%, 66%));
  --h1-size: 2.488em;
  --h2-color: var(--accent-color, hsl(258, 88%, 66%));
  --h2-size: 2.047em;
  --h3-color: var(--accent-color, hsl(258, 88%, 66%));
  --h3-size: 1.728em;
  --h4-color: var(--accent-color, hsl(258, 88%, 66%));
  --h4-size: 1.44em;
  --h5-color: var(--accent-color, hsl(258, 88%, 66%));
  --h5-size: 1.2em;
  --h6-color: var(--accent-color, hsl(258, 88%, 66%));
  --headerFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --heading-formatting: var(--text-faint, hsl(258, 29.33333%, 35%));
  --highlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb) / 0.25));
  --hr-color: var(--accent-color, hsl(258, 88%, 66%));
  --hr-thickness: 0.1rem;
  --icon-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --icon-color-focused: var(--color-base-60, hsl(258, 29.33333%, 60%));
  --icon-color-hover: var(--text-muted, hsl(258, 29.33333%, 50%));
  --indentation-guide-color: rgba(var(--mono-rgb-100) / 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100) / calc(var(--opacity)*2));
  --inline-title-color: var(--h1-color, hsl(258, 88%, 66%));
  --inline-title-size: var(--h1-size, 2.488em);
  --input-date-separator: var(--text-faint, hsl(258, 29.33333%, 35%));
  --input-placeholder-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --interactive-hover: var(--color-base-20, hsl(258, 29.33333%, 25%));
  --interactive-normal: var(--color-base-05, hsl(258, 29.33333%, 15%));
  --light: var(--background-primary, var(--color-base-00, hsl(258, 29.33333%, 10%)));
  --lightgray: var(--background-secondary, var(--background-secondary-alt, hsl(258, 29.33333%, 15%)));
  --link-color: var(--accent-color, hsl(258, 88%, 66%));
  --link-color-hover: var(--link-color, hsl(258, 88%, 66%));
  --link-decoration: none;
  --link-decoration-hover: wavy;
  --link-external-color: var(--link-color, hsl(258, 88%, 66%));
  --link-external-color-hover: var(--link-color-hover, hsl(258, 88%, 66%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--color-red, hsl(5, 88%, 66%));
  --link-unresolved-decoration-color: rgba(var(--accent-rgb) / calc(var(--opacity)*2));
  --link-unresolved-opacity: 1.0;
  --list-marker-color: var(--color-base-50, hsl(258, 29.33333%, 50%));
  --list-marker-color-hover: var(--text-muted, hsl(258, 29.33333%, 50%));
  --menu-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 40%));
  --metadata-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --metadata-divider-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --metadata-input-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --metadata-label-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(258, 29.33333%, 50%));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --modal-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 29.33333%, 35%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(258, 29.33333%, 35%));
  --nav-heading-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(258, 29.33333%, 35%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(258, 29.33333%, 50%));
  --nav-heading-color-hover: var(--text-normal, hsl(258, 29.33333%, 80%));
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255 / 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --nav-item-color: var(--color-base-50, hsl(258, 29.33333%, 50%));
  --nav-item-color-active: var(--color-base-60, hsl(258, 29.33333%, 60%));
  --nav-item-color-hover: var(--text-normal, hsl(258, 29.33333%, 80%));
  --nav-item-color-selected: var(--text-normal, hsl(258, 29.33333%, 80%));
  --nav-tag-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --nav-tag-color-active: var(--text-muted, hsl(258, 29.33333%, 50%));
  --nav-tag-color-hover: var(--text-muted, hsl(258, 29.33333%, 50%));
  --opacity: 0.15;
  --orange-h: 25;
  --p-spacing: calc(var(--line-height-normal)*1rem);
  --pdf-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --pdf-page-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --pdf-sidebar-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --pill-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(258, 29.33333%, 40%));
  --pill-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --pill-color-hover: var(--text-normal, hsl(258, 29.33333%, 80%));
  --pill-color-remove: var(--text-faint, hsl(258, 29.33333%, 35%));
  --pink-h: 320;
  --prompt-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --purple-h: 270;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 15%), color-mix(in srgb, hsl(258, 29.33333%, 15%) 65%, transparent)));
  --red-h: 5;
  --ribbon-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --ribbon-background-collapsed: var(--background-primary, hsl(258, 29.33333%, 10%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100) / 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100) / 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100) / 0.1);
  --search-clear-button-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --search-icon-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --search-result-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --setting-group-heading-color: var(--text-normal, hsl(258, 29.33333%, 80%));
  --setting-items-background: rgba(var(--accent-rgb) / var(--opacity));
  --setting-items-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(258, 29.33333%, 50%));
  --shiki-code-background: var(--code-background, rgba(from hsl(258, 88%, 66%) r g b / 0.15));
  --shiki-code-block-spacing: var(--p-spacing, 1.5rem);
  --shiki-code-comment: var(--text-faint, hsl(258, 29.33333%, 35%));
  --shiki-code-function: var(--color-green, hsl(100, 88%, 66%));
  --shiki-code-important: var(--color-orange, hsl(25, 88%, 66%));
  --shiki-code-keyword: var(--color-pink, hsl(320, 88%, 66%));
  --shiki-code-normal: var(--text-muted, hsl(258, 29.33333%, 50%));
  --shiki-code-property: var(--color-cyan, hsl(185, 88%, 66%));
  --shiki-code-punctuation: var(--text-muted, hsl(258, 29.33333%, 50%));
  --shiki-code-string: var(--color-yellow, hsl(50, 88%, 66%));
  --shiki-code-value: var(--color-purple, hsl(270, 88%, 66%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --shiki-gutter-text-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(258, 29.33333%, 50%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(258, 29.33333%, 50%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --shiki-tooltip-background: var(--background-modifier-message, hsl(258, 88%, 66%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 40%));
  --slider-track-background: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --status-bar-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --status-bar-border-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --status-bar-text-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --suggestion-background: var(--background-primary, hsl(258, 29.33333%, 10%));
  --swatch-shadow: inset 0 0 0 1px rgba(var(--mono-rgb-100) / var(--opacity));
  --sync-avatar-color-1: var(--color-red, hsl(5, 88%, 66%));
  --sync-avatar-color-2: var(--color-orange, hsl(25, 88%, 66%));
  --sync-avatar-color-3: var(--color-yellow, hsl(50, 88%, 66%));
  --sync-avatar-color-4: var(--color-green, hsl(100, 88%, 66%));
  --sync-avatar-color-5: var(--color-cyan, hsl(185, 88%, 66%));
  --sync-avatar-color-6: var(--color-blue, hsl(210, 88%, 66%));
  --sync-avatar-color-7: var(--color-purple, hsl(270, 88%, 66%));
  --sync-avatar-color-8: var(--color-pink, hsl(320, 88%, 66%));
  --tab-background-active: var(--background-primary, hsl(258, 29.33333%, 10%));
  --tab-container-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 40%));
  --tab-outline-color: var(--divider-color, hsl(258, 29.33333%, 35%));
  --tab-switcher-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(var(--mono-rgb-100) / 0.05);
  --tab-text-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --tab-text-color-active: var(--text-muted, hsl(258, 29.33333%, 50%));
  --tab-text-color-focused: var(--text-muted, hsl(258, 29.33333%, 50%));
  --tab-text-color-focused-active: var(--text-muted, hsl(258, 29.33333%, 50%));
  --tab-text-color-focused-active-current: var(--color-base-60, hsl(258, 29.33333%, 60%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --table-add-button-border-width: var(--table-border-width, 0.1rem);
  --table-border-color: var(--accent-color, hsl(258, 88%, 66%));
  --table-border-width: 0.1rem;
  --table-column-first-border-width: var(--table-border-width, 0.1rem);
  --table-column-last-border-width: var(--table-border-width, 0.1rem);
  --table-drag-handle-color: var(--text-faint, hsl(258, 29.33333%, 35%));
  --table-header-background: var(--accent-color, hsl(258, 88%, 66%));
  --table-header-background-hover: var(--accent-color, hsl(258, 88%, 66%));
  --table-header-border-color: var(--table-border-color, hsl(258, 88%, 66%));
  --table-header-border-width: var(--table-border-width, 0.1rem);
  --table-header-color: var(--color-base-00, hsl(258, 29.33333%, 10%));
  --table-row-alt-background: rgba(var(--accent-rgb) / var(--opacity));
  --table-row-alt-background-hover: rgba(var(--accent-rgb) / calc(var(--opacity)*2));
  --table-row-background-hover: rgba(var(--accent-rgb) / var(--opacity));
  --table-row-last-border-width: var(--table-border-width, 0.1rem);
  --text-error: var(--color-red, hsl(5, 88%, 66%));
  --text-faint: var(--color-base-30, hsl(258, 29.33333%, 35%));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb) / 0.25);
  --text-highlight-bg-rgb: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --text-muted: var(--color-base-50, hsl(258, 29.33333%, 50%));
  --text-normal: var(--color-base-100, hsl(258, 29.33333%, 80%));
  --text-success: var(--color-green, hsl(100, 88%, 66%));
  --text-warning: var(--color-orange, hsl(25, 88%, 66%));
  --textHighlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb) / 0.25));
  --titleFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --titlebar-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(258, 29.33333%, 15%));
  --titlebar-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 35%));
  --titlebar-text-color: var(--text-muted, hsl(258, 29.33333%, 50%));
  --titlebar-text-color-focused: var(--text-normal, hsl(258, 29.33333%, 80%));
  --vault-profile-color: var(--color-base-60, hsl(258, 29.33333%, 60%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(258, 29.33333%, 60%));
  --workspace-background-translucent: rgba(var(--mono-rgb-0) / 0.6);
  --yellow-h: 50;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  background-color: var(--tab-container-background, rgb(34, 27, 49));
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(23, 18, 33));
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(34, 27, 49));
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(79, 63, 115);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(258, 29.33333%, 15%));
  background-color: var(--tab-container-background, rgb(34, 27, 49));
  border-left-color: rgb(79, 63, 115);
  border-left-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body html {
  --blue-h: 210;
  --cyan-h: 185;
  --green-h: 100;
  --orange-h: 25;
  --pink-h: 320;
  --purple-h: 270;
  --red-h: 5;
  --yellow-h: 50;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.54032 0.3608 0.9592 / 0.25));
  color: var(--text-normal, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(113, 90, 165));
  border-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 90, 165) none 0px;
  text-decoration-color: rgb(113, 90, 165);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(138, 92, 245));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(138, 92, 245));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(245, 105, 92));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 105, 92) none 0px;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, color(srgb 0.54032 0.3608 0.9592 / 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 189, 219);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 189, 219);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(79, 63, 115));
}

html[saved-theme="dark"] body blockquote {
  --color: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  background-color: rgba(var(--color) / var(--opacity));
  color: var(--blockquote-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  --text-highlight-bg: rgba(var(--accent-rgb) / var(--opacity));
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, color(srgb 0.54032 0.3608 0.9592 / 0.15));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(198, 189, 219));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(23, 18, 33));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(138, 92, 245));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.15));
  border-bottom-color: rgb(79, 63, 115);
  border-bottom-width: 0px;
  border-left-color: rgb(79, 63, 115);
  border-left-width: 0px;
  border-right-color: rgb(79, 63, 115);
  border-right-width: 0px;
  border-top-color: rgb(79, 63, 115);
  border-top-width: 0px;
  color: var(--code-normal, rgb(138, 92, 245));
  font-family: var(--font-monospace, "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.6px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.15));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: var(--accent-color, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(from hsl(258, 88%, 66%) r g b / 0.15));
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(45, 36, 66));
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: var(--text-muted, rgb(113, 90, 165));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(198, 189, 219);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(198, 189, 219);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  transition: 0.2s ease-in-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(198, 189, 219);
  text-decoration-line: line-through;
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(198, 189, 219);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(198, 189, 219);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 189, 219);
  text-decoration: line-through;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 189, 219);
  text-decoration: line-through;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 189, 219);
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 156, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 232, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 168, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 168, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, from hsl(185, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(185, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.909334 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, from hsl(270, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(270, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.66 0.3608 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, from hsl(25, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(25, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.610133 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, from hsl(258, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(258, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.54032 0.3608 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, from hsl(100, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(100, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.560267 0.9592 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, from hsl(185, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(185, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.909334 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, from hsl(25, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(25, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.610133 0.3608 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / var(--opacity));
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(198, 189, 219);
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
  background-color: rgb(45, 36, 66);
  border-bottom-color: rgb(79, 63, 115);
  border-bottom-width: 0px;
  border-left-color: rgb(79, 63, 115);
  border-left-width: 0px;
  border-right-color: rgb(79, 63, 115);
  border-right-width: 0px;
  border-top-color: rgb(79, 63, 115);
  border-top-width: 0px;
  color: var(--text-normal, rgb(198, 189, 219));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(23, 18, 33));
  border-bottom-color: rgb(101, 81, 148);
  border-bottom-width: 0px;
  border-left-color: rgb(101, 81, 148);
  border-left-width: 0px;
  border-right-color: rgb(101, 81, 148);
  border-right-width: 0px;
  border-top-color: rgb(101, 81, 148);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 189, 219) none 0px;
  text-decoration-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(101, 81, 148);
  border-bottom-width: 0px;
  border-left-color: rgb(101, 81, 148);
  border-left-width: 0px;
  border-right-color: rgb(101, 81, 148);
  border-right-width: 0px;
  border-top-color: rgb(101, 81, 148);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 27, 49);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h1-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h1-size, 39.808px);
  line-height: var(--h1-line-height, 47.7696px);
  margin-bottom: 7.9616px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(138, 92, 245));
  font-size: var(--inline-title-size, 39.808px);
}

html[saved-theme="dark"] body h2 {
  background: color(srgb 0.54032 0.3608 0.9592 / 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--accent-rgb) / var(--opacity));
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h2-size, 32.752px);
  line-height: var(--h2-line-height, 39.3024px);
  margin-bottom: 6.5504px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(138, 92, 245));
  font-family: var(--inline-title-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 39.808px);
  letter-spacing: -0.59712px;
  line-height: var(--inline-title-line-height, 47.7696px);
  margin-bottom: 19.904px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h3-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h3-size, 27.648px);
  line-height: var(--h3-line-height, 35.9424px);
  margin-bottom: 5.5296px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h4-color, rgb(138, 92, 245));
  font-family: var(--h4-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 23.04px);
  line-height: var(--h4-line-height, 32.256px);
  margin-bottom: 4.608px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h5-color, rgb(138, 92, 245));
  font-family: var(--h5-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 19.2px);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h6-color, rgb(138, 92, 245));
  font-family: var(--h6-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 24px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(79, 63, 115);
  border-bottom-width: 0px;
  border-left-color: rgb(79, 63, 115);
  border-left-width: 0px;
  border-right-color: rgb(79, 63, 115);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: var(--accent-color, rgb(138, 92, 245));
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: var(--icon-color, rgb(113, 90, 165));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(34, 27, 49));
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(113, 90, 165);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 189, 219);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(113, 90, 165));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(113, 90, 165));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: var(--icon-color, rgb(113, 90, 165));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(113, 90, 165);
  stroke: rgb(113, 90, 165);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(79, 63, 115));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(198, 189, 219));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(34, 27, 49));
  border-color: rgb(198, 189, 219);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  --text-highlight-bg: rgba(var(--accent-rgb) / var(--opacity));
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, color(srgb 0.54032 0.3608 0.9592 / 0.15));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
  color: var(--table-header-color, rgb(23, 18, 33));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(79, 63, 115);
  border-bottom-width: 0px;
  border-left-color: rgb(79, 63, 115);
  border-left-width: 0px;
  border-right-color: rgb(79, 63, 115);
  border-right-width: 0px;
  border-top-color: rgb(79, 63, 115);
  border-top-width: 0px;
  color: var(--text-muted, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: rgb(113, 90, 165);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(113, 90, 165);
  font-family: var(--metadata-label-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(113, 90, 165);
  font-family: var(--metadata-input-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(79, 63, 115);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(113, 90, 165);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(23, 18, 33));
  color: var(--text-normal, rgb(198, 189, 219));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(34, 27, 49));
  border-color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(34, 27, 49));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(198, 189, 219);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(34, 27, 49));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--color-base-60, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body details {
  background-color: rgba(var(--accent-rgb) / var(--opacity));
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(113, 90, 165);
  border-bottom-width: 0px;
  border-left-color: rgb(113, 90, 165);
  border-left-width: 0px;
  border-right-color: rgb(113, 90, 165);
  border-right-width: 0px;
  border-top-color: rgb(113, 90, 165);
  border-top-width: 0px;
  color: var(--text-normal, rgb(113, 90, 165));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.15));
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--code-normal, rgb(138, 92, 245));
  font-family: var(--font-monospace, "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 189, 219);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 189, 219);
  border-left-width: 0px;
  border-right-color: rgb(198, 189, 219);
  border-right-width: 0px;
  border-top-color: rgb(198, 189, 219);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body summary {
  color: var(--accent-color, rgb(138, 92, 245));
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 189, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-rgb: from var(--accent-color) r g b;
  --background-modifier-border: var(--color-base-30, hsl(258, 29.33333%, 75%));
  --background-modifier-border-focus: var(--color-base-40, hsl(258, 29.33333%, 65%));
  --background-modifier-border-hover: var(--color-base-35, hsl(258, 29.33333%, 70%));
  --background-modifier-error: var(--color-red, hsl(5, 88%, 66%));
  --background-modifier-error-hover: var(--color-red, hsl(5, 88%, 66%));
  --background-modifier-error-rgb: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --background-modifier-form-field: var(--color-base-00, hsl(258, 29.33333%, 98%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(258, 29.33333%, 98%));
  --background-modifier-hover: rgba(var(--accent-rgb) / 0.2);
  --background-modifier-message: var(--accent-color, hsl(258, 88%, 66%));
  --background-modifier-success: var(--color-green, hsl(100, 88%, 66%));
  --background-modifier-success-rgb: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --background-primary: var(--color-base-00, hsl(258, 29.33333%, 98%));
  --background-primary-alt: var(--color-base-10, hsl(258, 29.33333%, 90%));
  --background-secondary: var(--background-secondary-alt, hsl(258, 29.33333%, 95%));
  --background-secondary-alt: var(--color-base-05, hsl(258, 29.33333%, 95%));
  --bases-cards-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(258, 29.33333%, 90%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --bases-group-heading-property-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --bases-group-heading-property-display: none;
  --bases-table-border-color: var(--table-border-color, hsl(258, 88%, 66%));
  --bases-table-cell-background-active: var(--background-primary, hsl(258, 29.33333%, 98%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(258, 29.33333%, 90%));
  --bases-table-group-background: var(--background-primary-alt, hsl(258, 29.33333%, 90%));
  --bases-table-header-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --bases-table-header-color: var(--color-base-00, hsl(258, 29.33333%, 98%));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.1));
  --bases-table-summary-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --blue-h: 210;
  --bodyFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --callout-bug: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-color: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --callout-default: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-error: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-example: var(--color-purple-rgb, from hsl(270, 88%, 66%) r g b);
  --callout-fail: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --callout-important: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-info: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-question: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --callout-quote: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --callout-success: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --callout-summary: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-tip: var(--color-cyan-rgb, from hsl(185, 88%, 66%) r g b);
  --callout-todo: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --callout-warning: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --canvas-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --canvas-card-label-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --canvas-color-1: var(--color-red-rgb, from hsl(5, 88%, 66%) r g b);
  --canvas-color-2: var(--color-orange-rgb, from hsl(25, 88%, 66%) r g b);
  --canvas-color-3: var(--color-yellow-rgb, from hsl(50, 88%, 66%) r g b);
  --canvas-color-4: var(--color-green-rgb, from hsl(100, 88%, 66%) r g b);
  --canvas-color-5: var(--color-blue-rgb, from hsl(210, 88%, 66%) r g b);
  --canvas-color-6: var(--color-purple-rgb, from hsl(270, 88%, 66%) r g b);
  --canvas-dot-pattern: var(--color-base-30, hsl(258, 29.33333%, 75%));
  --caret-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --checkbox-border-color: var(--checkbox-color, hsl(258, 29.33333%, 60%));
  --checkbox-border-color-hover: var(--accent-color, hsl(258, 88%, 66%));
  --checkbox-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --checkbox-color-hover: var(--accent-color, hsl(258, 88%, 66%));
  --checkbox-marker-color: var(--background-primary, hsl(258, 29.33333%, 98%));
  --checklist-done-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --checklist-done-decoration: none;
  --code-background: rgba(var(--accent-rgb) / var(--opacity));
  --code-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --code-bracket-background: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --code-comment: var(--color-base-40, hsl(258, 29.33333%, 65%));
  --code-function: var(--color-yellow, hsl(50, 88%, 66%));
  --code-important: var(--color-orange, hsl(25, 88%, 66%));
  --code-keyword: var(--color-pink, hsl(320, 88%, 66%));
  --code-normal: var(--accent-color, hsl(258, 88%, 66%));
  --code-operator: var(--color-red, hsl(5, 88%, 66%));
  --code-property: var(--color-cyan, hsl(185, 88%, 66%));
  --code-punctuation: var(--text-muted, hsl(258, 29.33333%, 60%));
  --code-string: var(--color-green, hsl(100, 88%, 66%));
  --code-tag: var(--color-red, hsl(5, 88%, 66%));
  --code-value: var(--color-purple, hsl(270, 88%, 66%));
  --collapse-icon-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --color-base-00: hsl(var(--accent-h), calc(var(--accent-s)/3), 98%);
  --color-base-05: hsl(var(--accent-h), calc(var(--accent-s)/3), 95%);
  --color-base-10: hsl(var(--accent-h), calc(var(--accent-s)/3), 90%);
  --color-base-100: hsl(var(--accent-h), calc(var(--accent-s)/3), 20%);
  --color-base-20: hsl(var(--accent-h), calc(var(--accent-s)/3), 85%);
  --color-base-25: hsl(var(--accent-h), calc(var(--accent-s)/3), 80%);
  --color-base-30: hsl(var(--accent-h), calc(var(--accent-s)/3), 75%);
  --color-base-35: hsl(var(--accent-h), calc(var(--accent-s)/3), 70%);
  --color-base-40: hsl(var(--accent-h), calc(var(--accent-s)/3), 65%);
  --color-base-50: hsl(var(--accent-h), calc(var(--accent-s)/3), 60%);
  --color-base-60: hsl(var(--accent-h), calc(var(--accent-s)/3), 40%);
  --color-base-70: hsl(var(--accent-h), calc(var(--accent-s)/3), 30%);
  --color-blue: hsl(var(--blue-h), var(--accent-s), var(--accent-l));
  --color-blue-rgb: from var(--color-blue) r g b;
  --color-cyan: hsl(var(--cyan-h), var(--accent-s), var(--accent-l));
  --color-cyan-rgb: from var(--color-cyan) r g b;
  --color-green: hsl(var(--green-h), var(--accent-s), var(--accent-l));
  --color-green-rgb: from var(--color-green) r g b;
  --color-grey: hsl(0, 0%, var(--accent-l));
  --color-grey-rgb: from var(--color-grey) r g b;
  --color-orange: hsl(var(--orange-h), var(--accent-s), var(--accent-l));
  --color-orange-rgb: from var(--color-orange) r g b;
  --color-pink: hsl(var(--pink-h), var(--accent-s), var(--accent-l));
  --color-pink-rgb: from var(--color-pink) r g b;
  --color-purple: hsl(var(--purple-h), var(--accent-s), var(--accent-l));
  --color-purple-rgb: from var(--color-purple) r g b;
  --color-red: hsl(var(--red-h), var(--accent-s), var(--accent-l));
  --color-red-rgb: from var(--color-red) r g b;
  --color-yellow: hsl(var(--yellow-h), var(--accent-s), var(--accent-l));
  --color-yellow-rgb: from var(--color-yellow) r g b;
  --cyan-h: 185;
  --dark: var(--text-normal, var(--color-base-100, hsl(258, 29.33333%, 20%)));
  --darkgray: var(--text-normal, var(--color-base-100, hsl(258, 29.33333%, 20%)));
  --divider-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --dropdown-background: var(--interactive-normal, hsl(258, 29.33333%, 98%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258, 29.33333%, 90%));
  --embed-max-height: 80vh;
  --file-header-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --file-header-background-focused: var(--background-primary, hsl(258, 29.33333%, 98%));
  --file-header-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(258, 29.33333%, 98%));
  --flair-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --font-heading-theme: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --font-interface-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --font-mermaid: var(--font-text, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --font-text-theme: Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(258, 29.33333%, 75%));
  --footnote-id-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(258, 29.33333%, 75%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --graph-line: var(--color-base-25, hsl(258, 29.33333%, 80%));
  --graph-node: var(--accent-color, hsl(258, 88%, 66%));
  --graph-node-attachment: var(--color-green, hsl(100, 88%, 66%));
  --graph-node-tag: var(--color-yellow, hsl(50, 88%, 66%));
  --graph-node-unresolved: var(--color-red, hsl(5, 88%, 66%));
  --graph-text: var(--text-normal, hsl(258, 29.33333%, 20%));
  --gray: var(--text-muted, var(--color-base-50, hsl(258, 29.33333%, 60%)));
  --green-h: 100;
  --h1-color: var(--accent-color, hsl(258, 88%, 66%));
  --h1-size: 2.488em;
  --h2-color: var(--accent-color, hsl(258, 88%, 66%));
  --h2-size: 2.047em;
  --h3-color: var(--accent-color, hsl(258, 88%, 66%));
  --h3-size: 1.728em;
  --h4-color: var(--accent-color, hsl(258, 88%, 66%));
  --h4-size: 1.44em;
  --h5-color: var(--accent-color, hsl(258, 88%, 66%));
  --h5-size: 1.2em;
  --h6-color: var(--accent-color, hsl(258, 88%, 66%));
  --headerFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --heading-formatting: var(--text-faint, hsl(258, 29.33333%, 75%));
  --highlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb) / 0.25));
  --hr-color: var(--accent-color, hsl(258, 88%, 66%));
  --hr-thickness: 0.1rem;
  --icon-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --icon-color-focused: var(--color-base-60, hsl(258, 29.33333%, 40%));
  --icon-color-hover: var(--text-muted, hsl(258, 29.33333%, 60%));
  --indentation-guide-color: rgba(var(--mono-rgb-100) / 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100) / calc(var(--opacity)*2));
  --inline-title-color: var(--h1-color, hsl(258, 88%, 66%));
  --inline-title-size: var(--h1-size, 2.488em);
  --input-date-separator: var(--text-faint, hsl(258, 29.33333%, 75%));
  --input-placeholder-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --interactive-hover: var(--color-base-10, hsl(258, 29.33333%, 90%));
  --interactive-normal: var(--color-base-00, hsl(258, 29.33333%, 98%));
  --light: var(--background-primary, var(--color-base-00, hsl(258, 29.33333%, 98%)));
  --lightgray: var(--background-secondary, var(--background-secondary-alt, hsl(258, 29.33333%, 95%)));
  --link-color: var(--accent-color, hsl(258, 88%, 66%));
  --link-color-hover: var(--link-color, hsl(258, 88%, 66%));
  --link-decoration: none;
  --link-decoration-hover: wavy;
  --link-external-color: var(--link-color, hsl(258, 88%, 66%));
  --link-external-color-hover: var(--link-color-hover, hsl(258, 88%, 66%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--color-red, hsl(5, 88%, 66%));
  --link-unresolved-decoration-color: rgba(var(--accent-rgb) / calc(var(--opacity)*2));
  --link-unresolved-opacity: 1.0;
  --list-marker-color: var(--color-base-50, hsl(258, 29.33333%, 60%));
  --list-marker-color-hover: var(--text-muted, hsl(258, 29.33333%, 60%));
  --menu-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 70%));
  --metadata-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --metadata-divider-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --metadata-input-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --metadata-label-font: var(--font-interface, Cantarell, Avenir, Montserrat, Corbel, URW Gothic, source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(258, 29.33333%, 60%));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --modal-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 29.33333%, 75%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(258, 29.33333%, 75%));
  --nav-heading-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(258, 29.33333%, 75%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(258, 29.33333%, 60%));
  --nav-heading-color-hover: var(--text-normal, hsl(258, 29.33333%, 20%));
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0 / 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(from hsl(258, 88%, 66%) r g b / 0.2));
  --nav-item-color: var(--color-base-50, hsl(258, 29.33333%, 60%));
  --nav-item-color-active: var(--color-base-60, hsl(258, 29.33333%, 40%));
  --nav-item-color-hover: var(--text-normal, hsl(258, 29.33333%, 20%));
  --nav-item-color-selected: var(--text-normal, hsl(258, 29.33333%, 20%));
  --nav-tag-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --nav-tag-color-active: var(--text-muted, hsl(258, 29.33333%, 60%));
  --nav-tag-color-hover: var(--text-muted, hsl(258, 29.33333%, 60%));
  --opacity: 0.1;
  --orange-h: 25;
  --p-spacing: calc(var(--line-height-normal)*1rem);
  --pdf-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --pdf-page-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --pdf-sidebar-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --pill-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(258, 29.33333%, 70%));
  --pill-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --pill-color-hover: var(--text-normal, hsl(258, 29.33333%, 20%));
  --pill-color-remove: var(--text-faint, hsl(258, 29.33333%, 75%));
  --pink-h: 320;
  --prompt-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --purple-h: 270;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent) linear-gradient(hsl(258, 29.33333%, 98%), color-mix(in srgb, hsl(258, 29.33333%, 98%) 65%, transparent)));
  --red-h: 5;
  --ribbon-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --ribbon-background-collapsed: var(--background-primary, hsl(258, 29.33333%, 98%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100) / 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100) / 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100) / 0.1);
  --search-clear-button-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --search-icon-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --search-result-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --setting-group-heading-color: var(--text-normal, hsl(258, 29.33333%, 20%));
  --setting-items-background: rgba(var(--accent-rgb) / var(--opacity));
  --setting-items-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(258, 29.33333%, 60%));
  --shiki-code-background: var(--code-background, rgba(from hsl(258, 88%, 66%) r g b / 0.1));
  --shiki-code-block-spacing: var(--p-spacing, 1.5rem);
  --shiki-code-comment: var(--text-faint, hsl(258, 29.33333%, 75%));
  --shiki-code-function: var(--color-green, hsl(100, 88%, 66%));
  --shiki-code-important: var(--color-orange, hsl(25, 88%, 66%));
  --shiki-code-keyword: var(--color-pink, hsl(320, 88%, 66%));
  --shiki-code-normal: var(--text-muted, hsl(258, 29.33333%, 60%));
  --shiki-code-property: var(--color-cyan, hsl(185, 88%, 66%));
  --shiki-code-punctuation: var(--text-muted, hsl(258, 29.33333%, 60%));
  --shiki-code-string: var(--color-yellow, hsl(50, 88%, 66%));
  --shiki-code-value: var(--color-purple, hsl(270, 88%, 66%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --shiki-gutter-text-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(258, 29.33333%, 60%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(258, 29.33333%, 60%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --shiki-tooltip-background: var(--background-modifier-message, hsl(258, 88%, 66%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 70%));
  --slider-track-background: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --status-bar-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --status-bar-border-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --status-bar-text-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --suggestion-background: var(--background-primary, hsl(258, 29.33333%, 98%));
  --swatch-shadow: inset 0 0 0 1px rgba(var(--mono-rgb-100) / var(--opacity));
  --sync-avatar-color-1: var(--color-red, hsl(5, 88%, 66%));
  --sync-avatar-color-2: var(--color-orange, hsl(25, 88%, 66%));
  --sync-avatar-color-3: var(--color-yellow, hsl(50, 88%, 66%));
  --sync-avatar-color-4: var(--color-green, hsl(100, 88%, 66%));
  --sync-avatar-color-5: var(--color-cyan, hsl(185, 88%, 66%));
  --sync-avatar-color-6: var(--color-blue, hsl(210, 88%, 66%));
  --sync-avatar-color-7: var(--color-purple, hsl(270, 88%, 66%));
  --sync-avatar-color-8: var(--color-pink, hsl(320, 88%, 66%));
  --tab-background-active: var(--background-primary, hsl(258, 29.33333%, 98%));
  --tab-container-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(258, 29.33333%, 70%));
  --tab-outline-color: var(--divider-color, hsl(258, 29.33333%, 75%));
  --tab-switcher-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(var(--mono-rgb-100) / 0.05);
  --tab-text-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --tab-text-color-active: var(--text-muted, hsl(258, 29.33333%, 60%));
  --tab-text-color-focused: var(--text-muted, hsl(258, 29.33333%, 60%));
  --tab-text-color-focused-active: var(--text-muted, hsl(258, 29.33333%, 60%));
  --tab-text-color-focused-active-current: var(--color-base-60, hsl(258, 29.33333%, 40%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --table-add-button-border-width: var(--table-border-width, 0.1rem);
  --table-border-color: var(--accent-color, hsl(258, 88%, 66%));
  --table-border-width: 0.1rem;
  --table-column-first-border-width: var(--table-border-width, 0.1rem);
  --table-column-last-border-width: var(--table-border-width, 0.1rem);
  --table-drag-handle-color: var(--text-faint, hsl(258, 29.33333%, 75%));
  --table-header-background: var(--accent-color, hsl(258, 88%, 66%));
  --table-header-background-hover: var(--accent-color, hsl(258, 88%, 66%));
  --table-header-border-color: var(--table-border-color, hsl(258, 88%, 66%));
  --table-header-border-width: var(--table-border-width, 0.1rem);
  --table-header-color: var(--color-base-00, hsl(258, 29.33333%, 98%));
  --table-row-alt-background: rgba(var(--accent-rgb) / var(--opacity));
  --table-row-alt-background-hover: rgba(var(--accent-rgb) / calc(var(--opacity)*2));
  --table-row-background-hover: rgba(var(--accent-rgb) / var(--opacity));
  --table-row-last-border-width: var(--table-border-width, 0.1rem);
  --text-error: var(--color-red, hsl(5, 88%, 66%));
  --text-faint: var(--color-base-30, hsl(258, 29.33333%, 75%));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb) / 0.25);
  --text-highlight-bg-rgb: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --text-muted: var(--color-base-50, hsl(258, 29.33333%, 60%));
  --text-normal: var(--color-base-100, hsl(258, 29.33333%, 20%));
  --text-success: var(--color-green, hsl(100, 88%, 66%));
  --text-warning: var(--color-orange, hsl(25, 88%, 66%));
  --textHighlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb) / 0.25));
  --titleFont: var(--font-text-theme, Cantarell, Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif);
  --titlebar-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(258, 29.33333%, 95%));
  --titlebar-border-color: var(--background-modifier-border, hsl(258, 29.33333%, 75%));
  --titlebar-text-color: var(--text-muted, hsl(258, 29.33333%, 60%));
  --titlebar-text-color-focused: var(--text-normal, hsl(258, 29.33333%, 20%));
  --vault-profile-color: var(--color-base-60, hsl(258, 29.33333%, 40%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(258, 29.33333%, 40%));
  --workspace-background-translucent: rgba(var(--mono-rgb-0) / 0.6);
  --yellow-h: 50;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  background-color: var(--tab-container-background, rgb(241, 239, 246));
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(249, 248, 251));
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(241, 239, 246));
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(184, 173, 210);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(258, 29.33333%, 95%));
  background-color: var(--tab-container-background, rgb(241, 239, 246));
  border-left-color: rgb(184, 173, 210);
  border-left-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body html {
  --blue-h: 210;
  --cyan-h: 185;
  --green-h: 100;
  --orange-h: 25;
  --pink-h: 320;
  --purple-h: 270;
  --red-h: 5;
  --yellow-h: 50;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.54032 0.3608 0.9592 / 0.25));
  color: var(--text-normal, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body del {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(141, 123, 183));
  border-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 123, 183) none 0px;
  text-decoration-color: rgb(141, 123, 183);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(245, 105, 92));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 105, 92) none 0px;
  text-decoration: color(srgb 0.54032 0.3608 0.9592 / 0.2);
  text-decoration-color: var(--link-unresolved-decoration-color, color(srgb 0.54032 0.3608 0.9592 / 0.2));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(45, 36, 66);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  color: rgb(45, 36, 66);
  margin-bottom: 0px;
  margin-left: 26.6953px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(184, 173, 210));
}

html[saved-theme="light"] body blockquote {
  --color: var(--accent-rgb, from hsl(258, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  background-color: rgba(var(--color) / 0.1);
  color: var(--blockquote-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  --text-highlight-bg: rgba(var(--accent-rgb) / var(--opacity));
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 0px;
  margin-left: 237.469px;
  margin-right: 237.469px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, color(srgb 0.54032 0.3608 0.9592 / 0.1));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(45, 36, 66));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(249, 248, 251));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(138, 92, 245));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.1));
  border-bottom-color: rgb(184, 173, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 173, 210);
  border-left-width: 0px;
  border-right-color: rgb(184, 173, 210);
  border-right-width: 0px;
  border-top-color: rgb(184, 173, 210);
  border-top-width: 0px;
  color: var(--code-normal, rgb(138, 92, 245));
  font-family: var(--font-monospace, "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 1.6px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.1));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: var(--accent-color, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(from hsl(258, 88%, 66%) r g b / 0.1));
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(227, 222, 237));
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 123, 183));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgb(138, 92, 245);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(45, 36, 66);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(45, 36, 66);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  transition: 0.2s ease-in-out;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(45, 36, 66);
  text-decoration-line: line-through;
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(45, 36, 66);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(45, 36, 66);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(45, 36, 66);
  text-decoration: line-through;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(45, 36, 66);
  text-decoration: line-through;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(45, 36, 66);
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 156, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 232, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 168, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 168, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 219, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 105, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 245, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, from hsl(185, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(185, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.909334 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, from hsl(270, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(270, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.66 0.3608 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.66 0.3608 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, from hsl(5, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(5, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.410667 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.410667 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, from hsl(25, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(25, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.610133 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, from hsl(258, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(258, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.54032 0.3608 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, from hsl(100, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(100, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.560267 0.9592 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.560267 0.9592 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, from hsl(185, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(185, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.909334 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.909334 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.3608 0.66 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, from hsl(25, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(25, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  background: color(srgb 0.9592 0.610133 0.3608 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--color) / 0.1);
  border-bottom-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.9592 0.610133 0.3608 / 0.25);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: from hsl(210, 88%, 66%) r g b;
  border-bottom-color: color(srgb 0.3608 0.66 0.9592);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, color(srgb 0.3608 0.66 0.9592));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(45, 36, 66);
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
  background-color: rgb(249, 248, 251);
  border-bottom-color: rgb(184, 173, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 173, 210);
  border-left-width: 0px;
  border-right-color: rgb(184, 173, 210);
  border-right-width: 0px;
  border-top-color: rgb(184, 173, 210);
  border-top-width: 0px;
  color: var(--text-normal, rgb(45, 36, 66));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(249, 248, 251));
  border-bottom-color: rgb(155, 140, 192);
  border-bottom-width: 0px;
  border-left-color: rgb(155, 140, 192);
  border-left-width: 0px;
  border-right-color: rgb(155, 140, 192);
  border-right-width: 0px;
  border-top-color: rgb(155, 140, 192);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(45, 36, 66) none 0px;
  text-decoration-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(155, 140, 192);
  border-bottom-width: 0px;
  border-left-color: rgb(155, 140, 192);
  border-left-width: 0px;
  border-right-color: rgb(155, 140, 192);
  border-right-width: 0px;
  border-top-color: rgb(155, 140, 192);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 239, 246);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.54032 0.3608 0.9592 / 0.2));
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h1-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h1-size, 39.808px);
  line-height: var(--h1-line-height, 47.7696px);
  margin-bottom: 7.9616px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(138, 92, 245));
  font-size: var(--inline-title-size, 39.808px);
}

html[saved-theme="light"] body h2 {
  background: color(srgb 0.54032 0.3608 0.9592 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--accent-rgb) / var(--opacity));
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h2-size, 32.752px);
  line-height: var(--h2-line-height, 39.3024px);
  margin-bottom: 6.5504px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(138, 92, 245));
  font-family: var(--inline-title-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 39.808px);
  letter-spacing: -0.59712px;
  line-height: var(--inline-title-line-height, 47.7696px);
  margin-bottom: 19.904px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h3-color, rgb(138, 92, 245));
  font-family: var(--font-heading-theme, Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif);
  font-size: var(--h3-size, 27.648px);
  line-height: var(--h3-line-height, 35.9424px);
  margin-bottom: 5.5296px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h4-color, rgb(138, 92, 245));
  font-family: var(--h4-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 23.04px);
  line-height: var(--h4-line-height, 32.256px);
  margin-bottom: 4.608px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h5-color, rgb(138, 92, 245));
  font-family: var(--h5-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 19.2px);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--h6-color, rgb(138, 92, 245));
  font-family: var(--h6-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 24px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(184, 173, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 173, 210);
  border-left-width: 0px;
  border-right-color: rgb(184, 173, 210);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, from hsl(210, 88%, 66%) r g b);
  --color: var(--callout-color, from hsl(210, 88%, 66%) r g b);
  --hr-color: rgb(var(--color));
  --text-highlight-bg: rgba(var(--color) / calc(var(--opacity)*2));
  border-bottom-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-left-width: 0px;
  border-right-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-right-width: 0px;
  border-top-color: color(srgb 0.3608 0.66 0.9592 / 0.25);
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: var(--accent-color, rgb(138, 92, 245));
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--icon-color, rgb(141, 123, 183));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(241, 239, 246));
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(141, 123, 183);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(45, 36, 66);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(141, 123, 183));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(141, 123, 183));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--icon-color, rgb(141, 123, 183));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(141, 123, 183);
  stroke: rgb(141, 123, 183);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(184, 173, 210));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(45, 36, 66));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(249, 248, 251));
  border-color: rgb(45, 36, 66);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  --text-highlight-bg: rgba(var(--accent-rgb) / var(--opacity));
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, color(srgb 0.54032 0.3608 0.9592 / 0.1));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
  color: var(--table-header-color, rgb(249, 248, 251));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(184, 173, 210);
  border-bottom-width: 0px;
  border-left-color: rgb(184, 173, 210);
  border-left-width: 0px;
  border-right-color: rgb(184, 173, 210);
  border-right-width: 0px;
  border-top-color: rgb(184, 173, 210);
  border-top-width: 0px;
  color: var(--text-muted, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: rgb(141, 123, 183);
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(141, 123, 183);
  font-family: var(--metadata-label-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(141, 123, 183);
  font-family: var(--metadata-input-font, "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(184, 173, 210);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(141, 123, 183);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(141, 123, 183);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(249, 248, 251));
  color: var(--text-normal, rgb(45, 36, 66));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(241, 239, 246));
  border-color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(241, 239, 246));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(45, 36, 66);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(241, 239, 246));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(90, 72, 132);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 72, 132);
  border-left-width: 0px;
  border-right-color: rgb(90, 72, 132);
  border-right-width: 0px;
  border-top-color: rgb(90, 72, 132);
  border-top-width: 0px;
  color: var(--color-base-60, rgb(90, 72, 132));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body details {
  background-color: rgba(var(--accent-rgb) / var(--opacity));
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-left: 26.6953px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(141, 123, 183);
  border-bottom-width: 0px;
  border-left-color: rgb(141, 123, 183);
  border-left-width: 0px;
  border-right-color: rgb(141, 123, 183);
  border-right-width: 0px;
  border-top-color: rgb(141, 123, 183);
  border-top-width: 0px;
  color: var(--text-normal, rgb(141, 123, 183));
  font-family: "??", Cantarell, Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, color(srgb 0.54032 0.3608 0.9592 / 0.1));
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 0px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 0px;
  border-top-color: rgb(138, 92, 245);
  border-top-width: 0px;
  color: var(--code-normal, rgb(138, 92, 245));
  font-family: var(--font-monospace, "??", ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  font-size: var(--code-size, 16px);
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(45, 36, 66);
  border-bottom-width: 0px;
  border-left-color: rgb(45, 36, 66);
  border-left-width: 0px;
  border-right-color: rgb(45, 36, 66);
  border-right-width: 0px;
  border-top-color: rgb(45, 36, 66);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body summary {
  color: var(--accent-color, rgb(138, 92, 245));
}

html[saved-theme="light"] body sup {
  color: rgb(45, 36, 66);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
}`,
  },
};
