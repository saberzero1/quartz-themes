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
  --bases-table-cell-background-selected: rgba(255, 204, 102, 0.1);
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
  --bodyFont: var(--font-text);
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
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(138 145 153 / 0.4);
  --collapse-icon-color-collapsed: rgb(255 204 102);
  --color-accent: rgb(255, 204, 102);
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
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
  --file-header-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --fill: rgb(31 36 48);
  --flair-background: rgb(105 117 140 / 0.12);
  --flair-color: rgb(204 202 194);
  --font-interface: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Heiti, Dotum;
  --font-mermaid: Inter, Heiti, Dotum;
  --font-monospace: '??', Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Monaspace Neon;
  --font-print: '??', '??', Lora, Songti, Batang, 'Arial';
  --font-text: '??', Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --gray: var(--text-muted);
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
  --headerFont: var(--font-text);
  --heading-formatting: rgb(138 145 153 / 0.4);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(23 27 36);
  --icon-color: rgb(112 122 140);
  --icon-color-active: rgb(255, 204, 102);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(128 191 255);
  --link-color-hover: rgb(128 191 255 / 0.8);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(128 191 255);
  --link-external-color-hover: rgb(128 191 255 / 0.8);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(128 191 255);
  --link-unresolved-decoration-color: rgba(255, 204, 102, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(242 158 116);
  --list-marker-color-collapsed: rgb(242 158 116 / 0.4);
  --list-marker-color-hover: rgb(242 158 116 / 0.8);
  --menu-background: rgb(31 36 48);
  --menu-border-color: rgb(105 117 140 / 0.12);
  --metadata-border-color: rgb(23 27 36);
  --metadata-divider-color: rgb(23 27 36);
  --metadata-input-background-active: rgb(105 117 140 / 0.12);
  --metadata-input-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(204 202 194);
  --metadata-label-background-active: rgb(105 117 140 / 0.12);
  --metadata-label-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(255, 204, 102, 0.15);
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
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(204 202 194);
  --setting-items-background: rgb(28 33 43);
  --setting-items-border-color: rgb(23 27 36);
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 204, 102);
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
  --table-selection: rgba(255, 204, 102, 0.1);
  --table-selection-border-color: rgb(255 204 102);
  --tag-background: rgb(92 207 230 / 0.2);
  --tag-background-hover: rgb(92 207 230 / 0.4);
  --tag-border-color: rgba(255, 204, 102, 0.15);
  --tag-border-color-hover: rgba(255, 204, 102, 0.15);
  --tag-color: rgb(92 207 230);
  --tag-color-hover: rgb(92 207 230 / 0.8);
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 36, 48);
  color: rgb(204, 202, 194);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(23, 27, 36);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 36, 48);
  border-left-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

body div#quartz-root {
  background-color: rgb(36, 41, 54);
  color: rgb(204, 202, 194);
}`,
    typography: `body .page article p > b, b {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration: rgb(213, 255, 128);
  text-decoration-color: rgb(213, 255, 128);
}

body .page article p > em, em {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration: rgb(223, 191, 255);
  text-decoration-color: rgb(223, 191, 255);
}

body .page article p > i, i {
  color: rgb(223, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 191, 255) none 0px;
  text-decoration: rgb(223, 191, 255);
  text-decoration-color: rgb(223, 191, 255);
}

body .page article p > strong, strong {
  color: rgb(213, 255, 128);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(213, 255, 128) none 0px;
  text-decoration: rgb(213, 255, 128);
  text-decoration-color: rgb(213, 255, 128);
}

