import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velocity.touring-bronze",
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
  --accent-h: 27;
  --accent-l: 44%;
  --accent-s: 60%;
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
  --background-modifier-border: var(--trans-faint-20, oklch(100% 0.0375 64 / 0.0625));
  --background-modifier-border-focus: var(--color-base-40, transparent);
  --background-modifier-border-hover: var(--color-base-35, oklch(36.25% 0.01000 64));
  --background-modifier-cover: oklch(10% 0 0 / 0.5);
  --background-modifier-error: var(--color-red, #df6775);
  --background-modifier-error-hover: var(--color-red, #df6775);
  --background-modifier-error-rgb: var(--color-red-rgb, 223, 103, 117);
  --background-modifier-form-field: var(--color-base-25, oklch(31.25% 0.01000 64));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: var(--trans-faint-10, oklch(100% 0.0375 64 / 0.05));
  --background-modifier-success: var(--color-green, #70ce86);
  --background-modifier-success-rgb: var(--color-green-rgb, 112, 206, 134);
  --background-primary: var(--color-base-00, oklch(23.75% 0.00750 64));
  --background-primary-alt: color-mix(in oklab, var(--background-primary), var(--background-secondary));
  --background-secondary: var(--color-base-20, oklch(27.50% 0.01000 64));
  --background-secondary-alt: var(--color-base-30, oklch(34.50% 0.01000 64));
  --bases-cards-background: var(--trans-faint-05, oklch(100% 0.045 64 / 0.025));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in oklab, oklch(23.75% 0.00750 64), oklch(27.50% 0.01000 64)));
  --bases-cards-label-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --bases-cards-line-height: 26px;
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --bases-embed-border-radius: var(--radius-s, 0);
  --bases-group-heading-property-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --bases-group-heading-property-weight: var(--font-normal, 420);
  --bases-group-heading-value-weight: var(--font-semibold, 620);
  --bases-header-padding-end: 0;
  --bases-header-padding-start: 0;
  --bases-table-border-color: var(--table-border-color, oklch(100% 0.05625 64 / 0.1));
  --bases-table-cell-background-active: var(--background-primary, transparent);
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in oklab, oklch(23.75% 0.00750 64), oklch(27.50% 0.01000 64)));
  --bases-table-cell-background-selected: var(--table-selection, hsla(27, 60%, 44%, 0.1));
  --bases-table-cell-shadow-active: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(27, 60%, 44%) 50%, transparent 75%));
  --bases-table-container-border-radius: var(--radius-s, 0);
  --bases-table-group-background: var(--background-primary-alt, transparent);
  --bases-table-header-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --bases-table-header-background-hover: var(--background-modifier-hover, transparent);
  --bases-table-header-color: var(--color-base-55, oklch(57.50% 0.01625 64));
  --bases-table-header-color-hover: var(--color-base-80, oklch(77.50% 0.02438 64));
  --bases-table-header-weight: var(--font-semi-medium, 490);
  --bases-table-row-border-width: var(--border-width, 0);
  --bases-table-row-height: 32px;
  --bases-table-summary-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --bases-table-summary-background-hover: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --bases-table-text-size: var(--table-text-size, 0.90625em);
  --bg-checkbox: radial-gradient(transparent 50%, var(--checkbox-border-color) 55% 60%, transparent 65%);
  --bg-checkbox-active: radial-gradient(#0000000f 52%, #ffffff20 64%);
  --bg-main-inner: oklch(28.75% calc(var(--bsat-str) - 0.0025) var(--bhue));
  --bg-main-outer: oklch(26.25% calc(var(--bsat-str) + 0.0025) var(--bhue));
  --bg-main-workspace: radial-gradient(at 50% 50%, var(--bg-main-inner) 0%, var(--bg-main-outer) 200%);
  --bhue: 64;
  --bl-00: 23.75%;
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
  --blockquote-border-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --blockquote-border-thickness: 0.1875rem;
  --blockquote-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --blur-brightness: 1;
  --blur-radius-m: 12px;
  --blur-radius-s: 8px;
  --blur-saturation: 1.125;
  --bodyFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: var(--color-base-100, oklch(93.25% 0.00250 64));
  --bold-modifier: 250;
  --bsat-low: 0.00250;
  --bsat-med: 0.00750;
  --bsat-modal: 0.01;
  --bsat-str: 0.01000;
  --bsat-trans: 0.75;
  --bsat-xtr: 0.01625;
  --button-radius: var(--input-radius, 8px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-opacity: 0.2375;
  --callout-bug: var(--color-pink-rgb, 206, 147, 200);
  --callout-default: var(--color-blue-rgb, 117, 170, 226);
  --callout-error: var(--color-red-rgb, 223, 103, 117);
  --callout-example: var(--color-purple-rgb, 162, 145, 213);
  --callout-fail: var(--color-red-rgb, 223, 103, 117);
  --callout-important: var(--color-cyan-rgb, 118, 205, 189);
  --callout-info: var(--color-blue-rgb, 117, 170, 226);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 1rem);
  --callout-question: var(--color-orange-rgb, 232, 150, 89);
  --callout-quote: 150, 150, 160;
  --callout-radius: var(--radius-sm, 10px);
  --callout-success: var(--color-green-rgb, 112, 206, 134);
  --callout-summary: var(--color-cyan-rgb, 118, 205, 189);
  --callout-tip: var(--color-cyan-rgb, 118, 205, 189);
  --callout-todo: var(--color-blue-rgb, 117, 170, 226);
  --callout-warning: var(--color-yellow-rgb, 240, 200, 129);
  --canvas-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --canvas-card-label-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --canvas-color-1: var(--color-red-rgb, 223, 103, 117);
  --canvas-color-2: var(--color-orange-rgb, 232, 150, 89);
  --canvas-color-3: var(--color-yellow-rgb, 240, 200, 129);
  --canvas-color-4: var(--color-green-rgb, 112, 206, 134);
  --canvas-color-5: var(--color-blue-rgb, 117, 170, 226);
  --canvas-color-6: var(--color-purple-rgb, 162, 145, 213);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, oklch(34.50% 0.01000 64));
  --caret-color: var(--text-normal, oklch(85.00% 0.01000 64));
  --checkbox-border-color: var(--color-base-40, oklch(43.75% 0.01625 64));
  --checkbox-border-color-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --checkbox-color: var(--interactive-accent, hsl(27, 60%, 44%));
  --checkbox-color-hover: var(--interactive-accent-hover, color-mix(in oklab, hsl(27, 60%, 44%) 62.5%, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%)));
  --checkbox-marker-color: var(--text-on-accent, white);
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-size: var(--font-text-size, 1.125rem);
  --checklist-done-color: var(--strikethrough-color, oklch(52.50% 0.01625 64));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--trans-faint-10, oklch(100% 0.0375 64 / 0.05));
  --code-background-alt: var(--trans-strong-10, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --code-border-color: var(--trans-faint-20, oklch(100% 0.0375 64 / 0.0625));
  --code-border-width: 0;
  --code-bracket-background: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --code-comment: var(--text-faint, oklch(52.50% 0.01625 64));
  --code-function: var(--color-yellow, #f0c881);
  --code-important: var(--color-orange, #e89659);
  --code-keyword: var(--color-pink, #ce93c8);
  --code-normal: var(--text-normal, oklch(85.00% 0.01000 64));
  --code-operator: var(--color-red, #df6775);
  --code-property: var(--color-cyan, #76cdbd);
  --code-punctuation: var(--text-muted, oklch(71.25% 0.02438 64));
  --code-radius: var(--radius-xs, 6px);
  --code-special: var(--color-red, #df6775);
  --code-string: var(--color-green, #70ce86);
  --code-tag: var(--color-red, #df6775);
  --code-value: var(--color-purple, #a291d5);
  --collapse-icon-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --collapse-icon-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
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
  --color-base-60: oklch(var(--bl-60) calc(var(--bsat-xtr)*1.5) var(--bhue));
  --color-base-70: oklch(var(--bl-70) calc(var(--bsat-xtr)*1.5) var(--bhue));
  --color-base-80: oklch(var(--bl-80) calc(var(--bsat-xtr)*1.5) var(--bhue));
  --color-base-90: oklch(var(--bl-90) var(--bsat-str) var(--bhue));
  --color-blue: #75aae2;
  --color-blue-rgb: 117, 170, 226;
  --color-cyan: #76cdbd;
  --color-cyan-rgb: 118, 205, 189;
  --color-green: #70ce86;
  --color-green-rgb: 112, 206, 134;
  --color-highlight: rgb(var(--color-highlight-rgb));
  --color-highlight-rgb: var(--highlight-yellow-rgb, 240, 200, 129);
  --color-orange: #e89659;
  --color-orange-rgb: 232, 150, 89;
  --color-pink: #ce93c8;
  --color-pink-rgb: 206, 147, 200;
  --color-purple: #a291d5;
  --color-purple-rgb: 162, 145, 213;
  --color-red: #df6775;
  --color-red-rgb: 223, 103, 117;
  --color-yellow: #f0c881;
  --color-yellow-rgb: 240, 200, 129;
  --control-icon-background: var(--trans-faint-20, oklch(100% 0.0375 64 / 0.0625));
  --control-icon-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --control-icon-shadow: var(--glass-base), 0px 0px 12px 0px var(--trans-strong-10);
  --corner-smoothing: 60%;
  --dark: var(--text-normal, var(--color-base-90, oklch(85.00% 0.01000 64)));
  --darkgray: var(--text-normal, var(--color-base-90, oklch(85.00% 0.01000 64)));
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --divider-color-hover: var(--color-accent-3, color-mix(in oklab, hsl(27, 60%, 44%) 50%, transparent 75%));
  --divider-width: 0;
  --drag-ghost-background: var(--color-base-00, oklch(23.75% 0.00750 64));
  --drag-ghost-text-color: var(--color-base-90, oklch(85.00% 0.01000 64));
  --dropdown-background: var(--interactive-normal, oklch(34.50% 0.01000 64));
  --dropdown-background-hover: var(--interactive-hover, oklch(36.25% 0.01000 64));
  --fab-bg: var(--background-primary, oklch(23.75% 0.00750 64));
  --fab-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --fab-color-active: var(--text-normal, oklch(85.00% 0.01000 64));
  --fab-easing-curve: cubic-bezier(0.55, 2, 0.5, 0.97);
  --file-header-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --file-header-background-focused: var(--background-primary, oklch(23.75% 0.00750 64));
  --file-header-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: var(--font-semi-medium, 490);
  --file-line-width: 43.75rem;
  --file-margins: var(--file-margins-y) var(--file-margins-x, 28px 5%);
  --file-margins-x: var(--size-4-8, 5%);
  --file-margins-y: var(--size-4-8, 28px);
  --flair-background: var(--interactive-normal, oklch(34.50% 0.01000 64));
  --flair-color: var(--text-normal, oklch(85.00% 0.01000 64));
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
  --footnote-divider-color: var(--metadata-divider-color, oklch(100% 0.0375 64 / 0.0625));
  --footnote-id-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(52.50% 0.01625 64));
  --footnote-input-background-active: var(--metadata-input-background-active, oklch(100% 0.0375 64 / 0.05));
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
  --graph-node: var(--text-muted, oklch(71.25% 0.02438 64));
  --graph-node-attachment: var(--color-yellow, #f0c881);
  --graph-node-focused: var(--text-accent, transparent);
  --graph-node-tag: var(--color-green, #70ce86);
  --graph-node-unresolved: var(--text-faint, oklch(52.50% 0.01625 64));
  --graph-text: var(--text-normal, oklch(85.00% 0.01000 64));
  --gray: var(--text-muted, var(--color-base-70, oklch(71.25% 0.02438 64)));
  --h1-color: oklch(calc(var(--bl-100) - 3.75%) var(--bsat-low) var(--bhue));
  --h1-size: 2em;
  --h1-size-alt: 1.625em;
  --h1-weight: 330;
  --h1-weight-alt: 570;
  --h2-color: oklch(calc(var(--bl-100) - 5%) var(--bsat-low) var(--bhue));
  --h2-size: 1.5em;
  --h2-weight: 570;
  --h3-color: var(--color-base-90, oklch(85.00% 0.01000 64));
  --h3-size: 1.375em;
  --h3-weight: 570;
  --h4-color: var(--color-base-90, oklch(85.00% 0.01000 64));
  --h4-size: 1.25em;
  --h4-weight: 570;
  --h5-color: var(--color-base-90, oklch(85.00% 0.01000 64));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h6-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-weight: 670;
  --header-height: 56px;
  --headerFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: var(--text-faint, oklch(52.50% 0.01625 64));
  --highlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --highlight-blue-rgb: var(--color-blue-rgb, 117, 170, 226);
  --highlight-cyan-rgb: var(--color-cyan-rgb, 118, 205, 189);
  --highlight-green-rgb: var(--color-green-rgb, 112, 206, 134);
  --highlight-orange-rgb: var(--color-orange-rgb, 232, 150, 89);
  --highlight-pink-rgb: var(--color-pink-rgb, 206, 147, 200);
  --highlight-purple-rgb: var(--color-purple-rgb, 162, 145, 213);
  --highlight-red-rgb: var(--color-red-rgb, 223, 103, 117);
  --highlight-yellow-rgb: var(--color-yellow-rgb, 240, 200, 129);
  --hotkey-gradient: linear-gradient(to top, var(--color-accent) -10%, var(--color-accent-4) 210%);
  --hr-color: var(--trans-faint-30, oklch(100% 0.05625 64 / 0.1));
  --icon-color: var(--color-base-60, oklch(63.75% 0.02438 64));
  --icon-color-active: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --icon-color-focused: var(--icon-color-hover, oklch(85.00% 0.01000 64));
  --icon-color-hover: var(--text-normal, oklch(85.00% 0.01000 64));
  --icon-m-stroke-width: 1.875px;
  --icon-stroke: var(--icon-m-stroke-width, 1.875px);
  --icon-stroke-thick: 2.25px;
  --icon-xl: 28px;
  --icon-xs-stroke-width: 2.125px;
  --indent-unit: 0.375em;
  --indentation-guide-color: var(--trans-faint-30, oklch(100% 0.05625 64 / 0.1));
  --indentation-guide-width: var(--border-width, 0);
  --indentation-guide-width-active: var(--border-width, 0);
  --inline-title-color: var(--h1-color, oklch(89.5% 0.00250 64));
  --inline-title-margin-bottom: round(nearest, clamp(0px, 0.5em, 1.5rem), 2px);
  --inline-title-size: var(--h1-size, 2em);
  --inline-title-weight: var(--h1-weight, 330);
  --input-border-width: var(--border-width, 0);
  --input-date-separator: var(--text-faint, oklch(52.50% 0.01625 64));
  --input-font-weight: var(--font-normal, 420);
  --input-height: 28px;
  --input-placeholder-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --input-radius: var(--radius-s, 8px);
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: var(--color-accent, hsl(27, 60%, 44%));
  --interactive-accent-hover: color-mix(in oklab, var(--color-accent) 62.5%, var(--color-accent-1));
  --interactive-accent-hsl: var(--color-accent-hsl, 27, 60%, 44%);
  --interactive-hover: var(--trans-faint-30, oklch(36.25% 0.01000 64));
  --interactive-normal: var(--color-base-30, oklch(34.50% 0.01000 64));
  --light: var(--background-primary, var(--color-base-00, oklch(23.75% 0.00750 64)));
  --lightgray: var(--background-secondary, var(--color-base-20, oklch(27.50% 0.01000 64)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --link-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --link-color-sidebar: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --link-external-color-hover: var(--text-accent-hover, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --link-unresolved-color: oklch(from var(--color-accent-1) l c h / var(--link-unresolved-lch));
  --link-unresolved-lch: 0.75;
  --link-unresolved-opacity: 1;
  --link-weight: var(--font-weight, 420);
  --list-bullet-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --list-dash-color: var(--trans-faint-60, oklch(100% 0.015 64 / 0.35));
  --list-marker-color: var(--color-base-50, oklch(52.50% 0.01625 64));
  --list-marker-color-collapsed: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --list-marker-color-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --list-spacing: 0.125em;
  --math-color: var(--color-base-100, oklch(93.25% 0.00250 64));
  --menu-background: var(--background-primary-alt, color-mix(in oklab, oklch(23.75% 0.00750 64), oklch(27.50% 0.01000 64)));
  --menu-border-color: var(--trans-faint-40, oklch(100% 0.03 64 / 0.125));
  --menu-radius: var(--radius-ml, 14px);
  --menu-shadow: var(--shadow-normal, 0px 3px 18px 0px oklch(0 0 0 / 0.1875));
  --metadata-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --metadata-border-radius: var(--radius-m, 12px);
  --metadata-divider-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --metadata-gap: 2px;
  --metadata-input-background-active: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --metadata-input-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-longtext-lines: 5;
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 6px 8px);
  --metadata-input-text-color: var(--text-normal, oklch(85.00% 0.01000 64));
  --metadata-label-background-active: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --metadata-label-font: var(--font-interface, "Raveo", "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-weight: var(--font-semi-medium, 490);
  --metadata-label-text-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --metadata-label-text-color-hover: var(--icon-color, oklch(63.75% 0.02438 64));
  --metadata-label-width: 10em;
  --metadata-property-background-active: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --metadata-property-box-shadow-focus: var(--shadow-input-active, 0 0 0 2.5px color-mix(in oklab, hsl(27, 60%, 44%) 50%, transparent 75%));
  --metadata-property-box-shadow-hover: 0 0 0 2.5px var(--background-modifier-hover);
  --mobile-nav-fade-bg: linear-gradient(oklch(from var(--background-secondary) l c h), transparent calc(var(--touch-size-l)*1.5));
  --modal-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --modal-border-width: var(--border-width, 0);
  --modal-community-header-bg: var(--trans-strong-20, oklch(from oklch(27.50% 0.01000 64) l 0.01000 h / 0.5));
  --modal-community-item-bg: var(--trans-strong-40, oklch(from oklch(34.50% 0.01000 64) l 0.01000 h / 0.5));
  --modal-radius: var(--radius-xxl, 22px);
  --modal-small-background: oklch(27.75% var(--bsat-modal) var(--bhue) / 0.625);
  --nav-collapse-icon-color: var(--trans-faint-60, oklch(100% 0.015 64 / 0.35));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(52.50% 0.01625 64));
  --nav-folder-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --nav-header-bg: var(--divider-color, oklch(100% 0.0375 64 / 0.0625));
  --nav-header-timing: var(--vl-ease-out, cubic-bezier(0.3, 0.75, 0, 1));
  --nav-heading-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --nav-heading-color-collapsed: var(--text-faint, oklch(52.50% 0.01625 64));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --nav-heading-color-hover: var(--text-normal, oklch(85.00% 0.01000 64));
  --nav-heading-weight: var(--font-medium, 520);
  --nav-heading-weight-hover: var(--font-medium, 520);
  --nav-indentation-guide-color: var(--trans-faint-30, oklch(100% 0.05625 64 / 0.1));
  --nav-indentation-guide-width: var(--indentation-guide-width, 0);
  --nav-item-background-active: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, oklch(100% 0.0375 64 / 0.05));
  --nav-item-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --nav-item-color-active: var(--text-normal, oklch(85.00% 0.01000 64));
  --nav-item-color-highlighted: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-hover: var(--text-normal, oklch(85.00% 0.01000 64));
  --nav-item-color-selected: var(--text-normal, oklch(85.00% 0.01000 64));
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --nav-tag-color-active: var(--text-muted, oklch(71.25% 0.02438 64));
  --nav-tag-color-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --nav-tag-radius: var(--radius-s, 8px);
  --nav-tag-weight: var(--font-semibold, 620);
  --nav-text-color: var(--text-normal, oklch(85.00% 0.01000 64));
  --paint-description: "A mellow color scheme that takes after the spirit of old grand touring sports cars - perfect for those who love coffee brown and earthen tones.";
  --paint-image: url(data:image/webpbase64,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);
  --pdf-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --pdf-page-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --pdf-sidebar-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --pdf-spread-shadow: none;
  --pdf-thumbnail-shadow: var(--shadow-input, 0 0 0 1px oklch(100% 0.0375 64 / 0.0625));
  --pill-background: var(--code-background, oklch(100% 0.0375 64 / 0.05));
  --pill-background-hover: var(--code-background, oklch(100% 0.0375 64 / 0.05));
  --pill-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(36.25% 0.01000 64));
  --pill-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --pill-color-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --pill-color-remove: var(--text-faint, oklch(52.50% 0.01625 64));
  --pill-color-remove-hover: var(--text-on-accent, white);
  --pill-radius: var(--radius-l, 18px);
  --pill-weight: var(--font-semi-medium, 490);
  --prompt-backdrop-filter: var(--blur-m, blur(12px) saturate(1.125) brightness(1));
  --prompt-background: var(--modal-background, oklch(27.75% 0.01 64 / 0.625));
  --prompt-border-color: var(--menu-border-color, oklch(100% 0.03 64 / 0.125));
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
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(34.50% 0.01000 64) 65%, transparent) linear-gradient(oklch(34.50% 0.01000 64), color-mix(in srgb, oklch(34.50% 0.01000 64) 65%, transparent)));
  --raised-blur: var(--blur-s, blur(8px) saturate(1.125) brightness(1));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px 12px 8px);
  --ribbon-width: 56px;
  --scrollbar-active-thumb-bg: var(--color-base-35, oklch(36.25% 0.01000 64));
  --scrollbar-radius: var(--radius-l, 18px);
  --scrollbar-thumb-bg: var(--color-base-25, oklch(31.25% 0.01000 64));
  --search-clear-button-color: var(--color-base-50, oklch(52.50% 0.01625 64));
  --search-icon-color: var(--color-base-50, oklch(52.50% 0.01625 64));
  --search-icon-size: 17px;
  --search-result-background: var(--trans-strong-10, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --secondary: var(--text-accent, var(--color-accent-1, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%)));
  --setting-group-heading-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --setting-group-heading-size: var(--font-ui-medium, 18px);
  --setting-group-heading-weight: var(--font-medium, 520);
  --setting-item-background: color-mix(in oklab, var(--background-primary) 87.5%, var(--background-secondary));
  --setting-items-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --setting-items-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --setting-items-padding: calc(var(--vl-layout-padding) + 8px);
  --setting-items-radius: calc(var(--radius-ml) + 2px);
  --settings-background: oklch(26.875% calc(var(--bsat-str) - 0.0025) var(--bhue));
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
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(71.25% 0.02438 64));
  --shiki-code-background: var(--code-background, oklch(100% 0.0375 64 / 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, oklch(52.50% 0.01625 64));
  --shiki-code-function: var(--color-green, #70ce86);
  --shiki-code-important: var(--color-orange, #e89659);
  --shiki-code-keyword: var(--color-pink, #ce93c8);
  --shiki-code-normal: var(--text-muted, oklch(71.25% 0.02438 64));
  --shiki-code-property: var(--color-cyan, #76cdbd);
  --shiki-code-punctuation: var(--text-muted, oklch(71.25% 0.02438 64));
  --shiki-code-string: var(--color-yellow, #f0c881);
  --shiki-code-value: var(--color-purple, #a291d5);
  --shiki-gutter-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --shiki-gutter-text-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(71.25% 0.02438 64));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(71.25% 0.02438 64));
  --shiki-terminal-dots-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --sidebar-left-toggle-inner-width: 12%;
  --sidebar-right-toggle-inner-width: 12%;
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(36.25% 0.01000 64));
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: 12px;
  --slider-thumb-radius: var(--slider-thumb-height, 12px);
  --slider-thumb-width: 12px;
  --slider-thumb-y: -3px;
  --slider-track-background: var(--trans-faint-40, oklch(100% 0.03 64 / 0.125));
  --slider-track-height: 20px;
  --stacked-shadow-color: var(--trans-black-10, oklch(0 0 0 / 0.1875));
  --status-bar-background: var(--background-secondary, transparent);
  --status-bar-border-color: var(--divider-color, oklch(100% 0.0375 64 / 0.0625));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0);
  --status-bar-radius: var(--radius-l) 0 0 var(--radius-l, 18px 0 0 18px);
  --status-bar-text-color: var(--text-muted, oklch(71.25% 0.02438 64));
  --strikethrough-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --suggestion-background: var(--background-primary, oklch(23.75% 0.00750 64));
  --sync-avatar-color-1: var(--color-red, #df6775);
  --sync-avatar-color-2: var(--color-orange, #e89659);
  --sync-avatar-color-3: var(--color-yellow, #f0c881);
  --sync-avatar-color-4: var(--color-green, #70ce86);
  --sync-avatar-color-5: var(--color-cyan, #76cdbd);
  --sync-avatar-color-6: var(--color-blue, #75aae2);
  --sync-avatar-color-7: var(--color-purple, #a291d5);
  --sync-avatar-color-8: var(--color-pink, #ce93c8);
  --tab-background-active: var(--background-primary, oklch(23.75% 0.00750 64));
  --tab-close-bg: oklch(calc(var(--bl-35) + 2%) var(--bsat-str) var(--bhue) / 0.875);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, oklch(36.25% 0.01000 64));
  --tab-font-weight: var(--font-normal, 420);
  --tab-max-width: 240px;
  --tab-outline-color: var(--divider-color, oklch(100% 0.0375 64 / 0.0625));
  --tab-outline-width: 0;
  --tab-radius: var(--radius-s, 8px);
  --tab-right-fade: linear-gradient(to left, oklch(var(--bl-25) calc(var(--bsat-str)*1.25) var(--bhue)) 80%, transparent);
  --tab-right-fade-alt: linear-gradient(to left, oklch(calc(var(--bl-20) + 1%) var(--bsat-str) var(--bhue)) 80%, transparent);
  --tab-sidebar-bg: var(--trans-faint-20, oklch(100% 0.0375 64 / 0.0625));
  --tab-sidebar-container-bg: var(--trans-faint-05, oklch(100% 0.045 64 / 0.025));
  --tab-stacked-font-weight: var(--font-medium, 520);
  --tab-stacked-header-width: var(--header-height, 56px);
  --tab-stacked-pane-width: var(--file-line-width, 43.75rem);
  --tab-stacked-shadow: -8px 0 8px 0 var(--stacked-shadow-color);
  --tab-switcher-background: var(--background-secondary, oklch(27.50% 0.01000 64));
  --tab-switcher-preview-radius: var(--radius-xl, 20px);
  --tab-text-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --tab-text-color-active: var(--color-base-100, oklch(93.25% 0.00250 64));
  --tab-text-color-focused: var(--icon-color, oklch(63.75% 0.02438 64));
  --tab-text-color-focused-active: var(--color-base-100, oklch(93.25% 0.00250 64));
  --tab-text-color-focused-active-current: var(--color-base-100, oklch(93.25% 0.00250 64));
  --tab-text-color-focused-highlighted: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --table-border-color: var(--trans-faint-30, oklch(100% 0.05625 64 / 0.1));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(27, 60%, 44%));
  --table-drag-handle-color: var(--text-faint, oklch(52.50% 0.01625 64));
  --table-header-border-color: var(--table-border-color, oklch(100% 0.05625 64 / 0.1));
  --table-header-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --table-header-size: var(--table-text-size, 0.90625em);
  --table-header-weight: var(--font-medium, 520);
  --table-line-height: var(--line-height-normal, 1.6);
  --table-row-alt-background: var(--table-row-bg, oklch(100% 0.05625 64 / 0.015));
  --table-row-alt-background-hover: var(--table-row-bg, oklch(100% 0.05625 64 / 0.015));
  --table-row-bg: var(--trans-faint-00, oklch(100% 0.05625 64 / 0.015));
  --table-selection-border-color: var(--interactive-accent, hsl(27, 60%, 44%));
  --table-text-size: var(--font-small, 0.90625em);
  --table-text-weight: var(--font-normal, 420);
  --tag-border-color: oklch(from var(--interactive-accent) l c h / 0.025);
  --tag-color: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --tag-color-hover: var(--text-accent, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --tag-padding-x: 0.6875em;
  --tag-padding-y: 0.3125em;
  --tag-size: var(--font-smallest, 0.8em);
  --tag-weight: var(--font-semi-medium, 490);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%)));
  --text-accent: var(--color-accent-1, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --text-accent-hover: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --text-error: var(--color-red, #df6775);
  --text-faint: var(--color-base-50, oklch(52.50% 0.01625 64));
  --text-highlight-bg: oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33);
  --text-highlight-bg-rgb: var(--color-highlight-rgb, 240, 200, 129);
  --text-highlight-bg-search: oklch(from var(--color-highlight) 0.875 calc(c * 1.375) h / 0.625);
  --text-muted: var(--color-base-70, oklch(71.25% 0.02438 64));
  --text-normal: var(--color-base-90, oklch(85.00% 0.01000 64));
  --text-selection: oklab(from var(--color-accent) l a b / 0.25);
  --text-success: var(--color-green, #70ce86);
  --text-warning: var(--color-orange, #e89659);
  --textHighlight: var(--text-highlight-bg, oklch(from var(--color-highlight) 0.8 calc(c * 1.375) h / 0.33));
  --titleFont: var(--font-text-theme, "Raveo", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, oklch(100% 0.0375 64 / 0.0625));
  --titlebar-height: 36px;
  --titlebar-text-color: var(--trans-faint-60, oklch(100% 0.015 64 / 0.35));
  --titlebar-text-color-focused: var(--text-muted, oklch(71.25% 0.02438 64));
  --titlebar-text-weight: var(--font-semibold, 620);
  --toggle-border-width: 4px;
  --toggle-gradient: linear-gradient(to bottom, var(--color-accent) -30%, var(--color-accent-4) 180%);
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 36px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --toggle-track-bg: var(--trans-faint-50, oklch(100% 0.015 64 / 0.2));
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
  --vault-profile-color: var(--icon-color, oklch(63.75% 0.02438 64));
  --vault-profile-color-hover: var(--text-muted, oklch(71.25% 0.02438 64));
  --vault-profile-font-size: var(--font-ui-small, 18px);
  --vault-profile-font-weight: var(--font-normal, 420);
  --vl-ease-out: cubic-bezier(0.3, 0.75, 0, 1);
  --vl-layout-padding: 8px;
  --warning-gradient: linear-gradient(to top, var(--color-red) -30%, var(--trans-strong-20) 180%);
  --workspace-border-color: var(--trans-faint-25, oklch(100% 0.0375 64 / 0.08125));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-form-field: var(--search-result-background, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --bases-table-header-background: var(--background-secondary, oklch(27.50% 0.01000 64));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(1 0.0375 64 / 0.0625);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --background-modifier-form-field: var(--search-result-background, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  --bases-table-header-background: var(--background-secondary, oklch(27.50% 0.01000 64));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: oklch(1 0.0375 64 / 0.0625);
  color: oklch(0.85 0.01 64);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(0.9325 0.0025 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0.0025 64) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 64);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(0.85 0.01 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01 64) none 0px;
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(0.85 0.01 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01 64) none 0px;
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(0.9325 0.0025 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9325 0.0025 64) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 64);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, oklch(0.8 0.137558 81.0803 / 0.33));
  color: var(--text-normal, oklch(0.9325 0.0025 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.9325 0.0025 64) none 0px;
  text-decoration-color: oklch(0.9325 0.0025 64);
}

html[saved-theme="dark"] body del {
  --bold-color: var(--strikethrough-color, oklch(52.50% 0.01625 64));
  --italic-color: var(--strikethrough-color, oklch(52.50% 0.01625 64));
  --text-highlight-bg: var(--hr-color, oklch(100% 0.05625 64 / 0.1));
  color: var(--strikethrough-color, oklch(0.525 0.01625 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.525 0.01625 64) none 0px;
  text-decoration-color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 50%;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  background-color: var(--checkbox-color, rgb(180, 105, 45));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.7125 0.024375 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.7125 0.024375 64) none 0px;
  text-decoration-color: oklch(0.7125 0.024375 64);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-external-color, oklab(0.740346 0.0424797 0.0641277));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.740346 0.0424797 0.0641277) none 0px;
  text-decoration-color: oklab(0.740346 0.0424797 0.0641277);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  --font-weight: var(--link-weight, 420);
  color: var(--link-color, oklab(0.740346 0.0424797 0.0641277));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklab(0.740346 0.0424797 0.0641277) none 0px;
  text-decoration-color: oklab(0.740346 0.0424797 0.0641277);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  --font-weight: var(--link-weight, 420);
  color: var(--link-unresolved-color, oklch(0.740346 0.0769213 56.4786 / 0.75));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 420);
  outline: oklch(0.740346 0.0769213 56.4786 / 0.75) none 0px;
  text-decoration: rgba(180, 105, 45, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(180, 105, 45, 0.3));
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body dt {
  color: oklch(0.85 0.01 64);
  font-weight: 420;
}

html[saved-theme="dark"] body ol > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body ul > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  --font-weight: var(--link-weight, 420);
  color: var(--text-faint, oklch(0.525 0.01625 64));
}

html[saved-theme="dark"] body blockquote {
  --bold-color: var(--blockquote-color, oklch(71.25% 0.02438 64));
  --italic-color: var(--blockquote-color, oklch(71.25% 0.02438 64));
  --math-color: color-mix(in oklab, var(--blockquote-color), var(--color-base-80));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body table {
  color: oklch(0.85 0.01 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 18px);
  width: 700px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, oklch(1 0.05625 64 / 0.015));
}

html[saved-theme="dark"] body td {
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-width: 0px;
  border-left-color: oklch(0.85 0.01 64);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.85 0.01 64);
  border-right-width: 0px;
  border-top-color: oklch(0.85 0.01 64);
  border-top-width: 0px;
  color: var(--table-text-color, oklch(0.85 0.01 64));
  font-weight: var(--font-normal, 420);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: oklch(1 0.05625 64 / 0.1);
  border-bottom-width: 2px;
  border-left-color: oklch(0.6375 0.024375 64);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: oklch(0.6375 0.024375 64);
  border-right-width: 0px;
  border-top-color: oklch(0.6375 0.024375 64);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, oklch(0.6375 0.024375 64));
  font-weight: var(--table-header-weight, 520);
  padding-left: 12px;
  padding-right: 12px;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, oklch(1 0.0375 64 / 0.05));
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, oklch(0.85 0.01 64));
  padding-left: 6px;
  padding-right: 6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  --code-radius: var(--radius-sm, 10px);
  background-color: var(--code-background, oklch(1 0.0375 64 / 0.05));
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.85 0.01 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(100% 0.0375 64 / 0.05));
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.895 0.0025 64);
  border-bottom-left-radius: var(--radius-xs, 10px);
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.895 0.0025 64);
  border-radius: 10px;
  border-right-color: oklch(0.895 0.0025 64);
  border-top-color: oklch(0.895 0.0025 64);
  border-top-left-radius: var(--radius-xs, 10px);
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: oklch(0.85 0.01 64);
  border-radius: 10px;
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklab(0.25625 0.00383575 0.00786445));
  border-bottom-color: oklch(0.7125 0.024375 64);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(0.7125 0.024375 64);
  border-right-color: oklch(0.7125 0.024375 64);
  border-top-color: oklch(0.7125 0.024375 64);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.85 0.01 64);
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-left-width: 0px;
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
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
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  --bold-color: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --italic-color: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  --text-normal: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  color: oklch(0.525 0.01625 64);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  --bold-color: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --code-normal: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --italic-color: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  --text-normal: var(--checklist-done-color, oklch(52.50% 0.01625 64));
  color: oklch(0.525 0.01625 64);
  text-decoration: line-through;
  text-decoration-color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
  color: oklch(0.85 0.01 64);
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(77.50% 0.02438 64));
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
  background-color: rgb(232, 150, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 200, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(118, 205, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyLjYyNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXJpZ2h0LWljb24gbHVjaWRlLWNoZXZyb24tcmlnaHQiPjxwYXRoIGQ9Im05IDE4IDYtNi02LTYiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 103, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 103, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 103, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXgtaWNvbiBsdWNpZGUteCI+PHBhdGggZD0iTTE4IDYgNiAxOCIvPjxwYXRoIGQ9Im02IDYgMTIgMTIiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 103, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 200, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 200, 129);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(162, 145, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 103, 117);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 206, 134);
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
  background-color: rgb(112, 206, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 206, 134);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 118, 205, 189);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(118, 205, 189, 0.063), rgba(118, 205, 189, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(118, 205, 189, 0.063), rgba(118, 205, 189, 0.114));
  border-bottom-color: rgba(118, 205, 189, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(118, 205, 189, 0.24);
  border-right-color: rgba(118, 205, 189, 0.24);
  border-top-color: rgba(118, 205, 189, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 206, 147, 200);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(206, 147, 200, 0.063), rgba(206, 147, 200, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(206, 147, 200, 0.063), rgba(206, 147, 200, 0.114));
  border-bottom-color: rgba(206, 147, 200, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(206, 147, 200, 0.24);
  border-right-color: rgba(206, 147, 200, 0.24);
  border-top-color: rgba(206, 147, 200, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 223, 103, 117);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(223, 103, 117, 0.063), rgba(223, 103, 117, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(223, 103, 117, 0.063), rgba(223, 103, 117, 0.114));
  border-bottom-color: rgba(223, 103, 117, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(223, 103, 117, 0.24);
  border-right-color: rgba(223, 103, 117, 0.24);
  border-top-color: rgba(223, 103, 117, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 162, 145, 213);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(162, 145, 213, 0.063), rgba(162, 145, 213, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(162, 145, 213, 0.063), rgba(162, 145, 213, 0.114));
  border-bottom-color: rgba(162, 145, 213, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(162, 145, 213, 0.24);
  border-right-color: rgba(162, 145, 213, 0.24);
  border-top-color: rgba(162, 145, 213, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 223, 103, 117);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(223, 103, 117, 0.063), rgba(223, 103, 117, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(223, 103, 117, 0.063), rgba(223, 103, 117, 0.114));
  border-bottom-color: rgba(223, 103, 117, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(223, 103, 117, 0.24);
  border-right-color: rgba(223, 103, 117, 0.24);
  border-top-color: rgba(223, 103, 117, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 117, 170, 226);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114));
  border-bottom-color: rgba(117, 170, 226, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(117, 170, 226, 0.24);
  border-right-color: rgba(117, 170, 226, 0.24);
  border-top-color: rgba(117, 170, 226, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 117, 170, 226);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114));
  border-bottom-color: rgba(117, 170, 226, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(117, 170, 226, 0.24);
  border-right-color: rgba(117, 170, 226, 0.24);
  border-top-color: rgba(117, 170, 226, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 232, 150, 89);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(232, 150, 89, 0.063), rgba(232, 150, 89, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(232, 150, 89, 0.063), rgba(232, 150, 89, 0.114));
  border-bottom-color: rgba(232, 150, 89, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(232, 150, 89, 0.24);
  border-right-color: rgba(232, 150, 89, 0.24);
  border-top-color: rgba(232, 150, 89, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 150, 150, 160);
  --text-normal: var(--blockquote-color, oklch(71.25% 0.02438 64));
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
  color: var(--text-normal, oklch(0.7125 0.024375 64));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 112, 206, 134);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(112, 206, 134, 0.063), rgba(112, 206, 134, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(112, 206, 134, 0.063), rgba(112, 206, 134, 0.114));
  border-bottom-color: rgba(112, 206, 134, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(112, 206, 134, 0.24);
  border-right-color: rgba(112, 206, 134, 0.24);
  border-top-color: rgba(112, 206, 134, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 118, 205, 189);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(118, 205, 189, 0.063), rgba(118, 205, 189, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(118, 205, 189, 0.063), rgba(118, 205, 189, 0.114));
  border-bottom-color: rgba(118, 205, 189, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(118, 205, 189, 0.24);
  border-right-color: rgba(118, 205, 189, 0.24);
  border-top-color: rgba(118, 205, 189, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 117, 170, 226);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(117, 170, 226, 0.063), rgba(117, 170, 226, 0.114));
  border-bottom-color: rgba(117, 170, 226, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(117, 170, 226, 0.24);
  border-right-color: rgba(117, 170, 226, 0.24);
  border-top-color: rgba(117, 170, 226, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
  padding-left: 28px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 240, 200, 129);
  background: rgba(0, 0, 0, 0) radial-gradient(180% 60% at 50% 0%, rgba(240, 200, 129, 0.063), rgba(240, 200, 129, 0.114)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(180% 60% at 50% 0%, rgba(240, 200, 129, 0.063), rgba(240, 200, 129, 0.114));
  border-bottom-color: rgba(240, 200, 129, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(240, 200, 129, 0.24);
  border-right-color: rgba(240, 200, 129, 0.24);
  border-top-color: rgba(240, 200, 129, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 117, 170, 226;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(117, 170, 226);
  border-left-color: rgb(117, 170, 226);
  border-right-color: rgb(117, 170, 226);
  border-top-color: rgb(117, 170, 226);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(117, 170, 226));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(77.50% 0.02438 64));
  --code-background: var(--code-background-alt, oklch(from oklch(24.00% 0.00250 64) l 0.01000 h / 0.375));
  color: oklch(0.85 0.01 64);
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
  --shadow-input: var(--shadow-sidebar, 0px 0px 12px 0px oklch(from oklch(27.50% 0.01000 64) l 0.01000 h / 0.5));
  background-color: oklch(0.24 0.01 64 / 0.375);
  border-bottom-color: oklch(1 0.0375 64 / 0.0625);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.0375 64 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.0375 64 / 0.0625);
  border-right-width: 0px;
  border-top-color: oklch(1 0.0375 64 / 0.0625);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: var(--text-normal, oklch(0.85 0.01 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.2775 0.01 64 / 0.625));
  border-bottom-color: oklch(1 0.03 64 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.03 64 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.03 64 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.03 64 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
  box-shadow: var(--glass-base-l),var(--shadow-strong);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.85 0.01 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
  outline: oklch(0.85 0.01 64) none 0px;
  text-decoration-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.0375 64 / 0.05));
  color: var(--text-normal, oklch(0.85 0.01 64));
  font-weight: var(--font-normal, 420);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(1 0.03 64 / 0.125);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-bottom-width: 0px;
  border-left-color: oklch(1 0.03 64 / 0.125);
  border-left-width: 0px;
  border-right-color: oklch(1 0.03 64 / 0.125);
  border-right-width: 0px;
  border-top-color: oklch(1 0.03 64 / 0.125);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, oklch(1 0.0375 64 / 0.05));
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, oklch(1 0.0375 64 / 0.05));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(27, 60%, 44%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(27, 60%, 44%, 0.2));
  --pill-border-color: var(--tag-border-color, oklch(from hsl(27, 60%, 44%) l c h / 0.025));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(27, 60%, 44%, 0.15));
  --pill-color: var(--tag-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --pill-color-hover: var(--tag-color-hover, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(180, 105, 45, 0.1));
  border-bottom-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-left-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-right-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-top-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: oklab(0.740346 0.0424797 0.0641277);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 330);
  color: var(--h1-color, oklch(0.895 0.0025 64));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.895 0.0025 64));
  font-size: var(--inline-title-size, 32px);
  font-weight: var(--inline-title-weight, 330);
}

html[saved-theme="dark"] body h1::after {
  --font-weight: var(--h1-weight, 330);
  background: oklch(1 0.05625 64 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0.05625 64 / 0.1);
  border-bottom-color: oklch(0.895 0.0025 64);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.895 0.0025 64);
  border-left-width: 0px;
  border-right-color: oklch(0.895 0.0025 64);
  border-right-width: 0px;
  border-top-color: oklch(0.895 0.0025 64);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--h1-color, oklch(0.895 0.0025 64));
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
  color: var(--h2-color, oklch(0.8825 0.0025 64));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.895 0.0025 64));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a::after {
  background: oklch(1 0.05625 64 / 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(1 0.05625 64 / 0.1);
  border-bottom-color: oklch(0.895 0.0025 64);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-bottom-width: 0px;
  border-left-color: oklch(0.895 0.0025 64);
  border-left-width: 0px;
  border-right-color: oklch(0.895 0.0025 64);
  border-right-width: 0px;
  border-top-color: oklch(0.895 0.0025 64);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-top-width: 0px;
  color: var(--inline-title-color, oklch(0.895 0.0025 64));
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
  color: var(--h3-color, oklch(0.85 0.01 64));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  color: var(--h4-color, oklch(0.85 0.01 64));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  --h1-weight: var(--h1-weight-alt, 330);
  color: var(--h5-color, oklch(0.85 0.01 64));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 670);
  color: var(--h6-color, oklch(0.775 0.024375 64));
  font-family: var(--h6-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: oklch(1 0.0375 64 / 0.0625);
  border-left-color: oklch(1 0.0375 64 / 0.0625);
  border-right-color: oklch(1 0.0375 64 / 0.0625);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 117, 170, 226);
  border-bottom-color: rgba(117, 170, 226, 0.24);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(117, 170, 226, 0.24);
  border-right-color: rgba(117, 170, 226, 0.24);
  border-top-color: rgba(117, 170, 226, 0.24);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: oklch(1 0.05625 64 / 0.1);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, oklab(0.740346 0.0424797 0.0641277));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  color: var(--nav-item-color, oklab(0.740346 0.0424797 0.0641277));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--nav-item-weight, 490);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.depth-0 {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  --nav-item-color: var(--color-base-80, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-active: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-color-hover: var(--nav-item-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --nav-item-weight: var(--font-semi-medium, 490);
  --nav-item-weight-active: var(--font-semi-medium, 490);
  --nav-item-weight-hover: var(--font-semi-medium, 490);
  font-weight: var(--nav-item-weight, 490);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.6375 0.024375 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.6375 0.024375 64);
  border-right-color: oklch(0.6375 0.024375 64);
  border-top-color: oklch(0.6375 0.024375 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, oklch(0.6375 0.024375 64));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(1 0.0375 64 / 0.0625);
  border-bottom-left-radius: 18px;
  border-left-color: oklch(1 0.0375 64 / 0.0625);
  border-left-width: 0px;
  border-right-color: oklch(1 0.0375 64 / 0.0625);
  border-top-color: oklch(1 0.0375 64 / 0.0625);
  border-top-left-radius: 18px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, oklch(0.7125 0.024375 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  --background-modifier-hover: var(--hr-color, oklch(100% 0.05625 64 / 0.1));
  color: oklch(0.7125 0.024375 64);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.85 0.01 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 420;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.7125 0.024375 64));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.7125 0.024375 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.7125 0.024375 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-background-hover: oklab(from var(--trans-faint-20) l a b / 0.025);
  color: var(--nav-item-color, oklch(0.7125 0.024375 64));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.775 0.024375 64);
  border-bottom-left-radius: 22px;
  border-bottom-right-radius: 22px;
  border-left-color: oklch(0.775 0.024375 64);
  border-right-color: oklch(0.775 0.024375 64);
  border-top-color: oklch(0.775 0.024375 64);
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  color: var(--icon-color, oklch(0.775 0.024375 64));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.775 0.024375 64);
  stroke: oklch(0.775 0.024375 64);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.525 0.01625 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.525 0.01625 64);
  border-right-color: oklch(0.525 0.01625 64);
  border-top-color: oklch(0.525 0.01625 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.525 0.01625 64);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.525 0.01625 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--trans-strong-20, oklch(0.275 0.01 64 / 0.5));
  border-color: oklch(0.85 0.01 64);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, oklch(1 0.05625 64 / 0.015));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: oklch(0.6375 0.024375 64) oklch(0.6375 0.024375 64) oklch(1 0.05625 64 / 0.1);
  color: var(--table-header-color, oklch(0.6375 0.024375 64));
  font-weight: var(--table-header-weight, 520);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-bottom-color: oklch(1 0.0375 64 / 0.0625);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: oklch(1 0.0375 64 / 0.0625);
  border-right-color: oklch(1 0.0375 64 / 0.0625);
  border-top-color: oklch(1 0.0375 64 / 0.0625);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--text-muted, oklch(0.7125 0.024375 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.7125 0.024375 64);
  border-left-color: oklch(0.7125 0.024375 64);
  border-right-color: oklch(0.7125 0.024375 64);
  border-top-color: oklch(0.7125 0.024375 64);
  color: oklch(0.7125 0.024375 64);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  --input-height: var(--metadata-input-height, 2.125rem);
  border-color: oklch(1 0.0375 64 / 0.0625);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.7125 0.024375 64);
  font-weight: 420;
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.7125 0.024375 64);
}

