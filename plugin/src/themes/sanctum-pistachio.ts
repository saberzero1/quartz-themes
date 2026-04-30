import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanctum.pistachio",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 24.4;
  --accent-l: 61.8%;
  --accent-s: 90.8%;
  --active-line-accent: transparent;
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --aside-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --aside-text-color: var(--text-muted, rgb(199, 197, 194));
  --background: rgb(var(--gray-100));
  --background-active: rgba(var(--gray-50), .40);
  --background-hover: rgba(var(--gray-50), .16);
  --background-inverse: rgb(var(--gray-10));
  --background-inverse-hover: rgba(var(--gray-20), .5);
  --background-modifier-active-hover: rgba(var(--color-accent-rgb), 0.15);
  --background-modifier-border: var(--border-subtle-0, rgb(58, 56, 56));
  --background-modifier-border-focus: var(--focus, hsl(199.5, 38.8%, 40.4%));
  --background-modifier-border-hover: var(--border-subtle-1, rgb(58, 56, 56));
  --background-modifier-cover: var(--background-hover, rgba(142, 140, 139, 0.16));
  --background-modifier-error: var(--red, hsl(9.6, 66.2%, 46.5%));
  --background-modifier-error-hover: var(--red, hsl(9.6, 66.2%, 46.5%));
  --background-modifier-error-rgb: var(--color-red-rgb, 197,
    65,
    40);
  --background-modifier-form-field: var(--field-1, rgb(38, 38, 37));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgb(38, 38, 37));
  --background-modifier-hover: var(--background-hover, rgba(142, 140, 139, 0.16));
  --background-modifier-message: var(--layer-1, rgb(38, 38, 37));
  --background-modifier-success: var(--green, hsl(114.6, 22.4%, 49%));
  --background-modifier-success-rgb: var(--color-green-rgb, 102,
    153,
    97);
  --background-primary: var(--background, rgb(22, 22, 22));
  --background-primary-alt: var(--layer-1, rgb(38, 38, 37));
  --background-secondary: var(--background, rgb(22, 22, 22));
  --background-secondary-alt: var(--background, rgb(22, 22, 22));
  --background-selected: rgba(var(--gray-50), .24);
  --background-selected-hover: rgba(var(--gray-50), .32);
  --bases-cards-background: var(--background-primary, rgb(22, 22, 22));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(38, 38, 37));
  --bases-embed-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --bases-group-heading-property-color: var(--text-muted, rgb(199, 197, 194));
  --bases-table-border-color: var(--table-border-color, rgb(58, 56, 56));
  --bases-table-cell-background-active: var(--background-primary, rgb(22, 22, 22));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(38, 38, 37));
  --bases-table-cell-background-selected: var(--table-selection, hsla(24.4, 90.8%, 61.8%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(38, 38, 37));
  --bases-table-header-background: var(--background-primary, rgb(22, 22, 22));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --bases-table-header-color: var(--text-muted, rgb(199, 197, 194));
  --bases-table-summary-background: var(--background-primary, rgb(22, 22, 22));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --black: 0,
    0,
    0;
  --blockquote-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --blockquote-border-thickness: 0px;
  --blockquote-size: .9rem;
  --blue: var(--blue-60, hsl(217.1, 31.4%, 47.5%));
  --blue-10: hsl(195, 16.7%, 95.3%);
  --blue-100: hsl(221, 100%, 11.8%);
  --blue-20: hsl(190.9, 16.4%, 86.9%);
  --blue-30: hsl(190.4, 18.7%, 75.9%);
  --blue-40: hsl(203.1, 36.3%, 64.9%);
  --blue-50: hsl(208.1, 34.2%, 55.9%);
  --blue-60: hsl(217.1, 31.4%, 47.5%);
  --blue-70: hsl(215.9, 45.1%, 35.7%);
  --blue-80: hsl(216.3, 59.4%, 25.1%);
  --blue-90: hsl(215, 83.7%, 16.9%);
  --bodyFont: var(--font-text-theme, Inter,sans-serif);
  --bold-weight: var(--font-semibold, 600);
  --border-inverse: rgb(var(--gray-10));
  --border-strong-1: rgb(var(--gray-60));
  --border-strong-2: rgb(var(--gray-50));
  --border-subtle-0: rgb(var(--gray-80));
  --border-subtle-1: rgb(var(--gray-80));
  --border-subtle-2: rgb(var(--gray-70));
  --border-subtle-selected-1: rgb(var(--gray-70));
  --border-subtle-selected-2: rgb(var(--gray-60));
  --button-radius: var(--input-radius, 4px);
  --calendar-dot: var(--orange, hsl(24.4, 90.8%, 61.8%));
  --calendar-dot-hover: var(--red, hsl(9.6, 66.2%, 46.5%));
  --callout-border-opacity: 30%;
  --callout-bug: var(--color-red-rgb, 197,
    65,
    40);
  --callout-error: var(--color-red-rgb, 197,
    65,
    40);
  --callout-fail: var(--color-red-rgb, 197,
    65,
    40);
  --callout-padding: var(--size-4-4) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px 12px 12px 24px);
  --callout-success: var(--color-green-rgb, 102,
    153,
    97);
  --callout-title-background: transparent;
  --canvas-background: var(--background-primary, rgb(22, 22, 22));
  --canvas-card-label-color: var(--text-faint, rgb(112, 110, 109));
  --canvas-color-1: var(--color-red-rgb, 197,
    65,
    40);
  --canvas-color-3: var(--color-yellow-rgb, 243,
    189,
    79);
  --canvas-color-4: var(--color-green-rgb, 102,
    153,
    97);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 1px);
  --caret-color: var(--text-normal, rgb(244, 244, 240));
  --checkbox-border-color: var(--text-faint, rgb(112, 110, 109));
  --checkbox-border-color-hover: rgb(var(--checkbox-color-rgb));
  --checkbox-checked-color-hover: rgba(var(--checkbox-color-rgb), .9);
  --checkbox-color: rgb(var(--checkbox-color-rgb));
  --checkbox-color-hover: rgba(var(--checkbox-color-rgb), .5);
  --checkbox-color-rgb: 102,
    153,
    97;
  --checkbox-marker-color: var(--background-primary, rgb(22, 22, 22));
  --checkbox-radius: var(--radius-s, 16px);
  --checklist-done-color: var(--text-faint, rgb(112, 110, 109));
  --checklist-done-strike-color: var(--text-faint, rgb(112, 110, 109));
  --code-background: var(--background-primary-alt, rgb(38, 38, 37));
  --code-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --code-bracket-background: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --code-comment: var(--text-faint, rgb(112, 110, 109));
  --code-function: var(--orange-30, hsl(30.2, 98.6%, 72%));
  --code-important: var(--lavender, hsl(268deg, 57%, 66%));
  --code-keyword: var(--pink, hsl(348.5, 79.3%, 63.9%));
  --code-normal: var(--text-muted, rgb(199, 197, 194));
  --code-normal-inline: var(--pink, hsl(348.5, 79.3%, 63.9%));
  --code-property: var(--cyan, hsl(187.4, 22.4%, 50%));
  --code-punctuation: var(--text-muted, rgb(199, 197, 194));
  --code-string: var(--green-40, hsl(96.9, 31.8%, 56.9%));
  --code-tag: var(--red-50, hsl(11.2, 88.7%, 58.4%));
  --code-value: var(--lavender, hsl(268deg, 57%, 66%));
  --collapse-icon-color: var(--text-faint, rgb(112, 110, 109));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(141, 147, 25));
  --color-accent: var(--interactive, rgb(141, 147, 25));
  --color-accent-1: var(--interactive, rgb(141, 147, 25));
  --color-accent-2: var(--interactive, rgb(141, 147, 25));
  --color-accent-rgb: var(--color-accent-rgb-d, 141, 147, 25);
  --color-accent-rgb-d: 141, 147, 25;
  --color-accent-rgb-l: 141, 147, 25;
  --color-green-rgb: 102,
    153,
    97;
  --color-red-rgb: 197,
    65,
    40;
  --color-yellow-rgb: 243,
    189,
    79;
  --cyan: var(--cyan-50, hsl(187.4, 22.4%, 50%));
  --cyan-10: hsl(90, 15.4%, 94.9%);
  --cyan-100: hsl(214.8, 100%, 9.8%);
  --cyan-20: hsl(98.2, 15.9%, 86.5%);
  --cyan-30: hsl(155, 18.7%, 74.9%);
  --cyan-40: hsl(182.2, 26.2%, 59.6%);
  --cyan-50: hsl(187.4, 22.4%, 50%);
  --cyan-60: hsl(199.5, 38.8%, 40.4%);
  --cyan-70: hsl(202.8, 57.6%, 29.6%);
  --cyan-80: hsl(200.9, 100%, 18%);
  --cyan-90: hsl(206.1, 100%, 13.5%);
  --dark: var(--text-normal, var(--text-primary, rgb(244, 244, 240)));
  --darkgray: var(--text-normal, var(--text-primary, rgb(244, 244, 240)));
  --divider-color: var(--background-modifier-border, rgb(58, 56, 56));
  --divider-color-hover: var(--interactive-accent, rgb(141, 147, 25));
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --embed-border-color: var(--interactive-accent, rgb(141, 147, 25));
  --embed-border-left: var(--embed-border-width) solid var(--embed-border-color, 1px solid rgb(141, 147, 25));
  --embed-border-right: none;
  --embed-border-width: 1px;
  --field-1: rgb(var(--gray-90));
  --field-hover-1: rgb(var(--gray-80));
  --file-header-background: var(--background-primary, rgb(22, 22, 22));
  --file-header-background-focused: var(--background-primary, rgb(22, 22, 22));
  --file-header-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 12px);
  --file-line-width: 40rem;
  --flair-color: var(--text-normal, rgb(244, 244, 240));
  --focus: var(--cyan-60, hsl(199.5, 38.8%, 40.4%));
  --focus-inset: rgb(var(--gray-100));
  --focus-inverse: rgb(var(--white));
  --font-editor: var(--font-editor-theme), var(--font-text);
  --font-editor-theme: ??;
  --font-interface-theme: Inter,sans-serif;
  --font-mermaid: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: Menlo,SFMono-Regular,Consolas,"Roboto Mono",monospace;
  --font-scale-0: 1rem;
  --font-scale-00: .875rem;
  --font-scale-000: .75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --font-smallest: .8em;
  --font-text-theme: Inter,sans-serif;
  --font-ui-large: 18px;
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(58, 56, 56));
  --footnote-id-color: var(--text-muted, rgb(199, 197, 194));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(112, 110, 109));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(142, 140, 139, 0.16));
  --graph-line: var(--border-subtle-1, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, rgb(199, 197, 194));
  --graph-node-attachment: var(--yellow, hsl(40.2, 87.2%, 63.1%));
  --graph-node-focused: rgb(var(--color-accent-rgb));
  --graph-node-tag: var(--red, hsl(9.6, 66.2%, 46.5%));
  --graph-node-unresolved: var(--text-faint, rgb(112, 110, 109));
  --graph-text: var(--text-normal, rgb(244, 244, 240));
  --gray: var(--text-muted, var(--text-secondary, rgb(199, 197, 194)));
  --gray-10: 244,
    244,
    240;
  --gray-100: 22,
    22,
    22;
  --gray-20: 226,
    224,
    220;
  --gray-30: 199,
    197,
    194;
  --gray-40: 169,
    168,
    165;
  --gray-50: 142,
    140,
    139;
  --gray-60: 112,
    110,
    109;
  --gray-70: 84,
    81,
    81;
  --gray-80: 58,
    56,
    56;
  --gray-90: 38,
    38,
    37;
  --green: var(--green-50, hsl(114.6, 22.4%, 49%));
  --green-10: hsl(77.6, 48.6%, 93.1%);
  --green-100: hsl(120, 100%, 5.3%);
  --green-20: hsl(76.6, 48.5%, 81%);
  --green-30: hsl(83.5, 44%, 67.1%);
  --green-40: hsl(96.9, 31.8%, 56.9%);
  --green-50: hsl(114.6, 22.4%, 49%);
  --green-60: hsl(139, 32.3%, 36.5%);
  --green-70: hsl(144.9, 52.8%, 24.1%);
  --green-80: hsl(148.2, 100%, 12.9%);
  --green-90: hsl(134.7, 100%, 8.8%);
  --h1-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-size: 1.75em;
  --h2-weight: 600;
  --h3-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-size: 1.5em;
  --h3-weight: 600;
  --h4-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --headerFont: var(--font-text-theme, Inter,sans-serif);
  --heading-counter: " ";
  --heading-formatting: var(--text-faint, rgb(112, 110, 109));
  --highlight: rgba(var(--color-accent-rgb), .7);
  --hr-color: var(--background-modifier-border, rgb(58, 56, 56));
  --hr-thickness: 1.5px;
  --icon-color: var(--text-faint, rgb(112, 110, 109));
  --icon-color-active: var(--interactive, rgb(141, 147, 25));
  --icon-color-focused: var(--text-normal, rgb(244, 244, 240));
  --icon-color-hover: var(--text-muted, rgb(199, 197, 194));
  --icon-inverse: rgb(var(--gray-100));
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-on-color: rgb(var(--white));
  --icon-opacity: 1;
  --icon-primary: rgb(var(--gray-10));
  --icon-s-stroke-width: 1px;
  --icon-secondary: rgb(var(--gray-30));
  --icon-size: var(--icon-s, 16px);
  --icon-stroke: var(--icon-m-stroke-width, 1.25px);
  --icon-xs: 16px;
  --icon-xs-stroke-width: 1px;
  --indentation-guide: rgba(var(--mono-rgb-100), .15);
  --indentation-guide-active: rgba(var(--mono-rgb-100), 0.3);
  --inline-title-font: var(--h1-font, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgb(112, 110, 109));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, rgb(112, 110, 109));
  --input-radius: 4px;
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0px 0.5px 0.4px hsl(var(--shadow-color) / 0.47),
    0px 0.8px 0.7px -1px hsl(var(--shadow-color) / 0.4),
    0px 1.9px 1.7px -2px hsl(var(--shadow-color) / 0.32),
    0px 4.5px 4px -3px hsl(var(--shadow-color) / 0.25),
    0.1px 9.4px 8.4px -4.1px hsl(var(--shadow-color) / 0.18);
  --input-shadow-hover: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0px 0.5px 0.5px hsl(var(--shadow-color) / 0.47),
    0px 0.9px 0.8px -1px hsl(var(--shadow-color) / 0.4),
    0px 1.9px 1.7px -2px hsl(var(--shadow-color) / 0.33),
    0px 4.5px 4.1px -3px hsl(var(--shadow-color) / 0.26),
    0.1px 9.4px 8.5px -4px hsl(var(--shadow-color) / 0.19);
  --interactive: rgb(var(--color-accent-rgb));
  --interactive-accent: var(--color-accent, rgb(141, 147, 25));
  --interactive-accent-hover: var(--color-accent-1, rgb(141, 147, 25));
  --interactive-accent-hsl: var(--color-accent-hsl, 24.4, 90.8%, 61.8%);
  --lavender: var(--lavender-50, hsl(268deg, 57%, 66%));
  --lavender-10: hsl(264deg, 63%, 97%);
  --lavender-100: hsl(266deg, 100%, 15%);
  --lavender-20: hsl(264deg, 64%, 91%);
  --lavender-30: hsl(264deg, 61%, 84%);
  --lavender-40: hsl(266deg, 58%, 75%);
  --lavender-50: hsl(268deg, 57%, 66%);
  --lavender-60: hsl(270deg, 55%, 56%);
  --lavender-70: hsl(271deg, 57%, 43%);
  --lavender-80: hsl(275deg, 89%, 29%);
  --lavender-90: hsl(273deg, 100%, 21%);
  --layer-1: rgb(var(--gray-90));
  --layer-2: rgb(var(--gray-80));
  --layer-active-1: rgb(var(--gray-70));
  --layer-active-2: rgb(var(--gray-60));
  --layer-hover-1: rgba(var(--gray-80), .5);
  --layer-hover-2: rgba(var(--gray-70), .5);
  --layer-selected-1: rgb(var(--gray-80));
  --layer-selected-2: rgb(var(--gray-70));
  --layer-selected-hover-1: rgba(var(--gray-70), .5);
  --layer-selected-hover-2: rgba(var(--gray-60), .5);
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --light: var(--background-primary, var(--background, rgb(22, 22, 22)));
  --lightgray: var(--background-secondary, var(--background, rgb(22, 22, 22)));
  --link-color: var(--interactive, rgb(141, 147, 25));
  --link-color-hover: var(--interactive, rgb(141, 147, 25));
  --link-external-color: var(--text-accent, rgb(141, 147, 25));
  --link-external-color-hover: var(--text-accent-hover, rgb(141, 147, 25));
  --link-external-style: normal;
  --link-style: normal;
  --link-text-transform: none;
  --link-unresolved-color: var(--text-accent, rgb(141, 147, 25));
  --link-unresolved-opacity: 0.6;
  --list-bullet-border-triangle: 3px;
  --list-bullet-height-bullet-operator: 1px;
  --list-bullet-height-em-dash: 1.5px;
  --list-bullet-height-hyphen: 1.5px;
  --list-bullet-height-triangle: 0px;
  --list-bullet-radius: 0;
  --list-bullet-size: 4px;
  --list-bullet-size-ring: 3px;
  --list-bullet-width-bullet-operator: 1px;
  --list-bullet-width-em-dash: 10px;
  --list-bullet-width-hyphen: 5px;
  --list-bullet-width-triangle: 6px;
  --list-marker-color: var(--text-faint, rgb(112, 110, 109));
  --list-marker-color-collapsed: var(--interactive, rgb(141, 147, 25));
  --list-marker-color-hover: var(--text-muted, rgb(199, 197, 194));
  --menu-background: var(--background-secondary, rgb(22, 22, 22));
  --menu-border-color: var(--background-modifier-border-hover, rgb(58, 56, 56));
  --metadata-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --metadata-divider-color: var(--background-modifier-border, rgb(58, 56, 56));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --metadata-input-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgb(244, 244, 240));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --metadata-label-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgb(199, 197, 194));
  --metadata-label-text-color-hover: var(--text-muted, rgb(199, 197, 194));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 12px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 12px);
  --modal-background: var(--background-primary, rgb(22, 22, 22));
  --modal-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --modal-radius: var(--radius-l, 10px);
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(112, 110, 109));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(112, 110, 109));
  --nav-heading-color: var(--text-normal, rgb(244, 244, 240));
  --nav-heading-color-collapsed: var(--text-faint, rgb(112, 110, 109));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(199, 197, 194));
  --nav-heading-color-hover: var(--text-normal, rgb(244, 244, 240));
  --nav-item-background-active: var(--background-selected, rgba(142, 140, 139, 0.24));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-color: var(--text-muted, rgb(199, 197, 194));
  --nav-item-color-active: var(--text-normal, rgb(244, 244, 240));
  --nav-item-color-highlighted: var(--text-accent-hover, rgb(141, 147, 25));
  --nav-item-color-hover: var(--text-normal, rgb(244, 244, 240));
  --nav-item-color-selected: var(--text-normal, rgb(244, 244, 240));
  --nav-item-size: var(--font-ui-small, 12px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, rgb(112, 110, 109));
  --nav-tag-color-active: var(--text-muted, rgb(199, 197, 194));
  --nav-tag-color-hover: var(--text-muted, rgb(199, 197, 194));
  --orange: var(--orange-40, hsl(24.4, 90.8%, 61.8%));
  --orange-10: hsl(28.7, 85.2%, 94.7%);
  --orange-100: hsl(357.8, 100%, 10.6%);
  --orange-20: hsl(27.8, 79.4%, 86.7%);
  --orange-30: hsl(30.2, 98.6%, 72%);
  --orange-40: hsl(24.4, 90.8%, 61.8%);
  --orange-50: hsl(18.3, 75%, 54.5%);
  --orange-60: hsl(12.8, 60.5%, 45.7%);
  --orange-70: hsl(358, 63.4%, 37.5%);
  --orange-80: hsl(342.1, 82.5%, 24.7%);
  --orange-90: hsl(346.4, 100%, 16.5%);
  --overlay: rgba(var(--gray-100), .7);
  --pdf-background: var(--background-primary, rgb(22, 22, 22));
  --pdf-page-background: var(--background-primary, rgb(22, 22, 22));
  --pdf-sidebar-background: var(--background-primary, rgb(22, 22, 22));
  --pill-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(58, 56, 56));
  --pill-color: var(--text-muted, rgb(199, 197, 194));
  --pill-color-hover: var(--text-normal, rgb(244, 244, 240));
  --pill-color-remove: var(--text-faint, rgb(112, 110, 109));
  --pill-color-remove-hover: var(--text-accent, rgb(141, 147, 25));
  --pink: var(--pink-50, hsl(348.5, 79.3%, 63.9%));
  --pink-10: hsl(352.5, 100%, 96.9%);
  --pink-100: hsl(357.8, 100%, 10.6%);
  --pink-20: hsl(355.6, 100%, 92%);
  --pink-30: hsl(352.8, 94.9%, 84.5%);
  --pink-40: hsl(351.4, 86.2%, 74.5%);
  --pink-50: hsl(348.5, 79.3%, 63.9%);
  --pink-60: hsl(343.4, 62.8%, 49.6%);
  --pink-70: hsl(339.4, 71.6%, 35.9%);
  --pink-80: hsl(342.1, 82.5%, 24.7%);
  --pink-90: hsl(346.4, 100%, 16.5%);
  --pistachio: var(--pistachio-50, hsl(63, 70.9%, 33.7%));
  --pistachio-10: hsl(69.2, 37.1%, 93.1%);
  --pistachio-100: hsl(52.8, 100%, 4.9%);
  --pistachio-20: hsl(67.1, 37.8%, 82.4%);
  --pistachio-30: hsl(64.8, 36.9%, 67.1%);
  --pistachio-40: hsl(63.5, 42.6%, 47.8%);
  --pistachio-50: hsl(63, 70.9%, 33.7%);
  --pistachio-60: hsl(62.1, 100%, 22.7%);
  --pistachio-70: hsl(61.4, 100%, 16.7%);
  --pistachio-80: hsl(60, 100%, 11.6%);
  --pistachio-90: hsl(58.5, 100%, 7.8%);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, rgb(22, 22, 22));
  --prompt-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --radius-l: 10px;
  --red: var(--red-60, hsl(9.6, 66.2%, 46.5%));
  --red-10: hsl(12.6, 100%, 96.3%);
  --red-100: hsl(357.8, 100%, 10.6%);
  --red-20: hsl(12.9, 100%, 90%);
  --red-30: hsl(12, 100%, 81.4%);
  --red-40: hsl(11.7, 94.7%, 70.4%);
  --red-50: hsl(11.2, 88.7%, 58.4%);
  --red-60: hsl(9.6, 66.2%, 46.5%);
  --red-70: hsl(358, 63.4%, 37.5%);
  --red-80: hsl(342.1, 82.5%, 24.7%);
  --red-90: hsl(346.4, 100%, 16.5%);
  --ribbon-background: var(--background-secondary, rgb(22, 22, 22));
  --ribbon-background-collapsed: var(--background-primary, rgb(22, 22, 22));
  --scrollbar-radius: var(--radius-l, 10px);
  --search-clear-button-color: var(--text-muted, rgb(199, 197, 194));
  --search-icon-color: var(--text-muted, rgb(199, 197, 194));
  --search-result-background: var(--background-primary, rgb(22, 22, 22));
  --secondary: var(--text-accent, var(--color-accent-1, rgb(141, 147, 25)));
  --setting-group-heading-color: var(--text-normal, rgb(244, 244, 240));
  --setting-group-heading-size: var(--font-ui-medium, 14px);
  --setting-items-background: var(--background-primary-alt, rgb(38, 38, 37));
  --setting-items-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --setting-items-radius: var(--radius-l, 10px);
  --shadow-color: 0deg 0% 1%;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(199, 197, 194));
  --shiki-code-background: var(--code-background, rgb(38, 38, 37));
  --shiki-code-comment: var(--text-faint, rgb(112, 110, 109));
  --shiki-code-normal: var(--text-muted, rgb(199, 197, 194));
  --shiki-code-punctuation: var(--text-muted, rgb(199, 197, 194));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --shiki-gutter-text-color: var(--text-faint, rgb(112, 110, 109));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(199, 197, 194));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(199, 197, 194));
  --shiki-terminal-dots-color: var(--text-faint, rgb(112, 110, 109));
  --shiki-tooltip-background: var(--background-modifier-message, rgb(38, 38, 37));
  --sidebar-markdown-font-size: var(--font-small, 0.933em);
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(58, 56, 56));
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-thumb-y: -7px;
  --slider-track-background: var(--background-modifier-border, rgb(58, 56, 56));
  --status-bar-background: var(--background-secondary, rgb(22, 22, 22));
  --status-bar-border-color: var(--divider-color, rgb(58, 56, 56));
  --status-bar-text-color: var(--text-muted, rgb(199, 197, 194));
  --suggestion-background: var(--background-primary, rgb(22, 22, 22));
  --tab-background-active: var(--background-primary, rgb(22, 22, 22));
  --tab-container-background: var(--background-secondary, rgb(22, 22, 22));
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border, rgb(58, 56, 56));
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, rgb(58, 56, 56));
  --tab-stacked-font-size: var(--font-ui-small, 12px);
  --tab-switcher-background: var(--background-secondary, rgb(22, 22, 22));
  --tab-text-color: var(--text-faint, rgb(112, 110, 109));
  --tab-text-color-active: var(--text-muted, rgb(199, 197, 194));
  --tab-text-color-focused: var(--text-faint, rgb(112, 110, 109));
  --tab-text-color-focused-active: var(--text-normal, rgb(244, 244, 240));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(244, 244, 240));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(141, 147, 25));
  --table-add-button-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --table-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(141, 147, 25));
  --table-drag-handle-color: var(--text-faint, rgb(112, 110, 109));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(253, 254, 254));
  --table-header-border-color: var(--table-border-color, rgb(58, 56, 56));
  --table-header-color: var(--text-muted, rgb(199, 197, 194));
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-semibold, 600);
  --table-hover-highlight-color: rgba(var(--color-accent-rgb), .15);
  --table-selection-border-color: var(--interactive-accent, rgb(141, 147, 25));
  --table-sticky-height: 600px;
  --tag-background: rgba(var(--color-accent-rgb), 0.15);
  --tag-background-hover: rgba(var(--color-accent-rgb), 0.25);
  --tag-border-color: rgba(var(--color-accent-rgb), 0.15);
  --tag-border-color-hover: rgba(var(--color-accent-rgb), 0.25);
  --tag-color: var(--text-accent, rgb(141, 147, 25));
  --tag-color-hover: var(--text-accent, rgb(141, 147, 25));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, rgb(141, 147, 25)));
  --text-accent: var(--color-accent-1, rgb(141, 147, 25));
  --text-accent-hover: var(--color-accent-2, rgb(141, 147, 25));
  --text-code: var(--pink-50, hsl(348.5, 79.3%, 63.9%));
  --text-error: var(--red, hsl(9.6, 66.2%, 46.5%));
  --text-faint: var(--text-placeholder, rgb(112, 110, 109));
  --text-highlight-bg: var(--highlight, rgba(141, 147, 25, 0.7));
  --text-highlight-bg-active: var(--highlight, rgba(141, 147, 25, 0.7));
  --text-muted: var(--text-secondary, rgb(199, 197, 194));
  --text-normal: var(--text-primary, rgb(244, 244, 240));
  --text-on-accent: rgb(var(--white));
  --text-placeholder: rgb(var(--gray-60));
  --text-primary: rgb(var(--gray-10));
  --text-secondary: rgb(var(--gray-30));
  --text-selection: rgba(var(--color-accent-rgb), .5);
  --text-success: var(--green, hsl(114.6, 22.4%, 49%));
  --textHighlight: var(--text-highlight-bg, var(--highlight, rgba(141, 147, 25, 0.7)));
  --titleFont: var(--font-text-theme, Inter,sans-serif);
  --titlebar-background: var(--background-secondary, rgb(22, 22, 22));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(22, 22, 22));
  --titlebar-border-color: var(--background-modifier-border, rgb(58, 56, 56));
  --titlebar-text-color: var(--text-muted, rgb(199, 197, 194));
  --titlebar-text-color-focused: var(--text-normal, rgb(244, 244, 240));
  --titlebar-text-color-highlighted: var(--text-accent-hover, rgb(141, 147, 25));
  --toggle-radius: 100vmax;
  --toggle-s-thumb-height: 14px;
  --toggle-s-thumb-width: 14px;
  --toggle-s-width: 32px;
  --toggle-thumb-color: rgb(var(--white));
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 48px;
  --tracking-0: 0px;
  --tracking-1: .16px;
  --tracking-2: .32px;
  --tracking-3: .64px;
  --tracking-4: .96px;
  --vault-name-color: var(--text-normal, rgb(244, 244, 240));
  --vault-name-font-size: var(--font-ui-medium, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, rgb(244, 244, 240));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(244, 244, 240));
  --vault-profile-font-size: var(--font-ui-small, 12px);
  --viridian: var(--viridian-50, hsl(151.5, 24.9%, 48%));
  --viridian-10: hsl(96, 18.5%, 94.7%);
  --viridian-100: hsl(156.9, 100%, 5.1%);
  --viridian-20: hsl(100, 21.1%, 86.1%);
  --viridian-30: hsl(111.8, 17.5%, 75.3%);
  --viridian-40: hsl(144.3, 19%, 61.8%);
  --viridian-50: hsl(151.5, 24.9%, 48%);
  --viridian-60: hsl(161, 34.8%, 35.5%);
  --viridian-70: hsl(165.7, 52.1%, 23.7%);
  --viridian-80: hsl(168, 100%, 12.7%);
  --viridian-90: hsl(163.6, 100%, 8.6%);
  --white: 253,
    254,
    254;
  --yellow: var(--yellow-30, hsl(40.2, 87.2%, 63.1%));
  --yellow-10: hsl(44.3, 95.5%, 91.4%);
  --yellow-100: hsl(3.5, 100%, 10.2%);
  --yellow-20: hsl(41.1, 88.1%, 80.2%);
  --yellow-30: hsl(40.2, 87.2%, 63.1%);
  --yellow-40: hsl(41.6, 70.4%, 49%);
  --yellow-50: hsl(42.7, 100%, 36.1%);
  --yellow-60: hsl(39.5, 100%, 29.8%);
  --yellow-70: hsl(35, 100%, 23.5%);
  --yellow-80: hsl(28.4, 100%, 18.2%);
  --yellow-90: hsl(19.4, 100%, 13.9%);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(22, 22, 22));
  background-color: var(--tab-container-background, rgb(22, 22, 22));
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(22, 22, 22));
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(22, 22, 22));
  background-color: var(--tab-container-background, rgb(22, 22, 22));
  border-left-color: rgb(58, 56, 56);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body html {
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --font-scale-0: 1rem;
  --font-scale-00: .875rem;
  --font-scale-000: .75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --tracking-0: 0px;
  --tracking-1: .16px;
  --tracking-2: .32px;
  --tracking-3: .64px;
  --tracking-4: .96px;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(141, 147, 25, 0.7));
  color: var(--text-normal, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body del {
  color: rgb(244, 244, 240);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(244, 244, 240));
  font-size: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 110, 109);
  border-radius: 16px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(102, 153, 97));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(199, 197, 194) none 0px;
  text-decoration-color: rgb(199, 197, 194);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration-color: rgb(141, 147, 25);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration-color: rgb(141, 147, 25);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(141, 147, 25));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body dt {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(112, 110, 109));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body table {
  color: rgb(244, 244, 240);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(244, 244, 240);
  border-bottom-width: 0px;
  border-left-color: rgb(244, 244, 240);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(244, 244, 240);
  border-right-width: 0px;
  border-top-color: rgb(244, 244, 240);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(244, 244, 240));
  font-weight: var(--font-normal, 400);
  padding-left: 16px;
}

