import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "auger", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 175;
  --accent-l: 65%;
  --accent-s: 57%;
  --auger-light-background-primary: #fbfbfa;
  --auger-light-text-normal: #3a3633;
  --background-modifier-border: var(--color-base-30, #3a3a3c);
  --background-modifier-border-focus: var(--color-base-40, oklch(36.51% 0.0043 67.5809));
  --background-modifier-border-hover: var(--color-base-35, oklch(32.14% 0.0037 84.5916));
  --background-modifier-error: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --background-modifier-error-hover: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --background-modifier-error-rgb: var(--color-red-rgb, 209, 77, 65);
  --background-modifier-form-field: var(--color-base-25, oklch(27.34% 0.0023 67.5746));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(27.34% 0.0023 67.5746));
  --background-modifier-success: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --background-modifier-success-rgb: var(--color-green-rgb, 135, 154, 57);
  --background-primary: var(--color-base-10, oklch(22.28% 0.0025 67.5819));
  --background-primary-alt: var(--color-base-20, oklch(22.28% 0.0025 67.5819));
  --background-secondary: var(--color-base-25, oklch(27.34% 0.0023 67.5746));
  --background-secondary-alt: var(--color-base-35, oklch(32.14% 0.0037 84.5916));
  --bases-cards-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --bases-cards-cover-background: var(--background-primary-alt, oklch(22.28% 0.0025 67.5819));
  --bases-embed-border-color: var(--background-modifier-border, #3a3a3c);
  --bases-group-heading-property-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --bases-table-border-color: var(--table-border-color, #3a3a3c);
  --bases-table-cell-background-active: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --bases-table-cell-background-disabled: var(--background-primary-alt, oklch(22.28% 0.0025 67.5819));
  --bases-table-cell-background-selected: var(--table-selection, hsla(175, 57%, 65%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, oklch(22.28% 0.0025 67.5819));
  --bases-table-header-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --bases-table-header-background-hover: var(--background-modifier-hover, #3a3a3c);
  --bases-table-header-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --bases-table-summary-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --bases-table-summary-background-hover: var(--background-modifier-hover, #3a3a3c);
  --blockquote-border-color: var(--interactive-accent, hsl(175 57% 65%));
  --bold-color: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --callout-bug: var(--color-red-rgb, 209, 77, 65);
  --callout-default: var(--color-blue-rgb, 67, 133, 190);
  --callout-error: var(--color-red-rgb, 209, 77, 65);
  --callout-example: var(--color-purple-rgb, 139, 126, 200);
  --callout-fail: var(--color-red-rgb, 209, 77, 65);
  --callout-important: var(--color-cyan-rgb, 58, 169, 159);
  --callout-info: var(--color-blue-rgb, 67, 133, 190);
  --callout-question: var(--color-orange-rgb, 218, 112, 44);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 135, 154, 57);
  --callout-summary: var(--color-cyan-rgb, 58, 169, 159);
  --callout-tip: var(--color-cyan-rgb, 58, 169, 159);
  --callout-todo: var(--color-blue-rgb, 67, 133, 190);
  --callout-warning: var(--color-orange-rgb, 218, 112, 44);
  --canvas-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --canvas-card-label-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --canvas-color-1: var(--color-red-rgb, 209, 77, 65);
  --canvas-color-2: var(--color-orange-rgb, 218, 112, 44);
  --canvas-color-3: var(--color-yellow-rgb, 208, 162, 21);
  --canvas-color-4: var(--color-green-rgb, 135, 154, 57);
  --canvas-color-5: var(--color-cyan-rgb, 58, 169, 159);
  --canvas-color-6: var(--color-purple-rgb, 139, 126, 200);
  --canvas-dot-pattern: var(--color-base-30, oklch(27.34% 0.0023 67.5746));
  --caret-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --checkbox-border-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --checkbox-border-color-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --checkbox-color: var(--interactive-accent, hsl(175 57% 65%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(172, 58.14%, 74.75%));
  --checkbox-marker-color: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --checklist-done-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --code-background: var(--background-primary-alt, oklch(22.28% 0.0025 67.5819));
  --code-border-color: var(--background-modifier-border, #3a3a3c);
  --code-bracket-background: var(--background-modifier-hover, #3a3a3c);
  --code-comment: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --code-function: var(--color-yellow, oklch(73.46% 0.1461 87.4626));
  --code-important: var(--color-orange, oklch(65.76% 0.1539 49.2911));
  --code-keyword: var(--color-pink, oklch(63.48% 0.1565 350.4570));
  --code-normal: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --code-operator: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --code-property: var(--color-cyan, oklch(67.01% 0.0999 186.6127));
  --code-punctuation: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --code-string: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --code-tag: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --code-value: var(--color-purple, oklch(63.48% 0.1099 290.9867));
  --collapse-icon-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(175 57% 65%));
  --color-base-00: oklch(16.96% 0.0017 16.8596);
  --color-base-05: oklch(16.96% 0.0017 16.8596);
  --color-base-10: oklch(22.28% 0.0025 67.5819);
  --color-base-100: oklch(84.63% 0.0136 102.1557);
  --color-base-20: oklch(22.28% 0.0025 67.5819);
  --color-base-25: oklch(27.34% 0.0023 67.5746);
  --color-base-30: oklch(27.34% 0.0023 67.5746);
  --color-base-35: oklch(32.14% 0.0037 84.5916);
  --color-base-40: oklch(36.51% 0.0043 67.5809);
  --color-base-50: oklch(45.31% 0.0049 91.5721);
  --color-base-60: oklch(53.75% 0.0077 97.5372);
  --color-base-70: oklch(61.69% 0.0077 88.7146);
  --color-blue: oklch(59.88% 0.1105 247.0083);
  --color-blue-rgb: 67, 133, 190;
  --color-cyan: oklch(67.01% 0.0999 186.6127);
  --color-cyan-rgb: 58, 169, 159;
  --color-green: oklch(65.13% 0.1241 119.4018);
  --color-green-rgb: 135, 154, 57;
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-orange: oklch(65.76% 0.1539 49.2911);
  --color-orange-rgb: 218, 112, 44;
  --color-paper: oklch(0.9901 0.0161 95.22);
  --color-pink: oklch(63.48% 0.1565 350.4570);
  --color-pink-rgb: 206, 93, 151;
  --color-purple: oklch(63.48% 0.1099 290.9867);
  --color-purple-rgb: 139, 126, 200;
  --color-red: oklch(59.71% 0.1691 28.3687);
  --color-red-rgb: 209, 77, 65;
  --color-white: #fff;
  --color-yellow: oklch(73.46% 0.1461 87.4626);
  --color-yellow-rgb: 208, 162, 21;
  --dark: var(--text-normal, var(--color-paper, oklch(0.9901 0.0161 95.22)));
  --darkgray: var(--text-normal, var(--color-paper, oklch(0.9901 0.0161 95.22)));
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --divider-color: var(--background-modifier-border, #3a3a3c);
  --divider-color-hover: var(--interactive-accent, hsl(175 57% 65%));
  --dropdown-background: var(--interactive-normal, oklch(27.34% 0.0023 67.5746));
  --dropdown-background-hover: var(--interactive-hover, oklch(32.14% 0.0037 84.5916));
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --file-header-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --file-header-background-focused: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --flair-background: var(--interactive-normal, oklch(27.34% 0.0023 67.5746));
  --flair-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --font-mono: var(--font-monospace-override), var(--font-monospace-default);
  --font-sans: var(--font-interface-override), var(--font-default);
  --font-weight-medium: 500;
  --footnote-divider-color: var(--metadata-divider-color, #3a3a3c);
  --footnote-id-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --footnote-input-background-active: var(--metadata-input-background-active, #3a3a3c);
  --graph-node: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --graph-node-attachment: var(--color-yellow, oklch(73.46% 0.1461 87.4626));
  --graph-node-focused: var(--text-accent, hsl(175 57% 65%));
  --graph-node-tag: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --graph-node-unresolved: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --graph-text: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --gray: var(--text-muted, var(--color-base-100, oklch(84.63% 0.0136 102.1557)));
  --header-height: 60px;
  --heading-formatting: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --highlight: var(--text-highlight-bg, hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.2));
  --hr-color: var(--background-modifier-border, #3a3a3c);
  --icon-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --icon-color-active: var(--text-accent, hsl(175 57% 65%));
  --icon-color-focused: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --icon-color-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --inline-title-size: var(--h1-size, 3rem);
  --inline-title-weight: var(--h1-weight, 400);
  --input-date-separator: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --input-placeholder-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --interactive-accent: var(--text-accent, hsl(175 57% 65%));
  --interactive-accent-hover: var(--color-accent-1, hsl(172, 58.14%, 74.75%));
  --interactive-accent-hsl: var(--color-accent-hsl, 175, 57%, 65%);
  --interactive-hover: var(--color-base-35, oklch(32.14% 0.0037 84.5916));
  --interactive-normal: var(--color-base-30, oklch(27.34% 0.0023 67.5746));
  --italic-color: var(--color-yellow, oklch(73.46% 0.1461 87.4626));
  --leading-relaxed: 1.625;
  --light: var(--background-primary, var(--color-base-10, oklch(22.28% 0.0025 67.5819)));
  --lightgray: var(--background-secondary, var(--color-base-25, oklch(27.34% 0.0023 67.5746)));
  --link-color: var(--text-accent, hsl(175 57% 65%));
  --link-color-hover: var(--text-accent-hover, hsl(175 57% 75%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(175 57% 65%));
  --link-external-color-hover: var(--text-accent-hover, hsl(175 57% 75%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl(175 57% 65%));
  --list-marker-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --list-marker-color-collapsed: var(--text-accent, hsl(175 57% 65%));
  --list-marker-color-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --menu-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --menu-border-color: var(--background-modifier-border-hover, oklch(32.14% 0.0037 84.5916));
  --metadata-border-color: var(--background-modifier-border, #3a3a3c);
  --metadata-divider-color: var(--background-modifier-border, #3a3a3c);
  --metadata-input-background-active: var(--background-modifier-hover, #3a3a3c);
  --metadata-input-text-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --metadata-label-background-active: var(--background-modifier-hover, #3a3a3c);
  --metadata-label-text-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --metadata-label-text-color-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --metadata-property-background-active: var(--background-modifier-hover, #3a3a3c);
  --modal-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --nav-collapse-icon-color: var(--collapse-icon-color, oklch(45.31% 0.0049 91.5721));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --nav-heading-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --nav-heading-color-collapsed: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --nav-heading-color-collapsed-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --nav-heading-color-hover: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --nav-item-background-active: var(--background-modifier-hover, #3a3a3c);
  --nav-item-background-hover: var(--background-modifier-hover, #3a3a3c);
  --nav-item-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --nav-item-color-active: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --nav-item-color-highlighted: var(--text-accent, hsl(175 57% 65%));
  --nav-item-color-hover: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --nav-item-color-selected: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --nav-tag-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --nav-tag-color-active: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --nav-tag-color-hover: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --pdf-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --pdf-page-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --pdf-sidebar-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --pill-border-color: var(--background-modifier-border, #3a3a3c);
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(32.14% 0.0037 84.5916));
  --pill-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --pill-color-hover: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --pill-color-remove: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --pill-color-remove-hover: var(--text-accent, hsl(175 57% 65%));
  --prompt-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --raised-background: var(--blur-background, color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent) linear-gradient(oklch(27.34% 0.0023 67.5746), color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent)));
  --ribbon-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --ribbon-background-collapsed: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --search-clear-button-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --search-icon-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --search-result-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --secondary: var(--text-accent, hsl(var(--accent-h) var(--accent-s) var(--accent-l)));
  --setting-group-heading-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --setting-items-background: var(--background-primary-alt, oklch(22.28% 0.0025 67.5819));
  --setting-items-border-color: var(--background-modifier-border, #3a3a3c);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, oklch(84.63% 0.0136 102.1557));
  --shiki-code-background: var(--code-background, oklch(22.28% 0.0025 67.5819));
  --shiki-code-comment: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --shiki-code-function: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --shiki-code-important: var(--color-orange, oklch(65.76% 0.1539 49.2911));
  --shiki-code-keyword: var(--color-pink, oklch(63.48% 0.1565 350.4570));
  --shiki-code-normal: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --shiki-code-property: var(--color-cyan, oklch(67.01% 0.0999 186.6127));
  --shiki-code-punctuation: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --shiki-code-string: var(--color-yellow, oklch(73.46% 0.1461 87.4626));
  --shiki-code-value: var(--color-purple, oklch(63.48% 0.1099 290.9867));
  --shiki-gutter-border-color: var(--background-modifier-border, #3a3a3c);
  --shiki-gutter-text-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, oklch(84.63% 0.0136 102.1557));
  --shiki-highlight-neutral: var(--shiki-code-normal, oklch(84.63% 0.0136 102.1557));
  --shiki-terminal-dots-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(32.14% 0.0037 84.5916));
  --slider-track-background: var(--background-modifier-border, #3a3a3c);
  --spacing: 0.25rem;
  --status-bar-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --status-bar-border-color: var(--divider-color, #3a3a3c);
  --status-bar-text-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --suggestion-background: var(--background-primary, oklch(22.28% 0.0025 67.5819));
  --sync-avatar-color-1: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --sync-avatar-color-2: var(--color-orange, oklch(65.76% 0.1539 49.2911));
  --sync-avatar-color-3: var(--color-yellow, oklch(73.46% 0.1461 87.4626));
  --sync-avatar-color-4: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --sync-avatar-color-5: var(--color-cyan, oklch(67.01% 0.0999 186.6127));
  --sync-avatar-color-6: var(--color-blue, oklch(59.88% 0.1105 247.0083));
  --sync-avatar-color-7: var(--color-purple, oklch(63.48% 0.1099 290.9867));
  --sync-avatar-color-8: var(--color-pink, oklch(63.48% 0.1565 350.4570));
  --tab-background-active: var(--text-accent, hsl(175 57% 65%));
  --tab-background-active-focused: var(--text-accent, hsl(175 57% 65%));
  --tab-background-focused-active: var(--text-accent, hsl(175 57% 65%));
  --tab-container-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --tab-divider-color: var(--background-modifier-border-hover, oklch(32.14% 0.0037 84.5916));
  --tab-outline-color: var(--divider-color, #3a3a3c);
  --tab-stacked-header-width: var(--header-height, 60px);
  --tab-switcher-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --tab-text-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --tab-text-color-active: var(--text-on-accent, oklch(from hsl(175 57% 65%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-active-focused: var(--text-on-accent, oklch(from hsl(175 57% 65%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-focused: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --tab-text-color-focused-active: var(--text-on-accent, oklch(from hsl(175 57% 65%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-focused-active-current: var(--text-on-accent, oklch(from hsl(175 57% 65%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-focused-highlighted: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --table-add-button-border-color: var(--background-modifier-border, #3a3a3c);
  --table-border-color: var(--background-modifier-border, #3a3a3c);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(175 57% 65%));
  --table-drag-handle-color: var(--text-faint, oklch(45.31% 0.0049 91.5721));
  --table-drag-handle-color-active: var(--text-on-accent, oklch(from hsl(175 57% 65%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --table-header-background: var(--background-secondary-alt, oklch(32.14% 0.0037 84.5916));
  --table-header-border-color: var(--table-border-color, #3a3a3c);
  --table-header-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --table-selection-border-color: var(--interactive-accent, hsl(175 57% 65%));
  --tag-color: var(--text-accent, hsl(175 57% 65%));
  --tag-color-hover: var(--text-accent, hsl(175 57% 65%));
  --tertiary: var(--text-accent-hover, hsl(var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%)));
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-accent: hsl(var(--accent-h) var(--accent-s) var(--accent-l));
  --text-accent-hover: hsl(var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%));
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-error: var(--color-red, oklch(59.71% 0.1691 28.3687));
  --text-faint: var(--color-base-50, oklch(45.31% 0.0049 91.5721));
  --text-highlight-bg: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.2);
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-muted: var(--color-base-100, oklch(84.63% 0.0136 102.1557));
  --text-normal: var(--color-paper, oklch(0.9901 0.0161 95.22));
  --text-on-accent: oklch(from var(--text-accent) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --text-selection: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.45);
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-success: var(--color-green, oklch(65.13% 0.1241 119.4018));
  --text-warning: var(--color-orange, oklch(65.76% 0.1539 49.2911));
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --textHighlight: var(--text-highlight-bg, hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.2));
  --titlebar-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  --titlebar-background-focused: var(--background-secondary-alt, oklch(32.14% 0.0037 84.5916));
  --titlebar-border-color: var(--background-modifier-border, #3a3a3c);
  --titlebar-text-color: var(--text-muted, oklch(84.63% 0.0136 102.1557));
  --titlebar-text-color-focused: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --traffic-lights-offset-x: var(--header-height, 60px);
  --traffic-lights-offset-y: var(--header-height, 60px);
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
  --vault-profile-color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  --vault-profile-color-hover: var(--vault-profile-color, oklch(0.9901 0.0161 95.22));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  background-color: var(--background-secondary, oklch(0.2734 0.0023 67.5746));
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, oklch(0.2228 0.0025 67.5819));
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, oklch(0.2734 0.0023 67.5746));
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 58, 60);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, oklch(27.34% 0.0023 67.5746));
  background-color: var(--tab-container-background, oklch(0.2734 0.0023 67.5746));
  border-left-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body html {
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-white: #fff;
  --default-font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
  --default-mono-font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace);
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-weight-medium: 500;
  --leading-relaxed: 1.625;
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --spacing: 0.25rem;
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, oklch(0.5971 0.1691 28.3687));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, oklch(0.7346 0.1461 87.4626));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, oklch(0.7346 0.1461 87.4626));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, oklch(0.7346 0.1461 87.4626));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, oklch(0.5971 0.1691 28.3687));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(115, 217, 208, 0.2));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body del {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.4531 0.0049 91.5721);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(115, 217, 208));
  border-color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, oklch(0.8463 0.0136 102.156));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8463 0.0136 102.156) none 0px;
  text-decoration-color: oklch(0.8463 0.0136 102.156);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(115, 217, 208));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration-color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(115, 217, 208));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration-color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(115, 217, 208));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgba(115, 217, 208, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(115, 217, 208, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 19.2px;
  margin-left: 0px;
}

html[saved-theme="dark"] body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 19.2px;
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.9901 0.0161 95.22);
  list-style-type: disc;
  margin-bottom: 4px;
  margin-left: 36.623px;
  margin-top: 4px;
  padding-bottom: var(--list-spacing, 1.44px);
  padding-top: var(--list-spacing, 1.44px);
}

html[saved-theme="dark"] body ul > li {
  color: oklch(0.9901 0.0161 95.22);
  list-style-type: disc;
  margin-bottom: 4px;
  margin-left: 36.623px;
  margin-top: 4px;
  padding-bottom: var(--list-spacing, 1.44px);
  padding-top: var(--list-spacing, 1.44px);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.4531 0.0049 91.5721));
}

html[saved-theme="dark"] body blockquote {
  color: var(--text-muted, oklch(0.8463 0.0136 102.156));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
  line-height: 31.2px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body table {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: var(--table-text-color, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: var(--table-header-color, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body thead {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, oklch(0.3214 0.0037 84.5916));
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, oklch(0.8463 0.0136 102.156));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, oklch(0.2228 0.0025 67.5819));
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
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body figcaption {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, oklch(22.28% 0.0025 67.5819));
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body video {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: var(--text-muted, oklch(0.8463 0.0136 102.156));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: rgb(115, 217, 208);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
  color: oklch(0.9901 0.0161 95.22);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: oklch(0.4531 0.0049 91.5721);
  border-left-color: oklch(0.4531 0.0049 91.5721);
  border-right-color: oklch(0.4531 0.0049 91.5721);
  border-top-color: oklch(0.4531 0.0049 91.5721);
  margin-right: 11.52px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6576 0.1539 49.2911);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.4531 0.0049 91.5721);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7346 0.1461 87.4626);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6701 0.0999 186.613);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5988 0.1105 247.008);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5971 0.1691 28.3687);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5971 0.1691 28.3687);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5971 0.1691 28.3687);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5971 0.1691 28.3687);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5988 0.1105 247.008);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7346 0.1461 87.4626);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7346 0.1461 87.4626);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6348 0.1099 290.987);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5971 0.1691 28.3687);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6513 0.1241 119.402);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6513 0.1241 119.402);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6513 0.1241 119.402);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 58, 169, 159);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 209, 77, 65);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 209, 77, 65);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 139, 126, 200);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 209, 77, 65);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 67, 133, 190);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 67, 133, 190);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 218, 112, 44);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 135, 154, 57);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 58, 169, 159);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 67, 133, 190);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 218, 112, 44);
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(67, 133, 190));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: oklch(0.9901 0.0161 95.22);
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
  background-color: oklch(0.2734 0.0023 67.5746);
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: oklch(0.3651 0.0043 67.5809);
  border-left-color: oklch(0.3651 0.0043 67.5809);
  border-right-color: oklch(0.3651 0.0043 67.5809);
  border-top-color: oklch(0.3651 0.0043 67.5809);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(58, 58, 60));
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.3651 0.0043 67.5809);
  border-left-color: oklch(0.3651 0.0043 67.5809);
  border-right-color: oklch(0.3651 0.0043 67.5809);
  border-top-color: oklch(0.3651 0.0043 67.5809);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.2734 0.0023 67.5746);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(58, 58, 60));
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(58, 58, 60));
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(175, 57%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(175, 57%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(175, 57%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(175, 57%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(175 57% 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(175 57% 65%));
  --pill-color-remove: var(--tag-color, hsl(175 57% 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(175 57% 65%));
  background-color: var(--pill-background, rgba(115, 217, 208, 0.1));
  border-bottom-color: rgba(115, 217, 208, 0.15);
  border-bottom-left-radius: 33.6px;
  border-bottom-right-radius: 33.6px;
  border-left-color: rgba(115, 217, 208, 0.15);
  border-right-color: rgba(115, 217, 208, 0.15);
  border-top-color: rgba(115, 217, 208, 0.15);
  border-top-left-radius: 33.6px;
  border-top-right-radius: 33.6px;
  color: var(--pill-color, rgb(115, 217, 208));
  font-size: 16.8px;
  line-height: var(--line-height-tight, 16.8px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h1-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h1-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 31.0656px);
  letter-spacing: var(--h1-letter-spacing, -0.465984px);
  line-height: var(--h1-line-height, 37.2787px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, oklch(0.9901 0.0161 95.22));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 400);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h2-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h2-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 28.0704px);
  letter-spacing: var(--h2-letter-spacing, -0.308774px);
  line-height: var(--h2-line-height, 33.6845px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--inline-title-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--inline-title-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 400);
  letter-spacing: -0.72px;
  line-height: var(--inline-title-line-height, 57.6px);
  margin-bottom: 24px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h3-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h3-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 25.3056px);
  letter-spacing: var(--h3-letter-spacing, -0.202445px);
  line-height: var(--h3-line-height, 32.8973px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h4-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h4-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 22.8096px);
  letter-spacing: var(--h4-letter-spacing, -0.114048px);
  line-height: var(--h4-line-height, 31.9334px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h5-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h5-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 20.6592px);
  letter-spacing: var(--h5-letter-spacing, -0.0413184px);
  line-height: var(--h5-line-height, 30.9888px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--h6-color, oklch(0.9901 0.0161 95.22));
  font-family: var(--h6-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: oklch(0.9901 0.0161 95.22);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 67, 133, 190);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
  padding-bottom: 19.2px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 19.2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.depth-0 {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: var(--icon-color, oklch(0.8463 0.0136 102.156));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, oklch(0.2734 0.0023 67.5746));
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: var(--status-bar-text-color, oklch(0.8463 0.0136 102.156));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.8463 0.0136 102.156);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: var(--icon-color, oklch(0.8463 0.0136 102.156));
}