body .text-highlight {
  background-color: rgba(135, 217, 108, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body del {
  background-color: rgba(242, 121, 131, 0.2);
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration: line-through from-font wavy rgba(242, 121, 131, 0.8);
  text-decoration-color: rgba(242, 121, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

body p {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(184, 207, 230, 0.5) none 0px;
  text-decoration: rgba(184, 207, 230, 0.5);
  text-decoration-color: rgba(184, 207, 230, 0.5);
}`,
    links: `body a.external, footer a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration: rgb(128, 191, 255);
  text-decoration-color: rgb(128, 191, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration: rgb(128, 191, 255);
  text-decoration-color: rgb(128, 191, 255);
}

body a.internal.broken {
  color: rgb(128, 191, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 191, 255) none 0px;
  text-decoration: rgba(255, 204, 102, 0.3);
  text-decoration-color: rgba(255, 204, 102, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 202, 194);
}

body dt {
  color: rgb(204, 202, 194);
}

body ol > li {
  color: rgb(204, 202, 194);
}

body ol.overflow {
  background-color: rgb(36, 41, 54);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body ul > li {
  color: rgb(204, 202, 194);
}

body ul.overflow {
  background-color: rgb(36, 41, 54);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
  text-decoration: rgba(138, 145, 153, 0.4);
}

body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body table {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

body td {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

body th {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-weight: 500;
}`,
    code: `body code {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 208, 115);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 208, 115);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 208, 115);
  border-left-color: rgb(255, 208, 115);
  border-right-color: rgb(255, 208, 115);
  border-top-color: rgb(255, 208, 115);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}

body pre:has(> code) {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body figcaption {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body img {
  border-bottom-color: rgb(204, 202, 194);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(204, 202, 194);
  border-radius: 4px;
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
}

body .footnotes {
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

body .transclude {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(184, 207, 230, 0.5);
  text-decoration: rgba(184, 207, 230, 0.5);
  text-decoration-color: rgba(184, 207, 230, 0.5);
}

body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 202, 194);
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(115, 208, 255);
  border-left-color: rgb(115, 208, 255);
  border-right-color: rgb(115, 208, 255);
  border-top-color: rgb(115, 208, 255);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

body .callout[data-callout="abstract"] {
  --callout-color: 149 230 203;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="bug"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="danger"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="example"] {
  --callout-color: 223 191 255;
  background-color: rgba(223, 191, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="failure"] {
  --callout-color: 242 135 121;
  background-color: rgba(242, 135, 121, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="info"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="note"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="question"] {
  --callout-color: 255 173 102;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="quote"] {
  --callout-color: 204 202 194;
  background-color: rgba(204, 202, 194, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="success"] {
  --callout-color: 213 255 128;
  background-color: rgba(213, 255, 128, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="tip"] {
  --callout-color: 149 230 203;
  background-color: rgba(149, 230, 203, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="todo"] {
  --callout-color: 115 208 255;
  background-color: rgba(115, 208, 255, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .callout[data-callout="warning"] {
  --callout-color: 255 173 102;
  background-color: rgba(255, 173, 102, 0.1);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    search: `body .search > .search-button {
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 41, 54);
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 202, 194);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(204, 202, 194) none 0px;
  text-decoration: rgb(204, 202, 194);
  text-decoration-color: rgb(204, 202, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 202, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 202, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.248627 0.276078 0.332549);
  border-left-color: color(srgb 0.248627 0.276078 0.332549);
  border-right-color: color(srgb 0.248627 0.276078 0.332549);
  border-top-color: color(srgb 0.248627 0.276078 0.332549);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 36, 48);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(105, 117, 140, 0.12);
  color: rgb(204, 202, 194);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(92, 207, 230, 0.2);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(92, 207, 230);
}

body h1 {
  color: rgb(255, 173, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 208, 115);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(115, 208, 255);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 223, 179);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(242, 158, 116);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
}`,
    scrollbars: `body .callout {
  --callout-color: 115 208 255;
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body ::-webkit-scrollbar {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 41, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 41, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(184, 207, 230, 0.5);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(184, 207, 230, 0.5);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(184, 207, 230, 0.5);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(105, 117, 140, 0.12);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}`,
    footer: `body footer {
  background-color: rgb(31, 36, 48);
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(184, 207, 230, 0.5);
  text-decoration: rgba(184, 207, 230, 0.5);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
  text-decoration: rgba(184, 207, 230, 0.5);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body li.section-li > .section .meta {
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(184, 207, 230, 0.5);
  text-decoration: rgba(184, 207, 230, 0.5);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 122, 140);
  border-left-color: rgb(112, 122, 140);
  border-right-color: rgb(112, 122, 140);
  border-top-color: rgb(112, 122, 140);
  color: rgb(112, 122, 140);
}

body .darkmode svg {
  color: rgb(112, 122, 140);
  stroke: rgb(112, 122, 140);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
}

body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
}

body .metadata {
  border-bottom-color: rgb(23, 27, 36);
  border-left-color: rgb(23, 27, 36);
  border-right-color: rgb(23, 27, 36);
  border-top-color: rgb(23, 27, 36);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(31, 36, 48);
}

body .page-header h2.page-title {
  color: rgb(204, 202, 194);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(204, 202, 194);
  text-decoration: underline dotted rgb(204, 202, 194);
}

body details {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body input[type=text] {
  border-bottom-color: rgba(184, 207, 230, 0.5);
  border-left-color: rgba(184, 207, 230, 0.5);
  border-right-color: rgba(184, 207, 230, 0.5);
  border-top-color: rgba(184, 207, 230, 0.5);
  color: rgba(184, 207, 230, 0.5);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(28, 33, 43);
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
  color: rgb(204, 202, 194);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(204, 202, 194);
  border-left-color: rgb(204, 202, 194);
  border-right-color: rgb(204, 202, 194);
  border-top-color: rgb(204, 202, 194);
}

body sub {
  color: rgb(204, 202, 194);
}

body summary {
  color: rgb(204, 202, 194);
}

body sup {
  color: rgb(204, 202, 194);
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
  --bases-table-cell-background-selected: rgba(255, 170, 51, 0.1);
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
  --bodyFont: var(--font-text);
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
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(138 145 153 / 0.4);
  --collapse-icon-color-collapsed: rgb(255 170 51);
  --color-accent: rgb(255, 170, 51);
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
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
  --file-header-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --fill: rgb(248 249 250);
  --flair-background: rgb(107 125 143 / 0.12);
  --flair-color: rgb(92 97 102);
  --font-interface: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter, Heiti, Dotum;
  --font-mermaid: Inter, Heiti, Dotum;
  --font-monospace: '??', Monaspace Neon, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Monaspace Neon;
  --font-print: '??', '??', Lora, Songti, Batang, 'Arial';
  --font-text: '??', Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --gray: var(--text-muted);
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
  --headerFont: var(--font-text);
  --heading-formatting: rgb(138 145 153 / 0.4);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(107 125 143 / 0.12);
  --icon-color: rgb(138 145 153);
  --icon-color-active: rgb(255, 170, 51);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(71 138 204);
  --link-color-hover: rgb(71 138 204 / 0.8);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(71 138 204);
  --link-external-color-hover: rgb(71 138 204 / 0.8);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(71 138 204);
  --link-unresolved-decoration-color: rgba(255, 170, 51, 0.3);
  --list-indent: 2em;
  --list-marker-color: rgb(237 147 102);
  --list-marker-color-collapsed: rgb(237 147 102 / 0.4);
  --list-marker-color-hover: rgb(237 147 102 / 0.8);
  --menu-background: rgb(248 249 250);
  --menu-border-color: rgb(107 125 143 / 0.12);
  --metadata-border-color: rgb(107 125 143 / 0.12);
  --metadata-divider-color: rgb(107 125 143 / 0.12);
  --metadata-input-background-active: rgb(107 125 143 / 0.12);
  --metadata-input-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(92 97 102);
  --metadata-label-background-active: rgb(107 125 143 / 0.12);
  --metadata-label-font: '??', Inter, Heiti, Dotum, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(255, 170, 51, 0.15);
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
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(92 97 102);
  --setting-items-background: rgb(243 244 245);
  --setting-items-border-color: rgb(107 125 143 / 0.12);
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 170, 51);
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
  --table-selection: rgba(255, 170, 51, 0.1);
  --table-selection-border-color: rgb(255 170 51);
  --tag-background: rgb(85 180 212 / 0.2);
  --tag-background-hover: rgb(85 180 212 / 0.4);
  --tag-border-color: rgba(255, 170, 51, 0.15);
  --tag-border-color-hover: rgba(255, 170, 51, 0.15);
  --tag-color: rgb(85 180 212);
  --tag-color-hover: rgb(85 180 212 / 0.8);
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(92, 97, 102);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(107, 125, 143, 0.12);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 249, 250);
  border-left-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

body div#quartz-root {
  background-color: rgb(252, 252, 252);
  color: rgb(92, 97, 102);
}`,
    typography: `body .page article p > b, b {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration: rgb(134, 179, 0);
  text-decoration-color: rgb(134, 179, 0);
}

body .page article p > em, em {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration: rgb(163, 122, 204);
  text-decoration-color: rgb(163, 122, 204);
}

body .page article p > i, i {
  color: rgb(163, 122, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 122, 204) none 0px;
  text-decoration: rgb(163, 122, 204);
  text-decoration-color: rgb(163, 122, 204);
}

body .page article p > strong, strong {
  color: rgb(134, 179, 0);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(134, 179, 0) none 0px;
  text-decoration: rgb(134, 179, 0);
  text-decoration-color: rgb(134, 179, 0);
}

body .text-highlight {
  background-color: rgba(108, 191, 67, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body del {
  background-color: rgba(255, 115, 131, 0.2);
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration: line-through from-font wavy rgba(255, 115, 131, 0.8);
  text-decoration-color: rgba(255, 115, 131, 0.8);
  text-decoration-style: wavy;
  text-decoration-thickness: from-font;
}

body p {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(120, 123, 128, 0.6) none 0px;
  text-decoration: rgba(120, 123, 128, 0.6);
  text-decoration-color: rgba(120, 123, 128, 0.6);
}`,
    links: `body a.external, footer a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration: rgb(71, 138, 204);
  text-decoration-color: rgb(71, 138, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration: rgb(71, 138, 204);
  text-decoration-color: rgb(71, 138, 204);
}

body a.internal.broken {
  color: rgb(71, 138, 204);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 138, 204) none 0px;
  text-decoration: rgba(255, 170, 51, 0.3);
  text-decoration-color: rgba(255, 170, 51, 0.3);
}`,
    lists: `body dd {
  color: rgb(92, 97, 102);
}

body dt {
  color: rgb(92, 97, 102);
}

body ol > li {
  color: rgb(92, 97, 102);
}

body ol.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body ul > li {
  color: rgb(92, 97, 102);
}

body ul.overflow {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(138, 145, 153, 0.4);
  text-decoration: rgba(138, 145, 153, 0.4);
}

body blockquote {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body table {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.938px;
}

body td {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

body th {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-weight: 500;
}`,
    code: `body code {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

body pre > code > [data-line] {
  border-left-color: rgb(242, 174, 73);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(242, 174, 73);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(242, 174, 73);
  border-left-color: rgb(242, 174, 73);
  border-right-color: rgb(242, 174, 73);
  border-top-color: rgb(242, 174, 73);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}

body pre:has(> code) {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
}`,
    images: `body audio {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body figcaption {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body img {
  border-bottom-color: rgb(92, 97, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(92, 97, 102);
  border-radius: 4px;
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    embeds: `body .file-embed {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
}

body .footnotes {
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

body .transclude {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(255, 170, 51);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .transclude-inner {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(255, 170, 51);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(120, 123, 128, 0.6);
  text-decoration: rgba(120, 123, 128, 0.6);
  text-decoration-color: rgba(120, 123, 128, 0.6);
}

body input[type=checkbox] {
  border-bottom-color: rgba(138, 145, 153, 0.4);
  border-left-color: rgba(138, 145, 153, 0.4);
  border-right-color: rgba(138, 145, 153, 0.4);
  border-top-color: rgba(138, 145, 153, 0.4);
}

body li.task-list-item[data-task='!'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='*'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='-'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='/'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='>'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='?'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='I'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='S'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='b'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='c'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='d'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='f'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='i'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='k'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='l'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='p'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='u'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body li.task-list-item[data-task='w'] {
  color: rgb(92, 97, 102);
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(57, 158, 230);
  border-left-color: rgb(57, 158, 230);
  border-right-color: rgb(57, 158, 230);
  border-top-color: rgb(57, 158, 230);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 500;
}

body .callout[data-callout="abstract"] {
  --callout-color: 76 191 153;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="bug"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="danger"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="example"] {
  --callout-color: 163 122 204;
  background-color: rgba(163, 122, 204, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="failure"] {
  --callout-color: 240 113 113;
  background-color: rgba(240, 113, 113, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="info"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="note"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="question"] {
  --callout-color: 250 141 62;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="quote"] {
  --callout-color: 92 97 102;
  background-color: rgba(92, 97, 102, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="success"] {
  --callout-color: 134 179 0;
  background-color: rgba(134, 179, 0, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="tip"] {
  --callout-color: 76 191 153;
  background-color: rgba(76, 191, 153, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="todo"] {
  --callout-color: 57 158 230;
  background-color: rgba(57, 158, 230, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .callout[data-callout="warning"] {
  --callout-color: 250 141 62;
  background-color: rgba(250, 141, 62, 0.1);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    search: `body .search > .search-button {
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

body .search > .search-container > .search-space > * {
  color: rgb(92, 97, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 97, 102) none 0px;
  text-decoration: rgb(92, 97, 102);
  text-decoration-color: rgb(92, 97, 102);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 97, 102);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(92, 97, 102);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.8 0.813333 0.828235);
  border-left-color: color(srgb 0.8 0.813333 0.828235);
  border-right-color: color(srgb 0.8 0.813333 0.828235);
  border-top-color: color(srgb 0.8 0.813333 0.828235);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 249, 250);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(107, 125, 143, 0.12);
  color: rgb(92, 97, 102);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(85, 180, 212, 0.2);
  border-bottom-color: rgba(255, 170, 51, 0.15);
  border-left-color: rgba(255, 170, 51, 0.15);
  border-right-color: rgba(255, 170, 51, 0.15);
  border-top-color: rgba(255, 170, 51, 0.15);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(85, 180, 212);
}

body h1 {
  color: rgb(250, 141, 62);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(242, 174, 73);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(57, 158, 230);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(230, 186, 126);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(237, 147, 102);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
}`,
    scrollbars: `body .callout {
  --callout-color: 57 158 230;
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body ::-webkit-scrollbar {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 252, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(120, 123, 128, 0.6);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(120, 123, 128, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(120, 123, 128, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(107, 125, 143, 0.12);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}`,
    footer: `body footer {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(120, 123, 128, 0.6);
  text-decoration: rgba(120, 123, 128, 0.6);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
  text-decoration: rgba(120, 123, 128, 0.6);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body li.section-li > .section .meta {
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(120, 123, 128, 0.6);
  text-decoration: rgba(120, 123, 128, 0.6);
}

body ul.section-ul {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(138, 145, 153);
  border-left-color: rgb(138, 145, 153);
  border-right-color: rgb(138, 145, 153);
  border-top-color: rgb(138, 145, 153);
  color: rgb(138, 145, 153);
}

body .darkmode svg {
  color: rgb(138, 145, 153);
  stroke: rgb(138, 145, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
}

body .breadcrumb-element p {
  color: rgba(138, 145, 153, 0.4);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
}

body .metadata {
  border-bottom-color: rgba(107, 125, 143, 0.12);
  border-left-color: rgba(107, 125, 143, 0.12);
  border-right-color: rgba(107, 125, 143, 0.12);
  border-top-color: rgba(107, 125, 143, 0.12);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Lora, Songti, Batang, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(248, 249, 250);
}

body .page-header h2.page-title {
  color: rgb(92, 97, 102);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(92, 97, 102);
  text-decoration: underline dotted rgb(92, 97, 102);
}

body details {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body input[type=text] {
  border-bottom-color: rgba(120, 123, 128, 0.6);
  border-left-color: rgba(120, 123, 128, 0.6);
  border-right-color: rgba(120, 123, 128, 0.6);
  border-top-color: rgba(120, 123, 128, 0.6);
  color: rgba(120, 123, 128, 0.6);
  font-family: "??", Inter, Heiti, Dotum, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(243, 244, 245);
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
  color: rgb(92, 97, 102);
  font-family: "??", "Monaspace Neon", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(92, 97, 102);
  border-left-color: rgb(92, 97, 102);
  border-right-color: rgb(92, 97, 102);
  border-top-color: rgb(92, 97, 102);
}

body sub {
  color: rgb(92, 97, 102);
}

body summary {
  color: rgb(92, 97, 102);
}

body sup {
  color: rgb(92, 97, 102);
}`,
  },
};