html[saved-theme="dark"] body th {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(58, 56, 56);
  border-right-width: 0px;
  border-top-color: rgb(58, 56, 56);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(199, 197, 194));
  padding-left: 16px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(38, 38, 37));
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: var(--code-normal-inline, rgb(236, 90, 118));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(38, 38, 37));
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
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(244, 244, 240);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(38, 38, 37));
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(38, 38, 37));
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(141, 147, 25);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(112, 110, 109);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(244, 244, 240);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(112, 110, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(244, 244, 240);
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' fill='rgb(8, 8, 8)' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M9,10.6L10.6,9L23,21.4L21.4,23L9,10.6z' class='st0'/%3E%3Cpath d='M6.1,6.1C0.6,11.5,0.6,20.3,6,25.8c0,0,0.1,0.1,0.1,0.1c5.4,5.5,14.2,5.5,19.7,0.1c0,0,0.1-0.1,0.1-0.1%09c5.5-5.4,5.5-14.2,0.1-19.7c0,0-0.1-0.1-0.1-0.1C20.5,0.6,11.7,0.6,6.2,6C6.2,6,6.1,6.1,6.1,6.1z M24.8,17.1l-17.6,0v-2.2l17.6,0%09V17.1z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0,0h32v32H0V0z' class='st0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' fill='rgb(8, 8, 8)' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M9,10.6L10.6,9L23,21.4L21.4,23L9,10.6z' class='st0'/%3E%3Cpath d='M6.1,6.1C0.6,11.5,0.6,20.3,6,25.8c0,0,0.1,0.1,0.1,0.1c5.4,5.5,14.2,5.5,19.7,0.1c0,0,0.1-0.1,0.1-0.1%09c5.5-5.4,5.5-14.2,0.1-19.7c0,0-0.1-0.1-0.1-0.1C20.5,0.6,11.7,0.6,6.2,6C6.2,6,6.1,6.1,6.1,6.1z M24.8,17.1l-17.6,0v-2.2l17.6,0%09V17.1z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0,0h32v32H0V0z' class='st0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26zm-1.1-5h2.2v-9h-2.2v9z' class='st0'/%3E%3Cpath d='M16 6.2 4.6 28h22.7L16 6.2zM14.9 12h2.2v9h-2.2v-9zM16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26z'/%3E%3Cpath d='M29 30H3c-.6 0-1-.4-1-1 0-.2 0-.3.1-.5l13-25c.3-.5.9-.6 1.4-.4.2.1.3.2.4.4l13 25c.3.5.1 1.1-.4 1.3-.2.2-.3.2-.5.2zM4.7 28h22.7L16 6.2 4.7 28z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='st0'/%3E%3Cpath d='M-2.9 15.3h26.4v2.9H-2.9z' transform='rotate(-62.979 10.321 16.712)'/%3E%3Cpath d='M8.3 15.6h26.4v2.9H8.3z' transform='rotate(-117.021 21.471 17.086)'/%3E%3Cpath d='M3.9 26.2h24.4v2.9H3.9z' transform='matrix(-.9999 -.01155 .01155 -.9999 31.881 55.41)'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26zm-1.1-5h2.2v-9h-2.2v9z' class='st0'/%3E%3Cpath d='M16 6.2 4.6 28h22.7L16 6.2zM14.9 12h2.2v9h-2.2v-9zM16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26z'/%3E%3Cpath d='M29 30H3c-.6 0-1-.4-1-1 0-.2 0-.3.1-.5l13-25c.3-.5.9-.6 1.4-.4.2.1.3.2.4.4l13 25c.3.5.1 1.1-.4 1.3-.2.2-.3.2-.5.2zM4.7 28h22.7L16 6.2 4.7 28z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='st0'/%3E%3Cpath d='M-2.9 15.3h26.4v2.9H-2.9z' transform='rotate(-62.979 10.321 16.712)'/%3E%3Cpath d='M8.3 15.6h26.4v2.9H8.3z' transform='rotate(-117.021 21.471 17.086)'/%3E%3Cpath d='M3.9 26.2h24.4v2.9H3.9z' transform='matrix(-.9999 -.01155 .01155 -.9999 31.881 55.41)'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z'/%3E%3Cpath id='inner-path' d='M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z' class='cls-1'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z'/%3E%3Cpath id='inner-path' d='M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z' class='cls-1'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
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

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(165, 119, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m27.45 15.11-22-11a1 1 0 0 0-1.08.12 1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m27.45 15.11-22-11a1 1 0 0 0-1.08.12 1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M28.707 19.293 26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M28.707 19.293 26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='m16 11 8-2.1c-.9-1.7-2.3-3-4-3.9V2h-2v2.2c-1.3-.3-2.7-.3-4 0V2h-2v3c-1.7.9-3.1 2.2-4 3.9l8 2.1z'/%3E%3Cpath d='m29.8 20 .3-2-5.1-.8v-4.4l5.1-1.4-.5-1.9-4.8 1.3-7.8 2V17h-2v-4.2l-7.7-2.1-4.8-1.2-.5 1.9 5 1.4v4.4l-5.2.8.3 2 4.9-.8c0 1.2.3 2.4.8 3.6l-4.5 4.5 1.4 1.4 4.2-4.2c3.1 3.9 8.7 4.6 12.6 1.6.6-.5 1.1-1 1.6-1.6l4.2 4.2 1.4-1.4-4.5-4.5c.5-1.1.8-2.3.8-3.6l4.8.8z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='m16 11 8-2.1c-.9-1.7-2.3-3-4-3.9V2h-2v2.2c-1.3-.3-2.7-.3-4 0V2h-2v3c-1.7.9-3.1 2.2-4 3.9l8 2.1z'/%3E%3Cpath d='m29.8 20 .3-2-5.1-.8v-4.4l5.1-1.4-.5-1.9-4.8 1.3-7.8 2V17h-2v-4.2l-7.7-2.1-4.8-1.2-.5 1.9 5 1.4v4.4l-5.2.8.3 2 4.9-.8c0 1.2.3 2.4.8 3.6l-4.5 4.5 1.4 1.4 4.2-4.2c3.1 3.9 8.7 4.6 12.6 1.6.6-.5 1.1-1 1.6-1.6l4.2 4.2 1.4-1.4-4.5-4.5c.5-1.1.8-2.3.8-3.6l4.8.8z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 90, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 2h5v14H2zM23 2H9v14.803l3.042 4.563.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 2h5v14H2zM23 2H9v14.803l3.042 4.563.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='32' height='32' enable-background='new 0 0 32 32'%3E%3Cpath d='M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='32' height='32' enable-background='new 0 0 32 32'%3E%3Cpath d='M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37 1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56 1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt' transform='rotate(-180 16 16)'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37 1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56 1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt' transform='rotate(-180 16 16)'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath id='inner-path' d='M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z' class='cls-1'/%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath id='inner-path' d='M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z' class='cls-1'/%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath d='M11 22h10v4H11v-4zm2 4h6v4h-6v-4zm8-4c0-.9.5-1.5 1.5-2.4 2.3-1.8 3.6-4.7 3.5-7.6 0-5.5-4.5-10-10-10S6 6.5 6 12c-.1 2.9 1.1 5.8 3.5 7.6 1 .9 1.5 1.5 1.5 2.4'/%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath d='M11 22h10v4H11v-4zm2 4h6v4h-6v-4zm8-4c0-.9.5-1.5 1.5-2.4 2.3-1.8 3.6-4.7 3.5-7.6 0-5.5-4.5-10-10-10S6 6.5 6 12c-.1 2.9 1.1 5.8 3.5 7.6 1 .9 1.5 1.5 1.5 2.4'/%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
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

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' width='32' height='32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13 11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle id='_Inner-Path_' cx='16' cy='13' r='4' class='cls-1' data-name='&ltInner-Path&gt'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' width='32' height='32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13 11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle id='_Inner-Path_' cx='16' cy='13' r='4' class='cls-1' data-name='&ltInner-Path&gt'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85Zm-7.65-6 2.62-6.56L25.45 23ZM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85Zm-7.65-6 2.62-6.56L25.45 23ZM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M24 2v2h2v6a4 4 0 0 1-8 0V4h2V2h-4v8a6.005 6.005 0 0 0 5 5.91V22a6 6 0 0 1-12 0v-6.142a4 4 0 1 0-2 0V22a8 8 0 0 0 16 0v-6.09A6.005 6.005 0 0 0 28 10V2ZM6 12a2 2 0 1 1 2 2 2.002 2.002 0 0 1-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M24 2v2h2v6a4 4 0 0 1-8 0V4h2V2h-4v8a6.005 6.005 0 0 0 5 5.91V22a6 6 0 0 1-12 0v-6.142a4 4 0 1 0-2 0V22a8 8 0 0 0 16 0v-6.09A6.005 6.005 0 0 0 28 10V2ZM6 12a2 2 0 1 1 2 2 2.002 2.002 0 0 1-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M28.586 13.314 30 11.9 20 2l-1.314 1.415 1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583 3.41 30l8.911-8.909L18 26.748l1.393-1.414-1.716-1.716 9.724-11.49Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M28.586 13.314 30 11.9 20 2l-1.314 1.415 1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583 3.41 30l8.911-8.909L18 26.748l1.393-1.414-1.716-1.716 9.724-11.49Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 16h5v14H2zM23 30H9V15.197l3.042-4.563.845-5.917A2.01 2.01 0 0 1 14.867 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.008 7.008 0 0 1-7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 16h5v14H2zM23 30H9V15.197l3.042-4.563.845-5.917A2.01 2.01 0 0 1 14.867 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.008 7.008 0 0 1-7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='Layer 1'%3E%3Cpath d='M20 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447l-3.999-7.997a.891.891 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.015 3.015 0 0 0 17 5.184V2h-2v3.184A3.015 3.015 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447L8.617 9h4.56A3.015 3.015 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.015 3.015 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16ZM7 19a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 7 19Zm2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9 10a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 25 19Zm0-8.764L27.382 15h-4.764Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='Layer 1'%3E%3Cpath d='M20 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447l-3.999-7.997a.891.891 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.015 3.015 0 0 0 17 5.184V2h-2v3.184A3.015 3.015 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447L8.617 9h4.56A3.015 3.015 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.015 3.015 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16ZM7 19a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 7 19Zm2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9 10a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 25 19Zm0-8.764L27.382 15h-4.764Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3Cpath d='M29 13h-2c-.1-1.6-.8-3.1-2-4.1V5c0-.6-.4-1-1-1-.2 0-.4.1-.6.2L19.7 7H15c-5.5 0-9.5 3.2-9.9 8H5c-.6 0-1-.4-1-1v-2H2v2c0 1.7 1.3 3 3 3h.1c.3 2.7 1.7 5 3.9 6.6V27c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-2h3v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3.4c1.5-.7 2.5-2 2.8-3.6H29c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm-9 0h-7v-2h7v2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3Cpath d='M29 13h-2c-.1-1.6-.8-3.1-2-4.1V5c0-.6-.4-1-1-1-.2 0-.4.1-.6.2L19.7 7H15c-5.5 0-9.5 3.2-9.9 8H5c-.6 0-1-.4-1-1v-2H2v2c0 1.7 1.3 3 3 3h.1c.3 2.7 1.7 5 3.9 6.6V27c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-2h3v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3.4c1.5-.7 2.5-2 2.8-3.6H29c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm-9 0h-7v-2h7v2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z'/%3E%3Cpath d='M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z'/%3E%3Cpath d='M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M22 4H10a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2Zm0 2v2H10V6ZM10 28V10h12v18Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M22 4H10a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2Zm0 2v2H10V6ZM10 28V10h12v18Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 7h-2V6a2.002 2.002 0 0 0-2-2H10a2.002 2.002 0 0 0-2 2v1H6a2.002 2.002 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.169 8.169 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.966 7.966 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2.002 2.002 0 0 0-2-2ZM8 14a2.002 2.002 0 0 1-2-2V9h2Zm18-2a2.002 2.002 0 0 1-2 2V9h2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 7h-2V6a2.002 2.002 0 0 0-2-2H10a2.002 2.002 0 0 0-2 2v1H6a2.002 2.002 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.169 8.169 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.966 7.966 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2.002 2.002 0 0 0-2-2ZM8 14a2.002 2.002 0 0 1-2-2V9h2Zm18-2a2.002 2.002 0 0 1-2 2V9h2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(22, 22, 22);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 104,
    145,
    181);
  background: rgba(104, 145, 181, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 236,
    90,
    118);
  background: rgba(236, 90, 118, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 243,
    90,
    55);
  background: rgba(243, 90, 55, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 165,
    119,
    218);
  background: rgba(165, 119, 218, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 226,
    105,
    52);
  background: rgba(226, 105, 52, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 99,
    149,
    156);
  background: rgba(99, 149, 156, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 104,
    145,
    181);
  background: rgba(104, 145, 181, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 141,
    147,
    25);
  background: rgba(141, 147, 25, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--gray-50, 142,
    140,
    139);
  background: rgba(142, 140, 139, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 102,
    153,
    97);
  background: rgba(102, 153, 97, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 92,
    153,
    124);
  background: rgba(92, 153, 124, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 99,
    149,
    156);
  background: rgba(99, 149, 156, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 184,
    131,
    0);
  background: rgba(184, 131, 0, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(244, 244, 240);
  padding-left: 24px;
  padding-right: 12px;
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
  background-color: rgb(38, 38, 37);
  border-bottom-color: var(--border-strong-1, rgb(112, 110, 109));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(22, 22, 22));
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(244, 244, 240);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 244, 240) none 0px;
  text-decoration-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(58, 56, 56);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(38, 38, 37);
  border-bottom-color: var(--border-strong-1, rgb(112, 110, 109));
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.16));
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 16px);
  --icon-stroke: var(--icon-xs-stroke-width, 1px);
  --pill-background: var(--tag-background, rgba(141, 147, 25, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(141, 147, 25, 0.25));
  --pill-border-color: var(--tag-border-color, rgba(141, 147, 25, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(141, 147, 25, 0.25));
  --pill-color: var(--tag-color, rgb(141, 147, 25));
  --pill-color-hover: var(--tag-color-hover, rgb(141, 147, 25));
  --pill-color-remove: var(--tag-color, rgb(141, 147, 25));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(141, 147, 25));
  background-color: var(--pill-background, rgba(141, 147, 25, 0.15));
  border-bottom-color: rgba(141, 147, 25, 0.15);
  border-left-color: rgba(141, 147, 25, 0.15);
  border-right-color: rgba(141, 147, 25, 0.15);
  border-top-color: rgba(141, 147, 25, 0.15);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(141, 147, 25);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 600);
  color: var(--h1-color, rgb(244, 244, 240));
  font-family: var(--h1-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(244, 244, 240));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, rgb(244, 244, 240));
  font-family: var(--h2-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(244, 244, 240));
  font-family: var(--inline-title-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgb(244, 244, 240));
  font-family: var(--h3-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(244, 244, 240));
  font-family: var(--h4-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(244, 244, 240));
  font-family: var(--h5-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(244, 244, 240));
  font-family: var(--h6-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 104,
    145,
    181);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(244, 244, 240);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: var(--icon-color, rgb(112, 110, 109));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: var(--status-bar-text-color, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(199, 197, 194);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(244, 244, 240);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(199, 197, 194));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(199, 197, 194);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(199, 197, 194);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(199, 197, 194));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(112, 110, 109);
  border-left-color: rgb(112, 110, 109);
  border-right-color: rgb(112, 110, 109);
  border-top-color: rgb(112, 110, 109);
  color: var(--icon-color, rgb(112, 110, 109));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(112, 110, 109);
  stroke: rgb(112, 110, 109);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(112, 110, 109));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(244, 244, 240));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-color: rgb(244, 244, 240);
  box-shadow: var(--input-shadow, rgba(255, 255, 255, 0.09) 0px 0.5px 0.5px 0.5px inset, rgba(3, 3, 3, 0.47) 0px 0.5px 0.4px 0px, rgba(3, 3, 3, 0.4) 0px 0.8px 0.7px -1px, rgba(3, 3, 3, 0.32) 0px 1.9px 1.7px -2px, rgba(3, 3, 3, 0.25) 0px 4.5px 4px -3px, rgba(3, 3, 3, 0.18) 0.1px 9.4px 8.4px -4.1px);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0));
  border-color: rgb(58, 56, 56);
  color: var(--table-header-color, rgb(199, 197, 194));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(58, 56, 56);
  border-left-color: rgb(58, 56, 56);
  border-right-color: rgb(58, 56, 56);
  border-top-color: rgb(58, 56, 56);
  color: var(--text-muted, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: rgb(199, 197, 194);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(58, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 16px);
  --icon-stroke: var(--icon-xs-stroke-width, 1px);
  --pill-background: var(--tag-background, rgba(141, 147, 25, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(141, 147, 25, 0.25));
  --pill-border-color: var(--tag-border-color, rgba(141, 147, 25, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(141, 147, 25, 0.25));
  --pill-color: var(--tag-color, rgb(141, 147, 25));
  --pill-color-hover: var(--tag-color-hover, rgb(141, 147, 25));
  --pill-color-remove: var(--tag-color, rgb(141, 147, 25));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(141, 147, 25));
  background-color: var(--pill-background, rgba(141, 147, 25, 0.15));
  color: var(--pill-color, rgb(141, 147, 25));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(199, 197, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(22, 22, 22));
  color: var(--text-normal, rgb(244, 244, 240));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(22, 22, 22));
  border-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(244, 244, 240);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(22, 22, 22));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(244, 244, 240));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(38, 38, 37);
  border-bottom-color: var(--border-strong-1, rgb(112, 110, 109));
  border-bottom-width: 1px;
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: var(--text-normal, rgb(199, 197, 194));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--layer-1, rgb(38, 38, 37));
  border-bottom-color: rgb(199, 197, 194);
  border-left-color: rgb(199, 197, 194);
  border-right-color: rgb(199, 197, 194);
  border-top-color: rgb(199, 197, 194);
  color: var(--code-normal, rgb(199, 197, 194));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(244, 244, 240);
  border-left-color: rgb(244, 244, 240);
  border-right-color: rgb(244, 244, 240);
  border-top-color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body sub {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body summary {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body sup {
  color: rgb(244, 244, 240);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(141, 147, 25, 0.15));
  border-bottom-color: rgba(141, 147, 25, 0.15);
  border-left-color: rgba(141, 147, 25, 0.15);
  border-right-color: rgba(141, 147, 25, 0.15);
  border-top-color: rgba(141, 147, 25, 0.15);
  color: var(--tag-color, rgb(141, 147, 25));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 24.4;
  --accent-l: 61.8%;
  --accent-s: 90.8%;
  --active-line-accent: transparent;
  --aside-background: transparent;
  --aside-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --aside-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --aside-text-color: var(--text-muted, rgb(84, 81, 81));
  --background: rgb(var(--gray-10));
  --background-active: rgba(var(--gray-50), .32);
  --background-hover: rgba(var(--gray-50), .12);
  --background-inverse: rgb(var(--gray-80));
  --background-inverse-hover: rgba(var(--gray-70), .5);
  --background-modifier-active-hover: rgba(var(--color-accent-rgb), 0.15);
  --background-modifier-border: var(--border-subtle-0, rgb(226, 224, 220));
  --background-modifier-border-focus: var(--focus, hsl(199.5, 38.8%, 40.4%));
  --background-modifier-border-hover: var(--border-subtle-1, rgb(226, 224, 220));
  --background-modifier-cover: var(--background-hover, rgba(142, 140, 139, 0.12));
  --background-modifier-error: var(--red, hsl(9.6, 66.2%, 46.5%));
  --background-modifier-error-hover: var(--red, hsl(9.6, 66.2%, 46.5%));
  --background-modifier-error-rgb: var(--color-red-rgb, 197,
    65,
    40);
  --background-modifier-form-field: var(--field-1, rgb(253, 254, 254));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgb(253, 254, 254));
  --background-modifier-hover: var(--background-hover, rgba(142, 140, 139, 0.12));
  --background-modifier-message: var(--layer-1, rgb(253, 254, 254));
  --background-modifier-success: var(--green, hsl(114.6, 22.4%, 49%));
  --background-modifier-success-rgb: var(--color-green-rgb, 102,
    153,
    97);
  --background-primary: var(--background, rgb(244, 244, 240));
  --background-primary-alt: var(--layer-1, rgb(253, 254, 254));
  --background-secondary: var(--background, rgb(244, 244, 240));
  --background-secondary-alt: var(--background, rgb(244, 244, 240));
  --background-selected: rgba(var(--gray-50), .2);
  --background-selected-hover: rgba(var(--gray-50), .32);
  --bases-cards-background: var(--background-primary, rgb(244, 244, 240));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(253, 254, 254));
  --bases-embed-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --bases-group-heading-property-color: var(--text-muted, rgb(84, 81, 81));
  --bases-table-border-color: var(--table-border-color, rgb(226, 224, 220));
  --bases-table-cell-background-active: var(--background-primary, rgb(244, 244, 240));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(253, 254, 254));
  --bases-table-cell-background-selected: var(--table-selection, hsla(24.4, 90.8%, 61.8%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(253, 254, 254));
  --bases-table-header-background: var(--background-primary, rgb(244, 244, 240));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --bases-table-header-color: var(--text-muted, rgb(84, 81, 81));
  --bases-table-summary-background: var(--background-primary, rgb(244, 244, 240));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --black: 0,
    0,
    0;
  --blockquote-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --blockquote-border-thickness: 0px;
  --blockquote-size: .9rem;
  --blue: var(--blue-60, hsl(217.1, 31.4%, 47.5%));
  --blue-10: hsl(195, 16.7%, 95.3%);
  --blue-100: hsl(221, 100%, 11.8%);
  --blue-20: hsl(190.9, 16.4%, 86.9%);
  --blue-30: hsl(190.4, 18.7%, 75.9%);
  --blue-40: hsl(203.1, 36.3%, 64.9%);
  --blue-50: hsl(208.1, 34.2%, 55.9%);
  --blue-60: hsl(217.1, 31.4%, 47.5%);
  --blue-70: hsl(215.9, 45.1%, 35.7%);
  --blue-80: hsl(216.3, 59.4%, 25.1%);
  --blue-90: hsl(215, 83.7%, 16.9%);
  --bodyFont: var(--font-text-theme, Inter,sans-serif);
  --bold-weight: var(--font-semibold, 600);
  --border-inverse: rgb(var(--gray-100));
  --border-strong-1: rgb(var(--gray-50));
  --border-strong-2: rgb(var(--gray-50));
  --border-subtle-0: rgb(var(--gray-20));
  --border-subtle-1: rgb(var(--gray-20));
  --border-subtle-2: rgb(var(--gray-20));
  --border-subtle-selected-1: rgb(var(--gray-30));
  --border-subtle-selected-2: rgb(var(--gray-30));
  --button-radius: var(--input-radius, 4px);
  --calendar-dot: var(--orange, hsl(24.4, 90.8%, 61.8%));
  --calendar-dot-hover: var(--red, hsl(9.6, 66.2%, 46.5%));
  --callout-border-opacity: 30%;
  --callout-bug: var(--color-red-rgb, 197,
    65,
    40);
  --callout-error: var(--color-red-rgb, 197,
    65,
    40);
  --callout-fail: var(--color-red-rgb, 197,
    65,
    40);
  --callout-padding: var(--size-4-4) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px 12px 12px 24px);
  --callout-success: var(--color-green-rgb, 102,
    153,
    97);
  --callout-title-background: transparent;
  --canvas-background: var(--background-primary, rgb(244, 244, 240));
  --canvas-card-label-color: var(--text-faint, rgb(169, 168, 165));
  --canvas-color-1: var(--color-red-rgb, 197,
    65,
    40);
  --canvas-color-3: var(--color-yellow-rgb, 243,
    189,
    79);
  --canvas-color-4: var(--color-green-rgb, 102,
    153,
    97);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 1px);
  --caret-color: var(--text-normal, rgb(22, 22, 22));
  --checkbox-border-color: var(--text-faint, rgb(169, 168, 165));
  --checkbox-border-color-hover: rgb(var(--checkbox-color-rgb));
  --checkbox-checked-color-hover: rgba(var(--checkbox-color-rgb), .9);
  --checkbox-color: rgb(var(--checkbox-color-rgb));
  --checkbox-color-hover: rgba(var(--checkbox-color-rgb), .5);
  --checkbox-color-rgb: 102,
    153,
    97;
  --checkbox-marker-color: var(--background-primary, rgb(244, 244, 240));
  --checkbox-radius: var(--radius-s, 16px);
  --checklist-done-color: var(--text-faint, rgb(169, 168, 165));
  --checklist-done-strike-color: var(--text-faint, rgb(169, 168, 165));
  --code-background: var(--layer-hover-2, rgba(226, 224, 220, 0.5));
  --code-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --code-bracket-background: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --code-comment: var(--text-faint, rgb(169, 168, 165));
  --code-function: var(--orange, hsl(24.4, 90.8%, 61.8%));
  --code-important: var(--lavender, hsl(268deg, 57%, 66%));
  --code-keyword: var(--pink, hsl(348.5, 79.3%, 63.9%));
  --code-normal: var(--text-muted, rgb(84, 81, 81));
  --code-normal-inline: var(--pink, hsl(348.5, 79.3%, 63.9%));
  --code-property: var(--cyan, hsl(187.4, 22.4%, 50%));
  --code-punctuation: var(--text-muted, rgb(84, 81, 81));
  --code-string: var(--green, hsl(114.6, 22.4%, 49%));
  --code-tag: var(--red, hsl(9.6, 66.2%, 46.5%));
  --code-value: var(--lavender, hsl(268deg, 57%, 66%));
  --collapse-icon-color: var(--text-faint, rgb(169, 168, 165));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(141, 147, 25));
  --color-accent: var(--interactive, rgb(141, 147, 25));
  --color-accent-1: var(--interactive, rgb(141, 147, 25));
  --color-accent-2: var(--interactive, rgb(141, 147, 25));
  --color-accent-rgb: var(--color-accent-rgb-l, 141, 147, 25);
  --color-accent-rgb-d: 141, 147, 25;
  --color-accent-rgb-l: 141, 147, 25;
  --color-green-rgb: 102,
    153,
    97;
  --color-red-rgb: 197,
    65,
    40;
  --color-yellow-rgb: 243,
    189,
    79;
  --cyan: var(--cyan-50, hsl(187.4, 22.4%, 50%));
  --cyan-10: hsl(90, 15.4%, 94.9%);
  --cyan-100: hsl(214.8, 100%, 9.8%);
  --cyan-20: hsl(98.2, 15.9%, 86.5%);
  --cyan-30: hsl(155, 18.7%, 74.9%);
  --cyan-40: hsl(182.2, 26.2%, 59.6%);
  --cyan-50: hsl(187.4, 22.4%, 50%);
  --cyan-60: hsl(199.5, 38.8%, 40.4%);
  --cyan-70: hsl(202.8, 57.6%, 29.6%);
  --cyan-80: hsl(200.9, 100%, 18%);
  --cyan-90: hsl(206.1, 100%, 13.5%);
  --dark: var(--text-normal, var(--text-primary, rgb(22, 22, 22)));
  --darkgray: var(--text-normal, var(--text-primary, rgb(22, 22, 22)));
  --divider-color: var(--background-modifier-border, rgb(226, 224, 220));
  --divider-color-hover: var(--interactive-accent, rgb(141, 147, 25));
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --embed-border-color: var(--interactive-accent, rgb(141, 147, 25));
  --embed-border-left: var(--embed-border-width) solid var(--embed-border-color, 1px solid rgb(141, 147, 25));
  --embed-border-right: none;
  --embed-border-width: 1px;
  --field-1: rgb(var(--white));
  --field-hover-1: rgb(var(--gray-20));
  --file-header-background: var(--background-primary, rgb(244, 244, 240));
  --file-header-background-focused: var(--background-primary, rgb(244, 244, 240));
  --file-header-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 12px);
  --file-line-width: 40rem;
  --flair-color: var(--text-normal, rgb(22, 22, 22));
  --focus: var(--cyan-60, hsl(199.5, 38.8%, 40.4%));
  --focus-inset: rgb(var(--white));
  --focus-inverse: rgb(var(--white));
  --font-editor: var(--font-editor-theme), var(--font-text);
  --font-editor-theme: ??;
  --font-interface-theme: Inter,sans-serif;
  --font-mermaid: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: Menlo,SFMono-Regular,Consolas,"Roboto Mono",monospace;
  --font-scale-0: 1rem;
  --font-scale-00: .875rem;
  --font-scale-000: .75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --font-smallest: .8em;
  --font-text-theme: Inter,sans-serif;
  --font-ui-large: 18px;
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(226, 224, 220));
  --footnote-id-color: var(--text-muted, rgb(84, 81, 81));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(169, 168, 165));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(142, 140, 139, 0.12));
  --graph-line: var(--border-subtle-1, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, rgb(84, 81, 81));
  --graph-node-attachment: var(--yellow, hsl(40.2, 87.2%, 63.1%));
  --graph-node-focused: rgb(var(--color-accent-rgb));
  --graph-node-tag: var(--red, hsl(9.6, 66.2%, 46.5%));
  --graph-node-unresolved: var(--text-faint, rgb(169, 168, 165));
  --graph-text: var(--text-normal, rgb(22, 22, 22));
  --gray: var(--text-muted, var(--text-secondary, rgb(84, 81, 81)));
  --gray-10: 244,
    244,
    240;
  --gray-100: 22,
    22,
    22;
  --gray-20: 226,
    224,
    220;
  --gray-30: 199,
    197,
    194;
  --gray-40: 169,
    168,
    165;
  --gray-50: 142,
    140,
    139;
  --gray-60: 112,
    110,
    109;
  --gray-70: 84,
    81,
    81;
  --gray-80: 58,
    56,
    56;
  --gray-90: 38,
    38,
    37;
  --green: var(--green-50, hsl(114.6, 22.4%, 49%));
  --green-10: hsl(77.6, 48.6%, 93.1%);
  --green-100: hsl(120, 100%, 5.3%);
  --green-20: hsl(76.6, 48.5%, 81%);
  --green-30: hsl(83.5, 44%, 67.1%);
  --green-40: hsl(96.9, 31.8%, 56.9%);
  --green-50: hsl(114.6, 22.4%, 49%);
  --green-60: hsl(139, 32.3%, 36.5%);
  --green-70: hsl(144.9, 52.8%, 24.1%);
  --green-80: hsl(148.2, 100%, 12.9%);
  --green-90: hsl(134.7, 100%, 8.8%);
  --h1-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h1-size: 2em;
  --h1-weight: 600;
  --h2-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h2-size: 1.75em;
  --h2-weight: 600;
  --h3-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h3-size: 1.5em;
  --h3-weight: 600;
  --h4-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-font: var(--font-text, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --headerFont: var(--font-text-theme, Inter,sans-serif);
  --heading-counter: " ";
  --heading-formatting: var(--text-faint, rgb(169, 168, 165));
  --highlight: rgba(var(--color-accent-rgb), .7);
  --hr-color: var(--background-modifier-border, rgb(226, 224, 220));
  --hr-thickness: 1.5px;
  --icon-color: var(--text-faint, rgb(169, 168, 165));
  --icon-color-active: var(--interactive, rgb(141, 147, 25));
  --icon-color-focused: var(--text-normal, rgb(22, 22, 22));
  --icon-color-hover: var(--text-muted, rgb(84, 81, 81));
  --icon-inverse: rgb(var(--white));
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-on-color: rgb(var(--white));
  --icon-opacity: 1;
  --icon-primary: rgb(var(--gray-100));
  --icon-s-stroke-width: 1px;
  --icon-secondary: rgb(var(--gray-70));
  --icon-size: var(--icon-s, 16px);
  --icon-stroke: var(--icon-m-stroke-width, 1.25px);
  --icon-xs: 16px;
  --icon-xs-stroke-width: 1px;
  --indentation-guide: rgba(var(--mono-rgb-100), .15);
  --indentation-guide-active: rgba(var(--mono-rgb-100), 0.3);
  --inline-title-font: var(--h1-font, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgb(169, 168, 165));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, rgb(169, 168, 165));
  --input-radius: 4px;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0px 0.5px 0.4px hsl(var(--shadow-color) / 0.47),
    0px 0.8px 0.7px -1px hsl(var(--shadow-color) / 0.4),
    0px 1.9px 1.7px -2px hsl(var(--shadow-color) / 0.32),
    0px 4.5px 4px -3px hsl(var(--shadow-color) / 0.25),
    0.1px 9.4px 8.4px -4.1px hsl(var(--shadow-color) / 0.18);
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0px 0.5px 0.5px hsl(var(--shadow-color) / 0.47),
    0px 0.9px 0.8px -1px hsl(var(--shadow-color) / 0.4),
    0px 1.9px 1.7px -2px hsl(var(--shadow-color) / 0.33),
    0px 4.5px 4.1px -3px hsl(var(--shadow-color) / 0.26),
    0.1px 9.4px 8.5px -4px hsl(var(--shadow-color) / 0.19);
  --interactive: rgb(var(--color-accent-rgb));
  --interactive-accent: var(--color-accent-1, rgb(141, 147, 25));
  --interactive-accent-hover: var(--color-accent-2, rgb(141, 147, 25));
  --interactive-accent-hsl: var(--color-accent-hsl, 24.4, 90.8%, 61.8%);
  --lavender: var(--lavender-50, hsl(268deg, 57%, 66%));
  --lavender-10: hsl(264deg, 63%, 97%);
  --lavender-100: hsl(266deg, 100%, 15%);
  --lavender-20: hsl(264deg, 64%, 91%);
  --lavender-30: hsl(264deg, 61%, 84%);
  --lavender-40: hsl(266deg, 58%, 75%);
  --lavender-50: hsl(268deg, 57%, 66%);
  --lavender-60: hsl(270deg, 55%, 56%);
  --lavender-70: hsl(271deg, 57%, 43%);
  --lavender-80: hsl(275deg, 89%, 29%);
  --lavender-90: hsl(273deg, 100%, 21%);
  --layer-1: rgb(var(--white));
  --layer-2: rgb(var(--gray-10));
  --layer-active-1: rgb(var(--gray-30));
  --layer-active-2: rgb(var(--gray-30));
  --layer-hover-1: rgb(var(--gray-10));
  --layer-hover-2: rgba(var(--gray-20), .5);
  --layer-selected-1: rgb(var(--gray-20));
  --layer-selected-2: rgb(var(--gray-20));
  --layer-selected-hover-1: rgba(var(--gray-30), .5);
  --layer-selected-hover-2: rgba(var(--gray-30), .5);
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --light: var(--background-primary, var(--background, rgb(244, 244, 240)));
  --lightgray: var(--background-secondary, var(--background, rgb(244, 244, 240)));
  --link-color: var(--interactive, rgb(141, 147, 25));
  --link-color-hover: var(--interactive, rgb(141, 147, 25));
  --link-external-color: var(--text-accent, rgb(141, 147, 25));
  --link-external-color-hover: var(--text-accent-hover, rgb(141, 147, 25));
  --link-external-style: normal;
  --link-style: normal;
  --link-text-transform: none;
  --link-unresolved-color: var(--text-accent, rgb(141, 147, 25));
  --link-unresolved-opacity: 0.6;
  --list-bullet-border-triangle: 3px;
  --list-bullet-height-bullet-operator: 1px;
  --list-bullet-height-em-dash: 1.5px;
  --list-bullet-height-hyphen: 1.5px;
  --list-bullet-height-triangle: 0px;
  --list-bullet-radius: 0;
  --list-bullet-size: 4px;
  --list-bullet-size-ring: 3px;
  --list-bullet-width-bullet-operator: 1px;
  --list-bullet-width-em-dash: 10px;
  --list-bullet-width-hyphen: 5px;
  --list-bullet-width-triangle: 6px;
  --list-marker-color: var(--text-faint, rgb(169, 168, 165));
  --list-marker-color-collapsed: var(--interactive, rgb(141, 147, 25));
  --list-marker-color-hover: var(--text-muted, rgb(84, 81, 81));
  --menu-background: var(--background-secondary, rgb(244, 244, 240));
  --menu-border-color: var(--background-modifier-border-hover, rgb(226, 224, 220));
  --metadata-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --metadata-divider-color: var(--background-modifier-border, rgb(226, 224, 220));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --metadata-input-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, rgb(22, 22, 22));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --metadata-label-font: var(--font-interface, Inter,sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, rgb(84, 81, 81));
  --metadata-label-text-color-hover: var(--text-muted, rgb(84, 81, 81));
  --metadata-property-background-active: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 12px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 12px);
  --modal-background: var(--background-primary, rgb(244, 244, 240));
  --modal-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --modal-radius: var(--radius-l, 10px);
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(169, 168, 165));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(169, 168, 165));
  --nav-heading-color: var(--text-normal, rgb(22, 22, 22));
  --nav-heading-color-collapsed: var(--text-faint, rgb(169, 168, 165));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(84, 81, 81));
  --nav-heading-color-hover: var(--text-normal, rgb(22, 22, 22));
  --nav-item-background-active: var(--background-selected, rgba(142, 140, 139, 0.2));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-color: var(--text-muted, rgb(84, 81, 81));
  --nav-item-color-active: var(--text-normal, rgb(22, 22, 22));
  --nav-item-color-highlighted: var(--text-accent-hover, rgb(141, 147, 25));
  --nav-item-color-hover: var(--text-normal, rgb(22, 22, 22));
  --nav-item-color-selected: var(--text-normal, rgb(22, 22, 22));
  --nav-item-size: var(--font-ui-small, 12px);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, rgb(169, 168, 165));
  --nav-tag-color-active: var(--text-muted, rgb(84, 81, 81));
  --nav-tag-color-hover: var(--text-muted, rgb(84, 81, 81));
  --orange: var(--orange-40, hsl(24.4, 90.8%, 61.8%));
  --orange-10: hsl(28.7, 85.2%, 94.7%);
  --orange-100: hsl(357.8, 100%, 10.6%);
  --orange-20: hsl(27.8, 79.4%, 86.7%);
  --orange-30: hsl(30.2, 98.6%, 72%);
  --orange-40: hsl(24.4, 90.8%, 61.8%);
  --orange-50: hsl(18.3, 75%, 54.5%);
  --orange-60: hsl(12.8, 60.5%, 45.7%);
  --orange-70: hsl(358, 63.4%, 37.5%);
  --orange-80: hsl(342.1, 82.5%, 24.7%);
  --orange-90: hsl(346.4, 100%, 16.5%);
  --overlay: rgba(var(--gray-100), .5);
  --pdf-background: var(--background-primary, rgb(244, 244, 240));
  --pdf-page-background: var(--background-primary, rgb(244, 244, 240));
  --pdf-sidebar-background: var(--background-primary, rgb(244, 244, 240));
  --pill-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --pill-border-color-hover: var(--background-modifier-border-hover, rgb(226, 224, 220));
  --pill-color: var(--text-muted, rgb(84, 81, 81));
  --pill-color-hover: var(--text-normal, rgb(22, 22, 22));
  --pill-color-remove: var(--text-faint, rgb(169, 168, 165));
  --pill-color-remove-hover: var(--text-accent, rgb(141, 147, 25));
  --pink: var(--pink-50, hsl(348.5, 79.3%, 63.9%));
  --pink-10: hsl(352.5, 100%, 96.9%);
  --pink-100: hsl(357.8, 100%, 10.6%);
  --pink-20: hsl(355.6, 100%, 92%);
  --pink-30: hsl(352.8, 94.9%, 84.5%);
  --pink-40: hsl(351.4, 86.2%, 74.5%);
  --pink-50: hsl(348.5, 79.3%, 63.9%);
  --pink-60: hsl(343.4, 62.8%, 49.6%);
  --pink-70: hsl(339.4, 71.6%, 35.9%);
  --pink-80: hsl(342.1, 82.5%, 24.7%);
  --pink-90: hsl(346.4, 100%, 16.5%);
  --pistachio: var(--pistachio-50, hsl(63, 70.9%, 33.7%));
  --pistachio-10: hsl(69.2, 37.1%, 93.1%);
  --pistachio-100: hsl(52.8, 100%, 4.9%);
  --pistachio-20: hsl(67.1, 37.8%, 82.4%);
  --pistachio-30: hsl(64.8, 36.9%, 67.1%);
  --pistachio-40: hsl(63.5, 42.6%, 47.8%);
  --pistachio-50: hsl(63, 70.9%, 33.7%);
  --pistachio-60: hsl(62.1, 100%, 22.7%);
  --pistachio-70: hsl(61.4, 100%, 16.7%);
  --pistachio-80: hsl(60, 100%, 11.6%);
  --pistachio-90: hsl(58.5, 100%, 7.8%);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, rgb(244, 244, 240));
  --prompt-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --radius-l: 10px;
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(244, 244, 240) 65%, transparent) linear-gradient(rgb(244, 244, 240), color-mix(in srgb, rgb(244, 244, 240) 65%, transparent)));
  --red: var(--red-60, hsl(9.6, 66.2%, 46.5%));
  --red-10: hsl(12.6, 100%, 96.3%);
  --red-100: hsl(357.8, 100%, 10.6%);
  --red-20: hsl(12.9, 100%, 90%);
  --red-30: hsl(12, 100%, 81.4%);
  --red-40: hsl(11.7, 94.7%, 70.4%);
  --red-50: hsl(11.2, 88.7%, 58.4%);
  --red-60: hsl(9.6, 66.2%, 46.5%);
  --red-70: hsl(358, 63.4%, 37.5%);
  --red-80: hsl(342.1, 82.5%, 24.7%);
  --red-90: hsl(346.4, 100%, 16.5%);
  --ribbon-background: var(--background-secondary, rgb(244, 244, 240));
  --ribbon-background-collapsed: var(--background-primary, rgb(244, 244, 240));
  --scrollbar-radius: var(--radius-l, 10px);
  --search-clear-button-color: var(--text-muted, rgb(84, 81, 81));
  --search-icon-color: var(--text-muted, rgb(84, 81, 81));
  --search-result-background: var(--background-primary, rgb(244, 244, 240));
  --secondary: var(--text-accent, var(--color-accent, rgb(141, 147, 25)));
  --setting-group-heading-color: var(--text-normal, rgb(22, 22, 22));
  --setting-group-heading-size: var(--font-ui-medium, 14px);
  --setting-items-background: var(--background-primary-alt, rgb(253, 254, 254));
  --setting-items-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --setting-items-radius: var(--radius-l, 10px);
  --shadow-color: 0deg 5% 59%;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(84, 81, 81));
  --shiki-code-background: var(--code-background, rgba(226, 224, 220, 0.5));
  --shiki-code-comment: var(--text-faint, rgb(169, 168, 165));
  --shiki-code-normal: var(--text-muted, rgb(84, 81, 81));
  --shiki-code-punctuation: var(--text-muted, rgb(84, 81, 81));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --shiki-gutter-text-color: var(--text-faint, rgb(169, 168, 165));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(84, 81, 81));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(84, 81, 81));
  --shiki-terminal-dots-color: var(--text-faint, rgb(169, 168, 165));
  --shiki-tooltip-background: var(--background-modifier-message, rgb(253, 254, 254));
  --sidebar-markdown-font-size: var(--font-small, 0.933em);
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, rgb(226, 224, 220));
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-thumb-y: -7px;
  --slider-track-background: var(--background-modifier-border, rgb(226, 224, 220));
  --status-bar-background: var(--background-secondary, rgb(244, 244, 240));
  --status-bar-border-color: var(--divider-color, rgb(226, 224, 220));
  --status-bar-text-color: var(--text-muted, rgb(84, 81, 81));
  --suggestion-background: var(--background-primary, rgb(244, 244, 240));
  --tab-background-active: var(--background-primary, rgb(244, 244, 240));
  --tab-container-background: var(--background-secondary, rgb(244, 244, 240));
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border, rgb(226, 224, 220));
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, rgb(226, 224, 220));
  --tab-stacked-font-size: var(--font-ui-small, 12px);
  --tab-switcher-background: var(--background-secondary, rgb(244, 244, 240));
  --tab-text-color: var(--text-faint, rgb(169, 168, 165));
  --tab-text-color-active: var(--text-muted, rgb(84, 81, 81));
  --tab-text-color-focused: var(--text-faint, rgb(169, 168, 165));
  --tab-text-color-focused-active: var(--text-normal, rgb(22, 22, 22));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(22, 22, 22));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(141, 147, 25));
  --table-add-button-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --table-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(141, 147, 25));
  --table-drag-handle-color: var(--text-faint, rgb(169, 168, 165));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(253, 254, 254));
  --table-header-border-color: var(--table-border-color, rgb(226, 224, 220));
  --table-header-color: var(--text-muted, rgb(84, 81, 81));
  --table-header-size: var(--font-smaller, 0.875em);
  --table-header-weight: var(--font-semibold, 600);
  --table-hover-highlight-color: rgba(var(--color-accent-rgb), .15);
  --table-selection-border-color: var(--interactive-accent, rgb(141, 147, 25));
  --table-sticky-height: 600px;
  --tag-background: rgba(var(--color-accent-rgb), 0.15);
  --tag-background-hover: rgba(var(--color-accent-rgb), 0.25);
  --tag-border-color: rgba(var(--color-accent-rgb), 0.15);
  --tag-border-color-hover: rgba(var(--color-accent-rgb), 0.25);
  --tag-color: var(--text-accent, rgb(141, 147, 25));
  --tag-color-hover: var(--text-accent, rgb(141, 147, 25));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, rgb(141, 147, 25)));
  --text-accent: var(--color-accent, rgb(141, 147, 25));
  --text-accent-hover: var(--color-accent-2, rgb(141, 147, 25));
  --text-code: var(--pink-60, hsl(343.4, 62.8%, 49.6%));
  --text-error: var(--red, hsl(9.6, 66.2%, 46.5%));
  --text-faint: var(--text-placeholder, rgb(169, 168, 165));
  --text-highlight-bg: var(--highlight, rgba(141, 147, 25, 0.7));
  --text-highlight-bg-active: var(--highlight, rgba(141, 147, 25, 0.7));
  --text-muted: var(--text-secondary, rgb(84, 81, 81));
  --text-normal: var(--text-primary, rgb(22, 22, 22));
  --text-on-accent: rgb(var(--white));
  --text-placeholder: rgb(var(--gray-40));
  --text-primary: rgb(var(--gray-100));
  --text-secondary: rgb(var(--gray-70));
  --text-selection: rgba(var(--color-accent-rgb), .5);
  --text-success: var(--green, hsl(114.6, 22.4%, 49%));
  --textHighlight: var(--text-highlight-bg, var(--highlight, rgba(141, 147, 25, 0.7)));
  --titleFont: var(--font-text-theme, Inter,sans-serif);
  --titlebar-background: var(--background-secondary, rgb(244, 244, 240));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(244, 244, 240));
  --titlebar-border-color: var(--background-modifier-border, rgb(226, 224, 220));
  --titlebar-text-color: var(--text-muted, rgb(84, 81, 81));
  --titlebar-text-color-focused: var(--text-normal, rgb(22, 22, 22));
  --titlebar-text-color-highlighted: var(--text-accent-hover, rgb(141, 147, 25));
  --toggle-radius: 100vmax;
  --toggle-s-thumb-height: 14px;
  --toggle-s-thumb-width: 14px;
  --toggle-s-width: 32px;
  --toggle-thumb-color: rgb(var(--white));
  --toggle-thumb-height: 20px;
  --toggle-thumb-radius: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 48px;
  --tracking-0: 0px;
  --tracking-1: .16px;
  --tracking-2: .32px;
  --tracking-3: .64px;
  --tracking-4: .96px;
  --vault-name-color: var(--text-normal, rgb(22, 22, 22));
  --vault-name-font-size: var(--font-ui-medium, 14px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, rgb(22, 22, 22));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(22, 22, 22));
  --vault-profile-font-size: var(--font-ui-small, 12px);
  --viridian: var(--viridian-50, hsl(151.5, 24.9%, 48%));
  --viridian-10: hsl(96, 18.5%, 94.7%);
  --viridian-100: hsl(156.9, 100%, 5.1%);
  --viridian-20: hsl(100, 21.1%, 86.1%);
  --viridian-30: hsl(111.8, 17.5%, 75.3%);
  --viridian-40: hsl(144.3, 19%, 61.8%);
  --viridian-50: hsl(151.5, 24.9%, 48%);
  --viridian-60: hsl(161, 34.8%, 35.5%);
  --viridian-70: hsl(165.7, 52.1%, 23.7%);
  --viridian-80: hsl(168, 100%, 12.7%);
  --viridian-90: hsl(163.6, 100%, 8.6%);
  --white: 253,
    254,
    254;
  --yellow: var(--yellow-30, hsl(40.2, 87.2%, 63.1%));
  --yellow-10: hsl(44.3, 95.5%, 91.4%);
  --yellow-100: hsl(3.5, 100%, 10.2%);
  --yellow-20: hsl(41.1, 88.1%, 80.2%);
  --yellow-30: hsl(40.2, 87.2%, 63.1%);
  --yellow-40: hsl(41.6, 70.4%, 49%);
  --yellow-50: hsl(42.7, 100%, 36.1%);
  --yellow-60: hsl(39.5, 100%, 29.8%);
  --yellow-70: hsl(35, 100%, 23.5%);
  --yellow-80: hsl(28.4, 100%, 18.2%);
  --yellow-90: hsl(19.4, 100%, 13.9%);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(244, 244, 240));
  background-color: var(--tab-container-background, rgb(244, 244, 240));
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(244, 244, 240));
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(244, 244, 240));
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(244, 244, 240));
  background-color: var(--tab-container-background, rgb(244, 244, 240));
  border-left-color: rgb(226, 224, 220);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body html {
  --duration-fast-1: 70ms;
  --duration-fast-2: 110ms;
  --duration-moderate-1: 150ms;
  --duration-moderate-2: 240ms;
  --duration-slow-1: 400ms;
  --duration-slow-2: 700ms;
  --elevation-1: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  --elevation-2: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  --font-scale-0: 1rem;
  --font-scale-00: .875rem;
  --font-scale-000: .75rem;
  --font-scale-1: 1.125rem;
  --font-scale-10: 3.75rem;
  --font-scale-2: 1.25rem;
  --font-scale-3: 1.5rem;
  --font-scale-4: 1.75rem;
  --font-scale-5: 2rem;
  --font-scale-6: 2.25rem;
  --font-scale-7: 2.625rem;
  --font-scale-8: 3rem;
  --font-scale-9: 3.375rem;
  --leading-0: 1em;
  --leading-1: 1.125em;
  --leading-10: 2.75em;
  --leading-2: 1.25em;
  --leading-3: 1.375em;
  --leading-4: 1.5em;
  --leading-5: 1.625em;
  --leading-6: 1.75em;
  --leading-7: 1.875em;
  --leading-8: 2.25em;
  --leading-9: 2.5em;
  --motion-entrance-expressive: cubic-bezier(0, 0, 0.3, 1);
  --motion-entrance-productive: cubic-bezier(0, 0, 0.38, 0.9);
  --motion-exit-expressive: cubic-bezier(0.4, 0.14, 1, 1);
  --motion-exit-productive: cubic-bezier(0.2, 0, 1, 0.9);
  --motion-standard-expressive: cubic-bezier(0.4, 0.14, 0.3, 1);
  --motion-standard-productive: cubic-bezier(0.2, 0, 0.38, 0.9);
  --size-0: 0px;
  --size-1: 2px;
  --size-10: 64px;
  --size-11: 80px;
  --size-12: 96px;
  --size-13: 160px;
  --size-2: 4px;
  --size-3: 8px;
  --size-4: 12px;
  --size-5: 16px;
  --size-6: 24px;
  --size-7: 32px;
  --size-8: 40px;
  --size-9: 48px;
  --tracking-0: 0px;
  --tracking-1: .16px;
  --tracking-2: .32px;
  --tracking-3: .64px;
  --tracking-4: .96px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(141, 147, 25, 0.7));
  color: var(--text-normal, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body del {
  color: rgb(22, 22, 22);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(22, 22, 22));
  font-size: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(169, 168, 165);
  border-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(102, 153, 97));
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 81, 81) none 0px;
  text-decoration-color: rgb(84, 81, 81);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration-color: rgb(141, 147, 25);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration-color: rgb(141, 147, 25);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(141, 147, 25));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(141, 147, 25) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(141, 147, 25));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body dt {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ol > li {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul > li {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(169, 168, 165));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body table {
  color: rgb(22, 22, 22);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 602px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(22, 22, 22);
  border-bottom-width: 0px;
  border-left-color: rgb(22, 22, 22);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(22, 22, 22);
  border-right-width: 0px;
  border-top-color: rgb(22, 22, 22);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(22, 22, 22));
  font-weight: var(--font-normal, 400);
  padding-left: 16px;
}

html[saved-theme="light"] body th {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(226, 224, 220);
  border-right-width: 0px;
  border-top-color: rgb(226, 224, 220);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(84, 81, 81));
  padding-left: 16px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(226, 224, 220, 0.5));
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: var(--code-normal-inline, rgb(236, 90, 118));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(226, 224, 220, 0.5));
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
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body figcaption {
  color: rgb(22, 22, 22);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(226, 224, 220, 0.5));
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(253, 254, 254));
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(141, 147, 25);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(169, 168, 165);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  transition: box-shadow 0.24s cubic-bezier(0, 0, 0.3, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(22, 22, 22);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(169, 168, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(22, 22, 22);
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' fill='rgb(8, 8, 8)' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M9,10.6L10.6,9L23,21.4L21.4,23L9,10.6z' class='st0'/%3E%3Cpath d='M6.1,6.1C0.6,11.5,0.6,20.3,6,25.8c0,0,0.1,0.1,0.1,0.1c5.4,5.5,14.2,5.5,19.7,0.1c0,0,0.1-0.1,0.1-0.1%09c5.5-5.4,5.5-14.2,0.1-19.7c0,0-0.1-0.1-0.1-0.1C20.5,0.6,11.7,0.6,6.2,6C6.2,6,6.1,6.1,6.1,6.1z M24.8,17.1l-17.6,0v-2.2l17.6,0%09V17.1z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0,0h32v32H0V0z' class='st0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' fill='rgb(8, 8, 8)' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M9,10.6L10.6,9L23,21.4L21.4,23L9,10.6z' class='st0'/%3E%3Cpath d='M6.1,6.1C0.6,11.5,0.6,20.3,6,25.8c0,0,0.1,0.1,0.1,0.1c5.4,5.5,14.2,5.5,19.7,0.1c0,0,0.1-0.1,0.1-0.1%09c5.5-5.4,5.5-14.2,0.1-19.7c0,0-0.1-0.1-0.1-0.1C20.5,0.6,11.7,0.6,6.2,6C6.2,6,6.1,6.1,6.1,6.1z M24.8,17.1l-17.6,0v-2.2l17.6,0%09V17.1z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0,0h32v32H0V0z' class='st0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26zm-1.1-5h2.2v-9h-2.2v9z' class='st0'/%3E%3Cpath d='M16 6.2 4.6 28h22.7L16 6.2zM14.9 12h2.2v9h-2.2v-9zM16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26z'/%3E%3Cpath d='M29 30H3c-.6 0-1-.4-1-1 0-.2 0-.3.1-.5l13-25c.3-.5.9-.6 1.4-.4.2.1.3.2.4.4l13 25c.3.5.1 1.1-.4 1.3-.2.2-.3.2-.5.2zM4.7 28h22.7L16 6.2 4.7 28z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='st0'/%3E%3Cpath d='M-2.9 15.3h26.4v2.9H-2.9z' transform='rotate(-62.979 10.321 16.712)'/%3E%3Cpath d='M8.3 15.6h26.4v2.9H8.3z' transform='rotate(-117.021 21.471 17.086)'/%3E%3Cpath d='M3.9 26.2h24.4v2.9H3.9z' transform='matrix(-.9999 -.01155 .01155 -.9999 31.881 55.41)'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cstyle%3E.st0%7Bfill:none%7D%3C/style%3E%3Cpath id='inner-path' d='M16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26zm-1.1-5h2.2v-9h-2.2v9z' class='st0'/%3E%3Cpath d='M16 6.2 4.6 28h22.7L16 6.2zM14.9 12h2.2v9h-2.2v-9zM16 26c-.8 0-1.5-.7-1.5-1.5S15.2 23 16 23s1.5.7 1.5 1.5S16.8 26 16 26z'/%3E%3Cpath d='M29 30H3c-.6 0-1-.4-1-1 0-.2 0-.3.1-.5l13-25c.3-.5.9-.6 1.4-.4.2.1.3.2.4.4l13 25c.3.5.1 1.1-.4 1.3-.2.2-.3.2-.5.2zM4.7 28h22.7L16 6.2 4.7 28z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='st0'/%3E%3Cpath d='M-2.9 15.3h26.4v2.9H-2.9z' transform='rotate(-62.979 10.321 16.712)'/%3E%3Cpath d='M8.3 15.6h26.4v2.9H8.3z' transform='rotate(-117.021 21.471 17.086)'/%3E%3Cpath d='M3.9 26.2h24.4v2.9H3.9z' transform='matrix(-.9999 -.01155 .01155 -.9999 31.881 55.41)'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z'/%3E%3Cpath id='inner-path' d='M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z' class='cls-1'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z'/%3E%3Cpath id='inner-path' d='M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25Zm1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.378 2.378 0 0 0-2.375 2.375v.638h-2.25v-.638A4.628 4.628 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246Z' class='cls-1'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
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

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m16 2-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.963 11.963 0 0 1 16 28Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 81, 205);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m27.45 15.11-22-11a1 1 0 0 0-1.08.12 1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='m27.45 15.11-22-11a1 1 0 0 0-1.08.12 1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M28.707 19.293 26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M28.707 19.293 26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M24 2H8a2 2 0 0 0-2 2v26l10-5.054L26 30V4a2 2 0 0 0-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='m16 11 8-2.1c-.9-1.7-2.3-3-4-3.9V2h-2v2.2c-1.3-.3-2.7-.3-4 0V2h-2v3c-1.7.9-3.1 2.2-4 3.9l8 2.1z'/%3E%3Cpath d='m29.8 20 .3-2-5.1-.8v-4.4l5.1-1.4-.5-1.9-4.8 1.3-7.8 2V17h-2v-4.2l-7.7-2.1-4.8-1.2-.5 1.9 5 1.4v4.4l-5.2.8.3 2 4.9-.8c0 1.2.3 2.4.8 3.6l-4.5 4.5 1.4 1.4 4.2-4.2c3.1 3.9 8.7 4.6 12.6 1.6.6-.5 1.1-1 1.6-1.6l4.2 4.2 1.4-1.4-4.5-4.5c.5-1.1.8-2.3.8-3.6l4.8.8z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='m16 11 8-2.1c-.9-1.7-2.3-3-4-3.9V2h-2v2.2c-1.3-.3-2.7-.3-4 0V2h-2v3c-1.7.9-3.1 2.2-4 3.9l8 2.1z'/%3E%3Cpath d='m29.8 20 .3-2-5.1-.8v-4.4l5.1-1.4-.5-1.9-4.8 1.3-7.8 2V17h-2v-4.2l-7.7-2.1-4.8-1.2-.5 1.9 5 1.4v4.4l-5.2.8.3 2 4.9-.8c0 1.2.3 2.4.8 3.6l-4.5 4.5 1.4 1.4 4.2-4.2c3.1 3.9 8.7 4.6 12.6 1.6.6-.5 1.1-1 1.6-1.6l4.2 4.2 1.4-1.4-4.5-4.5c.5-1.1.8-2.3.8-3.6l4.8.8z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 90, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 2h5v14H2zM23 2H9v14.803l3.042 4.563.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 2h5v14H2zM23 2H9v14.803l3.042 4.563.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='32' height='32' enable-background='new 0 0 32 32'%3E%3Cpath d='M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='32' height='32' enable-background='new 0 0 32 32'%3E%3Cpath d='M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37 1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56 1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt' transform='rotate(-180 16 16)'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37 1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56 1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.09 1.09 0 0 1-.39-.08Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt' transform='rotate(-180 16 16)'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath id='inner-path' d='M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z' class='cls-1'/%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath id='inner-path' d='M16 8a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 13.875h-2.875v-8H13v2.25h1.875v5.75H12v2.25h8Z' class='cls-1'/%3E%3Cpath d='M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 6a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 16 8Zm4 16.125h-8v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath d='M11 22h10v4H11v-4zm2 4h6v4h-6v-4zm8-4c0-.9.5-1.5 1.5-2.4 2.3-1.8 3.6-4.7 3.5-7.6 0-5.5-4.5-10-10-10S6 6.5 6 12c-.1 2.9 1.1 5.8 3.5 7.6 1 .9 1.5 1.5 1.5 2.4'/%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath d='M11 22h10v4H11v-4zm2 4h6v4h-6v-4zm8-4c0-.9.5-1.5 1.5-2.4 2.3-1.8 3.6-4.7 3.5-7.6 0-5.5-4.5-10-10-10S6 6.5 6 12c-.1 2.9 1.1 5.8 3.5 7.6 1 .9 1.5 1.5 1.5 2.4'/%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
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

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' width='32' height='32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13 11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle id='_Inner-Path_' cx='16' cy='13' r='4' class='cls-1' data-name='&ltInner-Path&gt'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' id='icon' width='32' height='32'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:none%7D%3C/style%3E%3C/defs%3E%3Cpath d='M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13 11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4Z'/%3E%3Ccircle id='_Inner-Path_' cx='16' cy='13' r='4' class='cls-1' data-name='&ltInner-Path&gt'/%3E%3Cpath id='_Transparent_Rectangle_' d='M0 0h32v32H0z' class='cls-1' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85Zm-7.65-6 2.62-6.56L25.45 23ZM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85Zm-7.65-6 2.62-6.56L25.45 23ZM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1Zm-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M24 2v2h2v6a4 4 0 0 1-8 0V4h2V2h-4v8a6.005 6.005 0 0 0 5 5.91V22a6 6 0 0 1-12 0v-6.142a4 4 0 1 0-2 0V22a8 8 0 0 0 16 0v-6.09A6.005 6.005 0 0 0 28 10V2ZM6 12a2 2 0 1 1 2 2 2.002 2.002 0 0 1-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M24 2v2h2v6a4 4 0 0 1-8 0V4h2V2h-4v8a6.005 6.005 0 0 0 5 5.91V22a6 6 0 0 1-12 0v-6.142a4 4 0 1 0-2 0V22a8 8 0 0 0 16 0v-6.09A6.005 6.005 0 0 0 28 10V2ZM6 12a2 2 0 1 1 2 2 2.002 2.002 0 0 1-2-2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M28.586 13.314 30 11.9 20 2l-1.314 1.415 1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583 3.41 30l8.911-8.909L18 26.748l1.393-1.414-1.716-1.716 9.724-11.49Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M28.586 13.314 30 11.9 20 2l-1.314 1.415 1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583 3.41 30l8.911-8.909L18 26.748l1.393-1.414-1.716-1.716 9.724-11.49Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 16h5v14H2zM23 30H9V15.197l3.042-4.563.845-5.917A2.01 2.01 0 0 1 14.867 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.008 7.008 0 0 1-7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M2 16h5v14H2zM23 30H9V15.197l3.042-4.563.845-5.917A2.01 2.01 0 0 1 14.867 3H15a3.003 3.003 0 0 1 3 3v6h8a4.005 4.005 0 0 1 4 4v7a7.008 7.008 0 0 1-7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 4a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='Layer 1'%3E%3Cpath d='M20 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447l-3.999-7.997a.891.891 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.015 3.015 0 0 0 17 5.184V2h-2v3.184A3.015 3.015 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447L8.617 9h4.56A3.015 3.015 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.015 3.015 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16ZM7 19a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 7 19Zm2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9 10a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 25 19Zm0-8.764L27.382 15h-4.764Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' data-name='Layer 1'%3E%3Cpath d='M20 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447l-3.999-7.997a.891.891 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.015 3.015 0 0 0 17 5.184V2h-2v3.184A3.015 3.015 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0 1 1 0 0 0-.105-.447L8.617 9h4.56A3.015 3.015 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.015 3.015 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16ZM7 19a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 7 19Zm2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm9 10a2.996 2.996 0 0 1-2.815-2h5.63A2.996 2.996 0 0 1 25 19Zm0-8.764L27.382 15h-4.764Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(99, 149, 156);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3Cpath d='M29 13h-2c-.1-1.6-.8-3.1-2-4.1V5c0-.6-.4-1-1-1-.2 0-.4.1-.6.2L19.7 7H15c-5.5 0-9.5 3.2-9.9 8H5c-.6 0-1-.4-1-1v-2H2v2c0 1.7 1.3 3 3 3h.1c.3 2.7 1.7 5 3.9 6.6V27c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-2h3v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3.4c1.5-.7 2.5-2 2.8-3.6H29c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm-9 0h-7v-2h7v2z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0V0z'/%3E%3Cpath d='M29 13h-2c-.1-1.6-.8-3.1-2-4.1V5c0-.6-.4-1-1-1-.2 0-.4.1-.6.2L19.7 7H15c-5.5 0-9.5 3.2-9.9 8H5c-.6 0-1-.4-1-1v-2H2v2c0 1.7 1.3 3 3 3h.1c.3 2.7 1.7 5 3.9 6.6V27c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-2h3v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3.4c1.5-.7 2.5-2 2.8-3.6H29c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1zm-9 0h-7v-2h7v2z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z'/%3E%3Cpath d='M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M16 30a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z'/%3E%3Cpath d='M20.59 22 15 16.41V7h2v8.58l5 5.01L20.59 22z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 141, 69);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M22 4H10a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2Zm0 2v2H10V6ZM10 28V10h12v18Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath d='M22 4H10a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2h12a2.003 2.003 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2Zm0 2v2H10V6ZM10 28V10h12v18Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586 3.414 26 13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 153, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 7h-2V6a2.002 2.002 0 0 0-2-2H10a2.002 2.002 0 0 0-2 2v1H6a2.002 2.002 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.169 8.169 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.966 7.966 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2.002 2.002 0 0 0-2-2ZM8 14a2.002 2.002 0 0 1-2-2V9h2Zm18-2a2.002 2.002 0 0 1-2 2V9h2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 7h-2V6a2.002 2.002 0 0 0-2-2H10a2.002 2.002 0 0 0-2 2v1H6a2.002 2.002 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.169 8.169 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.966 7.966 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2.002 2.002 0 0 0-2-2ZM8 14a2.002 2.002 0 0 1-2-2V9h2Zm18-2a2.002 2.002 0 0 1-2 2V9h2Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 189, 79);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' xml:space='preserve'%3E%3Cpath fill='none' d='M0 0h32v32H0z'/%3E%3Cpath d='M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm5.4 21L16 17.6 10.6 23 9 21.4l5.4-5.4L9 10.6 10.6 9l5.4 5.4L21.4 9l1.6 1.6-5.4 5.4 5.4 5.4-1.6 1.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(197, 65, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(36, 20%, 95.1%)' viewBox='0 0 14 14'%3E%3Cpolygon points='5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039'%3E%3C/polygon%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 244, 240);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 104,
    145,
    181);
  background: rgba(104, 145, 181, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 236,
    90,
    118);
  background: rgba(236, 90, 118, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(236, 90, 118, 0.3);
  border-left-color: rgba(236, 90, 118, 0.3);
  border-right-color: rgba(236, 90, 118, 0.3);
  border-top-color: rgba(236, 90, 118, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 243,
    90,
    55);
  background: rgba(243, 90, 55, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(243, 90, 55, 0.3);
  border-left-color: rgba(243, 90, 55, 0.3);
  border-right-color: rgba(243, 90, 55, 0.3);
  border-top-color: rgba(243, 90, 55, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 165,
    119,
    218);
  background: rgba(165, 119, 218, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(165, 119, 218, 0.3);
  border-left-color: rgba(165, 119, 218, 0.3);
  border-right-color: rgba(165, 119, 218, 0.3);
  border-top-color: rgba(165, 119, 218, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 226,
    105,
    52);
  background: rgba(226, 105, 52, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(226, 105, 52, 0.3);
  border-left-color: rgba(226, 105, 52, 0.3);
  border-right-color: rgba(226, 105, 52, 0.3);
  border-top-color: rgba(226, 105, 52, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 99,
    149,
    156);
  background: rgba(99, 149, 156, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 104,
    145,
    181);
  background: rgba(104, 145, 181, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 141,
    147,
    25);
  background: rgba(141, 147, 25, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(141, 147, 25, 0.3);
  border-left-color: rgba(141, 147, 25, 0.3);
  border-right-color: rgba(141, 147, 25, 0.3);
  border-top-color: rgba(141, 147, 25, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--gray-50, 142,
    140,
    139);
  background: rgba(142, 140, 139, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(142, 140, 139, 0.3);
  border-left-color: rgba(142, 140, 139, 0.3);
  border-right-color: rgba(142, 140, 139, 0.3);
  border-top-color: rgba(142, 140, 139, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 102,
    153,
    97);
  background: rgba(102, 153, 97, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(102, 153, 97, 0.3);
  border-left-color: rgba(102, 153, 97, 0.3);
  border-right-color: rgba(102, 153, 97, 0.3);
  border-top-color: rgba(102, 153, 97, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 92,
    153,
    124);
  background: rgba(92, 153, 124, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(92, 153, 124, 0.3);
  border-left-color: rgba(92, 153, 124, 0.3);
  border-right-color: rgba(92, 153, 124, 0.3);
  border-top-color: rgba(92, 153, 124, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 99,
    149,
    156);
  background: rgba(99, 149, 156, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(99, 149, 156, 0.3);
  border-left-color: rgba(99, 149, 156, 0.3);
  border-right-color: rgba(99, 149, 156, 0.3);
  border-top-color: rgba(99, 149, 156, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 184,
    131,
    0);
  background: rgba(184, 131, 0, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.2);
  border-bottom-color: rgba(184, 131, 0, 0.3);
  border-left-color: rgba(184, 131, 0, 0.3);
  border-right-color: rgba(184, 131, 0, 0.3);
  border-top-color: rgba(184, 131, 0, 0.3);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 104,
    145,
    181;
  border-bottom-color: rgb(104, 145, 181);
  border-left-color: rgb(104, 145, 181);
  border-right-color: rgb(104, 145, 181);
  border-top-color: rgb(104, 145, 181);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 145, 181));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(22, 22, 22);
  padding-left: 24px;
  padding-right: 12px;
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
  background-color: rgb(253, 254, 254);
  border-bottom-color: var(--border-strong-1, rgb(142, 140, 139));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(244, 244, 240));
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(22, 22, 22);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(22, 22, 22) none 0px;
  text-decoration-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(226, 224, 220);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(253, 254, 254);
  border-bottom-color: var(--border-strong-1, rgb(142, 140, 139));
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(142, 140, 139, 0.12));
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 16px);
  --icon-stroke: var(--icon-xs-stroke-width, 1px);
  --pill-background: var(--tag-background, rgba(141, 147, 25, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(141, 147, 25, 0.25));
  --pill-border-color: var(--tag-border-color, rgba(141, 147, 25, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(141, 147, 25, 0.25));
  --pill-color: var(--tag-color, rgb(141, 147, 25));
  --pill-color-hover: var(--tag-color-hover, rgb(141, 147, 25));
  --pill-color-remove: var(--tag-color, rgb(141, 147, 25));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(141, 147, 25));
  background-color: var(--pill-background, rgba(141, 147, 25, 0.15));
  border-bottom-color: rgba(141, 147, 25, 0.15);
  border-left-color: rgba(141, 147, 25, 0.15);
  border-right-color: rgba(141, 147, 25, 0.15);
  border-top-color: rgba(141, 147, 25, 0.15);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(141, 147, 25);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 600);
  color: var(--h1-color, rgb(22, 22, 22));
  font-family: var(--h1-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(22, 22, 22));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, rgb(22, 22, 22));
  font-family: var(--h2-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(22, 22, 22));
  font-family: var(--inline-title-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgb(22, 22, 22));
  font-family: var(--h3-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(22, 22, 22));
  font-family: var(--h4-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(22, 22, 22));
  font-family: var(--h5-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(22, 22, 22));
  font-family: var(--h6-font, "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 104,
    145,
    181);
  border-bottom-color: rgba(104, 145, 181, 0.3);
  border-left-color: rgba(104, 145, 181, 0.3);
  border-right-color: rgba(104, 145, 181, 0.3);
  border-top-color: rgba(104, 145, 181, 0.3);
  padding-bottom: 16px;
  padding-left: 12px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(22, 22, 22);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: var(--icon-color, rgb(169, 168, 165));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(244, 244, 240));
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: var(--status-bar-text-color, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(84, 81, 81);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(22, 22, 22);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(84, 81, 81));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 81, 81);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 81, 81);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(84, 81, 81));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(169, 168, 165);
  border-left-color: rgb(169, 168, 165);
  border-right-color: rgb(169, 168, 165);
  border-top-color: rgb(169, 168, 165);
  color: var(--icon-color, rgb(169, 168, 165));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(169, 168, 165);
  stroke: rgb(169, 168, 165);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(169, 168, 165));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(22, 22, 22));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(244, 244, 240));
  border-color: rgb(22, 22, 22);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(156, 145, 145, 0.47) 0px 0.5px 0.4px 0px, rgba(156, 145, 145, 0.4) 0px 0.8px 0.7px -1px, rgba(156, 145, 145, 0.32) 0px 1.9px 1.7px -2px, rgba(156, 145, 145, 0.25) 0px 4.5px 4px -3px, rgba(156, 145, 145, 0.18) 0.1px 9.4px 8.4px -4.1px);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0));
  border-color: rgb(226, 224, 220);
  color: var(--table-header-color, rgb(84, 81, 81));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(226, 224, 220);
  border-left-color: rgb(226, 224, 220);
  border-right-color: rgb(226, 224, 220);
  border-top-color: rgb(226, 224, 220);
  color: var(--text-muted, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: rgb(84, 81, 81);
  font-family: "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(226, 224, 220);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 81, 81);
}

