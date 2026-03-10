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
  --background-modifier-active-hover: rgba(115, 217, 208, 0.1);
  --background-modifier-border: #3a3a3c;
  --background-modifier-border-focus: oklch(36.51% 0.0043 67.5809);
  --background-modifier-border-hover: oklch(32.14% 0.0037 84.5916);
  --background-modifier-error: oklch(59.71% 0.1691 28.3687);
  --background-modifier-error-hover: oklch(59.71% 0.1691 28.3687);
  --background-modifier-error-rgb: 209, 77, 65;
  --background-modifier-form-field: oklch(27.34% 0.0023 67.5746);
  --background-modifier-form-field-hover: oklch(27.34% 0.0023 67.5746);
  --background-modifier-hover: #3a3a3c;
  --background-modifier-success: oklch(65.13% 0.1241 119.4018);
  --background-modifier-success-rgb: 135, 154, 57;
  --background-primary: oklch(22.28% 0.0025 67.5819);
  --background-primary-alt: oklch(22.28% 0.0025 67.5819);
  --background-secondary: oklch(27.34% 0.0023 67.5746);
  --background-secondary-alt: oklch(32.14% 0.0037 84.5916);
  --bases-cards-background: oklch(22.28% 0.0025 67.5819);
  --bases-cards-cover-background: oklch(22.28% 0.0025 67.5819);
  --bases-cards-shadow: 0 0 0 1px #3a3a3c;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(32.14% 0.0037 84.5916);
  --bases-embed-border-color: #3a3a3c;
  --bases-group-heading-property-color: oklch(84.63% 0.0136 102.1557);
  --bases-table-border-color: #3a3a3c;
  --bases-table-cell-background-active: oklch(22.28% 0.0025 67.5819);
  --bases-table-cell-background-disabled: oklch(22.28% 0.0025 67.5819);
  --bases-table-cell-background-selected: rgba(115, 217, 208, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(36.51% 0.0043 67.5809);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-group-background: oklch(22.28% 0.0025 67.5819);
  --bases-table-header-background: oklch(22.28% 0.0025 67.5819);
  --bases-table-header-background-hover: #3a3a3c;
  --bases-table-header-color: oklch(84.63% 0.0136 102.1557);
  --bases-table-summary-background: oklch(22.28% 0.0025 67.5819);
  --bases-table-summary-background-hover: #3a3a3c;
  --blockquote-border-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent) linear-gradient(oklch(27.34% 0.0023 67.5746), color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent));
  --bold-color: oklch(59.71% 0.1691 28.3687);
  --bold-weight: 600;
  --callout-bug: 209, 77, 65;
  --callout-default: 67, 133, 190;
  --callout-error: 209, 77, 65;
  --callout-example: 139, 126, 200;
  --callout-fail: 209, 77, 65;
  --callout-important: 58, 169, 159;
  --callout-info: 67, 133, 190;
  --callout-question: 218, 112, 44;
  --callout-success: 135, 154, 57;
  --callout-summary: 58, 169, 159;
  --callout-tip: 58, 169, 159;
  --callout-title-weight: 600;
  --callout-todo: 67, 133, 190;
  --callout-warning: 218, 112, 44;
  --canvas-background: oklch(22.28% 0.0025 67.5819);
  --canvas-card-label-color: oklch(45.31% 0.0049 91.5721);
  --canvas-color-1: 209, 77, 65;
  --canvas-color-2: 218, 112, 44;
  --canvas-color-3: 208, 162, 21;
  --canvas-color-4: 135, 154, 57;
  --canvas-color-5: 58, 169, 159;
  --canvas-color-6: 139, 126, 200;
  --canvas-dot-pattern: oklch(27.34% 0.0023 67.5746);
  --caret-color: oklch(0.9901 0.0161 95.22);
  --checkbox-border-color: oklch(45.31% 0.0049 91.5721);
  --checkbox-border-color-hover: oklch(84.63% 0.0136 102.1557);
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(154, 228, 218);
  --checkbox-marker-color: oklch(22.28% 0.0025 67.5819);
  --checklist-done-color: oklch(84.63% 0.0136 102.1557);
  --code-background: oklch(22.28% 0.0025 67.5819);
  --code-border-color: #3a3a3c;
  --code-bracket-background: #3a3a3c;
  --code-comment: oklch(45.31% 0.0049 91.5721);
  --code-function: oklch(73.46% 0.1461 87.4626);
  --code-important: oklch(65.76% 0.1539 49.2911);
  --code-keyword: oklch(63.48% 0.1565 350.4570);
  --code-normal: oklch(0.9901 0.0161 95.22);
  --code-operator: oklch(59.71% 0.1691 28.3687);
  --code-property: oklch(67.01% 0.0999 186.6127);
  --code-punctuation: oklch(84.63% 0.0136 102.1557);
  --code-string: oklch(65.13% 0.1241 119.4018);
  --code-tag: oklch(59.71% 0.1691 28.3687);
  --code-value: oklch(63.48% 0.1099 290.9867);
  --collapse-icon-color: oklch(45.31% 0.0049 91.5721);
  --collapse-icon-color-collapsed: rgb(0, 0, 0);
  --color-accent: rgb(115, 217, 208);
  --color-accent-1: rgb(154, 228, 218);
  --color-accent-2: rgb(190, 239, 231);
  --color-accent-hsl: 175, 57%, 65%;
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --divider-color: #3a3a3c;
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background: oklch(27.34% 0.0023 67.5746);
  --dropdown-background-hover: oklch(32.14% 0.0037 84.5916);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --embed-block-shadow-hover: 0 0 0 1px #3a3a3c, inset 0 0 0 1px #3a3a3c;
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: oklch(22.28% 0.0025 67.5819);
  --file-header-background-focused: oklch(22.28% 0.0025 67.5819);
  --flair-background: oklch(27.34% 0.0023 67.5746);
  --flair-color: oklch(0.9901 0.0161 95.22);
  --font-mono: '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-sans: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight-medium: 500;
  --footnote-divider-color: #3a3a3c;
  --footnote-id-color: oklch(84.63% 0.0136 102.1557);
  --footnote-id-color-no-occurrences: oklch(45.31% 0.0049 91.5721);
  --footnote-input-background-active: #3a3a3c;
  --graph-line: oklch(32.14% 0.0037 84.5916);
  --graph-node: oklch(84.63% 0.0136 102.1557);
  --graph-node-attachment: oklch(73.46% 0.1461 87.4626);
  --graph-node-focused: rgb(0, 0, 0);
  --graph-node-tag: oklch(65.13% 0.1241 119.4018);
  --graph-node-unresolved: oklch(45.31% 0.0049 91.5721);
  --graph-text: oklch(0.9901 0.0161 95.22);
  --gray: var(--text-muted);
  --header-height: 60px;
  --heading-formatting: oklch(45.31% 0.0049 91.5721);
  --heading-spacing: 2.5rem;
  --highlight: var(--text-highlight-bg);
  --hr-color: #3a3a3c;
  --icon-color: oklch(84.63% 0.0136 102.1557);
  --icon-color-active: rgb(0, 0, 0);
  --icon-color-focused: oklch(0.9901 0.0161 95.22);
  --icon-color-hover: oklch(84.63% 0.0136 102.1557);
  --inline-title-size: 3rem;
  --inline-title-weight: 400;
  --input-date-separator: oklch(45.31% 0.0049 91.5721);
  --input-placeholder-color: oklch(45.31% 0.0049 91.5721);
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(154, 228, 218);
  --interactive-accent-hsl: 175, 57%, 65%;
  --interactive-hover: oklch(32.14% 0.0037 84.5916);
  --interactive-normal: oklch(27.34% 0.0023 67.5746);
  --italic-color: oklch(73.46% 0.1461 87.4626);
  --leading-relaxed: 1.625;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(0, 0, 0);
  --link-color-hover: rgb(0, 0, 0);
  --link-decoration: none;
  --link-external-color: rgb(0, 0, 0);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(0, 0, 0);
  --link-unresolved-decoration-color: rgba(115, 217, 208, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: oklch(45.31% 0.0049 91.5721);
  --list-marker-color-collapsed: rgb(0, 0, 0);
  --list-marker-color-hover: oklch(84.63% 0.0136 102.1557);
  --menu-background: oklch(27.34% 0.0023 67.5746);
  --menu-border-color: oklch(32.14% 0.0037 84.5916);
  --metadata-border-color: #3a3a3c;
  --metadata-divider-color: #3a3a3c;
  --metadata-input-background-active: #3a3a3c;
  --metadata-input-height: 28px;
  --metadata-input-text-color: oklch(0.9901 0.0161 95.22);
  --metadata-label-background-active: #3a3a3c;
  --metadata-label-text-color: oklch(84.63% 0.0136 102.1557);
  --metadata-label-text-color-hover: oklch(84.63% 0.0136 102.1557);
  --metadata-property-background-active: #3a3a3c;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(36.51% 0.0043 67.5809);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(32.14% 0.0037 84.5916);
  --modal-background: oklch(22.28% 0.0025 67.5819);
  --modal-border-color: oklch(36.51% 0.0043 67.5809);
  --nav-collapse-icon-color: oklch(45.31% 0.0049 91.5721);
  --nav-collapse-icon-color-collapsed: oklch(45.31% 0.0049 91.5721);
  --nav-heading-color: oklch(0.9901 0.0161 95.22);
  --nav-heading-color-collapsed: oklch(45.31% 0.0049 91.5721);
  --nav-heading-color-collapsed-hover: oklch(84.63% 0.0136 102.1557);
  --nav-heading-color-hover: oklch(0.9901 0.0161 95.22);
  --nav-item-background-active: #3a3a3c;
  --nav-item-background-hover: #3a3a3c;
  --nav-item-background-selected: rgba(115, 217, 208, 0.15);
  --nav-item-color: oklch(84.63% 0.0136 102.1557);
  --nav-item-color-active: oklch(0.9901 0.0161 95.22);
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --nav-item-color-hover: oklch(0.9901 0.0161 95.22);
  --nav-item-color-selected: oklch(0.9901 0.0161 95.22);
  --nav-tag-color: oklch(45.31% 0.0049 91.5721);
  --nav-tag-color-active: oklch(84.63% 0.0136 102.1557);
  --nav-tag-color-hover: oklch(84.63% 0.0136 102.1557);
  --pdf-background: oklch(22.28% 0.0025 67.5819);
  --pdf-page-background: oklch(22.28% 0.0025 67.5819);
  --pdf-shadow: 0 0 0 1px #3a3a3c;
  --pdf-sidebar-background: oklch(22.28% 0.0025 67.5819);
  --pdf-thumbnail-shadow: 0 0 0 1px #3a3a3c;
  --pill-border-color: #3a3a3c;
  --pill-border-color-hover: oklch(32.14% 0.0037 84.5916);
  --pill-color: oklch(84.63% 0.0136 102.1557);
  --pill-color-hover: oklch(0.9901 0.0161 95.22);
  --pill-color-remove: oklch(45.31% 0.0049 91.5721);
  --pill-color-remove-hover: rgb(0, 0, 0);
  --prompt-background: oklch(22.28% 0.0025 67.5819);
  --prompt-border-color: oklch(36.51% 0.0043 67.5809);
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --raised-background: color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent) linear-gradient(oklch(27.34% 0.0023 67.5746), color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent));
  --ribbon-background: oklch(27.34% 0.0023 67.5746);
  --ribbon-background-collapsed: oklch(22.28% 0.0025 67.5819);
  --search-clear-button-color: oklch(84.63% 0.0136 102.1557);
  --search-icon-color: oklch(84.63% 0.0136 102.1557);
  --search-result-background: oklch(22.28% 0.0025 67.5819);
  --secondary: var(--text-accent);
  --setting-group-heading-color: oklch(0.9901 0.0161 95.22);
  --setting-items-background: oklch(22.28% 0.0025 67.5819);
  --setting-items-border-color: #3a3a3c;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: oklch(32.14% 0.0037 84.5916);
  --slider-track-background: #3a3a3c;
  --spacing: 0.25rem;
  --status-bar-background: oklch(27.34% 0.0023 67.5746);
  --status-bar-border-color: #3a3a3c;
  --status-bar-text-color: oklch(84.63% 0.0136 102.1557);
  --suggestion-background: oklch(22.28% 0.0025 67.5819);
  --sync-avatar-color-1: oklch(59.71% 0.1691 28.3687);
  --sync-avatar-color-2: oklch(65.76% 0.1539 49.2911);
  --sync-avatar-color-3: oklch(73.46% 0.1461 87.4626);
  --sync-avatar-color-4: oklch(65.13% 0.1241 119.4018);
  --sync-avatar-color-5: oklch(67.01% 0.0999 186.6127);
  --sync-avatar-color-6: oklch(59.88% 0.1105 247.0083);
  --sync-avatar-color-7: oklch(63.48% 0.1099 290.9867);
  --sync-avatar-color-8: oklch(63.48% 0.1565 350.4570);
  --tab-background-active: rgb(0, 0, 0);
  --tab-background-active-focused: rgb(0, 0, 0);
  --tab-background-focused-active: rgb(0, 0, 0);
  --tab-container-background: oklch(27.34% 0.0023 67.5746);
  --tab-divider-color: oklch(32.14% 0.0037 84.5916);
  --tab-outline-color: #3a3a3c;
  --tab-stacked-header-width: 60px;
  --tab-switcher-background: oklch(27.34% 0.0023 67.5746);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.34% 0.0023 67.5746), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(115, 217, 208);
  --tab-text-color: oklch(0.9901 0.0161 95.22);
  --tab-text-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-active-focused: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-focused: oklch(0.9901 0.0161 95.22);
  --tab-text-color-focused-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-focused-active-current: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-focused-highlighted: oklch(0.9901 0.0161 95.22);
  --table-add-button-border-color: #3a3a3c;
  --table-border-color: #3a3a3c;
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-drag-handle-color: oklch(45.31% 0.0049 91.5721);
  --table-drag-handle-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --table-header-background: oklch(32.14% 0.0037 84.5916);
  --table-header-border-color: #3a3a3c;
  --table-header-color: oklch(0.9901 0.0161 95.22);
  --table-header-weight: 600;
  --table-selection: rgba(115, 217, 208, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(115, 217, 208, 0.1);
  --tag-background-hover: rgba(115, 217, 208, 0.2);
  --tag-border-color: rgba(115, 217, 208, 0.15);
  --tag-border-color-hover: rgba(115, 217, 208, 0.15);
  --tag-color: rgb(0, 0, 0);
  --tag-color-hover: rgb(0, 0, 0);
  --tertiary: var(--text-accent-hover);
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-accent: rgb(0, 0, 0);
  --text-accent-hover: rgb(0, 0, 0);
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-error: oklch(59.71% 0.1691 28.3687);
  --text-faint: oklch(45.31% 0.0049 91.5721);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-muted: oklch(84.63% 0.0136 102.1557);
  --text-normal: oklch(0.9901 0.0161 95.22);
  --text-on-accent: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --text-selection: rgba(115, 217, 208, 0.33);
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-success: oklch(65.13% 0.1241 119.4018);
  --text-warning: oklch(65.76% 0.1539 49.2911);
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: oklch(27.34% 0.0023 67.5746);
  --titlebar-background-focused: oklch(32.14% 0.0037 84.5916);
  --titlebar-border-color: #3a3a3c;
  --titlebar-text-color: oklch(84.63% 0.0136 102.1557);
  --titlebar-text-color-focused: oklch(0.9901 0.0161 95.22);
  --traffic-lights-offset-x: 60px;
  --traffic-lights-offset-y: 60px;
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
  --vault-profile-color: oklch(0.9901 0.0161 95.22);
  --vault-profile-color-hover: oklch(0.9901 0.0161 95.22);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.2734 0.0023 67.5746);
  color: oklch(0.9901 0.0161 95.22);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.2734 0.0023 67.5746);
  color: oklch(0.9901 0.0161 95.22);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 58, 60);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-left-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

