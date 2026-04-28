import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "underwater",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lexend"],
    styleSettingsId: "underwater-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 193;
  --accent-l: 75%;
  --accent-s: 46%;
  --background: #191724;
  --background-modifier-active-hover: hsla(193, 46%, 75%, 0.1);
  --background-modifier-border: rgba(64, 61, 82, 0.6);
  --background-modifier-border-focus: rgba(64, 61, 82, 0.6);
  --background-modifier-border-hover: rgb(64, 61, 82);
  --background-modifier-error: rgb(235, 188, 186);
  --background-modifier-error-hover: rgb(235, 188, 186);
  --background-modifier-error-rgb: 235, 188, 186;
  --background-modifier-form-field: #26233a;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-success: rgb(156, 207, 216);
  --background-modifier-success-rgb: 156, 207, 216;
  --background-primary: rgb(31, 29, 46);
  --background-primary-alt: #26233a;
  --background-secondary: rgb(31, 29, 46);
  --background-secondary-alt: #26233a;
  --base: #191724;
  --bases-cards-background: #191724;
  --bases-cards-cover-background: #26233a;
  --bases-cards-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(64, 61, 82);
  --bases-embed-border-color: rgb(64, 61, 82);
  --bases-embed-border-radius: 11px;
  --bases-embed-radius: 10px;
  --bases-group-heading-property-color: #6e6a86;
  --bases-header-border-width: 0px;
  --bases-table-border-color: #524f67;
  --bases-table-cell-background-active: rgb(31, 29, 46);
  --bases-table-cell-background-disabled: #26233a;
  --bases-table-cell-background-selected: hsla(193, 46%, 75%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(64, 61, 82, 0.6);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 188, 186);
  --bases-table-column-border-width: 0px;
  --bases-table-container-border-radius: 10px;
  --bases-table-group-background: transparent;
  --bases-table-header-background: #26233a;
  --bases-table-header-background-hover: transparent;
  --bases-table-header-color: #e0def4;
  --bases-table-row-border-width: 0px;
  --bases-table-summary-background: rgb(31, 29, 46);
  --bases-toolbar-label-display: none;
  --blockquote-border-color: rgb(246, 193, 119);
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent) linear-gradient(rgba(64, 61, 82, 0.5), color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent));
  --bodyFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(235, 111, 146);
  --button-radius: 7px;
  --callout-bug: 235, 188, 186;
  --callout-default: 49, 116, 143;
  --callout-error: 235, 188, 186;
  --callout-example: 196, 167, 231;
  --callout-fail: 235, 188, 186;
  --callout-important: 156, 207, 216;
  --callout-info: 49, 116, 143;
  --callout-padding: 12px 24px;
  --callout-question: 246, 193, 119;
  --callout-radius: 13px;
  --callout-success: 156, 207, 216;
  --callout-summary: 156, 207, 216;
  --callout-tip: 156, 207, 216;
  --callout-title-size: 1rem;
  --callout-title-weight: 400;
  --callout-todo: 49, 116, 143;
  --callout-warning: 246, 193, 119;
  --canvas-background: rgb(31, 29, 46);
  --canvas-card-label-color: #6e6a86;
  --canvas-color-1: 49, 116, 143;
  --canvas-color-2: 156, 207, 216;
  --canvas-color-3: 196, 167, 231;
  --canvas-color-4: 235, 111, 146;
  --canvas-color-5: 235, 188, 186;
  --canvas-color-6: 246, 193, 119;
  --canvas-dot-pattern: #6e6a86;
  --caret-color: rgb(235, 111, 146);
  --checkbox-border: 5px;
  --checkbox-border-color: rgb(235, 188, 186);
  --checkbox-border-color-hover: rgb(235, 111, 146);
  --checkbox-color: rgb(49, 116, 143);
  --checkbox-color-hover: rgb(156, 207, 216);
  --checkbox-marker-color: white;
  --checkbox-radius: 5px;
  --checklist-done-color: #6e6a86;
  --clickable-icon-radius: 8px;
  --code-background: #191724;
  --code-border-color: rgba(64, 61, 82, 0.6);
  --code-comment: #6e6a86;
  --code-function: rgb(156, 207, 216);
  --code-important: rgb(235, 188, 186);
  --code-keyword: rgb(235, 188, 186);
  --code-normal: #908caa;
  --code-operator: rgb(246, 193, 119);
  --code-property: rgb(49, 116, 143);
  --code-punctuation: rgb(235, 111, 146);
  --code-string: rgb(246, 193, 119);
  --code-tag: rgb(156, 207, 216);
  --code-value: rgb(196, 167, 231);
  --codeFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #6e6a86;
  --collapse-icon-color-collapsed: rgb(235, 188, 186);
  --color-accent: hsl(193, 46%, 75%);
  --color-accent-1: rgb(235, 188, 186);
  --color-accent-2: rgb(156, 207, 216);
  --color-accent-hsl: 193, 46%, 75%;
  --color-base-00: #191724;
  --color-base-05: #191724;
  --color-base-10: rgb(31, 29, 46);
  --color-base-100: #e0def4;
  --color-base-20: rgb(31, 29, 46);
  --color-base-25: #26233a;
  --color-base-30: #524f67;
  --color-base-35: rgba(64, 61, 82, 0.6);
  --color-base-40: rgb(64, 61, 82);
  --color-base-50: #21202e;
  --color-base-60: #6e6a86;
  --color-base-70: #908caa;
  --color-blue: rgb(49, 116, 143);
  --color-blue-rgb: 49, 116, 143;
  --color-cyan: rgb(156, 207, 216);
  --color-cyan-rgb: 156, 207, 216;
  --color-green: rgb(156, 207, 216);
  --color-green-rgb: 156, 207, 216;
  --color-orange: rgb(246, 193, 119);
  --color-orange-rgb: 246, 193, 119;
  --color-pink: rgb(235, 111, 146);
  --color-pink-rgb: 235, 111, 146;
  --color-purple: rgb(196, 167, 231);
  --color-purple-rgb: 196, 167, 231;
  --color-red: rgb(235, 188, 186);
  --color-red-rgb: 235, 188, 186;
  --color-yellow: rgb(246, 193, 119);
  --color-yellow-rgb: 246, 193, 119;
  --cursor: pointer;
  --dark: var(--text-normal, #e0def4);
  --darkgray: var(--text-normal, #e0def4);
  --divider-color: rgba(64, 61, 82, 0.6);
  --divider-color-hover: rgb(235, 188, 186);
  --divider-width: 0px;
  --dropdown-background: rgba(64, 61, 82, 0.5);
  --dropdown-background-hover: rgb(64, 61, 82);
  --embed-block-shadow-hover: transparent;
  --embed-border-start: 2px solid rgb(235, 188, 186);
  --file-header-background: rgb(31, 29, 46);
  --file-header-background-focused: rgb(31, 29, 46);
  --file-header-border: 1px dashed rgb(64, 61, 82);
  --file-header-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgba(64, 61, 82, 0.5);
  --flair-color: #e0def4;
  --foam: rgb(156, 207, 216);
  --foam-rgb: 156, 207, 216;
  --font-interface: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif;
  --font-mermaid: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Arial';
  --font-text: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif;
  --footnote-divider-color: rgba(64, 61, 82, 0.6);
  --footnote-id-color: #6e6a86;
  --footnote-id-color-no-occurrences: #6e6a86;
  --gold: rgb(246, 193, 119);
  --gold-rgb: 246, 193, 119;
  --graph-line: rgb(64, 61, 82);
  --graph-node: #e0def4;
  --graph-node-attachment: rgb(235, 188, 186);
  --graph-node-focused: rgb(235, 188, 186);
  --graph-node-tag: rgb(156, 207, 216);
  --graph-node-unresolved: #6e6a86;
  --graph-text: #e0def4;
  --gray: var(--text-muted, #6e6a86);
  --h1-color: rgb(235, 111, 146);
  --h1-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h1-size: 1.45em;
  --h2-color: rgb(235, 188, 186);
  --h2-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h2-size: 1.3em;
  --h3-color: rgb(246, 193, 119);
  --h3-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h3-size: 1.15em;
  --h4-color: rgb(49, 116, 143);
  --h4-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h4-size: 1.05em;
  --h5-color: rgb(196, 167, 231);
  --h5-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h5-size: 1em;
  --h6-color: #e0def4;
  --h6-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h6-variant: small-caps;
  --headerFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #6e6a86;
  --headings-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --highlight: var(--text-highlight-bg, rgba(246, 193, 119, 0.2));
  --highlight-high: #524f67;
  --highlight-low: #21202e;
  --highlight-med: rgb(64, 61, 82);
  --highlight-med-rgb: 64, 61, 82;
  --hr-color: rgba(64, 61, 82, 0.6);
  --icon-color: #e0def4;
  --icon-color-active: rgb(235, 188, 186);
  --icon-color-focused: #e0def4;
  --icon-color-hover: #6e6a86;
  --inline-title-color: rgb(156, 207, 216);
  --inline-title-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --inline-title-margin-bottom: 1.2em;
  --inline-title-size: 1.8em;
  --input-date-separator: #6e6a86;
  --input-placeholder-color: #6e6a86;
  --interactive-accent: rgb(235, 188, 186);
  --interactive-accent-hover: rgba(235, 188, 186, 0.8);
  --interactive-accent-hsl: 193, 46%, 75%;
  --interactive-hover: rgb(64, 61, 82);
  --interactive-normal: rgba(64, 61, 82, 0.5);
  --iris: rgb(196, 167, 231);
  --iris-rgb: 196, 167, 231;
  --italic-color: rgb(156, 207, 216);
  --latex-color: rgb(246, 193, 119);
  --light: var(--background-primary, rgb(31, 29, 46));
  --lightgray: var(--background-secondary, rgb(31, 29, 46));
  --link-color: rgb(235, 188, 186);
  --link-color-hover: rgba(235, 188, 186, 0.6);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(49, 116, 143);
  --link-external-color-hover: rgba(49, 116, 143, 0.6);
  --link-external-decoration: none;
  --link-unresolved-color: #908caa;
  --link-unresolved-decoration-color: hsla(193, 46%, 75%, 0.3);
  --list-bullet-size: 0.35em;
  --list-indent-editing: 0;
  --list-marker-color: #6e6a86;
  --list-marker-color-collapsed: rgb(235, 188, 186);
  --list-marker-color-hover: #6e6a86;
  --love: rgb(235, 111, 146);
  --love-rgb: 235, 111, 146;
  --menu-background: rgb(31, 29, 46);
  --menu-border-color: rgb(64, 61, 82);
  --metadata-border-color: rgba(64, 61, 82, 0.6);
  --metadata-display-reading: none;
  --metadata-divider-color: rgba(64, 61, 82, 0.6);
  --metadata-input-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e0def4;
  --metadata-label-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #6e6a86;
  --metadata-label-text-color-hover: #6e6a86;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(64, 61, 82, 0.6);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(64, 61, 82);
  --mk-ui-text-secondary: #e0def4;
  --modal-background: rgb(31, 29, 46);
  --modal-border-color: rgb(64, 61, 82);
  --muted: #6e6a86;
  --nav-collapse-icon-color: rgb(49, 116, 143);
  --nav-collapse-icon-color-collapsed: #6e6a86;
  --nav-heading-color: rgb(49, 116, 143);
  --nav-heading-color-collapsed: rgb(49, 116, 143);
  --nav-heading-color-collapsed-hover: #6e6a86;
  --nav-heading-color-hover: #e0def4;
  --nav-item-background-active: rgb(156, 207, 216);
  --nav-item-background-selected: hsla(193, 46%, 75%, 0.15);
  --nav-item-color: #e0def4;
  --nav-item-color-active: rgb(31, 29, 46);
  --nav-item-color-highlighted: rgb(235, 188, 186);
  --nav-item-color-hover: #908caa;
  --nav-item-color-selected: #e0def4;
  --nav-tag-color: #6e6a86;
  --nav-tag-color-active: #6e6a86;
  --nav-tag-color-hover: #6e6a86;
  --overlay: #26233a;
  --pdf-background: rgb(31, 29, 46);
  --pdf-page-background: rgb(31, 29, 46);
  --pdf-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6);
  --pdf-sidebar-background: rgb(31, 29, 46);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(64, 61, 82, 0.6);
  --pill-border-color: rgba(64, 61, 82, 0.6);
  --pill-border-color-hover: rgb(64, 61, 82);
  --pill-color: #6e6a86;
  --pill-color-hover: #e0def4;
  --pill-color-remove: #6e6a86;
  --pill-color-remove-hover: rgb(235, 188, 186);
  --pine: rgb(49, 116, 143);
  --pine-rgb: 49, 116, 143;
  --pomodoro-timer-color: rgb(64, 61, 82, 0.5);
  --pomodoro-timer-dot-color: rgb(235, 111, 146);
  --prompt-background: rgb(31, 29, 46);
  --prompt-border-color: rgb(64, 61, 82);
  --raised-background: color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent) linear-gradient(rgba(64, 61, 82, 0.5), color-mix(in srgb, rgba(64, 61, 82, 0.5) 65%, transparent));
  --ribbon-background: rgb(31, 29, 46);
  --ribbon-background-collapsed: rgb(31, 29, 46);
  --rose: rgb(235, 188, 186);
  --rose-rgb: 235, 188, 186;
  --scrollbar-active-thumb-bg: #524f67;
  --scrollbar-thumb-bg: rgb(64, 61, 82);
  --search-clear-button-color: #6e6a86;
  --search-icon-color: #6e6a86;
  --search-result-background: #191724;
  --search-result-background-hover: rgb(235, 188, 186);
  --secondary: var(--text-accent, rgb(235, 188, 186));
  --setting-group-heading-color: #e0def4;
  --setting-items-background: #191724;
  --setting-items-border-color: rgba(64, 61, 82, 0.6);
  --shiki-active-tab-border-color: #6e6a86;
  --shiki-code-background: #191724;
  --shiki-code-comment: #6e6a86;
  --shiki-code-function: rgb(156, 207, 216);
  --shiki-code-important: rgb(246, 193, 119);
  --shiki-code-keyword: rgb(235, 111, 146);
  --shiki-code-normal: #6e6a86;
  --shiki-code-property: rgb(156, 207, 216);
  --shiki-code-punctuation: #6e6a86;
  --shiki-code-string: rgb(246, 193, 119);
  --shiki-code-value: rgb(196, 167, 231);
  --shiki-gutter-border-color: rgba(64, 61, 82, 0.6);
  --shiki-gutter-text-color: #6e6a86;
  --shiki-gutter-text-color-highlight: #6e6a86;
  --shiki-highlight-green: rgba(156, 207, 216, 0.5);
  --shiki-highlight-green-background: rgba(156, 207, 216, 0.1);
  --shiki-highlight-neutral: #6e6a86;
  --shiki-highlight-red: rgba(235, 188, 186, 0.5);
  --shiki-highlight-red-background: rgba(235, 188, 186, 0.1);
  --shiki-terminal-dots-color: #6e6a86;
  --slider-thumb-border-color: rgb(64, 61, 82);
  --slider-track-background: rgb(64, 61, 82);
  --status-bar-background: #191724;
  --status-bar-border-color: rgba(64, 61, 82, 0.6);
  --status-bar-font-size: 0.733em;
  --status-bar-radius: 12px 0 0 12px;
  --status-bar-text-color: #6e6a86;
  --subtle: #908caa;
  --suggestion-background: rgb(31, 29, 46);
  --surface: rgb(31, 29, 46);
  --surface-rgb: 31, 29, 46;
  --sync-avatar-color-1: rgb(235, 188, 186);
  --sync-avatar-color-2: rgb(246, 193, 119);
  --sync-avatar-color-3: rgb(246, 193, 119);
  --sync-avatar-color-4: rgb(156, 207, 216);
  --sync-avatar-color-5: rgb(156, 207, 216);
  --sync-avatar-color-6: rgb(49, 116, 143);
  --sync-avatar-color-7: rgb(196, 167, 231);
  --sync-avatar-color-8: rgb(235, 111, 146);
  --tab-background-active: rgb(31, 29, 46);
  --tab-container-background: transparent;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-img: url("%22data:image/svg+xml,%3Csvg version='1.1' id='svg1' xml:space='preserve' width='93.058769' height='115.69744' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cdefs id='defs1' /%3E%3Csodipodi:namedview id='namedview1' pagecolor='%2523ffffff' bordercolor='%2523000000' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='0' inkscape:deskcolor='%2523d1d1d1' /%3E%3Cinkscape:clipboard style='font-variation-settings:normalopacity:1vector-effect:nonefill:%252300ff00fill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:roundstroke-miterlimit:4stroke-dasharray:nonestroke-dashoffset:0stroke-opacity:1-inkscape-stroke:nonestop-color:%2523000000stop-opacity:1' min='69.195827,-2.7355726' max='162.2546,112.96187' geom-min='69.195827,-2.7355726' geom-max='162.2546,112.96187' /%3E%3Cg id='g1' transform='translate(-69.195827,2.7355726")'%3E%3Cpath d='m 122.01098,-2.7355726 c -1.43622,0.00378 -2.86866,0.037795 -4.28599,0.1133859 a 72.264614,72.264614 0 0 0 -10.80189,1.3266151 c -0.10205,0.018898 -0.21166,0.018898 -0.31371,0.037795 a 1.9842532,1.9842532 0 0 0 -0.034,0.015118 C 85.515837,1.433249 69.195827,19.431371 69.195827,41.212802 c 0.02268,18.701115 12.075598,30.822067 26.948049,32.035297 a 29.041909,29.041909 0 0 0 8.666464,-0.502678 c 2.30551,-0.461103 4.33134,-0.982678 7.7178,-1.171654 2.28661,-0.124725 5.08347,1.583623 6.67465,3.892916 0.7937,1.160315 1.26992,2.418899 1.34929,3.480947 0.0756,1.065827 -0.15874,1.904883 -0.86929,2.694805 -0.20032,0.222992 -1.24725,0.808819 -2.60032,1.273701 -1.36063,0.464882 -2.97071,0.903308 -4.45228,1.519371 -3.92694,1.644096 -9.0671,2.774175 -12.854186,5.336697 -2.502049,1.68945 -4.285987,3.635908 -5.38583,5.574806 -1.096064,1.942679 -1.602521,3.919373 -0.990237,5.78646 0.56315,1.71969 2.082521,2.85733 3.522522,3.2504 1.436221,0.38929 2.857325,0.30992 4.195281,0.18141 1.33795,-0.13228 2.60787,-0.34015 3.53764,-0.41574 0.7748,-0.0643 0.94488,0.034 0.84283,-0.0869 0.81638,1.19055 1.23213,2.52094 1.79906,4.07811 0.61228,1.68945 1.84441,3.78709 4.30866,4.55433 a 1.9842532,1.9842532 0 0 0 0.28725,0.0643 c 3.75685,0.57826 6.91276,-0.11339 9.35055,-1.67434 2.4378,-1.56094 4.11213,-3.87024 5.44253,-6.31559 2.61921,-4.811343 4.1726,-10.318118 6.37229,-13.247254 8.62866,-4.550554 15.12945,-9.346778 19.31339,-15.979853 4.14615,0.771024 7.25292,1.080946 7.25292,1.080946 a 1.9842532,1.9842532 0 0 0 2.16189,-1.738584 c 0,0 0.62363,-5.230869 0.43087,-11.327251 -0.18142,-5.858272 -0.86173,-12.585835 -4.40315,-16.758436 -1.06205,-9.316542 -4.49008,-19.14332 -8.95749,-26.842222 3.84756,-5.537012 5.63906,-11.5162284 5.21197,-17.703319 a 1.9842532,1.9842532 0 0 0 -1.64031,-1.8179539 c -9.94773,-1.7159066 -20.36033,-3.1974824 -30.41766,-3.1672461 z m 6.03969,4.2633099 c 7.2189,0.377953 14.60032,1.3681898 21.87214,2.5851985 -0.008,4.0856719 -1.24725,8.0163832 -3.59056,11.8828422 A 38.75908,38.75908 0 0 0 141.9858,10.74979 l -0.0265,-0.04535 a 1.9842532,1.9842532 0 0 0 -0.0151,-0.0076 1.9842532,1.9842532 0 0 0 -0.58205,-0.347717 l 0.27969,-0.0189 A 42.803177,42.803177 0 0 0 128.05067,1.5315168 Z m -17.6882,1.0658274 c 6.34961,0.00756 11.94331,0.9637802 16.8378,2.8875609 a 38.808214,38.808214 0 0 1 11.69009,7.7102414 1.9842532,1.9842532 0 0 0 0.0113,0 1.9842532,1.9842532 0 0 0 0.0227,0.03024 23.07781,23.07781 0 0 1 1.47779,1.579844 c 0.21166,0.245669 0.42709,0.483779 0.63496,0.744567 l 0.11339,0.136063 c 4.97764,6.198429 9.67182,16.705523 11.73922,26.838443 a 36.540496,36.540496 0 0 0 -11.52001,-5.238429 h -0.0151 a 29.27246,29.27246 0 0 0 -2.31685,-0.491339 h -0.008 a 23.448204,23.448204 0 0 0 -4.61858,-0.332598 c -0.75591,0.02268 -1.50048,0.09071 -2.22993,0.207874 h -0.008 l -0.27591,0.05291 c -0.63496,0.113386 -1.2548,0.253229 -1.85953,0.442205 a 12.018905,12.018905 0 0 0 -4.67906,2.683466 11.625834,11.625834 0 0 0 -0.78614,0.812599 9.5735495,9.5735495 0 0 0 -1.13386,1.579844 10.77166,10.77166 0 0 0 -1.36063,5.404728 c 0.008,2.483151 0.69921,4.996538 1.73858,7.434335 a 31.891674,31.891674 0 0 0 1.79906,3.590554 41.744909,41.744909 0 0 0 3.34488,4.954964 c 1.19434,1.534489 2.4378,2.929135 3.63591,4.123467 0.45355,0.453543 0.95244,0.88063 1.48158,1.28504 l 0.0227,0.0189 c 3.71905,2.823309 9.05953,4.437168 13.9389,5.582366 -3.77197,5.348034 -9.33544,9.550872 -17.36316,13.719693 a 1.9842532,1.9842532 0 0 0 -0.65008,0.540473 c -3.12567,4.006302 -4.51276,9.73229 -6.82205,13.984254 -1.15654,2.1241 -2.47559,3.82867 -4.10079,4.87182 -1.57606,1.00913 -3.52252,1.48157 -6.37607,1.09228 -1.03181,-0.34393 -1.22078,-0.73323 -1.70079,-2.05228 -0.49133,-1.36063 -0.97511,-3.47717 -2.5474,-5.503 a 1.9842532,1.9842532 0 0 0 -0.32882,-0.32882 c -1.34929,-1.084719 -2.60787,-0.85795 -3.81354,-0.76346 -1.19811,0.0983 -2.44914,0.30992 -3.6019,0.42331 -1.152752,0.11338 -2.192123,0.0945 -2.77417,-0.0643 -0.582048,-0.15496 -0.634961,-0.17386 -0.793702,-0.653852 -0.07559,-0.249449 -0.06425,-1.285041 0.680316,-2.596538 0.737008,-1.307717 2.101418,-2.849765 4.149926,-4.236853 2.75905,-1.870867 7.77449,-3.129451 12.1663,-4.966302 1.11119,-0.464882 2.67591,-0.903308 4.20284,-1.424883 1.52693,-0.525355 3.06142,-1.04315 4.26331,-2.373545 a 7.55906,7.55906 0 0 0 1.87843,-5.639058 c -0.14362,-1.950238 -0.91087,-3.805987 -2.03339,-5.438744 -2.24504,-3.265514 -5.99055,-5.843154 -10.16693,-5.612602 -3.71528,0.204094 -6.1115,0.816378 -8.2734,1.247245 -2.15811,0.427087 -4.119683,0.71811 -7.570394,0.434646 C 83.501348,68.232662 73.183231,58.254703 73.168113,41.209023 c 0,-19.884108 14.891348,-36.2343544 34.148057,-38.5474267 1.03181,-0.045354 2.0485,-0.068032 3.04252,-0.068032 z M 93.05222,21.513892 c -7.018587,0 -12.449772,6.478114 -12.449772,14.090088 0,7.611973 5.431185,14.090088 12.453552,14.090088 7.01859,0 12.44977,-6.478115 12.44977,-14.090088 0,-7.611974 -5.43118,-14.090088 -12.44977,-14.090088 z m 0,3.968506 c 4.542995,0 8.48505,4.361578 8.48505,10.121582 0,5.760003 -3.942055,10.121581 -8.48127,10.121581 -0.207874,0 -0.408189,-0.01134 -0.612284,-0.03024 a 5.4160665,5.7146494 0 0 0 2.165671,-4.550554 5.4160665,5.7146494 0 0 0 -5.416067,-5.71465 5.4160665,5.7146494 0 0 0 -4.410711,2.422679 12.132291,12.132291 0 0 1 -0.211654,-2.24882 c 0,-5.760004 3.945829,-10.121582 8.485045,-10.121582 z m 41.61263,14.936703 c 1.17921,-0.03024 2.43401,0.07181 3.73417,0.291024 0.64252,0.109606 1.29638,0.249449 1.9578,0.415748 0.0113,0 0.0189,0 0.0265,0.0076 h 0.0151 a 28.278443,28.278443 0 0 1 4.0063,1.337954 34.665849,34.665849 0 0 1 5.64284,2.951813 c 0.57449,0.377953 1.13008,0.759685 1.65544,1.156536 0.52913,0.393071 1.02047,0.793701 1.48913,1.20189 0.46488,0.40819 0.89953,0.816379 1.29638,1.232127 l 0.0151,0.01512 c 2.34331,2.452915 3.56787,8.893234 3.74929,14.653238 0.14362,4.633704 -0.18897,7.211343 -0.32882,8.643785 -1.18299,-0.136063 -3.06898,-0.31748 -6.25512,-0.96 -5.15906,-1.04693 -11.50111,-2.985829 -14.94426,-5.355594 l -0.0718,-0.04536 a 11.346149,11.346149 0 0 1 -0.51024,-0.385512 c -0.0605,-0.04535 -0.12472,-0.09071 -0.17764,-0.136063 a 8.0730761,8.0730761 0 0 1 -0.56693,-0.506457 37.587426,37.587426 0 0 1 -2.19212,-2.392442 39.96853,39.96853 0 0 1 -5.00032,-7.445675 c -0.26457,-0.529134 -0.51402,-1.054488 -0.73701,-1.579843 -0.89575,-2.097639 -1.40976,-4.146144 -1.41732,-5.888508 0,-1.307717 0.24189,-2.418899 0.8126,-3.401577 0.18897,-0.328819 0.41574,-0.64252 0.68409,-0.944882 0.1663,-0.188977 0.34016,-0.370394 0.52158,-0.536694 0.0378,-0.03779 0.0756,-0.06425 0.11338,-0.09449 a 7.9710288,7.9710288 0 0 1 1.73859,-1.171654 c 1.36063,-0.672756 2.97071,-1.012914 4.74331,-1.058269 z m -31.21136,9.274967 a 1.9842532,1.9842532 0 0 0 -1.92378,2.044725 c 0.0756,2.381104 -0.40441,3.77953 -0.96,4.42205 -0.5556,0.638741 -1.32284,0.963781 -3.099219,0.767245 a 1.9842532,1.9842532 0 0 0 -2.188348,1.753702 1.9842532,1.9842532 0 0 0 1.753702,2.192127 c 2.562521,0.279686 5.000315,-0.351496 6.531025,-2.116536 1.53449,-1.768821 2.01449,-4.221735 1.92756,-7.135753 a 1.9842532,1.9842532 0 0 0 -2.04094,-1.92756 z' class='class1' style='fill:%252397c0fffill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:round' id='path1' /%3E%3C/g%3E%3C/svg%3E");
  --tab-max-width: 200px;
  --tab-outline-color: transparent;
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-pane-width: 90%;
  --tab-switcher-background: rgb(31, 29, 46);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31, 29, 46), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(193, 46%, 75%);
  --tab-text-color: #6e6a86;
  --tab-text-color-active: #6e6a86;
  --tab-text-color-focused: #6e6a86;
  --tab-text-color-focused-active: #6e6a86;
  --tab-text-color-focused-active-current: #e0def4;
  --tab-text-color-focused-highlighted: rgb(235, 188, 186);
  --table-add-button-border-color: transparent;
  --table-border-color: #524f67;
  --table-border-radius: 7px;
  --table-drag-handle-background-active: rgb(235, 188, 186);
  --table-drag-handle-color: #6e6a86;
  --table-drag-handle-color-active: rgb(31, 29, 46);
  --table-header-background: rgb(196, 167, 231);
  --table-header-background-hover: rgb(196, 167, 231);
  --table-header-border-color: #524f67;
  --table-header-color: rgb(31, 29, 46);
  --table-row-alt-background: #21202e;
  --table-row-alt-background-hover: #21202e;
  --table-selection: hsla(193, 46%, 75%, 0.1);
  --table-selection-border-color: rgb(235, 188, 186);
  --tag-background: rgba(235, 188, 186, 0.1);
  --tag-background-hover: rgba(235, 188, 186, 0.2);
  --tag-border-color: hsla(193, 46%, 75%, 0.15);
  --tag-border-color-hover: hsla(193, 46%, 75%, 0.15);
  --tag-color: rgb(235, 188, 186);
  --tag-color-hover: rgb(235, 188, 186);
  --tertiary: var(--text-accent-hover, rgb(156, 207, 216));
  --text: #e0def4;
  --text-accent: rgb(235, 188, 186);
  --text-accent-hover: rgb(156, 207, 216);
  --text-error: rgb(235, 188, 186);
  --text-faint: #6e6a86;
  --text-highlight-bg: rgba(246, 193, 119, 0.2);
  --text-muted: #6e6a86;
  --text-normal: #e0def4;
  --text-on-accent: rgb(31, 29, 46);
  --text-on-accent-inverted: rgb(31, 29, 46);
  --text-selection: rgb(64, 61, 82, 0.5);
  --text-success: rgb(156, 207, 216);
  --text-warning: rgb(246, 193, 119);
  --textHighlight: var(--text-highlight-bg, rgba(246, 193, 119, 0.2));
  --titleFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgba(64, 61, 82, 0.6);
  --titlebar-text-color: #6e6a86;
  --titlebar-text-color-focused: #e0def4;
  --todoist-p4-border: rgb(235, 188, 186);
  --todoist-p4-border-hover: rgb(235, 111, 146);
  --todoist-task-separator-color: rgba(64, 61, 82, 0.6);
  --uw-background: #26233a;
  --vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm321-81q60 60 138.5 90.5T863-366q11-1 19.5 3t14.5 12q6 8 8 17t-1 19q-35 121-140.5 197T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-131 76.5-232T394-822q10-3 19.5-1t17.5 8q8 6 12.5 14.5T447-781q-5 86 24 162.5T561-481Z'/%3E%3C/svg%3E");
  --vault-profile-color: #e0def4;
  --vault-profile-color-hover: #e0def4;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(64, 61, 82, 0.6);
  color: rgb(224, 222, 244);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 207, 216) none 0px;
  text-decoration-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(156, 207, 216) none 0px;
  text-decoration-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(246, 193, 119, 0.2);
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: line-through 2px rgb(246, 193, 119);
  text-decoration-color: rgb(246, 193, 119);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(235, 188, 186);
  border-radius: 5px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(49, 116, 143);
  border-color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 106, 134) none 0px;
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(49, 116, 143);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 116, 143) none 0px;
  text-decoration-color: rgb(49, 116, 143);
  transition: color 0.5s;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(235, 188, 186);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 188, 186) none 0px;
  text-decoration-color: rgb(235, 188, 186);
  transition: background-color 0.5s;
}