html[saved-theme="light"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 16px);
  --icon-stroke: var(--icon-xs-stroke-width, 1px);
  --pill-background: var(--tag-background, rgba(141, 147, 25, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(141, 147, 25, 0.25));
  --pill-border-color: var(--tag-border-color, rgba(141, 147, 25, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, rgba(141, 147, 25, 0.25));
  --pill-color: var(--tag-color, rgb(141, 147, 25));
  --pill-color-hover: var(--tag-color-hover, rgb(141, 147, 25));
  --pill-color-remove: var(--tag-color, rgb(141, 147, 25));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(141, 147, 25));
  background-color: var(--pill-background, rgba(141, 147, 25, 0.15));
  color: var(--pill-color, rgb(141, 147, 25));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 81, 81);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(244, 244, 240));
  color: var(--text-normal, rgb(22, 22, 22));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(244, 244, 240));
  border-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(244, 244, 240));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(22, 22, 22);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(244, 244, 240));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(22, 22, 22));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(253, 254, 254);
  border-bottom-color: var(--border-strong-1, rgb(142, 140, 139));
  border-bottom-width: 1px;
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: var(--text-normal, rgb(84, 81, 81));
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--layer-1, rgb(253, 254, 254));
  border-bottom-color: rgb(84, 81, 81);
  border-left-color: rgb(84, 81, 81);
  border-right-color: rgb(84, 81, 81);
  border-top-color: rgb(84, 81, 81);
  color: var(--code-normal, rgb(84, 81, 81));
  font-family: var(--font-monospace, "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(22, 22, 22);
  border-left-color: rgb(22, 22, 22);
  border-right-color: rgb(22, 22, 22);
  border-top-color: rgb(22, 22, 22);
}

html[saved-theme="light"] body sub {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body summary {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body sup {
  color: rgb(22, 22, 22);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(141, 147, 25, 0.15));
  border-bottom-color: rgba(141, 147, 25, 0.15);
  border-left-color: rgba(141, 147, 25, 0.15);
  border-right-color: rgba(141, 147, 25, 0.15);
  border-top-color: rgba(141, 147, 25, 0.15);
  color: var(--tag-color, rgb(141, 147, 25));
}`,
  },
};
