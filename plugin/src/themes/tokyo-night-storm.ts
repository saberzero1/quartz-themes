import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night-storm",
    modes: ["dark"],
    variations: [],
    fonts: ["anonymous-pro", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 202;
  --accent-l: 75%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(128, 208, 255, 0.1);
  --background-modifier-border: rgb(65, 72, 104);
  --background-modifier-border-focus: rgb(65, 72, 104);
  --background-modifier-border-hover: rgb(65, 72, 104);
  --background-modifier-cover: rgba(36, 40, 59, 0.8);
  --background-modifier-error: rgba(255, 117, 127, 0.8);
  --background-modifier-error-hover: rgb(255, 117, 127);
  --background-modifier-form-field: rgb(36, 40, 59);
  --background-modifier-form-field-highlighted: rgb(36, 40, 59);
  --background-modifier-form-field-hover: rgb(36, 40, 59);
  --background-modifier-hover: rgb(65, 72, 104);
  --background-modifier-message: rgba(65, 72, 104, 0.9);
  --background-modifier-success: rgb(158, 206, 106);
  --background-primary: rgb(36, 40, 59);
  --background-primary-alt: rgb(36, 40, 59);
  --background-secondary: rgb(36, 40, 59);
  --background-secondary-alt: rgb(36, 40, 59);
  --bases-cards-background: rgb(36, 40, 59);
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: rgb(36, 40, 59);
  --bases-cards-shadow: 0 0 0 1px rgb(65, 72, 104);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(65, 72, 104);
  --bases-embed-border-color: rgb(65, 72, 104);
  --bases-group-heading-property-color: rgb(169, 177, 214);
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: rgb(65, 72, 104);
  --bases-table-cell-background-active: rgb(36, 40, 59);
  --bases-table-cell-background-disabled: rgb(36, 40, 59);
  --bases-table-cell-background-selected: rgba(128, 208, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(65, 72, 104);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(128, 208, 255);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: rgb(36, 40, 59);
  --bases-table-header-background: rgb(36, 40, 59);
  --bases-table-header-background-hover: rgb(65, 72, 104);
  --bases-table-header-color: rgb(169, 177, 214);
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: rgb(36, 40, 59);
  --bases-table-summary-background-hover: rgb(65, 72, 104);
  --bg: rgb(36, 40, 59);
  --bg_dark: rgb(36, 40, 59);
  --bg_dark2: rgb(18, 18, 24);
  --bg_dark2_x: 18, 18, 24;
  --bg_dark_x: 36, 40, 59;
  --bg_highlight: rgb(65, 72, 104);
  --bg_highlight_dark: rgb(35, 35, 55);
  --bg_highlight_dark_x: 35, 35, 55;
  --bg_highlight_x: 65, 72, 104;
  --bg_x: 36, 40, 59;
  --blockquote-background-color: rgb(36, 40, 59);
  --blockquote-border-color: rgb(128, 208, 255);
  --blue: rgb(122, 162, 247);
  --blue0: rgb(61, 89, 161);
  --blue0_x: 61, 89, 161;
  --blue_x: 122, 162, 247;
  --blur-background: color-mix(in srgb, rgb(36, 40, 59) 65%, transparent) linear-gradient(rgb(36, 40, 59), color-mix(in srgb, rgb(36, 40, 59) 65%, transparent));
  --bold-color: rgb(128, 208, 255);
  --border-width: 2px;
  --callout-quote: rgb(169, 177, 214);
  --canvas-background: rgb(36, 40, 59);
  --canvas-card-label-color: rgb(86, 95, 137);
  --caret-color: rgb(192, 202, 245);
  --checkbox-border-color: rgb(86, 95, 137);
  --checkbox-border-color-hover: rgb(86, 95, 137);
  --checkbox-color: rgb(86, 95, 137);
  --checkbox-color-hover: rgb(86, 95, 137);
  --checkbox-marker-color: rgb(36, 40, 59);
  --checklist-done-color: rgba(rgb(158, 206, 106), 0.5);
  --code-background: rgb(35, 35, 55);
  --code-border-color: rgb(65, 72, 104);
  --code-bracket-background: rgb(65, 72, 104);
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
  --code-value: rgb(157, 124, 21);
  --collapse-icon-color: rgb(86, 95, 137);
  --collapse-icon-color-collapsed: hsl(199, 102%, 86.25%);
  --color-accent: rgb(128, 208, 255);
  --color-accent-1: hsl(199, 102%, 86.25%);
  --color-accent-2: hsl(197, 105%, 96.75%);
  --color-accent-hsl: 202, 100%, 75%;
  --color-blue: rgb(122, 162, 247);
  --color-cyan: rgb(125, 207, 255);
  --color-green: rgb(158, 206, 106);
  --color-orange: rgb(255, 158, 100);
  --color-pink: rgb(187, 154, 247);
  --color-purple: rgb(157, 124, 21);
  --color-red: rgb(255, 117, 127);
  --color-yellow: rgb(224, 175, 104);
  --color_blue_rgb: 122, 162, 247;
  --color_cyan_rgb: 125, 207, 255;
  --color_green_rgb: 158, 206, 106;
  --color_orange_rgb: 255, 158, 100;
  --color_pink_rgb: 187, 154, 247;
  --color_purple_rgb: 157, 124, 21;
  --color_red_rgb: 255, 117, 127;
  --color_yellow_rgb: 224, 175, 104;
  --comment: rgb(86, 95, 137);
  --comment_x: 86, 95, 137;
  --cyan: rgb(125, 207, 255);
  --cyan_hsl: 202 100% 75%;
  --cyan_x: 125, 207, 255;
  --default-font: "JetBrains Mono Nerd Font", monospace;
  --divider-color: rgb(65, 72, 104);
  --divider-color-hover: rgb(128, 208, 255);
  --dropdown-background: rgb(36, 40, 59);
  --dropdown-background-hover: rgb(36, 40, 59);
  --embed-background: rgb(36, 40, 59);
  --embed-block-shadow-hover: 0 0 0 1px rgb(65, 72, 104), inset 0 0 0 1px rgb(65, 72, 104);
  --embed-border-start: 2px solid rgb(128, 208, 255);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --external-link-filter: invert(35%) sepia(28%) saturate(681%)
    hue-rotate(192deg) brightness(94%) contrast(85%);
  --fg: rgb(192, 202, 245);
  --fg_dark: rgb(169, 177, 214);
  --fg_dark_x: 169, 177, 214;
  --fg_x: 192, 202, 245;
  --file-header-background: rgb(36, 40, 59);
  --file-header-background-focused: rgb(36, 40, 59);
  --file-header-border: 2px solid transparent;
  --file-header-font: '??', '??', "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(36, 40, 59);
  --flair-color: rgb(192, 202, 245);
  --flashing-background: rgba(61, 89, 161, 0.3);
  --font-interface: '??', '??', "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(65, 72, 104);
  --footnote-divider-width: 2px;
  --footnote-id-color: rgb(169, 177, 214);
  --footnote-id-color-no-occurrences: rgb(86, 95, 137);
  --footnote-input-background-active: rgb(65, 72, 104);
  --graph-line: rgb(86, 95, 137);
  --graph-node: rgb(192, 202, 245);
  --graph-node-attachment: rgb(122, 162, 247);
  --graph-node-focused: hsl(199, 102%, 86.25%);
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
  --hr-color: rgb(65, 72, 104);
  --icon-color: rgb(169, 177, 214);
  --icon-color-active: hsl(199, 102%, 86.25%);
  --icon-color-focused: rgb(122, 162, 247);
  --icon-color-hover: rgb(224, 175, 104);
  --indentation-guide-color: rgb(86, 95, 137);
  --indentation-guide-color-active: rgb(86, 95, 137);
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: rgb(187, 154, 247);
  --input-border-width: 2px;
  --input-date-separator: rgb(86, 95, 137);
  --input-placeholder-color: rgb(86, 95, 137);
  --interactive-accent: rgb(128, 208, 255);
  --interactive-accent-hover: hsl(199, 102%, 86.25%);
  --interactive-accent-hsl: 202, 100%, 75%;
  --interactive-hover: rgb(36, 40, 59);
  --interactive-normal: rgb(36, 40, 59);
  --interactive-success: rgb(158, 206, 106);
  --italic-color: rgb(128, 208, 255);
  --link-color: hsl(199, 102%, 86.25%);
  --link-color-hover: hsl(197, 105%, 96.75%);
  --link-external-color: hsl(199, 102%, 86.25%);
  --link-external-color-hover: hsl(197, 105%, 96.75%);
  --link-unresolved-color: hsl(199, 102%, 86.25%);
  --link-unresolved-decoration-color: rgba(128, 208, 255, 0.3);
  --list-marker-color: rgb(86, 95, 137);
  --list-marker-color-collapsed: hsl(199, 102%, 86.25%);
  --list-marker-color-hover: rgb(169, 177, 214);
  --magent_hsl: 261 85% 79%;
  --magenta: rgb(187, 154, 247);
  --magenta_x: 187, 154, 247;
  --menu-background: rgb(36, 40, 59);
  --menu-border-color: rgb(65, 72, 104);
  --menu-border-width: 2px;
  --mermaid-actor: rgb(169, 177, 214);
  --mermaid-loopline: rgb(122, 162, 247);
  --mermaid-note: rgb(61, 89, 161);
  --metadata-border-color: rgb(65, 72, 104);
  --metadata-divider-color: rgb(65, 72, 104);
  --metadata-input-background-active: rgb(65, 72, 104);
  --metadata-input-font: '??', '??', "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(192, 202, 245);
  --metadata-label-background-active: rgb(65, 72, 104);
  --metadata-label-font: '??', '??', "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(169, 177, 214);
  --metadata-label-text-color-hover: rgb(169, 177, 214);
  --metadata-property-background-active: rgb(65, 72, 104);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(65, 72, 104);
  --metadata-property-box-shadow-hover: 0 0 0 2px rgb(65, 72, 104);
  --modal-background: rgb(36, 40, 59);
  --modal-border-color: rgb(65, 72, 104);
  --modal-border-width: 2px;
  --nav-collapse-icon-color: rgb(86, 95, 137);
  --nav-collapse-icon-color-collapsed: rgb(86, 95, 137);
  --nav-file-tag: rgba(224, 175, 104, 0.9);
  --nav-heading-color: rgb(192, 202, 245);
  --nav-heading-color-collapsed: rgb(86, 95, 137);
  --nav-heading-color-collapsed-hover: rgb(169, 177, 214);
  --nav-heading-color-hover: rgb(192, 202, 245);
  --nav-indentation-guide-color: rgb(65, 72, 104);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgb(65, 72, 104);
  --nav-item-background-hover: rgb(65, 72, 104);
  --nav-item-background-selected: rgba(128, 208, 255, 0.15);
  --nav-item-color: rgb(169, 177, 214);
  --nav-item-color-active: rgb(255, 117, 127);
  --nav-item-color-highlighted: hsl(199, 102%, 86.25%);
  --nav-item-color-hover: rgb(192, 202, 245);
  --nav-item-color-selected: rgb(192, 202, 245);
  --nav-tag-color: rgb(86, 95, 137);
  --nav-tag-color-active: rgb(169, 177, 214);
  --nav-tag-color-hover: rgb(169, 177, 214);
  --orange: rgb(255, 158, 100);
  --orange_x: 255, 158, 100;
  --pdf-background: rgb(36, 40, 59);
  --pdf-page-background: rgb(36, 40, 59);
  --pdf-shadow: 0 0 0 1px rgb(65, 72, 104);
  --pdf-sidebar-background: rgb(36, 40, 59);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 72, 104);
  --pill-border-color: rgb(65, 72, 104);
  --pill-border-color-hover: rgb(65, 72, 104);
  --pill-border-width: 2px;
  --pill-color: rgb(169, 177, 214);
  --pill-color-hover: rgb(192, 202, 245);
  --pill-color-remove: rgb(86, 95, 137);
  --pill-color-remove-hover: hsl(199, 102%, 86.25%);
  --prompt-background: rgb(36, 40, 59);
  --prompt-border-color: rgb(65, 72, 104);
  --prompt-border-width: 2px;
  --purple: rgb(157, 124, 21);
  --purple_x: 157, 124, 21;
  --raised-background: color-mix(in srgb, rgb(36, 40, 59) 65%, transparent) linear-gradient(rgb(36, 40, 59), color-mix(in srgb, rgb(36, 40, 59) 65%, transparent));
  --red: rgb(255, 117, 127);
  --red1: rgb(219, 75, 75);
  --red1_x: 219, 75, 75;
  --red_x: 255, 117, 127;
  --ribbon-background: rgb(36, 40, 59);
  --ribbon-background-collapsed: rgb(36, 40, 59);
  --search-clear-button-color: rgb(169, 177, 214);
  --search-icon-color: rgb(169, 177, 214);
  --search-result-background: rgb(36, 40, 59);
  --setting-group-heading-color: rgb(192, 202, 245);
  --setting-items-background: rgb(36, 40, 59);
  --setting-items-border-color: rgb(65, 72, 104);
  --slider-thumb-border-color: rgb(65, 72, 104);
  --slider-thumb-border-width: 2px;
  --slider-track-background: rgb(65, 72, 104);
  --status-bar-background: rgb(36, 40, 59);
  --status-bar-border-color: rgb(65, 72, 104);
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: rgb(169, 177, 214);
  --suggestion-background: rgb(36, 40, 59);
  --sync-avatar-color-1: rgb(255, 117, 127);
  --sync-avatar-color-2: rgb(255, 158, 100);
  --sync-avatar-color-3: rgb(224, 175, 104);
  --sync-avatar-color-4: rgb(158, 206, 106);
  --sync-avatar-color-5: rgb(125, 207, 255);
  --sync-avatar-color-6: rgb(122, 162, 247);
  --sync-avatar-color-7: rgb(157, 124, 21);
  --sync-avatar-color-8: rgb(187, 154, 247);
  --tab-background-active: rgb(36, 40, 59);
  --tab-container-background: rgb(36, 40, 59);
  --tab-divider-color: rgb(65, 72, 104);
  --tab-outline-color: rgb(65, 72, 104);
  --tab-switcher-background: rgb(36, 40, 59);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(36, 40, 59), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(128, 208, 255);
  --tab-text-color: rgb(86, 95, 137);
  --tab-text-color-active: rgb(169, 177, 214);
  --tab-text-color-focused: rgb(169, 177, 214);
  --tab-text-color-focused-active: rgba(255, 117, 127, 0.8);
  --tab-text-color-focused-active-current: rgb(255, 117, 127);
  --tab-text-color-focused-highlighted: hsl(199, 102%, 86.25%);
  --table-add-button-border-color: rgb(65, 72, 104);
  --table-border-color: rgb(65, 72, 104);
  --table-drag-handle-background-active: rgb(128, 208, 255);
  --table-drag-handle-color: rgb(86, 95, 137);
  --table-drag-handle-color-active: rgb(36, 40, 59);
  --table-header-background: rgb(36, 40, 59);
  --table-header-background-hover: rgb(18, 18, 24);
  --table-header-border-color: rgb(65, 72, 104);
  --table-header-color: rgb(192, 202, 245);
  --table-row-alt-background: rgb(36, 40, 59);
  --table-selection: rgba(128, 208, 255, 0.1);
  --table-selection-border-color: rgb(128, 208, 255);
  --tag-background: rgba(187, 154, 247, 0.15);
  --tag-background-hover: rgba(128, 208, 255, 0.2);
  --tag-border-color: rgba(128, 208, 255, 0.15);
  --tag-border-color-hover: rgba(128, 208, 255, 0.15);
  --tag-color: rgb(187, 154, 247);
  --tag-color-hover: hsl(199, 102%, 86.25%);
  --teal: rgb(26, 188, 156);
  --teal_x: 26, 188, 156;
  --terminal_black: rgb(65, 72, 104);
  --terminal_black_x: 65, 72, 104;
  --text-accent: hsl(199, 102%, 86.25%);
  --text-accent-hover: hsl(197, 105%, 96.75%);
  --text-error: rgb(219, 75, 75);
  --text-error-hover: rgb(255, 117, 127);
  --text-faint: rgb(86, 95, 137);
  --text-highlight-bg: rgba(255, 158, 100, 0.4);
  --text-highlight-fg: rgb(36, 40, 59);
  --text-muted: rgb(169, 177, 214);
  --text-normal: rgb(192, 202, 245);
  --text-on-accent: rgb(36, 40, 59);
  --text-selection: rgba(61, 89, 161, 0.6);
  --text-success: rgb(158, 206, 106);
  --text-warning: rgb(255, 158, 100);
  --titlebar-background: rgb(36, 40, 59);
  --titlebar-background-focused: rgb(36, 40, 59);
  --titlebar-border-color: rgb(65, 72, 104);
  --titlebar-text-color: rgb(169, 177, 214);
  --titlebar-text-color-focused: rgb(187, 154, 247);
  --unknown: #ffffff;
  --vault-profile-color: rgb(192, 202, 245);
  --vault-profile-color-hover: rgb(192, 202, 245);
  --yellow: rgb(224, 175, 104);
  --yellow_x: 224, 175, 104;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 72, 104);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 40, 59);
  border-left-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

