import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ayu-light-mirage",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lora", "monaspace-neon"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 40;
  --accent-l: 70%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(99 117 153 / 0.15);
  --background-modifier-border: rgb(23 27 36);
  --background-modifier-border-focus: rgb(99 117 153 / 0.15);
  --background-modifier-border-hover: rgb(105 117 140 / 0.12);
  --background-modifier-error: rgb(242 121 131);
  --background-modifier-error-hover: rgb(242 121 131 / 0.8);
  --background-modifier-error-rgb: 242 121 131;
  --background-modifier-form-field: rgb(105 117 140 / 0.12);
  --background-modifier-form-field-hover: rgb(105 117 140 / 0.12);
  --background-modifier-hover: rgb(105 117 140 / 0.12);
  --background-modifier-message: rgb(128 191 255);
  --background-modifier-success: rgb(135 217 108);
  --background-modifier-success-rgb: 135 217 108;
  --background-primary: rgb(36 41 54);
  --background-primary-alt: rgb(28 33 43);
  --background-secondary: rgb(31 36 48);
  --background-secondary-alt: rgb(28 33 43);
  --bases-cards-background: rgb(36 41 54);
  --bases-cards-cover-background: rgb(28 33 43);
  --bases-cards-shadow: 0 0 0 1px rgb(23 27 36);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(105 117 140 / 0.12);
  --bases-embed-border-color: rgb(23 27 36);
  --bases-group-heading-property-color: rgb(184 207 230 / 0.5);
  --bases-table-border-color: rgb(23 27 36);
  --bases-table-cell-background-active: rgb(36 41 54);
  --bases-table-cell-background-disabled: rgb(28 33 43);
  --bases-table-cell-background-selected: hsla(40, 100%, 70%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(99 117 153 / 0.15);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255 204 102);
  --bases-table-group-background: rgb(28 33 43);
  --bases-table-header-background: rgb(36 41 54);
  --bases-table-header-background-hover: rgb(105 117 140 / 0.12);
  --bases-table-header-color: rgb(184 207 230 / 0.5);
  --bases-table-summary-background: rgb(36 41 54);
  --bases-table-summary-background-hover: rgb(105 117 140 / 0.12);
  --blockquote-border-color: rgb(255 204 102);
  --blur-background: color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent) linear-gradient(rgb(105 117 140 / 0.12), color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent));
  --bodyFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(213 255 128);
  --bold-modifier: 100;
  --bold-weight: 500;
  --callout-bug: 242 135 121;
  --callout-default: 115 208 255;
  --callout-error: 242 135 121;
  --callout-example: 223 191 255;
  --callout-fail: 242 135 121;
  --callout-important: 149 230 203;
  --callout-info: 115 208 255;
  --callout-question: 255 173 102;
  --callout-quote: 204 202 194;
  --callout-success: 213 255 128;
  --callout-summary: 149 230 203;
  --callout-tip: 149 230 203;
  --callout-title-weight: 500;
  --callout-todo: 115 208 255;
  --callout-warning: 255 173 102;
  --canvas-background: rgb(36 41 54);
  --canvas-card-label-color: rgb(138 145 153 / 0.4);
  --canvas-color-1: 242 135 121;
  --canvas-color-2: 255 173 102;
  --canvas-color-3: 255 208 115;
  --canvas-color-4: 213 255 128;
  --canvas-color-5: 149 230 203;
  --canvas-color-6: 223 191 255;
  --canvas-dot-pattern: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 30%);
  --caret-color: rgb(128 191 255);
  --checkbox-border-color: rgb(138 145 153 / 0.4);
  --checkbox-border-color-hover: rgb(184 207 230 / 0.5);
  --checkbox-color: rgb(255 204 102);
  --checkbox-color-hover: rgb(255 204 102 / 0.8);
  --checkbox-marker-color: rgb(36 41 54);
  --checklist-done-color: rgb(184 207 230 / 0.5);
  --checklist-done-decoration: none;
  --code-background: rgb(28 33 43);
  --code-border-color: rgb(23 27 36);
  --code-bracket-background: rgb(105 117 140 / 0.12);
  --code-comment: rgb(184 207 230 / 0.5);
  --code-function: rgb(255 208 115);
  --code-important: rgb(255 223 179);
  --code-keyword: rgb(255 173 102);
  --code-normal: rgb(204 202 194);
  --code-operator: rgb(242 158 116);
  --code-property: rgb(115 208 255);
  --code-punctuation: rgb(204 202 194);
  --code-string: rgb(213 255 128);
  --code-tag: rgb(92 207 230);
  --code-value: rgb(223 191 255);
  --codeFont: var(--font-monospace, Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --collapse-icon-color: rgb(138 145 153 / 0.4);
  --collapse-icon-color-collapsed: rgb(255 204 102);
  --color-accent: hsl(40, 100%, 70%);
  --color-accent-1: hsl(37, 102%, 80.5%);
  --color-accent-2: hsl(35, 105%, 90.3%);
  --color-accent-hsl: 40, 100%, 70%;
  --color-base-00: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 0%);
  --color-base-05: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 5%);
  --color-base-10: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 10%);
  --color-base-100: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 100%);
  --color-base-20: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 20%);
  --color-base-25: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 25%);
  --color-base-30: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 30%);
  --color-base-35: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 35%);
  --color-base-40: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%);
  --color-base-50: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 50%);
  --color-base-60: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 60%);
  --color-base-70: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 70%);
  --color-blue: rgb(115 208 255);
  --color-blue-rgb: 115 208 255;
  --color-cyan: rgb(149 230 203);
  --color-cyan-rgb: 149 230 203;
  --color-green: rgb(213 255 128);
  --color-green-rgb: 213 255 128;
  --color-orange: rgb(255 173 102);
  --color-orange-rgb: 255 173 102;
  --color-pink: rgb(242 158 116);
  --color-pink-rgb: 242 158 116;
  --color-purple: rgb(223 191 255);
  --color-purple-rgb: 223 191 255;
  --color-red: rgb(242 135 121);
  --color-red-rgb: 242 135 121;
  --color-yellow: rgb(255 208 115);
  --color-yellow-rgb: 255 208 115;
  --common-accent: 255 204 102;
  --common-error: 255 102 102;
  --dark: var(--text-normal, rgb(204 202 194));
  --darkgray: var(--text-normal, rgb(204 202 194));
  --divider-color: rgb(23 27 36);
  --divider-color-hover: rgb(255 204 102);
  --dropdown-background: rgb(105 117 140 / 0.12);
  --dropdown-background-hover: rgb(99 117 153 / 0.15);
  --editor-bg: 36 41 54;
  --editor-fg: 204 202 194;
  --editor-guide-active: 138 145 153 / 0.35;
  --editor-guide-normal: 138 145 153 / 0.18;
  --editor-gutter-active: 138 145 153 / 0.8;
  --editor-gutter-normal: 138 145 153 / 0.4;
  --editor-line: 26 31 41;
  --editor-match-active: 105 83 128;
  --editor-match-inactive: 105 83 128 / 0.4;
  --editor-selection-active: 64 159 255 / 0.25;
  --editor-selection-inactive: 64 159 255 / 0.13;
  --embed-block-shadow-hover: 0 0 0 1px rgb(23 27 36), inset 0 0 0 1px rgb(23 27 36);
  --embed-border-start: 2px solid rgb(255 204 102);
  --file-header-background: rgb(36 41 54);
  --file-header-background-focused: rgb(36 41 54);
  --file-header-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --fill: rgb(31 36 48);
  --flair-background: rgb(105 117 140 / 0.12);
  --flair-color: rgb(204 202 194);
  --font-interface: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Heiti, Dotum;
  --font-mermaid: Inter, Heiti, Dotum;
  --font-monospace: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Monaspace Neon;
  --font-print: Lora, Songti, Batang, Arial';
  --font-text: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Lora, Songti, Batang;
  --footnote-divider-color: rgb(23 27 36);
  --footnote-id-color: rgb(184 207 230 / 0.5);
  --footnote-id-color-no-occurrences: rgb(138 145 153 / 0.4);
  --footnote-input-background-active: rgb(105 117 140 / 0.12);
  --graph-line: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 35%);
  --graph-node: rgb(184 207 230 / 0.5);
  --graph-node-attachment: rgb(255 208 115);
  --graph-node-focused: rgb(255 204 102);
  --graph-node-tag: rgb(213 255 128);
  --graph-node-unresolved: rgb(138 145 153 / 0.4);
  --graph-text: rgb(204 202 194);
  --gray: var(--text-muted, rgb(184 207 230 / 0.5));
  --h1-color: rgb(255 173 102);
  --h1-line-height: normal;
  --h1-size: 1.8em;
  --h1-weight: 500;
  --h2-color: rgb(255 208 115);
  --h2-line-height: normal;
  --h2-size: 1.6em;
  --h2-style: italic;
  --h2-weight: 500;
  --h3-color: rgb(255 223 179);
  --h3-line-height: normal;
  --h3-size: 1.4em;
  --h3-weight: 500;
  --h4-color: rgb(242 158 116);
  --h4-line-height: normal;
  --h4-size: 1.2em;
  --h4-weight: 500;
  --h5-color: rgb(242 158 116);
  --h5-line-height: normal;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 600;
  --h6-color: rgb(242 158 116);
  --h6-line-height: normal;
  --h6-size: 0.8em;
  --h6-weight: 700;
  --headerFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgb(138 145 153 / 0.4);
  --highlight: var(--text-highlight-bg, rgb(105 83 128));
  --hr-color: rgb(23 27 36);
  --icon-color: rgb(112 122 140);
  --icon-color-active: hsl(40, 100%, 70%);
  --icon-color-focused: hsl(37, 102%, 80.5%);
  --icon-color-hover: rgb(112 122 140 / 0.8);
  --indentation-guide-color: rgb(138 145 153 / 0.18);
  --indentation-guide-color-active: rgb(138 145 153 / 0.35);
  --inline-title-color: rgb(115 208 255);
  --inline-title-line-height: normal;
  --inline-title-size: 2em;
  --inline-title-style: italic;
  --inline-title-weight: bold;
  --input-date-separator: rgb(138 145 153 / 0.4);
  --input-placeholder-color: rgb(138 145 153 / 0.4);
  --interactive-accent: rgb(255 204 102);
  --interactive-accent-hover: rgb(255 204 102 / 0.8);
  --interactive-accent-hsl: 40, 100%, 70%;
  --interactive-hover: rgb(99 117 153 / 0.15);
  --interactive-normal: rgb(105 117 140 / 0.12);
  --italic-color: rgb(223 191 255);
  --light: var(--background-primary, rgb(36 41 54));
  --lightgray: var(--background-secondary, rgb(31 36 48));
  --link-color: rgb(128 191 255);
  --link-color-hover: rgb(128 191 255 / 0.8);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(128 191 255);
  --link-external-color-hover: rgb(128 191 255 / 0.8);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(128 191 255);
  --link-unresolved-decoration-color: hsla(40, 100%, 70%, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(242 158 116);
  --list-marker-color-collapsed: rgb(242 158 116 / 0.4);
  --list-marker-color-hover: rgb(242 158 116 / 0.8);
  --menu-background: rgb(31 36 48);
  --menu-border-color: rgb(105 117 140 / 0.12);
  --metadata-border-color: rgb(23 27 36);
  --metadata-divider-color: rgb(23 27 36);
  --metadata-input-background-active: rgb(105 117 140 / 0.12);
  --metadata-input-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(204 202 194);
  --metadata-label-background-active: rgb(105 117 140 / 0.12);
  --metadata-label-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(184 207 230 / 0.5);
  --metadata-label-text-color-hover: rgb(184 207 230 / 0.5);
  --metadata-property-background-active: rgb(105 117 140 / 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(99 117 153 / 0.15);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(105 117 140 / 0.12);
  --modal-background: rgb(36 41 54);
  --modal-border-color: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%);
  --nav-collapse-icon-color: rgb(138 145 153 / 0.4);
  --nav-collapse-icon-color-collapsed: rgb(138 145 153 / 0.4);
  --nav-heading-color: rgb(204 202 194);
  --nav-heading-color-collapsed: rgb(138 145 153 / 0.4);
  --nav-heading-color-collapsed-hover: rgb(184 207 230 / 0.5);
  --nav-heading-color-hover: rgb(204 202 194);
  --nav-indentation-guide-color: rgb(138 145 153 / 0.18);
  --nav-item-background-active: rgb(105 117 140 / 0.12);
  --nav-item-background-hover: rgb(105 117 140 / 0.12);
  --nav-item-background-selected: hsla(40, 100%, 70%, 0.15);
  --nav-item-color: rgb(184 207 230 / 0.5);
  --nav-item-color-active: rgb(204 202 194);
  --nav-item-color-highlighted: rgb(255 204 102);
  --nav-item-color-hover: rgb(204 202 194);
  --nav-item-color-selected: rgb(204 202 194);
  --nav-tag-color: rgb(138 145 153 / 0.4);
  --nav-tag-color-active: rgb(184 207 230 / 0.5);
  --nav-tag-color-hover: rgb(184 207 230 / 0.5);
  --pdf-background: rgb(36 41 54);
  --pdf-page-background: rgb(36 41 54);
  --pdf-shadow: 0 0 0 1px rgb(23 27 36);
  --pdf-sidebar-background: rgb(36 41 54);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(23 27 36);
  --pill-border-color: rgb(23 27 36);
  --pill-border-color-hover: rgb(105 117 140 / 0.12);
  --pill-color: rgb(184 207 230 / 0.5);
  --pill-color-hover: rgb(204 202 194);
  --pill-color-remove: rgb(138 145 153 / 0.4);
  --pill-color-remove-hover: rgb(255 204 102);
  --prompt-background: rgb(36 41 54);
  --prompt-border-color: color-mix(in srgb, rgb(31 36 48), rgb(112 122 140) 40%);
  --raised-background: color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent) linear-gradient(rgb(105 117 140 / 0.12), color-mix(in srgb, rgb(105 117 140 / 0.12) 65%, transparent));
  --ribbon-background: rgb(31 36 48);
  --ribbon-background-collapsed: rgb(36 41 54);
  --search-clear-button-color: rgb(184 207 230 / 0.5);
  --search-icon-color: rgb(184 207 230 / 0.5);
  --search-result-background: rgb(36 41 54);
  --secondary: var(--text-accent, rgb(255 204 102));
  --setting-group-heading-color: rgb(204 202 194);
  --setting-items-background: rgb(28 33 43);
  --setting-items-border-color: rgb(23 27 36);
  --shiki-active-tab-border-color: rgb(184 207 230 / 0.5);
  --shiki-code-background: rgb(28 33 43);
  --shiki-code-comment: rgb(138 145 153 / 0.4);
  --shiki-code-function: rgb(213 255 128);
  --shiki-code-important: rgb(255 173 102);
  --shiki-code-keyword: rgb(242 158 116);
  --shiki-code-normal: rgb(184 207 230 / 0.5);
  --shiki-code-property: rgb(149 230 203);
  --shiki-code-punctuation: rgb(184 207 230 / 0.5);
  --shiki-code-string: rgb(255 208 115);
  --shiki-code-value: rgb(223 191 255);
  --shiki-gutter-border-color: rgb(23 27 36);
  --shiki-gutter-text-color: rgb(138 145 153 / 0.4);
  --shiki-gutter-text-color-highlight: rgb(184 207 230 / 0.5);
  --shiki-highlight-green: rgba(213 255 128, .5);
  --shiki-highlight-green-background: rgba(213 255 128, .1);
  --shiki-highlight-neutral: rgb(184 207 230 / 0.5);
  --shiki-highlight-red: rgba(242 135 121, .5);
  --shiki-highlight-red-background: rgba(242 135 121, .1);
  --shiki-terminal-dots-color: rgb(138 145 153 / 0.4);
  --shiki-tooltip-background: rgb(128 191 255);
  --slider-thumb-border-color: rgb(105 117 140 / 0.12);
  --slider-track-background: rgb(23 27 36);
  --status-bar-background: rgb(31 36 48);
  --status-bar-border-color: rgb(23 27 36);
  --status-bar-text-color: rgb(184 207 230 / 0.5);
  --suggestion-background: rgb(36 41 54);
  --sync-avatar-color-1: rgb(242 135 121);
  --sync-avatar-color-2: rgb(255 173 102);
  --sync-avatar-color-3: rgb(255 208 115);
  --sync-avatar-color-4: rgb(213 255 128);
  --sync-avatar-color-5: rgb(149 230 203);
  --sync-avatar-color-6: rgb(115 208 255);
  --sync-avatar-color-7: rgb(223 191 255);
  --sync-avatar-color-8: rgb(242 158 116);
  --syntax-comment: 184 207 230 / 0.5;
  --syntax-constant: 223 191 255;
  --syntax-entity: 115 208 255;
  --syntax-func: 255 208 115;
  --syntax-keyword: 255 173 102;
  --syntax-markup: 242 135 121;
  --syntax-operator: 242 158 116;
  --syntax-regexp: 149 230 203;
  --syntax-special: 255 223 179;
  --syntax-string: 213 255 128;
  --syntax-tag: 92 207 230;
  --tab-background-active: rgb(36 41 54);
  --tab-container-background: rgb(31 36 48);
  --tab-divider-color: rgb(105 117 140 / 0.12);
  --tab-outline-color: rgb(23 27 36);
  --tab-switcher-background: rgb(31 36 48);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31 36 48), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 100%, 70%);
  --tab-text-color: rgb(138 145 153 / 0.4);
  --tab-text-color-active: rgb(184 207 230 / 0.5);
  --tab-text-color-focused: rgb(184 207 230 / 0.5);
  --tab-text-color-focused-active: rgb(184 207 230 / 0.5);
  --tab-text-color-focused-active-current: rgb(204 202 194);
  --tab-text-color-focused-highlighted: rgb(255 204 102);
  --table-add-button-border-color: rgb(23 27 36);
  --table-border-color: rgb(23 27 36);
  --table-drag-handle-background-active: rgb(255 204 102);
  --table-drag-handle-color: rgb(138 145 153 / 0.4);
  --table-drag-handle-color-active: rgb(31 36 48);
  --table-header-border-color: rgb(23 27 36);
  --table-header-color: rgb(204 202 194);
  --table-header-weight: 500;
  --table-selection: hsla(40, 100%, 70%, 0.1);
  --table-selection-border-color: rgb(255 204 102);
  --tag-background: rgb(92 207 230 / 0.2);
  --tag-background-hover: rgb(92 207 230 / 0.4);
  --tag-border-color: hsla(40, 100%, 70%, 0.15);
  --tag-border-color-hover: hsla(40, 100%, 70%, 0.15);
  --tag-color: rgb(92 207 230);
  --tag-color-hover: rgb(92 207 230 / 0.8);
  --tertiary: var(--text-accent-hover, rgb(255 204 102 / 0.8));
  --text: rgb(112 122 140);
  --text-accent: rgb(255 204 102);
  --text-accent-hover: rgb(255 204 102 / 0.8);
  --text-error: rgb(255 102 102);
  --text-faint: rgb(138 145 153 / 0.4);
  --text-highlight-bg: rgb(105 83 128);
  --text-muted: rgb(184 207 230 / 0.5);
  --text-normal: rgb(204 202 194);
  --text-on-accent: rgb(31 36 48);
  --text-on-accent-inverted: rgb(112 122 140);
  --text-selection: rgb(64 159 255 / 0.25);
  --text-success: rgb(135 217 108);
  --text-warning: rgb(255 204 102);
  --textHighlight: var(--text-highlight-bg, rgb(105 83 128));
  --titleFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(31 36 48);
  --titlebar-background-focused: rgb(28 33 43);
  --titlebar-border-color: rgb(23 27 36);
  --titlebar-text-color: rgb(184 207 230 / 0.5);
  --titlebar-text-color-focused: rgb(204 202 194);
  --ui-bg: 31 36 48;
  --ui-fg: 112 122 140;
  --ui-line: 23 27 36;
  --ui-panel-bg: 28 33 43;
  --ui-panel-shadow: 18 21 28 / 0.7;
  --ui-selection-active: 99 117 153 / 0.15;
  --ui-selection-normal: 105 117 140 / 0.12;
  --vault-profile-color: rgb(204 202 194);
  --vault-profile-color-hover: rgb(204 202 194);
  --vcs-added: 135 217 108;
  --vcs-modified: 128 191 255;
  --vcs-removed: 242 121 131;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 36, 48);
  border-left-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration-color: rgb(223, 191, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration-color: rgb(223, 191, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(135, 217, 108, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body del {
  background-color: rgba(242, 121, 131, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration: line-through from-font wavy rgba(242, 121, 131, 0.8);
  text-decoration-color: rgba(242, 121, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 204, 102);
  border-color: rgb(255, 204, 102);
}

html[saved-theme="dark"] body p {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(184, 207, 230, 0.5) none 0px;
  text-decoration-color: rgba(184, 207, 230, 0.5);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration-color: rgb(128, 191, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration-color: rgb(128, 191, 255);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration: rgba(255, 204, 102, 0.3);
  text-decoration-color: rgba(255, 204, 102, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-weight: 500;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(242, 135, 121);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 33, 43);
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
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 173, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(255, 173, 102);
  border-radius: 4px;
  border-right-color: rgb(255, 173, 102);
  border-top-color: rgb(255, 173, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(184, 207, 230, 0.5);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(184, 207, 230, 0.5);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 41, 54);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 173, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.280392 0.309804 0.368627);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(149, 230, 203);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 135, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 135, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 135, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 135, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 208, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(223, 191, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 135, 121);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 255, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 255, 128);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 149 230 203;
  background: rgba(149, 230, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 242 135 121;
  background: rgba(242, 135, 121, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 242 135 121;
  background: rgba(242, 135, 121, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 223 191 255;
  background: rgba(223, 191, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(223, 191, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 242 135 121;
  background: rgba(242, 135, 121, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 115 208 255;
  background: rgba(115, 208, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 115 208 255;
  background: rgba(115, 208, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255 173 102;
  background: rgba(255, 173, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 204 202 194;
  background: rgba(204, 202, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(204, 202, 194, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 213 255 128;
  background: rgba(213, 255, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(213, 255, 128, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 149 230 203;
  background: rgba(149, 230, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 115 208 255;
  background: rgba(115, 208, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255 173 102;
  background: rgba(255, 173, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
  color: rgb(115, 208, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(115, 208, 255);
  font-weight: 500;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(204, 202, 194);
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
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(36, 41, 54);
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 36, 48);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 207, 230, 0.2);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(92, 207, 230);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 173, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(115, 208, 255);
  font-size: 32px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 208, 115);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(115, 208, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 223, 179);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(138, 145, 153, 0.18);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 202, 194);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(31, 36, 48);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(184, 207, 230, 0.5);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(112, 122, 140);
  stroke: rgb(112, 122, 140);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 36, 48);
  border-color: rgb(204, 202, 194);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-weight: 500;
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(23, 27, 36);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(92, 207, 230, 0.2);
  color: rgb(92, 207, 230);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(184, 207, 230, 0.5);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(31, 36, 48);
  border-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(28, 33, 43);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(204, 202, 194);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(31, 36, 48);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 202, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 202, 194);
  font-size: 12.8px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(92, 207, 230, 0.2);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  color: rgb(92, 207, 230);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 35;
  --accent-l: 60%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(86 114 143 / 0.12);
  --background-modifier-border: rgb(107 125 143 / 0.12);
  --background-modifier-border-focus: rgb(86 114 143 / 0.12);
  --background-modifier-border-hover: rgb(107 125 143 / 0.12);
  --background-modifier-error: rgb(255 115 131);
  --background-modifier-error-hover: rgb(255 115 131 / 0.8);
  --background-modifier-error-rgb: 255 115 131;
  --background-modifier-form-field: rgb(107 125 143 / 0.12);
  --background-modifier-form-field-hover: rgb(107 125 143 / 0.12);
  --background-modifier-hover: rgb(107 125 143 / 0.12);
  --background-modifier-message: rgb(71 138 204);
  --background-modifier-success: rgb(108 191 67);
  --background-modifier-success-rgb: 108 191 67;
  --background-primary: rgb(252 252 252);
  --background-primary-alt: rgb(243 244 245);
  --background-secondary: rgb(248 249 250);
  --background-secondary-alt: rgb(243 244 245);
  --bases-cards-background: rgb(252 252 252);
  --bases-cards-cover-background: rgb(243 244 245);
  --bases-cards-shadow: 0 0 0 1px rgb(107 125 143 / 0.12);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12);
  --bases-embed-border-color: rgb(107 125 143 / 0.12);
  --bases-group-heading-property-color: rgb(120 123 128 / 0.6);
  --bases-table-border-color: rgb(107 125 143 / 0.12);
  --bases-table-cell-background-active: rgb(252 252 252);
  --bases-table-cell-background-disabled: rgb(243 244 245);
  --bases-table-cell-background-selected: hsla(35, 100%, 60%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(86 114 143 / 0.12);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255 170 51);
  --bases-table-group-background: rgb(243 244 245);
  --bases-table-header-background: rgb(252 252 252);
  --bases-table-header-background-hover: rgb(107 125 143 / 0.12);
  --bases-table-header-color: rgb(120 123 128 / 0.6);
  --bases-table-summary-background: rgb(252 252 252);
  --bases-table-summary-background-hover: rgb(107 125 143 / 0.12);
  --blockquote-border-color: rgb(255 170 51);
  --blur-background: color-mix(in srgb, rgb(252 252 252) 65%, transparent) linear-gradient(rgb(252 252 252), color-mix(in srgb, rgb(252 252 252) 65%, transparent));
  --bodyFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(134 179 0);
  --bold-modifier: 100;
  --bold-weight: 500;
  --callout-bug: 240 113 113;
  --callout-default: 57 158 230;
  --callout-error: 240 113 113;
  --callout-example: 163 122 204;
  --callout-fail: 240 113 113;
  --callout-important: 76 191 153;
  --callout-info: 57 158 230;
  --callout-question: 250 141 62;
  --callout-quote: 92 97 102;
  --callout-success: 134 179 0;
  --callout-summary: 76 191 153;
  --callout-tip: 76 191 153;
  --callout-title-weight: 500;
  --callout-todo: 57 158 230;
  --callout-warning: 250 141 62;
  --canvas-background: rgb(252 252 252);
  --canvas-card-label-color: rgb(138 145 153 / 0.4);
  --canvas-color-1: 240 113 113;
  --canvas-color-2: 250 141 62;
  --canvas-color-3: 242 174 73;
  --canvas-color-4: 134 179 0;
  --canvas-color-5: 76 191 153;
  --canvas-color-6: 163 122 204;
  --canvas-dot-pattern: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 30%);
  --caret-color: rgb(71 138 204);
  --checkbox-border-color: rgb(138 145 153 / 0.4);
  --checkbox-border-color-hover: rgb(120 123 128 / 0.6);
  --checkbox-color: rgb(255 170 51);
  --checkbox-color-hover: rgb(255 170 51 / 0.8);
  --checkbox-marker-color: rgb(252 252 252);
  --checklist-done-color: rgb(120 123 128 / 0.6);
  --checklist-done-decoration: none;
  --code-background: rgb(243 244 245);
  --code-border-color: rgb(107 125 143 / 0.12);
  --code-bracket-background: rgb(107 125 143 / 0.12);
  --code-comment: rgb(120 123 128 / 0.6);
  --code-function: rgb(242 174 73);
  --code-important: rgb(230 186 126);
  --code-keyword: rgb(250 141 62);
  --code-normal: rgb(92 97 102);
  --code-operator: rgb(237 147 102);
  --code-property: rgb(57 158 230);
  --code-punctuation: rgb(92 97 102);
  --code-string: rgb(134 179 0);
  --code-tag: rgb(85 180 212);
  --code-value: rgb(163 122 204);
  --codeFont: var(--font-monospace, Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace);
  --collapse-icon-color: rgb(138 145 153 / 0.4);
  --collapse-icon-color-collapsed: rgb(255 170 51);
  --color-accent: hsl(35, 100%, 60%);
  --color-accent-1: hsl(34, 101%, 64.5%);
  --color-accent-2: hsl(32, 102%, 69%);
  --color-accent-hsl: 35, 100%, 60%;
  --color-base-00: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 0%);
  --color-base-05: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 5%);
  --color-base-10: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 10%);
  --color-base-100: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 100%);
  --color-base-20: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 20%);
  --color-base-25: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 25%);
  --color-base-30: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 30%);
  --color-base-35: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 35%);
  --color-base-40: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%);
  --color-base-50: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 50%);
  --color-base-60: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 60%);
  --color-base-70: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 70%);
  --color-blue: rgb(57 158 230);
  --color-blue-rgb: 57 158 230;
  --color-cyan: rgb(76 191 153);
  --color-cyan-rgb: 76 191 153;
  --color-green: rgb(134 179 0);
  --color-green-rgb: 134 179 0;
  --color-orange: rgb(250 141 62);
  --color-orange-rgb: 250 141 62;
  --color-pink: rgb(237 147 102);
  --color-pink-rgb: 237 147 102;
  --color-purple: rgb(163 122 204);
  --color-purple-rgb: 163 122 204;
  --color-red: rgb(240 113 113);
  --color-red-rgb: 240 113 113;
  --color-yellow: rgb(242 174 73);
  --color-yellow-rgb: 242 174 73;
  --common-accent: 255 170 51;
  --common-error: 230 80 80;
  --dark: var(--text-normal, rgb(92 97 102));
  --darkgray: var(--text-normal, rgb(92 97 102));
  --divider-color: rgb(107 125 143 / 0.12);
  --divider-color-hover: rgb(255 170 51);
  --dropdown-background: rgb(107 125 143 / 0.12);
  --dropdown-background-hover: rgb(86 114 143 / 0.12);
  --editor-bg: 252 252 252;
  --editor-fg: 92 97 102;
  --editor-guide-active: 138 145 153 / 0.35;
  --editor-guide-normal: 138 145 153 / 0.18;
  --editor-gutter-active: 138 145 153 / 0.8;
  --editor-gutter-normal: 138 145 153 / 0.4;
  --editor-line: 138 145 153 / 0.1;
  --editor-match-active: 159 64 255 / 0.17;
  --editor-match-inactive: 159 64 255 / 0.8;
  --editor-selection-active: 3 91 214 / 0.15;
  --editor-selection-inactive: 3 91 214 / 0.07;
  --embed-block-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12), inset 0 0 0 1px rgb(107 125 143 / 0.12);
  --embed-border-start: 2px solid rgb(255 170 51);
  --file-header-background: rgb(252 252 252);
  --file-header-background-focused: rgb(252 252 252);
  --file-header-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --fill: rgb(248 249 250);
  --flair-background: rgb(107 125 143 / 0.12);
  --flair-color: rgb(92 97 102);
  --font-interface: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Heiti, Dotum;
  --font-mermaid: Inter, Heiti, Dotum;
  --font-monospace: Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Monaspace Neon;
  --font-print: Lora, Songti, Batang, Arial';
  --font-text: Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Lora, Songti, Batang;
  --footnote-divider-color: rgb(107 125 143 / 0.12);
  --footnote-id-color: rgb(120 123 128 / 0.6);
  --footnote-id-color-no-occurrences: rgb(138 145 153 / 0.4);
  --footnote-input-background-active: rgb(107 125 143 / 0.12);
  --graph-line: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 35%);
  --graph-node: rgb(120 123 128 / 0.6);
  --graph-node-attachment: rgb(242 174 73);
  --graph-node-focused: rgb(255 170 51);
  --graph-node-tag: rgb(134 179 0);
  --graph-node-unresolved: rgb(138 145 153 / 0.4);
  --graph-text: rgb(92 97 102);
  --gray: var(--text-muted, rgb(120 123 128 / 0.6));
  --h1-color: rgb(250 141 62);
  --h1-line-height: normal;
  --h1-size: 1.8em;
  --h1-weight: 500;
  --h2-color: rgb(242 174 73);
  --h2-line-height: normal;
  --h2-size: 1.6em;
  --h2-style: italic;
  --h2-weight: 500;
  --h3-color: rgb(230 186 126);
  --h3-line-height: normal;
  --h3-size: 1.4em;
  --h3-weight: 500;
  --h4-color: rgb(237 147 102);
  --h4-line-height: normal;
  --h4-size: 1.2em;
  --h4-weight: 500;
  --h5-color: rgb(237 147 102);
  --h5-line-height: normal;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 600;
  --h6-color: rgb(237 147 102);
  --h6-line-height: normal;
  --h6-size: 0.8em;
  --h6-weight: 700;
  --headerFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgb(138 145 153 / 0.4);
  --highlight: var(--text-highlight-bg, rgb(159 64 255 / 0.17));
  --hr-color: rgb(107 125 143 / 0.12);
  --icon-color: rgb(138 145 153);
  --icon-color-active: hsl(35, 100%, 60%);
  --icon-color-focused: hsl(34, 101%, 64.5%);
  --icon-color-hover: rgb(138 145 153 / 0.8);
  --indentation-guide-color: rgb(138 145 153 / 0.18);
  --indentation-guide-color-active: rgb(138 145 153 / 0.35);
  --inline-title-color: rgb(57 158 230);
  --inline-title-line-height: normal;
  --inline-title-size: 2em;
  --inline-title-style: italic;
  --inline-title-weight: bold;
  --input-date-separator: rgb(138 145 153 / 0.4);
  --input-placeholder-color: rgb(138 145 153 / 0.4);
  --interactive-accent: rgb(255 170 51);
  --interactive-accent-hover: rgb(255 170 51 / 0.8);
  --interactive-accent-hsl: 35, 100%, 60%;
  --interactive-hover: rgb(86 114 143 / 0.12);
  --interactive-normal: rgb(107 125 143 / 0.12);
  --italic-color: rgb(163 122 204);
  --light: var(--background-primary, rgb(252 252 252));
  --lightgray: var(--background-secondary, rgb(248 249 250));
  --link-color: rgb(71 138 204);
  --link-color-hover: rgb(71 138 204 / 0.8);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(71 138 204);
  --link-external-color-hover: rgb(71 138 204 / 0.8);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(71 138 204);
  --link-unresolved-decoration-color: hsla(35, 100%, 60%, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(237 147 102);
  --list-marker-color-collapsed: rgb(237 147 102 / 0.4);
  --list-marker-color-hover: rgb(237 147 102 / 0.8);
  --menu-background: rgb(248 249 250);
  --menu-border-color: rgb(107 125 143 / 0.12);
  --metadata-border-color: rgb(107 125 143 / 0.12);
  --metadata-divider-color: rgb(107 125 143 / 0.12);
  --metadata-input-background-active: rgb(107 125 143 / 0.12);
  --metadata-input-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(92 97 102);
  --metadata-label-background-active: rgb(107 125 143 / 0.12);
  --metadata-label-font: Inter, Heiti, Dotum, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(120 123 128 / 0.6);
  --metadata-label-text-color-hover: rgb(120 123 128 / 0.6);
  --metadata-property-background-active: rgb(107 125 143 / 0.12);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(86 114 143 / 0.12);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(107 125 143 / 0.12);
  --modal-background: rgb(252 252 252);
  --modal-border-color: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%);
  --nav-collapse-icon-color: rgb(138 145 153 / 0.4);
  --nav-collapse-icon-color-collapsed: rgb(138 145 153 / 0.4);
  --nav-heading-color: rgb(92 97 102);
  --nav-heading-color-collapsed: rgb(138 145 153 / 0.4);
  --nav-heading-color-collapsed-hover: rgb(120 123 128 / 0.6);
  --nav-heading-color-hover: rgb(92 97 102);
  --nav-indentation-guide-color: rgb(138 145 153 / 0.18);
  --nav-item-background-active: rgb(107 125 143 / 0.12);
  --nav-item-background-hover: rgb(107 125 143 / 0.12);
  --nav-item-background-selected: hsla(35, 100%, 60%, 0.15);
  --nav-item-color: rgb(120 123 128 / 0.6);
  --nav-item-color-active: rgb(92 97 102);
  --nav-item-color-highlighted: rgb(255 170 51);
  --nav-item-color-hover: rgb(92 97 102);
  --nav-item-color-selected: rgb(92 97 102);
  --nav-tag-color: rgb(138 145 153 / 0.4);
  --nav-tag-color-active: rgb(120 123 128 / 0.6);
  --nav-tag-color-hover: rgb(120 123 128 / 0.6);
  --pdf-background: rgb(252 252 252);
  --pdf-page-background: rgb(252 252 252);
  --pdf-sidebar-background: rgb(252 252 252);
  --pill-border-color: rgb(107 125 143 / 0.12);
  --pill-border-color-hover: rgb(107 125 143 / 0.12);
  --pill-color: rgb(120 123 128 / 0.6);
  --pill-color-hover: rgb(92 97 102);
  --pill-color-remove: rgb(138 145 153 / 0.4);
  --pill-color-remove-hover: rgb(255 170 51);
  --prompt-background: rgb(252 252 252);
  --prompt-border-color: color-mix(in srgb, rgb(248 249 250), rgb(138 145 153) 40%);
  --raised-background: color-mix(in srgb, rgb(252 252 252) 65%, transparent) linear-gradient(rgb(252 252 252), color-mix(in srgb, rgb(252 252 252) 65%, transparent));
  --ribbon-background: rgb(248 249 250);
  --ribbon-background-collapsed: rgb(252 252 252);
  --search-clear-button-color: rgb(120 123 128 / 0.6);
  --search-icon-color: rgb(120 123 128 / 0.6);
  --search-result-background: rgb(252 252 252);
  --secondary: var(--text-accent, rgb(255 170 51));
  --setting-group-heading-color: rgb(92 97 102);
  --setting-items-background: rgb(243 244 245);
  --setting-items-border-color: rgb(107 125 143 / 0.12);
  --shiki-active-tab-border-color: rgb(120 123 128 / 0.6);
  --shiki-code-background: rgb(243 244 245);
  --shiki-code-comment: rgb(138 145 153 / 0.4);
  --shiki-code-function: rgb(134 179 0);
  --shiki-code-important: rgb(250 141 62);
  --shiki-code-keyword: rgb(237 147 102);
  --shiki-code-normal: rgb(120 123 128 / 0.6);
  --shiki-code-property: rgb(76 191 153);
  --shiki-code-punctuation: rgb(120 123 128 / 0.6);
  --shiki-code-string: rgb(242 174 73);
  --shiki-code-value: rgb(163 122 204);
  --shiki-gutter-border-color: rgb(107 125 143 / 0.12);
  --shiki-gutter-text-color: rgb(138 145 153 / 0.4);
  --shiki-gutter-text-color-highlight: rgb(120 123 128 / 0.6);
  --shiki-highlight-green: rgba(134 179 0, .5);
  --shiki-highlight-green-background: rgba(134 179 0, .1);
  --shiki-highlight-neutral: rgb(120 123 128 / 0.6);
  --shiki-highlight-red: rgba(240 113 113, .5);
  --shiki-highlight-red-background: rgba(240 113 113, .1);
  --shiki-terminal-dots-color: rgb(138 145 153 / 0.4);
  --shiki-tooltip-background: rgb(71 138 204);
  --slider-thumb-border-color: rgb(107 125 143 / 0.12);
  --slider-track-background: rgb(107 125 143 / 0.12);
  --status-bar-background: rgb(248 249 250);
  --status-bar-border-color: rgb(107 125 143 / 0.12);
  --status-bar-text-color: rgb(120 123 128 / 0.6);
  --suggestion-background: rgb(252 252 252);
  --sync-avatar-color-1: rgb(240 113 113);
  --sync-avatar-color-2: rgb(250 141 62);
  --sync-avatar-color-3: rgb(242 174 73);
  --sync-avatar-color-4: rgb(134 179 0);
  --sync-avatar-color-5: rgb(76 191 153);
  --sync-avatar-color-6: rgb(57 158 230);
  --sync-avatar-color-7: rgb(163 122 204);
  --sync-avatar-color-8: rgb(237 147 102);
  --syntax-comment: 120 123 128 / 0.6;
  --syntax-constant: 163 122 204;
  --syntax-entity: 57 158 230;
  --syntax-func: 242 174 73;
  --syntax-keyword: 250 141 62;
  --syntax-markup: 240 113 113;
  --syntax-operator: 237 147 102;
  --syntax-regexp: 76 191 153;
  --syntax-special: 230 186 126;
  --syntax-string: 134 179 0;
  --syntax-tag: 85 180 212;
  --tab-background-active: rgb(252 252 252);
  --tab-container-background: rgb(248 249 250);
  --tab-divider-color: rgb(107 125 143 / 0.12);
  --tab-outline-color: rgb(107 125 143 / 0.12);
  --tab-switcher-background: rgb(248 249 250);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(248 249 250), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(35, 100%, 60%);
  --tab-text-color: rgb(138 145 153 / 0.4);
  --tab-text-color-active: rgb(120 123 128 / 0.6);
  --tab-text-color-focused: rgb(120 123 128 / 0.6);
  --tab-text-color-focused-active: rgb(120 123 128 / 0.6);
  --tab-text-color-focused-active-current: rgb(92 97 102);
  --tab-text-color-focused-highlighted: rgb(255 170 51);
  --table-add-button-border-color: rgb(107 125 143 / 0.12);
  --table-border-color: rgb(107 125 143 / 0.12);
  --table-drag-handle-background-active: rgb(255 170 51);
  --table-drag-handle-color: rgb(138 145 153 / 0.4);
  --table-drag-handle-color-active: rgb(248 249 250);
  --table-header-border-color: rgb(107 125 143 / 0.12);
  --table-header-color: rgb(92 97 102);
  --table-header-weight: 500;
  --table-selection: hsla(35, 100%, 60%, 0.1);
  --table-selection-border-color: rgb(255 170 51);
  --tag-background: rgb(85 180 212 / 0.2);
  --tag-background-hover: rgb(85 180 212 / 0.4);
  --tag-border-color: hsla(35, 100%, 60%, 0.15);
  --tag-border-color-hover: hsla(35, 100%, 60%, 0.15);
  --tag-color: rgb(85 180 212);
  --tag-color-hover: rgb(85 180 212 / 0.8);
  --tertiary: var(--text-accent-hover, rgb(255 170 51 / 0.8));
  --text: rgb(138 145 153);
  --text-accent: rgb(255 170 51);
  --text-accent-hover: rgb(255 170 51 / 0.8);
  --text-error: rgb(230 80 80);
  --text-faint: rgb(138 145 153 / 0.4);
  --text-highlight-bg: rgb(159 64 255 / 0.17);
  --text-muted: rgb(120 123 128 / 0.6);
  --text-normal: rgb(92 97 102);
  --text-on-accent: rgb(248 249 250);
  --text-on-accent-inverted: rgb(138 145 153);
  --text-selection: rgb(3 91 214 / 0.15);
  --text-success: rgb(108 191 67);
  --text-warning: rgb(255 170 51);
  --textHighlight: var(--text-highlight-bg, rgb(159 64 255 / 0.17));
  --titleFont: var(--font-text, Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(248 249 250);
  --titlebar-background-focused: rgb(243 244 245);
  --titlebar-border-color: rgb(107 125 143 / 0.12);
  --titlebar-text-color: rgb(120 123 128 / 0.6);
  --titlebar-text-color-focused: rgb(92 97 102);
  --ui-bg: 248 249 250;
  --ui-fg: 138 145 153;
  --ui-line: 107 125 143 / 0.12;
  --ui-panel-bg: 243 244 245;
  --ui-panel-shadow: 0 0 0 / 0.15;
  --ui-selection-active: 86 114 143 / 0.12;
  --ui-selection-normal: 107 125 143 / 0.12;
  --vault-profile-color: rgb(92 97 102);
  --vault-profile-color-hover: rgb(92 97 102);
  --vcs-added: 108 191 67;
  --vcs-modified: 71 138 204;
  --vcs-removed: 255 115 131;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 249, 250);
  border-left-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration-color: rgb(163, 122, 204);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration-color: rgb(163, 122, 204);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(108, 191, 67, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body del {
  background-color: rgba(255, 115, 131, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration: line-through from-font wavy rgba(255, 115, 131, 0.8);
  text-decoration-color: rgba(255, 115, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 170, 51);
  border-color: rgb(255, 170, 51);
}

html[saved-theme="light"] body p {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(120, 123, 128, 0.6) none 0px;
  text-decoration-color: rgba(120, 123, 128, 0.6);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration-color: rgb(71, 138, 204);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration-color: rgb(71, 138, 204);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration: rgba(255, 170, 51, 0.3);
  text-decoration-color: rgba(255, 170, 51, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ol > li {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body table {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-weight: 500;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(240, 113, 113);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(243, 244, 245);
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
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body figcaption {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(250, 141, 62);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(250, 141, 62);
  border-radius: 4px;
  border-right-color: rgb(250, 141, 62);
  border-top-color: rgb(250, 141, 62);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(255, 170, 51);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(120, 123, 128, 0.6);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(120, 123, 128, 0.6);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 252, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 141, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.756863 0.772549 0.790196);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(76, 191, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 158, 230);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 113, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 113, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 113, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 113, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 158, 230);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 174, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 122, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(240, 113, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 179, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 179, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 76 191 153;
  background: rgba(76, 191, 153, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 240 113 113;
  background: rgba(240, 113, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 240 113 113;
  background: rgba(240, 113, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 163 122 204;
  background: rgba(163, 122, 204, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(163, 122, 204, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 240 113 113;
  background: rgba(240, 113, 113, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 57 158 230;
  background: rgba(57, 158, 230, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 57 158 230;
  background: rgba(57, 158, 230, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 250 141 62;
  background: rgba(250, 141, 62, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 92 97 102;
  background: rgba(92, 97, 102, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(92, 97, 102, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 134 179 0;
  background: rgba(134, 179, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(134, 179, 0, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 76 191 153;
  background: rgba(76, 191, 153, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 57 158 230;
  background: rgba(57, 158, 230, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 250 141 62;
  background: rgba(250, 141, 62, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
  color: rgb(57, 158, 230);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(57, 158, 230);
  font-weight: 500;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(92, 97, 102);
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
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 249, 250);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(85, 180, 212, 0.2);
  border-bottom-color: rgba(255, 170, 51, 0.15);
  border-left-color: rgba(255, 170, 51, 0.15);
  border-right-color: rgba(255, 170, 51, 0.15);
  border-top-color: rgba(255, 170, 51, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(85, 180, 212);
}

html[saved-theme="light"] body h1 {
  color: rgb(250, 141, 62);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(57, 158, 230);
  font-size: 32px;
}

html[saved-theme="light"] body h2 {
  color: rgb(242, 174, 73);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(57, 158, 230);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(230, 186, 126);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(138, 145, 153, 0.18);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 97, 102);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(120, 123, 128, 0.6);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 145, 153);
  stroke: rgb(138, 145, 153);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(252, 252, 252);
  border-color: rgb(92, 97, 102);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-weight: 500;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(107, 125, 143, 0.12);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(85, 180, 212, 0.2);
  color: rgb(85, 180, 212);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(120, 123, 128, 0.6);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(248, 249, 250);
  border-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(243, 244, 245);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(92, 97, 102);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(248, 249, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

html[saved-theme="light"] body sub {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body summary {
  color: rgb(92, 97, 102);
}

html[saved-theme="light"] body sup {
  color: rgb(92, 97, 102);
  font-size: 12.8px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(85, 180, 212, 0.2);
  border-bottom-color: rgba(255, 170, 51, 0.15);
  border-left-color: rgba(255, 170, 51, 0.15);
  border-right-color: rgba(255, 170, 51, 0.15);
  border-top-color: rgba(255, 170, 51, 0.15);
  color: rgb(85, 180, 212);
}`,
  },
};
