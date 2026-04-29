import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velocity.british-racing-green",
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
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 75;
  --accent-l: 32%;
  --accent-s: 70%;
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
  --background-modifier-border: var(--trans-faint-20, oklch(100% 0.0625 190 / 0.0625));
  --background-modifier-border-focus: var(--color-base-40, transparent);
  --background-modifier-border-hover: var(--color-base-35, oklch(36.25% 0.0125 190));
  --background-modifier-cover: oklch(10% 0 0 / 0.5);
  --background-modifier-error: var(--color-red, #ff5846);
  --background-modifier-error-hover: var(--color-red, #ff5846);
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 88, 70);
  --background-modifier-form-field: var(--color-base-25, oklch(31.25% 0.0125 190));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: var(--trans-faint-10, oklch(100% 0.0625 190 / 0.05));
  --background-modifier-success: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --background-modifier-success-rgb: var(--color-green-rgb, 149, 195, 37);
  --background-primary: var(--color-base-00, oklch(22.75% 0.015 190));
  --background-primary-alt: color-mix(in oklab, var(--background-primary), var(--background-secondary));
  --background-secondary: var(--color-base-20, oklch(27.50% 0.0125 190));
  --background-secondary-alt: var(--color-base-30, oklch(34.50% 0.0125 190));
  --bases-cards-background: var(--trans-faint-05, oklch(100% 0.075 190 / 0.025));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in oklab, oklch(22.75% 0.015 190), oklch(27.50% 0.0125 190)));
  --bases-cards-label-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --bases-cards-line-height: 26px;
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --bases-embed-border-radius: var(--radius-s, 0);
  --bases-group-heading-property-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --bases-group-heading-property-weight: var(--font-normal, 420);
  --bases-group-heading-value-weight: var(--font-semibold, 620);
  --bases-header-padding-end: 0;
  --bases-header-padding-start: 0;
  --bases-table-border-color: var(--table-border-color, oklch(100% 0.09375 190 / 0.1));
  --bases-table-cell-background-active: var(--background-primary, transparent);
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in oklab, oklch(22.75% 0.015 190), oklch(27.50% 0.0125 190)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(75, 70%, 32%, 0.1));
  --bases-table-cell-shadow-active: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%));
  --bases-table-container-border-radius: var(--radius-s, 0);
  --bases-table-group-background: var(--background-primary-alt, transparent);
  --bases-table-header-background: var(--background-primary, oklch(22.75% 0.015 190));
  --bases-table-header-background-hover: var(--background-modifier-hover, transparent);
  --bases-table-header-color: var(--color-base-55, oklch(57.50% 0.0200 190));
  --bases-table-header-color-hover: var(--color-base-80, oklch(77.50% 0.0125 190));
  --bases-table-header-weight: var(--font-semi-medium, 490);
  --bases-table-row-border-width: var(--border-width, 0);
  --bases-table-row-height: 32px;
  --bases-table-summary-background: var(--background-primary, oklch(22.75% 0.015 190));
  --bases-table-summary-background-hover: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --bases-table-text-size: var(--table-text-size, 0.90625em);
  --bg-checkbox: radial-gradient(transparent 50%, var(--checkbox-border-color) 55% 60%, transparent 65%);
  --bg-checkbox-active: radial-gradient(#0000000f 52%, #ffffff20 64%);
  --bg-main-inner: oklch(28.75% calc(var(--bsat-xtr) - 0.0025) var(--bhue));
  --bg-main-outer: oklch(25.00% calc(var(--bsat-xtr) + 0.0025) var(--bhue));
  --bg-main-workspace: radial-gradient(at 50% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%);
  --bhue: 190;
  --bl-00: 22.75%;
  --bl-05: 23.50%;
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
  --blockquote-border-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --blockquote-border-thickness: 0.1875rem;
  --blockquote-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --blur-brightness: 1;
  --blur-radius-m: 12px;
  --blur-radius-s: 8px;
  --blur-saturation: 1.125;
  --bodyFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: var(--color-base-100, oklch(93.25% 0.0005 190));
  --bold-modifier: 250;
  --bsat-low: 0.0005;
  --bsat-med: 0.0075;
  --bsat-modal: 0.0175;
  --bsat-str: 0.0125;
  --bsat-trans: 1.25;
  --bsat-xtr: 0.0200;
  --button-radius: var(--input-radius, 8px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.2375;
  --callout-bug: var(--color-pink-rgb, 255, 148, 166);
  --callout-default: var(--color-blue-rgb, 0, 175, 229);
  --callout-error: var(--color-red-rgb, 255, 88, 70);
  --callout-example: var(--color-purple-rgb, 230, 114, 183);
  --callout-fail: var(--color-red-rgb, 255, 88, 70);
  --callout-important: var(--color-cyan-rgb, 85, 211, 244);
  --callout-info: var(--color-blue-rgb, 0, 175, 229);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 1rem);
  --callout-question: var(--color-orange-rgb, 246, 147, 67);
  --callout-quote: 150, 150, 160;
  --callout-radius: var(--radius-sm, 10px);
  --callout-success: var(--color-green-rgb, 149, 195, 37);
  --callout-summary: var(--color-cyan-rgb, 85, 211, 244);
  --callout-tip: var(--color-cyan-rgb, 85, 211, 244);
  --callout-todo: var(--color-blue-rgb, 0, 175, 229);
  --callout-warning: var(--color-yellow-rgb, 254, 201, 94);
  --canvas-background: var(--background-primary, oklch(22.75% 0.015 190));
  --canvas-card-label-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --canvas-color-1: var(--color-red-rgb, 255, 88, 70);
  --canvas-color-2: var(--color-orange-rgb, 246, 147, 67);
  --canvas-color-3: var(--color-yellow-rgb, 254, 201, 94);
  --canvas-color-4: var(--color-green-rgb, 149, 195, 37);
  --canvas-color-5: var(--color-blue-rgb, 0, 175, 229);
  --canvas-color-6: var(--color-purple-rgb, 230, 114, 183);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, oklch(34.50% 0.0125 190));
  --caret-color: var(--text-normal, oklch(85.00% 0.0125 190));
  --checkbox-border-color: var(--color-base-40, oklch(43.75% 0.0200 190));
  --checkbox-border-color-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --checkbox-color: var(--interactive-accent, hsl(75, 70%, 32%));
  --checkbox-color-hover: var(--interactive-accent-hover, color-mix(in oklab, hsl(75, 70%, 32%) 62.5%, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%)));
  --checkbox-marker-color: var(--text-on-accent, white);
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-size: var(--font-text-size, 1.125rem);
  --checklist-done-color: var(--strikethrough-color, oklch(52.50% 0.0200 190));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--trans-faint-10, oklch(100% 0.0625 190 / 0.05));
  --code-background-alt: var(--trans-strong-10, oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375));
  --code-border-color: var(--trans-faint-20, oklch(100% 0.0625 190 / 0.0625));
  --code-border-width: 0;
  --code-bracket-background: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --code-comment: var(--text-faint, oklch(52.50% 0.0200 190));
  --code-function: var(--color-yellow, #fec95e);
  --code-important: var(--color-orange, #f69343);
  --code-keyword: var(--color-pink, #ff94a6);
  --code-normal: var(--text-normal, oklch(85.00% 0.0125 190));
  --code-operator: var(--color-red, #ff5846);
  --code-property: var(--color-cyan, #65dab5);
  --code-punctuation: var(--text-muted, oklch(71.25% 0.0125 190));
  --code-radius: var(--radius-xs, 6px);
  --code-special: var(--color-red, #ff5846);
  --code-string: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --code-tag: var(--color-red, #ff5846);
  --code-value: var(--color-purple, #e670b7);
  --collapse-icon-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --collapse-icon-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --color-accent-1: color-mix(in oklab, var(--color-accent) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, var(--color-accent-1), transparent 8%);
  --color-accent-3: color-mix(in oklab, var(--color-accent) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, var(--text-selection) 30%, transparent 70%);
  --color-base-00: oklch(var(--bl-00) calc(var(--bsat-xtr) - 0.005) var(--bhue));
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
  --color-blue: #00afe5;
  --color-blue-rgb: 0, 175, 229;
  --color-cyan: #65dab5;
  --color-cyan-rgb: 85, 211, 244;
  --color-green: #95c325 --color-cyan-rgb: 101, 218, 181;
  --color-green-rgb: 149, 195, 37;
  --color-highlight: rgb(var(--color-highlight-rgb));
  --color-highlight-rgb: var(--highlight-yellow-rgb, 254, 201, 94);
  --color-orange: #f69343;
  --color-orange-rgb: 246, 147, 67;
  --color-pink: #ff94a6;
  --color-pink-rgb: 255, 148, 166;
  --color-purple: #e670b7;
  --color-purple-rgb: 230, 114, 183;
  --color-red: #ff5846;
  --color-red-rgb: 255, 88, 70;
  --color-yellow: #fec95e;
  --color-yellow-rgb: 254, 201, 94;
  --control-icon-background: var(--trans-faint-20, oklch(100% 0.0625 190 / 0.0625));
  --control-icon-color: var(--color-base-80, oklch(77.50% 0.0125 190));
  --control-icon-shadow: var(--glass-base), 0px 0px 12px 0px var(--trans-strong-10);
  --corner-smoothing: 60%;
  --dark: var(--text-normal, var(--color-base-90, oklch(85.00% 0.0125 190)));
  --darkgray: var(--text-normal, var(--color-base-90, oklch(85.00% 0.0125 190)));
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --divider-color-hover: var(--color-accent-3, color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%));
  --divider-width: 0;
  --drag-ghost-background: var(--color-base-00, oklch(22.75% 0.015 190));
  --drag-ghost-text-color: var(--color-base-90, oklch(85.00% 0.0125 190));
  --dropdown-background: var(--interactive-normal, oklch(34.50% 0.0125 190));
  --dropdown-background-hover: var(--interactive-hover, oklch(36.25% 0.0125 190));
  --fab-bg: var(--background-primary, oklch(22.75% 0.015 190));
  --fab-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --fab-color-active: var(--text-normal, oklch(85.00% 0.0125 190));
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97);
  --file-header-background: var(--background-primary, oklch(22.75% 0.015 190));
  --file-header-background-focused: var(--background-primary, oklch(22.75% 0.015 190));
  --file-header-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: var(--font-semi-medium, 490);
  --file-line-width: 43.75rem;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 28px 5%);
  --file-margins-x: var(--size-4-8, 5%);
  --file-margins-y: var(--size-4-8, 28px);
  --flair-background: var(--interactive-normal, oklch(34.50% 0.0125 190));
  --flair-color: var(--text-normal, oklch(85.00% 0.0125 190));
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
  --footnote-divider-color: var(--metadata-divider-color, oklch(100% 0.0625 190 / 0.0625));
  --footnote-id-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(52.50% 0.0200 190));
  --footnote-input-background-active: var(--metadata-input-background-active, oklch(100% 0.0625 190 / 0.05));
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
  --graph-node: var(--text-muted, oklch(71.25% 0.0125 190));
  --graph-node-attachment: var(--color-yellow, #fec95e);
  --graph-node-focused: var(--text-accent, transparent);
  --graph-node-tag: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --graph-node-unresolved: var(--text-faint, oklch(52.50% 0.0200 190));
  --graph-text: var(--text-normal, oklch(85.00% 0.0125 190));
  --gray: var(--text-muted, var(--color-base-70, oklch(71.25% 0.0125 190)));
  --h1-color: oklch(calc(var(--bl-100) - 3.75%) var(--bsat-low) var(--bhue));
  --h1-size: 2em;
  --h1-size-alt: 1.625em;
  --h1-weight: 330;
  --h1-weight-alt: 570;
  --h2-color: oklch(calc(var(--bl-100) - 5%) var(--bsat-low) var(--bhue));
  --h2-size: 1.5em;
  --h2-weight: 570;
  --h3-color: var(--color-base-90, oklch(85.00% 0.0125 190));
  --h3-size: 1.375em;
  --h3-weight: 570;
  --h4-color: var(--color-base-90, oklch(85.00% 0.0125 190));
  --h4-size: 1.25em;
  --h4-weight: 570;
  --h5-color: var(--color-base-90, oklch(85.00% 0.0125 190));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h6-color: var(--color-base-80, oklch(77.50% 0.0125 190));
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-weight: 670;
  --header-height: 56px;
  --headerFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(52.50% 0.0200 190));
  --highlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --highlight-blue-rgb: var(--color-blue-rgb, 0, 175, 229);
  --highlight-cyan-rgb: var(--color-cyan-rgb, 85, 211, 244);
  --highlight-green-rgb: var(--color-green-rgb, 149, 195, 37);
  --highlight-orange-rgb: var(--color-orange-rgb, 246, 147, 67);
  --highlight-pink-rgb: var(--color-pink-rgb, 255, 148, 166);
  --highlight-purple-rgb: var(--color-purple-rgb, 230, 114, 183);
  --highlight-red-rgb: var(--color-red-rgb, 255, 88, 70);
  --highlight-yellow-rgb: var(--color-yellow-rgb, 254, 201, 94);
  --hotkey-gradient: linear-gradient(to top, var(--color-accent) -10%, var(--color-accent-4) 210%);
  --hr-color: var(--trans-faint-30, oklch(100% 0.09375 190 / 0.1));
  --icon-color: var(--color-base-60, oklch(63.75% 0.0200 190));
  --icon-color-active: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --icon-color-focused: var(--icon-color-hover, oklch(85.00% 0.0125 190));
  --icon-color-hover: var(--text-normal, oklch(85.00% 0.0125 190));
  --icon-m-stroke-width: 1.875px;
  --icon-stroke: var(--icon-m-stroke-width, 1.875px);
  --icon-stroke-thick: 2.25px;
  --icon-xl: 28px;
  --icon-xs-stroke-width: 2.125px;
  --indent-unit: 0.375em;
  --indentation-guide-color: var(--trans-faint-30, oklch(100% 0.09375 190 / 0.1));
  --indentation-guide-width: var(--border-width, 0);
  --indentation-guide-width-active: var(--border-width, 0);
  --inline-title-color: var(--h1-color, oklch(89.5% 0.0005 190));
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 330);
  --input-border-width: var(--border-width, 0);
  --input-date-separator: var(--text-faint, oklch(52.50% 0.0200 190));
  --input-font-weight: var(--font-normal, 420);
  --input-height: 28px;
  --input-placeholder-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --input-radius: var(--radius-s, 8px);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent, hsl(75, 70%, 32%));
  --interactive-accent-hover: color-mix(in oklab, var(--color-accent) 62.5%, var(--color-accent-1));
  --interactive-accent-hsl: var(--color-accent-hsl, 75, 70%, 32%);
  --interactive-hover: var(--trans-faint-30, oklch(36.25% 0.0125 190));
  --interactive-normal: var(--color-base-30, oklch(34.50% 0.0125 190));
  --light: var(--background-primary, var(--color-base-00, oklch(22.75% 0.015 190)));
  --lightgray: var(--background-secondary, var(--color-base-20, oklch(27.50% 0.0125 190)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --link-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%));
  --link-color-sidebar: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --link-external-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%));
  --link-unresolved-color: oklch(from var(--color-accent-1) l c h / var(--link-unresolved-lch));
  --link-unresolved-lch: 0.75;
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 420);
  --list-bullet-color: var(--color-base-80, oklch(77.50% 0.0125 190));
  --list-dash-color: var(--trans-faint-60, oklch(100% 0.025 190 / 0.35));
  --list-marker-color: var(--color-base-50, oklch(52.50% 0.0200 190));
  --list-marker-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --list-marker-color-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --list-spacing: 0.125em;
  --math-color: var(--color-base-100, oklch(93.25% 0.0005 190));
  --menu-background: var(--background-primary-alt, color-mix(in oklab, oklch(22.75% 0.015 190), oklch(27.50% 0.0125 190)));
  --menu-border-color: var(--trans-faint-40, oklch(100% 0.05 190 / 0.125));
  --menu-radius: var(--radius-ml, 14px);
  --menu-shadow: var(--shadow-normal, 0px 3px 18px 0px oklch(0 0 0 / 0.1875));
  --metadata-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --metadata-border-radius: var(--radius-m, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --metadata-gap: 2px;
  --metadata-input-background-active: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --metadata-input-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-longtext-lines: 5;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 6px 8px);
  --metadata-input-text-color: var(--text-normal, oklch(85.00% 0.0125 190));
  --metadata-label-background-active: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --metadata-label-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-weight: var(--font-semi-medium, 490);
  --metadata-label-text-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --metadata-label-text-color-hover: var(--icon-color, oklch(63.75% 0.0200 190));
  --metadata-label-width: 10em;
  --metadata-property-background-active: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --metadata-property-box-shadow-focus: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%));
  --metadata-property-box-shadow-hover: 0 0 0 2.5px var(--background-modifier-hover);
  --mobile-nav-fade-bg: linear-gradient(oklch(from var(--background-secondary) l c h), transparent calc(var(--touch-size-l)*1.5));
  --modal-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --modal-border-width: var(--border-width, 0);
  --modal-community-header-bg: var(--trans-strong-20, oklch(from oklch(27.50% 0.0125 190) l 0.0125 h / 0.5));
  --modal-community-item-bg: var(--trans-strong-40, oklch(from oklch(34.50% 0.0125 190) l 0.0125 h / 0.5));
  --modal-radius: var(--radius-xxl, 22px);
  --modal-small-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --nav-collapse-icon-color: var(--trans-faint-60, oklch(100% 0.025 190 / 0.35));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(52.50% 0.0200 190));
  --nav-folder-color: var(--color-base-80, oklch(77.50% 0.0125 190));
  --nav-header-bg: var(--divider-color, oklch(100% 0.0625 190 / 0.0625));
  --nav-header-timing: var(--vl-ease-out, cubic-bezier(0.3, 0.75, 0, 1));
  --nav-heading-color: var(--color-base-80, oklch(77.50% 0.0125 190));
  --nav-heading-color-collapsed: var(--text-faint, oklch(52.50% 0.0200 190));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --nav-heading-color-hover: var(--text-normal, oklch(85.00% 0.0125 190));
  --nav-heading-weight: var(--font-medium, 520);
  --nav-heading-weight-hover: var(--font-medium, 520);
  --nav-indentation-guide-color: var(--trans-faint-30, oklch(100% 0.09375 190 / 0.1));
  --nav-indentation-guide-width: var(--indentation-guide-width, 0);
  --nav-item-background-active: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, oklch(100% 0.0625 190 / 0.05));
  --nav-item-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --nav-item-color-active: var(--text-normal, oklch(85.00% 0.0125 190));
  --nav-item-color-highlighted: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --nav-item-color-hover: var(--text-normal, oklch(85.00% 0.0125 190));
  --nav-item-color-selected: var(--text-normal, oklch(85.00% 0.0125 190));
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --nav-tag-color-active: var(--text-muted, oklch(71.25% 0.0125 190));
  --nav-tag-color-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --nav-tag-radius: var(--radius-s, 8px);
  --nav-tag-weight: var(--font-semibold, 620);
  --nav-text-color: var(--text-normal, oklch(85.00% 0.0125 190));
  --paint-description: "This color scheme takes after a classic from racing history. Imbue your notes with the elegance and vitality of a British super sports.";
  --paint-image: url(data:image/webpbase64,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);
  --pdf-background: var(--background-primary, oklch(22.75% 0.015 190));
  --pdf-page-background: var(--background-primary, oklch(22.75% 0.015 190));
  --pdf-sidebar-background: var(--background-primary, oklch(22.75% 0.015 190));
  --pdf-spread-shadow: none;
  --pdf-thumbnail-shadow: var(--shadow-input, 0 0 0 1px oklch(100% 0.0625 190 / 0.0625));
  --pill-background: var(--code-background, oklch(100% 0.0625 190 / 0.05));
  --pill-background-hover: var(--code-background, oklch(100% 0.0625 190 / 0.05));
  --pill-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(36.25% 0.0125 190));
  --pill-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --pill-color-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --pill-color-remove: var(--text-faint, oklch(52.50% 0.0200 190));
  --pill-color-remove-hover: var(--text-on-accent, white);
  --pill-radius: var(--radius-l, 18px);
  --pill-weight: var(--font-semi-medium, 490);
  --prompt-backdrop-filter: var(--blur-m, blur(12px) saturate(1.125) brightness(1));
  --prompt-background: var(--modal-background, oklch(27.75% 0.0175 190 / 0.625));
  --prompt-border-color: var(--menu-border-color, oklch(100% 0.05 190 / 0.125));
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
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent) linear-gradient(oklch(34.50% 0.0125 190), color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent)));
  --raised-blur: var(--blur-s, blur(8px) saturate(1.125) brightness(1));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px 12px 8px);
  --ribbon-width: 56px;
  --scrollbar-active-thumb-bg: var(--color-base-35, oklch(36.25% 0.0125 190));
  --scrollbar-radius: var(--radius-l, 18px);
  --scrollbar-thumb-bg: var(--color-base-25, oklch(31.25% 0.0125 190));
  --search-clear-button-color: var(--color-base-50, oklch(52.50% 0.0200 190));
  --search-icon-color: var(--color-base-50, oklch(52.50% 0.0200 190));
  --search-icon-size: 17px;
  --search-result-background: var(--trans-strong-10, oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375));
  --secondary: var(--text-accent, var(--color-accent-1, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%)));
  --setting-group-heading-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --setting-group-heading-size: var(--font-ui-medium, 18px);
  --setting-group-heading-weight: var(--font-medium, 520);
  --setting-item-background: color-mix(in oklab, var(--background-primary) 87.5%, var(--background-secondary));
  --setting-items-background: var(--background-primary, oklch(22.75% 0.015 190));
  --setting-items-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --setting-items-padding: calc(var(--vl-layout-padding) + 8px);
  --setting-items-radius: calc(var(--radius-ml) + 2px);
  --settings-background: oklch(26.875% calc(var(--bsat-xtr) - 0.005) var(--bhue));
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
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(71.25% 0.0125 190));
  --shiki-code-background: var(--code-background, oklch(100% 0.0625 190 / 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, oklch(52.50% 0.0200 190));
  --shiki-code-function: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --shiki-code-important: var(--color-orange, #f69343);
  --shiki-code-keyword: var(--color-pink, #ff94a6);
  --shiki-code-normal: var(--text-muted, oklch(71.25% 0.0125 190));
  --shiki-code-property: var(--color-cyan, #65dab5);
  --shiki-code-punctuation: var(--text-muted, oklch(71.25% 0.0125 190));
  --shiki-code-string: var(--color-yellow, #fec95e);
  --shiki-code-value: var(--color-purple, #e670b7);
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --shiki-gutter-text-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(71.25% 0.0125 190));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(71.25% 0.0125 190));
  --shiki-terminal-dots-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --sidebar-left-toggle-inner-width: 12%;
  --sidebar-right-toggle-inner-width: 12%;
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(36.25% 0.0125 190));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: 12px;
  --slider-thumb-radius: var(--slider-thumb-height, 12px);
  --slider-thumb-width: 12px;
  --slider-thumb-y: -3px;
  --slider-track-background: var(--trans-faint-40, oklch(100% 0.05 190 / 0.125));
  --slider-track-height: 20px;
  --stacked-shadow-color: var(--trans-black-10, oklch(0 0 0 / 0.1875));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, oklch(100% 0.0625 190 / 0.0625));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-radius: var(--radius-l) 0 0 var(--radius-l, 18px 0 0 18px);
  --status-bar-text-color: var(--text-muted, oklch(71.25% 0.0125 190));
  --strikethrough-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --suggestion-background: var(--background-primary, oklch(22.75% 0.015 190));
  --sync-avatar-color-1: var(--color-red, #ff5846);
  --sync-avatar-color-2: var(--color-orange, #f69343);
  --sync-avatar-color-3: var(--color-yellow, #fec95e);
  --sync-avatar-color-4: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --sync-avatar-color-5: var(--color-cyan, #65dab5);
  --sync-avatar-color-6: var(--color-blue, #00afe5);
  --sync-avatar-color-7: var(--color-purple, #e670b7);
  --sync-avatar-color-8: var(--color-pink, #ff94a6);
  --tab-background-active: var(--background-primary, oklch(22.75% 0.015 190));
  --tab-close-bg: oklch(calc(var(--bl-35) + 2%) var(--bsat-str) var(--bhue) / 0.875);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, oklch(36.25% 0.0125 190));
  --tab-font-weight: var(--font-normal, 420);
  --tab-max-width: 240px;
  --tab-outline-color: var(--divider-color, oklch(100% 0.0625 190 / 0.0625));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 8px);
  --tab-right-fade: linear-gradient(to left, oklch(var(--bl-25) calc(var(--bsat-str)*1.25) var(--bhue)) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(calc(var(--bl-20) + 1%) var(--bsat-xtr) var(--bhue)) 80%, transparent);
  --tab-sidebar-bg: var(--trans-faint-20, oklch(100% 0.0625 190 / 0.0625));
  --tab-sidebar-container-bg: var(--trans-faint-05, oklch(100% 0.075 190 / 0.025));
  --tab-stacked-font-weight: var(--font-medium, 520);
  --tab-stacked-header-width: var(--header-height, 56px);
  --tab-stacked-pane-width: var(--file-line-width, 43.75rem);
  --tab-stacked-shadow: -8px 0 8px 0 var(--stacked-shadow-color);
  --tab-switcher-background: var(--background-secondary, oklch(27.50% 0.0125 190));
  --tab-switcher-preview-radius: var(--radius-xl, 20px);
  --tab-text-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --tab-text-color-active: var(--color-base-100, oklch(93.25% 0.0005 190));
  --tab-text-color-focused: var(--icon-color, oklch(63.75% 0.0200 190));
  --tab-text-color-focused-active: var(--color-base-100, oklch(93.25% 0.0005 190));
  --tab-text-color-focused-active-current: var(--color-base-100, oklch(93.25% 0.0005 190));
  --tab-text-color-focused-highlighted: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --table-border-color: var(--trans-faint-30, oklch(100% 0.09375 190 / 0.1));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(75, 70%, 32%));
  --table-drag-handle-color: var(--text-faint, oklch(52.50% 0.0200 190));
  --table-header-border-color: var(--table-border-color, oklch(100% 0.09375 190 / 0.1));
  --table-header-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --table-header-size: var(--table-text-size, 0.90625em);
  --table-header-weight: var(--font-medium, 520);
  --table-line-height: var(--line-height-normal, 1.6);
  --table-row-alt-background: var(--table-row-bg, oklch(100% 0.09375 190 / 0.015));
  --table-row-alt-background-hover: var(--table-row-bg, oklch(100% 0.09375 190 / 0.015));
  --table-row-bg: var(--trans-faint-00, oklch(100% 0.09375 190 / 0.015));
  --table-selection-border-color: var(--interactive-accent, hsl(75, 70%, 32%));
  --table-text-size: var(--font-small, 0.90625em);
  --table-text-weight: var(--font-normal, 420);
  --tag-border-color: oklch(from var(--interactive-accent) l c h / 0.025);
  --tag-color: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --tag-color-hover: var(--text-accent, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --tag-padding-x: 0.6875em;
  --tag-padding-y: 0.3125em;
  --tag-size: var(--font-smallest, 0.8em);
  --tag-weight: var(--font-semi-medium, 490);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%)));
  --text-accent: var(--color-accent-1, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --text-accent-hover: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%));
  --text-error: var(--color-red, #ff5846);
  --text-faint: var(--color-base-50, oklch(52.50% 0.0200 190));
  --text-highlight-bg: oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: var(--color-highlight-rgb, 254, 201, 94);
  --text-highlight-bg-search: oklch(from var(--color-highlight) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: var(--color-base-70, oklch(71.25% 0.0125 190));
  --text-normal: var(--color-base-90, oklch(85.00% 0.0125 190));
  --text-selection: oklab(from var(--color-accent) l a b / 0.25);
  --text-success: var(--color-green, #95c325 --color-cyan-rgb: 101, 218, 181);
  --text-warning: var(--color-orange, #f69343);
  --textHighlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --titleFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, oklch(100% 0.0625 190 / 0.0625));
  --titlebar-height: 36px;
  --titlebar-text-color: var(--trans-faint-60, oklch(100% 0.025 190 / 0.35));
  --titlebar-text-color-focused: var(--text-muted, oklch(71.25% 0.0125 190));
  --titlebar-text-weight: var(--font-semibold, 620);
  --toggle-border-width: 4px;
  --toggle-gradient: linear-gradient(to bottom, var(--color-accent) -30%, var(--color-accent-4) 180%);
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 36px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --toggle-track-bg: var(--trans-faint-50, oklch(100% 0.025 190 / 0.2));
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
  --vault-profile-color: var(--icon-color, oklch(63.75% 0.0200 190));
  --vault-profile-color-hover: var(--text-muted, oklch(71.25% 0.0125 190));
  --vault-profile-font-size: var(--font-ui-small, 18px);
  --vault-profile-font-weight: var(--font-normal, 420);
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1);
  --vl-layout-padding: 8px;
  --warning-gradient: linear-gradient(to top, var(--color-red) -30%, var(--trans-strong-20) 180%);
  --workspace-border-color: var(--trans-faint-25, oklch(100% 0.0625 190 / 0.08125));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(1 0.0625 190 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: oklch(1 0.0625 190 / 0.0625);
  color: oklch(0.85 0.0125 190);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --anim-fast-delay: 150ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-fast-smooth: 150ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-fast-swing: 150ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-super-delay: 75ms cubic-bezier(0.65, 0.05, 0.36, 1);
  --anim-super-smooth: 75ms cubic-bezier(0.45, 0.05, 0.55, 0.95);
  --anim-super-swing: 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --background-modifier-active-hover: hsla(75, 70%, 32%, 0.1);
  --background-modifier-border: oklch(100% 0.0625 190 / 0.0625);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: oklch(36.25% 0.0125 190);
  --background-modifier-error: #ff5846;
  --background-modifier-error-hover: #ff5846;
  --background-modifier-error-rgb: 255, 88, 70;
  --background-modifier-form-field: oklch(31.25% 0.0125 190);
  --background-modifier-form-field-hover: transparent;
  --background-modifier-hover: oklch(100% 0.0625 190 / 0.05);
  --background-modifier-success: #95c325 --color-cyan-rgb: 101, 218, 181;
  --background-modifier-success-rgb: 149, 195, 37;
  --background-primary: oklch(22.75% 0.015 190);
  --background-primary-alt: color-mix(in oklab, oklch(22.75% 0.015 190), oklch(27.50% 0.0125 190));
  --background-secondary: oklch(27.50% 0.0125 190);
  --background-secondary-alt: oklch(34.50% 0.0125 190);
  --bg-checkbox: radial-gradient(transparent 50%, oklch(43.75% 0.0200 190) 55% 60%, transparent 65%);
  --bg-main-inner: oklch(28.75% 0.0175 190);
  --bg-main-outer: oklch(25.00% 0.0225 190);
  --bg-main-workspace: radial-gradient(at 50% 50%, oklch(28.75% 0.0175 190) 0%, oklch(25.00% 0.0225 190) 200%);
  --blockquote-border-color: oklch(52.50% 0.0200 190);
  --blockquote-color: oklch(71.25% 0.0125 190);
  --blur-background: color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent) linear-gradient(oklch(34.50% 0.0125 190), color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent));
  --blur-l: blur(16px) saturate(1.125) brightness(1);
  --blur-m: blur(12px) saturate(1.125) brightness(1);
  --blur-s: blur(8px) saturate(1.125) brightness(1);
  --bold-color: oklch(93.25% 0.0005 190);
  --bold-modifier: 200;
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 255, 148, 166;
  --callout-default: 0, 175, 229;
  --callout-error: 255, 88, 70;
  --callout-example: 230, 114, 183;
  --callout-fail: 255, 88, 70;
  --callout-important: 85, 211, 244;
  --callout-info: 0, 175, 229;
  --callout-padding: 1rem;
  --callout-question: 246, 147, 67;
  --callout-radius: 10px;
  --callout-success: 149, 195, 37;
  --callout-summary: 85, 211, 244;
  --callout-tip: 85, 211, 244;
  --callout-title-weight: 670;
  --callout-todo: 0, 175, 229;
  --callout-warning: 254, 201, 94;
  --canvas-background: oklch(22.75% 0.015 190);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: oklch(34.50% 0.0125 190);
  --caret-color: oklch(85.00% 0.0125 190);
  --checkbox-border-color: oklch(43.75% 0.0200 190);
  --checkbox-border-color-hover: oklch(71.25% 0.0125 190);
  --checkbox-color: hsl(75, 70%, 32%);
  --checkbox-color-hover: color-mix(in oklab, hsl(75, 70%, 32%) 62.5%, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --checkbox-marker-color: white;
  --checkbox-radius: 50%;
  --checkbox-size: 1.125rem;
  --checklist-done-color: oklch(52.50% 0.0200 190);
  --clickable-icon-radius: 8px;
  --code-background: oklch(100% 0.0625 190 / 0.05);
  --code-background-alt: oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375);
  --code-border-color: oklch(100% 0.0625 190 / 0.0625);
  --code-bracket-background: oklch(100% 0.0625 190 / 0.05);
  --code-comment: oklch(52.50% 0.0200 190);
  --code-function: #fec95e;
  --code-important: #f69343;
  --code-keyword: #ff94a6;
  --code-normal: oklch(85.00% 0.0125 190);
  --code-operator: #ff5846;
  --code-property: #65dab5;
  --code-punctuation: oklch(71.25% 0.0125 190);
  --code-radius: 6px;
  --code-size: 0.875em;
  --code-special: #ff5846;
  --code-string: #95c325 --color-cyan-rgb: 101, 218, 181;
  --code-tag: #ff5846;
  --code-value: #e670b7;
  --collapse-icon-color: oklch(52.50% 0.0200 190);
  --collapse-icon-color-collapsed: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --color-accent: hsl(75, 70%, 32%);
  --color-accent-1: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --color-accent-2: color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%);
  --color-accent-3: color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%);
  --color-accent-4: color-mix(in oklab, oklab(from hsl(75, 70%, 32%) l a b / 0.25) 30%, transparent 70%);
  --color-accent-hsl: 75, 70%, 32%;
  --color-base-00: oklch(22.75% 0.015 190);
  --color-base-05: oklch(23.50% 0.0005 190);
  --color-base-10: oklch(26.25% 0.0125 190);
  --color-base-100: oklch(93.25% 0.0005 190);
  --color-base-20: oklch(27.50% 0.0125 190);
  --color-base-25: oklch(31.25% 0.0125 190);
  --color-base-30: oklch(34.50% 0.0125 190);
  --color-base-35: oklch(36.25% 0.0125 190);
  --color-base-40: oklch(43.75% 0.0200 190);
  --color-base-50: oklch(52.50% 0.0200 190);
  --color-base-55: oklch(57.50% 0.0200 190);
  --color-base-60: oklch(63.75% 0.0200 190);
  --color-base-70: oklch(71.25% 0.0125 190);
  --color-base-80: oklch(77.50% 0.0125 190);
  --color-base-90: oklch(85.00% 0.0125 190);
  --color-highlight: rgb(254, 201, 94);
  --color-highlight-rgb: 254, 201, 94;
  --control-icon-background: oklch(100% 0.0625 190 / 0.0625);
  --control-icon-color: oklch(77.50% 0.0125 190);
  --control-icon-shadow: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 0px 12px 0px oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375);
  --divider-color: oklch(100% 0.0625 190 / 0.0625);
  --divider-color-hover: color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%);
  --divider-vertical-height: 100%;
  --dropdown-background: oklch(34.50% 0.0125 190);
  --dropdown-background-hover: oklch(36.25% 0.0125 190);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --fab-bg: oklch(22.75% 0.015 190);
  --fab-color: oklch(63.75% 0.0200 190);
  --fab-color-active: oklch(85.00% 0.0125 190);
  --flair-background: oklch(34.50% 0.0125 190);
  --flair-color: oklch(85.00% 0.0125 190);
  --font-interface: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-label: "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-normal-linux: 490;
  --font-print: '??', "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, 'Arial';
  --font-semi-medium: 490;
  --font-text: "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: var(--h1-weight, 330);
  --glass-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.5);
  --glass-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #ff5846 calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #ff5846 calc(l + 0.075) a b / 0.5);
  --glass-button-l: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.5);
  --graph-line: oklch(36.25% 0.0125 190);
  --graph-node: oklch(71.25% 0.0125 190);
  --graph-node-attachment: #fec95e;
  --graph-node-focused: transparent;
  --graph-node-tag: #95c325 --color-cyan-rgb: 101, 218, 181;
  --graph-node-unresolved: oklch(52.50% 0.0200 190);
  --graph-text: oklch(85.00% 0.0125 190);
  --h1-color: oklch(89.5% 0.0005 190);
  --h2-color: oklch(88.25% 0.0005 190);
  --h3-color: oklch(85.00% 0.0125 190);
  --h4-color: oklch(85.00% 0.0125 190);
  --h5-color: oklch(85.00% 0.0125 190);
  --h5-line-height: 1.6;
  --h6-color: oklch(77.50% 0.0125 190);
  --h6-line-height: 1.6;
  --heading-formatting: oklch(52.50% 0.0200 190);
  --heading-margin-start: 1.375em;
  --heading-spacing: round(nearest, 2.375em, 2px);
  --highlight-blue-rgb: 0, 175, 229;
  --highlight-cyan-rgb: 85, 211, 244;
  --highlight-green-rgb: 149, 195, 37;
  --highlight-orange-rgb: 246, 147, 67;
  --highlight-pink-rgb: 255, 148, 166;
  --highlight-purple-rgb: 230, 114, 183;
  --highlight-red-rgb: 255, 88, 70;
  --highlight-yellow-rgb: 254, 201, 94;
  --hotkey-gradient: linear-gradient(to top, hsl(75, 70%, 32%) -10%, color-mix(in oklab, oklab(from hsl(75, 70%, 32%) l a b / 0.25) 30%, transparent 70%) 210%);
  --hr-color: oklch(100% 0.09375 190 / 0.1);
  --hr-spacing: 2.25rem;
  --interactive-accent: hsl(75, 70%, 32%);
  --interactive-accent-hover: color-mix(in oklab, hsl(75, 70%, 32%) 62.5%, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%));
  --interactive-accent-hsl: 75, 70%, 32%;
  --interactive-hover: oklch(36.25% 0.0125 190);
  --interactive-normal: oklch(34.50% 0.0125 190);
  --left-margin-delay: 150ms;
  --link-color: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --link-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%);
  --link-color-sidebar: color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%);
  --link-external-color: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --link-external-color-hover: color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%);
  --link-unresolved-color: oklch(from color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%) l c h / 0.75);
  --link-unresolved-decoration-color: hsla(75, 70%, 32%, 0.3);
  --link-weight: 420;
  --list-bullet-color: oklch(77.50% 0.0125 190);
  --list-dash-color: oklch(100% 0.025 190 / 0.35);
  --list-indent: 1.5em;
  --math-color: oklch(93.25% 0.0005 190);
  --menu-background: color-mix(in oklab, oklch(22.75% 0.015 190), oklch(27.50% 0.0125 190));
  --menu-border-color: oklch(100% 0.05 190 / 0.125);
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 14px;
  --menu-shadow: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --p-spacing: 1.125rem;
  --pdf-background: oklch(22.75% 0.015 190);
  --pdf-page-background: oklch(22.75% 0.015 190);
  --pdf-shadow: none;
  --pdf-sidebar-background: oklch(22.75% 0.015 190);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(100% 0.0625 190 / 0.0625);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent) linear-gradient(oklch(34.50% 0.0125 190), color-mix(in srgb, oklch(34.50% 0.0125 190) 65%, transparent));
  --raised-blur: blur(8px) saturate(1.125) brightness(1);
  --right-margin-delay: 150ms;
  --scrollbar-active-thumb-bg: oklch(36.25% 0.0125 190);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 18px;
  --scrollbar-thumb-bg: oklch(31.25% 0.0125 190);
  --search-clear-button-color: oklch(52.50% 0.0200 190);
  --search-icon-color: oklch(52.50% 0.0200 190);
  --search-result-background: oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375);
  --setting-group-heading-color: oklch(63.75% 0.0200 190);
  --setting-group-heading-size: 18px;
  --setting-group-heading-weight: 520;
  --setting-item-background: color-mix(in oklab, oklch(22.75% 0.015 190) 87.5%, oklch(27.50% 0.0125 190));
  --setting-items-background: oklch(22.75% 0.015 190);
  --setting-items-border-color: oklch(100% 0.0625 190 / 0.0625);
  --setting-items-padding: 16px;
  --setting-items-radius: 16px;
  --settings-background: oklch(26.875% 0.015 190);
  --shadow-button: inset 3px 3px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.75), inset -3px -3px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(22.75% calc(0.0200 - 0.005) 190) l 0.0125 h / 0.75);
  --shadow-button-error: inset 3.25px 3.25px 1.25px -1.25px oklab(from #ff5846 calc(l + 0.075) a b / 0.75), inset -3.25px -3.25px 1.25px -1.25px oklab(from #ff5846 calc(l + 0.075) a b / 0.5), 0px 3px 15px 0px oklch(from oklch(22.75% calc(0.0200 - 0.005) 190) l 0.0125 h / 0.75);
  --shadow-canvas-node: 0px 0px 16px 0px oklch(0 0 0 / 0.1875);
  --shadow-fab: 0 0 0 0.5px oklch(100% 0.05 190 / 0.125), 0px 2px 12px 0px oklch(0 0 0 / 0.1875);
  --shadow-faint: 0px 3px 15px 0px oklch(from oklch(22.75% 0.015 190) l 0.0125 h / 0.75);
  --shadow-input: 0 0 0 0.5px oklch(100% 0.05 190 / 0.125);
  --shadow-input-active: 0 0 0 2.5px color-mix(in oklab, hsl(75, 70%, 32%) 50%, transparent 75%);
  --shadow-l: inset 1.125px 1.875px 2.5px -1.25px rgba(255, 255, 255, 0.188), inset -1.125px -1.875px 2.5px -1.25px rgba(255, 255, 255, 0.138), inset 0 8px 16px rgba(255, 255, 255, 0.015), 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-muted: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-normal: 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-s: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-setting-items: 0 4px 12px 0 oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375);
  --shadow-setting-items-top: inset 1px 2px 2px 0 oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375), 0px 1px 9px oklch(100% 0.075 190 / 0.025);
  --shadow-sidebar: 0px 0px 12px 0px oklch(from oklch(27.50% 0.0125 190) l 0.0125 h / 0.5);
  --shadow-strong: 0px 0px 24px 0px oklch(0 0 0 / 0.375);
  --shadow-suggestion-item: inset 3.75px 3.75px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.75), inset -3.75px -3.75px 1.5px -1.25px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.5), 0px 3px 18px 0px oklch(0 0 0 / 0.1875);
  --shadow-tab: inset 0.875px 1.625px 2px -1px rgba(255, 255, 255, 0.263), inset -0.875px -1.625px 2px -1px rgba(255, 255, 255, 0.188), inset 0 8px 16px rgba(255, 255, 255, 0.025);
  --shadow-toggle: inset 1.5px 1.5px 1.5px 0px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.75), inset -1.5px -1.5px 1.5px 0px oklab(from hsl(75, 70%, 32%) calc(l + 0.075) a b / 0.5);
  --shadow-workspace: 0 0 0 0.5px oklch(100% 0.09375 190 / 0.1), 0 0 20px oklch(from oklch(22.75% 0.015 190) l 0.0125 h / 0.75);
  --shadow-workspace-multi: 0 0 0 0.5px oklch(100% 0.09375 190 / 0.1);
  --shiki-active-tab-border-color: oklch(71.25% 0.0125 190);
  --shiki-code-background: oklch(100% 0.0625 190 / 0.05);
  --shiki-code-block-border-radius: 6px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: oklch(52.50% 0.0200 190);
  --shiki-code-function: #95c325 --color-cyan-rgb: 101, 218, 181;
  --shiki-code-important: #f69343;
  --shiki-code-keyword: #ff94a6;
  --shiki-code-normal: oklch(71.25% 0.0125 190);
  --shiki-code-property: #65dab5;
  --shiki-code-punctuation: oklch(71.25% 0.0125 190);
  --shiki-code-string: #fec95e;
  --shiki-code-value: #e670b7;
  --shiki-gutter-border-color: oklch(100% 0.0625 190 / 0.0625);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: oklch(52.50% 0.0200 190);
  --shiki-gutter-text-color-highlight: oklch(71.25% 0.0125 190);
  --shiki-highlight-green: rgba(149, 195, 37, 0.5);
  --shiki-highlight-green-background: rgba(149, 195, 37, 0.1);
  --shiki-highlight-neutral: oklch(71.25% 0.0125 190);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 88, 70, 0.5);
  --shiki-highlight-red-background: rgba(255, 88, 70, 0.1);
  --shiki-terminal-dots-color: oklch(52.50% 0.0200 190);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --stacked-shadow-color: oklch(0 0 0 / 0.1875);
  --strikethrough-color: oklch(52.50% 0.0200 190);
  --suggestion-background: oklch(22.75% 0.015 190);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff5846;
  --sync-avatar-color-2: #f69343;
  --sync-avatar-color-3: #fec95e;
  --sync-avatar-color-4: #95c325 --color-cyan-rgb: 101, 218, 181;
  --sync-avatar-color-5: #65dab5;
  --sync-avatar-color-6: #00afe5;
  --sync-avatar-color-7: #e670b7;
  --sync-avatar-color-8: #ff94a6;
  --tab-background-active: oklch(22.75% 0.015 190);
  --tab-close-bg: oklch(38.25% 0.0125 190 / 0.875);
  --tab-divider-color: oklch(36.25% 0.0125 190);
  --tab-font-size: 13px;
  --tab-font-weight: 420;
  --tab-outline-color: oklch(100% 0.0625 190 / 0.0625);
  --tab-radius: 8px;
  --tab-right-fade: linear-gradient(to left, oklch(31.25% 0.01563 190) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(28.5% 0.0200 190) 80%, transparent);
  --tab-sidebar-bg: oklch(100% 0.0625 190 / 0.0625);
  --tab-sidebar-container-bg: oklch(100% 0.075 190 / 0.025);
  --tab-stacked-font-size: 13px;
  --tab-stacked-font-weight: 520;
  --tab-stacked-header-width: 56px;
  --tab-stacked-pane-width: 43.75rem;
  --tab-stacked-shadow: -8px 0 8px 0 oklch(0 0 0 / 0.1875);
  --tab-switcher-background: oklch(27.50% 0.0125 190);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.50% 0.0125 190), transparent);
  --tab-switcher-preview-radius: 20px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(75, 70%, 32%);
  --tab-text-color: oklch(63.75% 0.0200 190);
  --tab-text-color-active: oklch(93.25% 0.0005 190);
  --tab-text-color-focused: oklch(63.75% 0.0200 190);
  --tab-text-color-focused-active: oklch(93.25% 0.0005 190);
  --tab-text-color-focused-active-current: oklch(93.25% 0.0005 190);
  --tab-text-color-focused-highlighted: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --table-add-button-border-color: oklch(100% 0.0625 190 / 0.0625);
  --table-add-button-border-width: 1px;
  --table-border-color: oklch(100% 0.09375 190 / 0.1);
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(75, 70%, 32%);
  --table-drag-handle-color: oklch(52.50% 0.0200 190);
  --table-drag-handle-color-active: white;
  --table-header-border-color: oklch(100% 0.09375 190 / 0.1);
  --table-header-border-width: 1px;
  --table-header-color: oklch(63.75% 0.0200 190);
  --table-header-size: 0.90625em;
  --table-header-weight: 520;
  --table-line-height: 1.6;
  --table-row-alt-background: oklch(100% 0.09375 190 / 0.015);
  --table-row-alt-background-hover: oklch(100% 0.09375 190 / 0.015);
  --table-row-bg: oklch(100% 0.09375 190 / 0.015);
  --table-row-last-border-width: 1px;
  --table-selection: hsla(75, 70%, 32%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(75, 70%, 32%);
  --table-text-size: 0.90625em;
  --table-text-weight: 420;
  --tag-background: hsla(75, 70%, 32%, 0.1);
  --tag-background-hover: hsla(75, 70%, 32%, 0.2);
  --tag-border-color: oklch(from hsl(75, 70%, 32%) l c h / 0.025);
  --tag-border-color-hover: hsla(75, 70%, 32%, 0.15);
  --tag-color: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --tag-color-hover: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --tag-size: 0.8em;
  --tag-weight: 490;
  --text-accent: color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%);
  --text-accent-hover: color-mix(in oklab, color-mix(in oklab, hsl(75, 70%, 32%) 64%, #fff 36%), transparent 8%);
  --text-error: #ff5846;
  --text-faint: oklch(52.50% 0.0200 190);
  --text-highlight-bg: oklch(from rgb(254, 201, 94) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: 254, 201, 94;
  --text-highlight-bg-search: oklch(from rgb(254, 201, 94) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: oklch(71.25% 0.0125 190);
  --text-normal: oklch(85.00% 0.0125 190);
  --text-selection: oklab(from hsl(75, 70%, 32%) l a b / 0.25);
  --text-success: #95c325 --color-cyan-rgb: 101, 218, 181;
  --text-warning: #f69343;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 56px;
  --traffic-lights-offset-y: 56px;
  --trans-faint-00: oklch(100% 0.09375 190 / 0.015);
  --trans-faint-05: oklch(100% 0.075 190 / 0.025);
  --trans-faint-10: oklch(100% 0.0625 190 / 0.05);
  --trans-faint-20: oklch(100% 0.0625 190 / 0.0625);
  --trans-faint-25: oklch(100% 0.0625 190 / 0.08125);
  --trans-faint-30: oklch(100% 0.09375 190 / 0.1);
  --trans-faint-40: oklch(100% 0.05 190 / 0.125);
  --trans-faint-50: oklch(100% 0.025 190 / 0.2);
  --trans-faint-60: oklch(100% 0.025 190 / 0.35);
  --trans-strong-00: oklch(from oklch(22.75% 0.015 190) l 0.0125 h / 0.75);
  --trans-strong-05: oklch(from oklch(22.75% 0.015 190) l 0.0125 h / 0.625);
  --trans-strong-10: oklch(from oklch(23.50% 0.0005 190) l 0.0125 h / 0.375);
  --trans-strong-20: oklch(from oklch(27.50% 0.0125 190) l 0.0125 h / 0.5);
  --trans-strong-30: oklch(from oklch(34.50% 0.0125 190) l 0.0125 h / 0.5);
  --trans-strong-40: oklch(from oklch(34.50% 0.0125 190) l 0.0125 h / 0.5);
  --trans-white-00: oklch(93.25% 0 0 / 0.75);
  --trans-white-10: oklch(93.25% 0 0 / 0.625);
  --warning-gradient: linear-gradient(to top, #ff5846 -30%, oklch(from oklch(27.50% 0.0125 190) l 0.0125 h / 0.5) 180%);
  background-color: oklch(1 0.09375 190 / 0.1);
  border-bottom-color: oklch(0.895 0.0005 190);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.895 0.0005 190);
  border-left-width: 0px;
  border-right-color: oklch(0.895 0.0005 190);
  border-right-width: 0px;
  border-top-color: oklch(0.895 0.0005 190);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--h1-color, oklch(0.895 0.0005 190));
  content: "";
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 330);
  letter-spacing: var(--h1-letter-spacing, -0.32px);
  line-height: var(--h1-line-height, 38.4px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(0.9325 0.0005 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0.0005 190) none 0px;
  text-decoration-color: oklch(0.9325 0.0005 190);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(0.85 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.0125 190) none 0px;
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(0.85 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.0125 190) none 0px;
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(0.9325 0.0005 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0.0005 190) none 0px;
  text-decoration-color: oklch(0.9325 0.0005 190);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.8 0.188621 82.6035 / 0.33));
  color: var(--text-normal, oklch(0.9325 0.0005 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.9325 0.0005 190) none 0px;
  text-decoration-color: oklch(0.9325 0.0005 190);
}

html[saved-theme="dark"] body del {
  color: var(--strikethrough-color, oklch(0.525 0.02 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.525 0.02 190) none 0px;
  text-decoration-color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, oklch(0.85 0.0125 190));
  font-weight: 490;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(110, 139, 24));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.7125 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.7125 0.0125 190) none 0px;
  text-decoration-color: oklch(0.7125 0.0125 190);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, oklab(0.739439 -0.0485062 0.0733385));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.739439 -0.0485062 0.0733385) none 0px;
  text-decoration-color: oklab(0.739439 -0.0485062 0.0733385);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, oklab(0.739439 -0.0485062 0.0733385));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.739439 -0.0485062 0.0733385) none 0px;
  text-decoration-color: oklab(0.739439 -0.0485062 0.0733385);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.739439 0.0879284 123.481 / 0.75));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklch(0.739439 0.0879284 123.481 / 0.75) none 0px;
  text-decoration: rgba(110, 139, 24, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(110, 139, 24, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body dt {
  color: oklch(0.85 0.0125 190);
  font-weight: 420;
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.525 0.02 190));
}

