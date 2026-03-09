import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
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
  --bases-table-cell-background-selected: rgba(128, 208, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(41, 46, 66);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 208, 255);
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
  --blockquote-border-color: rgb(128, 208, 255);
  --blue: rgb(122, 162, 247);
  --blue0: rgb(61, 89, 161);
  --blue0_x: 61, 89, 161;
  --blue_x: 122, 162, 247;
  --blur-background: color-mix(in srgb, rgb(22, 22, 30) 65%, transparent) linear-gradient(rgb(22, 22, 30), color-mix(in srgb, rgb(22, 22, 30) 65%, transparent));
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
  --collapse-icon-color: rgb(86, 95, 137);
  --collapse-icon-color-collapsed: rgb(187, 154, 247);
  --color-accent: rgb(128, 208, 255);
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
  --date-background-color: rgb(41, 46, 66);
  --date-color: rgb(122, 162, 247);
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --divider-color: rgb(41, 46, 66);
  --divider-color-hover: rgb(128, 208, 255);
  --dropdown-background: rgb(22, 22, 30);
  --dropdown-background-hover: rgb(26, 27, 38);
  --embed-background: rgb(22, 22, 30);
  --embed-block-shadow-hover: 0 0 0 1px rgb(41, 46, 66), inset 0 0 0 1px rgb(41, 46, 66);
  --embed-border-start: 2px solid rgb(128, 208, 255);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(192, 202, 245);
  --fg_dark: rgb(169, 177, 214);
  --fg_dark_x: 169, 177, 214;
  --fg_x: 192, 202, 245;
  --file-header-background: rgb(26, 27, 38);
  --file-header-background-focused: rgb(26, 27, 38);
  --file-header-border: 2px solid transparent;
  --file-header-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(22, 22, 30);
  --flair-color: rgb(192, 202, 245);
  --flashing-background: rgba(61, 89, 161, 0.3);
  --font-interface: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --green: rgb(158, 206, 106);
  --green_x: 158, 206, 106;
  --h1-color: rgb(255, 117, 127);
  --h2-color: rgb(224, 175, 104);
  --h3-color: rgb(158, 206, 106);
  --h4-color: rgb(125, 207, 255);
  --h5-color: rgb(122, 162, 247);
  --h6-color: rgb(187, 154, 247);
  --heading-formatting: rgb(86, 95, 137);
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
  --interactive-accent: rgb(128, 208, 255);
  --interactive-accent-hover: rgb(122, 162, 247);
  --interactive-accent-hsl: 202, 100%, 75%;
  --interactive-hover: rgb(26, 27, 38);
  --interactive-normal: rgb(22, 22, 30);
  --interactive-success: rgb(158, 206, 106);
  --italic-color: rgb(125, 207, 255);
  --link-color: rgb(187, 154, 247);
  --link-color-hover: rgb(125, 207, 255);
  --link-external-color: rgb(187, 154, 247);
  --link-external-color-hover: rgb(125, 207, 255);
  --link-external-filter: invert(35%) sepia(28%) saturate(681%) hue-rotate(192deg) brightness(94%) contrast(85%);
  --link-unresolved-color: rgb(187, 154, 247);
  --link-unresolved-decoration-color: rgba(128, 208, 255, 0.3);
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
  --metadata-input-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(192, 202, 245);
  --metadata-label-background-active: rgb(41, 46, 66);
  --metadata-label-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(128, 208, 255, 0.15);
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
  --setting-group-heading-color: rgb(192, 202, 245);
  --setting-items-background: rgb(26, 27, 38);
  --setting-items-border-color: rgb(41, 46, 66);
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 208, 255);
  --tab-text-color: rgb(86, 95, 137);
  --tab-text-color-active: rgb(169, 177, 214);
  --tab-text-color-focused: rgb(169, 177, 214);
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8);
  --tab-text-color-focused-active-current: rgb(255, 117, 127);
  --tab-text-color-focused-highlighted: rgb(187, 154, 247);
  --table-add-button-border-color: rgb(41, 46, 66);
  --table-border-color: rgb(41, 46, 66);
  --table-drag-handle-background-active: rgb(128, 208, 255);
  --table-drag-handle-color: rgb(86, 95, 137);
  --table-drag-handle-color-active: rgb(26, 27, 38);
  --table-header-background: rgb(18, 18, 24);
  --table-header-background-hover: rgb(18, 18, 24);
  --table-header-border-color: rgb(41, 46, 66);
  --table-header-color: rgb(192, 202, 245);
  --table-selection: rgba(128, 208, 255, 0.1);
  --table-selection-border-color: rgb(128, 208, 255);
  --table-width: 88cqw;
  --tag-background: rgba(187, 154, 247, 0.15);
  --tag-background-hover: rgba(125, 207, 255, 0.15);
  --tag-border-color: rgba(128, 208, 255, 0.15);
  --tag-border-color-hover: rgba(128, 208, 255, 0.15);
  --tag-color: rgb(187, 154, 247);
  --tag-color-hover: rgb(125, 207, 255);
  --teal: rgb(26, 188, 156);
  --teal_x: 26, 188, 156;
  --terminal_black: rgb(65, 72, 104);
  --terminal_black_x: 65, 72, 104;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 46, 66);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body div#quartz-root {
  background-color: rgb(18, 18, 24);
  color: rgb(192, 202, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .page article p > em, em {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .page article p > i, i {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .page article p > strong, strong {
  color: rgb(125, 207, 255);
  outline: rgb(125, 207, 255) none 0px;
  text-decoration: rgb(125, 207, 255);
  text-decoration-color: rgb(125, 207, 255);
}

body .text-highlight {
  background-color: rgba(255, 158, 100, 0.25);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: line-through rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body p {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration: rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `body a.external, footer a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgb(187, 154, 247);
  text-decoration-color: rgb(187, 154, 247);
}

body a.internal.broken {
  color: rgb(187, 154, 247);
  outline: rgb(187, 154, 247) none 0px;
  text-decoration: underline rgba(128, 208, 255, 0.3);
  text-decoration-color: rgba(128, 208, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(192, 202, 245);
}

body dt {
  color: rgb(192, 202, 245);
}

body ol > li {
  color: rgb(192, 202, 245);
}

body ol.overflow {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ul > li {
  color: rgb(192, 202, 245);
}

body ul.overflow {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(86, 95, 137);
  text-decoration: rgb(86, 95, 137);
}

body blockquote {
  background-color: rgb(22, 22, 30);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body table {
  color: rgb(192, 202, 245);
  width: 643px;
}

body td {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body th {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body tr {
  background-color: rgb(18, 18, 24);
}`,
    code: `body code {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(224, 175, 104);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(224, 175, 104);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(224, 175, 104);
  border-left-color: rgb(224, 175, 104);
  border-right-color: rgb(224, 175, 104);
  border-top-color: rgb(224, 175, 104);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

body pre:has(> code) {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}`,
    images: `body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body figcaption {
  color: rgb(192, 202, 245);
}

body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body img {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .transclude {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .transclude-inner {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 177, 214);
  text-decoration: line-through rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}

body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
}

body .callout[data-callout="abstract"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 117, 127;
  background-color: rgba(255, 117, 127, 0.1);
  border-bottom-color: rgba(255, 117, 127, 0.25);
  border-left-color: rgba(255, 117, 127, 0.25);
  border-right-color: rgba(255, 117, 127, 0.25);
  border-top-color: rgba(255, 117, 127, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 187, 154, 247;
  background-color: rgba(187, 154, 247, 0.1);
  border-bottom-color: rgba(187, 154, 247, 0.25);
  border-left-color: rgba(187, 154, 247, 0.25);
  border-right-color: rgba(187, 154, 247, 0.25);
  border-top-color: rgba(187, 154, 247, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 219, 75, 75;
  background-color: rgba(219, 75, 75, 0.1);
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-left-color: rgba(219, 75, 75, 0.25);
  border-right-color: rgba(219, 75, 75, 0.25);
  border-top-color: rgba(219, 75, 75, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 122, 162, 247;
  background-color: rgba(122, 162, 247, 0.1);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 224, 175, 104;
  background-color: rgba(224, 175, 104, 0.1);
  border-bottom-color: rgba(224, 175, 104, 0.25);
  border-left-color: rgba(224, 175, 104, 0.25);
  border-right-color: rgba(224, 175, 104, 0.25);
  border-top-color: rgba(224, 175, 104, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 169, 177, 214;
  background-color: rgba(36, 40, 59, 0.5);
  border-bottom-color: rgba(169, 177, 214, 0.25);
  border-left-color: rgba(169, 177, 214, 0.25);
  border-right-color: rgba(169, 177, 214, 0.25);
  border-top-color: rgba(169, 177, 214, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 26, 188, 156;
  background-color: rgba(26, 188, 156, 0.1);
  border-bottom-color: rgba(26, 188, 156, 0.25);
  border-left-color: rgba(26, 188, 156, 0.25);
  border-right-color: rgba(26, 188, 156, 0.25);
  border-top-color: rgba(26, 188, 156, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 125, 207, 255;
  background-color: rgba(125, 207, 255, 0.1);
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-left-color: rgba(125, 207, 255, 0.25);
  border-right-color: rgba(125, 207, 255, 0.25);
  border-top-color: rgba(125, 207, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 158, 100;
  background-color: rgba(255, 158, 100, 0.1);
  border-bottom-color: rgba(255, 158, 100, 0.25);
  border-left-color: rgba(255, 158, 100, 0.25);
  border-right-color: rgba(255, 158, 100, 0.25);
  border-top-color: rgba(255, 158, 100, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(41, 46, 66);
  border-bottom-width: 2px;
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-right-width: 2px;
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(187, 154, 247);
}

body h1 {
  color: rgb(255, 117, 127);
}

body h2 {
  color: rgb(224, 175, 104);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 117, 127);
}

body h3 {
  color: rgb(158, 206, 106);
}

body h4 {
  color: rgb(125, 207, 255);
}

body h5 {
  color: rgb(122, 162, 247);
}

body h6 {
  color: rgb(187, 154, 247);
}

body hr {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
}`,
    scrollbars: `body .callout {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-left-color: rgba(122, 162, 247, 0.25);
  border-right-color: rgba(122, 162, 247, 0.25);
  border-top-color: rgba(122, 162, 247, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 18, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(255, 117, 127);
  border-left-color: rgb(255, 117, 127);
  border-right-color: rgb(255, 117, 127);
  border-top-color: rgb(255, 117, 127);
  color: rgb(255, 117, 127);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-left-width: 2px;
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  border-top-width: 2px;
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .breadcrumb-element p {
  color: rgb(86, 95, 137);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .metadata {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

body .page-header h2.page-title {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(192, 202, 245);
  text-decoration: underline dotted rgb(192, 202, 245);
}

body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body sub {
  color: rgb(192, 202, 245);
}

body summary {
  color: rgb(192, 202, 245);
}

body sup {
  color: rgb(192, 202, 245);
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
  --bases-table-cell-background-selected: rgba(15, 135, 204, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(220, 222, 226);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(15, 135, 204);
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
  --blockquote-border-color: rgb(15, 135, 204);
  --blue: rgb(52, 84, 138);
  --blue0: rgb(39, 71, 125);
  --blue0_x: 39, 71, 125;
  --blue_x: 52, 84, 138;
  --blur-background: color-mix(in srgb, rgb(213, 214, 219) 65%, transparent) linear-gradient(rgb(213, 214, 219), color-mix(in srgb, rgb(213, 214, 219) 65%, transparent));
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
  --collapse-icon-color: rgb(150, 153, 163);
  --collapse-icon-color-collapsed: rgb(90, 74, 120);
  --color-accent: rgb(15, 135, 204);
  --color-accent-1: rgb(15, 148, 219);
  --color-accent-2: rgb(15, 165, 235);
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
  --date-background-color: rgb(220, 222, 226);
  --date-color: rgb(52, 84, 138);
  --default-font: '"JetBrains Mono", monospace, "Inter", sans-serif';
  --divider-color: rgb(220, 222, 226);
  --divider-color-hover: rgb(15, 135, 204);
  --dropdown-background: rgb(203, 204, 209);
  --dropdown-background-hover: rgb(213, 214, 219);
  --embed-background: rgb(203, 204, 209);
  --embed-block-shadow-hover: 0 0 0 1px rgb(220, 222, 226), inset 0 0 0 1px rgb(220, 222, 226);
  --embed-border-start: 2px solid rgb(15, 135, 204);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: rgb(52, 59, 88);
  --fg_dark: rgb(39, 46, 75);
  --fg_dark_x: 39, 46, 75;
  --fg_x: 52, 59, 88;
  --file-header-background: rgb(213, 214, 219);
  --file-header-background-focused: rgb(213, 214, 219);
  --file-header-border: 2px solid transparent;
  --file-header-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(203, 204, 209);
  --flair-color: rgb(52, 59, 88);
  --flashing-background: rgba(39, 71, 125, 0.3);
  --font-interface: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --green: rgb(51, 99, 92);
  --green_x: 51, 99, 92;
  --h1-color: rgb(140, 67, 81);
  --h2-color: rgb(143, 94, 21);
  --h3-color: rgb(51, 99, 92);
  --h4-color: rgb(15, 75, 110);
  --h5-color: rgb(52, 84, 138);
  --h6-color: rgb(90, 74, 120);
  --heading-formatting: rgb(150, 153, 163);
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
  --interactive-accent: rgb(15, 135, 204);
  --interactive-accent-hover: rgb(52, 84, 138);
  --interactive-accent-hsl: 202, 86%, 43%;
  --interactive-hover: rgb(213, 214, 219);
  --interactive-normal: rgb(203, 204, 209);
  --interactive-success: rgb(51, 99, 92);
  --italic-color: rgb(15, 75, 110);
  --link-color: rgb(90, 74, 120);
  --link-color-hover: rgb(15, 75, 110);
  --link-external-color: rgb(90, 74, 120);
  --link-external-color-hover: rgb(15, 75, 110);
  --link-external-filter: invert(62%) sepia(9%) saturate(266%) hue-rotate(189deg) brightness(97%) contrast(88%);
  --link-unresolved-color: rgb(90, 74, 120);
  --link-unresolved-decoration-color: rgba(15, 135, 204, 0.3);
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
  --metadata-input-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(52, 59, 88);
  --metadata-label-background-active: rgb(220, 222, 226);
  --metadata-label-font: '??', '??', '"JetBrains Mono", monospace, "Inter", sans-serif', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --nav-item-background-selected: rgba(15, 135, 204, 0.15);
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
  --setting-group-heading-color: rgb(52, 59, 88);
  --setting-items-background: rgb(213, 214, 219);
  --setting-items-border-color: rgb(220, 222, 226);
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(15, 135, 204);
  --tab-text-color: rgb(150, 153, 163);
  --tab-text-color-active: rgb(39, 46, 75);
  --tab-text-color-focused: rgb(39, 46, 75);
  --tab-text-color-focused-active: rgba(140, 67, 81, 0.8);
  --tab-text-color-focused-active-current: rgb(140, 67, 81);
  --tab-text-color-focused-highlighted: rgb(90, 74, 120);
  --table-add-button-border-color: rgb(220, 222, 226);
  --table-border-color: rgb(220, 222, 226);
  --table-drag-handle-background-active: rgb(15, 135, 204);
  --table-drag-handle-color: rgb(150, 153, 163);
  --table-drag-handle-color-active: rgb(213, 214, 219);
  --table-header-background: rgb(188, 189, 194);
  --table-header-background-hover: rgb(188, 189, 194);
  --table-header-border-color: rgb(220, 222, 226);
  --table-header-color: rgb(52, 59, 88);
  --table-selection: rgba(15, 135, 204, 0.1);
  --table-selection-border-color: rgb(15, 135, 204);
  --table-width: 88cqw;
  --tag-background: rgba(90, 74, 120, 0.15);
  --tag-background-hover: rgba(15, 75, 110, 0.15);
  --tag-border-color: rgba(15, 135, 204, 0.15);
  --tag-border-color-hover: rgba(15, 135, 204, 0.15);
  --tag-color: rgb(90, 74, 120);
  --tag-color-hover: rgb(15, 75, 110);
  --teal: rgb(22, 103, 117);
  --teal_x: 22, 103, 117;
  --terminal_black: rgb(15, 15, 20);
  --terminal_black_x: 15, 15, 20;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(203, 204, 209);
  color: rgb(52, 59, 88);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(213, 214, 219);
  color: rgb(52, 59, 88);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(203, 204, 209);
  color: rgb(52, 59, 88);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(220, 222, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(203, 204, 209);
  border-left-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body div#quartz-root {
  background-color: rgb(213, 214, 219);
  color: rgb(52, 59, 88);
}`,
    typography: `body .page article p > b, b {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

body .page article p > em, em {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

body .page article p > i, i {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

body .page article p > strong, strong {
  color: rgb(15, 75, 110);
  outline: rgb(15, 75, 110) none 0px;
  text-decoration: rgb(15, 75, 110);
  text-decoration-color: rgb(15, 75, 110);
}

body .text-highlight {
  background-color: rgba(150, 80, 39, 0.25);
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body del {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: line-through rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body p {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(39, 46, 75) none 0px;
  text-decoration: rgb(39, 46, 75);
  text-decoration-color: rgb(39, 46, 75);
}`,
    links: `body a.external, footer a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgb(90, 74, 120);
  text-decoration-color: rgb(90, 74, 120);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgb(90, 74, 120);
  text-decoration-color: rgb(90, 74, 120);
}

body a.internal.broken {
  color: rgb(90, 74, 120);
  outline: rgb(90, 74, 120) none 0px;
  text-decoration: underline rgba(15, 135, 204, 0.3);
  text-decoration-color: rgba(15, 135, 204, 0.3);
}`,
    lists: `body dd {
  color: rgb(52, 59, 88);
}

body dt {
  color: rgb(52, 59, 88);
}

body ol > li {
  color: rgb(52, 59, 88);
}

body ol.overflow {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body ul > li {
  color: rgb(52, 59, 88);
}

body ul.overflow {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(150, 153, 163);
  text-decoration: rgb(150, 153, 163);
}

body blockquote {
  background-color: rgb(203, 204, 209);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body table {
  color: rgb(52, 59, 88);
  width: 643px;
}

body td {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body th {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body tr {
  background-color: rgb(188, 189, 194);
}`,
    code: `body code {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body pre > code > [data-line] {
  border-left-color: rgb(143, 94, 21);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(143, 94, 21);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(143, 94, 21);
  border-left-color: rgb(143, 94, 21);
  border-right-color: rgb(143, 94, 21);
  border-top-color: rgb(143, 94, 21);
}

body pre > code, pre:has(> code) {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}

body pre:has(> code) {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
}`,
    images: `body audio {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body figcaption {
  color: rgb(52, 59, 88);
}

body figure {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body img {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body video {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    embeds: `body .file-embed {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
}

body .footnotes {
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body .transclude {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(15, 135, 204);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body .transclude-inner {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(15, 135, 204);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(39, 46, 75);
  text-decoration: line-through rgb(39, 46, 75);
  text-decoration-color: rgb(39, 46, 75);
}

body input[type=checkbox] {
  border-bottom-color: rgb(150, 153, 163);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(150, 153, 163);
  border-right-color: rgb(150, 153, 163);
  border-top-color: rgb(150, 153, 163);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='*'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='-'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='/'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='>'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='?'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='I'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='S'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='b'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='c'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='d'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='f'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='i'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='k'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='l'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='p'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='u'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body li.task-list-item[data-task='w'] {
  color: rgb(52, 59, 88);
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(52, 84, 138);
  border-left-color: rgb(52, 84, 138);
  border-right-color: rgb(52, 84, 138);
  border-top-color: rgb(52, 84, 138);
}

body .callout[data-callout="abstract"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 140, 67, 81;
  background-color: rgba(140, 67, 81, 0.1);
  border-bottom-color: rgba(140, 67, 81, 0.25);
  border-left-color: rgba(140, 67, 81, 0.25);
  border-right-color: rgba(140, 67, 81, 0.25);
  border-top-color: rgba(140, 67, 81, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 115, 42, 56;
  background-color: rgba(115, 42, 56, 0.1);
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 90, 74, 120;
  background-color: rgba(90, 74, 120, 0.1);
  border-bottom-color: rgba(90, 74, 120, 0.25);
  border-left-color: rgba(90, 74, 120, 0.25);
  border-right-color: rgba(90, 74, 120, 0.25);
  border-top-color: rgba(90, 74, 120, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 115, 42, 56;
  background-color: rgba(115, 42, 56, 0.1);
  border-bottom-color: rgba(115, 42, 56, 0.25);
  border-left-color: rgba(115, 42, 56, 0.25);
  border-right-color: rgba(115, 42, 56, 0.25);
  border-top-color: rgba(115, 42, 56, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 52, 84, 138;
  background-color: rgba(52, 84, 138, 0.1);
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 52, 84, 138;
  background-color: rgba(52, 84, 138, 0.1);
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 143, 94, 21;
  background-color: rgba(143, 94, 21, 0.1);
  border-bottom-color: rgba(143, 94, 21, 0.25);
  border-left-color: rgba(143, 94, 21, 0.25);
  border-right-color: rgba(143, 94, 21, 0.25);
  border-top-color: rgba(143, 94, 21, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 39, 46, 75;
  background-color: rgba(195, 197, 201, 0.5);
  border-bottom-color: rgba(39, 46, 75, 0.25);
  border-left-color: rgba(39, 46, 75, 0.25);
  border-right-color: rgba(39, 46, 75, 0.25);
  border-top-color: rgba(39, 46, 75, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 22, 103, 117;
  background-color: rgba(22, 103, 117, 0.1);
  border-bottom-color: rgba(22, 103, 117, 0.25);
  border-left-color: rgba(22, 103, 117, 0.25);
  border-right-color: rgba(22, 103, 117, 0.25);
  border-top-color: rgba(22, 103, 117, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 15, 75, 110;
  background-color: rgba(15, 75, 110, 0.1);
  border-bottom-color: rgba(15, 75, 110, 0.25);
  border-left-color: rgba(15, 75, 110, 0.25);
  border-right-color: rgba(15, 75, 110, 0.25);
  border-top-color: rgba(15, 75, 110, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 150, 80, 39;
  background-color: rgba(150, 80, 39, 0.1);
  border-bottom-color: rgba(150, 80, 39, 0.25);
  border-left-color: rgba(150, 80, 39, 0.25);
  border-right-color: rgba(150, 80, 39, 0.25);
  border-top-color: rgba(150, 80, 39, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(52, 59, 88);
  outline: rgb(52, 59, 88) none 0px;
  text-decoration: rgb(52, 59, 88);
  text-decoration-color: rgb(52, 59, 88);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(52, 59, 88);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(52, 59, 88);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(220, 222, 226);
  border-bottom-width: 2px;
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-right-width: 2px;
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 204, 209);
  border-bottom-width: 2px;
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(220, 222, 226);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(220, 222, 226);
  color: rgb(52, 59, 88);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(90, 74, 120, 0.15);
  border-bottom-color: rgba(15, 135, 204, 0.15);
  border-left-color: rgba(15, 135, 204, 0.15);
  border-right-color: rgba(15, 135, 204, 0.15);
  border-top-color: rgba(15, 135, 204, 0.15);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(90, 74, 120);
}

body h1 {
  color: rgb(140, 67, 81);
}

body h2 {
  color: rgb(143, 94, 21);
}

body h2.page-title, h2.page-title a {
  color: rgb(140, 67, 81);
}

body h3 {
  color: rgb(51, 99, 92);
}

body h4 {
  color: rgb(15, 75, 110);
}

body h5 {
  color: rgb(52, 84, 138);
}

body h6 {
  color: rgb(90, 74, 120);
}

body hr {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
}`,
    scrollbars: `body .callout {
  --callout-color: 52, 84, 138;
  border-bottom-color: rgba(52, 84, 138, 0.25);
  border-left-color: rgba(52, 84, 138, 0.25);
  border-right-color: rgba(52, 84, 138, 0.25);
  border-top-color: rgba(52, 84, 138, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

body ::-webkit-scrollbar-corner {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}

body ::-webkit-scrollbar-track {
  background: rgb(213, 214, 219) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(213, 214, 219);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(39, 46, 75);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(220, 222, 226);
  border-bottom-color: rgb(140, 67, 81);
  border-left-color: rgb(140, 67, 81);
  border-right-color: rgb(140, 67, 81);
  border-top-color: rgb(140, 67, 81);
  color: rgb(140, 67, 81);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}`,
    footer: `body footer {
  background-color: rgb(203, 204, 209);
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-left-width: 2px;
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  border-top-width: 2px;
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body li.section-li > .section .meta {
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(39, 46, 75);
  text-decoration: rgb(39, 46, 75);
}

body ul.section-ul {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

body .darkmode svg {
  color: rgb(39, 46, 75);
  stroke: rgb(39, 46, 75);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

body .breadcrumb-element p {
  color: rgb(150, 153, 163);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body .metadata {
  border-bottom-color: rgb(220, 222, 226);
  border-left-color: rgb(220, 222, 226);
  border-right-color: rgb(220, 222, 226);
  border-top-color: rgb(220, 222, 226);
  color: rgb(39, 46, 75);
}

body .metadata-properties {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
}

body .navigation-progress {
  background-color: rgb(203, 204, 209);
}

body .page-header h2.page-title {
  color: rgb(52, 59, 88);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(52, 59, 88);
  text-decoration: underline dotted rgb(52, 59, 88);
}

body details {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body input[type=text] {
  border-bottom-color: rgb(39, 46, 75);
  border-left-color: rgb(39, 46, 75);
  border-right-color: rgb(39, 46, 75);
  border-top-color: rgb(39, 46, 75);
  color: rgb(39, 46, 75);
  font-family: "??", "??", "\\"JetBrains Mono\\", monospace, \\"Inter\\", sans-serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(195, 197, 201);
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
  color: rgb(52, 59, 88);
}

body progress {
  border-bottom-color: rgb(52, 59, 88);
  border-left-color: rgb(52, 59, 88);
  border-right-color: rgb(52, 59, 88);
  border-top-color: rgb(52, 59, 88);
}

body sub {
  color: rgb(52, 59, 88);
}

body summary {
  color: rgb(52, 59, 88);
}

body sup {
  color: rgb(52, 59, 88);
}`,
  },
};