html[saved-theme="dark"] body a.internal-link.broken {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(144, 140, 170);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(144, 140, 170) none 0px;
  text-decoration: rgba(162, 208, 221, 0.3);
  text-decoration-color: rgba(162, 208, 221, 0.3);
  transition: background-color 0.5s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 234.578px;
  margin-right: 234.578px;
  width: 194.844px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(33, 32, 46);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 79, 103);
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-width: 0px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 79, 103);
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-left-radius: 7px;
  color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(196, 167, 231);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: justify;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  text-align: justify;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(235, 111, 146);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(235, 111, 146);
  border-radius: 10px;
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(235, 188, 186);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(235, 188, 186);
  border-right-color: rgb(235, 188, 186);
  border-top-color: rgb(235, 188, 186);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background 0.4s, stroke-dashoffset 0.6s, border-color 0.2s ease-out;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(110, 106, 134);
  text-decoration: line-through rgb(110, 106, 134);
  text-decoration-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480-40.09q-91.34%200-171.59-34.58-80.25-34.59-139.7-94.32-59.45-59.73-94.04-140.27-34.58-80.53-34.58-171.87%200-90.77%2034.58-171.02%2034.59-80.26%2094.04-139.71t139.98-93.75q80.54-34.3%20171.31-34.3t171.31%2034.3q80.53%2034.3%20139.98%2093.75%2059.45%2059.45%2094.04%20139.71%2034.58%2080.25%2034.58%20171.02%200%2091.34-34.58%20171.87-34.59%2080.54-94.04%20140.27-59.45%2059.73-139.7%2094.32Q571.34-40.09%20480-40.09Zm0-122.95q47.61%200%2093-13.74t84.56-41.48L217.13-658.13q-26.61%2039.74-40.35%2084.85-13.74%2045.11-13.74%2092.15%200%20132.61%2092.46%20225.35%2092.46%2092.74%20224.5%2092.74Zm263.43-141.09q26.05-39.74%2039.79-84.85%2013.74-45.11%2013.74-92.15%200-131.48-92.46-223.65-92.46-92.18-224.5-92.18-47.04%200-91.87%2013.18-44.83%2013.17-84.56%2039.21l439.86%20440.44Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480-40.09q-91.34%200-171.59-34.58-80.25-34.59-139.7-94.32-59.45-59.73-94.04-140.27-34.58-80.53-34.58-171.87%200-90.77%2034.58-171.02%2034.59-80.26%2094.04-139.71t139.98-93.75q80.54-34.3%20171.31-34.3t171.31%2034.3q80.53%2034.3%20139.98%2093.75%2059.45%2059.45%2094.04%20139.71%2034.58%2080.25%2034.58%20171.02%200%2091.34-34.58%20171.87-34.59%2080.54-94.04%20140.27-59.45%2059.73-139.7%2094.32Q571.34-40.09%20480-40.09Zm0-122.95q47.61%200%2093-13.74t84.56-41.48L217.13-658.13q-26.61%2039.74-40.35%2084.85-13.74%2045.11-13.74%2092.15%200%20132.61%2092.46%20225.35%2092.46%2092.74%20224.5%2092.74Zm263.43-141.09q26.05-39.74%2039.79-84.85%2013.74-45.11%2013.74-92.15%200-131.48-92.46-223.65-92.46-92.18-224.5-92.18-47.04%200-91.87%2013.18-44.83%2013.17-84.56%2039.21l439.86%20440.44Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.72-58.43q-47.34%200-80.77-33.67-33.43-33.66-33.43-80.93%200-47.27%2033.71-80.82%2033.71-33.54%2081.05-33.54%2047.34%200%2080.77%2033.78%2033.43%2033.78%2033.43%2081.22%200%2047.43-33.71%2080.69-33.71%2033.27-81.05%2033.27Zm.56-312.7q-45.58%200-77.52-31.88-31.93-31.88-31.93-77.29v-306.14q0-46.06%2031.65-77.9%2031.65-31.83%2077.24-31.83%2045.58%200%2077.52%2031.83%2031.93%2031.84%2031.93%2077.9v306.14q0%2045.41-31.65%2077.29-31.65%2031.88-77.24%2031.88Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.72-58.43q-47.34%200-80.77-33.67-33.43-33.66-33.43-80.93%200-47.27%2033.71-80.82%2033.71-33.54%2081.05-33.54%2047.34%200%2080.77%2033.78%2033.43%2033.78%2033.43%2081.22%200%2047.43-33.71%2080.69-33.71%2033.27-81.05%2033.27Zm.56-312.7q-45.58%200-77.52-31.88-31.93-31.88-31.93-77.29v-306.14q0-46.06%2031.65-77.9%2031.65-31.83%2077.24-31.83%2045.58%200%2077.52%2031.83%2031.93%2031.84%2031.93%2077.9v306.14q0%2045.41-31.65%2077.29-31.65%2031.88-77.24%2031.88Z%22%2F%3E%3C%2Fsvg%3E");
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
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 32, 46);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-237.61-162.96%2098.26q-17.82%2010.7-36.37%209.42-18.54-1.29-32.24-11.98-14.26-10.13-20.82-26.89-6.57-16.76-2.57-36.59l43.7-185.96L123.78-517.3q-15.69-12.7-19.54-30.46-3.85-17.76%201.15-34.59%205.57-16.26%2019.54-27.95Q138.91-622%20159.3-624l190.09-16.57%2073.7-175.52q8.13-19.26%2023.61-28.17%2015.47-8.92%2033.3-8.92t33.3%208.92q15.48%208.91%2023.61%2028.17l73.7%20175.52L800.7-624q20.39%202%2034.37%2013.7%2013.97%2011.69%2019.54%2027.95%205%2016.83%201.15%2034.59-3.85%2017.76-19.54%2030.46L691.26-391.35l43.7%20185.96q4%2019.83-2.57%2036.59-6.56%2016.76-20.82%2026.89-13.7%2010.69-32.24%2011.98-18.55%201.28-36.37-9.42L480-237.61Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-237.61-162.96%2098.26q-17.82%2010.7-36.37%209.42-18.54-1.29-32.24-11.98-14.26-10.13-20.82-26.89-6.57-16.76-2.57-36.59l43.7-185.96L123.78-517.3q-15.69-12.7-19.54-30.46-3.85-17.76%201.15-34.59%205.57-16.26%2019.54-27.95Q138.91-622%20159.3-624l190.09-16.57%2073.7-175.52q8.13-19.26%2023.61-28.17%2015.47-8.92%2033.3-8.92t33.3%208.92q15.48%208.91%2023.61%2028.17l73.7%20175.52L800.7-624q20.39%202%2034.37%2013.7%2013.97%2011.69%2019.54%2027.95%205%2016.83%201.15%2034.59-3.85%2017.76-19.54%2030.46L691.26-391.35l43.7%20185.96q4%2019.83-2.57%2036.59-6.56%2016.76-20.82%2026.89-13.7%2010.69-32.24%2011.98-18.55%201.28-36.37-9.42L480-237.61Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.96 11.96 0 0 1 16 28' stroke-width='1.5' stroke='%23000'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.96 11.96 0 0 1 16 28' stroke-width='1.5' stroke='%23000'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M203.04-40.96q-51.3%200-87.12-36.22-35.83-36.23-35.83-86.73v-554.48q0-51.3%2035.83-87.13%2035.82-35.83%2087.12-35.83H215v-23q0-22.34%2016.46-38.52%2016.46-16.17%2038.8-16.17%2023.13%200%2038.91%2016.17%2015.79%2016.18%2015.79%2038.52v23h310.08v-23q0-22.34%2016.07-38.52%2016.06-16.17%2038.91-16.17%2022.85%200%2038.91%2016.17Q745-886.69%20745-864.35v23h11.96q51.3%200%2087.12%2035.83%2035.83%2035.83%2035.83%2087.13v554.48q0%2050.5-35.83%2086.73-35.82%2036.22-87.12%2036.22H203.04Zm0-122.95h553.92v-409.31H203.04v409.31ZM322.09-388.3q-21.76%200-37.1-15.55t-15.34-37.61q0-21.83%2015.34-37.05%2015.34-15.23%2037.1-15.23h315.82q21.76%200%2037.1%2015.27t15.34%2036.94q0%2021.66-15.34%2037.44-15.34%2015.79-37.1%2015.79H322.09Zm0%20160.6q-21.76%200-37.1-15.43t-15.34-37.33q0-21.66%2015.34-37.16%2015.34-15.51%2037.1-15.51h194.39q21.76%200%2037.1%2015.39%2015.33%2015.38%2015.33%2037.21t-15.33%2037.33q-15.34%2015.5-37.1%2015.5H322.09Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M203.04-40.96q-51.3%200-87.12-36.22-35.83-36.23-35.83-86.73v-554.48q0-51.3%2035.83-87.13%2035.82-35.83%2087.12-35.83H215v-23q0-22.34%2016.46-38.52%2016.46-16.17%2038.8-16.17%2023.13%200%2038.91%2016.17%2015.79%2016.18%2015.79%2038.52v23h310.08v-23q0-22.34%2016.07-38.52%2016.06-16.17%2038.91-16.17%2022.85%200%2038.91%2016.17Q745-886.69%20745-864.35v23h11.96q51.3%200%2087.12%2035.83%2035.83%2035.83%2035.83%2087.13v554.48q0%2050.5-35.83%2086.73-35.82%2036.22-87.12%2036.22H203.04Zm0-122.95h553.92v-409.31H203.04v409.31ZM322.09-388.3q-21.76%200-37.1-15.55t-15.34-37.61q0-21.83%2015.34-37.05%2015.34-15.23%2037.1-15.23h315.82q21.76%200%2037.1%2015.27t15.34%2036.94q0%2021.66-15.34%2037.44-15.34%2015.79-37.1%2015.79H322.09Zm0%20160.6q-21.76%200-37.1-15.43t-15.34-37.33q0-21.66%2015.34-37.16%2015.34-15.51%2037.1-15.51h194.39q21.76%200%2037.1%2015.39%2015.33%2015.38%2015.33%2037.21t-15.33%2037.33q-15.34%2015.5-37.1%2015.5H322.09Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 207, 216);
  color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-202.13-147.87%2062.78q-60.91%2025.83-116.04-10.31-55.13-36.14-55.13-102.51v-507.66q0-51.07%2036.22-87.01%2036.23-35.94%2086.73-35.94h392.18q50.5%200%2086.73%2035.94%2036.22%2035.94%2036.22%2087.01v507.66q0%2066.37-55.13%20102.51t-116.04%2010.31L480-202.13Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-202.13-147.87%2062.78q-60.91%2025.83-116.04-10.31-55.13-36.14-55.13-102.51v-507.66q0-51.07%2036.22-87.01%2036.23-35.94%2086.73-35.94h392.18q50.5%200%2086.73%2035.94%2036.22%2035.94%2036.22%2087.01v507.66q0%2066.37-55.13%20102.51t-116.04%2010.31L480-202.13Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M333.13-322H232.61q-37.65%200-54.41-33.02-16.77-33.02%204.06-63.55l352.7-508.91q12.13-17.26%2031.39-23.54%2019.26-6.29%2037.95%201.28%2019.27%207.56%2029.9%2025.04%2010.63%2017.48%208.06%2037.74l-36%20288.96h133.65q39.09%200%2055.57%2035.3%2016.48%2035.31-8.35%2065.27L402.87-32.78q-12.13%2015.69-31.39%2019.98-19.26%204.28-37.96-4.29-18.69-8-28.11-25.19-9.41-17.2-6.85-37.02L333.13-322Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M333.13-322H232.61q-37.65%200-54.41-33.02-16.77-33.02%204.06-63.55l352.7-508.91q12.13-17.26%2031.39-23.54%2019.26-6.29%2037.95%201.28%2019.27%207.56%2029.9%2025.04%2010.63%2017.48%208.06%2037.74l-36%20288.96h133.65q39.09%200%2055.57%2035.3%2016.48%2035.31-8.35%2065.27L402.87-32.78q-12.13%2015.69-31.39%2019.98-19.26%204.28-37.96-4.29-18.69-8-28.11-25.19-9.41-17.2-6.85-37.02L333.13-322Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.43-113.52q-22.82%200-44.15-8.41-21.32-8.42-39.15-24.68l-80.04-73.04q-101.57-93-188.79-192.13-87.21-99.13-87.21-227.39%200-109.96%2073.97-184.07%2073.98-74.11%20183.94-74.11%2056.17%200%20102.61%2021.18%2046.43%2021.17%2078.82%2048.87%2032.4-27.7%2078.83-48.87%2046.44-21.18%20102.61-21.18%20109.96%200%20184.78%2074.11%2074.83%2074.11%2074.83%20184.07%200%20128.26-88.07%20227.67-88.06%2099.41-189.76%20191.98l-79.35%2073.48q-17.82%2016.26-39.43%2024.39-21.61%208.13-44.44%208.13Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.43-113.52q-22.82%200-44.15-8.41-21.32-8.42-39.15-24.68l-80.04-73.04q-101.57-93-188.79-192.13-87.21-99.13-87.21-227.39%200-109.96%2073.97-184.07%2073.98-74.11%20183.94-74.11%2056.17%200%20102.61%2021.18%2046.43%2021.17%2078.82%2048.87%2032.4-27.7%2078.83-48.87%2046.44-21.18%20102.61-21.18%20109.96%200%20184.78%2074.11%2074.83%2074.11%2074.83%20184.07%200%20128.26-88.07%20227.67-88.06%2099.41-189.76%20191.98l-79.35%2073.48q-17.82%2016.26-39.43%2024.39-21.61%208.13-44.44%208.13Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480.59-261.17q23.75%200%2040.28-16.64%2016.52-16.64%2016.52-40.32v-144.91q0-23.68-16.57-40.32T480.67-520q-23.58%200-40.38%2016.64-16.81%2016.64-16.81%2040.32v144.91q0%2023.68%2016.68%2040.32t40.43%2016.64Zm-.77-337.87q24.85%200%2041.47-16.45%2016.62-16.44%2016.62-41.29%200-24.85-16.44-41.47-16.45-16.62-41.29-16.62-24.85%200-41.47%2016.44-16.62%2016.45-16.62%2041.3%200%2024.85%2016.44%2041.47%2016.45%2016.62%2041.29%2016.62ZM480-40.09q-91.34%200-171.86-34.35-80.53-34.35-139.94-93.76-59.41-59.41-93.76-139.94Q40.09-388.66%2040.09-480q0-91.59%2034.41-172.06%2034.4-80.47%2094.01-140.04%2059.6-59.56%20139.93-93.69%2080.34-34.12%20171.56-34.12%2091.58%200%20172.07%2034.11%2080.49%2034.12%20140.05%2093.68%2059.56%2059.56%2093.68%20140.08%2034.11%2080.51%2034.11%20172.12%200%2091.62-34.12%20171.71-34.13%2080.1-93.69%20139.7-59.57%2059.61-140.04%2094.01Q571.59-40.09%20480-40.09Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480.59-261.17q23.75%200%2040.28-16.64%2016.52-16.64%2016.52-40.32v-144.91q0-23.68-16.57-40.32T480.67-520q-23.58%200-40.38%2016.64-16.81%2016.64-16.81%2040.32v144.91q0%2023.68%2016.68%2040.32t40.43%2016.64Zm-.77-337.87q24.85%200%2041.47-16.45%2016.62-16.44%2016.62-41.29%200-24.85-16.44-41.47-16.45-16.62-41.29-16.62-24.85%200-41.47%2016.44-16.62%2016.45-16.62%2041.3%200%2024.85%2016.44%2041.47%2016.45%2016.62%2041.29%2016.62ZM480-40.09q-91.34%200-171.86-34.35-80.53-34.35-139.94-93.76-59.41-59.41-93.76-139.94Q40.09-388.66%2040.09-480q0-91.59%2034.41-172.06%2034.4-80.47%2094.01-140.04%2059.6-59.56%20139.93-93.69%2080.34-34.12%20171.56-34.12%2091.58%200%20172.07%2034.11%2080.49%2034.12%20140.05%2093.68%2059.56%2059.56%2093.68%20140.08%2034.11%2080.51%2034.11%20172.12%200%2091.62-34.12%20171.71-34.13%2080.1-93.69%20139.7-59.57%2059.61-140.04%2094.01Q571.59-40.09%20480-40.09Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.98-27.13q-38.55%200-65.24-28.39-26.7-28.39-25.26-70.35h181.04q1.44%2041.96-25.28%2070.35-26.71%2028.39-65.26%2028.39ZM357-158.61q-21.76%200-37.1-15.54-15.33-15.55-15.33-37.62%200-21.82%2015.33-37.05%2015.34-15.22%2037.1-15.22h246q21.76%200%2037.1%2015.27%2015.33%2015.27%2015.33%2036.93%200%2021.67-15.33%2037.45-15.34%2015.78-37.1%2015.78H357Zm-38.7-138.17q-79.69-46.26-128.52-125.72-48.82-79.45-48.82-173.33%200-140.53%2099.11-239.5%2099.12-98.98%20239.86-98.98t239.93%2098.98q99.18%2098.97%2099.18%20239.5%200%2093.83-48.54%20173.31T641.7-296.78H318.3Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.98-27.13q-38.55%200-65.24-28.39-26.7-28.39-25.26-70.35h181.04q1.44%2041.96-25.28%2070.35-26.71%2028.39-65.26%2028.39ZM357-158.61q-21.76%200-37.1-15.54-15.33-15.55-15.33-37.62%200-21.82%2015.33-37.05%2015.34-15.22%2037.1-15.22h246q21.76%200%2037.1%2015.27%2015.33%2015.27%2015.33%2036.93%200%2021.67-15.33%2037.45-15.34%2015.78-37.1%2015.78H357Zm-38.7-138.17q-79.69-46.26-128.52-125.72-48.82-79.45-48.82-173.33%200-140.53%2099.11-239.5%2099.12-98.98%20239.86-98.98t239.93%2098.98q99.18%2098.97%2099.18%20239.5%200%2093.83-48.54%20173.31T641.7-296.78H318.3Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(49, 116, 143);
  color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M365.35-378.39%2085.48-491.26q-19.83-8.13-29.24-24.39-9.42-16.26-9.42-33.52%200-17.83%209.92-34.09%209.91-16.26%2029.74-23.39L772.35-864.7q18.26-7.13%2035.58-2.78%2017.33%204.35%2029.46%2016.48%2012.13%2012.7%2016.76%2029.74%204.63%2017.04-2.5%2035.87L595.04-98.96Q587.91-79.13%20571.65-69q-16.26%2010.13-34.09%2010.13-17.26%200-33.52-9.41-16.26-9.42-24.39-29.24l-114.3-280.87Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M365.35-378.39%2085.48-491.26q-19.83-8.13-29.24-24.39-9.42-16.26-9.42-33.52%200-17.83%209.92-34.09%209.91-16.26%2029.74-23.39L772.35-864.7q18.26-7.13%2035.58-2.78%2017.33%204.35%2029.46%2016.48%2012.13%2012.7%2016.76%2029.74%204.63%2017.04-2.5%2035.87L595.04-98.96Q587.91-79.13%20571.65-69q-16.26%2010.13-34.09%2010.13-17.26%200-33.52-9.41-16.26-9.42-24.39-29.24l-114.3-280.87Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 167, 231);
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22currentColor%22%20class%3D%22w-5%20h-5%22%3E%0A%20%20%3Cpath%20d%3D%22M15.98%201.804a1%201%200%200%200-1.96%200l-.24%201.192a1%201%200%200%201-.784.785l-1.192.238a1%201%200%200%200%200%201.962l1.192.238a1%201%200%200%201%20.785.785l.238%201.192a1%201%200%200%200%201.962%200l.238-1.192a1%201%200%200%201%20.785-.785l1.192-.238a1%201%200%200%200%200-1.962l-1.192-.238a1%201%200%200%201-.785-.785l-.238-1.192ZM6.949%205.684a1%201%200%200%200-1.898%200l-.683%202.051a1%201%200%200%201-.633.633l-2.051.683a1%201%200%200%200%200%201.898l2.051.684a1%201%200%200%201%20.633.632l.683%202.051a1%201%200%200%200%201.898%200l.683-2.051a1%201%200%200%201%20.633-.633l2.051-.683a1%201%200%200%200%200-1.898l-2.051-.683a1%201%200%200%201-.633-.633L6.95%205.684ZM13.949%2013.684a1%201%200%200%200-1.898%200l-.184.551a1%201%200%200%201-.632.633l-.551.183a1%201%200%200%200%200%201.898l.551.183a1%201%200%200%201%20.633.633l.183.551a1%201%200%200%200%201.898%200l.184-.551a1%201%200%200%201%20.632-.633l.551-.183a1%201%200%200%200%200-1.898l-.551-.184a1%201%200%200%201-.633-.632l-.183-.551Z%22%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22currentColor%22%20class%3D%22w-5%20h-5%22%3E%0A%20%20%3Cpath%20d%3D%22M15.98%201.804a1%201%200%200%200-1.96%200l-.24%201.192a1%201%200%200%201-.784.785l-1.192.238a1%201%200%200%200%200%201.962l1.192.238a1%201%200%200%201%20.785.785l.238%201.192a1%201%200%200%200%201.962%200l.238-1.192a1%201%200%200%201%20.785-.785l1.192-.238a1%201%200%200%200%200-1.962l-1.192-.238a1%201%200%200%201-.785-.785l-.238-1.192ZM6.949%205.684a1%201%200%200%200-1.898%200l-.683%202.051a1%201%200%200%201-.633.633l-2.051.683a1%201%200%200%200%200%201.898l2.051.684a1%201%200%200%201%20.633.632l.683%202.051a1%201%200%200%200%201.898%200l.683-2.051a1%201%200%200%201%20.633-.633l2.051-.683a1%201%200%200%200%200-1.898l-2.051-.683a1%201%200%200%201-.633-.633L6.95%205.684ZM13.949%2013.684a1%201%200%200%200-1.898%200l-.184.551a1%201%200%200%201-.632.633l-.551.183a1%201%200%200%200%200%201.898l.551.183a1%201%200%200%201%20.633.633l.183.551a1%201%200%200%200%201.898%200l.184-.551a1%201%200%200%201%20.632-.633l.551-.183a1%201%200%200%200%200-1.898l-.551-.184a1%201%200%200%201-.633-.632l-.183-.551Z%22%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M391.39-837.13q-23.68%200-40.32-17.03-16.64-17.02-16.64-40.49%200-24.26%2016.64-40.61%2016.64-16.35%2040.32-16.35h177.22q23.68%200%2040.32%2016.24t16.64%2040.43q0%2023.98-16.64%2040.9-16.64%2016.91-40.32%2016.91H391.39ZM480-362.04q23.68%200%2040.32-16.64T536.96-419v-143.3q0-23.69-16.64-40.32-16.64-16.64-40.32-16.64t-40.32%2016.64q-16.64%2016.63-16.64%2040.32V-419q0%2023.68%2016.64%2040.32T480-362.04Zm0%20349q-82.26%200-154.2-31.13-71.94-31.12-125.89-84.69-53.95-53.57-85.02-125.55-31.06-71.98-31.06-154.24t31.11-154.22q31.12-71.95%2085.01-125.55%2053.88-53.61%20125.84-85.01%2071.95-31.4%20154.21-31.4%2064.13%200%20124.04%2019.29%2059.92%2019.28%20111.48%2057.84l30-29.43q17.13-17.7%2040.61-17.7t40.61%2017.42q17.13%2017.41%2017.13%2040.89t-17.13%2040.61l-30%2030q41%2053.43%2060.22%20113.28%2019.21%2059.85%2019.21%20123.98%200%2082.26-31.18%20154.2-31.19%2071.93-84.98%20125.67-53.78%2053.73-125.77%2084.73Q562.26-13.04%20480-13.04Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M391.39-837.13q-23.68%200-40.32-17.03-16.64-17.02-16.64-40.49%200-24.26%2016.64-40.61%2016.64-16.35%2040.32-16.35h177.22q23.68%200%2040.32%2016.24t16.64%2040.43q0%2023.98-16.64%2040.9-16.64%2016.91-40.32%2016.91H391.39ZM480-362.04q23.68%200%2040.32-16.64T536.96-419v-143.3q0-23.69-16.64-40.32-16.64-16.64-40.32-16.64t-40.32%2016.64q-16.64%2016.63-16.64%2040.32V-419q0%2023.68%2016.64%2040.32T480-362.04Zm0%20349q-82.26%200-154.2-31.13-71.94-31.12-125.89-84.69-53.95-53.57-85.02-125.55-31.06-71.98-31.06-154.24t31.11-154.22q31.12-71.95%2085.01-125.55%2053.88-53.61%20125.84-85.01%2071.95-31.4%20154.21-31.4%2064.13%200%20124.04%2019.29%2059.92%2019.28%20111.48%2057.84l30-29.43q17.13-17.7%2040.61-17.7t40.61%2017.42q17.13%2017.41%2017.13%2040.89t-17.13%2040.61l-30%2030q41%2053.43%2060.22%20113.28%2019.21%2059.85%2019.21%20123.98%200%2082.26-31.18%20154.2-31.19%2071.93-84.98%20125.67-53.78%2053.73-125.77%2084.73Q562.26-13.04%20480-13.04Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M481-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.22q-34-8.22-65-25.65-22%2011.43-45.5%2018.65-23.5%207.22-48.5%2011.22-22.7%203-39.33-13.13Q63.04-136.3%2063.04-160t16.13-40.83Q95.3-217.96%20119-224.52q18.57-5%2035.35-13.28%2016.78-8.29%2032.78-19.29%2012-8%2026.44-8.28%2014.43-.28%2026.43%207.72%2024%2017.56%2051%2028.63%2027%2011.06%2056%2011.06%2029.57%200%2056.78-10.84Q431-239.65%20455-257.22q12.57-8.43%2027.28-7.65%2014.72.78%2027.29%208.78%2023%2017%2049.71%2027.57Q586-217.96%20615-217.96t55.72-11.06q26.71-11.07%2050.15-28.07%2012.56-8.56%2028.13-8.28%2015.57.28%2028.13%208.85%2014.44%209.43%2030.44%2017.93t32.43%2013.5q23.7%207.57%2040.33%2024.48T896.96-160q0%2024.7-17.13%2040.83t-40.4%2012.13q-24-4-46.71-11.44Q770-125.91%20749-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.44q-34-8.43-65-25.43ZM63.04-296.26v-96.96q0-100.56%2038.79-187.63%2038.78-87.06%20106.34-151.41%2067.57-64.35%20158.13-101.41%2090.57-37.07%20193.7-37.07%2016.57%200%2036.93%201.28%2020.37%201.29%2038.07%204.29%2028.83%205.56%2041.67%2031.32%2012.85%2025.76-.28%2052.02-8.43%2016.31-13.93%2036.81-5.5%2020.5-5.5%2038.8%200%2048.31%2029.63%2077.65%2029.63%2029.35%2077.93%2029.35H840q23.7%200%2040.33%2016.63t16.63%2040.33q0%2024.26-16.63%2040.89T840-484.74h-75.48q-95.69%200-158.59-62.89-62.89-62.89-62.89-158.59%200-8.3.72-16.61.72-8.3%201.59-17.6-57.18%2023-92.78%2073.52-35.61%2050.52-35.61%20113.69%200%2032.31%209.15%2059.83%209.15%2027.52%2022.02%2045.95l-.96.83q15.7-10.56%2034.11-10.28%2018.42.28%2032.98%2010.85%2019%2013.43%2048.65%2023.87%2029.66%2010.43%2052.09%2010.43%2023.43%200%2051.74-10.93%2028.3-10.94%2048.3-23.81%2015.13-11.13%2033.68-10.91%2018.54.22%2034.24%2010.35l10.61%206.74q11%207%2023%2011.71%2012%204.72%2023.43%208.72%2023.7%207.57%2040.33%2025.26%2016.63%2017.7%2016.63%2041.39%200%2024.7-17.13%2040.55-17.13%2015.84-40.4%2011.84-25-5-47.71-12.21Q769-320.26%20749-330.7q-33%2018.44-65.5%2026.44t-68.5%208q-34.43%200-70.15-9.5-35.72-9.5-63.85-24.94-30.43%2017-64.72%2025.5-34.28%208.5-69.28%208.94-33.43%200-68.72-9-35.28-9-65.28-25.44-31.57%2016.44-69.91%2025.44-38.35%209-80.05%209Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M481-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.22q-34-8.22-65-25.65-22%2011.43-45.5%2018.65-23.5%207.22-48.5%2011.22-22.7%203-39.33-13.13Q63.04-136.3%2063.04-160t16.13-40.83Q95.3-217.96%20119-224.52q18.57-5%2035.35-13.28%2016.78-8.29%2032.78-19.29%2012-8%2026.44-8.28%2014.43-.28%2026.43%207.72%2024%2017.56%2051%2028.63%2027%2011.06%2056%2011.06%2029.57%200%2056.78-10.84Q431-239.65%20455-257.22q12.57-8.43%2027.28-7.65%2014.72.78%2027.29%208.78%2023%2017%2049.71%2027.57Q586-217.96%20615-217.96t55.72-11.06q26.71-11.07%2050.15-28.07%2012.56-8.56%2028.13-8.28%2015.57.28%2028.13%208.85%2014.44%209.43%2030.44%2017.93t32.43%2013.5q23.7%207.57%2040.33%2024.48T896.96-160q0%2024.7-17.13%2040.83t-40.4%2012.13q-24-4-46.71-11.44Q770-125.91%20749-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.44q-34-8.43-65-25.43ZM63.04-296.26v-96.96q0-100.56%2038.79-187.63%2038.78-87.06%20106.34-151.41%2067.57-64.35%20158.13-101.41%2090.57-37.07%20193.7-37.07%2016.57%200%2036.93%201.28%2020.37%201.29%2038.07%204.29%2028.83%205.56%2041.67%2031.32%2012.85%2025.76-.28%2052.02-8.43%2016.31-13.93%2036.81-5.5%2020.5-5.5%2038.8%200%2048.31%2029.63%2077.65%2029.63%2029.35%2077.93%2029.35H840q23.7%200%2040.33%2016.63t16.63%2040.33q0%2024.26-16.63%2040.89T840-484.74h-75.48q-95.69%200-158.59-62.89-62.89-62.89-62.89-158.59%200-8.3.72-16.61.72-8.3%201.59-17.6-57.18%2023-92.78%2073.52-35.61%2050.52-35.61%20113.69%200%2032.31%209.15%2059.83%209.15%2027.52%2022.02%2045.95l-.96.83q15.7-10.56%2034.11-10.28%2018.42.28%2032.98%2010.85%2019%2013.43%2048.65%2023.87%2029.66%2010.43%2052.09%2010.43%2023.43%200%2051.74-10.93%2028.3-10.94%2048.3-23.81%2015.13-11.13%2033.68-10.91%2018.54.22%2034.24%2010.35l10.61%206.74q11%207%2023%2011.71%2012%204.72%2023.43%208.72%2023.7%207.57%2040.33%2025.26%2016.63%2017.7%2016.63%2041.39%200%2024.7-17.13%2040.55-17.13%2015.84-40.4%2011.84-25-5-47.71-12.21Q769-320.26%20749-330.7q-33%2018.44-65.5%2026.44t-68.5%208q-34.43%200-70.15-9.5-35.72-9.5-63.85-24.94-30.43%2017-64.72%2025.5-34.28%208.5-69.28%208.94-33.43%200-68.72-9-35.28-9-65.28-25.44-31.57%2016.44-69.91%2025.44-38.35%209-80.05%209Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(49, 116, 143);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 156, 207, 216;
  background: rgba(156, 207, 216, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bookmark"] {
  --callout-color: 235, 111, 146;
  --table-border-color: color-mix(in srgb, rgb(235, 111, 146) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(235, 111, 146, 0.1);
  border-bottom-color: rgba(235, 111, 146, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(235, 111, 146, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(235, 111, 146, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(235, 111, 146, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="box"] {
  --callout-color: 49, 116, 143;
  --table-border-color: color-mix(in srgb, rgb(49, 116, 143) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(64, 61, 82);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 61, 82);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 61, 82);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 61, 82);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 235, 188, 186;
  background: rgba(235, 188, 186, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 235, 188, 186;
  background: rgba(235, 188, 186, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 196, 167, 231;
  background: rgba(196, 167, 231, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(196, 167, 231, 0.1);
  border-bottom-color: rgba(196, 167, 231, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(196, 167, 231, 0.25);
  border-right-color: rgba(196, 167, 231, 0.25);
  border-top-color: rgba(196, 167, 231, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 235, 188, 186;
  background: rgba(235, 188, 186, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(235, 188, 186, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 188, 186, 0.25);
  border-right-color: rgba(235, 188, 186, 0.25);
  border-top-color: rgba(235, 188, 186, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 49, 116, 143;
  background: rgba(49, 116, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="math"] {
  --callout-color: 49, 116, 143;
  --table-border-color: color-mix(in srgb, rgb(49, 116, 143) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(49, 116, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(49, 116, 143);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(49, 116, 143);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(49, 116, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="media"] {
  --callout-color: 246, 193, 119;
  --table-border-color: color-mix(in srgb, rgb(246, 193, 119) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(246, 193, 119, 0.1);
  border-bottom-color: rgba(246, 193, 119, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(246, 193, 119, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(246, 193, 119, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(246, 193, 119, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 49, 116, 143;
  background: rgba(49, 116, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="outlined"] {
  --callout-border-width: 1px;
  --callout-color: 49, 116, 143;
  --callout-content-background: rgb(31, 29, 46);
  --callout-content-padding: 0px 24px;
  --callout-padding: 0px;
  --callout-title-padding: 7px 15px;
  --table-border-color: color-mix(in srgb, rgb(49, 116, 143) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(49, 116, 143, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="person"] {
  --callout-color: 156, 207, 216;
  --table-border-color: color-mix(in srgb, rgb(156, 207, 216) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(156, 207, 216, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 235, 111, 146;
  background: rgba(235, 111, 146, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(235, 111, 146, 0.1);
  border-bottom-color: rgba(235, 111, 146, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(235, 111, 146, 0.25);
  border-right-color: rgba(235, 111, 146, 0.25);
  border-top-color: rgba(235, 111, 146, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="solid"] {
  --callout-border-width: 2px 6px 6px 2px;
  --callout-color: 49, 116, 143;
  --table-border-color: color-mix(in srgb, rgb(49, 116, 143) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(49, 116, 143, 0.25);
  border-right-style: solid;
  border-right-width: 6px;
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 156, 207, 216;
  background: rgba(156, 207, 216, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="time"] {
  --callout-color: 196, 167, 231;
  --table-border-color: color-mix(in srgb, rgb(196, 167, 231) 25%, rgb(31, 29, 46) 50%);
  background-color: rgba(196, 167, 231, 0.1);
  border-bottom-color: rgba(196, 167, 231, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(196, 167, 231, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(196, 167, 231, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(196, 167, 231, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 156, 207, 216;
  background: rgba(156, 207, 216, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(156, 207, 216, 0.1);
  border-bottom-color: rgba(156, 207, 216, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(156, 207, 216, 0.25);
  border-right-color: rgba(156, 207, 216, 0.25);
  border-top-color: rgba(156, 207, 216, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 49, 116, 143;
  background: rgba(49, 116, 143, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(49, 116, 143, 0.1);
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 246, 193, 119;
  background: rgba(246, 193, 119, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(246, 193, 119, 0.1);
  border-bottom-color: rgba(246, 193, 119, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(246, 193, 119, 0.25);
  border-right-color: rgba(246, 193, 119, 0.25);
  border-top-color: rgba(246, 193, 119, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 235, 111, 146;
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(235, 111, 146);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="box"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cline x1='12' x2='12' y1='16' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='8' y2='8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="math"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="media"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="outlined"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="person"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='8' r='5'/%3E%3Cpath d='M20 21a8 8 0 0 0-16 0'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' x2='12.01' y1='17' y2='17'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="solid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="time"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='10' x2='14' y1='2' y2='2'/%3E%3Cline x1='12' x2='15' y1='14' y2='11'/%3E%3Ccircle cx='12' cy='14' r='8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-top-color: rgba(64, 61, 82, 0.6);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 29, 46);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(162, 208, 221, 0.15);
  border-left-color: rgba(162, 208, 221, 0.15);
  border-right-color: rgba(162, 208, 221, 0.15);
  border-top-color: rgba(162, 208, 221, 0.15);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 111, 146);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(156, 207, 216);
  font-size: 28.8px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(235, 188, 186);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(156, 207, 216);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(246, 193, 119);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(49, 116, 143);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(196, 167, 231);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 222, 244);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-left-color: rgba(64, 61, 82, 0.6);
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 49, 116, 143;
  border-bottom-color: rgba(49, 116, 143, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(49, 116, 143, 0.25);
  border-right-color: rgba(49, 116, 143, 0.25);
  border-top-color: rgba(49, 116, 143, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding-right: 24px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-style: dashed;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(224, 222, 244);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(224, 222, 244);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 222, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(224, 222, 244);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(82, 79, 103);
  border-bottom-left-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(82, 79, 103);
  border-right-color: rgb(82, 79, 103);
  border-top-color: rgb(82, 79, 103);
  border-top-left-radius: 12px;
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(110, 106, 134);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(224, 222, 244);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 29, 46);
  border-color: rgb(224, 222, 244);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(33, 32, 46);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(82, 79, 103);
  color: rgb(31, 29, 46);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgba(64, 61, 82, 0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(64, 61, 82, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(64, 61, 82, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(64, 61, 82, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(110, 106, 134);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(25, 23, 36);
  border-color: rgba(64, 61, 82, 0.6);
  border-radius: 10px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(235, 188, 186, 0.1);
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(31, 29, 46);
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(224, 222, 244);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 222, 244);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(110, 106, 134);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(235, 188, 186, 0.1);
  border-bottom-color: rgba(162, 208, 221, 0.15);
  border-left-color: rgba(162, 208, 221, 0.15);
  border-right-color: rgba(162, 208, 221, 0.15);
  border-top-color: rgba(162, 208, 221, 0.15);
  color: rgb(235, 188, 186);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 187;
  --accent-l: 45%;
  --accent-s: 30%;
  --background: #faf4ed;
  --background-modifier-active-hover: hsla(187, 30%, 45%, 0.1);
  --background-modifier-border: rgba(223, 218, 217, 0.6);
  --background-modifier-border-focus: rgba(223, 218, 217, 0.6);
  --background-modifier-border-hover: rgb(223, 218, 217);
  --background-modifier-error: rgb(215, 130, 126);
  --background-modifier-error-hover: rgb(215, 130, 126);
  --background-modifier-error-rgb: 215, 130, 126;
  --background-modifier-form-field: #f2e9e1;
  --background-modifier-form-field-hover: transparent;
  --background-modifier-success: rgb(86, 148, 159);
  --background-modifier-success-rgb: 86, 148, 159;
  --background-primary: rgb(255, 250, 243);
  --background-primary-alt: #f2e9e1;
  --background-secondary: rgb(255, 250, 243);
  --background-secondary-alt: #f2e9e1;
  --base: #faf4ed;
  --bases-cards-background: #faf4ed;
  --bases-cards-cover-background: #f2e9e1;
  --bases-cards-shadow: 0 0 0 1px rgba(223, 218, 217, 0.6);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(223, 218, 217);
  --bases-embed-border-color: rgb(223, 218, 217);
  --bases-embed-border-radius: 11px;
  --bases-embed-radius: 10px;
  --bases-group-heading-property-color: #9893a5;
  --bases-header-border-width: 0px;
  --bases-table-border-color: #cecacd;
  --bases-table-cell-background-active: rgb(255, 250, 243);
  --bases-table-cell-background-disabled: #f2e9e1;
  --bases-table-cell-background-selected: hsla(187, 30%, 45%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(223, 218, 217, 0.6);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(215, 130, 126);
  --bases-table-column-border-width: 0px;
  --bases-table-container-border-radius: 10px;
  --bases-table-group-background: transparent;
  --bases-table-header-background: #f2e9e1;
  --bases-table-header-background-hover: transparent;
  --bases-table-header-color: #575279;
  --bases-table-row-border-width: 0px;
  --bases-table-summary-background: rgb(255, 250, 243);
  --bases-toolbar-label-display: none;
  --blockquote-border-color: rgb(234, 157, 52);
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, rgb(255, 250, 243) 65%, transparent) linear-gradient(rgb(255, 250, 243), color-mix(in srgb, rgb(255, 250, 243) 65%, transparent));
  --bodyFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(180, 99, 122);
  --button-radius: 7px;
  --callout-bug: 215, 130, 126;
  --callout-default: 40, 105, 131;
  --callout-error: 215, 130, 126;
  --callout-example: 144, 122, 169;
  --callout-fail: 215, 130, 126;
  --callout-important: 86, 148, 159;
  --callout-info: 40, 105, 131;
  --callout-padding: 12px 24px;
  --callout-question: 234, 157, 52;
  --callout-radius: 13px;
  --callout-success: 86, 148, 159;
  --callout-summary: 86, 148, 159;
  --callout-tip: 86, 148, 159;
  --callout-title-size: 1rem;
  --callout-title-weight: 400;
  --callout-todo: 40, 105, 131;
  --callout-warning: 234, 157, 52;
  --canvas-background: rgb(255, 250, 243);
  --canvas-card-label-color: #9893a5;
  --canvas-color-1: 40, 105, 131;
  --canvas-color-2: 86, 148, 159;
  --canvas-color-3: 144, 122, 169;
  --canvas-color-4: 180, 99, 122;
  --canvas-color-5: 215, 130, 126;
  --canvas-color-6: 234, 157, 52;
  --canvas-dot-pattern: #9893a5;
  --caret-color: rgb(180, 99, 122);
  --checkbox-border: 5px;
  --checkbox-border-color: rgb(215, 130, 126);
  --checkbox-border-color-hover: rgb(180, 99, 122);
  --checkbox-color: rgb(40, 105, 131);
  --checkbox-color-hover: rgb(86, 148, 159);
  --checkbox-marker-color: white;
  --checkbox-radius: 5px;
  --checklist-done-color: #9893a5;
  --clickable-icon-radius: 8px;
  --code-background: #faf4ed;
  --code-border-color: rgba(223, 218, 217, 0.6);
  --code-comment: #9893a5;
  --code-function: rgb(86, 148, 159);
  --code-important: rgb(215, 130, 126);
  --code-keyword: rgb(215, 130, 126);
  --code-normal: #797593;
  --code-operator: rgb(234, 157, 52);
  --code-property: rgb(40, 105, 131);
  --code-punctuation: rgb(180, 99, 122);
  --code-string: rgb(234, 157, 52);
  --code-tag: rgb(86, 148, 159);
  --code-value: rgb(144, 122, 169);
  --codeFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #9893a5;
  --collapse-icon-color-collapsed: rgb(215, 130, 126);
  --color-accent: hsl(187, 30%, 45%);
  --color-accent-1: rgb(215, 130, 126);
  --color-accent-2: rgb(86, 148, 159);
  --color-accent-hsl: 187, 30%, 45%;
  --color-base-00: #faf4ed;
  --color-base-05: #faf4ed;
  --color-base-10: rgb(255, 250, 243);
  --color-base-100: #575279;
  --color-base-20: rgb(255, 250, 243);
  --color-base-25: #f2e9e1;
  --color-base-30: #cecacd;
  --color-base-35: rgba(223, 218, 217, 0.6);
  --color-base-40: rgb(223, 218, 217);
  --color-base-50: #f4ede8;
  --color-base-60: #9893a5;
  --color-base-70: #797593;
  --color-blue: rgb(40, 105, 131);
  --color-blue-rgb: 40, 105, 131;
  --color-cyan: rgb(86, 148, 159);
  --color-cyan-rgb: 86, 148, 159;
  --color-green: rgb(86, 148, 159);
  --color-green-rgb: 86, 148, 159;
  --color-orange: rgb(234, 157, 52);
  --color-orange-rgb: 234, 157, 52;
  --color-pink: rgb(180, 99, 122);
  --color-pink-rgb: 180, 99, 122;
  --color-purple: rgb(144, 122, 169);
  --color-purple-rgb: 144, 122, 169;
  --color-red: rgb(215, 130, 126);
  --color-red-rgb: 215, 130, 126;
  --color-yellow: rgb(234, 157, 52);
  --color-yellow-rgb: 234, 157, 52;
  --cursor: pointer;
  --dark: var(--text-normal, #575279);
  --darkgray: var(--text-normal, #575279);
  --divider-color: rgba(223, 218, 217, 0.6);
  --divider-color-hover: rgb(215, 130, 126);
  --divider-width: 0px;
  --dropdown-background: rgba(223, 218, 217, 0.5);
  --dropdown-background-hover: rgb(223, 218, 217);
  --embed-block-shadow-hover: transparent;
  --embed-border-start: 2px solid rgb(215, 130, 126);
  --file-header-background: rgb(255, 250, 243);
  --file-header-background-focused: rgb(255, 250, 243);
  --file-header-border: 1px dashed rgb(223, 218, 217);
  --file-header-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgba(223, 218, 217, 0.5);
  --flair-color: #575279;
  --foam: rgb(86, 148, 159);
  --foam-rgb: 86, 148, 159;
  --font-interface: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif;
  --font-mermaid: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Arial';
  --font-text: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif;
  --footnote-divider-color: rgba(223, 218, 217, 0.6);
  --footnote-id-color: #9893a5;
  --footnote-id-color-no-occurrences: #9893a5;
  --gold: rgb(234, 157, 52);
  --gold-rgb: 234, 157, 52;
  --graph-line: rgb(223, 218, 217);
  --graph-node: #575279;
  --graph-node-attachment: rgb(215, 130, 126);
  --graph-node-focused: rgb(215, 130, 126);
  --graph-node-tag: rgb(86, 148, 159);
  --graph-node-unresolved: #9893a5;
  --graph-text: #575279;
  --gray: var(--text-muted, #9893a5);
  --h1-color: rgb(180, 99, 122);
  --h1-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h1-size: 1.45em;
  --h2-color: rgb(215, 130, 126);
  --h2-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h2-size: 1.3em;
  --h3-color: rgb(234, 157, 52);
  --h3-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h3-size: 1.15em;
  --h4-color: rgb(40, 105, 131);
  --h4-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h4-size: 1.05em;
  --h5-color: rgb(144, 122, 169);
  --h5-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h5-size: 1em;
  --h6-color: #575279;
  --h6-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --h6-variant: small-caps;
  --headerFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #9893a5;
  --headings-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --highlight: var(--text-highlight-bg, rgba(234, 157, 52, 0.2));
  --highlight-high: #cecacd;
  --highlight-low: #f4ede8;
  --highlight-med: rgb(223, 218, 217);
  --highlight-med-rgb: 223, 218, 217;
  --hr-color: rgba(223, 218, 217, 0.6);
  --icon-color: #575279;
  --icon-color-active: rgb(215, 130, 126);
  --icon-color-focused: #575279;
  --icon-color-hover: #9893a5;
  --inline-title-color: rgb(86, 148, 159);
  --inline-title-font: "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "Inter", sans-serif;
  --inline-title-margin-bottom: 1.2em;
  --inline-title-size: 1.8em;
  --input-date-separator: #9893a5;
  --input-placeholder-color: #9893a5;
  --interactive-accent: rgb(215, 130, 126);
  --interactive-accent-hover: rgba(215, 130, 126, 0.8);
  --interactive-accent-hsl: 187, 30%, 45%;
  --interactive-hover: rgb(223, 218, 217);
  --interactive-normal: rgba(223, 218, 217, 0.5);
  --iris: rgb(144, 122, 169);
  --iris-rgb: 144, 122, 169;
  --italic-color: rgb(86, 148, 159);
  --latex-color: rgb(40, 105, 131);
  --light: var(--background-primary, rgb(255, 250, 243));
  --lightgray: var(--background-secondary, rgb(255, 250, 243));
  --link-color: rgb(215, 130, 126);
  --link-color-hover: rgba(215, 130, 126, 0.6);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(40, 105, 131);
  --link-external-color-hover: rgba(40, 105, 131, 0.6);
  --link-external-decoration: none;
  --link-unresolved-color: #797593;
  --link-unresolved-decoration-color: hsla(187, 30%, 45%, 0.3);
  --list-bullet-size: 0.35em;
  --list-indent-editing: 0;
  --list-marker-color: #9893a5;
  --list-marker-color-collapsed: rgb(215, 130, 126);
  --list-marker-color-hover: #9893a5;
  --love: rgb(180, 99, 122);
  --love-rgb: 180, 99, 122;
  --menu-background: rgb(255, 250, 243);
  --menu-border-color: rgb(223, 218, 217);
  --metadata-border-color: rgba(223, 218, 217, 0.6);
  --metadata-display-reading: none;
  --metadata-divider-color: rgba(223, 218, 217, 0.6);
  --metadata-input-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #575279;
  --metadata-label-font: "Inter", "Lexend", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #9893a5;
  --metadata-label-text-color-hover: #9893a5;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(223, 218, 217, 0.6);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(223, 218, 217);
  --mk-ui-text-secondary: #575279;
  --modal-background: rgb(255, 250, 243);
  --modal-border-color: rgb(223, 218, 217);
  --muted: #9893a5;
  --nav-collapse-icon-color: rgb(40, 105, 131);
  --nav-collapse-icon-color-collapsed: #9893a5;
  --nav-heading-color: rgb(40, 105, 131);
  --nav-heading-color-collapsed: rgb(40, 105, 131);
  --nav-heading-color-collapsed-hover: #9893a5;
  --nav-heading-color-hover: #575279;
  --nav-item-background-active: rgb(86, 148, 159);
  --nav-item-background-selected: hsla(187, 30%, 45%, 0.15);
  --nav-item-color: #575279;
  --nav-item-color-active: rgb(255, 250, 243);
  --nav-item-color-highlighted: rgb(215, 130, 126);
  --nav-item-color-hover: #797593;
  --nav-item-color-selected: #575279;
  --nav-tag-color: #9893a5;
  --nav-tag-color-active: #9893a5;
  --nav-tag-color-hover: #9893a5;
  --overlay: #f2e9e1;
  --pdf-background: rgb(255, 250, 243);
  --pdf-page-background: rgb(255, 250, 243);
  --pdf-sidebar-background: rgb(255, 250, 243);
  --pill-border-color: rgba(223, 218, 217, 0.6);
  --pill-border-color-hover: rgb(223, 218, 217);
  --pill-color: #9893a5;
  --pill-color-hover: #575279;
  --pill-color-remove: #9893a5;
  --pill-color-remove-hover: rgb(215, 130, 126);
  --pine: rgb(40, 105, 131);
  --pine-rgb: 40, 105, 131;
  --pomodoro-timer-color: rgb(223, 218, 217, 0.5);
  --pomodoro-timer-dot-color: rgb(180, 99, 122);
  --prompt-background: rgb(255, 250, 243);
  --prompt-border-color: rgb(223, 218, 217);
  --raised-background: color-mix(in srgb, rgb(255, 250, 243) 65%, transparent) linear-gradient(rgb(255, 250, 243), color-mix(in srgb, rgb(255, 250, 243) 65%, transparent));
  --ribbon-background: rgb(255, 250, 243);
  --ribbon-background-collapsed: rgb(255, 250, 243);
  --rose: rgb(215, 130, 126);
  --rose-rgb: 215, 130, 126;
  --scrollbar-active-thumb-bg: #cecacd;
  --scrollbar-thumb-bg: rgb(223, 218, 217);
  --search-clear-button-color: #9893a5;
  --search-icon-color: #9893a5;
  --search-result-background: #faf4ed;
  --search-result-background-hover: rgb(215, 130, 126);
  --secondary: var(--text-accent, rgb(215, 130, 126));
  --setting-group-heading-color: #575279;
  --setting-items-background: #faf4ed;
  --setting-items-border-color: rgba(223, 218, 217, 0.6);
  --shiki-active-tab-border-color: #9893a5;
  --shiki-code-background: #faf4ed;
  --shiki-code-comment: #9893a5;
  --shiki-code-function: rgb(86, 148, 159);
  --shiki-code-important: rgb(234, 157, 52);
  --shiki-code-keyword: rgb(180, 99, 122);
  --shiki-code-normal: #9893a5;
  --shiki-code-property: rgb(86, 148, 159);
  --shiki-code-punctuation: #9893a5;
  --shiki-code-string: rgb(234, 157, 52);
  --shiki-code-value: rgb(144, 122, 169);
  --shiki-gutter-border-color: rgba(223, 218, 217, 0.6);
  --shiki-gutter-text-color: #9893a5;
  --shiki-gutter-text-color-highlight: #9893a5;
  --shiki-highlight-green: rgba(86, 148, 159, 0.5);
  --shiki-highlight-green-background: rgba(86, 148, 159, 0.1);
  --shiki-highlight-neutral: #9893a5;
  --shiki-highlight-red: rgba(215, 130, 126, 0.5);
  --shiki-highlight-red-background: rgba(215, 130, 126, 0.1);
  --shiki-terminal-dots-color: #9893a5;
  --slider-thumb-border-color: rgb(223, 218, 217);
  --slider-track-background: rgb(223, 218, 217);
  --status-bar-background: #faf4ed;
  --status-bar-border-color: rgba(223, 218, 217, 0.6);
  --status-bar-font-size: 0.733em;
  --status-bar-radius: 12px 0 0 12px;
  --status-bar-text-color: #9893a5;
  --subtle: #797593;
  --suggestion-background: rgb(255, 250, 243);
  --surface: rgb(255, 250, 243);
  --surface-rgb: 255, 250, 243;
  --sync-avatar-color-1: rgb(215, 130, 126);
  --sync-avatar-color-2: rgb(234, 157, 52);
  --sync-avatar-color-3: rgb(234, 157, 52);
  --sync-avatar-color-4: rgb(86, 148, 159);
  --sync-avatar-color-5: rgb(86, 148, 159);
  --sync-avatar-color-6: rgb(40, 105, 131);
  --sync-avatar-color-7: rgb(144, 122, 169);
  --sync-avatar-color-8: rgb(180, 99, 122);
  --tab-background-active: rgb(255, 250, 243);
  --tab-container-background: transparent;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-img: url("%22data:image/svg+xml,%3Csvg version='1.1' id='svg1' xml:space='preserve' width='93.058769' height='115.69744' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cdefs id='defs1' /%3E%3Csodipodi:namedview id='namedview1' pagecolor='%2523ffffff' bordercolor='%2523000000' borderopacity='0.25' inkscape:showpageshadow='2' inkscape:pageopacity='0.0' inkscape:pagecheckerboard='0' inkscape:deskcolor='%2523d1d1d1' /%3E%3Cinkscape:clipboard style='font-variation-settings:normalopacity:1vector-effect:nonefill:%252300ff00fill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:roundstroke-miterlimit:4stroke-dasharray:nonestroke-dashoffset:0stroke-opacity:1-inkscape-stroke:nonestop-color:%2523000000stop-opacity:1' min='69.195827,-2.7355726' max='162.2546,112.96187' geom-min='69.195827,-2.7355726' geom-max='162.2546,112.96187' /%3E%3Cg id='g1' transform='translate(-69.195827,2.7355726")'%3E%3Cpath d='m 122.01098,-2.7355726 c -1.43622,0.00378 -2.86866,0.037795 -4.28599,0.1133859 a 72.264614,72.264614 0 0 0 -10.80189,1.3266151 c -0.10205,0.018898 -0.21166,0.018898 -0.31371,0.037795 a 1.9842532,1.9842532 0 0 0 -0.034,0.015118 C 85.515837,1.433249 69.195827,19.431371 69.195827,41.212802 c 0.02268,18.701115 12.075598,30.822067 26.948049,32.035297 a 29.041909,29.041909 0 0 0 8.666464,-0.502678 c 2.30551,-0.461103 4.33134,-0.982678 7.7178,-1.171654 2.28661,-0.124725 5.08347,1.583623 6.67465,3.892916 0.7937,1.160315 1.26992,2.418899 1.34929,3.480947 0.0756,1.065827 -0.15874,1.904883 -0.86929,2.694805 -0.20032,0.222992 -1.24725,0.808819 -2.60032,1.273701 -1.36063,0.464882 -2.97071,0.903308 -4.45228,1.519371 -3.92694,1.644096 -9.0671,2.774175 -12.854186,5.336697 -2.502049,1.68945 -4.285987,3.635908 -5.38583,5.574806 -1.096064,1.942679 -1.602521,3.919373 -0.990237,5.78646 0.56315,1.71969 2.082521,2.85733 3.522522,3.2504 1.436221,0.38929 2.857325,0.30992 4.195281,0.18141 1.33795,-0.13228 2.60787,-0.34015 3.53764,-0.41574 0.7748,-0.0643 0.94488,0.034 0.84283,-0.0869 0.81638,1.19055 1.23213,2.52094 1.79906,4.07811 0.61228,1.68945 1.84441,3.78709 4.30866,4.55433 a 1.9842532,1.9842532 0 0 0 0.28725,0.0643 c 3.75685,0.57826 6.91276,-0.11339 9.35055,-1.67434 2.4378,-1.56094 4.11213,-3.87024 5.44253,-6.31559 2.61921,-4.811343 4.1726,-10.318118 6.37229,-13.247254 8.62866,-4.550554 15.12945,-9.346778 19.31339,-15.979853 4.14615,0.771024 7.25292,1.080946 7.25292,1.080946 a 1.9842532,1.9842532 0 0 0 2.16189,-1.738584 c 0,0 0.62363,-5.230869 0.43087,-11.327251 -0.18142,-5.858272 -0.86173,-12.585835 -4.40315,-16.758436 -1.06205,-9.316542 -4.49008,-19.14332 -8.95749,-26.842222 3.84756,-5.537012 5.63906,-11.5162284 5.21197,-17.703319 a 1.9842532,1.9842532 0 0 0 -1.64031,-1.8179539 c -9.94773,-1.7159066 -20.36033,-3.1974824 -30.41766,-3.1672461 z m 6.03969,4.2633099 c 7.2189,0.377953 14.60032,1.3681898 21.87214,2.5851985 -0.008,4.0856719 -1.24725,8.0163832 -3.59056,11.8828422 A 38.75908,38.75908 0 0 0 141.9858,10.74979 l -0.0265,-0.04535 a 1.9842532,1.9842532 0 0 0 -0.0151,-0.0076 1.9842532,1.9842532 0 0 0 -0.58205,-0.347717 l 0.27969,-0.0189 A 42.803177,42.803177 0 0 0 128.05067,1.5315168 Z m -17.6882,1.0658274 c 6.34961,0.00756 11.94331,0.9637802 16.8378,2.8875609 a 38.808214,38.808214 0 0 1 11.69009,7.7102414 1.9842532,1.9842532 0 0 0 0.0113,0 1.9842532,1.9842532 0 0 0 0.0227,0.03024 23.07781,23.07781 0 0 1 1.47779,1.579844 c 0.21166,0.245669 0.42709,0.483779 0.63496,0.744567 l 0.11339,0.136063 c 4.97764,6.198429 9.67182,16.705523 11.73922,26.838443 a 36.540496,36.540496 0 0 0 -11.52001,-5.238429 h -0.0151 a 29.27246,29.27246 0 0 0 -2.31685,-0.491339 h -0.008 a 23.448204,23.448204 0 0 0 -4.61858,-0.332598 c -0.75591,0.02268 -1.50048,0.09071 -2.22993,0.207874 h -0.008 l -0.27591,0.05291 c -0.63496,0.113386 -1.2548,0.253229 -1.85953,0.442205 a 12.018905,12.018905 0 0 0 -4.67906,2.683466 11.625834,11.625834 0 0 0 -0.78614,0.812599 9.5735495,9.5735495 0 0 0 -1.13386,1.579844 10.77166,10.77166 0 0 0 -1.36063,5.404728 c 0.008,2.483151 0.69921,4.996538 1.73858,7.434335 a 31.891674,31.891674 0 0 0 1.79906,3.590554 41.744909,41.744909 0 0 0 3.34488,4.954964 c 1.19434,1.534489 2.4378,2.929135 3.63591,4.123467 0.45355,0.453543 0.95244,0.88063 1.48158,1.28504 l 0.0227,0.0189 c 3.71905,2.823309 9.05953,4.437168 13.9389,5.582366 -3.77197,5.348034 -9.33544,9.550872 -17.36316,13.719693 a 1.9842532,1.9842532 0 0 0 -0.65008,0.540473 c -3.12567,4.006302 -4.51276,9.73229 -6.82205,13.984254 -1.15654,2.1241 -2.47559,3.82867 -4.10079,4.87182 -1.57606,1.00913 -3.52252,1.48157 -6.37607,1.09228 -1.03181,-0.34393 -1.22078,-0.73323 -1.70079,-2.05228 -0.49133,-1.36063 -0.97511,-3.47717 -2.5474,-5.503 a 1.9842532,1.9842532 0 0 0 -0.32882,-0.32882 c -1.34929,-1.084719 -2.60787,-0.85795 -3.81354,-0.76346 -1.19811,0.0983 -2.44914,0.30992 -3.6019,0.42331 -1.152752,0.11338 -2.192123,0.0945 -2.77417,-0.0643 -0.582048,-0.15496 -0.634961,-0.17386 -0.793702,-0.653852 -0.07559,-0.249449 -0.06425,-1.285041 0.680316,-2.596538 0.737008,-1.307717 2.101418,-2.849765 4.149926,-4.236853 2.75905,-1.870867 7.77449,-3.129451 12.1663,-4.966302 1.11119,-0.464882 2.67591,-0.903308 4.20284,-1.424883 1.52693,-0.525355 3.06142,-1.04315 4.26331,-2.373545 a 7.55906,7.55906 0 0 0 1.87843,-5.639058 c -0.14362,-1.950238 -0.91087,-3.805987 -2.03339,-5.438744 -2.24504,-3.265514 -5.99055,-5.843154 -10.16693,-5.612602 -3.71528,0.204094 -6.1115,0.816378 -8.2734,1.247245 -2.15811,0.427087 -4.119683,0.71811 -7.570394,0.434646 C 83.501348,68.232662 73.183231,58.254703 73.168113,41.209023 c 0,-19.884108 14.891348,-36.2343544 34.148057,-38.5474267 1.03181,-0.045354 2.0485,-0.068032 3.04252,-0.068032 z M 93.05222,21.513892 c -7.018587,0 -12.449772,6.478114 -12.449772,14.090088 0,7.611973 5.431185,14.090088 12.453552,14.090088 7.01859,0 12.44977,-6.478115 12.44977,-14.090088 0,-7.611974 -5.43118,-14.090088 -12.44977,-14.090088 z m 0,3.968506 c 4.542995,0 8.48505,4.361578 8.48505,10.121582 0,5.760003 -3.942055,10.121581 -8.48127,10.121581 -0.207874,0 -0.408189,-0.01134 -0.612284,-0.03024 a 5.4160665,5.7146494 0 0 0 2.165671,-4.550554 5.4160665,5.7146494 0 0 0 -5.416067,-5.71465 5.4160665,5.7146494 0 0 0 -4.410711,2.422679 12.132291,12.132291 0 0 1 -0.211654,-2.24882 c 0,-5.760004 3.945829,-10.121582 8.485045,-10.121582 z m 41.61263,14.936703 c 1.17921,-0.03024 2.43401,0.07181 3.73417,0.291024 0.64252,0.109606 1.29638,0.249449 1.9578,0.415748 0.0113,0 0.0189,0 0.0265,0.0076 h 0.0151 a 28.278443,28.278443 0 0 1 4.0063,1.337954 34.665849,34.665849 0 0 1 5.64284,2.951813 c 0.57449,0.377953 1.13008,0.759685 1.65544,1.156536 0.52913,0.393071 1.02047,0.793701 1.48913,1.20189 0.46488,0.40819 0.89953,0.816379 1.29638,1.232127 l 0.0151,0.01512 c 2.34331,2.452915 3.56787,8.893234 3.74929,14.653238 0.14362,4.633704 -0.18897,7.211343 -0.32882,8.643785 -1.18299,-0.136063 -3.06898,-0.31748 -6.25512,-0.96 -5.15906,-1.04693 -11.50111,-2.985829 -14.94426,-5.355594 l -0.0718,-0.04536 a 11.346149,11.346149 0 0 1 -0.51024,-0.385512 c -0.0605,-0.04535 -0.12472,-0.09071 -0.17764,-0.136063 a 8.0730761,8.0730761 0 0 1 -0.56693,-0.506457 37.587426,37.587426 0 0 1 -2.19212,-2.392442 39.96853,39.96853 0 0 1 -5.00032,-7.445675 c -0.26457,-0.529134 -0.51402,-1.054488 -0.73701,-1.579843 -0.89575,-2.097639 -1.40976,-4.146144 -1.41732,-5.888508 0,-1.307717 0.24189,-2.418899 0.8126,-3.401577 0.18897,-0.328819 0.41574,-0.64252 0.68409,-0.944882 0.1663,-0.188977 0.34016,-0.370394 0.52158,-0.536694 0.0378,-0.03779 0.0756,-0.06425 0.11338,-0.09449 a 7.9710288,7.9710288 0 0 1 1.73859,-1.171654 c 1.36063,-0.672756 2.97071,-1.012914 4.74331,-1.058269 z m -31.21136,9.274967 a 1.9842532,1.9842532 0 0 0 -1.92378,2.044725 c 0.0756,2.381104 -0.40441,3.77953 -0.96,4.42205 -0.5556,0.638741 -1.32284,0.963781 -3.099219,0.767245 a 1.9842532,1.9842532 0 0 0 -2.188348,1.753702 1.9842532,1.9842532 0 0 0 1.753702,2.192127 c 2.562521,0.279686 5.000315,-0.351496 6.531025,-2.116536 1.53449,-1.768821 2.01449,-4.221735 1.92756,-7.135753 a 1.9842532,1.9842532 0 0 0 -2.04094,-1.92756 z' class='class1' style='fill:%252397c0fffill-opacity:1stroke-width:3.77953stroke-linecap:roundstroke-linejoin:round' id='path1' /%3E%3C/g%3E%3C/svg%3E");
  --tab-max-width: 200px;
  --tab-outline-color: transparent;
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-pane-width: 90%;
  --tab-switcher-background: rgb(255, 250, 243);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 250, 243), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(187, 30%, 45%);
  --tab-text-color: #9893a5;
  --tab-text-color-active: #9893a5;
  --tab-text-color-focused: #9893a5;
  --tab-text-color-focused-active: #9893a5;
  --tab-text-color-focused-active-current: #575279;
  --tab-text-color-focused-highlighted: rgb(215, 130, 126);
  --table-add-button-border-color: transparent;
  --table-border-color: #cecacd;
  --table-border-radius: 7px;
  --table-drag-handle-background-active: rgb(215, 130, 126);
  --table-drag-handle-color: #9893a5;
  --table-drag-handle-color-active: rgb(255, 250, 243);
  --table-header-background: rgb(144, 122, 169);
  --table-header-background-hover: rgb(144, 122, 169);
  --table-header-border-color: #cecacd;
  --table-header-color: rgb(255, 250, 243);
  --table-row-alt-background: #f4ede8;
  --table-row-alt-background-hover: #f4ede8;
  --table-selection: hsla(187, 30%, 45%, 0.1);
  --table-selection-border-color: rgb(215, 130, 126);
  --tag-background: rgba(215, 130, 126, 0.1);
  --tag-background-hover: rgba(215, 130, 126, 0.2);
  --tag-border-color: hsla(187, 30%, 45%, 0.15);
  --tag-border-color-hover: hsla(187, 30%, 45%, 0.15);
  --tag-color: rgb(215, 130, 126);
  --tag-color-hover: rgb(215, 130, 126);
  --tertiary: var(--text-accent-hover, rgb(86, 148, 159));
  --text: #575279;
  --text-accent: rgb(215, 130, 126);
  --text-accent-hover: rgb(86, 148, 159);
  --text-error: rgb(215, 130, 126);
  --text-faint: #9893a5;
  --text-highlight-bg: rgba(234, 157, 52, 0.2);
  --text-muted: #9893a5;
  --text-normal: #575279;
  --text-on-accent: rgb(255, 250, 243);
  --text-on-accent-inverted: rgb(255, 250, 243);
  --text-selection: rgb(223, 218, 217, 0.5);
  --text-success: rgb(86, 148, 159);
  --text-warning: rgb(234, 157, 52);
  --textHighlight: var(--text-highlight-bg, rgba(234, 157, 52, 0.2));
  --titleFont: var(--font-text, "Lexend", "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgba(223, 218, 217, 0.6);
  --titlebar-text-color: #9893a5;
  --titlebar-text-color-focused: #575279;
  --todoist-p4-border: rgb(215, 130, 126);
  --todoist-p4-border-hover: rgb(180, 99, 122);
  --todoist-task-separator-color: rgba(223, 218, 217, 0.6);
  --uw-background: #f2e9e1;
  --vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M240-400q48 0 88 26t59 71l10 23h25q42 0 70 29.5t28 70.5q0 42-29 71t-71 29H240q-66 0-113-47T80-240q0-67 47-113.5T240-400Zm321-81q60 60 138.5 90.5T863-366q11-1 19.5 3t14.5 12q6 8 8 17t-1 19q-35 121-140.5 197T533-40q32-26 49.5-62.5T600-180q0-68-42.5-117.5T449-357q-32-57-87.5-90T240-480q-32 0-62.5 8T120-448q2-131 76.5-232T394-822q10-3 19.5-1t17.5 8q8 6 12.5 14.5T447-781q-5 86 24 162.5T561-481Z'/%3E%3C/svg%3E");
  --vault-profile-color: #575279;
  --vault-profile-color-hover: #575279;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(223, 218, 217, 0.6);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 148, 159) none 0px;
  text-decoration-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(86, 148, 159) none 0px;
  text-decoration-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(234, 157, 52, 0.2);
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through 2px rgb(234, 157, 52);
  text-decoration-color: rgb(234, 157, 52);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(215, 130, 126);
  border-radius: 5px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(40, 105, 131);
  border-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body p {
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(152, 147, 165) none 0px;
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(40, 105, 131);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
  transition: color 0.5s;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(215, 130, 126, 0.1);
  color: rgb(215, 130, 126);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
  transition: background-color 0.5s;
}

html[saved-theme="light"] body a.internal-link.broken {
  background-color: rgba(215, 130, 126, 0.1);
  color: rgb(121, 117, 147);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(121, 117, 147) none 0px;
  text-decoration: rgba(80, 141, 149, 0.3);
  text-decoration-color: rgba(80, 141, 149, 0.3);
  transition: background-color 0.5s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 234.578px;
  margin-right: 234.578px;
  width: 194.844px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(244, 237, 232);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(206, 202, 205);
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-width: 0px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(206, 202, 205);
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-left-radius: 7px;
  color: rgb(255, 250, 243);
}

html[saved-theme="light"] body tr {
  background-color: rgb(144, 122, 169);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-align: justify;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  text-align: justify;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(180, 99, 122);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(180, 99, 122);
  border-radius: 10px;
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 130, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(215, 130, 126);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(215, 130, 126);
  border-right-color: rgb(215, 130, 126);
  border-top-color: rgb(215, 130, 126);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: background 0.4s, stroke-dashoffset 0.6s, border-color 0.2s ease-out;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480-40.09q-91.34%200-171.59-34.58-80.25-34.59-139.7-94.32-59.45-59.73-94.04-140.27-34.58-80.53-34.58-171.87%200-90.77%2034.58-171.02%2034.59-80.26%2094.04-139.71t139.98-93.75q80.54-34.3%20171.31-34.3t171.31%2034.3q80.53%2034.3%20139.98%2093.75%2059.45%2059.45%2094.04%20139.71%2034.58%2080.25%2034.58%20171.02%200%2091.34-34.58%20171.87-34.59%2080.54-94.04%20140.27-59.45%2059.73-139.7%2094.32Q571.34-40.09%20480-40.09Zm0-122.95q47.61%200%2093-13.74t84.56-41.48L217.13-658.13q-26.61%2039.74-40.35%2084.85-13.74%2045.11-13.74%2092.15%200%20132.61%2092.46%20225.35%2092.46%2092.74%20224.5%2092.74Zm263.43-141.09q26.05-39.74%2039.79-84.85%2013.74-45.11%2013.74-92.15%200-131.48-92.46-223.65-92.46-92.18-224.5-92.18-47.04%200-91.87%2013.18-44.83%2013.17-84.56%2039.21l439.86%20440.44Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480-40.09q-91.34%200-171.59-34.58-80.25-34.59-139.7-94.32-59.45-59.73-94.04-140.27-34.58-80.53-34.58-171.87%200-90.77%2034.58-171.02%2034.59-80.26%2094.04-139.71t139.98-93.75q80.54-34.3%20171.31-34.3t171.31%2034.3q80.53%2034.3%20139.98%2093.75%2059.45%2059.45%2094.04%20139.71%2034.58%2080.25%2034.58%20171.02%200%2091.34-34.58%20171.87-34.59%2080.54-94.04%20140.27-59.45%2059.73-139.7%2094.32Q571.34-40.09%20480-40.09Zm0-122.95q47.61%200%2093-13.74t84.56-41.48L217.13-658.13q-26.61%2039.74-40.35%2084.85-13.74%2045.11-13.74%2092.15%200%20132.61%2092.46%20225.35%2092.46%2092.74%20224.5%2092.74Zm263.43-141.09q26.05-39.74%2039.79-84.85%2013.74-45.11%2013.74-92.15%200-131.48-92.46-223.65-92.46-92.18-224.5-92.18-47.04%200-91.87%2013.18-44.83%2013.17-84.56%2039.21l439.86%20440.44Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.72-58.43q-47.34%200-80.77-33.67-33.43-33.66-33.43-80.93%200-47.27%2033.71-80.82%2033.71-33.54%2081.05-33.54%2047.34%200%2080.77%2033.78%2033.43%2033.78%2033.43%2081.22%200%2047.43-33.71%2080.69-33.71%2033.27-81.05%2033.27Zm.56-312.7q-45.58%200-77.52-31.88-31.93-31.88-31.93-77.29v-306.14q0-46.06%2031.65-77.9%2031.65-31.83%2077.24-31.83%2045.58%200%2077.52%2031.83%2031.93%2031.84%2031.93%2077.9v306.14q0%2045.41-31.65%2077.29-31.65%2031.88-77.24%2031.88Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.72-58.43q-47.34%200-80.77-33.67-33.43-33.66-33.43-80.93%200-47.27%2033.71-80.82%2033.71-33.54%2081.05-33.54%2047.34%200%2080.77%2033.78%2033.43%2033.78%2033.43%2081.22%200%2047.43-33.71%2080.69-33.71%2033.27-81.05%2033.27Zm.56-312.7q-45.58%200-77.52-31.88-31.93-31.88-31.93-77.29v-306.14q0-46.06%2031.65-77.9%2031.65-31.83%2077.24-31.83%2045.58%200%2077.52%2031.83%2031.93%2031.84%2031.93%2077.9v306.14q0%2045.41-31.65%2077.29-31.65%2031.88-77.24%2031.88Z%22%2F%3E%3C%2Fsvg%3E");
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
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(244, 237, 232);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-237.61-162.96%2098.26q-17.82%2010.7-36.37%209.42-18.54-1.29-32.24-11.98-14.26-10.13-20.82-26.89-6.57-16.76-2.57-36.59l43.7-185.96L123.78-517.3q-15.69-12.7-19.54-30.46-3.85-17.76%201.15-34.59%205.57-16.26%2019.54-27.95Q138.91-622%20159.3-624l190.09-16.57%2073.7-175.52q8.13-19.26%2023.61-28.17%2015.47-8.92%2033.3-8.92t33.3%208.92q15.48%208.91%2023.61%2028.17l73.7%20175.52L800.7-624q20.39%202%2034.37%2013.7%2013.97%2011.69%2019.54%2027.95%205%2016.83%201.15%2034.59-3.85%2017.76-19.54%2030.46L691.26-391.35l43.7%20185.96q4%2019.83-2.57%2036.59-6.56%2016.76-20.82%2026.89-13.7%2010.69-32.24%2011.98-18.55%201.28-36.37-9.42L480-237.61Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-237.61-162.96%2098.26q-17.82%2010.7-36.37%209.42-18.54-1.29-32.24-11.98-14.26-10.13-20.82-26.89-6.57-16.76-2.57-36.59l43.7-185.96L123.78-517.3q-15.69-12.7-19.54-30.46-3.85-17.76%201.15-34.59%205.57-16.26%2019.54-27.95Q138.91-622%20159.3-624l190.09-16.57%2073.7-175.52q8.13-19.26%2023.61-28.17%2015.47-8.92%2033.3-8.92t33.3%208.92q15.48%208.91%2023.61%2028.17l73.7%20175.52L800.7-624q20.39%202%2034.37%2013.7%2013.97%2011.69%2019.54%2027.95%205%2016.83%201.15%2034.59-3.85%2017.76-19.54%2030.46L691.26-391.35l43.7%20185.96q4%2019.83-2.57%2036.59-6.56%2016.76-20.82%2026.89-13.7%2010.69-32.24%2011.98-18.55%201.28-36.37-9.42L480-237.61Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.96 11.96 0 0 1 16 28' stroke-width='1.5' stroke='%23000'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m0 26a12 12 0 0 1 0-24v12l8.481 8.481A11.96 11.96 0 0 1 16 28' stroke-width='1.5' stroke='%23000'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M203.04-40.96q-51.3%200-87.12-36.22-35.83-36.23-35.83-86.73v-554.48q0-51.3%2035.83-87.13%2035.82-35.83%2087.12-35.83H215v-23q0-22.34%2016.46-38.52%2016.46-16.17%2038.8-16.17%2023.13%200%2038.91%2016.17%2015.79%2016.18%2015.79%2038.52v23h310.08v-23q0-22.34%2016.07-38.52%2016.06-16.17%2038.91-16.17%2022.85%200%2038.91%2016.17Q745-886.69%20745-864.35v23h11.96q51.3%200%2087.12%2035.83%2035.83%2035.83%2035.83%2087.13v554.48q0%2050.5-35.83%2086.73-35.82%2036.22-87.12%2036.22H203.04Zm0-122.95h553.92v-409.31H203.04v409.31ZM322.09-388.3q-21.76%200-37.1-15.55t-15.34-37.61q0-21.83%2015.34-37.05%2015.34-15.23%2037.1-15.23h315.82q21.76%200%2037.1%2015.27t15.34%2036.94q0%2021.66-15.34%2037.44-15.34%2015.79-37.1%2015.79H322.09Zm0%20160.6q-21.76%200-37.1-15.43t-15.34-37.33q0-21.66%2015.34-37.16%2015.34-15.51%2037.1-15.51h194.39q21.76%200%2037.1%2015.39%2015.33%2015.38%2015.33%2037.21t-15.33%2037.33q-15.34%2015.5-37.1%2015.5H322.09Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M203.04-40.96q-51.3%200-87.12-36.22-35.83-36.23-35.83-86.73v-554.48q0-51.3%2035.83-87.13%2035.82-35.83%2087.12-35.83H215v-23q0-22.34%2016.46-38.52%2016.46-16.17%2038.8-16.17%2023.13%200%2038.91%2016.17%2015.79%2016.18%2015.79%2038.52v23h310.08v-23q0-22.34%2016.07-38.52%2016.06-16.17%2038.91-16.17%2022.85%200%2038.91%2016.17Q745-886.69%20745-864.35v23h11.96q51.3%200%2087.12%2035.83%2035.83%2035.83%2035.83%2087.13v554.48q0%2050.5-35.83%2086.73-35.82%2036.22-87.12%2036.22H203.04Zm0-122.95h553.92v-409.31H203.04v409.31ZM322.09-388.3q-21.76%200-37.1-15.55t-15.34-37.61q0-21.83%2015.34-37.05%2015.34-15.23%2037.1-15.23h315.82q21.76%200%2037.1%2015.27t15.34%2036.94q0%2021.66-15.34%2037.44-15.34%2015.79-37.1%2015.79H322.09Zm0%20160.6q-21.76%200-37.1-15.43t-15.34-37.33q0-21.66%2015.34-37.16%2015.34-15.51%2037.1-15.51h194.39q21.76%200%2037.1%2015.39%2015.33%2015.38%2015.33%2037.21t-15.33%2037.33q-15.34%2015.5-37.1%2015.5H322.09Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
  color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-202.13-147.87%2062.78q-60.91%2025.83-116.04-10.31-55.13-36.14-55.13-102.51v-507.66q0-51.07%2036.22-87.01%2036.23-35.94%2086.73-35.94h392.18q50.5%200%2086.73%2035.94%2036.22%2035.94%2036.22%2087.01v507.66q0%2066.37-55.13%20102.51t-116.04%2010.31L480-202.13Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22m480-202.13-147.87%2062.78q-60.91%2025.83-116.04-10.31-55.13-36.14-55.13-102.51v-507.66q0-51.07%2036.22-87.01%2036.23-35.94%2086.73-35.94h392.18q50.5%200%2086.73%2035.94%2036.22%2035.94%2036.22%2087.01v507.66q0%2066.37-55.13%20102.51t-116.04%2010.31L480-202.13Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M333.13-322H232.61q-37.65%200-54.41-33.02-16.77-33.02%204.06-63.55l352.7-508.91q12.13-17.26%2031.39-23.54%2019.26-6.29%2037.95%201.28%2019.27%207.56%2029.9%2025.04%2010.63%2017.48%208.06%2037.74l-36%20288.96h133.65q39.09%200%2055.57%2035.3%2016.48%2035.31-8.35%2065.27L402.87-32.78q-12.13%2015.69-31.39%2019.98-19.26%204.28-37.96-4.29-18.69-8-28.11-25.19-9.41-17.2-6.85-37.02L333.13-322Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M333.13-322H232.61q-37.65%200-54.41-33.02-16.77-33.02%204.06-63.55l352.7-508.91q12.13-17.26%2031.39-23.54%2019.26-6.29%2037.95%201.28%2019.27%207.56%2029.9%2025.04%2010.63%2017.48%208.06%2037.74l-36%20288.96h133.65q39.09%200%2055.57%2035.3%2016.48%2035.31-8.35%2065.27L402.87-32.78q-12.13%2015.69-31.39%2019.98-19.26%204.28-37.96-4.29-18.69-8-28.11-25.19-9.41-17.2-6.85-37.02L333.13-322Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.43-113.52q-22.82%200-44.15-8.41-21.32-8.42-39.15-24.68l-80.04-73.04q-101.57-93-188.79-192.13-87.21-99.13-87.21-227.39%200-109.96%2073.97-184.07%2073.98-74.11%20183.94-74.11%2056.17%200%20102.61%2021.18%2046.43%2021.17%2078.82%2048.87%2032.4-27.7%2078.83-48.87%2046.44-21.18%20102.61-21.18%20109.96%200%20184.78%2074.11%2074.83%2074.11%2074.83%20184.07%200%20128.26-88.07%20227.67-88.06%2099.41-189.76%20191.98l-79.35%2073.48q-17.82%2016.26-39.43%2024.39-21.61%208.13-44.44%208.13Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.43-113.52q-22.82%200-44.15-8.41-21.32-8.42-39.15-24.68l-80.04-73.04q-101.57-93-188.79-192.13-87.21-99.13-87.21-227.39%200-109.96%2073.97-184.07%2073.98-74.11%20183.94-74.11%2056.17%200%20102.61%2021.18%2046.43%2021.17%2078.82%2048.87%2032.4-27.7%2078.83-48.87%2046.44-21.18%20102.61-21.18%20109.96%200%20184.78%2074.11%2074.83%2074.11%2074.83%20184.07%200%20128.26-88.07%20227.67-88.06%2099.41-189.76%20191.98l-79.35%2073.48q-17.82%2016.26-39.43%2024.39-21.61%208.13-44.44%208.13Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480.59-261.17q23.75%200%2040.28-16.64%2016.52-16.64%2016.52-40.32v-144.91q0-23.68-16.57-40.32T480.67-520q-23.58%200-40.38%2016.64-16.81%2016.64-16.81%2040.32v144.91q0%2023.68%2016.68%2040.32t40.43%2016.64Zm-.77-337.87q24.85%200%2041.47-16.45%2016.62-16.44%2016.62-41.29%200-24.85-16.44-41.47-16.45-16.62-41.29-16.62-24.85%200-41.47%2016.44-16.62%2016.45-16.62%2041.3%200%2024.85%2016.44%2041.47%2016.45%2016.62%2041.29%2016.62ZM480-40.09q-91.34%200-171.86-34.35-80.53-34.35-139.94-93.76-59.41-59.41-93.76-139.94Q40.09-388.66%2040.09-480q0-91.59%2034.41-172.06%2034.4-80.47%2094.01-140.04%2059.6-59.56%20139.93-93.69%2080.34-34.12%20171.56-34.12%2091.58%200%20172.07%2034.11%2080.49%2034.12%20140.05%2093.68%2059.56%2059.56%2093.68%20140.08%2034.11%2080.51%2034.11%20172.12%200%2091.62-34.12%20171.71-34.13%2080.1-93.69%20139.7-59.57%2059.61-140.04%2094.01Q571.59-40.09%20480-40.09Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M480.59-261.17q23.75%200%2040.28-16.64%2016.52-16.64%2016.52-40.32v-144.91q0-23.68-16.57-40.32T480.67-520q-23.58%200-40.38%2016.64-16.81%2016.64-16.81%2040.32v144.91q0%2023.68%2016.68%2040.32t40.43%2016.64Zm-.77-337.87q24.85%200%2041.47-16.45%2016.62-16.44%2016.62-41.29%200-24.85-16.44-41.47-16.45-16.62-41.29-16.62-24.85%200-41.47%2016.44-16.62%2016.45-16.62%2041.3%200%2024.85%2016.44%2041.47%2016.45%2016.62%2041.29%2016.62ZM480-40.09q-91.34%200-171.86-34.35-80.53-34.35-139.94-93.76-59.41-59.41-93.76-139.94Q40.09-388.66%2040.09-480q0-91.59%2034.41-172.06%2034.4-80.47%2094.01-140.04%2059.6-59.56%20139.93-93.69%2080.34-34.12%20171.56-34.12%2091.58%200%20172.07%2034.11%2080.49%2034.12%20140.05%2093.68%2059.56%2059.56%2093.68%20140.08%2034.11%2080.51%2034.11%20172.12%200%2091.62-34.12%20171.71-34.13%2080.1-93.69%20139.7-59.57%2059.61-140.04%2094.01Q571.59-40.09%20480-40.09Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.98-27.13q-38.55%200-65.24-28.39-26.7-28.39-25.26-70.35h181.04q1.44%2041.96-25.28%2070.35-26.71%2028.39-65.26%2028.39ZM357-158.61q-21.76%200-37.1-15.54-15.33-15.55-15.33-37.62%200-21.82%2015.33-37.05%2015.34-15.22%2037.1-15.22h246q21.76%200%2037.1%2015.27%2015.33%2015.27%2015.33%2036.93%200%2021.67-15.33%2037.45-15.34%2015.78-37.1%2015.78H357Zm-38.7-138.17q-79.69-46.26-128.52-125.72-48.82-79.45-48.82-173.33%200-140.53%2099.11-239.5%2099.12-98.98%20239.86-98.98t239.93%2098.98q99.18%2098.97%2099.18%20239.5%200%2093.83-48.54%20173.31T641.7-296.78H318.3Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M479.98-27.13q-38.55%200-65.24-28.39-26.7-28.39-25.26-70.35h181.04q1.44%2041.96-25.28%2070.35-26.71%2028.39-65.26%2028.39ZM357-158.61q-21.76%200-37.1-15.54-15.33-15.55-15.33-37.62%200-21.82%2015.33-37.05%2015.34-15.22%2037.1-15.22h246q21.76%200%2037.1%2015.27%2015.33%2015.27%2015.33%2036.93%200%2021.67-15.33%2037.45-15.34%2015.78-37.1%2015.78H357Zm-38.7-138.17q-79.69-46.26-128.52-125.72-48.82-79.45-48.82-173.33%200-140.53%2099.11-239.5%2099.12-98.98%20239.86-98.98t239.93%2098.98q99.18%2098.97%2099.18%20239.5%200%2093.83-48.54%20173.31T641.7-296.78H318.3Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 105, 131);
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M365.35-378.39%2085.48-491.26q-19.83-8.13-29.24-24.39-9.42-16.26-9.42-33.52%200-17.83%209.92-34.09%209.91-16.26%2029.74-23.39L772.35-864.7q18.26-7.13%2035.58-2.78%2017.33%204.35%2029.46%2016.48%2012.13%2012.7%2016.76%2029.74%204.63%2017.04-2.5%2035.87L595.04-98.96Q587.91-79.13%20571.65-69q-16.26%2010.13-34.09%2010.13-17.26%200-33.52-9.41-16.26-9.42-24.39-29.24l-114.3-280.87Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M365.35-378.39%2085.48-491.26q-19.83-8.13-29.24-24.39-9.42-16.26-9.42-33.52%200-17.83%209.92-34.09%209.91-16.26%2029.74-23.39L772.35-864.7q18.26-7.13%2035.58-2.78%2017.33%204.35%2029.46%2016.48%2012.13%2012.7%2016.76%2029.74%204.63%2017.04-2.5%2035.87L595.04-98.96Q587.91-79.13%20571.65-69q-16.26%2010.13-34.09%2010.13-17.26%200-33.52-9.41-16.26-9.42-24.39-29.24l-114.3-280.87Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 122, 169);
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22currentColor%22%20class%3D%22w-5%20h-5%22%3E%0A%20%20%3Cpath%20d%3D%22M15.98%201.804a1%201%200%200%200-1.96%200l-.24%201.192a1%201%200%200%201-.784.785l-1.192.238a1%201%200%200%200%200%201.962l1.192.238a1%201%200%200%201%20.785.785l.238%201.192a1%201%200%200%200%201.962%200l.238-1.192a1%201%200%200%201%20.785-.785l1.192-.238a1%201%200%200%200%200-1.962l-1.192-.238a1%201%200%200%201-.785-.785l-.238-1.192ZM6.949%205.684a1%201%200%200%200-1.898%200l-.683%202.051a1%201%200%200%201-.633.633l-2.051.683a1%201%200%200%200%200%201.898l2.051.684a1%201%200%200%201%20.633.632l.683%202.051a1%201%200%200%200%201.898%200l.683-2.051a1%201%200%200%201%20.633-.633l2.051-.683a1%201%200%200%200%200-1.898l-2.051-.683a1%201%200%200%201-.633-.633L6.95%205.684ZM13.949%2013.684a1%201%200%200%200-1.898%200l-.184.551a1%201%200%200%201-.632.633l-.551.183a1%201%200%200%200%200%201.898l.551.183a1%201%200%200%201%20.633.633l.183.551a1%201%200%200%200%201.898%200l.184-.551a1%201%200%200%201%20.632-.633l.551-.183a1%201%200%200%200%200-1.898l-.551-.184a1%201%200%200%201-.633-.632l-.183-.551Z%22%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22currentColor%22%20class%3D%22w-5%20h-5%22%3E%0A%20%20%3Cpath%20d%3D%22M15.98%201.804a1%201%200%200%200-1.96%200l-.24%201.192a1%201%200%200%201-.784.785l-1.192.238a1%201%200%200%200%200%201.962l1.192.238a1%201%200%200%201%20.785.785l.238%201.192a1%201%200%200%200%201.962%200l.238-1.192a1%201%200%200%201%20.785-.785l1.192-.238a1%201%200%200%200%200-1.962l-1.192-.238a1%201%200%200%201-.785-.785l-.238-1.192ZM6.949%205.684a1%201%200%200%200-1.898%200l-.683%202.051a1%201%200%200%201-.633.633l-2.051.683a1%201%200%200%200%200%201.898l2.051.684a1%201%200%200%201%20.633.632l.683%202.051a1%201%200%200%200%201.898%200l.683-2.051a1%201%200%200%201%20.633-.633l2.051-.683a1%201%200%200%200%200-1.898l-2.051-.683a1%201%200%200%201-.633-.633L6.95%205.684ZM13.949%2013.684a1%201%200%200%200-1.898%200l-.184.551a1%201%200%200%201-.632.633l-.551.183a1%201%200%200%200%200%201.898l.551.183a1%201%200%200%201%20.633.633l.183.551a1%201%200%200%200%201.898%200l.184-.551a1%201%200%200%201%20.632-.633l.551-.183a1%201%200%200%200%200-1.898l-.551-.184a1%201%200%200%201-.633-.632l-.183-.551Z%22%20%2F%3E%0A%3C%2Fsvg%3E%0A");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M391.39-837.13q-23.68%200-40.32-17.03-16.64-17.02-16.64-40.49%200-24.26%2016.64-40.61%2016.64-16.35%2040.32-16.35h177.22q23.68%200%2040.32%2016.24t16.64%2040.43q0%2023.98-16.64%2040.9-16.64%2016.91-40.32%2016.91H391.39ZM480-362.04q23.68%200%2040.32-16.64T536.96-419v-143.3q0-23.69-16.64-40.32-16.64-16.64-40.32-16.64t-40.32%2016.64q-16.64%2016.63-16.64%2040.32V-419q0%2023.68%2016.64%2040.32T480-362.04Zm0%20349q-82.26%200-154.2-31.13-71.94-31.12-125.89-84.69-53.95-53.57-85.02-125.55-31.06-71.98-31.06-154.24t31.11-154.22q31.12-71.95%2085.01-125.55%2053.88-53.61%20125.84-85.01%2071.95-31.4%20154.21-31.4%2064.13%200%20124.04%2019.29%2059.92%2019.28%20111.48%2057.84l30-29.43q17.13-17.7%2040.61-17.7t40.61%2017.42q17.13%2017.41%2017.13%2040.89t-17.13%2040.61l-30%2030q41%2053.43%2060.22%20113.28%2019.21%2059.85%2019.21%20123.98%200%2082.26-31.18%20154.2-31.19%2071.93-84.98%20125.67-53.78%2053.73-125.77%2084.73Q562.26-13.04%20480-13.04Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M391.39-837.13q-23.68%200-40.32-17.03-16.64-17.02-16.64-40.49%200-24.26%2016.64-40.61%2016.64-16.35%2040.32-16.35h177.22q23.68%200%2040.32%2016.24t16.64%2040.43q0%2023.98-16.64%2040.9-16.64%2016.91-40.32%2016.91H391.39ZM480-362.04q23.68%200%2040.32-16.64T536.96-419v-143.3q0-23.69-16.64-40.32-16.64-16.64-40.32-16.64t-40.32%2016.64q-16.64%2016.63-16.64%2040.32V-419q0%2023.68%2016.64%2040.32T480-362.04Zm0%20349q-82.26%200-154.2-31.13-71.94-31.12-125.89-84.69-53.95-53.57-85.02-125.55-31.06-71.98-31.06-154.24t31.11-154.22q31.12-71.95%2085.01-125.55%2053.88-53.61%20125.84-85.01%2071.95-31.4%20154.21-31.4%2064.13%200%20124.04%2019.29%2059.92%2019.28%20111.48%2057.84l30-29.43q17.13-17.7%2040.61-17.7t40.61%2017.42q17.13%2017.41%2017.13%2040.89t-17.13%2040.61l-30%2030q41%2053.43%2060.22%20113.28%2019.21%2059.85%2019.21%20123.98%200%2082.26-31.18%20154.2-31.19%2071.93-84.98%20125.67-53.78%2053.73-125.77%2084.73Q562.26-13.04%20480-13.04Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 159);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M481-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.22q-34-8.22-65-25.65-22%2011.43-45.5%2018.65-23.5%207.22-48.5%2011.22-22.7%203-39.33-13.13Q63.04-136.3%2063.04-160t16.13-40.83Q95.3-217.96%20119-224.52q18.57-5%2035.35-13.28%2016.78-8.29%2032.78-19.29%2012-8%2026.44-8.28%2014.43-.28%2026.43%207.72%2024%2017.56%2051%2028.63%2027%2011.06%2056%2011.06%2029.57%200%2056.78-10.84Q431-239.65%20455-257.22q12.57-8.43%2027.28-7.65%2014.72.78%2027.29%208.78%2023%2017%2049.71%2027.57Q586-217.96%20615-217.96t55.72-11.06q26.71-11.07%2050.15-28.07%2012.56-8.56%2028.13-8.28%2015.57.28%2028.13%208.85%2014.44%209.43%2030.44%2017.93t32.43%2013.5q23.7%207.57%2040.33%2024.48T896.96-160q0%2024.7-17.13%2040.83t-40.4%2012.13q-24-4-46.71-11.44Q770-125.91%20749-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.44q-34-8.43-65-25.43ZM63.04-296.26v-96.96q0-100.56%2038.79-187.63%2038.78-87.06%20106.34-151.41%2067.57-64.35%20158.13-101.41%2090.57-37.07%20193.7-37.07%2016.57%200%2036.93%201.28%2020.37%201.29%2038.07%204.29%2028.83%205.56%2041.67%2031.32%2012.85%2025.76-.28%2052.02-8.43%2016.31-13.93%2036.81-5.5%2020.5-5.5%2038.8%200%2048.31%2029.63%2077.65%2029.63%2029.35%2077.93%2029.35H840q23.7%200%2040.33%2016.63t16.63%2040.33q0%2024.26-16.63%2040.89T840-484.74h-75.48q-95.69%200-158.59-62.89-62.89-62.89-62.89-158.59%200-8.3.72-16.61.72-8.3%201.59-17.6-57.18%2023-92.78%2073.52-35.61%2050.52-35.61%20113.69%200%2032.31%209.15%2059.83%209.15%2027.52%2022.02%2045.95l-.96.83q15.7-10.56%2034.11-10.28%2018.42.28%2032.98%2010.85%2019%2013.43%2048.65%2023.87%2029.66%2010.43%2052.09%2010.43%2023.43%200%2051.74-10.93%2028.3-10.94%2048.3-23.81%2015.13-11.13%2033.68-10.91%2018.54.22%2034.24%2010.35l10.61%206.74q11%207%2023%2011.71%2012%204.72%2023.43%208.72%2023.7%207.57%2040.33%2025.26%2016.63%2017.7%2016.63%2041.39%200%2024.7-17.13%2040.55-17.13%2015.84-40.4%2011.84-25-5-47.71-12.21Q769-320.26%20749-330.7q-33%2018.44-65.5%2026.44t-68.5%208q-34.43%200-70.15-9.5-35.72-9.5-63.85-24.94-30.43%2017-64.72%2025.5-34.28%208.5-69.28%208.94-33.43%200-68.72-9-35.28-9-65.28-25.44-31.57%2016.44-69.91%2025.44-38.35%209-80.05%209Z%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%20-960%20960%20960%22%20width%3D%2224px%22%20fill%3D%22%235f6368%22%3E%3Cpath%20d%3D%22M481-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.22q-34-8.22-65-25.65-22%2011.43-45.5%2018.65-23.5%207.22-48.5%2011.22-22.7%203-39.33-13.13Q63.04-136.3%2063.04-160t16.13-40.83Q95.3-217.96%20119-224.52q18.57-5%2035.35-13.28%2016.78-8.29%2032.78-19.29%2012-8%2026.44-8.28%2014.43-.28%2026.43%207.72%2024%2017.56%2051%2028.63%2027%2011.06%2056%2011.06%2029.57%200%2056.78-10.84Q431-239.65%20455-257.22q12.57-8.43%2027.28-7.65%2014.72.78%2027.29%208.78%2023%2017%2049.71%2027.57Q586-217.96%20615-217.96t55.72-11.06q26.71-11.07%2050.15-28.07%2012.56-8.56%2028.13-8.28%2015.57.28%2028.13%208.85%2014.44%209.43%2030.44%2017.93t32.43%2013.5q23.7%207.57%2040.33%2024.48T896.96-160q0%2024.7-17.13%2040.83t-40.4%2012.13q-24-4-46.71-11.44Q770-125.91%20749-136.91q-31%2016.43-65%2025.15-34%208.72-69%208.72t-69-8.44q-34-8.43-65-25.43ZM63.04-296.26v-96.96q0-100.56%2038.79-187.63%2038.78-87.06%20106.34-151.41%2067.57-64.35%20158.13-101.41%2090.57-37.07%20193.7-37.07%2016.57%200%2036.93%201.28%2020.37%201.29%2038.07%204.29%2028.83%205.56%2041.67%2031.32%2012.85%2025.76-.28%2052.02-8.43%2016.31-13.93%2036.81-5.5%2020.5-5.5%2038.8%200%2048.31%2029.63%2077.65%2029.63%2029.35%2077.93%2029.35H840q23.7%200%2040.33%2016.63t16.63%2040.33q0%2024.26-16.63%2040.89T840-484.74h-75.48q-95.69%200-158.59-62.89-62.89-62.89-62.89-158.59%200-8.3.72-16.61.72-8.3%201.59-17.6-57.18%2023-92.78%2073.52-35.61%2050.52-35.61%20113.69%200%2032.31%209.15%2059.83%209.15%2027.52%2022.02%2045.95l-.96.83q15.7-10.56%2034.11-10.28%2018.42.28%2032.98%2010.85%2019%2013.43%2048.65%2023.87%2029.66%2010.43%2052.09%2010.43%2023.43%200%2051.74-10.93%2028.3-10.94%2048.3-23.81%2015.13-11.13%2033.68-10.91%2018.54.22%2034.24%2010.35l10.61%206.74q11%207%2023%2011.71%2012%204.72%2023.43%208.72%2023.7%207.57%2040.33%2025.26%2016.63%2017.7%2016.63%2041.39%200%2024.7-17.13%2040.55-17.13%2015.84-40.4%2011.84-25-5-47.71-12.21Q769-320.26%20749-330.7q-33%2018.44-65.5%2026.44t-68.5%208q-34.43%200-70.15-9.5-35.72-9.5-63.85-24.94-30.43%2017-64.72%2025.5-34.28%208.5-69.28%208.94-33.43%200-68.72-9-35.28-9-65.28-25.44-31.57%2016.44-69.91%2025.44-38.35%209-80.05%209Z%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(40, 105, 131);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 86, 148, 159;
  background: rgba(86, 148, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="bookmark"] {
  --callout-color: 180, 99, 122;
  --table-border-color: color-mix(in srgb, rgb(180, 99, 122) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(180, 99, 122, 0.1);
  border-bottom-color: rgba(180, 99, 122, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 99, 122, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(180, 99, 122, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(180, 99, 122, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="box"] {
  --callout-color: 40, 105, 131;
  --table-border-color: color-mix(in srgb, rgb(40, 105, 131) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(223, 218, 217);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(223, 218, 217);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(223, 218, 217);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(223, 218, 217);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 215, 130, 126;
  background: rgba(215, 130, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 215, 130, 126;
  background: rgba(215, 130, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 144, 122, 169;
  background: rgba(144, 122, 169, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(144, 122, 169, 0.1);
  border-bottom-color: rgba(144, 122, 169, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(144, 122, 169, 0.25);
  border-right-color: rgba(144, 122, 169, 0.25);
  border-top-color: rgba(144, 122, 169, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 215, 130, 126;
  background: rgba(215, 130, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(215, 130, 126, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(215, 130, 126, 0.25);
  border-right-color: rgba(215, 130, 126, 0.25);
  border-top-color: rgba(215, 130, 126, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 40, 105, 131;
  background: rgba(40, 105, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="math"] {
  --callout-color: 40, 105, 131;
  --table-border-color: color-mix(in srgb, rgb(40, 105, 131) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 105, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(40, 105, 131);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(40, 105, 131);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(40, 105, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="media"] {
  --callout-color: 234, 157, 52;
  --table-border-color: color-mix(in srgb, rgb(234, 157, 52) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(234, 157, 52, 0.1);
  border-bottom-color: rgba(234, 157, 52, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(234, 157, 52, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(234, 157, 52, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(234, 157, 52, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 40, 105, 131;
  background: rgba(40, 105, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="outlined"] {
  --callout-border-width: 1px;
  --callout-color: 40, 105, 131;
  --callout-content-background: rgb(255, 250, 243);
  --callout-content-padding: 0px 24px;
  --callout-padding: 0px;
  --callout-title-padding: 7px 15px;
  --table-border-color: color-mix(in srgb, rgb(40, 105, 131) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(40, 105, 131, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="person"] {
  --callout-color: 86, 148, 159;
  --table-border-color: color-mix(in srgb, rgb(86, 148, 159) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(86, 148, 159, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 180, 99, 122;
  background: rgba(180, 99, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 99, 122, 0.1);
  border-bottom-color: rgba(180, 99, 122, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(180, 99, 122, 0.25);
  border-right-color: rgba(180, 99, 122, 0.25);
  border-top-color: rgba(180, 99, 122, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="solid"] {
  --callout-border-width: 2px 6px 6px 2px;
  --callout-color: 40, 105, 131;
  --table-border-color: color-mix(in srgb, rgb(40, 105, 131) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(40, 105, 131, 0.25);
  border-right-style: solid;
  border-right-width: 6px;
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 86, 148, 159;
  background: rgba(86, 148, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="time"] {
  --callout-color: 144, 122, 169;
  --table-border-color: color-mix(in srgb, rgb(144, 122, 169) 25%, rgb(255, 250, 243) 50%);
  background-color: rgba(144, 122, 169, 0.1);
  border-bottom-color: rgba(144, 122, 169, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(144, 122, 169, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(144, 122, 169, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(144, 122, 169, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 86, 148, 159;
  background: rgba(86, 148, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(86, 148, 159, 0.1);
  border-bottom-color: rgba(86, 148, 159, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(86, 148, 159, 0.25);
  border-right-color: rgba(86, 148, 159, 0.25);
  border-top-color: rgba(86, 148, 159, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 40, 105, 131;
  background: rgba(40, 105, 131, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(40, 105, 131, 0.1);
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 234, 157, 52;
  background: rgba(234, 157, 52, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(234, 157, 52, 0.1);
  border-bottom-color: rgba(234, 157, 52, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(234, 157, 52, 0.25);
  border-right-color: rgba(234, 157, 52, 0.25);
  border-top-color: rgba(234, 157, 52, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 180, 99, 122;
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(180, 99, 122);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="box"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cline x1='12' x2='12' y1='16' y2='12'/%3E%3Cline x1='12' x2='12.01' y1='8' y2='8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="math"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="media"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z'/%3E%3Cpath d='M15 3v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M8 13h.01'/%3E%3Cpath d='M16 13h.01'/%3E%3Cpath d='M10 16s.8 1 2 1c1.3 0 2-1 2-1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="outlined"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="person"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='8' r='5'/%3E%3Cpath d='M20 21a8 8 0 0 0-16 0'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cline x1='12' x2='12.01' y1='17' y2='17'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="solid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="time"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='10' x2='14' y1='2' y2='2'/%3E%3Cline x1='12' x2='15' y1='14' y2='11'/%3E%3Ccircle cx='12' cy='14' r='8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-top-color: rgba(223, 218, 217, 0.6);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(80, 141, 149, 0.15);
  border-left-color: rgba(80, 141, 149, 0.15);
  border-right-color: rgba(80, 141, 149, 0.15);
  border-top-color: rgba(80, 141, 149, 0.15);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body h1 {
  color: rgb(180, 99, 122);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(86, 148, 159);
  font-size: 28.8px;
}

html[saved-theme="light"] body h2 {
  color: rgb(215, 130, 126);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(86, 148, 159);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(234, 157, 52);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(40, 105, 131);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(144, 122, 169);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(87, 82, 121);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-left-color: rgba(223, 218, 217, 0.6);
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 40, 105, 131;
  border-bottom-color: rgba(40, 105, 131, 0.25);
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  border-left-color: rgba(40, 105, 131, 0.25);
  border-right-color: rgba(40, 105, 131, 0.25);
  border-top-color: rgba(40, 105, 131, 0.25);
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding-right: 24px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-style: dashed;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(87, 82, 121);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(87, 82, 121);
  cursor: pointer;
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 82, 121);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(206, 202, 205);
  border-bottom-left-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(206, 202, 205);
  border-right-color: rgb(206, 202, 205);
  border-top-color: rgb(206, 202, 205);
  border-top-left-radius: 12px;
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(152, 147, 165);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 82, 121);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 250, 243);
  border-color: rgb(87, 82, 121);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(244, 237, 232);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(206, 202, 205);
  color: rgb(255, 250, 243);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgba(223, 218, 217, 0.6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(223, 218, 217, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(223, 218, 217, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(223, 218, 217, 0.6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 1px;
  color: rgb(152, 147, 165);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
  font-family: "??", "??", Lexend, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(250, 244, 237);
  border-color: rgba(223, 218, 217, 0.6);
  border-radius: 10px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(215, 130, 126, 0.1);
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(255, 250, 243);
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(87, 82, 121);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  color: rgb(152, 147, 165);
  font-family: "??", Inter, Lexend, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(215, 130, 126, 0.1);
  border-bottom-color: rgba(80, 141, 149, 0.15);
  border-left-color: rgba(80, 141, 149, 0.15);
  border-right-color: rgba(80, 141, 149, 0.15);
  border-top-color: rgba(80, 141, 149, 0.15);
  color: rgb(215, 130, 126);
}`,
  },
  classSettings: {
    "rose-pine": `.rose-pine-moon {
--love-rgb: 235, 111, 146;
--gold-rgb: 246, 193, 119;
--rose-rgb: 234, 154, 151;
--pine-rgb: 62, 143, 176;
--foam-rgb: 156, 207, 216;
--iris-rgb: 196, 167, 231;
--base: #232136;
--surface-rgb: 42, 39, 63;
--overlay: #393552;
--muted: #6e6a86;
--subtle: #908caa;
--text: #e0def4;
--highlight-low: #2a283e;
--highlight-med-rgb: 68, 65, 90;
--highlight-high: #56526e;
--accent-h: 193;
--accent-s: 46%;
--accent-l: 75%;
--color-accent-hsl: 193, 46%, 75%;
}`,
    "rose-pine-moon": `.rose-pine-moon {
--love-rgb: 235, 111, 146;
--gold-rgb: 246, 193, 119;
--rose-rgb: 234, 154, 151;
--pine-rgb: 62, 143, 176;
--foam-rgb: 156, 207, 216;
--iris-rgb: 196, 167, 231;
--base: #232136;
--surface-rgb: 42, 39, 63;
--overlay: #393552;
--muted: #6e6a86;
--subtle: #908caa;
--text: #e0def4;
--highlight-low: #2a283e;
--highlight-med-rgb: 68, 65, 90;
--highlight-high: #56526e;
--accent-h: 193;
--accent-s: 46%;
--accent-l: 75%;
--color-accent-hsl: 193, 46%, 75%;
}`,
    "nord-dark": `.nord-dark {
--love-rgb: 191, 97, 106;
/*nord11*/
--gold-rgb: 235, 203, 139;
/*nord13*/
--rose-rgb: 208, 135, 112;
/*nord12*/
--pine-rgb: 129, 161, 193;
/*nord9*/
--foam-rgb: 143, 188, 187;
/*nord7*/
--iris-rgb: 180, 142, 173;
/*nord15*/
--base: #3B4252;
/*nord1*/
--surface-rgb: 46, 52, 64;
/*nord0*/
--overlay: #434C5E;
/*nord2*/
--muted: #D8DEE9;
/*nord4*/
--subtle: #E5E9F0;
/*nord5*/
--text: #ECEFF4;
/*nord6*/
--highlight-low: #3b4252;
/*nord 1*/
--highlight-med-rgb: 67, 76, 94;
/*nord 2*/
--highlight-high: #4c566a;
/*nord3*/
--accent-h: 210;
--accent-s: 34%;
--accent-l: 63%;
--color-accent-hsl: 210, 34%, 63%;
}`,
    "catppuccin-mocha": `.catppuccin-mocha {
--love-rgb: 250, 179, 135;
/*Peach*/
--gold-rgb: 249, 226, 175;
/*Yellow*/
--rose-rgb: 235, 160, 172;
/*Maroon*/
--foam-rgb: 137, 180, 250;
/*Blue*/
--pine-rgb: 166, 227, 161;
/*Green*/
--iris-rgb: 203, 166, 247;
/*Mauve*/
--base: #181825;
/*mantle*/
--surface-rgb: 30, 30, 46;
/*Base*/
--overlay: #11111b;
/*crust*/
--muted: #a6adc8;
/*subtext0*/
--subtle: #bac2de;
/*subtext1*/
--text: #cdd6f4;
/*text*/
--highlight-low: rgba(49, 50, 68, 0.5);
/*surface0*/
--highlight-med-rgb: 69, 71, 90;
/*surface1*/
--highlight-high: #585b70;
/*surface2*/
--accent-h: 232;
--accent-s: 97%;
--accent-l: 85%;
--color-accent-hsl: 232, 97%, 85%;
/*Lavender*/
}`,
    "everforest-dark": `.everforest-dark {
--love-rgb: 230, 126, 128;
/*red*/
--gold-rgb: 219, 188, 127;
/*yellow*/
--rose-rgb: 230, 152, 117;
/*orange*/
--pine-rgb: 131, 192, 146;
/*aqua*/
--foam-rgb: 127, 187, 179;
/*blue*/
--iris-rgb: 214, 153, 182;
/*purple*/
--base: #1E2326;
/*bg_dim*/
--surface-rgb: 39, 46, 51;
/*bg0*/
--overlay: #384B55;
/*bg_blue*/
--muted: #859289;
/*gray1*/
--subtle: #9DA9A0;
/*gray2*/
--text: #d3C6AA;
/*fg*/
--highlight-low: #374145;
/*bg2*/
--highlight-med-rgb: 65, 75, 80;
/*bg3*/
--highlight-high: #495156;
/*bg4*/
--accent-h: 90;
--accent-s: 36%;
--accent-l: 66%;
--color-accent-hsl: 90, 36%, 66%;
/*green/statusline1*/
}`,
    "biscuit-dark": `.biscuit-dark {
--love-rgb: 202, 63, 63;
/*Persian Red*/
--gold-rgb: 227, 156, 69;
/*Butterscotch*/
--rose-rgb: 228, 106, 58;
/*Flame*/
--pine-rgb: 81, 120, 148;
/*Steel Blue*/
--foam-rgb: 98, 147, 134;
/*Viridian*/
--iris-rgb: 159, 86, 154;
/*Purpureus*/
--base: #181515;
/*Night*/
--surface-rgb: 34, 30, 30;
/*Raisin Black*/
--overlay: #423939;
/*Van Dyke*/
--muted: #978787;
/*Cinereous*/
--subtle: #B6A8A5;
/*Silver*/
--text: #F4E6D2;
/*Antique White*/
--highlight-low: #423939;
/*Van Dyke*/
--highlight-med-rgb: 109, 95, 95;
/*Wenge*/
--highlight-high: #978787;
/*Cinereous*/
--accent-h: 226;
--accent-s: 31%;
--accent-l: 42%;
--color-accent-hsl: 226, 31%, 42%;
/*YinMn Blue*/
}`,
    "obsidian-dark": `.obsidian-dark {
--love-rgb: 251, 70, 76;
/*red*/
--gold-rgb: 224, 222, 113;
/*yellow*/
--rose-rgb: 233, 151, 63;
/*orange*/
--pine-rgb: 2, 122, 255  ;
/*blue*/
--foam-rgb: 68, 207, 110;
/*green*/
--iris-rgb: 168, 130, 255;
/*purple*/
--base: #262626;
/*color-base-20*/
--surface-rgb: 30, 30, 30;
/*color-base-00*/
--overlay: #363636;
/*color-base-30*/
--muted: #666666;
/*color-base-50*/
--subtle: #bababa;
/*color-base-70*/
--text: #dadada;
/*color-base-100*/
--highlight-low: #2a2a2a;
/*--color-base-25*/
--highlight-med-rgb: 63, 63, 63;
/*3f3f3f*/
/*color-base-35*/
--highlight-high: #555555;
/*color-base-40*/
--accent-h: 258;
--accent-s: 88%;
--accent-l: 66%;
--color-accent-hsl: 258, 88%, 66%;
/*default purple*/
}`,
    "uw-deep": `.uw-deep {
--love-rgb: 215, 97, 76;
/*goldfish*/
--gold-rgb: 217, 209, 89;
/*Sand!*/
--rose-rgb: 229, 156, 88;
/*Crab!*/
--pine-rgb: 105, 147, 194;
/*Ocean!*/
--foam-rgb: 159, 195, 135;
/*Seaweed!*/
--iris-rgb: 146, 135, 194;
/*Jellyfish!*/
--base: #11121a;
--surface-rgb: 21, 23, 29;
--overlay: #22252F;
--muted: #57626B;
--subtle: #7C8185;
--text: #D5E1E5;
--highlight-low: #272B2F;
--highlight-med-rgb: 49, 60, 66;
--highlight-high: #334852;
--accent-h: 213;
--accent-s: 49%;
--accent-l: 61%;
--color-accent-hsl: 213, 49%, 61%;
/*Ocean*/
}`,
    "uw-ocean": `.uw-ocean {
--love-rgb: 254, 114, 143;
--gold-rgb: 255, 225, 97;
--rose-rgb: 232, 177, 146;
--pine-rgb: 235, 98, 59;
--foam-rgb: 70, 201, 199;
--iris-rgb: 115, 104, 182;
--base: #081020;
--surface-rgb: 8, 18, 43;
--overlay: #06334D;
--muted: #7585B2;
--subtle: #97A4C9;
--text: #E1E3FF;
--highlight-low: #28344B;
--highlight-med-rgb: 40, 56, 82;
--highlight-high: #19263B;
--accent-h: 179;
--accent-s: 63%;
--accent-l: 51%;
--color-accent-hsl: 179, 63%, 51%;
}`,
    "uw-seaweed": `.uw-seaweed {
--love-rgb: 255, 123, 123;
--gold-rgb: 242, 225, 95;
--rose-rgb: 216, 237, 141;
--pine-rgb: 109, 196, 120;
--foam-rgb: 191, 229, 222;
--iris-rgb: 95, 163, 162;
--base: #193233;
--surface-rgb: 25, 57, 58;
--overlay: #214B4C;
--muted: #7CAB9B;
--subtle: #A7C9C9;
--text: #dee2b9;
--highlight-low: #1F3533;
--highlight-med-rgb: 63, 99, 96;
--highlight-high: #5D817E;
--accent-h: 169;
--accent-s: 42%;
--accent-l: 82%;
--color-accent-hsl: 169, 42%, 82%;
/*foam*/
}`,
    "uw-sand": `.uw-sand {
--love-rgb: 232, 157, 149;
--gold-rgb: 246, 173, 119;
--rose-rgb: 187, 163, 121;
--pine-rgb: 121, 166, 222;
--foam-rgb: 195, 230, 148;
--iris-rgb: 145, 145, 188;
--base: #151527;
--surface-rgb: 25, 25, 46;
--overlay: #212037;
--muted: #a09a79;
--subtle: #b8b28e;
--text: #CED9BF;
--highlight-low: #1A2230;
--highlight-med-rgb: 48, 62, 85;
--highlight-high: #37465F;
--accent-h: 213;
--accent-s: 60%;
--accent-l: 67%;
--color-accent-hsl: 213, 60%, 67%%;
/*pine*/
}`,
    "nord-bright": `.nord-bright {
--love-rgb: 191, 97, 106;
/*nord11*/
--gold-rgb: 208, 135, 112;
/*nord12*/
--rose-rgb: 180, 142, 173;
/*nord15*/
--pine-rgb: 129, 161, 193;
/*nord9*/
--foam-rgb: 136, 192, 208;
/*nord7*/
--iris-rgb: 94, 129, 172;
/*nord10*/
--base: #E5E9F0;
/*nord5*/
--surface-rgb: 236, 239, 244;
/*nord6*/
--overlay: #D8DEE9;
/*nord4*/
--muted: #4C566A;
/*nord3*/
--subtle: #4C566A;
/*nord3*/
--text: #434C5E;
/*nord2*/
--highlight-low: #E5E9F0;
/*nord5*/
--highlight-med-rgb: 216, 222, 233;
/*nord4*/
--highlight-high: #d8dee9;
/*nord4*/
--accent-h: 210;
--accent-s: 34%;
--accent-l: 63%;
--color-accent-hsl: 210, 34%, 63%;
/*nord9*/
}`,
    "catppuccin-latte": `.catppuccin-latte {
--love-rgb: 230, 69, 83;
/*maroon*/
--gold-rgb: 223, 142, 29;
/*yellow*/
--rose-rgb: 221, 120, 120;
/*flamingo*/
--pine-rgb: 4, 165, 229;
/*sky*/
--foam-rgb: 32, 159, 181;
/*sapphire*/
--iris-rgb: 114, 135, 253;
/*lavender*/
--base: #e6e9ef;
/*mantle*/
--surface-rgb: 239, 241, 245;
/*base*/
--overlay: #dce0e8;
/*crust*/
--muted: #6c6f85;
/*subtext0*/
--subtle: #5c5f77;
/*subtext1*/
--text: #4c4f69;
/*text*/
--highlight-low: #ccd0da;
/*surface0*/
--highlight-med-rgb: 188, 192, 204;
/*surface1*/
--highlight-high: #acb0be;
/*surface2*/
--accent-h: 11;
--accent-s: 59%;
--accent-l: 67%;
--color-accent-hsl: 11, 59%, 67%;
/*Rosewater*/
}`,
    "everforest-light": `.everforest-light {
--love-rgb: 248, 85, 82;
/*statusline3*/
--gold-rgb: 223, 160, 0;
/*yellow*/
--rose-rgb: 245, 125, 38;
/*orange*/
--pine-rgb: 53, 167, 124;
/*aqua*/
--foam-rgb: 58, 148, 197;
/*blue*/
--iris-rgb: 223, 105, 186;
/*purple*/
--base: #efebd4;
/*bg_dim*/
--surface-rgb: 253, 246, 227;
/*bg0*/
--overlay: #eaedc8;
/*bg_visual*/
--muted: #939f91;
/*gray1*/
--subtle: #829181;
/*gray2*/
--text: #5c6a72;
/*fg*/
--highlight-low: #efebd4;
/*bg2*/
--highlight-med-rgb: 230, 226, 204;
/*bg3*/
--highlight-high: #e0dcc7;
/*bg4*/
--accent-h: 97;
--accent-s: 38%;
--accent-l: 53%;
--color-accent-hsl: 97, 38%, 53%;
/*green/statusline1*/
}`,
    "gruvbox-light": `.gruvbox-light {
--love-rgb: 204, 36, 29;
/*red*/
--gold-rgb: 215, 153, 33;
/*yellow*/
--rose-rgb: 152, 151, 26;
/*green*/
--pine-rgb: 69, 133, 136;
/*blue*/
--foam-rgb: 104, 157, 106;
/*aqua*/
--iris-rgb: 177, 98, 134;
/*purple*/
--base: #ebdbb2;
/*bg1*/
--surface-rgb: 251, 241, 199;
/*bg*/
--overlay: #f2e5bc;
/*bg0_s*/
--muted: #7c6f54;
/*fg4*/
--subtle: #504945;
/*fg2*/
--text: #3c3836;
/*fg*/
--highlight-low: #d5c4a1;
/*bg2*/
--highlight-med-rgb: 189, 174, 147;
/*bg3*/
--highlight-high: #a89984;
/*bg4*/
--accent-h: 122;
--accent-s: 22%;
--accent-l: 51%;
--color-accent-hsl: 122, 22%, 51%;
/*aqua*/
}`,
    "obsidian-light": `.obsidian-light {
--love-rgb: 233, 49, 71;
/*red*/
--gold-rgb: 224, 172, 0;
/*yellow*/
--rose-rgb: 236, 117, 0;
/*orange*/
--pine-rgb: 8, 109, 221	;
/*blue*/
--foam-rgb: 8, 185, 78;
/*green*/
--iris-rgb: 120, 82, 238;
/*purple*/
--base: #f6f6f6;
/*color-base-20*/
--surface-rgb: 255, 255, 255;
/*color-base-00*/
--overlay: #e3e3e3;
/*color-base-25*/
--muted: #ababab;
/*color-base-50*/
--subtle: #707070;
/*color-base-60*/
--text: #222222;
/*color-base-100*/
--highlight-low: #fafafa;
/*color-base-10*/
--highlight-med-rgb: 224, 224, 224;
/*e0e0e0*/
/*color-base-30*/
--highlight-high: #d4d4d4;
/*color-base-35*/
--accent-h: 258;
--accent-s: 88%;
--accent-l: 66%;
--color-accent-hsl: 258, 88%, 66%;
/*default purple*/
}`,
    "uw-octopus": `.uw-octopus {
--love-rgb: 205, 106, 94;
--gold-rgb: 230, 161, 73;
--rose-rgb: 127, 111, 134;
--pine-rgb: 86, 139, 187;
--foam-rgb: 106, 168, 149;
--iris-rgb: 204, 135, 90;
--base: #F2EDF4;
--surface-rgb: 252, 251, 250;
--overlay: #eee9f0;
--muted: #798094;
--subtle: #616980;
--text: #475669;
--highlight-low: #e3e9eb;
--highlight-med-rgb: 206, 222, 227;
--highlight-high: #B4C3C8;
--accent-h: 6;
--accent-s: 53%;
--accent-l: 59%;
--color-accent-hsl: 6, 53%, 59%;
/*foam*/
}`,
    "uw-coral": `.uw-coral {
--love-rgb: 145, 121, 123;
--gold-rgb: 242, 154, 99;
--rose-rgb: 145, 166, 204;
--pine-rgb: 119, 166, 155;
--foam-rgb: 138, 182, 189;
--iris-rgb: 222, 152, 137;
--base: #F3E9E2;
--surface-rgb: 255, 244, 237;
--overlay: #FBE1DB;
--muted: #A79A8C;
--subtle: #928577;
--text: #6C6156;
--highlight-low: #EDE2DA;
--highlight-med-rgb: 231, 214, 196;
--highlight-high: #D9C6B9;
--accent-h: 11;
--accent-s: 56%;
--accent-l: 70%;
--color-accent-hsl: 11, 56%, 70%;
/*iris*/
}`,
    "uw-aqua": `.uw-aqua {
--love-rgb: 194, 105, 128;
--gold-rgb: 183, 195, 121;
--rose-rgb: 215, 131, 116;
--pine-rgb: 123, 168, 149;
--foam-rgb: 96, 161, 169;
--iris-rgb: 128, 127, 152;
--base: #f0efec;
--surface-rgb: 255, 251, 245;
--overlay: #e6eeec;
--muted: #80766f;
--subtle: #7c726b;
--text: #4e4c49;
--highlight-low: #e9eef0;
--highlight-med-rgb: 220, 227, 230;
--highlight-high: #cfdadf;
--accent-h: 187;
--accent-s: 40%;
--accent-l: 60%;
--color-accent-hsl: 187, 40%, 60%;
/*foam*/
}`,
    "uw-oyster": `.uw-oyster {
--love-rgb: 64, 45, 48;
--gold-rgb: 255, 150, 0;
--rose-rgb: 140, 35, 51;
--pine-rgb: 50, 111, 144;
--foam-rgb: 70, 102, 67;
--iris-rgb: 103, 67, 100;
--base: #EEE6E5;
--surface-rgb: 245, 239, 238;
--overlay: #E6DAD7;
--muted: #7F8284;
--subtle: #545557;
--text: #2C2E2F;
--highlight-low: #EAE5E0;
--highlight-med-rgb: 209, 201, 193;
--highlight-high: #B8B3AD;
--accent-h: 201;
--accent-s: 48%;
--accent-l: 38%;
--color-accent-hsl: 201, 48%, 38%;
/*pine*/
}`,
    "callout-solid": `.callout-solid {
--callout-border-width: 2px 6px 6px 2px;
}`,
    "callout-outlined": `.callout-outlined {
--callout-border-width: 1px;
--callout-content-background: var(--background-primary);
--callout-content-padding: 0px var(--size-4-6);
--callout-padding: 0px;
--callout-title-padding: 7px 15px;
}`,
    "callout-math": `.callout-math .callout {
border-width: 2px;
border-color: rgba(var(--callout-color));
border-radius: 0px;
background-color: transparent;
}`,
    "table-minimal": `.table-minimal {
--table-header-background: transparent;
--table-header-background-hover: var(--table-header-background);
--table-header-color: var(--text-normal);
--table-row-alt-background: transparent;
--table-row-alt-background-hover: var(--table-row-alt-background);
}`,
    "checkbox-circle": `.checkbox-circle {
--checkbox-radius: 100px;
}`,
    "vault-school": `.vault-school {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M840-320v-236L518-381q-18 10-38 10t-38-10L104-565q-11-6-15.5-15T84-600q0-11 4.5-20t15.5-15l338-184q9-5 18.5-7.5T480-829q10 0 19.5 2.5T518-819l381 208q10 5 15.5 14.5T920-576v256q0 17-11.5 28.5T880-280q-17 0-28.5-11.5T840-320ZM442-141 242-249q-20-11-31-30t-11-41v-152l242 131q18 10 38 10t38-10l242-131v152q0 22-11 41t-31 30L518-141q-9 5-18.5 7.5T480-131q-10 0-19.5-2.5T442-141Z'/%3E%3C/svg%3E");
}`,
    "vault-science": `.vault-science {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Z'/%3E%3C/svg%3E");
}`,
    "vault-brain": `.vault-brain {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M570-120q-13 0-25.5-2.5T520-130v-700q12-5 24.5-7.5T570-840q52 0 89.5 35t40.5 86q59 8 99.5 53T840-560q0 22-5.5 42T818-480q11 18 16.5 38.5T840-400q0 62-40.5 106.5T699-241q-5 50-41.5 85.5T570-120Zm-180 0q-51 0-88-35.5T260-241q-60-8-100-53t-40-106q0-21 5.5-41.5T142-480q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q13 0 25.5 3t24.5 8v699q-12 5-24.5 7.5T390-120Z'/%3E%3C/svg%3E");
}`,
    "vault-book": `.vault-book {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M120-274v-286q0-32 23.5-54t55.5-20q79 12 150.5 46.5T480-498q59-55 130.5-89.5T761-634q32-2 55.5 20t23.5 54v286q0 32-21 54.5T766-195q-64 10-124 33t-112 61q-11 9-23.5 13.5T480-83q-14 0-26.5-4.5T430-101q-52-38-112-61t-124-33q-32-2-53-24.5T120-274Zm360-326q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z'/%3E%3C/svg%3E");
}`,
    "vault-plant": `.vault-plant {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M480-120q-17 0-28.5-11.5T440-160v-279q-64 0-123-24.5T213-533q-45-45-69-104t-24-123v-40q0-17 11.5-28.5T160-840h40q63 0 122 24.5T426-746q31 31 51.5 68t31.5 79q5-7 11-13.5t13-13.5q45-45 104-69.5T760-720h40q17 0 28.5 11.5T840-680v40q0 64-24.5 123T746-413q-45 45-103.5 69T520-320v160q0 17-11.5 28.5T480-120Z'/%3E%3C/svg%3E");
}`,
    "vault-rocket": `.vault-rocket {
--vault-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%235f6368'%3E%3Cpath d='M245-474q26-66 62.5-127T390-716l-52-11q-20-4-39 2t-33 20L140-579q-15 15-11.5 36t23.5 29l93 40Zm588-390q-106-5-201.5 41T461-702q-48 48-84.5 104T313-480q-5 13-5 26.5t10 23.5l125 125q10 10 23.5 10t26.5-5q62-27 118-63.5T715-448q75-75 121-170.5T877-820q0-8-4-16t-10-14q-6-6-14-10t-16-4ZM579-566q-23-23-23-56.5t23-56.5q23-23 56.5-23t56.5 23q23 23 23 56.5T692-566q-23 23-56.5 23T579-566Zm-92 334 40 93q8 20 29 24t36-11l126-126q14-14 20-33.5t2-39.5l-10-52q-55 46-115.5 82.5T487-232Zm-325-86q35-35 85-35.5t85 34.5q35 35 35 85t-35 85q-48 48-113.5 57T87-74q9-66 18.5-131.5T162-318Z'/%3E%3C/svg%3E");
}`,
    "vault-dev": `.vault-dev {
--vault-icon: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJtMzUzLTQ4MCA1OS01OXExMi0xMiAxMi0yOHQtMTItMjhxLTEyLTEyLTI4LjUtMTJUMzU1LTU5NWwtODcgODdxLTYgNi04LjUgMTN0LTIuNSAxNXEwIDggMi41IDE1dDguNSAxM2w4NyA4N3ExMiAxMiAyOC41IDEydDI4LjUtMTJxMTItMTIgMTItMjh0LTEyLTI4bC01OS01OVptMjU0IDAtNTkgNTlxLTEyIDEyLTEyIDI4dDEyIDI4cTEyIDEyIDI4LjUgMTJ0MjguNS0xMmw4Ny04N3E2LTYgOC41LTEzdDIuNS0xNXEwLTgtMi41LTE1dC04LjUtMTNsLTg3LTg3cS02LTYtMTMuNS05dC0xNS0zcS03LjUgMC0xNSAzdC0xMy41IDlxLTEyIDEyLTEyIDI4dDEyIDI4bDU5IDU5Wk0yMDAtMTIwcS0zMyAwLTU2LjUtMjMuNVQxMjAtMjAwdi01NjBxMC0zMyAyMy41LTU2LjVUMjAwLTg0MGg1NjBxMzMgMCA1Ni41IDIzLjVUODQwLTc2MHY1NjBxMCAzMy0yMy41IDU2LjVUNzYwLTEyMEgyMDBaIi8+PC9zdmc+");
}`,
    "box-links": `.box-links {
.markdown-source-view.mod-cm6 .cm-hmd-internal-link,
  .markdown-rendered .internal-link {
    border: 1px solid var(--highlight-med);
    background-color: transparent;
    
    &:hover {
      background-color: var(--highlight-med);
      color: var(--link-color);
    }
};
}`,
    "no-links": `.no-links {
.markdown-source-view.mod-cm6 .cm-hmd-internal-link,
  .markdown-rendered .internal-link {
    background-color: transparent;
    padding: 0px;

    &:hover {
      color: var(--link-color-hover);
      transition: color 0.3s ease-out;
      background-color: transparent;
}};
}`,
    "no-center": `.no-center {
:is(:is(.markdown-source-view.mod-cm6) :is(.cm-content, .cm-line), .markdown-rendered) :is(img, .external-embed, .internal-embed audio, .internal-embed video, .iframe-external-embed) {
  margin-inline: 0;
  display: inline;
  border-radius: 10px;
};
table, .table-wrapper {
  margin-inline: 0;
};
}`,
    "visible-properties": `.visible-properties {
--metadata-display-reading: block;
}`,
    "no-tooltips": `.no-tooltips .tooltip {
display: none;
}`,
    "no-scrollbar": `.no-scrollbar .mod-left-split ::-webkit-scrollbar, .no-scrollbar .mod-right-split ::-webkit-scrollbar {
display: none;
}`,
    "focus-mode": `.focus-mode .titlebar-button-container {
display: none;
}

.focus-mode {
.workspace-tab-header-container, .view-header, .status-bar, .metadata-properties-heading, ::-webkit-scrollbar {
    display: none !important;
};
}

.focus-mode .workspace-tab-container {
margin-top: 14px;
}`,
    "workspace-bg": `.workspace-bg .app-container::before {
background-image: var(--bg-url);
opacity: var(--bg-opacity, 0.8);
filter: blur(var(--bg-blur, 0px));
background-color: var(--uw-background);
background-position: center;
background-repeat: no-repeat;
background-size: cover;
z-index: -1;
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
}

.workspace-bg .app-container {
&.workspace, .workspace-tabs, .workspace-split, .horizontal-main-container {
  background-color: transparent;
};
}

.workspace-bg .mod-right-split, .workspace-bg .mod-left-split, .workspace-bg .workspace-leaf {
--background-primary: rgba(var(--surface-rgb),var(--layout-opacity, 0.8));
background-color: var(--background-primary);
}

.workspace-bg .workspace-split.mod-left-split, .workspace-bg .workspace-split.mod-right-split, .workspace-bg .workspace-split.mod-root .view-content, .workspace-bg .workspace-leaf.mod-active .view-header {
background-color: transparent;
}`,
    "kanban-modern": `.kanban-modern {
.kanban-plugin__lane {
    background-color: var(--background-primary) !important;
  };
.kanban-plugin__lane:hover {
    outline: 1px solid var(--highlight-med);
  };
.kanban-plugin__item-title-wrapper {
    background-color: var(--overlay);
    border-radius: 10px;
    border: 1px solid var(--highlight-high);
    padding: 10px;
    transition-duration: .3s;
    transition-property: border-color, box-shadow, background-color;
  };
.kanban-plugin__item:has(.markdown-source-view), .kanban-plugin__item, .kanban-plugin__item-button-wrapper, .kanban-plugin__item-form /*fix*/ {
    outline: none;
    border: none;
  };
.kanban-plugin__item-title-wrapper:hover {
    border: 1px solid var(--text-faint);
    cursor: pointer;
  };
button.kanban-plugin__new-item-button {
    background-color: transparent;
    color: var(--text-faint);
  };
button.kanban-plugin__new-item-button:hover {
    background-color: transparent;
    color: var(--color-pink);
};
}`,
    dotted: `.dotted .excalidraw {
background-image: radial-gradient(var(--background-modifier-border) 1px, transparent 0);
background-size: 20px 20px;
background-position: -19px -19px;
}`,
    "seamless-dataview": `.seamless-dataview .dataview.table-view-table th, .seamless-dataview .dataview.table-view-table :is(td, th) {
border: 1px solid var(--table-border-color);
font-size: var(--font-text-size);
}`,
    "tokei-plugin": `.tokei-plugin {
.time {
    padding: 20px;
    font-size: 3.2em;
    text-shadow: none;
    color: var(--pine);
  };
.date {
    font-size: 1.5em;
    color: var(--rose);
  };
.timezone-container {
    padding: 15px;
    gap: 15px;
  };
.timezone-pair {
    flex-direction: row;
    border: 2px dotted var(--highlight-high);
    background-color: transparent;
    border-radius: 5px;
  };
.timezone-name {
    color: var(--subtle);
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  };
.timezone-time {
    color: var(--text-normal);
};
}`,
  },
};