html[saved-theme="dark"] body .note-properties-tags {
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  --pill-background: var(--tag-background, hsla(27, 60%, 44%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(27, 60%, 44%, 0.2));
  --pill-border-color: var(--tag-border-color, oklch(from hsl(27, 60%, 44%) l c h / 0.025));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(27, 60%, 44%, 0.15));
  --pill-color: var(--tag-color, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --pill-color-hover: var(--tag-color-hover, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%));
  --pill-color-remove: var(--color-accent-2, color-mix(in oklab, color-mix(in oklab, hsl(27, 60%, 44%) 64%, #fff 36%), transparent 8%));
  --pill-padding-x: var(--tag-padding-x, 0.75em 0.375em);
  --pill-radius: var(--tag-radius, 2em);
  --pill-weight: var(--tag-weight, 490);
  background-color: var(--pill-background, rgba(180, 105, 45, 0.1));
  color: var(--pill-color, oklab(0.740346 0.0424797 0.0641277));
}

html[saved-theme="dark"] body .note-properties-value {
  --input-padding: var(--metadata-input-padding, 6px 8px);
  color: oklch(0.7125 0.024375 64);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-modifier-cover, oklch(0.2375 0.0075 64));
  color: var(--text-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(0.85 0.01 64);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, oklch(0.85 0.01 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.6375 0.024375 64);
  border-left-color: oklch(0.6375 0.024375 64);
  border-right-color: oklch(0.6375 0.024375 64);
  border-top-color: oklch(0.6375 0.024375 64);
  color: var(--text-normal, oklch(0.6375 0.024375 64));
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(1 0.0375 64 / 0.05));
  border-bottom-color: oklch(0.85 0.01 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, oklch(0.85 0.01 64));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.85 0.01 64);
  border-left-color: oklch(0.85 0.01 64);
  border-right-color: oklch(0.85 0.01 64);
  border-top-color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body summary {
  color: oklch(0.85 0.01 64);
  font-weight: 420;
}

html[saved-theme="dark"] body sup {
  color: oklch(0.85 0.01 64);
}

html[saved-theme="dark"] body ul.tags > li {
  --font-weight: var(--link-weight, 420);
  --tag-padding-y: var(--pill-padding-y, 0.25em);
  --tag-size: var(--metadata-input-font-size, 0.875em);
  background-color: var(--tag-background, rgba(180, 105, 45, 0.1));
  border-bottom-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-left-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-right-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  border-top-color: oklch(0.594294 0.120166 56.4858 / 0.025);
  color: var(--tag-color, oklab(0.740346 0.0424797 0.0641277));
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
  --quartz-icon-color: currentColor;
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
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body dt {
  color: oklch(0.3 0.0005 281);
  font-weight: 420;
}

html[saved-theme="light"] body ol > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
}

html[saved-theme="light"] body ul > li {
  --checkbox-color-hover: oklab(from var(--checkbox-color) calc(l * 1.125) a b);
  --list-marker-color: var(--list-bullet-color, oklch(55.75% 0.0105 281));
  color: oklch(0.3 0.0005 281);
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
  --callout-color: 31, 132, 255;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
  color: oklch(0.3 0.0005 281);
  padding-left: 28px;
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
  --callout-color: 31, 132, 255;
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  --icon-stroke: var(--icon-xs-stroke-width, 2.125px);
  border-bottom-color: rgb(31, 132, 255);
  border-left-color: rgb(31, 132, 255);
  border-right-color: rgb(31, 132, 255);
  border-top-color: rgb(31, 132, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 670);
  color: var(--callout-title-color, rgb(31, 132, 255));
  font-weight: var(--font-semibold, 620);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  --blockquote-border-color: rgb(var(--callout-color), 0.75);
  --blockquote-color: var(--color-base-80, oklch(40% 0.0025 281));
  --code-background: var(--code-background-alt, oklch(100% 0 0 / 0.75));
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
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 490);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(10, 124, 255);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 330);
  color: var(--h1-color, oklch(0.24 0.0005 281));
  font-family: var(--h1-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  color: var(--h2-color, oklch(0.3 0.0005 281));
  font-family: var(--h2-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, oklch(0.24 0.0005 281));
  font-family: var(--inline-title-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  color: var(--h3-color, oklch(0.3 0.0005 281));
  font-family: var(--h3-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 570);
  --h1-weight: var(--h1-weight-alt, 330);
  color: var(--h4-color, oklch(0.3 0.0005 281));
  font-family: var(--h4-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  --h1-weight: var(--h1-weight-alt, 330);
  color: var(--h5-color, oklch(0.4 0.0025 281));
  font-family: var(--h5-font, Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 670);
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: oklch(0.465 0.0105 281);
  border-left-color: oklch(0.465 0.0105 281);
  border-right-color: oklch(0.465 0.0105 281);
  border-top-color: oklch(0.465 0.0105 281);
  color: oklch(0.465 0.0105 281);
  font-family: Raveo, Raveo, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
};
