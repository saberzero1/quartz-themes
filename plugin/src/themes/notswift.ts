import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notswift",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "sf-mono", "sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-00, #1E1E1E);
  --background-modifier-border-focus: var(--color-base-highlight, hsl(258, 80%, 55%));
  --background-modifier-border-hover: var(--color-base-30, #2F2F2F);
  --background-modifier-error: var(--color-red, #ec3643);
  --background-modifier-error-hover: var(--color-red, #ec3643);
  --background-modifier-error-rgb: var(--color-red-rgb, 236, 54, 67);
  --background-modifier-form-field: var(--color-base-25, #1E1E1E);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #1E1E1E);
  --background-modifier-success: var(--color-green, #65c756);
  --background-modifier-success-rgb: var(--color-green-rgb, 101, 199, 86);
  --background-primary: var(--color-base-00, #1E1E1E);
  --background-primary-alt: var(--color-base-10, #959595);
  --background-secondary: var(--color-base-17, #262626);
  --background-secondary-alt: var(--color-base-30, #2F2F2F);
  --bases-cards-background: var(--background-primary, #1E1E1E);
  --bases-cards-cover-background: var(--background-primary-alt, #959595);
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, #1E1E1E);
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, #959595);
  --bases-table-border-color: var(--table-border-color, #1E1E1E);
  --bases-table-cell-background-active: var(--background-primary, #1E1E1E);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #959595);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #959595);
  --bases-table-header-background: var(--background-primary, #1E1E1E);
  --bases-table-header-color: var(--text-muted, #959595);
  --bases-table-summary-background: var(--background-primary, #1E1E1E);
  --bodyFont: var(--font-text-theme, SFPro-Regular);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.5;
  --callout-border-width: 0.5px;
  --callout-bug: var(--color-red-rgb, 236, 54, 67);
  --callout-content-padding: 1px;
  --callout-default: var(--color-blue-rgb, 8, 132, 255);
  --callout-error: var(--color-red-rgb, 236, 54, 67);
  --callout-example: var(--color-purple-rgb, 193, 97, 253);
  --callout-fail: var(--color-red-rgb, 236, 54, 67);
  --callout-info: var(--color-blue-rgb, 8, 132, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-3, 12px 12px 12px 12px);
  --callout-question: var(--color-orange-rgb, 249, 158, 21);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, 101, 199, 86);
  --callout-todo: var(--color-blue-rgb, 8, 132, 255);
  --callout-warning: var(--color-orange-rgb, 249, 158, 21);
  --canvas-background: var(--background-primary, #1E1E1E);
  --canvas-card-label-color: var(--text-faint, #B8B2B1);
  --canvas-color-1: var(--color-red-rgb, 236, 54, 67);
  --canvas-color-2: var(--color-orange-rgb, 249, 158, 21);
  --canvas-color-4: var(--color-green-rgb, 101, 199, 86);
  --canvas-color-6: var(--color-purple-rgb, 193, 97, 253);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, #2F2F2F);
  --caret-color: var(--text-normal, rgb(228, 228, 228));
  --checkbox-border-color: var(--color-base-50, #2F2F2F);
  --checkbox-border-color-hover: var(--color-base-highlight, hsl(258, 80%, 55%));
  --checkbox-marker-color: var(--background-primary, #1E1E1E);
  --checkbox-radius: var(--radius-round, 50%);
  --checkbox-size: var(--font-text-size, 10px);
  --checklist-done-color: var(--color-base-60, #B8B2B1);
  --clickable-icon-radius: var(--radius-m, 4px);
  --code-background: var(--background-primary-alt, #171818);
  --code-border-color: var(--background-modifier-border, #1E1E1E);
  --code-comment: var(--color-base-60, #B8B2B1);
  --code-important: var(--color-orange, #f99e15);
  --code-normal: var(--color-base-100, rgb(228, 228, 228));
  --code-operator: var(--color-red, #ec3643);
  --code-punctuation: var(--text-muted, #959595);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--color-green, #65c756);
  --code-tag: var(--color-red, #ec3643);
  --code-value: var(--color-purple, #c161fd);
  --codeblock-radius: var(--radius-m, 4px);
  --collapse-icon-color: var(--color-base-70, #959595);
  --collapse-icon-color-collapsed: var(--color-base-highlight, hsl(258, 80%, 55%));
  --color-base-00: #1E1E1E;
  --color-base-05: #1E1D1E;
  --color-base-10: #959595;
  --color-base-100: rgb(var(--color-base-100-ref));
  --color-base-100-ref: 228, 228, 228;
  --color-base-101: rgb(var(--color-base-101-ref));
  --color-base-101-ref: 0, 0, 0;
  --color-base-15: #363636;
  --color-base-17: #262626;
  --color-base-20: #000000;
  --color-base-25: #1E1E1E;
  --color-base-30: #2F2F2F;
  --color-base-35: #282828;
  --color-base-40: #605852;
  --color-base-50: #2F2F2F;
  --color-base-51: #6E665F;
  --color-base-60: #B8B2B1;
  --color-base-70: #959595;
  --color-base-80: #464545ff;
  --color-base-90: #414141;
  --color-base-darklight: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 40%));
  --color-base-highlight: hsl(var(--accent-h), 80%, 55%);
  --color-base-icons: #95908E;
  --color-base-lowlight: hsl(var(--accent-h), 50%, 50%);
  --color-base-verylowlight: hsl(var(--accent-h), 50%, 20%);
  --color-base-warn: #EA5A47;
  --color-blue: #0884ff;
  --color-blue-rgb: 8, 132, 255;
  --color-blue-rgb-dark: 140, 148, 154;
  --color-blue-rgb-light: 28, 40, 52;
  --color-fakeclose-inner: #FE5F57;
  --color-fakeclose-outer: #DF544C;
  --color-green: #65c756;
  --color-green-rgb: 101, 199, 86;
  --color-green-rgb-dark: 145, 150, 145;
  --color-green-rgb-light: 37, 47, 36;
  --color-neutral: #414141;
  --color-neutral-rgb: 120, 120, 120;
  --color-neutral-rgb-dark: 142, 142, 142;
  --color-neutral-rgb-light: 40, 40, 40;
  --color-neutral-rgb-white: 38, 38, 38;
  --color-orange: #f99e15;
  --color-orange-rgb: 249, 158, 21;
  --color-orange-rgb-dark: 153, 148, 141;
  --color-orange-rgb-light: 52, 43, 29;
  --color-purple: #c161fd;
  --color-purple-rgb: 193, 97, 253;
  --color-purple-rgb-dark: 151, 146, 153;
  --color-purple-rgb-light: 46, 37, 52;
  --color-red: #ec3643;
  --color-red-rgb: 236, 54, 67;
  --color-red-rgb-dark: 152, 143, 144;
  --color-red-rgb-light: 50, 32, 34;
  --color-scrollbar-1: #959595;
  --color-scrollbar-2: #959595;
  --color-scrollbar-3: #6B6B6B;
  --dark: var(--text-normal, var(--color-base-100, rgb(228, 228, 228)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(228, 228, 228)));
  --divider-color: var(--color-base-101, rgb(0, 0, 0));
  --divider-color-hover: var(--divider-color, rgb(0, 0, 0));
  --divider-color-tabv: #524845;
  --divider-width: 0.5px;
  --dropdown-background: var(--interactive-normal, #1E1E1E);
  --dropdown-background-hover: var(--interactive-hover, #1E1D1E);
  --file-header-background: var(--background-primary, #1E1E1E);
  --file-header-background-focused: var(--background-primary, #1E1E1E);
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-line-width: 100%;
  --flair-background: var(--interactive-normal, #1E1E1E);
  --flair-color: var(--text-normal, rgb(228, 228, 228));
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-text-theme: SFPro-Regular;
  --font-ui-teeny: 10px;
  --font-ui-unreadable: 8px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(0, 0, 0));
  --footnote-id-color: var(--text-muted, #959595);
  --footnote-id-color-no-occurrences: var(--text-faint, #B8B2B1);
  --footnote-radius: var(--radius-s, 2px);
  --graph-node: var(--text-muted, #959595);
  --graph-node-tag: var(--color-green, #65c756);
  --graph-node-unresolved: var(--text-faint, #B8B2B1);
  --graph-text: var(--text-normal, rgb(228, 228, 228));
  --gray: var(--text-muted, var(--color-base-70, #959595));
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --h1-size: 2.1rem;
  --h1-weight: 100;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h2-size: 1.5rem;
  --h2-weight: 100;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
  --h3-line-height: 1.2;
  --h3-size: 1.2rem;
  --h3-weight: 100;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
  --h4-line-height: 1.2;
  --h4-size: 1rem;
  --h4-weight: 100;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h5-size: 0.9rem;
  --h5-weight: 100;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h6-size: 0.8rem;
  --h6-weight: 100;
  --header-height: 50px;
  --headerFont: var(--font-text-theme, SFPro-Regular);
  --heading-formatting: var(--text-faint, #B8B2B1);
  --highlight: var(--text-highlight-bg, var(--color-base-verylowlight, hsl(258, 50%, 20%)));
  --hr-color: var(--background-modifier-border, #1E1E1E);
  --icon-color: var(--text-muted, #959595);
  --icon-color-active: var(--color-base-highlight, hsl(258, 80%, 55%));
  --icon-color-focused: var(--text-normal, rgb(228, 228, 228));
  --icon-color-hover: var(--text-muted, #959595);
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-stroke: var(--icon-m-stroke-width, 1.25px);
  --inline-title-font: var(--h1-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
  --inline-title-size: var(--h1-size, 2.1rem);
  --inline-title-weight: var(--h1-weight, 100);
  --input-date-separator: var(--text-faint, #B8B2B1);
  --input-placeholder-color: var(--text-faint, #B8B2B1);
  --interactive-accent: var(--color-base-highlight, hsl(258, 88%, 66%));
  --interactive-hover: var(--color-base-05, #1E1D1E);
  --interactive-normal: var(--color-base-00, #1E1E1E);
  --light: var(--background-primary, var(--color-base-00, #1E1E1E));
  --lightgray: var(--background-secondary, var(--color-base-17, #262626));
  --link-color: var(--color-base-lowlight, hsl(258, 50%, 50%));
  --link-color-hover: var(--color-base-100, rgb(228, 228, 228));
  --link-decoration-color: var(--color-base-lowlight, hsl(258, 50%, 50%));
  --link-external-color: var(--color-base-100, rgb(228, 228, 228));
  --link-external-color-hover: var(--color-base-100, rgb(228, 228, 228));
  --link-external-decoration-color: #288133;
  --link-unresolved-color: var(--color-base-warn, #EA5A47);
  --link-unresolved-decoration-color: hsla(var(--color-base-warn), 0.3);
  --list-bullet-size: 0.4em;
  --list-marker-color: var(--color-base-80, #464545ff);
  --list-marker-color-collapsed: var(--color-base-highlight, hsl(258, 80%, 55%));
  --list-marker-color-hover: var(--color-base-highlight, hsl(258, 80%, 55%));
  --menu-border-color: var(--background-modifier-border-hover, #2F2F2F);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, #1E1E1E);
  --metadata-divider-color: var(--divider-color, rgb(0, 0, 0));
  --metadata-divider-width: 0px;
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-font-size: var(--font-ui-teeny, 10px);
  --metadata-input-text-color: var(--text-normal, rgb(228, 228, 228));
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-font-size: var(--font-ui-teeny, 10px);
  --metadata-label-text-color: var(--text-muted, #959595);
  --metadata-label-text-color-hover: var(--text-highlight-bg, hsl(258, 50%, 20%));
  --metadata-label-width: 8em;
  --metadata-sidebar-label-font-size: var(--font-ui-teeny, 10px);
  --modal-background: var(--background-primary, #1E1E1E);
  --modal-radius: var(--radius-l, 8px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #959595);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #B8B2B1);
  --nav-heading-color: var(--text-normal, rgb(228, 228, 228));
  --nav-heading-color-collapsed: var(--text-faint, #B8B2B1);
  --nav-heading-color-collapsed-hover: var(--text-muted, #959595);
  --nav-heading-color-hover: var(--text-normal, rgb(228, 228, 228));
  --nav-item-color: var(--text-muted, #959595);
  --nav-item-color-active: var(--text-normal, rgb(228, 228, 228));
  --nav-item-color-hover: var(--text-normal, rgb(228, 228, 228));
  --nav-item-color-selected: var(--text-normal, rgb(228, 228, 228));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, #B8B2B1);
  --nav-tag-color-active: var(--text-muted, #959595);
  --nav-tag-color-hover: var(--text-muted, #959595);
  --nav-tag-radius: var(--radius-s, 2px);
  --p-spacing: 0.5rem;
  --p-spacing-empty: 0.2rem;
  --pdf-background: var(--background-primary, #1E1E1E);
  --pdf-page-background: var(--background-primary, #1E1E1E);
  --pdf-sidebar-background: var(--background-primary, #1E1E1E);
  --pill-border-color: var(--background-modifier-border, #1E1E1E);
  --pill-border-color-hover: var(--background-modifier-border-hover, #2F2F2F);
  --pill-color: var(--text-muted, #959595);
  --pill-color-hover: var(--text-normal, rgb(228, 228, 228));
  --pill-color-remove: var(--text-faint, #B8B2B1);
  --prompt-background: var(--background-primary, #1E1E1E);
  --radius-l: 8px;
  --radius-m: 4px;
  --radius-none: 0px;
  --radius-round: 50%;
  --radius-s: 2px;
  --radius-xl: 13px;
  --radius-xs: 1px;
  --raised-background: var(--blur-background, color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent)));
  --ribbon-background: var(--color-base-17, #262626);
  --ribbon-background-collapsed: var(--background-primary, #1E1E1E);
  --ribbon-width: 0px;
  --scrollbar-radius: var(--radius-l, 8px);
  --search-clear-button-color: var(--text-muted, #959595);
  --search-icon-color: var(--text-muted, #959595);
  --search-result-background: var(--background-primary, #1E1E1E);
  --secondary: var(--interactive-accent, var(--color-base-highlight, hsl(258, 88%, 66%)));
  --setting-group-heading-color: var(--text-normal, rgb(228, 228, 228));
  --setting-items-background: var(--background-primary-alt, #959595);
  --setting-items-border-color: var(--background-modifier-border, #1E1E1E);
  --setting-items-radius: var(--radius-l, 8px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #959595);
  --shiki-code-background: var(--code-background, #171818);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-block-spacing: var(--p-spacing, 0.5rem);
  --shiki-code-comment: var(--text-faint, #B8B2B1);
  --shiki-code-function: var(--color-green, #65c756);
  --shiki-code-important: var(--color-orange, #f99e15);
  --shiki-code-normal: var(--text-muted, #959595);
  --shiki-code-punctuation: var(--text-muted, #959595);
  --shiki-code-value: var(--color-purple, #c161fd);
  --shiki-gutter-border-color: var(--background-modifier-border, #1E1E1E);
  --shiki-gutter-text-color: var(--text-faint, #B8B2B1);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #959595);
  --shiki-highlight-neutral: var(--shiki-code-normal, #959595);
  --shiki-terminal-dots-color: var(--text-faint, #B8B2B1);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #2F2F2F);
  --slider-track-background: var(--background-modifier-border, #1E1E1E);
  --status-bar-border-color: var(--divider-color, rgb(0, 0, 0));
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #959595);
  --suggestion-background: var(--background-primary, #1E1E1E);
  --sync-avatar-color-1: var(--color-red, #ec3643);
  --sync-avatar-color-2: var(--color-orange, #f99e15);
  --sync-avatar-color-4: var(--color-green, #65c756);
  --sync-avatar-color-6: var(--color-blue, #0884ff);
  --sync-avatar-color-7: var(--color-purple, #c161fd);
  --tab-background-active: var(--background-primary, #1E1E1E);
  --tab-container-background: var(--color-base-17, #262626);
  --tab-divider-color: var(--background-modifier-border-hover, #2F2F2F);
  --tab-font-size: var(--font-ui-teeny, 10px);
  --tab-outline-color: var(--divider-color, rgb(0, 0, 0));
  --tab-radius: var(--radius-m, 4px);
  --tab-stacked-font-size: var(--font-ui-teeny, 10px);
  --tab-stacked-header-width: var(--header-height, 50px);
  --tab-switcher-preview-radius: var(--radius-xl, 13px);
  --tab-text-color: var(--text-faint, #B8B2B1);
  --tab-text-color-active: var(--text-muted, #959595);
  --tab-text-color-focused: var(--text-muted, #959595);
  --tab-text-color-focused-active: var(--text-muted, #959595);
  --tab-text-color-focused-active-current: var(--text-normal, rgb(228, 228, 228));
  --table-add-button-border-color: var(--background-modifier-border, #1E1E1E);
  --table-border-color: var(--background-modifier-border, #1E1E1E);
  --table-drag-handle-color: var(--text-faint, #B8B2B1);
  --table-header-border-color: var(--table-border-color, #1E1E1E);
  --table-header-color: var(--text-normal, rgb(228, 228, 228));
  --text-error: var(--color-red, #ec3643);
  --text-faint: var(--color-base-60, #B8B2B1);
  --text-highlight-bg: var(--color-base-verylowlight, hsl(258, 50%, 20%));
  --text-muted: var(--color-base-70, #959595);
  --text-normal: var(--color-base-100, rgb(228, 228, 228));
  --text-success: var(--color-green, #65c756);
  --text-warning: var(--color-orange, #f99e15);
  --textHighlight: var(--text-highlight-bg, var(--color-base-verylowlight, hsl(258, 50%, 20%)));
  --titleFont: var(--font-text-theme, SFPro-Regular);
  --titlebar-background: var(--color-base-17, #262626);
  --titlebar-background-focused: var(--background-secondary-alt, #2F2F2F);
  --titlebar-border-color: var(--background-modifier-border, #1E1E1E);
  --titlebar-text-color: var(--text-muted, #959595);
  --titlebar-text-color-focused: var(--text-normal, rgb(228, 228, 228));
  --toggle-border-width: 1px;
  --toggle-radius: 13px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 13px;
  --toggle-s-thumb-width: 13px;
  --toggle-s-width: 25px;
  --toggle-thumb-color: #ffffff;
  --toggle-thumb-height: 13px;
  --toggle-thumb-radius: 13px;
  --toggle-thumb-width: 13px;
  --toggle-width: 25px;
  --traffic-lights-offset-x: var(--header-height, 50px);
  --traffic-lights-offset-y: var(--header-height, 50px);
  --vault-name-color: var(--color-base-70, #959595);
  --vault-name-font-size: var(--font-ui-smaller, 12px);
  --vault-profile-color: var(--text-normal, rgb(228, 228, 228));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(228, 228, 228));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(0, 0, 0);
  color: rgb(228, 228, 228);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(41, 26, 77));
  color: var(--text-normal, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body del {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(70, 69, 69);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-base-40, rgb(96, 88, 82));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(149, 149, 149));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration-color: rgb(149, 149, 149);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-normal, rgb(228, 228, 228));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: underline rgb(102, 64, 191);
  text-decoration-color: var(--link-color, rgb(102, 64, 191));
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(234, 90, 71));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(234, 90, 71));
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(228, 228, 228);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body dt {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(184, 178, 177));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body table {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: var(--heading-spacing, 0px);
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  color: var(--table-text-color, rgb(228, 228, 228));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  border-top-left-radius: var(--radius-s, 2px);
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body thead {
  background-color: var(--color-base-verylowlight, rgb(41, 26, 77));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(23, 24, 24));
  border-bottom-color: rgb(30, 30, 30);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(228, 228, 228));
  font-family: var(--font-monospace, "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(23, 24, 24));
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 1px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 1px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 1px;
  border-top-color: rgb(47, 47, 47);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #171818);
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(149, 149, 149));
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(70, 69, 69);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(70, 69, 69);
  border-right-color: rgb(70, 69, 69);
  border-top-color: rgb(70, 69, 69);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -15px;
  width: var(--checkbox-size, 10px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(184, 178, 177);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(184, 178, 177);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
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
  background-color: rgb(249, 158, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 47, 47);
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
  background-color: rgb(8, 132, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 132, 255);
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
  background-color: rgb(193, 97, 253);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-light));
  border-bottom-color: rgba(120, 120, 120, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 120, 120, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(120, 120, 120, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(120, 120, 120, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="avoid"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bad"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-red-rgb-light));
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--color-purple-rgb, 193, 97, 253);
  background: rgb(46, 37, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-purple-rgb-light));
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  background: rgb(50, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-red-rgb-light));
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="good"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-green-rgb, 101, 199, 86);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-green-rgb-light));
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(28, 40, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="issue"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--callout-default, 200, 200, 200);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(200, 200, 200, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(200, 200, 200, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(200, 200, 200, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(200, 200, 200, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(28, 40, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="problem"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="purpose"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: hsl(258, 80%, 55%);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary: #262626;
  --background-secondary-alt: #2F2F2F;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 83, 223, 221;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: hsl(258, 80%, 55%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0de71;
  --code-important: #f99e15;
  --code-keyword: #fa99cd;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-property: #53dfdd;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(228, 228, 228);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: hsl(258, 80%, 55%);
  --color-base-lowlight: hsl(258, 50%, 50%);
  --color-base-verylowlight: hsl(258, 50%, 20%);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-vertical-height: 100%;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: hsl(258, 50%, 50%);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: hsl(258, 50%, 50%);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #262626;
  --menu-border-color: #2F2F2F;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #959595;
  --shiki-code-background: #171818;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #959595;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #959595;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #1E1E1E;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #959595;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #959595;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1E1E1E;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #1E1E1E;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #1E1E1E;
  --table-header-border-width: 1px;
  --table-header-color: rgb(228, 228, 228);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 50%, 20%);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(28, 40, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-light));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--color-green-rgb, 101, 199, 86);
  background: rgb(37, 47, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-green-rgb-light));
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--color-purple-rgb, 193, 97, 253);
  background: rgb(46, 37, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-purple-rgb-light));
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--color-orange-rgb, 249, 158, 21);
  background: rgb(52, 43, 29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-orange-rgb-light));
  border-bottom-color: rgba(249, 158, 21, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(249, 158, 21, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(249, 158, 21, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(249, 158, 21, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--color-orange-rgb, 249, 158, 21);
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(249, 158, 21);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(249, 158, 21);
  border-left-width: 5px;
  border-right-color: rgb(249, 158, 21);
  border-right-width: 5px;
  border-top-color: rgb(249, 158, 21);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="avoid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bad"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="good"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="issue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z'/%3E%3Cpath d='M12 22V12'/%3E%3Cpolyline points='3.29 7 12 12 20.71 7'/%3E%3Cpath d='m7.5 4.27 9 5.15'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="problem"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="purpose"] {
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
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: var(--text-normal, rgb(228, 228, 228));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--color-base-15, rgb(54, 54, 54));
  border-bottom-color: rgb(96, 88, 82);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(96, 88, 82);
  border-right-color: rgb(96, 88, 82);
  border-top-color: rgb(96, 88, 82);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--color-base-30, rgb(47, 47, 47));
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(96, 88, 82);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(96, 88, 82);
  border-right-color: rgb(96, 88, 82);
  border-top-color: rgb(96, 88, 82);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--color-base-15, rgb(54, 54, 54));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--color-base-30, rgb(47, 47, 47));
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--color-base-30, rgb(47, 47, 47));
  color: var(--color-base-100, rgb(228, 228, 228));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 100);
  color: var(--h1-color, rgb(228, 228, 228));
  font-family: var(--h1-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(228, 228, 228));
  font-size: var(--inline-title-size, 33.6px);
  font-weight: var(--inline-title-weight, 100);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 100);
  color: var(--h2-color, rgb(228, 228, 228));
  font-family: var(--h2-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(228, 228, 228));
  font-family: var(--inline-title-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 100);
  color: var(--h3-color, rgb(228, 228, 228));
  font-family: var(--h3-font, SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 100);
  color: var(--h4-color, rgb(228, 228, 228));
  font-family: var(--h4-font, SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 100);
  color: var(--h5-color, rgb(228, 228, 228));
  font-family: var(--h5-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 100);
  color: var(--h6-color, rgb(228, 228, 228));
  font-family: var(--h6-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(149, 149, 149));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(149, 149, 149));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(228, 228, 228);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: var(--icon-color, rgb(149, 149, 149));
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 4px;
  color: var(--status-bar-text-color, rgb(149, 149, 149));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(149, 149, 149);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(149, 149, 149));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(149, 149, 149));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(104, 48, 232);
  border-left-color: rgb(104, 48, 232);
  border-right-color: rgb(104, 48, 232);
  border-top-color: rgb(104, 48, 232);
  color: var(--color-base-highlight, rgb(104, 48, 232));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(104, 48, 232);
  stroke: rgb(104, 48, 232);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(184, 178, 177));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(228, 228, 228));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-sidebar {
  border-color: rgb(228, 228, 228);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(41, 26, 77);
  color: var(--color-base-100, rgb(228, 228, 228));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: var(--text-muted, rgb(149, 149, 149));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body div#quartz-root {
  color: var(--text-normal, rgb(228, 228, 228));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--color-base-17, rgb(38, 38, 38));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(228, 228, 228);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--color-base-00, rgb(30, 30, 30));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: var(--text-normal, rgb(149, 149, 149));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(23, 24, 24));
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(228, 228, 228));
  font-family: var(--font-monospace, "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body sub {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body summary {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body sup {
  color: rgb(228, 228, 228);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--divider-color, #D8D2D2);
  --background-modifier-border-focus: var(--color-base-highlight, hsl(258, 88%, 66%));
  --background-modifier-border-hover: var(--divider-color, #D8D2D2);
  --background-modifier-error: var(--color-red, #ec3643);
  --background-modifier-error-hover: var(--color-red, #ec3643);
  --background-modifier-error-rgb: var(--color-red-rgb, 236, 54, 67);
  --background-modifier-form-field: var(--color-base-00, #FFFFFF);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #FFFFFF);
  --background-modifier-success: var(--color-green, #65c756);
  --background-modifier-success-rgb: var(--color-green-rgb, 101, 199, 86);
  --background-primary: var(--color-base-00, #FFFFFF);
  --background-primary-alt: var(--color-base-10, #FFFFFF);
  --background-secondary: var(--color-base-17, #F0E8E6);
  --background-secondary-alt: var(--color-base-05, #FAFAFA);
  --bases-cards-background: var(--background-primary, #FFFFFF);
  --bases-cards-cover-background: var(--background-primary-alt, #FFFFFF);
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, #D8D2D2);
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, #6E6966);
  --bases-table-border-color: var(--table-border-color, #D8D2D2);
  --bases-table-cell-background-active: var(--background-primary, #FFFFFF);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #FFFFFF);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #FFFFFF);
  --bases-table-header-background: var(--background-primary, #FFFFFF);
  --bases-table-header-color: var(--text-muted, #6E6966);
  --bases-table-summary-background: var(--background-primary, #FFFFFF);
  --blockquote-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --bodyFont: var(--font-text-theme, SFPro-Regular);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.5;
  --callout-border-width: 0.5px;
  --callout-bug: var(--color-red-rgb, 236, 54, 67);
  --callout-content-padding: 1px;
  --callout-default: var(--color-blue-rgb, 8, 132, 255);
  --callout-error: var(--color-red-rgb, 236, 54, 67);
  --callout-example: var(--color-purple-rgb, 193, 97, 253);
  --callout-fail: var(--color-red-rgb, 236, 54, 67);
  --callout-info: var(--color-blue-rgb, 8, 132, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-3, 12px 12px 12px 12px);
  --callout-question: var(--color-orange-rgb, 249, 158, 21);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, 101, 199, 86);
  --callout-todo: var(--color-blue-rgb, 8, 132, 255);
  --callout-warning: var(--color-orange-rgb, 249, 158, 21);
  --canvas-background: var(--background-primary, #FFFFFF);
  --canvas-card-label-color: var(--text-faint, #B8B2B1);
  --canvas-color-1: var(--color-red-rgb, 236, 54, 67);
  --canvas-color-2: var(--color-orange-rgb, 249, 158, 21);
  --canvas-color-4: var(--color-green-rgb, 101, 199, 86);
  --canvas-color-6: var(--color-purple-rgb, 193, 97, 253);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, #DFD7D7);
  --caret-color: var(--text-normal, rgb(76, 73, 73));
  --checkbox-border-color: var(--color-base-50, #E0DAD8);
  --checkbox-border-color-hover: var(--color-base-highlight, hsl(258, 88%, 66%));
  --checkbox-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --checkbox-marker-color: var(--background-primary, #FFFFFF);
  --checkbox-radius: var(--radius-round, 50%);
  --checkbox-size: var(--font-text-size, 10px);
  --checklist-done-color: var(--color-base-60, #B8B2B1);
  --clickable-icon-radius: var(--radius-m, 4px);
  --code-background: var(--color-base-05, #FAFAFA);
  --code-border-color: var(--background-modifier-border, #D8D2D2);
  --code-comment: var(--color-base-60, #B8B2B1);
  --code-important: var(--color-orange, #f99e15);
  --code-normal: var(--color-base-100, rgb(76, 73, 73));
  --code-operator: var(--color-red, #ec3643);
  --code-punctuation: var(--text-muted, #6E6966);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--color-green, #65c756);
  --code-tag: var(--color-red, #ec3643);
  --code-value: var(--color-purple, #c161fd);
  --codeblock-radius: var(--radius-m, 4px);
  --collapse-icon-color: var(--color-base-70, #6E6966);
  --collapse-icon-color-collapsed: var(--color-base-highlight, hsl(258, 88%, 66%));
  --color-base-00: #FFFFFF;
  --color-base-05: #FAFAFA;
  --color-base-10: #FFFFFF;
  --color-base-100: rgb(var(--color-base-100-ref));
  --color-base-100-ref: 76, 73, 73;
  --color-base-101: rgb(var(--color-base-101-ref));
  --color-base-101-ref: 0, 0, 0;
  --color-base-15: #F8F2F1;
  --color-base-17: #F0E8E6;
  --color-base-20: #ECE6E5;
  --color-base-25: #ECE6E4;
  --color-base-30: #DFD7D7;
  --color-base-35: #EBE5E5;
  --color-base-40: #DFD9D7;
  --color-base-50: #E0DAD8;
  --color-base-51: #C6C0BE;
  --color-base-60: #B8B2B1;
  --color-base-70: #6E6966;
  --color-base-80: #464545ff;
  --color-base-90: #D5D5D5;
  --color-base-darklight: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 40%));
  --color-base-highlight: var(--color-accent, hsl(258, 88%, 66%));
  --color-base-lowlight: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 20%));
  --color-base-verylowlight: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 28%));
  --color-base-warn: #EA5A47;
  --color-blue: #0884ff;
  --color-blue-rgb: 8, 132, 255;
  --color-blue-rgb-dark: 3, 48, 93;
  --color-blue-rgb-light: 224, 240, 255;
  --color-fakeclose-inner: #FE5F57;
  --color-fakeclose-outer: #DF544C;
  --color-green: #65c756;
  --color-green-rgb: 101, 199, 86;
  --color-green-rgb-light: 235, 255, 232;
  --color-neutral: #414141;
  --color-neutral-rgb: 120, 120, 120;
  --color-neutral-rgb-dark: 67, 67, 67;
  --color-neutral-rgb-light: 250, 250, 250;
  --color-neutral-rgb-white: 255, 255, 255;
  --color-orange: #f99e15;
  --color-orange-rgb: 249, 158, 21;
  --color-orange-rgb-dark: 84, 53, 7;
  --color-orange-rgb-light: 255, 248, 237;
  --color-purple: #c161fd;
  --color-purple-rgb: 193, 97, 253;
  --color-purple-rgb-dark: 58, 28, 77;
  --color-purple-rgb-light: 249, 239, 254;
  --color-red: #ec3643;
  --color-red-rgb: 236, 54, 67;
  --color-red-rgb-dark: 94, 0, 7;
  --color-red-rgb-light: 255, 233, 234;
  --color-scrollbar-1: #C2C2C2;
  --color-scrollbar-2: #B4AFAE;
  --color-scrollbar-3: #E2E2E2;
  --dark: var(--text-normal, var(--color-base-100, rgb(76, 73, 73)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(76, 73, 73)));
  --divider-color: var(--background-modifier-border, #D8D2D2);
  --divider-color-hover: var(--divider-color, #D8D2D2);
  --divider-width: 0.5px;
  --dropdown-background: var(--interactive-normal, #FFFFFF);
  --dropdown-background-hover: var(--interactive-hover, #FAFAFA);
  --file-header-background: var(--background-primary, #FFFFFF);
  --file-header-background-focused: var(--background-primary, #FFFFFF);
  --file-header-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --file-line-width: 100%;
  --flair-background: var(--interactive-normal, #FFFFFF);
  --flair-color: var(--text-normal, rgb(76, 73, 73));
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: var(--font-text, SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-text-theme: SFPro-Regular;
  --font-ui-teeny: 10px;
  --font-ui-unreadable: 8px;
  --footnote-divider-color: var(--metadata-divider-color, #D8D2D2);
  --footnote-id-color: var(--text-muted, #6E6966);
  --footnote-id-color-no-occurrences: var(--text-faint, #B8B2B1);
  --footnote-radius: var(--radius-s, 2px);
  --graph-node: var(--text-muted, #6E6966);
  --graph-node-tag: var(--color-green, #65c756);
  --graph-node-unresolved: var(--text-faint, #B8B2B1);
  --graph-text: var(--text-normal, rgb(76, 73, 73));
  --gray: var(--text-muted, var(--color-base-70, #6E6966));
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --h1-size: 2.1rem;
  --h1-weight: 100;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h2-size: 1.5rem;
  --h2-weight: 100;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
  --h3-line-height: 1.2;
  --h3-size: 1.2rem;
  --h3-weight: 100;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
  --h4-line-height: 1.2;
  --h4-size: 1rem;
  --h4-weight: 100;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h5-size: 0.9rem;
  --h5-weight: 100;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h6-size: 0.8rem;
  --h6-weight: 100;
  --header-height: 50px;
  --headerFont: var(--font-text-theme, SFPro-Regular);
  --heading-formatting: var(--text-faint, #B8B2B1);
  --highlight: var(--text-highlight-bg, var(--color-base-verylowlight, hsl(258, 88%, 94%)));
  --hr-color: var(--background-modifier-border, #D8D2D2);
  --icon-color: var(--text-muted, #6E6966);
  --icon-color-active: var(--color-base-highlight, hsl(258, 88%, 66%));
  --icon-color-focused: var(--text-normal, rgb(76, 73, 73));
  --icon-color-hover: var(--text-muted, #6E6966);
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-stroke: var(--icon-m-stroke-width, 1.25px);
  --inline-title-font: var(--h1-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
  --inline-title-size: var(--h1-size, 2.1rem);
  --inline-title-weight: var(--h1-weight, 100);
  --input-date-separator: var(--text-faint, #B8B2B1);
  --input-placeholder-color: var(--text-faint, #B8B2B1);
  --interactive-accent: var(--color-base-highlight, hsl(258, 88%, 66%));
  --interactive-hover: var(--color-base-05, #FAFAFA);
  --interactive-normal: var(--color-base-00, #FFFFFF);
  --light: var(--background-primary, var(--color-base-00, #FFFFFF));
  --lightgray: var(--background-secondary, var(--color-base-17, #F0E8E6));
  --link-color: var(--color-base-highlight, hsl(258, 88%, 66%));
  --link-color-hover: var(--color-base-100, rgb(76, 73, 73));
  --link-decoration-color: var(--color-base-highlight, hsl(258, 88%, 66%));
  --link-external-color: var(--color-base-100, rgb(76, 73, 73));
  --link-external-color-hover: var(--color-base-100, rgb(76, 73, 73));
  --link-external-decoration-color: #35B649;
  --link-unresolved-color: var(--color-base-warn, #EA5A47);
  --link-unresolved-decoration-color: hsla(var(--color-base-warn), 0.3);
  --list-bullet-size: 0.4em;
  --list-marker-color: var(--color-base-80, #464545ff);
  --list-marker-color-collapsed: var(--color-base-highlight, hsl(258, 88%, 66%));
  --list-marker-color-hover: var(--color-base-highlight, hsl(258, 88%, 66%));
  --menu-background: var(--background-secondary, #F0E8E6);
  --menu-border-color: var(--background-modifier-border-hover, #D8D2D2);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, #D8D2D2);
  --metadata-divider-color: var(--divider-color, #D8D2D2);
  --metadata-divider-width: 0px;
  --metadata-input-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-input-font-size: var(--font-ui-teeny, 10px);
  --metadata-input-text-color: var(--text-normal, rgb(76, 73, 73));
  --metadata-label-font: var(--font-interface, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif);
  --metadata-label-font-size: var(--font-ui-teeny, 10px);
  --metadata-label-text-color: var(--text-muted, #6E6966);
  --metadata-label-text-color-hover: var(--text-highlight-bg, hsl(258, 88%, 94%));
  --metadata-label-width: 8em;
  --metadata-sidebar-label-font-size: var(--font-ui-teeny, 10px);
  --modal-background: var(--background-primary, #FFFFFF);
  --modal-radius: var(--radius-l, 8px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #6E6966);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #B8B2B1);
  --nav-heading-color: var(--text-normal, rgb(76, 73, 73));
  --nav-heading-color-collapsed: var(--text-faint, #B8B2B1);
  --nav-heading-color-collapsed-hover: var(--text-muted, #6E6966);
  --nav-heading-color-hover: var(--text-normal, rgb(76, 73, 73));
  --nav-item-color: var(--text-muted, #6E6966);
  --nav-item-color-active: var(--text-normal, rgb(76, 73, 73));
  --nav-item-color-hover: var(--text-normal, rgb(76, 73, 73));
  --nav-item-color-selected: var(--text-normal, rgb(76, 73, 73));
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, #B8B2B1);
  --nav-tag-color-active: var(--text-muted, #6E6966);
  --nav-tag-color-hover: var(--text-muted, #6E6966);
  --nav-tag-radius: var(--radius-s, 2px);
  --p-spacing: 0.5rem;
  --p-spacing-empty: 0.2rem;
  --pdf-background: var(--background-primary, #FFFFFF);
  --pdf-page-background: var(--background-primary, #FFFFFF);
  --pdf-sidebar-background: var(--background-primary, #FFFFFF);
  --pill-border-color: var(--background-modifier-border, #D8D2D2);
  --pill-border-color-hover: var(--background-modifier-border-hover, #D8D2D2);
  --pill-color: var(--text-muted, #6E6966);
  --pill-color-hover: var(--text-normal, rgb(76, 73, 73));
  --pill-color-remove: var(--text-faint, #B8B2B1);
  --prompt-background: var(--background-primary, #FFFFFF);
  --radius-l: 8px;
  --radius-m: 4px;
  --radius-none: 0px;
  --radius-round: 50%;
  --radius-s: 2px;
  --radius-xl: 13px;
  --radius-xs: 1px;
  --raised-background: var(--blur-background, color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)));
  --ribbon-background: var(--color-base-17, #F0E8E6);
  --ribbon-background-collapsed: var(--background-primary, #FFFFFF);
  --ribbon-width: 0px;
  --scrollbar-radius: var(--radius-l, 8px);
  --search-clear-button-color: var(--text-muted, #6E6966);
  --search-icon-color: var(--text-muted, #6E6966);
  --search-result-background: var(--background-primary, #FFFFFF);
  --secondary: var(--interactive-accent, var(--color-base-highlight, hsl(258, 88%, 66%)));
  --setting-group-heading-color: var(--text-normal, rgb(76, 73, 73));
  --setting-items-background: var(--background-primary-alt, #FFFFFF);
  --setting-items-border-color: var(--background-modifier-border, #D8D2D2);
  --setting-items-radius: var(--radius-l, 8px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #6E6966);
  --shiki-code-background: var(--code-background, #FAFAFA);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-block-spacing: var(--p-spacing, 0.5rem);
  --shiki-code-comment: var(--text-faint, #B8B2B1);
  --shiki-code-function: var(--color-green, #65c756);
  --shiki-code-important: var(--color-orange, #f99e15);
  --shiki-code-normal: var(--text-muted, #6E6966);
  --shiki-code-punctuation: var(--text-muted, #6E6966);
  --shiki-code-value: var(--color-purple, #c161fd);
  --shiki-gutter-border-color: var(--background-modifier-border, #D8D2D2);
  --shiki-gutter-text-color: var(--text-faint, #B8B2B1);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #6E6966);
  --shiki-highlight-neutral: var(--shiki-code-normal, #6E6966);
  --shiki-terminal-dots-color: var(--text-faint, #B8B2B1);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #D8D2D2);
  --slider-track-background: var(--background-modifier-border, #D8D2D2);
  --status-bar-background: var(--background-secondary, #F0E8E6);
  --status-bar-border-color: var(--divider-color, #D8D2D2);
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #6E6966);
  --suggestion-background: var(--background-primary, #FFFFFF);
  --sync-avatar-color-1: var(--color-red, #ec3643);
  --sync-avatar-color-2: var(--color-orange, #f99e15);
  --sync-avatar-color-4: var(--color-green, #65c756);
  --sync-avatar-color-6: var(--color-blue, #0884ff);
  --sync-avatar-color-7: var(--color-purple, #c161fd);
  --tab-background-active: var(--background-primary, #FFFFFF);
  --tab-container-background: var(--color-base-17, #F0E8E6);
  --tab-divider-color: var(--background-modifier-border-hover, #D8D2D2);
  --tab-font-size: var(--font-ui-teeny, 10px);
  --tab-outline-color: var(--divider-color, #D8D2D2);
  --tab-radius: var(--radius-m, 4px);
  --tab-stacked-font-size: var(--font-ui-teeny, 10px);
  --tab-stacked-header-width: var(--header-height, 50px);
  --tab-switcher-background: var(--background-secondary, #F0E8E6);
  --tab-switcher-preview-radius: var(--radius-xl, 13px);
  --tab-text-color: var(--text-faint, #B8B2B1);
  --tab-text-color-active: var(--text-muted, #6E6966);
  --tab-text-color-focused: var(--text-muted, #6E6966);
  --tab-text-color-focused-active: var(--text-muted, #6E6966);
  --tab-text-color-focused-active-current: var(--text-normal, rgb(76, 73, 73));
  --table-add-button-border-color: var(--background-modifier-border, #D8D2D2);
  --table-border-color: var(--background-modifier-border, #D8D2D2);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--text-faint, #B8B2B1);
  --table-header-border-color: var(--table-border-color, #D8D2D2);
  --table-header-color: var(--text-normal, rgb(76, 73, 73));
  --table-selection-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --text-error: var(--color-red, #ec3643);
  --text-faint: var(--color-base-60, #B8B2B1);
  --text-highlight-bg: var(--color-base-verylowlight, hsl(258, 88%, 94%));
  --text-muted: var(--color-base-70, #6E6966);
  --text-normal: var(--color-base-100, rgb(76, 73, 73));
  --text-success: var(--color-green, #65c756);
  --text-warning: var(--color-orange, #f99e15);
  --textHighlight: var(--text-highlight-bg, var(--color-base-verylowlight, hsl(258, 88%, 94%)));
  --titleFont: var(--font-text-theme, SFPro-Regular);
  --titlebar-background: var(--color-base-17, #F0E8E6);
  --titlebar-background-focused: var(--background-secondary-alt, #FAFAFA);
  --titlebar-border-color: var(--background-modifier-border, #D8D2D2);
  --titlebar-text-color: var(--text-muted, #6E6966);
  --titlebar-text-color-focused: var(--text-normal, rgb(76, 73, 73));
  --toggle-border-width: 1px;
  --toggle-radius: 13px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 13px;
  --toggle-s-thumb-width: 13px;
  --toggle-s-width: 25px;
  --toggle-thumb-color: #ffffff;
  --toggle-thumb-height: 13px;
  --toggle-thumb-radius: 13px;
  --toggle-thumb-width: 13px;
  --toggle-width: 25px;
  --traffic-lights-offset-x: var(--header-height, 50px);
  --traffic-lights-offset-y: var(--header-height, 50px);
  --vault-name-color: var(--color-base-70, #6E6966);
  --vault-name-font-size: var(--font-ui-smaller, 12px);
  --vault-profile-color: var(--text-normal, rgb(76, 73, 73));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(76, 73, 73));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #F0E8E6);
  background-color: var(--tab-container-background, rgb(240, 232, 230));
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(240, 232, 230));
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 210, 210);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #F0E8E6);
  background-color: var(--tab-container-background, rgb(240, 232, 230));
  border-left-color: rgb(216, 210, 210);
  color: rgb(76, 73, 73);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(234, 226, 253));
  color: var(--text-normal, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body del {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(70, 69, 69);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--color-base-40, rgb(223, 217, 215));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(110, 105, 102));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(110, 105, 102) none 0px;
  text-decoration-color: rgb(110, 105, 102);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--text-normal, rgb(76, 73, 73));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: var(--link-color, rgb(138, 92, 245));
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(234, 90, 71));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(234, 90, 71));
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(76, 73, 73);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(184, 178, 177));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body table {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: var(--heading-spacing, 0px);
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  color: var(--table-text-color, rgb(76, 73, 73));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  border-top-left-radius: var(--radius-s, 2px);
  color: var(--color-base-highlight, rgb(138, 92, 245));
}

html[saved-theme="light"] body thead {
  background-color: var(--color-base-verylowlight, rgb(234, 226, 253));
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(216, 210, 210);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(76, 73, 73));
  font-family: var(--font-monospace, "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #FAFAFA);
  border-bottom-color: rgb(76, 73, 73);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(255, 255, 255));
  border-bottom-color: rgb(110, 105, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-left-width: 0px;
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(70, 69, 69);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(70, 69, 69);
  border-right-color: rgb(70, 69, 69);
  border-top-color: rgb(70, 69, 69);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -15px;
  width: var(--checkbox-size, 10px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(184, 178, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(184, 178, 177);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
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
  background-color: rgb(249, 158, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 218, 216);
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
  background-color: rgb(8, 132, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 132, 255);
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
  background-color: rgb(193, 97, 253);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 199, 86);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-light));
  border-bottom-color: rgba(120, 120, 120, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 120, 120, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(120, 120, 120, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(120, 120, 120, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="avoid"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bad"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-red-rgb-light));
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--color-purple-rgb, 193, 97, 253);
  background: rgb(249, 239, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-purple-rgb-light));
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--color-red-rgb, 236, 54, 67);
  background: rgb(255, 233, 234) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-red-rgb-light));
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="good"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-green-rgb, 101, 199, 86);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-green-rgb-light));
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(224, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="issue"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="metadata"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--callout-default, 200, 200, 200);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(200, 200, 200, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(200, 200, 200, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(200, 200, 200, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(200, 200, 200, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(224, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="problem"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-style: solid;
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="purpose"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: hsl(258, 88%, 66%);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 236, 54, 67;
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: hsl(258, 88%, 66%);
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --clickable-icon-radius: 4px;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #B8B2B1;
  --code-function: #e0ac00;
  --code-important: #f99e15;
  --code-keyword: #d53984;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-property: #00bfbc;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-size: 0.875em;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-100: rgb(76, 73, 73);
  --color-base-101: rgb(0, 0, 0);
  --color-base-darklight: hsl(258, 88%, 26%);
  --color-base-highlight: hsl(258, 88%, 66%);
  --color-base-lowlight: hsl(258, 88%, 86%);
  --color-base-verylowlight: hsl(258, 88%, 94%);
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-vertical-height: 100%;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-weight: 400;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: hsl(258, 88%, 66%);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 4px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 8px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-padding: 20px;
  --setting-items-radius: 8px;
  --shiki-active-tab-border-color: #6E6966;
  --shiki-code-background: #FAFAFA;
  --shiki-code-block-border-radius: 2px;
  --shiki-code-block-spacing: 0.5rem;
  --shiki-code-comment: #B8B2B1;
  --shiki-code-function: #65c756;
  --shiki-code-important: #f99e15;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #6E6966;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #6E6966;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #c161fd;
  --shiki-gutter-border-color: #D8D2D2;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #B8B2B1;
  --shiki-gutter-text-color-highlight: #6E6966;
  --shiki-highlight-green: rgba(101, 199, 86, 0.5);
  --shiki-highlight-green-background: rgba(101, 199, 86, 0.1);
  --shiki-highlight-neutral: #6E6966;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(236, 54, 67, 0.5);
  --shiki-highlight-red-background: rgba(236, 54, 67, 0.1);
  --shiki-terminal-dots-color: #B8B2B1;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #FFFFFF;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: #FFFFFF;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-radius: 4px;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #D8D2D2;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #B8B2B1;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #D8D2D2;
  --table-header-border-width: 1px;
  --table-header-color: rgb(76, 73, 73);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: hsl(258, 88%, 94%);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  background: rgb(224, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-blue-rgb-light));
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--color-neutral-rgb, 120, 120, 120);
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-light));
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--color-green-rgb, 101, 199, 86);
  background: rgb(235, 255, 232) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-green-rgb-light));
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--color-purple-rgb, 193, 97, 253);
  background: rgb(249, 239, 254) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-purple-rgb-light));
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--color-orange-rgb, 249, 158, 21);
  background: rgb(255, 248, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-orange-rgb-light));
  border-bottom-color: rgba(249, 158, 21, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(249, 158, 21, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(249, 158, 21, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(249, 158, 21, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--color-orange-rgb, 249, 158, 21);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(var(--color-neutral-rgb-white));
  border-bottom-color: rgb(249, 158, 21);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(249, 158, 21);
  border-left-width: 5px;
  border-right-color: rgb(249, 158, 21);
  border-right-width: 5px;
  border-top-color: rgb(249, 158, 21);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 236, 54, 67;
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(236, 54, 67));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(var(--color-red-rgb-dark));
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="avoid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bad"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="good"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="issue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z'/%3E%3Cpath d='M12 22V12'/%3E%3Cpolyline points='3.29 7 12 12 20.71 7'/%3E%3Cpath d='m7.5 4.27 9 5.15'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="problem"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="purpose"] {
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
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: var(--text-normal, rgb(76, 73, 73));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--color-base-15, rgb(248, 242, 241));
  border-bottom-color: rgb(223, 217, 215);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(223, 217, 215);
  border-right-color: rgb(223, 217, 215);
  border-top-color: rgb(223, 217, 215);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--color-base-100, rgb(76, 73, 73));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--color-base-100, rgb(76, 73, 73));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--color-base-30, rgb(223, 215, 215));
  color: var(--color-base-100, rgb(76, 73, 73));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 217, 215);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(223, 217, 215);
  border-right-color: rgb(223, 217, 215);
  border-top-color: rgb(223, 217, 215);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--color-base-15, rgb(248, 242, 241));
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--color-base-30, rgb(223, 215, 215));
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: var(--color-base-100, rgb(76, 73, 73));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--color-base-30, rgb(223, 215, 215));
  color: var(--color-base-100, rgb(76, 73, 73));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 100);
  color: var(--h1-color, rgb(76, 73, 73));
  font-family: var(--h1-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(76, 73, 73));
  font-size: var(--inline-title-size, 33.6px);
  font-weight: var(--inline-title-weight, 100);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 100);
  color: var(--h2-color, rgb(76, 73, 73));
  font-family: var(--h2-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(76, 73, 73));
  font-family: var(--inline-title-font, SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 100);
  color: var(--h3-color, rgb(76, 73, 73));
  font-family: var(--h3-font, SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 100);
  color: var(--h4-color, rgb(76, 73, 73));
  font-family: var(--h4-font, SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 100);
  color: var(--h5-color, rgb(76, 73, 73));
  font-family: var(--h5-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 100);
  color: var(--h6-color, rgb(76, 73, 73));
  font-family: var(--h6-font, SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--color-blue-rgb, 8, 132, 255);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(110, 105, 102));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(110, 105, 102));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 73, 73);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: var(--icon-color, rgb(110, 105, 102));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(240, 232, 230));
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  border-top-left-radius: 4px;
  color: var(--status-bar-text-color, rgb(110, 105, 102));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(110, 105, 102);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(110, 105, 102));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(110, 105, 102));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: var(--color-base-highlight, rgb(138, 92, 245));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 105, 102);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(184, 178, 177));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(76, 73, 73));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(76, 73, 73);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(234, 226, 253);
  color: var(--color-base-highlight, rgb(138, 92, 245));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: var(--text-muted, rgb(110, 105, 102));
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(216, 210, 210);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(76, 73, 73));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(240, 232, 230));
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--color-base-17, rgb(240, 232, 230));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(76, 73, 73);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(240, 232, 230));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--color-base-00, rgb(255, 255, 255));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: var(--text-normal, rgb(110, 105, 102));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(76, 73, 73);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(76, 73, 73));
  font-family: var(--font-monospace, "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 73, 73);
}`,
  },
};
