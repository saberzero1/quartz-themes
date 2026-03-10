import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "auger", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 175 !important;
  --accent-l: 65% !important;
  --accent-s: 57% !important;
  --auger-light-background-primary: #fbfbfa !important;
  --auger-light-text-normal: #3a3633 !important;
  --background-modifier-active-hover: rgba(115, 217, 208, 0.1) !important;
  --background-modifier-border: #3a3a3c !important;
  --background-modifier-border-focus: oklch(36.51% 0.0043 67.5809) !important;
  --background-modifier-border-hover: oklch(32.14% 0.0037 84.5916) !important;
  --background-modifier-error: oklch(59.71% 0.1691 28.3687) !important;
  --background-modifier-error-hover: oklch(59.71% 0.1691 28.3687) !important;
  --background-modifier-error-rgb: 209, 77, 65 !important;
  --background-modifier-form-field: oklch(27.34% 0.0023 67.5746) !important;
  --background-modifier-form-field-hover: oklch(27.34% 0.0023 67.5746) !important;
  --background-modifier-hover: #3a3a3c !important;
  --background-modifier-success: oklch(65.13% 0.1241 119.4018) !important;
  --background-modifier-success-rgb: 135, 154, 57 !important;
  --background-primary: oklch(22.28% 0.0025 67.5819) !important;
  --background-primary-alt: oklch(22.28% 0.0025 67.5819) !important;
  --background-secondary: oklch(27.34% 0.0023 67.5746) !important;
  --background-secondary-alt: oklch(32.14% 0.0037 84.5916) !important;
  --bases-cards-background: oklch(22.28% 0.0025 67.5819) !important;
  --bases-cards-cover-background: oklch(22.28% 0.0025 67.5819) !important;
  --bases-cards-shadow: 0 0 0 1px #3a3a3c !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(32.14% 0.0037 84.5916) !important;
  --bases-embed-border-color: #3a3a3c !important;
  --bases-group-heading-property-color: oklch(84.63% 0.0136 102.1557) !important;
  --bases-table-border-color: #3a3a3c !important;
  --bases-table-cell-background-active: oklch(22.28% 0.0025 67.5819) !important;
  --bases-table-cell-background-disabled: oklch(22.28% 0.0025 67.5819) !important;
  --bases-table-cell-background-selected: rgba(115, 217, 208, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(36.51% 0.0043 67.5809) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0) !important;
  --bases-table-group-background: oklch(22.28% 0.0025 67.5819) !important;
  --bases-table-header-background: oklch(22.28% 0.0025 67.5819) !important;
  --bases-table-header-background-hover: #3a3a3c !important;
  --bases-table-header-color: oklch(84.63% 0.0136 102.1557) !important;
  --bases-table-summary-background: oklch(22.28% 0.0025 67.5819) !important;
  --bases-table-summary-background-hover: #3a3a3c !important;
  --blockquote-border-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent) linear-gradient(oklch(27.34% 0.0023 67.5746), color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent)) !important;
  --bold-color: oklch(59.71% 0.1691 28.3687) !important;
  --bold-weight: 600 !important;
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
  --canvas-background: oklch(22.28% 0.0025 67.5819) !important;
  --canvas-card-label-color: oklch(45.31% 0.0049 91.5721) !important;
  --canvas-color-1: 209, 77, 65 !important;
  --canvas-color-2: 218, 112, 44 !important;
  --canvas-color-3: 208, 162, 21 !important;
  --canvas-color-4: 135, 154, 57 !important;
  --canvas-color-5: 58, 169, 159 !important;
  --canvas-color-6: 139, 126, 200 !important;
  --canvas-dot-pattern: oklch(27.34% 0.0023 67.5746) !important;
  --caret-color: oklch(0.9901 0.0161 95.22) !important;
  --checkbox-border-color: oklch(45.31% 0.0049 91.5721) !important;
  --checkbox-border-color-hover: oklch(84.63% 0.0136 102.1557) !important;
  --checkbox-color: rgb(0, 0, 0) !important;
  --checkbox-color-hover: rgb(154, 228, 218) !important;
  --checkbox-marker-color: oklch(22.28% 0.0025 67.5819) !important;
  --checklist-done-color: oklch(84.63% 0.0136 102.1557) !important;
  --code-background: oklch(22.28% 0.0025 67.5819) !important;
  --code-border-color: #3a3a3c !important;
  --code-bracket-background: #3a3a3c !important;
  --code-comment: oklch(45.31% 0.0049 91.5721) !important;
  --code-function: oklch(73.46% 0.1461 87.4626) !important;
  --code-important: oklch(65.76% 0.1539 49.2911) !important;
  --code-keyword: oklch(63.48% 0.1565 350.4570) !important;
  --code-normal: oklch(0.9901 0.0161 95.22) !important;
  --code-operator: oklch(59.71% 0.1691 28.3687) !important;
  --code-property: oklch(67.01% 0.0999 186.6127) !important;
  --code-punctuation: oklch(84.63% 0.0136 102.1557) !important;
  --code-string: oklch(65.13% 0.1241 119.4018) !important;
  --code-tag: oklch(59.71% 0.1691 28.3687) !important;
  --code-value: oklch(63.48% 0.1099 290.9867) !important;
  --collapse-icon-color: oklch(45.31% 0.0049 91.5721) !important;
  --collapse-icon-color-collapsed: rgb(0, 0, 0) !important;
  --color-accent: rgb(115, 217, 208) !important;
  --color-accent-1: rgb(154, 228, 218) !important;
  --color-accent-2: rgb(190, 239, 231) !important;
  --color-accent-hsl: 175, 57%, 65% !important;
  --color-base-00: oklch(16.96% 0.0017 16.8596) !important;
  --color-base-05: oklch(16.96% 0.0017 16.8596) !important;
  --color-base-10: oklch(22.28% 0.0025 67.5819) !important;
  --color-base-100: oklch(84.63% 0.0136 102.1557) !important;
  --color-base-20: oklch(22.28% 0.0025 67.5819) !important;
  --color-base-25: oklch(27.34% 0.0023 67.5746) !important;
  --color-base-30: oklch(27.34% 0.0023 67.5746) !important;
  --color-base-35: oklch(32.14% 0.0037 84.5916) !important;
  --color-base-40: oklch(36.51% 0.0043 67.5809) !important;
  --color-base-50: oklch(45.31% 0.0049 91.5721) !important;
  --color-base-60: oklch(53.75% 0.0077 97.5372) !important;
  --color-base-70: oklch(61.69% 0.0077 88.7146) !important;
  --color-blue: oklch(59.88% 0.1105 247.0083) !important;
  --color-blue-rgb: 67, 133, 190 !important;
  --color-cyan: oklch(67.01% 0.0999 186.6127) !important;
  --color-cyan-rgb: 58, 169, 159 !important;
  --color-green: oklch(65.13% 0.1241 119.4018) !important;
  --color-green-rgb: 135, 154, 57 !important;
  --color-neutral-200: oklch(92.2% 0 0) !important;
  --color-neutral-700: oklch(37.1% 0 0) !important;
  --color-orange: oklch(65.76% 0.1539 49.2911) !important;
  --color-orange-rgb: 218, 112, 44 !important;
  --color-paper: oklch(0.9901 0.0161 95.22) !important;
  --color-pink: oklch(63.48% 0.1565 350.4570) !important;
  --color-pink-rgb: 206, 93, 151 !important;
  --color-purple: oklch(63.48% 0.1099 290.9867) !important;
  --color-purple-rgb: 139, 126, 200 !important;
  --color-red: oklch(59.71% 0.1691 28.3687) !important;
  --color-red-rgb: 209, 77, 65 !important;
  --color-white: #fff !important;
  --color-yellow: oklch(73.46% 0.1461 87.4626) !important;
  --color-yellow-rgb: 208, 162, 21 !important;
  --dark: oklch(0.9901 0.0161 95.22) !important;
  --darkgray: oklch(0.9901 0.0161 95.22) !important;
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace !important;
  --default-transition-duration: 150ms !important;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --divider-color: #3a3a3c !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background: oklch(27.34% 0.0023 67.5746) !important;
  --dropdown-background-hover: oklch(32.14% 0.0037 84.5916) !important;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --embed-block-shadow-hover: 0 0 0 1px #3a3a3c, inset 0 0 0 1px #3a3a3c !important;
  --embed-border-start: 2px solid rgb(0, 0, 0) !important;
  --file-header-background: oklch(22.28% 0.0025 67.5819) !important;
  --file-header-background-focused: oklch(22.28% 0.0025 67.5819) !important;
  --flair-background: oklch(27.34% 0.0023 67.5746) !important;
  --flair-color: oklch(0.9901 0.0161 95.22) !important;
  --font-mono: '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-sans: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-weight-medium: 500 !important;
  --footnote-divider-color: #3a3a3c !important;
  --footnote-id-color: oklch(84.63% 0.0136 102.1557) !important;
  --footnote-id-color-no-occurrences: oklch(45.31% 0.0049 91.5721) !important;
  --footnote-input-background-active: #3a3a3c !important;
  --graph-line: oklch(32.14% 0.0037 84.5916) !important;
  --graph-node: oklch(84.63% 0.0136 102.1557) !important;
  --graph-node-attachment: oklch(73.46% 0.1461 87.4626) !important;
  --graph-node-focused: rgb(0, 0, 0) !important;
  --graph-node-tag: oklch(65.13% 0.1241 119.4018) !important;
  --graph-node-unresolved: oklch(45.31% 0.0049 91.5721) !important;
  --graph-text: oklch(0.9901 0.0161 95.22) !important;
  --gray: oklch(84.63% 0.0136 102.1557) !important;
  --header-height: 60px !important;
  --heading-formatting: oklch(45.31% 0.0049 91.5721) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: #3a3a3c !important;
  --icon-color: oklch(84.63% 0.0136 102.1557) !important;
  --icon-color-active: rgb(0, 0, 0) !important;
  --icon-color-focused: oklch(0.9901 0.0161 95.22) !important;
  --icon-color-hover: oklch(84.63% 0.0136 102.1557) !important;
  --inline-title-size: 3rem !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: oklch(45.31% 0.0049 91.5721) !important;
  --input-placeholder-color: oklch(45.31% 0.0049 91.5721) !important;
  --interactive-accent: rgb(0, 0, 0) !important;
  --interactive-accent-hover: rgb(154, 228, 218) !important;
  --interactive-accent-hsl: 175, 57%, 65% !important;
  --interactive-hover: oklch(32.14% 0.0037 84.5916) !important;
  --interactive-normal: oklch(27.34% 0.0023 67.5746) !important;
  --italic-color: oklch(73.46% 0.1461 87.4626) !important;
  --leading-relaxed: 1.625 !important;
  --light: oklch(22.28% 0.0025 67.5819) !important;
  --lightgray: oklch(27.34% 0.0023 67.5746) !important;
  --link-color: rgb(0, 0, 0) !important;
  --link-color-hover: rgb(0, 0, 0) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(0, 0, 0) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(0, 0, 0) !important;
  --link-unresolved-decoration-color: rgba(115, 217, 208, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: oklch(45.31% 0.0049 91.5721) !important;
  --list-marker-color-collapsed: rgb(0, 0, 0) !important;
  --list-marker-color-hover: oklch(84.63% 0.0136 102.1557) !important;
  --menu-background: oklch(27.34% 0.0023 67.5746) !important;
  --menu-border-color: oklch(32.14% 0.0037 84.5916) !important;
  --metadata-border-color: #3a3a3c !important;
  --metadata-divider-color: #3a3a3c !important;
  --metadata-input-background-active: #3a3a3c !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: oklch(0.9901 0.0161 95.22) !important;
  --metadata-label-background-active: #3a3a3c !important;
  --metadata-label-text-color: oklch(84.63% 0.0136 102.1557) !important;
  --metadata-label-text-color-hover: oklch(84.63% 0.0136 102.1557) !important;
  --metadata-property-background-active: #3a3a3c !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(36.51% 0.0043 67.5809) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(32.14% 0.0037 84.5916) !important;
  --modal-background: oklch(22.28% 0.0025 67.5819) !important;
  --modal-border-color: oklch(36.51% 0.0043 67.5809) !important;
  --nav-collapse-icon-color: oklch(45.31% 0.0049 91.5721) !important;
  --nav-collapse-icon-color-collapsed: oklch(45.31% 0.0049 91.5721) !important;
  --nav-heading-color: oklch(0.9901 0.0161 95.22) !important;
  --nav-heading-color-collapsed: oklch(45.31% 0.0049 91.5721) !important;
  --nav-heading-color-collapsed-hover: oklch(84.63% 0.0136 102.1557) !important;
  --nav-heading-color-hover: oklch(0.9901 0.0161 95.22) !important;
  --nav-item-background-active: #3a3a3c !important;
  --nav-item-background-hover: #3a3a3c !important;
  --nav-item-background-selected: rgba(115, 217, 208, 0.15) !important;
  --nav-item-color: oklch(84.63% 0.0136 102.1557) !important;
  --nav-item-color-active: oklch(0.9901 0.0161 95.22) !important;
  --nav-item-color-highlighted: rgb(0, 0, 0) !important;
  --nav-item-color-hover: oklch(0.9901 0.0161 95.22) !important;
  --nav-item-color-selected: oklch(0.9901 0.0161 95.22) !important;
  --nav-tag-color: oklch(45.31% 0.0049 91.5721) !important;
  --nav-tag-color-active: oklch(84.63% 0.0136 102.1557) !important;
  --nav-tag-color-hover: oklch(84.63% 0.0136 102.1557) !important;
  --pdf-background: oklch(22.28% 0.0025 67.5819) !important;
  --pdf-page-background: oklch(22.28% 0.0025 67.5819) !important;
  --pdf-shadow: 0 0 0 1px #3a3a3c !important;
  --pdf-sidebar-background: oklch(22.28% 0.0025 67.5819) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3a3a3c !important;
  --pill-border-color: #3a3a3c !important;
  --pill-border-color-hover: oklch(32.14% 0.0037 84.5916) !important;
  --pill-color: oklch(84.63% 0.0136 102.1557) !important;
  --pill-color-hover: oklch(0.9901 0.0161 95.22) !important;
  --pill-color-remove: oklch(45.31% 0.0049 91.5721) !important;
  --pill-color-remove-hover: rgb(0, 0, 0) !important;
  --prompt-background: oklch(22.28% 0.0025 67.5819) !important;
  --prompt-border-color: oklch(36.51% 0.0043 67.5809) !important;
  --radius-md: 0.375rem !important;
  --radius-sm: 0.25rem !important;
  --raised-background: color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent) linear-gradient(oklch(27.34% 0.0023 67.5746), color-mix(in srgb, oklch(27.34% 0.0023 67.5746) 65%, transparent)) !important;
  --ribbon-background: oklch(27.34% 0.0023 67.5746) !important;
  --ribbon-background-collapsed: oklch(22.28% 0.0025 67.5819) !important;
  --search-clear-button-color: oklch(84.63% 0.0136 102.1557) !important;
  --search-icon-color: oklch(84.63% 0.0136 102.1557) !important;
  --search-result-background: oklch(22.28% 0.0025 67.5819) !important;
  --secondary: rgb(0, 0, 0) !important;
  --setting-group-heading-color: oklch(0.9901 0.0161 95.22) !important;
  --setting-items-background: oklch(22.28% 0.0025 67.5819) !important;
  --setting-items-border-color: #3a3a3c !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: oklch(32.14% 0.0037 84.5916) !important;
  --slider-track-background: #3a3a3c !important;
  --spacing: 0.25rem !important;
  --status-bar-background: oklch(27.34% 0.0023 67.5746) !important;
  --status-bar-border-color: #3a3a3c !important;
  --status-bar-text-color: oklch(84.63% 0.0136 102.1557) !important;
  --suggestion-background: oklch(22.28% 0.0025 67.5819) !important;
  --sync-avatar-color-1: oklch(59.71% 0.1691 28.3687) !important;
  --sync-avatar-color-2: oklch(65.76% 0.1539 49.2911) !important;
  --sync-avatar-color-3: oklch(73.46% 0.1461 87.4626) !important;
  --sync-avatar-color-4: oklch(65.13% 0.1241 119.4018) !important;
  --sync-avatar-color-5: oklch(67.01% 0.0999 186.6127) !important;
  --sync-avatar-color-6: oklch(59.88% 0.1105 247.0083) !important;
  --sync-avatar-color-7: oklch(63.48% 0.1099 290.9867) !important;
  --sync-avatar-color-8: oklch(63.48% 0.1565 350.4570) !important;
  --tab-background-active: rgb(0, 0, 0) !important;
  --tab-background-active-focused: rgb(0, 0, 0) !important;
  --tab-background-focused-active: rgb(0, 0, 0) !important;
  --tab-container-background: oklch(27.34% 0.0023 67.5746) !important;
  --tab-divider-color: oklch(32.14% 0.0037 84.5916) !important;
  --tab-outline-color: #3a3a3c !important;
  --tab-stacked-header-width: 60px !important;
  --tab-switcher-background: oklch(27.34% 0.0023 67.5746) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(27.34% 0.0023 67.5746), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(115, 217, 208) !important;
  --tab-text-color: oklch(0.9901 0.0161 95.22) !important;
  --tab-text-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-active-focused: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-focused: oklch(0.9901 0.0161 95.22) !important;
  --tab-text-color-focused-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-focused-active-current: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-focused-highlighted: oklch(0.9901 0.0161 95.22) !important;
  --table-add-button-border-color: #3a3a3c !important;
  --table-border-color: #3a3a3c !important;
  --table-drag-handle-background-active: rgb(0, 0, 0) !important;
  --table-drag-handle-color: oklch(45.31% 0.0049 91.5721) !important;
  --table-drag-handle-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --table-header-background: oklch(32.14% 0.0037 84.5916) !important;
  --table-header-border-color: #3a3a3c !important;
  --table-header-color: oklch(0.9901 0.0161 95.22) !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(115, 217, 208, 0.1) !important;
  --table-selection-border-color: rgb(0, 0, 0) !important;
  --tag-background: rgba(115, 217, 208, 0.1) !important;
  --tag-background-hover: rgba(115, 217, 208, 0.2) !important;
  --tag-border-color: rgba(115, 217, 208, 0.15) !important;
  --tag-border-color-hover: rgba(115, 217, 208, 0.15) !important;
  --tag-color: rgb(0, 0, 0) !important;
  --tag-color-hover: rgb(0, 0, 0) !important;
  --tertiary: rgb(0, 0, 0) !important;
  --text-2xl: 2.25rem !important;
  --text-2xl--line-height: 1.33333 !important;
  --text-3xl: 3rem !important;
  --text-3xl--line-height: 1.2 !important;
  --text-4xl: 3.75rem !important;
  --text-4xl--line-height: 1.11111 !important;
  --text-accent: rgb(0, 0, 0) !important;
  --text-accent-hover: rgb(0, 0, 0) !important;
  --text-base: 1.2rem !important;
  --text-base--line-height: 1.5 !important;
  --text-error: oklch(59.71% 0.1691 28.3687) !important;
  --text-faint: oklch(45.31% 0.0049 91.5721) !important;
  --text-highlight-bg: rgb(0, 0, 0) !important;
  --text-lg: 1.4rem !important;
  --text-lg--line-height: 1.55556 !important;
  --text-muted: oklch(84.63% 0.0136 102.1557) !important;
  --text-normal: oklch(0.9901 0.0161 95.22) !important;
  --text-on-accent: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --text-selection: rgba(115, 217, 208, 0.33) !important;
  --text-sm: 1rem !important;
  --text-sm--line-height: 1.42857 !important;
  --text-success: oklch(65.13% 0.1241 119.4018) !important;
  --text-warning: oklch(65.76% 0.1539 49.2911) !important;
  --text-xl: 1.8rem !important;
  --text-xl--line-height: 1.4 !important;
  --text-xs: 0.75rem !important;
  --text-xs--line-height: 1.33333 !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: oklch(27.34% 0.0023 67.5746) !important;
  --titlebar-background-focused: oklch(32.14% 0.0037 84.5916) !important;
  --titlebar-border-color: #3a3a3c !important;
  --titlebar-text-color: oklch(84.63% 0.0136 102.1557) !important;
  --titlebar-text-color-focused: oklch(0.9901 0.0161 95.22) !important;
  --traffic-lights-offset-x: 60px !important;
  --traffic-lights-offset-y: 60px !important;
  --tw-border-style: solid !important;
  --tw-content: "" !important;
  --tw-shadow: 0 0 #0000 !important;
  --vault-profile-color: oklch(0.9901 0.0161 95.22) !important;
  --vault-profile-color-hover: oklch(0.9901 0.0161 95.22) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.2734 0.0023 67.5746);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.2734 0.0023 67.5746);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(58, 58, 60);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-left-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: oklch(0.2228 0.0025 67.5819);
  color: oklch(0.9901 0.0161 95.22);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: oklch(0.5971 0.1691 28.3687);
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration: oklch(0.5971 0.1691 28.3687);
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: oklch(0.7346 0.1461 87.4626);
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration: oklch(0.7346 0.1461 87.4626);
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: oklch(0.7346 0.1461 87.4626);
  outline: oklch(0.7346 0.1461 87.4626) none 0px;
  text-decoration: oklch(0.7346 0.1461 87.4626);
  text-decoration-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: oklch(0.5971 0.1691 28.3687);
  outline: oklch(0.5971 0.1691 28.3687) none 0px;
  text-decoration: oklch(0.5971 0.1691 28.3687);
  text-decoration-color: oklch(0.5971 0.1691 28.3687);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(115, 217, 208, 0.2);
  color: oklch(0.9901 0.0161 95.22);
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body del {
  color: oklch(0.9901 0.0161 95.22);
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: line-through oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body p {
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.8463 0.0136 102.156) none 0px;
  text-decoration: oklch(0.8463 0.0136 102.156);
  text-decoration-color: oklch(0.8463 0.0136 102.156);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgb(115, 217, 208);
  text-decoration-color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgb(115, 217, 208);
  text-decoration-color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(115, 217, 208);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 217, 208) none 0px;
  text-decoration: rgba(115, 217, 208, 0.3);
  text-decoration-color: rgba(115, 217, 208, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: oklch(0.9901 0.0161 95.22);
  margin-left: 0px;
}

