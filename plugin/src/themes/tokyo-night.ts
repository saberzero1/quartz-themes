import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
    styleSettingsId: ["Appearance", "Editor"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 202;
  --accent-l: 75%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(41, 46, 66);
  --background-modifier-border: rgb(41, 46, 66);
  --background-modifier-border-focus: rgb(41, 46, 66);
  --background-modifier-border-hover: rgb(41, 46, 66);
  --background-modifier-cover: rgba(22, 22, 30, 0.8);
  --background-modifier-error: rgb(219, 75, 75);
  --background-modifier-error-hover: rgb(255, 117, 127);
  --background-modifier-form-field: rgb(22, 22, 30);
  --background-modifier-form-field-highlighted: rgb(22, 22, 30);
  --background-modifier-form-field-hover: rgb(22, 22, 30);
  --background-modifier-hover: rgb(41, 46, 66);
  --background-modifier-message: rgba(41, 46, 66, 0.9);
  --background-modifier-success: rgb(158, 206, 106);
  --background-primary: rgb(26, 27, 38);
  --background-primary-alt: rgb(26, 27, 38);
  --background-secondary: rgb(22, 22, 30);
  --background-secondary-alt: rgb(22, 22, 30);
  --bases-cards-background: rgb(26, 27, 38);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(26, 27, 38);
  --bases-cards-shadow: 0 0 0 1px rgb(41, 46, 66);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(41, 46, 66);
  --bases-embed-border-color: rgb(41, 46, 66);
  --bases-group-heading-property-color: rgb(169, 177, 214);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(41, 46, 66);
  --bases-table-cell-background-active: rgb(26, 27, 38);
  --bases-table-cell-background-disabled: rgb(26, 27, 38);
  --bases-table-cell-background-selected: hsla(202, 100%, 75%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(41, 46, 66);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 100%, 75%);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: rgb(26, 27, 38);
  --bases-table-header-background: rgb(26, 27, 38);
  --bases-table-header-background-hover: rgb(41, 46, 66);
  --bases-table-header-color: rgb(169, 177, 214);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(26, 27, 38);
  --bases-table-summary-background-hover: rgb(41, 46, 66);
  --bg: rgb(26, 27, 38);
  --bg_dark: rgb(22, 22, 30);
  --bg_dark2: rgb(18, 18, 24);
  --bg_dark2_x: 18, 18, 24;
  --bg_dark_x: 22, 22, 30;
  --bg_highlight: rgb(41, 46, 66);
  --bg_highlight_dark: rgb(36, 40, 59);
  --bg_highlight_dark_x: 36, 40, 59;
  --bg_highlight_x: 41, 46, 66;
  --bg_x: 26, 27, 38;
  --blockquote-background-color: rgb(22, 22, 30);
  --blockquote-border-color: hsl(202, 100%, 75%);
  --blue: rgb(122, 162, 247);
  --blue0: rgb(61, 89, 161);
  --blue0_x: 61, 89, 161;
  --blue_x: 122, 162, 247;
  --blur-background: color-mix(in srgb, rgb(22, 22, 30) 65%, transparent) linear-gradient(rgb(22, 22, 30), color-mix(in srgb, rgb(22, 22, 30) 65%, transparent));
  --bodyFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(125, 207, 255);
  --border-width: 2px;
  --callout-bug: 255, 117, 127;
  --callout-default: 122, 162, 247;
  --callout-error: 219, 75, 75;
  --callout-example: 187, 154, 247;
  --callout-fail: 219, 75, 75;
  --callout-important: 158, 206, 106;
  --callout-info: 122, 162, 247;
  --callout-question: 224, 175, 104;
  --callout-quote: 169, 177, 214;
  --callout-success: 26, 188, 156;
  --callout-summary: 125, 207, 255;
  --callout-tip: 125, 207, 255;
  --callout-todo: 125, 207, 255;
  --callout-warning: 255, 158, 100;
  --canvas-background: rgb(26, 27, 38);
  --canvas-card-label-color: rgb(86, 95, 137);
  --caret-color: rgb(192, 202, 245);
  --checkbox-border-color: rgb(86, 95, 137);
  --checkbox-border-color-hover: rgb(86, 95, 137);
  --checkbox-color: rgb(158, 206, 106);
  --checkbox-color-hover: rgb(158, 206, 106);
  --checkbox-marker-color: rgb(26, 27, 38);
  --checkbox-radius: 12px;
  --checklist-done-color: rgb(169, 177, 214);
  --code-background: rgb(36, 40, 59);
  --code-border-color: rgb(41, 46, 66);
  --code-bracket-background: rgb(41, 46, 66);
  --code-comment: rgb(86, 95, 137);
  --code-function: rgb(224, 175, 104);
  --code-important: rgb(255, 158, 100);
  --code-keyword: rgb(187, 154, 247);
  --code-normal: rgb(192, 202, 245);
  --code-operator: rgb(255, 117, 127);
  --code-property: rgb(125, 207, 255);
  --code-punctuation: rgb(169, 177, 214);
  --code-string: rgb(158, 206, 106);
  --code-tag: rgb(255, 117, 127);
  --code-value: rgb(187, 154, 247);
  --codeFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: rgb(86, 95, 137);
  --collapse-icon-color-collapsed: rgb(187, 154, 247);
  --color-accent: hsl(202, 100%, 75%);
  --color-accent-1: hsl(199, 102%, 86.25%);
  --color-accent-2: hsl(197, 105%, 96.75%);
  --color-accent-hsl: 202, 100%, 75%;
  --color-blue: rgb(122, 162, 247);
  --color-cyan: rgb(125, 207, 255);
  --color-green: rgb(158, 206, 106);
  --color-orange: rgb(255, 158, 100);
  --color-pink: rgb(187, 154, 247);
  --color-purple: rgb(187, 154, 247);
  --color-red: rgb(255, 117, 127);
  --color-yellow: rgb(224, 175, 104);
  --color_blue_rgb: 122, 162, 247;
  --color_cyan_rgb: 125, 207, 255;
  --color_green_rgb: 158, 206, 106;
  --color_orange_rgb: 255, 158, 100;
  --color_pink_rgb: 187, 154, 247;
  --color_purple_rgb: 187, 154, 247;
  --color_red_rgb: 255, 117, 127;
  --color_yellow_rgb: 224, 175, 104;
  --comment: rgb(86, 95, 137);
  --comment_x: 86, 95, 137;
  --cyan: rgb(125, 207, 255);
  --cyan_hsl: 202 100% 75%;
  --cyan_x: 125, 207, 255;
  --dark: var(--text-normal, rgb(192, 202, 245));
  --darkgray: var(--text-normal, rgb(192, 202, 245));
  --date-background-color: rgb(41, 46, 66);
  --date-color: rgb(122, 162, 247);
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --divider-color: rgb(41, 46, 66);
  --divider-color-hover: hsl(202, 100%, 75%);
  --dropdown-background: rgb(22, 22, 30);
  --dropdown-background-hover: rgb(26, 27, 38);
  --embed-background: rgb(22, 22, 30);
  --embed-block-shadow-hover: 0 0 0 1px rgb(41, 46, 66), inset 0 0 0 1px rgb(41, 46, 66);
  --embed-border-start: 2px solid hsl(202, 100%, 75%);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(192, 202, 245);
  --fg_dark: rgb(169, 177, 214);
  --fg_dark_x: 169, 177, 214;
  --fg_x: 192, 202, 245;
  --file-header-background: rgb(26, 27, 38);
  --file-header-background-focused: rgb(26, 27, 38);
  --file-header-border: 2px solid transparent;
  --file-header-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(22, 22, 30);
  --flair-color: rgb(192, 202, 245);
  --flashing-background: rgba(61, 89, 161, 0.3);
  --font-interface: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(41, 46, 66);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(169, 177, 214);
  --footnote-id-color-no-occurrences: rgb(86, 95, 137);
  --footnote-input-background-active: rgb(41, 46, 66);
  --graph-line: rgb(86, 95, 137);
  --graph-node: rgb(192, 202, 245);
  --graph-node-attachment: rgb(122, 162, 247);
  --graph-node-focused: rgb(187, 154, 247);
  --graph-node-tag: rgb(255, 158, 100);
  --graph-node-unresolved: rgb(86, 95, 137);
  --graph-text: rgb(192, 202, 245);
  --gray: var(--text-muted, rgb(169, 177, 214));
  --green: rgb(158, 206, 106);
  --green_x: 158, 206, 106;
  --h1-color: rgb(255, 117, 127);
  --h2-color: rgb(224, 175, 104);
  --h3-color: rgb(158, 206, 106);
  --h4-color: rgb(125, 207, 255);
  --h5-color: rgb(122, 162, 247);
  --h6-color: rgb(187, 154, 247);
  --headerFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgb(86, 95, 137);
  --highlight: var(--text-highlight-bg, rgba(255, 158, 100, 0.25));
  --hr-color: rgb(41, 46, 66);
  --icon-color: rgb(169, 177, 214);
  --icon-color-active: rgb(187, 154, 247);
  --icon-color-focused: rgb(187, 154, 247);
  --icon-color-hover: rgb(122, 162, 247);
  --image-radius: 0px;
  --indentation-guide-color: rgb(86, 95, 137);
  --indentation-guide-color-active: rgb(86, 95, 137);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(255, 117, 127);
  --input-border-width: 2px;
  --input-date-separator: rgb(86, 95, 137);
  --input-placeholder-color: rgb(86, 95, 137);
  --interactive-accent: hsl(202, 100%, 75%);
  --interactive-accent-hover: rgb(122, 162, 247);
  --interactive-accent-hsl: 202, 100%, 75%;
  --interactive-hover: rgb(26, 27, 38);
  --interactive-normal: rgb(22, 22, 30);
  --interactive-success: rgb(158, 206, 106);
  --italic-color: rgb(125, 207, 255);
  --light: var(--background-primary, rgb(26, 27, 38));
  --lightgray: var(--background-secondary, rgb(22, 22, 30));
  --link-color: rgb(187, 154, 247);
  --link-color-hover: rgb(125, 207, 255);
  --link-external-color: rgb(187, 154, 247);
  --link-external-color-hover: rgb(125, 207, 255);
  --link-external-filter: invert(35%) sepia(28%) saturate(681%) hue-rotate(192deg) brightness(94%) contrast(85%);
  --link-unresolved-color: rgb(187, 154, 247);
  --link-unresolved-decoration-color: hsla(202, 100%, 75%, 0.3);
  --list-marker-color: rgb(86, 95, 137);
  --list-marker-color-collapsed: rgb(187, 154, 247);
  --list-marker-color-hover: rgb(169, 177, 214);
  --magent_hsl: 261 85% 79%;
  --magenta: rgb(187, 154, 247);
  --magenta_x: 187, 154, 247;
  --menu-background: rgb(22, 22, 30);
  --menu-border-color: rgb(41, 46, 66);
  --menu-border-width: 2px;
  --mermaid-actor: rgb(169, 177, 214);
  --mermaid-loopline: rgb(122, 162, 247);
  --mermaid-note: rgb(61, 89, 161);
  --metadata-border-color: rgb(41, 46, 66);
  --metadata-divider-color: rgb(41, 46, 66);
  --metadata-input-background-active: rgb(41, 46, 66);
  --metadata-input-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(192, 202, 245);
  --metadata-label-background-active: rgb(41, 46, 66);
  --metadata-label-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(169, 177, 214);
  --metadata-label-text-color-hover: rgb(169, 177, 214);
  --metadata-property-background-active: rgb(41, 46, 66);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(41, 46, 66);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(41, 46, 66);
  --modal-background: rgb(26, 27, 38);
  --modal-border-color: rgb(41, 46, 66);
  --modal-border-width: 2px;
  --nav-collapse-icon-color: rgb(86, 95, 137);
  --nav-collapse-icon-color-collapsed: rgb(86, 95, 137);
  --nav-file-tag: rgba(224, 175, 104, 0.9);
  --nav-heading-color: rgb(192, 202, 245);
  --nav-heading-color-collapsed: rgb(86, 95, 137);
  --nav-heading-color-collapsed-hover: rgb(169, 177, 214);
  --nav-heading-color-hover: rgb(192, 202, 245);
  --nav-indentation-guide-color: rgb(41, 46, 66);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(41, 46, 66);
  --nav-item-background-hover: rgb(41, 46, 66);
  --nav-item-background-selected: hsla(202, 100%, 75%, 0.15);
  --nav-item-color: rgb(169, 177, 214);
  --nav-item-color-active: rgb(255, 117, 127);
  --nav-item-color-highlighted: rgb(187, 154, 247);
  --nav-item-color-hover: rgb(192, 202, 245);
  --nav-item-color-selected: rgb(192, 202, 245);
  --nav-tag-color: rgb(86, 95, 137);
  --nav-tag-color-active: rgb(169, 177, 214);
  --nav-tag-color-hover: rgb(169, 177, 214);
  --orange: rgb(255, 158, 100);
  --orange_x: 255, 158, 100;
  --pdf-background: rgb(26, 27, 38);
  --pdf-page-background: rgb(26, 27, 38);
  --pdf-shadow: 0 0 0 1px rgb(41, 46, 66);
  --pdf-sidebar-background: rgb(26, 27, 38);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(41, 46, 66);
  --pill-border-color: rgb(41, 46, 66);
  --pill-border-color-hover: rgb(41, 46, 66);
  --pill-border-width: 2px;
  --pill-color: rgb(169, 177, 214);
  --pill-color-hover: rgb(192, 202, 245);
  --pill-color-remove: rgb(86, 95, 137);
  --pill-color-remove-hover: rgb(187, 154, 247);
  --pink: rgb(217, 0, 105);
  --pink_hsl: 331 100% 43%;
  --pink_x: 217, 0, 105;
  --prompt-background: rgb(26, 27, 38);
  --prompt-border-color: rgb(41, 46, 66);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, rgb(22, 22, 30) 65%, transparent) linear-gradient(rgb(22, 22, 30), color-mix(in srgb, rgb(22, 22, 30) 65%, transparent));
  --red: rgb(255, 117, 127);
  --red1: rgb(219, 75, 75);
  --red1_x: 219, 75, 75;
  --red_x: 255, 117, 127;
  --ribbon-background: rgb(22, 22, 30);
  --ribbon-background-collapsed: rgb(26, 27, 38);
  --scrollbar-active-thumb-bg: rgb(86, 95, 137);
  --scrollbar-bg: rgb(18, 18, 24);
  --scrollbar-thumb-bg: rgb(86, 95, 137);
  --scrollbar-width: 7px;
  --search-clear-button-color: rgb(169, 177, 214);
  --search-icon-color: rgb(169, 177, 214);
  --search-result-background: rgb(26, 27, 38);
  --secondary: var(--text-accent, rgb(187, 154, 247));
  --setting-group-heading-color: rgb(192, 202, 245);
  --setting-items-background: rgb(26, 27, 38);
  --setting-items-border-color: rgb(41, 46, 66);
  --shiki-active-tab-border-color: rgb(169, 177, 214);
  --shiki-code-background: rgb(36, 40, 59);
  --shiki-code-comment: rgb(86, 95, 137);
  --shiki-code-function: rgb(158, 206, 106);
  --shiki-code-important: rgb(255, 158, 100);
  --shiki-code-keyword: rgb(187, 154, 247);
  --shiki-code-normal: rgb(169, 177, 214);
  --shiki-code-property: rgb(125, 207, 255);
  --shiki-code-punctuation: rgb(169, 177, 214);
  --shiki-code-string: rgb(224, 175, 104);
  --shiki-code-value: rgb(187, 154, 247);
  --shiki-gutter-border-color: rgb(41, 46, 66);
  --shiki-gutter-border-width: 2px;
  --shiki-gutter-text-color: rgb(86, 95, 137);
  --shiki-gutter-text-color-highlight: rgb(169, 177, 214);
  --shiki-highlight-neutral: rgb(169, 177, 214);
  --shiki-terminal-dots-color: rgb(86, 95, 137);
  --shiki-tooltip-background: rgba(41, 46, 66, 0.9);
  --slider-thumb-border-color: rgb(41, 46, 66);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(41, 46, 66);
  --status-bar-background: rgb(22, 22, 30);
  --status-bar-border-color: rgb(41, 46, 66);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: rgb(169, 177, 214);
  --suggestion-background: rgb(26, 27, 38);
  --sync-avatar-color-1: rgb(255, 117, 127);
  --sync-avatar-color-2: rgb(255, 158, 100);
  --sync-avatar-color-3: rgb(224, 175, 104);
  --sync-avatar-color-4: rgb(158, 206, 106);
  --sync-avatar-color-5: rgb(125, 207, 255);
  --sync-avatar-color-6: rgb(122, 162, 247);
  --sync-avatar-color-7: rgb(187, 154, 247);
  --sync-avatar-color-8: rgb(187, 154, 247);
  --tab-background-active: rgb(26, 27, 38);
  --tab-container-background: rgb(22, 22, 30);
  --tab-divider-color: rgb(41, 46, 66);
  --tab-outline-color: rgb(41, 46, 66);
  --tab-switcher-background: rgb(22, 22, 30);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(22, 22, 30), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 100%, 75%);
  --tab-text-color: rgb(86, 95, 137);
  --tab-text-color-active: rgb(169, 177, 214);
  --tab-text-color-focused: rgb(169, 177, 214);
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8);
  --tab-text-color-focused-active-current: rgb(255, 117, 127);
  --tab-text-color-focused-highlighted: rgb(187, 154, 247);
  --table-add-button-border-color: rgb(41, 46, 66);
  --table-border-color: rgb(41, 46, 66);
  --table-drag-handle-background-active: hsl(202, 100%, 75%);
  --table-drag-handle-color: rgb(86, 95, 137);
  --table-drag-handle-color-active: rgb(26, 27, 38);
  --table-header-background: rgb(18, 18, 24);
  --table-header-background-hover: rgb(18, 18, 24);
  --table-header-border-color: rgb(41, 46, 66);
  --table-header-color: rgb(192, 202, 245);
  --table-selection: hsla(202, 100%, 75%, 0.1);
  --table-selection-border-color: hsl(202, 100%, 75%);
  --table-width: 88cqw;
  --tag-background: rgba(187, 154, 247, 0.15);
  --tag-background-hover: rgba(125, 207, 255, 0.15);
  --tag-border-color: hsla(202, 100%, 75%, 0.15);
  --tag-border-color-hover: hsla(202, 100%, 75%, 0.15);
  --tag-color: rgb(187, 154, 247);
  --tag-color-hover: rgb(125, 207, 255);
  --teal: rgb(26, 188, 156);
  --teal_x: 26, 188, 156;
  --terminal_black: rgb(65, 72, 104);
  --terminal_black_x: 65, 72, 104;
  --tertiary: var(--text-accent-hover, rgb(125, 207, 255));
  --text-accent: rgb(187, 154, 247);
  --text-accent-hover: rgb(125, 207, 255);
  --text-error: rgb(219, 75, 75);
  --text-error-hover: rgb(255, 117, 127);
  --text-faint: rgb(86, 95, 137);
  --text-highlight-bg: rgba(255, 158, 100, 0.25);
  --text-muted: rgb(169, 177, 214);
  --text-normal: rgb(192, 202, 245);
  --text-on-accent: rgb(26, 27, 38);
  --text-selection: rgba(61, 89, 161, 0.6);
  --text-success: rgb(158, 206, 106);
  --text-warning: rgb(255, 158, 100);
  --textHighlight: var(--text-highlight-bg, rgba(255, 158, 100, 0.25));
  --titleFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(22, 22, 30);
  --titlebar-background-focused: rgb(22, 22, 30);
  --titlebar-border-color: rgb(41, 46, 66);
  --titlebar-text-color: rgb(169, 177, 214);
  --titlebar-text-color-focused: rgb(192, 202, 245);
  --toggle-thumb-color: rgb(26, 27, 38);
  --unknown: #ffffff;
  --vault-profile-color: rgb(192, 202, 245);
  --vault-profile-color-hover: rgb(192, 202, 245);
  --yellow: rgb(224, 175, 104);
  --yellow_x: 224, 175, 104;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(22, 22, 30));
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(26, 27, 38));
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 30));
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(22, 22, 30));
  border-left-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body html {
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --font-monospace: '"JetBrains Mono", monospace, "Source Code Pro", monospace';
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 158, 100, 0.25));
  color: var(--text-normal, rgb(192, 202, 245));
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(192, 202, 245));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(86, 95, 137);
  border-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(158, 206, 106));
  border-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(169, 177, 214));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(187, 154, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(187, 154, 247);
  border-left-width: 0px;
  border-right-color: rgb(187, 154, 247);
  border-right-width: 0px;
  border-top-color: rgb(187, 154, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(187, 154, 247));
  content: url("app://obsidian.md/public/images/874d8b8e340f75575caa.svg");
  filter: var(--link-external-filter, invert(0.35) sepia(0.28) saturate(6.81) hue-rotate(192deg) brightness(0.94) contrast(0.85));
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(187, 154, 247) none 0px;
  padding-bottom: 0px;
  padding-left: 2.5px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(187, 154, 247));
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(187, 154, 247));
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgba(128, 208, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(128, 208, 255, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(86, 95, 137));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(22, 22, 30));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(192, 202, 245);
  width: 643px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: var(--table-text-color, rgb(192, 202, 245));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: var(--table-header-color, rgb(192, 202, 245));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(18, 18, 24));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(36, 40, 59));
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: var(--code-normal, rgb(192, 202, 245));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(36, 40, 59));
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(26, 27, 38));
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgb(22, 22, 30));
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgb(22, 22, 30));
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  color: rgb(86, 95, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
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
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 158, 100);
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(224, 175, 104);
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(125, 207, 255);
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(122, 162, 247);
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(255, 117, 127);
  color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(122, 162, 247);
  color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
  color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(187, 154, 247);
  color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
  color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
  color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(158, 206, 106);
  color: rgb(158, 206, 106);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 255;
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 117, 127;
  background: rgba(255, 117, 127, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 117, 127, 0.25);
  border-left-color: rgba(255, 117, 127, 0.25);
  border-right-color: rgba(255, 117, 127, 0.25);
  border-top-color: rgba(255, 117, 127, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background: rgba(219, 75, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 187, 154, 247;
  background: rgba(187, 154, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(187, 154, 247, 0.25);
  border-left-color: rgba(187, 154, 247, 0.25);
  border-right-color: rgba(187, 154, 247, 0.25);
  border-top-color: rgba(187, 154, 247, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background: rgba(219, 75, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background: rgba(122, 162, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 122, 162, 247;
  background: rgba(122, 162, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 224, 175, 104;
  background: rgba(224, 175, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 175, 104, 0.25);
  border-left-color: rgba(224, 175, 104, 0.25);
  border-right-color: rgba(224, 175, 104, 0.25);
  border-top-color: rgba(224, 175, 104, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 169, 177, 214;
  background: rgba(36, 40, 59, 0.5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg_highlight_dark_x), 0.5);
  border-bottom-color: rgba(169, 177, 214, 0.25);
  border-left-color: rgba(169, 177, 214, 0.25);
  border-right-color: rgba(169, 177, 214, 0.25);
  border-top-color: rgba(169, 177, 214, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 26, 188, 156;
  background: rgba(26, 188, 156, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(26, 188, 156, 0.25);
  border-left-color: rgba(26, 188, 156, 0.25);
  border-right-color: rgba(26, 188, 156, 0.25);
  border-top-color: rgba(26, 188, 156, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 125, 207, 255;
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 125, 207, 255;
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 158, 100;
  background: rgba(255, 158, 100, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 158, 100, 0.25);
  border-left-color: rgba(255, 158, 100, 0.25);
  border-right-color: rgba(255, 158, 100, 0.25);
  border-top-color: rgba(255, 158, 100, 0.25);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(var(--callout-color), rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(192, 202, 245);
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
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: var(--text-normal, rgb(192, 202, 245));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(26, 27, 38));
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(41, 46, 66));
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(41, 46, 66));
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(41, 46, 66));
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(187, 154, 247, 0.15));
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(255, 117, 127));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 117, 127));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(224, 175, 104));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(255, 117, 127));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(158, 206, 106));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(125, 207, 255));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(187, 154, 247));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(169, 177, 214));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(169, 177, 214));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(192, 202, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: var(--icon-color, rgb(169, 177, 214));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(22, 22, 30));
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: var(--status-bar-text-color, rgb(169, 177, 214));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(169, 177, 214);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(169, 177, 214));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(169, 177, 214));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: var(--icon-color, rgb(169, 177, 214));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(86, 95, 137));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(192, 202, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(22, 22, 30));
  border-color: rgb(192, 202, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(41, 46, 66);
  color: var(--table-header-color, rgb(192, 202, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: var(--text-muted, rgb(169, 177, 214));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(41, 46, 66);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(187, 154, 247, 0.15));
  color: var(--pill-color, rgb(187, 154, 247));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(169, 177, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(18, 18, 24));
  color: var(--text-normal, rgb(192, 202, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(22, 22, 30));
  border-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(22, 22, 30));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(192, 202, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(22, 22, 30));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(192, 202, 245));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: var(--text-normal, rgb(169, 177, 214));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(36, 40, 59));
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: var(--code-normal, rgb(192, 202, 245));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(192, 202, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(187, 154, 247, 0.15));
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  color: var(--tag-color, rgb(187, 154, 247));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 202;
  --accent-l: 43%;
  --accent-s: 86%;
  --background-modifier-active-hover: rgb(220, 222, 226);
  --background-modifier-border: rgb(220, 222, 226);
  --background-modifier-border-focus: rgb(220, 222, 226);
  --background-modifier-border-hover: rgb(220, 222, 226);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(203, 204, 209, 0.8);
  --background-modifier-error: rgb(115, 42, 56);
  --background-modifier-error-hover: rgb(140, 67, 81);
  --background-modifier-form-field: rgb(203, 204, 209);
  --background-modifier-form-field-highlighted: rgb(203, 204, 209);
  --background-modifier-form-field-hover: rgb(203, 204, 209);
  --background-modifier-hover: rgb(220, 222, 226);
  --background-modifier-message: rgba(220, 222, 226, 0.9);
  --background-modifier-success: rgb(51, 99, 92);
  --background-primary: rgb(213, 214, 219);
  --background-primary-alt: rgb(213, 214, 219);
  --background-secondary: rgb(203, 204, 209);
  --background-secondary-alt: rgb(203, 204, 209);
  --bases-cards-background: rgb(213, 214, 219);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(213, 214, 219);
  --bases-cards-shadow: 0 0 0 1px rgb(220, 222, 226);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(220, 222, 226);
  --bases-embed-border-color: rgb(220, 222, 226);
  --bases-group-heading-property-color: rgb(39, 46, 75);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(220, 222, 226);
  --bases-table-cell-background-active: rgb(213, 214, 219);
  --bases-table-cell-background-disabled: rgb(213, 214, 219);
  --bases-table-cell-background-selected: hsla(202, 86%, 43%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(220, 222, 226);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(202, 86%, 43%);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: rgb(213, 214, 219);
  --bases-table-header-background: rgb(213, 214, 219);
  --bases-table-header-background-hover: rgb(220, 222, 226);
  --bases-table-header-color: rgb(39, 46, 75);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(213, 214, 219);
  --bases-table-summary-background-hover: rgb(220, 222, 226);
  --bg: rgb(213, 214, 219);
  --bg_dark: rgb(203, 204, 209);
  --bg_dark2: rgb(188, 189, 194);
  --bg_dark2_x: 188, 189, 194;
  --bg_dark_x: 203, 204, 209;
  --bg_highlight: rgb(220, 222, 226);
  --bg_highlight_dark: rgb(195, 197, 201);
  --bg_highlight_dark_x: 195, 197, 201;
  --bg_highlight_x: 220, 222, 226;
  --bg_x: 213, 214, 219;
  --blockquote-background-color: rgb(203, 204, 209);
  --blockquote-border-color: hsl(202, 86%, 43%);
  --blue: rgb(52, 84, 138);
  --blue0: rgb(39, 71, 125);
  --blue0_x: 39, 71, 125;
  --blue_x: 52, 84, 138;
  --blur-background: color-mix(in srgb, rgb(213, 214, 219) 65%, transparent) linear-gradient(rgb(213, 214, 219), color-mix(in srgb, rgb(213, 214, 219) 65%, transparent));
  --bodyFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --bold-color: rgb(15, 75, 110);
  --border-width: 2px;
  --callout-bug: 140, 67, 81;
  --callout-default: 52, 84, 138;
  --callout-error: 115, 42, 56;
  --callout-example: 90, 74, 120;
  --callout-fail: 115, 42, 56;
  --callout-important: 51, 99, 92;
  --callout-info: 52, 84, 138;
  --callout-question: 143, 94, 21;
  --callout-quote: 39, 46, 75;
  --callout-success: 22, 103, 117;
  --callout-summary: 15, 75, 110;
  --callout-tip: 15, 75, 110;
  --callout-todo: 15, 75, 110;
  --callout-warning: 150, 80, 39;
  --canvas-background: rgb(213, 214, 219);
  --canvas-card-label-color: rgb(150, 153, 163);
  --canvas-color: 220, 222, 226;
  --caret-color: rgb(52, 59, 88);
  --checkbox-border-color: rgb(150, 153, 163);
  --checkbox-border-color-hover: rgb(150, 153, 163);
  --checkbox-color: rgb(51, 99, 92);
  --checkbox-color-hover: rgb(51, 99, 92);
  --checkbox-marker-color: rgb(213, 214, 219);
  --checkbox-radius: 12px;
  --checklist-done-color: rgb(39, 46, 75);
  --code-background: rgb(195, 197, 201);
  --code-border-color: rgb(220, 222, 226);
  --code-bracket-background: rgb(220, 222, 226);
  --code-comment: rgb(150, 153, 163);
  --code-function: rgb(143, 94, 21);
  --code-important: rgb(150, 80, 39);
  --code-keyword: rgb(90, 74, 120);
  --code-normal: rgb(52, 59, 88);
  --code-operator: rgb(140, 67, 81);
  --code-property: rgb(15, 75, 110);
  --code-punctuation: rgb(39, 46, 75);
  --code-string: rgb(51, 99, 92);
  --code-tag: rgb(140, 67, 81);
  --code-value: rgb(90, 74, 120);
  --codeFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: rgb(150, 153, 163);
  --collapse-icon-color-collapsed: rgb(90, 74, 120);
  --color-accent: hsl(202, 86%, 43%);
  --color-accent-1: hsl(201, 86.86%, 46.225%);
  --color-accent-2: hsl(199, 87.72%, 49.45%);
  --color-accent-hsl: 202, 86%, 43%;
  --color-blue: rgb(52, 84, 138);
  --color-cyan: rgb(15, 75, 110);
  --color-green: rgb(51, 99, 92);
  --color-orange: rgb(150, 80, 39);
  --color-pink: rgb(90, 74, 120);
  --color-purple: rgb(90, 74, 120);
  --color-red: rgb(140, 67, 81);
  --color-yellow: rgb(143, 94, 21);
  --color_blue_rgb: 52, 84, 138;
  --color_cyan_rgb: 15, 75, 110;
  --color_green_rgb: 51, 99, 92;
  --color_orange_rgb: 150, 80, 39;
  --color_pink_rgb: 90, 74, 120;
  --color_purple_rgb: 90, 74, 120;
  --color_red_rgb: 140, 67, 81;
  --color_yellow_rgb: 143, 94, 21;
  --comment: rgb(150, 153, 163);
  --comment_x: 150, 153, 163;
  --cyan: rgb(15, 75, 110);
  --cyan_x: 15, 75, 110;
  --dark: var(--text-normal, rgb(52, 59, 88));
  --darkgray: var(--text-normal, rgb(52, 59, 88));
  --date-background-color: rgb(220, 222, 226);
  --date-color: rgb(52, 84, 138);
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --divider-color: rgb(220, 222, 226);
  --divider-color-hover: hsl(202, 86%, 43%);
  --dropdown-background: rgb(203, 204, 209);
  --dropdown-background-hover: rgb(213, 214, 219);
  --embed-background: rgb(203, 204, 209);
  --embed-block-shadow-hover: 0 0 0 1px rgb(220, 222, 226), inset 0 0 0 1px rgb(220, 222, 226);
  --embed-border-start: 2px solid hsl(202, 86%, 43%);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(52, 59, 88);
  --fg_dark: rgb(39, 46, 75);
  --fg_dark_x: 39, 46, 75;
  --fg_x: 52, 59, 88;
  --file-header-background: rgb(213, 214, 219);
  --file-header-background-focused: rgb(213, 214, 219);
  --file-header-border: 2px solid transparent;
  --file-header-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(203, 204, 209);
  --flair-color: rgb(52, 59, 88);
  --flashing-background: rgba(39, 71, 125, 0.3);
  --font-interface: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(220, 222, 226);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(39, 46, 75);
  --footnote-id-color-no-occurrences: rgb(150, 153, 163);
  --footnote-input-background-active: rgb(220, 222, 226);
  --graph-line: rgb(150, 153, 163);
  --graph-node: rgb(52, 59, 88);
  --graph-node-attachment: rgb(52, 84, 138);
  --graph-node-focused: rgb(90, 74, 120);
  --graph-node-tag: rgb(150, 80, 39);
  --graph-node-unresolved: rgb(150, 153, 163);
  --graph-text: rgb(52, 59, 88);
  --gray: var(--text-muted, rgb(39, 46, 75));
  --green: rgb(51, 99, 92);
  --green_x: 51, 99, 92;
  --h1-color: rgb(140, 67, 81);
  --h2-color: rgb(143, 94, 21);
  --h3-color: rgb(51, 99, 92);
  --h4-color: rgb(15, 75, 110);
  --h5-color: rgb(52, 84, 138);
  --h6-color: rgb(90, 74, 120);
  --headerFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: rgb(150, 153, 163);
  --highlight: var(--text-highlight-bg, rgba(150, 80, 39, 0.25));
  --hr-color: rgb(220, 222, 226);
  --icon-color: rgb(39, 46, 75);
  --icon-color-active: rgb(90, 74, 120);
  --icon-color-focused: rgb(90, 74, 120);
  --icon-color-hover: rgb(52, 84, 138);
  --image-radius: 0px;
  --indentation-guide-color: rgb(150, 153, 163);
  --indentation-guide-color-active: rgb(150, 153, 163);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(140, 67, 81);
  --input-border-width: 2px;
  --input-date-separator: rgb(150, 153, 163);
  --input-placeholder-color: rgb(150, 153, 163);
  --interactive-accent: hsl(202, 86%, 43%);
  --interactive-accent-hover: rgb(52, 84, 138);
  --interactive-accent-hsl: 202, 86%, 43%;
  --interactive-hover: rgb(213, 214, 219);
  --interactive-normal: rgb(203, 204, 209);
  --interactive-success: rgb(51, 99, 92);
  --italic-color: rgb(15, 75, 110);
  --light: var(--background-primary, rgb(213, 214, 219));
  --lightgray: var(--background-secondary, rgb(203, 204, 209));
  --link-color: rgb(90, 74, 120);
  --link-color-hover: rgb(15, 75, 110);
  --link-external-color: rgb(90, 74, 120);
  --link-external-color-hover: rgb(15, 75, 110);
  --link-external-filter: invert(62%) sepia(9%) saturate(266%) hue-rotate(189deg) brightness(97%) contrast(88%);
  --link-unresolved-color: rgb(90, 74, 120);
  --link-unresolved-decoration-color: hsla(202, 86%, 43%, 0.3);
  --list-marker-color: rgb(150, 153, 163);
  --list-marker-color-collapsed: rgb(90, 74, 120);
  --list-marker-color-hover: rgb(39, 46, 75);
  --magent_hsl: 261 24% 38%;
  --magenta: rgb(90, 74, 120);
  --magenta_x: 90, 74, 120;
  --menu-background: rgb(203, 204, 209);
  --menu-border-color: rgb(220, 222, 226);
  --menu-border-width: 2px;
  --mermaid-actor: rgb(39, 46, 75);
  --mermaid-loopline: rgb(52, 84, 138);
  --mermaid-note: rgb(39, 71, 125);
  --metadata-border-color: rgb(220, 222, 226);
  --metadata-divider-color: rgb(220, 222, 226);
  --metadata-input-background-active: rgb(220, 222, 226);
  --metadata-input-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(52, 59, 88);
  --metadata-label-background-active: rgb(220, 222, 226);
  --metadata-label-font: "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(39, 46, 75);
  --metadata-label-text-color-hover: rgb(39, 46, 75);
  --metadata-property-background-active: rgb(220, 222, 226);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(220, 222, 226);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(220, 222, 226);
  --modal-background: rgb(213, 214, 219);
  --modal-border-color: rgb(220, 222, 226);
  --modal-border-width: 2px;
  --nav-collapse-icon-color: rgb(150, 153, 163);
  --nav-collapse-icon-color-collapsed: rgb(150, 153, 163);
  --nav-file-tag: rgba(143, 94, 21, 0.9);
  --nav-heading-color: rgb(52, 59, 88);
  --nav-heading-color-collapsed: rgb(150, 153, 163);
  --nav-heading-color-collapsed-hover: rgb(39, 46, 75);
  --nav-heading-color-hover: rgb(52, 59, 88);
  --nav-indentation-guide-color: rgb(220, 222, 226);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(220, 222, 226);
  --nav-item-background-hover: rgb(220, 222, 226);
  --nav-item-background-selected: hsla(202, 86%, 43%, 0.15);
  --nav-item-color: rgb(39, 46, 75);
  --nav-item-color-active: rgb(140, 67, 81);
  --nav-item-color-highlighted: rgb(90, 74, 120);
  --nav-item-color-hover: rgb(52, 59, 88);
  --nav-item-color-selected: rgb(52, 59, 88);
  --nav-tag-color: rgb(150, 153, 163);
  --nav-tag-color-active: rgb(39, 46, 75);
  --nav-tag-color-hover: rgb(39, 46, 75);
  --orange: rgb(150, 80, 39);
  --orange_x: 150, 80, 39;
  --pdf-background: rgb(213, 214, 219);
  --pdf-page-background: rgb(213, 214, 219);
  --pdf-sidebar-background: rgb(213, 214, 219);
  --pill-border-color: rgb(220, 222, 226);
  --pill-border-color-hover: rgb(220, 222, 226);
  --pill-border-width: 2px;
  --pill-color: rgb(39, 46, 75);
  --pill-color-hover: rgb(52, 59, 88);
  --pill-color-remove: rgb(150, 153, 163);
  --pill-color-remove-hover: rgb(90, 74, 120);
  --pink: rgb(109, 74, 120);
  --pink_hsl: 286 24% 38%;
  --pink_x: 109, 74, 120;
  --prompt-background: rgb(213, 214, 219);
  --prompt-border-color: rgb(220, 222, 226);
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, rgb(213, 214, 219) 65%, transparent) linear-gradient(rgb(213, 214, 219), color-mix(in srgb, rgb(213, 214, 219) 65%, transparent));
  --red: rgb(140, 67, 81);
  --red1: rgb(115, 42, 56);
  --red1_x: 115, 42, 56;
  --red_x: 140, 67, 81;
  --ribbon-background: rgb(203, 204, 209);
  --ribbon-background-collapsed: rgb(213, 214, 219);
  --scrollbar-active-thumb-bg: rgb(150, 153, 163);
  --scrollbar-bg: rgb(188, 189, 194);
  --scrollbar-thumb-bg: rgb(150, 153, 163);
  --scrollbar-width: 7px;
  --search-clear-button-color: rgb(39, 46, 75);
  --search-icon-color: rgb(39, 46, 75);
  --search-result-background: rgb(213, 214, 219);
  --secondary: var(--text-accent, rgb(90, 74, 120));
  --setting-group-heading-color: rgb(52, 59, 88);
  --setting-items-background: rgb(213, 214, 219);
  --setting-items-border-color: rgb(220, 222, 226);
  --shiki-active-tab-border-color: rgb(39, 46, 75);
  --shiki-code-background: rgb(195, 197, 201);
  --shiki-code-comment: rgb(150, 153, 163);
  --shiki-code-function: rgb(51, 99, 92);
  --shiki-code-important: rgb(150, 80, 39);
  --shiki-code-keyword: rgb(90, 74, 120);
  --shiki-code-normal: rgb(39, 46, 75);
  --shiki-code-property: rgb(15, 75, 110);
  --shiki-code-punctuation: rgb(39, 46, 75);
  --shiki-code-string: rgb(143, 94, 21);
  --shiki-code-value: rgb(90, 74, 120);
  --shiki-gutter-border-color: rgb(220, 222, 226);
  --shiki-gutter-border-width: 2px;
  --shiki-gutter-text-color: rgb(150, 153, 163);
  --shiki-gutter-text-color-highlight: rgb(39, 46, 75);
  --shiki-highlight-neutral: rgb(39, 46, 75);
  --shiki-terminal-dots-color: rgb(150, 153, 163);
  --shiki-tooltip-background: rgba(220, 222, 226, 0.9);
  --slider-thumb-border-color: rgb(220, 222, 226);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(220, 222, 226);
  --status-bar-background: rgb(203, 204, 209);
  --status-bar-border-color: rgb(220, 222, 226);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: rgb(39, 46, 75);
  --suggestion-background: rgb(213, 214, 219);
  --sync-avatar-color-1: rgb(140, 67, 81);
  --sync-avatar-color-2: rgb(150, 80, 39);
  --sync-avatar-color-3: rgb(143, 94, 21);
  --sync-avatar-color-4: rgb(51, 99, 92);
  --sync-avatar-color-5: rgb(15, 75, 110);
  --sync-avatar-color-6: rgb(52, 84, 138);
  --sync-avatar-color-7: rgb(90, 74, 120);
  --sync-avatar-color-8: rgb(90, 74, 120);
  --tab-background-active: rgb(213, 214, 219);
  --tab-container-background: rgb(203, 204, 209);
  --tab-divider-color: rgb(220, 222, 226);
  --tab-outline-color: rgb(220, 222, 226);
  --tab-switcher-background: rgb(203, 204, 209);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(203, 204, 209), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(202, 86%, 43%);
  --tab-text-color: rgb(150, 153, 163);
  --tab-text-color-active: rgb(39, 46, 75);
  --tab-text-color-focused: rgb(39, 46, 75);
  --tab-text-color-focused-active: rgba(140, 67, 81, 0.8);
  --tab-text-color-focused-active-current: rgb(140, 67, 81);
  --tab-text-color-focused-highlighted: rgb(90, 74, 120);
  --table-add-button-border-color: rgb(220, 222, 226);
  --table-border-color: rgb(220, 222, 226);
  --table-drag-handle-background-active: hsl(202, 86%, 43%);
  --table-drag-handle-color: rgb(150, 153, 163);
  --table-drag-handle-color-active: rgb(213, 214, 219);
  --table-header-background: rgb(188, 189, 194);
  --table-header-background-hover: rgb(188, 189, 194);
  --table-header-border-color: rgb(220, 222, 226);
  --table-header-color: rgb(52, 59, 88);
  --table-selection: hsla(202, 86%, 43%, 0.1);
  --table-selection-border-color: hsl(202, 86%, 43%);
  --table-width: 88cqw;
  --tag-background: rgba(90, 74, 120, 0.15);
  --tag-background-hover: rgba(15, 75, 110, 0.15);
  --tag-border-color: hsla(202, 86%, 43%, 0.15);
  --tag-border-color-hover: hsla(202, 86%, 43%, 0.15);
  --tag-color: rgb(90, 74, 120);
  --tag-color-hover: rgb(15, 75, 110);
  --teal: rgb(22, 103, 117);
  --teal_x: 22, 103, 117;
  --terminal_black: rgb(15, 15, 20);
  --terminal_black_x: 15, 15, 20;
  --tertiary: var(--text-accent-hover, rgb(15, 75, 110));
  --text-accent: rgb(90, 74, 120);
  --text-accent-hover: rgb(15, 75, 110);
  --text-error: rgb(115, 42, 56);
  --text-error-hover: rgb(140, 67, 81);
  --text-faint: rgb(150, 153, 163);
  --text-highlight-bg: rgba(150, 80, 39, 0.25);
  --text-muted: rgb(39, 46, 75);
  --text-normal: rgb(52, 59, 88);
  --text-on-accent: rgb(213, 214, 219);
  --text-selection: rgba(39, 71, 125, 0.6);
  --text-success: rgb(51, 99, 92);
  --text-warning: rgb(150, 80, 39);
  --textHighlight: var(--text-highlight-bg, rgba(150, 80, 39, 0.25));
  --titleFont: var(--font-interface, "JetBrains Mono", monospace, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --titlebar-background: rgb(203, 204, 209);
  --titlebar-background-focused: rgb(203, 204, 209);
  --titlebar-border-color: rgb(220, 222, 226);
  --titlebar-text-color: rgb(39, 46, 75);
  --titlebar-text-color-focused: rgb(52, 59, 88);
  --toggle-thumb-color: rgb(213, 214, 219);
  --unknown: #000000;
  --vault-profile-color: rgb(52, 59, 88);
  --vault-profile-color-hover: rgb(52, 59, 88);
  --yellow: rgb(143, 94, 21);
  --yellow_x: 143, 94, 21;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(203, 204, 209));
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(213, 214, 219));
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(203, 204, 209));
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(203, 204, 209));
  border-left-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body html {
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --font-monospace: '"JetBrains Mono", monospace, "Source Code Pro", monospace';
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(15, 75, 110));
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(15, 75, 110));
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(15, 75, 110));
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(15, 75, 110));
  outline: rgb(15, 75, 110) none 0px;
  text-decoration-color: rgb(15, 75, 110);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(150, 80, 39, 0.25));
  color: var(--text-normal, rgb(52, 59, 88));
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body del {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(52, 59, 88));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(150, 153, 163);
  border-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(51, 99, 92));
  border-color: rgb(51, 99, 92);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(39, 46, 75));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 46, 75) none 0px;
  text-decoration-color: rgb(39, 46, 75);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --resizer-size: 20px;
  --shadow-drag: 0px 2px 10px rgba(0, 0, 0, 0.1);
  --shadow-stationary: 0px 0.5px 1px 0.5px rgba(0, 0, 0, 0.1);
  --zoom-multiplier: 1;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 74, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(90, 74, 120);
  border-left-width: 0px;
  border-right-color: rgb(90, 74, 120);
  border-right-width: 0px;
  border-top-color: rgb(90, 74, 120);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--link-external-color, rgb(90, 74, 120));
  content: url("app://obsidian.md/public/images/874d8b8e340f75575caa.svg");
  filter: var(--link-external-filter, invert(0.62) sepia(0.09) saturate(2.66) hue-rotate(189deg) brightness(0.97) contrast(0.88));
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 400);
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  outline: rgb(90, 74, 120) none 0px;
  padding-bottom: 0px;
  padding-left: 2.5px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(90, 74, 120);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(90, 74, 120));
  outline: rgb(90, 74, 120) none 0px;
  text-decoration-color: rgb(90, 74, 120);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(90, 74, 120));
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgba(15, 135, 204, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(15, 135, 204, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body dt {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ol > li {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ul > li {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(150, 153, 163));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(203, 204, 209));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body table {
  color: rgb(52, 59, 88);
  width: 643px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: var(--table-text-color, rgb(52, 59, 88));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: var(--table-header-color, rgb(52, 59, 88));
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(188, 189, 194));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(195, 197, 201));
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: var(--code-normal, rgb(52, 59, 88));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(195, 197, 201));
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body figcaption {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(140, 67, 81);
  border-left-color: rgb(140, 67, 81);
  border-right-color: rgb(140, 67, 81);
  border-top-color: rgb(140, 67, 81);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(213, 214, 219));
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgb(203, 204, 209));
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(15, 135, 204);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgb(203, 204, 209));
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(150, 153, 163);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(150, 153, 163);
  border-right-color: rgb(150, 153, 163);
  border-top-color: rgb(150, 153, 163);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM3.5,7c-.55,0-1,.45-1,1s.45,1,1,1H12.5c.55,0,1-.45,1-1s-.45-1-1-1H3.5Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  color: rgb(150, 153, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
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
  color: rgb(150, 80, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM4.84,3.66c-.32,.48-.09,1.14,.44,1.37,.23,.1,.49,.1,.72,0,.17-.07,.31-.18,.41-.34,.31-.49,.82-.89,1.6-.89,1.72,0,2.06,1.61,1.45,2.47-.36,.51-.87,.91-1.33,1.37-.28,.28-.55,.58-.74,.93-.19,.33-.27,.69-.31,1.03-.04,.31,.08,.59,.28,.79,.18,.18,.43,.29,.71,.29,.49,0,.89-.38,.95-.87,.04-.3,.1-.45,.2-.63,.41-.76,1.18-1.12,1.98-2.3,.72-1.07,.45-2.5-.02-3.27-.55-.89-1.62-1.61-3.19-1.61-1.43,0-2.51,.7-3.15,1.66Zm3.16,11.01c.73,0,1.33-.6,1.33-1.33s-.6-1.33-1.33-1.33-1.33,.6-1.33,1.33,.6,1.33,1.33,1.33Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(150, 80, 39);
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.46,4.19c.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.13,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33H2c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19ZM13.33,13.33h-4c-.18,0-.35-.07-.47-.2-.13-.12-.2-.29-.2-.47V7.39c0-.07-.13-1.83,1.13-3.19,.94-1.01,2.35-1.53,4.21-1.53h.67v1.88l-.54,.11c-.91,.18-1.55,.54-1.89,1.07-.18,.28-.28,.61-.29,.94h2.05c.18,0,.35,.07,.47,.2,.12,.13,.2,.29,.2,.47v4.67c0,.74-.6,1.33-1.33,1.33Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(143, 94, 21);
  color: rgb(143, 94, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M13.66,13.66c-1.45,1.45-3.45,2.34-5.66,2.34C3.58,16,0,12.42,0,8S3.58,0,8,0c2.17,0,4.15,.87,5.59,2.28,.06,.06,.12,.12,.18,.18,1.37,1.43,2.22,3.36,2.23,5.5,0,.03,0,.07,0,.1-.01,2.19-.91,4.17-2.34,5.6Zm-1.41-1.41c-1.09,1.09-2.59,1.76-4.24,1.76-3.31,0-6-2.69-6-6S4.69,2,8,2v6l4.24,4.24Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(143, 94, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(15, 75, 110);
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 84, 138);
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M4.25,.5c-.6,0-1.17,.24-1.59,.66-.42,.42-.66,.99-.66,1.59V14.1c0,.2,.05,.39,.15,.56,.1,.17,.24,.31,.41,.41,.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15l3.94-2.25c.11-.06,.24-.1,.37-.1s.26,.03,.37,.1l3.95,2.25c.17,.1,.36,.15,.56,.15,.2,0,.39-.05,.56-.15,.17-.1,.31-.24,.41-.41s.15-.36,.15-.56V2.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66H4.25Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(140, 67, 81);
  color: rgb(52, 84, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,0H16V16H0V0Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,1h-.72c-.33,0-.66,.13-.9,.35-.25,.23-.4,.54-.43,.87l-.56,6.67c-.02,.18,0,.37,.07,.54,.06,.18,.16,.34,.28,.47,.13,.14,.28,.25,.45,.32,.17,.07,.35,.11,.54,.11h1.27c.36,0,.69-.14,.94-.39,.25-.25,.39-.59,.39-.94V2.33c0-.35-.14-.7-.39-.94-.25-.25-.59-.39-.94-.39Z%22/%3E%3Cpath%20d=%22M15.4,8.31l-1.79-6.34c-.08-.28-.25-.53-.48-.7-.23-.17-.52-.27-.81-.27H6.67c-.36,0-.69,.14-.94,.39-.25,.25-.39,.59-.39,.94v6.54c0,.53,.32,1.02,.81,1.25,.79,.37,1.38,.82,1.62,1.22,.36,.6,.53,1.78,.57,2.65,0,.06,0,.12,.01,.18,.06,.41,.34,.72,.73,.8,.07,.01,.14,.02,.21,.02,.8,0,1.73-.83,2.12-1.48,.29-.48,.41-1.09,.36-1.84-.03-.55-.18-1.05-.33-1.55l-.04-.12h2.72c.21,0,.41-.05,.6-.14,.18-.09,.34-.23,.47-.39,.12-.17,.21-.35,.24-.55,.04-.2,.03-.41-.03-.61Zm-6.4,5.75h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 67, 81);
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,11c-.27,0-.52,.11-.71,.29-.19,.19-.29,.44-.29,.71s.11,.52,.29,.71c.19,.19,.44,.29,.71,.29h5c.27,0,.52-.11,.71-.29,.19-.19,.29-.44,.29-.71V7c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v2.59l-4.29-4.29c-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29l-2.29,2.29L1.71,3.29c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29S.01,3.74,.01,4c0,.26,.1,.51,.28,.7l5,5c.19,.19,.44,.29,.71,.29s.52-.11,.71-.29l2.29-2.29,3.59,3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 67, 81);
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(52, 84, 138);
  color: rgb(15, 75, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 94, 21);
  color: rgb(150, 80, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(143, 94, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8,.12c-1.64,0-3.21,.65-4.37,1.81-1.16,1.16-1.81,2.73-1.81,4.37,0,1.34,.44,2.64,1.25,3.71,0,0,.17,.22,.2,.25l4.74,5.6,4.75-5.6s.19-.25,.19-.25h0c.81-1.07,1.25-2.37,1.25-3.71,0-1.64-.65-3.21-1.81-4.37C11.21,.78,9.64,.13,8,.12Zm0,8.44c-.45,0-.88-.13-1.25-.38-.37-.25-.66-.6-.83-1.01-.17-.41-.21-.86-.13-1.3,.09-.44,.3-.84,.62-1.15,.31-.31,.72-.53,1.15-.62,.44-.09,.89-.04,1.3,.13,.41,.17,.76,.46,1.01,.83,.25,.37,.38,.81,.38,1.25,0,.6-.24,1.17-.66,1.59-.42,.42-.99,.66-1.59,.66Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(90, 74, 120);
  color: rgb(140, 67, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,14.75c-.41,0-.77-.15-1.06-.44-.29-.29-.44-.65-.44-1.06V2.75c0-.41,.15-.77,.44-1.06,.29-.29,.65-.44,1.06-.44H13.25c.41,0,.77,.15,1.06,.44,.29,.29,.44,.65,.44,1.06v7.5l-4.5,4.5H2.75Zm4.5-5.25c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22h-2.25c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53c.14,.14,.32,.22,.53,.22h2.25Zm3.75-3c.21,0,.39-.07,.53-.22,.14-.14,.22-.32,.22-.53s-.07-.39-.22-.53c-.14-.14-.32-.22-.53-.22H5c-.21,0-.39,.07-.53,.22-.14,.14-.22,.32-.22,.53s.07,.39,.22,.53,.32,.22,.53,.22h6Zm-1.5,6.75l3.75-3.75h-3c-.21,0-.39,.07-.53,.22s-.22,.32-.22,.53v3Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 67, 81);
  color: rgb(15, 75, 110);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Cpath%20class=%22cls-1%22%20d=%22M0,16H16V0H0V16Z%22/%3E%3Cg%3E%3Cpath%20d=%22M3.33,15h-.72c-.33,0-.66-.13-.9-.35-.25-.23-.4-.54-.43-.87L.73,7.11c-.02-.18,0-.37,.07-.54,.06-.18,.16-.34,.28-.47,.13-.14,.28-.25,.45-.32,.17-.07,.35-.11,.54-.11h1.27c.36,0,.69,.14,.94,.39,.25,.25,.39,.59,.39,.94v6.67c0,.35-.14,.7-.39,.94-.25,.25-.59,.39-.94,.39Z%22/%3E%3Cpath%20d=%22M15.4,7.69l-1.79,6.34c-.08,.28-.25,.53-.48,.7-.23,.17-.52,.27-.81,.27H6.67c-.36,0-.69-.14-.94-.39-.25-.25-.39-.59-.39-.94V7.13c0-.53,.32-1.02,.81-1.25,.79-.37,1.38-.82,1.62-1.22,.36-.6,.53-1.78,.57-2.65,0-.06,0-.12,.01-.18,.06-.41,.34-.72,.73-.8,.07-.01,.14-.02,.21-.02,.8,0,1.73,.83,2.12,1.48,.29,.48,.41,1.09,.36,1.84-.03,.55-.18,1.05-.33,1.55l-.04,.12h2.72c.21,0,.41,.05,.6,.14,.18,.09,.34,.23,.47,.39,.12,.17,.21,.35,.24,.55,.04,.2,.03,.41-.03,.61ZM9,1.94h0Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 99, 92);
  color: rgb(51, 99, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M6.43,5.42c.15-.1,.35-.2,.57-.27v1.7c-.2-.06-.39-.15-.57-.27-.36-.24-.43-.47-.43-.58s.07-.34,.43-.58Zm2.57,5.43v-1.7c.22,.07,.41,.16,.57,.27,.36,.24,.43,.47,.43,.58s-.07,.34-.43,.58c-.18,.11-.37,.2-.57,.27Z%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c2.12,0,4.16-.84,5.66-2.34,1.5-1.5,2.34-3.54,2.34-5.66s-.84-4.16-2.34-5.66c-1.5-1.5-3.54-2.34-5.66-2.34S3.84,.84,2.34,2.34C.84,3.84,0,5.88,0,8s.84,4.16,2.34,5.66c1.5,1.5,3.54,2.34,5.66,2.34Zm1-13c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v.09c-.6,.11-1.17,.33-1.68,.66-.72,.48-1.32,1.25-1.32,2.25s.6,1.76,1.32,2.25c.48,.32,1.05,.55,1.68,.66v1.94c-.39-.13-.68-.32-.84-.5-.08-.1-.19-.19-.31-.25-.12-.06-.25-.1-.38-.11s-.27,0-.4,.05c-.13,.04-.25,.11-.35,.2-.1,.09-.18,.19-.24,.32-.06,.12-.09,.25-.1,.38,0,.13,.01,.27,.06,.39,.05,.13,.12,.24,.21,.34,.56,.65,1.41,1.08,2.35,1.25v.09c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71v-.09c.6-.11,1.17-.33,1.68-.66,.72-.48,1.32-1.26,1.32-2.25s-.6-1.77-1.32-2.25c-.51-.33-1.08-.56-1.68-.66v-1.94c.39,.13,.68,.32,.84,.5,.09,.1,.19,.18,.31,.25,.12,.06,.25,.1,.38,.11,.13,.01,.26,0,.39-.05,.13-.04,.24-.11,.34-.19,.1-.09,.18-.19,.24-.31,.06-.12,.09-.25,.1-.38,0-.13,0-.26-.05-.39-.04-.13-.11-.24-.2-.34-.56-.65-1.41-1.08-2.35-1.25v-.09Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(51, 99, 92);
  color: rgb(51, 99, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M10,5c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h5c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71v5c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29c-.19-.19-.29-.44-.29-.71v-2.59l-4.29,4.29c-.19,.19-.44,.29-.71,.29s-.52-.11-.71-.29l-2.29-2.29L1.71,12.71c-.19,.18-.44,.28-.7,.28-.26,0-.51-.11-.7-.29S.01,12.26,.01,12c0-.26,.1-.51,.28-.7L5.29,6.29c.19-.19,.44-.29,.71-.29s.52,.11,.71,.29l2.29,2.29,3.59-3.59h-2.59Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(51, 99, 92);
  color: rgb(51, 99, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 15, 75, 110;
  background: rgba(15, 75, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 140, 67, 81;
  background: rgba(140, 67, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(140, 67, 81, 0.25);
  border-left-color: rgba(140, 67, 81, 0.25);
  border-right-color: rgba(140, 67, 81, 0.25);
  border-top-color: rgba(140, 67, 81, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 115, 42, 56;
  background: rgba(115, 42, 56, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 90, 74, 120;
  background: rgba(90, 74, 120, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(90, 74, 120, 0.25);
  border-left-color: rgba(90, 74, 120, 0.25);
  border-right-color: rgba(90, 74, 120, 0.25);
  border-top-color: rgba(90, 74, 120, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 115, 42, 56;
  background: rgba(115, 42, 56, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 52, 84, 138;
  background: rgba(52, 84, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 52, 84, 138;
  background: rgba(52, 84, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 143, 94, 21;
  background: rgba(143, 94, 21, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(143, 94, 21, 0.25);
  border-left-color: rgba(143, 94, 21, 0.25);
  border-right-color: rgba(143, 94, 21, 0.25);
  border-top-color: rgba(143, 94, 21, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 39, 46, 75;
  background: rgba(195, 197, 201, 0.5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--bg_highlight_dark_x), 0.5);
  border-bottom-color: rgba(39, 46, 75, 0.25);
  border-left-color: rgba(39, 46, 75, 0.25);
  border-right-color: rgba(39, 46, 75, 0.25);
  border-top-color: rgba(39, 46, 75, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 22, 103, 117;
  background: rgba(22, 103, 117, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(22, 103, 117, 0.25);
  border-left-color: rgba(22, 103, 117, 0.25);
  border-right-color: rgba(22, 103, 117, 0.25);
  border-top-color: rgba(22, 103, 117, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 15, 75, 110;
  background: rgba(15, 75, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 15, 75, 110;
  background: rgba(15, 75, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 150, 80, 39;
  background: rgba(150, 80, 39, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(150, 80, 39, 0.25);
  border-left-color: rgba(150, 80, 39, 0.25);
  border-right-color: rgba(150, 80, 39, 0.25);
  border-top-color: rgba(150, 80, 39, 0.25);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
  color: rgb(var(--callout-color), rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(52, 59, 88);
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
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: var(--text-normal, rgb(52, 59, 88));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(213, 214, 219));
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(220, 222, 226));
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 204, 209);
  border-bottom-width: 2px;
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(220, 222, 226));
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(220, 222, 226));
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(90, 74, 120, 0.15));
  border-bottom-color: rgba(15, 135, 204, 0.15);
  border-left-color: rgba(15, 135, 204, 0.15);
  border-right-color: rgba(15, 135, 204, 0.15);
  border-top-color: rgba(15, 135, 204, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(90, 74, 120);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(140, 67, 81));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(140, 67, 81));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(143, 94, 21));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(140, 67, 81));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(51, 99, 92));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(15, 75, 110));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(52, 84, 138));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(90, 74, 120));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(39, 46, 75));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(39, 46, 75));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(52, 59, 88);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: var(--icon-color, rgb(39, 46, 75));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(203, 204, 209));
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: var(--status-bar-text-color, rgb(39, 46, 75));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(39, 46, 75);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(39, 46, 75));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(39, 46, 75));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: var(--icon-color, rgb(39, 46, 75));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(39, 46, 75);
  stroke: rgb(39, 46, 75);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(150, 153, 163));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(52, 59, 88));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(213, 214, 219));
  border-color: rgb(52, 59, 88);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(220, 222, 226);
  color: var(--table-header-color, rgb(52, 59, 88));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: var(--text-muted, rgb(39, 46, 75));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(220, 222, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(39, 46, 75);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(90, 74, 120, 0.15));
  color: var(--pill-color, rgb(90, 74, 120));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(39, 46, 75);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(213, 214, 219));
  color: var(--text-normal, rgb(52, 59, 88));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(203, 204, 209));
  border-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(203, 204, 209));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(52, 59, 88);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(203, 204, 209));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(52, 59, 88));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: var(--text-normal, rgb(39, 46, 75));
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(195, 197, 201));
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: var(--code-normal, rgb(52, 59, 88));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

