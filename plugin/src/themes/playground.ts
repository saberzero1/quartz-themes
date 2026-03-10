import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "playground",
    modes: ["dark"],
    variations: [],
    fonts: ["bricolage-grotesque"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: oklch(25.5% 0.021 279.29);
  --background-modifier-border-focus: oklch(61.5% 0.028 279.29);
  --background-modifier-border-hover: oklch(35.5% 0.029 279.29);
  --background-modifier-form-field: oklch(12% 0.009 279.29);
  --background-modifier-form-field-hover: oklch(12% 0.009 279.29);
  --background-primary: oklch(13.5% 0.01 279.29);
  --background-primary-alt: oklch(25.5% 0.021 279.29);
  --background-secondary: oklch(18% 0.014 279.29);
  --background-secondary-alt: oklch(35.5% 0.029 279.29);
  --bases-cards-background: oklch(13.5% 0.01 279.29);
  --bases-cards-cover-background: oklch(25.5% 0.021 279.29);
  --bases-cards-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29);
  --bases-cards-shadow-hover: 0 0 0 1px oklch(35.5% 0.029 279.29);
  --bases-embed-border-color: oklch(25.5% 0.021 279.29);
  --bases-group-heading-property-color: oklch(84.5% 0.01 279.29);
  --bases-table-border-color: oklch(25.5% 0.021 279.29);
  --bases-table-cell-background-active: oklch(13.5% 0.01 279.29);
  --bases-table-cell-background-disabled: oklch(25.5% 0.021 279.29);
  --bases-table-cell-shadow-active: 0 0 0 2px oklch(61.5% 0.028 279.29);
  --bases-table-group-background: oklch(25.5% 0.021 279.29);
  --bases-table-header-background: oklch(13.5% 0.01 279.29);
  --bases-table-header-color: oklch(84.5% 0.01 279.29);
  --bases-table-summary-background: oklch(13.5% 0.01 279.29);
  --blue: rgb(42, 113, 235);
  --blue-100: oklch(25.5% 0.091 260.58);
  --blue-200: oklch(35.5% 0.127 260.58);
  --blue-25: oklch(12% 0.038 260.58);
  --blue-300: oklch(48.5% 0.173 260.58);
  --blue-400: oklch(61.5% 0.176 260.58);
  --blue-50: oklch(13.5% 0.044 260.58);
  --blue-500: oklch(74.5% 0.111 260.58);
  --blue-600: oklch(84.5% 0.06 260.58);
  --blue-700: oklch(92% 0.027 260.58);
  --blue-75: oklch(18% 0.061 260.58);
  --blue-800: oklch(96.5% 0.01 260.58);
  --blue-900: oklch(98% 0.005 260.58);
  --blue-rgb: 42, 113, 235;
  --blur-background: color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent) linear-gradient(oklch(25.5% 0.021 279.29), color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-modifier: 300;
  --bold-weight: 700;
  --callout-bug: oklch(48.5% 0.193 13.65);
  --callout-content: oklch(84.5% 0.06 260.58);
  --callout-default: oklch(48.5% 0.173 260.58);
  --callout-error: oklch(48.5% 0.193 13.65);
  --callout-example: oklch(48.5% 0.1 97.11);
  --callout-fail: oklch(48.5% 0.193 13.65);
  --callout-important: oklch(48.5% 0.134 46.85);
  --callout-info: oklch(61.5% 0.028 279.29);
  --callout-padding: 12px 12px;
  --callout-question: oklch(48.5% 0.134 46.85);
  --callout-quote: oklch(48.5% 0.039 279.29);
  --callout-radius: 8px;
  --callout-success: oklch(48.5% 0.145 140.09);
  --callout-summary: oklch(48.5% 0.039 279.29);
  --callout-tip: oklch(48.5% 0.106 161.65);
  --callout-title-color: oklch(61.5% 0.176 260.58);
  --callout-todo: oklch(48.5% 0.173 260.58);
  --callout-warning: oklch(48.5% 0.134 46.85);
  --canvas-background: oklch(13.5% 0.01 279.29);
  --canvas-card-label-color: oklch(74.5% 0.018 279.29);
  --canvas-color: 90, 93, 117;
  --canvas-color-1: 218, 1, 77;
  --canvas-color-2: 255, 116, 23;
  --canvas-color-3: 242, 208, 3;
  --canvas-color-4: 78, 205, 43;
  --canvas-color-5: 33, 255, 177;
  --canvas-color-6: 42, 113, 235;
  --caret-color: oklch(92% 0.004 279.29);
  --checkbox-border-color: oklch(48.5% 0.039 279.29);
  --checkbox-border-color-hover: oklch(84.5% 0.01 279.29);
  --checkbox-color: oklch(74.5% 0.164 161.65);
  --checkbox-color-hover: rgb(138, 92, 245);
  --checkbox-margin-inline-start: 0.4em;
  --checkbox-marker-color: oklch(13.5% 0.01 279.29);
  --checkbox-quote-color: oklch(61.5% 0.028 279.29);
  --checkbox-radius: 100%;
  --checklist-done-color: oklch(74.5% 0.164 161.65);
  --checklist-green-color: oklch(61.5% 0.183 140.09);
  --checklist-orange-color: oklch(61.5% 0.17 46.85);
  --checklist-red-color: oklch(61.5% 0.245 13.65);
  --checklist-yellow-color: oklch(74.5% 0.153 97.11);
  --code-background: oklch(25.5% 0.021 279.29);
  --code-border-color: oklch(25.5% 0.021 279.29);
  --code-comment: oklch(74.5% 0.018 279.29);
  --code-normal: oklch(92% 0.004 279.29);
  --code-punctuation: oklch(84.5% 0.01 279.29);
  --code-radius: 8px;
  --codeFont: var(--font-text);
  --collapse-icon-color: oklch(74.5% 0.018 279.29);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: oklch(25.5% 0.021 279.29);
  --dropdown-background: oklch(25.5% 0.021 279.29);
  --dropdown-background-hover: oklch(35.5% 0.029 279.29);
  --ease-out: cubic-bezier(0.33, 1, 0.68, 1);
  --embed-block-shadow-hover: 0;
  --file-header-background: oklch(13.5% 0.01 279.29);
  --file-header-background-focused: oklch(13.5% 0.01 279.29);
  --file-header-font: "Inter";
  --file-margins: 40px 32px;
  --flair-background: oklch(25.5% 0.021 279.29);
  --flair-color: oklch(92% 0.004 279.29);
  --font-mermaid: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Inter", 'Arial';
  --font-text: '??', "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Inter";
  --footnote-divider-color: oklch(25.5% 0.021 279.29);
  --footnote-id-color: oklch(84.5% 0.01 279.29);
  --footnote-id-color-no-occurrences: oklch(74.5% 0.018 279.29);
  --graph-node: oklch(84.5% 0.01 279.29);
  --graph-node-unresolved: oklch(74.5% 0.018 279.29);
  --graph-text: oklch(92% 0.004 279.29);
  --gray: rgb(90, 93, 117);
  --gray-100: oklch(25.5% 0.021 279.29);
  --gray-200: oklch(35.5% 0.029 279.29);
  --gray-25: oklch(12% 0.009 279.29);
  --gray-300: oklch(48.5% 0.039 279.29);
  --gray-400: oklch(61.5% 0.028 279.29);
  --gray-50: oklch(13.5% 0.01 279.29);
  --gray-500: oklch(74.5% 0.018 279.29);
  --gray-600: oklch(84.5% 0.01 279.29);
  --gray-700: oklch(92% 0.004 279.29);
  --gray-75: oklch(18% 0.014 279.29);
  --gray-800: oklch(96.5% 0.002 279.29);
  --gray-900: oklch(98% 0.001 279.29);
  --gray-rgb: 90, 93, 117;
  --green: rgb(78, 205, 43);
  --green-100: oklch(25.5% 0.076 140.09);
  --green-200: oklch(35.5% 0.106 140.09);
  --green-25: oklch(12% 0.032 140.09);
  --green-300: oklch(48.5% 0.145 140.09);
  --green-400: oklch(61.5% 0.183 140.09);
  --green-50: oklch(13.5% 0.036 140.09);
  --green-500: oklch(74.5% 0.222 140.09);
  --green-600: oklch(84.5% 0.235 140.09);
  --green-700: oklch(92% 0.125 140.09);
  --green-75: oklch(18% 0.051 140.09);
  --green-800: oklch(96.5% 0.043 140.09);
  --green-900: oklch(98% 0.022 140.09);
  --green-rgb: 78, 205, 43;
  --h1-color: oklch(61.5% 0.17 288);
  --h1-font: "Bricolage Grotesque";
  --h1-weight: 550;
  --h2-color: rgb(242, 66, 255);
  --h2-font: "Bricolage Grotesque";
  --h2-weight: 500;
  --h3-color: rgb(255, 116, 23);
  --h3-font: "Bricolage Grotesque";
  --h3-weight: 550;
  --h4-color: rgb(218, 1, 77);
  --h4-font: "Bricolage Grotesque";
  --h4-weight: 650;
  --h5-color: oklch(84.5% 0.01 279.29);
  --h5-font: "Bricolage Grotesque";
  --h5-weight: 600;
  --h6-color: oklch(84.5% 0.01 279.29);
  --h6-font: "Bricolage Grotesque";
  --h6-weight: 650;
  --headerFont: var(--font-text);
  --heading-formatting: oklch(74.5% 0.018 279.29);
  --highlight: var(--text-highlight-bg);
  --highlight-text-color: oklch(12% 0.009 279.29);
  --hr-color: oklch(25.5% 0.021 279.29);
  --icon-color: oklch(61.5% 0.028 279.29);
  --icon-color-focused: oklch(92% 0.004 279.29);
  --icon-color-hover: oklch(84.5% 0.01 279.29);
  --inline-title-color: oklch(61.5% 0.17 288);
  --inline-title-font: "Bricolage Grotesque";
  --inline-title-line-height: 105%;
  --inline-title-weight: 550;
  --input-date-separator: oklch(74.5% 0.018 279.29);
  --input-font-weight: 600;
  --input-placeholder-color: oklch(74.5% 0.018 279.29);
  --interactive-hover: oklch(35.5% 0.029 279.29);
  --interactive-normal: oklch(25.5% 0.021 279.29);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-decoration: none;
  --list-indent-source: 0px;
  --list-marker-color: oklch(74.5% 0.018 279.29);
  --list-marker-color-hover: oklch(84.5% 0.01 279.29);
  --list-padding-inline-start: 0px;
  --menu-background: oklch(18% 0.014 279.29);
  --menu-border-color: oklch(35.5% 0.029 279.29);
  --metadata-border-color: oklch(25.5% 0.021 279.29);
  --metadata-divider-color: oklch(25.5% 0.021 279.29);
  --metadata-input-text-color: oklch(92% 0.004 279.29);
  --metadata-label-text-color: oklch(84.5% 0.01 279.29);
  --metadata-label-text-color-hover: oklch(84.5% 0.01 279.29);
  --metadata-property-box-shadow-focus: 0 0 0 2px oklch(61.5% 0.028 279.29);
  --metadata-property-box-shadow-hover: 0 0 0 1px oklch(35.5% 0.029 279.29);
  --modal-background: oklch(13.5% 0.01 279.29);
  --modal-border-color: oklch(35.5% 0.029 279.29);
  --nav-collapse-icon-color: oklch(74.5% 0.018 279.29);
  --nav-collapse-icon-color-collapsed: oklch(74.5% 0.018 279.29);
  --nav-heading-color: oklch(92% 0.004 279.29);
  --nav-heading-color-collapsed: oklch(74.5% 0.018 279.29);
  --nav-heading-color-collapsed-hover: oklch(84.5% 0.01 279.29);
  --nav-heading-color-hover: oklch(92% 0.004 279.29);
  --nav-item-background-active: oklch(25.5% 0.021 279.29);
  --nav-item-background-hover: oklch(25.5% 0.021 279.29);
  --nav-item-color: oklch(84.5% 0.01 279.29);
  --nav-item-color-active: oklch(92% 0.004 279.29);
  --nav-item-color-hover: oklch(92% 0.004 279.29);
  --nav-item-color-selected: oklch(92% 0.004 279.29);
  --nav-tag-color: oklch(74.5% 0.018 279.29);
  --nav-tag-color-active: oklch(84.5% 0.01 279.29);
  --nav-tag-color-hover: oklch(84.5% 0.01 279.29);
  --orange: rgb(255, 116, 23);
  --orange-100: oklch(25.5% 0.07 46.85);
  --orange-200: oklch(35.5% 0.098 46.85);
  --orange-25: oklch(12% 0.03 46.85);
  --orange-300: oklch(48.5% 0.134 46.85);
  --orange-400: oklch(61.5% 0.17 46.85);
  --orange-50: oklch(13.5% 0.034 46.85);
  --orange-500: oklch(74.5% 0.166 46.85);
  --orange-600: oklch(84.5% 0.086 46.85);
  --orange-700: oklch(92% 0.037 46.85);
  --orange-75: oklch(18% 0.047 46.85);
  --orange-800: oklch(96.5% 0.013 46.85);
  --orange-900: oklch(98% 0.007 46.85);
  --orange-rgb: 255, 116, 23;
  --padding-inline-start: 0px;
  --pdf-background: oklch(13.5% 0.01 279.29);
  --pdf-page-background: oklch(13.5% 0.01 279.29);
  --pdf-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29);
  --pdf-sidebar-background: oklch(13.5% 0.01 279.29);
  --pdf-thumbnail-shadow: 0 0 0 1px oklch(25.5% 0.021 279.29);
  --pill-border-color: oklch(25.5% 0.021 279.29);
  --pill-border-color-hover: oklch(35.5% 0.029 279.29);
  --pill-color: oklch(84.5% 0.01 279.29);
  --pill-color-hover: oklch(92% 0.004 279.29);
  --pill-color-remove: oklch(74.5% 0.018 279.29);
  --pink: rgb(242, 66, 255);
  --pink-100: oklch(25.5% 0.119 324.98);
  --pink-200: oklch(35.5% 0.165 324.98);
  --pink-25: oklch(12% 0.05 324.98);
  --pink-300: oklch(48.5% 0.227 324.98);
  --pink-400: oklch(61.5% 0.287 324.98);
  --pink-50: oklch(13.5% 0.057 324.98);
  --pink-500: oklch(74.5% 0.244 324.98);
  --pink-600: oklch(84.5% 0.132 324.98);
  --pink-700: oklch(92% 0.059 324.98);
  --pink-75: oklch(18% 0.08 324.98);
  --pink-800: oklch(96.5% 0.021 324.98);
  --pink-900: oklch(98% 0.011 324.98);
  --pink-rgb: 242, 66, 255;
  --prompt-background: oklch(13.5% 0.01 279.29);
  --purple: rgb(45, 36, 141);
  --purple-100: oklch(25.5% 0.112 288);
  --purple-200: oklch(35.5% 0.156 288);
  --purple-25: oklch(12% 0.047 288);
  --purple-300: oklch(48.5% 0.213 288);
  --purple-400: oklch(61.5% 0.17 288);
  --purple-50: oklch(13.5% 0.054 288);
  --purple-500: oklch(74.5% 0.107 288);
  --purple-600: oklch(84.5% 0.058 288);
  --purple-700: oklch(92% 0.026 288);
  --purple-75: oklch(18% 0.075 288);
  --purple-800: oklch(96.5% 0.009 288);
  --purple-900: oklch(98% 0.005 288);
  --purple-rgb: 45, 36, 141;
  --raised-background: color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent) linear-gradient(oklch(25.5% 0.021 279.29), color-mix(in srgb, oklch(25.5% 0.021 279.29) 65%, transparent));
  --red: rgb(218, 1, 77);
  --red-100: oklch(25.5% 0.102 13.65);
  --red-200: oklch(35.5% 0.142 13.65);
  --red-25: oklch(12% 0.043 13.65);
  --red-300: oklch(48.5% 0.193 13.65);
  --red-400: oklch(61.5% 0.245 13.65);
  --red-50: oklch(13.5% 0.049 13.65);
  --red-500: oklch(74.5% 0.156 13.65);
  --red-600: oklch(84.5% 0.079 13.65);
  --red-700: oklch(92% 0.034 13.65);
  --red-75: oklch(18% 0.068 13.65);
  --red-800: oklch(96.5% 0.012 13.65);
  --red-900: oklch(98% 0.007 13.65);
  --red-rgb: 218, 1, 77;
  --ribbon-background: oklch(18% 0.014 279.29);
  --ribbon-background-collapsed: oklch(13.5% 0.01 279.29);
  --scrollbar-active-thumb-bg: oklch(35.5% 0.029 279.29);
  --scrollbar-thumb-bg: oklch(25.5% 0.021 279.29);
  --sea-green: rgb(33, 255, 177);
  --sea-green-100: oklch(25.5% 0.056 161.65);
  --sea-green-200: oklch(35.5% 0.078 161.65);
  --sea-green-25: oklch(12% 0.026 161.65);
  --sea-green-300: oklch(48.5% 0.106 161.65);
  --sea-green-400: oklch(61.5% 0.135 161.65);
  --sea-green-50: oklch(13.5% 0.029 161.65);
  --sea-green-500: oklch(74.5% 0.164 161.65);
  --sea-green-600: oklch(84.5% 0.186 161.65);
  --sea-green-700: oklch(92% 0.118 161.65);
  --sea-green-75: oklch(18% 0.039 161.65);
  --sea-green-800: oklch(96.5% 0.041 161.65);
  --sea-green-900: oklch(98% 0.021 161.65);
  --sea-green-rgb: 33, 255, 177;
  --search-clear-button-color: oklch(84.5% 0.01 279.29);
  --search-icon-color: oklch(84.5% 0.01 279.29);
  --search-result-background: oklch(13.5% 0.01 279.29);
  --semibold-modifier: 200;
  --setting-group-heading-color: oklch(92% 0.004 279.29);
  --setting-items-background: oklch(25.5% 0.021 279.29);
  --setting-items-border-color: oklch(25.5% 0.021 279.29);
  --slider-thumb-border-color: oklch(35.5% 0.029 279.29);
  --slider-track-background: oklch(25.5% 0.021 279.29);
  --status-bar-background: oklch(18% 0.014 279.29);
  --status-bar-border-color: oklch(25.5% 0.021 279.29);
  --status-bar-text-color: oklch(84.5% 0.01 279.29);
  --suggestion-background: oklch(13.5% 0.01 279.29);
  --tab-background-active: oklch(13.5% 0.01 279.29);
  --tab-container-background: oklch(18% 0.014 279.29);
  --tab-divider-color: oklch(35.5% 0.029 279.29);
  --tab-outline-color: oklch(25.5% 0.021 279.29);
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-switcher-background: oklch(18% 0.014 279.29);
  --tab-switcher-menubar-background: linear-gradient(to top, oklch(18% 0.014 279.29), transparent);
  --tab-text-color: oklch(74.5% 0.018 279.29);
  --tab-text-color-active: oklch(84.5% 0.01 279.29);
  --tab-text-color-focused: oklch(84.5% 0.01 279.29);
  --tab-text-color-focused-active: oklch(84.5% 0.01 279.29);
  --tab-text-color-focused-active-current: oklch(92% 0.004 279.29);
  --table-add-button-border-color: oklch(25.5% 0.021 279.29);
  --table-border-color: oklch(25.5% 0.021 279.29);
  --table-drag-handle-color: oklch(74.5% 0.018 279.29);
  --table-header-background: oklch(25.5% 0.021 279.29);
  --table-header-border-color: oklch(25.5% 0.021 279.29);
  --table-header-color: oklch(92% 0.004 279.29);
  --table-header-weight: 700;
  --tag-background: oklch(35.5% 0.127 260.58);
  --tag-color: oklch(84.5% 0.06 260.58);
  --text-error: oklch(61.5% 0.245 13.65);
  --text-faint: oklch(74.5% 0.018 279.29);
  --text-highlight-bg: oklch(84.5% 0.174 97.11);
  --text-inverse: oklch(12% 0.009 279.29);
  --text-muted: oklch(84.5% 0.01 279.29);
  --text-normal: oklch(92% 0.004 279.29);
  --text-success: oklch(61.5% 0.183 140.09);
  --text-warning: oklch(61.5% 0.17 46.85);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: oklch(13.5% 0.01 279.29);
  --titlebar-background-focused: oklch(18% 0.014 279.29);
  --titlebar-border-color: oklch(25.5% 0.021 279.29);
  --titlebar-height: 36px;
  --titlebar-text-color: oklch(84.5% 0.01 279.29);
  --titlebar-text-color-focused: oklch(92% 0.004 279.29);
  --vault-profile-color: oklch(92% 0.004 279.29);
  --vault-profile-color-hover: oklch(92% 0.004 279.29);
  --yellow: rgb(242, 208, 3);
  --yellow-100: oklch(25.5% 0.052 97.11);
  --yellow-200: oklch(35.5% 0.072 97.11);
  --yellow-25: oklch(12% 0.024 97.11);
  --yellow-300: oklch(48.5% 0.1 97.11);
  --yellow-400: oklch(61.5% 0.126 97.11);
  --yellow-50: oklch(13.5% 0.027 97.11);
  --yellow-500: oklch(74.5% 0.153 97.11);
  --yellow-600: oklch(84.5% 0.174 97.11);
  --yellow-700: oklch(92% 0.128 97.11);
  --yellow-75: oklch(18% 0.037 97.11);
  --yellow-800: oklch(96.5% 0.049 97.11);
  --yellow-900: oklch(98% 0.026 97.11);
  --yellow-rgb: 242, 208, 3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: oklch(0.18 0.014 279.29);
  color: oklch(0.92 0.004 279.29);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: oklch(0.135 0.01 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .page > div#quartz-body div.sidebar {
  background-color: oklch(0.18 0.014 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: oklch(0.255 0.021 279.29);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: oklch(0.18 0.014 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
}

body div#quartz-root {
  background-color: oklch(0.135 0.01 279.29);
  color: oklch(0.92 0.004 279.29);
}`,
    typography: `body .page article p > b, b {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body .page article p > em, em {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body .page article p > i, i {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body .page article p > strong, strong {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body .text-highlight {
  background-color: oklch(0.845 0.174 97.11);
  color: oklch(0.12 0.009 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.12 0.009 279.29) none 0px;
  text-decoration: oklch(0.12 0.009 279.29);
  text-decoration-color: oklch(0.12 0.009 279.29);
}

body del {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: line-through oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body p {
  color: oklch(0.845 0.01 279.29);
  outline: oklch(0.845 0.01 279.29) none 0px;
  text-decoration: oklch(0.845 0.01 279.29);
  text-decoration-color: oklch(0.845 0.01 279.29);
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: oklch(0.92 0.004 279.29);
}

body dt {
  color: oklch(0.92 0.004 279.29);
}

body ol > li {
  color: oklch(0.92 0.004 279.29);
}

body ol.overflow {
  background-color: oklch(0.135 0.01 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body ul > li {
  color: oklch(0.92 0.004 279.29);
}

body ul.overflow {
  background-color: oklch(0.135 0.01 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    blockquotes: `body .data-footnote-backref {
  color: oklch(0.745 0.018 279.29);
  text-decoration: oklch(0.745 0.018 279.29);
}

body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body table {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 196.766px;
}

body td {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
}

body th {
  border-bottom-color: oklch(0.355 0.029 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.92 0.004 279.29);
  font-weight: 700;
}

body tr {
  background-color: oklch(0.255 0.021 279.29);
}`,
    code: `body code {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.92 0.004 279.29);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: oklch(0.92 0.004 279.29);
}

body pre > code, pre:has(> code) {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body figcaption {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body img {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body video {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    embeds: `body .file-embed {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
}

body .footnotes {
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .transclude {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body .transclude-inner {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: oklch(0.485 0.039 279.29);
  text-decoration: line-through oklch(0.485 0.039 279.29);
  text-decoration-color: oklch(0.485 0.039 279.29);
}

body input[type=checkbox] {
  border-bottom-color: oklch(0.485 0.039 279.29);
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  border-left-color: oklch(0.485 0.039 279.29);
  border-right-color: oklch(0.485 0.039 279.29);
  border-top-color: oklch(0.485 0.039 279.29);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

body li.task-list-item[data-task='!'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='*'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='-'] {
  color: oklch(0.485 0.039 279.29);
  text-decoration: line-through oklch(0.485 0.039 279.29);
  text-decoration-color: oklch(0.485 0.039 279.29);
}

body li.task-list-item[data-task='/'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='>'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='?'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='I'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='S'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='b'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='c'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='d'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='f'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='i'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='k'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='l'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='p'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='u'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body li.task-list-item[data-task='w'] {
  color: oklch(0.92 0.004 279.29);
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body ul > li.task-list-item {
  display: flex;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: oklch(0.615 0.176 260.58);
  border-left-color: oklch(0.615 0.176 260.58);
  border-right-color: oklch(0.615 0.176 260.58);
  border-top-color: oklch(0.615 0.176 260.58);
  gap: 6px;
}

body .callout[data-callout="abstract"] {
  --callout-color: oklch(48.5% 0.039 279.29);
  background-color: color(srgb 0.352875 0.364769 0.459782 / 0.2);
  border-bottom-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694901 0.0072342 0.239891 / 0.2);
  border-bottom-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694901 0.0072342 0.239891 / 0.2);
  border-bottom-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: oklch(48.5% 0.1 97.11);
  background-color: color(srgb 0.435448 0.370228 0.000193895 / 0.2);
  border-bottom-color: color(srgb 0.435448 0.370228 0.000193895 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.435448 0.370228 0.000193895 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.435448 0.370228 0.000193895 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.435448 0.370228 0.000193895 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: oklch(48.5% 0.193 13.65);
  background-color: color(srgb 0.694901 0.0072342 0.239891 / 0.2);
  border-bottom-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.6949 0.0072342 0.239891 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: oklch(61.5% 0.028 279.29);
  background-color: color(srgb 0.504627 0.514778 0.587433 / 0.2);
  border-bottom-color: color(srgb 0.504627 0.514778 0.587433 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.504627 0.514778 0.587433 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.504627 0.514778 0.587433 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.504627 0.514778 0.587433 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: oklch(48.5% 0.173 260.58);
  background-color: color(srgb 0.108101 0.34436 0.747299 / 0.2);
  border-bottom-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: oklch(48.5% 0.134 46.85);
  background-color: color(srgb 0.60054 0.253435 0.00368491 / 0.2);
  border-bottom-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: oklch(48.5% 0.039 279.29);
  background-color: color(srgb 0.352875 0.364769 0.459782 / 0.2);
  border-bottom-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.352875 0.364769 0.459782 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: oklch(48.5% 0.145 140.09);
  background-color: color(srgb 0.153711 0.444687 0.073101 / 0.2);
  border-bottom-color: color(srgb 0.153711 0.444687 0.073101 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.153711 0.444687 0.073101 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.153711 0.444687 0.073101 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.153711 0.444687 0.073101 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: oklch(48.5% 0.106 161.65);
  background-color: color(srgb 0.0116796 0.443005 0.296787 / 0.2);
  border-bottom-color: color(srgb 0.0116796 0.443005 0.296787 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.0116796 0.443005 0.296787 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.0116796 0.443005 0.296787 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.0116796 0.443005 0.296787 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: oklch(48.5% 0.173 260.58);
  background-color: color(srgb 0.108101 0.34436 0.747299 / 0.2);
  border-bottom-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: oklch(48.5% 0.134 46.85);
  background-color: color(srgb 0.60054 0.253435 0.00368491 / 0.2);
  border-bottom-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.60054 0.253435 0.00368491 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: oklch(0.12 0.009 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space {
  background-color: oklch(0.135 0.01 279.29);
}

body .search > .search-container > .search-space > * {
  color: oklch(0.92 0.004 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: oklch(0.92 0.004 279.29) none 0px;
  text-decoration: oklch(0.92 0.004 279.29);
  text-decoration-color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0.92 0.004 279.29);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: oklch(0.18 0.014 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: oklch(0.92 0.004 279.29);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: oklch(0.255 0.021 279.29);
}

body a.internal.tag-link::before {
  color: oklch(0.845 0.06 260.58);
}

body h1 {
  color: oklch(0.615 0.17 288);
  font-family: "Bricolage Grotesque";
}

body h2 {
  color: rgb(242, 66, 255);
  font-family: "Bricolage Grotesque";
}

body h2.page-title, h2.page-title a {
  color: oklch(0.615 0.17 288);
  font-family: "Bricolage Grotesque";
}

body h3 {
  color: rgb(255, 116, 23);
  font-family: "Bricolage Grotesque";
}

body h4 {
  color: rgb(218, 1, 77);
  font-family: "Bricolage Grotesque";
}

body h5 {
  color: oklch(0.845 0.01 279.29);
  font-family: "Bricolage Grotesque";
}

body h6 {
  color: oklch(0.845 0.01 279.29);
  font-family: "Bricolage Grotesque";
}

body hr {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
}`,
    scrollbars: `body .callout {
  --callout-color: oklch(48.5% 0.173 260.58);
  border-bottom-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-left-width: 1px;
  border-right-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-right-width: 1px;
  border-top-color: color(srgb 0.108101 0.34436 0.747299 / 0.6);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-left: 12px;
}

body ::-webkit-scrollbar {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

body ::-webkit-scrollbar-corner {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

body ::-webkit-scrollbar-thumb {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body ::-webkit-scrollbar-thumb:active {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

body ::-webkit-scrollbar-thumb:hover {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}

body ::-webkit-scrollbar-track {
  background: oklch(0.135 0.01 279.29) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: oklch(0.135 0.01 279.29);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: oklch(0.615 0.028 279.29);
  border-left-color: oklch(0.615 0.028 279.29);
  border-right-color: oklch(0.615 0.028 279.29);
  border-top-color: oklch(0.615 0.028 279.29);
  color: oklch(0.615 0.028 279.29);
}`,
    footer: `body footer {
  background-color: oklch(0.18 0.014 279.29);
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.845 0.01 279.29);
}

body footer ul li a {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: oklch(0.92 0.004 279.29);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: oklch(0.845 0.01 279.29);
}`,
    listPage: `body li.section-li {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body li.section-li > .section .meta {
  color: oklch(0.845 0.01 279.29);
}

body li.section-li > .section > .desc > h3 > a {
  color: oklch(0.845 0.01 279.29);
  text-decoration: oklch(0.845 0.01 279.29);
}

body ul.section-ul {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: oklch(0.615 0.028 279.29);
  border-left-color: oklch(0.615 0.028 279.29);
  border-right-color: oklch(0.615 0.028 279.29);
  border-top-color: oklch(0.615 0.028 279.29);
  color: oklch(0.615 0.028 279.29);
}

body .darkmode svg {
  color: oklch(0.615 0.028 279.29);
  stroke: oklch(0.615 0.028 279.29);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
}

body .breadcrumb-element p {
  color: oklch(0.745 0.018 279.29);
  font-family: Inter;
}`,
    misc: `body .katex-display {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

body .metadata {
  border-bottom-color: oklch(0.255 0.021 279.29);
  border-left-color: oklch(0.255 0.021 279.29);
  border-right-color: oklch(0.255 0.021 279.29);
  border-top-color: oklch(0.255 0.021 279.29);
  color: oklch(0.845 0.01 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: oklch(0.18 0.014 279.29);
}

body .page-header h2.page-title {
  color: oklch(0.92 0.004 279.29);
  font-family: Inter;
}

body abbr {
  color: oklch(0.92 0.004 279.29);
  text-decoration: underline dotted oklch(0.92 0.004 279.29);
}

body details {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body input[type=text] {
  border-bottom-color: oklch(0.845 0.01 279.29);
  border-left-color: oklch(0.845 0.01 279.29);
  border-right-color: oklch(0.845 0.01 279.29);
  border-top-color: oklch(0.845 0.01 279.29);
  color: oklch(0.845 0.01 279.29);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body kbd {
  background-color: oklch(0.255 0.021 279.29);
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
  color: oklch(0.92 0.004 279.29);
}

body progress {
  border-bottom-color: oklch(0.92 0.004 279.29);
  border-left-color: oklch(0.92 0.004 279.29);
  border-right-color: oklch(0.92 0.004 279.29);
  border-top-color: oklch(0.92 0.004 279.29);
}

body sub {
  color: oklch(0.92 0.004 279.29);
}

body summary {
  color: oklch(0.92 0.004 279.29);
}

body sup {
  color: oklch(0.92 0.004 279.29);
}`,
  },
  light: {},
};
