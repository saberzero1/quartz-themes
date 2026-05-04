import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velocity",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Raveo",
        style: "normal",
        weight: "100 900",
        file: "raveo.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: ["obsidian-velocity", "obsidian-velocity-config"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 212;
  --accent-l: 52%;
  --accent-s: 86%;
  --anim-duration-fast: 150ms;
  --anim-duration-superfast: 75ms;
  --anim-fast-delay: var(--anim-duration-fast) var(--anim-motion-delay, 150ms cubic-bezier(0.65, 0.05, 0.36, 1));
  --anim-fast-smooth: var(--anim-duration-fast) var(--anim-motion-smooth, 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --anim-fast-swing: var(--anim-duration-fast) var(--anim-motion-swing, 150ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-super-delay: var(--anim-duration-superfast) var(--anim-motion-delay, 75ms cubic-bezier(0.65, 0.05, 0.36, 1));
  --anim-super-smooth: var(--anim-duration-superfast) var(--anim-motion-smooth, 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --anim-super-swing: var(--anim-duration-superfast) var(--anim-motion-swing, 75ms cubic-bezier(0, 0.55, 0.45, 1));
  --autofit-close-button-left-padding: 20px;
  --autofit-close-button-right-padding: 0px;
  --autofit-left-padding: 4px;
  --background-modifier-border: var(--trans-faint-20, oklch(100% 0.05 281 / 0.0625));
  --background-modifier-border-focus: var(--color-base-40, transparent);
  --background-modifier-border-hover: var(--color-base-35, oklch(36.25% 0.00375 281));
  --background-modifier-cover: oklch(10% 0 0 / 0.5);
  --background-modifier-error: var(--color-red, rgb(255, 76, 82));
  --background-modifier-error-hover: var(--color-red, rgb(255, 76, 82));
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 76, 82);
  --background-modifier-form-field: var(--color-base-25, oklch(31.25% 0.00375 281));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: var(--trans-faint-10, oklch(100% 0.05 281 / 0.05));
  --background-modifier-success: var(--color-green, rgb(24, 209, 125));
  --background-modifier-success-rgb: var(--color-green-rgb, 24, 209, 125);
  --background-primary: var(--color-base-00, oklch(23.50% 0.00125 281));
  --background-primary-alt: color-mix(in oklab, var(--background-primary), var(--background-secondary));
  --background-secondary: var(--color-base-20, oklch(27.50% 0.00375 281));
  --background-secondary-alt: var(--color-base-30, oklch(34.50% 0.00375 281));
  --bases-cards-background: var(--trans-faint-05, oklch(100% 0.06 281 / 0.025));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281)));
  --bases-cards-label-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --bases-cards-line-height: 26px;
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --bases-embed-border-radius: var(--radius-s, 0);
  --bases-group-heading-property-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --bases-group-heading-property-weight: var(--font-normal, 420);
  --bases-group-heading-value-weight: var(--font-semibold, 620);
  --bases-header-padding-end: 0;
  --bases-header-padding-start: 0;
  --bases-table-border-color: var(--table-border-color, oklch(100% 0.075 281 / 0.1));
  --bases-table-cell-background-active: var(--background-primary, transparent);
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(212, 86%, 52%, 0.1));
  --bases-table-cell-shadow-active: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%));
  --bases-table-container-border-radius: var(--radius-s, 0);
  --bases-table-group-background: var(--background-primary-alt, transparent);
  --bases-table-header-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --bases-table-header-background-hover: var(--background-modifier-hover, transparent);
  --bases-table-header-color: var(--color-base-55, oklch(57.50% 0.0075 281));
  --bases-table-header-color-hover: var(--color-base-80, oklch(77.50% 0.00375 281));
  --bases-table-header-weight: var(--font-semi-medium, 490);
  --bases-table-row-border-width: var(--border-width, 0);
  --bases-table-row-height: 32px;
  --bases-table-summary-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --bases-table-summary-background-hover: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --bases-table-text-size: var(--table-text-size, 0.90625em);
  --bg-checkbox: radial-gradient(transparent 50%, var(--checkbox-border-color) 55% 60%, transparent 65%);
  --bg-checkbox-active: radial-gradient(#0000000f 52%, #ffffff20 64%);
  --bg-main-inner: oklch(27.00% var(--bsat-str) var(--bhue));
  --bg-main-outer: oklch(26.25% var(--bsat-str) var(--bhue));
  --bg-main-workspace: radial-gradient(at 50% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%);
  --bhue: 281;
  --bl-00: 23.50%;
  --bl-05: 24.00%;
  --bl-10: 26.25%;
  --bl-100: 93.25%;
  --bl-20: 27.50%;
  --bl-25: 31.25%;
  --bl-30: 34.50%;
  --bl-35: 36.25%;
  --bl-40: 43.75%;
  --bl-50: 52.50%;
  --bl-55: 57.50%;
  --bl-60: 63.75%;
  --bl-70: 71.25%;
  --bl-80: 77.50%;
  --bl-90: 85.00%;
  --blockquote-border-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --blockquote-border-thickness: 0.1875rem;
  --blockquote-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --blur-brightness: 1;
  --blur-radius-m: 12px;
  --blur-radius-s: 8px;
  --blur-saturation: 1.125;
  --bodyFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: var(--color-base-100, oklch(93.25% 0 281));
  --bold-modifier: 250;
  --bsat-low: 0;
  --bsat-med: 0.00125;
  --bsat-modal: 0.00175;
  --bsat-str: 0.00375;
  --bsat-trans: 1;
  --bsat-xtr: 0.0075;
  --button-radius: var(--input-radius, 8px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.2375;
  --callout-bug: var(--color-pink-rgb, 250, 153, 205);
  --callout-default: var(--color-blue-rgb, 71, 154, 255);
  --callout-error: var(--color-red-rgb, 255, 76, 82);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--color-red-rgb, 255, 76, 82);
  --callout-important: var(--color-cyan-rgb, 85, 211, 244);
  --callout-info: var(--color-blue-rgb, 71, 154, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 1rem);
  --callout-question: var(--color-orange-rgb, 241, 144, 80);
  --callout-quote: 150, 150, 160;
  --callout-radius: var(--radius-sm, 10px);
  --callout-success: var(--color-green-rgb, 24, 209, 125);
  --callout-summary: var(--color-cyan-rgb, 85, 211, 244);
  --callout-tip: var(--color-cyan-rgb, 85, 211, 244);
  --callout-todo: var(--color-blue-rgb, 71, 154, 255);
  --callout-warning: var(--color-yellow-rgb, 248, 201, 111);
  --canvas-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --canvas-card-label-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --canvas-color-1: var(--color-red-rgb, 255, 76, 82);
  --canvas-color-2: var(--color-orange-rgb, 241, 144, 80);
  --canvas-color-3: var(--color-yellow-rgb, 248, 201, 111);
  --canvas-color-4: var(--color-green-rgb, 24, 209, 125);
  --canvas-color-5: var(--color-blue-rgb, 71, 154, 255);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, oklch(34.50% 0.00375 281));
  --caret-color: var(--text-normal, oklch(85.00% 0.00375 281));
  --checkbox-border-color: var(--color-base-40, oklch(43.75% 0.0075 281));
  --checkbox-border-color-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --checkbox-color: var(--interactive-accent, hsl(212, 86%, 52%));
  --checkbox-color-hover: var(--interactive-accent-hover, color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%)));
  --checkbox-marker-color: var(--text-on-accent, white);
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-size: var(--font-text-size, 1.125rem);
  --checklist-done-color: var(--strikethrough-color, oklch(52.50% 0.0075 281));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--trans-faint-10, oklch(100% 0.05 281 / 0.05));
  --code-background-alt: var(--trans-strong-10, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --code-border-color: var(--trans-faint-20, oklch(100% 0.05 281 / 0.0625));
  --code-border-width: 0;
  --code-bracket-background: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --code-comment: var(--text-faint, oklch(52.50% 0.0075 281));
  --code-function: var(--color-yellow, rgb(248, 201, 111));
  --code-important: var(--color-orange, rgb(241, 144, 80));
  --code-normal: var(--text-normal, oklch(85.00% 0.00375 281));
  --code-operator: var(--color-red, rgb(255, 76, 82));
  --code-property: var(--color-cyan, rgb(85, 211, 244));
  --code-punctuation: var(--text-muted, oklch(71.25% 0.00375 281));
  --code-radius: var(--radius-xs, 6px);
  --code-special: var(--color-red, rgb(255, 76, 82));
  --code-string: var(--color-green, rgb(24, 209, 125));
  --code-tag: var(--color-red, rgb(255, 76, 82));
  --collapse-icon-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --collapse-icon-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --color-accent-1: color-mix(in oklab, var(--color-accent) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, var(--color-accent-1), transparent 8%);
  --color-accent-3: color-mix(in oklab, var(--color-accent) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, var(--text-selection) 30%, transparent 70%);
  --color-base-00: oklch(var(--bl-00) var(--bsat-med) var(--bhue));
  --color-base-05: oklch(var(--bl-05) var(--bsat-low) var(--bhue));
  --color-base-10: oklch(var(--bl-10) var(--bsat-str) var(--bhue));
  --color-base-100: oklch(var(--bl-100) var(--bsat-low) var(--bhue));
  --color-base-20: oklch(var(--bl-20) var(--bsat-str) var(--bhue));
  --color-base-25: oklch(var(--bl-25) var(--bsat-str) var(--bhue));
  --color-base-30: oklch(var(--bl-30) var(--bsat-str) var(--bhue));
  --color-base-35: oklch(var(--bl-35) var(--bsat-str) var(--bhue));
  --color-base-40: oklch(var(--bl-40) var(--bsat-xtr) var(--bhue));
  --color-base-50: oklch(var(--bl-50) var(--bsat-xtr) var(--bhue));
  --color-base-55: oklch(var(--bl-55) var(--bsat-xtr) var(--bhue));
  --color-base-60: oklch(var(--bl-60) var(--bsat-xtr) var(--bhue));
  --color-base-70: oklch(var(--bl-70) var(--bsat-str) var(--bhue));
  --color-base-80: oklch(var(--bl-80) var(--bsat-str) var(--bhue));
  --color-base-90: oklch(var(--bl-90) var(--bsat-str) var(--bhue));
  --color-blue: rgb(71, 154, 255);
  --color-blue-rgb: 71, 154, 255;
  --color-cyan: rgb(85, 211, 244);
  --color-cyan-rgb: 85, 211, 244;
  --color-green: rgb(24, 209, 125);
  --color-green-rgb: 24, 209, 125;
  --color-highlight: rgb(var(--color-highlight-rgb));
  --color-highlight-rgb: var(--highlight-yellow-rgb, 248, 201, 111);
  --color-orange: rgb(241, 144, 80);
  --color-orange-rgb: 241, 144, 80;
  --color-red: rgb(255, 76, 82);
  --color-red-rgb: 255, 76, 82;
  --color-yellow: rgb(248, 201, 111);
  --color-yellow-rgb: 248, 201, 111;
  --control-icon-background: var(--trans-faint-20, oklch(100% 0.05 281 / 0.0625));
  --control-icon-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --control-icon-shadow: var(--glass-base), 0px 0px 12px 0px var(--trans-strong-10);
  --corner-smoothing: 60%;
  --dark: var(--text-normal, var(--color-base-90, oklch(85.00% 0.00375 281)));
  --darkgray: var(--text-normal, var(--color-base-90, oklch(85.00% 0.00375 281)));
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --divider-color-hover: var(--color-accent-3, color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%));
  --divider-width: 0;
  --drag-ghost-background: var(--color-base-00, oklch(23.50% 0.00125 281));
  --drag-ghost-text-color: var(--color-base-90, oklch(85.00% 0.00375 281));
  --dropdown-background: var(--interactive-normal, oklch(34.50% 0.00375 281));
  --dropdown-background-hover: var(--interactive-hover, oklch(36.25% 0.00375 281));
  --fab-bg: var(--background-primary, oklch(23.50% 0.00125 281));
  --fab-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --fab-color-active: var(--text-normal, oklch(85.00% 0.00375 281));
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97);
  --file-header-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --file-header-background-focused: var(--background-primary, oklch(23.50% 0.00125 281));
  --file-header-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: var(--font-semi-medium, 490);
  --file-line-width: 43.75rem;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 28px 5%);
  --file-margins-x: var(--size-4-8, 5%);
  --file-margins-y: var(--size-4-8, 28px);
  --flair-background: var(--interactive-normal, oklch(34.50% 0.00375 281));
  --flair-color: var(--text-normal, oklch(85.00% 0.00375 281));
  --flair-padding: 3px 1px;
  --font-bold: 720;
  --font-extrabold: 820;
  --font-extralight: 305;
  --font-interface-override: "Raveo";
  --font-interface-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: var(--font-interface-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-light: 320;
  --font-medium: 520;
  --font-mermaid: var(--font-text, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-normal: 420;
  --font-normal-linux: var(--font-semi-medium, 490);
  --font-semi-medium: calc(var(--font-normal) + 70);
  --font-semibold: 620;
  --font-small: 0.90625em;
  --font-text-override: "Raveo";
  --font-text-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-thin: 270;
  --font-ui-larger: 24px;
  --font-weight: var(--font-normal, 420);
  --footnote-divider-color: var(--metadata-divider-color, oklch(100% 0.05 281 / 0.0625));
  --footnote-id-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(52.50% 0.0075 281));
  --footnote-input-background-active: var(--metadata-input-background-active, oklch(100% 0.05 281 / 0.05));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 8px);
  --frame-right-space: 160px;
  --frame-right-space-override: 164px;
  --glass-base: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --glass-base-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015);
  --glass-base-m: inset 1px 1.75px 2.25px -1.125px rgba(255, 255, 255, 0.15), inset -1px -1.75px 2.25px -1.125px rgba(255, 255, 255, 0.1), inset 0 8px 16px rgba(255, 255, 255, 0.015);
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from var(--text-error) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from var(--text-error) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.5);
  --graph-controls-width: 232px;
  --graph-node: var(--text-muted, oklch(71.25% 0.00375 281));
  --graph-node-attachment: var(--color-yellow, rgb(248, 201, 111));
  --graph-node-focused: var(--text-accent, transparent);
  --graph-node-tag: var(--color-green, rgb(24, 209, 125));
  --graph-node-unresolved: var(--text-faint, oklch(52.50% 0.0075 281));
  --graph-text: var(--text-normal, oklch(85.00% 0.00375 281));
  --gray: var(--text-muted, var(--color-base-70, oklch(71.25% 0.00375 281)));
  --h1-color: oklch(calc(var(--bl-100) - 3.75%) var(--bsat-low) var(--bhue));
  --h1-size: 2em;
  --h1-size-alt: 1.625em;
  --h1-weight: 330;
  --h1-weight-alt: 570;
  --h2-color: oklch(calc(var(--bl-100) - 5%) var(--bsat-low) var(--bhue));
  --h2-size: 1.5em;
  --h2-weight: 570;
  --h3-color: var(--color-base-90, oklch(85.00% 0.00375 281));
  --h3-size: 1.375em;
  --h3-weight: 570;
  --h4-color: var(--color-base-90, oklch(85.00% 0.00375 281));
  --h4-size: 1.25em;
  --h4-weight: 570;
  --h5-color: var(--color-base-90, oklch(85.00% 0.00375 281));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h6-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-weight: 670;
  --header-height: 56px;
  --headerFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(52.50% 0.0075 281));
  --highlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --highlight-blue-rgb: var(--color-blue-rgb, 71, 154, 255);
  --highlight-cyan-rgb: var(--color-cyan-rgb, 85, 211, 244);
  --highlight-green-rgb: var(--color-green-rgb, 24, 209, 125);
  --highlight-orange-rgb: var(--color-orange-rgb, 241, 144, 80);
  --highlight-pink-rgb: var(--color-pink-rgb, 250, 153, 205);
  --highlight-purple-rgb: var(--color-purple-rgb, 168, 130, 255);
  --highlight-red-rgb: var(--color-red-rgb, 255, 76, 82);
  --highlight-yellow-rgb: var(--color-yellow-rgb, 248, 201, 111);
  --hotkey-gradient: linear-gradient(to top, var(--color-accent) -10%, var(--color-accent-4) 210%);
  --hr-color: var(--trans-faint-30, oklch(100% 0.075 281 / 0.1));
  --icon-color: var(--color-base-60, oklch(63.75% 0.0075 281));
  --icon-color-active: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --icon-color-focused: var(--icon-color-hover, oklch(85.00% 0.00375 281));
  --icon-color-hover: var(--text-normal, oklch(85.00% 0.00375 281));
  --icon-m-stroke-width: 1.875px;
  --icon-stroke: var(--icon-m-stroke-width, 1.875px);
  --icon-stroke-thick: 2.25px;
  --icon-xl: 28px;
  --icon-xs-stroke-width: 2.125px;
  --indent-unit: 0.375em;
  --indentation-guide-color: var(--trans-faint-30, oklch(100% 0.075 281 / 0.1));
  --indentation-guide-width: var(--border-width, 0);
  --indentation-guide-width-active: var(--border-width, 0);
  --inline-title-color: var(--h1-color, oklch(89.5% 0 281));
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 330);
  --input-border-width: var(--border-width, 0);
  --input-date-separator: var(--text-faint, oklch(52.50% 0.0075 281));
  --input-font-weight: var(--font-normal, 420);
  --input-height: 28px;
  --input-placeholder-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --input-radius: var(--radius-s, 8px);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent, hsl(212, 86%, 52%));
  --interactive-accent-hover: color-mix(in oklab, var(--color-accent) 62.5%, var(--color-accent-1));
  --interactive-accent-hsl: var(--color-accent-hsl, 212, 86%, 52%);
  --interactive-hover: var(--trans-faint-30, oklch(36.25% 0.00375 281));
  --interactive-normal: var(--color-base-30, oklch(34.50% 0.00375 281));
  --light: var(--background-primary, var(--color-base-00, oklch(23.50% 0.00125 281)));
  --lightgray: var(--background-secondary, var(--color-base-20, oklch(27.50% 0.00375 281)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --link-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --link-color-sidebar: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --link-external-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --link-unresolved-color: oklch(from var(--color-accent-1) l c h / var(--link-unresolved-lch));
  --link-unresolved-lch: 0.75;
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 420);
  --list-bullet-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --list-dash-color: var(--trans-faint-60, oklch(100% 0.02 281 / 0.35));
  --list-marker-color: var(--color-base-50, oklch(52.50% 0.0075 281));
  --list-marker-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --list-marker-color-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --list-spacing: 0.125em;
  --math-color: var(--color-base-100, oklch(93.25% 0 281));
  --menu-background: var(--background-primary-alt, color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281)));
  --menu-border-color: var(--trans-faint-40, oklch(100% 0.04 281 / 0.125));
  --menu-radius: var(--radius-ml, 14px);
  --menu-shadow: var(--shadow-normal, 0px 3px 18px 0px oklch(0 0 0 / 0.1875));
  --metadata-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --metadata-border-radius: var(--radius-m, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --metadata-gap: 2px;
  --metadata-input-background-active: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --metadata-input-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-longtext-lines: 5;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 6px 8px);
  --metadata-input-text-color: var(--text-normal, oklch(85.00% 0.00375 281));
  --metadata-label-background-active: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --metadata-label-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-weight: var(--font-semi-medium, 490);
  --metadata-label-text-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --metadata-label-text-color-hover: var(--icon-color, oklch(63.75% 0.0075 281));
  --metadata-label-width: 10em;
  --metadata-property-background-active: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --metadata-property-box-shadow-focus: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%));
  --metadata-property-box-shadow-hover: 0 0 0 2.5px var(--background-modifier-hover);
  --mobile-nav-fade-bg: linear-gradient(oklch(from var(--background-secondary) l c h), transparent calc(var(--touch-size-l)*1.5));
  --modal-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --modal-border-width: var(--border-width, 0);
  --modal-community-header-bg: var(--trans-strong-20, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5));
  --modal-community-item-bg: var(--trans-strong-40, oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5));
  --modal-radius: var(--radius-xxl, 22px);
  --modal-small-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --nav-collapse-icon-color: var(--trans-faint-60, oklch(100% 0.02 281 / 0.35));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(52.50% 0.0075 281));
  --nav-folder-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --nav-header-bg: var(--divider-color, oklch(100% 0.05 281 / 0.0625));
  --nav-header-timing: var(--vl-ease-out, cubic-bezier(0.3, 0.75, 0, 1));
  --nav-heading-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --nav-heading-color-collapsed: var(--text-faint, oklch(52.50% 0.0075 281));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --nav-heading-color-hover: var(--text-normal, oklch(85.00% 0.00375 281));
  --nav-heading-weight: var(--font-medium, 520);
  --nav-heading-weight-hover: var(--font-medium, 520);
  --nav-indentation-guide-color: var(--trans-faint-30, oklch(100% 0.075 281 / 0.1));
  --nav-indentation-guide-width: var(--indentation-guide-width, 0);
  --nav-item-background-active: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, oklch(100% 0.05 281 / 0.05));
  --nav-item-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --nav-item-color-active: var(--text-normal, oklch(85.00% 0.00375 281));
  --nav-item-color-highlighted: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-hover: var(--text-normal, oklch(85.00% 0.00375 281));
  --nav-item-color-selected: var(--text-normal, oklch(85.00% 0.00375 281));
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --nav-tag-color-active: var(--text-muted, oklch(71.25% 0.00375 281));
  --nav-tag-color-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --nav-tag-radius: var(--radius-s, 8px);
  --nav-tag-weight: var(--font-semibold, 620);
  --nav-text-color: var(--text-normal, oklch(85.00% 0.00375 281));
  --paint-description: "The default dark color scheme for Velocity. A deep dark gray with a tinge of blue.";
  --paint-image: url(data:image/webpbase64,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);
  --pdf-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --pdf-page-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --pdf-sidebar-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --pdf-spread-shadow: none;
  --pdf-thumbnail-shadow: var(--shadow-input, 0 0 0 1px oklch(100% 0.05 281 / 0.0625));
  --pill-background: var(--code-background, oklch(100% 0.05 281 / 0.05));
  --pill-background-hover: var(--code-background, oklch(100% 0.05 281 / 0.05));
  --pill-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(36.25% 0.00375 281));
  --pill-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --pill-color-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --pill-color-remove: var(--text-faint, oklch(52.50% 0.0075 281));
  --pill-color-remove-hover: var(--text-on-accent, white);
  --pill-radius: var(--radius-l, 18px);
  --pill-weight: var(--font-semi-medium, 490);
  --prompt-backdrop-filter: var(--blur-m, blur(12px) saturate(1.125) brightness(1));
  --prompt-background: var(--modal-background, oklch(27.75% 0.00175 281 / 0.625));
  --prompt-border-color: var(--menu-border-color, oklch(100% 0.04 281 / 0.125));
  --prompt-input-height: 48px;
  --radius-l: 18px;
  --radius-m: 12px;
  --radius-ml: 14px;
  --radius-prompt: 24px;
  --radius-s: 8px;
  --radius-settings: 28px;
  --radius-sm: 10px;
  --radius-xl: 20px;
  --radius-xs: 6px;
  --radius-xxl: 22px;
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent)));
  --raised-blur: var(--blur-s, blur(8px) saturate(1.125) brightness(1));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px 12px 8px);
  --ribbon-width: 56px;
  --scrollbar-active-thumb-bg: var(--color-base-35, oklch(36.25% 0.00375 281));
  --scrollbar-radius: var(--radius-l, 18px);
  --scrollbar-thumb-bg: var(--color-base-25, oklch(31.25% 0.00375 281));
  --search-clear-button-color: var(--color-base-50, oklch(52.50% 0.0075 281));
  --search-icon-color: var(--color-base-50, oklch(52.50% 0.0075 281));
  --search-icon-size: 17px;
  --search-result-background: var(--trans-strong-10, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --secondary: var(--text-accent, var(--color-accent-1, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%)));
  --setting-group-heading-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --setting-group-heading-size: var(--font-ui-medium, 18px);
  --setting-group-heading-weight: var(--font-medium, 520);
  --setting-item-background: color-mix(in oklab, var(--background-primary) 87.5%, var(--background-secondary));
  --setting-items-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --setting-items-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --setting-items-padding: calc(var(--vl-layout-padding) + 8px);
  --setting-items-radius: calc(var(--radius-ml) + 2px);
  --settings-background: color-mix(in oklab, var(--color-base-10) 70%, var(--color-base-20));
  --shadow-button: var(--glass-button), var(--shadow-faint);
  --shadow-button-error: var(--glass-button-error), var(--shadow-faint);
  --shadow-canvas-node: 0px 0px 16px 0px var(--trans-black-10);
  --shadow-fab: var(--shadow-input), 0px 2px 12px 0px var(--trans-black-10);
  --shadow-faint: 0px 3px 15px 0px var(--trans-strong-00);
  --shadow-input: 0 0 0 0.5px var(--trans-faint-40);
  --shadow-input-active: 0 0 0 2.5px var(--color-accent-3);
  --shadow-l: var(--glass-base-l), var(--shadow-strong);
  --shadow-muted: 0px 3px 18px 0px var(--trans-black-10);
  --shadow-normal: 0px 3px 18px 0px var(--trans-black-10);
  --shadow-s: var(--glass-base), var(--shadow-normal);
  --shadow-setting-items: 0 4px 12px 0 var(--trans-strong-10);
  --shadow-setting-items-top: inset 1px 2px 2px 0 var(--trans-strong-10), 0px 1px 9px var(--trans-faint-05);
  --shadow-sidebar: 0px 0px 12px 0px var(--trans-strong-20);
  --shadow-strong: 0px 0px 24px 0px var(--trans-black-00);
  --shadow-suggestion-item: var(--glass-button-l), var(--shadow-muted);
  --shadow-tab: var(--glass-base, inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025));
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from var(--interactive-accent) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px var(--trans-faint-30), 0 0 20px var(--trans-strong-00);
  --shadow-workspace-multi: 0 0 0 0.5px var(--trans-faint-30);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(71.25% 0.00375 281));
  --shiki-code-background: var(--code-background, oklch(100% 0.05 281 / 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, oklch(52.50% 0.0075 281));
  --shiki-code-function: var(--color-green, rgb(24, 209, 125));
  --shiki-code-important: var(--color-orange, rgb(241, 144, 80));
  --shiki-code-normal: var(--text-muted, oklch(71.25% 0.00375 281));
  --shiki-code-property: var(--color-cyan, rgb(85, 211, 244));
  --shiki-code-punctuation: var(--text-muted, oklch(71.25% 0.00375 281));
  --shiki-code-string: var(--color-yellow, rgb(248, 201, 111));
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --shiki-gutter-text-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(71.25% 0.00375 281));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(71.25% 0.00375 281));
  --shiki-terminal-dots-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --sidebar-left-toggle-inner-width: 12%;
  --sidebar-right-toggle-inner-width: 12%;
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(36.25% 0.00375 281));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: 12px;
  --slider-thumb-radius: var(--slider-thumb-height, 12px);
  --slider-thumb-width: 12px;
  --slider-thumb-y: -3px;
  --slider-track-background: var(--trans-faint-40, oklch(100% 0.04 281 / 0.125));
  --slider-track-height: 20px;
  --stacked-shadow-color: var(--trans-black-10, oklch(0 0 0 / 0.1875));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, oklch(100% 0.05 281 / 0.0625));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-radius: var(--radius-l) 0 0 var(--radius-l, 18px 0 0 18px);
  --status-bar-text-color: var(--text-muted, oklch(71.25% 0.00375 281));
  --strikethrough-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --suggestion-background: var(--background-primary, oklch(23.50% 0.00125 281));
  --sync-avatar-color-1: var(--color-red, rgb(255, 76, 82));
  --sync-avatar-color-2: var(--color-orange, rgb(241, 144, 80));
  --sync-avatar-color-3: var(--color-yellow, rgb(248, 201, 111));
  --sync-avatar-color-4: var(--color-green, rgb(24, 209, 125));
  --sync-avatar-color-5: var(--color-cyan, rgb(85, 211, 244));
  --sync-avatar-color-6: var(--color-blue, rgb(71, 154, 255));
  --tab-background-active: var(--background-primary, oklch(23.50% 0.00125 281));
  --tab-close-bg: oklch(calc(var(--bl-35) + 2%) var(--bsat-str) var(--bhue) / 0.875);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, oklch(36.25% 0.00375 281));
  --tab-font-weight: var(--font-normal, 420);
  --tab-max-width: 240px;
  --tab-outline-color: var(--divider-color, oklch(100% 0.05 281 / 0.0625));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 8px);
  --tab-right-fade: linear-gradient(to left, oklch(var(--bl-25) calc(var(--bsat-str)*1.25) var(--bhue)) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(calc(var(--bl-20) + 1%) var(--bsat-str) var(--bhue)) 80%, transparent);
  --tab-sidebar-bg: var(--trans-faint-20, oklch(100% 0.05 281 / 0.0625));
  --tab-sidebar-container-bg: var(--trans-faint-05, oklch(100% 0.06 281 / 0.025));
  --tab-stacked-font-weight: var(--font-medium, 520);
  --tab-stacked-header-width: var(--header-height, 56px);
  --tab-stacked-pane-width: var(--file-line-width, 43.75rem);
  --tab-stacked-shadow: -8px 0 8px 0 var(--stacked-shadow-color);
  --tab-switcher-background: var(--background-secondary, oklch(27.50% 0.00375 281));
  --tab-switcher-preview-radius: var(--radius-xl, 20px);
  --tab-text-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --tab-text-color-active: var(--color-base-100, oklch(93.25% 0 281));
  --tab-text-color-focused: var(--icon-color, oklch(63.75% 0.0075 281));
  --tab-text-color-focused-active: var(--color-base-100, oklch(93.25% 0 281));
  --tab-text-color-focused-active-current: var(--color-base-100, oklch(93.25% 0 281));
  --tab-text-color-focused-highlighted: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --table-border-color: var(--trans-faint-30, oklch(100% 0.075 281 / 0.1));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(212, 86%, 52%));
  --table-drag-handle-color: var(--text-faint, oklch(52.50% 0.0075 281));
  --table-header-border-color: var(--table-border-color, oklch(100% 0.075 281 / 0.1));
  --table-header-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --table-header-size: var(--table-text-size, 0.90625em);
  --table-header-weight: var(--font-medium, 520);
  --table-line-height: var(--line-height-normal, 1.6);
  --table-row-alt-background: var(--table-row-bg, oklch(100% 0.075 281 / 0.015));
  --table-row-alt-background-hover: var(--table-row-bg, oklch(100% 0.075 281 / 0.015));
  --table-row-bg: var(--trans-faint-00, oklch(100% 0.075 281 / 0.015));
  --table-selection-border-color: var(--interactive-accent, hsl(212, 86%, 52%));
  --table-text-size: var(--font-small, 0.90625em);
  --table-text-weight: var(--font-normal, 420);
  --tag-border-color: oklch(from var(--interactive-accent) l c h / 0.025);
  --tag-color: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --tag-color-hover: var(--text-accent, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --tag-padding-x: 0.6875em;
  --tag-padding-y: 0.3125em;
  --tag-size: var(--font-smallest, 0.8em);
  --tag-weight: var(--font-semi-medium, 490);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%)));
  --text-accent: var(--color-accent-1, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --text-accent-hover: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --text-error: var(--color-red, rgb(255, 76, 82));
  --text-faint: var(--color-base-50, oklch(52.50% 0.0075 281));
  --text-highlight-bg: oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: var(--color-highlight-rgb, 248, 201, 111);
  --text-highlight-bg-search: oklch(from var(--color-highlight) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: var(--color-base-70, oklch(71.25% 0.00375 281));
  --text-normal: var(--color-base-90, oklch(85.00% 0.00375 281));
  --text-selection: oklab(from var(--color-accent) l a b / 0.25);
  --text-success: var(--color-green, rgb(24, 209, 125));
  --text-warning: var(--color-orange, rgb(241, 144, 80));
  --textHighlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --titleFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, oklch(100% 0.05 281 / 0.0625));
  --titlebar-height: 36px;
  --titlebar-text-color: var(--trans-faint-60, oklch(100% 0.02 281 / 0.35));
  --titlebar-text-color-focused: var(--text-muted, oklch(71.25% 0.00375 281));
  --titlebar-text-weight: var(--font-semibold, 620);
  --toggle-border-width: 4px;
  --toggle-gradient: linear-gradient(to bottom, var(--color-accent) -30%, var(--color-accent-4) 180%);
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 36px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --toggle-track-bg: var(--trans-faint-50, oklch(100% 0.02 281 / 0.2));
  --toggle-width: 44px;
  --traffic-lights-offset-x: var(--header-height, 56px);
  --traffic-lights-offset-y: var(--header-height, 56px);
  --trans-black-00: oklch(0 0 0 / 0.375);
  --trans-black-10: oklch(0 0 0 / 0.1875);
  --trans-faint-00: oklch(100% calc(var(--bsat-trans)*0.075) var(--bhue) / 0.015);
  --trans-faint-05: oklch(100% calc(var(--bsat-trans)*0.06) var(--bhue) / 0.025);
  --trans-faint-10: oklch(100% calc(var(--bsat-trans)*0.05) var(--bhue) / 0.05);
  --trans-faint-20: oklch(100% calc(var(--bsat-trans)*0.05) var(--bhue) / 0.0625);
  --trans-faint-25: oklch(100% calc(var(--bsat-trans)*0.05) var(--bhue) / 0.08125);
  --trans-faint-30: oklch(100% calc(var(--bsat-trans)*0.075) var(--bhue) / 0.1);
  --trans-faint-40: oklch(100% calc(var(--bsat-trans)*0.04) var(--bhue) / 0.125);
  --trans-faint-50: oklch(100% calc(var(--bsat-trans)*0.02) var(--bhue) / 0.2);
  --trans-faint-60: oklch(100% calc(var(--bsat-trans)*0.02) var(--bhue) / 0.35);
  --trans-strong-00: oklch(from var(--color-base-00) l var(--bsat-str) h / 0.75);
  --trans-strong-05: oklch(from var(--color-base-00) l var(--bsat-str) h / 0.625);
  --trans-strong-10: oklch(from var(--color-base-05) l var(--bsat-str) h / 0.375);
  --trans-strong-20: oklch(from var(--color-base-20) l var(--bsat-str) h / 0.5);
  --trans-strong-30: oklch(from var(--color-base-30) l var(--bsat-str) h / 0.5);
  --trans-strong-40: oklch(from var(--color-base-30) l var(--bsat-str) h / 0.5);
  --trans-white-00: oklch(var(--bl-100) 0 0 / 0.75);
  --trans-white-10: oklch(var(--bl-100) 0 0 / 0.625);
  --vault-profile-color: var(--icon-color, oklch(63.75% 0.0075 281));
  --vault-profile-color-hover: var(--text-muted, oklch(71.25% 0.00375 281));
  --vault-profile-font-size: var(--font-ui-small, 18px);
  --vault-profile-font-weight: var(--font-normal, 420);
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1);
  --vl-layout-padding: 8px;
  --warning-gradient: linear-gradient(to top, var(--color-red) -30%, var(--trans-strong-20) 180%);
  --workspace-border-color: var(--trans-faint-25, oklch(100% 0.05 281 / 0.08125));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-form-field: var(--search-result-background, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --bases-table-header-background: var(--background-secondary, oklch(27.50% 0.00375 281));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(1 0.05 281 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --background-modifier-form-field: var(--search-result-background, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  --bases-table-header-background: var(--background-secondary, oklch(27.50% 0.00375 281));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: oklch(1 0.05 281 / 0.0625);
  color: oklch(0.85 0.00375 281);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0 281) none 0px;
  text-decoration-color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(0.85 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.00375 281) none 0px;
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(0.85 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.00375 281) none 0px;
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.9325 0 281) none 0px;
  text-decoration-color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0 281) none 0px;
  text-decoration-color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.8 0.166102 82.1813 / 0.33));
  color: var(--text-normal, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.9325 0 281) none 0px;
  text-decoration-color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body del {
  --bold-color: var(--strikethrough-color, oklch(52.50% 0.0075 281));
  --italic-color: var(--strikethrough-color, oklch(52.50% 0.0075 281));
  --text-highlight-bg: var(--hr-color, oklch(100% 0.075 281 / 0.1));
  color: var(--strikethrough-color, oklch(0.525 0.0075 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.525 0.0075 281) none 0px;
  text-decoration-color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  background-color: var(--checkbox-color, rgb(27, 126, 238));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.7125 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.7125 0.00375 281) none 0px;
  text-decoration-color: oklch(0.7125 0.00375 281);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-external-color, oklab(0.744327 -0.0296497 -0.117664));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.744327 -0.0296497 -0.117664) none 0px;
  text-decoration-color: oklab(0.744327 -0.0296497 -0.117664);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-color, oklab(0.744327 -0.0296497 -0.117664));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.744327 -0.0296497 -0.117664) none 0px;
  text-decoration-color: oklab(0.744327 -0.0296497 -0.117664);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 420);
  color: var(--link-unresolved-color, oklch(0.744327 0.121342 255.857 / 0.75));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklch(0.744327 0.121342 255.857 / 0.75) none 0px;
  text-decoration: rgba(27, 126, 238, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(27, 126, 238, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body ol > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  margin-left: 28px;
  padding-bottom: var(--list-spacing, 2px);
  padding-top: var(--list-spacing, 2px);
}

html[saved-theme="dark"] body ul > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  margin-left: 28px;
  padding-bottom: var(--list-spacing, 2px);
  padding-top: var(--list-spacing, 2px);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 420);
  color: var(--text-faint, oklch(0.525 0.0075 281));
}