html[saved-theme="light"] body sub {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body summary {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body sup {
  color: rgb(52, 59, 88);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(90, 74, 120, 0.15));
  border-bottom-color: rgba(15, 135, 204, 0.15);
  border-left-color: rgba(15, 135, 204, 0.15);
  border-right-color: rgba(15, 135, 204, 0.15);
  border-top-color: rgba(15, 135, 204, 0.15);
  color: var(--tag-color, rgb(90, 74, 120));
}`,
  },
  classSettings: {
    "h1-divider-on": `body.h1-divider-on :is(.markdown-preview-sizer>div>h1, .markdown-rendered>h1, .HyperMD-header-1)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h1-color) 30%, transparent 70%);
}`,
    "h2-divider-on": `body.h2-divider-on :is(.markdown-preview-sizer>div>h2, .markdown-rendered>h2, .HyperMD-header-2)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h2-color) 30%, transparent 70%);
}`,
    "h3-divider-on": `body.h3-divider-on :is(.markdown-preview-sizer>div>h3, .markdown-rendered>h3, .HyperMD-header-3)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h3-color) 30%, transparent 70%);
}`,
    "h4-divider-on": `body.h4-divider-on :is(.markdown-preview-sizer>div>h4, .markdown-rendered>h4, .HyperMD-header-4)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h4-color) 30%, transparent 70%);
}`,
    "h5-divider-on": `body.h5-divider-on :is(.markdown-preview-sizer>div>h5, .markdown-rendered>h5, .HyperMD-header-5)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h5-color) 30%, transparent 70%);
}`,
    "h6-divider-on": `body.h6-divider-on :is(.markdown-preview-sizer>div>h6, .markdown-rendered>h6, .HyperMD-header-6)::after {
content: "";
position: absolute;
height: 2px;
width: 100%;
right: 0px;
opacity: 0.5;
bottom: 0;
background-image: linear-gradient(to left, var(--h6-color) 30%, transparent 70%);
}`,
    "callout-style-1": `.theme-dark {
--callout-border-width: 1px;
--callout-border-opacity: 0.25;
--callout-padding: 0;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #00000040;
--callout-content-radius: 0px;
}
.theme-light {
--callout-border-width: 1px;
--callout-border-opacity: 0.25;
--callout-padding: 0;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #FFFFFFBF;
--callout-content-radius: 0px;
}`,
    "callout-style-2": `.theme-dark {
--callout-border-width: 1px;
--callout-border-opacity: 0.25;
--callout-padding: 0 6px 6px;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #00000040;
--callout-content-radius: 4px;
}
.theme-light {
--callout-border-width: 1px;
--callout-border-opacity: 0.25;
--callout-padding: 0 6px 6px;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #FFFFFFBF;
--callout-content-radius: 4px;
}`,
    "callout-style-3": `.callout-style-3:is(.theme-light, .theme-dark) {
--callout-border-width: 0 0 0 4px;
--callout-border-opacity: 1;
--callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6);
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 0;
--callout-title-size: inherit;
--callout-content-padding: 0;
--callout-content-background: transparent;
--callout-content-radius: 0px;
}
.callout-style-3:is(.theme-light, .theme-dark) {
--callout-border-width: 0 0 0 4px;
--callout-border-opacity: 1;
--callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6);
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 0;
--callout-title-size: inherit;
--callout-content-padding: 0;
--callout-content-background: transparent;
--callout-content-radius: 0px;
}`,
    "callout-style-4": `.theme-dark {
--callout-border-width: 0 0 0 4px;
--callout-border-opacity: 1;
--callout-padding: 0;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #00000040;
--callout-content-radius: 0px;
}
.theme-light {
--callout-border-width: 0 0 0 4px;
--callout-border-opacity: 1;
--callout-padding: 0;
--callout-radius: var(--radius-s);
--callout-title-color: inherit;
--callout-title-padding: 8px 16px;
--callout-title-size: inherit;
--callout-content-padding: 0px 16px;
--callout-content-background: #FFFFFFBF;
--callout-content-radius: 0px;
}`,
  },
};