body div#quartz-root {
  background-color: rgb(36, 40, 59);
  color: rgb(192, 202, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration: rgb(128, 208, 255);
  text-decoration-color: rgb(128, 208, 255);
}

body .page article p > em, em {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration: rgb(128, 208, 255);
  text-decoration-color: rgb(128, 208, 255);
}

body .page article p > i, i {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration: rgb(128, 208, 255);
  text-decoration-color: rgb(128, 208, 255);
}

body .page article p > strong, strong {
  color: rgb(128, 208, 255);
  outline: rgb(128, 208, 255) none 0px;
  text-decoration: rgb(128, 208, 255);
  text-decoration-color: rgb(128, 208, 255);
}

body .text-highlight {
  background-color: rgba(255, 158, 100, 0.4);
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
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(169, 177, 214) none 0px;
  text-decoration: rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `body a.external, footer a {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
  text-decoration: underline rgb(185, 233, 255);
  text-decoration-color: rgb(185, 233, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
  text-decoration: underline rgb(185, 233, 255);
  text-decoration-color: rgb(185, 233, 255);
}

body a.internal.broken {
  color: rgb(185, 233, 255);
  outline: rgb(185, 233, 255) none 0px;
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
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ul > li {
  color: rgb(192, 202, 245);
}

body ul.overflow {
  background-color: rgb(36, 40, 59);
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
  background-color: rgb(36, 40, 59);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body table {
  color: rgb(192, 202, 245);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(36, 40, 59);
}

body td {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

body th {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

body tr {
  background-color: rgb(36, 40, 59);
}`,
    code: `body code {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
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
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
}

body pre:has(> code) {
  background-color: rgb(35, 35, 55);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
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
  background-color: rgb(36, 40, 59);
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
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .transclude-inner {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(128, 208, 255);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(192, 202, 245);
  text-decoration: line-through rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
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
    callouts: `body .callout[data-callout="quote"] {
  --callout-color: rgb(169, 177, 214);
  background-color: rgba(35, 35, 55, 0.5);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    search: `body .search > .search-button {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
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
  background-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(65, 72, 104);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-right-width: 2px;
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 40, 59);
  border-bottom-width: 2px;
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(65, 72, 104);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(65, 72, 104);
  color: rgb(192, 202, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 154, 247, 0.15);
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-left-color: rgba(128, 208, 255, 0.15);
  border-right-color: rgba(128, 208, 255, 0.15);
  border-top-color: rgba(128, 208, 255, 0.15);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(187, 154, 247);
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
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 40, 59) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 40, 59);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(65, 72, 104);
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
  background-color: rgb(36, 40, 59);
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-left-width: 2px;
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
  border-top-width: 2px;
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .metadata {
  border-bottom-color: rgb(65, 72, 104);
  border-left-color: rgb(65, 72, 104);
  border-right-color: rgb(65, 72, 104);
  border-top-color: rgb(65, 72, 104);
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
  background-color: rgb(36, 40, 59);
}

body .page-header h2.page-title {
  color: rgb(192, 202, 245);
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", "JetBrains Mono Nerd Font", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(35, 35, 55);
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
  light: {},
};