html[saved-theme="dark"] body blockquote {
  --bold-color: var(--blockquote-color, oklch(71.25% 0.00375 281));
  --italic-color: var(--blockquote-color, oklch(71.25% 0.00375 281));
  --math-color: color-mix(in oklab, var(--blockquote-color), var(--color-base-80));
  color: var(--blockquote-color, oklch(0.7125 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body table {
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 18px);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, oklch(1 0.075 281 / 0.015));
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-width: 0px;
  border-left-color: oklch(0.85 0.00375 281);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.85 0.00375 281);
  border-right-width: 0px;
  border-top-color: oklch(0.85 0.00375 281);
  border-top-width: 0px;
  color: var(--table-text-color, oklch(0.85 0.00375 281));
  font-weight: var(--font-normal, 420);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(1 0.075 281 / 0.1);
  border-bottom-width: 2px;
  border-left-color: oklch(0.6375 0.0075 281);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.6375 0.0075 281);
  border-right-width: 0px;
  border-top-color: oklch(0.6375 0.0075 281);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, oklch(0.6375 0.0075 281));
  font-weight: var(--table-header-weight, 520);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, oklch(1 0.05 281 / 0.05));
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, oklch(0.85 0.00375 281));
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  --code-radius: var(--radius-sm, 10px);
  background-color: var(--code-background, oklch(1 0.05 281 / 0.05));
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(100% 0.05 281 / 0.05));
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.895 0 281);
  border-bottom-left-radius: var(--radius-xs, 10px);
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.895 0 281);
  border-radius: 10px;
  border-right-color: oklch(0.895 0 281);
  border-top-color: oklch(0.895 0 281);
  border-top-left-radius: var(--radius-xs, 10px);
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.00375 281);
  border-radius: 10px;
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklab(0.255 0.000477022 -0.00245407));
  border-bottom-color: oklch(0.7125 0.00375 281);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.7125 0.00375 281);
  border-radius: 12px;
  border-right-color: oklch(0.7125 0.00375 281);
  border-top-color: oklch(0.7125 0.00375 281);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.7125 0.00375 281));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-left-width: 0px;
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  margin-left: -27px;
  transition: 0.21s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  --bold-color: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --italic-color: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  --text-normal: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  color: oklch(0.525 0.0075 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  --bold-color: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --italic-color: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  --text-normal: var(--checklist-done-color, oklch(52.50% 0.0075 281));
  color: oklch(0.525 0.0075 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
  color: oklch(0.85 0.00375 281);
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.00375 281));
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 144, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 201, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 154, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 76, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 76, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 76, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 76, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 154, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 201, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 201, 111);
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
  background-color: rgb(255, 76, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 209, 125);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 209, 125);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(24, 209, 125);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 85, 211, 244);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(85, 211, 244, 0.063), rgba(85, 211, 244, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(85, 211, 244, 0.063), rgba(85, 211, 244, 0.114));
  border-bottom-color: rgba(85, 211, 244, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(85, 211, 244, 0.24);
  border-right-color: rgba(85, 211, 244, 0.24);
  border-top-color: rgba(85, 211, 244, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 250, 153, 205);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(250, 153, 205, 0.063), rgba(250, 153, 205, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(250, 153, 205, 0.063), rgba(250, 153, 205, 0.114));
  border-bottom-color: rgba(250, 153, 205, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(250, 153, 205, 0.24);
  border-right-color: rgba(250, 153, 205, 0.24);
  border-top-color: rgba(250, 153, 205, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 76, 82);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 76, 82, 0.063), rgba(255, 76, 82, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 76, 82, 0.063), rgba(255, 76, 82, 0.114));
  border-bottom-color: rgba(255, 76, 82, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 76, 82, 0.24);
  border-right-color: rgba(255, 76, 82, 0.24);
  border-top-color: rgba(255, 76, 82, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(168, 130, 255, 0.063), rgba(168, 130, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(168, 130, 255, 0.063), rgba(168, 130, 255, 0.114));
  border-bottom-color: rgba(168, 130, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(168, 130, 255, 0.24);
  border-right-color: rgba(168, 130, 255, 0.24);
  border-top-color: rgba(168, 130, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 76, 82);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 76, 82, 0.063), rgba(255, 76, 82, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 76, 82, 0.063), rgba(255, 76, 82, 0.114));
  border-bottom-color: rgba(255, 76, 82, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 76, 82, 0.24);
  border-right-color: rgba(255, 76, 82, 0.24);
  border-top-color: rgba(255, 76, 82, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 71, 154, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114));
  border-bottom-color: rgba(71, 154, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(71, 154, 255, 0.24);
  border-right-color: rgba(71, 154, 255, 0.24);
  border-top-color: rgba(71, 154, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="math-cyan"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-cyan-rgb, 85, 211, 244);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(85, 211, 244, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(85, 211, 244, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(85, 211, 244, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(85, 211, 244, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-gray"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-blue-rgb, 100, 100, 100);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 100, 100, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.5);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-green"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-green-rgb, 24, 209, 125);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(24, 209, 125, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(24, 209, 125, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(24, 209, 125, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(24, 209, 125, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-grey"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-blue-rgb, 100, 100, 100);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 100, 100, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-orange"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-orange-rgb, 241, 144, 80);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(241, 144, 80, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(241, 144, 80, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(241, 144, 80, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(241, 144, 80, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-pink"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-pink-rgb, 250, 153, 205);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(250, 153, 205, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(250, 153, 205, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(250, 153, 205, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(250, 153, 205, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-purple"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-purple-rgb, 168, 130, 255);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(168, 130, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(168, 130, 255, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(168, 130, 255, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(168, 130, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-red"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-red-rgb, 255, 76, 82);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(255, 76, 82, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 76, 82, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(255, 76, 82, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(255, 76, 82, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="math-yellow"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 86%, 52%, 0.1);
  --background-modifier-border: oklch(100% 0.05 281 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.00375 281);
  --background-modifier-error: rgb(255, 76, 82);
  --background-modifier-error-hover: rgb(255, 76, 82);
  --background-modifier-error-rgb: 255, 76, 82;
  --background-modifier-form-field: oklch(31.25% 0.00375 281);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.05 281 / 0.05);
  --background-modifier-success: rgb(24, 209, 125);
  --background-modifier-success-rgb: 24, 209, 125;
  --background-primary: oklch(23.50% 0.00125 281);
  --background-primary-alt: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --background-secondary: oklch(27.50% 0.00375 281);
  --background-secondary-alt: oklch(34.50% 0.00375 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0075 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(27.00% 0.00375 281);
  --bg-main-outer: oklch(26.25% 0.00375 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(27.00% 0.00375 281) 0%, oklch(26.25% 0.00375 281) 200%);
  --blockquote-border-color: oklch(52.50% 0.0075 281);
  --blockquote-color: oklch(71.25% 0.00375 281);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 250, 153, 205;
  --callout-color: var(--color-yellow-rgb, 248, 201, 111);
  --callout-default: 71, 154, 255;
  --callout-error: 255, 76, 82;
  --callout-example: 168, 130, 255;
  --callout-fail: 255, 76, 82;
  --callout-important: 85, 211, 244;
  --callout-info: 71, 154, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 144, 80;
  --callout-radius: 10px;
  --callout-success: 24, 209, 125;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 71, 154, 255;
  --callout-warning: 248, 201, 111;
  --canvas-background: oklch(23.50% 0.00125 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.00375 281);
  --caret-color: oklch(85.00% 0.00375 281);
  --checkbox-border-color: oklch(43.75% 0.0075 281);
  --checkbox-border-color-hover: oklch(71.25% 0.00375 281);
  --checkbox-color: hsl(212, 86%, 52%);
  --checkbox-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0075 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.05 281 / 0.05);
  --code-background-alt: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --code-border-color: oklch(100% 0.05 281 / 0.0625);
  --code-bracket-background: oklch(100% 0.05 281 / 0.05);
  --code-comment: oklch(52.50% 0.0075 281);
  --code-function: rgb(248, 201, 111);
  --code-important: rgb(241, 144, 80);
  --code-keyword: #fa99cd;
  --code-normal: oklch(85.00% 0.00375 281);
  --code-operator: rgb(255, 76, 82);
  --code-property: rgb(85, 211, 244);
  --code-punctuation: oklch(71.25% 0.00375 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(255, 76, 82);
  --code-string: rgb(24, 209, 125);
  --code-tag: rgb(255, 76, 82);
  --code-value: #a882ff;
  --collapse-icon-color: oklch(52.50% 0.0075 281);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent: hsl(212, 86%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 212, 86%, 52%;
  --color-base-00: oklch(23.50% 0.00125 281);
  --color-base-05: oklch(24.00% 0 281);
  --color-base-10: oklch(26.25% 0.00375 281);
  --color-base-100: oklch(93.25% 0 281);
  --color-base-20: oklch(27.50% 0.00375 281);
  --color-base-25: oklch(31.25% 0.00375 281);
  --color-base-30: oklch(34.50% 0.00375 281);
  --color-base-35: oklch(36.25% 0.00375 281);
  --color-base-40: oklch(43.75% 0.0075 281);
  --color-base-50: oklch(52.50% 0.0075 281);
  --color-base-55: oklch(57.50% 0.0075 281);
  --color-base-60: oklch(63.75% 0.0075 281);
  --color-base-70: oklch(71.25% 0.00375 281);
  --color-base-80: oklch(77.50% 0.00375 281);
  --color-base-90: oklch(85.00% 0.00375 281);
  --color-highlight: rgb(248, 201, 111);
  --color-highlight-rgb: 248, 201, 111;
  --control-icon-background: oklch(100% 0.05 281 / 0.0625);
  --control-icon-color: oklch(77.50% 0.00375 281);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --divider-color: oklch(100% 0.05 281 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.00375 281);
  --dropdown-background-hover: oklch(36.25% 0.00375 281);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(23.50% 0.00125 281);
  --fab-color: oklch(63.75% 0.0075 281);
  --fab-color-active: oklch(85.00% 0.00375 281);
  --flair-background: oklch(34.50% 0.00375 281);
  --flair-color: oklch(85.00% 0.00375 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.00375 281);
  --graph-node: oklch(71.25% 0.00375 281);
  --graph-node-attachment: rgb(248, 201, 111);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(24, 209, 125);
  --graph-node-unresolved: oklch(52.50% 0.0075 281);
  --graph-text: oklch(85.00% 0.00375 281);
  --h1-color: oklch(89.5% 0 281);
  --h2-color: oklch(88.25% 0 281);
  --h3-color: oklch(85.00% 0.00375 281);
  --h4-color: oklch(85.00% 0.00375 281);
  --h5-color: oklch(85.00% 0.00375 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.00375 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0075 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 71, 154, 255;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 24, 209, 125;
  --highlight-orange-rgb: 241, 144, 80;
  --highlight-pink-rgb: 250, 153, 205;
  --highlight-purple-rgb: 168, 130, 255;
  --highlight-red-rgb: 255, 76, 82;
  --highlight-yellow-rgb: 248, 201, 111;
  --hotkey-gradient: linear-gradient(to top, hsl(212, 86%, 52%) -10%, color-mix(in oklab, oklab(from hsl(212, 86%, 52%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.075 281 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(212, 86%, 52%);
  --interactive-accent-hover: color-mix(in oklab, hsl(212, 86%, 52%) 62.5%, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --interactive-accent-hsl: 212, 86%, 52%;
  --interactive-hover: oklch(36.25% 0.00375 281);
  --interactive-normal: oklch(34.50% 0.00375 281);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(212, 86%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.00375 281);
  --list-dash-color: oklch(100% 0.02 281 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0 281);
  --menu-background: color-mix(in oklab, oklch(23.50% 0.00125 281), oklch(27.50% 0.00375 281));
  --menu-border-color: oklch(100% 0.04 281 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(23.50% 0.00125 281);
  --pdf-page-background: oklch(23.50% 0.00125 281);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(23.50% 0.00125 281);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.05 281 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent) linear-gradient(oklch(34.50% 0.00375 281), color-mix(in srgb, oklch(34.50% 0.00375 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.00375 281);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.00375 281);
  --search-clear-button-color: oklch(52.50% 0.0075 281);
  --search-icon-color: oklch(52.50% 0.0075 281);
  --search-result-background: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0075 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(23.50% 0.00125 281) 87.5%, oklch(27.50% 0.00375 281));
  --setting-items-background: oklch(23.50% 0.00125 281);
  --setting-items-border-color: oklch(100% 0.05 281 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(26.25% 0.00375 281) 70%, oklch(27.50% 0.00375 281));
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from rgb(255, 76, 82) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.04 281 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(212, 86%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375), 0px 1px 9px oklch(100% 0.06 281 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(212, 86%, 52%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1), 0 0 20px oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.075 281 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.00375 281);
  --shiki-code-background: oklch(100% 0.05 281 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0075 281);
  --shiki-code-function: rgb(24, 209, 125);
  --shiki-code-important: rgb(241, 144, 80);
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: oklch(71.25% 0.00375 281);
  --shiki-code-property: rgb(85, 211, 244);
  --shiki-code-punctuation: oklch(71.25% 0.00375 281);
  --shiki-code-string: rgb(248, 201, 111);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: oklch(100% 0.05 281 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0075 281);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.00375 281);
  --shiki-highlight-green: rgba(24, 209, 125, 0.5);
  --shiki-highlight-green-background: rgba(24, 209, 125, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.00375 281);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 76, 82, 0.5);
  --shiki-highlight-red-background: rgba(255, 76, 82, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0075 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0075 281);
  --suggestion-background: oklch(23.50% 0.00125 281);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(255, 76, 82);
  --sync-avatar-color-2: rgb(241, 144, 80);
  --sync-avatar-color-3: rgb(248, 201, 111);
  --sync-avatar-color-4: rgb(24, 209, 125);
  --sync-avatar-color-5: rgb(85, 211, 244);
  --sync-avatar-color-6: rgb(71, 154, 255);
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: oklch(23.50% 0.00125 281);
  --tab-close-bg: oklch(38.25% 0.00375 281 / 0.875);
  --tab-divider-color: oklch(36.25% 0.00375 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.05 281 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.00469 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.00375 281) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.05 281 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.06 281 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.00375 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.00375 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 86%, 52%);
  --tab-text-color: oklch(63.75% 0.0075 281);
  --tab-text-color-active: oklch(93.25% 0 281);
  --tab-text-color-focused: oklch(63.75% 0.0075 281);
  --tab-text-color-focused-active: oklch(93.25% 0 281);
  --tab-text-color-focused-active-current: oklch(93.25% 0 281);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.05 281 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(212, 86%, 52%);
  --table-drag-handle-color: oklch(52.50% 0.0075 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.075 281 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0075 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.075 281 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.075 281 / 0.015);
  --table-row-bg: oklch(100% 0.075 281 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 86%, 52%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(212, 86%, 52%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 86%, 52%, 0.1);
  --tag-background-hover: hsla(212, 86%, 52%, 0.2);
  --tag-border-color: oklch(from hsl(212, 86%, 52%) l c h / 0.025);
  --tag-border-color-hover: hsla(212, 86%, 52%, 0.15);
  --tag-color: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%);
  --text-error: rgb(255, 76, 82);
  --text-faint: oklch(52.50% 0.0075 281);
  --text-highlight-bg: oklch(from rgb(248, 201, 111) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 248, 201, 111;
  --text-highlight-bg-search: oklch(from rgb(248, 201, 111) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.00375 281);
  --text-normal: oklch(85.00% 0.00375 281);
  --text-selection: oklab(from hsl(212, 86%, 52%) l a b / 0.25);
  --text-success: rgb(24, 209, 125);
  --text-warning: rgb(241, 144, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.075 281 / 0.015);
  --trans-faint-05: oklch(100% 0.06 281 / 0.025);
  --trans-faint-10: oklch(100% 0.05 281 / 0.05);
  --trans-faint-20: oklch(100% 0.05 281 / 0.0625);
  --trans-faint-25: oklch(100% 0.05 281 / 0.08125);
  --trans-faint-30: oklch(100% 0.075 281 / 0.1);
  --trans-faint-40: oklch(100% 0.04 281 / 0.125);
  --trans-faint-50: oklch(100% 0.02 281 / 0.2);
  --trans-faint-60: oklch(100% 0.02 281 / 0.35);
  --trans-strong-00: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.75);
  --trans-strong-05: oklch(from oklch(23.50% 0.00125 281) l 0.00375 h / 0.625);
  --trans-strong-10: oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.00375 281) l 0.00375 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, rgb(255, 76, 82) -30%, oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5) 180%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(248, 201, 111, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(248, 201, 111, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(248, 201, 111, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(248, 201, 111, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.9325 0 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 71, 154, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114));
  border-bottom-color: rgba(71, 154, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(71, 154, 255, 0.24);
  border-right-color: rgba(71, 154, 255, 0.24);
  border-top-color: rgba(71, 154, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 144, 80);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(241, 144, 80, 0.063), rgba(241, 144, 80, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(241, 144, 80, 0.063), rgba(241, 144, 80, 0.114));
  border-bottom-color: rgba(241, 144, 80, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(241, 144, 80, 0.24);
  border-right-color: rgba(241, 144, 80, 0.24);
  border-top-color: rgba(241, 144, 80, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 150, 150, 160);
  --text-normal: var(--blockquote-color, oklch(71.25% 0.00375 281));
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(150, 150, 160, 0.063), rgba(150, 150, 160, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(150, 150, 160, 0.063), rgba(150, 150, 160, 0.114));
  border-bottom-color: rgba(150, 150, 160, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(150, 150, 160, 0.24);
  border-right-color: rgba(150, 150, 160, 0.24);
  border-top-color: rgba(150, 150, 160, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.7125 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 24, 209, 125);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(24, 209, 125, 0.063), rgba(24, 209, 125, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(24, 209, 125, 0.063), rgba(24, 209, 125, 0.114));
  border-bottom-color: rgba(24, 209, 125, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(24, 209, 125, 0.24);
  border-right-color: rgba(24, 209, 125, 0.24);
  border-top-color: rgba(24, 209, 125, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 85, 211, 244);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(85, 211, 244, 0.063), rgba(85, 211, 244, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(85, 211, 244, 0.063), rgba(85, 211, 244, 0.114));
  border-bottom-color: rgba(85, 211, 244, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(85, 211, 244, 0.24);
  border-right-color: rgba(85, 211, 244, 0.24);
  border-top-color: rgba(85, 211, 244, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 71, 154, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(71, 154, 255, 0.063), rgba(71, 154, 255, 0.114));
  border-bottom-color: rgba(71, 154, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(71, 154, 255, 0.24);
  border-right-color: rgba(71, 154, 255, 0.24);
  border-top-color: rgba(71, 154, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 248, 201, 111);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(248, 201, 111, 0.063), rgba(248, 201, 111, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(248, 201, 111, 0.063), rgba(248, 201, 111, 0.114));
  border-bottom-color: rgba(248, 201, 111, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(248, 201, 111, 0.24);
  border-right-color: rgba(248, 201, 111, 0.24);
  border-top-color: rgba(248, 201, 111, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 85, 211, 244;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(85, 211, 244);
  border-left-color: rgb(85, 211, 244);
  border-right-color: rgb(85, 211, 244);
  border-top-color: rgb(85, 211, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(85, 211, 244));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.00375 281));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0 281) l 0.00375 h / 0.375));
  color: oklch(0.9325 0 281);
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

html[saved-theme="dark"] body .callout[data-callout="math-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-gray"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  --shadow-input: var(--shadow-sidebar, 0px 0px 12px 0px oklch(from oklch(27.50% 0.00375 281) l 0.00375 h / 0.5));
  background-color: oklch(0.24 0.00375 281 / 0.375);
  border-bottom-color: oklch(1 0.05 281 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.05 281 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 281 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(1 0.05 281 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.2775 0.00175 281 / 0.625));
  border-bottom-color: oklch(1 0.04 281 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.04 281 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.04 281 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.04 281 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: var(--glass-base-l),var(--shadow-strong);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.00375 281) none 0px;
  text-decoration-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.05 281 / 0.05));
  color: var(--text-normal, oklch(0.85 0.00375 281));
  font-weight: var(--font-normal, 420);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(1 0.04 281 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.04 281 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.04 281 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.04 281 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, oklch(1 0.05 281 / 0.05));
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.05 281 / 0.05));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(212, 86%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 86%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, oklch(from hsl(212, 86%, 52%) l c h / 0.025));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 86%, 52%, 0.15));
  --pill-color: var(--tag-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --pill-color-hover: var(--tag-color-hover, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(27, 126, 238, 0.1));
  border-bottom-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-left-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-right-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-top-color: oklch(0.600515 0.189615 255.85 / 0.025);
  color: var(--pill-color, oklab(0.744327 -0.0296497 -0.117664));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: oklab(0.744327 -0.0296497 -0.117664);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 330);
  border-bottom-color: oklch(0.895 0 281);
  border-left-color: oklch(0.895 0 281);
  border-right-color: oklch(0.895 0 281);
  border-top-color: oklch(0.895 0 281);
  color: var(--h1-color, oklch(0.895 0 281));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 330);
  letter-spacing: var(--h1-letter-spacing, -0.32px);
  line-height: var(--h1-line-height, 38.4px);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.895 0 281));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
}

html[saved-theme="dark"] body h1::after {
  --font-weight: var(--h1-weight, 330);
  background: oklch(1 0.075 281 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0.075 281 / 0.1);
  border-bottom-color: oklch(0.895 0 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.895 0 281);
  border-left-width: 0px;
  border-right-color: oklch(0.895 0 281);
  border-right-width: 0px;
  border-top-color: oklch(0.895 0 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--h1-color, oklch(0.895 0 281));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  width: 700px;
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.8825 0 281);
  border-left-color: oklch(0.8825 0 281);
  border-right-color: oklch(0.8825 0 281);
  border-top-color: oklch(0.8825 0 281);
  color: var(--h2-color, oklch(0.8825 0 281));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h2-letter-spacing, -0.12px);
  line-height: var(--h2-line-height, 28.8px);
  margin-bottom: 18px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: oklch(0.895 0 281);
  border-left-color: oklch(0.895 0 281);
  border-right-color: oklch(0.895 0 281);
  border-top-color: oklch(0.895 0 281);
  color: var(--inline-title-color, oklch(0.895 0 281));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
  letter-spacing: -0.48px;
  line-height: var(--inline-title-line-height, 38.4px);
  margin-bottom: 18px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a::after {
  background: oklch(1 0.075 281 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0.075 281 / 0.1);
  border-bottom-color: oklch(0.895 0 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.895 0 281);
  border-left-width: 0px;
  border-right-color: oklch(0.895 0 281);
  border-right-width: 0px;
  border-top-color: oklch(0.895 0 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--inline-title-color, oklch(0.895 0 281));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  width: 700px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: var(--h3-color, oklch(0.85 0.00375 281));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 22px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h3-letter-spacing, -0.11px);
  line-height: var(--h3-line-height, 28.6px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 30px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: var(--h4-color, oklch(0.85 0.00375 281));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 20px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h4-letter-spacing, -0.075px);
  line-height: var(--h4-line-height, 28px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="dark"] body h5 {
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: var(--h5-color, oklch(0.85 0.00375 281));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 18px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 670);
  border-bottom-color: oklch(0.775 0.00375 281);
  border-left-color: oklch(0.775 0.00375 281);
  border-right-color: oklch(0.775 0.00375 281);
  border-top-color: oklch(0.775 0.00375 281);
  color: var(--h6-color, oklch(0.775 0.00375 281));
  font-family: var(--h6-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 670);
  letter-spacing: var(--h6-letter-spacing, 0.08px);
  line-height: var(--h6-line-height, 25.6px);
  margin-bottom: 18px;
  margin-top: 22px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(1 0.05 281 / 0.0625);
  border-left-color: oklch(1 0.05 281 / 0.0625);
  border-right-color: oklch(1 0.05 281 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 71, 154, 255);
  border-bottom-color: rgba(71, 154, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(71, 154, 255, 0.24);
  border-right-color: rgba(71, 154, 255, 0.24);
  border-top-color: rgba(71, 154, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: oklch(1 0.075 281 / 0.1);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, oklab(0.744327 -0.0296497 -0.117664));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, oklab(0.744327 -0.0296497 -0.117664));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
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
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.depth-0 {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  font-weight: var(--nav-item-weight, 490);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.6375 0.0075 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.6375 0.0075 281);
  border-right-color: oklch(0.6375 0.0075 281);
  border-top-color: oklch(0.6375 0.0075 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, oklch(0.6375 0.0075 281));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(1 0.05 281 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(1 0.05 281 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 281 / 0.0625);
  border-top-color: oklch(1 0.05 281 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.7125 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  --background-modifier-hover: var(--hr-color, oklch(100% 0.075 281 / 0.1));
  color: oklch(0.7125 0.00375 281);
  font-weight: 420;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.85 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.7125 0.00375 281));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.7125 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.7125 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.7125 0.00375 281));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.775 0.00375 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.775 0.00375 281);
  border-right-color: oklch(0.775 0.00375 281);
  border-top-color: oklch(0.775 0.00375 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: var(--icon-color, oklch(0.775 0.00375 281));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.775 0.00375 281);
  stroke: oklch(0.775 0.00375 281);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.525 0.0075 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.525 0.0075 281);
  border-right-color: oklch(0.525 0.0075 281);
  border-top-color: oklch(0.525 0.0075 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.525 0.0075 281);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.525 0.0075 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--trans-strong-20, oklch(0.275 0.00375 281 / 0.5));
  border-color: oklch(0.85 0.00375 281);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, oklch(1 0.075 281 / 0.015));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.6375 0.0075 281) oklch(0.6375 0.0075 281) oklch(1 0.075 281 / 0.1);
  color: var(--table-header-color, oklch(0.6375 0.0075 281));
  font-weight: var(--table-header-weight, 520);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-bottom-color: oklch(1 0.05 281 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(1 0.05 281 / 0.0625);
  border-right-color: oklch(1 0.05 281 / 0.0625);
  border-top-color: oklch(1 0.05 281 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.7125 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.7125 0.00375 281);
  border-left-color: oklch(0.7125 0.00375 281);
  border-right-color: oklch(0.7125 0.00375 281);
  border-top-color: oklch(0.7125 0.00375 281);
  color: oklch(0.7125 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.7125 0.00375 281);
  border-left-color: oklch(0.7125 0.00375 281);
  border-right-color: oklch(0.7125 0.00375 281);
  border-top-color: oklch(0.7125 0.00375 281);
  color: oklch(0.7125 0.00375 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: oklch(0.7125 0.00375 281);
  font-family: var(--metadata-label-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: 420;
}

html[saved-theme="dark"] body .metadata-property-value {
  --input-padding: var(--metadata-input-padding, 6px 8px);
  color: oklch(0.7125 0.00375 281);
  font-family: var(--metadata-input-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-color: oklch(1 0.05 281 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.7125 0.00375 281);
  font-weight: 420;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.7125 0.00375 281);
}

html[saved-theme="dark"] body .note-properties-tags {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(212, 86%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 86%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, oklch(from hsl(212, 86%, 52%) l c h / 0.025));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 86%, 52%, 0.15));
  --pill-color: var(--tag-color, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --pill-color-hover: var(--tag-color-hover, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(212, 86%, 52%) 64%, #fff 36%), transparent 8%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(27, 126, 238, 0.1));
  color: var(--pill-color, oklab(0.744327 -0.0296497 -0.117664));
}

html[saved-theme="dark"] body .note-properties-value {
  --input-padding: var(--metadata-input-padding, 6px 8px);
  color: oklch(0.7125 0.00375 281);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-modifier-cover, oklch(0.235 0.00125 281));
  color: var(--text-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(0.85 0.00375 281);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  color: var(--text-normal, oklch(0.85 0.00375 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
  padding-left: 2px;
  padding-right: 2px;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.6375 0.0075 281);
  border-left-color: oklch(0.6375 0.0075 281);
  border-right-color: oklch(0.6375 0.0075 281);
  border-top-color: oklch(0.6375 0.0075 281);
  color: var(--text-normal, oklch(0.6375 0.0075 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(1 0.05 281 / 0.05));
  border-bottom-color: oklch(0.85 0.00375 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.85 0.00375 281));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.85 0.00375 281);
  border-left-color: oklch(0.85 0.00375 281);
  border-right-color: oklch(0.85 0.00375 281);
  border-top-color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.85 0.00375 281);
  font-weight: 420;
}

html[saved-theme="dark"] body sup {
  color: oklch(0.85 0.00375 281);
}

html[saved-theme="dark"] body ul.tags > li {
  --font-weight: var(--link-weight, 420);
  --tag-padding-y: var(--pill-padding-y, 0.25em);
  --tag-size: var(--metadata-input-font-size, 0.875em);
  background-color: var(--tag-background, rgba(27, 126, 238, 0.1));
  border-bottom-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-left-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-right-color: oklch(0.600515 0.189615 255.85 / 0.025);
  border-top-color: oklch(0.600515 0.189615 255.85 / 0.025);
  color: var(--tag-color, oklab(0.744327 -0.0296497 -0.117664));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 212;
  --accent-l: 52%;
  --accent-s: 100%;
  --anim-duration-fast: 150ms;
  --anim-duration-superfast: 75ms;
  --anim-fast-delay: var(--anim-duration-fast) var(--anim-motion-delay, 150ms cubic-bezier(0.65, 0.05, 0.36, 1));
  --anim-fast-smooth: var(--anim-duration-fast) var(--anim-motion-smooth, 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --anim-fast-swing: var(--anim-duration-fast) var(--anim-motion-swing, 150ms cubic-bezier(0, 0.55, 0.45, 1));
  --anim-super-delay: var(--anim-duration-superfast) var(--anim-motion-delay, 75ms cubic-bezier(0.65, 0.05, 0.36, 1));
  --anim-super-smooth: var(--anim-duration-superfast) var(--anim-motion-smooth, 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --anim-super-swing: var(--anim-duration-superfast) var(--anim-motion-swing, 75ms cubic-bezier(0, 0.55, 0.45, 1));
  --autofit-close-button-left-padding: 20px;
  --autofit-close-button-right-padding: 0px;
  --autofit-left-padding: 4px;
  --background-modifier-border: var(--trans-faint-20, oklch(0% 0 0 / 0.0625));
  --background-modifier-border-focus: var(--color-base-40, transparent);
  --background-modifier-border-hover: var(--color-base-35, oklch(82.50% 0.0025 281));
  --background-modifier-cover: color-mix(in oklab, var(--color-base-80) 45%, transparent 100%);
  --background-modifier-error: var(--color-red, rgb(233, 49, 58));
  --background-modifier-error-hover: var(--color-red, rgb(233, 49, 58));
  --background-modifier-error-rgb: var(--color-red-rgb, 233, 49, 58);
  --background-modifier-form-field: var(--color-base-00, transparent);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: var(--trans-faint-20, oklch(0% 0 0 / 0.0625));
  --background-modifier-success: var(--color-green, rgb(0, 187, 93));
  --background-modifier-success-rgb: var(--color-green-rgb, 0, 187, 93);
  --background-primary: var(--color-base-05, oklch(99% 0.0005 281));
  --background-primary-alt: color-mix(in oklab, var(--background-primary), var(--background-secondary));
  --background-secondary: var(--color-base-10, oklch(96.2% 0.0025 281));
  --background-secondary-alt: var(--color-base-05, oklch(99% 0.0005 281));
  --bases-cards-background: var(--trans-strong-40, oklch(from oklch(71.5% 0.0105 281) l c h / 0.1));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)));
  --bases-cards-label-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --bases-cards-line-height: 26px;
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --bases-embed-border-radius: var(--radius-s, 0);
  --bases-group-heading-property-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --bases-group-heading-property-weight: var(--font-normal, 420);
  --bases-group-heading-value-weight: var(--font-semibold, 620);
  --bases-header-padding-end: 0;
  --bases-header-padding-start: 0;
  --bases-table-border-color: var(--table-border-color, oklch(0% 0 0 / 0.092));
  --bases-table-cell-background-active: var(--background-primary, transparent);
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(212, 100%, 52%, 0.1));
  --bases-table-cell-shadow-active: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%));
  --bases-table-container-border-radius: var(--radius-s, 0);
  --bases-table-group-background: var(--background-primary-alt, transparent);
  --bases-table-header-background: var(--background-primary, oklch(99% 0.0005 281));
  --bases-table-header-background-hover: var(--background-modifier-hover, transparent);
  --bases-table-header-color: var(--color-base-55, oklch(65% 0.0105 281));
  --bases-table-header-color-hover: var(--color-base-80, oklch(40% 0.0025 281));
  --bases-table-header-weight: var(--font-semi-medium, 490);
  --bases-table-row-border-width: var(--border-width, 0);
  --bases-table-row-height: 32px;
  --bases-table-summary-background: var(--background-primary, oklch(99% 0.0005 281));
  --bases-table-summary-background-hover: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --bases-table-text-size: var(--table-text-size, 0.90625em);
  --bg-checkbox: radial-gradient(transparent 50%, var(--checkbox-border-color) 55% 60%, transparent 65%);
  --bg-checkbox-active: radial-gradient(transparent 56%, #ffffffdd 76%);
  --bg-main-inner: oklch(97.5% 0.00125 var(--bhue));
  --bg-main-outer: oklch(94.5% 0.00625 var(--bhue));
  --bg-main-workspace: radial-gradient(at 50% 50%, var(--bg-main-inner) 20%, var(--bg-main-outer) 100%);
  --bhue: 281;
  --bl-00: 100%;
  --bl-05: 99%;
  --bl-10: 96.2%;
  --bl-100: 24%;
  --bl-20: 92%;
  --bl-25: 88.25%;
  --bl-30: 85.75%;
  --bl-35: 82.50%;
  --bl-40: 75.25%;
  --bl-50: 71.5%;
  --bl-55: 65%;
  --bl-60: 55.75%;
  --bl-70: 46.5%;
  --bl-80: 40%;
  --bl-90: 30%;
  --blockquote-border-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --blockquote-border-thickness: 0.1875rem;
  --blockquote-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --blur-brightness: 1;
  --blur-radius-m: 12px;
  --blur-radius-s: 8px;
  --blur-saturation: 1.125;
  --bodyFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: var(--color-base-100, oklch(24% 0.0005 281));
  --bold-modifier: 250;
  --bsat-low: 0.0005;
  --bsat-med: 0.0015;
  --bsat-modal: 0.00125;
  --bsat-str: 0.0025;
  --bsat-xtr: 0.0105;
  --button-radius: var(--input-radius, 8px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.2375;
  --callout-bug: var(--color-pink-rgb, 214, 50, 202);
  --callout-default: var(--color-blue-rgb, 31, 132, 255);
  --callout-error: var(--color-red-rgb, 233, 49, 58);
  --callout-example: var(--color-purple-rgb, 124, 80, 237);
  --callout-fail: var(--color-red-rgb, 233, 49, 58);
  --callout-important: var(--color-cyan-rgb, 9, 186, 221);
  --callout-info: var(--color-blue-rgb, 31, 132, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 1rem);
  --callout-question: var(--color-orange-rgb, 241, 110, 53);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-sm, 10px);
  --callout-success: var(--color-green-rgb, 0, 187, 93);
  --callout-summary: var(--color-cyan-rgb, 9, 186, 221);
  --callout-tip: var(--color-cyan-rgb, 9, 186, 221);
  --callout-todo: var(--color-blue-rgb, 31, 132, 255);
  --callout-warning: var(--color-yellow-rgb, 229, 169, 37);
  --canvas-background: var(--background-primary, oklch(99% 0.0005 281));
  --canvas-card-label-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --canvas-color-1: var(--color-red-rgb, 233, 49, 58);
  --canvas-color-2: var(--color-orange-rgb, 241, 110, 53);
  --canvas-color-3: var(--color-yellow-rgb, 229, 169, 37);
  --canvas-color-4: var(--color-green-rgb, 0, 187, 93);
  --canvas-color-5: var(--color-blue-rgb, 31, 132, 255);
  --canvas-color-6: var(--color-purple-rgb, 124, 80, 237);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, oklch(85.75% 0.0025 281));
  --caret-color: var(--text-normal, oklch(30% 0.0005 281));
  --checkbox-border-color: var(--color-base-35, oklch(82.50% 0.0025 281));
  --checkbox-border-color-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --checkbox-color: var(--interactive-accent, color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%));
  --checkbox-color-hover: var(--interactive-accent-hover, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --checkbox-marker-color: var(--text-on-accent, white);
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-size: var(--font-text-size, 1.125rem);
  --checklist-done-color: var(--strikethrough-color, oklch(71.5% 0.0105 281));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--trans-faint-20, oklch(0% 0 0 / 0.0625));
  --code-background-alt: var(--trans-strong-10, oklch(100% 0 0 / 0.75));
  --code-border-color: var(--trans-faint-20, oklch(0% 0 0 / 0.0625));
  --code-border-width: 0;
  --code-bracket-background: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --code-comment: var(--text-faint, oklch(71.5% 0.0105 281));
  --code-function: var(--color-yellow, rgb(229, 169, 37));
  --code-important: var(--color-orange, rgb(241, 110, 53));
  --code-keyword: var(--color-pink, rgb(214, 50, 202));
  --code-normal: var(--text-normal, oklch(30% 0.0005 281));
  --code-operator: var(--color-red, rgb(233, 49, 58));
  --code-property: var(--color-cyan, rgb(9, 186, 221));
  --code-punctuation: var(--text-muted, oklch(46.5% 0.0105 281));
  --code-radius: var(--radius-xs, 6px);
  --code-special: var(--color-red, rgb(233, 49, 58));
  --code-string: var(--color-green, rgb(0, 187, 93));
  --code-tag: var(--color-red, rgb(233, 49, 58));
  --code-value: var(--color-purple, rgb(124, 80, 237));
  --collapse-icon-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(212, 100%, 52%));
  --color-accent-1: color-mix(in oklab, var(--color-accent), white 7.5%);
  --color-accent-2: color-mix(in oklch, var(--color-accent) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, var(--color-accent) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, var(--text-selection) 40%, transparent 60%);
  --color-base-00: oklch(var(--bl-00) var(--bsat-low) var(--bhue));
  --color-base-05: oklch(var(--bl-05) var(--bsat-low) var(--bhue));
  --color-base-10: oklch(var(--bl-10) var(--bsat-str) var(--bhue));
  --color-base-100: oklch(var(--bl-100) var(--bsat-low) var(--bhue));
  --color-base-20: oklch(var(--bl-20) var(--bsat-str) var(--bhue));
  --color-base-25: oklch(var(--bl-25) var(--bsat-str) var(--bhue));
  --color-base-30: oklch(var(--bl-30) var(--bsat-str) var(--bhue));
  --color-base-35: oklch(var(--bl-35) var(--bsat-str) var(--bhue));
  --color-base-40: oklch(var(--bl-40) var(--bsat-str) var(--bhue));
  --color-base-50: oklch(var(--bl-50) var(--bsat-xtr) var(--bhue));
  --color-base-55: oklch(var(--bl-55) var(--bsat-xtr) var(--bhue));
  --color-base-60: oklch(var(--bl-60) var(--bsat-xtr) var(--bhue));
  --color-base-70: oklch(var(--bl-70) var(--bsat-xtr) var(--bhue));
  --color-base-80: oklch(var(--bl-80) var(--bsat-str) var(--bhue));
  --color-base-90: oklch(var(--bl-90) var(--bsat-low) var(--bhue));
  --color-blue: rgb(31, 132, 255);
  --color-blue-rgb: 31, 132, 255;
  --color-cyan: rgb(9, 186, 221);
  --color-cyan-rgb: 9, 186, 221;
  --color-green: rgb(0, 187, 93);
  --color-green-rgb: 0, 187, 93;
  --color-highlight: rgb(var(--color-highlight-rgb));
  --color-highlight-rgb: var(--highlight-yellow-rgb, 229, 169, 37);
  --color-orange: rgb(241, 110, 53);
  --color-orange-rgb: 241, 110, 53;
  --color-pink: rgb(214, 50, 202);
  --color-pink-rgb: 214, 50, 202;
  --color-purple: rgb(124, 80, 237);
  --color-purple-rgb: 124, 80, 237;
  --color-red: rgb(233, 49, 58);
  --color-red-rgb: 233, 49, 58;
  --color-yellow: rgb(229, 169, 37);
  --color-yellow-rgb: 229, 169, 37;
  --control-icon-background: var(--background-primary, oklch(99% 0.0005 281));
  --control-icon-color: var(--color-base-80, oklch(40% 0.0025 281));
  --control-icon-shadow: var(--shadow-faint, 0px 0 12px 0px oklch(05% 0 0 / 0.055));
  --corner-smoothing: 60%;
  --dark: var(--text-normal, var(--color-base-90, oklch(30% 0.0005 281)));
  --darkgray: var(--text-normal, var(--color-base-90, oklch(30% 0.0005 281)));
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --divider-color-hover: var(--color-accent-3, color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%));
  --divider-width: 0;
  --drag-ghost-background: var(--color-base-00, oklch(100% 0.0005 281));
  --drag-ghost-text-color: var(--color-base-90, oklch(30% 0.0005 281));
  --dropdown-background: var(--interactive-normal, oklch(0% 0 0 / 0.07));
  --dropdown-background-hover: var(--interactive-hover, oklch(0% 0 0 / 0.092));
  --fab-bg: var(--background-primary, oklch(99% 0.0005 281));
  --fab-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --fab-color-active: var(--text-normal, oklch(30% 0.0005 281));
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97);
  --file-header-background: var(--background-primary, oklch(99% 0.0005 281));
  --file-header-background-focused: var(--background-primary, oklch(99% 0.0005 281));
  --file-header-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: var(--font-semi-medium, 490);
  --file-line-width: 43.75rem;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 28px 5%);
  --file-margins-x: var(--size-4-8, 5%);
  --file-margins-y: var(--size-4-8, 28px);
  --flair-background: var(--interactive-normal, oklch(0% 0 0 / 0.07));
  --flair-color: var(--text-normal, oklch(30% 0.0005 281));
  --flair-padding: 3px 1px;
  --font-bold: 720;
  --font-extrabold: 820;
  --font-extralight: 305;
  --font-interface-override: "Raveo";
  --font-interface-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: var(--font-interface-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-light: 320;
  --font-medium: 520;
  --font-mermaid: var(--font-text, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-normal: 420;
  --font-normal-linux: var(--font-semi-medium, 490);
  --font-semi-medium: calc(var(--font-normal) + 70);
  --font-semibold: 620;
  --font-small: 0.90625em;
  --font-text-override: "Raveo";
  --font-text-theme: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-thin: 270;
  --font-ui-larger: 24px;
  --font-weight: var(--font-normal, 420);
  --footnote-divider-color: var(--metadata-divider-color, oklch(0% 0 0 / 0.0625));
  --footnote-id-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(71.5% 0.0105 281));
  --footnote-input-background-active: var(--metadata-input-background-active, oklch(0% 0 0 / 0.0625));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 8px);
  --frame-right-space: 160px;
  --frame-right-space-override: 164px;
  --glass-base: inset 1px 1px 2px 0 var(--trans-strong-30), inset -1px -1px 2px 0 var(--trans-strong-30);
  --glass-base-l: inset 1.5px 1.5px 4px 0 var(--trans-strong-20), inset -1.5px -1.5px 4px 0 var(--trans-strong-20);
  --glass-base-m: inset 0 0 1px 0 var(--trans-strong-20), inset 1.5px 1.5px 3px 0 var(--trans-strong-30), inset -1.5px -1.5px 3px 0 var(--trans-strong-30);
  --graph-controls-width: 232px;
  --graph-node: var(--text-muted, oklch(46.5% 0.0105 281));
  --graph-node-attachment: var(--color-yellow, rgb(229, 169, 37));
  --graph-node-focused: var(--text-accent, transparent);
  --graph-node-tag: var(--color-green, rgb(0, 187, 93));
  --graph-node-unresolved: var(--text-faint, oklch(71.5% 0.0105 281));
  --graph-text: var(--text-normal, oklch(30% 0.0005 281));
  --gray: var(--text-muted, var(--color-base-70, oklch(46.5% 0.0105 281)));
  --h1-color: var(--color-base-100, oklch(24% 0.0005 281));
  --h1-size: 2em;
  --h1-size-alt: 1.625em;
  --h1-weight: 330;
  --h1-weight-alt: 570;
  --h2-color: var(--color-base-90, oklch(30% 0.0005 281));
  --h2-size: 1.5em;
  --h2-weight: 570;
  --h3-color: var(--color-base-90, oklch(30% 0.0005 281));
  --h3-size: 1.375em;
  --h3-weight: 570;
  --h4-color: var(--color-base-90, oklch(30% 0.0005 281));
  --h4-size: 1.25em;
  --h4-weight: 570;
  --h5-color: var(--color-base-80, oklch(40% 0.0025 281));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h6-color: var(--color-base-70, oklch(46.5% 0.0105 281));
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-weight: 670;
  --header-height: 56px;
  --headerFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(71.5% 0.0105 281));
  --highlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.9 c h / 0.33));
  --highlight-blue-rgb: var(--color-blue-rgb, 31, 132, 255);
  --highlight-cyan-rgb: var(--color-cyan-rgb, 9, 186, 221);
  --highlight-green-rgb: var(--color-green-rgb, 0, 187, 93);
  --highlight-orange-rgb: var(--color-orange-rgb, 241, 110, 53);
  --highlight-pink-rgb: var(--color-pink-rgb, 214, 50, 202);
  --highlight-purple-rgb: var(--color-purple-rgb, 124, 80, 237);
  --highlight-red-rgb: var(--color-red-rgb, 233, 49, 58);
  --highlight-yellow-rgb: var(--color-yellow-rgb, 229, 169, 37);
  --hr-color: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --icon-color: var(--color-base-60, oklch(55.75% 0.0105 281));
  --icon-color-active: var(--text-accent, hsl(212, 100%, 52%));
  --icon-color-focused: var(--icon-color-hover, oklch(30% 0.0005 281));
  --icon-color-hover: var(--text-normal, oklch(30% 0.0005 281));
  --icon-m-stroke-width: 1.875px;
  --icon-stroke: var(--icon-m-stroke-width, 1.875px);
  --icon-stroke-thick: 2.25px;
  --icon-xl: 28px;
  --icon-xs-stroke-width: 2.125px;
  --indent-unit: 0.375em;
  --indentation-guide-color: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --indentation-guide-width: var(--border-width, 0);
  --indentation-guide-width-active: var(--border-width, 0);
  --inline-title-color: var(--h1-color, oklch(24% 0.0005 281));
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 330);
  --input-border-width: var(--border-width, 0);
  --input-date-separator: var(--text-faint, oklch(71.5% 0.0105 281));
  --input-font-weight: var(--font-normal, 420);
  --input-height: 28px;
  --input-placeholder-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --input-radius: var(--radius-s, 8px);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent-1, color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%));
  --interactive-accent-hover: var(--color-accent-2, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --interactive-accent-hsl: var(--color-accent-hsl, 212, 100%, 52%);
  --interactive-hover: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --interactive-normal: var(--trans-faint-25, oklch(0% 0 0 / 0.07));
  --light: var(--background-primary, var(--color-base-05, oklch(99% 0.0005 281)));
  --lightgray: var(--background-secondary, var(--color-base-10, oklch(96.2% 0.0025 281)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, hsl(212, 100%, 52%));
  --link-color-hover: var(--text-accent-hover, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --link-color-sidebar: var(--color-accent-1, color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(212, 100%, 52%));
  --link-external-color-hover: var(--text-accent-hover, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --link-unresolved-color: oklch(from var(--color-accent-1) l c h / var(--link-unresolved-lch));
  --link-unresolved-lch: 0.7;
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 420);
  --list-bullet-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --list-dash-color: oklch(0% 0 0 / 0.25);
  --list-marker-color: var(--color-base-50, oklch(71.5% 0.0105 281));
  --list-marker-color-collapsed: var(--text-accent, hsl(212, 100%, 52%));
  --list-marker-color-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --list-spacing: 0.125em;
  --math-color: var(--color-base-100, oklch(24% 0.0005 281));
  --menu-background: var(--background-primary-alt, color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281)));
  --menu-border-color: var(--trans-faint-40, oklch(0% 0 0 / 0.1125));
  --menu-radius: var(--radius-ml, 14px);
  --menu-shadow: inset 1px 1px 2px 0 var(--trans-strong-10), inset -1px -1px 2px 0 var(--trans-strong-10), var(--shadow-normal);
  --metadata-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --metadata-border-radius: var(--radius-m, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --metadata-gap: 2px;
  --metadata-input-background-active: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --metadata-input-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-longtext-lines: 5;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 6px 8px);
  --metadata-input-text-color: var(--text-normal, oklch(30% 0.0005 281));
  --metadata-label-background-active: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --metadata-label-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-weight: var(--font-semi-medium, 490);
  --metadata-label-text-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --metadata-label-text-color-hover: var(--icon-color, oklch(55.75% 0.0105 281));
  --metadata-label-width: 10em;
  --metadata-property-background-active: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --metadata-property-box-shadow-focus: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%));
  --metadata-property-box-shadow-hover: 0 0 0 2.5px var(--background-modifier-hover);
  --mobile-nav-fade-bg: linear-gradient(var(--background-secondary), transparent calc(var(--touch-size-l)*1.5));
  --modal-background: oklch(99.5% var(--bsat-modal) var(--bhue) / 0.675);
  --modal-border-width: var(--border-width, 0);
  --modal-community-header-bg: var(--trans-strong-10, oklch(100% 0 0 / 0.75));
  --modal-community-item-bg: color-mix(in oklab, var(--color-base-05), var(--color-base-10));
  --modal-radius: var(--radius-xxl, 22px);
  --modal-small-background: oklch(99.5% var(--bsat-modal) var(--bhue) / 0.7);
  --nav-collapse-icon-color: var(--trans-faint-60, oklch(0% 0 0 / 0.32));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(71.5% 0.0105 281));
  --nav-folder-color: var(--color-base-80, oklch(40% 0.0025 281));
  --nav-header-bg: var(--trans-strong-40, oklch(from oklch(71.5% 0.0105 281) l c h / 0.1));
  --nav-header-timing: var(--vl-ease-out, cubic-bezier(0.3, 0.75, 0, 1));
  --nav-heading-color: var(--color-base-80, oklch(40% 0.0025 281));
  --nav-heading-color-collapsed: var(--text-faint, oklch(71.5% 0.0105 281));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --nav-heading-color-hover: var(--text-normal, oklch(30% 0.0005 281));
  --nav-heading-weight: var(--font-medium, 520);
  --nav-heading-weight-hover: var(--font-medium, 520);
  --nav-indentation-guide-color: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --nav-indentation-guide-width: var(--indentation-guide-width, 0);
  --nav-item-background-active: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --nav-item-background-hover: var(--background-modifier-hover, oklch(0% 0 0 / 0.0625));
  --nav-item-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --nav-item-color-active: var(--text-normal, oklch(30% 0.0005 281));
  --nav-item-color-highlighted: var(--text-accent, hsl(212, 100%, 52%));
  --nav-item-color-hover: var(--text-normal, oklch(30% 0.0005 281));
  --nav-item-color-selected: var(--text-normal, oklch(30% 0.0005 281));
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --nav-tag-color-active: var(--text-muted, oklch(46.5% 0.0105 281));
  --nav-tag-color-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --nav-tag-radius: var(--radius-s, 8px);
  --nav-tag-weight: var(--font-semibold, 620);
  --nav-text-color: var(--text-normal, oklch(30% 0.0005 281));
  --paint-description: "The default light color scheme for Velocity. A timeless classic with a mild futuristic touch.";
  --paint-image: url(data:image/webpbase64,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);
  --pdf-background: var(--background-primary, oklch(99% 0.0005 281));
  --pdf-page-background: var(--background-primary, oklch(99% 0.0005 281));
  --pdf-shadow: none;
  --pdf-sidebar-background: var(--background-primary, oklch(99% 0.0005 281));
  --pdf-spread-shadow: none;
  --pdf-thumbnail-shadow: var(--shadow-input, 0 0 0 0.5px oklch(0% 0 0 / 0.1125));
  --pill-background: var(--code-background, oklch(0% 0 0 / 0.0625));
  --pill-background-hover: var(--code-background, oklch(0% 0 0 / 0.0625));
  --pill-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(82.50% 0.0025 281));
  --pill-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --pill-color-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --pill-color-remove: var(--text-faint, oklch(71.5% 0.0105 281));
  --pill-color-remove-hover: var(--text-on-accent, white);
  --pill-radius: var(--radius-l, 18px);
  --pill-weight: var(--font-semi-medium, 490);
  --prompt-backdrop-filter: var(--blur-m, blur(12px) saturate(1.125) brightness(1));
  --prompt-background: var(--modal-background, oklch(99.5% 0.00125 281 / 0.675));
  --prompt-border-color: var(--menu-border-color, oklch(0% 0 0 / 0.1125));
  --prompt-input-height: 48px;
  --radius-l: 18px;
  --radius-m: 12px;
  --radius-ml: 14px;
  --radius-prompt: 24px;
  --radius-s: 8px;
  --radius-settings: 28px;
  --radius-sm: 10px;
  --radius-xl: 20px;
  --radius-xs: 6px;
  --radius-xxl: 22px;
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent)));
  --raised-blur: var(--blur-s, blur(8px) saturate(1.125) brightness(1));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px 12px 8px);
  --ribbon-width: 56px;
  --scrollbar-active-thumb-bg: var(--trans-faint-50, oklch(0% 0 0 / 0.145));
  --scrollbar-radius: var(--radius-l, 18px);
  --scrollbar-thumb-bg: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --search-clear-button-color: var(--color-base-50, oklch(71.5% 0.0105 281));
  --search-icon-color: var(--color-base-50, oklch(71.5% 0.0105 281));
  --search-icon-size: 17px;
  --search-result-background: var(--trans-strong-20, oklch(100% 0 0 / 0.625));
  --secondary: var(--text-accent, var(--color-accent, hsl(212, 100%, 52%)));
  --setting-group-heading-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --setting-group-heading-size: var(--font-ui-medium, 18px);
  --setting-group-heading-weight: var(--font-medium, 520);
  --setting-item-background: var(--trans-strong-10, oklch(100% 0 0 / 0.75));
  --setting-items-background: var(--background-primary, oklch(99% 0.0005 281));
  --setting-items-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --setting-items-padding: calc(var(--vl-layout-padding) + 8px);
  --setting-items-radius: calc(var(--radius-ml) + 2px);
  --settings-background: color-mix(in oklab, var(--background-secondary) 70%, var(--color-base-20));
  --shadow-button: var(--glass-base), var(--shadow-muted);
  --shadow-button-error: var(--shadow-button, inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07));
  --shadow-canvas-node: 0px 0px 16px 0px var(--trans-faint-20);
  --shadow-fab: var(--shadow-input), 0px 3px 15px 0px var(--trans-faint-20);
  --shadow-faint: 0px 0 12px 0px var(--trans-faint-10);
  --shadow-input: 0 0 0 0.5px var(--trans-faint-40);
  --shadow-input-active: 0 0 0 2.5px var(--color-accent-3);
  --shadow-l: var(--glass-base-l), var(--shadow-strong);
  --shadow-muted: 0px 3px 18px 0px var(--trans-faint-25);
  --shadow-normal: 0px 0px 5px 0px var(--trans-faint-05), 0px 10px 20px 0px var(--trans-faint-25);
  --shadow-s: var(--glass-base), var(--shadow-normal);
  --shadow-setting-items: inset 1px 1px 2px 0 var(--trans-strong-10), inset -1px -1px 2px 0 var(--trans-strong-10), 0px 1px 9px var(--trans-faint-05);
  --shadow-setting-items-top: inset 1px 2px 2px 0 var(--trans-strong-10), 0px 1px 9px var(--trans-faint-05);
  --shadow-sidebar: 0px 0px 8px 0px var(--trans-faint-00);
  --shadow-strong: 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-suggestion-item: var(--glass-base-m), var(--shadow-muted);
  --shadow-tab: 0px 0px 4px 0px var(--trans-faint-30);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 var(--trans-strong-30), inset -0.75px -0.75px 1.75px 0 var(--trans-strong-30);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px var(--trans-faint-10);
  --shadow-workspace-multi: 0px 2.5px 10px var(--trans-faint-10);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(46.5% 0.0105 281));
  --shiki-code-background: var(--code-background, oklch(0% 0 0 / 0.0625));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, oklch(71.5% 0.0105 281));
  --shiki-code-function: var(--color-green, rgb(0, 187, 93));
  --shiki-code-important: var(--color-orange, rgb(241, 110, 53));
  --shiki-code-keyword: var(--color-pink, rgb(214, 50, 202));
  --shiki-code-normal: var(--text-muted, oklch(46.5% 0.0105 281));
  --shiki-code-property: var(--color-cyan, rgb(9, 186, 221));
  --shiki-code-punctuation: var(--text-muted, oklch(46.5% 0.0105 281));
  --shiki-code-string: var(--color-yellow, rgb(229, 169, 37));
  --shiki-code-value: var(--color-purple, rgb(124, 80, 237));
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --shiki-gutter-text-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(46.5% 0.0105 281));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(46.5% 0.0105 281));
  --shiki-terminal-dots-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --sidebar-left-toggle-inner-width: 12%;
  --sidebar-right-toggle-inner-width: 12%;
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(82.50% 0.0025 281));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: 12px;
  --slider-thumb-radius: var(--slider-thumb-height, 12px);
  --slider-thumb-width: 12px;
  --slider-thumb-y: -3px;
  --slider-track-background: var(--trans-faint-50, oklch(0% 0 0 / 0.145));
  --slider-track-height: 20px;
  --stacked-shadow-color: var(--trans-faint-10, oklch(05% 0 0 / 0.055));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, oklch(0% 0 0 / 0.0625));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-radius: var(--radius-l) 0 0 var(--radius-l, 18px 0 0 18px);
  --status-bar-text-color: var(--text-muted, oklch(46.5% 0.0105 281));
  --strikethrough-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --suggestion-background: var(--background-primary, oklch(99% 0.0005 281));
  --sync-avatar-color-1: var(--color-red, rgb(233, 49, 58));
  --sync-avatar-color-2: var(--color-orange, rgb(241, 110, 53));
  --sync-avatar-color-3: var(--color-yellow, rgb(229, 169, 37));
  --sync-avatar-color-4: var(--color-green, rgb(0, 187, 93));
  --sync-avatar-color-5: var(--color-cyan, rgb(9, 186, 221));
  --sync-avatar-color-6: var(--color-blue, rgb(31, 132, 255));
  --sync-avatar-color-7: var(--color-purple, rgb(124, 80, 237));
  --sync-avatar-color-8: var(--color-pink, rgb(214, 50, 202));
  --tab-background-active: var(--trans-strong-20, oklch(100% 0 0 / 0.625));
  --tab-close-bg: oklch(from var(--color-base-30) l c h / 0.8);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, oklch(82.50% 0.0025 281));
  --tab-font-weight: var(--font-normal, 420);
  --tab-max-width: 240px;
  --tab-outline-color: var(--divider-color, oklch(0% 0 0 / 0.0625));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 8px);
  --tab-right-fade: linear-gradient(to left, oklch(91.5% calc(var(--bsat-xtr)/3) var(--bhue)) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(calc(var(--bl-20) + 1.5%) 0 0) 80%, transparent);
  --tab-sidebar-bg: var(--trans-strong-00, oklch(100% 0 0 / 0.95));
  --tab-sidebar-container-bg: oklch(00% 0 0 / 0.03125);
  --tab-stacked-font-weight: var(--font-medium, 520);
  --tab-stacked-header-width: var(--header-height, 56px);
  --tab-stacked-pane-width: var(--file-line-width, 43.75rem);
  --tab-stacked-shadow: -8px 0 8px 0 var(--stacked-shadow-color);
  --tab-switcher-background: var(--background-secondary, oklch(96.2% 0.0025 281));
  --tab-switcher-preview-radius: var(--radius-xl, 20px);
  --tab-text-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --tab-text-color-active: var(--color-base-100, oklch(24% 0.0005 281));
  --tab-text-color-focused: var(--icon-color, oklch(55.75% 0.0105 281));
  --tab-text-color-focused-active: var(--color-base-100, oklch(24% 0.0005 281));
  --tab-text-color-focused-active-current: var(--color-base-100, oklch(24% 0.0005 281));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(212, 100%, 52%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --table-border-color: var(--trans-faint-30, oklch(0% 0 0 / 0.092));
  --table-drag-handle-background-active: var(--table-selection-border-color, color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%));
  --table-drag-handle-color: var(--text-faint, oklch(71.5% 0.0105 281));
  --table-header-border-color: var(--table-border-color, oklch(0% 0 0 / 0.092));
  --table-header-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --table-header-size: var(--table-text-size, 0.90625em);
  --table-header-weight: var(--font-medium, 520);
  --table-line-height: var(--line-height-normal, 1.6);
  --table-row-alt-background: var(--table-row-bg, oklch(20% 0 0 / 0.0275));
  --table-row-alt-background-hover: var(--table-row-bg, oklch(20% 0 0 / 0.0275));
  --table-row-bg: var(--trans-faint-05, oklch(20% 0 0 / 0.0275));
  --table-selection-border-color: var(--interactive-accent, color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%));
  --table-text-size: var(--font-small, 0.90625em);
  --table-text-weight: var(--font-normal, 420);
  --tag-color: var(--text-accent, hsl(212, 100%, 52%));
  --tag-color-hover: var(--text-accent, hsl(212, 100%, 52%));
  --tag-padding-x: 0.6875em;
  --tag-padding-y: 0.3125em;
  --tag-size: var(--font-smallest, 0.8em);
  --tag-weight: var(--font-semi-medium, 490);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%)));
  --text-accent: var(--color-accent, hsl(212, 100%, 52%));
  --text-accent-hover: var(--color-accent-2, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --text-error: var(--color-red, rgb(233, 49, 58));
  --text-faint: var(--color-base-50, oklch(71.5% 0.0105 281));
  --text-highlight-bg: oklch(from var(--color-highlight) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: var(--color-highlight-rgb, 229, 169, 37);
  --text-highlight-bg-search: oklch(from var(--color-highlight) 0.9 c h / 0.625);
  --text-muted: var(--color-base-70, oklch(46.5% 0.0105 281));
  --text-normal: var(--color-base-90, oklch(30% 0.0005 281));
  --text-selection: oklab(from var(--color-accent) l a b / 0.15);
  --text-success: var(--color-green, rgb(0, 187, 93));
  --text-warning: var(--color-orange, rgb(241, 110, 53));
  --textHighlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.9 c h / 0.33));
  --titleFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, oklch(0% 0 0 / 0.0625));
  --titlebar-height: 36px;
  --titlebar-text-color: var(--trans-faint-60, oklch(0% 0 0 / 0.32));
  --titlebar-text-color-focused: var(--text-muted, oklch(46.5% 0.0105 281));
  --titlebar-text-weight: var(--font-semibold, 620);
  --toggle-border-width: 4px;
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 36px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --toggle-width: 44px;
  --traffic-lights-offset-x: var(--header-height, 56px);
  --traffic-lights-offset-y: var(--header-height, 56px);
  --trans-faint-00: oklch(62.5% 0 0 / 0.03);
  --trans-faint-05: oklch(20% 0 0 / 0.0275);
  --trans-faint-10: oklch(05% 0 0 / 0.055);
  --trans-faint-20: oklch(0% 0 0 / 0.0625);
  --trans-faint-25: oklch(0% 0 0 / 0.07);
  --trans-faint-30: oklch(0% 0 0 / 0.092);
  --trans-faint-40: oklch(0% 0 0 / 0.1125);
  --trans-faint-50: oklch(0% 0 0 / 0.145);
  --trans-faint-60: oklch(0% 0 0 / 0.32);
  --trans-strong-00: oklch(var(--bl-00) 0 0 / 0.95);
  --trans-strong-10: oklch(var(--bl-00) 0 0 / 0.75);
  --trans-strong-20: oklch(var(--bl-00) 0 0 / 0.625);
  --trans-strong-30: oklch(var(--bl-00) 0 0 / 0.4);
  --trans-strong-40: oklch(from var(--color-base-50) l c h / 0.1);
  --trans-white-00: oklch(var(--bl-00) 0 0 / 0.75);
  --trans-white-10: oklch(var(--bl-00) 0 0 / 0.625);
  --vault-profile-color: var(--icon-color, oklch(55.75% 0.0105 281));
  --vault-profile-color-hover: var(--text-muted, oklch(46.5% 0.0105 281));
  --vault-profile-font-size: var(--font-ui-small, 18px);
  --vault-profile-font-weight: var(--font-normal, 420);
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1);
  --vl-layout-padding: 8px;
  --workspace-border-color: var(--trans-faint-00, oklch(62.5% 0 0 / 0.03));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-form-field: var(--search-result-background, oklch(100% 0 0 / 0.625));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(100% 0 0 / 0.625));
  --bases-table-header-background: var(--background-secondary, oklch(96.2% 0.0025 281));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --background-modifier-form-field: var(--search-result-background, oklch(100% 0 0 / 0.625));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(100% 0 0 / 0.625));
  --bases-table-header-background: var(--background-secondary, oklch(96.2% 0.0025 281));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: oklch(0 0 0 / 0.0625);
  color: oklch(0.3 0.0005 281);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, oklch(0.3 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, oklch(0.3 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 670;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.9 0.150353 81.1033 / 0.33));
  color: var(--text-normal, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.24 0.0005 281) none 0px;
  text-decoration-color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body del {
  --bold-color: var(--strikethrough-color, oklch(71.5% 0.0105 281));
  --italic-color: var(--strikethrough-color, oklch(71.5% 0.0105 281));
  --text-highlight-bg: var(--hr-color, oklch(0% 0 0 / 0.092));
  color: var(--strikethrough-color, oklch(0.715 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.715 0.0105 281) none 0px;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  background-color: var(--checkbox-color, oklab(0.637864 -0.0435936 -0.193248));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, oklch(0.465 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.465 0.0105 281) none 0px;
  text-decoration-color: oklch(0.465 0.0105 281);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-external-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 420);
  color: var(--link-unresolved-color, oklch(0.637864 0.198104 257.288 / 0.7));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklch(0.637864 0.198104 257.288 / 0.7) none 0px;
  text-decoration: rgba(10, 124, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(10, 124, 255, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="light"] body ol > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  margin-left: 28px;
  padding-bottom: var(--list-spacing, 2px);
  padding-top: var(--list-spacing, 2px);
}

html[saved-theme="light"] body ul > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  margin-left: 28px;
  padding-bottom: var(--list-spacing, 2px);
  padding-top: var(--list-spacing, 2px);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 420);
  color: var(--text-faint, oklch(0.715 0.0105 281));
}

