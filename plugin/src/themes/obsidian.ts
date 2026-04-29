import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidian",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 258;
  --accent-l: 66%;
  --accent-s: 88%;
  --anim-duration-fast: 140ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 560ms;
  --anim-duration-superfast: 70ms;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: var(--color-base-30, #363636);
  --background-modifier-border-focus: var(--color-base-40, #555555);
  --background-modifier-border-hover: var(--color-base-35, #3f3f3f);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(10, 10, 10, 0.4);
  --background-modifier-error: var(--color-red, #fb464c);
  --background-modifier-error-hover: var(--color-red, #fb464c);
  --background-modifier-error-rgb: var(--color-red-rgb, 251, 70, 76);
  --background-modifier-form-field: var(--color-base-25, #2a2a2a);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2a2a2a);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.067);
  --background-modifier-message: rgba(0, 0, 0, 0.9);
  --background-modifier-success: var(--color-green, #44cf6e);
  --background-modifier-success-rgb: var(--color-green-rgb, 68, 207, 110);
  --background-primary: var(--color-base-00, #1e1e1e);
  --background-primary-alt: var(--color-base-10, #242424);
  --background-secondary: var(--color-base-20, #262626);
  --background-secondary-alt: var(--color-base-30, #363636);
  --bases-cards-background: var(--background-primary, #1e1e1e);
  --bases-cards-border-width: var(--border-width, 1px);
  --bases-cards-container-background: transparent;
  --bases-cards-corner-shape: var(--corner-shape, round);
  --bases-cards-cover-background: var(--background-primary-alt, #242424);
  --bases-cards-font-size: var(--font-smaller, 0.875em);
  --bases-cards-line-height: 24px;
  --bases-cards-radius: var(--radius-m, 8px);
  --bases-cards-scale: 1;
  --bases-cards-shadow: 0 0 0 1px var(--background-modifier-border);
  --bases-cards-shadow-hover: 0 0 0 1px var(--background-modifier-border-hover);
  --bases-embed-border-color: var(--background-modifier-border, #363636);
  --bases-embed-border-radius: var(--radius-s, 4px);
  --bases-embed-border-width: 0px;
  --bases-filter-menu-width: 520px;
  --bases-group-heading-property-color: var(--text-muted, #b3b3b3);
  --bases-group-heading-property-display: block;
  --bases-group-heading-property-size: var(--font-ui-smaller, 12px);
  --bases-group-heading-property-weight: var(--font-normal, 400);
  --bases-group-heading-value-size: var(--font-smaller, 0.875em);
  --bases-group-heading-value-weight: var(--font-semibold, 600);
  --bases-header-border-width: 0 0 var(--border-width) 0;
  --bases-header-height: 40px;
  --bases-header-padding-end: 2px;
  --bases-header-padding-start: 2px;
  --bases-table-border-color: var(--table-border-color, #363636);
  --bases-table-cell-background-active: var(--background-primary, #1e1e1e);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #242424);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-cell-radius-active: 2px;
  --bases-table-cell-radius-focus: 2px;
  --bases-table-cell-shadow-active: 0 0 0 2px var(--background-modifier-border-focus);
  --bases-table-cell-shadow-focus: 0 0 0 2px var(--interactive-accent);
  --bases-table-column-border-width: var(--border-width, 1px);
  --bases-table-column-max-width: 300;
  --bases-table-column-min-width: 40;
  --bases-table-container-border-radius: var(--radius-s, 4px);
  --bases-table-container-border-width: var(--border-width, 1px);
  --bases-table-font-size: var(--font-smaller, 0.875em);
  --bases-table-group-background: var(--background-primary-alt, #242424);
  --bases-table-group-gap: 10px;
  --bases-table-header-background: var(--background-primary, #1e1e1e);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --bases-table-header-color: var(--text-muted, #b3b3b3);
  --bases-table-header-icon-display: flex;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent var(--size-4-6), black var(--size-4-6));
  --bases-table-header-weight: var(--font-weight, 400);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-row-border-width: var(--border-width, 1px);
  --bases-table-row-height: 30px;
  --bases-table-summary-background: var(--background-primary, #1e1e1e);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --bases-toolbar-badge-display: none;
  --bases-toolbar-label-display: block;
  --blockquote-background-color: transparent;
  --blockquote-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --blockquote-border-thickness: 2px;
  --blockquote-font-style: normal;
  --blur-background: color-mix(in srgb, var(--interactive-normal) var(--blur-opacity-s), transparent) linear-gradient(var(--interactive-normal), color-mix(in srgb, var(--interactive-normal) var(--blur-opacity-s), transparent));
  --blur-brightness: 1.15;
  --blur-l: blur(var(--blur-radius-l)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-m: blur(var(--blur-radius-m)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-opacity-m: 90%;
  --blur-opacity-s: 65%;
  --blur-radius-l: 16px;
  --blur-radius-m: 10px;
  --blur-radius-s: 6px;
  --blur-s: blur(var(--blur-radius-s)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-saturation: 1.5;
  --bodyFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --bold-modifier: 200;
  --bold-weight: calc(var(--font-weight) + var(--bold-modifier));
  --border-width: 1px;
  --button-corner-shape: var(--corner-shape, round);
  --button-radius: var(--input-radius, 5px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, lighten);
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: var(--color-red-rgb, 251, 70, 76);
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: var(--color-blue-rgb, 2, 122, 255);
  --callout-error: var(--color-red-rgb, 251, 70, 76);
  --callout-example: var(--color-purple-rgb, 168, 130, 255);
  --callout-fail: var(--color-red-rgb, 251, 70, 76);
  --callout-important: var(--color-cyan-rgb, 83, 223, 221);
  --callout-info: var(--color-blue-rgb, 2, 122, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 12px 12px 12px 24px);
  --callout-question: var(--color-orange-rgb, 233, 151, 63);
  --callout-quote: 158, 158, 158;
  --callout-radius: var(--radius-s, 4px);
  --callout-success: var(--color-green-rgb, 68, 207, 110);
  --callout-summary: var(--color-cyan-rgb, 83, 223, 221);
  --callout-tip: var(--color-cyan-rgb, 83, 223, 221);
  --callout-title-padding: 0;
  --callout-title-weight: calc(var(--font-weight) + var(--bold-modifier));
  --callout-todo: var(--color-blue-rgb, 2, 122, 255);
  --callout-warning: var(--color-orange-rgb, 233, 151, 63);
  --canvas-background: var(--background-primary, #1e1e1e);
  --canvas-card-label-color: var(--text-faint, #666666);
  --canvas-color: 126, 126, 126;
  --canvas-color-1: var(--color-red-rgb, 251, 70, 76);
  --canvas-color-2: var(--color-orange-rgb, 233, 151, 63);
  --canvas-color-3: var(--color-yellow-rgb, 224, 222, 113);
  --canvas-color-4: var(--color-green-rgb, 68, 207, 110);
  --canvas-color-5: var(--color-cyan-rgb, 83, 223, 221);
  --canvas-color-6: var(--color-purple-rgb, 168, 130, 255);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 4px);
  --canvas-dot-pattern: var(--color-base-30, #363636);
  --caret-color: var(--text-normal, #dadada);
  --checkbox-border-color: var(--text-faint, #666666);
  --checkbox-border-color-hover: var(--text-muted, #b3b3b3);
  --checkbox-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(255, 89.76%, 75.9%));
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: var(--background-primary, #1e1e1e);
  --checkbox-radius: var(--radius-s, 4px);
  --checkbox-size: var(--font-text-size, 16px);
  --checklist-done-color: var(--text-muted, #b3b3b3);
  --checklist-done-decoration: line-through;
  --clickable-icon-radius: var(--radius-s, 4px);
  --code-background: var(--background-primary-alt, #242424);
  --code-border-color: var(--background-modifier-border, #363636);
  --code-border-width: 0px;
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --code-comment: var(--text-faint, #666666);
  --code-function: var(--color-yellow, #e0de71);
  --code-important: var(--color-orange, #e9973f);
  --code-keyword: var(--color-pink, #fa99cd);
  --code-normal: var(--text-normal, #dadada);
  --code-operator: var(--color-red, #fb464c);
  --code-property: var(--color-cyan, #53dfdd);
  --code-punctuation: var(--text-muted, #b3b3b3);
  --code-radius: var(--radius-s, 4px);
  --code-size: var(--font-smaller, 0.875em);
  --code-string: var(--color-green, #44cf6e);
  --code-tag: var(--color-red, #fb464c);
  --code-value: var(--color-purple, #a882ff);
  --code-white-space: pre-wrap;
  --codeFont: var(--font-monospace, var(--font-monospace-override), var(--font-monospace-theme), var(--font-monospace-default));
  --collapse-icon-color: var(--text-faint, #666666);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --color-base-00: #1e1e1e;
  --color-base-05: #212121;
  --color-base-10: #242424;
  --color-base-100: #dadada;
  --color-base-20: #262626;
  --color-base-25: #2a2a2a;
  --color-base-30: #363636;
  --color-base-35: #3f3f3f;
  --color-base-40: #555555;
  --color-base-50: #666666;
  --color-base-60: #999999;
  --color-base-70: #b3b3b3;
  --color-blue: #027aff;
  --color-blue-rgb: 2, 122, 255;
  --color-cyan: #53dfdd;
  --color-cyan-rgb: 83, 223, 221;
  --color-green: #44cf6e;
  --color-green-rgb: 68, 207, 110;
  --color-orange: #e9973f;
  --color-orange-rgb: 233, 151, 63;
  --color-pink: #fa99cd;
  --color-pink-rgb: 250, 153, 205;
  --color-purple: #a882ff;
  --color-purple-rgb: 168, 130, 255;
  --color-red: #fb464c;
  --color-red-rgb: 251, 70, 76;
  --color-yellow: #e0de71;
  --color-yellow-rgb: 224, 222, 113;
  --corner-shape: round;
  --cursor: default;
  --cursor-link: pointer;
  --dark: var(--text-normal, var(--color-base-100, #dadada));
  --darkgray: var(--text-normal, var(--color-base-100, #dadada));
  --dialog-max-height: 85vh;
  --dialog-max-width: 80vw;
  --dialog-width: 560px;
  --direction: 1;
  --divider-color: var(--background-modifier-border, #363636);
  --divider-color-hover: var(--interactive-accent, hsl(258, 88%, 66%));
  --divider-vertical-height: calc(100% - var(--header-height));
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --drag-ghost-background: rgba(0, 0, 0, 0.85);
  --drag-ghost-text-color: #fff;
  --dropdown-background: var(--interactive-normal, #363636);
  --dropdown-background-blend-mode: hard-light;
  --dropdown-background-hover: var(--interactive-hover, #3f3f3f);
  --dropdown-background-position: var(--inset-end) var(--dropdown-icon-inset) top 50%, 0 0;
  --dropdown-background-size: var(--dropdown-icon-width) auto, 100%;
  --dropdown-icon-inset: 0.5em;
  --dropdown-icon-width: 1em;
  --dropdown-padding: 0 var(--dropdown-padding-end) 0 var(--dropdown-padding-start);
  --dropdown-padding-end: 1.9em;
  --dropdown-padding-start: 0.8em;
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border), inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-bottom: none;
  --embed-border-end: none;
  --embed-border-start: 2px solid var(--interactive-accent);
  --embed-border-top: none;
  --embed-canvas-max-height: 400px;
  --embed-max-height: 4000px;
  --embed-padding: 0 0 0 var(--size-4-6);
  --file-folding-offset: 24px;
  --file-header-background: var(--background-primary, #1e1e1e);
  --file-header-background-focused: var(--background-primary, #1e1e1e);
  --file-header-border: var(--border-width, 1px solid transparent) solid transparent;
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 13px);
  --file-header-font-weight: 400;
  --file-header-justify: center;
  --file-line-width: 700px;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 32px 32px);
  --file-margins-x: var(--size-4-8, 32px);
  --file-margins-y: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #363636);
  --flair-color: var(--text-normal, #dadada);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df);
  --font-black: 900;
  --font-bold: 700;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-extrabold: 800;
  --font-extralight: 200;
  --font-interface: var(--font-interface-override), var(--font-interface-theme), var(--default-font, ), var(--font-default);
  --font-light: 300;
  --font-medium: 500;
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace: var(--font-monospace-override), var(--font-monospace-theme), var(--font-monospace-default);
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal: 400;
  --font-print: var(--font-print-override), var(--font-text-override), var(--font-text-theme), 'Arial';
  --font-semibold: 600;
  --font-small: 0.933em;
  --font-smaller: 0.875em;
  --font-smallest: 0.8em;
  --font-text: var(--font-text-override), var(--font-text-theme), var(--font-default);
  --font-text-size: 16px;
  --font-thin: 100;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: var(--font-normal, 400);
  --footnote-divider-color: var(--metadata-divider-color, #363636);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-divider-width: var(--border-width, 1px);
  --footnote-gap: var(--size-4-1, 4px);
  --footnote-id-color: var(--text-muted, #b3b3b3);
  --footnote-id-color-no-occurrences: var(--text-faint, #666666);
  --footnote-id-delimiter: ".";
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.5);
  --footnote-padding-block: var(--size-2-3, 6px);
  --footnote-padding-inline: var(--size-2-3, 6px);
  --footnote-radius: var(--radius-s, 4px);
  --footnote-size: var(--font-smaller, 0.875em);
  --frame-left-space: 0px;
  --frame-right-space: 126px;
  --graph-controls-width: 240px;
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #b3b3b3);
  --graph-node-attachment: var(--color-yellow, #e0de71);
  --graph-node-focused: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --graph-node-tag: var(--color-green, #44cf6e);
  --graph-node-unresolved: var(--text-faint, #666666);
  --graph-text: var(--text-normal, #dadada);
  --gray: var(--text-muted, var(--color-base-70, #b3b3b3));
  --h1-letter-spacing: -0.015em;
  --h1-line-height: 1.2;
  --h1-size: 1.618em;
  --h1-style: normal;
  --h1-variant: normal;
  --h1-weight: 700;
  --h2-letter-spacing: -0.011em;
  --h2-line-height: 1.2;
  --h2-size: 1.462em;
  --h2-style: normal;
  --h2-variant: normal;
  --h2-weight: 680;
  --h3-letter-spacing: -0.008em;
  --h3-line-height: 1.3;
  --h3-size: 1.318em;
  --h3-style: normal;
  --h3-variant: normal;
  --h3-weight: 660;
  --h4-letter-spacing: -0.005em;
  --h4-line-height: 1.4;
  --h4-size: 1.188em;
  --h4-style: normal;
  --h4-variant: normal;
  --h4-weight: 640;
  --h5-letter-spacing: -0.002em;
  --h5-line-height: var(--line-height-normal, 1.5);
  --h5-size: 1.076em;
  --h5-style: normal;
  --h5-variant: normal;
  --h5-weight: 620;
  --h6-letter-spacing: 0em;
  --h6-line-height: var(--line-height-normal, 1.5);
  --h6-size: 1em;
  --h6-style: normal;
  --h6-variant: normal;
  --h6-weight: 600;
  --header-height: 40px;
  --headerFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --heading-formatting: var(--text-faint, #666666);
  --heading-spacing: calc(var(--p-spacing)*2.5);
  --highlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.4));
  --highlight-mix-blend-mode: lighten;
  --hr-color: var(--background-modifier-border, #363636);
  --hr-thickness: 2px;
  --icon-color: var(--text-muted, #b3b3b3);
  --icon-color-active: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --icon-color-focused: var(--text-normal, #dadada);
  --icon-color-hover: var(--text-muted, #b3b3b3);
  --icon-l: 18px;
  --icon-l-stroke-width: 1.75px;
  --icon-m: 18px;
  --icon-m-stroke-width: 1.75px;
  --icon-opacity: 0.85;
  --icon-opacity-active: 1;
  --icon-opacity-hover: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: var(--icon-m, 18px);
  --icon-stroke: var(--icon-m-stroke-width, 1.75px);
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2px;
  --indent-size: 4;
  --indent-unit: 0.5625em;
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --indentation-guide-editing-indent: 0.85em;
  --indentation-guide-reading-indent: -0.85em;
  --indentation-guide-source-indent: 0.25em;
  --indentation-guide-width: var(--border-width, 1px);
  --indentation-guide-width-active: var(--border-width, 1px);
  --inline-title-line-height: var(--h1-line-height, 1.2);
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: var(--h1-size, 1.618em);
  --inline-title-style: var(--h1-style, normal);
  --inline-title-variant: var(--h1-variant, normal);
  --inline-title-weight: var(--h1-weight, 700);
  --input-border-width: var(--border-width, 1px);
  --input-border-width-focus: 2px;
  --input-corner-shape: var(--corner-shape, round);
  --input-date-separator: var(--text-faint, #666666);
  --input-font-weight: var(--font-normal, 400);
  --input-height: 30px;
  --input-icon-inset: var(--size-4-1, 4px);
  --input-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --input-placeholder-color: var(--text-faint, #666666);
  --input-radius: 5px;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09), 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16), 0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --inset-end: right;
  --inset-start: left;
  --interactive-accent: var(--color-accent, hsl(258, 88%, 66%));
  --interactive-accent-hover: var(--color-accent-1, hsl(255, 89.76%, 75.9%));
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: var(--color-base-35, #3f3f3f);
  --interactive-normal: var(--color-base-30, #363636);
  --keyboard-height: 0px;
  --layer-cover: 5;
  --layer-dragged-item: 80;
  --layer-menu: 65;
  --layer-modal: 50;
  --layer-notice: 60;
  --layer-popover: 30;
  --layer-sidedock: 10;
  --layer-slides: 45;
  --layer-status-bar: 15;
  --layer-tooltip: 70;
  --light: var(--background-primary, var(--color-base-00, #1e1e1e));
  --lightgray: var(--background-secondary, var(--color-base-20, #262626));
  --line-height-normal: 1.5;
  --line-height-tight: 1.3;
  --link-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --link-color-hover: var(--text-accent-hover, hsl(253, 92.4%, 85.14%));
  --link-decoration: underline;
  --link-decoration-hover: underline;
  --link-decoration-thickness: auto;
  --link-external-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --link-external-color-hover: var(--text-accent-hover, hsl(253, 92.4%, 85.14%));
  --link-external-decoration: underline;
  --link-external-decoration-hover: underline;
  --link-external-filter: none;
  --link-unresolved-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.3);
  --link-unresolved-decoration-style: solid;
  --link-unresolved-filter: none;
  --link-unresolved-opacity: 0.7;
  --link-weight: var(--font-weight, 400);
  --list-bullet-border: none;
  --list-bullet-end-padding: 1.3rem;
  --list-bullet-radius: 50%;
  --list-bullet-size: 0.3em;
  --list-bullet-transform: none;
  --list-indent: calc(var(--indent-unit)*var(--indent-size));
  --list-indent-editing: 0.75em;
  --list-indent-source: 0;
  --list-marker-color: var(--text-faint, #666666);
  --list-marker-color-collapsed: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --list-marker-color-hover: var(--text-muted, #b3b3b3);
  --list-numbered-style: decimal;
  --list-spacing: 0.075em;
  --loading-icon-delay: 400ms;
  --menu-backdrop-filter: none;
  --menu-background: var(--background-secondary, #262626);
  --menu-border-color: var(--background-modifier-border-hover, #3f3f3f);
  --menu-border-width: var(--border-width, 1px);
  --menu-corner-shape: var(--corner-shape, round);
  --menu-padding: var(--size-2-3, 6px);
  --menu-radius: var(--radius-m, 8px);
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3));
  --metadata-background: transparent;
  --metadata-border-color: var(--background-modifier-border, #363636);
  --metadata-border-radius: 0;
  --metadata-border-width: 0;
  --metadata-display-editing: block;
  --metadata-display-reading: block;
  --metadata-divider-color: var(--background-modifier-border, #363636);
  --metadata-divider-color-focus: transparent;
  --metadata-divider-color-hover: transparent;
  --metadata-divider-width: 0;
  --metadata-gap: 3px;
  --metadata-input-background: transparent;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-input-background-hover: transparent;
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.875em);
  --metadata-input-height: calc(var(--font-text-size)*1.75);
  --metadata-input-longtext-lines: 3;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --metadata-input-text-color: var(--text-normal, #dadada);
  --metadata-label-background: transparent;
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-label-background-hover: transparent;
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.875em);
  --metadata-label-text-color: var(--text-muted, #b3b3b3);
  --metadata-label-text-color-hover: var(--text-muted, #b3b3b3);
  --metadata-label-width: 9em;
  --metadata-max-width: none;
  --metadata-padding: var(--size-4-2, 8px 0) 0;
  --metadata-property-background: transparent;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-property-background-hover: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px var(--background-modifier-border-focus);
  --metadata-property-box-shadow-hover: 0 0 0 var(--border-width) var(--background-modifier-border-hover);
  --metadata-property-corner-shape: var(--corner-shape, round);
  --metadata-property-corner-shape-focus: var(--corner-shape, round);
  --metadata-property-corner-shape-hover: var(--corner-shape, round);
  --metadata-property-padding: 0;
  --metadata-property-radius: 6px;
  --metadata-property-radius-focus: 6px;
  --metadata-property-radius-hover: 6px;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 13px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 13px);
  --modal-background: var(--background-primary, #1e1e1e);
  --modal-border-color: var(--color-base-40, var(--background-modifier-border-focus));
  --modal-border-width: var(--border-width, 1px);
  --modal-community-sidebar-width: 280px;
  --modal-header-height: auto;
  --modal-height: 85vh;
  --modal-max-height: 1000px;
  --modal-max-width: 1100px;
  --modal-max-width-narrow: 800px;
  --modal-radius: var(--radius-l, 12px);
  --modal-shadow: none;
  --modal-width: 90vw;
  --mono-rgb-0: 0, 0, 0;
  --mono-rgb-100: 255, 255, 255;
  --nav-collapse-icon-color: var(--collapse-icon-color, #666666);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color: var(--text-normal, #dadada);
  --nav-heading-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b3b3b3);
  --nav-heading-color-hover: var(--text-normal, #dadada);
  --nav-heading-weight: var(--font-medium, 500);
  --nav-heading-weight-hover: var(--font-medium, 500);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255, 0.12));
  --nav-indentation-guide-width: var(--indentation-guide-width, 1px);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.15);
  --nav-item-children-margin-start: var(--size-4-3, 12px);
  --nav-item-children-padding-start: var(--size-2-2, 4px);
  --nav-item-color: var(--text-muted, #b3b3b3);
  --nav-item-color-active: var(--text-normal, #dadada);
  --nav-item-color-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --nav-item-color-hover: var(--text-normal, #dadada);
  --nav-item-color-selected: var(--text-normal, #dadada);
  --nav-item-margin-bottom: var(--size-2-1, 2px);
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 4px 8px 4px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px 4px 24px);
  --nav-item-radius: var(--radius-s, 4px);
  --nav-item-size: var(--font-ui-small, 13px);
  --nav-item-white-space: pre;
  --nav-tag-background: transparent;
  --nav-tag-color: var(--text-faint, #666666);
  --nav-tag-color-active: var(--text-muted, #b3b3b3);
  --nav-tag-color-hover: var(--text-muted, #b3b3b3);
  --nav-tag-radius: var(--radius-s, 4px);
  --nav-tag-weight: var(--font-semibold, 600);
  --p-spacing: 1rem;
  --p-spacing-empty: 0rem;
  --page-border: 9px solid transparent;
  --page-margin: 1px auto -8px;
  --pdf-background: var(--background-primary, #1e1e1e);
  --pdf-page-background: var(--background-primary, #1e1e1e);
  --pdf-shadow: 0 0 0 1px var(--background-modifier-border);
  --pdf-sidebar-background: var(--background-primary, #1e1e1e);
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px var(--background-modifier-border);
  --pdfViewer-padding-bottom: 0;
  --pill-background: transparent;
  --pill-background-hover: transparent;
  --pill-border-color: var(--background-modifier-border, #363636);
  --pill-border-color-hover: var(--background-modifier-border-hover, #3f3f3f);
  --pill-border-width: var(--border-width, 1px);
  --pill-color: var(--text-muted, #b3b3b3);
  --pill-color-hover: var(--text-normal, #dadada);
  --pill-color-remove: var(--text-faint, #666666);
  --pill-color-remove-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --pill-decoration: none;
  --pill-decoration-hover: none;
  --pill-focus-left-adjust: -4px;
  --pill-focus-width: calc(100% + 6px);
  --pill-padding-x: 0.65em;
  --pill-padding-y: 0.25em;
  --pill-radius: 2em;
  --popover-font-size: var(--font-text-size, 16px);
  --popover-height: 400px;
  --popover-max-height: 95vh;
  --popover-pdf-height: 400px;
  --popover-pdf-width: 450px;
  --popover-width: 450px;
  --preferred-text-scale: 1;
  --prompt-backdrop-filter: none;
  --prompt-background: var(--background-primary, #1e1e1e);
  --prompt-border-color: var(--color-base-40, var(--background-modifier-border-focus));
  --prompt-border-width: var(--border-width, 1px);
  --prompt-input-height: 40px;
  --prompt-max-height: 70vh;
  --prompt-max-width: 80vw;
  --prompt-width: 700px;
  --radius-l: 12px;
  --radius-m: 8px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --raised-background: var(--blur-background, color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent)));
  --raised-blur: var(--blur-s, blur(6px) saturate(1.5) brightness(1.15));
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box;
  --raised-mask-background: transparent;
  --raised-mask-border-width: 0;
  --raised-mask-composite: exclude, add;
  --raised-mask-display: block;
  --ribbon-background: var(--background-secondary, #262626);
  --ribbon-background-collapsed: var(--background-primary, #1e1e1e);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 4px 12px);
  --ribbon-width: 44px;
  --safe-area-inset-bottom: 0px;
  --safe-area-inset-left: 0px;
  --safe-area-inset-right: 0px;
  --safe-area-inset-top: 0px;
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-border-width: 3px 3px 3px 2px;
  --scrollbar-height: 12px;
  --scrollbar-radius: var(--radius-l, 12px);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --scrollbar-width: 12px;
  --search-clear-button-color: var(--text-muted, #b3b3b3);
  --search-clear-button-size: 13px;
  --search-icon-color: var(--text-muted, #b3b3b3);
  --search-icon-size: 18px;
  --search-result-background: var(--background-primary, #1e1e1e);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(255, 89.76%, 75.9%)));
  --setting-group-heading-color: var(--text-normal, #dadada);
  --setting-group-heading-size: var(--font-ui-medium, 15px);
  --setting-group-heading-weight: var(--font-semibold, 600);
  --setting-items-background: var(--background-primary-alt, #242424);
  --setting-items-border-color: var(--background-modifier-border, #363636);
  --setting-items-border-width: 0;
  --setting-items-padding: var(--size-4-5, 20px);
  --setting-items-radius: var(--radius-l, 12px);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #b3b3b3);
  --shiki-active-tab-border-width: 2px;
  --shiki-code-background: var(--code-background, #242424);
  --shiki-code-block-border-color: transparent;
  --shiki-code-block-border-radius: var(--code-radius, 4px);
  --shiki-code-block-border-width: 0px;
  --shiki-code-block-spacing: var(--p-spacing, 1rem);
  --shiki-code-comment: var(--text-faint, #666666);
  --shiki-code-function: var(--color-green, #44cf6e);
  --shiki-code-important: var(--color-orange, #e9973f);
  --shiki-code-keyword: var(--color-pink, #fa99cd);
  --shiki-code-normal: var(--text-muted, #b3b3b3);
  --shiki-code-property: var(--color-cyan, #53dfdd);
  --shiki-code-punctuation: var(--text-muted, #b3b3b3);
  --shiki-code-string: var(--color-yellow, #e0de71);
  --shiki-code-value: var(--color-purple, #a882ff);
  --shiki-gutter-border-color: var(--background-modifier-border, #363636);
  --shiki-gutter-border-width: var(--border-width, 1px);
  --shiki-gutter-text-color: var(--text-faint, #666666);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #b3b3b3);
  --shiki-highlight-green: rgba(var(--color-green-rgb), .5);
  --shiki-highlight-green-background: rgba(var(--color-green-rgb), .1);
  --shiki-highlight-neutral: var(--shiki-code-normal, #b3b3b3);
  --shiki-highlight-neutral-background: rgba(var(--mono-rgb-100), .05);
  --shiki-highlight-red: rgba(var(--color-red-rgb), .5);
  --shiki-highlight-red-background: rgba(var(--color-red-rgb), .1);
  --shiki-terminal-dots-color: var(--text-faint, #666666);
  --shiki-tooltip-background: var(--background-modifier-message, rgba(0, 0, 0, 0.9));
  --shiki-tooltip-text-color: #fafafa;
  --sidebar-left-toggle-inner-width: 8.33%;
  --sidebar-left-toggle-inner-width-open: 24%;
  --sidebar-markdown-font-size: calc(var(--font-text-size)*0.9);
  --sidebar-right-toggle-inner-width: 8.33%;
  --sidebar-right-toggle-inner-width-open: 24%;
  --sidebar-tab-text-display: none;
  --size-2-1: 2px;
  --size-2-2: 4px;
  --size-2-3: 6px;
  --size-4-1: 4px;
  --size-4-10: 40px;
  --size-4-12: 48px;
  --size-4-16: 64px;
  --size-4-18: 72px;
  --size-4-2: 8px;
  --size-4-3: 12px;
  --size-4-4: 16px;
  --size-4-5: 20px;
  --size-4-6: 24px;
  --size-4-8: 32px;
  --size-4-9: 36px;
  --slider-s-thumb-position: -5px;
  --slider-s-thumb-size: 15px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #3f3f3f);
  --slider-thumb-border-width: var(--border-width, 1px);
  --slider-thumb-height: 18px;
  --slider-thumb-radius: var(--slider-thumb-height, 18px);
  --slider-thumb-width: 18px;
  --slider-thumb-y: -6px;
  --slider-track-background: var(--background-modifier-border, #363636);
  --slider-track-height: 3px;
  --spreadHorizontalWrapped-margin-LR: -3.5px;
  --status-bar-background: var(--background-secondary, #262626);
  --status-bar-border-color: var(--divider-color, #363636);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px 0 0 1px);
  --status-bar-font-size: var(--font-ui-smaller, 12px);
  --status-bar-position: fixed;
  --status-bar-radius: var(--radius-m, 8px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #b3b3b3);
  --suggestion-backdrop-filter: none;
  --suggestion-background: var(--background-primary, #1e1e1e);
  --swatch-height: 22px;
  --swatch-radius: 14px;
  --swatch-shadow: inset 0 0 0 1px rgba(var(--mono-rgb-100), 0.15);
  --swatch-width: 22px;
  --sync-avatar-color-1: var(--color-red, #fb464c);
  --sync-avatar-color-2: var(--color-orange, #e9973f);
  --sync-avatar-color-3: var(--color-yellow, #e0de71);
  --sync-avatar-color-4: var(--color-green, #44cf6e);
  --sync-avatar-color-5: var(--color-cyan, #53dfdd);
  --sync-avatar-color-6: var(--color-blue, #027aff);
  --sync-avatar-color-7: var(--color-purple, #a882ff);
  --sync-avatar-color-8: var(--color-pink, #fa99cd);
  --sync-avatar-color-current-user: transparent;
  --tab-background-active: var(--background-primary, #1e1e1e);
  --tab-container-background: var(--background-secondary, #262626);
  --tab-curve: 6px;
  --tab-divider-color: var(--background-modifier-border-hover, #3f3f3f);
  --tab-font-size: var(--font-ui-small, 13px);
  --tab-max-width: 320px;
  --tab-outline-color: var(--divider-color, #363636);
  --tab-outline-width: 1px;
  --tab-radius: var(--radius-s, 4px);
  --tab-radius-active: 6px 6px 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 13px);
  --tab-stacked-font-weight: 400;
  --tab-stacked-header-width: var(--header-height, 40px);
  --tab-stacked-pane-width: 700px;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05);
  --tab-stacked-text-align: start;
  --tab-stacked-text-transform: rotate(0deg);
  --tab-stacked-text-writing-mode: vertical-lr;
  --tab-switcher-background: var(--background-secondary, #262626);
  --tab-switcher-menubar-background: linear-gradient(to top, var(--background-secondary), transparent);
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2);
  --tab-switcher-preview-radius: var(--radius-xl, 16px);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(var(--mono-rgb-100), 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px var(--color-accent);
  --tab-text-color: var(--text-faint, #666666);
  --tab-text-color-active: var(--text-muted, #b3b3b3);
  --tab-text-color-focused: var(--text-muted, #b3b3b3);
  --tab-text-color-focused-active: var(--text-muted, #b3b3b3);
  --tab-text-color-focused-active-current: var(--text-normal, #dadada);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --tab-width: 200px;
  --table-add-button-background: transparent;
  --table-add-button-border-color: var(--background-modifier-border, #363636);
  --table-add-button-border-width: var(--table-border-width, 1px);
  --table-background: transparent;
  --table-border-color: var(--background-modifier-border, #363636);
  --table-border-width: 1px;
  --table-cell-vertical-alignment: top;
  --table-column-alt-background: var(--table-background, transparent);
  --table-column-first-border-width: var(--table-border-width, 1px);
  --table-column-last-border-width: var(--table-border-width, 1px);
  --table-column-max-width: none;
  --table-column-min-width: 6ch;
  --table-drag-handle-background: transparent;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--text-faint, #666666);
  --table-drag-handle-color-active: var(--text-on-accent, white);
  --table-drop-indicator-half-width: 2px;
  --table-header-background: var(--table-background, transparent);
  --table-header-border-color: var(--table-border-color, #363636);
  --table-header-border-width: var(--table-border-width, 1px);
  --table-header-color: var(--text-normal, #dadada);
  --table-header-size: var(--table-text-size, 16px);
  --table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
  --table-line-height: var(--line-height-tight, 1.3);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-row-last-border-width: var(--table-border-width, 1px);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, lighten);
  --table-selection-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --table-selection-border-radius: 4px;
  --table-selection-border-width: 2px;
  --table-text-size: var(--font-text-size, 16px);
  --table-white-space: break-spaces;
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-width: 0px;
  --tag-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --tag-color-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --tag-corner-shape: round;
  --tag-decoration: none;
  --tag-decoration-hover: none;
  --tag-padding-x: 0.65em;
  --tag-padding-y: 0.25em;
  --tag-radius: 2em;
  --tag-size: var(--font-smaller, 0.875em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(253, 92.4%, 85.14%)));
  --text-accent: var(--color-accent-1, hsl(255, 89.76%, 75.9%));
  --text-accent-hover: var(--color-accent-2, hsl(253, 92.4%, 85.14%));
  --text-error: var(--color-red, #fb464c);
  --text-faint: var(--color-base-50, #666666);
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-highlight-bg-rgb: 255, 208, 0;
  --text-muted: var(--color-base-70, #b3b3b3);
  --text-normal: var(--color-base-100, #dadada);
  --text-on-accent: white;
  --text-on-accent-inverted: black;
  --text-selection: hsla(var(--interactive-accent-hsl), 0.33);
  --text-success: var(--color-green, #44cf6e);
  --text-warning: var(--color-orange, #e9973f);
  --textHighlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.4));
  --titleFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --titlebar-background: var(--background-secondary, #262626);
  --titlebar-background-focused: var(--background-secondary-alt, #363636);
  --titlebar-border-color: var(--background-modifier-border, #363636);
  --titlebar-border-width: 0px;
  --titlebar-height: 30px;
  --titlebar-text-color: var(--text-muted, #b3b3b3);
  --titlebar-text-color-focused: var(--text-normal, #dadada);
  --titlebar-text-weight: var(--font-bold, 700);
  --toggle-border-width: 2px;
  --toggle-radius: 18px;
  --toggle-s-border-width: 2px;
  --toggle-s-thumb-height: 15px;
  --toggle-s-thumb-width: 15px;
  --toggle-s-width: 34px;
  --toggle-thumb-color: white;
  --toggle-thumb-height: 18px;
  --toggle-thumb-radius: 18px;
  --toggle-thumb-width: 18px;
  --toggle-width: 40px;
  --touch-radius-l: var(--touch-size-l, 52px);
  --touch-radius-m: var(--touch-size-m, 44px);
  --touch-radius-s: var(--touch-size-s, 40px);
  --touch-radius-xl: var(--touch-size-xl, 60px);
  --touch-radius-xs: var(--touch-size-xs, 30px);
  --touch-radius-xxs: var(--touch-size-xxs, 24px);
  --touch-size-l: 52px;
  --touch-size-m: 44px;
  --touch-size-s: 40px;
  --touch-size-xl: 60px;
  --touch-size-xs: 30px;
  --touch-size-xxs: 24px;
  --traffic-lights-offset-x: var(--header-height, 40px);
  --traffic-lights-offset-y: var(--header-height, 40px);
  --vault-profile-actions-display: flex;
  --vault-profile-color: var(--text-normal, #dadada);
  --vault-profile-color-hover: var(--vault-profile-color, #dadada);
  --vault-profile-display: flex;
  --vault-profile-font-size: var(--font-ui-small, 13px);
  --vault-profile-font-weight: var(--font-medium, 500);
  --vault-profile-order: 2;
  --viewer-container-height: 0;
  --workspace-background-translucent: rgba(var(--mono-rgb-0), 0.6);
  --xfa-focus-outline: auto;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E");
  --zoom-factor: 1;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(38, 38, 38));
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(30, 30, 30));
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(38, 38, 38));
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(38, 38, 38));
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
  color: rgb(218, 218, 218);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
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
  background-color: rgb(233, 151, 63);
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

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 258;
  --accent-l: 66%;
  --accent-s: 88%;
  --anim-duration-fast: 140ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 560ms;
  --anim-duration-superfast: 70ms;
  --anim-motion-delay: cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-motion-jumpy: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  --anim-motion-smooth: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-motion-swing: cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: var(--color-base-30, #e0e0e0);
  --background-modifier-border-focus: var(--color-base-40, #bdbdbd);
  --background-modifier-border-hover: var(--color-base-35, #d4d4d4);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(220, 220, 220, 0.4);
  --background-modifier-error: var(--color-red, #e93147);
  --background-modifier-error-hover: var(--color-red, #e93147);
  --background-modifier-error-rgb: var(--color-red-rgb, 233, 49, 71);
  --background-modifier-form-field: var(--color-base-00, #ffffff);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #ffffff);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.067);
  --background-modifier-message: rgba(0, 0, 0, 0.9);
  --background-modifier-success: var(--color-green, #08b94e);
  --background-modifier-success-rgb: var(--color-green-rgb, 8, 185, 78);
  --background-primary: var(--color-base-00, #ffffff);
  --background-primary-alt: var(--color-base-10, #fafafa);
  --background-secondary: var(--color-base-20, #f6f6f6);
  --background-secondary-alt: var(--color-base-05, #fcfcfc);
  --bases-cards-background: var(--background-primary, #ffffff);
  --bases-cards-border-width: var(--border-width, 1px);
  --bases-cards-container-background: transparent;
  --bases-cards-corner-shape: var(--corner-shape, round);
  --bases-cards-cover-background: var(--background-primary-alt, #fafafa);
  --bases-cards-font-size: var(--font-smaller, 0.875em);
  --bases-cards-line-height: 24px;
  --bases-cards-radius: var(--radius-m, 8px);
  --bases-cards-scale: 1;
  --bases-cards-shadow: 0 0 0 1px var(--background-modifier-border);
  --bases-cards-shadow-hover: 0 0 0 1px var(--background-modifier-border-hover);
  --bases-embed-border-color: var(--background-modifier-border, #e0e0e0);
  --bases-embed-border-radius: var(--radius-s, 4px);
  --bases-embed-border-width: 0px;
  --bases-filter-menu-width: 520px;
  --bases-group-heading-property-color: var(--text-muted, #5c5c5c);
  --bases-group-heading-property-display: block;
  --bases-group-heading-property-size: var(--font-ui-smaller, 12px);
  --bases-group-heading-property-weight: var(--font-normal, 400);
  --bases-group-heading-value-size: var(--font-smaller, 0.875em);
  --bases-group-heading-value-weight: var(--font-semibold, 600);
  --bases-header-border-width: 0 0 var(--border-width) 0;
  --bases-header-height: 40px;
  --bases-header-padding-end: 2px;
  --bases-header-padding-start: 2px;
  --bases-table-border-color: var(--table-border-color, #e0e0e0);
  --bases-table-cell-background-active: var(--background-primary, #ffffff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fafafa);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-cell-radius-active: 2px;
  --bases-table-cell-radius-focus: 2px;
  --bases-table-cell-shadow-active: 0 0 0 2px var(--background-modifier-border-focus);
  --bases-table-cell-shadow-focus: 0 0 0 2px var(--interactive-accent);
  --bases-table-column-border-width: var(--border-width, 1px);
  --bases-table-column-max-width: 300;
  --bases-table-column-min-width: 40;
  --bases-table-container-border-radius: var(--radius-s, 4px);
  --bases-table-container-border-width: var(--border-width, 1px);
  --bases-table-font-size: var(--font-smaller, 0.875em);
  --bases-table-group-background: var(--background-primary-alt, #fafafa);
  --bases-table-group-gap: 10px;
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --bases-table-header-color: var(--text-muted, #5c5c5c);
  --bases-table-header-icon-display: flex;
  --bases-table-header-sort-mask: linear-gradient(to left, transparent var(--size-4-6), black var(--size-4-6));
  --bases-table-header-weight: var(--font-weight, 400);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-row-border-width: var(--border-width, 1px);
  --bases-table-row-height: 30px;
  --bases-table-summary-background: var(--background-primary, #ffffff);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --bases-toolbar-badge-display: none;
  --bases-toolbar-label-display: block;
  --blockquote-background-color: transparent;
  --blockquote-border-color: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --blockquote-border-thickness: 2px;
  --blockquote-font-style: normal;
  --blur-background: color-mix(in srgb, var(--background-primary) var(--blur-opacity-s), transparent) linear-gradient(var(--background-primary), color-mix(in srgb, var(--background-primary) var(--blur-opacity-s), transparent));
  --blur-brightness: 1.15;
  --blur-l: blur(var(--blur-radius-l)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-m: blur(var(--blur-radius-m)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-opacity-m: 90%;
  --blur-opacity-s: 65%;
  --blur-radius-l: 16px;
  --blur-radius-m: 10px;
  --blur-radius-s: 6px;
  --blur-s: blur(var(--blur-radius-s)) saturate(var(--blur-saturation)) brightness(var(--blur-brightness));
  --blur-saturation: 1.5;
  --bodyFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --bold-modifier: 200;
  --bold-weight: calc(var(--font-weight) + var(--bold-modifier));
  --border-width: 1px;
  --button-corner-shape: var(--corner-shape, round);
  --button-radius: var(--input-radius, 5px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, darken);
  --callout-border-opacity: 0.25;
  --callout-border-width: 0px;
  --callout-bug: var(--color-red-rgb, 233, 49, 71);
  --callout-content-background: transparent;
  --callout-content-padding: 0;
  --callout-default: var(--color-blue-rgb, 8, 109, 221);
  --callout-error: var(--color-red-rgb, 233, 49, 71);
  --callout-example: var(--color-purple-rgb, 120, 82, 238);
  --callout-fail: var(--color-red-rgb, 233, 49, 71);
  --callout-important: var(--color-cyan-rgb, 0, 191, 188);
  --callout-info: var(--color-blue-rgb, 8, 109, 221);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 12px 12px 12px 24px);
  --callout-question: var(--color-orange-rgb, 236, 117, 0);
  --callout-quote: 158, 158, 158;
  --callout-radius: var(--radius-s, 4px);
  --callout-success: var(--color-green-rgb, 8, 185, 78);
  --callout-summary: var(--color-cyan-rgb, 0, 191, 188);
  --callout-tip: var(--color-cyan-rgb, 0, 191, 188);
  --callout-title-padding: 0;
  --callout-title-weight: calc(var(--font-weight) + var(--bold-modifier));
  --callout-todo: var(--color-blue-rgb, 8, 109, 221);
  --callout-warning: var(--color-orange-rgb, 236, 117, 0);
  --canvas-background: var(--background-primary, #ffffff);
  --canvas-card-label-color: var(--text-faint, #ababab);
  --canvas-color: 192, 192, 192;
  --canvas-color-1: var(--color-red-rgb, 233, 49, 71);
  --canvas-color-2: var(--color-orange-rgb, 236, 117, 0);
  --canvas-color-3: var(--color-yellow-rgb, 224, 172, 0);
  --canvas-color-4: var(--color-green-rgb, 8, 185, 78);
  --canvas-color-5: var(--color-cyan-rgb, 0, 191, 188);
  --canvas-color-6: var(--color-purple-rgb, 120, 82, 238);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 4px);
  --canvas-dot-pattern: var(--color-base-30, #e0e0e0);
  --caret-color: var(--text-normal, #222222);
  --checkbox-border-color: var(--text-faint, #ababab);
  --checkbox-border-color-hover: var(--text-muted, #5c5c5c);
  --checkbox-color: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(255, 89.76%, 75.9%));
  --checkbox-margin-inline-start: 0.85em;
  --checkbox-marker-color: var(--background-primary, #ffffff);
  --checkbox-radius: var(--radius-s, 4px);
  --checkbox-size: var(--font-text-size, 16px);
  --checklist-done-color: var(--text-muted, #5c5c5c);
  --checklist-done-decoration: line-through;
  --clickable-icon-radius: var(--radius-s, 4px);
  --code-background: var(--background-primary-alt, #fafafa);
  --code-border-color: var(--background-modifier-border, #e0e0e0);
  --code-border-width: 0px;
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --code-comment: var(--text-faint, #ababab);
  --code-function: var(--color-yellow, #e0ac00);
  --code-important: var(--color-orange, #ec7500);
  --code-keyword: var(--color-pink, #d53984);
  --code-normal: var(--text-normal, #222222);
  --code-operator: var(--color-red, #e93147);
  --code-property: var(--color-cyan, #00bfbc);
  --code-punctuation: var(--text-muted, #5c5c5c);
  --code-radius: var(--radius-s, 4px);
  --code-size: var(--font-smaller, 0.875em);
  --code-string: var(--color-green, #08b94e);
  --code-tag: var(--color-red, #e93147);
  --code-value: var(--color-purple, #7852ee);
  --code-white-space: pre-wrap;
  --codeFont: var(--font-monospace, var(--font-monospace-override), var(--font-monospace-theme), var(--font-monospace-default));
  --collapse-icon-color: var(--text-faint, #ababab);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(258, 88%, 66%));
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 1), calc(var(--accent-s)*1.01), calc(var(--accent-l)*1.075));
  --color-accent-2: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --color-base-00: #ffffff;
  --color-base-05: #fcfcfc;
  --color-base-10: #fafafa;
  --color-base-100: #222222;
  --color-base-20: #f6f6f6;
  --color-base-25: #e3e3e3;
  --color-base-30: #e0e0e0;
  --color-base-35: #d4d4d4;
  --color-base-40: #bdbdbd;
  --color-base-50: #ababab;
  --color-base-60: #707070;
  --color-base-70: #5c5c5c;
  --color-blue: #086ddd;
  --color-blue-rgb: 8, 109, 221;
  --color-cyan: #00bfbc;
  --color-cyan-rgb: 0, 191, 188;
  --color-green: #08b94e;
  --color-green-rgb: 8, 185, 78;
  --color-orange: #ec7500;
  --color-orange-rgb: 236, 117, 0;
  --color-pink: #d53984;
  --color-pink-rgb: 213, 57, 132;
  --color-purple: #7852ee;
  --color-purple-rgb: 120, 82, 238;
  --color-red: #e93147;
  --color-red-rgb: 233, 49, 71;
  --color-yellow: #e0ac00;
  --color-yellow-rgb: 224, 172, 0;
  --corner-shape: round;
  --cursor: default;
  --cursor-link: pointer;
  --dark: var(--text-normal, var(--color-base-100, #222222));
  --darkgray: var(--text-normal, var(--color-base-100, #222222));
  --dialog-max-height: 85vh;
  --dialog-max-width: 80vw;
  --dialog-width: 560px;
  --direction: 1;
  --divider-color: var(--background-modifier-border, #e0e0e0);
  --divider-color-hover: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --divider-vertical-height: calc(100% - var(--header-height));
  --divider-width: 1px;
  --divider-width-hover: 3px;
  --drag-ghost-background: rgba(0, 0, 0, 0.85);
  --drag-ghost-text-color: #fff;
  --dropdown-background: var(--interactive-normal, #ffffff);
  --dropdown-background-blend-mode: hard-light;
  --dropdown-background-hover: var(--interactive-hover, #fafafa);
  --dropdown-background-position: var(--inset-end) var(--dropdown-icon-inset) top 50%, 0 0;
  --dropdown-background-size: var(--dropdown-icon-width) auto, 100%;
  --dropdown-icon-inset: 0.5em;
  --dropdown-icon-width: 1em;
  --dropdown-padding: 0 var(--dropdown-padding-end) 0 var(--dropdown-padding-start);
  --dropdown-padding-end: 1.9em;
  --dropdown-padding-start: 0.8em;
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border), inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-bottom: none;
  --embed-border-end: none;
  --embed-border-start: 2px solid var(--interactive-accent);
  --embed-border-top: none;
  --embed-canvas-max-height: 400px;
  --embed-max-height: 4000px;
  --embed-padding: 0 0 0 var(--size-4-6);
  --file-folding-offset: 24px;
  --file-header-background: var(--background-primary, #ffffff);
  --file-header-background-focused: var(--background-primary, #ffffff);
  --file-header-border: var(--border-width, 1px solid transparent) solid transparent;
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 13px);
  --file-header-font-weight: 400;
  --file-header-justify: center;
  --file-line-width: 700px;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 32px 32px);
  --file-margins-x: var(--size-4-8, 32px);
  --file-margins-y: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #ffffff);
  --flair-color: var(--text-normal, #222222);
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --focus-ring-outline: 2px solid light-dark(#0060df, #0df);
  --font-black: 900;
  --font-bold: 700;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-extrabold: 800;
  --font-extralight: 200;
  --font-interface: var(--font-interface-override), var(--font-interface-theme), var(--default-font, ), var(--font-default);
  --font-light: 300;
  --font-medium: 500;
  --font-mermaid: var(--font-text, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace: var(--font-monospace-override), var(--font-monospace-theme), var(--font-monospace-default);
  --font-monospace-default: ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal: 400;
  --font-print: var(--font-print-override), var(--font-text-override), var(--font-text-theme), 'Arial';
  --font-semibold: 600;
  --font-small: 0.933em;
  --font-smaller: 0.875em;
  --font-smallest: 0.8em;
  --font-text: var(--font-text-override), var(--font-text-theme), var(--font-default);
  --font-text-size: 16px;
  --font-thin: 100;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: var(--font-normal, 400);
  --footnote-divider-color: var(--metadata-divider-color, #e0e0e0);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-divider-width: var(--border-width, 1px);
  --footnote-gap: var(--size-4-1, 4px);
  --footnote-id-color: var(--text-muted, #5c5c5c);
  --footnote-id-color-no-occurrences: var(--text-faint, #ababab);
  --footnote-id-delimiter: ".";
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.067));
  --footnote-line-height: var(--line-height-normal, 1.5);
  --footnote-padding-block: var(--size-2-3, 6px);
  --footnote-padding-inline: var(--size-2-3, 6px);
  --footnote-radius: var(--radius-s, 4px);
  --footnote-size: var(--font-smaller, 0.875em);
  --frame-left-space: 0px;
  --frame-right-space: 126px;
  --graph-controls-width: 240px;
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #5c5c5c);
  --graph-node-attachment: var(--color-yellow, #e0ac00);
  --graph-node-focused: var(--text-accent, hsl(258, 88%, 66%));
  --graph-node-tag: var(--color-green, #08b94e);
  --graph-node-unresolved: var(--text-faint, #ababab);
  --graph-text: var(--text-normal, #222222);
  --gray: var(--text-muted, var(--color-base-70, #5c5c5c));
  --h1-letter-spacing: -0.015em;
  --h1-line-height: 1.2;
  --h1-size: 1.618em;
  --h1-style: normal;
  --h1-variant: normal;
  --h1-weight: 700;
  --h2-letter-spacing: -0.011em;
  --h2-line-height: 1.2;
  --h2-size: 1.462em;
  --h2-style: normal;
  --h2-variant: normal;
  --h2-weight: 680;
  --h3-letter-spacing: -0.008em;
  --h3-line-height: 1.3;
  --h3-size: 1.318em;
  --h3-style: normal;
  --h3-variant: normal;
  --h3-weight: 660;
  --h4-letter-spacing: -0.005em;
  --h4-line-height: 1.4;
  --h4-size: 1.188em;
  --h4-style: normal;
  --h4-variant: normal;
  --h4-weight: 640;
  --h5-letter-spacing: -0.002em;
  --h5-line-height: var(--line-height-normal, 1.5);
  --h5-size: 1.076em;
  --h5-style: normal;
  --h5-variant: normal;
  --h5-weight: 620;
  --h6-letter-spacing: 0em;
  --h6-line-height: var(--line-height-normal, 1.5);
  --h6-size: 1em;
  --h6-style: normal;
  --h6-variant: normal;
  --h6-weight: 600;
  --header-height: 40px;
  --headerFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --heading-formatting: var(--text-faint, #ababab);
  --heading-spacing: calc(var(--p-spacing)*2.5);
  --highlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.4));
  --highlight-mix-blend-mode: darken;
  --hr-color: var(--background-modifier-border, #e0e0e0);
  --hr-thickness: 2px;
  --icon-color: var(--text-muted, #5c5c5c);
  --icon-color-active: var(--text-accent, hsl(258, 88%, 66%));
  --icon-color-focused: var(--text-normal, #222222);
  --icon-color-hover: var(--text-muted, #5c5c5c);
  --icon-l: 18px;
  --icon-l-stroke-width: 1.75px;
  --icon-m: 18px;
  --icon-m-stroke-width: 1.75px;
  --icon-opacity: 0.85;
  --icon-opacity-active: 1;
  --icon-opacity-hover: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: var(--icon-m, 18px);
  --icon-stroke: var(--icon-m-stroke-width, 1.75px);
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2px;
  --indent-size: 4;
  --indent-unit: 0.5625em;
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --indentation-guide-editing-indent: 0.85em;
  --indentation-guide-reading-indent: -0.85em;
  --indentation-guide-source-indent: 0.25em;
  --indentation-guide-width: var(--border-width, 1px);
  --indentation-guide-width-active: var(--border-width, 1px);
  --inline-title-line-height: var(--h1-line-height, 1.2);
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: var(--h1-size, 1.618em);
  --inline-title-style: var(--h1-style, normal);
  --inline-title-variant: var(--h1-variant, normal);
  --inline-title-weight: var(--h1-weight, 700);
  --input-border-width: var(--border-width, 1px);
  --input-border-width-focus: 2px;
  --input-corner-shape: var(--corner-shape, round);
  --input-date-separator: var(--text-faint, #ababab);
  --input-font-weight: var(--font-normal, 400);
  --input-height: 30px;
  --input-icon-inset: var(--size-4-1, 4px);
  --input-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --input-placeholder-color: var(--text-faint, #ababab);
  --input-radius: 5px;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --inset-end: right;
  --inset-start: left;
  --interactive-accent: var(--color-accent-1, hsl(257, 88.88%, 70.95%));
  --interactive-accent-hover: var(--color-accent-2, hsl(255, 89.76%, 75.9%));
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: var(--color-base-10, #fafafa);
  --interactive-normal: var(--color-base-00, #ffffff);
  --keyboard-height: 0px;
  --layer-cover: 5;
  --layer-dragged-item: 80;
  --layer-menu: 65;
  --layer-modal: 50;
  --layer-notice: 60;
  --layer-popover: 30;
  --layer-sidedock: 10;
  --layer-slides: 45;
  --layer-status-bar: 15;
  --layer-tooltip: 70;
  --light: var(--background-primary, var(--color-base-00, #ffffff));
  --lightgray: var(--background-secondary, var(--color-base-20, #f6f6f6));
  --line-height-normal: 1.5;
  --line-height-tight: 1.3;
  --link-color: var(--text-accent, hsl(258, 88%, 66%));
  --link-color-hover: var(--text-accent-hover, hsl(255, 89.76%, 75.9%));
  --link-decoration: underline;
  --link-decoration-hover: underline;
  --link-decoration-thickness: auto;
  --link-external-color: var(--text-accent, hsl(258, 88%, 66%));
  --link-external-color-hover: var(--text-accent-hover, hsl(255, 89.76%, 75.9%));
  --link-external-decoration: underline;
  --link-external-decoration-hover: underline;
  --link-external-filter: none;
  --link-unresolved-color: var(--text-accent, hsl(258, 88%, 66%));
  --link-unresolved-decoration-color: hsla(var(--interactive-accent-hsl), 0.3);
  --link-unresolved-decoration-style: solid;
  --link-unresolved-filter: none;
  --link-unresolved-opacity: 0.7;
  --link-weight: var(--font-weight, 400);
  --list-bullet-border: none;
  --list-bullet-end-padding: 1.3rem;
  --list-bullet-radius: 50%;
  --list-bullet-size: 0.3em;
  --list-bullet-transform: none;
  --list-indent: calc(var(--indent-unit)*var(--indent-size));
  --list-indent-editing: 0.75em;
  --list-indent-source: 0;
  --list-marker-color: var(--text-faint, #ababab);
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 88%, 66%));
  --list-marker-color-hover: var(--text-muted, #5c5c5c);
  --list-numbered-style: decimal;
  --list-spacing: 0.075em;
  --loading-icon-delay: 400ms;
  --menu-backdrop-filter: none;
  --menu-background: var(--background-secondary, #f6f6f6);
  --menu-border-color: var(--background-modifier-border-hover, #d4d4d4);
  --menu-border-width: var(--border-width, 1px);
  --menu-corner-shape: var(--corner-shape, round);
  --menu-padding: var(--size-2-3, 6px);
  --menu-radius: var(--radius-m, 8px);
  --menu-scroll-mask: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 48px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-background: transparent;
  --metadata-border-color: var(--background-modifier-border, #e0e0e0);
  --metadata-border-radius: 0;
  --metadata-border-width: 0;
  --metadata-display-editing: block;
  --metadata-display-reading: block;
  --metadata-divider-color: var(--background-modifier-border, #e0e0e0);
  --metadata-divider-color-focus: transparent;
  --metadata-divider-color-hover: transparent;
  --metadata-divider-width: 0;
  --metadata-gap: 3px;
  --metadata-input-background: transparent;
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-input-background-hover: transparent;
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.875em);
  --metadata-input-height: calc(var(--font-text-size)*1.75);
  --metadata-input-longtext-lines: 3;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --metadata-input-text-color: var(--text-normal, #222222);
  --metadata-label-background: transparent;
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-label-background-hover: transparent;
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.875em);
  --metadata-label-text-color: var(--text-muted, #5c5c5c);
  --metadata-label-text-color-hover: var(--text-muted, #5c5c5c);
  --metadata-label-width: 9em;
  --metadata-max-width: none;
  --metadata-padding: var(--size-4-2, 8px 0) 0;
  --metadata-property-background: transparent;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-property-background-hover: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px var(--background-modifier-border-focus);
  --metadata-property-box-shadow-hover: 0 0 0 var(--border-width) var(--background-modifier-border-hover);
  --metadata-property-corner-shape: var(--corner-shape, round);
  --metadata-property-corner-shape-focus: var(--corner-shape, round);
  --metadata-property-corner-shape-hover: var(--corner-shape, round);
  --metadata-property-padding: 0;
  --metadata-property-radius: 6px;
  --metadata-property-radius-focus: 6px;
  --metadata-property-radius-hover: 6px;
  --metadata-sidebar-input-font-size: var(--font-ui-small, 13px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 13px);
  --modal-background: var(--background-primary, #ffffff);
  --modal-border-color: var(--color-base-40, var(--background-modifier-border-focus));
  --modal-border-width: var(--border-width, 1px);
  --modal-community-sidebar-width: 280px;
  --modal-header-height: auto;
  --modal-height: 85vh;
  --modal-max-height: 1000px;
  --modal-max-width: 1100px;
  --modal-max-width-narrow: 800px;
  --modal-radius: var(--radius-l, 12px);
  --modal-shadow: none;
  --modal-width: 90vw;
  --mono-rgb-0: 255, 255, 255;
  --mono-rgb-100: 0, 0, 0;
  --nav-collapse-icon-color: var(--collapse-icon-color, #ababab);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color: var(--text-normal, #222222);
  --nav-heading-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5c5c5c);
  --nav-heading-color-hover: var(--text-normal, #222222);
  --nav-heading-weight: var(--font-medium, 500);
  --nav-heading-weight-hover: var(--font-medium, 500);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0, 0.12));
  --nav-indentation-guide-width: var(--indentation-guide-width, 1px);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.15);
  --nav-item-children-margin-start: var(--size-4-3, 12px);
  --nav-item-children-padding-start: var(--size-2-2, 4px);
  --nav-item-color: var(--text-muted, #5c5c5c);
  --nav-item-color-active: var(--text-normal, #222222);
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --nav-item-color-hover: var(--text-normal, #222222);
  --nav-item-color-selected: var(--text-normal, #222222);
  --nav-item-margin-bottom: var(--size-2-1, 2px);
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 4px 8px 4px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px 4px 24px);
  --nav-item-radius: var(--radius-s, 4px);
  --nav-item-size: var(--font-ui-small, 13px);
  --nav-item-white-space: pre;
  --nav-tag-background: transparent;
  --nav-tag-color: var(--text-faint, #ababab);
  --nav-tag-color-active: var(--text-muted, #5c5c5c);
  --nav-tag-color-hover: var(--text-muted, #5c5c5c);
  --nav-tag-radius: var(--radius-s, 4px);
  --nav-tag-weight: var(--font-semibold, 600);
  --p-spacing: 1rem;
  --p-spacing-empty: 0rem;
  --page-border: 9px solid transparent;
  --page-margin: 1px auto -8px;
  --pdf-background: var(--background-primary, #ffffff);
  --pdf-page-background: var(--background-primary, #ffffff);
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1);
  --pdf-sidebar-background: var(--background-primary, #ffffff);
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2);
  --pdfViewer-padding-bottom: 0;
  --pill-background: transparent;
  --pill-background-hover: transparent;
  --pill-border-color: var(--background-modifier-border, #e0e0e0);
  --pill-border-color-hover: var(--background-modifier-border-hover, #d4d4d4);
  --pill-border-width: var(--border-width, 1px);
  --pill-color: var(--text-muted, #5c5c5c);
  --pill-color-hover: var(--text-normal, #222222);
  --pill-color-remove: var(--text-faint, #ababab);
  --pill-color-remove-hover: var(--text-accent, hsl(258, 88%, 66%));
  --pill-decoration: none;
  --pill-decoration-hover: none;
  --pill-focus-left-adjust: -4px;
  --pill-focus-width: calc(100% + 6px);
  --pill-padding-x: 0.65em;
  --pill-padding-y: 0.25em;
  --pill-radius: 2em;
  --popover-font-size: var(--font-text-size, 16px);
  --popover-height: 400px;
  --popover-max-height: 95vh;
  --popover-pdf-height: 400px;
  --popover-pdf-width: 450px;
  --popover-width: 450px;
  --preferred-text-scale: 1;
  --prompt-backdrop-filter: none;
  --prompt-background: var(--background-primary, #ffffff);
  --prompt-border-color: var(--color-base-40, var(--background-modifier-border-focus));
  --prompt-border-width: var(--border-width, 1px);
  --prompt-input-height: 40px;
  --prompt-max-height: 70vh;
  --prompt-max-width: 80vw;
  --prompt-width: 700px;
  --radius-l: 12px;
  --radius-m: 8px;
  --radius-s: 4px;
  --radius-xl: 16px;
  --raised-background: var(--blur-background, color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent)));
  --raised-blur: var(--blur-s, blur(6px) saturate(1.5) brightness(1.15));
  --raised-mask: linear-gradient(white, white) padding-box, linear-gradient(white, white) border-box;
  --raised-mask-background: linear-gradient(to bottom left, white, transparent, white) border-box no-repeat;
  --raised-mask-border-width: 0;
  --raised-mask-composite: exclude, add;
  --raised-mask-display: block;
  --raised-shadow: var(--shadow-xs, 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent);
  --ribbon-background: var(--background-secondary, #f6f6f6);
  --ribbon-background-collapsed: var(--background-primary, #ffffff);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 4px 12px);
  --ribbon-width: 44px;
  --safe-area-inset-bottom: 0px;
  --safe-area-inset-left: 0px;
  --safe-area-inset-right: 0px;
  --safe-area-inset-top: 0px;
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-border-width: 3px 3px 3px 2px;
  --scrollbar-height: 12px;
  --scrollbar-radius: var(--radius-l, 12px);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --scrollbar-width: 12px;
  --search-clear-button-color: var(--text-muted, #5c5c5c);
  --search-clear-button-size: 13px;
  --search-icon-color: var(--text-muted, #5c5c5c);
  --search-icon-size: 18px;
  --search-result-background: var(--background-primary, #ffffff);
  --secondary: var(--text-accent, var(--color-accent, hsl(258, 88%, 66%)));
  --setting-group-heading-color: var(--text-normal, #222222);
  --setting-group-heading-size: var(--font-ui-medium, 15px);
  --setting-group-heading-weight: var(--font-semibold, 600);
  --setting-items-background: var(--background-primary-alt, #fafafa);
  --setting-items-border-color: var(--background-modifier-border, #e0e0e0);
  --setting-items-border-width: 0;
  --setting-items-padding: var(--size-4-5, 20px);
  --setting-items-radius: var(--radius-l, 12px);
  --shadow-edges: 0 0 transparent;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 15px 30px rgba(0, 0, 0, 0.1);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), var(--shadow-edges);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5c5c5c);
  --shiki-active-tab-border-width: 2px;
  --shiki-code-background: var(--code-background, #fafafa);
  --shiki-code-block-border-color: transparent;
  --shiki-code-block-border-radius: var(--code-radius, 4px);
  --shiki-code-block-border-width: 0px;
  --shiki-code-block-spacing: var(--p-spacing, 1rem);
  --shiki-code-comment: var(--text-faint, #ababab);
  --shiki-code-function: var(--color-green, #08b94e);
  --shiki-code-important: var(--color-orange, #ec7500);
  --shiki-code-keyword: var(--color-pink, #d53984);
  --shiki-code-normal: var(--text-muted, #5c5c5c);
  --shiki-code-property: var(--color-cyan, #00bfbc);
  --shiki-code-punctuation: var(--text-muted, #5c5c5c);
  --shiki-code-string: var(--color-yellow, #e0ac00);
  --shiki-code-value: var(--color-purple, #7852ee);
  --shiki-gutter-border-color: var(--background-modifier-border, #e0e0e0);
  --shiki-gutter-border-width: var(--border-width, 1px);
  --shiki-gutter-text-color: var(--text-faint, #ababab);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5c5c5c);
  --shiki-highlight-green: rgba(var(--color-green-rgb), .5);
  --shiki-highlight-green-background: rgba(var(--color-green-rgb), .1);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5c5c5c);
  --shiki-highlight-neutral-background: rgba(var(--mono-rgb-100), .05);
  --shiki-highlight-red: rgba(var(--color-red-rgb), .5);
  --shiki-highlight-red-background: rgba(var(--color-red-rgb), .1);
  --shiki-terminal-dots-color: var(--text-faint, #ababab);
  --shiki-tooltip-background: var(--background-modifier-message, rgba(0, 0, 0, 0.9));
  --shiki-tooltip-text-color: #fafafa;
  --sidebar-left-toggle-inner-width: 8.33%;
  --sidebar-left-toggle-inner-width-open: 24%;
  --sidebar-markdown-font-size: calc(var(--font-text-size)*0.9);
  --sidebar-right-toggle-inner-width: 8.33%;
  --sidebar-right-toggle-inner-width-open: 24%;
  --sidebar-tab-text-display: none;
  --size-2-1: 2px;
  --size-2-2: 4px;
  --size-2-3: 6px;
  --size-4-1: 4px;
  --size-4-10: 40px;
  --size-4-12: 48px;
  --size-4-16: 64px;
  --size-4-18: 72px;
  --size-4-2: 8px;
  --size-4-3: 12px;
  --size-4-4: 16px;
  --size-4-5: 20px;
  --size-4-6: 24px;
  --size-4-8: 32px;
  --size-4-9: 36px;
  --slider-s-thumb-position: -5px;
  --slider-s-thumb-size: 15px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d4d4d4);
  --slider-thumb-border-width: var(--border-width, 1px);
  --slider-thumb-height: 18px;
  --slider-thumb-radius: var(--slider-thumb-height, 18px);
  --slider-thumb-width: 18px;
  --slider-thumb-y: -6px;
  --slider-track-background: var(--background-modifier-border, #e0e0e0);
  --slider-track-height: 3px;
  --spreadHorizontalWrapped-margin-LR: -3.5px;
  --status-bar-background: var(--background-secondary, #f6f6f6);
  --status-bar-border-color: var(--divider-color, #e0e0e0);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px 0 0 1px);
  --status-bar-font-size: var(--font-ui-smaller, 12px);
  --status-bar-position: fixed;
  --status-bar-radius: var(--radius-m, 8px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #5c5c5c);
  --suggestion-backdrop-filter: none;
  --suggestion-background: var(--background-primary, #ffffff);
  --swatch-height: 22px;
  --swatch-radius: 14px;
  --swatch-shadow: inset 0 0 0 1px rgba(var(--mono-rgb-100), 0.15);
  --swatch-width: 22px;
  --sync-avatar-color-1: var(--color-red, #e93147);
  --sync-avatar-color-2: var(--color-orange, #ec7500);
  --sync-avatar-color-3: var(--color-yellow, #e0ac00);
  --sync-avatar-color-4: var(--color-green, #08b94e);
  --sync-avatar-color-5: var(--color-cyan, #00bfbc);
  --sync-avatar-color-6: var(--color-blue, #086ddd);
  --sync-avatar-color-7: var(--color-purple, #7852ee);
  --sync-avatar-color-8: var(--color-pink, #d53984);
  --sync-avatar-color-current-user: transparent;
  --tab-background-active: var(--background-primary, #ffffff);
  --tab-container-background: var(--background-secondary, #f6f6f6);
  --tab-curve: 6px;
  --tab-divider-color: var(--background-modifier-border-hover, #d4d4d4);
  --tab-font-size: var(--font-ui-small, 13px);
  --tab-max-width: 320px;
  --tab-outline-color: var(--divider-color, #e0e0e0);
  --tab-outline-width: 1px;
  --tab-radius: var(--radius-s, 4px);
  --tab-radius-active: 6px 6px 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 13px);
  --tab-stacked-font-weight: 400;
  --tab-stacked-header-width: var(--header-height, 40px);
  --tab-stacked-pane-width: 700px;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.05);
  --tab-stacked-text-align: start;
  --tab-stacked-text-transform: rotate(0deg);
  --tab-stacked-text-writing-mode: vertical-lr;
  --tab-switcher-background: var(--background-secondary, #f6f6f6);
  --tab-switcher-menubar-background: linear-gradient(to top, var(--background-secondary), transparent);
  --tab-switcher-preview-background-shadow: 0 4px 30px 2px rgba(0, 0, 0, 0.2);
  --tab-switcher-preview-radius: var(--radius-xl, 16px);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(var(--mono-rgb-100), 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px var(--color-accent);
  --tab-text-color: var(--text-faint, #ababab);
  --tab-text-color-active: var(--text-muted, #5c5c5c);
  --tab-text-color-focused: var(--text-muted, #5c5c5c);
  --tab-text-color-focused-active: var(--text-muted, #5c5c5c);
  --tab-text-color-focused-active-current: var(--text-normal, #222222);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --tab-width: 200px;
  --table-add-button-background: transparent;
  --table-add-button-border-color: var(--background-modifier-border, #e0e0e0);
  --table-add-button-border-width: var(--table-border-width, 1px);
  --table-background: transparent;
  --table-border-color: var(--background-modifier-border, #e0e0e0);
  --table-border-width: 1px;
  --table-cell-vertical-alignment: top;
  --table-column-alt-background: var(--table-background, transparent);
  --table-column-first-border-width: var(--table-border-width, 1px);
  --table-column-last-border-width: var(--table-border-width, 1px);
  --table-column-max-width: none;
  --table-column-min-width: 6ch;
  --table-drag-handle-background: transparent;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(257, 88.88%, 70.95%));
  --table-drag-handle-color: var(--text-faint, #ababab);
  --table-drag-handle-color-active: var(--text-on-accent, white);
  --table-drop-indicator-half-width: 2px;
  --table-header-background: var(--table-background, transparent);
  --table-header-border-color: var(--table-border-color, #e0e0e0);
  --table-header-border-width: var(--table-border-width, 1px);
  --table-header-color: var(--text-normal, #222222);
  --table-header-size: var(--table-text-size, 16px);
  --table-header-weight: calc(var(--font-weight) + var(--bold-modifier));
  --table-line-height: var(--line-height-tight, 1.3);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-row-last-border-width: var(--table-border-width, 1px);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, darken);
  --table-selection-border-color: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --table-selection-border-radius: 4px;
  --table-selection-border-width: 2px;
  --table-text-size: var(--font-text-size, 16px);
  --table-white-space: break-spaces;
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-width: 0px;
  --tag-color: var(--text-accent, hsl(258, 88%, 66%));
  --tag-color-hover: var(--text-accent, hsl(258, 88%, 66%));
  --tag-corner-shape: round;
  --tag-decoration: none;
  --tag-decoration-hover: none;
  --tag-padding-x: 0.65em;
  --tag-padding-y: 0.25em;
  --tag-radius: 2em;
  --tag-size: var(--font-smaller, 0.875em);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(255, 89.76%, 75.9%)));
  --text-accent: var(--color-accent, hsl(258, 88%, 66%));
  --text-accent-hover: var(--color-accent-2, hsl(255, 89.76%, 75.9%));
  --text-error: var(--color-red, #e93147);
  --text-faint: var(--color-base-50, #ababab);
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-highlight-bg-rgb: 255, 208, 0;
  --text-muted: var(--color-base-70, #5c5c5c);
  --text-normal: var(--color-base-100, #222222);
  --text-on-accent: white;
  --text-on-accent-inverted: black;
  --text-selection: hsla(var(--color-accent-hsl), 0.2);
  --text-success: var(--color-green, #08b94e);
  --text-warning: var(--color-orange, #ec7500);
  --textHighlight: var(--text-highlight-bg, rgba(var(--text-highlight-bg-rgb), 0.4));
  --titleFont: var(--font-text, var(--font-text-override), var(--font-text-theme), var(--font-default));
  --titlebar-background: var(--background-secondary, #f6f6f6);
  --titlebar-background-focused: var(--background-secondary-alt, #fcfcfc);
  --titlebar-border-color: var(--background-modifier-border, #e0e0e0);
  --titlebar-border-width: 0px;
  --titlebar-height: 30px;
  --titlebar-text-color: var(--text-muted, #5c5c5c);
  --titlebar-text-color-focused: var(--text-normal, #222222);
  --titlebar-text-weight: var(--font-bold, 700);
  --toggle-border-width: 2px;
  --toggle-radius: 18px;
  --toggle-s-border-width: 2px;
  --toggle-s-thumb-height: 15px;
  --toggle-s-thumb-width: 15px;
  --toggle-s-width: 34px;
  --toggle-thumb-color: white;
  --toggle-thumb-height: 18px;
  --toggle-thumb-radius: 18px;
  --toggle-thumb-width: 18px;
  --toggle-width: 40px;
  --touch-radius-l: var(--touch-size-l, 52px);
  --touch-radius-m: var(--touch-size-m, 44px);
  --touch-radius-s: var(--touch-size-s, 40px);
  --touch-radius-xl: var(--touch-size-xl, 60px);
  --touch-radius-xs: var(--touch-size-xs, 30px);
  --touch-radius-xxs: var(--touch-size-xxs, 24px);
  --touch-size-l: 52px;
  --touch-size-m: 44px;
  --touch-size-s: 40px;
  --touch-size-xl: 60px;
  --touch-size-xs: 30px;
  --touch-size-xxs: 24px;
  --traffic-lights-offset-x: var(--header-height, 40px);
  --traffic-lights-offset-y: var(--header-height, 40px);
  --vault-profile-actions-display: flex;
  --vault-profile-color: var(--text-normal, #222222);
  --vault-profile-color-hover: var(--vault-profile-color, #222222);
  --vault-profile-display: flex;
  --vault-profile-font-size: var(--font-ui-small, 13px);
  --vault-profile-font-weight: var(--font-medium, 500);
  --vault-profile-order: 2;
  --viewer-container-height: 0;
  --workspace-background-translucent: rgba(var(--mono-rgb-0), 0.6);
  --xfa-focus-outline: auto;
  --xfa-unfocused-field-background: url("data:image/svg+xml,%3Csvg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' style='fill:rgba(0, 54, 255, 0.13)'/%3E%3C/svg%3E");
  --zoom-factor: 1;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(246, 246, 246));
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(255, 255, 255));
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(246, 246, 246));
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  color: rgb(34, 34, 34);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
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
  background-color: rgb(236, 117, 0);
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

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
  },
};