html[saved-theme="dark"] body blockquote {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body table {
  color: oklch(0.85 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 18px);
  width: 700px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, oklch(1 0.09375 190 / 0.015));
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-width: 0px;
  border-left-color: oklch(0.85 0.0125 190);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.85 0.0125 190);
  border-right-width: 0px;
  border-top-color: oklch(0.85 0.0125 190);
  border-top-width: 0px;
  color: var(--table-text-color, oklch(0.85 0.0125 190));
  font-weight: var(--font-normal, 420);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(1 0.09375 190 / 0.1);
  border-bottom-width: 2px;
  border-left-color: oklch(0.6375 0.02 190);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.6375 0.02 190);
  border-right-width: 0px;
  border-top-color: oklch(0.6375 0.02 190);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, oklch(0.6375 0.02 190));
  font-weight: var(--table-header-weight, 520);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, oklch(1 0.0625 190 / 0.05));
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, oklch(0.85 0.0125 190));
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, oklch(1 0.0625 190 / 0.05));
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.85 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.895 0.0005 190);
  border-bottom-left-radius: var(--radius-xs, 10px);
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.895 0.0005 190);
  border-radius: 10px;
  border-right-color: oklch(0.895 0.0005 190);
  border-top-color: oklch(0.895 0.0005 190);
  border-top-left-radius: var(--radius-xs, 10px);
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.0125 190);
  border-radius: 10px;
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklab(0.25125 -0.0135411 -0.00238767));
  border-bottom-color: oklch(0.7125 0.0125 190);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.7125 0.0125 190);
  border-right-color: oklch(0.7125 0.0125 190);
  border-top-color: oklch(0.7125 0.0125 190);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.85 0.0125 190);
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-left-width: 0px;
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
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
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.525 0.02 190);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.525 0.02 190);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.85 0.0125 190);
  text-decoration-color: oklch(0.85 0.0125 190);
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
  background-color: rgb(246, 147, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 201, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(101, 218, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 88, 70);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 88, 70);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 88, 70);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 88, 70);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 201, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 201, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 112, 183);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 88, 70);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
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
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 148, 166);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 148, 166, 0.063), rgba(255, 148, 166, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 148, 166, 0.063), rgba(255, 148, 166, 0.114));
  border-bottom-color: rgba(255, 148, 166, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 148, 166, 0.24);
  border-right-color: rgba(255, 148, 166, 0.24);
  border-top-color: rgba(255, 148, 166, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 88, 70);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 88, 70, 0.063), rgba(255, 88, 70, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 88, 70, 0.063), rgba(255, 88, 70, 0.114));
  border-bottom-color: rgba(255, 88, 70, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 88, 70, 0.24);
  border-right-color: rgba(255, 88, 70, 0.24);
  border-top-color: rgba(255, 88, 70, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 230, 114, 183);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(230, 114, 183, 0.063), rgba(230, 114, 183, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(230, 114, 183, 0.063), rgba(230, 114, 183, 0.114));
  border-bottom-color: rgba(230, 114, 183, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(230, 114, 183, 0.24);
  border-right-color: rgba(230, 114, 183, 0.24);
  border-top-color: rgba(230, 114, 183, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 88, 70);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(255, 88, 70, 0.063), rgba(255, 88, 70, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(255, 88, 70, 0.063), rgba(255, 88, 70, 0.114));
  border-bottom-color: rgba(255, 88, 70, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(255, 88, 70, 0.24);
  border-right-color: rgba(255, 88, 70, 0.24);
  border-top-color: rgba(255, 88, 70, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 175, 229);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114));
  border-bottom-color: rgba(0, 175, 229, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 175, 229, 0.24);
  border-right-color: rgba(0, 175, 229, 0.24);
  border-top-color: rgba(0, 175, 229, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 0, 175, 229);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114));
  border-bottom-color: rgba(0, 175, 229, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 175, 229, 0.24);
  border-right-color: rgba(0, 175, 229, 0.24);
  border-top-color: rgba(0, 175, 229, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 246, 147, 67);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(246, 147, 67, 0.063), rgba(246, 147, 67, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(246, 147, 67, 0.063), rgba(246, 147, 67, 0.114));
  border-bottom-color: rgba(246, 147, 67, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(246, 147, 67, 0.24);
  border-right-color: rgba(246, 147, 67, 0.24);
  border-top-color: rgba(246, 147, 67, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 150, 150, 160);
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
  color: var(--text-normal, oklch(0.7125 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 149, 195, 37);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(149, 195, 37, 0.063), rgba(149, 195, 37, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(149, 195, 37, 0.063), rgba(149, 195, 37, 0.114));
  border-bottom-color: rgba(149, 195, 37, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(149, 195, 37, 0.24);
  border-right-color: rgba(149, 195, 37, 0.24);
  border-top-color: rgba(149, 195, 37, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
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
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 175, 229);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(0, 175, 229, 0.063), rgba(0, 175, 229, 0.114));
  border-bottom-color: rgba(0, 175, 229, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 175, 229, 0.24);
  border-right-color: rgba(0, 175, 229, 0.24);
  border-top-color: rgba(0, 175, 229, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 254, 201, 94);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(254, 201, 94, 0.063), rgba(254, 201, 94, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(254, 201, 94, 0.063), rgba(254, 201, 94, 0.114));
  border-bottom-color: rgba(254, 201, 94, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(254, 201, 94, 0.24);
  border-right-color: rgba(254, 201, 94, 0.24);
  border-top-color: rgba(254, 201, 94, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 175, 229;
  border-bottom-color: rgb(0, 175, 229);
  border-left-color: rgb(0, 175, 229);
  border-right-color: rgb(0, 175, 229);
  border-top-color: rgb(0, 175, 229);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 175, 229));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0.85 0.0125 190);
  padding-left: 28px;
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
  background-color: oklch(0.235 0.0125 190 / 0.375);
  border-bottom-color: oklch(1 0.0625 190 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.0625 190 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.0625 190 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(1 0.0625 190 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.2775 0.0175 190 / 0.625));
  border-bottom-color: oklch(1 0.05 190 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.05 190 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 190 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.05 190 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: var(--glass-base-l),var(--shadow-strong);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.85 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.0125 190) none 0px;
  text-decoration-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.0625 190 / 0.05));
  color: var(--text-normal, oklch(0.85 0.0125 190));
  font-weight: var(--font-normal, 420);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(1 0.05 190 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.05 190 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.05 190 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.05 190 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, oklch(1 0.0625 190 / 0.05));
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.0625 190 / 0.05));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(110, 139, 24, 0.1));
  border-bottom-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-left-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-right-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-top-color: oklch(0.592878 0.137393 123.492 / 0.025);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: oklab(0.739439 -0.0485062 0.0733385);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, oklch(0.895 0.0005 190));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.895 0.0005 190));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, oklch(0.8825 0.0005 190));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.895 0.0005 190));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, oklch(0.85 0.0125 190));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, oklch(0.85 0.0125 190));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, oklch(0.85 0.0125 190));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, oklch(0.775 0.0125 190));
  font-family: var(--h6-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(1 0.0625 190 / 0.0625);
  border-left-color: oklch(1 0.0625 190 / 0.0625);
  border-right-color: oklch(1 0.0625 190 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 0, 175, 229);
  border-bottom-color: rgba(0, 175, 229, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 175, 229, 0.24);
  border-right-color: rgba(0, 175, 229, 0.24);
  border-top-color: rgba(0, 175, 229, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: oklch(1 0.09375 190 / 0.1);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, oklab(0.739439 -0.0485062 0.0733385));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, oklab(0.739439 -0.0485062 0.0733385));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 490);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.6375 0.02 190);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.6375 0.02 190);
  border-right-color: oklch(0.6375 0.02 190);
  border-top-color: oklch(0.6375 0.02 190);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, oklch(0.6375 0.02 190));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(1 0.0625 190 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(1 0.0625 190 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.0625 190 / 0.0625);
  border-top-color: oklch(1 0.0625 190 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.7125 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.7125 0.0125 190);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.85 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.7125 0.0125 190));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.7125 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.7125 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, oklch(0.7125 0.0125 190));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.775 0.0125 190);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.775 0.0125 190);
  border-right-color: oklch(0.775 0.0125 190);
  border-top-color: oklch(0.775 0.0125 190);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: var(--icon-color, oklch(0.775 0.0125 190));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.775 0.0125 190);
  stroke: oklch(0.775 0.0125 190);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.525 0.02 190);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.525 0.02 190);
  border-right-color: oklch(0.525 0.02 190);
  border-top-color: oklch(0.525 0.02 190);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.525 0.02 190);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.525 0.02 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--trans-strong-20, oklch(0.275 0.0125 190 / 0.5));
  border-color: oklch(0.85 0.0125 190);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, oklch(1 0.09375 190 / 0.015));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.6375 0.02 190) oklch(0.6375 0.02 190) oklch(1 0.09375 190 / 0.1);
  color: var(--table-header-color, oklch(0.6375 0.02 190));
  font-weight: var(--table-header-weight, 520);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: oklch(1 0.0625 190 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(1 0.0625 190 / 0.0625);
  border-right-color: oklch(1 0.0625 190 / 0.0625);
  border-top-color: oklch(1 0.0625 190 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.7125 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.7125 0.0125 190);
  border-left-color: oklch(0.7125 0.0125 190);
  border-right-color: oklch(0.7125 0.0125 190);
  border-top-color: oklch(0.7125 0.0125 190);
  color: oklch(0.7125 0.0125 190);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: oklch(1 0.0625 190 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.7125 0.0125 190);
  font-weight: 420;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.7125 0.0125 190);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(110, 139, 24, 0.1));
  color: var(--pill-color, oklab(0.739439 -0.0485062 0.0733385));
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.7125 0.0125 190);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-modifier-cover, oklch(0.2275 0.015 190));
  color: var(--text-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(0.85 0.0125 190);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, oklch(0.85 0.0125 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.6375 0.02 190);
  border-left-color: oklch(0.6375 0.02 190);
  border-right-color: oklch(0.6375 0.02 190);
  border-top-color: oklch(0.6375 0.02 190);
  color: var(--text-normal, oklch(0.6375 0.02 190));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(1 0.0625 190 / 0.05));
  border-bottom-color: oklch(0.85 0.0125 190);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.85 0.0125 190));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.85 0.0125 190);
  border-left-color: oklch(0.85 0.0125 190);
  border-right-color: oklch(0.85 0.0125 190);
  border-top-color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.85 0.0125 190);
  font-weight: 420;
}