html[saved-theme="light"] body blockquote {
  --bold-color: var(--blockquote-color, oklch(46.5% 0.0105 281));
  --italic-color: var(--blockquote-color, oklch(46.5% 0.0105 281));
  --math-color: color-mix(in oklab, var(--blockquote-color), var(--color-base-80));
  color: var(--blockquote-color, oklch(0.465 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body table {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 18px);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, oklch(0.2 0 0 / 0.0275));
}

html[saved-theme="light"] body td {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-width: 0px;
  border-left-color: oklch(0.3 0.0005 281);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.3 0.0005 281);
  border-right-width: 0px;
  border-top-color: oklch(0.3 0.0005 281);
  border-top-width: 0px;
  color: var(--table-text-color, oklch(0.3 0.0005 281));
  font-weight: var(--font-normal, 420);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body th {
  border-bottom-color: oklch(0 0 0 / 0.092);
  border-bottom-width: 2px;
  border-left-color: oklch(0.5575 0.0105 281);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.5575 0.0105 281);
  border-right-width: 0px;
  border-top-color: oklch(0.5575 0.0105 281);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, oklch(0.5575 0.0105 281));
  font-weight: var(--table-header-weight, 520);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, oklch(0 0 0 / 0.0625));
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, oklch(0.3 0.0005 281));
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="light"] body pre:has(> code) {
  --code-radius: var(--radius-sm, 10px);
  background-color: var(--code-background, oklch(0 0 0 / 0.0625));
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figcaption {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(0% 0 0 / 0.0625));
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.24 0.0005 281);
  border-bottom-left-radius: var(--radius-xs, 10px);
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.24 0.0005 281);
  border-radius: 10px;
  border-right-color: oklch(0.24 0.0005 281);
  border-top-color: oklch(0.24 0.0005 281);
  border-top-left-radius: var(--radius-xs, 10px);
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.3 0.0005 281);
  border-radius: 10px;
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, oklab(0.976 0.000286213 -0.00147244));
  border-bottom-color: oklch(0.465 0.0105 281);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.465 0.0105 281);
  border-radius: 12px;
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.465 0.0105 281));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-left-width: 0px;
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  margin-left: -27px;
  transition: 0.21s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: var(--checkbox-size, 18px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  --bold-color: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --italic-color: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  --text-normal: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  --bold-color: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --italic-color: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  --text-normal: var(--checklist-done-color, oklch(71.5% 0.0105 281));
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul > li.task-list-item {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5 12h14'/%3E%3C/svg%3E");
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
  background-color: rgb(241, 110, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 169, 37);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(124, 80, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 58);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvbGxhci1zaWduLWljb24gbHVjaWRlLWRvbGxhci1zaWduIj48bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjIiIHkyPSIyMiIvPjxwYXRoIGQ9Ik0xNyA1SDkuNWEzLjUgMy41IDAgMCAwIDAgN2g1YTMuNSAzLjUgMCAwIDEgMCA3SDYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 187, 93);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 9, 186, 221);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114));
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 214, 50, 202);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(214, 50, 202, 0.063), rgba(214, 50, 202, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(214, 50, 202, 0.063), rgba(214, 50, 202, 0.114));
  border-bottom-color: rgba(214, 50, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(214, 50, 202, 0.24);
  border-right-color: rgba(214, 50, 202, 0.24);
  border-top-color: rgba(214, 50, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 58);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114));
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 124, 80, 237);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(124, 80, 237, 0.063), rgba(124, 80, 237, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(124, 80, 237, 0.063), rgba(124, 80, 237, 0.114));
  border-bottom-color: rgba(124, 80, 237, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(124, 80, 237, 0.24);
  border-right-color: rgba(124, 80, 237, 0.24);
  border-top-color: rgba(124, 80, 237, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 58);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(233, 49, 58, 0.063), rgba(233, 49, 58, 0.114));
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-right-color: rgba(233, 49, 58, 0.24);
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 31, 132, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="math-cyan"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-cyan-rgb, 9, 186, 221);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(9, 186, 221, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-gray"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-blue-rgb, 100, 100, 100);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 100, 100, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.5);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-green"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-green-rgb, 0, 187, 93);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(0, 187, 93, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 187, 93, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(0, 187, 93, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(0, 187, 93, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-grey"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-blue-rgb, 100, 100, 100);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(100, 100, 100, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(100, 100, 100, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(100, 100, 100, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(100, 100, 100, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-orange"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-orange-rgb, 241, 110, 53);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(241, 110, 53, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(241, 110, 53, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(241, 110, 53, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(241, 110, 53, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-pink"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-pink-rgb, 214, 50, 202);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(214, 50, 202, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(214, 50, 202, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(214, 50, 202, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(214, 50, 202, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-purple"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-purple-rgb, 124, 80, 237);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(124, 80, 237, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(124, 80, 237, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(124, 80, 237, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(124, 80, 237, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-red"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-red-rgb, 233, 49, 58);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(233, 49, 58, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(233, 49, 58, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(233, 49, 58, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(233, 49, 58, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="math-yellow"] {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(212, 100%, 52%, 0.1);
  --background-modifier-border: oklch(0% 0 0 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(82.50% 0.0025 281);
  --background-modifier-error: rgb(233, 49, 58);
  --background-modifier-error-hover: rgb(233, 49, 58);
  --background-modifier-error-rgb: 233, 49, 58;
  --background-modifier-form-field: transparent;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(0% 0 0 / 0.0625);
  --background-modifier-success: rgb(0, 187, 93);
  --background-modifier-success-rgb: 0, 187, 93;
  --background-primary: oklch(99% 0.0005 281);
  --background-primary-alt: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --background-secondary: oklch(96.2% 0.0025 281);
  --background-secondary-alt: oklch(99% 0.0005 281);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(82.50% 0.0025 281) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(97.5% 0.00125 281);
  --bg-main-outer: oklch(94.5% 0.00625 281);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(97.5% 0.00125 281) 20%, oklch(94.5% 0.00625 281) 100%);
  --blockquote-border-color: oklch(71.5% 0.0105 281);
  --blockquote-color: oklch(46.5% 0.0105 281);
  --blur-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(24% 0.0005 281);
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
  --callout-color: var(--color-yellow-rgb, 229, 169, 37);
  --callout-default: 31, 132, 255;
  --callout-error: 233, 49, 58;
  --callout-example: 124, 80, 237;
  --callout-fail: 233, 49, 58;
  --callout-important: 9, 186, 221;
  --callout-info: 31, 132, 255;
  --callout-padding: 1rem;
  --callout-question: 241, 110, 53;
  --callout-radius: 10px;
  --callout-success: 0, 187, 93;
  --callout-summary: 9, 186, 221;
  --callout-tip: 9, 186, 221;
  --callout-title-weight: 670;
  --callout-todo: 31, 132, 255;
  --callout-warning: 229, 169, 37;
  --canvas-background: oklch(99% 0.0005 281);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(85.75% 0.0025 281);
  --caret-color: oklch(30% 0.0005 281);
  --checkbox-border-color: oklch(82.50% 0.0025 281);
  --checkbox-border-color-hover: oklch(46.5% 0.0105 281);
  --checkbox-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --checkbox-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(71.5% 0.0105 281);
  --clickable-icon-radius: 8px;
  --code-background: oklch(0% 0 0 / 0.0625);
  --code-background-alt: oklch(100% 0 0 / 0.75);
  --code-border-color: oklch(0% 0 0 / 0.0625);
  --code-bracket-background: oklch(0% 0 0 / 0.0625);
  --code-comment: oklch(71.5% 0.0105 281);
  --code-function: rgb(229, 169, 37);
  --code-important: rgb(241, 110, 53);
  --code-keyword: rgb(214, 50, 202);
  --code-normal: oklch(30% 0.0005 281);
  --code-operator: rgb(233, 49, 58);
  --code-property: rgb(9, 186, 221);
  --code-punctuation: oklch(46.5% 0.0105 281);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: rgb(233, 49, 58);
  --code-string: rgb(0, 187, 93);
  --code-tag: rgb(233, 49, 58);
  --code-value: rgb(124, 80, 237);
  --collapse-icon-color: oklch(71.5% 0.0105 281);
  --collapse-icon-color-collapsed: hsl(212, 100%, 52%);
  --color-accent: hsl(212, 100%, 52%);
  --color-accent-1: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --color-accent-2: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --color-accent-3: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklch, oklab(from hsl(212, 100%, 52%) l a b / 0.15) 40%, transparent 60%);
  --color-accent-hsl: 212, 100%, 52%;
  --color-base-00: oklch(100% 0.0005 281);
  --color-base-05: oklch(99% 0.0005 281);
  --color-base-10: oklch(96.2% 0.0025 281);
  --color-base-100: oklch(24% 0.0005 281);
  --color-base-20: oklch(92% 0.0025 281);
  --color-base-25: oklch(88.25% 0.0025 281);
  --color-base-30: oklch(85.75% 0.0025 281);
  --color-base-35: oklch(82.50% 0.0025 281);
  --color-base-40: oklch(75.25% 0.0025 281);
  --color-base-50: oklch(71.5% 0.0105 281);
  --color-base-55: oklch(65% 0.0105 281);
  --color-base-60: oklch(55.75% 0.0105 281);
  --color-base-70: oklch(46.5% 0.0105 281);
  --color-base-80: oklch(40% 0.0025 281);
  --color-base-90: oklch(30% 0.0005 281);
  --color-highlight: rgb(229, 169, 37);
  --color-highlight-rgb: 229, 169, 37;
  --control-icon-background: oklch(99% 0.0005 281);
  --control-icon-color: oklch(40% 0.0025 281);
  --control-icon-shadow: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --divider-color: oklch(0% 0 0 / 0.0625);
  --divider-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(0% 0 0 / 0.07);
  --dropdown-background-hover: oklch(0% 0 0 / 0.092);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(99% 0.0005 281);
  --fab-color: oklch(55.75% 0.0105 281);
  --fab-color-active: oklch(30% 0.0005 281);
  --flair-background: oklch(0% 0 0 / 0.07);
  --flair-color: oklch(30% 0.0005 281);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 420;
  --graph-line: oklch(82.50% 0.0025 281);
  --graph-node: oklch(46.5% 0.0105 281);
  --graph-node-attachment: rgb(229, 169, 37);
  --graph-node-focused: transparent;
  --graph-node-tag: rgb(0, 187, 93);
  --graph-node-unresolved: oklch(71.5% 0.0105 281);
  --graph-text: oklch(30% 0.0005 281);
  --h1-color: oklch(24% 0.0005 281);
  --h2-color: oklch(30% 0.0005 281);
  --h3-color: oklch(30% 0.0005 281);
  --h4-color: oklch(30% 0.0005 281);
  --h5-color: oklch(40% 0.0025 281);
  --h5-line-height: 1.6;
  --h6-color: oklch(46.5% 0.0105 281);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(71.5% 0.0105 281);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 31, 132, 255;
  --highlight-cyan-rgb: 9, 186, 221;
  --highlight-green-rgb: 0, 187, 93;
  --highlight-orange-rgb: 241, 110, 53;
  --highlight-pink-rgb: 214, 50, 202;
  --highlight-purple-rgb: 124, 80, 237;
  --highlight-red-rgb: 233, 49, 58;
  --highlight-yellow-rgb: 229, 169, 37;
  --hr-color: oklch(0% 0 0 / 0.092);
  --hr-spacing: 2.25rem;
  --interactive-accent: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --interactive-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --interactive-accent-hsl: 212, 100%, 52%;
  --interactive-hover: oklch(0% 0 0 / 0.092);
  --interactive-normal: oklch(0% 0 0 / 0.07);
  --left-margin-delay: 150ms;
  --link-color: hsl(212, 100%, 52%);
  --link-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-color-sidebar: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --link-external-color: hsl(212, 100%, 52%);
  --link-external-color-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%) l c h / 0.7);
  --link-unresolved-decoration-color: hsla(212, 100%, 52%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(55.75% 0.0105 281);
  --list-indent: 1.5em;
  --math-color: oklch(24% 0.0005 281);
  --menu-background: color-mix(in oklab, oklch(99% 0.0005 281), oklch(96.2% 0.0025 281));
  --menu-border-color: oklch(0% 0 0 / 0.1125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(99% 0.0005 281);
  --pdf-page-background: oklch(99% 0.0005 281);
  --pdf-sidebar-background: oklch(99% 0.0005 281);
  --pdf-thumbnail-shadow: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent) linear-gradient(oklch(99% 0.0005 281), color-mix(in srgb, oklch(99% 0.0005 281) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(0% 0 0 / 0.145);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(0% 0 0 / 0.092);
  --search-clear-button-color: oklch(71.5% 0.0105 281);
  --search-icon-color: oklch(71.5% 0.0105 281);
  --search-result-background: oklch(100% 0 0 / 0.625);
  --setting-group-heading-color: oklch(55.75% 0.0105 281);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: oklch(100% 0 0 / 0.75);
  --setting-items-background: oklch(99% 0.0005 281);
  --setting-items-border-color: oklch(0% 0 0 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: color-mix(in oklab, oklch(96.2% 0.0025 281) 70%, oklch(92% 0.0025 281));
  --shadow-button: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-button-error: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0% 0 0 / 0.0625);
  --shadow-fab: 0 0 0 0.5px oklch(0% 0 0 / 0.1125), 0px 3px 15px 0px oklch(0% 0 0 / 0.0625);
  --shadow-faint: 0px 0 12px 0px oklch(05% 0 0 / 0.055);
  --shadow-input: 0 0 0 0.5px oklch(0% 0 0 / 0.1125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklch, hsl(212, 100%, 52%) 50%, transparent 75%);
  --shadow-l: inset 1.5px 1.5px 4px 0 oklch(100% 0 0 / 0.625), inset -1.5px -1.5px 4px 0 oklch(100% 0 0 / 0.625), 0px 1.25px 6.25px rgba(0, 0, 0, 0.08), 0px 3px 12px rgba(0, 0, 0, 0.06), 0px 16px 32px rgba(0, 0, 0, 0.12);
  --shadow-muted: 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-normal: 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-s: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.4), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.4), 0px 0px 5px 0px oklch(20% 0 0 / 0.0275), 0px 10px 20px 0px oklch(0% 0 0 / 0.07);
  --shadow-setting-items: inset 1px 1px 2px 0 oklch(100% 0 0 / 0.75), inset -1px -1px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(100% 0 0 / 0.75), 0px 1px 9px oklch(20% 0 0 / 0.0275);
  --shadow-sidebar: 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03);
  --shadow-suggestion-item: inset 0 0 1px 0 oklch(100% 0 0 / 0.625), inset 1.5px 1.5px 3px 0 oklch(100% 0 0 / 0.4), inset -1.5px -1.5px 3px 0 oklch(100% 0 0 / 0.4), 0px 3px 18px 0px oklch(0% 0 0 / 0.07);
  --shadow-tab: 0px 0px 4px 0px oklch(0% 0 0 / 0.092);
  --shadow-toggle: inset 0.75px 0.75px 1.75px 0 oklch(100% 0 0 / 0.4), inset -0.75px -0.75px 1.75px 0 oklch(100% 0 0 / 0.4);
  --shadow-workspace: 0 0.25px 1.25px 0px oklch(0% 0 0 / 0.25), 0px 0px 24px oklch(05% 0 0 / 0.055);
  --shadow-workspace-multi: 0px 2.5px 10px oklch(05% 0 0 / 0.055);
  --shiki-active-tab-border-color: oklch(46.5% 0.0105 281);
  --shiki-code-background: oklch(0% 0 0 / 0.0625);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(71.5% 0.0105 281);
  --shiki-code-function: rgb(0, 187, 93);
  --shiki-code-important: rgb(241, 110, 53);
  --shiki-code-keyword: rgb(214, 50, 202);
  --shiki-code-normal: oklch(46.5% 0.0105 281);
  --shiki-code-property: rgb(9, 186, 221);
  --shiki-code-punctuation: oklch(46.5% 0.0105 281);
  --shiki-code-string: rgb(229, 169, 37);
  --shiki-code-value: rgb(124, 80, 237);
  --shiki-gutter-border-color: oklch(0% 0 0 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(71.5% 0.0105 281);
  --shiki-gutter-text-color-highlight: oklch(46.5% 0.0105 281);
  --shiki-highlight-green: rgba(0, 187, 93, 0.5);
  --shiki-highlight-green-background: rgba(0, 187, 93, 0.1);
  --shiki-highlight-neutral: oklch(46.5% 0.0105 281);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 58, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 58, 0.1);
  --shiki-terminal-dots-color: oklch(71.5% 0.0105 281);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(05% 0 0 / 0.055);
  --strikethrough-color: oklch(71.5% 0.0105 281);
  --suggestion-background: oklch(99% 0.0005 281);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(233, 49, 58);
  --sync-avatar-color-2: rgb(241, 110, 53);
  --sync-avatar-color-3: rgb(229, 169, 37);
  --sync-avatar-color-4: rgb(0, 187, 93);
  --sync-avatar-color-5: rgb(9, 186, 221);
  --sync-avatar-color-6: rgb(31, 132, 255);
  --sync-avatar-color-7: rgb(124, 80, 237);
  --sync-avatar-color-8: rgb(214, 50, 202);
  --tab-background-active: oklch(100% 0 0 / 0.625);
  --tab-close-bg: oklch(from oklch(85.75% 0.0025 281) l c h / 0.8);
  --tab-divider-color: oklch(82.50% 0.0025 281);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(0% 0 0 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(91.5% 0.0035 281) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(93.5% 0 0) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0 0 / 0.95);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(05% 0 0 / 0.055);
  --tab-switcher-background: oklch(96.2% 0.0025 281);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(96.2% 0.0025 281), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(212, 100%, 52%);
  --tab-text-color: oklch(55.75% 0.0105 281);
  --tab-text-color-active: oklch(24% 0.0005 281);
  --tab-text-color-focused: oklch(55.75% 0.0105 281);
  --tab-text-color-focused-active: oklch(24% 0.0005 281);
  --tab-text-color-focused-active-current: oklch(24% 0.0005 281);
  --tab-text-color-focused-highlighted: hsl(212, 100%, 52%);
  --table-add-button-border-color: oklch(0% 0 0 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-drag-handle-color: oklch(71.5% 0.0105 281);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(0% 0 0 / 0.092);
  --table-header-border-width: 1px;
  --table-header-color: oklch(55.75% 0.0105 281);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(20% 0 0 / 0.0275);
  --table-row-alt-background-hover: oklch(20% 0 0 / 0.0275);
  --table-row-bg: oklch(20% 0 0 / 0.0275);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(212, 100%, 52%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: color-mix(in oklab, hsl(212, 100%, 52%), white 7.5%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(212, 100%, 52%, 0.1);
  --tag-background-hover: hsla(212, 100%, 52%, 0.2);
  --tag-border-color: hsla(212, 100%, 52%, 0.15);
  --tag-border-color-hover: hsla(212, 100%, 52%, 0.15);
  --tag-color: hsl(212, 100%, 52%);
  --tag-color-hover: hsl(212, 100%, 52%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: hsl(212, 100%, 52%);
  --text-accent-hover: color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%);
  --text-error: rgb(233, 49, 58);
  --text-faint: oklch(71.5% 0.0105 281);
  --text-highlight-bg: oklch(from rgb(229, 169, 37) 0.9 c h / 0.33);
  --text-highlight-bg-rgb: 229, 169, 37;
  --text-highlight-bg-search: oklch(from rgb(229, 169, 37) 0.9 c h / 0.625);
  --text-muted: oklch(46.5% 0.0105 281);
  --text-normal: oklch(30% 0.0005 281);
  --text-selection: oklab(from hsl(212, 100%, 52%) l a b / 0.15);
  --text-success: rgb(0, 187, 93);
  --text-warning: rgb(241, 110, 53);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-strong-00: oklch(100% 0 0 / 0.95);
  --trans-strong-10: oklch(100% 0 0 / 0.75);
  --trans-strong-20: oklch(100% 0 0 / 0.625);
  --trans-strong-30: oklch(100% 0 0 / 0.4);
  --trans-strong-40: oklch(from oklch(71.5% 0.0105 281) l c h / 0.1);
  --trans-white-00: oklch(100% 0 0 / 0.75);
  --trans-white-10: oklch(100% 0 0 / 0.625);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(229, 169, 37, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(229, 169, 37, 0.24);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(229, 169, 37, 0.24);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(229, 169, 37, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: 0 0 0 1.5px rgb(var(--callout-color), 0.375);
  color: var(--color-base-100, oklch(0.24 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 31, 132, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 110, 53);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(241, 110, 53, 0.063), rgba(241, 110, 53, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(241, 110, 53, 0.063), rgba(241, 110, 53, 0.114));
  border-bottom-color: rgba(241, 110, 53, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(241, 110, 53, 0.24);
  border-right-color: rgba(241, 110, 53, 0.24);
  border-top-color: rgba(241, 110, 53, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  --text-normal: var(--blockquote-color, oklch(46.5% 0.0105 281));
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(158, 158, 158, 0.063), rgba(158, 158, 158, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(158, 158, 158, 0.063), rgba(158, 158, 158, 0.114));
  border-bottom-color: rgba(158, 158, 158, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(158, 158, 158, 0.24);
  border-right-color: rgba(158, 158, 158, 0.24);
  border-top-color: rgba(158, 158, 158, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.465 0.0105 281));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 187, 93);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(0, 187, 93, 0.063), rgba(0, 187, 93, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(0, 187, 93, 0.063), rgba(0, 187, 93, 0.114));
  border-bottom-color: rgba(0, 187, 93, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 187, 93, 0.24);
  border-right-color: rgba(0, 187, 93, 0.24);
  border-top-color: rgba(0, 187, 93, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 9, 186, 221);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(9, 186, 221, 0.063), rgba(9, 186, 221, 0.114));
  border-bottom-color: rgba(9, 186, 221, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(9, 186, 221, 0.24);
  border-right-color: rgba(9, 186, 221, 0.24);
  border-top-color: rgba(9, 186, 221, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 31, 132, 255);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(31, 132, 255, 0.063), rgba(31, 132, 255, 0.114));
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 229, 169, 37);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(229, 169, 37, 0.063), rgba(229, 169, 37, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(229, 169, 37, 0.063), rgba(229, 169, 37, 0.114));
  border-bottom-color: rgba(229, 169, 37, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(229, 169, 37, 0.24);
  border-right-color: rgba(229, 169, 37, 0.24);
  border-top-color: rgba(229, 169, 37, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 9, 186, 221;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(9, 186, 221);
  border-left-color: rgb(9, 186, 221);
  border-right-color: rgb(9, 186, 221);
  border-top-color: rgb(9, 186, 221);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(9, 186, 221));
  font-weight: var(--font-medium, 520);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.24 0.0005 281);
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

html[saved-theme="light"] body .callout[data-callout="math-cyan"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-gray"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-green"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-grey"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-orange"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-pink"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-purple"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-red"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math-yellow"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  --shadow-input: var(--shadow-sidebar, 0px 0px 8px 0px oklch(62.5% 0 0 / 0.03));
  background-color: oklch(1 0 0 / 0.625);
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.995 0.00125 281 / 0.675));
  border-bottom-color: oklch(0 0 0 / 0.1125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.1125);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.1125);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.1125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: var(--glass-base-l),var(--shadow-strong);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.3 0.0005 281) none 0px;
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(0 0 0 / 0.0625));
  color: var(--text-normal, oklch(0.3 0.0005 281));
  font-weight: var(--font-normal, 420);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0 0 0 / 0.1125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(0 0 0 / 0.1125);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.1125);
  border-right-width: 0px;
  border-top-color: oklch(0 0 0 / 0.1125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, oklch(0 0 0 / 0.0625));
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(0 0 0 / 0.0625));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(212, 100%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 100%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(212, 100%, 52%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 100%, 52%, 0.15));
  --pill-color: var(--tag-color, hsl(212, 100%, 52%));
  --pill-color-hover: var(--tag-color-hover, hsl(212, 100%, 52%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(10, 124, 255, 0.1));
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  color: var(--pill-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(10, 124, 255);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 330);
  border-bottom-color: oklch(0.24 0.0005 281);
  border-left-color: oklch(0.24 0.0005 281);
  border-right-color: oklch(0.24 0.0005 281);
  border-top-color: oklch(0.24 0.0005 281);
  color: var(--h1-color, oklch(0.24 0.0005 281));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 330);
  letter-spacing: var(--h1-letter-spacing, -0.32px);
  line-height: var(--h1-line-height, 38.4px);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
}

html[saved-theme="light"] body h1::after {
  --font-weight: var(--h1-weight, 330);
  background: oklch(0 0 0 / 0.092) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0 / 0.092);
  border-bottom-color: oklch(0.24 0.0005 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.24 0.0005 281);
  border-left-width: 0px;
  border-right-color: oklch(0.24 0.0005 281);
  border-right-width: 0px;
  border-top-color: oklch(0.24 0.0005 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--h1-color, oklch(0.24 0.0005 281));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  width: 700px;
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: var(--h2-color, oklch(0.3 0.0005 281));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 24px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h2-letter-spacing, -0.12px);
  line-height: var(--h2-line-height, 28.8px);
  margin-bottom: 18px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: oklch(0.24 0.0005 281);
  border-left-color: oklch(0.24 0.0005 281);
  border-right-color: oklch(0.24 0.0005 281);
  border-top-color: oklch(0.24 0.0005 281);
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
  letter-spacing: -0.48px;
  line-height: var(--inline-title-line-height, 38.4px);
  margin-bottom: 18px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a::after {
  background: oklch(0 0 0 / 0.092) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0 0 0 / 0.092);
  border-bottom-color: oklch(0.24 0.0005 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.24 0.0005 281);
  border-left-width: 0px;
  border-right-color: oklch(0.24 0.0005 281);
  border-right-width: 0px;
  border-top-color: oklch(0.24 0.0005 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  width: 700px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: var(--h3-color, oklch(0.3 0.0005 281));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 22px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h3-letter-spacing, -0.11px);
  line-height: var(--h3-line-height, 28.6px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 30px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: var(--h4-color, oklch(0.3 0.0005 281));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 20px);
  font-weight: var(--font-weight, 570);
  letter-spacing: var(--h4-letter-spacing, -0.075px);
  line-height: var(--h4-line-height, 28px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="light"] body h5 {
  --h1-weight: var(--h1-weight-alt, 330);
  border-bottom-color: oklch(0.4 0.0025 281);
  border-left-color: oklch(0.4 0.0025 281);
  border-right-color: oklch(0.4 0.0025 281);
  border-top-color: oklch(0.4 0.0025 281);
  color: var(--h5-color, oklch(0.4 0.0025 281));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 18px);
  line-height: var(--h5-line-height, 28.8px);
  margin-bottom: 18px;
  margin-top: var(--heading-spacing, 24px);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 670);
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: var(--h6-color, oklch(0.465 0.0105 281));
  font-family: var(--h6-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: var(--font-weight, 670);
  letter-spacing: var(--h6-letter-spacing, 0.08px);
  line-height: var(--h6-line-height, 25.6px);
  margin-bottom: 18px;
  margin-top: 22px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-left-color: oklch(0 0 0 / 0.0625);
  border-right-color: oklch(0 0 0 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 31, 132, 255);
  border-bottom-color: rgba(31, 132, 255, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(31, 132, 255, 0.24);
  border-right-color: rgba(31, 132, 255, 0.24);
  border-top-color: rgba(31, 132, 255, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: oklch(0 0 0 / 0.092);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, hsl(212, 100%, 52%));
  --nav-item-color-active: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-color-hover: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, hsl(212, 100%, 52%));
  --nav-item-color-active: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-color-hover: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
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
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.depth-0 {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, hsl(212, 100%, 52%));
  --nav-item-color-active: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-color-hover: var(--nav-item-color, hsl(212, 100%, 52%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  font-weight: var(--nav-item-weight, 490);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.5575 0.0105 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.5575 0.0105 281);
  border-right-color: oklch(0.5575 0.0105 281);
  border-top-color: oklch(0.5575 0.0105 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, oklch(0.5575 0.0105 281));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(0 0 0 / 0.0625);
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.465 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  --background-modifier-hover: var(--hr-color, oklch(0% 0 0 / 0.092));
  color: oklch(0.465 0.0105 281);
  font-weight: 420;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: oklch(0.3 0.0005 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.465 0.0105 281));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.465 0.0105 281));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: oklch(0.4 0.0025 281);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.4 0.0025 281);
  border-right-color: oklch(0.4 0.0025 281);
  border-top-color: oklch(0.4 0.0025 281);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: var(--icon-color, oklch(0.4 0.0025 281));
}