html[saved-theme="dark"] body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body dt {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body ol > li {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body ol.overflow {
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

html[saved-theme="dark"] body ul > li {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body ul.overflow {
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
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: oklch(0.4531 0.0049 91.5721);
  text-decoration: oklch(0.4531 0.0049 91.5721);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
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
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
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
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: oklch(0.9901 0.0161 95.22);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: oklch(0.7346 0.1461 87.4626);
  border-left-style: solid;
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.7346 0.1461 87.4626);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.7346 0.1461 87.4626);
  border-bottom-style: solid;
  border-left-color: oklch(0.7346 0.1461 87.4626);
  border-left-style: solid;
  border-right-color: oklch(0.7346 0.1461 87.4626);
  border-right-style: solid;
  border-top-color: oklch(0.7346 0.1461 87.4626);
  border-top-style: solid;
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
  font-size: 19.2px;
}

html[saved-theme="dark"] body figure {
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
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: oklch(0.9901 0.0161 95.22);
  border-left-color: rgb(115, 217, 208);
  border-right-color: oklch(0.9901 0.0161 95.22);
  border-top-color: oklch(0.9901 0.0161 95.22);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.8463 0.0136 102.156);
  text-decoration: line-through oklch(0.8463 0.0136 102.156);
  text-decoration-color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: oklch(0.4531 0.0049 91.5721);
  border-left-color: oklch(0.4531 0.0049 91.5721);
  border-right-color: oklch(0.4531 0.0049 91.5721);
  border-top-color: oklch(0.4531 0.0049 91.5721);
  margin-right: 11.52px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
  text-decoration-color: oklch(0.9901 0.0161 95.22);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(67, 133, 190);
  border-bottom-style: solid;
  border-left-color: rgb(67, 133, 190);
  border-left-style: solid;
  border-right-color: rgb(67, 133, 190);
  border-right-style: solid;
  border-top-color: rgb(67, 133, 190);
  border-top-style: solid;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: oklch(0.2228 0.0025 67.5819);
  border-bottom-color: oklch(0.3651 0.0043 67.5809);
  border-left-color: oklch(0.3651 0.0043 67.5809);
  border-right-color: oklch(0.3651 0.0043 67.5809);
  border-top-color: oklch(0.3651 0.0043 67.5809);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.9901 0.0161 95.22) none 0px;
  text-decoration: oklch(0.9901 0.0161 95.22);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(58, 58, 60);
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(115, 217, 208);
}