html[saved-theme="dark"] body sup {
  color: oklch(0.85 0.0125 190);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(110, 139, 24, 0.1));
  border-bottom-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-left-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-right-color: oklch(0.592878 0.137393 123.492 / 0.025);
  border-top-color: oklch(0.592878 0.137393 123.492 / 0.025);
  color: var(--tag-color, oklab(0.739439 -0.0485062 0.0733385));
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
  --paint-image: url(data:image/webpbase64,UklGRpxLAABXRUJQVlA4TJBLAAAv34FAAE1IbBtJkiQoMvc+lf8OV3b1cw5E9H8ClIUqjgBr8XCrrGa0VXGOzHrlDTRiD6Bcll69GjnsAG4xSV5K5aw4/MIfnHroQfUTYDJ0N9dXAH4h3d0PyHmeCXBRYFkP1TN7Z9g1VdkVzNWDQzfdW0zNA7wX+jpalh69uvWhh0/9fSF5765hQaez38pai3UK6xIyJObyHsdycxAMDPfPRu8sQEziF24aAbLrf+L2IM8u14mKHnXSBw6enJoFTHjRffKq0apSo1sn+RQIIOl097dA5nSn52+wHfbhp3Tzgm/JmO4MHPgSp3Z30vuJIPiQJ3Q3fePlhCqgqqg+/IpQBVRVNcBGwhcXpxMQwierhmwuaLeS5EiS3hIBVn+pWoAljpUgl901CoX4ySiWEsCJJEmS5LbSSmsJIcTlj+O7OwQvgAEwAuxIkmQ1GWCAuN8SIf/tKhPeJ6Bj+j8BmgIGBrAMDCxr2KMvMxgAQOyRZSmIEIgAICKl9BLYCwICoATQiBh3YLddWYAxliX2MkODgpeFokBEACIgAoFmyAxLEQABNpQF2K4sE+s1e8iyAIswFBEud8AeRYpAQgBZOzVSEQAOOZ85nwrni52iKFAU3WkhIhARY/AXMUYpy3rdViwsaWMBIEVEpCmjAWAUkXptxUZLWAARkaWIoESMGJCyPj9WPBaxAYiIhiIq/2KMGGOURa+teGAuiBqBkVuUDayJSGmgBJEygDUEq8HT9gtFREoRKdjYEBjAsmiIAMQjvuIRfNwfsQwgikgRoWIZKEARdT8BjN/bM5YFKJpBBItgWURqaAgrWpalANUAB5ZF0SpEwIF1gpbgBUAjjdVYjdUZ0xWDxkBQFMYAZmoFliJSmC/MBiJ1YRqgMIDgNL8COUGHnalApEDrYNCbmuJAYL8CKCIR0JUCDhXUBQCZDIxARCBiZCIGkNAoXCqGHYdNK4DgKs0AEXDmeqzYAITYQpxi+dIQAMKwH+BAndj/bQ4bm+PG5uhfc+dfCkCmYiJAnXuWiu9WLIBmgABFgCJaBQAMdgAUxRABioBl4BsMABgIIlIEEAFqkQgEOnwDKAJIAYuQq5fttWfO51crvjENLwKUAkC0CoA3EBRvgB0oIlIEHMUtxClu4/uEOMUJsW4yEOgFgABegCIiRXMTW2yxxYoVp1ix4hTbTQSQIoAIUHS2eZpOKyJFFK2kzhBERAAimM3hsWKAtvyWAQQaEQUAFgAYwAwmAmCdUx2At9cQEQAQAQADkts2giRZ//91kkpVz+49IiaAqgKoqEFFFVCc6VVODwC1AbWYB/admvgwgIpt6AMEnDnNQUDAivRafB8COGJRzSdEcQNok/pCAwejg7ShhpsbR+wEAyF3xFN6+wCSlwIlCi6DBv/jPF/lKL2nK+rJkvsB1SFdFt6jE4Wgpj3zXbXiHt+Jt4BUMLOmOjBcTBJSKQChT6OSXSbGcupIWxgyma0Oo+D9vKYAUr8Wjt2v3ON45T2tanZ5Pow7vqkKvtDs/Ruj5mdUpKoBXnHRw0VyQQXiYXRh27ZIciM97x+RVFVdzS211CLLbbFsDRnkMTMzLzMzHvIe7RkzDc/ILA/YI9kyyyB5ZDGTm7GqEiL+/70mMyIyMtXb6j3zZNu2atuSZNU21hFmFolLCiT/CaAwx6RIkFn1wtndQ23bqm3bthVTbWPh3oeZDJwjgI+F418AM8Ncc7SaQxZsW1ErXYeoMWQzcy9o7Nd/3rBtOyRJ27Z9P86IzKpsG6Wey7Zt27Zt27Zt27avsa22VcqMOM9jWTKO84zMXDqz5mdEwIJkt20DuRfmoNCmQDy4ffqRJMm1bdu2LBaG5MZ47ypsElKb3FXHm9pl2JtceHffoLeW4R45xkzSURtJkuScG8L+lz/GQNu2baj0/3e7OqTRthJEF9bEGCIVoaA131vv3zHfwGwS0GoiAIDmoVQAuhJWp/aQCAOUkDNxiO2jZoDAjokwJCijKKSAbKy5HFgDgau1x7viuFrQs1ryOQBt30NAWnm+Ei2rrcEH8wGYLbSJgZeaUmom+kCbS49aJTNnYd8aqoi14RNVfwgAMMa4AJuXLhCGwLEw0ChBAtpP81oglsbMLJ6aEIaS0MCInZNFiSiEfS7nsBubcVUCAAHLYUBTkoZ5IQRD7UNQCAAnTcQGpWnm+h5DYGR9t0fATDRxApm0Lf+MmUeREyfiiqgQCliCsOUJEOWxMBNubkffMqlJiyW5Jo/4GjZYlDSlFiwSMeDSLlTOcAvWt64pg27mRktZ1glmrm8QxrTNt9FKm1cgk1outOXbOpQBgGLO9HjltKttexcNAQKsHr8FW5jxAMD6ijMDJZKgP/BvqrFgOiGsspblSMsqVrCEFRmshlQr61JxMFTP+aZr21w3gL6t2MBkS/OhWVJSgJi4gICwsBoa0dSKHUZZj6nixznZIyfblgfAtNRD49JKKWADVRemmoiwchlUYfS+isLqryWciyMKplhbCTRWSz4ZTiXtOsusSEw74hadFzUpEwACHeq5K000AJIw2QAAZnW2ta5JjBEAQrjCAECYXCPAuNDshKpQTYnMSYOR0+uE+m1PJ0xwFKaCeFKnENLFbg8XmBUzMOTHnOYKrkXAlrO5OgqU0rg0qLBv24l8NYHSDq7rZGpeKqdSTMyUWOqjC0NlK/uDrTABogBxPRjp+cC6F9fJJwMAYNK8eoCjqYoU6ipgMxZEOEKAELW4meQ72waq0gquVy1imAiLmOE81Unst52bAMxZMwMP8UO6PAAAjCeMaDkboClzfKJ2ZrA11cHUuBJQUKdNjYFTrLeS5wcyLKoSfE9q+zawY1phdzAgfTPm2/wyl/N9ruMaTOSEJ1/F7fXuK4l0JL/vPmgfXjfrWD3Z3rYTWMJnCpeSMNXEgaFCFMxbEHCPzLIUwrE7i1qmVAsejTAUg94aU0cyZpK1hxnNzYmrPZkFUCa5ViRZ1FOiJCJQKaXESUbtjQ7br7jHuKETqUaMSYWJzXpoJ08+m3Zl9u5aTr5lgUOc5NVcyU4yAMYa92SFAUhOhikLQ/lDacgomiKP8Pxa5UkEAAKEgCKgenIeGGenXXXZqowsALW9s0Ii8rSSZaqEWlgrWeEQAU0KBnvc3Mbcznvo8goeAyAQcN7CoxA1IlNwv52mqwFhnGxg0UlYQnnYft2dEIEgA2oJyBIJCfr97tdS3H2AAGv3EZx7t8cCbHJSwsrrNWtLP7SYMClhxCvcl5ixjzzlAbuHCbfMDdWBAduma9yKkAZQG3Y3N/Cg3aA9Y0DjANi66pHnn+2eaDKmmvAdDJzuWrfr3Gt7n1ZvANxy2+UGfsgjrPE2xnyJLVbITFteC9ZB4iwPqkw+19pasdUL1WDP6vlZ5zkushtJaWjDo8l8seASOXUuABYQJuSphWoZc7yUtPJACmB7vDnmK1zBldzLpQAs+J4l6u10wMJ8uZuhhM01Sx3TCQAtUh0oT9iXrbQoLFspQomRwhXJIL/qfrmTWXZCs1Jl3wCA2o2K6wF7dsAJkxTI9IrOiJ9OIpAIhq7tXr4tLuLk/CQj+4W1iwAsc+rbEcwvSj1s37OXz00dbaABDQDrQXuzE1uWjDna+NNONiEBATQzlSf4MbtIJC6njwEAhACgKNq7TMTRZDRBKU/r1LaDJ7iRXa0pZMQTcwp4HlFjkBlNxvN6asHTKxGmUtJoFSkYcERhgXFsO7d+Eyf5Hl8jcYKCjhVKVCC7vEVDGmBOJM8bVqce5zEylhRdQgMOaBwBLhAuQSjh+X0uRstqdpGAyg5A/QusWptRFB1w8gEATcjz24QrO2mrNbBXXeyn3v1GIRcXaINNVhDVOlmcsLvm0W7gBo6TqxYxQgtA63FtalMTyLYNGLLLzQ3u5Rm67ONmBJQCzYKtDAAyx6tkOE9UZD97p1mdm2wdXOVmaqKkceIaNQagi1INiANbRoehOmYAUvqzo1cIE8k5jrBGQsJqDxBWK3HMDl6pWzqJZ9yh/TxhnBqjwxi7I0dblo1E46J9o7JkHIdpAGBal8XJgAobaWEQGzcjWFvfqIYS2tzAc2gCIQdXLQ+IAEBm620Lrdz24wAk1mzNBfEwHa7CgBmtQDWjoouwAUUmGnDm0GlzBbqF1ZgyCSZra9PI1AdcmkqisK27qwaQYXYDIw13cik9TDQkOTgIgHicSl3DuDQsFwxwaWYTwWCavvZpXmADZ8h1xhA2fkS1UAvArQWaFOOAYRiADC0gFxvjVLxnZDvcLlDRPbZUdLrbHM+KQmQOcK6eWXcUC5arhHFDjSWZphZRbrDqrlgGQGSkTSeT0jJlFDcU9SlVg/8YxwWdCgHGVRy0rCRHdRREvkGxPLjlShjhLNKTMYHamse0SggeoKEKipI3YYxTKxhMmDW3l2AAkS1nPLkoBq7odVdIiR2N05zxKKzCFuKJSKZd/nNsGd0JZcpJyiqk9RnIUBjjmr5krLDCoILlLd1AYUIx8Pa8fYBNkkaAOdeKGCnTQMwPY8bNcRgI6qxIaqYhrpicvAVLKsedvCOYNslVgiGCSgpWgDFuAHkANHMzshtr4ojgiEC7My4HjFrmXTbX9MUwIiOHmFsMLSvdMQbI2PDVjLhkJhNLHoQBjZvFzJACeRjjNJBbDIisIyp9H8zaJLUd8YV6PFBTjwIFUASvQHHlh6G2jIwDjDObHeb2bBQD1xmZ8dO5dmK7PGwiZEppowzjVGJHQDjZaZloCGQQYmt7+oFbRK5QIZ69bHeaQGUxntA6TeqZBMnE0ZFsHjctUuIEpzEps7mhIKl6LrJLkzkDUuyqMo4n5gnHODBd3AZrHQlWA8eStpExnRsShTBJ7cXWu0gENADJtZHTasPx9K3f4IJmylmzMAZjAIxoiFDJybC57tWHrch3VGpKLUoZkI50iDQlT+04lYYYrSu4wJmC8hhWcwlgLcQztKh7HXmbj1Josgs2q6WLCN7pdF31qapK+KSZKI12wiNNABzGEYELDtHa/16G4zgAGCzlAFsk1eL6v00lUgdT+5SMLjXDHamoiBsAMGUVKQGAkM4XwHRWLji24p1oiHGmnS4nMt1JzOrCd0LKTEqfjvqSlUQomN8Oj0bcdQMieBEBL5YqzeRj5bvsARcgRxUhmLluIeoz1jamReFHyXJeGllBpupad+BYNtRlr3JYAERrnrgtQwp1TICB3qdv3MU8BdSZ9XR150Rt157TSQHjk/Jxi4IG2aTk3BPRHB8SYICaORqUzyrEHMY5DEYKzMMKO+IRk9GhQwYURIwxzRaQVuq+A4vO11haIFMDGmA0HUlntzNczGklLoEFZkIKaCrWUy1HywGALhmLy4R7dm5ogcgakL9/hMXEGAiHobqVh6ISKZhq3JdG04QunZ7IdnDIOSGr2gEJYpf28owz4gDwDAnJSAaEJfq63E7qqAxIRgTngA11lD3axtNOaXKMsCqjVGRivw3sKac0SzIw48t1uZ12TnAFJ7xfV0ECAkZAgPMit76O2G8RGRlCBDp06GIiDfXxTQvMLEt1JoFIC2mljokwMMy69q0hz3euMO1IW/U9DZdTiSUNMRVb+NVc41084z6rh3YuTTGnuSnbDeT4MgCTdYRdSXO20szpJBupU4EG6Vmk1HZwv+dZDxghkoIZgEt4GT/mrHOzmT+yqEBSwABYYpWf52k9KbCmFNLN7innCa5gH/eoIChJgIUJkSRk13q324+YOCZgLCElSR1useed5/QL9oj3vxBJmAwDwrNrePR9H2yGaeo+gQ4mYdo3spjF55lImssFazrNrnWytK4Mi5Q6TLnchJeaxRBREbQTWFgS9+1sq8OTOuO5vl1s4KahAAbsV/dMlE8uEAKBke2wCU07G7NSPdsOEgkLQzIjLBBBQRGTCSJmurIAQEiZkpJZIIwEmaxkQUGlbJIlLKxq+ssQpTAjTZGFkVBOIpHJjIFEJagUEsiG2y87Utkac1QFIDJaFZ6WNwprSBNEaJZ2QpsNEdN1Q5plSpxV7dNZdda49qoLgNSixlpYIme0y45rS8n22YD43HSjk0kFo2ukztkqEQO6dDVVyBk7LaNB1rJm8HolMS+0T7z7hIJKEjg993tOSECgjbfC3K3vKcOASABAwEDW3rFdnmonrDRFRcp5xhnnsT3jqs9a0tiJA9sWgQRIL1CEGAHCJCZvP0mQrVzMTq4+ECvgAx2pGtuDgaadjBfvT9sDmWvdzmqnGRB1YQAuI8uu++Ze1cTJxkDGa7uX4PFYE7jf1QqumEc9Ix7VaDW8UFpbnfEqSuuF6jiIVP9RhdJN0lBdcoGBEEbk1RFcgEwRMAFhQPRoSWW70Srf6Ko1xdxYjV83RdWn0TFJmjjDVempILCwQbwlG8KQNqEeDTC6eukpKwOhsuTj60JECqDDdjuuyM/Wz1YBgKm9opvMymdrSnir60ylFJtkoi38UdSQTNTCiOXChA92IbJooo/Y0gbbGWEE8KnMQtvOa5Jx0kjSQyMLXxW+wBBL9s6uSc8OAwiW5OTIkBGg0FLSSKQat9W3ljxyhbgsmf6qWUbnY0PzCWvufBorkEjk5FRLkA6FACgglnvCDEvGwrDFriIt2n0BqUru2wyFOY+vEZETEAkf4AhoQUk974qGQUaLnlAEYqUtghkoRNGkkIoqxSsAUPK7QuMGp/GFNCZR69cQkmif5Ay2Ri7rXDih74M3pKd2o2yXegZ452kenrOkgAO5rXcP+9h3n7YLj1O6ZgwYALLao0xEvAAEmheZroVPKAqbTXtMRJNwGMI0DhNQhElowKVxaWEu0FBhqKWc9uzr3Onz1K4D0OMXPruYB59907enne29qR3HCjBQFcR5SUIaI9FjKhcgosVPEIlYuAMgiKh1qx+Bh/gN72RiMqVxQAqKZBYJMiC7dn2g8zvbg8kMTCCtkIQBSfaS9Wmnj2jySW3bY+g7737UJwCkXDOv/0zZuP32Fx3ykAuQFRgAM29cQWNBrXP3r7p7gTCBd7YrLClRnRRAUNGeccb8Q1/m7qiCnti+vFuStlAJAyKQLJtIiAF01by187vuk5aNy2RbTMa/RaCm6gf6g97HnzmLsXPXurdJs4vhFOhOJx64MJlMY9wVy6vY52+RCk3x2/b97QkGfLQ1TOqxNaz3nv3ivw8/d42zIlUvman0OWsACBjBkOo1nhQwFRBa/88x52QrD78/d3QnEO04Dz0ezEU88LZx29tl4GjSAidAZvs3WkWDMCALs9BmYz8CgVVKcRcUYi0qWvawL2b1RL80afe+zkMZF8DkfPXNgPztvuL5uut5HQKnlIoWCUcqkzoAJF4tCIAGYGiB6yUqHk/bJaXEmYwFLABlpbvyXKzq0CGRawPSwkYhddgsRSsC1QoP2l3tF0jaUVV4GTfj5hucVmo9p19gQFaQxXwKsBHIDS6cjjHMXR1ADIJ2ZmCsQ1wEdJYgqbNUTikHAESnZS3d4MJsIksqn0CkQEBj4oU5bmpbvAhDd944SXnm/XmoKnazvK13D3n2PZ8AxRm1BikEoM2yCNQpnm0CSTBTh2auKoKVwgByNEQTgIo1jaoMZta4tIXMbzsi7P74VM84d86pve4A9PILXHwebN98//b0zvZ7F9wklHpVo4tJlTzttD8L+pXZ4Ghmi/Lw/HrvhKjM0lIDIw7oMzu/135sYAIRlFnGR3YG+VWbWFqhJQQktEISgYTmTXqLHIa0c/OSvu38CABInWvO61E2br+dw++PsuAyP7t2/yZSoeZZx56LmAzKUtnrmOwno4yGYgOxQp5FnAkjxtGIpvpEecJu34qkCUkIYMQ+vV93tQcARhWRBQXerj5fsnJiy4gKBgmUWVRmCXilbl1msfaa7+Ou1+6NbCoVu1kKLCjHflZO31V/eTKDh3MF8lLzUIIqmvuygRWP26Jv2m3Id1/na8pkQ7l9wl7WEv9b2miOJQNkMg/MUF2u9a7ANJQAsqqNjAU0jancAoxFKnc9A0fj0oALZKwpFbI1u4PWcXDVQ7pDE6OjXXceyoNclAeejW3vc51F572X3KLh3/cbgYL2ckJTQ8bqI1xymzAvfTwzIR6SzUHbEQMA3QyEIMgyziFNyLl46zRWzYa2wLgfzRzvM4sOH6FT6J7XKnazr54B+dt9xRe+7rqXl0XHBZEBOH5QFdYUacPYprD0TolfZhIAYElO2+9s9P9slEgEDKta3KClDeYjLd28BUicnXFNT2SUlburd2d2M5QYbO+nGmIJnhhNtWgL/oreuM5MLIiGAVpgWe69cBg2OgAyOjNcH5vjxqYBDE4r9D1/dlEguRha2y2NM2+Z76ZMFC2xZADgMIwPIGAKOKhFQNsDHRQA2SxaD94my7OEWtouFVUyG/fF6Ziw1fo1jjITpHgknGneWvyzaN5c9GTzeloPqWo3W797+PXsez7NBZLVG0xe6FrWBoJgtUyTeKxagqQYIJoA8aTUbtk/dYgEkC1JA1MAFhFhicbZIRf8Gd05pzanaje76/27P7abpXZgfF1LdBLrV9sGEtZD7dfdqd0sIWYWlLTcgoK9Q9fof7onlcjMgFaMCEoWFnmTbt75n93jZCRMQKQVss6fcr736xEomhN7Wd/mRy4ApFTsZodeD0EbezBmsQp0ETRznhs9ApS26m/lOBEkj5Iwj9ft3kLJshUrDKRARoQVonltvYTb3LNKFmRApKEy0qjgVeuaus1OT5aEkYJFMlb0QUE/sb6he7sN477SWWauMcve6hQkFpIOPUR7tC0Kzm/b1IgxRgOOWKGzddjPoIZBSk0IAAiNqzY2fta7AeAIxqUBICygGIKAEYbCABCmRcwjRbu/oHpo5w6bjfuq2M323mWWIxtsOCdgdreLBNISu92AxcVFvdJlgGiNVrBFwXnLCQoQBL677lggwOT6RPea3US1F5YWKsZ5YGeoLte6q7uVgmj+F7VWxxqohDHyMsk96yGr2s06d295+7q76yIRCOraCivWYZdgkw0HAy1HGCQzICyQmUo3h0asp2ctJMwGEO1T4Rknt7HW3ZwVMlqhmYIt5WzITDivNTbNwTxbHoUxWQ7aDgLs4Vqtg4oyh5xici5qHSpUZGm2svpvZxWGLyclndE4LB8AsfLc1bvgBpBAIhO2xlXMRRX0db6+AgDQRt94c++rfSbNl3KWm9y5ZxMA4WKbHmcwEIZUCz9zo3uju6Enfez2XuTCgIwNxKbucDYVpsYDCAOrvKG7Ys95zjodIGLOWydSBJkDpxqfCbaisJEyAPCmgVRaDopwtQxljemMa1Xcc8RRKoEgVJIm9qxXwrlY0lGOTdskeLHtNNNC5nBGt3nOTruQD69sr/IedyaI3ZbZgGy2Hs1sy4d99jnmSGedxCbnI2GuFVBed7eViGWGmtMUDqhxRqxuioQxkIGB7eTyBl36gNT6DWPaoMyVENXWsBAQkYyoYBmrSC9oKLMkLBAVGQNwfppFDYCGbjNcpLjG0Cwkgs91Qxla7NW8fRPLV5f8QsliWIEBHXpHE4nzna1nCe4iptAgDoyDISxtw8xSLYVAKFnMoZyMBdA6nJ+20VJzbGQcdfBsXm8dO3pxbpmWz48DNzdCB/AihiGM9ZxXxCm6x/Li1/mFGsiN2ZW2QzVdmDtRkdXQADCwWooMELBAgHhjTs0VrGcWN5eFJqVqXPrf7Ti6IEVRFAwwxeJoiSiY6x1cFEwGf4oEpZC0zvzfL219+NEsonBQvefLjq/9W/68s/lNiY/0BYQBUWFEDWEoGdS8//rghdnTCYpntPtk1COEVSw6tRuJy5HIQN1rg2gMYYyojxLpzirDjKheWOEAQG9Woln8sleS8xEV3Nwec+7ec0aLGci7e294Kq7O9qLYaVWJ4cB3NLOLJskCsbItMfsCeGP7KP8DzVgBMtYDniFdXbdWYhpEbbTutxEAsF/7a+oSqt7a1Zl9wTZdqyfsqCkIU4xiEJgn27VadHQQevK3Y7ibb+Ptp57nymgWEtd9O6egmBfN8ffmoD0rI5hUsjCxsi1FMCka5cD2O3vQ729HUlmH14Q8F6m7mpKlMCNiMZTonI5GJIywsKkolW6UjD4TJgjCVEorYPJkA2TB7XCtbGW2xginJkqLTEBHRqfcneA7L6LjNg8QtnmVtfmBkXGTZJxGjFpmn1NbEADGpa1p4Mg2+gAsuB0+cjfwzQGyg240PqBxIqdfyHayEeDDCIcBUkNAQ8acBcDFruMsfaZpV8azIUzZ4f10jauFhnjJGvoyWw68buA5rr4xAIHXcxUpDBCYzJf+LjvvnvwAVAb3kyeFrjlsn5/hBuy+SN4cQvOC2rm1F+I2s1hwBJ9soSqnMPAi1D557j6rVO42EnPsJbCfgM+c7DTsTKADdC4MrlG13W9TYKcFGllkgcWMZWigYUKBDMY8Ry0YdMAz/3DYhQ65vfhJyPaLuELOncWC9hRtyyrdJibRS9DLVffevY9iFiPr5srnrMedFzm1m4kthQmSuxkequrjRWJrjG383vN//Tj7v9JawEyOlFVf97/9X98riRfDYZsIAIpiEg0r3RKHITykDLPZqf46k1bPUAo6Gg0CgDcdUsyJR/aI2ImQRcHQkGoaMKayiO6JFAKEeBHd2uMEY81ja5XoiES2KhHLsSrrhQK9tn4zDmzsshMbxE1/e/ItkGYB7zGRl3zTp22f/gyAsHFmq3kFb2i0c9vOMDc97kwehsi48r7R98Vd3nEGzsq4I1XdzVm9FNFFxzYbpPYYZHFWZaGIXjQR2WCx+7wINceMZ9OPC3XMf/Z6YgPfmVQTsjBtzDmRMgDFipnZvIsNRkbQ9Bw+8Txkda5JRGnIwi5N5R1fYvYcv8TCTgAzFy87TBqIMsRQdp53+Ls4PSviXT4sspFiN3xxC9m8Ao4xFdn4qCMjIevmZ7LMGSoZk3nTpSQFiG8eOJ/dnwhqH9liwcw9zwxwLoJ5xZkxYWYiJoSs7M2oQS8iHJngyHOAgoCC8R9APQWyANADQB9sCsQ0BlPKNGa/xBzuT9eE0iOUr8Ypya0Xff8IOrkApWaFc4D3OaGFkyIToEAOaHane7r2z05RQEtmQCgrtpKuyCxxRZppROzkdvfNil/9xxMoIsx6BGd8LIMhzdj85+i8CCAik9Q5DCaxP29tmIzevetbA3nI6rbPT5zznIODG2R04vPbLnnW7oGOSeGNsxz6uraBEIo0awvmI2ZMTCv55c+UA7Fbvnft9pdfOEC78fs37HvFWYPtKWdilB45u9cqhIb8qcz+3I3AuTOOo3QEgjovBDQ4AF5YZgA8KorsOhOKyy4JFQgFUJ9ZhJgY6MLD0gjdtaaAKy/yScweELwkidm4aQYAI7IJskXktRiW6wEMaotKAyD2eSArZvSrDr3J2qceZyG93FGfIhhuZWYDPeg1/eHS0WXgLEAk7TGoMiwRdlKA2sQTs/wboTGRtnw20HlyHwCMq8FQ7VgYkmnqF5IImrRMs4tPjF6gymihS5e5AW4sJiIGGKikJMzCcuuYlCgndsJGKps0ACmcLF1tkcayiqG1mILFsHRZ1hyYpSnGCFR7tYKtWo4xEDWaoShtDcdCyF6qU2ygjKc1qcRTYDREAzA7xChr5lQvAxtqQ2FqMcc4L0haKOYpQwKRM4ISM30/wQYZKgzMihkjjvEDLuVGwJxxJgob0CLHnBE9dt86OPA2TIjp3qWP7YOYBMCEUienFNlj28yA0jMQZ/kqO3mIMwjRdzEA89zKaoeJZxUr2+ARLGQcmNfhvaDHMXRpGIA4sTZJQ7ZtfRwrEBCn+TaJp9lLHwOZBFAjRS7ZPat97Zm1IxQIqqk9xbYxb7RR177kaU/JBcHppdJ2ttKQdRuMA9oAniHjUkbsQFTvtWIEnCZJZQA0mmZh4esIQkOcU7OUigg+1oOesV70NwUBKCg5tcrStitrZrQlDFxBIrGDX+F+AKIswPpQK9bfTjGZKxobFGUv3egWO7jmojEviLkE7TCgJZEBAGke6mKYS2QyTd4xc8JILIJrliVhADxOIQNdy8chSROZbbyFN/Am/gI3ADAGCEMutSNzXFvr0pabC95icRGZYa4FZe4wLAwFY5hUAkwY0qMDRIbCDGipVkzAeAqI8BBGMSDQigVgwmRgBhfMYlMM1IEM9OgCiSGmQtJzpghbwgxIHnAF0MAyoNDYmFTaiDBgBTMVzCTRt5rPRJIMKkDWFIjlCuNiFBgwI4UkoUkJ45gpqaviTZMzkARD4rhMwFi5VgAzVBrXFIqVZwCYIWk14spqnBUPigHLisIsAjREVE1nZDgRI2CVg+TAhLFmKOTSeFOmQG/lbSDvDhWbhsOZuY8xv7nnaUnegoGFPJfnYz77/P6e7zuSEZDNu7svd382/7NvTo5MSgBowAjs1vZG74Z+fc/PJNgEZiHM0jigMUwFyMBe+2TvdvuW544dqJBcwid6VvlDvr2LjAQGNMj2S+1t3oluW4/0BGwINAZkCIzGCMDMFfbRbt9+f6fiMwwgkAAIGBMwxsmWMRrz8u57vIX+mDQMBohBDCAw2irehNz5YOda52l+YxuiAQRYjw/3cbXzmP32PiawZlAr83HvZe0BfW7flDCWVgIXIIAlzfyRgEDgA95f7IYgkI8GSMUOioGIOqtyAIyBsc46IGMAGBAMuMQ7WwEQImQCS7GVV1UkIbAnA7BEGEiEoNGMktiRHRskQbCk42DHnNs9Z4bkU0TjZJOAYNYpErntpW9WIgCJzFKZKUkgpgIUSEDBWZl122kiaUoiTWaLpJ17tjtiBgWQLTi9UgvazSqOx9EEEmAyS5oxBosKNuyMLLEjO3ZnPosSkFMCpmOxEp1VxjB5eWJlm2tjYoLtZhUsKjRWxX9JBire9IijQFf7KpcnkZHkMEeBvva2ICYlmyQs6UjBgD0tm2kgxLjCYXKwUjN/lJB8xC93r3NDoMmSJ2LqzwCulOu0zq6hxgzntM4uo2Hq0Z9tOW8JADb5OtzhNOPUk6IwYECAMLUxeCDqGMByGp/iooGgjmpAApBMnbaGZeAv99nIaCCY1YDZCA/CNJIiDGEzH0DNm8LILDA1hDq1kFnCQDNujbMeUCHA4G26mDxM/aE6idACrKgwF/tPRDedS9YmjlonHvKCXGTsNXoK4XymIMzsop0NwNW5ZEwOBMA1X1hLuXKcJ76o87ySC7C2FZAtIMWeJh3BsSaEJa08C7DKPPmVeWkmXyysUM/VzRfQqEFamj7d7J+F8BeBXdxTZvnZtPVLfcc2rws3zDnbJEPYnvGbgglMg0rNuMI202uZPH0AEiOqCnVXXQMoGTPTiFMJTZ4eADChBJKCsdxAQJJspjxjAvXIVMWZQViYFQw8ioUxCiRl1iNQpdY2U8I9lGymcidpAwV65ABMNDFGMVDDscIGnXQFEBkBMw4BRkNETaHWRhhlXiBom4VVZn0CACPiuAwIbY1mAdEnkOohxe5YM2ST9EUhKyMAQGx1Y+/9Zcyv7HlUUiQzSKrqwDVVeN3+lPdAg7s8X9kxKRAmAVfan+xzhchv77lHUkKIRMDstT/d5y7g0HzOc6ZTbiNWM2EysAJsQRixxjDMCvAG/VLHOjSfc890yhmxmskqWWVIKdkqBQWrjCiAVSJj1nl37/VWctueKjUIUXGJhEkABGy32Id7Mzb1v/c8JQjMPCdqz+y9v/1pzzqJz9v3NykhiUQwVAEFMBmOZwZVDYQ/2dcVIr+9j1ogYEkZ7+q+1gvP6H/tYwMwUOUIGDPDE+/qfa0ba2ZTi+gxmNgqykuGBgCKV7M1L/g9z3MSBZ0NZjprZ8qwWXk8MZ0tyrbGO7t7DX7ifHdBWZBPEXHJ9o7ePpE7dx7phCkqW0q5cmC7vat3HXhedzlRY0pWZ9jiclaJMwpAZitrM7n1lNkrnSsFz3OXzXCGUIPZjKVZZYQZsEUqWGWylbXTdmJgj12RsBWVjVKOTGQqkm2BQjKUU0Cgs6U6aG/0BkZ8Zc/PynSmDORTwQErB9uVd3lWMXfZ/YQpKptAodxQCYRkU0gYpzMmAgLLNeMTl8w7+uwTuXPPIxWmyNQbOVipPK/x3mRwRF/xjPBEIGPGUQ07yDd4tXtTi3k4sU2mPBjtSX2iAZirTwurQYsWAHVtufE7JANV7bhR062wzVeoq4rxfJw6qmlS5Rt1/zpHswItWgQCVD1lVU3ulfMa9O75D1b7p3kgFw1MvN3wKCbR/j+rmmMBAGepJq+zTht8XIAaQv5fX2HQdmepleurZpLN4V4DINpiteYVjRBiPo8B0Zp2Gb5YPIgMgHgB9G4hnEbrmMcJUxl2PedBlZPaJUZhfdGcS4c38rtBNOm6IFCfTJER4EW0pQrWJyMyIimMY0BoUup8mqzTxxqRNpcJGGjqWLaCWSa3PmJMOS4z1d5BxmQ1MBhSCBIBzEiyPh3KGSaNCjoMLLGlBGasAHiIQB4VeFNhBkSfLjUtH1zBqv3aFRsAdNLFjEjjqhgEQNZV18xQ3hxGae6wNiBpZZ0+Fd07AF2nw5R+6Xq35gTHOmEDlTciSwoYRgnss5zDU+AygYQCHkQgkKQGHiVn/5Zl6Q2VFEaWVSbJ0UBpI78bRKOuGzCvq7d7vrD7PWb6b0S82n2f9ys9d+2YgKnptlU+a6f+TB+b879tZJYJMqbSf9zgUp9P9bmX/+7j2IjEDBNg1f6kd5Bf3znTKbYtraWYgm0G17f3uL+/7u7ZYm3Latf2yd7n1pc8kaHGBivCtgS9dGeDAWKz1ihnBPTtGvto7w+c2/dUtXwI1FwyZqaH/1mfz+nX9jGh2jmtgSvtT/t8uPPbe0qaPGpMFc7aqT/TM9H/3DYAE5Ryg/NJ53vb7R5T07tzSblv575FabQZQdLKLAmCBb23d6f9ho+twaxATAAlgEghkd/aByR+a896tiQMZNOEB/YM+aP3mSojb6nf2++GzJp0XcjNvNx5Zd1l9xNWkWypisly4+5ru9917t2J5JgIZKiVKwer8a3x7s5Qv2sTPDGdiTKV/uOaS7HSDOyt3R32JR9nBkryeCIgnNXtHd0etztnp2SsgZWUNRhy7e4vd7/j3OuMp0/Iru1d7ej8oadkYgXQEzYGOsoZ0oOMZ2CRibBOXW2BbVzhwuUGV1oRYDrM9GuN05lICjPVw9/jPao/8MRtpkwbNqRcsr2z+yx37CSiTEOHNWPl8URBzjQMCt1uIzyRDqmu1FudnzK1FVT07iB4bnRvbAZzITFdeUAJsy+5HXLKrbISCUBk9jWJQM6KmWXHfcae7kTfsneZ6SKgrf1uuPd1BUimrncHjDAGYXXdFhr6m9ur2dCgRgtjEvWwBogAQEC0vNQ4INrp5s3eq1C0hwOo9UE39JsHwQkc7GKNrbeHsLfCEIYsuGIPa/Y2DGUx+UMBEBoY2Zzpy2gTkLRAv6Rj3PICHBKz/EQiwfmmRaVHuSkjcpggTQCT+TFTs7gvyQZnLAtSyzpNaqf3SgsqywZALEujxqx2zC316xZ0C3c5vzDDRgDOgR0G4MVssIF511bAwHVIuDo+OgcKCiApALm6mDEJC6vkBNSlIzMijVLvWxaiR6Bkwqx7ud7IQj3LiIyFGSTzKNUO6TocGAFJ1a5oVoWbydJDTCgAYZBshiRDMtFTsIKCKhx0yUmMMU0NN1HvyvZSa0JCsqCeVdEBhGngM6hD186JBcgCy8y8TWy0dZfmTc2YX9l9BAiq9/0yVZdudD/RPcVnd0+mnKHWkC7Xh3rvW3d4ElvFNmCTVAx0O9frfc537Nu2OaskRqxmMiWrDKFWNvHW7jXuZ/c8qpJVhjWlytW1TZxsVjG3uq90v9x5aLk2tx4Zm6yS2CoNFqjBfdbzzEq1OSvmGs6aNXRFrzEisicf9Yrb9hwm0GeTDh02tGKwBeqmPznv63MHt+05WeUMtWYFk1rbXC933+q9w/nxjqn6ZYUtYjSrrd6VPcnaOA1IffJs2z7mHeZz+ziSnN5U4EL6sxErMOsS3ajOHOx+0Ntl2VmUBJvOihFtkNxYjcOsi+ANb845dWt8Kfg9e2ZMR/W+X5RTIjIrFHiJ+5Z2nK9PkQnFrJTWlXpl9yfO/RKbyq2rTViYa6Br9fPO9+yRGbNKQVGr2xBqsG3SoZtct3p32td2jggGbFZuXW1ufQKbgQ59wvxC7+V2h+eYbJtaMTOaVQomuCDfBlThvurZmMhWrVJSbPWu6MlEVtiqMPvsDd2z+sbOGTrpzEYN0GzVKnFGxQzI0+f1buLOPVOfTuEGQTftvb590/MssLkqfunPRhhldYaQwWy2Slf2oKGbdmdIm9MnsFmrE9hpr+8eX990zqRv2arA9SbL1kBOn0066axNejnovtINwJKnrRlxHEzkZ40hI2GAsNmaALBohKGhgfW0QcGTTSpE8U/+1b5gdHxsWsJxPRUJUM3VoEWBRACbTPIm08RIBk0cwkXgRso4ixzDpZPL6fRxdW0MgwRfCl9D4Nbs1yLRghIVUdSScaSI7zBP5SjC/JRHuYEnOIIw1TVUfGI0ziUc0E9tkyuIv88P+an2VSYAkMIiYUflx4mXTIEDr6iMwTaugunKiKm7rpnILG2kOx1GlKloQTVNRRQa9L4ttEV64ZuyRCthelxLD3NhMPdSjQYNgRb9VQxBl4tNPg1o7aUgxLAOZB9euS63XBcOynf7QdeuRe5d+yIDIiTuBpoLH6MZuM5lOw6ZMSmnFmDDFl7iyiCNn4WNouIX4K8AEpx3csnaSMslUNoUCcOSc0esJuN85wFuJSJ5ATaF/WvoFhxYpwB7BugzPWHaPeuNDwMg2niMaJvHRjQLCWqk1sF2lmTXPFka6/ffxomjGl7OwwiowMDqXNZCsQBb3aRulUBii5ImGK342IWZ8xYsW0Y/rwpKqwujEdUWiUTllGCZ03mf0mcleNPO+NN3jAXCEBDObI8Bjiac3ky9lwhAny5YKNROnw3oApNP38bXAx6lSuFAJx2gmJIZB6OYKi8RRgFDgFEcEPHEL5ye9YExYxCttezDgi9rJHRM3JFC3/wZPSEB0jUvWP2abZ/4u3ihdxqyP8l7+Cr/lQl1mIiPT3rAz79eOlRgY8+//fe+jwBxz7jHz7+uFdUMNaKqToNTFX3wE0/+6KKR4alT1Zj3VvvuH/74+7/7E/AiIkX4hDGgpKNxQIEVe6/t/s4//Lv1DSAj8Uv8bfa8Zz8CAQOv4m+1M//69S/+/K/O/t8vyowAIxgg6TCXtHEiX+gcK1HnSJnxikQAUojGCRjwW/f/7Bz7iZfwT8n5NzyE2LV2/wdJCx7UgOHSWLDHgGGwx+7f/ZMFkJfICnGdTFpP3PyjM6QL0MlRNN7BrdzNFxlTh4n4cJ/b/+O3hiqU4w+70Z/+xJKOD7rFP36LimqGakrVXMuGD7ne4d4XfK/oApSqDe8R895s9/3pjx744x+S+HpkIRHCZEnAzCWfbJTe3Nq2f+Nfb1v3EOmSuI6PcejrR1EQChnX87G29d9f+uav/3L44QeXX8LhxaOHB5SIsjuBcPbkEoM0IZAmHI8JiQADIUo5OT4RMfOAE948/tOd/v65tP4kGf+HZ6Fda7d7MMd5t0lZZGgsgkREIoE9CkU64UClKmyyQGYQCdEEQwURwSiReo0V1AJYqjSQRdEEr8xiXKBxAIRPxSUgGkIYkTCi5kubIwwYwjCubKKXR5jk6gF+n0MUBoCB7EQvySZ69RDp/VZ5HeHDQMUD2rVDglkgEvFam6/CWggpscXuJCI31iBBbIm0o0eHzhODDolNTPfArRrWBESN4xyqgwkTG/aduwI7ullkj0uc7mt6flq6aCf7/B3O+brjqmj42zRRhNOYSizSA1pyP0KG4khTz0+gZu2gDSDdO/rav8bnc+mi6X74pfP13adP6uS42FQJAAhjXGGSVGDCwA5tz7HZKEgEDAhvCHNVVJuwxHANGrPElWGg5onJ3IK2MNHsxwxKzxufT03dD75Ag2A+RBsQJz7/j6HWl52xR4i+YQBo/1I/PRFmSaT7dJ8jqzQ/mFAeCESCICWbpFucN+hz7hOOSIR4IFgUAWZ2vUxUIOOD3jCJpb2vGfOAhrzHZ/q4aZ4EM3dPNkNSyO8mozjbht9xjJyxSpAmcsbBkiSRJEGeFWCrSoEJWAYk6KofZ6uiwAkYSsyomkC8XN0GAEMmICDhjD3XHNd5H3vWHEvH5lHQ71qsou1UcA77IiGyjIsdmGi9Je3F6GVJki3lLc7HuIntRrvRtVyYAGALmq4S6oAn4NrBDo5qk5l/GSUBAAEPKIkw0j5LWdoKQ5FDTHiHd9HCtpvLFa/jqN8tjOJsFxDHxxW99d1y57YPfeUjKUoKRAXB9vZ3b86/3XNGkMhIMhBk9j/+/u5z9R86IzlORioIRAWoNEFmf2YgPmZKtfe5/+DtS6iT/GuewsTysTOqEnTT64++fxbWM73a60/9fDI2DxUjlr9qxbv2I6SCcwg9KPkLrvuOK4wHjWfd8t3nUwIMcMwdVr7yeg9gHtnZdkYmEoGGSHYBgDFhqKaHcGCrX4u4RFeQQJiE9V0oSRqLfiuAtN8tLgqjG1X4DW34hKnora+RZk8OPkmFgjKKlV1hW6lP3HX9ujNc6YovnUTNkHadT9oxfVZFJyZVJ6VEVsXKCJpC78oMJCVWJ+Vi2/nohsm5ksOgoLg4eDdB97onz32zHXnGiSdf8LNkbF6yYmw+ofXVoyhSwTkyFnDOPXzmq11HuozNB1/3a1eoieC7HiS4Vzz2pAc7PBdjltFfxcwcWHZ9g20wT3McpUKjcDipnavprRZ60xdKFzBAGS2iVbE5YxQDzgxC42tmgK7sgZEaQWSdTz8ktvFXqXCzzh9CEwG+xLF5XcQPrQnOYQiMA5qYBghgDJxySfccjlxIEXJcLuuyid1kDWV3I117p/D+Xf7px/j209JJ8eQff0QAYqR/ks5FhO2csz5Iw54+2QO0Dwef7izdIe3jPPxwpBP4Uk1mTfGw8TFIwnkll5gT8ZWOYw5o7ykhxNEdxHQPUCLnNAWFrAXxCVt6YgppbjzhtS8m6dBmei3L/i9F9xP70KSM9UfAHN8iCQCoqCHVmNdq5D1f0YDLndBUh6El5AnO0NSUFSTi5GXVymJpp4lh/mZ48JAc1C7qlB2ZoO0EDv3jt+92PMQEpQMXofQvrBTlCCSzmAyOEQUwu1e/Cl4qk9+7NmYqKWQwYpWXuqzS/F1N4iiJenEq6bRSoPS49gNJwExJ1wGp1pIa/UePVBF3Auc+TgZVHdad6iUOBl67vvmvbaMb3XjjExyt6NmLma5RHFegNXbZAZakeMBh89Se7aVDcEGdNyzq4DNdc/XF7R1haypcuUAGgXcwqSluWbN/H0x6J0pZbdh4ZLfaF4KPqUhvEhY6NpXvOAaRrSv3HUAFFsiIqjHVGtLbUEwlzhe/x/QC0gqYeSFGXJJoASmnbQsHFLqm88zzJADmcn+nD73zx4yShtGL9RMq4epf+t+HC6cbPnj4dbPGgljTRz37HX+SpOnt3/r579NaRJXCHH/rzMt2kvqUx7/x3xWss4mrqp/mL32IH8KKRQmg8aZq2HwD6YKJqdWIwLnES3CwSC0YMxtla//q8pSW/fp3+8/JPX4vhQfuO3kx5/I7dP45V+WlWMTqzOte75TL2aEiR5Vr6riZW553nsmIERFVIo3lW7dd8ffDmuOG1/jfDlZgBTNDpcXYLaaH86xr/hWqBGIAc2czR1KZCrXLtQ4ihpJZ39ulIbywRzhvB+oA6WGLQNgDSB9UQV0MOyo+IY0NMnsBehk0AD6FJjPHW5VBWmQNoofmdUtAc/oWOBdsba42TbA+AxSzoNMoY9cd9Jy45hZ4wc9t37gO5HK1+4jnfXsRcOzUAiskDwDUlUMzt4ITzQxzeY2oDKwAMeejFoiG1CAWzuQI0uhhbZvz45izWrEeZ4gCyGydMVtqlHxbz5Ch6tKfVc6k0JzlfVZzdgoREOtENmjQphE4Yp3EBmyuvtaoxn1TVi+8O16YqASHF0FzAQTuWV9wXp2fd//XzhkyYm2zP+39kfPtVf0axSuQEDs5qa87P1y1C2EjN7X3eP/PnucFouF0C7vW3tv9lT3PKWC6fKZ7nC/uGCMMgMqjeEDk7ZPuab6wY+Am+2jvonUNs7QExb4PssCE1YwLm+rKlRKlTSmFVqrOIABAurTJDnVKjTBT3ElgjVpKkw3veN+IcEM7oh1ss095x2TE9Lb92dBJkkDjiKRAIptY2da1HfZ675/z/pm9ovLXLkjssN05pNFEQpKCeYQBik2kCrbGHjukTWUTqzP7U84RJUwghqGyLSazKCYks4spOYwnsC17bWnjLLEe6smZbu05u0uB9Su+f4GdN6O6AOG9bv2js6xc9653+vkpjHAMCDwoY49Z9409ke72Fg/4618QGKl7px5/5Q87qhJhyu3v9dt/wwJb7a8ikgDHqHe569DuRAhZXbbxUjPmygAAJJd7m7Mw+8azh5e2hrRnwkbNKdcdL0XLpXG8iECAoYYUkiSrWH2X0PQaRBkAGmC5bQfQRvt950pBuhLIvGb6iId84DQpMpTywMd/7N9icOBKMSxwkr908u37UObB5+F2L/zGLyVCyjD5prM/5bvoJV3hpJB7PPOzf7ZUFtOr2payUiLPnjS0B2Pb2Eag3q42tVLMSm//Pf7q32FNon3jPvX6MInluL60ro+N0IG02NEAO+8dIGhl7Ta8ILjxvCKIZi9pJjBB4TKZL42s3aHZLBYQIQmzVpjToC4+GG90FmOq6EAQIi8iz4bWZIUeDQxjNqhEeod1Nt7++8jX/s7RBgCuyl/MJn//OMrWDLKgrr2c5tYY6rEnkN/FHoZE9l1sxDRjL0RpqkEMv8N7dT1JBO5xvrgMJTzkwPZnen+v+6v3BZJEZYR3iJds5z52v76/yxHmnBLJRaUYCth5MTU3uH+mGwmbKpFNP/s5/vY/T37lHxKxwihpZUQgS1xZy1/f/pl+2rMPs5Tt///5UUQ0PeWgwcsCAMby8yV+8T8xjQMalxY4Gpd28g+/stPMQssypGClrCQWG8EUh/YnZGcBMInmPByKREoR+JJvVGq0wCZaFmu/yUENbGAYq6Qk4wW0eUuWFsK/+YK3igWTKOyBXqK9AmVa/ENoWgMUNCUGSpSdxeqeJISwXgGU5KuVAI2OE4VrvJRF047x75t1lYGI2pWmn2shTh+eZOcFje85GFwABKu3zm/vMBbrNKdl+zy8w9rNuusoImWPBNM9RFVkYsXeA7HCxE2NR3A0Op/WdLm9rZrgC041VgFlW1fr60GgLVTLoVn/L5vFO0JVEBOdjosNxPuC84Lca0+jCYnDdT/4p4+UCbFO692rXn6AQcJN37P/1busFkghHoBho7zi9q88PwrK2XzbxCstHAzg1T783w8UqjV8DLT4z3+MfyWGNAgIAdoAlpaKsPV9HWGb/z0mKSEXJmFAgOS+lP/ZGUypNjbcftfJ7YRYp3H7xj9mUTR0y22O/yMuDBfXMXtXgd1m+d8OdxG7EDlbt9e/t1M13zpxq8vOQMEs4jskWVIddKvR8rujULXRex477+Fi0laL/FsDMJ9qzuF2NeKf1BIgveDUinzqKHsWGAWt3XYKOlqaX+oWSC7WkpmZ8sA9mclBPc3GkEUbaWTVekvhXOKONF+kinrgRzQI3WjLXQKMxmUAaj83TFhEImAYAF8aSgWG8ZmXxgCDLA4AwJj1MK4HTk7vh0vFcTaVr5DQDv/9D+72zx5idHkAgAg7Sl+/qCP1UMDS8VJUN661+sFWYFQOCyr/+GOyso348P1yEFufdWMMNXsOp/Xc0zYedA6x3azsef/Iv3opKYEUAJCUVIGubspxPTm+TFBKGOpgVvVHRFKC0mEAAlMs0Tflniz17NNUAVNq6Yy+k4sudLnBvbnlJO36xj/Uq3cfCZzqHlAMUAwQprm2dclhyXXGumNN00LasZ1jqsy1jL8aic/C7XlDTwxUcqk6enlsbFyLPA+Nr6ZoxpaVnEjMiACgIXGOoNs7OC9MesY0UB235bOM7OozLxVippYV6KIhaJvZJMztelKUxmHZ5hT9C91Vjd0WlyQ6rtgDgSHMd5LFHNU5Ac30WsagLUeXcpZu2FhhgONq0xonkPHAHWNDzquoKu/mtIs7bE7xgF4QQ5WU06FS3kh5tJEhzSF+KVODyOCuEaKlJXzylX+OX/j/xhIifP6x+3+/3nRb9eVuuBprETQy2oymC+n8ErbLxwfZajdgEkxASWOaJCDb/MZfT77431pNQ/c6n36h6bEcpWAJA5BhElWKoISZk5prGJUenbmlD+Yohggg0tDwlV5V+IxxgR+tr3kSN7kn9Ds7pyVDlYaYS5v1GvfnvP/uC///aK8EwhIWgMyy3biPgrs8Px4B4Ggcc7W9xfs5z+GldOeDvYfW1zvaXBqXudp5i/M598hGaVwMCBdoc5nrdl/bbts5AcWALPAO9/qWaKPyoUYMbfgvUMYO6nWIZl/uV5rL28DuWVuKZEzXAZPIEFe3A3bnl/7l0PMlOokcQzGRDBErs8vev8u43L3FEkBMmJjM9nGN+5OdE2TpzCu6Z/SwElaYWBn7dI3zE06TJlQaA6EYl7AF9nO1e4+zQRQbZGTc4O6LWfBOLMRnac/LPq0i5lJ7+164fksJNJJ4bOVX/znd/zXaXcLr+8DL7K3dOmNSMAGWDQJYJa4TQaI59SQCsgpAkml6jaFFgqV0bO9GJCZWNbcuoIWhJOwcuFuquH/hFumivo8mnVctDAPdrQsxaQGAK2yBRKqGwhgBJgUSNpjfaguSTfdFEGA5hCHMHWDL6g4qayqBH+lrHgzAXMY7u7evZ0UxhCUDSwaOJumAvat7u/PsCubS5rAAaMIRSRfZ+3u/uvO48nq39xp7MP2oMwYey1imBATOibJjvRHP1f07RkkrY1eut5/q5EQMxYRoIgGRCInbXrvBfto5OlnSBEwCQCeQCCduO3OzPaRD0+Fmd08ETKJiOZJFOpL1F4QBtviBy5P6AKFUUlkiQOZkYo8iKhyNrr3gAxJFsUSZhKt8FQ27ocJOqqLKqt3VaudKg7G9qQPDzObbIzguxBJYP9kAnJsHEoUEaZVypMshOYjUQW4JRvW8PJHKKBiSnTwVnyTipDAEGBLIqZSbpiTBRjUGh5Kd6mDqmDgGyJzsEiZL4Dza80y8SDakfRy7XhB7FVNnToN0Fhkvgt2yjBNcXsdKfHHrK/6dMQVOjafzxgiAyOglpsaUp08AIDHaym0uttKncwCgmBFt6qps+mScvx+ZZWmPlIYF5o6kRUTtLNJgGfCwhADYICDaPh7iFyDG+AooMoxQar6apKQDmK1HJFDrbi+ZBABGmUQR8ySd0YknG4hnK06YFhLP6Bjl9VwLYJxrLA2uAHBHSzyWXRNQSK7CJ+oJH/xVyNS+ygqm333Zn/9g87nFObaeIUUTEk9AOcCeWwlAzNYZzWManmxSFEjZMVdZGaOYzUfi2TqCIwLxZCQcABGIySbkKlsnAhAZZyOPa3KySdExZsqSERPCSzoiMDhX2wJ/GMmR9+NFYf40Oic87c6rt+//62Kqa37U6ht/YOplpV+695+/sXmLuV8/lqPRSQkDtzThAJQZ5mTu2NkixBBNyr68fhcAYPPE8/16VEQoKQGPD2hAJxHI5lY7YA6AM8mh+oYmCfEojiOURCARxmGIWM+buuCcR8d9SbWt7G3/TvdWLDAzl4DLkjSbcWk6VlamEMS5TRidlDgOKIaILCYfgJStExMnhcxOzMiSjQAxPEUSZWYUigGACl4OkwGQMSSdEo9iCFSZCExFyVEC51XrCgvg6c+9c3IK4eWgxAoAJNCG5wjI1JxrMzwN6SxPJwBQMDr10AzpQoDEDE9ifoHaSf4CkL+MzuS0CTGl93KeFOyCAbYKV4YpnkWWnOkd/f65JAEsjzlDQAZdRlNQnqrk00mlVVamnHSqS/clpNJOmDzmzSInRwAQp6TEmSth8pNzHn9aIQLJ9dneNHmG4iyStFZpJlndIQW+AxRSgsJeIzGUe5SEagLAzib+nb3sLk+7VEwkDGLVnZgqeTkSJHwxQGr1o2QOy+a8oONaSSxuQdq3eqJXGNBfDEG0TuykMiUAkq8kOQbM5DulsTDBUWEDFAjLjjSLWAcDixFIhzVvhADEKQBrO0wdMnNdE5kjkM7vLwmXAhQIm7i+IvKuB0gRHBUiQZwPADZ2+xZSpwffQHLVHRsiwRwFIQmVLYtQCdEhIKe4SrAZhZWy6KRrX1A/mndDeFyPxgDkKF5KqA4DDLkmBjtAjJBFhxogU2oowmlU52RIB5VHiUB70PHEguFUjIb5SkwIQL4PLx3Uz1qKImCvDYrQjEtmacMLkRtRaYyqHdpTi4GxiyxFo2lmAAhZzZYWkLU/2MrEEAByVgqG7AuMeZP6fCCEwF0bbu2yA3j3UtfUADDHREgAGG9kKkyx1MelxkqMU+NY7O9pmOjFK0fnyMiAdYF0tHZEQxas7V1LO+LMlTnZmjI/m3Vbww2QpkFozX/3UayWUkizqYkicTR7S/ZsvmtfaicQF1S/t8aQujAALbRsl1je4pp7VDMn2sXz/FCdXD+dBmnGMsEsowZeapoUoTHghIHZFxCN6CEyI84IIt/qHuBqHs8F0y+mMYQNwKUNNa4aETBEmHoB3+JhO5gW/02nLtFUgsxkyDCkeXVCe7ZNVtMlzNP6PSdaEJYIgmTTPUktLZmZfkFAK0bI1vRe7zZCHQDpeH7PfTbbd0YMhwBokObF3E4ykQnWoVRkfjrqmgAoiJJ1J6VQ7VE2BIBLpukkAJGSyk8ChOQUeOqSJauCpNlRkRcpxzW3FcVklW8AULa45vxFnssW1TCGvTNAxnM4p5ZCmleP0eU6Oi3MM7ljJ0oGVn0PAKD6BdaavdNdjfB7jNoAIOg+O2pbHLVDtlFaoAHyYl4gbPGIUzDgpe6znKSW4bFapdnhoLtiJvKos0HGS91NPesANkOROnuT42hzZXaVbdtcR/iZKtG5zqXtSQ0HCOOaxeBF2fP0+KdtCYRLUAcq8HSxTZ2u3FmrVmfAXrtkA4DncgxUq0AQBl2uskM6JaWS9liwrV1BQHMa69iMpgCapgRatzUYSClhyRyWDBxNda/yBdUxzoIWOqWntq+1dS6pde1eRoOQVrrMi/ecGJLIGDCmwBJW1YyBhCWMCAwIgDWyErEyMSMZDMkMKkwOTeOETRmQAcWMcQAYkdNjZGWHbSoyBqiedTQkYilTgH6kEcYlHMmAMMJhhIuN0talCwCMU8wMlrBRbJQRgcE2YRJpKo5wRE5/gGwxJnI4J9KctYPcGACokWicuR9borU1zCm7UpvzcmUGAISY8REv6v9EVtP2f2BKNPz2tYgWVx4NhmwUMEBaHXYkqLzhtPCAq/bMqjRowGXmHGYAnM1ZnZwF7jpJYxEMzf8rvMcyxPU7v9TZRyoAotFSZ8gYABDnEvFODDWofNfmjjZLhmqNN6yuhi1Ry3YA5rX1GxViso1sGjtN/L/1sa8grdY9JmFmNMhhUpJ1rGNhnM6BmTaJWQDCXkHvDkOA5QIerqpIBCBSfMJmLAYDKx0mS7GcnoyYccQCRjMY0v77HRiHMSkGzNMzbu05KbbSlMVDFNsPyXoKYwexVsdBgSIh3REAFjAmNbMd/c9OlDoRbuKcj2I2syuzBqD6/6KIaeUoUF47hmfUEYUYUEnMU0GBCAg0t88xrd1SLhc=);
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
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
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
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: oklch(0 0 0 / 0.0625);
  color: oklch(0.3 0.0005 281);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
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
  --bold-modifier: 200;
  --bold-weight: 670;
  --button-corner-shape: round;
  --button-radius: 8px;
  --callout-blend-mode: normal;
  --callout-bug: 214, 50, 202;
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
  --font-weight: var(--h1-weight, 330);
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
  --table-border-color: oklch(0% 0 0 / 0.092);
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
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 32px);
  font-weight: var(--font-weight, 330);
  letter-spacing: var(--h1-letter-spacing, -0.32px);
  line-height: var(--h1-line-height, 38.4px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
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
  color: var(--strikethrough-color, oklch(0.715 0.0105 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.715 0.0105 281) none 0px;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, oklch(0.3 0.0005 281));
  font-weight: 490;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
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
  color: var(--link-external-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: rgb(10, 124, 255) none 0px;
  text-decoration-color: rgb(10, 124, 255);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.637864 0.198104 257.288 / 0.7));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklch(0.637864 0.198104 257.288 / 0.7) none 0px;
  text-decoration: rgba(10, 124, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(10, 124, 255, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body dt {
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body ol > li {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul > li {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.715 0.0105 281));
}

html[saved-theme="light"] body blockquote {
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  width: 700px;
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
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: oklch(0.3 0.0005 281);
  border-left-color: oklch(0.3 0.0005 281);
  border-right-color: oklch(0.3 0.0005 281);
  border-top-color: oklch(0.3 0.0005 281);
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
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: oklch(0.715 0.0105 281);
  text-decoration: line-through;
  text-decoration-color: oklch(0.715 0.0105 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: oklch(0.3 0.0005 281);
  text-decoration-color: oklch(0.3 0.0005 281);
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  background-color: var(--pill-background, rgba(10, 124, 255, 0.1));
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(10, 124, 255);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, oklch(0.24 0.0005 281));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, oklch(0.3 0.0005 281));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, oklch(0.3 0.0005 281));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, oklch(0.3 0.0005 281));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, oklch(0.4 0.0025 281));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, oklch(0.465 0.0105 281));
  font-family: var(--h6-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  color: var(--nav-item-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(10, 124, 255));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body li.depth-0 {
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
  color: oklch(0.465 0.0105 281);
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
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
  background-color: var(--pill-background, rgba(10, 124, 255, 0.1));
  color: var(--pill-color, rgb(10, 124, 255));
}

html[saved-theme="light"] body .note-properties-value {
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
  color: var(--text-normal, oklch(0.3 0.0005 281));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: var(--tag-background, rgba(10, 124, 255, 0.1));
  border-bottom-color: rgba(10, 124, 255, 0.15);
  border-left-color: rgba(10, 124, 255, 0.15);
  border-right-color: rgba(10, 124, 255, 0.15);
  border-top-color: rgba(10, 124, 255, 0.15);
  color: var(--tag-color, rgb(10, 124, 255));
}`,
  },
};