html[saved-theme="light"] body .darkmode svg {
  color: oklch(0.4 0.0025 281);
  stroke: oklch(0.4 0.0025 281);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.715 0.0105 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.715 0.0105 281);
  border-right-color: oklch(0.715 0.0105 281);
  border-top-color: oklch(0.715 0.0105 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.715 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-node-content {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--trans-strong-20, oklch(1 0 0 / 0.625));
  border-color: oklch(0.3 0.0005 281);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, oklch(0.2 0 0 / 0.0275));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: oklch(0.5575 0.0105 281) oklch(0.5575 0.0105 281) oklch(0 0 0 / 0.092);
  color: var(--table-header-color, oklch(0.5575 0.0105 281));
  font-weight: var(--table-header-weight, 520);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-bottom-color: oklch(0 0 0 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0 0 0 / 0.0625);
  border-right-color: oklch(0 0 0 / 0.0625);
  border-top-color: oklch(0 0 0 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.465 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: oklch(0.465 0.0105 281);
  font-family: var(--metadata-label-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-weight: 420;
}

html[saved-theme="light"] body .metadata-property-value {
  --input-padding: var(--metadata-input-padding, 6px 8px);
  color: oklch(0.465 0.0105 281);
  font-family: var(--metadata-input-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-color: oklch(0 0 0 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: oklch(0.465 0.0105 281);
  font-weight: 420;
}

html[saved-theme="light"] body .note-properties-row {
  border-color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body .note-properties-tags {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(212, 100%, 52%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(212, 100%, 52%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(212, 100%, 52%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(212, 100%, 52%, 0.15));
  --pill-color: var(--tag-color, hsl(212, 100%, 52%));
  --pill-color-hover: var(--tag-color-hover, hsl(212, 100%, 52%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklch, hsl(212, 100%, 52%) 80%, transparent 40%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(10, 124, 255, 0.1));
  color: var(--pill-color, rgb(10, 124, 255));
}

html[saved-theme="light"] body .note-properties-value {
  --input-padding: var(--metadata-input-padding, 6px 8px);
  color: oklch(0.465 0.0105 281);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-modifier-cover, oklch(0.99 0.0005 281));
  color: var(--text-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: oklch(0.3 0.0005 281);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  color: var(--text-normal, oklch(0.3 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 490;
  padding-left: 2px;
  padding-right: 2px;
}

html[saved-theme="light"] body abbr {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body details {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: oklch(0.5575 0.0105 281);
  border-left-color: oklch(0.5575 0.0105 281);
  border-right-color: oklch(0.5575 0.0105 281);
  border-top-color: oklch(0.5575 0.0105 281);
  color: var(--text-normal, oklch(0.5575 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, oklch(0 0 0 / 0.0625));
  border-bottom-color: oklch(0.3 0.0005 281);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.3 0.0005 281));
}

html[saved-theme="light"] body progress {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body sub {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body summary {
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body sup {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul.tags > li {
  --font-weight: var(--link-weight, 420);
  --tag-padding-y: var(--pill-padding-y, 0.25em);
  --tag-size: var(--metadata-input-font-size, 0.875em);
  background-color: var(--tag-background, rgba(10, 124, 255, 0.1));
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  color: var(--tag-color, rgb(10, 124, 255));
}`,
  },
  classSettings: {
    jetblue: {
      light: `.jetblue {
--accent-h: 210;
--accent-s: 40%;
--accent-l: 48%;
--color-red-rgb: 244, 41, 27;
--color-red: rgb(244, 41, 27);
--color-orange-rgb: 255, 100, 28;
--color-orange: rgb(255, 100, 28);
--color-yellow-rgb: 242, 161, 0;
--color-yellow: rgb(242, 161, 0);
--color-green-rgb: 54, 179, 89;
--color-green: rgb(54, 179, 89);
--color-cyan-rgb: 4, 168, 178;
--color-cyan: rgb(4, 168, 178);
--color-blue-rgb: 0, 145, 240;
--color-blue: rgb(0, 145, 240);
--color-purple-rgb: 151, 85, 231;
--color-purple: rgb(151, 85, 231);
--color-pink-rgb: 240, 70, 171;
--color-pink: rgb(240, 70, 171);
--bhue: 256;
--bsat-xtr: 0.01000;
--bsat-str: 0.00500;
--bsat-med: 0.00250;
--bsat-low: 0.00000;
--bsat-modal: 0.00375;
--bg-main-inner: oklch(97.50% 0.0050 var(--bhue));
--bg-main-outer: oklch(92.25% 0.0100 var(--bhue));
--background-secondary: color-mix(in oklab, var(--color-base-10), var(--color-base-20));
--color-base-05: oklch(calc(var(--bl-05) - 0.125%) var(--bsat-low) var(--bhue));
--trans-strong-40: oklch(from var(--color-base-50) l 0 h / 0.100);
--tab-right-fade: linear-gradient(to left, oklch(calc(var(--bl-20) - 1.75%) 0.00625 var(--bhue)) 80%, transparent);
}

.jetblue {
--paint-image: url(data:image/webp;base64,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) ;
}

.jetblue {
--paint-description: "A cool blue paint scheme inspired by the Audi R8 and the Nord color palette. Sleek and industrial with a touch of elegance.";
}`,
    },
    midnight: {
      dark: `.midnight {
--accent-h: 256;
--accent-s: 75%;
--accent-l: 62%;
--color-red-rgb: 255, 88, 83;
--color-red: #ff5853;
--color-orange-rgb: 229, 164, 74;
--color-orange: #e5a44a;
--color-yellow-rgb: 208, 203, 105;
--color-yellow: #d0cb69;
--color-green-rgb: 119, 203, 77;
--color-green: #77cb4d;
--color-cyan-rgb: 99, 213, 205;
--color-cyan: #63d5cd;
--color-blue-rgb: 0, 155, 255;
--color-blue: #009bff;
--color-purple-rgb: 203, 116, 228;
--color-purple: #cb74e4;
--color-pink-rgb: 255, 152, 185;
--color-pink: #ff98b9;
--bhue: 318;
--bsat-xtr: 0.0225;
--bsat-str: 0.0125;
--bsat-med: 0.0075;
--bsat-low: 0.0005;
--bsat-modal: 0.0175;
--bsat-trans: 1.25;
--bl-00: 22.50%;
--color-base-00: oklch(var(--bl-00) calc(var(--bsat-xtr) - 0.005) var(--bhue)) !important;
--bg-main-inner: oklch(28.50% var(--bsat-xtr) calc(var(--bhue) - 30));
--bg-main-outer: oklch(24.75% var(--bsat-xtr) calc(var(--bhue) + 30));
--bg-main-drawer-left: radial-gradient(at 100% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%) !important;
--bg-main-drawer-right: radial-gradient(at 0% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%) !important;
--highlight-yellow-rgb: 239, 211, 0;
--settings-background: radial-gradient(at -100% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%) !important;
--tab-right-fade-alt: linear-gradient(to left, oklch(calc(var(--bl-20) + 1%) var(--bsat-xtr) var(--bhue)) 80%, transparent);
}

.midnight {
--paint-image: url(data:image/webp;base64,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) ;
}

.midnight {
--paint-description: "A stunning iridescent purple paint scheme inspired by a rare factory option for the Nissan GT-R. Its dynamic colors shift based on your notes' layout.";
}`,
    },
    "enable-special-text": {
      dark: `.gray.enable-special-text {
--bold-color: oklch(from var(--color-red) var(--bl-60) 0.125 h);
--italic-color: oklch(from var(--color-orange) var(--bl-60) 0.1 h);
}

.enable-special-text {
--bold-color: oklch(from var(--color-accent) var(--bl-60) 0.0875 calc(h - 30));
--italic-color: oklch(from var(--color-accent) var(--bl-60) 0.0875 calc(h + 135));
}`,
      light: `.white.enable-special-text {
--bold-color: oklch(from var(--color-red) calc(var(--bl-55) - 5%) 0.1625 h);
--italic-color: oklch(from var(--color-orange) var(--bl-55) 0.1375 h);
}

.velocity.enable-special-text {
--bold-color: oklch(from var(--color-accent) var(--bl-60) 0.1 calc(h - 20));
--italic-color: oklch(from var(--color-accent) var(--bl-60) 0.1375 calc(h + 120));
}

.enable-special-text {
--bold-color: oklch(from var(--color-accent) var(--bl-60) 0.1 calc(h - 30));
--italic-color: oklch(from var(--color-accent) var(--bl-60) 0.1 calc(h + 135));
}`,
    },
    "enable-special-code": {
      general: `body.enable-special-code {
--code-normal: var(--code-special);
}`,
    },
    "switch-edit-icons": {
      general: `body:not(.disable-custom-icons).switch-edit-icons .view-actions svg.lucide-edit-3 {
-webkit-mask-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdsYXNzZXMtaWNvbiBsdWNpZGUtZ2xhc3NlcyI+PGNpcmNsZSBjeD0iNiIgY3k9IjE1IiByPSI0Ii8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxNSIgcj0iNCIvPjxwYXRoIGQ9Ik0xNCAxNWEyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDIiLz48cGF0aCBkPSJNMi41IDEzIDUgN2MuNy0xLjMgMS40LTIgMy0yIi8+PHBhdGggZD0iTTIxLjUgMTMgMTkgN2MtLjctMS4zLTEuNS0yLTMtMiIvPjwvc3ZnPg==");
}

body:not(.disable-custom-icons).switch-edit-icons .view-actions svg.lucide-book-open {
-webkit-mask-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbi1saW5lLWljb24gbHVjaWRlLXBlbi1saW5lIj48cGF0aCBkPSJNMTMgMjFoOCIvPjxwYXRoIGQ9Ik0yMS4xNzQgNi44MTJhMSAxIDAgMCAwLTMuOTg2LTMuOTg3TDMuODQyIDE2LjE3NGEyIDIgMCAwIDAtLjUuODNsLTEuMzIxIDQuMzUyYS41LjUgMCAwIDAgLjYyMy42MjJsNC4zNTMtMS4zMmEyIDIgMCAwIDAgLjgzLS40OTd6Ii8+PC9zdmc+");
}

body:not(.disable-custom-icons).switch-edit-icons .view-actions svg.lucide-book-open {
-webkit-mask-position:25% 25%;
-webkit-mask-size:87.5%;
}`,
    },
    "disable-custom-icons": {
      general: `body.disable-custom-icons svg.svg-icon, body.disable-custom-icons .clickable-icon>svg.svg-icon {
-webkit-mask-image:unset;
-webkit-mask-position:unset;
-webkit-mask-size:unset;
padding:initial;
}`,
    },
    "restore-indent-guide": {
      general: `body.restore-indent-guide {
--indentation-guide-width: 2px;
--indentation-guide-width-active: 2px;
--nav-indentation-guide-width: 2px;
}`,
    },
    "disable-hover-header": {
      general: `body.disable-hover-header .nav-buttons-container {
height:fit-content;
width:fit-content;
}

body.disable-hover-header .nav-buttons-container>* {
filter:unset;
}

body.disable-hover-header .nav-buttons-container {
--trans-faint-20: var(--trans-strong-40);
}`,
    },
    "disable-status-fade": {
      general: `body.disable-status-fade .status-bar {
outline-width:1px;
filter:opacity(1);
backdrop-filter:brightness(1.125) var(--blur-m);
box-shadow:var(--menu-shadow);
}`,
    },
    "disable-title-h1": {
      general: `.disable-title-h1 .cm-line.HyperMD-header-1, .disable-title-h1 .markdown-rendered h1 {
color:var(--text-normal);
font-size:var(--h1-size-alt);
font-weight:var(--h1-weight-alt);
--bold-modifier: 400;
}

.disable-title-h1 .cm-line.HyperMD-header-1::after, .disable-title-h1 .markdown-rendered h1::after {
display:none;
}`,
    },
    "prevent-exit": {
      general: `body.prevent-exit .workspace-tabs:not(.mod-stacked) .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button {
display:none;
}`,
    },
    "active-line-highlight": {
      general: `.active-line-highlight .cm-active.HyperMD-header-1::before, .active-line-highlight .cm-active:not(.HyperMD-header-1,.HyperMD-codeblock,.HyperMD-quote,.cm-gutterElement)::after {
content:"";
z-index:-2;
inset:-2px -6px;
position:absolute;
background-color:oklch(from var(--color-base-100) l c h/0.05);
border-radius:var(--radius-s);
-electron-corner-smoothing:var(--corner-smoothing);
}

.active-line-highlight .cm-active.cm-line.HyperMD-codeblock {
background-color:var(--trans-faint-30);
}

.active-line-highlight .cm-active.cm-line.HyperMD-quote {
background-color:oklch(from var(--color-base-100) l c h/0.05);
}

.active-line-highlight .table-cell-wrapper .cm-active::after {
display:none;
}`,
    },
    "hide-bases-header": {
      general: `body.hide-bases-header .mod-root .markdown-preview-view .bases-view {
margin-top:1.5rem;
}

body.hide-bases-header .mod-root .markdown-preview-view .bases-header {
display:none;
}`,
    },
    "enable-dim-img": {
      dark: `body.theme-dark :is(.markdown-preview-view,.markdown-source-view) :is(.image-embed img,.markdown-rendered img) {
filter:opacity(0.7);
transition:filter var(--anim-duration-moderate) var(--anim-motion-smooth);
}

body.theme-dark :is(.markdown-preview-view,.markdown-source-view) :is(.image-embed img,.markdown-rendered img):hover {
filter:unset;
}`,
    },
    "improve-pinned-tabs": {
      general: `body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked) {
max-width:64px;
}

body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked)>.workspace-tab-header-inner {
background-color:var(--trans-faint-05);
}

body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked).is-active>.workspace-tab-header-inner {
background-color:var(--color-accent-4);
}

body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked) .workspace-tab-header-inner-title, body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked) .workspace-tab-header-inner-icon {
display:none;
}

body.improve-pinned-tabs .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:has(.mod-pinned,.mod-linked) .workspace-tab-header-status-container {
margin-inline:unset;
--background-modifier-active-hover: var(--color-accent-4);
}`,
    },
    "disable-corner-smoothing": {
      general: `body.disable-corner-smoothing {
--corner-smoothing: unset !important;
}`,
    },
  },
};