body div#quartz-root {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0.5971 0.1691 28.3687);
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration: oklch(0.5971 0.1691 28.3687);
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

body .page article p > em, em {
  color: oklch(0.7346 0.1461 87.4626);
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration: oklch(0.7346 0.1461 87.4626);
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

body .page article p > i, i {
  color: oklch(0.7346 0.1461 87.4626);
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration: oklch(0.7346 0.1461 87.4626);
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

body .page article p > strong, strong {
  color: oklch(0.5971 0.1691 28.3687);
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration: oklch(0.5971 0.1691 28.3687);
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

body .text-highlight {
  background-color: rgba(115, 217, 208, 0.2);
  color: oklch(0.9901 0.0161 95.22);
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body del {
  color: oklch(0.9901 0.0161 95.22);
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: line-through oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body p {
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8463 0.0136 102.156) none 0px;
  text-decoration: oklch(0.8463 0.0136 102.156);
  text-decoration-color: oklch(0.8463 0.0136 102.156);
}`,
    links: `body a.external, footer a {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgb(115, 217, 208);
  text-decoration-color: rgb(115, 217, 208);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgb(115, 217, 208);
  text-decoration-color: rgb(115, 217, 208);
}

body a.internal.broken {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgba(115, 217, 208, 0.3);
  text-decoration-color: rgba(115, 217, 208, 0.3);
}`,
    lists: `body dd {
  color: oklch(0.9901 0.0161 95.22);
  margin-left: 0px;
}

body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

body dt {
  color: oklch(0.9901 0.0161 95.22);
}

body ol > li {
  color: oklch(0.9901 0.0161 95.22);
}

body ol.overflow {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body ul > li {
  color: oklch(0.9901 0.0161 95.22);
}

body ul.overflow {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.4531 0.0049 91.5721);
  text-decoration: oklch(0.4531 0.0049 91.5721);
}

body blockquote {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body table {
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
  width: 662px;
}

body td {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

body th {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

body thead {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body tr {
  background-color: oklch(0.3214 0.0037 84.5916);
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    code: `body code {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.3214 0.0037 84.5916);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.3214 0.0037 84.5916);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.9901 0.0161 95.22);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

body pre > code > [data-line] {
  border-left-color: oklch(0.7346 0.1461 87.4626);
  border-left-style: solid;
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.7346 0.1461 87.4626);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.7346 0.1461 87.4626);
  border-bottom-style: solid;
  border-left-color: oklch(0.7346 0.1461 87.4626);
  border-left-style: solid;
  border-right-color: oklch(0.7346 0.1461 87.4626);
  border-right-style: solid;
  border-top-color: oklch(0.7346 0.1461 87.4626);
  border-top-style: solid;
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.3214 0.0037 84.5916);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: oklch(0.3214 0.0037 84.5916);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body figcaption {
  color: oklch(0.9901 0.0161 95.22);
  font-size: 19.2px;
}

body figure {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body img {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

body video {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
}

body .footnotes {
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
}

body .transclude {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: rgb(115, 217, 208);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body .transclude-inner {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: rgb(115, 217, 208);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.8463 0.0136 102.156);
  text-decoration: line-through oklch(0.8463 0.0136 102.156);
  text-decoration-color: oklch(0.8463 0.0136 102.156);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.4531 0.0049 91.5721);
  border-left-color: oklch(0.4531 0.0049 91.5721);
  border-right-color: oklch(0.4531 0.0049 91.5721);
  border-top-color: oklch(0.4531 0.0049 91.5721);
  margin-right: 11.52px;
}

body li.task-list-item[data-task='!'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='*'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='-'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='/'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='>'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='?'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='I'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='S'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='b'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='c'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='d'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='f'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='i'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='k'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='l'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='p'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='u'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body li.task-list-item[data-task='w'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

body .callout[data-callout="abstract"] {
  --callout-color: 58, 169, 159;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 209, 77, 65;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 209, 77, 65;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 139, 126, 200;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 209, 77, 65;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 67, 133, 190;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 67, 133, 190;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 218, 112, 44;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 135, 154, 57;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 58, 169, 159;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 67, 133, 190;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 218, 112, 44;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: rgb(58, 58, 60);
  border-bottom-width: 1px;
  border-left-color: rgb(58, 58, 60);
  border-left-width: 1px;
  border-right-color: rgb(58, 58, 60);
  border-right-width: 1px;
  border-top-color: rgb(58, 58, 60);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.3651 0.0043 67.5809);
  border-left-color: oklch(0.3651 0.0043 67.5809);
  border-right-color: oklch(0.3651 0.0043 67.5809);
  border-top-color: oklch(0.3651 0.0043 67.5809);
}

body .search > .search-container > .search-space > * {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.9901 0.0161 95.22);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0.9901 0.0161 95.22);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.3651 0.0043 67.5809);
  border-left-color: oklch(0.3651 0.0043 67.5809);
  border-right-color: oklch(0.3651 0.0043 67.5809);
  border-top-color: oklch(0.3651 0.0043 67.5809);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.2734 0.0023 67.5746);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(58, 58, 60);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(115, 217, 208, 0.1);
  border-bottom-color: rgba(115, 217, 208, 0.15);
  border-bottom-left-radius: 33.6px;
  border-bottom-right-radius: 33.6px;
  border-left-color: rgba(115, 217, 208, 0.15);
  border-right-color: rgba(115, 217, 208, 0.15);
  border-top-color: rgba(115, 217, 208, 0.15);
  border-top-left-radius: 33.6px;
  border-top-right-radius: 33.6px;
}

body a.internal.tag-link::before {
  color: rgb(115, 217, 208);
}

body h1 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: oklch(0.9901 0.0161 95.22);
}`,
    scrollbars: `body .callout {
  --callout-color: 67, 133, 190;
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
}

body ::-webkit-scrollbar {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(115, 217, 208);
  border-bottom-color: oklch(0.15 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-left-color: oklch(0.15 0 0);
  border-left-style: solid;
  border-right-color: oklch(0.15 0 0);
  border-right-style: solid;
  border-top-color: oklch(0.15 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  color: oklch(0.15 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-bottom-style: solid;
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-left-style: solid;
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-right-style: solid;
  border-top-color: oklch(0.8463 0.0136 102.156);
  border-top-style: solid;
  color: oklch(0.8463 0.0136 102.156);
}`,
    footer: `body footer {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: oklch(0.8463 0.0136 102.156);
  text-decoration: oklch(0.8463 0.0136 102.156);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body li.section-li > .section .meta {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
}

body ul.section-ul {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: oklch(0.8463 0.0136 102.156);
  stroke: oklch(0.8463 0.0136 102.156);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: oklch(0.4531 0.0049 91.5721);
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
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

body .navigation-progress {
  background-color: oklch(0.2734 0.0023 67.5746);
}

body .page-header h2.page-title {
  color: oklch(0.9901 0.0161 95.22);
}

body abbr {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: underline dotted oklch(0.9901 0.0161 95.22);
}

body details {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
}

body input[type=text] {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
  color: oklch(0.8463 0.0136 102.156);
}

body kbd {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-bottom-style: solid;
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-left-style: solid;
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-right-style: solid;
  border-top-color: oklch(0.9901 0.0161 95.22);
  border-top-style: solid;
  color: oklch(0.9901 0.0161 95.22);
  font-size: 16.8px;
  padding-bottom: 1.68px;
  padding-left: 4.2px;
  padding-right: 4.2px;
  padding-top: 1.68px;
}

body progress {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}

body sub {
  color: oklch(0.9901 0.0161 95.22);
  font-size: 14.4px;
  vertical-align: baseline;
}

body summary {
  color: oklch(0.9901 0.0161 95.22);
}

body sup {
  color: oklch(0.9901 0.0161 95.22);
  font-size: 14.4px;
  vertical-align: baseline;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 175;
  --accent-l: 33%;
  --accent-s: 57%;
  --auger-light-background-primary: #fbfbfa;
  --auger-light-text-normal: #3a3633;
  --background-modifier-active-hover: rgba(36, 132, 124, 0.1);
  --background-modifier-border: #e5e4e3;
  --background-modifier-border-focus: oklch(84.63% 0.0136 102.1557);
  --background-modifier-border-hover: oklch(88.10% 0.0136 97.5453);
  --background-modifier-error: oklch(50.43% 0.1648 27.8298);
  --background-modifier-error-hover: oklch(50.43% 0.1648 27.8298);
  --background-modifier-form-field: oklch(99.01% 0.0160 95.2865);
  --background-modifier-form-field-hover: oklch(99.01% 0.0160 95.2865);
  --background-modifier-hover: #e0e0de;
  --background-modifier-success: oklch(55.93% 0.1335 122.9402);
  --background-primary: #fbfbfa;
  --background-primary-alt: #f7f7f6;
  --background-secondary: #f4f4f3;
  --background-secondary-alt: #efefed;
  --bases-cards-background: #fbfbfa;
  --bases-cards-cover-background: #f7f7f6;
  --bases-cards-shadow: 0 0 0 1px #e5e4e3;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(88.10% 0.0136 97.5453);
  --bases-embed-border-color: #e5e4e3;
  --bases-group-heading-property-color: #8a8785;
  --bases-table-border-color: #e5e4e3;
  --bases-table-cell-background-active: #fbfbfa;
  --bases-table-cell-background-disabled: #f7f7f6;
  --bases-table-cell-background-selected: rgba(36, 132, 124, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(84.63% 0.0136 102.1557);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-group-background: #f7f7f6;
  --bases-table-header-background: #fbfbfa;
  --bases-table-header-background-hover: #e0e0de;
  --bases-table-header-color: #8a8785;
  --bases-table-summary-background: #fbfbfa;
  --bases-table-summary-background-hover: #e0e0de;
  --blockquote-border-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, #fbfbfa 65%, transparent) linear-gradient(#fbfbfa, color-mix(in srgb, #fbfbfa 65%, transparent));
  --bold-color: #FF3B30;
  --bold-weight: 600;
  --callout-title-weight: 600;
  --canvas-background: #fbfbfa;
  --canvas-card-label-color: oklch(77.21% 0.0127 96.5429);
  --canvas-dot-pattern: oklch(91.74% 0.0148 98.3812);
  --caret-color: #3a3633;
  --checkbox-border-color: oklch(77.21% 0.0127 96.5429);
  --checkbox-border-color-hover: #8a8785;
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(41, 153, 138);
  --checkbox-marker-color: #fbfbfa;
  --checklist-done-color: #8a8785;
  --code-background: #f7f7f6;
  --code-border-color: #e5e4e3;
  --code-bracket-background: #e0e0de;
  --code-comment: oklch(77.21% 0.0127 96.5429);
  --code-function: oklch(63.33% 0.1294 85.8140);
  --code-important: oklch(56.65% 0.1523 45.0111);
  --code-keyword: oklch(49.54% 0.1614 349.7445);
  --code-normal: #3a3633;
  --code-operator: oklch(50.43% 0.1648 27.8298);
  --code-property: oklch(55.44% 0.0863 186.7772);
  --code-punctuation: #8a8785;
  --code-string: oklch(55.93% 0.1335 122.9402);
  --code-tag: oklch(50.43% 0.1648 27.8298);
  --code-value: oklch(45.40% 0.1451 294.8244);
  --collapse-icon-color: oklch(77.21% 0.0127 96.5429);
  --collapse-icon-color-collapsed: rgb(0, 0, 0);
  --color-accent: rgb(36, 132, 124);
  --color-accent-1: rgb(37, 141, 131);
  --color-accent-2: rgb(41, 153, 138);
  --color-accent-hsl: 175, 57%, 33%;
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
  --default-transition-duration: 150ms;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  --divider-color: #e5e4e3;
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background: oklch(99.01% 0.0160 95.2865);
  --dropdown-background-hover: oklch(95.37% 0.0147 98.3751);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --embed-block-shadow-hover: 0 0 0 1px #e5e4e3, inset 0 0 0 1px #e5e4e3;
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: #fbfbfa;
  --file-header-background-focused: #fbfbfa;
  --flair-background: oklch(99.01% 0.0160 95.2865);
  --flair-color: #3a3633;
  --font-mono: '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-sans: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight-medium: 500;
  --footnote-divider-color: #e5e4e3;
  --footnote-id-color: #8a8785;
  --footnote-id-color-no-occurrences: oklch(77.21% 0.0127 96.5429);
  --footnote-input-background-active: #e0e0de;
  --graph-line: oklch(88.10% 0.0136 97.5453);
  --graph-node: #8a8785;
  --graph-node-attachment: oklch(63.33% 0.1294 85.8140);
  --graph-node-focused: rgb(0, 0, 0);
  --graph-node-tag: oklch(55.93% 0.1335 122.9402);
  --graph-node-unresolved: oklch(77.21% 0.0127 96.5429);
  --graph-text: #3a3633;
  --gray: var(--text-muted);
  --header-height: 60px;
  --heading-formatting: oklch(77.21% 0.0127 96.5429);
  --heading-spacing: 2.5rem;
  --highlight: var(--text-highlight-bg);
  --hr-color: #e5e4e3;
  --icon-color: #8a8785;
  --icon-color-active: rgb(0, 0, 0);
  --icon-color-focused: #3a3633;
  --icon-color-hover: #8a8785;
  --inline-title-size: 3rem;
  --inline-title-weight: 400;
  --input-date-separator: oklch(77.21% 0.0127 96.5429);
  --input-placeholder-color: oklch(77.21% 0.0127 96.5429);
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(41, 153, 138);
  --interactive-accent-hsl: 175, 57%, 33%;
  --interactive-hover: oklch(95.37% 0.0147 98.3751);
  --interactive-normal: oklch(99.01% 0.0160 95.2865);
  --italic-color: #FF9500;
  --leading-relaxed: 1.625;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(0, 0, 0);
  --link-color-hover: rgb(0, 0, 0);
  --link-decoration: none;
  --link-external-color: rgb(0, 0, 0);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(0, 0, 0);
  --link-unresolved-decoration-color: rgba(36, 132, 124, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: oklch(77.21% 0.0127 96.5429);
  --list-marker-color-collapsed: rgb(0, 0, 0);
  --list-marker-color-hover: #8a8785;
  --menu-background: #f4f4f3;
  --menu-border-color: oklch(88.10% 0.0136 97.5453);
  --metadata-border-color: #e5e4e3;
  --metadata-divider-color: #e5e4e3;
  --metadata-input-background-active: #e0e0de;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #3a3633;
  --metadata-label-background-active: #e0e0de;
  --metadata-label-text-color: #8a8785;
  --metadata-label-text-color-hover: #8a8785;
  --metadata-property-background-active: #e0e0de;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(84.63% 0.0136 102.1557);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(88.10% 0.0136 97.5453);
  --modal-background: #fbfbfa;
  --modal-border-color: oklch(84.63% 0.0136 102.1557);
  --nav-collapse-icon-color: oklch(77.21% 0.0127 96.5429);
  --nav-collapse-icon-color-collapsed: oklch(77.21% 0.0127 96.5429);
  --nav-heading-color: #3a3633;
  --nav-heading-color-collapsed: oklch(77.21% 0.0127 96.5429);
  --nav-heading-color-collapsed-hover: #8a8785;
  --nav-heading-color-hover: #3a3633;
  --nav-item-background-active: #e0e0de;
  --nav-item-background-hover: #e0e0de;
  --nav-item-background-selected: rgba(36, 132, 124, 0.15);
  --nav-item-color: #8a8785;
  --nav-item-color-active: #3a3633;
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --nav-item-color-hover: #3a3633;
  --nav-item-color-selected: #3a3633;
  --nav-tag-color: oklch(77.21% 0.0127 96.5429);
  --nav-tag-color-active: #8a8785;
  --nav-tag-color-hover: #8a8785;
  --pdf-background: #fbfbfa;
  --pdf-page-background: #fbfbfa;
  --pdf-sidebar-background: #fbfbfa;
  --pill-border-color: #e5e4e3;
  --pill-border-color-hover: oklch(88.10% 0.0136 97.5453);
  --pill-color: #8a8785;
  --pill-color-hover: #3a3633;
  --pill-color-remove: oklch(77.21% 0.0127 96.5429);
  --pill-color-remove-hover: rgb(0, 0, 0);
  --prompt-background: #fbfbfa;
  --prompt-border-color: oklch(84.63% 0.0136 102.1557);
  --radius-md: 0.375rem;
  --radius-sm: 0.25rem;
  --raised-background: color-mix(in srgb, #fbfbfa 65%, transparent) linear-gradient(#fbfbfa, color-mix(in srgb, #fbfbfa 65%, transparent));
  --ribbon-background: #f4f4f3;
  --ribbon-background-collapsed: #fbfbfa;
  --search-clear-button-color: #8a8785;
  --search-icon-color: #8a8785;
  --search-result-background: #fbfbfa;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #3a3633;
  --setting-items-background: #f7f7f6;
  --setting-items-border-color: #e5e4e3;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: oklch(88.10% 0.0136 97.5453);
  --slider-track-background: #e5e4e3;
  --spacing: 0.25rem;
  --status-bar-background: #f4f4f3;
  --status-bar-border-color: #e5e4e3;
  --status-bar-text-color: #8a8785;
  --suggestion-background: #fbfbfa;
  --sync-avatar-color-1: oklch(50.43% 0.1648 27.8298);
  --sync-avatar-color-2: oklch(56.65% 0.1523 45.0111);
  --sync-avatar-color-3: oklch(63.33% 0.1294 85.8140);
  --sync-avatar-color-4: oklch(55.93% 0.1335 122.9402);
  --sync-avatar-color-5: oklch(55.44% 0.0863 186.7772);
  --sync-avatar-color-6: oklch(48.18% 0.1315 254.7968);
  --sync-avatar-color-7: oklch(45.40% 0.1451 294.8244);
  --sync-avatar-color-8: oklch(49.54% 0.1614 349.7445);
  --tab-background-active: rgb(0, 0, 0);
  --tab-background-focused-active: rgb(0, 0, 0);
  --tab-container-background: #f4f4f3;
  --tab-divider-color: oklch(88.10% 0.0136 97.5453);
  --tab-outline-color: #e5e4e3;
  --tab-stacked-header-width: 60px;
  --tab-switcher-background: #f4f4f3;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f4f3, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 132, 124);
  --tab-text-color: oklch(77.21% 0.0127 96.5429);
  --tab-text-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-focused: #8a8785;
  --tab-text-color-focused-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --tab-text-color-focused-active-current: #3a3633;
  --tab-text-color-focused-highlighted: rgb(0, 0, 0);
  --table-add-button-border-color: #e5e4e3;
  --table-border-color: #e5e4e3;
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-drag-handle-color: oklch(77.21% 0.0127 96.5429);
  --table-drag-handle-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --table-header-background: #efefed;
  --table-header-border-color: #e5e4e3;
  --table-header-color: #3a3633;
  --table-header-weight: 600;
  --table-selection: rgba(36, 132, 124, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(36, 132, 124, 0.1);
  --tag-background-hover: rgba(36, 132, 124, 0.2);
  --tag-border-color: rgba(36, 132, 124, 0.15);
  --tag-border-color-hover: rgba(36, 132, 124, 0.15);
  --tag-color: rgb(0, 0, 0);
  --tag-color-hover: rgb(0, 0, 0);
  --tertiary: var(--text-accent-hover);
  --text-2xl: 2.25rem;
  --text-2xl--line-height: 1.33333;
  --text-3xl: 3rem;
  --text-3xl--line-height: 1.2;
  --text-4xl: 3.75rem;
  --text-4xl--line-height: 1.11111;
  --text-accent: rgb(0, 0, 0);
  --text-accent-hover: rgb(0, 0, 0);
  --text-base: 1.2rem;
  --text-base--line-height: 1.5;
  --text-error: oklch(50.43% 0.1648 27.8298);
  --text-faint: oklch(77.21% 0.0127 96.5429);
  --text-highlight-bg: rgb(0, 0, 0);
  --text-lg: 1.4rem;
  --text-lg--line-height: 1.55556;
  --text-muted: #8a8785;
  --text-normal: #3a3633;
  --text-on-accent: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0);
  --text-selection: rgba(36, 132, 124, 0.2);
  --text-sm: 1rem;
  --text-sm--line-height: 1.42857;
  --text-success: oklch(55.93% 0.1335 122.9402);
  --text-warning: oklch(56.65% 0.1523 45.0111);
  --text-xl: 1.8rem;
  --text-xl--line-height: 1.4;
  --text-xs: 0.75rem;
  --text-xs--line-height: 1.33333;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #f4f4f3;
  --titlebar-background-focused: #efefed;
  --titlebar-border-color: #e5e4e3;
  --titlebar-text-color: #8a8785;
  --titlebar-text-color-focused: #3a3633;
  --traffic-lights-offset-x: 60px;
  --traffic-lights-offset-y: 60px;
  --tw-border-style: solid;
  --tw-content: "";
  --tw-shadow: 0 0 #0000;
  --vault-profile-color: #3a3633;
  --vault-profile-color-hover: #3a3633;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 243);
  color: rgb(58, 54, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 243);
  color: rgb(58, 54, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 228, 227);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 243);
  border-left-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

body div#quartz-root {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 59, 48);
  outline: rgb(255, 59, 48) none 0px;
  text-decoration: rgb(255, 59, 48);
  text-decoration-color: rgb(255, 59, 48);
}

body .page article p > em, em {
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration: rgb(255, 149, 0);
  text-decoration-color: rgb(255, 149, 0);
}

body .page article p > i, i {
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration: rgb(255, 149, 0);
  text-decoration-color: rgb(255, 149, 0);
}

body .page article p > strong, strong {
  color: rgb(255, 59, 48);
  outline: rgb(255, 59, 48) none 0px;
  text-decoration: rgb(255, 59, 48);
  text-decoration-color: rgb(255, 59, 48);
}

body .text-highlight {
  background-color: rgba(36, 132, 124, 0.15);
  color: rgb(58, 54, 51);
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body del {
  color: rgb(58, 54, 51);
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: line-through rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body p {
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 135, 133) none 0px;
  text-decoration: rgb(138, 135, 133);
  text-decoration-color: rgb(138, 135, 133);
}`,
    links: `body a.external, footer a {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

body a.internal.broken {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `body dd {
  color: rgb(58, 54, 51);
  margin-left: 0px;
}

body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

body dt {
  color: rgb(58, 54, 51);
}

body ol > li {
  color: rgb(58, 54, 51);
}

body ol.overflow {
  background-color: rgb(251, 251, 250);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body ul > li {
  color: rgb(58, 54, 51);
}

body ul.overflow {
  background-color: rgb(251, 251, 250);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.7721 0.0127 96.5429);
  text-decoration: oklch(0.7721 0.0127 96.5429);
}

body blockquote {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body table {
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
  width: 662px;
}

body td {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

body th {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

body thead {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body tr {
  background-color: rgb(239, 239, 237);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    code: `body code {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
  color: rgb(58, 54, 51);
  font-family: "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(239, 239, 237);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(239, 239, 237);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(58, 54, 51);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

body pre > code > [data-line] {
  border-left-color: oklch(0.6333 0.1294 85.814);
  border-left-style: solid;
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.6333 0.1294 85.814);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.6333 0.1294 85.814);
  border-bottom-style: solid;
  border-left-color: oklch(0.6333 0.1294 85.814);
  border-left-style: solid;
  border-right-color: oklch(0.6333 0.1294 85.814);
  border-right-style: solid;
  border-top-color: oklch(0.6333 0.1294 85.814);
  border-top-style: solid;
}

body pre > code, pre:has(> code) {
  background-color: rgb(239, 239, 237);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(239, 239, 237);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body figcaption {
  color: rgb(58, 54, 51);
  font-size: 19.2px;
}

body figure {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

body img {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

body video {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    embeds: `body .file-embed {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
}

body .footnotes {
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
}

body .transclude {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body .transclude-inner {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 135, 133);
  text-decoration: line-through rgb(138, 135, 133);
  text-decoration-color: rgb(138, 135, 133);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.7721 0.0127 96.5429);
  border-left-color: oklch(0.7721 0.0127 96.5429);
  border-right-color: oklch(0.7721 0.0127 96.5429);
  border-top-color: oklch(0.7721 0.0127 96.5429);
  margin-right: 11.52px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(229, 228, 227);
  border-bottom-width: 1px;
  border-left-color: rgb(229, 228, 227);
  border-left-width: 1px;
  border-right-color: rgb(229, 228, 227);
  border-right-width: 1px;
  border-top-color: rgb(229, 228, 227);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.9901 0.016 95.2865);
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 250);
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
}

body .search > .search-container > .search-space > * {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 54, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(58, 54, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(224, 224, 222);
  color: rgb(58, 54, 51);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 244, 243);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(224, 224, 222);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(224, 224, 222);
  color: rgb(58, 54, 51);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-bottom-left-radius: 33.6px;
  border-bottom-right-radius: 33.6px;
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
  border-top-left-radius: 33.6px;
  border-top-right-radius: 33.6px;
}

body a.internal.tag-link::before {
  color: rgb(36, 132, 124);
}

body h1 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(58, 54, 51);
}`,
    scrollbars: `body .callout {
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
}

body ::-webkit-scrollbar {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(36, 132, 124);
  border-bottom-color: oklch(0.15 0 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-left-color: oklch(0.15 0 0);
  border-left-style: solid;
  border-right-color: oklch(0.15 0 0);
  border-right-style: solid;
  border-top-color: oklch(0.15 0 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  color: oklch(0.15 0 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 135, 133);
  border-bottom-style: solid;
  border-left-color: rgb(138, 135, 133);
  border-left-style: solid;
  border-right-color: rgb(138, 135, 133);
  border-right-style: solid;
  border-top-color: rgb(138, 135, 133);
  border-top-style: solid;
  color: rgb(138, 135, 133);
}`,
    footer: `body footer {
  background-color: rgb(244, 244, 243);
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(138, 135, 133);
  text-decoration: rgb(138, 135, 133);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body li.section-li > .section .meta {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
}

body ul.section-ul {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(138, 135, 133);
  stroke: rgb(138, 135, 133);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: oklch(0.7721 0.0127 96.5429);
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
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

body .navigation-progress {
  background-color: rgb(244, 244, 243);
}

body .page-header h2.page-title {
  color: rgb(58, 54, 51);
}

body abbr {
  color: rgb(58, 54, 51);
  text-decoration: underline dotted rgb(58, 54, 51);
}

body details {
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
}

body input[type=text] {
  border-bottom-color: rgb(138, 135, 133);
  border-left-color: rgb(138, 135, 133);
  border-right-color: rgb(138, 135, 133);
  border-top-color: rgb(138, 135, 133);
  color: rgb(138, 135, 133);
}

body kbd {
  background-color: rgb(247, 247, 246);
  border-bottom-color: rgb(58, 54, 51);
  border-bottom-style: solid;
  border-left-color: rgb(58, 54, 51);
  border-left-style: solid;
  border-right-color: rgb(58, 54, 51);
  border-right-style: solid;
  border-top-color: rgb(58, 54, 51);
  border-top-style: solid;
  color: rgb(58, 54, 51);
  font-size: 16.8px;
  padding-bottom: 1.68px;
  padding-left: 4.2px;
  padding-right: 4.2px;
  padding-top: 1.68px;
}

body progress {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}

body sub {
  color: rgb(58, 54, 51);
  font-size: 14.4px;
  vertical-align: baseline;
}

body summary {
  color: rgb(58, 54, 51);
}

body sup {
  color: rgb(58, 54, 51);
  font-size: 14.4px;
  vertical-align: baseline;
}`,
  },
};