html[saved-theme="dark"] body .darkmode svg {
  color: oklch(0.8463 0.0136 102.156);
  stroke: oklch(0.8463 0.0136 102.156);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.4531 0.0049 91.5721));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .canvas-node-file {
  --tw-leading: var(--leading-relaxed, 1.625);
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: oklch(0.9901 0.0161 95.22);
  border-style: solid;
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, oklch(0.2734 0.0023 67.5746));
  border-color: oklch(0.9901 0.0161 95.22);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(58, 58, 60);
  color: var(--table-header-color, oklch(0.9901 0.0161 95.22));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: var(--text-muted, oklch(0.8463 0.0136 102.156));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: oklch(0.8463 0.0136 102.156);
  font-size: 19.2px;
}

html[saved-theme="dark"] body .metadata-property-value {
  color: oklch(0.8463 0.0136 102.156);
  font-size: 19.2px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(58, 58, 60);
}

html[saved-theme="dark"] body .note-properties-key {
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(175, 57%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(175, 57%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(175, 57%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(175, 57%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(175 57% 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(175 57% 65%));
  --pill-color-remove: var(--tag-color, hsl(175 57% 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(175 57% 65%));
  background-color: var(--pill-background, rgba(115, 217, 208, 0.1));
  border-radius: 33.6px;
  color: var(--pill-color, rgb(115, 217, 208));
}

html[saved-theme="dark"] body .note-properties-value {
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, oklch(0.2228 0.0025 67.5819));
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, oklch(0.2734 0.0023 67.5746));
  border-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, oklch(0.3214 0.0037 84.5916));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: oklch(0.9901 0.0161 95.22);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, oklch(0.2734 0.0023 67.5746));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--text-normal, oklch(0.9901 0.0161 95.22));
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body details {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
  color: var(--text-normal, oklch(0.8463 0.0136 102.156));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, oklch(0.2228 0.0025 67.5819));
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: var(--code-normal, oklch(0.9901 0.0161 95.22));
  font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
  font-size: var(--code-size, 16.8px);
  padding-bottom: 1.68px;
  padding-left: 4.2px;
  padding-right: 4.2px;
  padding-top: 1.68px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body sub {
  color: oklch(0.9901 0.0161 95.22);
  font-size: 14.4px;
  vertical-align: baseline;
}

html[saved-theme="dark"] body summary {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body sup {
  color: oklch(0.9901 0.0161 95.22);
  font-size: 14.4px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary-alt, oklch(0.3214 0.0037 84.5916));
  border-bottom-color: rgba(115, 217, 208, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(115, 217, 208, 0.15);
  border-right-color: rgba(115, 217, 208, 0.15);
  border-top-color: rgba(115, 217, 208, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--text-muted, oklch(0.8463 0.0136 102.156));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 175;
  --accent-l: 33%;
  --accent-s: 57%;
  --auger-light-background-primary: #fbfbfa;
  --auger-light-text-normal: #3a3633;
  --background-modifier-border: var(--color-base-30, #e5e4e3);
  --background-modifier-border-focus: var(--color-base-40, oklch(84.63% 0.0136 102.1557));
  --background-modifier-border-hover: var(--color-base-35, oklch(88.10% 0.0136 97.5453));
  --background-modifier-error: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --background-modifier-error-hover: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --background-modifier-form-field: var(--color-base-00, oklch(99.01% 0.0160 95.2865));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, oklch(99.01% 0.0160 95.2865));
  --background-modifier-success: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --background-primary: var(--auger-light-background-primary, #fbfbfa);
  --background-primary-alt: var(--color-base-10, #f7f7f6);
  --background-secondary: var(--color-base-20, #f4f4f3);
  --background-secondary-alt: var(--color-base-05, #efefed);
  --bases-cards-background: var(--background-primary, #fbfbfa);
  --bases-cards-cover-background: var(--background-primary-alt, #f7f7f6);
  --bases-embed-border-color: var(--background-modifier-border, #e5e4e3);
  --bases-group-heading-property-color: var(--text-muted, #8a8785);
  --bases-table-border-color: var(--table-border-color, #e5e4e3);
  --bases-table-cell-background-active: var(--background-primary, #fbfbfa);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f7f7f6);
  --bases-table-cell-background-selected: var(--table-selection, hsla(175, 57%, 33%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #f7f7f6);
  --bases-table-header-background: var(--background-primary, #fbfbfa);
  --bases-table-header-background-hover: var(--background-modifier-hover, #e0e0de);
  --bases-table-header-color: var(--text-muted, #8a8785);
  --bases-table-summary-background: var(--background-primary, #fbfbfa);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #e0e0de);
  --blockquote-border-color: var(--interactive-accent, hsl(175 57% 33%));
  --bold-color: #FF3B30;
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-info: var(--callout-info, 8, 109, 221);
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 8, 109, 221);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, #fbfbfa);
  --canvas-card-label-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --canvas-dot-pattern: var(--color-base-30, oklch(91.74% 0.0148 98.3812));
  --caret-color: var(--text-normal, #3a3633);
  --checkbox-border-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --checkbox-border-color-hover: var(--text-muted, #8a8785);
  --checkbox-color: var(--interactive-accent, hsl(175 57% 33%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(172, 58.14%, 37.95%));
  --checkbox-marker-color: var(--background-primary, #fbfbfa);
  --checklist-done-color: var(--text-muted, #8a8785);
  --code-background: var(--background-primary-alt, #f7f7f6);
  --code-border-color: var(--background-modifier-border, #e5e4e3);
  --code-bracket-background: var(--background-modifier-hover, #e0e0de);
  --code-comment: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --code-function: var(--color-yellow, oklch(63.33% 0.1294 85.8140));
  --code-important: var(--color-orange, oklch(56.65% 0.1523 45.0111));
  --code-keyword: var(--color-pink, oklch(49.54% 0.1614 349.7445));
  --code-normal: var(--text-normal, #3a3633);
  --code-operator: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --code-property: var(--color-cyan, oklch(55.44% 0.0863 186.7772));
  --code-punctuation: var(--text-muted, #8a8785);
  --code-string: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --code-tag: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --code-value: var(--color-purple, oklch(45.40% 0.1451 294.8244));
  --collapse-icon-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(175 57% 33%));
  --color-base-00: oklch(99.01% 0.0160 95.2865);
  --color-base-05: oklch(99.01% 0.0160 95.2865);
  --color-base-10: oklch(95.37% 0.0147 98.3751);
  --color-base-20: oklch(95.37% 0.0147 98.3751);
  --color-base-25: oklch(91.74% 0.0148 98.3812);
  --color-base-30: oklch(91.74% 0.0148 98.3812);
  --color-base-35: oklch(88.10% 0.0136 97.5453);
  --color-base-40: oklch(84.63% 0.0136 102.1557);
  --color-base-50: oklch(77.21% 0.0127 96.5429);
  --color-base-60: oklch(61.69% 0.0077 88.7146);
  --color-base-70: oklch(53.75% 0.0077 97.5372);
  --color-base-80: --color-base-85:
    --color-base-90:
    --color-base-95:
    --color-base-100: oklch(16.96% 0.0017 16.8596);
  --color-blue: oklch(48.18% 0.1315 254.7968);
  --color-blue-oklch: 0.4818 0.1315 254.7968;
  --color-cyan: oklch(55.44% 0.0863 186.7772);
  --color-cyan-oklch: 0.5544 0.0863 186.7772;
  --color-green: oklch(55.93% 0.1335 122.9402);
  --color-green-oklch: 0.5593 0.1335 122.9402;
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-orange: oklch(56.65% 0.1523 45.0111);
  --color-orange-oklch: 0.5665 0.1523 45.0111;
  --color-pink: oklch(49.54% 0.1614 349.7445);
  --color-pink-oklch: 0.4954 0.1614 349.7445;
  --color-purple: oklch(45.40% 0.1451 294.8244);
  --color-purple-oklch: 0.4540 0.1451 294.8244;
  --color-red: oklch(50.43% 0.1648 27.8298);
  --color-red-oklch: 0.5043 0.1648 27.8298;
  --color-white: #fff;
  --color-yellow: oklch(63.33% 0.1294 85.8140);
  --color-yellow-oklch: 0.6333 0.1294 85.8140;
  --dark: var(--text-normal, var(--auger-light-text-normal, #3a3633));
  --darkgray: var(--text-normal, var(--auger-light-text-normal, #3a3633));
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --divider-color: var(--background-modifier-border, #e5e4e3);
  --divider-color-hover: var(--interactive-accent, hsl(175 57% 33%));
  --dropdown-background: var(--interactive-normal, oklch(99.01% 0.0160 95.2865));
  --dropdown-background-hover: var(--interactive-hover, oklch(95.37% 0.0147 98.3751));
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --file-header-background: var(--background-primary, #fbfbfa);
  --file-header-background-focused: var(--background-primary, #fbfbfa);
  --flair-background: var(--interactive-normal, oklch(99.01% 0.0160 95.2865));
  --flair-color: var(--text-normal, #3a3633);
  --font-mono: var(--font-monospace-override), var(--font-monospace-default);
  --font-sans: var(--font-interface-override), var(--font-default);
  --font-weight-medium: 500;
  --footnote-divider-color: var(--metadata-divider-color, #e5e4e3);
  --footnote-id-color: var(--text-muted, #8a8785);
  --footnote-id-color-no-occurrences: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --footnote-input-background-active: var(--metadata-input-background-active, #e0e0de);
  --graph-node: var(--text-muted, #8a8785);
  --graph-node-attachment: var(--color-yellow, oklch(63.33% 0.1294 85.8140));
  --graph-node-focused: var(--text-accent, hsl(175 57% 33%));
  --graph-node-tag: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --graph-node-unresolved: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --graph-text: var(--text-normal, #3a3633);
  --gray: var(--text-muted, var(--color-base-70, #8a8785));
  --header-height: 60px;
  --heading-formatting: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --highlight: var(--text-highlight-bg, hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.15));
  --hr-color: var(--background-modifier-border, #e5e4e3);
  --icon-color: var(--text-muted, #8a8785);
  --icon-color-active: var(--text-accent, hsl(175 57% 33%));
  --icon-color-focused: var(--text-normal, #3a3633);
  --icon-color-hover: var(--text-muted, #8a8785);
  --inline-title-size: var(--h1-size, 3rem);
  --inline-title-weight: var(--h1-weight, 400);
  --input-date-separator: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --input-placeholder-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --interactive-accent: var(--text-accent, hsl(175 57% 33%));
  --interactive-accent-hover: var(--color-accent-2, hsl(172, 58.14%, 37.95%));
  --interactive-accent-hsl: var(--color-accent-hsl, 175, 57%, 33%);
  --interactive-hover: var(--color-base-10, oklch(95.37% 0.0147 98.3751));
  --interactive-normal: var(--color-base-00, oklch(99.01% 0.0160 95.2865));
  --italic-color: #FF9500;
  --leading-relaxed: 1.625;
  --light: var(--background-primary, var(--auger-light-background-primary, #fbfbfa));
  --lightgray: var(--background-secondary, var(--color-base-20, #f4f4f3));
  --link-color: var(--text-accent, hsl(175 57% 33%));
  --link-color-hover: var(--text-accent-hover, hsl(175 57% 43%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(175 57% 33%));
  --link-external-color-hover: var(--text-accent-hover, hsl(175 57% 43%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl(175 57% 33%));
  --list-marker-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --list-marker-color-collapsed: var(--text-accent, hsl(175 57% 33%));
  --list-marker-color-hover: var(--text-muted, #8a8785);
  --menu-background: var(--background-secondary, #f4f4f3);
  --menu-border-color: var(--background-modifier-border-hover, oklch(88.10% 0.0136 97.5453));
  --metadata-border-color: var(--background-modifier-border, #e5e4e3);
  --metadata-divider-color: var(--background-modifier-border, #e5e4e3);
  --metadata-input-background-active: var(--background-modifier-hover, #e0e0de);
  --metadata-input-text-color: var(--text-normal, #3a3633);
  --metadata-label-background-active: var(--background-modifier-hover, #e0e0de);
  --metadata-label-text-color: var(--text-muted, #8a8785);
  --metadata-label-text-color-hover: var(--text-muted, #8a8785);
  --metadata-property-background-active: var(--background-modifier-hover, #e0e0de);
  --modal-background: var(--background-primary, #fbfbfa);
  --nav-collapse-icon-color: var(--collapse-icon-color, oklch(77.21% 0.0127 96.5429));
  --nav-collapse-icon-color-collapsed: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --nav-heading-color: var(--text-normal, #3a3633);
  --nav-heading-color-collapsed: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --nav-heading-color-collapsed-hover: var(--text-muted, #8a8785);
  --nav-heading-color-hover: var(--text-normal, #3a3633);
  --nav-item-background-active: var(--background-modifier-hover, #e0e0de);
  --nav-item-background-hover: var(--background-modifier-hover, #e0e0de);
  --nav-item-color: var(--text-muted, #8a8785);
  --nav-item-color-active: var(--text-normal, #3a3633);
  --nav-item-color-highlighted: var(--text-accent, hsl(175 57% 33%));
  --nav-item-color-hover: var(--text-normal, #3a3633);
  --nav-item-color-selected: var(--text-normal, #3a3633);
  --nav-tag-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --nav-tag-color-active: var(--text-muted, #8a8785);
  --nav-tag-color-hover: var(--text-muted, #8a8785);
  --pdf-background: var(--background-primary, #fbfbfa);
  --pdf-page-background: var(--background-primary, #fbfbfa);
  --pdf-sidebar-background: var(--background-primary, #fbfbfa);
  --pill-border-color: var(--background-modifier-border, #e5e4e3);
  --pill-border-color-hover: var(--background-modifier-border-hover, oklch(88.10% 0.0136 97.5453));
  --pill-color: var(--text-muted, #8a8785);
  --pill-color-hover: var(--text-normal, #3a3633);
  --pill-color-remove: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --pill-color-remove-hover: var(--text-accent, hsl(175 57% 33%));
  --prompt-background: var(--background-primary, #fbfbfa);
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --raised-background: var(--blur-background, color-mix(in srgb, #fbfbfa 65%, transparent) linear-gradient(#fbfbfa, color-mix(in srgb, #fbfbfa 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f4f4f3);
  --ribbon-background-collapsed: var(--background-primary, #fbfbfa);
  --search-clear-button-color: var(--text-muted, #8a8785);
  --search-icon-color: var(--text-muted, #8a8785);
  --search-result-background: var(--background-primary, #fbfbfa);
  --secondary: var(--text-accent, hsl(var(--accent-h) var(--accent-s) var(--accent-l)));
  --setting-group-heading-color: var(--text-normal, #3a3633);
  --setting-items-background: var(--background-primary-alt, #f7f7f6);
  --setting-items-border-color: var(--background-modifier-border, #e5e4e3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #8a8785);
  --shiki-code-background: var(--code-background, #f7f7f6);
  --shiki-code-comment: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --shiki-code-function: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --shiki-code-important: var(--color-orange, oklch(56.65% 0.1523 45.0111));
  --shiki-code-keyword: var(--color-pink, oklch(49.54% 0.1614 349.7445));
  --shiki-code-normal: var(--text-muted, #8a8785);
  --shiki-code-property: var(--color-cyan, oklch(55.44% 0.0863 186.7772));
  --shiki-code-punctuation: var(--text-muted, #8a8785);
  --shiki-code-string: var(--color-yellow, oklch(63.33% 0.1294 85.8140));
  --shiki-code-value: var(--color-purple, oklch(45.40% 0.1451 294.8244));
  --shiki-gutter-border-color: var(--background-modifier-border, #e5e4e3);
  --shiki-gutter-text-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #8a8785);
  --shiki-highlight-neutral: var(--shiki-code-normal, #8a8785);
  --shiki-terminal-dots-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --slider-thumb-border-color: var(--background-modifier-border-hover, oklch(88.10% 0.0136 97.5453));
  --slider-track-background: var(--background-modifier-border, #e5e4e3);
  --spacing: 0.25rem;
  --status-bar-background: var(--background-secondary, #f4f4f3);
  --status-bar-border-color: var(--divider-color, #e5e4e3);
  --status-bar-text-color: var(--text-muted, #8a8785);
  --suggestion-background: var(--background-primary, #fbfbfa);
  --sync-avatar-color-1: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --sync-avatar-color-2: var(--color-orange, oklch(56.65% 0.1523 45.0111));
  --sync-avatar-color-3: var(--color-yellow, oklch(63.33% 0.1294 85.8140));
  --sync-avatar-color-4: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --sync-avatar-color-5: var(--color-cyan, oklch(55.44% 0.0863 186.7772));
  --sync-avatar-color-6: var(--color-blue, oklch(48.18% 0.1315 254.7968));
  --sync-avatar-color-7: var(--color-purple, oklch(45.40% 0.1451 294.8244));
  --sync-avatar-color-8: var(--color-pink, oklch(49.54% 0.1614 349.7445));
  --tab-background-active: var(--text-accent, hsl(175 57% 33%));
  --tab-background-focused-active: var(--text-accent, hsl(175 57% 33%));
  --tab-container-background: var(--background-secondary, #f4f4f3);
  --tab-divider-color: var(--background-modifier-border-hover, oklch(88.10% 0.0136 97.5453));
  --tab-outline-color: var(--divider-color, #e5e4e3);
  --tab-stacked-header-width: var(--header-height, 60px);
  --tab-switcher-background: var(--background-secondary, #f4f4f3);
  --tab-text-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --tab-text-color-active: var(--text-on-accent, oklch(from hsl(175 57% 33%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-focused: var(--text-muted, #8a8785);
  --tab-text-color-focused-active: var(--text-on-accent, oklch(from hsl(175 57% 33%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --tab-text-color-focused-active-current: var(--text-normal, #3a3633);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(175 57% 33%));
  --table-add-button-border-color: var(--background-modifier-border, #e5e4e3);
  --table-border-color: var(--background-modifier-border, #e5e4e3);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(175 57% 33%));
  --table-drag-handle-color: var(--text-faint, oklch(77.21% 0.0127 96.5429));
  --table-drag-handle-color-active: var(--text-on-accent, oklch(from hsl(175 57% 33%) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0));
  --table-header-background: var(--background-secondary-alt, #efefed);
  --table-header-border-color: var(--table-border-color, #e5e4e3);
  --table-header-color: var(--text-normal, #3a3633);
  --table-selection-border-color: var(--interactive-accent, hsl(175 57% 33%));
  --tag-color: var(--text-accent, hsl(175 57% 33%));
  --tag-color-hover: var(--text-accent, hsl(175 57% 33%));
  --tertiary: var(--text-accent-hover, hsl(var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%)));
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-accent: hsl(var(--accent-h) var(--accent-s) var(--accent-l));
  --text-accent-hover: hsl(var(--accent-h) var(--accent-s) calc(var(--accent-l) + 10%));
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-error: var(--color-red, oklch(50.43% 0.1648 27.8298));
  --text-faint: var(--color-base-50, oklch(77.21% 0.0127 96.5429));
  --text-highlight-bg: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.15);
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-muted: var(--color-base-70, #8a8785);
  --text-normal: var(--auger-light-text-normal, #3a3633);
  --text-on-accent: oklch(from var(--text-accent) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --text-selection: hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.35);
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-success: var(--color-green, oklch(55.93% 0.1335 122.9402));
  --text-warning: var(--color-orange, oklch(56.65% 0.1523 45.0111));
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --textHighlight: var(--text-highlight-bg, hsl(var(--accent-h) var(--accent-s) var(--accent-l) / 0.15));
  --titlebar-background: var(--background-secondary, #f4f4f3);
  --titlebar-background-focused: var(--background-secondary-alt, #efefed);
  --titlebar-border-color: var(--background-modifier-border, #e5e4e3);
  --titlebar-text-color: var(--text-muted, #8a8785);
  --titlebar-text-color-focused: var(--text-normal, #3a3633);
  --traffic-lights-offset-x: var(--header-height, 60px);
  --traffic-lights-offset-y: var(--header-height, 60px);
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
  --vault-profile-color: var(--text-normal, #3a3633);
  --vault-profile-color-hover: var(--vault-profile-color, #3a3633);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f4f4f3);
  background-color: var(--background-secondary, rgb(244, 244, 243));
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(251, 251, 250));
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(244, 244, 243));
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 228, 227);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f4f4f3);
  background-color: var(--tab-container-background, rgb(244, 244, 243));
  border-left-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body html {
  --color-neutral-200: oklch(92.2% 0 0);
  --color-neutral-700: oklch(37.1% 0 0);
  --color-white: #fff;
  --default-font-family: var(--font-sans, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
  --default-mono-font-family: var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace);
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-weight-medium: 500;
  --leading-relaxed: 1.625;
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --spacing: 0.25rem;
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(255, 59, 48));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 59, 48) none 0px;
  text-decoration-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(255, 149, 0));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 149, 0) none 0px;
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(255, 149, 0));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 149, 0) none 0px;
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(255, 149, 0));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 149, 0) none 0px;
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(255, 59, 48));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 59, 48) none 0px;
  text-decoration-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(36, 132, 124, 0.15));
  color: var(--text-normal, rgb(58, 54, 51));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 54, 51) none 0px;
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body del {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 54, 51) none 0px;
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: oklch(0.7721 0.0127 96.5429);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(36, 132, 124));
  border-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(138, 135, 133));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 135, 133) none 0px;
  text-decoration-color: rgb(138, 135, 133);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(36, 132, 124));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(36, 132, 124));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(36, 132, 124));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgba(36, 132, 124, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(36, 132, 124, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 19.2px;
  margin-left: 0px;
}

html[saved-theme="light"] body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 19.2px;
}

html[saved-theme="light"] body ol > li {
  color: rgb(58, 54, 51);
  list-style-type: disc;
  margin-bottom: 4px;
  margin-left: 36.623px;
  margin-top: 4px;
  padding-bottom: var(--list-spacing, 1.44px);
  padding-top: var(--list-spacing, 1.44px);
}

html[saved-theme="light"] body ul > li {
  color: rgb(58, 54, 51);
  list-style-type: disc;
  margin-bottom: 4px;
  margin-left: 36.623px;
  margin-top: 4px;
  padding-bottom: var(--list-spacing, 1.44px);
  padding-top: var(--list-spacing, 1.44px);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, oklch(0.7721 0.0127 96.5429));
}

html[saved-theme="light"] body blockquote {
  color: var(--text-muted, rgb(138, 135, 133));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
  line-height: 31.2px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: var(--table-text-color, rgb(58, 54, 51));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: var(--table-header-color, rgb(58, 54, 51));
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(239, 239, 237));
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(138, 135, 133);
  border-right-color: rgb(138, 135, 133);
  border-top-color: rgb(138, 135, 133);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--ec-codeFg, rgb(138, 135, 133));
  font-family: var(--ec-codeFontFml, "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(247, 247, 246));
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
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body figcaption {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f7f7f6);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: var(--text-muted, rgb(138, 135, 133));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
  color: rgb(58, 54, 51);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: oklch(0.7721 0.0127 96.5429);
  border-left-color: oklch(0.7721 0.0127 96.5429);
  border-right-color: oklch(0.7721 0.0127 96.5429);
  border-top-color: oklch(0.7721 0.0127 96.5429);
  margin-right: 11.52px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5665 0.1523 45.0111);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.7721 0.0127 96.5429);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6333 0.1294 85.814);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5544 0.0863 186.777);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.4818 0.1315 254.797);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5043 0.1648 27.8298);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5043 0.1648 27.8298);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5043 0.1648 27.8298);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5043 0.1648 27.8298);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.4818 0.1315 254.797);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6333 0.1294 85.814);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.6333 0.1294 85.814);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.454 0.1451 294.824);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5043 0.1648 27.8298);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5593 0.1335 122.94);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5593 0.1335 122.94);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: oklch(0.5593 0.1335 122.94);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgb(247, 247, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-primary-alt, rgb(247, 247, 246));
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(58, 54, 51);
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
  background-color: oklch(0.9901 0.016 95.2865);
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: var(--text-normal, rgb(58, 54, 51));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(251, 251, 250));
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 54, 51) none 0px;
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(224, 224, 222));
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 244, 243);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(224, 224, 222));
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(224, 224, 222));
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(175, 57%, 33%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(175, 57%, 33%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(175, 57%, 33%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(175, 57%, 33%, 0.15));
  --pill-color: var(--tag-color, hsl(175 57% 33%));
  --pill-color-hover: var(--tag-color-hover, hsl(175 57% 33%));
  --pill-color-remove: var(--tag-color, hsl(175 57% 33%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(175 57% 33%));
  background-color: var(--pill-background, rgba(36, 132, 124, 0.1));
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-bottom-left-radius: 33.6px;
  border-bottom-right-radius: 33.6px;
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
  border-top-left-radius: 33.6px;
  border-top-right-radius: 33.6px;
  color: var(--pill-color, rgb(36, 132, 124));
  font-size: 16.8px;
  line-height: var(--line-height-tight, 16.8px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(36, 132, 124);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h1-color, rgb(58, 54, 51));
  font-family: var(--h1-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 31.0656px);
  letter-spacing: var(--h1-letter-spacing, -0.465984px);
  line-height: var(--h1-line-height, 37.2787px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(58, 54, 51));
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 400);
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h2-color, rgb(58, 54, 51));
  font-family: var(--h2-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 28.0704px);
  letter-spacing: var(--h2-letter-spacing, -0.308774px);
  line-height: var(--h2-line-height, 33.6845px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--inline-title-color, rgb(58, 54, 51));
  font-family: var(--inline-title-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 48px);
  font-weight: var(--inline-title-weight, 400);
  letter-spacing: -0.72px;
  line-height: var(--inline-title-line-height, 57.6px);
  margin-bottom: 24px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h3-color, rgb(58, 54, 51));
  font-family: var(--h3-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 25.3056px);
  letter-spacing: var(--h3-letter-spacing, -0.202445px);
  line-height: var(--h3-line-height, 32.8973px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h4-color, rgb(58, 54, 51));
  font-family: var(--h4-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 22.8096px);
  letter-spacing: var(--h4-letter-spacing, -0.114048px);
  line-height: var(--h4-line-height, 31.9334px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h5-color, rgb(58, 54, 51));
  font-family: var(--h5-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 20.6592px);
  letter-spacing: var(--h5-letter-spacing, -0.0413184px);
  line-height: var(--h5-line-height, 30.9888px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--h6-color, rgb(58, 54, 51));
  font-family: var(--h6-font, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 19.2px);
  line-height: var(--h6-line-height, 28.8px);
  margin-bottom: calc(var(--spacing)*2);
  margin-top: calc(var(--spacing)*6);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(58, 54, 51);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
  padding-bottom: 19.2px;
  padding-left: 19.2px;
  padding-right: 19.2px;
  padding-top: 19.2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, rgb(58, 54, 51));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, rgb(58, 54, 51));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.depth-0 {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: var(--icon-color, rgb(138, 135, 133));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(244, 244, 243));
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: var(--status-bar-text-color, rgb(138, 135, 133));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(138, 135, 133);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, rgb(58, 54, 51));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  --tw-ease: var(--ease-in-out, cubic-bezier(0.4, 0, 0.2, 1));
  color: var(--text-normal, rgb(58, 54, 51));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: var(--icon-color, rgb(138, 135, 133));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 135, 133);
  stroke: rgb(138, 135, 133);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, oklch(0.7721 0.0127 96.5429));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .canvas-node-file {
  --tw-leading: var(--leading-relaxed, 1.625);
  color: var(--text-normal, rgb(58, 54, 51));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(58, 54, 51);
  border-style: solid;
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(251, 251, 250));
  border-color: rgb(58, 54, 51);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(229, 228, 227);
  color: var(--table-header-color, rgb(58, 54, 51));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: var(--text-muted, rgb(138, 135, 133));
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(138, 135, 133);
  font-size: 19.2px;
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(138, 135, 133);
  font-size: 19.2px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(229, 228, 227);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(138, 135, 133);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(175, 57%, 33%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(175, 57%, 33%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(175, 57%, 33%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(175, 57%, 33%, 0.15));
  --pill-color: var(--tag-color, hsl(175 57% 33%));
  --pill-color-hover: var(--tag-color-hover, hsl(175 57% 33%));
  --pill-color-remove: var(--tag-color, hsl(175 57% 33%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(175 57% 33%));
  background-color: var(--pill-background, rgba(36, 132, 124, 0.1));
  border-radius: 33.6px;
  color: var(--pill-color, rgb(36, 132, 124));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(251, 251, 250));
  color: var(--text-normal, rgb(58, 54, 51));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(244, 244, 243));
  border-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(239, 239, 237));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(58, 54, 51);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(244, 244, 243));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--text-normal, rgb(58, 54, 51));
}

html[saved-theme="light"] body abbr {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(138, 135, 133);
  border-left-color: rgb(138, 135, 133);
  border-right-color: rgb(138, 135, 133);
  border-top-color: rgb(138, 135, 133);
  color: var(--text-normal, rgb(138, 135, 133));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(247, 247, 246));
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: var(--code-normal, rgb(58, 54, 51));
  font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
  font-size: var(--code-size, 16.8px);
  padding-bottom: 1.68px;
  padding-left: 4.2px;
  padding-right: 4.2px;
  padding-top: 1.68px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body sub {
  color: rgb(58, 54, 51);
  font-size: 14.4px;
  vertical-align: baseline;
}

html[saved-theme="light"] body summary {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body sup {
  color: rgb(58, 54, 51);
  font-size: 14.4px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary-alt, rgb(239, 239, 237));
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: var(--text-muted, rgb(138, 135, 133));
}`,
  },
};