html[saved-theme="dark"] body h1 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: oklch(0.9901 0.0161 95.22);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
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

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: oklch(0.2228 0.0025 67.5819) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.2228 0.0025 67.5819);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.9901 0.0161 95.22);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
  background-color: oklch(0.2734 0.0023 67.5746);
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
  color: oklch(0.8463 0.0136 102.156);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: oklch(0.8463 0.0136 102.156);
  text-decoration: oklch(0.8463 0.0136 102.156);
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
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
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
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: oklch(0.9901 0.0161 95.22);
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
  color: oklch(0.8463 0.0136 102.156);
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
  color: oklch(0.4531 0.0049 91.5721);
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

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(58, 58, 60);
  border-left-color: rgb(58, 58, 60);
  border-right-color: rgb(58, 58, 60);
  border-top-color: rgb(58, 58, 60);
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

html[saved-theme="dark"] body .navigation-progress {
  background-color: oklch(0.2734 0.0023 67.5746);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: oklch(0.9901 0.0161 95.22);
}

html[saved-theme="dark"] body abbr {
  color: oklch(0.9901 0.0161 95.22);
  text-decoration: underline dotted oklch(0.9901 0.0161 95.22);
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
  color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="dark"] body kbd {
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
  vertical-align: baseline;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 175 !important;
  --accent-l: 33% !important;
  --accent-s: 57% !important;
  --auger-light-background-primary: #fbfbfa !important;
  --auger-light-text-normal: #3a3633 !important;
  --background-modifier-active-hover: rgba(36, 132, 124, 0.1) !important;
  --background-modifier-border: #e5e4e3 !important;
  --background-modifier-border-focus: oklch(84.63% 0.0136 102.1557) !important;
  --background-modifier-border-hover: oklch(88.10% 0.0136 97.5453) !important;
  --background-modifier-error: oklch(50.43% 0.1648 27.8298) !important;
  --background-modifier-error-hover: oklch(50.43% 0.1648 27.8298) !important;
  --background-modifier-form-field: oklch(99.01% 0.0160 95.2865) !important;
  --background-modifier-form-field-hover: oklch(99.01% 0.0160 95.2865) !important;
  --background-modifier-hover: #e0e0de !important;
  --background-modifier-success: oklch(55.93% 0.1335 122.9402) !important;
  --background-primary: #fbfbfa !important;
  --background-primary-alt: #f7f7f6 !important;
  --background-secondary: #f4f4f3 !important;
  --background-secondary-alt: #efefed !important;
  --bases-cards-background: #fbfbfa !important;
  --bases-cards-cover-background: #f7f7f6 !important;
  --bases-cards-shadow: 0 0 0 1px #e5e4e3 !important;
  --bases-cards-shadow-hover: 0 0 0 1px oklch(88.10% 0.0136 97.5453) !important;
  --bases-embed-border-color: #e5e4e3 !important;
  --bases-group-heading-property-color: #8a8785 !important;
  --bases-table-border-color: #e5e4e3 !important;
  --bases-table-cell-background-active: #fbfbfa !important;
  --bases-table-cell-background-disabled: #f7f7f6 !important;
  --bases-table-cell-background-selected: rgba(36, 132, 124, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(84.63% 0.0136 102.1557) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0) !important;
  --bases-table-group-background: #f7f7f6 !important;
  --bases-table-header-background: #fbfbfa !important;
  --bases-table-header-background-hover: #e0e0de !important;
  --bases-table-header-color: #8a8785 !important;
  --bases-table-summary-background: #fbfbfa !important;
  --bases-table-summary-background-hover: #e0e0de !important;
  --blockquote-border-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, #fbfbfa 65%, transparent) linear-gradient(#fbfbfa, color-mix(in srgb, #fbfbfa 65%, transparent)) !important;
  --bold-color: #FF3B30 !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
  --canvas-background: #fbfbfa !important;
  --canvas-card-label-color: oklch(77.21% 0.0127 96.5429) !important;
  --canvas-dot-pattern: oklch(91.74% 0.0148 98.3812) !important;
  --caret-color: #3a3633 !important;
  --checkbox-border-color: oklch(77.21% 0.0127 96.5429) !important;
  --checkbox-border-color-hover: #8a8785 !important;
  --checkbox-color: rgb(0, 0, 0) !important;
  --checkbox-color-hover: rgb(41, 153, 138) !important;
  --checkbox-marker-color: #fbfbfa !important;
  --checklist-done-color: #8a8785 !important;
  --code-background: #f7f7f6 !important;
  --code-border-color: #e5e4e3 !important;
  --code-bracket-background: #e0e0de !important;
  --code-comment: oklch(77.21% 0.0127 96.5429) !important;
  --code-function: oklch(63.33% 0.1294 85.8140) !important;
  --code-important: oklch(56.65% 0.1523 45.0111) !important;
  --code-keyword: oklch(49.54% 0.1614 349.7445) !important;
  --code-normal: #3a3633 !important;
  --code-operator: oklch(50.43% 0.1648 27.8298) !important;
  --code-property: oklch(55.44% 0.0863 186.7772) !important;
  --code-punctuation: #8a8785 !important;
  --code-string: oklch(55.93% 0.1335 122.9402) !important;
  --code-tag: oklch(50.43% 0.1648 27.8298) !important;
  --code-value: oklch(45.40% 0.1451 294.8244) !important;
  --collapse-icon-color: oklch(77.21% 0.0127 96.5429) !important;
  --collapse-icon-color-collapsed: rgb(0, 0, 0) !important;
  --color-accent: rgb(36, 132, 124) !important;
  --color-accent-1: rgb(37, 141, 131) !important;
  --color-accent-2: rgb(41, 153, 138) !important;
  --color-accent-hsl: 175, 57%, 33% !important;
  --color-base-00: oklch(99.01% 0.0160 95.2865) !important;
  --color-base-05: oklch(99.01% 0.0160 95.2865) !important;
  --color-base-10: oklch(95.37% 0.0147 98.3751) !important;
  --color-base-20: oklch(95.37% 0.0147 98.3751) !important;
  --color-base-25: oklch(91.74% 0.0148 98.3812) !important;
  --color-base-30: oklch(91.74% 0.0148 98.3812) !important;
  --color-base-35: oklch(88.10% 0.0136 97.5453) !important;
  --color-base-40: oklch(84.63% 0.0136 102.1557) !important;
  --color-base-50: oklch(77.21% 0.0127 96.5429) !important;
  --color-base-60: oklch(61.69% 0.0077 88.7146) !important;
  --color-base-70: oklch(53.75% 0.0077 97.5372) !important;
  --color-base-80: --color-base-85:
    --color-base-90:
    --color-base-95:
    --color-base-100: oklch(16.96% 0.0017 16.8596) !important;
  --color-blue: oklch(48.18% 0.1315 254.7968) !important;
  --color-blue-oklch: 0.4818 0.1315 254.7968 !important;
  --color-cyan: oklch(55.44% 0.0863 186.7772) !important;
  --color-cyan-oklch: 0.5544 0.0863 186.7772 !important;
  --color-green: oklch(55.93% 0.1335 122.9402) !important;
  --color-green-oklch: 0.5593 0.1335 122.9402 !important;
  --color-neutral-200: oklch(92.2% 0 0) !important;
  --color-neutral-700: oklch(37.1% 0 0) !important;
  --color-orange: oklch(56.65% 0.1523 45.0111) !important;
  --color-orange-oklch: 0.5665 0.1523 45.0111 !important;
  --color-pink: oklch(49.54% 0.1614 349.7445) !important;
  --color-pink-oklch: 0.4954 0.1614 349.7445 !important;
  --color-purple: oklch(45.40% 0.1451 294.8244) !important;
  --color-purple-oklch: 0.4540 0.1451 294.8244 !important;
  --color-red: oklch(50.43% 0.1648 27.8298) !important;
  --color-red-oklch: 0.5043 0.1648 27.8298 !important;
  --color-white: #fff !important;
  --color-yellow: oklch(63.33% 0.1294 85.8140) !important;
  --color-yellow-oklch: 0.6333 0.1294 85.8140 !important;
  --dark: #3a3633 !important;
  --darkgray: #3a3633 !important;
  --default-font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  --default-mono-font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace !important;
  --default-transition-duration: 150ms !important;
  --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --divider-color: #e5e4e3 !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background: oklch(99.01% 0.0160 95.2865) !important;
  --dropdown-background-hover: oklch(95.37% 0.0147 98.3751) !important;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1) !important;
  --embed-block-shadow-hover: 0 0 0 1px #e5e4e3, inset 0 0 0 1px #e5e4e3 !important;
  --embed-border-start: 2px solid rgb(0, 0, 0) !important;
  --file-header-background: #fbfbfa !important;
  --file-header-background-focused: #fbfbfa !important;
  --flair-background: oklch(99.01% 0.0160 95.2865) !important;
  --flair-color: #3a3633 !important;
  --font-mono: '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-sans: '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-weight-medium: 500 !important;
  --footnote-divider-color: #e5e4e3 !important;
  --footnote-id-color: #8a8785 !important;
  --footnote-id-color-no-occurrences: oklch(77.21% 0.0127 96.5429) !important;
  --footnote-input-background-active: #e0e0de !important;
  --graph-line: oklch(88.10% 0.0136 97.5453) !important;
  --graph-node: #8a8785 !important;
  --graph-node-attachment: oklch(63.33% 0.1294 85.8140) !important;
  --graph-node-focused: rgb(0, 0, 0) !important;
  --graph-node-tag: oklch(55.93% 0.1335 122.9402) !important;
  --graph-node-unresolved: oklch(77.21% 0.0127 96.5429) !important;
  --graph-text: #3a3633 !important;
  --gray: #8a8785 !important;
  --header-height: 60px !important;
  --heading-formatting: oklch(77.21% 0.0127 96.5429) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgb(0, 0, 0) !important;
  --hr-color: #e5e4e3 !important;
  --icon-color: #8a8785 !important;
  --icon-color-active: rgb(0, 0, 0) !important;
  --icon-color-focused: #3a3633 !important;
  --icon-color-hover: #8a8785 !important;
  --inline-title-size: 3rem !important;
  --inline-title-weight: 400 !important;
  --input-date-separator: oklch(77.21% 0.0127 96.5429) !important;
  --input-placeholder-color: oklch(77.21% 0.0127 96.5429) !important;
  --interactive-accent: rgb(0, 0, 0) !important;
  --interactive-accent-hover: rgb(41, 153, 138) !important;
  --interactive-accent-hsl: 175, 57%, 33% !important;
  --interactive-hover: oklch(95.37% 0.0147 98.3751) !important;
  --interactive-normal: oklch(99.01% 0.0160 95.2865) !important;
  --italic-color: #FF9500 !important;
  --leading-relaxed: 1.625 !important;
  --light: #fbfbfa !important;
  --lightgray: #f4f4f3 !important;
  --link-color: rgb(0, 0, 0) !important;
  --link-color-hover: rgb(0, 0, 0) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(0, 0, 0) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(0, 0, 0) !important;
  --link-unresolved-decoration-color: rgba(36, 132, 124, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: oklch(77.21% 0.0127 96.5429) !important;
  --list-marker-color-collapsed: rgb(0, 0, 0) !important;
  --list-marker-color-hover: #8a8785 !important;
  --menu-background: #f4f4f3 !important;
  --menu-border-color: oklch(88.10% 0.0136 97.5453) !important;
  --metadata-border-color: #e5e4e3 !important;
  --metadata-divider-color: #e5e4e3 !important;
  --metadata-input-background-active: #e0e0de !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #3a3633 !important;
  --metadata-label-background-active: #e0e0de !important;
  --metadata-label-text-color: #8a8785 !important;
  --metadata-label-text-color-hover: #8a8785 !important;
  --metadata-property-background-active: #e0e0de !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(84.63% 0.0136 102.1557) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(88.10% 0.0136 97.5453) !important;
  --modal-background: #fbfbfa !important;
  --modal-border-color: oklch(84.63% 0.0136 102.1557) !important;
  --nav-collapse-icon-color: oklch(77.21% 0.0127 96.5429) !important;
  --nav-collapse-icon-color-collapsed: oklch(77.21% 0.0127 96.5429) !important;
  --nav-heading-color: #3a3633 !important;
  --nav-heading-color-collapsed: oklch(77.21% 0.0127 96.5429) !important;
  --nav-heading-color-collapsed-hover: #8a8785 !important;
  --nav-heading-color-hover: #3a3633 !important;
  --nav-item-background-active: #e0e0de !important;
  --nav-item-background-hover: #e0e0de !important;
  --nav-item-background-selected: rgba(36, 132, 124, 0.15) !important;
  --nav-item-color: #8a8785 !important;
  --nav-item-color-active: #3a3633 !important;
  --nav-item-color-highlighted: rgb(0, 0, 0) !important;
  --nav-item-color-hover: #3a3633 !important;
  --nav-item-color-selected: #3a3633 !important;
  --nav-tag-color: oklch(77.21% 0.0127 96.5429) !important;
  --nav-tag-color-active: #8a8785 !important;
  --nav-tag-color-hover: #8a8785 !important;
  --pdf-background: #fbfbfa !important;
  --pdf-page-background: #fbfbfa !important;
  --pdf-sidebar-background: #fbfbfa !important;
  --pill-border-color: #e5e4e3 !important;
  --pill-border-color-hover: oklch(88.10% 0.0136 97.5453) !important;
  --pill-color: #8a8785 !important;
  --pill-color-hover: #3a3633 !important;
  --pill-color-remove: oklch(77.21% 0.0127 96.5429) !important;
  --pill-color-remove-hover: rgb(0, 0, 0) !important;
  --prompt-background: #fbfbfa !important;
  --prompt-border-color: oklch(84.63% 0.0136 102.1557) !important;
  --radius-md: 0.375rem !important;
  --radius-sm: 0.25rem !important;
  --raised-background: color-mix(in srgb, #fbfbfa 65%, transparent) linear-gradient(#fbfbfa, color-mix(in srgb, #fbfbfa 65%, transparent)) !important;
  --ribbon-background: #f4f4f3 !important;
  --ribbon-background-collapsed: #fbfbfa !important;
  --search-clear-button-color: #8a8785 !important;
  --search-icon-color: #8a8785 !important;
  --search-result-background: #fbfbfa !important;
  --secondary: rgb(0, 0, 0) !important;
  --setting-group-heading-color: #3a3633 !important;
  --setting-items-background: #f7f7f6 !important;
  --setting-items-border-color: #e5e4e3 !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: oklch(88.10% 0.0136 97.5453) !important;
  --slider-track-background: #e5e4e3 !important;
  --spacing: 0.25rem !important;
  --status-bar-background: #f4f4f3 !important;
  --status-bar-border-color: #e5e4e3 !important;
  --status-bar-text-color: #8a8785 !important;
  --suggestion-background: #fbfbfa !important;
  --sync-avatar-color-1: oklch(50.43% 0.1648 27.8298) !important;
  --sync-avatar-color-2: oklch(56.65% 0.1523 45.0111) !important;
  --sync-avatar-color-3: oklch(63.33% 0.1294 85.8140) !important;
  --sync-avatar-color-4: oklch(55.93% 0.1335 122.9402) !important;
  --sync-avatar-color-5: oklch(55.44% 0.0863 186.7772) !important;
  --sync-avatar-color-6: oklch(48.18% 0.1315 254.7968) !important;
  --sync-avatar-color-7: oklch(45.40% 0.1451 294.8244) !important;
  --sync-avatar-color-8: oklch(49.54% 0.1614 349.7445) !important;
  --tab-background-active: rgb(0, 0, 0) !important;
  --tab-background-focused-active: rgb(0, 0, 0) !important;
  --tab-container-background: #f4f4f3 !important;
  --tab-divider-color: oklch(88.10% 0.0136 97.5453) !important;
  --tab-outline-color: #e5e4e3 !important;
  --tab-stacked-header-width: 60px !important;
  --tab-switcher-background: #f4f4f3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f4f3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 132, 124) !important;
  --tab-text-color: oklch(77.21% 0.0127 96.5429) !important;
  --tab-text-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-focused: #8a8785 !important;
  --tab-text-color-focused-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --tab-text-color-focused-active-current: #3a3633 !important;
  --tab-text-color-focused-highlighted: rgb(0, 0, 0) !important;
  --table-add-button-border-color: #e5e4e3 !important;
  --table-border-color: #e5e4e3 !important;
  --table-drag-handle-background-active: rgb(0, 0, 0) !important;
  --table-drag-handle-color: oklch(77.21% 0.0127 96.5429) !important;
  --table-drag-handle-color-active: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --table-header-background: #efefed !important;
  --table-header-border-color: #e5e4e3 !important;
  --table-header-color: #3a3633 !important;
  --table-header-weight: 600 !important;
  --table-selection: rgba(36, 132, 124, 0.1) !important;
  --table-selection-border-color: rgb(0, 0, 0) !important;
  --tag-background: rgba(36, 132, 124, 0.1) !important;
  --tag-background-hover: rgba(36, 132, 124, 0.2) !important;
  --tag-border-color: rgba(36, 132, 124, 0.15) !important;
  --tag-border-color-hover: rgba(36, 132, 124, 0.15) !important;
  --tag-color: rgb(0, 0, 0) !important;
  --tag-color-hover: rgb(0, 0, 0) !important;
  --tertiary: rgb(0, 0, 0) !important;
  --text-2xl: 2.25rem !important;
  --text-2xl--line-height: 1.33333 !important;
  --text-3xl: 3rem !important;
  --text-3xl--line-height: 1.2 !important;
  --text-4xl: 3.75rem !important;
  --text-4xl--line-height: 1.11111 !important;
  --text-accent: rgb(0, 0, 0) !important;
  --text-accent-hover: rgb(0, 0, 0) !important;
  --text-base: 1.2rem !important;
  --text-base--line-height: 1.5 !important;
  --text-error: oklch(50.43% 0.1648 27.8298) !important;
  --text-faint: oklch(77.21% 0.0127 96.5429) !important;
  --text-highlight-bg: rgb(0, 0, 0) !important;
  --text-lg: 1.4rem !important;
  --text-lg--line-height: 1.55556 !important;
  --text-muted: #8a8785 !important;
  --text-normal: #3a3633 !important;
  --text-on-accent: oklch(from rgb(0, 0, 0) clamp(0.15, (0.5 - l) * 100, 0.98) 0 0) !important;
  --text-selection: rgba(36, 132, 124, 0.2) !important;
  --text-sm: 1rem !important;
  --text-sm--line-height: 1.42857 !important;
  --text-success: oklch(55.93% 0.1335 122.9402) !important;
  --text-warning: oklch(56.65% 0.1523 45.0111) !important;
  --text-xl: 1.8rem !important;
  --text-xl--line-height: 1.4 !important;
  --text-xs: 0.75rem !important;
  --text-xs--line-height: 1.33333 !important;
  --textHighlight: rgb(0, 0, 0) !important;
  --titlebar-background: #f4f4f3 !important;
  --titlebar-background-focused: #efefed !important;
  --titlebar-border-color: #e5e4e3 !important;
  --titlebar-text-color: #8a8785 !important;
  --titlebar-text-color-focused: #3a3633 !important;
  --traffic-lights-offset-x: 60px !important;
  --traffic-lights-offset-y: 60px !important;
  --tw-border-style: solid !important;
  --tw-content: "" !important;
  --tw-shadow: 0 0 #0000 !important;
  --vault-profile-color: #3a3633 !important;
  --vault-profile-color-hover: #3a3633 !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 244, 243);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 243);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 228, 227);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 244, 243);
  border-left-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 251, 250);
  color: rgb(58, 54, 51);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(255, 59, 48);
  outline: rgb(255, 59, 48) none 0px;
  text-decoration: rgb(255, 59, 48);
  text-decoration-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration: rgb(255, 149, 0);
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration: rgb(255, 149, 0);
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(255, 59, 48);
  outline: rgb(255, 59, 48) none 0px;
  text-decoration: rgb(255, 59, 48);
  text-decoration-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(36, 132, 124, 0.15);
  color: rgb(58, 54, 51);
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body del {
  color: rgb(58, 54, 51);
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: line-through rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body p {
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(138, 135, 133) none 0px;
  text-decoration: rgb(138, 135, 133);
  text-decoration-color: rgb(138, 135, 133);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgb(36, 132, 124);
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(36, 132, 124);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(58, 54, 51);
  margin-left: 0px;
}

html[saved-theme="light"] body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body dt {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body ol > li {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body ol.overflow {
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

html[saved-theme="light"] body ul > li {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body ul.overflow {
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
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: oklch(0.7721 0.0127 96.5429);
  text-decoration: oklch(0.7721 0.0127 96.5429);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
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
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
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
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(58, 54, 51);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
  color: rgb(58, 54, 51);
  font-family: "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: oklch(0.6333 0.1294 85.814);
  border-left-style: solid;
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: oklch(0.6333 0.1294 85.814);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: oklch(0.6333 0.1294 85.814);
  border-bottom-style: solid;
  border-left-color: oklch(0.6333 0.1294 85.814);
  border-left-style: solid;
  border-right-color: oklch(0.6333 0.1294 85.814);
  border-right-style: solid;
  border-top-color: oklch(0.6333 0.1294 85.814);
  border-top-style: solid;
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
  font-size: 19.2px;
}

html[saved-theme="light"] body figure {
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
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(58, 54, 51);
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(58, 54, 51);
  border-top-color: rgb(58, 54, 51);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 135, 133);
  text-decoration: line-through rgb(138, 135, 133);
  text-decoration-color: rgb(138, 135, 133);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: oklch(0.7721 0.0127 96.5429);
  border-left-color: oklch(0.7721 0.0127 96.5429);
  border-right-color: oklch(0.7721 0.0127 96.5429);
  border-top-color: oklch(0.7721 0.0127 96.5429);
  margin-right: 11.52px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
  text-decoration-color: rgb(58, 54, 51);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: oklch(0.9901 0.016 95.2865);
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 250);
  border-bottom-color: oklch(0.8463 0.0136 102.156);
  border-left-color: oklch(0.8463 0.0136 102.156);
  border-right-color: oklch(0.8463 0.0136 102.156);
  border-top-color: oklch(0.8463 0.0136 102.156);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(58, 54, 51) none 0px;
  text-decoration: rgb(58, 54, 51);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(224, 224, 222);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(224, 224, 222);
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(36, 132, 124);
}

html[saved-theme="light"] body h1 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(58, 54, 51);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
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

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(58, 54, 51);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(58, 54, 51);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 244, 243);
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
  color: rgb(138, 135, 133);
  font-family: "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(138, 135, 133);
  text-decoration: rgb(138, 135, 133);
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
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
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
  color: rgb(58, 54, 51);
  text-decoration: rgb(58, 54, 51);
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
  color: rgb(138, 135, 133);
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
  color: oklch(0.7721 0.0127 96.5429);
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

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(229, 228, 227);
  border-left-color: rgb(229, 228, 227);
  border-right-color: rgb(229, 228, 227);
  border-top-color: rgb(229, 228, 227);
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

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 244, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(58, 54, 51);
}

html[saved-theme="light"] body abbr {
  color: rgb(58, 54, 51);
  text-decoration: underline dotted rgb(58, 54, 51);
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
  color: rgb(138, 135, 133);
}

html[saved-theme="light"] body kbd {
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
  vertical-align: baseline;
}`,
  },
};
